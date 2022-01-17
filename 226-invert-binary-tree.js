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
 * @return {TreeNode}
 */
var invertTree = function(root) {
   
    
    function dfs(node){
        if(!node) return
        
        const tmp = node.left
        node.left = node.right
        node.right = tmp
        dfs(node.left)
        dfs(node.right)
    }
    
    dfs(root)
    return root
};
//----------------------------------------------------------
**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root){
       return root
    }
    
    
    const result = []
    const queue = [[root]]
    
    let curr = queue.shift()
    while(curr){
        let temp = []
        let sub = []
        curr.forEach((node)=>{
            if(node == null){
                sub.push(null)
            }else{
                temp.push(node.left)
                temp.push(node.right)
                
                sub.push(node)
            }
            
        })
        
        if(temp.length > 0){
            queue.push(temp)
        }
        result.push(sub)
        curr = queue.shift()
    }
    
    for(let i = 0 ; i < result.length - 2 ; i++){
        let roots = result[i]    
        let childs = result[i+1] 
        let currChildIndx = childs.length - 1 
        for(let j = roots.length - 1 ; j >= 0 ; j-- ){ 
            if(roots[j] == null) continue
            roots[j].left = childs[currChildIndx]
            currChildIndx-- 
            roots[j].right = childs[currChildIndx]
            currChildIndx-- 
        }
    }
    return root
};
