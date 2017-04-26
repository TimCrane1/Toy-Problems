//---- Ten Minute Walk ----//

//User-Story: You live in the city of Cartesia where all roads are laid out in a perfect 
//grid. You arrived ten minutes too early to an appointment, so you decided to take the 
//opportunity to go for a short walk. The city provides its citizens with a Walk 
//Generating App on their phones -- everytime you press the button it sends you an array
//of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You
//know it takes you one minute to traverse one city block, so the function tenMinWalk 
//should return true if the walk the app gives you will take you exactly ten minutes 
//(you don't want to be early or late!) and will, of course, return you to your starting 
//point. It should return false otherwise.

//Example: tenMinWalk(['n','s','n','s','n','s','n','s','n','s']) ==> true;
//         tenMinWalk(['w','e','s','e','w','n','w','n','w','e','w','e']) ==> false;

function tenMinWalk(walk) {
  let obj = {};
  let count = 0;
  //iterate over the array of directions, if the direction exists in obj increment it
  //if not, put it into obj as a key with a value of 1
  for (let i = 0; i < walk.length; i++) {
    count++;
    if (obj[walk[i]]) {
      obj[walk[i]]++;
    } else {
      obj[walk[i]] = 1;
    }
  }
  //check that there are 10 total directions and n equal amount of north/south, east/west
  if (count === 10 && obj.n === obj.s && obj.e === obj.w) {
    return true;
  }
  return false;
}