const modalButtons = document.querySelectorAll("button.more");
const modalDiv = document.querySelector("div.modal");
const modalOverlay = modalDiv.querySelector("div.modal .overlay");
const modalButtonClose = modalDiv.querySelector("button.modal__close");

modalButtons.forEach((modalButton) => {
  modalButton.addEventListener("click", () => {
    modalDiv.classList.remove("hidden");
  });
});

modalOverlay.addEventListener("click", () => {
  modalDiv.classList.add("hidden");
});

modalButtonClose.addEventListener("click", () => {
  modalDiv.classList.add("hidden");
});
