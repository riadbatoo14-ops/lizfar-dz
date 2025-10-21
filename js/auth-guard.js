// ✅ auth-guard.js
import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "../login.html";
  } else {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists() || userSnap.data().role !== "admin") {
      alert("🚫 ليس لديك صلاحية الدخول إلى لوحة التحكم.");
      window.location.href = "../index.html";
    } else {
      console.log("✅ تم التحقق من صلاحية المشرف:", user.email);
    }
  }
});
