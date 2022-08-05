var reverseList = function (head) {
  let prevNode = null;
  let currNode = head;

  while (currNode) {
    let nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
};
