// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums =>
    // takes an array of nums
    // return boolean if any value appears at least 2x
    // Input: nums = [1,2,3,1]
    // Output: true
    // Input: nums = [1,2,3,4]
    // Output: false

    // compare lengths of nums with new Set of nums
    nums.length !== Array.from(new Set(nums)).length