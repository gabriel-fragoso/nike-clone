import firebase from 'firebase/compat/app'

import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCDrEXuH6Th7t0LryYfNr34pGW8LBOTZrw",
  authDomain: "restaurant-app-5386d.firebaseapp.com",
  projectId: "restaurant-app-5386d",
  storageBucket: "restaurant-app-5386d.appspot.com",
  messagingSenderId: "690358148711",
  appId: "1:690358148711:web:ee09e73271c00bc5a57ec2"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
export { firebase, auth }