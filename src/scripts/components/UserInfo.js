export default class UserInfo {
  constructor({name, about}) {
    this._name = name;
    this._about = about;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent
    }
  }

  // setUserInfo(formData) {
  //   console.log( formData );
  //   const { name, about } = formData
  //   this._name.textContent = name;
  //   this._about.textContent = about;
  // }
}