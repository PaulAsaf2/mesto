import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({selector, handleFormSubmit}) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    
    this._formElement = this._popup.querySelector('.form');
    this._inputList = this._formElement.querySelectorAll('.form__item');
    this._submitButton = this._formElement.querySelector('.form__button');
    this._loading = this._formElement.querySelector('.form__loading');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value
    })
    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach(input => {
      input.value = data[input.name];
    })
  }

  closePopup() {
    super.closePopup();
    this._formElement.reset();
  }

  setEventListeners() {
    super.setEventListeners()
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const initialText = this._submitButton.textContent;
      this._submitButton.textContent = 'Сохранение...';
      this._handleFormSubmit(this._getInputValues())
        .then(() => this.closePopup())
        .finally(() => this._submitButton.textContent = initialText)
    })
  }
}