/*
1) Create a node class.  The constructor should accept an argument that gets assigned
to the data property and initialize an empty array for storing children. 
The node class should have methods 'add' and 'remove'.

2) Create a tree class. The tree constructor should initialize a 'root' property to null.
3) Implement 'traverseBF' and 'traverseDF' on the tree class.  
Each method should accept a function that gets called with each element in the tree
const node = new Node(1)
const tree = new Tree()
tree.root = node
*/

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((node) => {
      //reassigning result with filtering
      return node.data !== data;
    });
  }
}

class Tree {
  //we're not adding any insert or remove methods. This is because when we have a LinkedList class it was in charge of all of the elements inside of it. With a tree whenever we want to add or remove, we have to very precisely specify which node we want to be adding or removing elements from. We have to take both Node and Tree into account.
  constructor() {
    this.root = null; //root is the absolute head property
  }

  traverseBF(fn) {
    //Breadth First Traversal
    const arr = [this.root]; //Taking the top node and adding it to an Array.
    while (arr.length) {
      const node = arr.shift(); // while the array has something in it (truthy value) 0 is falsy
      // We want to add all of the children from the node and we can do that via the spread operator.
      // We cannot do arr.push(node.children) because this will cause a nested array.
      arr.push(...node.children);
      fn(node);
      debugger;
    }
  }

  traverseDF(fn) {
    //Depth First Traversal  (very similar)
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

const letters = [];
const t = new Tree();
t.root = new Node("a");
t.root.add("b");
t.root.add("c");
t.root.children[0].add("d");

t.traverseBF((node) => {
  letters.push(node.data);
});

module.exports = { Tree, Node };

/*
shift() 
  Removes the first element from an array and returns it.If the array is empty, undefined is returned and the array is not modified.
unshift()
  Inserts new elements at the start of an array, and returns the new length of the array.

console.log(Boolean([].length)) 
  false 
ALTERNATIVE SYNTAX

arr.unshift(...node.children);

for (let child of node.children) {
        arr.push(child)
      }
*/
