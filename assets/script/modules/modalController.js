import { handleToggle } from "./initializeModal.js";

export function openModal() {
  const burgerButton = document.querySelector("#navbarOpenButton");

  ["touchstart", "click"].forEach((eventType) => {
    burgerButton.addEventListener(eventType, handleToggle);
  });
}

export function closeModal() {
  const modal = document.querySelector("#modal");

  if (!modal) return;

  ["touchstart", "click"].forEach((eventType) => {
    modal.addEventListener(eventType, handleToggle);
  });
}
