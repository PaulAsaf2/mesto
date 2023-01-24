export class Card {
  
  constructor(data, templateSelector, handleOpenImage) {
    this._title = data.title;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleOpenImage = handleOpenImage;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector)
                        .content.querySelector('.card').cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__image');

    this._element.querySelector('.card__text').textContent = this._title;      
    this._cardImage.src = this._link;
    this._cardImage.alt = this._title;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._handleOpenImage(this._title, this._link);
    })

    this._trashButton = this._element.querySelector('.card__trash').addEventListener('click', () => {
      this._removeCard();
    })

    this._likeButton = this._element.querySelector('.card__like').addEventListener('click', (evt) => {
      this._toggleLikeButtonState(evt);
    })
  }

  _removeCard() {
    this._element.remove();
  }

  _toggleLikeButtonState(evt) {
    evt.target.classList.toggle('card__like_active');
  }

}
