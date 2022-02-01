const { getWordsList } = require('most-common-words-by-language');

module.exports = function (language, words) {
    const wordsList = getWordsList(language)
    const wordsObj = {}
    let result

    let count = 1
    wordsList.forEach(_word => {
        if (_word.length === 5) {
            wordsObj[_word] = count
            count++
        }
    })

    let index;
    words.forEach(word => {
        const wordIndex = wordsObj[word]
        if (wordIndex && (!index || wordIndex < index)) {
            index = wordIndex
            result = word
        }
    })

    return result
}