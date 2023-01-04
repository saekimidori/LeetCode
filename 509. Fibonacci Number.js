// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

/**
 * @param {number} n
 * @return {number}
 */
const fib = n => {
    // fibonacci sequence is a sequence of numbers such that each number is the sum of the two preceding numbers, starting from 0 and 1
    // takes a num signifying number in fibonacci sequence/index in fib array
    // return the num that should be in that index
    // Input: n = 4
    // Output: 3
    // Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3 // [0, 1, 1, 2, 3]

    // declare starting arr with 0, 1
    let seq = [0, 1]
    // for loop to calculate the next num in arr
    for (i = 2; i <= n; i++) {
        seq[i] = seq[i - 1] + seq[i - 2]
    }
    // return the n index of which num is
    return seq[n]
}