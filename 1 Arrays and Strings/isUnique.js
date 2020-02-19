// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// O: Boolean
// I: string
// C: Space: O(1)
// E: string.length === 0 => false

1.1
function isUnique(string) {
  var bool = true;
  for (var i = 0; i < string.length; i++) {
    if (i !== string.lastIndexOf(string[i])) {
      bool = false
    }
  }
  return bool;
}
// function isUnique(string) {
//   var bool = true;
//   for (var i = 0; i < string.length; i++) {
//     for (var j = i + 1; j < string.length; j++) {
//       if (string[i] === string[j]) {
//         bool = false
//       }
//     }
//   }
//   return bool;
// }


// Time: O(n^2)
// Space: O(1)
// console.log(isUnique('Mr John Smith'))
// console.log(isUnique('haper'))