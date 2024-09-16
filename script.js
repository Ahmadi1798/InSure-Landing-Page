const closebutton = document.getElementById("close_btn");
const menuButton = document.getElementById("hamburger_btn");
const Menu = document.getElementById("mobile_menu");

menuButton.addEventListener("click", () => {
  closebutton.classList.remove("hidden");
  menuButton.classList.add("hidden");
  Menu.classList.toggle("flex");
  Menu.classList.toggle("hidden");
});

closebutton.addEventListener("click", () => {
  closebutton.classList.add("hidden");
  menuButton.classList.remove("hidden");
  Menu.classList.toggle("flex");
  Menu.classList.toggle("hidden");
});
