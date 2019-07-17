import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as cities from './cities.json';

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
