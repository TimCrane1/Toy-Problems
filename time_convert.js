//---- Time Convert ----//

//The function timeConvert should take an integer as parameter and
//return the number of hours and minutes the integer converts to with hours and minutes colon-separated.
//For example: 63 => 1:3 

function timeConvert(num) { 
  if (num < 60) {
    return "0:" + String(num);
  }
  else {
    return String(Math.floor(num / 60)) + ":" + String(num % 60); 
  }    
}