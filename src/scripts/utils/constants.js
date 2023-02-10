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

const popupImage = document.querySelector('.popup_type_image');
const popupImageOpened = popupImage.querySelector('.popup__image');
const popupImageCaption = popupImage.querySelector('.popup__caption');
const profile = document.querySelector('.profile');
const popupAddCardButton = profile.querySelector('.profile__add');
const editProfileButton = profile.querySelector('.profile__edit');
const nameProfile = profile.querySelector('.profile__name');
const jobProfile = profile.querySelector('.profile__activity');
const popupAddCard = document.querySelector('.popup_type_card');
const formAddCard = popupAddCard.querySelector('.form');
const titleCard = popupAddCard.querySelector('.form__item_type_card-title');
const linkCard = popupAddCard.querySelector('.form__item_type_link');
const popupEditProfile = document.querySelector('.popup_type_profile');
const profileForm = popupEditProfile.querySelector('.form');
const nameInput = profileForm.querySelector('.form__item_type_name');
const jobInput = profileForm.querySelector('.form__item_type_activity');
const closeButtons = document.querySelectorAll('.popup__close');
const popupList = Array.from(document.querySelectorAll('.popup'));
const imageContainer = document.querySelector('.images');

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
};

const userData = {
  name: nameProfile,
  activity: jobProfile
}

export { 
  initialCards, profile, popupAddCardButton, 
  editProfileButton, popupImage, popupImageOpened, 
  popupImageCaption, nameProfile, jobProfile, 
  popupAddCard, formAddCard, titleCard, 
  linkCard, popupEditProfile, profileForm, 
  nameInput, jobInput, closeButtons, 
  popupList, validationConfig, imageContainer,
  userData
};
