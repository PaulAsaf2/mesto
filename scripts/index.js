const initialCards = [
  {
    name: 'Москва',
    link: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Пекин',
    link: 'https://images.unsplash.com/photo-1620964780032-81ef649db4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Нью-Дели',
    link: 'https://images.unsplash.com/photo-1592639296346-560c37a0f711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Пальмира',
    link: 'https://images.unsplash.com/photo-1602674471917-2f5fbd54535e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80'
  },
  {
    name: 'Минск',
    link: 'https://images.unsplash.com/photo-1591509352193-c3e6676f71c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Тегеран',
    link: 'https://images.unsplash.com/photo-1613881348993-bc547b53daba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
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
const popupImageOpened = popupImage.querySelector('.popup__image');
const popupImageCloseButton = popupImage.querySelector('.popup__close');
const popupImageCaption = popupImage.querySelector('.popup__caption');

const TEST = document.querySelector('.header__logo');


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

// image popup
function HandlerImagePopup(title, link) {
  openPopup(popupImage);
  popupImageCaption.textContent = title;
  popupImageOpened.src = link;
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
// close
popupImageCloseButton.addEventListener('click', function() {
  removePopup(popupImage)
})

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
  const cardImage = cardElement.querySelector('.card__image')
        cardElement.querySelector('.card__text').textContent = title;      
        cardElement.querySelector('.card__image').src = link;

        cardElement.querySelector('.card__like').addEventListener('click', function(evt) {
          evt.target.classList.toggle('card__like_active');})
        cardElement.querySelector('.card__trash').addEventListener('click', () => {
        cardElement.remove();});
        cardImage.addEventListener('click', function() {
          HandlerImagePopup(title, link);
        });
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