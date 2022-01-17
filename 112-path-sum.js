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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root){
        return false
    }
    
    let found = false 
    function recur (node){
        targetSum = targetSum - node.val
        
        if(!node.left && !node.right && targetSum == 0) {
            found = true
            return
        }
        
        if(node.left) recur(node.left)
        if(node.right) recur(node.right)
        
        targetSum += node.val
        
    }
    
    recur(root)
    
    return found
};
