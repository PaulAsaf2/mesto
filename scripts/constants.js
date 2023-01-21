import { FormValidator } from './validate.js';

const initialCards = [
  {
    title: 'Москва',
    link: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'Пекин',
    link: 'https://images.unsplash.com/photo-1620964780032-81ef649db4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'Нью-Дели',
    link: 'https://images.unsplash.com/photo-1592639296346-560c37a0f711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'Пальмира',
    link: 'https://images.unsplash.com/photo-1602674471917-2f5fbd54535e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80'
  },
  {
    title: 'Минск',
    link: 'https://images.unsplash.com/photo-1591509352193-c3e6676f71c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    title: 'Тегеран',
    link: 'https://images.unsplash.com/photo-1613881348993-bc547b53daba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  }
];

const popupImage = document.querySelector('.popup_type_image'),
      popupImageOpened = popupImage.querySelector('.popup__image'),
      popupImageCaption = popupImage.querySelector('.popup__caption'),
    profile = document.querySelector('.profile'),
      popupAddCardButton = profile.querySelector('.profile__add'),
      editProfileButton = profile.querySelector('.profile__edit'),
      nameProfile = profile.querySelector('.profile__name'),
      jobProfile = profile.querySelector('.profile__activity'),
    popupAddCard = document.querySelector('.popup_type_card'),
      formAddCard = popupAddCard.querySelector('.form'),
      titleCard = popupAddCard.querySelector('.form__item_type_card-title'),
      linkCard = popupAddCard.querySelector('.form__item_type_link'),
    popupEditProfile = document.querySelector('.popup_type_profile'),
      profileForm = popupEditProfile.querySelector('.form'),
      nameInput = profileForm.querySelector('.form__item_type_name'),
      jobInput = profileForm.querySelector('.form__item_type_activity'),
    closeButtons = document.querySelectorAll('.popup__close'),
    popupList = Array.from(document.querySelectorAll('.popup'));

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
};

const cardValidationForm = new FormValidator(validationConfig, formAddCard),
      profileValidationForm = new FormValidator(validationConfig, profileForm);



export { popupImage, popupImageOpened, popupImageCaption };

export { 
  initialCards, profile, popupAddCardButton, editProfileButton
  , nameProfile, jobProfile, popupAddCard, formAddCard, titleCard, linkCard, popupEditProfile, profileForm, nameInput, jobInput
  , closeButtons, popupList, cardValidationForm, profileValidationForm };
