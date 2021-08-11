/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let array = [];
  this.current = head;
  while (this.current) {
    console.log(this.current.val)
    array.push(this.current.val);
    this.current = this.current.next;
  }

  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    console.log(array[i], array[(array.length - 1) - i]);
    if (array[i] !== array[(array.length - 1) - i]) {
      return false;
    }
  }
  return true;
};