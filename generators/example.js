class Tree {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }
  *printValues() {
    //Creating a generator that is a property of our tree class.
    yield this.value;
    for (let child of this.children) {
      yield* child.printValues();
    }
  }
}

const tree = new Tree(1, [new Tree(2, [new Tree(4)]), new Tree(3)]);
//first node has a child of 2 and 3
//second node on 2 has a child of 4

const treeValues = [];
for (let value of tree.printValues()) {
  values.push(value);
} //4
values; // [1,2,4,3]
