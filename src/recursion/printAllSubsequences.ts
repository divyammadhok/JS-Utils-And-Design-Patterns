const a = [3, 1, 2];

function printSubsequences(arr: number[], i: number, res: number[]) {
  // base
  if (i === arr.length) {
    console.log(res.toString());
    return;
  }

  // Push in array is one branch
  res.push(arr[i]);
  // go back in recursive loop
  printSubsequences(arr, i + 1, res);
  // remove from array the item added at ln 10
  res.pop();
  // Go back in recursive loop
  printSubsequences(arr, i + 1, res);
}

printSubsequences(a, 0, []);
export {};
