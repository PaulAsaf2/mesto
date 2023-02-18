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

  setUserInfo(formData) {
    const { name, about } = formData;
    this._name.textContent = name;
    this._about.textContent = about;
  }

  setAvatar(formData) {
    const { avatar } = formData;
    this._avatar.src = avatar
  }

}