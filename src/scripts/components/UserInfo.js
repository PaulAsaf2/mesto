export default class UserInfo {
  constructor({name, activity}) {
    this._name = name;
    this._activity = activity;
  }

  getUserInfo() {
    const { elements } = document.forms.edit_profile;
    const { name, activity } = elements;

    name.value = this._name.textContent
    activity.value = this._activity.textContent
  }

  setUserInfo(formData) {
    const { name, activity } = formData
    this._name.textContent = name;
    this._activity.textContent = activity;
  }
}
