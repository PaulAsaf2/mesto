// Вызов элементов ------------------------------

const profile = document.querySelector('.profile');
const editProfile = profile.querySelector('.profile__edit');
const nameProfile = profile.querySelector('.profile__name');
const jobProfile = profile.querySelector('.profile__activity');
const addCard = profile.querySelector('.profile__add');

const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

const form = document.querySelector('.form');
const nameInput = form.querySelector('.form__item_type_name');
const jobInput = form.querySelector('.form__item_type_activity');

const popupEditProfile = document.querySelector('.popup_type_profile');
const popupAddCard = document.querySelector('.popup_type_card');


// Функции --------------------------------------




// Открытие диалогового окна
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Заккрытие диалогового окна
function removePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Обработчик формы
function handleFormSubmit (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  removePopup(popupEditProfile);
}

// Слушатели ------------------------------------

// Button open edit profile
editProfile.addEventListener('click', function() {
  openPopup(popupEditProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;

});

// Button open add card
addCard.addEventListener('click', function() {
  openPopup(popupAddCard);
});


popupClose.addEventListener('click', function() {
  removePopup(popupEditProfile);
});

popupClose.addEventListener('click', function() {
  console.log(removePopup(popupAddCard));
});




form.addEventListener('submit', handleFormSubmit);