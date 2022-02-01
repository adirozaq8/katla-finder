const guesser = require('../../functions/guesser')

module.exports = function (words) {
    const answers = [
        ['a-1', 'r-0', 'o-0', 's-0', 'e-0'],
        ['u-0', 'n-0', 't-0', 'i-0', 'l-0'],
        ['c-1', 'h-2', 'a-2', 'm-0', 'p-0'],
    ]

    words = guesser(answers, words)

    return words
}