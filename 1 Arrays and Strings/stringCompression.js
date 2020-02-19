// String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

// O: string
// I: string
// C: N/A
// E:

1.6
function stringCompression(str) {
  var letter = str[0];
  var counter = 1;
  var result = '';
  for (var i = 1; i < str.length; i++) {
    if (str[i] === letter) {
      counter++
      if (i === str.length - 1) {
        result += letter + `${counter}`
      }
    } else {
      result += letter + `${counter}`
      letter = str[i];
      console.log(letter)
      counter = 1;
    }
  }
  return result
}

// Time: O(n)
// Space: O(1)
// console.log(stringCompression('aabcccccaaa'))