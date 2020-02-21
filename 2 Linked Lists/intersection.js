// Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the inter- secting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.
// Hints: #20, #45, #55, #65, #76, #93, #111, #120, #129

2.7
function intersection(linkedList1, linkedList2) {
  var current1 = linkedList1.head;
  var current2 = linkedList2.head;
  while (current1.next && current2.next) {
    if (current1.value === current2.value) {
      return true;
    }
    current1 = current1.next
    current2 = current2.next
  }
  return false;
}

// Time: O(n)
// Space: O(1)

// console.log(intersection({
//   head: {
//     value: 1,
//     next: {
//       value: 10,
//       next: {
//         value: 6,
//         next: {
//           value: 6,
//           next: null          
//       }
//     }
//   }
// }}, {
//   head: {
//     value: 8,
//     next: {
//       value: 10,
//       next: {
//         value: 16,
//         next: {
//           value: 16,
//           next: null          
//       }
//     }
//   }
// }
// }))