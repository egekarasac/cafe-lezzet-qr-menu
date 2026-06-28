// ===== MENÜ VERİLERİ =====
const menuData = [
  {id:1,name:'Izgara Köfte',cat:'yiyecek',price:225,desc:'El yapımı köfteler, özel baharat karışımı ile ızgarada pişirilir, yanında bulgur pilavı ve mevsim salata ile servis edilir.',emoji:'🥩',badge:'Çok Satan'},
  {id:2,name:'Mantı',cat:'yiyecek',price:195,desc:'El açması mantı, kıymalı harç ile doldurulur, sarımsaklı yoğurt ve tereyağlı domates sosu ile servis edilir.',emoji:'🥟',badge:'Usta İşi'},
  {id:3,name:'Lahmacun',cat:'yiyecek',price:165,desc:'İncecik açılan hamur üzerine kıymalı harç, maydanoz ve limon ile servis.',emoji:'🫓',badge:null},
  {id:4,name:'Adana Kebap',cat:'yiyecek',price:285,desc:'Özel baharatlarla yoğrulan dana kıyması, odun ateşinde pişirilir, lavaş ve közlenmiş sebzeler ile sunulur.',emoji:'🥙',badge:'🔥 Popüler'},
  {id:5,name:'Pide Karışık',cat:'yiyecek',price:195,desc:'Kaşar peyniri, sucuk, yumurta ve pastırma ile zenginleştirilmiş taş fırın pide.',emoji:'🫓',badge:null},
  {id:6,name:'Tavuk Şiş',cat:'yiyecek',price:245,desc:'Marine edilmiş tavuk göğsü, şişte mangal ateşinde pişirilir, pirinç pilavı ve cacık ile servis.',emoji:'🍗',badge:null},
  {id:7,name:'Türk Kahvesi',cat:'sicak',price:120,desc:'Geleneksel cezvede pişirilen Türk kahvesi, yanında lokum ile servis.',emoji:'☕',badge:null},
  {id:8,name:'Caffè Latte',cat:'sicak',price:175,desc:'Double espresso üzerine buharla köpürtülmüş süt, hafif süt köpüğü ile.',emoji:'🥛',badge:'En Çok Tercih Edilen'},
  {id:9,name:'Cappuccino',cat:'sicak',price:175,desc:'Double espresso, eşit oranda buharlı süt ve yoğun süt köpüğü, üzerine kakao.',emoji:'☕',badge:null},
  {id:10,name:'Flat White',cat:'sicak',price:195,desc:'Double ristretto üzerine kadifemsi mikro köpük süt, daha yoğun kahve tadı.',emoji:'☕',badge:null},
  {id:11,name:'Mocha',cat:'sicak',price:205,desc:'Espresso, sıcak çikolata ve buharlı sütün mükemmel uyumu, üzerine krema.',emoji:'🍫',badge:'Şekerli'},
  {id:12,name:'Sıcak Çikolata',cat:'sicak',price:185,desc:'Belçika çikolatası ile hazırlanan yoğun ve kremsi sıcak çikolata, marshmallow ile.',emoji:'🍫',badge:null},
  {id:13,name:'Soğuk Brew',cat:'soguk',price:195,desc:'12 saat soğuk suda demlenmiş, düşük asitli, pürüzsüz ve doğal tatlı kahve.',emoji:'🧊',badge:'Cold Brew'},
  {id:14,name:'Iced Latte',cat:'soguk',price:185,desc:'Double espresso, soğuk süt ve buz küpleri, hafif ve ferahlatıcı.',emoji:'🥤',badge:null},
  {id:15,name:'Iced Caramel Macchiato',cat:'soguk',price:215,desc:'Vanilya şurubu, soğuk süt, espresso ve karamel sos katmanları.',emoji:'🧋',badge:'İmza'},
  {id:16,name:'Frappuccino',cat:'soguk',price:235,desc:'Kahve, süt, buz ve özel frappe karışımı, üzerine krema ve sos.',emoji:'🥤',badge:'Soğuk'},
  {id:17,name:'Iced Mocha',cat:'soguk',price:225,desc:'Espresso, çikolata sosu, soğuk süt ve buz, üzerine çırpılmış krema.',emoji:'🍫',badge:null},
  {id:18,name:'Affogato',cat:'soguk',price:245,desc:'Sıcak espresso, vanilyalı dondurma üzerine dökülür, soğuk-sıcak kontrastı.',emoji:'🍨',badge:'Özel'},
  {id:19,name:'Künefe',cat:'tatli',price:215,desc:'Tel kadayıf arasında eritilmiş taze peynir, şerbet ve antep fıstığı ile servis.',emoji:'🧀',badge:'Tatlı Kralı'},
  {id:20,name:'Sütlaç',cat:'tatli',price:155,desc:'Fırında karamelize olmuş geleneksel sütlaç, pirinç ve vanilya aroması ile.',emoji:'🍮',badge:null},
  {id:21,name:'Baklava (4 Kişilik)',cat:'tatli',price:275,desc:'80 kat incecik açılan yufka, ceviz içi, şerbet ve antep fıstığı ile taçlandırılmış.',emoji:'🍯',badge:'İmza'},
  {id:22,name:'Dondurmalı İrmik',cat:'tatli',price:195,desc:'Sıcak irmik helvası, vanilyalı dondurma ve fındık kırıkları ile.',emoji:'🍨',badge:null},
  {id:23,name:'Tiramisu',cat:'tatli',price:205,desc:'Kahveye batırılmış kedidili, mascarpone kreması ve kakao katmanları.',emoji:'🍰',badge:'Popüler'},
  {id:24,name:'Cheesecake',cat:'tatli',price:225,desc:'New York usulü kremalı cheesecake, çilek sosu ile servis edilir.',emoji:'🧁',badge:null},
];

// ===== STATE =====
let cart = [];
let orders = JSON.parse(localStorage.getItem('orders') || '[]');
let orderCounter = orders.length;
let currentCategory = 'all';
let likedItems = JSON.parse(localStorage.getItem('liked') || '[]');

// ===== DOM ELEMENTS =====
const $ = id => document.getElementById(id);

// ===== GRADIENT & LABEL =====
function getGradient(cat) {
  const map = {yiyecek:'#f5e6d3,#e8d5c4',sicak:'#fef3c7,#fde68a',soguk:'#dbeafe,#bfdbfe',tatli:'#fce7f3,#fbcfe8'};
  return map[cat] || '#f5e6d3,#e8d5c4';
}
function getLabel(cat) {
  const map = {yiyecek:'Yiyecek',sicak:'Sıcak Kahve',soguk:'Soğuk Kahve',tatli:'Tatlı'};
  return map[cat] || cat;
}

// ===== MENU RENDER =====
function renderMenu() {
  const grid = $('menuGrid');
  const search = ($('searchInput').value || '').toLowerCase();

  let items = menuData;
  if (currentCategory !== 'all') items = items.filter(i => i.cat === currentCategory);
  if (search) items = items.filter(i => i.name.toLowerCase().includes(search) || i.desc.toLowerCase().includes(search));

  if (!items.length) {
    grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-search"></i><h4>Sonuç bulunamadı</h4><p>Farklı bir arama deneyin</p></div>';
    return;
  }

  grid.innerHTML = items.map(item => `
    <div class="menu-item" data-id="${item.id}">
      <div class="menu-item-img" style="background:linear-gradient(135deg,${getGradient(item.cat)})">
        <span style="font-size:56px">${item.emoji}</span>
        ${item.badge ? `<span class="menu-item-badge">${item.badge}</span>` : ''}
        <button class="menu-item-like" data-id="${item.id}">
          <i class="${likedItems.includes(item.id) ? 'fas' : 'far'} fa-heart"></i>
        </button>
      </div>
      <div class="menu-item-body">
        <div class="menu-item-cat">${getLabel(item.cat)}</div>
        <div class="menu-item-name">${item.name}</div>
        <div class="menu-item-desc">${item.desc}</div>
        <div class="menu-item-footer">
          <span class="menu-item-price">${item.price}₺</span>
          <button class="add-btn" data-id="${item.id}"><i class="fas fa-plus"></i></button>
        </div>
      </div>
    </div>
  `).join('');

  // Event listeners
  grid.querySelectorAll('.menu-item').forEach(el => {
    el.addEventListener('click', function(e) {
      if (e.target.closest('.add-btn') || e.target.closest('.menu-item-like')) return;
      openItemModal(parseInt(this.dataset.id));
    });
  });
  grid.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      addToCart(parseInt(this.dataset.id));
    });
  });
  grid.querySelectorAll('.menu-item-like').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleLike(parseInt(this.dataset.id));
    });
  });
}

// ===== CATEGORY TABS =====
document.querySelectorAll('.cat-tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    currentCategory = this.dataset.cat;
    renderMenu();
  });
});

// ===== SEARCH =====
$('searchInput').addEventListener('input', renderMenu);

// ===== LIKES =====
function toggleLike(id) {
  const idx = likedItems.indexOf(id);
  if (idx > -1) likedItems.splice(idx, 1);
  else likedItems.push(id);
  localStorage.setItem('liked', JSON.stringify(likedItems));
  renderMenu();
}

// ===== ITEM MODAL =====
function openItemModal(id) {
  const item = menuData.find(i => i.id === id);
  if (!item) return;

  const existing = cart.find(c => c.id === id);
  let qty = existing ? existing.qty : 1;

  const content = $('itemModalContent');
  content.innerHTML = `
    <div class="item-modal-img" style="background:linear-gradient(135deg,${getGradient(item.cat)})">
      <span style="font-size:80px">${item.emoji}</span>
    </div>
    <div class="item-modal-body">
      <div class="item-modal-cat">${getLabel(item.cat)}</div>
      <h2>${item.name}</h2>
      <p class="item-modal-desc">${item.desc}</p>
      <div class="item-modal-price">${item.price}₺</div>
      <div class="item-modal-qty">
        <button class="qty-btn" id="modalMinus"><i class="fas fa-minus"></i></button>
        <span class="qty-num" id="modalQtyDisplay">${qty}</span>
        <button class="qty-btn" id="modalPlus"><i class="fas fa-plus"></i></button>
      </div>
      <button class="item-modal-add" id="modalAddBtn">
        <i class="fas fa-shopping-bag"></i> Sepete Ekle — ${item.price * qty}₺
      </button>
    </div>
  `;

  $('itemModal').classList.add('open');
  $('itemModalOverlay').classList.add('open');

  const qtyDisplay = $('modalQtyDisplay');
  const addBtn = $('modalAddBtn');

  $('modalMinus').addEventListener('click', function() {
    if (qty > 1) {
      qty--;
      qtyDisplay.textContent = qty;
      addBtn.innerHTML = `<i class="fas fa-shopping-bag"></i> Sepete Ekle — ${item.price * qty}₺`;
    }
  });

  $('modalPlus').addEventListener('click', function() {
    qty++;
    qtyDisplay.textContent = qty;
    addBtn.innerHTML = `<i class="fas fa-shopping-bag"></i> Sepete Ekle — ${item.price * qty}₺`;
  });

  addBtn.addEventListener('click', function() {
    const inCart = cart.find(c => c.id === id);
    if (inCart) {
      inCart.qty += qty;
    } else {
      cart.push({ ...item, qty: qty });
    }
    closeItemModal();
    updateCart();
    showToast(item.name);
  });
}

function closeItemModal() {
  $('itemModal').classList.remove('open');
  $('itemModalOverlay').classList.remove('open');
}

$('closeItemModal').addEventListener('click', closeItemModal);
$('itemModalOverlay').addEventListener('click', closeItemModal);

// ===== CART =====
function addToCart(id) {
  const item = menuData.find(i => i.id === id);
  if (!item) return;
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCart();
  showToast(item.name);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCart();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  updateCart();
}

function updateCart() {
  const totalItems = cart.reduce((s, c) => s + c.qty, 0);
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  // Badge
  const badge = $('cartBadge');
  if (totalItems > 0) {
    badge.textContent = totalItems;
    badge.classList.add('show');
  } else {
    badge.classList.remove('show');
  }

  // Cart bar
  const bar = $('cartBar');
  if (totalItems > 0) {
    bar.classList.add('show');
    $('cartBarCount').textContent = totalItems;
    $('cartBarItems').textContent = `${totalItems} ürün`;
    $('cartBarTotal').textContent = `${total.toFixed(0)}₺`;
  } else {
    bar.classList.remove('show');
  }

  // Cart panel items
  const container = $('cartItems');
  const footer = $('cartFooter');
  const checkoutBtn = $('checkoutBtn');

  if (cart.length === 0) {
    container.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-bag"></i><h4>Sepetiniz boş</h4><p>Lezzetlerimizi keşfetmeye başlayın!</p></div>';
    footer.style.display = 'none';
    checkoutBtn.disabled = true;
    return;
  }

  container.innerHTML = cart.map(c => `
    <div class="cart-item">
      <div class="cart-item-img" style="background:linear-gradient(135deg,${getGradient(c.cat)})">${c.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${c.name}</div>
        <div class="cart-item-price">${c.price}₺</div>
        <div class="cart-item-actions">
          <button class="cart-item-qty-btn" onclick="changeQty(${c.id}, -1)"><i class="fas fa-minus"></i></button>
          <span class="cart-item-qty">${c.qty}</span>
          <button class="cart-item-qty-btn" onclick="changeQty(${c.id}, 1)"><i class="fas fa-plus"></i></button>
          <button class="cart-item-remove" onclick="removeFromCart(${c.id})"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
    </div>
  `).join('');

  footer.style.display = 'block';
  $('cartSubtotal').textContent = `${subtotal.toFixed(0)}₺`;
  $('cartTax').textContent = `${tax.toFixed(0)}₺`;
  $('cartTotal').textContent = `${total.toFixed(0)}₺`;
  checkoutBtn.disabled = false;
}

function showToast(name) {
  const t = document.createElement('div');
  t.style.cssText = 'position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:#2D2418;color:#fff;padding:12px 24px;border-radius:50px;font-size:14px;font-weight:500;z-index:999;box-shadow:0 4px 20px rgba(0,0,0,0.2);animation:fadeUp 0.3s ease;pointer-events:none;white-space:nowrap;max-width:90vw;overflow:hidden;text-overflow:ellipsis';
  t.textContent = `✓ ${name} sepete eklendi`;
  document.body.appendChild(t);
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transition = 'opacity 0.3s';
    setTimeout(() => t.remove(), 300);
  }, 2000);
}

// ===== CART PANEL =====
function openCartPanel() {
  $('cartPanel').classList.add('open');
  $('cartOverlay').classList.add('show');
}
function closeCartPanel() {
  $('cartPanel').classList.remove('open');
  $('cartOverlay').classList.remove('show');
}

$('viewCartBtn').addEventListener('click', openCartPanel);
$('cartBtn').addEventListener('click', openCartPanel);
$('closeCart').addEventListener('click', closeCartPanel);
$('cartOverlay').addEventListener('click', closeCartPanel);

// ===== SIDEBAR =====
$('menuToggle').addEventListener('click', () => { $('sidebar').classList.add('open'); $('sidebarOverlay').classList.add('show'); });
$('closeSidebar').addEventListener('click', () => { $('sidebar').classList.remove('open'); $('sidebarOverlay').classList.remove('show'); });
$('sidebarOverlay').addEventListener('click', () => { $('sidebar').classList.remove('open'); $('sidebarOverlay').classList.remove('show'); });

document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    $('sidebar').classList.remove('open');
    $('sidebarOverlay').classList.remove('show');

    const section = this.dataset.section;
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    $(`${section}Section`).classList.add('active');

    if (section === 'orders') renderOrders();
  });
});

// ===== QR =====
if (typeof QRCode !== 'undefined') {
  new QRCode($('qrcode'), { text: window.location.href, width: 180, height: 180, colorDark: '#2D2418', colorLight: '#FFFFFF', correctLevel: QRCode.CorrectLevel.H });
}
$('shareBtn').addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({ title: 'Cafe Lezzet Menü', text: 'Cafe Lezzet menüsünü keşfedin!', url: window.location.href }).catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => alert('Menü linki kopyalandı!'));
  }
});

// ===== ÖDEME =====
$('checkoutBtn').addEventListener('click', function() {
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0) * 1.1;

  // Sipariş özetini doldur
  $('paymentItems').innerHTML = cart.map(c =>
    `<div style="display:flex;justify-content:space-between;padding:4px 0;font-size:13px">
      <span>${c.name} x${c.qty}</span>
      <span style="font-weight:600">${(c.price * c.qty).toFixed(0)}₺</span>
    </div>`
  ).join('');
  $('paymentTotalAmount').textContent = `${total.toFixed(0)}₺`;

  // Modalı aç
  $('paymentModal').classList.add('open');
  $('paymentOverlay').classList.add('open');

  // Butonu sıfırla
  $('payBtn').disabled = false;
  $('payBtnText').textContent = 'Ödemeyi Tamamla';
  $('paySpinner').classList.add('hidden');
});

$('closePayment').addEventListener('click', () => {
  $('paymentModal').classList.remove('open');
  $('paymentOverlay').classList.remove('open');
});
$('paymentOverlay').addEventListener('click', () => {
  $('paymentModal').classList.remove('open');
  $('paymentOverlay').classList.remove('open');
});

// Kart numarası formatlama
$('cardNumber').addEventListener('input', function() {
  let v = this.value.replace(/\D/g, '').substring(0, 16);
  v = v.replace(/(.{4})/g, '$1 ').trim();
  this.value = v;
});
$('cardExpiry').addEventListener('input', function() {
  let v = this.value.replace(/\D/g, '').substring(0, 4);
  if (v.length >= 2) v = v.substring(0, 2) + '/' + v.substring(2);
  this.value = v;
});

// Ödeme formu submit
$('paymentForm').addEventListener('submit', function(e) {
  e.preventDefault();

  $('payBtn').disabled = true;
  $('payBtnText').textContent = 'Ödeniyor...';
  $('paySpinner').classList.remove('hidden');

  setTimeout(() => {
    // Modalı kapat
    $('paymentModal').classList.remove('open');
    $('paymentOverlay').classList.remove('open');

    // Sipariş oluştur
    orderCounter++;
    const order = {
      id: orderCounter,
      items: JSON.parse(JSON.stringify(cart)),
      total: cart.reduce((s, c) => s + c.price * c.qty, 0) * 1.1,
      status: 'preparing',
      date: new Date().toLocaleString('tr-TR'),
    };
    orders.unshift(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Sepeti temizle
    cart = [];
    updateCart();

    // Başarı mesajı
    $('orderNumber').textContent = `#${String(orderCounter).padStart(3, '0')}`;
    $('successModal').classList.add('open');
  }, 2000);
});

// Başarı mesajını kapat
$('successCloseBtn').addEventListener('click', () => {
  $('successModal').classList.remove('open');
  renderOrders();
});

// ===== SİPARİŞLER =====
function renderOrders() {
  const list = $('ordersList');
  if (!orders.length) {
    list.innerHTML = '<div class="empty-state"><i class="fas fa-clipboard-list"></i><h3>Henüz siparişiniz yok</h3><p>İlk siparişinizi vermek için menüye göz atın!</p></div>';
    return;
  }
  list.innerHTML = orders.map(o => `
    <div class="order-card">
      <div class="order-card-header">
        <span class="order-number">Sipariş #${String(o.id).padStart(3, '0')}</span>
        <span class="order-status ${o.status}">${o.status === 'preparing' ? 'Hazırlanıyor' : 'Teslim Edildi'}</span>
      </div>
      <div class="order-items">${o.items.map(i => `${i.name} x${i.qty}`).join(', ')}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px">
        <span style="font-size:12px;color:var(--text-light)">${o.date}</span>
        <span class="order-total">${o.total.toFixed(0)}₺</span>
      </div>
    </div>
  `).join('');
}

// ===== WELCOME & LOADING =====
setTimeout(() => {
  $('loadingScreen').classList.add('hide');
  setTimeout(() => { $('loadingScreen').style.display = 'none'; }, 500);
}, 800);

setTimeout(() => {
  $('welcomePage').classList.add('show');
}, 1200);

$('enterBtn').addEventListener('click', () => {
  $('welcomePage').classList.add('hide');
  setTimeout(() => {
    $('welcomePage').style.display = 'none';
    $('mainApp').classList.add('show');
  }, 500);
});

// ===== BAŞLAT =====
renderMenu();
renderOrders();
