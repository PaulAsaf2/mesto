export default class Card {
  constructor({name, link, likes, _id, owner}, 
              templateSelector, handleCardClick, 
              openPopupDeleteCard, toggleLike, userId) {
    this._title = name;
    this._link = link;
    this._likes = likes;
    this._id = _id;
    this._owner = owner;
    this._templateSelector = templateSelector;
    this.handleCardClick = handleCardClick;
    this.openPopupDeleteCard = openPopupDeleteCard;
    this._toggleLike = toggleLike;
    this._userId = userId;
    console.log( this._userId );
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
    this._likeCount = this._element.querySelector('.card__like-count');

    this._element.querySelector('.card__text').textContent = this._title;      
    this._cardImage.src = this._link;
    this._cardImage.alt = this._title;
    this._likeCount.textContent = this._likes.length;

    if (this._checkLike()) {
      this._likeButton.classList.add('card__like_active');
    }

    this._hideTrashButton();
    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this.handleCardClick(this._title, this._link);
    })

    this._trashButton.addEventListener('click', () => {
      this.openPopupDeleteCard(this._id, this._element)
    })

    this._likeButton.addEventListener('click', () => {
      this._toggleLikeButtonState();
    })
  }

  _hideTrashButton() {
    if (this._owner._id !== 'f539e0bd0f729ff44595d528') {
      this._trashButton.remove();
    } 
  }

  _toggleLikeButtonState() {
    this._toggleLike(this._id, this._checkLike())
  }

  _checkLike() {
    return this._likes.some(item => item._id == 'f539e0bd0f729ff44595d528')
  }

}