/**
 * Find the middle node of the singly linked list
 */

class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

class SinglyLinkedList{
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
        }else{
            this.tail.next = newNode;
            this.tail = newNode; 
        }
        this.length++;
        return this;
    }
    findMiddle(){
        var slow = this.head;
        var fast = this.head.next;
        if(this.head!==null){
            while(fast!==null && fast.next!=null){
                slow = slow.next;
                fast = fast.next.next;
            }
        }
        return slow;
    }
}

var list = new SinglyLinkedList();
list.push(3);
list.push(6);
list.push(8);
list.push(9);
list.push(12);


var middleNode = list.findMiddle();
console.log('Middle node--->',middleNode);