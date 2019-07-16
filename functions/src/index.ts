import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as cities from './cities.json';

admin.initializeApp();

const db = admin.firestore();

export const loadCityData = functions.https.onRequest((req, res) => {
  cities.forEach(async city => {
    await db.collection('cities').add(city);
  });
});
