/* eslint no-extend-native:0 */

Array.prototype.myFlat = function () {
  function makeFlat(arr) {
    if (!arr.length) return [];

    let ans = [];

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        ans = ans.concat(makeFlat(arr[i]));
      } else {
        ans.push(arr[i]);
      }
    }

    return ans;
  }

  const newArr = makeFlat.call(this, this);

  for (let i = 0; i < newArr.length; i++) {
    this[i] = newArr[i];
  }
};

const arr = [2, 2, [1, [2], 3]];
arr.myFlat();
console.log(arr, "flattened");
