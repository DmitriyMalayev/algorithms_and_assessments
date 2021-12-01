/*
Given a root node, validate the binary search tree. 
Ensure that every node's left hand child is less than the parent node's value, 
and that every node's right hand child is greater than the parent
*/

function validate(node, min = null, max = null) {
  //When we move to the left we check max value, when we move to the right we check min value.
  //Checking the case if we have not yet set a max value and if the value is more than the max value
  if (max !== null && node.data > max) {
    return false;
  }
  if (min !== null && node.data < min) {
    return false;
  }

  //If there is a presence of a node on the left and if calling validate with the node on the left, and some minimum value and then a maximum value of the current nodes data and it returns false, we will flip it with the ! and it will return a true value.  !validate causes recursion to occur. 
  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }
  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }
  return true
}

module.exports = validate;