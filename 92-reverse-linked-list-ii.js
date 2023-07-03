/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (!head || !head.next || left == right) return head
    let dummy = head

    let startNode = null
    let startReversedNode = null

    let counter = 1

    let prev = null
    let current = head
    let next = head.next

    while (next) {
        if (counter == left) {
            startReversedNode = current;
            startNode = prev
        }

        if (counter == right) break

        if (counter >= left && counter <= right) {
            // do the partial reverse
            temp = next.next
            next.next = current
            current = next
            next = temp
        } else {
            prev = current
            current = next
            next = next.next
        }

        counter++
    }

    startReversedNode.next = next
    if (startNode) {
        startNode.next = current
    } else {
        // case when left starts from the first node
        dummy = current
    }

    return dummy
};
