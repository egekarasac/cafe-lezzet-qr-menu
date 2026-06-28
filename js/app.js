const menuData = [
  {id:1,name:'Izgara Köfte',cat:'yiyecek',price:225,desc:'El yapımı köfteler, özel baharat karışımı ile ızgarada pişirilir.',emoji:'🥩',badge:'Çok Satan'},
  {id:2,name:'Mantı',cat:'yiyecek',price:195,desc:'El açması mantı, kıymalı harç ile doldurulur, sarımsaklı yoğurt ile servis edilir.',emoji:'🥟',badge:'Usta İşi'},
  {id:3,name:'Lahmacun',cat:'yiyecek',price:165,desc:'İncecik açılan hamur üzerine kıymalı harç, maydanoz ve limon ile servis.',emoji:'🫓',badge:null},
  {id:4,name:'Adana Kebap',cat:'yiyecek',price:285,desc:'Özel baharatlarla yoğrulan dana kıyması, odun ateşinde pişirilir.',emoji:'🥙',badge:'🔥 Popüler'},
  {id:5,name:'Pide Karışık',cat:'yiyecek',price:195,desc:'Kaşar peyniri, sucuk, yumurta ve pastırma ile zenginleştirilmiş pide.',emoji:'🫓',badge:null},
  {id:6,name:'Tavuk Şiş',cat:'yiyecek',price:245,desc:'Marine edilmiş tavuk göğsü, şişte mangal ateşinde pişirilir.',emoji:'🍗',badge:null},
  {id:7,name:'Türk Kahvesi',cat:'sicak',price:120,desc:'Geleneksel cezvede pişirilen Türk kahvesi, yanında lokum ile servis.',emoji:'☕',badge:null},
  {id:8,name:'Caffè Latte',cat:'sicak',price:175,desc:'Double espresso üzerine buharla köpürtülmüş süt.',emoji:'🥛',badge:'En Çok Tercih Edilen'},
  {id:9,name:'Cappuccino',cat:'sicak',price:175,desc:'Double espresso, eşit oranda buharlı süt ve yoğun süt köpüğü.',emoji:'☕',badge:null},
  {id:10,name:'Flat White',cat:'sicak',price:195,desc:'Double ristretto üzerine kadifemsi mikro köpük süt.',emoji:'☕',badge:null},
  {id:11,name:'Mocha',cat:'sicak',price:205,desc:'Espresso, sıcak çikolata ve buharlı sütün mükemmel uyumu.',emoji:'🍫',badge:'Şekerli'},
  {id:12,name:'Sıcak Çikolata',cat:'sicak',price:185,desc:'Belçika çikolatası ile hazırlanan yoğun ve kremsi sıcak çikolata.',emoji:'🍫',badge:null},
  {id:13,name:'Soğuk Brew',cat:'soguk',price:195,desc:'12 saat soğuk suda demlenmiş, düşük asitli, pürüzsüz kahve.',emoji:'🧊',badge:'Cold Brew'},
  {id:14,name:'Iced Latte',cat:'soguk',price:185,desc:'Double espresso, soğuk süt ve buz küpleri ile.',emoji:'🥤',badge:null},
  {id:15,name:'Iced Caramel Macchiato',cat:'soguk',price:215,desc:'Vanilya şurubu, soğuk süt, espresso ve karamel sos.',emoji:'🧋',badge:'İmza'},
  {id:16,name:'Frappuccino',cat:'soguk',price:235,desc:'Kahve, süt, buz ve özel frappe karışımı, üzerine krema.',emoji:'🥤',badge:'Soğuk'},
  {id:17,name:'Iced Mocha',cat:'soguk',price:225,desc:'Espresso, çikolata sosu, soğuk süt ve buz.',emoji:'🍫',badge:null},
  {id:18,name:'Affogato',cat:'soguk',price:245,desc:'Sıcak espresso, vanilyalı dondurma üzerine dökülür.',emoji:'🍨',badge:'Özel'},
  {id:19,name:'Künefe',cat:'tatli',price:215,desc:'Tel kadayıf arasında eritilmiş taze peynir, şerbet ve antep fıstığı.',emoji:'🧀',badge:'Tatlı Kralı'},
  {id:20,name:'Sütlaç',cat:'tatli',price:155,desc:'Fırında karamelize olmuş geleneksel sütlaç.',emoji:'🍮',badge:null},
  {id:21,name:'Baklava (4 Kişilik)',cat:'tatli',price:275,desc:'80 kat incecik açılan yufka, ceviz içi, şerbet ve antep fıstığı.',emoji:'🍯',badge:'İmza'},
  {id:22,name:'Dondurmalı İrmik',cat:'tatli',price:195,desc:'Sıcak irmik helvası, vanilyalı dondurma ve fındık kırıkları.',emoji:'🍨',badge:null},
  {id:23,name:'Tiramisu',cat:'tatli',price:205,desc:'Kahveye batırılmış kedidili, mascarpone kreması ve kakao.',emoji:'🍰',badge:'Popüler'},
  {id:24,name:'Cheesecake',cat:'tatli',price:225,desc:'New York usulü kremalı cheesecake, çilek sosu ile.',emoji:'🧁',badge:null},
];

// State
let cart = [];
let orders = [];
try { orders = JSON.parse(localStorage.getItem('orders') || '[]'); } catch(e) {}
let orderCounter = orders.length;
let currentCat = 'all';
let liked = [];
try { liked = JSON.parse(localStorage.getItem('liked') || '[]'); } catch(e) {}

// Helpers
function $(id) { return document.getElementById(id); }

function grad(cat) {
  if (cat === 'yiyecek') return '#f5e6d3,#e8d5c4';
  if (cat === 'sicak') return '#fef3c7,#fde68a';
  if (cat === 'soguk') return '#dbeafe,#bfdbfe';
  return '#fce7f3,#fbcfe8';
}

function label(cat) {
  if (cat === 'yiyecek') return 'Yiyecek';
  if (cat === 'sicak') return 'Sıcak Kahve';
  if (cat === 'soguk') return 'Soğuk Kahve';
  return 'Tatlı';
}

// Render menu
function renderMenu() {
  const grid = $('menuGrid');
  const q = ($('searchInput').value || '').toLowerCase();
  let items = menuData;
  if (currentCat !== 'all') items = items.filter(i => i.cat === currentCat);
  if (q) items = items.filter(i => i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q));
  if (!items.length) { grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-search"></i><h4>Sonuç bulunamadı</h4></div>'; return; }
  grid.innerHTML = items.map(i => {
    const isLiked = liked.includes(i.id);
    return '<div class="menu-item" data-id="' + i.id + '">' +
      '<div class="menu-item-img" style="background:linear-gradient(135deg,' + grad(i.cat) + ')">' +
      '<span style="font-size:56px">' + i.emoji + '</span>' +
      (i.badge ? '<span class="menu-item-badge">' + i.badge + '</span>' : '') +
      '<button class="menu-item-like" data-id="' + i.id + '"><i class="' + (isLiked ? 'fas' : 'far') + ' fa-heart"></i></button>' +
      '</div>' +
      '<div class="menu-item-body">' +
      '<div class="menu-item-cat">' + label(i.cat) + '</div>' +
      '<div class="menu-item-name">' + i.name + '</div>' +
      '<div class="menu-item-desc">' + i.desc + '</div>' +
      '<div class="menu-item-footer"><span class="menu-item-price">' + i.price + '₺</span>' +
      '<button class="add-btn" data-id="' + i.id + '"><i class="fas fa-plus"></i></button></div></div></div>';
  }).join('');
}

// Render menu + attach events
function renderFull() {
  renderMenu();
  // Item click
  var items = document.querySelectorAll('.menu-item');
  for (var i = 0; i < items.length; i++) {
    items[i].onclick = function(e) {
      if (e.target.closest('.add-btn') || e.target.closest('.menu-item-like')) return;
      openModal(parseInt(this.getAttribute('data-id')));
    };
  }
  // Add buttons
  var btns = document.querySelectorAll('.add-btn');
  for (var j = 0; j < btns.length; j++) {
    btns[j].onclick = function(e) {
      e.stopPropagation();
      addCart(parseInt(this.getAttribute('data-id')));
    };
  }
  // Like buttons
  var likes = document.querySelectorAll('.menu-item-like');
  for (var k = 0; k < likes.length; k++) {
    likes[k].onclick = function(e) {
      e.stopPropagation();
      toggleLike(parseInt(this.getAttribute('data-id')));
    };
  }
}

// Categories
var catTabs = document.querySelectorAll('.cat-tab');
for (var t = 0; t < catTabs.length; t++) {
  catTabs[t].onclick = function() {
    for (var c = 0; c < catTabs.length; c++) catTabs[c].classList.remove('active');
    this.classList.add('active');
    currentCat = this.getAttribute('data-cat');
    renderFull();
  };
}

// Search
$('searchInput').oninput = renderFull;

// Like
function toggleLike(id) {
  var idx = liked.indexOf(id);
  if (idx > -1) liked.splice(idx, 1); else liked.push(id);
  try { localStorage.setItem('liked', JSON.stringify(liked)); } catch(e) {}
  renderFull();
}

// Item modal
function openModal(id) {
  var item = menuData.find(function(i) { return i.id === id; });
  if (!item) return;
  var existing = cart.find(function(c) { return c.id === id; });
  var qty = existing ? existing.qty : 1;

  var content = $('itemModalContent');
  content.innerHTML =
    '<div class="item-modal-img" style="background:linear-gradient(135deg,' + grad(item.cat) + ')"><span style="font-size:80px">' + item.emoji + '</span></div>' +
    '<div class="item-modal-body">' +
    '<div class="item-modal-cat">' + label(item.cat) + '</div>' +
    '<h2>' + item.name + '</h2>' +
    '<p class="item-modal-desc">' + item.desc + '</p>' +
    '<div class="item-modal-price">' + item.price + '₺</div>' +
    '<div class="item-modal-qty">' +
    '<button class="qty-btn" id="mqMinus"><i class="fas fa-minus"></i></button>' +
    '<span class="qty-num" id="mqNum">' + qty + '</span>' +
    '<button class="qty-btn" id="mqPlus"><i class="fas fa-plus"></i></button></div>' +
    '<button class="item-modal-add" id="mqAdd"><i class="fas fa-shopping-bag"></i> Sepete Ekle — ' + (item.price * qty) + '₺</button></div>';

  $('itemModal').style.display = 'flex';
  $('itemModalOverlay').style.display = 'block';

  $('mqMinus').onclick = function() {
    if (qty > 1) { qty--; $('mqNum').textContent = qty; $('mqAdd').innerHTML = '<i class="fas fa-shopping-bag"></i> Sepete Ekle — ' + (item.price * qty) + '₺'; }
  };
  $('mqPlus').onclick = function() {
    qty++; $('mqNum').textContent = qty; $('mqAdd').innerHTML = '<i class="fas fa-shopping-bag"></i> Sepete Ekle — ' + (item.price * qty) + '₺';
  };
  $('mqAdd').onclick = function() {
    var inCart = cart.find(function(c) { return c.id === id; });
    if (inCart) inCart.qty += qty; else cart.push({ id: item.id, name: item.name, cat: item.cat, price: item.price, emoji: item.emoji, qty: qty });
    closeModal();
    updCart();
    toast(item.name);
  };
}

function closeModal() {
  $('itemModal').style.display = 'none';
  $('itemModalOverlay').style.display = 'none';
}
$('closeItemModal').onclick = closeModal;
$('itemModalOverlay').onclick = closeModal;

// add to cart
function addCart(id) {
  var item = menuData.find(function(i) { return i.id === id; });
  if (!item) return;
  var inCart = cart.find(function(c) { return c.id === id; });
  if (inCart) inCart.qty++; else cart.push({ id: item.id, name: item.name, cat: item.cat, price: item.price, emoji: item.emoji, qty: 1 });
  updCart();
  toast(item.name);
}

function remCart(id) {
  var newCart = [];
  for (var i = 0; i < cart.length; i++) { if (cart[i].id !== id) newCart.push(cart[i]); }
  cart = newCart;
  updCart();
}

function chgQty(id, delta) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].qty += delta;
      if (cart[i].qty <= 0) { remCart(id); return; }
      break;
    }
  }
  updCart();
}

function updCart() {
  var totalItems = 0, subtotal = 0;
  for (var i = 0; i < cart.length; i++) {
    totalItems += cart[i].qty;
    subtotal += cart[i].price * cart[i].qty;
  }
  var tax = subtotal * 0.1;
  var total = subtotal + tax;

  // Badge
  var badge = $('cartBadge');
  if (totalItems > 0) { badge.textContent = totalItems; badge.classList.add('show'); }
  else { badge.classList.remove('show'); }

  // Cart bar
  var bar = $('cartBar');
  if (totalItems > 0) {
    bar.classList.add('show');
    $('cartBarCount').textContent = totalItems;
    $('cartBarItems').textContent = totalItems + ' ürün';
    $('cartBarTotal').textContent = total.toFixed(0) + '₺';
  } else {
    bar.classList.remove('show');
  }

  // Cart panel body
  var container = $('cartItems');
  var footer = $('cartFooter');
  var checkoutBtn = $('checkoutBtn');

  if (cart.length === 0) {
    container.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-bag"></i><h4>Sepetiniz boş</h4><p>Lezzetlerimizi keşfetmeye başlayın!</p></div>';
    footer.style.display = 'none';
    checkoutBtn.disabled = true;
    return;
  }

  var html = '';
  for (var j = 0; j < cart.length; j++) {
    var c = cart[j];
    html += '<div class="cart-item">' +
      '<div class="cart-item-img" style="background:linear-gradient(135deg,' + grad(c.cat) + ')">' + c.emoji + '</div>' +
      '<div class="cart-item-info">' +
      '<div class="cart-item-name">' + c.name + '</div>' +
      '<div class="cart-item-price">' + c.price + '₺</div>' +
      '<div class="cart-item-actions">' +
      '<button class="cart-item-qty-btn" onclick="chgQty(' + c.id + ',-1)"><i class="fas fa-minus"></i></button>' +
      '<span class="cart-item-qty">' + c.qty + '</span>' +
      '<button class="cart-item-qty-btn" onclick="chgQty(' + c.id + ',1)"><i class="fas fa-plus"></i></button>' +
      '<button class="cart-item-remove" onclick="remCart(' + c.id + ')"><i class="fas fa-trash-alt"></i></button></div></div></div>';
  }
  container.innerHTML = html;
  footer.style.display = 'block';
  $('cartSubtotal').textContent = subtotal.toFixed(0) + '₺';
  $('cartTax').textContent = tax.toFixed(0) + '₺';
  $('cartTotal').textContent = total.toFixed(0) + '₺';
  checkoutBtn.disabled = false;
}

function toast(name) {
  var t = document.createElement('div');
  t.style.cssText = 'position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:#2D2418;color:#fff;padding:12px 24px;border-radius:50px;font-size:14px;font-weight:500;z-index:999;box-shadow:0 4px 20px rgba(0,0,0,0.2);pointer-events:none;white-space:nowrap';
  t.textContent = '✓ ' + name + ' sepete eklendi';
  document.body.appendChild(t);
  setTimeout(function() {
    t.style.opacity = '0';
    t.style.transition = 'opacity 0.3s';
    setTimeout(function() { t.remove(); }, 300);
  }, 2000);
}

// Cart panel
$('viewCartBtn').onclick = function() { $('cartPanel').classList.add('open'); $('cartOverlay').classList.add('show'); };
$('cartBtn').onclick = function() { $('cartPanel').classList.add('open'); $('cartOverlay').classList.add('show'); };
$('closeCart').onclick = function() { $('cartPanel').classList.remove('open'); $('cartOverlay').classList.remove('show'); };
$('cartOverlay').onclick = function() { $('cartPanel').classList.remove('open'); $('cartOverlay').classList.remove('show'); };

// Sidebar
$('menuToggle').onclick = function() { $('sidebar').classList.add('open'); $('sidebarOverlay').classList.add('show'); };
$('closeSidebar').onclick = function() { $('sidebar').classList.remove('open'); $('sidebarOverlay').classList.remove('show'); };
$('sidebarOverlay').onclick = function() { $('sidebar').classList.remove('open'); $('sidebarOverlay').classList.remove('show'); };

var sideLinks = document.querySelectorAll('.sidebar-link');
for (var s = 0; s < sideLinks.length; s++) {
  sideLinks[s].onclick = function(e) {
    e.preventDefault();
    for (var x = 0; x < sideLinks.length; x++) sideLinks[x].classList.remove('active');
    this.classList.add('active');
    $('sidebar').classList.remove('open');
    $('sidebarOverlay').classList.remove('show');
    var sec = this.getAttribute('data-section');
    var sections = document.querySelectorAll('.section');
    for (var y = 0; y < sections.length; y++) sections[y].classList.remove('active');
    $(sec + 'Section').classList.add('active');
    if (sec === 'orders') renderOrders();
  };
}

// QR
if (typeof QRCode !== 'undefined') {
  try { new QRCode($('qrcode'), { text: window.location.href, width: 180, height: 180, colorDark: '#2D2418', colorLight: '#FFFFFF', correctLevel: QRCode.CorrectLevel.H }); } catch(e) {}
}
$('shareBtn').onclick = function() {
  if (navigator.share) { navigator.share({ title: 'Cafe Lezzet Menü', text: 'Cafe Lezzet menüsünü keşfedin!', url: window.location.href }).catch(function(){}); }
  else { navigator.clipboard.writeText(window.location.href).then(function() { alert('Menü linki kopyalandı!'); }); }
};

// ===== PAYMENT (ayrı sayfa) =====
$('checkoutBtn').onclick = function() {
  try { localStorage.setItem('paymentCart', JSON.stringify(cart)); } catch(e) {}
  window.location.href = 'payment.html';
};

// Orders
function renderOrders() {
  var list = $('ordersList');
  if (!orders.length) {
    list.innerHTML = '<div class="empty-state"><i class="fas fa-clipboard-list"></i><h3>Henüz siparişiniz yok</h3><p>İlk siparişinizi vermek için menüye göz atın!</p></div>';
    return;
  }
  var h = '';
  for (var i = 0; i < orders.length; i++) {
    var o = orders[i];
    var itemsHtml = '';
    for (var j = 0; j < o.items.length; j++) {
      itemsHtml += o.items[j].name + ' x' + o.items[j].qty;
      if (j < o.items.length - 1) itemsHtml += ', ';
    }
    var statusText = o.status === 'preparing' ? 'Hazırlanıyor' : 'Teslim Edildi';
    h += '<div class="order-card">' +
      '<div class="order-card-header"><span class="order-number">Sipariş #' + String(o.id).padStart(3,'0') + '</span>' +
      '<span class="order-status ' + o.status + '">' + statusText + '</span></div>' +
      '<div class="order-items">' + itemsHtml + '</div>' +
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px">' +
      '<span style="font-size:12px;color:var(--text-light)">' + o.date + '</span>' +
      '<span class="order-total">' + o.total.toFixed(0) + '₺</span></div></div>';
  }
  list.innerHTML = h;
}

// Welcome / Loading
setTimeout(function() {
  $('loadingScreen').classList.add('hide');
  setTimeout(function() { $('loadingScreen').style.display = 'none'; }, 500);
}, 800);

setTimeout(function() {
  $('welcomePage').classList.add('show');
}, 1200);

$('enterBtn').onclick = function() {
  $('welcomePage').classList.add('hide');
  setTimeout(function() {
    $('welcomePage').style.display = 'none';
    $('mainApp').classList.add('show');
  }, 500);
};

// Init
renderFull();
renderOrders();
