// Вызов элементов ------------------------------

let popup = document.querySelector('.popup');
let profile = document.querySelector('.profile');
let form = document.querySelector('.form');
// Открытие/закрытие окна
let editProfile = profile.querySelector('.profile__edit');
let popupClose = popup.querySelector('.popup__close');
// Данные профиля на странице
let nameProfile = profile.querySelector('.profile__name');
let jobProfile = profile.querySelector('.profile__activity');
// Данные профиля в попапе
let nameInput = form.querySelector('.form__item_type_name');
let jobInput = form.querySelector('.form__item_type_activity');

// Функции --------------------------------------

// Открытие окна
function popupActive() {
  popup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}
// Заккрытие окна
function popupRemove() {
  popup.classList.remove('popup_opened');
}
// Обработчик формы
function handleFormSubmit (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupRemove();
}

// Слушатели ------------------------------------

editProfile.addEventListener('click', popupActive);
popupClose.addEventListener('click', popupRemove);
form.addEventListener('submit', handleFormSubmit); 