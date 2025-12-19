//===navbar===
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove("text-blue-500", "font-bold", "underline", "decoration-3", "underline-offset-4"));

      const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (activeLink) {
        activeLink.classList.add("text-blue-500", "font-bold", "underline", "decoration-2", "underline-offset-4");
      }
    }
  });
}, { threshold: 0.6 });


sections.forEach(section => observer.observe(section));

//=== Brand Products ===
const brandProducts = [
  {id: 1, name: 'AMD', img: './img/brand/AMD.png' , href: './product/AMD.html'},
  {id: 2, name: 'Arduino', img: './img/brand/Arduino.png' , href : './product/Arduino.html'},
  {id: 3, name: 'ASRock', img: './img/brand/ASRock.png' , href: './product/ASRock.html'},
  {id: 4, name: 'Fantech', img: './img/brand/Fantech.png', href: './product/Fantech.html'},
  {id: 5, name: 'GIGABYTE', img: './img/brand/GIGABYTE.png', href: './product/GIGABYTE.html'},
  {id: 6, name: 'Logitech', img: './img/brand/Logitech.png' , href: './product/Logitech.html'},
  {id: 7, name: 'Republic Of Gamers', img: './img/brand/ROG.png', href: './product/ROG.html'},
  {id: 8, name: 'TP-Link', img: './img/brand/TP-Link.png', href: './product/TP-Link.html'},
];

function renderBrandGrid() {
  const brandContainer = document.getElementById('brand-container');
  if (!brandContainer) return;
  brandContainer.innerHTML = brandProducts.map(product => `
    <div class="w-[260px] bg-white rounded-2xl p-4 shadow-xl border-2 border-blue-300
       hover:border-4 hover:border-blue-500 
       transition-all duration-150"
    >
      <div class="w-full h-[190px] mb-4 flex items-center justify-center">
        <img 
          src="${product.img}" 
          alt="${product.name}" 
          class="max-w-full max-h-full object-cover rounded-xl mx-auto"
        >
      </div>
      <div class="text-lg font-semibold text-gray-800 text-center mb-4">
        ${product.name}
      </div>
      <a href="${product.href}" 
        class="block bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg text-center py-3 rounded-xl shadow-md active:scale-[0.98] transition"
      >
        Enter
      </a>
    </div>
  `).join('');
}

if (localStorage.getItem("products")) {
  products = JSON.parse(localStorage.getItem("products"));
}
function saveToStorage() {
  localStorage.setItem("products", JSON.stringify(products));
}

const toIDR = n => 'Rp' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

// === CART ===
let cart = JSON.parse(localStorage.getItem("cart") || "[]");
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}
function addToCart(id) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty++;
  } else {
    const p = products.find(p => p.id === id);
    cart.push({ id: p.id, name: p.name, price: p.price, qty: 1 });
  }
  saveCart();
  openCart();
}
function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
}
function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty < 1) removeFromCart(id);
  saveCart();
}
function updateCartUI() {
  const container = document.getElementById("cart-items");
  if (!container) return;
  container.innerHTML = "";
  let total = 0;
  cart.forEach(i => {
    total += i.price * i.qty;
    const div = document.createElement("div");
    div.className = "flex justify-between items-center py-2 border-b";
    div.innerHTML = `
      <div>
        <div class="font-semibold">${i.name}</div>
        <div class="text-sm text-gray-600">Rp ${i.price.toLocaleString("id-ID")} x ${i.qty}</div>
      </div>
      <div class="flex space-x-2">
        <button onclick="changeQty(${i.id},-1)" class="px-2 border">-</button>
        <button onclick="changeQty(${i.id},1)" class="px-2 border">+</button>
        <button onclick="removeFromCart(${i.id})" class="text-red-500">Remove</button>
      </div>
    `;
    container.appendChild(div);
  });
  document.getElementById("cart-total").innerText = "Rp " + total.toLocaleString("id-ID");
  document.getElementById("cart-count").innerText = cart.reduce((s, i) => s + i.qty, 0);
}
function openCart() {
  document.getElementById("cart").classList.remove("translate-x-full");
}
function closeCart() {
  document.getElementById("cart").classList.add("translate-x-full");
}
document.getElementById("checkout")?.addEventListener("click", () => {
  if (cart.length === 0) return alert("Keranjang kosong!");
  alert("Checkout berhasil!");
  cart = [];
  saveCart();
  closeCart();
});
document.getElementById("cart-btn")?.addEventListener("click", openCart);


// === Product ===
function renderProductsGrid() {
  const grid = document.getElementById("product-grid");
  if (!grid || !window.products) return;
  grid.innerHTML = "";
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded shadow w-full max-w-sm sm:w-auto";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" class="w-60 max-h-full object-cover rounded mx-auto">
      <h3 class="mt-3 font-semibold">${p.name}</h3>
      <p class="text-gray-700">Rp ${p.price.toLocaleString("id-ID")}</p>
      <button onclick="addToCart(${p.id})" class="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

// ===UI / interactions & mobile menu===
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('menu-toggle').addEventListener('click', () => {
    const m = document.getElementById('mobile-menu');
    m.classList.toggle('hidden');
  });
});

const cartEl = document.getElementById('cart');
function openCart(){ cartEl.classList.remove('translate-x-full'); }
function closeCart(){ cartEl.classList.add('translate-x-full'); }

document.getElementById('cart-btn').addEventListener('click', openCart);
document.getElementById('close-cart').addEventListener('click', closeCart);
document.getElementById('checkout').addEventListener('click', ()=>{
  if (cart.length == 0){ 
    alert('Cart kosong. Tambahkan produk dulu.'); return; 
  }
  alert('Checkout sukses! Terima kasih sudah berbelanja di Toko kami.');
  cart.length = 0; saveCart(); closeCart();
});


// ===mobile menu===
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('menu-toggle').addEventListener('click', () => {
    const m = document.getElementById('mobile-menu');
    m.classList.toggle('hidden');
  });
});

// ===Sort===
const sortSelect = document.getElementById("sortSelect");
const productGrid = document.getElementById("product-grid");

// ===Render product===
function renderProducts(list) {
  if (!productGrid) return;
  productGrid.innerHTML = "";
  list.forEach(p => {
    productGrid.innerHTML += `
      <div class="border rounded-lg p-4 shadow">
        <img src="${p.img}" alt="${p.name}" class="w-full h-40 object-cover rounded">
        <h3 class="mt-2 font-semibold">${p.name}</h3>
        <p class="text-gray-600">Rp ${p.price.toLocaleString()}</p>
        <button class="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    `;
  });
}

// ===sort===
function sortProducts(criteria) {
  let sorted = [...products];
  if (criteria === "price-asc") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (criteria === "price-desc") {
    sorted.sort((a, b) => b.price - a.price);
  }
  renderProducts(sorted);
}

if (sortSelect) {
  sortSelect.addEventListener("change", e => {
    sortProducts(e.target.value);
  });
}

renderProducts(products);
renderProductsGrid();
updateCartUI();