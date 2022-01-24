function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

module.exports = function (answers, words) {
    answers.forEach(ans => {
        ans.forEach((ansLetter, idx) => {
            const [letter, _type] = ansLetter.split("-")

            if (_type === '0') {
                words = words.filter(word => !word.includes(letter))
            } else if (_type === '1') {
                words = words.filter(word => word.includes(letter) && !getAllIndexes(word, letter).includes(idx))
            } else if (_type === '2') {
                words = words.filter(word => word.includes(letter) && getAllIndexes(word, letter).includes(idx))
            }
        })
    })


    return words
}