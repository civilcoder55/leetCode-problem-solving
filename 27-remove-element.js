/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {
//     let i = 0;
//     // let k = 0;
//     while (i <= nums.length) {
//         if (i == nums.length || nums[i] == '_') {
//             k = i
//             break
//         }
//         if (nums[i] == val) {
//             nums.splice(i, 1)
//             nums.push('_')
//         } else {
//             i++
//         }
//     }
//     return k;
// };
var removeElement = function (nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++
        }
    }
    return k;
}