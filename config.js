// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHEt2yaZOq5lpgw96r12uGP4iHmvkWL3E",
    authDomain: "tbmi-cms.firebaseapp.com",
    projectId: "tbmi-cms",
    storageBucket: "tbmi-cms.firebasestorage.app",
    messagingSenderId: "754106603923",
    appId: "1:754106603923:web:579fc0ddf3292a39917066",
    measurementId: "G-HFQMSD9QG4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

// Collections
const settingsCollection = db.collection('settings');
const noticesCollection = db.collection('notices');
const teachersCollection = db.collection('teachers');
const galleryCollection = db.collection('gallery');
const faqCollection = db.collection('faq');
