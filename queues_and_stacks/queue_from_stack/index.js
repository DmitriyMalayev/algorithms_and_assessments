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
    this.first = new Stack(); //Created two stacks and assigned them to the queue
    this.second = new Stack();
  }

  add(record) {
    //Taking a record and push it to the first stack. After adding all of our records and then if we call remove() on it, it will remove the first record added.
    this.first.push(record);
  }

  remove() {
    // We cannot iterate through a stack we can only peek. For every record that is in the first stack we take it out and push it to the second stack.
    // The while loop will run until it no longer returns a truthy value.
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    // We are not immediately returning the record, we only create a reference to it.
    // We want because we first need to restore the stack to it's original version, so it's ready for the next call to remove() method.
    const record = this.second.pop();

    // Same loop but for the second stack.
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record; //return the record
  }

  
  peek() {
    // while there are still records in the first stack, we take the record and put it into the second stack
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    // Getting a record to the top record inside of the second stack
    const record = this.second.peek();

    // while there are records in the second stack, we move it to the first stack. 
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }
}

module.exports = Queue;
