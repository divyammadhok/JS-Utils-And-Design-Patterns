/* eslint no-extend-native:0 */
const a = [1, 2, 3, 4, 5];

Array.prototype.myMap = function <T>(fn: (args: T) => void) {
  const res = [];

  for (let i = 0; i < this.length; i++) {
    res.push(fn(this[i]));
  }

  return res;
};

a.myMap((x) => x + 1);

export {};
