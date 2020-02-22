class Node {
  constructor (input) {
    this.value = input;
    this.next = null;
  }
}
  
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToHead = input => {
    var node = new Node(input);
    var current;
    if (!this.head) { 
      this.head = node;
    } else { 
      current = this.head; 
    }
    while (current && current.next) { 
      current = current.next;
    } 
    if (current) {
      current.next = node;
    }
  }
  removeHead = () => {
    if (this.head === null) { 
      return null; 
    }
    var currentHead = this.head;
    this.head = this.head.next;
    return currentHead.value;
  }
  contains = target => {
    var current = this.head;
    while (current) { 
      if (current.value === target) { 
        return true; 
      } 
      current = current.next ;
    } 
    return false;
  }
}

// var LList = new LinkedList;
// LList.addToHead(1);
// LList.addToHead(6);
// LList.addToHead(6);
// LList.addToHead(1);
// LList.removeHead();
// console.log(LList.contains(6));
// console.log(LList);

module.exports = LinkedList