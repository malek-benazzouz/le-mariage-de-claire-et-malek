// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    // Public key - it is OK to store in the source code. See https://firebase.google.com/docs/projects/api-keys
    apiKey: 'AIzaSyBrsiu5SbssDFb72hP-L4NotXBkwL8oUIY',
    authDomain: 'mariagecm-backend.firebaseapp.com',
    projectId: 'mariagecm-backend',
    storageBucket: 'mariagecm-backend.appspot.com',
    messagingSenderId: '945382725639',
    appId: '1:945382725639:web:492421042cf59f52c4f2a2',
    measurementId: 'G-LN1E4XXBRG'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
