/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  
    if(head == null) return head;
    
    const dummyHead = new ListNode(0, head);
    let slow = dummyHead;
    let fast = dummyHead;
    
    
        while(fast.next){
            fast = fast.next;
            
            if(n-- <= 0){
                slow = slow.next
            }
        }
        
        
    
    
    
    slow.next = slow.next.next;
    return dummyHead.next;

};
