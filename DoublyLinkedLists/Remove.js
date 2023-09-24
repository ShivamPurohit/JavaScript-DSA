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

  remove(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    if (idx === 0) {
      return this.shift;
    }
    if (idx === this.length - 1) {
      return this.pop();
    }
    var removedNode = this.get(idx);
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }

  shift() {
    if (this.length === 0) return null;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return this;
  }

  pop() {
    if (!this.head) return null;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
    }
    this.length--;
    return poppedNode;
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

const removedNode = doublyList.remove(1);
console.log('removedNode-->', removedNode);
console.log(doublyList);
