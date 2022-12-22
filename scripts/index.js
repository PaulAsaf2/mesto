const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// calling elements ------------------------------

const profile = document.querySelector('.profile');
const editProfileButton = profile.querySelector('.profile__edit');
const nameProfile = profile.querySelector('.profile__name');
const jobProfile = profile.querySelector('.profile__activity');
const popupaddCardButton = profile.querySelector('.profile__add');

const popup = document.querySelector('.popup');
const popupEditProfileCloseButton = document.querySelector('.popup__close');

const profileForm = document.querySelector('.form');
const nameInput = profileForm.querySelector('.form__item_type_name');
const jobInput = profileForm.querySelector('.form__item_type_activity');

const popupEditProfile = document.querySelector('.popup_type_profile');

const popupAddCard = document.querySelector('.popup_type_card');
const popupAddCardCloseButton = popupAddCard.querySelector('.popup__close');
const addCardButton = document.querySelector('.form__button_type_add-card');

const imageContainer = document.querySelector('.images');
const cardTemplate = document.querySelector('#card-template').content;

const popupImage = document.querySelector('.popup_type_image');


// Functions -----------------------------------

// reverse array
initialCards.reverse();

// add default card
initialCards.forEach(function(card) {
  addCard(card.name, card.link);
})

// open popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// close popup
function removePopup(popup) {
  popup.classList.remove('popup_opened');
}


// Edit profile -------------------------
// open
editProfileButton.addEventListener('click', function() {
  openPopup(popupEditProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});
// close
popupEditProfileCloseButton.addEventListener('click', function() {
  removePopup(popupEditProfile);
});
// handler
profileForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  removePopup(popupEditProfile);
});

// image ----------------------------------------
// open


// New card -------------------------------------
// open
popupaddCardButton.addEventListener('click', function() {
  openPopup(popupAddCard);
});
// close
popupAddCardCloseButton.addEventListener('click', function() {
  removePopup(popupAddCard);
});
// add
function addCard (title, link) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
        cardElement.querySelector('.card__text').textContent = title;
        cardElement.querySelector('.card__image').src = link;
        cardElement.querySelector('.card__like').addEventListener('click', function(evt) {
          evt.target.classList.toggle('card__like_active');
        })
        cardElement.querySelector('.card__trash').addEventListener('click', () => {
        cardElement.remove();});
        imageContainer.prepend(cardElement);
}
// handler
addCardButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  const titleCard = document.querySelector('.form__item_type_card-title');
  const link = document.querySelector('.form__item_type_link');
  addCard(titleCard.value, link.value)
  titleCard.value = '';
  link.value = '';
  removePopup(popupAddCard);
})