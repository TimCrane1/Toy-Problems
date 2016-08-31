//---- Bubble Sort ----//

//Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. 
//The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.

function bubbleSort (input) {
  for (var i = 0; i < input.length; i++) {
    var temp;
    if (input[i] > input[i+1]) {
      temp = input[i+1];
      input[i+1] = input[i];
      input[i] = temp;
      bubbleSort(input);
    }
  }
  return input;
}