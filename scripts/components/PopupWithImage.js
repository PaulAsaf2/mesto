import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
  constructor({popupImageCaption, popupImageOpened}, selector) {
    super(selector);
    this.caption = popupImageCaption
    this.image = popupImageOpened
  }
  
  openPopup(title, link) {
    super.openPopup();
    this.image.src = link;
    this.image.alt = title;
    this.caption.textContent = title;
  }

}



// Создайте класс PopupWithImage, который наследует от Popup. 
// Этот класс должен перезаписывать родительский метод open. 
// В методе open класса PopupWithImage нужно вставлять в попап картинку 
// с src изображения и подписью к картинке.