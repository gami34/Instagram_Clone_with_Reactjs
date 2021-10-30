import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyBRYEXSHNw4PkXaREXuihbASDDthMRdQTs",
    authDomain: "instagram-smart-clone.firebaseapp.com",
    projectId: "instagram-smart-clone",
    storageBucket: "instagram-smart-clone.appspot.com",
    messagingSenderId: "67443251988",
    appId: "1:67443251988:web:7ca605910252c0c0e10001",
};

let firestore;
if (!firebase.apps.length) {
    firebase.initializeApp(config);
    firestore = firebase.firestore();
    firestore.settings({
        timestampsInSnapshots: true,
    });
}
export { firebase, firestore };
