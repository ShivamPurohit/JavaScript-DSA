/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head === null || head.next === null || k === 0){
        return head;
    }
    var length= 1;
    var current = head;
    while(current.next!==null){
        length++;
        current = current.next;
    }
    current.next = head;
    var rotateValue = k % length;
    var rotateIndex = length - rotateValue;
    while(rotateIndex--){
        current = current.next;
    } 
    head = current.next;
    current.next = null;
    return head;
};