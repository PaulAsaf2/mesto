// calling elements ------------------------------
// profile
const profile = document.querySelector('.profile');
const nameProfile = profile.querySelector('.profile__name');
const jobProfile = profile.querySelector('.profile__activity');
const editProfileButton = profile.querySelector('.profile__edit');
const popupEditProfile = document.querySelector('.popup_type_profile');
const popupEditProfileCloseButton = popupEditProfile.querySelector('.popup__close');
// profile form
const profileForm = document.querySelector('.form');
const nameInput = profileForm.querySelector('.form__item_type_name');
const jobInput = profileForm.querySelector('.form__item_type_activity');
// create card
const popupaddCardButton = profile.querySelector('.profile__add');
const popupAddCard = document.querySelector('.popup_type_card');
const titleCard = popupAddCard.querySelector('.form__item_type_card-title');
const linkCard = popupAddCard.querySelector('.form__item_type_link');
const addCardButton = popupAddCard.querySelector('.form__button_type_add-card');
const popupAddCardCloseButton = popupAddCard.querySelector('.popup__close');
// card's container
const imageContainer = document.querySelector('.images');
const cardTemplate = document.querySelector('#card-template').content;
// image opened
const popupImage = document.querySelector('.popup_type_image');
const popupImageOpened = popupImage.querySelector('.popup__image');
const popupImageCloseButton = popupImage.querySelector('.popup__close');
const popupImageCaption = popupImage.querySelector('.popup__caption');


// Functions -----------------------------------

// Мы не должны изменять изначальны массив, но reverse изменяет его. 
// Вместо использования reverse лучше манипулировать порядком добавления 
// карточек в контейнер при помощи использования append и prepend (в зависимости от ситуации) 
// reverse array
initialCards.reverse(); // !!!!!!!!!!!!!!!!!!!



// add default card
initialCards.forEach(function(card) {
  addCard(card.name, card.link);
})

// open popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// close popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// open image popup
function openImagePopup(title, link) {
  openPopup(popupImage);
  popupImageCaption.textContent = title;
  popupImageOpened.src = link;
  popupImageOpened.alt = title;
}


// Edit profile --------------------------------
// open
editProfileButton.addEventListener('click', function() {
  openPopup(popupEditProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});
// close
popupEditProfileCloseButton.addEventListener('click', function() {
  closePopup(popupEditProfile);
});
// handler
profileForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
});

// image ----------------------------------------
// close
popupImageCloseButton.addEventListener('click', function() {
  closePopup(popupImage)
})

// New card -------------------------------------
// open
popupaddCardButton.addEventListener('click', function() {
  openPopup(popupAddCard);
});
// close
popupAddCardCloseButton.addEventListener('click', function() {
  closePopup(popupAddCard);
});


  // Функция должна выполнять только одно действие, а сейчас она выполняет минимум 2:
  // создает карточку и добавляет карточку в DOM. 
  // Функционал создания карточки следует вынести в функцию createCard(title, link) ,
  // она должна просто возвращать карточку.
  // Функционал добавления карточки в DOM следует вынести в функцию addCard 

// create
// function createCard(title, link) {

// }

// function addCard () {

// }

// add
function addCard (title, link) {
// клонирование содержимого тега template
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image')
// добавление в карточку название, ссылку и описание
  cardElement.querySelector('.card__text').textContent = title;      
  cardElement.querySelector('.card__image').src = link;
  cardImage.alt = title;
// слушатель кнопки Нравится
  cardElement.querySelector('.card__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like_active');})
// слушатель кнопки Удаление
  cardElement.querySelector('.card__trash').addEventListener('click', () => {
    cardElement.remove();});
// слушатель открытия изображения
  cardImage.addEventListener('click', function() {
    openImagePopup(title, link);});
// добавление карточек в начало узла
  imageContainer.prepend(cardElement);
}
// handler
addCardButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  addCard(titleCard.value, linkCard.value)
  titleCard.value = '';
  linkCard.value = '';
  closePopup(popupAddCard);
})