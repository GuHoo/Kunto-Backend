export default class Snackbar {
  constructor({ message, isOpen } = { message: "", isOpen: false }) {
    this._message = message;
    this._isOpen = isOpen;
  }

  reset() {
    this._message = "";
  }

  get isOpen() {
    return this._isOpen;
  }

  get message() {
    return this._message;
  }
}
