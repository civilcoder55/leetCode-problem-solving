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
    const node = new TreeNode(val,null,null)
    if(!root){
        return node
    }
    let curr = root
    while(curr){
        if(val > curr.val){
           if(curr.right == null) break
            curr = curr.right
        }
        else {
           if(curr.left == null) break
            curr = curr.left
        
        }
    }
    
    
    val > curr.val ? curr.right = node : curr.left = node
    
    return root
};
