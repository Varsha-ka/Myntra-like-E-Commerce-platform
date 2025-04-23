
let cart = [];
let cartCount = 0;

function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
  updateCart();
}

function updateCart() {
  let cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  let totalPrice = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    totalPrice += item.price;
  });

  document.getElementById('total-price').innerText = totalPrice.toFixed(2);
}

function showCart() {
  document.getElementById('cart-modal').style.display = 'flex';
}

function closeCart() {
  document.getElementById('cart-modal').style.display = 'none';
}

function clearCart() {
  cart = [];
  cartCount = 0;
  document.getElementById('cart-count').innerText = cartCount;
  updateCart();
  closeCart();
}
