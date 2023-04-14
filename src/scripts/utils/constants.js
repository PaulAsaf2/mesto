const profile = document.querySelector('.profile');

const popupAddCardButton = profile.querySelector('.profile__add');
const editProfileButton = profile.querySelector('.profile__edit');
const editAvatarButton = profile.querySelector('.profile__avatar_edit');
const popupDeleteCardButton = document.querySelector('.popup__button_type_delete');

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
  inactiveButtonClass: 'form__button_type_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible',
  errorText: '.form__input-error',
};

const userData = {
  name: nameProfile,
  about: jobProfile,
  avatar: avatarProfile,
};

const popupSelector = {
  popupImage: '.popup_type_image',
  popupCard: '.popup_type_card',
  popupCardDelete: '.popup_type_delete-card',
  popupProfile: '.popup_type_profile',
  popupAvatar: '.popup_type_avatar',
};

export { 
  profile, popupAddCardButton, popupDeleteCardButton,
  editProfileButton, popupImageOpened, popupImageCaption,
  cardForm, profileForm, validationConfig, cardContainer,
  userData, popupSelector, editAvatarButton, avatarForm,
};
