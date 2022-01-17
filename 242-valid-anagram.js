/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    
    if(s.length != t.length){
        return false
    }
    
    
    
    // s = s.split('').sort().join('')
    // t = t.split('').sort().join('')
    // return s == t
//     let pointer = 0 
    
//     while(pointer < s.length){
//         if(s[pointer] != t[pointer]){
//            return false
//          }
//         pointer++
//     }
    
//     return true
    
    
    let map = {}
    for(let i = 0 ; i < s.length ; i++){
       if(!map[s[i]]){
          map[s[i]] = 1
        }else{
            map[s[i]]++
        } 
   }
    
    for(let i = 0 ; i < t.length ; i++){
       if(!map[t[i]] || map[t[i]] <= 0 ){
         return false
        }else{
            map[t[i]]--
        } 
   }
    
    return true
    
    
    
    
};
