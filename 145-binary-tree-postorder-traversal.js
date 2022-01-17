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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if(!root){
        return []
    }
    
    const stack = [root]
    const stack2 = []
    const result = []
    while(stack.length != 0){        
        let curr = stack.pop()
        stack2.push(curr.val)
        if(curr.left){
            stack.push(curr.left)
        }
        if(curr.right){
            stack.push(curr.right)
        }
    }
    
    while(stack2.length != 0){
        result.push(stack2.pop())
    }
    
    return result
};
