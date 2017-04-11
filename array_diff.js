//---- Array Diff ----//

//The function array_diff should return all values from array a which are not present in array b.

function array_diff(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i ++) {
    if (!b.includes(a[i])){
      result.push(a[i]);
    }
  }
  return result;
}