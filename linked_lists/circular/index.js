/* 
Given a linked list, return true if the list is circular, false if it is not.
  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  
  l.head = a;
  a.next = b;
  b.next = c;
  c.next = b;
  circular(l) // true
*/

function circular(list) { 
  let slow = list.getFirst();  //same as list.head
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {  //If either is pointing to null it's not circular. null is falsy.  
    slow = slow.next;  //+1
    fast = fast.next.next; //+2

    if (slow === fast) {  //if both are pointing to the same exact node. We're not checking the data contents. 
      return true;
    }
  }

  return false;
}

module.exports = circular;
