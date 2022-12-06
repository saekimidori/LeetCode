// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Constraints:
// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 const numJewelsInStones = (jewels, stones) => {
    // takes two strings - jewels, stones
    // return num of stones that are also jewels   
    // Input: jewels = "aA", stones = "aAAbbbb"
    // Output: 3

    // split strings, loop thru stones => forEach char that jewels includes, total += 1
    let total = 0
    stones.split('').forEach(char => [...jewels].includes(char) ? total += 1 : null)
    return total
}