import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCoyueI5ndcpB_buZtNgPUGEiye1kGm_ao",
    authDomain: "loginbyfingerprints.firebaseapp.com",
    projectId: "loginbyfingerprints",
    storageBucket: "loginbyfingerprints.appspot.com",
    messagingSenderId: "555766892513",
    appId: "1:555766892513:web:679c7a6512bc49b6ab34a0"
  };
  // Initialize Firebase
  const firebaseApp =  firebase.initializeApp(firebaseConfig);

  export const firebaseAuth = firebaseApp.auth();