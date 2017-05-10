//---- Number Pyramid ----//

// The function numberPyramid should create a pyramid pattern with up to n(parameter) number of rows.
// If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
// All the lines in the pattern have same length i.e equal to the number of characters in the last line.
// If n is a two digit integer only the 2nd digit will be represented in the pyramid so as to maintain an increment of one digit between lines 9 and 10, etc.
// Examples:

//pattern(5):

//     1    
//    121   
//   12321  
//  1234321 
// 123454321

// pattern(15):

//               1              
//              121             
//             12321            
//            1234321           
//           123454321          
//          12345654321         
//         1234567654321        
//        123456787654321       
//       12345678987654321      
//      1234567890987654321     
//     123456789010987654321    
//    12345678901210987654321   
//   1234567890123210987654321  
//  123456789012343210987654321 
// 12345678901234543210987654321

function pattern(n){
  let result = [];
  let spaces = 0;
  let g = n;
  //we will iterate n times which will be the total number of spaces in each line
  for (let i = 0; i < n; i++) {
    //add the number of blank spaces (which will be 0 on the first pass) to the front of the result array
    for (let j = 0; j < spaces; j++) {
      result.unshift(" ");
      
    }
    //add to result integers 1 through g, we initially set the value of g to n so as to be able to decrement g without affecting the value of n
    for (let k = 1; k <= g; k++) {
      //the toString and slice assures we only add the last digit of an integer to result
      result.unshift(+k.toString().slice(-1));
    }
    //and g -1 through 1
    for (let l = g-1; l > 0; l--) {
      result.unshift(+l.toString().slice(-1));
    }
    //and the spaces again
    for (let m = 0; m < spaces; m++) {
      result.unshift(" ");
    }
    //as long as i is less than n (not the final line) add a new-line character to result
    if (i < n-1) {
      result.unshift("\n");
    }
    //increment the number of spaces to print and decrement the highest integer
    spaces++;
    g--;
  }
  //convert the array to a string
  return result.toString().split(',').join('');
}