/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    let helper = {}
    let least;
    let other;
    let result = [];
    
    
    if(nums1.length < nums2.length){
       least = nums1
        other = nums2
     }else{
         least = nums2
         other = nums1
     }
    
    
    for (let i = 0 ; i < least.length ; i++){
        if(helper[least[i]]){
           helper[least[i]] += 1
         }else{
         helper[least[i]] = 1
         }
    }
    for (let i = 0 ; i < other.length ; i++){
        if(helper[other[i]] > 0){
          result.push(other[i])
          helper[other[i]] -= 1
         }
    }
    
    
    return result
};
