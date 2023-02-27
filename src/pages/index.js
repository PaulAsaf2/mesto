import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import './index.css';
import { 
  popupAddCardButton, editProfileButton, 
  popupImageOpened, popupImageCaption, cardForm,
  profileForm, validationConfig, cardContainer,
  userData, popupSelector, editAvatarButton,
  avatarForm, popupDeleteCardButton
} from '../scripts/utils/constants.js' ;
import Api from '../scripts/components/Api.js';
import PopupWithConfirmation from '../scripts/components/PopupWithConfirmation.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-60',
  headers: {
    authorization: 'b9ad9483-6c42-4e9a-8a8f-d7555df6de20',
    'Content-Type': 'application/json'
  }
})

// валидация ----- валидация ----- валидация ----- валидация

// Экземпляры валидации форм
const profileValidationForm = new FormValidator(validationConfig, profileForm);
const cardValidationForm = new FormValidator(validationConfig, cardForm);
const avatarValidationForm = new FormValidator(validationConfig, avatarForm);

// активация валидации форм
profileValidationForm.enableValidation();
cardValidationForm.enableValidation();
avatarValidationForm.enableValidation();

// профиль ----- профиль ----- профиль ----- профиль ----- профиль

// помещаю данные профиля
const userInfo = new UserInfo(userData);

// получаю с сервера данные профиля
api.getProfileData()
  .then((profileData) => {
    userInfo.setUserInfo(profileData);
    userInfo.setAvatar(profileData);
  })
  .catch(err => console.log(err))

// данные профиля отправляю на сервер
const profileInfo = new PopupWithForm({
  selector: popupSelector.popupProfile,
  handleFormSubmit: (formData) => {
    api.setProfileData(formData)
      .catch(err => console.log(err))
      .finally(() => profileInfo.renderLoading(false));
  }
})

// открытие попапа профиля
editProfileButton.addEventListener('click', () => {
  profileInfo.setInputValues(userInfo.getUserInfo())
  profileValidationForm.deleteErrorElements()
  profileInfo.openPopup();
})

// активация слушаетеля
profileInfo.setEventListeners()

// аватар ----- аватар ----- аватар ----- аватар ----- аватар ----- аватар

// отправляю данные аватарки на сервер
const avatarInfo = new PopupWithForm({
  selector: popupSelector.popupAvatar,
  handleFormSubmit: (formData) => {
    api.changeAvatar(formData)
      .catch(err => console.log(err))
      .finally(() => avatarInfo.renderLoading(false));
  }
})

// открытие попапа аватара
editAvatarButton.addEventListener('click', () => {
  avatarInfo.openPopup()
  avatarValidationForm.deleteErrorElements()
})

// активация слушаетеля
avatarInfo.setEventListeners()

// карточки ----- карточки ----- карточки ----- карточки ----- карточки

// отображение карточек
const rendererCard = new Section({ renderer: (cardData) => {
    const card = new Card(cardData, '#card-template', handleCardClick, openPopupDeleteCard, toggleLike);
    const cardElement = card.generateCard();
    rendererCard.addDefaultItem(cardElement);
    }},
  cardContainer
)

// получение массива карточек
api.getInitialCards()
  .then((initialCards) => {
    rendererCard.rendererItems(initialCards)
  })
  .catch(err => console.log(err))

// создание новой карточки
const newCard = new PopupWithForm({
  selector: popupSelector.popupCard,
  handleFormSubmit: (formData) => {
    api.createCard(formData)
      .catch(err => console.log(err))
      .finally(() => newCard.renderLoading(false))
  }
});

// открытие попапа
popupAddCardButton.addEventListener('click', () => {
  cardValidationForm.deleteErrorElements()
  newCard.openPopup();
})

// активация слушаетеля
newCard.setEventListeners()

// переключение лайка
const toggleLike = (cardId, checkLike) => {
  if (!checkLike) {
    api.putLike(cardId)
      .catch(err => console.log(err))
  } else {
    api.deleteLike(cardId)
      .catch(err => console.log(err))
  }
}

// удаление карточки 
const confirmationPopup = new PopupWithConfirmation({
  popupDelete: popupDeleteCardButton,
  handleFormSubmit: (id) => { api.deleteCard(id) }
  },
  popupSelector.popupCardDelete, 
)

// открытие попапа
const openPopupDeleteCard = (id) => {
  confirmationPopup.getId(id)
  confirmationPopup.openPopup()
  
}

// активация слушаетеля
confirmationPopup.setEventListeners()

// открытие изображения
const openImage = new PopupWithImage({
  popupImageCaption, popupImageOpened
  }, 
  popupSelector.popupImage
)

const handleCardClick = (title, link) => {
  openImage.openPopup(title, link)
}

openImage.setEventListeners()

