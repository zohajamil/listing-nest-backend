/* eslint @typescript-eslint/no-var-requires: "off" */
import { Logger } from '@nestjs/common';
import admin from 'firebase-admin';

//Give credential when running locally
//On production automatically required credentials will be fetched from the server
// if (process.env.GCLOUD_PROJECT) {
Logger.log('Running code on Production');
admin.initializeApp();
// // } else {
// //   Logger.log('Running code locally ');
// //   const firebaseAccountCredentials = require('../../firebase-config/firebase-service-account.json');
// //   const serviceAccounts = firebaseAccountCredentials as admin.ServiceAccount;
// //   admin.initializeApp({
// //     credential: admin.credential.cert(serviceAccounts),
// //   });
// }

const database = admin.firestore();

export { admin, database };
