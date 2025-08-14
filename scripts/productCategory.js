import {products} from '../data/products.js'
import {images} from '../data/images.js'



// Product Category // 

const param = new URLSearchParams (window.location.search)
const category = param.get ('category')

const product = products.filter (product => product.category === category)
const container = document.querySelector ('.body-content')

if (product) {
  product.forEach (product => {
    container.innerHTML +=
    `<div class="product-container">
      <img src="${product.images}" alt="${product.name}" class="product-image">
      <div class="product-name-container">${product.name}</div>
      <div class="product-price-container">₱${product.price.toLocaleString ()}</div>
      <button class="cart-button-container">Add to Cart</button>
    </div>`
  })
} 

// Ai Builder // 
document.querySelector ('.aiInput').addEventListener ('keydown',event => {
  
  if (event.key === 'Enter') {
    const budget = Number (document.querySelector ('.aiInput').value)
    const aiProductContainer = document.querySelector ('.aiProductContent')

    aiProductContainer.innerHTML = '';

    const matchingProduct = products.filter (product => product.price <= budget && product.category === 'desktop')

     

    if (matchingProduct.length > 0 ) {
      matchingProduct.forEach (product => {
      aiProductContainer.innerHTML += 
      `<div class="product-container">
      <img src="${product.images}" alt="${product.name}" class="product-image">
      <div class="product-name-container">${product.name}</div>
      <div class="product-price-container">₱${product.price.toLocaleString()}</div>
      <button class="cart-button-container">Add to Cart</button>
    </div>`})
    }
    else if(!budget)aiProductContainer.innerHTML = `Enter your budget...`
    else aiProductContainer.innerHTML = `No products found within budget ₱${budget.toLocaleString ()}`


  }
})



// Homepage // 
const homePage = document.querySelector ('.homepage')
const aiBuilder = document.querySelector ('.aiBuilder')
const trackingOrder = document.querySelector ('.trackingOrder')
const cartSection = document.querySelector ('.cartSection')
const userAccount = document.querySelector ('.userAccount')
const productCategory = document.querySelector ('.body-content')


document.getElementById ('homepage').addEventListener ('click' , () => {
  homePage && (homePage.style.display = 'flex')
  aiBuilder && (aiBuilder.style.display = 'none')
  trackingOrder && (trackingOrder.style.display = 'none')
  cartSection && (cartSection.style.display = 'none')
  userAccount && (userAccount.style.display = 'none')
  productCategory && (productCategory.style.display = 'none')
})
document.getElementById ('aiBuilder').addEventListener ('click' , () => {
  homePage && (homePage.style.display = 'none')
  aiBuilder && (aiBuilder.style.display = 'flex')
  trackingOrder && (trackingOrder.style.display = 'none')
  cartSection && (cartSection.style.display = 'none')
  userAccount && (userAccount.style.display = 'none')
  productCategory && (productCategory.style.display = 'none')
})
document.getElementById ('trackingOrder').addEventListener ('click' , () => {
  homePage && (homePage.style.display = 'none')
  aiBuilder && (aiBuilder.style.display = 'none')
  trackingOrder && (trackingOrder.style.display = 'flex')
  cartSection && (cartSection.style.display = 'none')
  userAccount && (userAccount.style.display = 'none')
  productCategory && (productCategory.style.display = 'none')
})
document.getElementById ('cart').addEventListener ('click' , () => {
homePage && (homePage.style.display = 'none')
  aiBuilder && (aiBuilder.style.display = 'none')
  trackingOrder && (trackingOrder.style.display = 'none')
  cartSection && (cartSection.style.display = 'flex')
  userAccount && (userAccount.style.display = 'none')
  productCategory && (productCategory.style.display = 'none')
})
document.getElementById ('userAccount').addEventListener ('click' , () => {
 homePage && (homePage.style.display = 'none')
  aiBuilder && (aiBuilder.style.display = 'none')
  trackingOrder && (trackingOrder.style.display = 'none')
  cartSection && (cartSection.style.display = 'none')
  userAccount && (userAccount.style.display = 'flex')
  productCategory && (productCategory.style.display = 'none')
})



// Cart Section // 
const cartSectionContainer = document.querySelector ('.cartSectionContent')

products.forEach (product => {
  if (product.category === 'parts') {
    cartSectionContainer.innerHTML += 
    `<div class="cartSectionProduct">
        <img src="${product.images}" alt="" class="cartSectionImage">
        <div class="cartSectionProductName">${product.name}</div>
        <div class="cartSectionPrice">₱${product.price.toLocaleString ()}</div>
        <div class="cartSectionQty">1</div>
        <div class="cartSectionPrice">₱${product.price.toLocaleString ()}</div>
      </div>`
  }
})



// UserAccount // 
const loginForm = document.querySelector ('.userForm')
const registerForm = document.querySelector ('.registerForm')

document.getElementById('showLogin').addEventListener ('click', () => {
  loginForm.style.display = 'flex';
  registerForm.style.display = 'none';
})

document.getElementById ('showRegister').addEventListener ('click' , () => {
  registerForm.style.display = 'flex';
  loginForm.style.display = 'none';
})




// Auto Next Image // 
const imageContainer = document.querySelector ('.homeAutoNextContainer')
let index = 0; 
imageContainer.innerHTML = `<img src="${images[index]}" alt="" class="msi">`

setInterval ( () => {
  index = (index + 1) % images.length
  imageContainer.innerHTML = `<img src="${images[index]}" alt="" class="msi">`
}, 3000)