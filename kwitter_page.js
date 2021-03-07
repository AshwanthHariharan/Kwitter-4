  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAI96rEJEFbGx4PqFFpkJxPT8ridhwID2Q",
    authDomain: "lets-chat-web-app-be793.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-be793-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-be793",
    storageBucket: "lets-chat-web-app-be793.appspot.com",
    messagingSenderId: "419670477862",
    appId: "1:419670477862:web:7bb822792d302793552ae7",
    measurementId: "G-RQSNZ3EE1T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  room_name = localStorage.getItem("room_name");

  function send() {

msg = document.getElementById("msg").value;

firebase.database().ref(room_name).push({

name:user_name,

message:msg,

like:0

});

document.getElementById("msg").value = "";
 
  }