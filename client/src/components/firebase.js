import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({


  apiKey: "AIzaSyA2zG8N2lCEhsthz0jGal21ImR0guGLdm0",
    authDomain: "reactform-78a04.firebaseapp.com",
    projectId: "reactform-78a04",
    storageBucket: "reactform-78a04.appspot.com",
    messagingSenderId: "572830333423",
    appId: "1:572830333423:web:ae1b1b374398b02ebb5e1a"
})

var db = firebaseApp.firestore()


export { db };