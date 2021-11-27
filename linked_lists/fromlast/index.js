/*
Given a linked list and integer n, return the element n spaces from the last node in the list.  
Do not call the 'size' method of the linked list. (size - n then call getAt(n)) 
Assume that n will always be less than the length of the list.

   const list = new List();
   list.insertLast('a');
   list.insertLast('b');
   list.insertLast('c');
   list.insertLast('d');
    fromLast(list, 2).data // 'b'

*/
function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (n > 0) {
    fast = fast.next;  //moves n number of spaces
    n--;  //decrements by 1 until 0
  }

  while (fast.next) { //while it's not null
    slow = slow.next; //+1
    fast = fast.next;  //+1
  }

  return slow;
}

module.exports = fromLast;
 