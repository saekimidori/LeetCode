// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
    // takes an array of nums
    // return the num that appears more than nums.length/2 times
    // Input: nums = [3,2,3] // 3/2 = 1.5
    // Output: 3
    // Input: nums = [2,2,1,1,1,2,2] // 7/2 = 3.5
    // Output: 2

    // memo num of times each num appears => {} hasOwnProperty
    let memo = {}
    nums.forEach(num => memo.hasOwnProperty(num) ? memo[num] += 1 : memo[num] = 1)
    // loop thru memo and find num that has value >= Math.ceil(nums.length/2)
    for (const num in memo) {
        if (memo[num] >= Math.ceil(nums.length/2))
            return num
    }
}