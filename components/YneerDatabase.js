import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAMECk2PvnFPi51y77c2TIurqzJqWsuWH0",
  authDomain: "yneer-19e0e.firebaseapp.com",
  databaseURL: "https://yneer-19e0e.firebaseio.com",
  projectId: "yneer-19e0e",
  storageBucket: "yneer-19e0e.appspot.com",
  messagingSenderId: "979443319716",
  appId: "1:979443319716:web:690b89edb5f50f03f8b731",
  measurementId: "G-59Y5LPP5LQ"
};
if (!firebase.apps.length) {
  let yneerdb = firebase.initializeApp(firebaseConfig);
  dtbs = yneerdb.database();
  return dtbs;
}
