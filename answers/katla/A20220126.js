const guesser = require('../../functions/guesser')

module.exports = function (words) {
    const answers = [
        ['k-0', 'e-0', 'r-0', 'a-1', 'i-1'],
        ['l-0', 'o-0', 't-0', 'u-0', 's-1'],
        ['a-1', 's-1', 'i-1', 'n-0', 'g-0'],
        ['b-0', 'a-1', 's-2', 'i-1', 'c-0'],
    ]

    words = guesser(answers, words)

    return words
}

// Katla 6 6/6

// ⬛⬛⬛🟨🟨
// ⬛⬛⬛⬛🟨
// 🟨🟨🟨⬛⬛
// ⬛🟨🟩🟨⬛
// ⬛🟩🟩🟨🟩
// 🟩🟩🟩🟩🟩