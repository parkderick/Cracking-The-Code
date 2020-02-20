// Palindrome: Implement a function to check if a linked list is a palindrome.

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

// console.log(isPalindrome({
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
// }}))

// Time: O(n)
// Space: O(1)