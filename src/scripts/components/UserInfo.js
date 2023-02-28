export default class UserInfo {
  constructor({name, about, avatar}) {
    this._name = name;
    this._about = about;
    this._avatar = avatar;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent
    }
  }

  setUserInfo(userData) {
    const { name, about } = userData;
    this._name.textContent = name;
    this._about.textContent = about;
  }

  setAvatar(userData) {
    const { avatar } = userData;
    this._avatar.src = avatar
  }

}