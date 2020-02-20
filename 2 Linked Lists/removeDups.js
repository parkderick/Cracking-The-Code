// Remove Dups: Write code to remove duplicates from an unsorted linked list.

2.1
function removeDups(linkedList) {
  var obj = {};
  var current = linkedList.head;
  var previous = linkedList.head;
  while(current) {
    if (!obj[current.value]) {
      obj[current.value] = current
      previous = current
    } else {
      previous.next = current.next
    }
    current = current.next
  }
  return linkedList;
}

// Time: O(n)
// Space: O(n)

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
