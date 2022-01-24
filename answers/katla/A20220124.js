const guesser = require('../../functions/guesser')

module.exports = function (words) {
    const answers = [
        ['k-0', 'e-0', 'r-0', 'a-2', 'i-0'],
        ['l-1', 'o-0', 't-2', 'u-1', 's-0']
    ]

    words = guesser(answers, words)

    return words
}