// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin- drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.The palindrome does not need to be limited to just dictionary words.

// O: boolean
// I: string
// C: N/A
// E:

1.4
function palindromePermutation(string) {
  string = string.toLowerCase();
  var obj = {};
  for (var i = 0; i < string.length; i++) {
    if (!obj[string[i]]) {
      obj[string[i]] = 1
    } else {
      obj[string[i]] += 1
    }
  }
  var bool = true;
  var counter = 0;
  for (var key in obj) {
    if (obj[key] % 2 === 1) {
      counter += 1
    }
  }
  if (string.length % 2 === 1) {
    if (counter > 1) {
      bool = false
    }
  } else {
    if (counter > 0) {
      bool = false
    }
  }
  return bool;
}

// Time: O(n)
// Space: O(n)
// console.log('me', palindromePermutation('Tactaca'))
// console.log(palindromePermutation('Tcctbbaa'))