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
var addTwoNumbers = function(l1, l2) {
    let temp = new ListNode();
    let node = temp;
    let carry = 0;
    let sum = 0;
    while(l1||l2||carry){
      sum = carry;
      if(l1){
        sum = sum+l1.val;
        l1 = l1.next;
      }
      if(l2){
        sum = sum + l2.val;
        l2 = l2.next;
      }
      let number = sum%10;
      carry = Math.floor(sum/10);
      temp.next = new ListNode(number);
      temp = temp.next;
    }
    return node.next;
};