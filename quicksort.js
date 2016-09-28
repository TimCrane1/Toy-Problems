//---- Quick Sort ----//

//Quicksort (sometimes called partition-exchange sort) is an efficient sorting algorithm. 

//The function quickSort should:
//1. Choose any element of the array to be the pivot. 
//2. Divide all other elements (except the pivot) into two partitions.
//3. All elements less than the pivot should be in the first partition.
//4. All elements greater than the pivot must be in the second partition.
//5. Recursively apply the above process to the two partitions
//6. Join the first sorted partition, the pivot, and the second sorted partition.

function quickSort(arr) {
    //check for empty array
    if (arr.length === 0) {
    return [];
  }
    //set the pivot to the middle element of the array
    var pivot = arr.splice([Math.floor(arr.length/2)], 1);
    var less = [];
    var more = [];
      //iterate though the array comparing each element to the pivot
      //and sorting into tow arrays of greater or lesser
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= pivot) {
          less.push(arr[i]);
        } else if (arr[i] > pivot) {
          more.push(arr[i]);
        }
      }
      //return a recursive call of quickSort on the lesser array
      //concatenated with a recursive call to quickSort on the greater array
      return quickSort(less).concat(pivot, quickSort(more));
}
