/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    function fill(curr,prev){
        let p1 = 0
        let p2 = 1
        for(let i = 1 ; i < curr.length - 1 ; i++ ){
            curr[i] = prev[p1] + prev[p2]
            p1++
            p2++
        }
        
    }
    
    
    let result = [];
    
    for(let i = 1 ; i <= numRows ; i++){
        let sol = new Array(i).fill(1)
        if(i > 2){
            fill(sol,result[i-2])
        }
        result.push(sol)
    }
    
    
    return result
};
