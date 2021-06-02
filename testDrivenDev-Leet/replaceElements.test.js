const replaceElements = require('./replaceElements.js');

describe('#replaceElements', () => {
  test('it replaces each element with the largest element to the right', () => {
    const input = [17,18,5,4,6,1];
    expect(replaceElements(input)).toEqual([18,6,6,6,1,-1])
  })

  test('it returns [-1] if there is only 1 value in the input array', () => {
    const input = [400];
    expect(replaceElements(input)).toEqual([-1]);
  })
})

