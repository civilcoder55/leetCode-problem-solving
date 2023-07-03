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
    // edgeCase when there is no list or list of one node 
    if(!head || !head.next){
        return head
    }

    let current = head
    let next = head.next
    head.next = null

    while(next){
        temp = next.next
        next.next = current
        current = next
        next = temp
    }

    return current
};
