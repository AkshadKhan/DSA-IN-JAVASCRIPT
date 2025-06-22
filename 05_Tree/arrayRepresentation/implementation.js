class BinaryTree {
  constructor(size) {
    this.tree = new Array(size).fill(null);  // initialize with nulls
  }

  insert(value) {
    for (let i = 0; i < this.tree.length; i++) {
      if (this.tree[i] === null) {
        this.tree[i] = value;
        return;
      }
    }
    console.log("Tree is full");
  }

  getLeftChild(index) {
    let leftIndex = 2 * index + 1;
    return this.tree[leftIndex] ?? null;
  }

  getRightChild(index) {
    let rightIndex = 2 * index + 2;
    return this.tree[rightIndex] ?? null;
  }

  getParent(index) {
    if (index === 0) return null;
    let parentIndex = Math.floor((index - 1) / 2);
    return this.tree[parentIndex];
  }

  printTree() {
    console.log(this.tree);
  }
}

// Example usage:
let tree = new BinaryTree(15);
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);

tree.printTree();
console.log("Left child of 0:", tree.getLeftChild(0)); // 20
console.log("Right child of 0:", tree.getRightChild(0)); // 30
console.log("Parent of index 4:", tree.getParent(4)); // 20
