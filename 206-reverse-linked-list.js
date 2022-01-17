/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    if(!head || !head.next){
        return head
    }
    
    
    let pointer = head.next
    let temp;
    let before = head
    
    
    head.next = null
    
    
    while(pointer){
        temp = pointer.next
        pointer.next = before
        before = pointer
        pointer = temp
    }
    
    
    return before
};
