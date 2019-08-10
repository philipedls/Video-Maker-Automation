const readline = require('readline-sync')
const state = require('./state')

function robot() {
    const content = {
        maximumSentences: 7
    } 
    
    content.searchTerm = askAndReturnSearchTerm()
    content.prefixes = askAndReturnPrefix()
    content.lang = askAndReturnLanguage()
    content.renderOption = askAndReturnRenderOption()
    state.save(content)
    
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
        const prefixesPTBR = ['Quem é', 'O que é', 'A história de']
        const selectedPrefixIndex = readline.keyInSelect(prefixesPTBR, 'Choose one option!')
        const selectedPrefixText = prefixesPTBR[selectedPrefixIndex]
    
        return selectedPrefixText
    }

    function askAndReturnRenderOption() {
        const options = ['After-Effects', 'Video-Show']
        const selectedOption = readline.keyInSelect(options, 'Choose one option to render video')
        const selectedOptionText = options[selectedOption]

        return selectedOptionText
    }
}

module.exports = robot