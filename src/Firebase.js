import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCzmdh2dd9vGv9qHpnnR1KTVJMu9Xx5Fk0",
  authDomain: "clone-6bc94.firebaseapp.com",
  databaseURL: "https://clone-6bc94.firebaseio.com",
  projectId: "clone-6bc94",
  storageBucket: "clone-6bc94.appspot.com",
  messagingSenderId: "109543304502",
  appId: "1:109543304502:web:e52cf30d5243199b5c5797",
  measurementId: "G-QC6P0LHK8V",
});

const auth = firebase.auth();

export { auth };
