import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
  constructor({popupImageCaption, popupImageOpened}, selector) {
    super(selector);
    this.caption = popupImageCaption
    this.image = popupImageOpened
  }
  
  openPopup(title, link) {
    this.image.src = link;
    this.image.alt = title;
    this.caption.textContent = title;
    super.openPopup();
  }

}