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

console.log(successor(
  {
    value: 0,
    left: null,
    right: null
  },
  { 
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
}))