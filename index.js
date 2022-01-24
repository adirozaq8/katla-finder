const appName = "wordle"

const words = appName === 'katla' ? require('./utils/words') : (require('an-array-of-english-words')).filter(word => word.length === 5)
const lettersCount = require('./utils/lettersCount')
const test = require('./answers/test')

const today = new Date()
const year = today.getFullYear()
const month = (today.getMonth() + 1).toString().padStart(2, '0')
const date = today.getDate().toString().padStart(2, '0')
const answer = require(`./answers/${appName}/A${year+month+date}`)

// KATLA
// 1st word must "kerai"
// 2nd word must "lotus"

// WORDLE
// 1st word must "arose"
// 2nd word must "until"

// console.log(test(words))
// console.log(Object.keys(lettersCount).sort(function(a,b){return lettersCount[a]-lettersCount[b]}))
console.log(answer(words))