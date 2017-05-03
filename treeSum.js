//---- Tree Sum ----//

//Given a node object representing a binary tree:
// Node:
//   value: <int>,
//   left: <Node> or null,
//   right: <Node> or null

//The function treeSum should return the sum of all values, including the root.

// Examples: 10
//           | \
//           1  2
//           => 13

//           1
//           | \
//           0  0
//               \
//                2
//           => 3

function treeSum(root){
  //initiate the variable sum with the root value
  let sum = root.value;
  //if root.left is not null, add to sum the value of recursively calling treeSum on root.left
  if (root.left) {
    sum+= treeSum(root.left);
  }
  //same for root.right
  if (root.right) {
    sum+= treeSum(root.right);
  }
  return sum;
}
