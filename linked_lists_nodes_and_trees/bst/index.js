/*
1) Implement the Node class to create a binary search tree.  
The constructor should initialize values 'data', 'left', and 'right'.
2) Implement the 'insert' method for the Node class.  
Insert should accept an argument 'data', then create an insert a new node at the appropriate location in the tree.
3) Implement the 'contains' method for the Node class.  
Contains should accept a 'data' argument and return the Node in the tree with the same value.
If the value isn't in the tree return null.
*/
class Node {
  //handles data that is passed in.
  //this.left and this.right are references to child nodes.We're specifying null because it doesn't have children.
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    //insert data at the appropriate location of the tree.  If the incoming data value is less than this.data and this.left is not null then we want to do the following:
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data); //create a new Node and pass it in
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }
  //contains is similar to search through our tree
  contains(data) {
    if (this.data === data) {
      return this; //returning the entire node
    }
    //verifying that this.data is less than the data that's passed in and that there is a node present on the right side
    //With recursion we need to have a return statement if there is a presence of a value
    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }

    return null; //if some data argument does not exist in our tree
  }
}

module.exports = Node;
