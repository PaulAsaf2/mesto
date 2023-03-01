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

// профиль и карточки ----- профиль и карточки ----- профиль и карточки

let userId;

// получаю и устанавливаю данные пользователя и карточек
Promise.all([api.getProfileData(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    userInfo.setAvatar(userData);
    userId = userData._id
    rendererCard.rendererItems(cards);
  })



// профиль ----- профиль ----- профиль ----- профиль ----- профиль

// обработка данных профиля на странице
const userInfo = new UserInfo(userData);

// открытие попапа профиля
editProfileButton.addEventListener('click', () => {
  profileInfo.setInputValues(userInfo.getUserInfo())
  profileValidationForm.deleteErrorElements()
  profileInfo.openPopup();
})

// обработка данных профиля через попап
const profileInfo = new PopupWithForm({
  selector: popupSelector.popupProfile,
  handleFormSubmit: (formData) => {
    return api.setProfileData(formData)
      .then(userData => userInfo.setUserInfo(userData))
      .catch(err => console.log(err));
  }
})

// активация слушаетеля
profileInfo.setEventListeners()

// аватар ----- аватар ----- аватар ----- аватар ----- аватар ----- аватар

// отправляю данные аватарки на сервер
const avatarInfo = new PopupWithForm({
  selector: popupSelector.popupAvatar,
  handleFormSubmit: (currentLink) => {
    return api.setAvatar(currentLink)
      .then(newLink => userInfo.setAvatar(newLink))
      .catch(err => console.log(err));
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

// отрисовка ИЗНАЧАЛЬНЫХ карточек
const rendererCard = new Section({ renderer: (cardData) => {
    const card = new Card(cardData, '#card-template', handleCardClick, openPopupDeleteCard, toggleLike, userId);
    const cardElement = card.generateCard();
    rendererCard.addDefaultItem(cardElement);
    }},
  cardContainer
)


// создание НОВОЙ карточки
const newCard = new PopupWithForm({
  selector: popupSelector.popupCard,
  handleFormSubmit: (formData) => {
    return api.createCard(formData)
      .then((newCard) => {
        const card = new Card(newCard, '#card-template', handleCardClick, openPopupDeleteCard, toggleLike, userId);
        const cardElement = card.generateCard();
        rendererCard.addUserItem(cardElement);
      })
      .catch(err => console.log(err))
  }
});

// активация слушаетеля созданной карточки
newCard.setEventListeners()

// открытие попапа создания карточки
popupAddCardButton.addEventListener('click', () => {
  cardValidationForm.deleteErrorElements()
  newCard.openPopup();
})


// УДАЛЕНИЕ карточки 
const confirmationPopup = new PopupWithConfirmation({
  popupDelete: popupDeleteCardButton,
  handleFormSubmit: (id) => {
    return api.deleteCard(id)
    .catch(err => console.log(err));
  }
},
popupSelector.popupCardDelete, 
)

// открытие попапа удаления карточки, передача данных карточки
const openPopupDeleteCard = (id, card) => {
  confirmationPopup.getDataForDeleteCard(id, card);
  confirmationPopup.openPopup();
}

// активация слушаетеля удаления карточки
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

// лайк ----- лайк ----- лайк ----- лайк ----- лайк ----- лайк ----- лайк

// переключение лайка
const toggleLike = (cardId, isLiked, card) => {
  if (isLiked) {
    api.deleteLike(cardId)
      .then((myLike) => {card.updateLike(myLike.likes.length)})
  } else {
    api.putLike(cardId)
      .then((myLike) => {card.updateLike(myLike.likes.length)})
  }
}