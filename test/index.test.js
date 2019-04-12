const bigArray = require('../lib/index.js');

describe('array function', () => {
  it('takes an array and modifies it', () => {
    const array = [1, 3, 5, 7, 2];
    expect(bigArray(array)).toEqual(['Wow, 7 is big!']);
  });
  it('won\'t return anything if all numbers are 5 or less', () => {
    const array = [4, 5, 3, 2];
    expect(bigArray(array)).toEqual([]);
  });
});
