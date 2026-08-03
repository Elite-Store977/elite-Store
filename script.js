// Elite Store JavaScript

let cart = 0;

// Add To Cart
function addToCart(){

    cart++;

    alert("Product added to cart! 🛒");

    console.log("Total Cart Items: " + cart);

}


// Simple Search
function searchProduct(){

    let input = document.getElementById("search").value.toLowerCase();

    let products = document.getElementsByClassName("card");


    for(let i=0; i<products.length; i++){

        let name = products[i].innerText.toLowerCase();

        if(name.includes(input)){

            products[i].style.display="inline-block";

        }else{

            products[i].style.display="none";

        }

    }

}


// Welcome Message
window.onload = function(){

    console.log("Welcome to Elite Store 🚀");

}
