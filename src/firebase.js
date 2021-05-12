import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyD1mzmFI5TE0YoIOi7CAUK0vN8qo-fM2jA",
    authDomain: "homeguruji-3edb8.firebaseapp.com",
    databaseURL: "https://homeguruji-3edb8.firebaseio.com",
    projectId: "homeguruji-3edb8",
    storageBucket: "homeguruji-3edb8.appspot.com",
    messagingSenderId: "52815082332",
    appId: "1:52815082332:web:268a30e4877b13b4dbc799"
};


firebase.initializeApp(firebaseConfig);

export default firebase