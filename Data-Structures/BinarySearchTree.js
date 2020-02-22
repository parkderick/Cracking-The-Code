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
          current = current.right;
        }
      } else {
        if (!current.left) {
          current.left = new BinarySearchTree(input);
          break;
        } else {
          current = current.left;
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
  search(input) {
    // While
    var current = this;
    while (current) {
      if (current.value === input) {
        return true;
      }
      if (input < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
    
    // Recursion
    // var current = this;
    // if (current.value === input) {
    //   return true;
    // }
    // if (input < current.value) {
    //   if (current.left) {
    //     return current.left.search(input) || false;
    //   }
    // } else {
    //   if (current.right) {
    //     return current.right.search(input) || false;
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
console.log('ME', BST.search(2))
console.log('ME', BST.search(3))
console.log(BST);