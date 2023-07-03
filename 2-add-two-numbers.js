/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // edge case when l1 or l2 is empty
    if (!l1) return l2;
    if (!l2) return l1;

    let carry = 0
    let result = new ListNode(0)
    let dummy = result

    while (l1 || l2) {
        result.next = new ListNode(0)
        result = result.next
        val1 = l1 == null ? 0 : l1.val
        val2 = l2 == null ? 0 : l2.val

        result.val = (val1 + val2 + carry) % 10
        carry = parseInt((val1 + val2 + carry) / 10)
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }

    if (carry > 0) result.next = new ListNode(carry)

    return dummy.next
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head || !head.next) return head

    let current = head
    let next = head.next
    head.next = null

    while (next) {
        temp = next.next
        next.next = current
        current = next
        next = temp
    }

    return current
};
