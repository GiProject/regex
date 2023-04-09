export default class Validate {
  validateUserName(name) {
    switch (true) {
      case /[^\w-]/.test(name):
      case /[0-9]{4,}/.test(name):
      case /^[\d\-_]/.test(name):
      case /[\d\-_]$/.test(name):
        return false;
      default:
        return true;
    }
  }
}
