//---- Balance ----//

// The function balance recieves as arguments two strings consisting of exclamation points and question marks, a right and a left.
// Each exclamation point weight is 2; Each question mark weight is 3.
// If the left side is heavier, balance should return "Left"; If the right side is heavier, "Right". If they are balanced, "Balance".
// For Example:
// balance("!!","??") === "Right"
// balance("!??","?!!") === "Left"
// balance("!!???!????","??!!?!!!!!!!") === "Balance"

function balance(left,right){
  let rightSum = 0;
  let leftSum = 0;
  for (let i = 0; i < left.length; i++) {
    left[i] === "!" ? leftSum+= 2 : leftSum+= 3;
  }
  for (let i = 0; i < right.length; i++) {
    right[i] === "!" ? rightSum+= 2 : rightSum+= 3;
  }
  return leftSum === rightSum ? "Balance" : leftSum > rightSum ? "Left" : "Right";
}

// Using the built-in array method 'Reduce'

function balance(left,right) {
  const leftSum = left.split("").reduce((a, b) => a + ((b === "!") ? 2 : 3), 0);
  const rightSum = right.split("").reduce((a, b) => a + ((b === "!") ? 2 : 3), 0);
  return leftSum === rightSum ? "Balance" : leftSum > rightSum ? "Left" : "Right";
}