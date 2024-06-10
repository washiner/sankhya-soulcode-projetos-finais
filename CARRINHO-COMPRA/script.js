document.addEventListener('DOMContentLoaded', function() {
    
    let products = document.querySelectorAll('.product');
    
    let cartTableBody = document.querySelector('#cartTable tbody');
    
    let totalAmount = document.getElementById('totalAmount');
    
    let cart = {};

    
    function addToCart(product) {
        let name = product.getAttribute('data-name');
        let price = parseFloat(product.getAttribute('data-price'));

        if (!cart[name]) {
            cart[name] = { price: price, quantity: 1 };
        } else {
            cart[name].quantity += 1;
        }
        updateCart();
    }

    function removeFromCart(name) {
        delete cart[name];
        updateCart();
    }

    function updateQuantity(name, quantity) {
        if (quantity <= 0) {
            removeFromCart(name);
        } else {
            cart[name].quantity = quantity;
            updateCart();
        }
    }

    function updateCart() {
        cartTableBody.innerHTML = '';
        let total = 0;

        for (let name in cart) {
            let item = cart[name];
            let row = document.createElement('tr');

            row.innerHTML = `
                <td>${name}</td>
                <td><input type="number" value="${item.quantity}" min="1"></td>
                <td>R$${(item.price * item.quantity).toFixed(2)}</td>
                <td><button class="remove-from-cart">Remover</button></td>
            `;

            row.querySelector('input').addEventListener('input', function() {
                updateQuantity(name, parseInt(this.value));
            });

            row.querySelector('.remove-from-cart').addEventListener('click', function() {
                removeFromCart(name);
            });

            cartTableBody.appendChild(row);
            total += item.price * item.quantity;
        }

        totalAmount.textContent = total.toFixed(2);
    }

    products.forEach(product => {
        product.querySelector('.add-to-cart').addEventListener('click', function() {
            addToCart(product);
        });
    });
});
