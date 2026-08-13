// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyCVzABKzgST2b-0D53m7hFmk-yv_BFLadg",
  authDomain: "glitchi-share-b1a7d.firebaseapp.com",
  databaseURL: "https://glitchi-share-b1a7d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "glitchi-share-b1a7d",
  storageBucket: "glitchi-share-b1a7d.firebasestorage.app",
  messagingSenderId: "848667519666",
  appId: "1:848667519666:web:19d70451c2ba44f4a977ab",
  measurementId: "G-T84Z05VXZZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
