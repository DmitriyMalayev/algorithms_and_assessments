/*
Given the root node of a tree, return
an array where each element is the width
of the tree at each level.

Given:
    0
  / |  \
1   2   3
|       |
4       5

Answer: [1, 3, 2]

Notes
  root is a single node. 
  We are not working with a Tree.
  Whenever you see the word "width" you should associate it with a Breadth First Traversal 
*/

//first node of the tree accessing the data property of the tree, and "stopper" any value we can identify
//initialize with 0
function levelWidth(root) {
  const arr = [root, "stopper"];
  width_counter = [0];

  //don't confuse with only presence of "stopper".  Also, we remove the first element and return it.
  while (arr.length > 1) {
    const node = arr.shift();

    //If the node we're currently looking at is "stopper" we want to take our width_counter variable and push a new element of 0
    if (node === "stopper") {
      width_counter.push(0);
      arr.push("stopper");
      //If we're working with a node we want to select all of it's children and add them to the end of our array. Also we need to increment the last element in the width_counter index. The last element in width_counter represents the current level of our tree that we're currently working on.
    } else {
      arr.push(...node.children);
      width_counter[width_counter.length - 1]++;
    }
  }
  return width_counter;
}

module.exports = levelWidth;
