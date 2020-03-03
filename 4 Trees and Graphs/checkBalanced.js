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

console.log(checkBalanced({ 
  value: 6,
  left: { 
    value: 2,
    left: {
      value: 0,
      left: null,
      right: {
        value: 3,
        left: null,
        right: null
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
          left: {
            value: 12,
            left: null,
            right: null
          },
          right: null
        }
      },
      right: {
        value: 11,
        left: null,
        right: null
      }
    }
  }
}))