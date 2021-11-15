/* Implement classes Node and Linked Lists
 See 'directions' document
 
 null => specifically set to nothing
 undefined => missing assignment 
*/
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }
  insertFirst(data) {
    this.head = new Node(data, this.head)
    //repairing the head reference
  }

}



// const list = new LinkedList()
// list.head = new Node(10)

module.exports = { Node, LinkedList };
