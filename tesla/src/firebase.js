import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDHr3GXrU9l458Ve6E6cTTnZV1wG72qnXg",
    authDomain: "tesla-clone-266bf.firebaseapp.com",
    projectId: "tesla-clone-266bf",
    storageBucket: "tesla-clone-266bf.appspot.com",
    messagingSenderId: "334742068344",
    appId: "1:334742068344:web:c6b7f1405b29676dc0218d",
    measurementId: "G-15VKBV6Y7R"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebaseApp.auth()

export { auth, provider }