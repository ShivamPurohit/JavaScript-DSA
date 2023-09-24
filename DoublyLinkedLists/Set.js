class Node {
  constructor(val) {
    this.data = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.data = val;
      return true;
    }
    return false;
  }

  get(idx) {
    if (this.length < idx || idx < 0) {
      return null;
    }

    if (idx <= this.length / 2) {
      var count = 0;
      var current = this.head;
      while (count !== idx) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== idx) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

var doublyList = new DoublyLinkedList();
doublyList.push(10);
doublyList.push(12);
doublyList.push(4);

console.log(doublyList);
const ele = doublyList.get(2);
console.log('element->', ele);

doublyList.set(2, 90);
console.log(doublyList);
