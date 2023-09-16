function solve() {
    let answers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']
    let answersNumber = 0
    let mainDiv = document.getElementById("quizzie")
    let results = document.getElementById('results')

    let textResults = results.children[0].children[0]
    const answer = document.querySelectorAll('.answer-text').forEach(el => {
        el.addEventListener('click', onClick)
    })

    let firstSection = mainDiv.children[1]
    let secondSection = mainDiv.children[2]
    let thirdSection = mainDiv.children[3]

    function onClick(e) {
        let currentAnswer = e.target.textContent

        if (answers.includes(currentAnswer)) {
            if (firstSection.className === '') {
                firstSection.className = 'hidden'
                thirdSection.className = 'hidden'
                secondSection.className = 'show'
                answersNumber += 1
            } else if (firstSection.className === 'hidden' && thirdSection.className === 'hidden') {
                secondSection.className = 'hidden'
                firstSection.className = 'hidden'
                thirdSection.className = 'show'
                answersNumber += 1

            } else if (thirdSection.className === 'show') {
                textResults.textContent = `You are recognized as top JavaScript fan!`
                secondSection.className = 'hidden'
                firstSection.className = 'hidden'
                thirdSection.className = 'hidden'
                results.style.display = 'block'
            }
        } else {
            secondSection.className = 'hidden'
            firstSection.className = 'hidden'
            thirdSection.className = 'hidden'
            textResults.textContent = `You have ${answersNumber} right answers.`
            results.style.display = 'block'
        }
    }
}
