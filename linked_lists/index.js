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
    // insert method, not an override method. insertFirst is called with some data and it's up to us to create a new Node.
    this.head = new Node(data, this.head); //any existing node can be passed as a second argument
    //repairing the head reference
  }

  size() {
    let counter = 0;
    let node = this.head;
    //Reference to the head node(first node) inside of our LinkedList

    while (node) {
      counter++;
      node = node.next();
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      // checking if there are any nodes
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        // if null, it's the last node
        return node;
      }
      node = node.next;
    }
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      // checking there aren't any nodes
      return;
    }
    if (!this.head.next) {
      //checking if there is only one node
      this.head = null; //removed
      return;
    }
    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      //checking if there is an additional element to iterate through. If null means end of list. 
      previous = node;  
      node = node.next;  //same as argument but assigns it
    }
    previous.next = null 
  }
}

module.exports = { Node, LinkedList };

/*
size()
    If the LinkedList does not have a head node assigned to it, 
      then the while loop is going to check to see if node is a truthy or falsy value, 
      if it's falsy value then the while loop will not run.
    If it's a truthy value, the while loop runs and increments the counter variable because it has found 1 node.
    Then it checks the current node and it's next property, it will either be another node or the value null. 
    If it's truthy the while loop runs again up until it's a falsey value. 

*/
