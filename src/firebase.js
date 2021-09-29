import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCn0OrjM6EdpSjeZLJWY4YfzswpZMi45yU",
  authDomain: "stan-magzynku.firebaseapp.com",
  projectId: "stan-magzynku",
  storageBucket: "stan-magzynku.appspot.com",
  messagingSenderId: "657309431813",
  appId: "1:657309431813:web:01dc40919e5db16f7fc46c"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth }
export default firebase;
