/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length == 1) {
        return true;
    }
    // gready
    let distance = 1
    let result = true
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < distance) {
            distance++
            result = false
        } else {
            distance = 1
            result = true
        }
    }

    return result;
};
