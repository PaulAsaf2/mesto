// import { FormValidator } from './validate.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { 
  initialCards, popupAddCardButton, editProfileButton
  , popupImage, popupImageOpened, popupImageCaption
  , nameProfile, jobProfile, popupAddCard
  , formAddCard, titleCard, linkCard
  , popupEditProfile, profileForm, nameInput, jobInput
  , closeButtons, popupList, validationConfig, imageContainer 
} from './constants.js' ;


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

// adding user's cards to a page
function addingCardsByUser(cardDataByPopup) { 
    const cardElement = createCard(cardDataByPopup);
    imageContainer.prepend(cardElement);
}

// adding default cards to a page
function addDefaultCard() {
  initialCards.forEach((cardData) => {
   const cardElement = createCard(cardData);
   imageContainer.append(cardElement);
  })
}

// creating a card using a class
function createCard(cardData) {
  const card = new Card(cardData, '#card-template', handleOpenImage);
  return card.generateCard();
}

addDefaultCard();

// Open the popup for adding a card
popupAddCardButton.addEventListener('click', () => {
  openPopup(popupAddCard);
  formAddCard.reset();
  
  cardValidationForm.deleteTextError();
  cardValidationForm.deleteLineError();
  cardValidationForm.toggleButtonState();
})

// Handler for adding a card
formAddCard.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const cardDataByPopup = {
    title: titleCard.value,
    link: linkCard.value };

  addingCardsByUser(cardDataByPopup);
  closePopup(popupAddCard);
})

// open the card image
function handleOpenImage(title, link) {
  popupImageCaption.textContent = title;
  popupImageOpened.src = link;
  popupImageOpened.alt = title;

  openPopup(popupImage);
}

// profile ----- profile ----- profile ----- profile ----- profile ----- profile ----- profile

// open
editProfileButton.addEventListener('click', () => {
  openPopup(popupEditProfile);

  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  
  profileValidationForm.deleteTextError();
  profileValidationForm.deleteLineError();
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