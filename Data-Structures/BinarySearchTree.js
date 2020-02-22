class BinarySearchTree {
  constructor(input) {
    this.value = input;
    this.left = null;
    this.right = null;
  };
  insert(input) {
    // While
    var current = this;
    while (current) {
      if (input > current.value) {
        if (!current.right) {
          current.right = new BinarySearchTree(input);
          break;
        } else {
          current = current.right
        }
      } else {
        if (!current.left) {
          current.left = new BinarySearchTree(input)
          break;
        } else {
          current = current.left
        }
      }
    }

    // Recursion
    // var current = this;
    // if (input > current.value) {
    //   if (!current.right) {
    //     current.right = new BinarySearchTree(input);
    //   } else {
    //     current.right.insert(input);
    //   }
    // } else {
    //   if (!current.left) {
    //     current.left = new BinarySearchTree(input);
    //   } else {
    //     current.left.insert(input);
    //   }
    // }
  }
}

var BST = new BinarySearchTree(6)
BST.insert(9)
BST.insert(7)
BST.insert(5)
BST.insert(10)
BST.insert(3)

console.log(BST);