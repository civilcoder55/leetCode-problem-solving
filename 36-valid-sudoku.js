/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let s = new Set()
    let c = 0
    
    for(let i = 0 ; i < 9 ;i++){    
        for(let j = 0 ; j < 9 ; j++){
            if(board[i][j] != '.'){
                s.add(board[i][j])
                c++
            }
           
        }
        
        if(s.size != c){
           return false
         }else{
             s.clear()
             c = 0
         }
    }
    
    
    for(let i = 0 ; i < 9 ; i++){    
        for(let j = 0 ; j < 9 ; j++){
            if(board[j][i] != '.'){
                s.add(board[j][i])
                c++
            }
        }
        
        if(s.size != c){
           return false
         }else{
             s.clear()
             c = 0
         }
    }
    
    for(let i = 0 ; i < 27 ; i++){    
        for(let j = (i - (i % 9)) / 3 ; j < (i - (i % 9)) / 3 + 3 ; j++){
            if(board[i % 9][j] != '.'){
                s.add(board[i % 9][j])
                c++
            }
            
        }
        
        if((i + 1) % 3 == 0){
         if(s.size != c){
           return false
         }else{
             s.clear()
             c = 0
         }
         }
    }
    
    
    
    
    return true
    
    
};
