import { sum, getColor, colors } from '../scripts/functions';
test('Two plus five equals seven', () => {
  expect(sum(2)(5)).toBe(7);
});
test('Tenth click returns skyblue color form array', () => {
  expect(getColor(colors, 10)).toBe('skyblue');
});
