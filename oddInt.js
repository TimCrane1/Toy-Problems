//---- Odd Integer ----//
//Given an array, the function findOdd should return the integer that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.

function findOdd(A) {

	let obj = {};
 	for (let i = 0; i < A.length; i++){
 		//iterate though the array, if an integer exists as a key in the obj, increment it's value
 		//else, initialize that integer as a key in the obj and set it's value to 1
  		obj[A[i]] ? obj[A[i]]++ : obj[A[i]] = 1;
 	}
 	//check all values in the obj for an odd number
 	//if found, return it's key/integer
 	for (var num in obj){
   		if(obj[num] % 2 !== 0) {
    	 return +num;
   		}
 	}
}