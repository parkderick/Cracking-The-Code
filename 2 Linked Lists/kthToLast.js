// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

2.2
function kthToLast (linkedList, n) {
  var size = 0;
  var current = linkedList.head;
  var obj = {
    [size]: current
  };
  while(current.next) {
    size++
    obj[size] = current.next;
    current = current.next;
  }
  return obj[size - n]
}

// Time: O(n)
// Space: O(n)

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