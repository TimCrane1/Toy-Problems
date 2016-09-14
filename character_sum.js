//---- Character Sum ----//

//The function charSum should take a string, 
//convert each character into its integer equivalent, and sum the entirety.
//For example: "hey now!1?"  => 1, "0101" => 2

//using a 'for' loop
function charSum (str) {
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    if (!isNaN(+str[i])) {
      sum+= +str[i];
    }
  }
  return sum;
}

//using map, filter, and reduce with ES6 syntax
function charSum (str) {
  return str.split('').map((el) => {return +el})
    .filter((el) => {return !isNaN(el)})
    .reduce((a, b) => {return a + b});
}