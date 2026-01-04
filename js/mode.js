let body = document.querySelector("body");
let darkBtn = document.querySelector(".dark__mode");
let lightBtn = document.querySelector(".light__mode");

localStorage.getItem("darkMode") === "enabled" &&
  body.classList.add("dark-mode");

darkBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  lightBtn.classList.toggle("hidden");
  darkBtn.classList.toggle("hidden");

  localStorage.setItem(
    "darkMode",
    body.classList.contains("dark-mode") ? "enabled" : "disabled"
  );
});

lightBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  lightBtn.classList.toggle("hidden");
  darkBtn.classList.toggle("hidden");
});
