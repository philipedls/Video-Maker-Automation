const readline = require('readline-sync')
const robots ={
    text: require('./robots/text.js')
}

function start() {
    const content = {} 

    content.searchTerm = askAndReturnSearchTerm()
    content.prefixes = askAndReturnPrefix()
    content.lang = askAndReturnLanguage()

    robots.text(content)

    function askAndReturnLanguage() {
        const language = ['pt', 'en']
        const selectedLangIndex = readline.keyInSelect(language,'Choice Language: ')
        const selectedLangText = language[selectedLangIndex]
        
        return selectedLangText
    }

    function askAndReturnSearchTerm() {
        return readline.question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix() {
        const prefixesENG = ['Who is', 'What is', 'The history of']
        const prefixesPTBR = ['Quem é', 'O que é', 'A história de']
        const selectedPrefixIndex = readline.keyInSelect(prefixesPTBR, 'Choose one option!')
        const selectedPrefixText = prefixesPTBR[selectedPrefixIndex]

        return selectedPrefixText
    }

    console.log(content)
}
start()