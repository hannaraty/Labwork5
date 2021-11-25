import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG3Iq1TSt-LkJkbnEFW61JPuNjavYsvVM",
  authDomain: "fir-auth-49ce0.firebaseapp.com",
  projectId: "fir-auth-49ce0",
  storageBucket: "fir-auth-49ce0.appspot.com",
  messagingSenderId: "767595607856",
  appId: "1:767595607856:web:67eaf970f456f761c13af5"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();
export { auth };