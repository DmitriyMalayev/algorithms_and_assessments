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

class LinkedList {}

module.exports = { Node, LinkedList };
