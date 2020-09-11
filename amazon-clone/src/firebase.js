import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCoaKrwQNN3GctFub8LNdnq-c6XdlPDt5s",
    authDomain: "clone-ca5e2.firebaseapp.com",
    databaseURL: "https://clone-ca5e2.firebaseio.com",
    projectId: "clone-ca5e2",
    storageBucket: "clone-ca5e2.appspot.com",
    messagingSenderId: "669496001518",
    appId: "1:669496001518:web:702afebfc129d6a768c4ff",
    measurementId: "G-WWG5HQJ3Z8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};