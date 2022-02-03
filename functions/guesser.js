function getAllIndexes(arr, val) {
    var indexes = [], i;
    for (i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

module.exports = function (answers, words) {
    answers.forEach(ans => {
        const wordAnswer = ans.map(e => e[0])
        ans.forEach((ansLetter, idx) => {
            const [letter, _type] = ansLetter.split("-")

            if (_type === '0') {
                let isCorrectLetter = false
                const letterAppeared = getAllIndexes(wordAnswer, letter)
                if (letterAppeared.length > 1) {
                    letterAppeared.forEach(e => {
                        const [letter, _type] = ans[e].split("-")
                        if (_type === '2') {
                            isCorrectLetter = true
                        }
                    })
                }
                words = words.filter(word => !word.includes(letter) || (isCorrectLetter && !getAllIndexes(word, letter).includes(idx)))
            } else if (_type === '1') {
                words = words.filter(word => word.includes(letter) && !getAllIndexes(word, letter).includes(idx))
            } else if (_type === '2') {
                words = words.filter(word => word.includes(letter) && getAllIndexes(word, letter).includes(idx))
            }
        })
    })


    return words
}