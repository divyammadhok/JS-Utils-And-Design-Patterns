/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
  let timer = null;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      /**
       * Forwarding `this` to the function
       * 1. Use an arrow function to declare the setTimeout callback where the this value within it has lexical scope. The value of this within arrow functions is bound to the context in which the function is created, not to the environment in which the function is called.
       * 2. Use another variable to keep a reference to this and access this via that variable from within the setTimeout callback. This is the traditional way of preserving this before arrow functions existed. Outside of return we could've done `const context = this` and used that context in call
       */
      func.apply(this, args);
    }, wait);
  };
}

function sayHello() {
  console.log("My name is", this.name);
}

const amy = {
  name: "amy",
  speak: debounce(sayHello)
};

// would error if this was not forwarded
console.log(amy.speak());
