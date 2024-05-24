
function getRandomChar() {
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    return letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase()
}

console.log(getRandomChar())