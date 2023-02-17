export default class Api {
  constructor({name, about}) {
    this._name = name;
    this._activity = about;
  }

  getInitialProfileData() {
    fetch('https://mesto.nomoreparties.co/v1/cohort-60/users/me', {
      headers: {
        authorization: 'b9ad9483-6c42-4e9a-8a8f-d7555df6de20'
      }
    })
    .then(res => res.json())
    .then((data) => {
      this._name.textContent = data.name;
      this._activity.textContent = data.about;
    })
    
  }

  changeProfileData(data) {
    fetch('https://mesto.nomoreparties.co/v1/cohort-60/users/me', {
      method: 'PATCH',
      headers: {
        authorization: 'b9ad9483-6c42-4e9a-8a8f-d7555df6de20',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  getInitialCards() {
    // ...
  }

}

// fetch('https://mesto.nomoreparties.co/v1/cohort-60/users/me', {
//   headers: {
//     authorization: 'b9ad9483-6c42-4e9a-8a8f-d7555df6de20'
//   }
// })
// .then(res => res.json())
// .then((data) => {
//   console.log( data );
// })