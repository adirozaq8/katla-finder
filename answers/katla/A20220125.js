const guesser = require('../../functions/guesser')

module.exports = function (words) {
    const answers = [
        ['k-0', 'e-0', 'r-1', 'a-1', 'i-0'],
        ['l-0', 'o-0', 't-0', 'u-2', 's-0'],
        ['a-1', 'm-0', 'b-0', 'u-2', 'r-2'],
    ]

    words = guesser(answers, words)

    return words
}