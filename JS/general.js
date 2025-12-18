let header = document.getElementById("header");
header.innerHTML = `
    <nav>
        <div class="title-menu">
            <div class="menu" id="menu">
                <i class="fa-solid fa-bars"></i>
            </div>
            
            <h1>ADIDAS</h1>
        </div>

        <ul>
            <li><a href="index.html#home" class="after-one">Home</a></li>
            <li><a href="index.html#women" class="after-one">Woman</a></li>
            <li><a href="index.html#men" class="after-one">Men</a></li>
            <li><a href="index.html#sport" class="after-two last-h">Sports</a></li>
            <li>
                <a href="cart-details.html" class="cart">
                    <i class="fa-solid fa-cart-shopping fa-lg">
                        <span class="cart-count">0</span>
                    </i>
                </a>
            </li>
        </ul>
    </nav>
`;


let cartCount = document.querySelector(".cart-count");
let num;

let showProductsCount = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartCount.style.display = "none";
    } else {
        cartCount.style.display = "inline";
        cartCount.textContent = cart.length;
    }
}

showProductsCount();

// ===== Menu =====>

let menu = document.getElementById("menu");
let menuUl = document.querySelector("nav ul")

let showMenu = () => {
    menuUl.classList.toggle("show-menu")
};

menu.addEventListener("click" , showMenu)