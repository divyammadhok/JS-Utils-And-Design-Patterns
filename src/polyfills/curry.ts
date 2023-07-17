/**
 * Currying is a concept where we transform a function to be callable multiple
 * times. Instead of taking args in a single go
 */

function curry<T>(callBack: (...args: T[]) => void) {
  return function curriedCallback(...args: T[]) {
    // Here we check if passed arguments are greater or equal than what the function expects
    if (args.length >= callBack.length) {
      // if yes just call it

      // return callBack(...args);]
      // using apply to maintain `this` reference
      return callBack.apply(this, args);
    }

    // In case of args length being less, we concatenate and recall the returned func recursively
    return function (...newArgs: T[]) {
      // return curriedCallback(...args, ...newArgs);
      return curriedCallback.apply(this, args.concat(newArgs));
    };
  };
}

function sum(a, b, c) {
  console.log(this);
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3));
console.log(curriedSum(1, 2)(3));
