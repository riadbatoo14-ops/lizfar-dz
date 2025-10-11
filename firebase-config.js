// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyD7kYFIZ0xyv07Dk45KbeoDfnkDnm15Hpk",
  authDomain: "lizfar-dz.firebaseapp.com",
  projectId: "lizfar-dz",
  storageBucket: "lizfar-dz.firebasestorage.app",
  messagingSenderId: "582272756249",
  appId: "1:582272756249:web:7768cbb066acfc8c6d1888",
  measurementId: "G-ZDRSNRSMRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// اجعلهم متاحين لباقي الملفات
export { auth, db };
