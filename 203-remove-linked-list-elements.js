/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    
//     while(head && head.val == val){
//         head = head.next
//     }
    
//     let p = head
//     if(head){  
//         let temp = head.next
//         while(temp){
//             if(temp.val == val){
//                 head.next = temp.next
//             }else{
//                 head = temp
//             }
//             temp = temp.next
//         }
//     }
    
    
//     return p
    
    
    let dummy = new ListNode(0,head)
    let prev = dummy
    let curr = head
    while(curr){
        let next = curr.next
        
        if(curr.val == val){
           prev.next = next
         }else{
             prev = curr
         }
        
        curr = next
    }
    
    return dummy.next
};
