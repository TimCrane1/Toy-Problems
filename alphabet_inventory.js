//---- Alphabet Inventory ----//

//The function alphaCount should take as parameters an alphabet and a text. 
//alphaCount should tally the count of each letter defined in said alphabet (case insensitive), and return the result of this tally.
//For example: 		alphabet: |  text:	               |  output:
//					      "aBc"     | "aabbccdd"             |  "a:2,b:2,c:2"
//                "x"       | "X is my friend"       |  "x:1"            
//                "hue_3"   | "anlecxkac.gpaoo._43_" |  "e:1,_:2,3:1"

function alphaCount (alphabet, text) {
  alphabet = alphabet.toLowerCase();
  text = text.toLowerCase();
  var result = "";
  var counted = [];
  var props = false;
  //iterate through alphabet, if alphabet letter in text push letter to counted to make sure it is only tallied once
  for (var i = 0; i < alphabet.length; i++) {
  	if (text.indexOf(alphabet[i]) !== -1 && counted.indexOf(alphabet[i]) === -1) {
  		counted.push(alphabet[i]);
  		var temp = alphabet[i];
  		var count = 0;
  		for (var j = 0; j < text.length; j++) {
  			//tally
  			if (text[j] === temp) {
  				count++;
  			}
  		}
  		//concatenate key-value pair of tallied character onto result
  		if (props < 1) {
  			result+= temp + ':' + count;
  			props = true;
  		} else {
  			result+= ',' + temp + ':' + count;
  		}
  	}
  }
  if (props === false) {
    return "no matches";
  }
  return result;
}                          
