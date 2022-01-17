/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let pairs = {')' : '(','}' : '{',']' : '['}
    for(let i = 0 ; i < s.length ; i++){
        
        if(s[i] == '(' || s[i] == '{' || s[i] == '['){
            stack.push(s[i])
        }else{
            const el = stack.pop()
            if(el != pairs[s[i]]){
                return false
            }
        }
         
    }
    return stack.length == 0
    
    
    
};
