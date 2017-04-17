//---- Remove Anchor ----//

//The function removeUrlAnchor returns the url with anything after the anchor (#) removed

function removeUrlAnchor(url){
  
  let result = '';
  //iterate over the input url pushing each character to the result as long as the current index is not '#'
  for (let i = 0; i < url.length; i++) {
    if (url[i] === '#') {
      return result;
    }
    result+= url[i];
  }
  return result;
}

//Or using the split() method

function removeUrlAnchor(url){
  return url.split('#')[0];
}