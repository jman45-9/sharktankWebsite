function money_round(num) {
    return Math.ceil(num * 100) / 100;
}

window.onload = function() {

    const quantityDispaly = document.getElementById("quantity");
    const subtotalDispaly = document.getElementById("subtotal");
    const taxDisplay = document.getElementById("tax");
    const totalDisplay = document.getElementById("total");

    const urlParams = new URLSearchParams(window.location.search);
    const quantity = urlParams.get('quantityVal');

    const subtotal = quantity * 9.99;
    const tax = money_round(subtotal * 0.051);
    
    quantityDispaly.textContent = "Quanity: " + quantity;
    subtotalDispaly.textContent = "Subtotal: $" + subtotal;
    taxDisplay.textContent = "Tax: $" + tax;
    totalDisplay.textContent = "Total: $" + (tax + subtotal);
};