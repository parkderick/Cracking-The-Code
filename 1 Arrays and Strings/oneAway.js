// One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

// O: boolean
// I: 2 strings
// C: N/A
// E:

1.5
function oneAway(str1, str2) {
  var longer = str1;
  var shorter = str2;
  var counter = 0;
  if (str2.length > str1.length) {
    longer = str2
    shorter = str1
  }
  for (var i = 0; i < longer.length; i++) {
    if (longer.length === shorter.length) {
      if (longer[i] !== shorter[i]) {
        counter++
      }
    } else {
      if (longer[i] !== shorter[i - counter]) {
        if (longer[i+1] === shorter[i - counter]) {
          counter++
        }
      }
    }
  }
  return counter <= 1
}

// Time: O(n)
// Space: O(1)
// console.log(oneAway('pale', 'ple'))
// console.log(oneAway('pales', 'pale'))
// console.log(oneAway('pale', 'bale'))
// console.log(oneAway('pale', 'bake'))