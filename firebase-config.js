// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyAV_A3YOv6DAVSF02hmdJnjS9ieckYbdKI",
  authDomain: "glitchi-share.firebaseapp.com",
  projectId: "glitchi-share",
  storageBucket: "glitchi-share.firebasestorage.app",
  messagingSenderId: "252725027131",
  appId: "1:252725027131:web:54c3afa17fa19fdf13971e",
  measurementId: "G-EZ4W14R9K4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();