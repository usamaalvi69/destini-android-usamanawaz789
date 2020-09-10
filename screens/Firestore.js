import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCnAkeV3PYGZjVc45L5EMyukzoRhbDl4h0",
    authDomain: "themilkapp-2838d.firebaseapp.com",
    databaseURL: "https://themilkapp-2838d.firebaseio.com",
    projectId: "themilkapp-2838d",
    storageBucket: "themilkapp-2838d.appspot.com",
    messagingSenderId: "670131337439",
    appId: "1:670131337439:web:4d72d0bb5efd4b5544516a"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig); 
  const database = firebaseApp.firestore();

  export default database;
//   export default firebaseApp;
