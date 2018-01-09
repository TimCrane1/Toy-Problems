//---- Deep Count ----//
//The array prototype function .length returns the number of top-level elements in an array.
//The function deepCount returns the number of ALL elements within an array, including any within inner-level arrays. (Input is always an array)

//For example:
//deepCount([1, 2, 3]);  
//>>>>> 3
//deepCount(["x", "y", ["z"]]);  
//>>>>> 4
//deepCount([1, 2, [3, 4, [5]]]);  
//>>>>> 7

function deepCount(a){
  //set count to the number of top-level elements in 'a' using .length
  let count = a.length;
  for(let i =0; i < a.length; i++){
    //iterate through 'a' and call deepCount recursively on any arrays adding the result of that call to count
    if(Array.isArray(a[i])){
      count+= deepCount(a[i]);
    }
  }
  return count;
}