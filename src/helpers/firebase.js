import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { seedDatabase } from '../seed';

const config = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
};

firebase.initializeApp(config);
const { FieldValue } = firebase.firestore;

// seedDatabase(firebase);
export { firebase, FieldValue };
