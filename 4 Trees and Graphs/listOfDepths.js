// List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g., if you have a tree with depth 0, you'll have 0 linked lists).

4.3
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  }
  
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
  
function ListOfDepths(BT) {
  var result = [];
  var list = new LinkedList();
  var current;
  var queue = [{tree: BT, depth: 0}];
  var item;
  var depth = 0;
  while (item = queue.shift()) {
    if (item.depth) {
      if (!list.head) {
          list.head = new Node(item.tree.value);
          current = list.head
      } else {
        while (current.next) {
          current = current.next
        }
        current.next = new Node(item.tree.value);
      }
      // console.log(JSON.stringify(item), depth, '\n')
      if (item.depth !== depth) {
        result.push(list)
        list = new LinkedList()
      }
      //   depth++
      // }
    }
    depth = item.depth + 1
    item.tree.left && queue.push({tree: item.tree.left, depth: item.depth + 1});
    item.tree.right && queue.push({tree: item.tree.right, depth: item.depth + 1});
  }
  // console.log(JSON.stringify(result) + '\n')
  // PROBLEMS WITH DEPTHHHHHHHHHHH
}

// ListOfDepths({ 
//   value: 6,
//   left: { 
//     value: 2,
//     left: {
//       value: 0,
//       left: null,
//       right: null
//     },
//     right: null
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
//           right: null
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