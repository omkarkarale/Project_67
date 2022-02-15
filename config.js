import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyD9YMN5Q1htum4inkm-Xl0N6uuwwDKdeGk",
  authDomain: "pro-67-6314c.firebaseapp.com",
  projectId: "pro-67-6314c",
  storageBucket: "pro-67-6314c.appspot.com",
  messagingSenderId: "154366068273",
  appId: "1:154366068273:web:c79b206adc13baddc5b710"  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();