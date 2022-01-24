const guesser = require('../../functions/guesser')

module.exports = function (words) {
    const answers = [
        ['a-1', 'r-1', 'o-0', 's-1', 'e-0'],
        ['u-1', 'n-0', 't-0', 'i-0', 'l-0'],
        ['b-0', 'a-1', 'u-1', 'r-1', 's-1'],
        ['m-0', 'u-2', 's-1', 'a-2', 'r-2'],
    ]

    words = guesser(answers, words)

    return words
}