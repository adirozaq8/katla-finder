module.exports = function (words) {
    // 1st try
    ['i', 'l', 't', 'u', 'n'].forEach(letter => {
        words = words.filter(word => word.indexOf(letter) !== -1)
    })

    return words
}