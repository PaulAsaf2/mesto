export default class Card {
  constructor({name, link}, templateSelector, handleCardClick) {
    this._title = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector)
                        .content.querySelector('.card').cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._cardImage = this._element.querySelector('.card__image');
    this._trashButton = this._element.querySelector('.card__trash');
    this._likeButton = this._element.querySelector('.card__like');

    this._element.querySelector('.card__text').textContent = this._title;      
    this._cardImage.src = this._link;
    this._cardImage.alt = this._title;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._title, this._link);
    })

    this._trashButton.addEventListener('click', () => {
      this._removeCard();
    })

    this._likeButton.addEventListener('click', (evt) => {
      this._toggleLikeButtonState(evt);
    })
  }

  _removeCard() {
    this._element.remove();
    this._element = null;
  }

  _toggleLikeButtonState() {
    this._likeButton.classList.toggle('card__like_active');
  }
}
