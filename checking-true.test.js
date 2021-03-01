// import multiple functions as array
const { trueIsTrue, oneIsTrue, oneIsNotTrue, trueIsFalse1, trueIsFalse2, trueIsFalse3 } = require('./checking-true.js');

test('checks if true == true', () => {
  expect(trueIsTrue()).toBe(true);
});

test('checks if 1 == true', () => {
  expect(oneIsTrue()).toBe(true);
});

test('checks if 1 === true', () => {
  expect(oneIsNotTrue()).toBe(false);
});

test('checks if "true" === true', () => {
  expect(trueIsFalse1()).toBe(false);
});

test('checks if "true" == true', () => {
  expect(trueIsFalse2()).toBe(false);
});

test('checks if true == "true"', () => {
  expect(trueIsFalse3()).toBe(false);
});
