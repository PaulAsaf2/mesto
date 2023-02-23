import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({popupDelete, handleFormSubmit}, selector) {
    super(selector);
    this._popupDeleteCardButton = popupDelete;
    this._handleFormSubmit = handleFormSubmit;
  }

  getId(id) { return this._idValue = id; }

  setEventListeners() {
    super.setEventListeners()
    this._popupDeleteCardButton.addEventListener('click', () => {
      this._handleFormSubmit( this._idValue );
      this.closePopup();
    })
  }
}