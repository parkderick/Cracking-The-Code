const {LinkedList, Node} = require('../Data-Structures/LinkedList');

// Sum Lists: You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.
// EXAMPLE
// Input: (7-) 1 -) 6) + (5 -) 9 -) 2).Thatis,617 + 295. Output: 2 -) 1 -) 9.That is, 912.
// FOLLOW UP
// Suppose the digits are stored in forward order. Repeat the above problem. EXAMPLE
// Input: (6 -) 1 -) 7) + (2 -) 9 -) 5).Thatis,617 + 295. Output: 9 -) 1 -) 2.That is, 912.

// O: linkedList
// I: 2 linkedList
// C: N/A
// E: N/A

2.5
function SumLists(linkedList1, linkedList2) {
  var current1 = linkedList1.head;
  var current2 = linkedList2.head;
  var array1 = [];
  var array2 = [];

  while(current1 || current2) {
    current1.value && array1.push(current1.value);
    current2.value && array2.push(current2.value);
    current1 = current1.next;
    current2 = current2.next;
  }
  array1 = array1.reverse().join('');
  array2 = array2.reverse().join('');
  var sum = `${Number(array1) + Number(array2)}`;
  sum = sum.split('');

  var list = new LinkedList();
  while (sum[0]) {
    if (!list.head) {
      list.head = new Node(sum[0]);
      var result = list.head;
    } else {
      result.next = new Node(sum[0]);
      result = result.next;
    }
    list.tail = new Node(sum[0]);
    sum.shift();
  }
  return list;
};

// Time: O(n)
// Space: O(n)

var LList1 = new LinkedList();
LList1.addToHead(1);
LList1.addToHead(4);
LList1.addToHead(6);
LList1.addToHead(1);

var LList2 = new LinkedList();
LList2.addToHead(3);
LList2.addToHead(5);
LList2.addToHead(7);
LList2.addToHead(8);

console.log(SumLists(LList1, LList2));