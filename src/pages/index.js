import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import './index.css';
import { 
  // initialCards, 
  popupAddCardButton, editProfileButton, 
  popupImageOpened, popupImageCaption, cardForm,
  profileForm, validationConfig, cardContainer,
  userData, popupSelector, editAvatarButton,
  avatarForm,
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

// Экземпляры валидации форм
const profileValidationForm = new FormValidator(validationConfig, profileForm);
const cardValidationForm = new FormValidator(validationConfig, cardForm);
const avatarValidationForm = new FormValidator(validationConfig, avatarForm);

// профиль ----- профиль ----- профиль ----- профиль ----- профиль

const userInfo = new UserInfo(userData);

api.getProfileData()
  .then((profileData) => {
    console.log( profileData );
    userInfo.setUserInfo(profileData);
    userInfo.setAvatar(profileData);
  })



const profileInfo = new PopupWithForm({
  selector: popupSelector.popupProfile,
  handleFormSubmit: (formData) => {
    api.setProfileData(formData);
  }
})

editProfileButton.addEventListener('click', () => {
  profileInfo.setInputValues(userInfo.getUserInfo())
  profileValidationForm.deleteErrorElements()
  profileInfo.openPopup();
})


const avatarInfo = new PopupWithForm({
  selector: popupSelector.popupAvatar,
  handleFormSubmit: (formData) => {
    api.changeAvatar(formData);
  }
})

editAvatarButton.addEventListener('click', () => {
  avatarInfo.openPopup()
  avatarValidationForm.deleteErrorElements()
})


avatarInfo.setEventListeners()
profileInfo.setEventListeners()

// карточки ----- карточки ----- карточки ----- карточки ----- карточки

console.log(api.getInitialCards());



api.getInitialCards()
  .then((initialCards) => {

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

    rendererCard.rendererItems()
}) // конец api.getInitialCards()

const openImage = new PopupWithImage({
  popupImageCaption, popupImageOpened
  }, 
  popupSelector.popupImage
)


const handleCardClick = (title, link) => {
  openImage.openPopup(title, link)
}

popupAddCardButton.addEventListener('click', () => {
  cardValidationForm.deleteErrorElements()
  newCard.openPopup();
})


const newCard = new PopupWithForm({
  selector: popupSelector.popupCard,
  handleFormSubmit: (formData) => {
    api.createCard(formData)
  }
});

openImage.setEventListeners()
newCard.setEventListeners()


// const obj = {
//   name: 'Card name',
//   link: 'https://4.downloader.disk.yandex.ru/preview/938f7a1b4585dae0389121a0303ab08bfcc00b36091f7d2a30a82120b7e15139/inf/u4ysaXKBfJBu7GEcA5zsP3bG3qm642CaWSGQkxuSHmMguHLCw0dlkEJUTfrO-cF98JjX7684dN153AJFxJEMFw%3D%3D?uid=774528204&filename=2023-02-18%2017-28-37%20Free%20PSD%20%20%20Free%20PSD%203d%20illustration%20of%20person%20with%20long%20hair%20-%20Google%20Chrome.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=774528204&tknv=v2&size=1263x881'
// }
// api.createCard(obj)
  

// Экземпляр изображения в мод. окне
// const openImage = new PopupWithImage({
//   popupImageCaption, popupImageOpened
//   }, 
//   popupSelector.popupImage
// )
// ф. передающая инф-ю изображения
// const handleCardClick = (title, link) => {
//   openImage.openPopup(title, link)
// }

// // Отрисовка карточек по умолчанию
// const rendererCard = new Section({
//   data: initialCards,
//   renderer: (cardData) => {
//     const card = new Card(cardData, '#card-template', handleCardClick);
//     const cardElement = card.generateCard();
//     rendererCard.addDefaultItem(cardElement);
//     }
//   },
//   cardContainer
// )

// слушатели открытия мод. окон
// popupAddCardButton.addEventListener('click', () => {
//   cardValidationForm.deleteErrorElements()
//   newCard.openPopup();
// })

// editProfileButton.addEventListener('click', () => {
//   profileInfo.setInputValues(userInfo.getUserInfo())
//   profileValidationForm.deleteErrorElements()
//   profileInfo.openPopup();
// })

// обработчики модальных окон
// const newCard = new PopupWithForm({
//   selector: popupSelector.popupCard,
//   handleFormSubmit: (formData) => {
//     const userCard = new Card(formData, '#card-template', handleCardClick);
//     const cardElement = userCard.generateCard();
//     rendererCard.addUserItem(cardElement);
//   }
// });

// const profileInfo = new PopupWithForm({
//   selector: popupSelector.popupProfile,
//   handleFormSubmit: (formData) => {
//     userInfo.setUserInfo(formData);
//   }
// })




// вызовы методов
// rendererCard.rendererItems()

// openImage.setEventListeners()
// newCard.setEventListeners()
// profileInfo.setEventListeners()

profileValidationForm.enableValidation();
cardValidationForm.enableValidation();
avatarValidationForm.enableValidation();