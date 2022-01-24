// const words = require('./words')
const words = (require('an-array-of-english-words')).filter(word => word.length === 5)

let countLetters = {}

words.forEach(word => {
    const letters = word.split('')
    letters.forEach(letter => {
        if (!countLetters[letter]) {
            countLetters[letter] = 1
        } else {
            countLetters[letter]++
        }
    })
})

// [
//     '4', "'", '!', 'x', 'q', 'v',
//     'z', 'f', 'y', 'w', 'j', 'c',
//     'h', 'g', 'd', 'b', 'm', 'p',
//     'o', 'n', 'l', 's', 't', 'r',
//     'k', 'u', 'i', 'e', 'a'
// ]

module.exports = countLetters;