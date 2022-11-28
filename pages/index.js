let editProfile = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');

editProfile.addEventListener('click', function() {
  popup.classList.add('popup__opened');
});

popupClose.addEventListener('click', function () {
  popup.classList.remove('popup__opened');
});