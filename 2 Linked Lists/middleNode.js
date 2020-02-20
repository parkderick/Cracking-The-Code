// Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.
// EXAMPLE
// Input: the node c from the linked list a - >b- >c - >d - >e- >f
// Result: nothing is returned, but the new linked list looks like a - >b- >d - >e- >f Hints: #72
2.3
function middleNode (linkedList, node) {
  var current = linkedList.head;
  var previous = current;
  while(current.next) {
    if (current.value === node) {
      previous.next = current
    } else {
      previous = current
    }
    current = current.next
  }
  return linkedList;
}

// Time: O(n)
// Space: O(n)