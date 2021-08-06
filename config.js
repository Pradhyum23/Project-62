import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAnv7Y1ANingSylo01Nvx5e41L-m6m_78w",
  authDomain: "project-60-d335f.firebaseapp.com",
  databaseURL: "https://project-60-d335f-default-rtdb.firebaseio.com",
  projectId: "project-60-d335f",
  storageBucket: "project-60-d335f.appspot.com",
  messagingSenderId: "371408888449",
  appId: "1:371408888449:web:4dcd21d512a0ebed046380"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
 

console.log(firebase.name);
console.log(firebase.database());
  