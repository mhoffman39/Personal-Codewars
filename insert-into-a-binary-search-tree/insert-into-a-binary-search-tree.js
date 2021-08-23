/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  if (root == null) {return new TreeNode(val)};
  
  let current = root;
  while (true) {
    if (current.val < val) {
      if (current.right) {
        current = current.right;
      } else {
        current.right = new TreeNode(val);
        break;
      }
    } else {
      if (current.left) {
        current = current.left;
      } else {
        current.left = new TreeNode(val);
        break;
      }
    }
  }
  return root;
};