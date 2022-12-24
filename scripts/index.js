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
// add
function addCard (title, link) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image')
        cardElement.querySelector('.card__text').textContent = title;      
        cardElement.querySelector('.card__image').src = link;
        cardImage.alt = title;
        cardElement.querySelector('.card__like').addEventListener('click', function(evt) {
          evt.target.classList.toggle('card__like_active');})
        cardElement.querySelector('.card__trash').addEventListener('click', () => {
        cardElement.remove();});
        cardImage.addEventListener('click', function() {
          openImagePopup(title, link);
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
  closePopup(popupAddCard);
})