let basket = [];
function toggleBasket() {
    const basketBox = document.getElementById('basket-box');
    basketBox.style.display = basketBox.style.display === 'block' ? 'none' : 'block';
}
function updateBasketDisplay() {
    const basketItems = document.getElementById('basket-items');
    basketItems.innerHTML = '';
    const basketTotal = document.getElementById('basket-total');
    let total = 0;
    basket.forEach(item => {
        const listItem = document.createElement('li');
        const listItemPrice = document.createElement('span');
        listItemPrice.style.float = 'right';
        listItemPrice.style.color = 'green';
        listItemPrice.style.fontWeight = 'bold';
        listItem.textContent = item.label;
        listItemPrice.textContent = item.price;
        basketItems.appendChild(listItem);
        listItem.appendChild(listItemPrice);
        total += item.price;
        basketTotal.textContent = total;
    });
}
function addToBasket(item) {
    basket.push({ label: Object.keys(item)[0], price: Object.values(item)[0] }); 
    updateBasketDisplay();
    updateBasketCount();
}
function updateBasketCount() {
    const basketCount = document.getElementById('basket-count');
    basketCount.textContent = basket.length;
}
const menuItems = document.querySelector(".menu-items");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
let index = 0;
const itemsPerView = 3;
const totalItems = document.querySelectorAll(".menu-item").length;
const totalPages = Math.ceil(totalItems / itemsPerView);
function goToSlide(slideIndex) {
    menuItems.style.transform = `translateX(-${slideIndex * 100}%)`;
}
function nextSlide() {
    index = (index + 1) % totalPages;
    goToSlide(index);
}
function prevSlide() {
    index = (index - 1) % totalPages;
    goToSlide(index);
}
leftBtn.addEventListener("click", prevSlide);
rightBtn.addEventListener("click", nextSlide);

function addToBasket(item) {
    const itemName = Object.keys(item)[0];
    const itemPrice = item[itemName];
    
    if (basket[itemName]) {
        basket[itemName].quantity += 1;
    } else {
        basket[itemName] = { price: itemPrice, quantity: 1 };
    }
    
    updateBasketUI();
}
function updateBasketUI() {
    const basketItems = document.getElementById("basket-items");
    const basketTotal = document.getElementById("basket-total");
    const basketCount = document.getElementById("basket-count");
    basketItems.innerHTML = "";
    let total = 0;
    let count = 0;
    console.log("basket:",basket);
    
    for (const item in basket) {
        const li = document.createElement("li");
        li.innerHTML = `${item} x${basket[item].quantity} <span style='float: right; color: green; font-weight: bold;'>${basket[item].price * basket[item].quantity} DH</span>`;
        basketItems.appendChild(li);
        
        total += basket[item].price * basket[item].quantity;
        count += basket[item].quantity;
    }
    basketTotal.innerHTML = `<span style='color: green; font-weight: bold;'>${total}</span>`;
    basketCount.textContent = count;
}
function clearBasket() {
    basket = {};
    updateBasketUI();
}
function toggleBasket() {
    const basketBox = document.getElementById("basket-box");
    basketBox.style.display = basketBox.style.display === "block" ? "none" : "block";
}
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navList = document.querySelector("nav ul");

    menuIcon.addEventListener("click", function () {
        navList.classList.toggle("active");
    });
});

function clearBasket() {
    basket = []; // Clear the basket array
    document.getElementById('basket-items').innerHTML = '';
    document.getElementById('basket-count').innerText = '0';
    document.getElementById('basket-total').innerText = '0';
}
