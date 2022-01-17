/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length
    let n = matrix[0].length
    
    function findRow(matrix,start,end,target){
        while(start <= end ){ // 0 
            let middle = Math.ceil( (end + start) / 2)
            if(target < matrix[middle][0]){ //16
               end = middle - 1
            }else if(target > matrix[middle][n -1]){ //23
                start = middle + 1
            }else{
                return middle
            }
        }
        return null
    }
    
    function findElement(row,start,end,target){
        while(start <= end ){ // 0 
            let middle = Math.ceil( (end + start) / 2)
            if(target < row[middle]){ //16
               end = middle - 1
            }else if(target > row[middle]){ //23
                start = middle + 1
            }else{
                return true
            }
        }
        return false
    }
    
    let row = findRow(matrix, 0, m-1, target)
    console.log(row)
    if(row == null){
       return false
     }else{
         return findElement(matrix[row] , 0 , n -1 , target)
     }
     
};


