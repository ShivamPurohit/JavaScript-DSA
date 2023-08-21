class Solution {
/**
* @param Node head
* @param number n

* @returns number
*/
    getNthFromLast(head, n) {
     
        // code here
        var length=0;
        var current = head;
        while(current!==null){
            length++;
            current = current.next;
        }
        current = head;
        if (length < n)
          return -1;
        var k = length - n ;
       
        while(k--){
            current = current.next;
        }
       
        var nthNode = current;
        return nthNode.data;
    }
}
        
