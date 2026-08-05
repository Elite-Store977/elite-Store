// Elite Store Script

let cart = JSON.parse(localStorage.getItem("cart")) || [];

window.addEventListener("storage",()=>{
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCartCount();
});

// Cart Count
function updateCartCount() {

    let count = 0;

    cart.forEach(item => {
        count += item.quantity || 1;
    });

    let cartCount = document.getElementById("cart");

    if (cartCount) {
        cartCount.innerHTML = count;
    }

}




// Add To Cart
function addToCart(product, price){


    let item = cart.find(
        productItem => productItem.name === product
    );


    if(item){

        item.quantity += 1;

    }else{


        cart.push({

            name: product,

            price: Number(price),

            quantity: 1

        });


    }


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    updateCartCount();


    alert(product + " Added To Cart 🛒");


}




// Search
function searchProduct() {

    let input = document.getElementById("search").value.toLowerCase();
    let products = document.getElementsByClassName("card");

    for (let i = 0; i < products.length; i++) {

        let text = products[i].innerText.toLowerCase();

        if (text.includes(input)) {
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }
}

// Category Filter
function filterProducts(category) {

    let products = document.getElementsByClassName("card");

    for (let i = 0; i < products.length; i++) {

        if (category === "all") {
            products[i].style.display = "block";
        } else if (products[i].classList.contains(category)) {
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }
}

// Mobile Menu
function menuToggle() {
    let nav = document.querySelector("nav");
    if (nav) {
        nav.classList.toggle("active");
    }
}

// Buy Now
function buyNow(product, price) {

    let existing = cart.find(item => item.name === product);

    if(existing){

        existing.quantity = (existing.quantity || 1) + 1;

    }else{

        cart.push({
            name: product,
            price: Number(price),
            quantity: 1
        });

    }


    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "checkout.html";

}

// Product Details
function viewProduct() {
    alert("Product Details Coming Soon 🛍️");
}

// Wishlist
function wishlist(btn) {
    btn.innerHTML = "❤️ Added";
}

// Dark Mode
function darkMode() {
    document.body.classList.toggle("dark");
}

console.log(cart);
updateCartCount();

function goCheckout(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if(cart.length === 0){
    alert("Cart empty hai!");
    return;
}

window.location.href="checkout.html";

}

function openCart(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if(cart.length === 0){

alert("Your cart is empty 🛒");
return;

}

window.location.href="cart.html";
}

let container = document.getElementById("product-container");

products.forEach(product => {

container.innerHTML += `
<div class="card ${product.category}">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>$${product.price}</p>

<p>${product.description}</p>

<button>Add To Cart 🛒</button>

</div>
`;

});
