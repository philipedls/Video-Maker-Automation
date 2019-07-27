const readline = require('readline-sync')
const robots ={
    input: require('./robots/input'),
    text: require('./robots/text.js'),
    state: require('./robots/state')
};

async function start() {

    robots.input()
    await robots.text()
    console.dir(robots.state.load(), { depth: null })
};
start();