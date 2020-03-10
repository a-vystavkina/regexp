
import Validator from '../app';

test('Успешная валидация', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Stroka');
  expect(received).toBe(true);
});

test('Начинается подчеркиванием', () => {
  const validator = new Validator();
  const received = validator.validateUsername('_Stroka');
  expect(received).toBe(false);
});

test('Заканчивается подчеркиванием', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Stroka_');
  expect(received).toBe(false);
});

test('Начинается с тире', () => {
  const validator = new Validator();
  const received = validator.validateUsername('-Stroka');
  expect(received).toBe(false);
});

test('Начинается с цифры', () => {
  const validator = new Validator();
  const received = validator.validateUsername('1Stroka');
  expect(received).toBe(false);
});

test('Заканчивается цифрой', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Stroka1');
  expect(received).toBe(false);
});

test('Более трех цифр подряд', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Stroka33333');
  expect(received).toBe(false);
});
