const {LinkedList} = require('../Data-Structures/LinkedList');

// Palindrome: Implement a function to check if a linked list is a palindrome.

// O: Boolean
// I: LinkedList
// C: N/A
// E: N/A

2.6
function isPalindrome(linkedList) {
  var current = linkedList.head;
  var palindrome = '';
  while (current) {
    palindrome += current.value;
    current = current.next;
  }
  var copy = palindrome.split('').reverse().join('');
  return palindrome === copy;
}

// Time: O(n)
// Space: O(n)

/* TEST */
var LList = new LinkedList();
LList.addToHead(1);
LList.addToHead(6);
LList.addToHead(4);
LList.addToHead(1);

console.log(isPalindrome(LList));