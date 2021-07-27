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
var deleteDuplicates = function(head) {
  if (!head) return null;
  // Init prev as 1st node, next as 2nd node
  let prev = head, next = head.next;

  // Iterate until next is null, which is end of list
  while (next) {
    if (prev.val === next.val) {
	  // If next is a duplicate, skip over it by pointing its prev to its next
      prev.next = next.next;
    } else {
	  // Else, just move prev forward to continue through the list
      prev = prev.next;
    }
	// Always move next forward, it moves along with prev
    next = next.next;
  }

  return head;
}


