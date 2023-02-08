export default class Popup {
  constructor(selector) {
    this._popup = selector;
  }

_getButtonClose() {
  const buttonClose = this._popup.querySelector('.popup__close')
  return buttonClose;
}

openPopup() {
  this._popup.classList.add('popup_opened');
  this.setEventListeners();
}

closePopup() {
  this._popup.classList.remove('popup_opened');
}

_handleEscClose(evt) {
  if (evt.key === 'Escape') {
    this.closePopup();
  }
}

_closeClickOutside(evt) {
  if (evt.target === evt.currentTarget) {
    this.closePopup();
  }
}

setEventListeners() {
  this.closeElement = this._getButtonClose()
  
  this.closeElement.addEventListener('click', () => {
    this.closePopup();
  })

  document.addEventListener('keydown', (evt) => {
    this._handleEscClose(evt)
  })

  this._popup.addEventListener('click', (evt) => {
    this._closeClickOutside(evt)
  })
}

}

// Создайте класс Popup, который отвечает за открытие и закрытие попапа.
// Этот класс:
//  - Принимает в конструктор единственный параметр — селектор попапа.
//  - Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
//  - Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
//  - Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа. 
//    Модальное окно также закрывается при клике на затемнённую область вокруг формы.