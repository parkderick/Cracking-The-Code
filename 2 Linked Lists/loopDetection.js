// Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.
// DEFINI TION
// Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.
// EXAMPLE
// Input: A -) B -) C -) 0 -) E -) C[thesameCasearlierl Output: C
// Hints: #50, #69, #83, #90

2.8
function loopDetection(linkedList) {
  var obj = {};
  var current = linkedList.head;
  while (current.next) {
    if (obj[current.value]) {
      return obj[current.value]
    } else {
      obj[current.value] = current.value;
    }
    current = current.next
  }
  return null;
}

// Time: O(n)
// Space: O(1)

// console.log(loopDetection({
//   head: {
//     value: 1,
//     next: {
//       value: 10,
//       next: {
//         value: 6,
//         next: {
//           value: 2,
//           next: {
//             value: 1,
//             next: {
//               value: 3,
//               next: null
//             }        
//           }          
//       }
//     }
//   }
// }}))