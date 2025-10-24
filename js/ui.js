// 🎨 ui.js — تحكم بواجهة المستخدم
import { auth } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("✨ واجهة Lizfar DZ جاهزة!");

  const authBtns = document.getElementById("authBtns");
  const addProductBtn = document.getElementById("addProductBtn");
  const userBtn = document.getElementById("userBtn");
  const userPhoto = document.getElementById("userPhoto");
  const userName = document.getElementById("userNameHeader");
  const userDropdown = document.getElementById("userDropdown");
  const logoutBtn = document.getElementById("logoutBtn");

  // ✅ مراقبة حالة المستخدم
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // المستخدم مسجل الدخول
      authBtns?.classList.add("hidden");
      addProductBtn?.classList.remove("hidden");
      userBtn?.classList.remove("hidden");

      // إظهار الصورة فقط
      userName?.classList.add("hidden");
      userPhoto.src = user.photoURL || "./assets/default-avatar.png";
    } else {
      // المستخدم غير مسجل الدخول
      authBtns?.classList.remove("hidden");
      addProductBtn?.classList.add("hidden");
      userBtn?.classList.add("hidden");

      userName?.classList.remove("hidden");
      userName.textContent = "الضيف";
      userPhoto.src = "./assets/default-avatar.png";
    }
  });

  // 🔽 فتح وإغلاق القائمة
  userBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    userDropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!userDropdown.contains(e.target) && !userBtn.contains(e.target)) {
      userDropdown.classList.add("hidden");
    }
  });

  // 🚪 تسجيل الخروج
  logoutBtn?.addEventListener("click", async () => {
    try {
      await signOut(auth);
      alert("✅ تم تسجيل الخروج بنجاح");
      window.location.href = "login.html";
    } catch (error) {
      console.error("❌ خطأ أثناء تسجيل الخروج:", error);
      alert("حدث خطأ أثناء تسجيل الخروج");
    }
  });
});
