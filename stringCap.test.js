const stringCap = require('./stringCap');

test('the first letter to be capital', () => {
    expect(stringCap('safar')).toBe("Safar");
  });

  test('the first letter to be capital', () => {
    expect(stringCap('Ali')).toBe("Ali");
  });
  
  