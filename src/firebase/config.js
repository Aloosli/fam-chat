// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyDTYUE-_BAaGONxA_PHzy7bJT00GJxPH_A",
    authDomain: "fam-chat-81dda.firebaseapp.com",
    projectId: "fam-chat-81dda",
    storageBucket: "fam-chat-81dda.appspot.com",
    messagingSenderId: "40690383229",
    appId: "1:40690383229:web:1c239d89107fea74613414",
    measurementId: "G-Y2V3FMHS2V"
  };

  // Initialize Firebase

    firebase.initializeApp(firebaseConfig)

    const projectAuth = firebase.auth()
    const  projectFirestore = firebase.firestore()
    const timestamp = firebase.firestore.FieldValue.serverTimestamp

    export { projectFirestore, timestamp, projectAuth }