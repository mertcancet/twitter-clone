import firebase from 'firebase';
import 'firebase/database';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCvC08IUABBtkuQSxHRxQMHw4-i6g1zzj8',
  authDomain: 'twitter-clone-51be3.firebaseapp.com',
  projectId: 'twitter-clone-51be3',
  storageBucket: 'twitter-clone-51be3.appspot.com',
  messagingSenderId: '862885237018',
  appId: '1:862885237018:web:c9ff97c3e4c7b30c065ca3',
  measurementId: 'G-WCNTTYXWVK',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// firebase.analytics();

const db = app.firestore();
export default db;
