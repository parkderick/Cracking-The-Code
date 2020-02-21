// Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity. SetOfStacks. push () and SetOfStacks. pop () should behave identically to a single stack (that is, pop ( ) should return the same values as it would if there were just a single stack).
// FOLLOW UP
// ImplementafunctionpopAt(int index)whichperformsapopoperationonaspecificsub-stack. Hints: #64, #87

// O: stack
// I: threshold
// C: N/A
// E: N/A

3.3
function stackOfPlates (threshold) {
  var instance = {};
  var storage = {};
  var size = 0;
  var newSet = 0;
  instance.push = value => {
    if (size === threshold) {
      newSet++;
      size = 0;
      storage = {};
    }
    storage[size] = value;
    instance[newSet] = storage;
    size++
  }
  instance.pop = () => {
    size--
    var result = instance[newSet][size];
    delete instance[newSet][size];
    if (size === 0) {
      delete instance[newSet]
      newSet--;
      size = threshold
    };
    return result;
  };
  return instance
}

// Time: O(1)
// Space: O(n)

// var g = stackOfPlates(5);
// g.push(1)
// g.push(1)
// g.push(1)
// g.push(1)
// g.push(1)
// g.push(2)
// g.push(2)
// g.push(2)
// g.push(2)
// g.push(2)
// g.pop()
// g.pop()
// g.pop()
// g.pop()
// g.pop()
// g.push(3)
// g.push(3)
// g.push(3)
// g.pop()
// g.pop()
// g.push(4)
// g.pop()
// g.push(4)
// g.push(4)
// g.push(4)
// console.log(g)
