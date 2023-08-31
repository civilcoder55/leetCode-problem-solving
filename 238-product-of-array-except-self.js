/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let result = [1];
    // fill result with left products
    for (let i = 1; i < nums.length; i++) {
        result[i] = nums[i - 1] * result[i - 1]
    }

    let rightProduct = 1
    // update result with final values with the help of rightProduct variable
    for (let i = nums.length - 2; i >= 0; i--) {
        result[i] = nums[i + 1] * result[i] * rightProduct
        rightProduct = nums[i + 1] * rightProduct
    }

    return result;
};
