import Validator from '../Validator';

test('test validation', () => {
  const validator = new Validator;
  expect(validator.validateUserName('name')).toBe(true);
  expect(validator.validateUserName('1name')).toBe(false);
  expect(validator.validateUserName('name1')).toBe(false);
  expect(validator.validateUserName('_name')).toBe(false);
  expect(validator.validateUserName('name_')).toBe(false);
  expect(validator.validateUserName('name-')).toBe(false);
  expect(validator.validateUserName('na1234me')).toBe(false);
  expect(validator.validateUserName('na!me')).toBe(false);
  expect(validator.validateUserName('-name')).toBe(false);
});
