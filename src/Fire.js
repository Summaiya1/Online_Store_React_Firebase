import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyB1oIGHirmbZtWSp-s1sK_e8ut6dyG-e-s",
    authDomain: "food-order-39175.firebaseapp.com",
    databaseURL: "https://food-order-39175.firebaseio.com",
    projectId: "food-order-39175",
    storageBucket: "food-order-39175.appspot.com",
    messagingSenderId: "405986962047",
    appId: "1:405986962047:web:30049fd8aebe34cb626d4a",
    measurementId: "G-EMD0Y6NFYK"
  };
  var Fire = firebase.initializeApp(firebaseConfig);
  
export default Fire;