//<div class="card-img-overlay"></div>

const products = [
    { name: "Poppy", type: "tshirt", color: "red", img: "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81lSWgJPuIL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png" },
    { name: "Jumping", type: "occhiali", color: "blue", img: "https://img.mytheresa.com/1094/1238/100/jpeg/catalog/product/6d/P00289345.jpg" },
    { name: "CrissCross", type: "scarpe", color: "black", img: "https://eu.blochworld.com/cdn/shop/products/S0524L-BLK-02_e3e13f3f-504c-4bdc-a924-2359420117db_1200x1200.jpg?v=1685455762" },
    { name: "Jenny", type: "borsa", color: "pink", img: "https://www.laporticinashop.com/wp-content/uploads/2021/02/1613468293699.jpg" }
];

const productWithLabel = products.map((product) => {
    product.position = getRandomChar()
    return product
})

const containerEL = document.querySelector('div#main-container')

for (let key in productWithLabel) {
    //contenitore di tutto
    const productEl = document.createElement('div')
    productEl.classList.add('col-3')

    //contenitore con classe card
    const cardEl = document.createElement('div')
    cardEl.classList.add('card')

    //contenitore immagine
    const imgEl = document.createElement('img')
    imgEl.classList.add('card-img-top')
    imgEl.src = productWithLabel[key].img

    //contenitore body della card
    const bodyCardEl = document.createElement('div')
    bodyCardEl.classList.add('card-body', 'text-center')
    //
    //contenitore overlay sull'img con la label
    const labelEl = document.createElement('div')
    labelEl.classList.add('card-img-overlay',)

    //p con label
    const labelTitleEl = document.createElement('span')
    labelTitleEl.classList.add('card-text', 'text-warning')
    labelTitleEl.textContent = productWithLabel[key].position

    //h5 della card con marca prodotto
    const nameEl = document.createElement('h5')
    nameEl.classList.add('card-title')
    nameEl.textContent = productWithLabel[key].name

    //<p> della card con nome prodotto
    const typeEl = document.createElement('p')
    typeEl.classList.add('card-text')
    typeEl.textContent = productWithLabel[key].type

    //metto h5 e p dentro al body-card e plabel nell img overlay
    bodyCardEl.appendChild(nameEl)
    bodyCardEl.appendChild(typeEl)
    labelEl.appendChild(labelTitleEl)

    //metto img e body-card dentro al mega contenitore
    cardEl.appendChild(imgEl)
    cardEl.appendChild(labelEl)
    cardEl.appendChild(bodyCardEl)
    productEl.appendChild(cardEl)

    //stampo tutto
    containerEL.appendChild(productEl)


}

console.log(productWithLabel)



// ------ FUNCTION ------

function getRandomChar() {
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    return letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase()
}
