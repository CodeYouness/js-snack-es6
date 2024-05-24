
function getRandomChar() {
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    return letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase()
}

const products = [
    { name: "Poppy", type: "tshirt", color: "red" },
    { name: "Jumping", type: "occhiali", color: "blue" },
    { name: "CrissCross", type: "scarpe", color: "black" },
    { name: "Jenny", type: "borsa", color: "pink" }
];

const productWithLabel = products.map((product) => {
    product.position = getRandomChar()
    return product
})

console.log(productWithLabel)