import data from './data.js'
const itemsContainer = document.getElementById('items')

// the length of our data determines how many times this loop goes around
for (let i=0; i<data.length; ++i) {
    // create a new div element and give it a class name
    let newDiv = document.createElement('div');
    newDiv.className = 'item'

    // create an image element
    let img = document.createElement('img');
    // this will change each time we go through the loop. Can you explain why?
    img.src = data[i].image
    img.width = 300
    img.height = 300

    //create paragraph element for description 
    let desc = document.createElement('P')
    desc.innerText = data[i].desc

    //create paragraph element for price
    let price = document.createElement('P')
    price.innerText = data[i].price

    //create button 
    let button = document.createElement('button')
    button.id = data[i].name

    // creates a custom attribute called data-price. That will hold price for each element in the button
    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"


    // Add the image to the div
    newDiv.appendChild(img)
    console.log(img)
    //add description to div
    newDiv.appendChild(desc)
    //add price to div
    newDiv.appendChild(price)
    newDiv.appendChild(button)
    itemsContainer.appendChild(newDiv)
}

const cart = []

    function addItem(name, price) {
            for(let i = 0; i < cart.length; i += 1) {
                if(cart[i].name == name) {
                    cart[i].qty += 1
                    return
                }
            }

        const item = { name: name, price : price, qty: 1 }
        cart.push(item)
    }

    function showItems() {
        const qty = getQty()

        console.log(`You have ${qty} items in your cart`)

        for (let i = 0; i < cart.length; i +=1) {
            console.log(`- ${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
        }

        console.log(`Total in cart: $${getTotal()}`)
    }

    function getTotal() {
        let total = 0
        for (let i = 0; i < cart.length; i += 1) {
            total += cart[i].price * cart[i].qty
        }

        return total.toFixed(2)
    }

    function getQty() {
        let qty = 0
        console.log(`You have ${cart.length} items in your cart`)
        for (let i = 0; i < cart.length; i += 1) {
            qty += cart[i].qty
        }
        return qty
    }

    addItem('apple', 0.99)
    addItem('apple', 0.99)

    showItems()