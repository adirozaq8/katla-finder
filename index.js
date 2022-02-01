const puppeteer = require('puppeteer');
const guesser = require('./functions/guesser');
const getMostCommonWords = require('./functions/getMostCommonWords');

// const lettersCount = require('./utils/lettersCount')
// const test = require('./answers/test')

const data = {
    katla: {
        words: require('./utils/words'),
        answers: ['kerai', '', '', '', '', ''],
        url: 'https://katla.vercel.app',
        language: 'indonesian',
    },
    wordle: {
        words: (require('an-array-of-english-words')).filter(word => word.length === 5),
        answers: ['arose', '', '', '', '', ''],
        url: 'https://www.powerlanguage.co.uk/wordle/',
        language: 'english',
    }
};

(async () => {
    const appName = process.argv[2] || "katla"
    const { words, answers, url, language } = data[appName]

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized']
    });
    const page = await browser.newPage();
    await page.goto(url, {
        waitUntil: 'networkidle2'
    });

    await page.keyboard.press('Escape');
    await page.mouse.click(0, 0);

    let robotAnswer = []
    for (let a = 0; a < answers.length; a++) {
        const ans = answers[a] || getMostCommonWords(language, robotAnswer) || robotAnswer?.[0]

        if (ans) {
            await page.keyboard.type(ans, { delay: 30 });
            await page.keyboard.press('Enter');

            await page.waitForTimeout(2400)

            const row = await page.evaluate((appName) => {
                const result = []

                if (appName === 'katla') {
                    const elements = document.querySelectorAll('div.grid.grid-cols-5')

                    for (let i = 0; i < elements.length; i++) {
                        const answer = []
                        const letterBoxes = (Array.from(elements[i].children));
                        letterBoxes.forEach(letter => {
                            const className = letter.className
                            const letterContent = letter.innerHTML
                            let colorType = 0
                            if (className.includes('bg-yellow-600')) {
                                colorType = 1
                            } else if (className.includes('bg-green-700')) {
                                colorType = 2
                            }
                            if (letterContent !== " ") {
                                answer.push(`${letterContent}-${colorType}`)
                            }
                        })

                        if (answer.length) {
                            result.push(answer)
                        }
                    }
                } else if (appName === "wordle") {
                    // document.querySelector("game-app").shadowRoot.querySelector("game-row").shadowRoot.querySelector("game-tile").shadowRoot.querySelector("div").innerText
                    const elements = document.querySelector("game-app").shadowRoot.querySelectorAll("game-row")

                    for (let i = 0; i < elements.length; i++) {
                        const answer = []
                        const letterBoxes = (Array.from(elements[i].shadowRoot.querySelectorAll("game-tile")));
                        letterBoxes.forEach(_letter => {
                            const letter = _letter.shadowRoot.querySelector("div")
                            const className = letter.dataset.state
                            const letterContent = letter.innerText.toLowerCase()
                            let colorType = 0
                            if (className.includes('present')) {
                                colorType = 1
                            } else if (className.includes('correct')) {
                                colorType = 2
                            }
                            if (letterContent !== "") {
                                answer.push(`${letterContent}-${colorType}`)
                            }
                        })

                        if (answer.length) {
                            result.push(answer)
                        }
                    }
                }

                return result
            }, appName)


            if (row[row.length - 1].filter(el => el.includes('-2')).length === 5) {
                break
            }

            robotAnswer = guesser(row, words)
        }
    }

    await browser.close();
})();