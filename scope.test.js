const scopeModule = require('./scope');

test('should returns 1700 in the first call', () => {
  scopeModule.reset();
  expect(scopeModule.rachelAddToBalance()).toBe("Rachel Green remaining balance is 1700");
});

test('should returns 1900 in the second call', () => {
  scopeModule.reset();
  expect(scopeModule.rachelAddToBalance()).toBe("Rachel Green remaining balance is 1700");
  expect(scopeModule.rachelAddToBalance()).toBe("Rachel Green remaining balance is 1900");
});

test('should returns 2100 in the third call', () => {
  scopeModule.reset();
  expect(scopeModule.rachelAddToBalance()).toBe("Rachel Green remaining balance is 1700");
  expect(scopeModule.rachelAddToBalance()).toBe("Rachel Green remaining balance is 1900");
  expect(scopeModule.rachelAddToBalance()).toBe("Rachel Green remaining balance is 2100");
});