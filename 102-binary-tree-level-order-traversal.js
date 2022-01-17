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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    if(!root){
       return []
       }
    const result = []
    const queue = [[root]]
    
    let curr = queue.shift()
    while(curr){
        let temp = []
        let sub = []
        curr.forEach((node)=>{
            if (node.left){
            temp.push(node.left)
            }
            if (node.right){
                temp.push(node.right)
            }
            sub.push(node.val)
        })
        
        if(temp.length > 0){
            queue.push(temp)
        }
        result.push(sub)
        curr = queue.shift()
    }
    
    return result
};
