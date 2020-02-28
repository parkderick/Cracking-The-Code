// Validate BST: Implement a function to check if a binary tree is a binary search tree. Hints: #35, #57, #86, # 773, # 728

4.5
function validateBST(BT) {
  if (!BT.left && !BT.right) {
    return false;
  }
  var root = BT.value;
  var bool = true;
  var left = DFS(BT.left, 'left');
  var right = DFS(BT.right, 'right');

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

// ValidateBST({ 
//   value: 6,
//   left: { 
//     value: 2,
//     left: {
//       value: 0,
//       left: null,
//       right: {
//         value: 3,
//         left: null,
//         right: {
//           value: 7,
//           left: null,
//           right: null
//         }
//       }
//     },
//     right: {
//       value: 4,
//       left: null,
//       right: null
//     }
//   },
//   right: {
//     value: 7,
//     left: null,
//     right: {
//       value: 10,
//       left: {
//         value: 8,
//         left: null,
//         right: {
//           value: 9,
//           left: null,
//           right: {
//             value: 12,
//             left: null,
//             right: null
//           }
//         }
//       },
//       right: {
//         value: 11,
//         left: null,
//         right: null
//       }
//     }
//   }
// })