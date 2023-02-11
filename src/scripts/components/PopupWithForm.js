import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({selector, handleFormSubmit}) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popup.querySelector('.form');
    this._inputList = this._formElement.querySelectorAll('.form__item');
  }

  _getInputValues() {
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
    super.setEventListeners()
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.closePopup();
    })
  }
}