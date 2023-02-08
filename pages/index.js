import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import Popup from '../scripts/components/Popup.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import { 
  initialCards, popupAddCardButton, editProfileButton, 
  popupImage, popupImageOpened, popupImageCaption, 
  nameProfile, jobProfile, popupAddCard, 
  formAddCard, titleCard, linkCard, 
  popupEditProfile, profileForm, nameInput, jobInput, 
  closeButtons, popupList, validationConfig, imageContainer,
  cardDataByPopup
  
} from '../scripts/utils/constants.js' ;

// --------------------------------------------------
const openImage = new PopupWithImage({
  popupImageCaption, popupImageOpened
  }, 
  popupImage
)

const handleCardClick = (title, link) => {
  openImage.openPopup(title, link)
}
// --------------------------------------------------
const rendererCard = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#card-template', handleCardClick);
    const cardElement = card.generateCard();
    rendererCard.addDefaultItem(cardElement);
    }
  },
  imageContainer
)

rendererCard.rendererItems()
// --------------------------------------------------
popupAddCardButton.addEventListener('click', () => {
  const popupCard = new Popup(popupAddCard);
  popupCard.openPopup();
})
// --------------------------------------------------
const popupCard = new PopupWithForm({
  selector: popupAddCard,
  handleFormSubmit: (formData) => {
    const userCard = new Card(formData, '#card-template', handleCardClick);
    const cardElement = userCard.generateCard();

    rendererCard.addUserItem(cardElement);
  }
});
// --------------------------------------------------


// const popupCardRenderer = new Section({
//   data: [],
// }, imageContainer)

// popupCardRenderer.addItem(cardElement)

console.log( popupCard.generateForm() );
console.log( popupCard._getInputValues() );



// card ----- card ----- card ----- card ----- card ----- card ----- card ----- card ----- card

// adding user's cards to a page
function addingCardsByUser(cardDataByPopup) { 
    const cardElement = createCard(cardDataByPopup);
    imageContainer.prepend(cardElement);
}

// Open the popup for adding a card
// popupAddCardButton.addEventListener('click', () => {
//   openPopup(popupAddCard);
//   formAddCard.reset();
    
//   cardValidationForm.deleteTextError();
//   cardValidationForm.deleteLineError();
//   cardValidationForm.toggleButtonState();
// })

// Handler for adding a card
// formAddCard.addEventListener('submit', (evt) => {
//   evt.preventDefault();

//   const cardDataByPopup = {
//     title: titleCard.value,
//     link: linkCard.value };

//   addingCardsByUser(cardDataByPopup);
//   closePopup(popupAddCard);
// })

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

const profileValidationForm = new FormValidator(validationConfig, profileForm);
const cardValidationForm = new FormValidator(validationConfig, formAddCard);

profileValidationForm.enableValidation();
cardValidationForm.enableValidation();
// ? ----- ? ----- ? ----- ? ----- ? ----- ? ----- ? ----- ? ----- ? ----- ? ----- ? -----