const LinkedList = require('../Data-Structures/LinkedList');

// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

2.2
function kthToLast (linkedList, n) {
  var size = 0;
  var current = linkedList.head;
  var obj = {
    [size]: current
  };
  while(current.next) {
    size++;
    obj[size] = current.next;
    current = current.next;
  }
  return obj[size - n];
}

// Time: O(n)
// Space: O(n)

// var LList = new LinkedList();
// LList.addToHead(1);
// LList.addToHead(6);
// LList.addToHead(6);
// LList.addToHead(10);

// console.log(JSON.stringify(kthToLast(LList, 2)));

// console.log(kthToLast(
//   {
//     head: {
//       value: 1,
//       next: {
//         value: 10,
//         next: {
//           value: 10,
//           next: {
//             value: 6,
//             next: null
//           }
//         }
//       }
//     }
//   }
// , 0))