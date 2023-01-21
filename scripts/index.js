// import { FormValidator } from './validate.js';
import { Card } from './card.js';
import { initialCards, popupAddCardButton, editProfileButton
  , nameProfile, jobProfile, popupAddCard, formAddCard, titleCard, linkCard, popupEditProfile, profileForm, nameInput, jobInput
  , closeButtons, popupList, cardValidationForm, profileValidationForm } from './constants.js' ;


// any popup ----- any popup ----- any popup ----- any popup ----- any popup ----- any popup

// open popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

// close popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

// close popup by Escape
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// all buttons for closing popups
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// closing popup by clicking outside the button
popupList.forEach((popupElement) => {
  popupElement.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popupElement);
    }
  });
});

// card ----- card ----- card ----- card ----- card ----- card ----- card ----- card ----- card

// Open the popup for adding a card
popupAddCardButton.addEventListener('click', () => {
  openPopup(popupAddCard);
  formAddCard.reset();
})

// Handler for adding a card
formAddCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardDataByPopup = [{
    title: titleCard.value,
    link: linkCard.value }];
  createCard(cardDataByPopup);
  closePopup(popupAddCard);
})

const createCard = (data) => {
  data.forEach((item) => {
    const card = new Card(item, '#card-template');
    const cardElement = card.generateCard();
  
  data === initialCards 
    ? document.querySelector('.images').append(cardElement) 
    : document.querySelector('.images').prepend(cardElement);
  })
}

createCard(initialCards);

// profile ----- profile ----- profile ----- profile ----- profile ----- profile ----- profile

// open
editProfileButton.addEventListener('click', () => {
  openPopup(popupEditProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  
  // deleteTextError();
  
});

// Handler for adding profile data
profileForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
});


// validate ----- validate ----- validate ----- validate ----- validate ----- validate ----- validate
cardValidationForm.enableValidation();
profileValidationForm.enableValidation();

/*




// calling elements ------------------------------
// profile
const profile = document.querySelector('.profile');
const nameProfile = profile.querySelector('.profile__name');
const jobProfile = profile.querySelector('.profile__activity');
const editProfileButton = profile.querySelector('.profile__edit');
const popupEditProfile = document.querySelector('.popup_type_profile');
const popupEditProfileCloseButton = popupEditProfile.querySelector('.popup__close');
// profile form
const profileForm = popupEditProfile.querySelector('.form');
const nameInput = profileForm.querySelector('.form__item_type_name');
const jobInput = profileForm.querySelector('.form__item_type_activity');
// create card
const popupAddCardButton = profile.querySelector('.profile__add');
const popupAddCard = document.querySelector('.popup_type_card');
const formAddCard = popupAddCard.querySelector('.form')
const titleCard = popupAddCard.querySelector('.form__item_type_card-title');
const linkCard = popupAddCard.querySelector('.form__item_type_link');
const addCardButton = popupAddCard.querySelector('.form__button_type_add-card');
const popupAddCardCloseButton = popupAddCard.querySelector('.popup__close');
// card's container
const imageContainer = document.querySelector('.images');
const cardTemplate = document.querySelector('#card-template').content;
// image opened
const popupImage = document.querySelector('.popup_type_image');
const popupImageOpened = popupImage.querySelector('.popup__image');
const popupImageCloseButton = popupImage.querySelector('.popup__close');
const popupImageCaption = popupImage.querySelector('.popup__caption');
// Calling multiple elements
const closeButtons = document.querySelectorAll('.popup__close');
const popupList = Array.from(document.querySelectorAll('.popup'));
const spanError = document.querySelectorAll('.form__input-error');
// adjusting the submit button
const profileInputs = Array.from(popupEditProfile.querySelectorAll('.form__item'));
const profileButton = popupEditProfile.querySelector('.form__button');
const cardInputs = Array.from(popupAddCard.querySelectorAll('.form__item'));
const cardButton = popupAddCard.querySelector('.form__button');


// Config
const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
};

function deleteTextError() {
  spanError.forEach((spanError) => {
    spanError.textContent = '';
  });
};

// open popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

// close --------------------------------------
// close popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

// close popup by Escape
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// all buttons for closing popups
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// closing popup by clicking outside the button
popupList.forEach((popupElement) => {
  popupElement.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popupElement);
    }
  });
});

// Edit profile --------------------------------
// open
editProfileButton.addEventListener('click', function() {
  openPopup(popupEditProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  
  deleteTextError();
  toggleButtonState(profileInputs, profileButton, validationConfig);
});

// handler
profileForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
});

// image ----------------------------------------
// open image popup
function openImage(title, link) {
  openPopup(popupImage);
  popupImageCaption.textContent = title;
  popupImageOpened.src = link;
  popupImageOpened.alt = title;
}

// card ----------------------------------------------
// open
popupAddCardButton.addEventListener('click', function() {
  openPopup(popupAddCard);
  formAddCard.reset();
  
  deleteTextError();
  toggleButtonState(cardInputs, cardButton, validationConfig);
});

// add
function addCard (title, link) {
  imageContainer.prepend(createCard(title, link));
}

// create
function createCard (title, link) {
 
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image')

  cardElement.querySelector('.card__text').textContent = title;      
  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__image').alt = title;

  
  cardElement.querySelector('.card__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like_active');})
  
  cardElement.querySelector('.card__trash').addEventListener('click', () => {
    cardElement.remove();});
  
  cardImage.addEventListener('click', function() {
    openImage(title, link);});

  return cardElement;
}

// add default card
[...initialCards].reverse().forEach(function(card) {
  addCard(card.name, card.link);
})

// handler
  formAddCard.addEventListener('submit', function (evt) {
  evt.preventDefault();
  addCard(titleCard.value, linkCard.value)
  formAddCard.reset();
  closePopup(popupAddCard);
})

// calling form validation
enableValidation(validationConfig);

*/