function encodeAndDecodeMessages() {
    let main = document.getElementById('main')
    main.children[0].children[2].addEventListener('click', encode)
    main.children[1].children[2].addEventListener('click', decode)
    let firstTextArea = main.children[0].children[1]
    let secondTextArea = main.children[1].children[1]

    function encode() {
        secondTextArea.value = ''
        for (let i = 0; i < firstTextArea.value.length; i++) {
            secondTextArea.value += String.fromCharCode(firstTextArea.value.charCodeAt(i) + 1)
        }
        firstTextArea.value = ''
    }

    function decode (){
        let decodedWord = ''
        for (let i = 0; i < secondTextArea.value.length; i++){
            decodedWord += String.fromCharCode(secondTextArea.value.charCodeAt(i) - 1)
        }

        secondTextArea.value = decodedWord
    }
}