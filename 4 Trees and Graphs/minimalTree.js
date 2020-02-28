const BinarySearchTree = require('../Data-Structures/BinarySearchTree.js');

// Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algo- rithm to create a binary search tree with minimal height.
// O: Tree
// I: array, height
// C: N/A
// E: N/A

4.2
// Solution 1
function minimalTree(array, min) {
  var root = array[min];
  var BST = new BinarySearchTree(root);
  var lTemp = BST;
  var rTemp = BST;
  for (var i = 0; i < array.length; i++) {
    if (i !== min) {
      if (array[i] > rTemp.value) {
        rTemp.right = new BinarySearchTree(array[i])
        rTemp = rTemp.right
      } else if (array[i] < lTemp.value) {
        lTemp.left = new BinarySearchTree(array[i])
        lTemp = lTemp.left;
      } else {
        lTemp.right = new BinarySearchTree(array[i])
        lTemp = lTemp.right;
      }
    }
  }
  return BST
}

// Solution 2
function minimalTree(array, min) {
  var root = array[min];
  var BST = new BinarySearchTree(root);
  var innerNodes = (nodes, dir) => {
    if (nodes.length !== 0) {
      var instance = new BinarySearchTree(nodes[0]);
      instance.right = innerNodes(nodes.slice(1,  nodes.length));
      return instance
    }
  }
  BST.left = innerNodes(array.slice(0, min))
  BST.right = innerNodes(array.slice(min + 1, array.length))
  return BST
}

// Time: O(n)
// Space: O(n)

/* TEST */
console.log(minimalTree([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));
