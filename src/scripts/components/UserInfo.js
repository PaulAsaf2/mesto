export default class UserInfo {
  constructor({name, activity}) {
    this._name = name;
    this._activity = activity;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      activity: this._activity.textContent
    }
  }

  setUserInfo(formData) {
    const { name, activity } = formData
    this._name.textContent = name;
    this._activity.textContent = activity;
  }
}
