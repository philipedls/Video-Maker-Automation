const readline = require('readline-sync')
const state = require('./state')

function robot() {
    const content = {
        maximumSentences: 7
    } 
    
    content.searchTerm = askAndReturnSearchTerm()
    content.prefixes = askAndReturnPrefix()
    content.lang = askAndReturnLanguage()
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
}

module.exports = robot