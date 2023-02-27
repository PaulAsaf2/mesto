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

  renderLoading(isLoading) {
    if (isLoading) {
      this._loading.classList.add('form__loading_visible');
      this._submitButton.classList.add('form__button_hidden');
    } else {
      this._loading.classList.remove('form__loading_visible');
      this._submitButton.classList.remove('form__button_hidden');
    }
  }
    

  setEventListeners() {
    super.setEventListeners()
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.renderLoading(true);
      this._handleFormSubmit(this._getInputValues());
      this.closePopup();
      // this.renderLoading(false);
    })
  }
}