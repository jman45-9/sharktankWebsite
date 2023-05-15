const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const reciptBtn = document.getElementById("reciptBtn")
const quantityDisplay = document.getElementById("quantityCounter");
const subtotalDispaly = document.getElementById("subtotal");
const taxDisplay = document.getElementById("tax")
const totalDisplay = document.getElementById("total"); 

let quantity = 1;
let subtotal = 9.99;
let tax = 0.51;
let total = 10.5;

function money_round(num) {
    return Math.ceil(num * 100) / 100;
}


increaseBtn.addEventListener("click", function() {

    quantity++;

    if (quantity > 9) {
        quantity = 9;
    }

    subtotal = quantity * 9.99;
    tax = money_round(subtotal * 0.051);
    total = money_round(subtotal + tax);

    quantityDisplay.textContent = quantity;
    subtotalDispaly.textContent = "Subtotal: $" + subtotal;
    taxDisplay.textContent = "Tax: $" + tax;
    totalDisplay.textContent = "Total $" + total; 
});

decreaseBtn.addEventListener("click", function() {

    quantity--;

    if (quantity < 1) {
        quantity = 1;
    }

    subtotal = quantity * 9.99;
    tax = subtotal * 0.051;
    total = subtotal + tax;

    quantityDisplay.textContent = quantity;
    subtotalDispaly.textContent = ("Subtotal: $" + subtotal);
    taxDisplay.textContent = "Tax: $" + money_round(tax); 
    totalDisplay.textContent = "Total: $" + money_round(total); 
});

reciptBtn.addEventListener("click", function() {
    window.location.href = "recipt.html?quantityVal=" + quantity;
});
