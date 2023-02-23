// const initialCards = [
//   {
//     title: 'Москва',
//     link: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
//   },
//   {
//     title: 'Пекин',
//     link: 'https://images.unsplash.com/photo-1620964780032-81ef649db4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
//   },
//   {
//     title: 'Нью-Дели',
//     link: 'https://images.unsplash.com/photo-1592639296346-560c37a0f711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
//   },
//   {
//     title: 'Пальмира',
//     link: 'https://images.unsplash.com/photo-1602674471917-2f5fbd54535e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80'
//   },
//   {
//     title: 'Минск',
//     link: 'https://images.unsplash.com/photo-1591509352193-c3e6676f71c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
//   },
//   {
//     title: 'Тегеран',
//     link: 'https://images.unsplash.com/photo-1613881348993-bc547b53daba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
//   },
// ];

const profile = document.querySelector('.profile');

const popupAddCardButton = profile.querySelector('.profile__add');
const editProfileButton = profile.querySelector('.profile__edit');
const editAvatarButton = profile.querySelector('.profile__avatar_edit');
const popupDeleteCardButton = document.querySelector('.form__button_type_delete-card');

const nameProfile = profile.querySelector('.profile__name');
const jobProfile = profile.querySelector('.profile__activity');
const avatarProfile = profile.querySelector('.profile__avatar');

const cardContainer = document.querySelector('.images');
const popupImageOpened = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__caption');

const profileForm = document.forms.edit_profile;
const cardForm = document.forms.add_card;
const avatarForm = document.forms.edit_avatar;


const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible',
  errorText: '.form__input-error',
};

const userData = {
  name: nameProfile,
  about: jobProfile,
  avatar: avatarProfile,
}

const popupSelector = {
  popupImage: '.popup_type_image',
  popupCard: '.popup_type_card',
  popupCardDelete: '.popup_type_delete-card',
  popupProfile: '.popup_type_profile',
  popupAvatar: '.popup_type_avatar',
}

export { 
  // initialCards, 
  profile, popupAddCardButton, 
  editProfileButton, popupImageOpened, popupImageCaption,
  cardForm, profileForm, validationConfig, cardContainer,
  userData, popupSelector, editAvatarButton,
  avatarForm, popupDeleteCardButton
};
