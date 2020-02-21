export class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}
  
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToTail = value => {
    var node = new Node(value);
    var current;
    if (!this.head) { 
      this.head = node 
    } else { 
      current = this.head; 
    }
    while (current.next) { 
      current = current.next 
    } 
    current.next = node;
  }
  removeHead = () => {
    if (this.head === null) { 
      return null; 
    }
    var currentHead = this.head
    this.head = this.head.next
    return currentHead.value
  }
  contains = target => {
    var current = this.head
    while (current) { 
      if (current.value === target) { 
        return true; 
      } 
      current = current.next 
    } return f;
  }
}
