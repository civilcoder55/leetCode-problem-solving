/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    
    // 2x2
    let m = mat.length      //row
    let n = mat[0].length   //col
    
    if(m * n != r * c){
        return mat
    }
    
    
    let result = []
    let elements = [] 
                                   
    // spread all elements
    let row_p = 0
    let col_p = 0
    while(row_p < m){
        elements.push(mat[row_p][col_p])
        
        if(col_p == n - 1){
           row_p++
           col_p = 0
         }else{
             col_p++
         }
        
        if(elements.length == c){
            result.push(elements)
            elements = []
        }
    }
    
   
//     for(let i = 0 ; i < r ; i++){
//         result.push(elements.slice(i * c , (i+1) * c))
//     }
    
    return result
};
