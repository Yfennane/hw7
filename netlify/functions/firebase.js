const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCZBasD4sAErq6POuBJUmT_nXXToZb-W6U",
  authDomain: "kiei-451-12785.firebaseapp.com",
  projectId: "kiei-451-12785",
  storageBucket: "kiei-451-12785.appspot.com",
  messagingSenderId: "524818386110",
  appId: "1:524818386110:web:9221265991c744aa4ba2ef"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase