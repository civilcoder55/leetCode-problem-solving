/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0]
    let curr = nums[0]
    
     for(let i = 1 ; i < nums.length ; i++){
        if(nums[i] + curr > nums[i]){
           curr = nums[i] + curr
         }else{
             curr = nums[i]
         }
         
         if( curr > max){
            max = curr
         }
    }
    
    return max
};
