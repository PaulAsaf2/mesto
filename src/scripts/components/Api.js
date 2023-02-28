export default class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // профиль ----- профиль ----- профиль ----- профиль ----- профиль

  // получает данные профиля
  getProfileData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    .then((res) => {
      if (res.ok) { return res.json() };
      
    return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  // отправляет данные профиля
  setProfileData(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then((res) => {
      if (res.ok) { return res.json() }
    
    return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

// аватар ----- аватар ----- аватар ----- аватар ----- аватар ----- аватар

  // отправляет данные аватара
  changeAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(link)
    })
    .then((res) => {
      if (res.ok) { return res.json() }

    return Promise.reject(`Ошибка: ${res.status}`);
    })
  }
  
// карточки ----- карточки ----- карточки ----- карточки ----- карточки

  // получает данные карточек
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
    .then((res) => {
      if (res.ok) { return res.json() }

    return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  // отправляет данные для создания карточки
  createCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then((res) => {
      if (res.ok) { return res.json() }

    return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  // отправляет данные на удаление карточки
  deleteCard(data) {
    return fetch(`${this._baseUrl}/cards/${data}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then((res) => {
      if (res.ok) { return res.json() }

    return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

// лайк ----- лайк ----- лайк ----- лайк ----- лайк ----- лайк ----- лайк

  // отправляет данные пользователя поставившего лайк
  putLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
    .then((res) => {
      if (res.ok) { return res.json() }

    return Promise.reject(`Ошибка: ${res.status}`);
    })
  }
  
  // отправляет данные на удаление пользователя поставившего лайк
  deleteLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then((res) => {
      if (res.ok) { return res.json() }

    return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

}