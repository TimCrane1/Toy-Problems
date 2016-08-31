//---- Plus Letters ----//

//The function plusLetters should take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. 
//The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a), to be true each letter must be surrounded by a + symbol. 
//The str parameter will not be empty and will have at least one letter.
//For example: (++d+===+c++==a) => false, (++d+===+c++==+a+) => true

function plusLetters(str) { 

  for(var i = 0; i < str.length; i++){
    if(str[i].match(/[a-z]/i) !== null){
      if (str[i -1] !== '+' || str[i +1] !== '+'){
        return false;
      } else {
        return true;
        }
    }
  }
  return str;         
}