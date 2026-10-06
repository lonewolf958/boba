/* BOBA BAY — script2.js
   Edit CONFIG, the option lists and MENU_DATA below. Everything else can stay as is. */

/* ---------- Settings ---------- */
const CONFIG={name:"Boba Bay",whatsapp:"255700000000",deliveryFee:3000,
  toppingPrice:1000,maxToppings:2,extraBobaPrice:1000,storageKey:"bobabay_cart"};

/* Popping boba flavours and jelly flavours: no extra charge. */
const POPPING_FLAVOURS=["Strawberry","Blueberry","Mango","Orange","Green Apple","Grape","Pink Lemon","Lemon","Kiwi","Watermelon","Raspberry","Passion","Lychee","Pomegranate","Peach","Salty Caramel","Chocolate","Coffee","Taro","Tropical"];
const JELLY_FLAVOURS=["Rainbow jelly","Coffee jelly"];

/* Boba type: choose one, no extra charge.
   options = a second choice shown only when this type is selected (label = its heading). */
const BOBA_TYPES=[
  {id:"popping",name:"Popping Boba",note:"",label:"Popping boba flavour",options:POPPING_FLAVOURS,cols:"cols-3"},
  {id:"chewy",name:"Chewy Boba",note:"(Tapioca)",label:"",options:[],cols:""},
  {id:"jelly",name:"Jelly",note:"",label:"Jelly flavour",options:JELLY_FLAVOURS,cols:"cols-2"}
];
/* Toppings: CONFIG.toppingPrice each, up to CONFIG.maxToppings. */
const TOPPINGS=["Strawberry Chunks","Marshmallows","Chocolate Sprinkles","Whipped Cream","Toasted Nuts","Oreo Crumbs"];
/* Extras: each has its own price. */
const EXTRAS=[{name:"Extra Boba / Tapioca",price:CONFIG.extraBobaPrice}];

/* custom:true = shows the customise popup. p = price in TSh. */
const MENU_DATA=[
 {id:"weekend",name:"Weekend Specials",custom:true,items:[
  {n:"Classic Frappuccino",d:"Iced coffee with a shot of espresso topped with whipped cream. Choice of caramel or chocolate drizzle",p:12000},
  {n:"Caramel Frappuccino",d:"Caramel iced coffee with a shot of espresso topped with whipped cream and caramel drizzles",p:12000},
  {n:"Hazelnut Frappuccino",d:"Hazelnut iced coffee with a shot of espresso topped with whipped cream and chocolate drizzles",p:13000},
  {n:"Pistachio Falooda",d:"Pistachio milkshake with fresh vegan jelly, vermicelli and sabja seeds",p:13000},
  {n:"Rose Falooda",d:"Rose milkshake with fresh vegan jelly, vermicelli and sabja seeds",p:12000},
  {n:"Strawberry Falooda",d:"Strawberry milkshake with fresh vegan jelly, vermicelli and sabja seeds",p:12000},
  {n:"Coffee Falooda",d:"Coffee milkshake with fresh vegan jelly, vermicelli and sabja seeds",p:12000},
  {n:"Iced Matcha",d:"Iced matcha with whipped cream",p:12000},
  {n:"Iced Matcha Latte",d:"Iced matcha with a shot of espresso topped with whipped cream",p:12000},
  {n:"Iced Latte",d:"",p:10000}]},
 {id:"kunafa",name:"Kunafa",custom:false,items:[
  {n:"Kunafa Milkshake",d:"Crispy kunafa, chocolate milkshake and pistachio",p:15000},
  {n:"Kunafa Ice Cream",d:"Crispy kunafa, chocolate milkshake and pistachio",p:15000}]},
 {id:"icecream",name:"Ice Cream",custom:false,note:"Boba ice creams are topped with fruit or tapioca boba. Tell us your choice in the order note.",items:[
  {n:"Boba Ice Cream (Cup)",d:"Topped with fruit or tapioca boba",p:7000},
  {n:"Boba Ice Cream (Cone)",d:"Topped with fruit or tapioca boba",p:12000}]},
 {id:"milk",name:"Milk",custom:true,items:[
  {n:"Caramel",d:"Keep it smooth and creamy with our Caramel Milk Tea",p:11000},
  {n:"Coffee",d:"The perfect pick-me-up to start the day",p:11000},
  {n:"Matcha",d:"When life's feeling evergreen, match it with our Matcha Milk Tea",p:12000},
  {n:"Lotus",d:"A refreshing and indulgent Summer iced drink for all Lotus lovers!",p:12000},
  {n:"Sakura",d:"A drink for sakura lovers. You'll be treated to the scent of sakura every time you take a sip",p:12000},
  {n:"Blueberry",d:"Unique blend of blueberry milkshake!",p:13000},
  {n:"Blue Velvet",d:"A twist on the classic red velvet. A must try!",p:12000},
  {n:"Kiwi Delight",d:"Low calories, high in fiber and very tasty!",p:12000},
  {n:"Red Velvet",d:"Perfect for anyone who loves a good red velvet cake",p:12000},
  {n:"Unicorn Fluff",d:"Perfect blend of strawberry, blueberry and bubblegum milk",p:13000},
  {n:"Tiramisu",d:"",p:13000},
  {n:"Kahlua",d:"Sweet creamy coffee",p:11000},
  {n:"Vanilla",d:"",p:11000},
  {n:"Bubble Gum",d:"Take a trip down memory lane with this cool infusion. A nostalgic, caffeine-free indulgence that everyone can enjoy",p:11000},
  {n:"Acai Smoothie",d:"Acai. Our absolute favourite",p:12000},
  {n:"Creamy Mango",d:"Mango milkshake with whipped cream",p:12000},
  {n:"Pistachio",d:"",p:13000},
  {n:"Taro",d:"Give yourself a Taro-fic treat with our loveable Taro milk tea",p:12000},
  {n:"Blueberry Swirl",d:"Blueberry milkshake with whipped cream and blueberry jam",p:14000},
  {n:"Bamboo Charcoal",d:"Vanilla + bamboo charcoal",p:13000},
  {n:"Rose",d:"Rose milkshake",p:12000},
  {n:"Hedwig",d:"Vanilla frappe",p:11000},
  {n:"Inaara Strawberry",d:"Strawberry milk with strawberry chunks",p:12000},
  {n:"Strawberry",d:"Sweet, creamy, full bodied strawberry drink",p:11000},
  {n:"Strawberries & Cream",d:"Strawberry milkshake, whipped cream and strawberry",p:12000},
  {n:"Strawberry Jasmine Milk",d:"",p:12000}]},
 {id:"chocolate",name:"Chocolate",custom:true,items:[
  {n:"Chocolate",d:"",p:11000},
  {n:"Choco Mint",d:"Chocolate milk paired with mint and chocolate chunks",p:12000},
  {n:"Nutella Shake",d:"",p:12000},
  {n:"Choco Overload",d:"Chocolate milkshake with chocolate chunks and extra chocolate drizzles",p:13000},
  {n:"Hazelnut",d:"",p:12000},
  {n:"Oreo",d:"Oreo milkshake with Oreo crumbs on top",p:12000},
  {n:"Hazelnut Frappe",d:"Hazelnut + coffee",p:12000},
  {n:"Rich and Creamy Coco",d:"Rich dark cocoa with whipped cream",p:13000},
  {n:"Chocolate Truffle",d:"Chocolate ganache, toasted nuts and coconut",p:12000},
  {n:"Nutcracker",d:"Hazelnut and Nutella milk topped with toasted nuts",p:12000},
  {n:"Rudolph",d:"KitKat milk topped with whipped cream and KitKat shavings",p:12000},
  {n:"Issac",d:"Rich chocolate topped with toasted marshmallows, Oreo crumbs and whipped cream",p:13000},
  {n:"Death by Chocolate",d:"Chocolate, Nutella and hazelnut milkshake with chocolate whipped cream, marshmallows and chocolate sprinkles",p:13000},
  {n:"Nimbus 2000",d:"Tiramisu and dark chocolate",p:13000},
  {n:"Warm Hug",d:"Ferrero Rocher and dark chocolate",p:16000},
  {n:"Minty Mistletoe",d:"Minty chocolate topped with whipped cream and chocolate shavings",p:13000},
  {n:"Ferrero",d:"",p:16000}]},
 {id:"milktea",name:"Milk Tea",custom:true,note:"Add a shot of tea (Oolong, Jasmine or Assam): ask us when you order or add it in the order note.",items:[
  {n:"Assam",d:"Take a breath of fresh air from the valleys of the Assam garden with every sip!",p:11000},
  {n:"Jasmine",d:"Dive deep into the aroma of our Jasmine milk tea",p:11000},
  {n:"Oolong",d:"Dark roasted Oolong tea leaves with slight smokiness and earthy tones",p:11000}]},
 {id:"fruit",name:"Fruit Tea",custom:true,items:[
  {n:"Mango Dream",d:"Mango + orange",p:8000},
  {n:"Summer Blaze",d:"Strawberry + blueberry",p:10000},
  {n:"Super Melon",d:"Watermelon + strawberry",p:8000},
  {n:"Passionfruit Sunrise",d:"Passion + mango + strawberry",p:10000},
  {n:"Hawaii",d:"Pineapple + mango + passion juice",p:10000},
  {n:"Caribbean Love",d:"Passion + peach + mango",p:10000},
  {n:"Twisted Lemonade",d:"Refreshing strawberry lemonade",p:8000},
  {n:"Spicy Mango",d:"Mango with a hint of chilli",p:8000},
  {n:"Tiki Passion",d:"Strawberry + watermelon + passion + mango",p:10000},
  {n:"Pina Colada",d:"Pineapple + passion",p:8000},
  {n:"Mango Passion Frappe",d:"Mango, passion and berries infused drink",p:12000},
  {n:"Peachy Sweetie",d:"Peach and strawberry",p:10000},
  {n:"Pomegranate Paradise",d:"Mango + strawberry + pomegranate + peach",p:10000},
  {n:"Dragon",d:"Mango + passion + pomegranate + raspberry",p:10000},
  {n:"Strawberry Lychee",d:"Strawberry + lychee",p:10000},
  {n:"Treasure Mango",d:"Mango, strawberry and peach",p:10000}]},
 {id:"slushy",name:"Slushy",custom:true,items:[
  {n:"Icy Lemon",d:"",p:8000},
  {n:"Apple Burst",d:"",p:8000},
  {n:"Winter Blaze",d:"",p:10000},
  {n:"Red Grape",d:"",p:10000},
  {n:"Bloody Vampire",d:"Cranberry slush",p:10000},
  {n:"Witches Brew",d:"Kiwi slush",p:10000},
  {n:"Poison Apple",d:"Apple Burst + Icy Lemon with a hint of blood (grape)",p:8000},
  {n:"Jack Frost",d:"Winter Blaze + Icy Lemon + grape slush",p:10000},
  {n:"Strawberry Blush",d:"Strawberry + orange",p:10000},
  {n:"Mango Berry",d:"Mango + blackberry",p:10000},
  {n:"Mixed Berry",d:"A perfect blend of all delicious berries",p:10000},
  {n:"Pink Lemonade",d:"Strawberry and lemon slush",p:10000},
  {n:"Blue Lemonade",d:"Blueberry and lemon slush",p:10000},
  {n:"Boo Berry",d:"Strawberry, blueberry and grape slush",p:10000},
  {n:"North Pole",d:"Blueberry and lemon slush",p:10000},
  {n:"Gryffindor",d:"Vampire and raspberry",p:10000},
  {n:"Hufflepuff",d:"Mango and orange",p:10000},
  {n:"Slytherin",d:"Kiwi and apple",p:10000},
  {n:"Ravenclaw",d:"Winter and blue raspberry",p:10000},
  {n:"Love Struck",d:"Strawberry lemonade and pink lemonade topped with a lemon slice",p:10000}]},
 {id:"fizzy",name:"Fizzy",custom:true,items:[
  {n:"Frozen Strawberry Fizz",d:"",p:8000},
  {n:"Passionfruit & Mango Fizz",d:"",p:8000},
  {n:"Mojito Fizz",d:"",p:8000},
  {n:"Red Raspberry Fizz",d:"",p:8000},
  {n:"Electric Fizz",d:"A much-requested drink and a favourite for the kids. A blue fizzy drink that is super delicious",p:8000},
  {n:"Grape Soda",d:"",p:8000},
  {n:"Energizer",d:"",p:8000}]}
];

/* ---------- Helpers & state ---------- */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const fmt=n=>"TSh "+Number(n).toLocaleString("en-US");
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
let cart=[],orderType=null,current=null,closeTimer=null;
try{
  const saved=JSON.parse(localStorage.getItem(CONFIG.storageKey));
  /* keep only well-formed items so an old/bad save can never break the page */
  cart=Array.isArray(saved)?saved.filter(c=>c&&typeof c.name==="string"&&Number.isFinite(c.price)&&Number.isFinite(c.qty)&&c.qty>0)
    .map(c=>({key:String(c.key||c.name),name:c.name,opts:Array.isArray(c.opts)?c.opts.map(String):[],price:c.price,qty:c.qty})):[];
}catch(e){cart=[]}
const save=()=>{try{localStorage.setItem(CONFIG.storageKey,JSON.stringify(cart))}catch(e){}};

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
  const [cid,i]=b.dataset.add.split(":"),cat=MENU_DATA.find(c=>c.id===cid),it=cat&&cat.items[Number(i)];
  if(!it)return;
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
  current=it;
  $("#cmHint").textContent="";
  $("#cmBody").innerHTML=
   /* 1. product */
   `<div class="cm-product"><h3>${esc(it.n)}</h3><p>Base price: ${fmt(it.p)}</p></div>`+
   /* 2. boba type */
   `<fieldset class="opt"><legend>Boba type</legend>`+
   `<p class="help">Optional — choose one (no extra charge)</p>`+
   `<div class="opt-grid cols-types">`+
   BOBA_TYPES.map(b=>`<label class="option boba-card"><input type="radio" name="boba" value="${b.id}">`+
     `<span>${esc(b.name)}</span>${b.note?`<small>${esc(b.note)}</small>`:""}</label>`).join("")+
   `</div><button type="button" class="clear-choice" id="cmClearBoba">Clear boba choice</button></fieldset>`+
   /* 3. flavour lists (each only shown for its own boba type) */
   BOBA_TYPES.filter(b=>b.options.length).map(b=>
     `<fieldset class="opt" id="cmOpt-${b.id}" hidden><legend>${esc(b.label)}</legend>`+
     `<p class="help">Choose one (no extra charge)</p>`+
     `<div class="opt-grid ${b.cols||"cols-3"}">`+
     b.options.map(f=>`<label class="option"><input type="radio" name="sub-${b.id}" value="${esc(f)}">${esc(f)}</label>`).join("")+
     `</div></fieldset>`).join("")+
   /* 4. toppings */
   `<fieldset class="opt"><legend>Toppings</legend>`+
   `<p class="help">Choose up to ${CONFIG.maxToppings} toppings · ${fmt(CONFIG.toppingPrice)} each <span id="cmTopCount"></span></p>`+
   `<div class="opt-grid cols-2">`+
   TOPPINGS.map(t=>`<label class="option topping"><input type="checkbox" name="top" value="${esc(t)}"><span>${esc(t)}</span><em>+${fmt(CONFIG.toppingPrice)}</em></label>`).join("")+
   `</div></fieldset>`+
   /* 5. extras */
   (EXTRAS.length?`<fieldset class="opt"><legend>Extras</legend><p class="help">Optional</p><div class="opt-grid cols-2">`+
   EXTRAS.map((x,i)=>`<label class="option topping"><input type="checkbox" name="extra" value="${i}"><span>${esc(x.name)}</span><em>+${fmt(x.price)}</em></label>`).join("")+
   `</div></fieldset>`:"");
  $("#cmBody").scrollTop=0;
  calc();
  document.body.classList.add("no-scroll");
  modal.showModal?modal.showModal():modal.setAttribute("open","");
}

function closeModal(){
  modal.close?modal.close():modal.removeAttribute("open");
  document.body.classList.remove("no-scroll");
}

/* Reads the form, updates the UI and summary, returns what to add to the cart. */
function calc(){
  const f=$("#cmBody");
  const bobaEl=f.querySelector("[name=boba]:checked");
  const boba=bobaEl?BOBA_TYPES.find(b=>b.id===bobaEl.value):null;

  /* each flavour list only exists for its own boba type */
  BOBA_TYPES.filter(b=>b.options.length).forEach(b=>{
    const fs=f.querySelector("#cmOpt-"+b.id),show=!!(boba&&boba.id===b.id);
    fs.hidden=!show;
    if(!show)fs.querySelectorAll("input").forEach(x=>x.checked=false);
  });
  const hasSub=!!(boba&&boba.options.length);
  const subEl=hasSub?f.querySelector(`[name="sub-${boba.id}"]:checked`):null,sub=subEl?subEl.value:"";

  /* toppings: lock the rest once the maximum is reached */
  const tops=[...f.querySelectorAll("[name=top]:checked")].map(x=>x.value);
  f.querySelectorAll("[name=top]").forEach(x=>x.disabled=!x.checked&&tops.length>=CONFIG.maxToppings);
  $("#cmTopCount").textContent=`(${tops.length}/${CONFIG.maxToppings} selected)`;

  const extras=[...f.querySelectorAll("[name=extra]:checked")].map(x=>EXTRAS[Number(x.value)]).filter(Boolean);

  /* selected / disabled looks */
  f.querySelectorAll(".option").forEach(l=>{
    const i=l.querySelector("input");
    l.classList.toggle("selected",i.checked);
    l.classList.toggle("disabled",i.disabled);
  });

  /* price: boba and flavour are free */
  const topTotal=tops.length*CONFIG.toppingPrice,extraTotal=extras.reduce((s,x)=>s+x.price,0);
  const price=current.p+topTotal+extraTotal;

  /* cart / WhatsApp option lines */
  const bobaName=boba?boba.name+(boba.note?" "+boba.note:""):"";
  const opts=[];
  if(boba)opts.push(bobaName+(sub?" – "+sub:""));
  if(tops.length)opts.push("Toppings: "+tops.join(", "));
  extras.forEach(x=>opts.push(x.name));

  /* bottom summary */
  let h=`<div class="sum-main"><span>${esc(current.n)}</span><span>${fmt(current.p)}</span></div>`;
  if(boba)h+=`<div><span>${esc(bobaName)}</span><span>No charge</span></div>`;
  if(sub)h+=`<div><span>${esc(sub)}</span><span>No charge</span></div>`;
  if(tops.length)h+=`<div><span>Toppings: ${tops.map(esc).join(", ")}</span><span>${fmt(topTotal)}</span></div>`;
  extras.forEach(x=>{h+=`<div><span>${esc(x.name)}</span><span>${fmt(x.price)}</span></div>`});
  $("#cmBreakdown").innerHTML=h;
  $("#cmTotal").textContent=fmt(price);

  return{opts,price,boba,needSub:hasSub&&!sub};
}

$("#cmBody").addEventListener("change",()=>{$("#cmHint").textContent="";calc()});
$("#cmBody").addEventListener("click",e=>{
  if(e.target.closest("#cmClearBoba")){
    $$("#cmBody [name=boba]").forEach(x=>x.checked=false);
    calc();
  }
});
$("#cmClose").onclick=closeModal;
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
modal.addEventListener("close",()=>document.body.classList.remove("no-scroll"));
$("#cmAdd").onclick=()=>{
  const r=calc();
  if(r.needSub){
    $("#cmHint").textContent="Please choose a "+r.boba.label.toLowerCase()+".";
    const box=$("#cmOpt-"+r.boba.id);if(box)box.scrollIntoView({block:"nearest",behavior:"smooth"});
    return;
  }
  addToCart(current.n,r.opts,r.price);
  closeModal();
};

/* ---------- Cart ---------- */
function addToCart(name,opts,price){
  const key=name+"|"+opts.join("|");
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
    (c.opts.length?`<div class="ci-opts">${c.opts.map(o=>`<div>${esc(o)}</div>`).join("")}</div>`:"")+
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
  if(q){
    const[i,d]=q.dataset.q.split(":").map(Number);
    if(!cart[i])return;
    cart[i].qty+=d;if(cart[i].qty<1)cart.splice(i,1);
  }else if(r){cart.splice(Number(r.dataset.rm),1)}
  else return;
  save();renderCart();
});
$("#clear-cart-btn").onclick=()=>{if(confirm("Clear your cart?")){cart=[];save();renderCart()}};

/* drawer open/close */
const drawer=$("#cart-drawer"),overlay=$("#cart-overlay");
function openCart(){
  clearTimeout(closeTimer);
  drawer.hidden=overlay.hidden=false;document.body.classList.add("no-scroll");
  requestAnimationFrame(()=>{drawer.classList.add("open");overlay.classList.add("open")});
  $("#cart-close-btn").focus();
}
function closeCart(){
  drawer.classList.remove("open");overlay.classList.remove("open");document.body.classList.remove("no-scroll");
  clearTimeout(closeTimer);
  closeTimer=setTimeout(()=>{drawer.hidden=overlay.hidden=true},250);
  $("#cart-toggle-btn").focus();
}
$("#cart-toggle-btn").onclick=openCart;
$("#cart-close-btn").onclick=closeCart;
overlay.onclick=closeCart;
$("#cart-browse-btn").onclick=closeCart;
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!drawer.hidden)closeCart()});

/* ---------- Order details + WhatsApp ---------- */
$$(".order-type-btn").forEach(b=>b.onclick=()=>{
  orderType=b.dataset.type;
  $$(".order-type-btn").forEach(x=>x.setAttribute("aria-checked",String(x===b)));
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
  cart.forEach(c=>{
    L.push(`${c.qty} x ${c.name} - ${fmt(c.price*c.qty)}`);
    c.opts.forEach(o=>L.push(`   • ${o}`));
  });
  L.push("",`Subtotal: ${fmt(sub)}`);
  if(fee)L.push(`Delivery fee: ${fmt(fee)}`);
  L.push(`*Total: ${fmt(sub+fee)}*`);
  if(val("customer-note"))L.push("",`Note: ${val("customer-note")}`);
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(L.join("\n"))}`,"_blank");
};

/* ---------- Start ---------- */
renderMenu();watchCats();renderCart();
