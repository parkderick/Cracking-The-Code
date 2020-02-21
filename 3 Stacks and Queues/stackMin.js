// Stack Min: How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop and min should all operate in 0(1) time.
// Hints: #27, #59, #78

// O: stack
// I: N/A
// C: N/A
// E: N/A

3.2
function stackMin() {
  var instance = {};
  var storage = {};
  var size = 0;
  var min = 0;
  instance.push = value => {
    storage[size++] = value;
    if (value < storage[min]) {
      min = value;
    }
  }
  instance.pop = () => {
    size--
    var result = storage[size]
    delete storage[size]
    return result
  }
  instance.size = () => {
    return size
  }
  instance.peek = () => {
    return storage[size]
  }
  instance.min = () => {
    return min;
  }
  return instance
}

// Time: O(1)
// Space: O(n)

// var test = stackMin()
// console.log(test.push(5))
// console.log(test.push(6))
// console.log(test.push(3))
// console.log(test.push(7))
// console.log(test.pop())
// console.log(test.pop())
// console.log(test.min())