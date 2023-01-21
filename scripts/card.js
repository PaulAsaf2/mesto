import { popupImage, popupImageOpened, popupImageCaption } from './constants.js';

export class Card {
  
  constructor(data, templateSelector) {
    this._title = data.title;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector)
                        .content.querySelector('.card').cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.card__text').textContent = this._title;      
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').alt = this._title;

    this._setEventListeners();

    return this._element;
  }

  _openImage() {
    popupImageOpened.src = this._link;
    popupImageCaption.textContent = this._title;
    popupImageOpened.alt = this._title;

    popupImage.classList.add('popup_opened');
  }

  _setEventListeners() {
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._openImage();
    })

    this._element.querySelector('.card__trash').addEventListener('click', () => {
      this._element.remove();
    })

    this._element.querySelector('.card__like').addEventListener('click', (evt) => {
      evt.target.classList.toggle('card__like_active');
    })
  }

}