/* BOBA BEAR — script2.js
   Edit CONFIG and MENU_DATA below. Everything else can stay as is. */
const CONFIG={name:"Boba Bear",whatsapp:"255700000000",deliveryFee:3000,
  toppingPrice:1000,maxToppings:2,extraBobaPrice:1500};
const BOBA=["Tapioca","Strawberry popping","Mango popping","Lychee popping"];
const TOPPINGS=["Oreo crumbs","Whipped cream","Chocolate sauce","Caramel drizzle","Fruit jelly"];
/* custom:true = shows the boba/toppings popup. p = price in TSh. PLACEHOLDER ITEMS: replace with your real menu. */
const MENU_DATA=[
 {id:"milk",name:"Milk Drinks",custom:true,items:[
  {n:"Classic Milk Tea",d:"Black tea with fresh milk",p:6000},
  {n:"Taro Milk",d:"Creamy taro blend",p:7000},
  {n:"Brown Sugar Milk",d:"Brown sugar syrup and milk",p:7000}]},
 {id:"slushy",name:"Slushy",custom:true,items:[
  {n:"Strawberry Slushy",d:"Icy strawberry blend",p:6500},
  {n:"Mango Slushy",d:"Icy mango blend",p:6500}]},
 {id:"fizzy",name:"Fizzy Drinks",custom:true,items:[
  {n:"Lemon Fizz",d:"Sparkling lemon",p:5500},
  {n:"Passion Fizz",d:"Sparkling passion fruit",p:5500}]},
 {id:"shakes",name:"Milkshakes",custom:false,items:[
  {n:"Vanilla Milkshake",d:"",p:7500},
  {n:"Chocolate Milkshake",d:"",p:7500}]}
];

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const fmt=n=>"TSh "+Number(n).toLocaleString("en-US");
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
let cart=[],orderType=null,current=null;
try{cart=JSON.parse(localStorage.getItem("bb_cart"))||[]}catch(e){cart=[]}
const save=()=>{try{localStorage.setItem("bb_cart",JSON.stringify(cart))}catch(e){}};

/* ---------- Page text ---------- */
$$("[data-bind=name]").forEach(e=>e.textContent=CONFIG.name);
$("#year").textContent=new Date().getFullYear();

/* ---------- Menu ---------- */
function renderMenu(){
  $("#catNav").innerHTML=MENU_DATA.map(c=>`<a href="#${c.id}">${esc(c.name)}</a>`).join("");
  $("#menuRoot").innerHTML=MENU_DATA.map(c=>`<section class="cat" id="${c.id}"><h3>${esc(c.name)}</h3>`+
    (c.note?`<p class="note">${esc(c.note)}</p>`:"")+
    `<ul class="menu-list">`+c.items.map((it,i)=>`<li class="menu-row"><div><b>${esc(it.n)}</b>`+
    (it.d?`<small>${esc(it.d)}</small>`:"")+(c.custom?`<span class="tag">Customisable</span>`:"")+
    `</div><div class="row-end"><span class="price">${fmt(it.p)}</span>`+
    `<button class="btn btn-accent btn-sm" type="button" data-add="${c.id}:${i}">Add to Cart</button></div></li>`).join("")+
    `</ul></section>`).join("");
}
$("#menuRoot").addEventListener("click",e=>{
  const b=e.target.closest("[data-add]");if(!b)return;
  const [cid,i]=b.dataset.add.split(":"),cat=MENU_DATA.find(c=>c.id===cid),it=cat.items[i];
  cat.custom?openModal(it):addToCart(it.n,[],it.p);
});
/* highlight active category while scrolling */
function watchCats(){
  if(!("IntersectionObserver" in window))return;
  const io=new IntersectionObserver(es=>es.forEach(en=>{
    if(en.isIntersecting)$$("#catNav a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+en.target.id));
  }),{rootMargin:"-30% 0px -60% 0px"});
  $$(".cat").forEach(s=>io.observe(s));
}

/* ---------- Customise popup ---------- */
const modal=$("#customModal");
function openModal(it){
  current=it;$("#cmTitle").textContent=it.n;$("#cmHint").textContent="";
  $("#cmBody").innerHTML=
   `<fieldset class="opt"><legend>Boba</legend><p class="help">Choose one (included in the price).</p><div class="grid">`+
   BOBA.map((b,i)=>`<label class="option"><input type="radio" name="boba" value="${esc(b)}"${i===0?" checked":""}>${esc(b)}</label>`).join("")+
   `<label class="option"><input type="radio" name="boba" value="">No boba</label></div></fieldset>`+
   `<fieldset class="opt"><legend>Toppings</legend><p class="help">Up to ${CONFIG.maxToppings}, ${fmt(CONFIG.toppingPrice)} each.</p><div class="grid">`+
   TOPPINGS.map(t=>`<label class="option"><input type="checkbox" name="top" value="${esc(t)}">${esc(t)}<em>+${CONFIG.toppingPrice/1000}k</em></label>`).join("")+
   `</div></fieldset>`+
   `<fieldset class="opt"><legend>Extra boba</legend><div class="grid"><label class="option"><input type="checkbox" name="extra" value="1">Extra boba<em>+${fmt(CONFIG.extraBobaPrice)}</em></label></div></fieldset>`;
  calc();
  modal.showModal?modal.showModal():modal.setAttribute("open","");
}
function calc(){
  const f=$("#cmBody"),boba=f.querySelector("[name=boba]:checked"),tops=[...f.querySelectorAll("[name=top]:checked")].map(x=>x.value),extra=!!f.querySelector("[name=extra]:checked");
  f.querySelectorAll("[name=top]").forEach(x=>x.disabled=!x.checked&&tops.length>=CONFIG.maxToppings);
  const opts=[];if(boba&&boba.value)opts.push(boba.value);opts.push(...tops);if(extra)opts.push("Extra boba");
  const price=current.p+tops.length*CONFIG.toppingPrice+(extra?CONFIG.extraBobaPrice:0);
  $("#cmBreakdown").innerHTML=`<div><span>${esc(current.n)}</span><span>${fmt(current.p)}</span></div>`+
   (tops.length?`<div><span>${tops.length} topping${tops.length>1?"s":""}</span><span>${fmt(tops.length*CONFIG.toppingPrice)}</span></div>`:"")+
   (extra?`<div><span>Extra boba</span><span>${fmt(CONFIG.extraBobaPrice)}</span></div>`:"");
  $("#cmTotal").textContent=fmt(price);
  return{opts,price};
}
$("#cmBody").addEventListener("change",calc);
$("#cmClose").onclick=()=>modal.close();
modal.addEventListener("click",e=>{if(e.target===modal)modal.close()});
$("#cmAdd").onclick=()=>{const r=calc();addToCart(current.n,r.opts,r.price);modal.close()};

/* ---------- Cart ---------- */
function addToCart(name,opts,price){
  const key=name+"|"+opts.join(",");
  const f=cart.find(c=>c.key===key);
  f?f.qty++:cart.push({key,name,opts,price,qty:1});
  save();renderCart();
  const fab=$("#cart-toggle-btn");fab.animate&&fab.animate([{transform:"scale(1)"},{transform:"scale(1.12)"},{transform:"scale(1)"}],{duration:250});
}
const subtotal=()=>cart.reduce((s,c)=>s+c.price*c.qty,0);
const count=()=>cart.reduce((s,c)=>s+c.qty,0);
function renderCart(){
  const n=count(),empty=!n;
  $("#cart-count").textContent=n;
  $("#cart-toggle-btn").setAttribute("aria-label",`Open cart, ${n} item${n===1?"":"s"}`);
  $("#cart-empty").hidden=!empty;$("#cart-footer").hidden=empty;
  $("#cart-items").innerHTML=cart.map((c,i)=>`<div class="cart-item"><div class="ci-top"><span>${esc(c.name)}</span><span>${fmt(c.price*c.qty)}</span></div>`+
    (c.opts.length?`<div class="ci-opts">${c.opts.map(esc).join(", ")}</div>`:"")+
    `<div class="ci-act"><div class="qty"><button type="button" data-q="${i}:-1" aria-label="Fewer">−</button><span>${c.qty}</span><button type="button" data-q="${i}:1" aria-label="More">+</button></div>`+
    `<button type="button" class="link-btn" data-rm="${i}">Remove</button></div></div>`).join("");
  const sub=subtotal(),fee=orderType==="delivery"?CONFIG.deliveryFee:0;
  $("#cart-total-rows").innerHTML=`<div class="trow"><span>Subtotal</span><span>${fmt(sub)}</span></div>`+
    (orderType==="delivery"?`<div class="trow"><span>Delivery fee</span><span>${fmt(fee)}</span></div>`:"")+
    `<div class="trow grand"><span>Total</span><span>${fmt(sub+fee)}</span></div>`;
  validate();
}
$("#cart-items").addEventListener("click",e=>{
  const q=e.target.closest("[data-q]"),r=e.target.closest("[data-rm]");
  if(q){const[i,d]=q.dataset.q.split(":");cart[i].qty+=Number(d);if(cart[i].qty<1)cart.splice(i,1)}
  else if(r)cart.splice(r.dataset.rm,1);else return;
  save();renderCart();
});
$("#clear-cart-btn").onclick=()=>{if(confirm("Clear your cart?")){cart=[];save();renderCart()}};

/* drawer open/close */
const drawer=$("#cart-drawer"),overlay=$("#cart-overlay");
function openCart(){
  drawer.hidden=overlay.hidden=false;document.body.classList.add("no-scroll");
  requestAnimationFrame(()=>{drawer.classList.add("open");overlay.classList.add("open")});
  $("#cart-close-btn").focus();
}
function closeCart(){
  drawer.classList.remove("open");overlay.classList.remove("open");document.body.classList.remove("no-scroll");
  setTimeout(()=>{drawer.hidden=overlay.hidden=true},250);$("#cart-toggle-btn").focus();
}
$("#cart-toggle-btn").onclick=openCart;
$("#cart-close-btn").onclick=closeCart;
overlay.onclick=closeCart;
$("#cart-browse-btn").onclick=closeCart;
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!drawer.hidden)closeCart()});

/* ---------- Order details + WhatsApp ---------- */
$$(".order-type-btn").forEach(b=>b.onclick=()=>{
  orderType=b.dataset.type;
  $$(".order-type-btn").forEach(x=>x.setAttribute("aria-checked",x===b));
  $("#cart-customer-fields").hidden=false;
  $("[data-delivery-only]").hidden=orderType!=="delivery";
  $("#order-type-hint").textContent=orderType==="delivery"?`Delivery fee: ${fmt(CONFIG.deliveryFee)}`:"Pick up at the shop. No delivery fee.";
  renderCart();
});
const val=id=>$("#"+id).value.trim();
function missing(){
  const m=[];
  if(!cart.length)m.push("add a drink");
  if(!orderType)return m.concat("choose Delivery or Pickup");
  if(!val("customer-name"))m.push("your name");
  if(val("customer-contact").replace(/\D/g,"").length<9)m.push("a valid phone number");
  if(orderType==="delivery"){if(!val("customer-area"))m.push("delivery area");if(!val("customer-address"))m.push("delivery address")}
  return m;
}
function validate(){
  const m=missing(),btn=$("#whatsapp-order-btn");
  btn.disabled=m.length>0;
  $("#whatsapp-hint").textContent=m.length?"Still needed: "+m.join(", "):"Ready. This opens WhatsApp with your order.";
}
["customer-name","customer-contact","customer-area","customer-address","customer-note"].forEach(id=>$("#"+id).addEventListener("input",validate));
$("#whatsapp-order-btn").onclick=()=>{
  if(missing().length)return validate();
  const sub=subtotal(),fee=orderType==="delivery"?CONFIG.deliveryFee:0;
  const L=[`*New order: ${CONFIG.name}*`,`Type: ${orderType==="delivery"?"Delivery":"Pickup"}`,`Name: ${val("customer-name")}`,`Phone: ${val("customer-contact")}`];
  if(orderType==="delivery")L.push(`Area: ${val("customer-area")}`,`Address: ${val("customer-address")}`);
  L.push("","*Items*");
  cart.forEach(c=>L.push(`${c.qty} x ${c.name}${c.opts.length?" ("+c.opts.join(", ")+")":""} - ${fmt(c.price*c.qty)}`));
  L.push("",`Subtotal: ${fmt(sub)}`);
  if(fee)L.push(`Delivery fee: ${fmt(fee)}`);
  L.push(`*Total: ${fmt(sub+fee)}*`);
  if(val("customer-note"))L.push("",`Note: ${val("customer-note")}`);
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(L.join("\n"))}`,"_blank");
};

/* ---------- Start ---------- */
renderMenu();watchCats();renderCart();
