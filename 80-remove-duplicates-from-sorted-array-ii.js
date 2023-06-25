/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length <= 2) {
        return nums.length;
    }

    let k = 1;
    let secondTime = false
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1] && secondTime) {
            continue;
        }

        secondTime = nums[i] == nums[i - 1]
        nums[k] = nums[i];
        k++
    }
    return k;
};
