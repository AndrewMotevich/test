const sum = require('./src/index')
describe("SUM TEST", () => {
  test('SHOULD BE 2"', () => {
    expect(sum(1,1)).toBe(2);
  });
  test('SHOULD BE 4"', () => {
    expect(sum(1,3)).toBe(4);
  });
})