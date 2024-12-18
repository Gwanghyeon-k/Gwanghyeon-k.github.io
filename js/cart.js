document.addEventListener('DOMContentLoaded', () => {
  displayCartItems();
  updateSummary();
  updateCartCount();

  const checkoutButton = document.querySelector('.checkout-btn');
  if (checkoutButton) {
      checkoutButton.addEventListener('click', checkout);
  }
});

// 장바구니 아이템 표시 함수
function displayCartItems() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cartItems');
  cartItemsContainer.innerHTML = '';

  if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>장바구니에 상품이 없습니다.</p>';
      updateCartCount();
      return;
  }

  cart.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';

      cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.title}" class="cart-item-image">
          <div class="item-info">
              <div class="item-title">${item.title}</div>
              <div class="item-details">포맷: ${item.format}</div>
              <div class="item-details">가격: $${item.price.toFixed(2)}</div>
              <div class="item-details">
                  <label for="quantity-${index}">수량:</label>
                  <input type="number" id="quantity-${index}" class="quantity-input" data-index="${index}" min="1" value="${item.quantity || 1}">
              </div>
          </div>
          <button class="remove-btn" data-index="${index}">삭제</button>
      `;

      cartItemsContainer.appendChild(cartItem);
  });

  // 삭제 버튼 이벤트 리스너 추가
  const removeButtons = document.querySelectorAll('.remove-btn');
  removeButtons.forEach(button => {
      button.addEventListener('click', () => {
          const itemIndex = parseInt(button.dataset.index, 10);
          removeFromCart(itemIndex);
          displayCartItems();
          updateCartCount();
          updateSummary();
      });
  });

  // 수량 변경 이벤트 리스너 추가
  const quantityInputs = document.querySelectorAll('.quantity-input');
  quantityInputs.forEach(input => {
      input.addEventListener('change', (e) => {
          const itemIndex = parseInt(e.target.dataset.index, 10);
          const newQuantity = parseInt(e.target.value, 10);
          if (newQuantity > 0) {
              updateQuantity(itemIndex, newQuantity);
          } else {
              e.target.value = 1;
              updateQuantity(itemIndex, 1);
          }
          updateCartCount();
          updateSummary();
      });
  });

  updateCartCount();
}

// 장바구니에서 상품 삭제 함수
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
}

// 장바구니 수량 업데이트 함수
function updateQuantity(index, quantity) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart[index]) {
      cart[index].quantity = quantity;
      localStorage.setItem('cart', JSON.stringify(cart));
  }
}

// 총 수량 및 장바구니 아이템 수 업데이트 함수
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const cartCountElement = document.querySelector('.cart-count');
  const itemCountElement = document.querySelector('.item-count');

  if (cartCountElement) {
      cartCountElement.textContent = totalCount; // 헤더 배지
      cartCountElement.style.display = totalCount > 0 ? 'inline-block' : 'none';
  }

  if (itemCountElement) {
      itemCountElement.textContent = `${totalCount} ${totalCount === 1 ? 'item' : 'items'}`; // 장바구니 내 텍스트
  }
}

// 주문 요약 업데이트 함수
function updateSummary() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const subtotalElement = document.getElementById('subtotal');
  const shippingElement = document.getElementById('shipping');
  const taxElement = document.getElementById('tax');
  const totalElement = document.getElementById('total');

  const subtotal = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  const shipping = subtotal > 0 ? subtotal * 0.1 : 0;
  const tax = subtotal > 0 ? subtotal * 0.05 : 0;
  const total = subtotal + shipping + tax;

  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  shippingElement.textContent = `$${shipping.toFixed(2)}`;
  taxElement.textContent = `$${tax.toFixed(2)}`;
  totalElement.textContent = `$${total.toFixed(2)}`;
}

// 구매하기 버튼 클릭 시 함수
function checkout() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
      alert('장바구니에 상품이 없습니다.');
      return;
  }

  alert('구매가 완료되었습니다!');
  localStorage.removeItem('cart');
  displayCartItems();
  updateCartCount();
  updateSummary();
}
