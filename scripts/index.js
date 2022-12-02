// Вызов элементов ---------------------------------------
let popup = document.querySelector('.popup');
let profile = document.querySelector('.profile');
let form = document.querySelector('.form');

// Открытие/закрытие попапа ------------------------------

let editProfile = profile.querySelector('.profile__edit');
let popupClose = popup.querySelector('.popup__close');

function toggleVisiblePopup() {
  popup.classList.toggle('popup_active');
  nameInput.setAttribute('value', nameProfile.textContent);
  jobInput.setAttribute('value', jobProfile.textContent);
}

editProfile.addEventListener('click', toggleVisiblePopup);
popupClose.addEventListener('click', toggleVisiblePopup);

// Редактирование попапа ----------------------------------

// Данные профиля на странице
let nameProfile = profile.querySelector('.profile__name');
let jobProfile = profile.querySelector('.profile__activity');
// Данные профиля в попапе
let nameInput = form.querySelector('.form__item_type_name');
let jobInput = form.querySelector('.form__item_type_activity');

// Обработчик формы
function handleFormSubmit (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  toggleVisiblePopup();
}

form.addEventListener('submit', handleFormSubmit); 