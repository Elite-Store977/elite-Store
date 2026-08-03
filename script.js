// Elite Store Script

let cart = 0;


// Add To Cart Function

function addToCart(){

    cart++;

    document.getElementById("cart").innerHTML = cart;

    alert("Product added to cart 🛒");

}



// Search Function

function searchProduct(){

    let input = document
    .getElementById("search")
    .value
    .toLowerCase();


    let products = document
    .getElementsByClassName("card");


    for(let i = 0; i < products.length; i++){

        let productName = products[i]
        .innerText
        .toLowerCase();


        if(productName.includes(input)){

            products[i].style.display="block";

        }
        else{

            products[i].style.display="none";

        }

    }

}



// Welcome Message

window.onload = function(){

    console.log("Welcome to Elite Store 🚀");

}

// Category Filter

function filterProducts(category){

let products = document.getElementsByClassName("card");


for(let i=0; i<products.length; i++){


if(category=="all"){

products[i].style.display="block";

}

else if(products[i].classList.contains(category)){

products[i].style.display="block";

}

else{

products[i].style.display="none";

}


}

}

// Mobile Menu

function menuToggle(){

let nav = document.querySelector("nav");

nav.classList.toggle("active");

}
