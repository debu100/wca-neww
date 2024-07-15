//? disable right click
const body = document.querySelector("body");

body.addEventListener(
  "contextmenu",
  (e) => {
    e.preventDefault();
  },
  false
);
