/* 
Return the 'middle' node of a linked list.
If the list has an even number of elements, return
the node at the end of the first half of the list.
  *Do not* use a counter variable, *do not* retrieve
the size of the list, and only iterate
through the list one time.
Example
  const l = new LinkedList();
  l.insertLast('a')
  l.insertLast('b')
  l.insertLast('c')
  midpoint(l); // returns { data: 'b' }
Note
  list.getFirst() === list.head

*/
function midpoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    //checking if both are defined
    slow = slow.next; //move by 1
    fast = fast.next.next; //move by 2
  }

  return slow; //returns when the while loop exits
}

module.exports = midpoint;
