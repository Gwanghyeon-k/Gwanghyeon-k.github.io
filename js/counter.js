// js/cartCounter.js

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
});

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
      cartCount.textContent = cart.length;
      
      if (cart.length > 0) {
          cartCount.classList.add('show');
      } else {
          cartCount.classList.remove('show');
      }
  }

  // 장바구니 페이지에서 item-count 업데이트
  const itemCount = document.querySelector('.item-count');
  if (itemCount) {
      itemCount.textContent = `${cart.length} ${cart.length === 1 ? 'item' : 'items'}`;
  }
}
