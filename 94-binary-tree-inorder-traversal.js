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
var inorderTraversal = function(root) {
    if(!root){
        return []
    }
    
    const result = []
    const stack = []
    let curr = root
    while(true){
        if(curr){
            stack.push(curr)
            curr = curr.left
        }else{
            if(stack.length == 0){
                break
            }
            curr = stack.pop()
            result.push(curr.val)
            curr = curr.right
        }
        
       
    }
    
    return result
};
