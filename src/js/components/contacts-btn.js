const addressEl = document.querySelector(".js-address");
const btnCloseOpen = document.querySelector(".js-btn-address");

btnCloseOpen.addEventListener("click", () => {
  addressEl.classList.toggle("address--close");
});
