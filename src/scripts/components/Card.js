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
    this.isLiked = this._likes.some(item => item._id == this._userId);

    this._element.querySelector('.card__text').textContent = this._title;      
    this._cardImage.src = this._link;
    this._cardImage.alt = this._title;
    this._likeCount.textContent = this._likes.length;    

    if (this.isLiked) {this._likeButton.classList.add('card__like_active')}

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
      this._toggleLikeState();
    })
  }

  _hideTrashButton() {
    if (this._owner._id !== this._userId) {this._trashButton.remove()} 
  }

  _toggleLikeState() {
    // this._likeButton.classList.toggle('card__like_active');
    this._toggleLike(this._id, this.isLiked, this._likeButton, this);
    this.isLiked = !this.isLiked;
  }

  updateLike(newLikesCount) {
    this._likeCount.textContent = newLikesCount
  }

}