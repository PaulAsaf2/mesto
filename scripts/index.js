// import { FormValidator } from './validate.js';
import { Card } from './card.js';
import { FormValidator } from './validate.js';
import { initialCards, popupAddCardButton, editProfileButton
  , nameProfile, jobProfile, popupAddCard, formAddCard, titleCard, linkCard, popupEditProfile, profileForm, nameInput, jobInput
  , closeButtons, popupList, spanError, inputList, validationConfig } from './constants.js' ;


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

function deleteTextError() {
  spanError.forEach((spanItem) => {
    spanItem.textContent = '';
  });
};

function deleteLineError() {
  inputList.forEach((inputItem) => {
    inputItem.classList.remove('form__input_type_error');
  })
}


// card ----- card ----- card ----- card ----- card ----- card ----- card ----- card ----- card

// Open the popup for adding a card
popupAddCardButton.addEventListener('click', () => {
  openPopup(popupAddCard);
  formAddCard.reset();
  
  deleteTextError();
  deleteLineError();

  cardValidationForm.toggleButtonState();
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
  
  deleteTextError();
  deleteLineError();

  profileValidationForm.toggleButtonState();  
});

// Handler for adding profile data
profileForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
});


// validate ----- validate ----- validate ----- validate ----- validate ----- validate ----- validate

const cardValidationForm = new FormValidator(validationConfig, formAddCard);
const profileValidationForm = new FormValidator(validationConfig, profileForm);

cardValidationForm.enableValidation();
profileValidationForm.enableValidation();