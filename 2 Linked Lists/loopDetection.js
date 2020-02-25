const {LinkedList} = require('../Data-Structures/LinkedList');

// Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.
// DEFINI TION
// Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.
// EXAMPLE
// Input: A -) B -) C -) 0 -) E -) C[thesameCasearlierl Output: C
// Hints: #50, #69, #83, #90

// O: node
// I: LinkedList
// C: N/A
// E: N/A

2.8
function loopDetection(linkedList) {
  var obj = {};
  var current = linkedList.head;
  while (current.next) {
    if (obj[current.value]) {
      return obj[current.value]
    } else {
      obj[current.value] = current;
    }
    current = current.next
  }
  return null;
}

// Time: O(n)
// Space: O(1)

var LList = new LinkedList();
LList.addToHead(1);
LList.addToHead(6);
LList.addToHead(5);
LList.addToHead(10);
LList.addToHead(5);

console.log(loopDetection(LList));