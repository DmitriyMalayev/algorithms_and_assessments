/* Implement a Queue datastructure using two stacks.
 *Do not* create an array inside of the 'Queue' class.
 Queue should implement the methods 'add', 'remove', and 'peek'.
 For a reminder on what each method does, look back
 at the Queue exercise.
 --- Examples
     const q = new Queue();
     q.add(1);
     q.add(2);
    q.peek();  // returns 1
    q.remove(); // returns 1
    q.remove(); // returns 2
*/

/*
Stacks => FILO (First In Last Out)
Queues => FIFO (First In First Out)

Remove Method
   For every record that we pop from the first stack we will push it to the second stack
   We then use our peek method to check if there are any records left that we can manipulate. 
   Then we call the pop method on the second stack 
   Before returning the record we have to restore everything back to the first stack in case 
Peek Method
  Similar to the remove method with the exception that instead of popping the second stack we will just peek at it. 
*/ 


const Stack = require("./stack");

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }
}

module.exports = Queue;
