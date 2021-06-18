// Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

var deleteNode = function(node) {
//I: node to be deleted
//O: the completed linked list without node
//C: value of each node is unique; node is not a tail node

  node.val = node.next.val;
  node.next = node.next.next;
};

