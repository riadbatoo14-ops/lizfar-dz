// 🔒 auth-guard.js
// هذا الملف يمنع الوصول إلى الصفحات الخاصة بدون تسجيل دخول

import { auth } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// 🔐 تحقق من حالة المستخدم
onAuthStateChanged(auth, (user) => {
  // إذا المستخدم غير مسجل دخول → يرجع لصفحة تسجيل الدخول
  if (!user) {
    window.location.href = "login.html";
  }
});
