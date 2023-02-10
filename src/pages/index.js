import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import Popup from '../scripts/components/Popup.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import './index.css';
import { 
  initialCards, popupAddCardButton, editProfileButton, 
  popupImage, popupImageOpened, popupImageCaption, 
  popupAddCard, formAddCard, popupEditProfile, 
  profileForm, validationConfig, imageContainer,
  userData
} from '../scripts/utils/constants.js' ;
// --------------------------------------------------
const userInfo = new UserInfo(userData);

const profile = new Popup(popupEditProfile);
const card = new Popup(popupAddCard);

const profileValidationForm = new FormValidator(validationConfig, profileForm);
const cardValidationForm = new FormValidator(validationConfig, formAddCard);
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
  renderer: (cardData) => {
    const card = new Card(cardData, '#card-template', handleCardClick);
    const cardElement = card.generateCard();
    rendererCard.addDefaultItem(cardElement);
    }
  },
  imageContainer
)
// --------------------------------------------------
popupAddCardButton.addEventListener('click', () => {
  
  cardValidationForm.deleteTextError();
  cardValidationForm.deleteLineError();
  cardValidationForm.toggleButtonState();
  
  card.openPopup();
})

editProfileButton.addEventListener('click', () => {

  userInfo.getUserInfo()

  profileValidationForm.deleteTextError();
  profileValidationForm.deleteLineError();
  profileValidationForm.toggleButtonState();
  
  profile.openPopup();
})
// --------------------------------------------------
const newCard = new PopupWithForm({
  selector: popupAddCard,
  handleFormSubmit: (formData) => {
    const userCard = new Card(formData, '#card-template', handleCardClick);
    const cardElement = userCard.generateCard();
    rendererCard.addUserItem(cardElement);
  }
});

const profileInfo = new PopupWithForm({
  selector: popupEditProfile,
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
  }
})
// --------------------------------------------------
rendererCard.rendererItems()
newCard.setEventListeners()
profileInfo.setEventListeners()

profileValidationForm.enableValidation();
cardValidationForm.enableValidation();