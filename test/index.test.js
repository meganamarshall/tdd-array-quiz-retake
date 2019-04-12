const bigArray = require('../lib/index.js');

describe('array function', () => {
  it('takes an array and modifies it', () => {
    const array = [1, 3, 5, 7, 2];
    console.log(bigArray(array), 'expect');
    expect(bigArray(array)).toEqual(['Wow, 7 is big!']);
  });
});
