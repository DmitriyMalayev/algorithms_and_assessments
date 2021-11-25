class Node {
  constructor(data, next = null) {
    this.data = data; //can be of any data type
    this.next = next; //reference to the next node along the chain. it's an optional argument.
  }
}
class LinkedList {
  constructor() {
    this.head = null; // Initialized with no head node associated with it.
  }
  insertFirst(data) {
    this.head = new Node(data, this.head); //any existing node can be passed as a second argument
  }

  insertFirstAlternative(data) {
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next();
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getFirstAlternative() {
    return this.getAt(0)
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  getLastAlternative() {
    return this.getAt(this.last -1)
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
      previous = node;
      node = node.next; //same as argument but assigns it
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++; //increments by one
      node = node.next; //sets the node variable to the next node in the chain. If it's null, the while loop will exit.
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next; //Assigns the head of the linked list to the next node. It will be null if there isn't a next node.
      return;
    }
    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next; //skips the index
  }
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
    }
    if (index === 0) {
      this.head = new Node(data, this.head); //The second argument is used as the next reference
    }
    const previous = this.getAt(index - 1) || this.getLast(); //If the first part returns a falsy value we want previous to be set to the last node of the chain
    const node = new Node(data, previous.next); //created node and put in the middle
    previous.next = node;
  }
}

module.exports = { Node, LinkedList };
