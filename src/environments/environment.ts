// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  serverUrl: 'http://localhost:5031/',
  production: false,
  firebase: {
    apiKey: "AIzaSyAE42vRrzd8H8_K5hW0h5sTQLwgulJbXXQ",
    authDomain: "githubdemo-ab3eb.firebaseapp.com",
    projectId: "githubdemo-ab3eb",
    storageBucket: "githubdemo-ab3eb.firebasestorage.app",
    messagingSenderId: "743348364333",
    appId: "1:743348364333:web:c066583b5db9d05911c4a4"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
