class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
    //repairing the head reference
  }
}

const nodeOne = new Node(5);

const list = new LinkedList();
list.head = nodeOne;
list.insertFirst(15);
list; //{ "head": {"data": 15, "next"{"data": 5, "next": null}}}
