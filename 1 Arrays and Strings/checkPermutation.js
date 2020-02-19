// Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

// O: Boolean
// I: 2 strings
// C: N/A
// E: 

1.2
function checkPermutation(str1, str2) {
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');
  console.log(str1, str2)
  if (str1 !== str2) {
    return false;
  } else {
    return true;
  }
}

// Time: O(n)
// Space: O(1)
// console.log(checkPermutation('hasdf', 'fasdh'))
// console.log(checkPermutation('haper', 'haeop'))