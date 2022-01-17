/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
        
//     helper = {}
//     for(let i = 0 ; i < nums.length ; i++){
//         if(!helper[nums[i]]){
//             helper[nums[i]] = true
//         }else{
//             return true
//         }
        
//     }
//     return false
    
//     nums.sort((a,b)=>a-b)
//      for(let i = 0 ; i < nums.length - 1 ; i++){
//         if(nums[i] == nums[i+1]){
//            return true
//         }
//     }
    
//     return false
    
    let set = new Set(nums)
    
    return set.size != nums.length
};
