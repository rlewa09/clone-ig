import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDvX3I5IKXvAKznHcVIiU-wqMUgDC3Ar6o',
  authDomain: 'clone-ig-a6b1e.firebaseapp.com',
  projectId: 'clone-ig-a6b1e',
  storageBucket: 'clone-ig-a6b1e.appspot.com',
  messagingSenderId: '785418514428',
  appId: '1:785418514428:web:593710235ef86fe9b98c79'
};

firebase.initializeApp(config);
const { FieldValue } = firebase.firestore;

// seedDatabase(firebase);
export { firebase, FieldValue };
