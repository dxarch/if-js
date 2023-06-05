import { sum, getColor, colors } from './functions.js';

console.log(sum(2)(5));

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const clicks = [0, 0, 0];

text1.addEventListener('click', () => {
  clicks[0] += 1;
  text1.style.color = getColor(colors, clicks[0]);
});

text2.addEventListener('click', () => {
  clicks[1] += 1;
  text2.style.color = getColor(colors, clicks[1]);
});

text3.addEventListener('click', () => {
  clicks[2] += 1;
  text3.style.color = getColor(colors, clicks[2]);
});
