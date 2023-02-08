import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({selector, handleFormSubmit}) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
  }

_getForm() {
  const formElement = this._popup.querySelector('.form')
  return formElement
}

_getInputValues() {
  this._inputList = this._formElement.querySelectorAll('.form__item');
  
  this._formValues = {};
  this._inputList.forEach(input => {
    this._formValues[input.name] = input.value
  })
  
 return this._formValues;
}

closePopup() {
  super.closePopup();
  this._formElement.reset();
}

setEventListeners() {
  this._formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
    this.closePopup();
  })
}

generateForm() {
  this._formElement = this._getForm();
  this.setEventListeners();

  return this._formElement
}

}


// Создайте класс PopupWithForm, который наследует от Popup. Этот класс:
// - Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
// - Содержит приватный метод _getInputValues, который собирает данные 
//   всех полей формы.
// - Перезаписывает родительский метод setEventListeners. 
//   Метод setEventListeners класса PopupWithForm должен не только добавлять 
//   обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
// - Перезаписывает родительский метод close, так как при закрытии попапа 
//   форма должна ещё и сбрасываться.

// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.