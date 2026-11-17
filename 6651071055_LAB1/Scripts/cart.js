/**
 * OrganiWax - Shopping Cart & Order State Management (Realistic Photography Edition)
 */

const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: "Sáp Treo Tủ Hoa Khô Lavender Botanical",
    category: "treo-tu",
    categoryName: "Sáp Treo Tủ",
    price: 135000,
    oldPrice: 170000,
    image: "Images/product-1.jpg",
    scent: "Hoa Oải Hương Lavender",
    rating: 5,
    reviews: 24,
    description: "Sáp đậu nành tự nhiên kết hợp hoa oải hương Pháp khô nguyên cành trên khoanh gỗ mộc, giữ hương thư giãn lên đến 90 ngày.",
    stock: "Còn hàng"
  },
  {
    id: 2,
    name: "Sáp Treo Xe Gỗ Đàn Hương & Trầm Ấm",
    category: "xe-hoi",
    categoryName: "Sáp Xe Hơi",
    price: 155000,
    oldPrice: 195000,
    image: "Images/product-2.jpg",
    scent: "Gỗ Đàn Hương & Trầm Tự Nhiên",
    rating: 5,
    reviews: 19,
    description: "Hũ nắp gỗ sồi cao cấp khử mùi xe hiệu quả, mang lại hương gỗ ấm áp, tỉnh táo và thư thái suốt hành trình.",
    stock: "Còn hàng"
  },
  {
    id: 3,
    name: "Sáp Treo Hương Cam Quế & Hoa Hồi",
    category: "wax-melts",
    categoryName: "Wax Melts",
    price: 95000,
    oldPrice: 120000,
    image: "Images/product-3.jpg",
    scent: "Cam Vàng & Quế Trà Bồng",
    rating: 5,
    reviews: 32,
    description: "Bánh sáp đúc thủ công gắn lát cam sấy, hoa hồi và thanh quế tự nhiên, tạo không gian ấm áp cho phòng khách & phòng ngủ.",
    stock: "Còn hàng"
  },
  {
    id: 4,
    name: "Sáp Đậu Nành Hoa Nhài & Trà Trắng",
    category: "treo-tu",
    categoryName: "Sáp Treo Tủ",
    price: 125000,
    oldPrice: 160000,
    image: "Images/product-4.jpg",
    scent: "Hoa Nhài & Búp Trà Trắng",
    rating: 5,
    reviews: 15,
    description: "Tone hương hoa nhài thanh khiết, làm dịu tâm trí, chống ẩm mốc cho tủ quần áo và góc làm việc.",
    stock: "Còn hàng"
  },
  {
    id: 5,
    name: "Sáp Bánh Donut & Bánh Quy Bơ Handmade",
    category: "treo-tu",
    categoryName: "Sáp Treo Tủ",
    price: 85000,
    oldPrice: 110000,
    image: "Images/product-5.jpg",
    scent: "Bánh Quy Bơ & Vani Béo Ngậy",
    rating: 5,
    reviews: 41,
    description: "Thiết kế đúc nổi bánh donut phủ cốm, bánh quy bơ thơm béo như tiệm bánh Pháp, kèm ruy băng đỏ xinh xắn trên khoanh gỗ mộc.",
    stock: "Còn hàng"
  },
  {
    id: 6,
    name: "Sáp Thơm Hoa Hồng Cổ & Xạ Hương",
    category: "treo-tu",
    categoryName: "Sáp Treo Tủ",
    price: 145000,
    oldPrice: 185000,
    image: "Images/product-6.jpg",
    scent: "Hoa Hồng Cổ & Xạ Hương Trắng",
    rating: 5,
    reviews: 28,
    description: "Chiết xuất tinh dầu hoa hồng Damask kết hợp nụ hồng khô trên khoanh gỗ tự nhiên, mang nét quyến rũ, quý phái.",
    stock: "Còn hàng"
  },
  {
    id: 7,
    name: "Set Hộp Quà Sáp Thơm 4 Mùa Cao Cấp",
    category: "qua-tang",
    categoryName: "Quà Tặng",
    price: 360000,
    oldPrice: 450000,
    image: "Images/product-7.jpg",
    scent: "Bộ 4 Mùi Hương Đặc Trưng",
    rating: 5,
    reviews: 53,
    description: "Hộp quà kraft cao cấp gồm 4 bánh sáp thơm botanical hoa khô nghệ thuật, tặng kèm thiệp viết tay & nơ lụa sang trọng.",
    stock: "Còn hàng"
  },
  {
    id: 8,
    name: "Sáp Khử Mùi Chanh Sả Bạc Hà Thảo Mộc",
    category: "treo-tu",
    categoryName: "Sáp Treo Tủ",
    price: 110000,
    oldPrice: 140000,
    image: "Images/product-8.jpg",
    scent: "Chanh Sả & Bạc Hà",
    rating: 5,
    reviews: 22,
    description: "Khử mùi ẩm mốc, xua đuổi côn trùng và muỗi tự nhiên, an toàn tuyệt đối cho mẹ bầu và trẻ nhỏ.",
    stock: "Còn hàng"
  },
  {
    id: 9,
    name: "Sáp Treo Tủ Hương Hoa Phong Lữ Tươi Mát",
    category: "treo-tu",
    categoryName: "Sáp Treo Tủ",
    price: 130000,
    oldPrice: 165000,
    image: "Images/product-9.jpg",
    scent: "Hoa Phong Lữ & Cam Bergamot",
    rating: 5,
    reviews: 14,
    description: "Cánh hoa phong lữ sấy thăng hoa giữ trọn sắc tím mộng mơ và hương thơm thảo mộc thanh tao dịu nhẹ.",
    stock: "Còn hàng"
  },
  {
    id: 10,
    name: "Đèn Xông Sáp Gốm Sứ Bắc Âu Minimalist",
    category: "wax-melts",
    categoryName: "Phụ Kiện",
    price: 190000,
    oldPrice: 240000,
    image: "Images/product-10.jpg",
    scent: "Phụ kiện đốt sáp",
    rating: 5,
    reviews: 36,
    description: "Chất liệu gốm sứ tráng men mờ chịu nhiệt cao cấp, tặng kèm 5 viên nến tealight không khói.",
    stock: "Còn hàng"
  },
  {
    id: 11,
    name: "Nến Thơm Bấc Gỗ Rừng Thông Pine Forest",
    category: "qua-tang",
    categoryName: "Nến Thơm",
    price: 220000,
    oldPrice: 280000,
    image: "Images/product-11.jpg",
    scent: "Rừng Thông & Rêu Sồi",
    rating: 5,
    reviews: 48,
    description: "Sáp cọ và bấc gỗ phát ra tiếng nổ lách tách êm tai khi cháy, mang hơi thở trong lành của núi rừng Đà Lạt.",
    stock: "Còn hàng"
  },
  {
    id: 12,
    name: "Sáp Thơm Phòng Tắm Biển Sâu Ocean Breeze",
    category: "treo-tu",
    categoryName: "Sáp Treo Tủ",
    price: 140000,
    oldPrice: 175000,
    image: "Images/product-12.jpg",
    scent: "Muối Biển & Gió Đại Dương",
    rating: 5,
    reviews: 17,
    description: "Cảm giác sảng khoái mát lạnh như đứng trước biển cả, chống ẩm mốc phòng tắm hiệu quả.",
    stock: "Còn hàng"
  }
];

function getCart() {
  const stored = localStorage.getItem("organiwax_cart");
  if (!stored) {
    const initial = [
      { id: 5, name: "Sáp Bánh Donut & Bánh Quy Bơ Handmade", price: 85000, quantity: 1, image: "Images/product-5.jpg" },
      { id: 1, name: "Sáp Treo Tủ Hoa Khô Lavender Botanical", price: 135000, quantity: 1, image: "Images/product-1.jpg" }
    ];
    localStorage.setItem("organiwax_cart", JSON.stringify(initial));
    return initial;
  }
  return JSON.parse(stored);
}

function saveCart(cart) {
  localStorage.setItem("organiwax_cart", JSON.stringify(cart));
  updateHeaderCart();
}

function formatPrice(num) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num).replace('₫', '₫');
}

function playCartSound() {
  try {
    const audio = new Audio("Sounds/add-to-cart.mp3");
    audio.volume = 0.6;
    audio.play().catch(e => playBeep());
  } catch (err) {
    playBeep();
  }
}

function playBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(587.33, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  } catch(e) {}
}

function showToast(message) {
  let toast = document.getElementById("cartToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "cartToast";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span style="font-size:18px;">🌿</span> <span>${message}</span>`;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function updateHeaderCart() {
  const cart = getCart();
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  document.querySelectorAll(".cart-count-badge").forEach(badge => badge.textContent = totalCount);
  document.querySelectorAll(".cart-total-price").forEach(span => span.textContent = formatPrice(totalPrice));
}

function addToCart(productId, qty = 1) {
  const product = DEFAULT_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const existingIndex = cart.findIndex(item => item.id === productId);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: qty,
      image: product.image
    });
  }

  saveCart(cart);
  playCartSound();
  showToast(`Đã thêm <b>${product.name}</b> vào giỏ hàng!`);
}

function addToWishlist(productId) {
  let wishlist = JSON.parse(localStorage.getItem("organiwax_wishlist") || "[]");
  if (!wishlist.includes(productId)) {
    wishlist.push(productId);
    localStorage.setItem("organiwax_wishlist", JSON.stringify(wishlist));
  }
  document.querySelectorAll(".wishlist-count-badge").forEach(b => b.textContent = wishlist.length);
  playCartSound();
  showToast("Đã lưu vào danh sách sản phẩm yêu thích ❤️");
}

function renderCartPage() {
  const tableBody = document.getElementById("cartTableBody");
  if (!tableBody) return;

  const cart = getCart();
  if (cart.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5" style="padding: 40px; text-align: center;"><h5>Giỏ hàng của bạn đang trống!</h5><br><a href="shop-grid.html" class="primary-btn">TIẾP TỤC MUA SẮM</a></td></tr>`;
    updateCartSummary(0);
    return;
  }

  tableBody.innerHTML = cart.map(item => `
    <tr data-id="${item.id}">
      <td class="shoping__cart__item">
        <img src="${item.image}" alt="${item.name}">
        <h5>${item.name}</h5>
      </td>
      <td class="shoping__cart__price">
        ${formatPrice(item.price)}
      </td>
      <td class="shoping__cart__quantity">
        <div class="quantity">
          <div class="pro-qty">
            <span class="qtybtn dec" onclick="changeQuantity(${item.id}, -1)">-</span>
            <input type="text" value="${item.quantity}" readonly>
            <span class="qtybtn inc" onclick="changeQuantity(${item.id}, 1)">+</span>
          </div>
        </div>
      </td>
      <td class="shoping__cart__total">
        ${formatPrice(item.price * item.quantity)}
      </td>
      <td class="shoping__cart__item__close">
        <span onclick="removeItem(${item.id})">✕</span>
      </td>
    </tr>
  `).join("");

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  updateCartSummary(subtotal);
}

function changeQuantity(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeItem(id);
      return;
    }
    saveCart(cart);
    renderCartPage();
  }
}

function removeItem(id) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== id);
  saveCart(cart);
  renderCartPage();
  showToast("Đã xóa sản phẩm khỏi giỏ hàng.");
}

function updateCartSummary(subtotal) {
  const discountRate = parseFloat(localStorage.getItem("organiwax_discount") || "0");
  const discountAmount = subtotal * discountRate;
  const shippingFee = (subtotal > 300000 || subtotal === 0) ? 0 : 30000;
  const total = subtotal - discountAmount + shippingFee;

  const subtotalElem = document.getElementById("cartSubtotal");
  const discountElem = document.getElementById("cartDiscount");
  const shippingElem = document.getElementById("cartShipping");
  const totalElem = document.getElementById("cartTotal");

  if (subtotalElem) subtotalElem.textContent = formatPrice(subtotal);
  if (discountElem) discountElem.textContent = formatPrice(discountAmount);
  if (shippingElem) shippingElem.textContent = shippingFee === 0 ? "Miễn phí" : formatPrice(shippingFee);
  if (totalElem) totalElem.textContent = formatPrice(total);
}

function applyCoupon(event) {
  if (event) event.preventDefault();
  const input = document.getElementById("couponInput");
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === "ORGANISAP" || code === "GIAM10") {
    localStorage.setItem("organiwax_discount", "0.1");
    showToast("Áp dụng mã giảm giá 10% thành công!");
    renderCartPage();
  } else if (code === "") {
    showToast("Vui lòng nhập mã giảm giá.");
  } else {
    showToast("Mã voucher không hợp lệ hoặc đã hết hạn!");
  }
}

function renderCheckoutPage() {
  const orderList = document.getElementById("checkoutOrderItems");
  if (!orderList) return;

  const cart = getCart();
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountRate = parseFloat(localStorage.getItem("organiwax_discount") || "0");
  const discountAmount = subtotal * discountRate;
  const shippingFee = (subtotal > 300000 || subtotal === 0) ? 0 : 30000;
  const total = subtotal - discountAmount + shippingFee;

  orderList.innerHTML = cart.map(item => `
    <li>${item.name} <b style="color:#7fad39">x ${item.quantity}</b> <span>${formatPrice(item.price * item.quantity)}</span></li>
  `).join("");

  const subtotalElem = document.getElementById("checkoutSubtotal");
  const discountElem = document.getElementById("checkoutDiscount");
  const shippingElem = document.getElementById("checkoutShipping");
  const totalElem = document.getElementById("checkoutTotal");

  if (subtotalElem) subtotalElem.textContent = formatPrice(subtotal);
  if (discountElem) discountElem.textContent = formatPrice(discountAmount);
  if (shippingElem) shippingElem.textContent = shippingFee === 0 ? "Miễn phí" : formatPrice(shippingFee);
  if (totalElem) totalElem.textContent = formatPrice(total);
}

function submitOrder(event) {
  if (event) event.preventDefault();
  const cart = getCart();
  if (cart.length === 0) {
    alert("Giỏ hàng của bạn đang trống!");
    return;
  }

  const name = document.getElementById("custName")?.value || "Khách Hàng";
  const phone = document.getElementById("custPhone")?.value || "";
  const address = document.getElementById("custAddress")?.value || "";

  if (!phone || !address) {
    alert("Vui lòng điền đầy đủ Họ tên, Số điện thoại và Địa chỉ giao hàng!");
    return;
  }

  const orderId = "WAX" + Math.floor(100000 + Math.random() * 900000);
  
  const modal = document.getElementById("orderSuccessModal");
  const orderIdElem = document.getElementById("modalOrderId");
  if (orderIdElem) orderIdElem.textContent = orderId;
  if (modal) modal.classList.add("active");

  playCartSound();
  localStorage.removeItem("organiwax_cart");
  localStorage.removeItem("organiwax_discount");
  updateHeaderCart();
}

function closeModal() {
  const modal = document.getElementById("orderSuccessModal");
  if (modal) modal.classList.remove("active");
  window.location.href = "index.html";
}

function togglePaymentMethod(method) {
  const bankBox = document.getElementById("bankTransferInfo");
  if (!bankBox) return;
  bankBox.style.display = (method === "bank") ? "block" : "none";
}

document.addEventListener("DOMContentLoaded", () => {
  updateHeaderCart();
  const wishlist = JSON.parse(localStorage.getItem("organiwax_wishlist") || "[]");
  document.querySelectorAll(".wishlist-count-badge").forEach(b => b.textContent = wishlist.length);

  renderCartPage();
  renderCheckoutPage();
});
