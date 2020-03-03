const BinarySearchTree = require('../Data-Structures/BinarySearchTree.js');

function checkBalanced(BT) {
    if (!BT.left && !BT.right) {
      return true;
    }
    var leftHeight = getHeight(BT.left);
    var rightHeight = getHeight(BT.right);
    
    function getHeight(node){
        if(!node) {
        return 0;
      }
        return 1 + Math.max[getHeight(node.left), getHeight(node.right)];
    }
      return Math.abs(leftHeight - rightHeight) <= 1
  }
  
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
console.log(checkBalanced(bst));