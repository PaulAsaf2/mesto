import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import './index.css';
import { 
  initialCards, popupAddCardButton, editProfileButton, 
  popupImageOpened, popupImageCaption, 
  formAddCard, nameInput, jobInput,
  profileForm, validationConfig, imageContainer,
  userData, popupSelector, 
} from '../scripts/utils/constants.js' ;

const userInfo = new UserInfo(userData);

const profileValidationForm = new FormValidator(validationConfig, profileForm);
const cardValidationForm = new FormValidator(validationConfig, formAddCard);

// --------------------------------------------------
const openImage = new PopupWithImage({
  popupImageCaption, popupImageOpened
  }, 
  popupSelector.popupImage
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
  cardValidationForm.deleteErrorElements()
  newCard.openPopup();
})

editProfileButton.addEventListener('click', () => {
  const { name, activity } = userInfo.getUserInfo()
  nameInput.value = name;
  jobInput.value = activity;

  profileValidationForm.deleteErrorElements()
  profileInfo.openPopup();
})
// --------------------------------------------------
const newCard = new PopupWithForm({
  selector: popupSelector.popupCard,
  handleFormSubmit: (formData) => {
    const userCard = new Card(formData, '#card-template', handleCardClick);
    const cardElement = userCard.generateCard();
    rendererCard.addUserItem(cardElement);
  }
});

const profileInfo = new PopupWithForm({
  selector: popupSelector.popupProfile,
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
  }
})
// --------------------------------------------------
rendererCard.rendererItems()

openImage.setEventListeners()
newCard.setEventListeners()
profileInfo.setEventListeners()

profileValidationForm.enableValidation();
cardValidationForm.enableValidation();