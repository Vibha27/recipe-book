import firebase from 'firebase';

// Setting up firebase
const firebaseConfig = {
    apiKey: "AIzaSyAj_2p6DPtrkxtQA30P1jlE-Qe3kXQHe_o",
    authDomain: "recipebook-f47dc.firebaseapp.com",
    databaseURL: "https://recipebook-f47dc.firebaseio.com",
    projectId: "recipebook-f47dc",
    storageBucket: "recipebook-f47dc.appspot.com",
    messagingSenderId: "69559176273",
    appId: "1:69559176273:web:23e6f6c15e17c70161bc70",
    measurementId: "G-MSSH3BXMHF"
  
  };

//   Setting up firebase UI for sign in via google or phone
  export const firebaseui = {
      signInFlow : 'popup',
      signInOptions : [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID


      ]
  }


//   Initializing app
  firebase.initializeApp(firebaseConfig);

export default firebase;