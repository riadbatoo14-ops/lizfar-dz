<!-- Firebase Config - Lizfar DZ -->
<script type="module">
  // استيراد مكتبات Firebase من CDN
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut }
    from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
  import { getFirestore, doc, setDoc, getDoc } 
    from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

  // إعدادات مشروعك (من Firebase Console)
  const firebaseConfig = {
    apiKey: "AIzaSyD7kYFIZ0xyv07Dk45KbeoDfnkDnm15Hpk",
    authDomain: "lizfar-dz.firebaseapp.com",
    projectId: "lizfar-dz",
    storageBucket: "lizfar-dz.firebasestorage.app",
    messagingSenderId: "582272756249",
    appId: "1:582272756249:web:7768cbb066acfc8c6d1888",
    measurementId: "G-ZDRSNRSMRN"
  };

  // تهيئة التطبيق والخدمات
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  console.log("✅ Lizfar DZ connected to Firebase!");
</script>
