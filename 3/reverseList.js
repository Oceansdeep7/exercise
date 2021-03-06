/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList (head){
    let prev = null
    let current = head
    while(current){
        const next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
};