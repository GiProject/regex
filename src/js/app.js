// TODO: write your code here
import Validator from './Validator';

const validator = new Validator();
console.log(validator.validateUserName('name'));
console.log(validator.validateUserName('name-sd_'));
console.log(validator.validateUserName('1name-sd'));
console.log(validator.validateUserName('name-991_1'));
console.log(validator.validateUserName('name/.!'));