/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function (nums, k) {
//     k = (k % nums.length)
//     length = nums.length
//     if(k == 0){
//         return
//     }
//     const temp = [];

//     for (let i =  - k; i < length; i++) {
//         temp.push(nums[i])
//     }

//     for (let i = 0; i < length - k; i++) {
//         temp.push(nums[i])
//     }

//     for (let i = 0; i < length; i++) {
//         nums[i] = temp[i]
//     }
// };

var rotate = function (nums, k) {
    k = (k % nums.length)
    length = nums.length
    if (k == 0) {
        return
    }

    // reverse all the array
    reverse(nums, 0, length - 1)

    // reverse a subset = k
    reverse(nums, 0, k - 1)

    // reverse the other subset
    reverse(nums, k, length - 1)
};


var reverse = function (nums, start, end) {
    while (start < end) {
        temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }
}
