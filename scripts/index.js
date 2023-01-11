// calling elements ------------------------------
// profile
const profile = document.querySelector('.profile');
const nameProfile = profile.querySelector('.profile__name');
const jobProfile = profile.querySelector('.profile__activity');
const editProfileButton = profile.querySelector('.profile__edit');
const popupEditProfile = document.querySelector('.popup_type_profile');
const popupEditProfileCloseButton = popupEditProfile.querySelector('.popup__close');
// profile form
const profileForm = document.querySelector('.form');
const nameInput = profileForm.querySelector('.form__item_type_name');
const jobInput = profileForm.querySelector('.form__item_type_activity');
// create card
const popupaddCardButton = profile.querySelector('.profile__add');
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

// open popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// close popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Edit profile --------------------------------
// open
editProfileButton.addEventListener('click', function() {
  openPopup(popupEditProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});
// close
popupEditProfileCloseButton.addEventListener('click', function() {
  closePopup(popupEditProfile);
});
// handler
profileForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
});

// image ----------------------------------------
// close
popupImageCloseButton.addEventListener('click', function() {
  closePopup(popupImage)
})
// open image popup
function openImagePopup(title, link) {
  openPopup(popupImage);
  popupImageCaption.textContent = title;
  popupImageOpened.src = link;
  popupImageOpened.alt = title;
}

// card ----------------------------------------------
// open
popupaddCardButton.addEventListener('click', function() {
  openPopup(popupAddCard);
});
// close
popupAddCardCloseButton.addEventListener('click', function() {
  closePopup(popupAddCard);
  formAddCard.reset();
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
addCardButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  addCard(titleCard.value, linkCard.value)
  formAddCard.reset();
  closePopup(popupAddCard);
})

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
});