//---- Tree ----//

//The function treeMaker should return an implementation of a Tree with addChild and contains methods.

//create new tree using Object.create
var treeMaker = function(value){
  var newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};
//create the methods object as a property of the tree object
treeMaker.methods = {};

//include addChild and contains methods in treeMaker.methods
treeMaker.methods.addChild = function(value){
  var child = Object.create(treeMaker.methods);
  child.value = value;
  child.children = [];
  this.children.push(child);
  
}

treeMaker.methods.contains = function(value){
  if (this.value === value) {
  return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if(this.children[i].contains(value)) {
        return true
        }
      }
    }
  return false
}