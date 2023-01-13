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
// submit buttons
const popupButton = document.querySelectorAll('.form__button');

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
};

// Disabling the button when opening popup
const disableButton = () => {
  popupButton.forEach((item) => {
    item.classList.add(validationConfig.inactiveButtonClass);
    item.disabled = true;
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
const closeButtons = document.querySelectorAll('.popup__close');

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
const popupList = Array.from(document.querySelectorAll('.popup'));
  
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
  disableButton();
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
function openImagePopup(title, link) {
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
  disableButton();
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
    openImagePopup(title, link);});

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