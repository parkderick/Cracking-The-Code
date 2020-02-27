// Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algo- rithm to create a binary search tree with minimal height.
// O: Tree
// I: array, height
// C: N/A
// E: N/A

4.2
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Solution 1
function minimalTree(array, min) {
  var root = array[min];
  var BST = new TreeNode(root);
  var lTemp = BST;
  var rTemp = BST;
  for (var i = 0; i < array.length; i++) {
    if (i !== min) {
      if (array[i] > rTemp.value) {
        rTemp.right = new TreeNode(array[i])
        rTemp = rTemp.right
      } else if (array[i] < lTemp.value) {
        lTemp.left = new TreeNode(array[i])
        lTemp = lTemp.left;
      } else {
        lTemp.right = new TreeNode(array[i])
        lTemp = lTemp.right;
      }
    }
  }
  return BST
}


// Time: O(n)
// Space: O(n)

// Solution 2
function minimalTree(array, min) {
  var root = array[min];
  var BST = new TreeNode(root);
  BST.left = innerNodes(array.slice(0, min))
  BST.right = innerNodes(array.slice(min + 1, array.length))
  var innerNodes = (nodes, dir) => {
    if (nodes.length !== 0) {
      var instance = new Node(nodes[0]);
      instance.right = innerNodes(nodes.slice(1,  nodes.length));
      return instance
    }
  }
  return BST
}

// Time: O(n)
// Space: O(n)