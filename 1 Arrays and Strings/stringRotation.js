// String Rotation: Assume you have amethod isSubstring which checks ifone word is asubstring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g.,"waterbottle"is a rotation of"erbottlewat").

1.9
function stringRotation(str1, str2) {
  str1 = str1 + str1;
  if (str1.includes(str2)) {
    return true;
  } else {
    return false;
  }
}

// Time: O(n)
// Space: O(1)
// console.log(stringRotation('waterbottle', 'erbottlewat'))
