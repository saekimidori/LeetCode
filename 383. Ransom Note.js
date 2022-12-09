// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    // takes two strings
    // return boolean if ransomNote can be constructed from magazine

    // memo char count in each string => split, forEach, memo object hasOwnProperty
    let memoNote = {}
    let memoMag = {}
    ransomNote.split('').forEach(char => memoNote.hasOwnProperty(char) ? memoNote[char] += 1 : memoNote[char] = 1)
    magazine.split('').forEach(char => memoMag.hasOwnProperty(char) ? memoMag[char] += 1 : memoMag[char] = 1)
    // iterate thru ransomNote, every char is <= magazine memo [char] value
    return [...ransomNote].every(letter => memoNote[letter] <= memoMag[letter])
}