// Вызов элементов ------------------------------

const profile = document.querySelector('.profile');
const editProfile = profile.querySelector('.profile__edit');
const nameProfile = profile.querySelector('.profile__name');
const jobProfile = profile.querySelector('.profile__activity');
const addCard = profile.querySelector('.profile__add');

const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

const profileForm = document.querySelector('.form');
const nameInput = profileForm.querySelector('.form__item_type_name');
const jobInput = profileForm.querySelector('.form__item_type_activity');

const popupEditProfile = document.querySelector('.popup_type_profile');

const popupAddCard = document.querySelector('.popup_type_card');
const popupAddCardClose = popupAddCard.querySelector('.popup__close');


// Functions -----------------------------------

// open popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// close popup
function removePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Edit form handler
function handleFormSubmit (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  removePopup(popupEditProfile);
}

// Listeners ------------------------------------

// Edit profile -------------------------
// open
editProfile.addEventListener('click', function() {
  openPopup(popupEditProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});
// close
popupClose.addEventListener('click', function() {
  removePopup(popupEditProfile);
});

// New card -------------------------------------
// open
addCard.addEventListener('click', function() {
  openPopup(popupAddCard);
});
// close
popupAddCardClose.addEventListener('click', function() {
  removePopup(popupAddCard);
});



profileForm.addEventListener('submit', handleFormSubmit);