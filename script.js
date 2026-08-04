// Elite Store Script

let cart = JSON.parse(localStorage.getItem("cart")) || [];

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

    updateCartCount();

    alert(product + " added to cart 🛒");

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

    cart.push({
        name: product,
        price: Number(price),
        quantity: 1
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "checkout.html";

}
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
