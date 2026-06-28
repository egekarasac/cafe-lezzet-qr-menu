const menuData = [
  {id:1,name:'Izgara Köfte',category:'yiyecek',price:225,desc:'El yapımı köfteler, özel baharat karışımı ile ızgarada pişirilir, yanında bulgur pilavı ve mevsim salata ile servis edilir.',emoji:'🥩',badge:'Çok Satan'},
  {id:2,name:'Mantı',category:'yiyecek',price:195,desc:'El açması mantı, kıymalı harç ile doldurulur, sarımsaklı yoğurt ve tereyağlı domates sosu ile servis edilir.',emoji:'🥟',badge:'Usta İşi'},
  {id:3,name:'Lahmacun',category:'yiyecek',price:165,desc:'İncecik açılan hamur üzerine kıymalı harç, maydanoz ve limon ile servis.',emoji:'🫓',badge:null},
  {id:4,name:'Adana Kebap',category:'yiyecek',price:285,desc:'Özel baharatlarla yoğrulan dana kıyması, odun ateşinde pişirilir, lavaş ve közlenmiş sebzeler ile sunulur.',emoji:'🥙',badge:'🔥 Popüler'},
  {id:5,name:'Pide Karışık',category:'yiyecek',price:195,desc:'Kaşar peyniri, sucuk, yumurta ve pastırma ile zenginleştirilmiş taş fırın pide.',emoji:'🫓',badge:null},
  {id:6,name:'Tavuk Şiş',category:'yiyecek',price:245,desc:'Marine edilmiş tavuk göğsü, şişte mangal ateşinde pişirilir, pirinç pilavı ve cacık ile servis.',emoji:'🍗',badge:null},
  {id:7,name:'Türk Kahvesi',category:'sicak-kahve',price:120,desc:'Geleneksel cezvede pişirilen Türk kahvesi, yanında lokum ile servis.',emoji:'☕',badge:null},
  {id:8,name:'Caffè Latte',category:'sicak-kahve',price:175,desc:'Double espresso üzerine buharla köpürtülmüş süt, hafif süt köpüğü ile.',emoji:'🥛',badge:'En Çok Tercih Edilen'},
  {id:9,name:'Cappuccino',category:'sicak-kahve',price:175,desc:'Double espresso, eşit oranda buharlı süt ve yoğun süt köpüğü, üzerine kakao.',emoji:'☕',badge:null},
  {id:10,name:'Flat White',category:'sicak-kahve',price:195,desc:'Double ristretto üzerine kadifemsi mikro köpük süt, daha yoğun kahve tadı.',emoji:'☕',badge:null},
  {id:11,name:'Mocha',category:'sicak-kahve',price:205,desc:'Espresso, sıcak çikolata ve buharlı sütün mükemmel uyumu, üzerine krema.',emoji:'🍫',badge:'Şekerli'},
  {id:12,name:'Sıcak Çikolata',category:'sicak-kahve',price:185,desc:'Belçika çikolatası ile hazırlanan yoğun ve kremsi sıcak çikolata, marshmallow ile.',emoji:'🍫',badge:null},
  {id:13,name:'Soğuk Brew',category:'soguk-kahve',price:195,desc:'12 saat soğuk suda demlenmiş, düşük asitli, pürüzsüz ve doğal tatlı kahve.',emoji:'🧊',badge:'Cold Brew'},
  {id:14,name:'Iced Latte',category:'soguk-kahve',price:185,desc:'Double espresso, soğuk süt ve buz küpleri, hafif ve ferahlatıcı.',emoji:'🥤',badge:null},
  {id:15,name:'Iced Caramel Macchiato',category:'soguk-kahve',price:215,desc:'Vanilya şurubu, soğuk süt, espresso ve karamel sos katmanları.',emoji:'🧋',badge:'İmza'},
  {id:16,name:'Frappuccino',category:'soguk-kahve',price:235,desc:'Kahve, süt, buz ve özel frappe karışımı, üzerine krema ve sos.',emoji:'🥤',badge:'Soğuk'},
  {id:17,name:'Iced Mocha',category:'soguk-kahve',price:225,desc:'Espresso, çikolata sosu, soğuk süt ve buz, üzerine çırpılmış krema.',emoji:'🍫',badge:null},
  {id:18,name:'Affogato',category:'soguk-kahve',price:245,desc:'Sıcak espresso, vanilyalı dondurma üzerine dökülür, soğuk-sıcak kontrastı.',emoji:'🍨',badge:'Özel'},
  {id:19,name:'Künefe',category:'tatli',price:215,desc:'Tel kadayıf arasında eritilmiş taze peynir, şerbet ve antep fıstığı ile servis.',emoji:'🧀',badge:'Tatlı Kralı'},
  {id:20,name:'Sütlaç',category:'tatli',price:155,desc:'Fırında karamelize olmuş geleneksel sütlaç, pirinç ve vanilya aroması ile.',emoji:'🍮',badge:null},
  {id:21,name:'Baklava (4 Kişilik)',category:'tatli',price:275,desc:'80 kat incecik açılan yufka, ceviz içi, şerbet ve antep fıstığı ile taçlandırılmış.',emoji:'🍯',badge:'İmza'},
  {id:22,name:'Dondurmalı İrmik',category:'tatli',price:195,desc:'Sıcak irmik helvası, vanilyalı dondurma ve fındık kırıkları ile.',emoji:'🍨',badge:null},
  {id:23,name:'Tiramisu',category:'tatli',price:205,desc:'Kahveye batırılmış kedidili, mascarpone kreması ve kakao katmanları.',emoji:'🍰',badge:'Popüler'},
  {id:24,name:'Cheesecake',category:'tatli',price:225,desc:'New York usulü kremalı cheesecake, çilek sosu ile servis edilir.',emoji:'🧁',badge:null},
];

const $=id=>document.getElementById(id);
const LS=loadingScreen=>{loadingScreen.classList.add('hide');setTimeout(()=>loadingScreen.style.display='none',500)};

let cart=[],orders=[],orderCounter=0,curCat='all',curItem=null;

// DOM
const els={};
['loadingScreen','welcomePage','mainApp','enterBtn','menuGrid','cartItems','cartFooter','cartBadge',
 'cartBar','cartBarCount','cartBarItems','cartBarTotal','cartPanel','cartOverlay','closeCart',
 'viewCartBtn','menuToggle','closeSidebar','sidebar','sidebarOverlay','searchInput','checkoutBtn',
 'paymentModal','paymentOverlay','closePayment','paymentForm','payBtn','payBtnText','paySpinner',
 'cardNumber','cardExpiry','paymentItems','paymentTotalAmount','cartSubtotal','cartTax','cartTotal',
 'successModal','successCloseBtn','orderNumber','itemModal','itemModalOverlay','closeItemModal','itemModalContent'].forEach(id=>els[id]=$(id));

// Loading → Welcome
setTimeout(()=>LS(els.loadingScreen),800);
setTimeout(()=>els.welcomePage.classList.add('show'),1200);

els.enterBtn.addEventListener('click',()=>{
  els.welcomePage.classList.add('hide');
  setTimeout(()=>{els.welcomePage.style.display='none';els.mainApp.classList.add('show')},500);
});

// Render
function renderMenu(cat='all',q=''){
  let items=menuData;
  if(cat!=='all')items=items.filter(i=>i.category===cat);
  if(q){const sq=q.toLowerCase();items=items.filter(i=>i.name.toLowerCase().includes(sq)||i.desc.toLowerCase().includes(sq))}
  if(!items.length){els.menuGrid.innerHTML=`<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-search"></i><h4>Sonuç bulunamadı</h4><p>Farklı bir arama deneyin</p></div>`;return}
  els.menuGrid.innerHTML=items.map(i=>`
    <div class="menu-item" data-id="${i.id}">
      <div class="menu-item-img" style="background:linear-gradient(135deg,${grad(i.category)})">
        <span class="item-emoji">${i.emoji}</span>
        ${i.badge?`<span class="menu-item-badge">${i.badge}</span>`:''}
        <button class="menu-item-like" data-id="${i.id}"><i class="${like.has(i.id)?'fas':'far'} fa-heart"></i></button>
      </div>
      <div class="menu-item-body">
        <div class="menu-item-cat">${catLabel(i.category)}</div>
        <div class="menu-item-name">${i.name}</div>
        <div class="menu-item-desc">${i.desc}</div>
        <div class="menu-item-footer"><span class="menu-item-price">${i.price}₺</span><button class="add-btn" data-id="${i.id}"><i class="fas fa-plus"></i></button></div>
      </div>
    </div>`).join('');
  els.menuGrid.querySelectorAll('.menu-item').forEach(el=>el.addEventListener('click',e=>{if(e.target.closest('.add-btn')||e.target.closest('.menu-item-like'))return;openModal(+el.dataset.id)}));
  els.menuGrid.querySelectorAll('.add-btn').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();add(+b.dataset.id)}));
  els.menuGrid.querySelectorAll('.menu-item-like').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();toggleLike(+b.dataset.id)}));
}

function grad(c){return{'yiyecek':'#f5e6d3,#e8d5c4','sicak-kahve':'#fef3c7,#fde68a','soguk-kahve':'#dbeafe,#bfdbfe','tatli':'#fce7f3,#fbcfe8'}[c]||'#f5e6d3,#e8d5c4'}
function catLabel(c){return{'yiyecek':'Yiyecek','sicak-kahve':'Sıcak Kahve','soguk-kahve':'Soğuk Kahve','tatli':'Tatlı'}[c]||c}

document.querySelectorAll('.cat-tab').forEach(t=>t.addEventListener('click',()=>{
  document.querySelectorAll('.cat-tab').forEach(x=>x.classList.remove('active'));
  t.classList.add('active');curCat=t.dataset.cat;renderMenu(curCat,els.searchInput.value);
}));
els.searchInput.addEventListener('input',()=>renderMenu(curCat,els.searchInput.value));

// Modal
function openModal(id){
  curItem=id;const item=menuData.find(i=>i.id===id);if(!item)return;
  const inCart=cart.find(c=>c.id===id);let qty=inCart?inCart.qty:1;
  els.itemModalContent.innerHTML=`
    <div class="item-modal-img" style="background:linear-gradient(135deg,${grad(item.category)})"><span style="font-size:80px">${item.emoji}</span></div>
    <div class="item-modal-body">
      <div class="item-modal-cat">${catLabel(item.category)}</div>
      <h2>${item.name}</h2>
      <p class="item-modal-desc">${item.desc}</p>
      <div class="item-modal-price">${item.price}₺</div>
      <div class="item-modal-qty"><button class="qty-btn" id="mqm"><i class="fas fa-minus"></i></button><span class="qty-num" id="mqn">${qty}</span><button class="qty-btn" id="mqp"><i class="fas fa-plus"></i></button></div>
      <button class="item-modal-add" id="mab"><i class="fas fa-shopping-bag"></i> Sepete Ekle — ${item.price*qty}₺</button>
    </div>`;
  els.itemModal.classList.add('open');els.itemModalOverlay.classList.add('open');
  const mn=$('mqm'),mp=$('mqp'),ne=$('mqn'),ab=$('mab');
  mn.addEventListener('click',()=>{if(qty>1){qty--;ne.textContent=qty;ab.innerHTML=`<i class="fas fa-shopping-bag"></i> Sepete Ekle — ${item.price*qty}₺`}});
  mp.addEventListener('click',()=>{qty++;ne.textContent=qty;ab.innerHTML=`<i class="fas fa-shopping-bag"></i> Sepete Ekle — ${item.price*qty}₺`});
  ab.addEventListener('click',()=>{
    const e=cart.find(c=>c.id===id);if(e)e.qty+=qty;else cart.push({...item,qty});
    closeModal();updCart();animBadge();toast(item.name)
  });
}
function closeModal(){els.itemModal.classList.remove('open');els.itemModalOverlay.classList.remove('open');curItem=null}
els.closeItemModal.addEventListener('click',closeModal);els.itemModalOverlay.addEventListener('click',closeModal);

// Cart
function add(id){
  const item=menuData.find(i=>i.id===id);if(!item)return;
  const e=cart.find(c=>c.id===id);if(e)e.qty++;else cart.push({...item,qty:1});
  updCart();animBadge();toast(item.name)
}
function rem(id){cart=cart.filter(c=>c.id!==id);updCart()}
function qty(id,d){const c=cart.find(c=>c.id===id);if(!c)return;c.qty+=d;if(c.qty<=0)cart=cart.filter(x=>x.id!==id);updCart()}

function updCart(){
  const ti=cart.reduce((s,c)=>s+c.qty,0),sb=cart.reduce((s,c)=>s+c.price*c.qty,0),tx=sb*0.1,tt=sb+tx;
  if(ti>0){els.cartBadge.textContent=ti;els.cartBadge.classList.add('show');els.cartBar.classList.add('show')}else{els.cartBadge.classList.remove('show');els.cartBar.classList.remove('show')}
  els.cartBarCount.textContent=ti;els.cartBarItems.textContent=ti===0?'Sepet boş':`${ti} ürün`;els.cartBarTotal.textContent=`${tt.toFixed(0)}₺`;
  if(!cart.length){
    els.cartItems.innerHTML=`<div class="empty-cart"><i class="fas fa-shopping-bag"></i><h4>Sepetiniz boş</h4><p>Lezzetlerimizi keşfetmeye başlayın!</p></div>`;
    els.cartFooter.style.display='none';els.checkoutBtn.disabled=true
  }else{
    els.cartItems.innerHTML=cart.map(c=>`
      <div class="cart-item">
        <div class="cart-item-img" style="background:linear-gradient(135deg,${grad(c.category)})">${c.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${c.name}</div>
          <div class="cart-item-price">${c.price}₺</div>
          <div class="cart-item-actions">
            <button class="cart-item-qty-btn" data-id="${c.id}" data-d="-1"><i class="fas fa-minus"></i></button>
            <span class="cart-item-qty">${c.qty}</span>
            <button class="cart-item-qty-btn" data-id="${c.id}" data-d="1"><i class="fas fa-plus"></i></button>
            <button class="cart-item-remove" data-id="${c.id}"><i class="fas fa-trash-alt"></i></button>
          </div>
        </div>
      </div>`).join('');
    els.cartFooter.style.display='block';els.cartSubtotal.textContent=`${sb.toFixed(0)}₺`;els.cartTax.textContent=`${tx.toFixed(0)}₺`;els.cartTotal.textContent=`${tt.toFixed(0)}₺`;els.checkoutBtn.disabled=false;
    els.cartItems.querySelectorAll('.cart-item-qty-btn').forEach(b=>b.addEventListener('click',()=>qty(+b.dataset.id,+b.dataset.d)));
    els.cartItems.querySelectorAll('.cart-item-remove').forEach(b=>b.addEventListener('click',()=>rem(+b.dataset.id)))
  }
}
function animBadge(){els.cartBadge.style.transform='scale(1.3)';setTimeout(()=>els.cartBadge.style.transform='',300)}
function toast(name){
  const t=document.createElement('div');
  t.style.cssText='position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:#2D2418;color:#fff;padding:12px 24px;border-radius:50px;font-size:14px;font-weight:500;z-index:200;box-shadow:0 4px 20px rgba(0,0,0,0.2);animation:fadeUp 0.3s ease;pointer-events:none;white-space:nowrap;max-width:90vw;overflow:hidden;text-overflow:ellipsis';
  t.textContent=`✓ ${name} sepete eklendi`;document.body.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';t.style.transition='opacity 0.3s';setTimeout(()=>t.remove(),300)},2000)
}

els.viewCartBtn.addEventListener('click',()=>{els.cartPanel.classList.add('open');els.cartOverlay.classList.add('show')});
$('cartBtn').addEventListener('click',()=>{els.cartPanel.classList.add('open');els.cartOverlay.classList.add('show')});
els.closeCart.addEventListener('click',()=>{els.cartPanel.classList.remove('open');els.cartOverlay.classList.remove('show')});
els.cartOverlay.addEventListener('click',()=>{els.cartPanel.classList.remove('open');els.cartOverlay.classList.remove('show')});

// Sidebar
els.menuToggle.addEventListener('click',()=>{els.sidebar.classList.add('open');els.sidebarOverlay.classList.add('show')});
els.closeSidebar.addEventListener('click',()=>{els.sidebar.classList.remove('open');els.sidebarOverlay.classList.remove('show')});
els.sidebarOverlay.addEventListener('click',()=>{els.sidebar.classList.remove('open');els.sidebarOverlay.classList.remove('show')});
document.querySelectorAll('.sidebar-link').forEach(l=>l.addEventListener('click',e=>{
  e.preventDefault();
  document.querySelectorAll('.sidebar-link').forEach(x=>x.classList.remove('active'));l.classList.add('active');
  els.sidebar.classList.remove('open');els.sidebarOverlay.classList.remove('show');
  const sec=l.dataset.section;
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  $(`${sec}Section`).classList.add('active');
  if(sec==='orders')renderOrders();
}));

// QR
if(typeof QRCode!=='undefined'){new QRCode($('qrcode'),{text:window.location.href,width:180,height:180,colorDark:'#2D2418',colorLight:'#FFFFFF',correctLevel:QRCode.CorrectLevel.H})}
$('shareBtn').addEventListener('click',()=>{
  if(navigator.share)navigator.share({title:'Cafe Lezzet Menü',text:'Cafe Lezzet menüsünü keşfedin!',url:window.location.href}).catch(()=>{});
  else navigator.clipboard.writeText(window.location.href).then(()=>alert('Menü linki kopyalandı!'))
});

// Payment
els.checkoutBtn.addEventListener('click',()=>{
  const t=cart.reduce((s,c)=>s+c.price*c.qty,0)*1.1;
  els.paymentTotalAmount.textContent=`${t.toFixed(0)}₺`;
  els.paymentItems.innerHTML=cart.map(c=>`<div class="cart-item" style="padding:6px 0;border:none"><div style="flex:1;font-size:13px">${c.name} x${c.qty}</div><div style="font-size:13px;font-weight:600">${(c.price*c.qty).toFixed(0)}₺</div></div>`).join('');
  els.paymentModal.classList.add('open');els.paymentOverlay.classList.add('open');els.payBtn.disabled=false;els.payBtnText.textContent='Ödemeyi Tamamla';els.paySpinner.classList.add('hidden')
});
els.closePayment.addEventListener('click',()=>{els.paymentModal.classList.remove('open');els.paymentOverlay.classList.remove('open')});
els.paymentOverlay.addEventListener('click',()=>{els.paymentModal.classList.remove('open');els.paymentOverlay.classList.remove('open')});

document.querySelectorAll('.payment-method').forEach(m=>m.addEventListener('click',()=>{document.querySelectorAll('.payment-method').forEach(p=>p.classList.remove('active'));m.classList.add('active');m.querySelector('input').checked=true}));
els.cardNumber.addEventListener('input',e=>{let v=e.target.value.replace(/\D/g,'').substring(0,16);v=v.replace(/(.{4})/g,'$1 ').trim();e.target.value=v});
els.cardExpiry.addEventListener('input',e=>{let v=e.target.value.replace(/\D/g,'').substring(0,4);if(v.length>=2)v=v.substring(0,2)+'/'+v.substring(2);e.target.value=v});

els.paymentForm.addEventListener('submit',e=>{
  e.preventDefault();els.payBtn.disabled=true;els.payBtnText.textContent='Ödeniyor...';els.paySpinner.classList.remove('hidden');
  setTimeout(()=>{
    els.paymentModal.classList.remove('open');els.paymentOverlay.classList.remove('open');
    orderCounter++;const o={id:orderCounter,items:[...cart],total:cart.reduce((s,c)=>s+c.price*c.qty,0)*1.1,status:'preparing',date:new Date().toLocaleString('tr-TR')};
    orders.unshift(o);saveOrders();cart=[];updCart();els.orderNumber.textContent=`#${String(orderCounter).padStart(3,'0')}`;els.successModal.classList.add('open')
  },2000)
});
els.successCloseBtn.addEventListener('click',()=>{els.successModal.classList.remove('open');renderOrders()});

// Orders
function saveOrders(){try{localStorage.setItem('orders',JSON.stringify(orders))}catch(e){}}
function loadOrders(){try{const s=localStorage.getItem('orders');if(s)orders=JSON.parse(s)}catch(e){}orderCounter=orders.length}
function renderOrders(){
  if(!orders.length){$('ordersList').innerHTML=`<div class="empty-state"><i class="fas fa-clipboard-list"></i><h3>Henüz siparişiniz yok</h3><p>İlk siparişinizi vermek için menüye göz atın!</p></div>`;return}
  $('ordersList').innerHTML=orders.map(o=>`
    <div class="order-card">
      <div class="order-card-header"><span class="order-number">Sipariş #${String(o.id).padStart(3,'0')}</span><span class="order-status ${o.status}">${o.status==='preparing'?'Hazırlanıyor':'Teslim Edildi'}</span></div>
      <div class="order-items">${o.items.map(i=>`${i.name} x${i.qty}`).join(', ')}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px"><span style="font-size:12px;color:var(--text-light)">${o.date}</span><span class="order-total">${o.total.toFixed(0)}₺</span></div>
    </div>`).join('')
}

// Likes
const like={add(id){let l=this.get();if(!l.includes(id)){l.push(id);this.set(l)}},remove(id){this.set(this.get().filter(i=>i!==id))},has(id){return this.get().includes(id)},get(){try{return JSON.parse(localStorage.getItem('likes')||'[]')}catch(e){return[]}},set(l){try{localStorage.setItem('likes',JSON.stringify(l))}catch(e){}}};
function toggleLike(id){like.has(id)?like.remove(id):like.add(id);renderMenu(curCat,els.searchInput.value)}

// Start
loadOrders();renderOrders();renderMenu();
