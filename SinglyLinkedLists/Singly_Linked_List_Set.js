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

    set(index,value){
        /* update this value at the specific index provided */
       
        const foundNode = this.get(index);
        let flag = false;
        
        if(foundNode){
            foundNode.data = value;
            flag = true;
        }

        return flag;
        
    }

    get(idx){
        /* Get the node at the mentioned index */
        if(this.length <= idx || idx < 0){
            return null;
        }
       
            var currentNode = this.head;
            var currentIndex = 0;
            while(currentIndex !== idx){
                currentNode = currentNode.next;
                currentIndex++;
            }

       return currentNode;
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
list.push('Text4');
console.log('list push',list)

list.set(2,'NewText');
console.log('list set',list)