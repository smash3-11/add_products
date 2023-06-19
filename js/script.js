let products = [
    {
        id: 1,
        name: "Товар 1",
        price: 100.99
    },
    {
        id: 2,
        name: "Товар 2",
        price: 199.99
    },
    {
        id: 3,
        name: "Товар 3",
        price: 70.49
    },
    {
        id: 4,
        name: "Товар 4",
        price: 140.99
    },
    {
        id: 5,
        name: "Товар 5",
        price: 120.99
    },
    {
        id: 6,
        name: "Товар 6",
        price: 99.99
    },
    {
        id: 7,
        name: "Товар 7",
        price: 50.99
    },
    {
        id: 8,
        name: "Товар 8",
        price: 348.99
    },
    {
        id: 9,
        name: "Товар 9",
        price: 511.99
    },
    {
        id: 10,
        name: "Товар 10",
        price: 916.99
    },
    {
        id: 11,
        name: "Товар 11",
        price: 213.49
    },
    {
        id: 12,
        name: "Товар 12",
        price: 178.99
    }
]

console.log(products);


let add = document.querySelector('.show_add')
let addBox = document.querySelector('.add_box')
let back = document.querySelector('.back')
let container = document.querySelector('.products')

let fromInput = document.querySelector("#fromInput")
let toInput = document.querySelector("#toInput")
let showButton = document.querySelector("#showButton")

let addButton = document.querySelector('.add_item')
let nameInput = document.querySelector('#nameInput')
let priceInput = document.querySelector('#priceInput')

add.onclick = () => {
    addBox.classList.add('show')
}
back.onclick = () => {
    addBox.classList.remove('show')
}
reload(products)

function reload(products) {
    createItem(products)
}

showButton.onclick = () => {
    let fromPrice = fromInput.value
    let toPrice = toInput.value

    let filteredProducts = []
    products.forEach((product) => {
        if (product.price >= fromPrice && product.price <= toPrice) {
            filteredProducts.push(product)
        }
    })
    showFilteredProducts(filteredProducts)

    fromInput.value = ''
    toInput.value = ''
}

function showFilteredProducts(products) {
    container.innerHTML = ""
    createItem(products)
}
addButton.onclick = (event) => {
    event.preventDefault()

    let name = nameInput.value
    let price = parseFloat(priceInput.value)

    if (name && price) {
        let newItem = {
            id: Math.floor(Math.random()),
            name: name,
            price: price
        }

        products.push(newItem)
        showFilteredProducts(products)

        nameInput.value = ''
        priceInput.value = ''
    }
}
function createItem(products) {
    for (let product of products) {
        let tovar = document.createElement("div")
        tovar.classList.add("item")

        let p_nm = document.createElement("p")
        p_nm.classList.add("name")
        p_nm.textContent = product.name

        let p_price = document.createElement("p")
        p_price.classList.add("cost")
        p_price.textContent = "$" + product.price

        container.append(tovar)
        tovar.append(p_nm, p_price)
    }
}