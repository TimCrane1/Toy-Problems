//---- Is Sorted And How ----//

//The function isSortedAndHow accepts an array of integers, and returns one of the following:

//'yes, ascending' - if the numbers in the array are sorted in an ascending way
//'yes, descending' - if the numbers in the array are sorted in a descending way
//'no'

function isSortedAndHow(array) {
	//make shallow, sorted, copies of the input array to check against
	let ascending = array.slice().sort(function(a, b) { return a - b});
 	let descending = array.slice().sort(function(a, b) { return b - a});
 	//helper function to compare input array against a sorted array
	function check(arr1, arr2) {
   	for (let i = 0; i < arr1.length; i++) {
     	if (arr1[i] != arr2[i]) {
       		return false;
     	}
     	return true;
   		}
 	}
 	//call the helper function with input array and sorted arrays as arguments
 	if (check(array, ascending)) {
   		return 'yes, ascending';
 	} else if (check(array, descending)) {
   		return 'yes, descending';
 	}
 	return 'no';
}