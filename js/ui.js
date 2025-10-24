// 🎨 ui.js
// يمكن تستخدمه لاحقاً لتحكم في القوائم أو الأزرار العامة

document.addEventListener("DOMContentLoaded", () => {
  console.log("✨ واجهة Lizfar DZ جاهزة!");

  // ✅ متابعة حالة المستخدم
  import("./firebase-config.js").then(({ auth }) => {
    import("https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js").then(
      ({ onAuthStateChanged }) => {
        const authBtns = document.querySelector("#auth-buttons"); // أزرار تسجيل الدخول وإنشاء حساب
        const userBtn = document.querySelector("#user-btn"); // يحتوي على صورة المستخدم والاسم
        const userPhoto = document.querySelector("#user-photo");
        const userName = document.querySelector("#user-name");

        onAuthStateChanged(auth, (user) => {
          if (user) {
            // ✅ المستخدم مسجل الدخول
            if (authBtns) authBtns.classList.add("hidden");
            if (userBtn) userBtn.classList.remove("hidden");

            // ✅ عرض الاسم بجانب الصورة فقط
            const displayName =
              user.displayName || user.email.split("@")[0] || "مستخدم";
            if (userName) userName.textContent = displayName;
            if (userPhoto)
              userPhoto.src = user.photoURL || "./assets/default-avatar.png";
          } else {
            // 🚫 المستخدم غير مسجل الدخول
            if (authBtns) authBtns.classList.remove("hidden");
            if (userBtn) userBtn.classList.add("hidden");
            if (userName) userName.textContent = "";
            if (userPhoto)
              userPhoto.src = "./assets/default-avatar.png";
          }
        });
      }
    );
  });
});
