const guesser = require('../../functions/guesser')

module.exports = function (words) {
    const answers = [
        ['a-0', 'r-0', 'o-2', 's-0', 'e-0'],
        ['u-0', 'n-2', 't-0', 'i-0', 'l-2'],
    ]

    words = guesser(answers, words)

    return words
}