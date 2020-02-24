const LinkedList = require('../Data-Structures/LinkedList');

// Remove Dups: Write code to remove duplicates from an unsorted linked list.

// O: LinkedList
// I: LinkedList
// C: N/A
// E: N/A

2.1
function removeDups(linkedList) {
  var obj = {};
  var current = linkedList.head;
  var previous = linkedList.head;
  while(current) {
    if (!obj[current.value]) {
      obj[current.value] = current;
      previous = current;
    } else {
      previous.next = current.next;
    }
    linkedList.tail = current;
    current = current.next;
  }
  return linkedList;
}

// Time: O(n)
// Space: O(n)

// var LList = new LinkedList();
// LList.addToHead(1);
// LList.addToHead(6);
// LList.addToHead(6);
// LList.addToHead(10);

// console.log(JSON.stringify(removeDups(LList)));

// console.log(removeDups(
//   {
//     head: {
//       value: 1,
//       next: {
//         value: 6,
//         next: {
//           value: 6,
//           next: {
//             value: 10,
//             next: null
//           }
//         }
//       }
//     },
//     tail: {
//       value: 10
//       next: null
//     }
//   }
// ))
