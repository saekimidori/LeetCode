// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

/**
 * @param {number} num
 * @return {number}
 */
 const numberOfSteps = num => {
    // takes an integer
    // return number of steps to reduce num to 0

    let steps = 0
    while (num > 0) {
        // if num is odd, -1 & step += 1
        if (num % 2 === 1) {
            num -= 1
            steps += 1
            // if num becomes 0, break loop
            if (num === 0)
                break
        }
        // if num is even, /2 & step += 1
        num /= 2
        steps += 1
    }
    return steps
}