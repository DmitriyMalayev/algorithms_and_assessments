function levelWidth(root) {
  const arr = [root, "stopper"];
  const width_counter = [0];

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
