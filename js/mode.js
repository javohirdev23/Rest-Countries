let body = document.querySelector("body");
let darkBtn = document.querySelector(".dark__mode");
let lightBtn = document.querySelector(".light__mode");

darkBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  lightBtn.classList.toggle("hidden");
  darkBtn.classList.toggle("hidden");
});

lightBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  lightBtn.classList.toggle("hidden");
  darkBtn.classList.toggle("hidden");
});
