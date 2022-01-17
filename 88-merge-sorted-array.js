/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    function shiftByOne(arr,from,to){
        while (to != from) 
        {
            arr[to] = arr[to - 1];
            to--;
        }

    }
    
    if(n == 0){return}
    if(m == 0){
        for(let i = 0 ; i < nums2.length ; i++){
            nums1[i] = nums2[i]
        }
    }
    
    
    let left = 0
    let right = 0
    let shifter = m
    while(left < shifter && right < n){
        if(nums1[left] <= nums2[right]){
            left++
         }else{
            shiftByOne(nums1,left,shifter)
            nums1[left] = nums2[right]
            left++
            right++
            shifter++
        }
    }
    
    while(right < n){
        nums1[left] = nums2[right]
        right++
        left++
    }
    
   
    
};
