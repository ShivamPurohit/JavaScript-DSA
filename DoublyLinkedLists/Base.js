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
}

var doublyList = new DoublyLinkedList();
doublyList.push(10);
doublyList.push(12);
doublyList.push(4);

console.log(doublyList);
