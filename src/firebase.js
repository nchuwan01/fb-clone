// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBrdxpSuy2tbc15QNbXP4g3U2urU1X8et8",
    authDomain: "fb-clone-10675.firebaseapp.com",
    projectId: "fb-clone-10675",
    storageBucket: "fb-clone-10675.appspot.com",
    messagingSenderId: "397607779016",
    appId: "1:397607779016:web:7f98e2122121dc512903fd",
    measurementId: "G-F7C4EJ0ETF"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;


