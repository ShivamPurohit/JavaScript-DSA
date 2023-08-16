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

    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift(){
       /* Remove the element from the begining */
       if(!this.head)
        return null;
       
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
       
       return currentHead;
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
    pop(){
        if(!this.head) return null;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

}

const list = new SinglyLinkedList();
list.push('Text1');
list.push('Text2');
list.push('Text3');
console.log('list push',list)

list.unshift('Text0');
console.log('list unshift',unshift);
