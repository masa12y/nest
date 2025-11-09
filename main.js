const toggle = document.querySelector(".nav-toggle");
const overlay = document.querySelector(".nav-overlay");

// ハンバーガー押したら開閉
toggle.addEventListener("click", (e) => {
  e.stopPropagation();
  overlay.classList.toggle("show");
});

// overlay 内リンククリックで閉じる
overlay.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    overlay.classList.remove("show");
  });
});

// overlay 以外クリックで閉じる
document.addEventListener("click", (e) => {
  if (!overlay.contains(e.target) && e.target !== toggle) {
    overlay.classList.remove("show");
  }
});

// overlay 内クリックは閉じない
overlay.addEventListener("click", (e) => {
  e.stopPropagation();
});

// アート画像クリックでモーダル表示
document.querySelectorAll(".activities-scroll-item img").forEach((img) => {
  img.style.cursor = "pointer";
  img.addEventListener("click", function () {
    document.getElementById("modal-img").src = this.src;
    document.getElementById("image-modal").style.display = "flex";
  });
});
// モーダルクリックで閉じる
document.getElementById("image-modal").addEventListener("click", function () {
  this.style.display = "none";
  document.getElementById("modal-img").src = "";
});
