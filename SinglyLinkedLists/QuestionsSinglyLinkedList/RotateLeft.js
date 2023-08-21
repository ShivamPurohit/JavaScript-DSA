/**
 * @param {Node} head
 * @param {number} k
 * @returns {Node}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    //Function to rotate a linked list.
    rotate(head, k)
    {
        //your code here
        if(head === null || head.next === null || k == 0){
            return head;
        }
        var length = 1;
        var current = head;
        while(current.next!==null){
            length++;
            current = current.next;
        }

        current.next = head;

        k = k%length;
 
        while(k--){
            current = current.next;
        }
        head = current.next;
        current.next = null;
        return head;
    }
}