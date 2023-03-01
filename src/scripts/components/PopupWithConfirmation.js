import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({popupDelete, handleFormSubmit}, selector) {
    super(selector);
    this._popupDeleteCardButton = popupDelete;
    this._handleFormSubmit = handleFormSubmit;
  }

  getDataForDeleteCard(id, card) {
    this._idValue = id;
    this._card = card;
  }

  _removeCard() {
    this._card.remove();
    this._card = null;
  }

  setEventListeners() {
    super.setEventListeners()
    this._popupDeleteCardButton.addEventListener('click', () => {
      const initialText = this._popupDeleteCardButton.textContent;
      this._popupDeleteCardButton.textContent = 'Удаление...';
      this._handleFormSubmit(this._idValue)
        .then(() => this._removeCard())  
        .then(() => this.closePopup())
        .finally(() => {
          this._popupDeleteCardButton.textContent = initialText;
        })
    })
  }
}