import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as cities from './cities.json';
import axios from 'axios';
import * as moment from 'moment';

admin.initializeApp();

const db = admin.firestore();

export const loadCityData = functions
  .runWith({ timeoutSeconds: 300, memory: '1GB' })
  .https.onRequest(async (req, res) => {
    try {
      console.log('Started import');
      await cities.reduce(async (promise, city) => {
        await promise;
        await db.collection('baseCities').add(city);
      }, Promise.resolve());
      console.log(`Imported ${cities.length} cities`);
      res.status(201);
    } catch (err) {
      console.log(err);
    }
  });

export const weatherFetch = functions
  .runWith({
    timeoutSeconds: 300,
    memory: '1GB',
  })
  .https.onRequest(async (req, res) => {
    try {
      const citiesRef = db
        .collection('baseCities')
        .where('weatherFetched', '==', false)
        .limit(4);
      const snapshot = await citiesRef.get();
      const theseCities: any[] = [];
      snapshot.forEach(doc => {
        theseCities.push(doc.data());
      });
      const dates: any[] = [];
      const months = [
        {
          month: '01',
          end: '31',
        },
        {
          month: '02',
          end: '28',
        },
        {
          month: '03',
          end: '31',
        },
        {
          month: '04',
          end: '30',
        },
        {
          month: '05',
          end: '31',
        },
        {
          month: '06',
          end: '30',
        },
        {
          month: '07',
          end: '31',
        },
        {
          month: '08',
          end: '31',
        },
        {
          month: '09',
          end: '30',
        },
        {
          month: '10',
          end: '31',
        },
        {
          month: '11',
          end: '30',
        },
        {
          month: '12',
          end: '31',
        },
      ];

      let year = 2008;

      for (let i = 1; i <= 10; i++) {
        for (const month in months) {
          dates.push({
            start: `${year}-${months[month].month}-01`,
            end: `${year}-${months[month].month}-${months[month].end}`,
          });
        }
        year++;
      }

      console.log(theseCities);

      await theseCities.reduce(async (promise, city) => {
        await promise;
        const wwoFetch = dates.map(async date => {
          const url = `http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=${
            functions.config().wwo.key
          }&q=${city.lat},${city.long}&format=json&date=${date.start}&enddate=${
            date.end
          }&includelocation=yes&tp=24`;

          const response = await axios.get(url);

          const { weather } = response.data.data;

          const daily = weather.map((day: any) => {
            return {
              date: day.date,
              maxTemp: Number(day.maxtempF),
              minTemp: Number(day.mintempF),
              avgTemp: Number(day.avgtempF),
              totalSnow: Number(day.totalSnow_cm),
              sunHours: Number(day.sunHour),
              uvIndex: Number(day.uvIndex),
              precip: Number(day.hourly[0].precipMM),
              humidity: Number(day.hourly[0].humidity),
              dewPoint: Number(day.hourly[0].DewPointF),
              heatIndex: Number(day.hourly[0].HeatIndexF),
              windChill: Number(day.hourly[0].WindChillF),
              feelsLike: Number(day.hourly[0].FeelsLikeF),
            };
          });
          return [...daily];
        });

        const data = await Promise.all(wwoFetch);

        const weatherList: object[] = [];

        data.forEach(item => weatherList.push(...item));

        const weatherFormat = weatherList.reduce((acc: any, date: any) => {
          const month = moment(date.date, 'YYYY-MM-DD').format('MMM');
          const day = moment(date.date, 'YYYY-MM-DD').format('DD');
          if (!acc[month]) {
            acc[month] = {};
          }
          if (!acc[month][day]) {
            return {
              ...acc,
              [month]: {
                ...acc[month],
                [day]: {
                  maxTemp: [date.maxTemp],
                  minTemp: [date.minTemp],
                  avgTemp: [date.avgTemp],
                  totalSnow: [date.totalSnow],
                  sunHours: [date.sunHours],
                  uvIndex: [date.uvIndex],
                  precip: [date.precip],
                  humidity: [date.humidity],
                  dewPoint: [date.dewPoint],
                  heatIndex: [date.heatIndex],
                  windChill: [date.windChill],
                  feelsLike: [date.feelsLike],
                },
              },
            };
          }
          return {
            ...acc,
            [month]: {
              ...acc[month],
              [day]: {
                ...acc[month][day],
                maxTemp: [...acc[month][day].maxTemp, date.maxTemp],
                minTemp: [...acc[month][day].minTemp, date.minTemp],
                avgTemp: [...acc[month][day].avgTemp, date.avgTemp],
                totalSnow: [...acc[month][day].totalSnow, date.totalSnow],
                sunHours: [...acc[month][day].sunHours, date.sunHours],
                uvIndex: [...acc[month][day].uvIndex, date.uvIndex],
                precip: [...acc[month][day].precip, date.precip],
                humidity: [...acc[month][day].humidity, date.humidity],
                dewPoint: [...acc[month][day].dewPoint, date.dewPoint],
                heatIndex: [...acc[month][day].heatIndex, date.heatIndex],
                windChill: [...acc[month][day].windChill, date.windChill],
                feelsLike: [...acc[month][day].feelsLike, date.feelsLike],
              },
            },
          };
        }, {});

        for (const month in weatherFormat) {
          for (const day in weatherFormat[month]) {
            for (const key in weatherFormat[month][day]) {
              weatherFormat[month][day][key] = Math.ceil(
                weatherFormat[month][day][key].reduce(
                  (acc: any, cur: any) => acc + cur,
                ) / weatherFormat[month][day][key].length,
              );
              if (!weatherFormat[month][key]) {
                weatherFormat[month][key] = [];
              }
              weatherFormat[month][key].push(weatherFormat[month][day][key]);
            }
          }
          for (const key in weatherFormat[month]) {
            if (Array.isArray(weatherFormat[month][key])) {
              weatherFormat[month][key] = Math.ceil(
                weatherFormat[month][key].reduce(
                  (acc: any, cur: any) => acc + cur,
                ) / weatherFormat[month][key].length,
              );
            }
          }
        }

        console.log(weatherFormat);

        await db
          .collection('cities')
          .doc(city.id)
          .set({
            ...city,
            weather: weatherFormat,
          });
        await db.doc(`baseCities/${city.id}`).update({
          weatherFetched: true,
        });
      }, Promise.resolve());
      res.send(`OK`);
    } catch (err) {
      console.log(err);
      res.send("There's been a serious problem");
    }
  });
