  export default class Section {
  constructor({renderer}, selector) {
    this._renderer = renderer;
    this._container = selector;
  }

  rendererItems(initialArray) {
    initialArray.forEach(item => this._renderer(item));
  }

  addDefaultItem(cardElement) {
    this._container.append(cardElement);
  }

  addUserItem(cardElement) {
    this._container.prepend(cardElement);
  }
}