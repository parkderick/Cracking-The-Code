// URLify: Write a method to replace all spaces in a string with '%2e: You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: if implementing in Java, please use a character array so that you can perform this operation in place.)

// O: string
// I: string, length
// C: N/A
// E:

1.3
function URLify(string, length) {
  var result = '';
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === '') {
      result += '%20';
      counter += 3;
    } else {
      result += string[i];
      counter += 1;
    }
    if (counter === length) {
      return result
    }
  }
}

// Time: O(n)
// Space: O(1)

// console.log(URLify('Mr John Smith    ', 13))
// console.log(URLify('Mr John Smith    ', 13).length)