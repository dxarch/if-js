const sum = (a) => (b) => a + b;

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const getColor = (colors, clickCount) =>
  colors[(clickCount - 1) % colors.length];

export { sum, getColor, colors };
