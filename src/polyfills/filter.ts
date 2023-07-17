/* eslint no-extend-native:0 */
// const a = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function <T>(
  fn: (args: T) => boolean,
  thisArg?: any
) {
  const result = [];

  for (const x of this) {
    // This is done over here in case of a special this condition being present in the callback so we need to bind it.
    // PS: It's possible that callback uses `this` but then that'll point to the this it should
    if (fn.call(thisArg, x)) result.push(x);
  }

  return result;
};

// const newArr = a.myFilter((x) => !(x % 2));

// function isEven(num: number): boolean {
//   console.log(num, "num");
//   return num % 2 === 0 && (this as unknown as any)?.isValid(num);
// }

// const newArr = a.myFilter(isEven, {
//   isValid: function (num: number) {
//     return num < 4;
//   }
// });

// const x = {
//   myAge: 2,
//   ages: [2, 4, 5, 6, 7, 8],
//   filterMyAge: function (x: number) {
//     return x !== this.myAge;
//   }
// };

// // Should print even numbers
// console.log(x.ages.myFilter(x.filterMyAge), "myfilter");

export {};
