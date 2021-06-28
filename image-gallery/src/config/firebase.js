import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCYEoJOLuS07E3jWG2BnWOvfBcK6iJXGj8",
    authDomain: "image-gallery-5c0a0.firebaseapp.com",
    projectId: "image-gallery-5c0a0",
    storageBucket: "image-gallery-5c0a0.appspot.com",
    messagingSenderId: "545004958890",
    appId: "1:545004958890:web:eea2c5f6b5fd94ff6a4cd3",
    measurementId: "G-X2515NQ6BF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;