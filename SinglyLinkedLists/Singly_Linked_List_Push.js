class Node{
    constructor(val){
        this.head = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    
    constructor(head,tail){
        this.head = head;
        this.tail = tail;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

}

let list = new SinglyLinkedList();
list.push('Text1');
list.push('Text2');
list.push('Text3');

console.log(list);