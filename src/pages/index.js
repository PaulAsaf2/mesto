import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import './index.css';
import { 
  initialCards, popupAddCardButton, editProfileButton, 
  popupImageOpened, popupImageCaption, cardForm,
  profileForm, validationConfig, cardContainer,
  userData, 
  popupSelector
} from '../scripts/utils/constants.js' ;
import Api from '../scripts/components/Api.js';
import PopupWithConfirmation from '../scripts/components/PopupWithConfirmation.js';

const api = new Api(userData)

api.getInitialProfileData();
api.changeProfileData()




// экземпляр обработки инф-ии профиля
const userInfo = new UserInfo(userData);

// Экземпляры валидации форм
const profileValidationForm = new FormValidator(validationConfig, profileForm);
const cardValidationForm = new FormValidator(validationConfig, cardForm);

// Экземпляр изображения в мод. окне
const openImage = new PopupWithImage({
  popupImageCaption, popupImageOpened
  }, 
  popupSelector.popupImage
)
// ф. передающая инф-ю изображения
const handleCardClick = (title, link) => {
  openImage.openPopup(title, link)
}

// Отрисовка карточек по умолчанию
const rendererCard = new Section({
  data: initialCards,
  renderer: (cardData) => {
    const card = new Card(cardData, '#card-template', handleCardClick);
    const cardElement = card.generateCard();
    rendererCard.addDefaultItem(cardElement);
    }
  },
  cardContainer
)

// слушатели открытия мод. окон
popupAddCardButton.addEventListener('click', () => {
  cardValidationForm.deleteErrorElements()
  newCard.openPopup();
})

editProfileButton.addEventListener('click', () => {
  profileInfo.setInputValues(userInfo.getUserInfo())
  profileValidationForm.deleteErrorElements()
  profileInfo.openPopup();
})

// обработчики модальных окон
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
    // userInfo.setUserInfo(formData);
    api.changeProfileData(formData)
  }
})




// вызовы методов
rendererCard.rendererItems()

openImage.setEventListeners()
newCard.setEventListeners()
profileInfo.setEventListeners()

profileValidationForm.enableValidation();
cardValidationForm.enableValidation();