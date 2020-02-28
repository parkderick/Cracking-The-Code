const BinarySearchTree = require('../Data-Structures/BinarySearchTree.js');

// Validate BST: Implement a function to check if a binary tree is a binary search tree. Hints: #35, #57, #86, # 773, # 728

// O: Boolean
// I: binary tree
// C: N/A
// E: N/A

4.5
function validateBST(BT) {
  if (!BT.left && !BT.right) {
    return false;
  }
  var root = BT.value;
  var bool = true;
  DFS(BT.left, 'left');
  DFS(BT.right, 'right');

  function DFS(node, direction) {
    if (direction === 'left') {
      if (node.value > root) {
        bool = false;
      }
      node.left && DFS(node.left, direction);
      node.right && DFS(node.right, direction);
    } else {
      if (node.value < root) {
        bool = false;
      }
      node.left && DFS(node.left, direction);
      node.right && DFS(node.right, direction);
    }
  }
  return bool
}

/* TEST */
var bst = new BinarySearchTree(6);
bst.insert(1);
bst.insert(2);
bst.insert(7);
bst.insert(9);
bst.insert(5);
bst.insert(4);
bst.insert(11);
console.log(validateBST(bst));

console.log(validateBST({ 
  value: 6,
  left: { 
    value: 2,
    left: {
      value: 0,
      left: null,
      right: {
        value: 3,
        left: null,
        right: {
          value: 7,
          left: null,
          right: null
        }
      }
    },
    right: {
      value: 4,
      left: null,
      right: null
    }
  },
  right: {
    value: 7,
    left: null,
    right: {
      value: 10,
      left: {
        value: 8,
        left: null,
        right: {
          value: 9,
          left: null,
          right: {
            value: 12,
            left: null,
            right: null
          }
        }
      },
      right: {
        value: 11,
        left: null,
        right: null
      }
    }
  }
}));