/* Implement classes Node and Linked Lists
 See 'directions' document
 
 null => specifically set to nothing
 undefined => property has not been set 
*/
class Node {
  constructor(data, next = null) {
    this.data = data; //can be of any data type
    this.next = next; //reference to the next node along the chain. it's an optional argument.
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Initialized with no head node associated with it.
    //The head node is the very first node in a LinkedList. The only property that will be assigned to a LinkedList. 
    //The tail node is the very end node in a LinkedList. It does not have a reference to any other node.
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
    //repairing the head reference
  }
}

// const list = new LinkedList()
// list.head = new Node(10)

module.exports = { Node, LinkedList };
