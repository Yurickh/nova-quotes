import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAEc8V6IBce_y8LxCj_dDiyBAAwdzJ-OG8",
  authDomain: "nova-quotes.firebaseapp.com",
  databaseURL: "https://nova-quotes.firebaseio.com",
  projectId: "nova-quotes",
  storageBucket: "nova-quotes.appspot.com",
  messagingSenderId: "256864396530",
}

firebase.initializeApp(config)

export default firebase
