/* eslint no-extend-native:0 */

Array.prototype.myGroup = function <T>(callbackFn: (args: T) => void, thisArg) {
  const groupedObj = {};

  for (let i = 0; i < this.length; i++) {
    const type = callbackFn.call(thisArg || null, this[i]);

    if (!!Object.keys(groupedObj).length && groupedObj[type])
      groupedObj[type].push(this[i]);
    else {
      groupedObj[type] = [this[i]];
    }
  }

  return groupedObj;
};

const inventory = [
  {
    name: "asparagus",
    type: "vegetables",
    quantity: 5
  },
  {
    name: "bananas",
    type: "fruit",
    quantity: 0
  },
  {
    name: "goat",
    type: "meat",
    quantity: 23
  },
  {
    name: "cherries",
    type: "fruit",
    quantity: 5
  },
  {
    name: "fish",
    type: "meat",
    quantity: 22
  }
];

const result2 = inventory.myGroup(({ type }) => type);

console.log(result2);

export {};
