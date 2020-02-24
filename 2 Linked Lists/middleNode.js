const {LinkedList} = require('../Data-Structures/LinkedList');

// Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.
// EXAMPLE
// Input: the node c from the linked list a - >b- >c - >d - >e- >f
// Result: nothing is returned, but the new linked list looks like a - >b- >d - >e- >f Hints: #72

// O: linkedList
// I: linkedlist, node
// C: N/A
// E: N/A

2.3
function middleNode (linkedList, node) {
  var current = linkedList.head;
  var previous = current;
  while(current.next) {
    if (current.value === node) {
      previous.next = current.next;
    } else {
      previous = current;
    }
    current = current.next;
  }
  return linkedList;
}

// Time: O(n)
// Space: O(1)

/* TEST */
var LList = new LinkedList();
LList.addToHead(1);
LList.addToHead(6);
LList.addToHead(4);
LList.addToHead(5);
LList.addToHead(9);
LList.addToHead(10);

console.log(middleNode(LList, 5));