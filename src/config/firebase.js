// Import the Firebase modules that you need in your app.
import firebase from 'firebase'

// Initalize and export Firebase.
const config = {
	apiKey: "AIzaSyC1wPIXkt10YchFJ5l6SwaFZRhccF8BuQY",
	authDomain: "profile-8b357.firebaseapp.com",
	databaseURL: "https://profile-8b357.firebaseio.com",
	projectId: "profile-8b357",
	storageBucket: "profile-8b357.appspot.com",
	messagingSenderId: "627704121898"
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
export const db = firebase.database()
export const provider = new firebase.auth.GoogleAuthProvider()
export const storage = firebase.storage
export const storageRef = firebase.storage().ref()
