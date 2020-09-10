import * as firebase from 'firebase'

 const firebaseConfig = {
    apiKey: "AIzaSyCnAkeV3PYGZjVc45L5EMyukzoRhbDl4h0",
    authDomain: "themilkapp-2838d.firebaseapp.com",
    databaseURL: "https://themilkapp-2838d.firebaseio.com",
    projectId: "themilkapp-2838d",
    storageBucket: "themilkapp-2838d.appspot.com",
    messagingSenderId: "670131337439",
    appId: "1:670131337439:web:4d72d0bb5efd4b5544516a"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  export default class Firebase {
      static init(){
        firebase.initializeApp(firebaseConfig); 
      }
  }