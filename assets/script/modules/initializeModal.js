import { toggleClass } from "./toggle.js";
import {
  updateAriaAttributes,
  updateAriaHidden,
} from "../util/ariaAttributesUtils.js";

function getElements() {
  const buttonBurger = document.querySelector("#navbarOpenButton");
  const modal = document.querySelector("#modal");
  const sidebar = document.querySelector("#sidebar");

  if (!buttonBurger || !modal || !sidebar) return;

  return { buttonBurger, modal, sidebar };
}

export function handleToggle(event) {
  if (event?.type === "touchstart") event.preventDefault();

  const { buttonBurger, modal, sidebar } = getElements();

  [modal, buttonBurger, sidebar].forEach((element, index) => {
    const classList = ["modal__active", "burger__active", "sidebar__active"];

    toggleClass(element, classList[index]);

    const isOpen = buttonBurger.classList.contains("burger__active");
    updateAriaAttributes(isOpen, buttonBurger);

    const isOpenSidebar = sidebar.classList.contains("sidebar__active");
    updateAriaHidden(!isOpenSidebar, sidebar);
  });
}
