const BinarySearchTree = require('../Data-Structures/BinarySearchTree.js');

// Successor: Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a binary search tree. You may assume that each node has a link to its parent.
// O: Boolean
// I: graph, node1, node2
// C: N/A
// E: N/A

4.6
function successor(node, bst) {
  var arr = [];
  function DFS(bst) {
    bst.left && DFS(bst.left);
    arr.push(bst)
    bst.right && DFS(bst.right);
  }
  DFS(bst);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].value === node.value) {
      return arr[i+1]
    }
  }
}

// Time: O(n)
// Space: O(n)

/* TEST */
var bst = new BinarySearchTree(6);
bst.insert(1);
bst.insert(0);
bst.insert(2);
bst.insert(8);
bst.insert(7);
bst.insert(9);
bst.insert(5);
bst.insert(4);
bst.insert(11);
console.log(successor({value: 2}, bst));
