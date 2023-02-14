  export default class Section {
  constructor({data, renderer}, selector) {
    this._initialArray = data;
    this._renderer = renderer;
    this._container = selector;
  }

  rendererItems() {
    this._initialArray.forEach(item => this._renderer(item));
  }

  addDefaultItem(cardElement) {
    this._container.append(cardElement);
  }

  addUserItem(cardElement) {
    this._container.prepend(cardElement);
  }
}