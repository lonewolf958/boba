/* ORDER ONLINE PAGE — menu data, prices, toppings, WhatsApp number and customisation rules
   are at the top of this file. (script1.js contains the same menu for the Digital Menu page: edit both.) */
/* ==========================================================
   CONFIGURATION — edit this section to change the website.
   ========================================================== */
const CONFIG = {
  restaurant: {
    name: "Boba Bear",                       // PLACEHOLDER name (menu shows a bear logo only) – replace
    tagline: "Pop it. Sip it. Love it.",     // PLACEHOLDER tagline
    whatsapp: "255000000000",                // Digits only, with country code, no "+" (e.g. 255712345678)
    address: "[Add restaurant address]",
    phone: "[Add telephone number]",
    hours: "[Add opening hours]",
    socials: [ /* { label: "Instagram", url: "https://instagram.com/yourpage" } */ ],
    deliveryNote: "Home Delivery Available",  // shown on the home page (edit or set "")
    deliveryFee: 0                           // TSh, added to Delivery orders only
  },
  currency: "TSh",
  maxQty: 99,

  // Boba choices. Selecting a boba TYPE never costs anything.
  boba: {
    popping: { label: "Popping Boba", flavours: ["Strawberry","Blueberry","Mango","Orange","Green Apple","Grape","Pink Lemon","Lemon","Kiwi","Watermelon","Raspberry","Passion","Lychee","Pomegranate","Peach","Salty Caramel","Chocolate","Coffee","Taro","Tropical"] },
    chewy:   { label: "Chewy Boba (Tapioca)", flavours: ["Tapioca"] },
    requireFlavourForPopping: true          // set false to let customers pick Popping without a flavour
  },
  toppings: {                                // PDF: "Add Toppings 1,000/-" (treated as price per topping – confirm)
    price: 1000,
    max: 2,
    list: ["Strawberry Chunks","Marshmallows","Chocolate Sprinkles","Whipped Cream","Toasted Nuts","Oreo Crumbs"]
  },
  extraBoba: { label: "Extra Boba / Tapioca", price: 1000 },   // optional paid extra, separate from boba type

  /* Customisation rules.
     A category's `custom` is either false (off) or a rules object. A product can override with its own
     `custom` (false = off, or an object). Rules object keys:
       boba: true|false, toppings: true|false, extraBoba: true|false,
       poppingFlavours: [..]  (optional: limit/hide flavours for that product)  */
  customDefault: { boba: true, toppings: true, extraBoba: true }
};

const ON = CONFIG.customDefault;
// p(name, price, description, extraFields). price: null = unclear in the PDF (cannot be ordered until set).
const p = (name, price, desc = "", extra = {}) => ({ name, price, desc, ...extra });

/* Menu data transcribed from the PDF photos. Items marked `check` have a cropped/unclear price or text. */
const MENU = [
  { id: "weekend-milk", name: "Weekend Specials · Milk", icon: "☕", tint: "#f3e6d0", custom: ON, items: [
    p("Classic Frappuccino",12000,"Iced coffee with a shot of espresso topped with whipped cream. Choice of caramel or chocolate drizzle"),
    p("Caramel Frappuccino",12000,"Caramel iced coffee with a shot of espresso topped with whipped cream and caramel drizzles"),
    p("Hazelnut Frappuccino",13000,"Hazelnut iced coffee with a shot of espresso topped with whipped cream and chocolate drizzles"),
    p("Pistachio Falooda",13000,"Pistachio milkshake with fresh vegan jelly, vermicelli and sabja seeds"),
    p("Rose Falooda",12000,"Rose milkshake with fresh vegan jelly, vermicelli and sabja seeds"),
    p("Strawberry Falooda",12000,"Strawberry milkshake with fresh vegan jelly, vermicelli and sabja seeds"),
    p("Coffee Falooda",12000,"Coffee milkshake with fresh vegan jelly, vermicelli and sabja seeds"),
    p("Iced matcha",12000,"Iced matcha with whipped cream."),
    p("Iced matcha latte",12000,"Iced matcha with a shot of espresso topped with whipped cream."),
    p("Iced latte",10000)
  ]},
  { id: "kunafa", name: "Kunafa", icon: "🥮", tint: "#f6e3b9", custom: false, items: [
    p("Kunafa milkshake",15000,"Crispy kunafa, chocolate milkshake and pistachio milkshake"),
    p("Kunafa ice-cream",15000,"Crispy kunafa, chocolate milkshake and pistachio milkshake")
  ]},
  { id: "ice-cream", name: "Ice Cream", icon: "🍦", tint: "#fbe0ea", custom: false,
    note: "Prices for Boba Ice creams (Cup / Cone) are handwritten and unclear in the PDF, and Inaara Ice cream has no price shown. Please confirm.", items: [
    p("Boba Ice creams – Cup",null,"Topped with Fruit or Tapioca Boba",{check:true}),
    p("Boba Ice creams – Cone",null,"Topped with Fruit or Tapioca Boba",{check:true}),
    p("Inaara Ice cream",null,"Half milkshake half ice-cream! Your choice of milkshake and ice-cream topped with tapioca or popping boba. Ask the Server for the flavor of the day",{check:true})
  ]},
  { id: "milk", name: "Milk", icon: "🥛", tint: "#efe6fb", custom: ON,
    note: "Prices/descriptions for Strawberries & Cream and Strawberry Jasmine Milk are cut off in the PDF photo and need confirming.", items: [
    p("Caramel",11000,"Keep it smooth and creamy with our Caramel Milk Tea."),
    p("Coffee",11000,"The perfect pick-me-up to start the day"),
    p("Matcha",12000,"When life's feeling evergreen, match it with our Matcha Milk Tea"),
    p("Lotus",12000,"A refreshing and indulgent Summer iced drink for all Lotus lovers!"),
    p("Sakura",12000,"It's definitely a drink for sakura lovers, as you'll be treated to the scent of sakura every time you take a sip"),
    p("Blueberry",13000,"Unique blend of blueberry milkshake!"),
    p("Blue Velvet",12000,"A twist on the classic red velvet. A must try!"),
    p("Kiwi delight",12000,"Low calories, high in fiber and very tasty!"),
    p("Red Velvet",12000,"Perfect for anyone who loves a good red velvet cake"),
    p("Unicorn fluff",13000,"Perfect blend of Strawberry, Blueberry and bubblegum Milk"),
    p("Tiramisu",13000),
    p("Kahlua",11000,"Sweet creamy coffee"),
    p("Vanilla",11000),
    p("Bubble Gum",11000,"Take a trip down memory lane with this cool infusion. It's a nostalgic, caffeine-free indulgence that everyone can enjoy"),
    p("Acai Smoothie",12000,"Acai. Our absolute favorite"),
    p("Creamy Mango",12000,"Mango milkshake with whipped cream"),
    p("Pistachio",13000),
    p("Taro",12000,"Give yourself a Taro-fic treat with our loveable Taro milk tea"),
    p("Blueberry Swirl",14000,"Blueberry milkshake with whipped cream and blueberry jam"),
    p("Bamboo Charcoal",13000,"Vanilla + bamboo charcoal"),
    p("Rose",12000,"Rose milkshake"),
    p("Hedwig",11000,"Vanilla Frappe"),
    p("Inaara Strawberry",12000,"Strawberry milk with strawberry chunks",{check:true}),
    p("Strawberry",11000,"Sweet, creamy, full bodied strawberry drink",{check:true}),
    p("Strawberries & Cream",12000,"Strawberry milkshake, whipped cream and strawb… (text cut off in PDF)",{check:true}),
    p("Strawberry Jasmine Milk",null,"",{check:true})
  ]},
  { id: "slushy", name: "Slushy", icon: "🧊", tint: "#d8ecf8", custom: ON, items: [
    p("Icey Lemon",8000),p("Apple Burst",8000),p("Winter Blaze",10000),p("Red Grape",10000),
    p("Bloody Vampire",10000,"Cranberry Slush"),p("Witches Brew",10000,"Kiwi Slush"),
    p("Poison Apple",8000,"Apple Burst + Icey Lemon with a hint of Blood (Grape)"),
    p("Jack Frost",10000,"Winter Blaze + Icey lemon + Grape Slush"),
    p("Strawberry blush",10000,"Strawberry + Orange"),p("Mango Berry",10000,"Mango + blackberry"),
    p("Mixed berry",10000,"Mixed berry is a perfectly blend of all delicious berries"),
    p("Pink lemonade",10000,"strawberry and lemon slush"),p("Blue lemonade",10000,"blueberry and lemon slush"),
    p("Boo Berry",10000,"Strawberry, blueberry and grape slush"),p("North Pole",10000,"Blueberry and lemon slush"),
    p("Gryffindor",10000,"Vampire and raspberry"),p("Hufflepuff",10000,"Mango and orange"),
    p("Slytherin",10000,"Kiwi and apple"),p("Ravenclaw",10000,"Winter and blue raspberry"),
    p("Love struck",10000,"Strawberry lemonade and Pink lemonade topped with a lemon slice")
  ]},
  { id: "fizzy", name: "Fizzy", icon: "🫧", tint: "#d9f2ea", custom: ON,
    note: "Prices for Grape Soda and Energizer, and the right edge of the other Fizzy prices, are cropped in the PDF photo; 8,000 is shown for the five visible. Please confirm.", items: [
    p("Frozen Strawberry Fizz",8000),p("Passionfruit & Mango Fizz",8000),p("Mojito Fizz",8000),
    p("Red Raspberry Fizz",8000,"",{check:true}),
    p("Electric Fizz",8000,"A much-requested drink and a favorite for the kids. A blue fizzy drink that is super delicious",{check:true}),
    p("Grape Soda",null,"",{check:true}),p("Energizer",null,"",{check:true})
  ]},
  { id: "fruit-tea", name: "Fruit Tea", icon: "🍹", tint: "#fde4c8", custom: false, items: [
    p("Mango dream",8000,"Mango + Orange"),p("Summer blaze",10000,"Strawberry + Blueberry"),
    p("Super melon",8000,"Watermelon + strawberry"),p("Passionfruit sunrise",10000,"Passion + Mango + Strawberry"),
    p("Hawaii",10000,"Pineapple + mango + Passion juice"),p("Caribbean love",10000,"Passion + peach + mango"),
    p("Twisted lemonade",8000,"Refreshing Strawberry lemonade"),p("Spicy mango",8000,"Mango with a hint of Chili"),
    p("Tiki passion",10000,"Strawberry + Watermelon + Passion + Mango"),p("Pina colada",8000,"Pineapple + Passion"),
    p("Mango passion frappe",12000,"Mango, Passion and Berries infused drink"),p("Peachy sweetie",10000,"Peach and strawberry"),
    p("Pomegranate Paradise",10000,"Mango + Strawberry + Pomegranate + Peach"),
    p("Dragon",10000,"Mango + Passion + Pomegranate + Raspberry"),
    p("Strawberry Lychee",10000,"Strawberry + Lychee"),p("Treasure mango",10000,"Mango, strawberry and peach")
  ]},
  { id: "chocolate", name: "Chocolate", icon: "🍫", tint: "#ead7c8", custom: false,
    note: "Ferrero price is cropped in the PDF (16,0…); 16,000 assumed – please confirm.", items: [
    p("Chocolate",11000),p("Choco mint",12000,"Chocolate Milk paired with mint and chocolate chunks"),
    p("Nutella shake",12000),p("Choco overload",13000,"Chocolate Milkshake with Chocolate chunks and extra Chocolate drizzles"),
    p("Hazelnut",12000),p("Oreo",12000,"Oreo milkshake with Oreo crumbs on top"),p("Hazelnut Frappe",12000,"Hazelnut + coffee"),
    p("Rich and creamy Coco",13000,"Rich dark cocoa with whipped cream"),
    p("Chocolate Truffle",12000,"Chocolate ganache, toasted nuts and coconut"),
    p("Nutcracker",12000,"Hazelnut and Nutella milk topped with toasted nuts"),
    p("Rudolph",12000,"KitKat milk topped with whipped cream and KitKat shavings"),
    p("Issac",13000,"Rich chocolate topped with toasted marshmallows, Oreo crumbs and whipped cream"),
    p("Death by Chocolate",13000,"Chocolate, Nutella and hazelnut milkshake with chocolate whipped cream, marshmallows and chocolate sprinkles"),
    p("Nimbus 2000",13000,"Tiramisu and dark chocolate"),p("Warm Hug",16000,"Ferrero Rocher and dark chocolate"),
    p("Minty mistletoe",13000,"Minty chocolate topped with whipped cream and chocolate shavings"),
    p("Ferrero",16000,"",{check:true})
  ]},
  { id: "milk-tea", name: "Milk Tea", icon: "🍵", tint: "#e3ecd2", custom: false,
    note: "Milk Tea prices are cut off in the PDF photo, so these cannot be ordered until prices are added. 'Add a shot of Tea' (Oolong, Jasmine, Assam) also has no visible price.", items: [
    p("Assam",null,"Take a breath of fresh air from the valleys of As… garden with every sip! (text cut off in PDF)",{check:true}),
    p("Jasmine",null,"Dive deep into the aroma of our Jasmine Milk … (text cut off in PDF)",{check:true}),
    p("Oolong",null,"Dark roasted Oolong Tea leaves from Wuyi M… flavor with slight smokiness and earthy tone… (text cut off in PDF)",{check:true})
  ]}
];


/* ==========================================================
   APPLICATION
   ========================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fmt = n => `${CONFIG.currency} ${Number(n).toLocaleString("en-US")}`;
const slug = s => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/* ---- Catalog: assign unique IDs, validate ---- */
const CATALOG = new Map();
MENU.forEach(cat => cat.items.forEach(item => {
  item.id = `${cat.id}-${slug(item.name)}`;
  item.cat = cat;
  if (CATALOG.has(item.id)) console.error("Duplicate product ID:", item.id);
  CATALOG.set(item.id, item);
}));

/* Customisation rules for a product (or null when not customisable). */
function getRules(prod) {
  const r = prod.custom !== undefined ? prod.custom : prod.cat.custom;
  if (!r) return null;
  const rules = { boba: !!r.boba, toppings: !!r.toppings, extraBoba: !!r.extraBoba, poppingFlavours: r.poppingFlavours || CONFIG.boba.popping.flavours };
  return (rules.boba || rules.toppings || rules.extraBoba) ? rules : null;
}
const emptySel = () => ({ boba: null, flavour: null, toppings: [], extra: false });

/* Enforces every rule in code (limits, allowed values, no duplicates). */
function sanitize(prod, sel) {
  const rules = getRules(prod), out = emptySel();
  if (!rules || !sel) return out;
  if (rules.boba && (sel.boba === "popping" || sel.boba === "chewy")) {
    out.boba = sel.boba;
    if (sel.boba === "chewy") out.flavour = CONFIG.boba.chewy.flavours[0];
    else if (rules.poppingFlavours.includes(sel.flavour)) out.flavour = sel.flavour;
  }
  if (rules.toppings && Array.isArray(sel.toppings)) {
    out.toppings = [...new Set(sel.toppings)].filter(t => CONFIG.toppings.list.includes(t)).slice(0, CONFIG.toppings.max);
  }
  out.extra = !!(rules.extraBoba && sel.extra);
  return out;
}
function calcPrice(prod, sel) {
  const s = sanitize(prod, sel);
  const toppings = s.toppings.length * CONFIG.toppings.price;
  const extra = s.extra ? CONFIG.extraBoba.price : 0;
  return { base: prod.price, toppings, extra, unit: prod.price + toppings + extra, sel: s };
}
const lineKey = (pid, s) => [pid, s.boba || "", s.flavour || "", [...s.toppings].sort().join("+"), s.extra ? "x" : ""].join("|");
const needsFlavour = (prod, sel) => CONFIG.boba.requireFlavourForPopping && sel.boba === "popping" && !sel.flavour;


/* ---- Shared page helpers (home, menu and order pages) ---- */
function bindBrand() {
  const r = CONFIG.restaurant;
  $$("[data-bind]").forEach(el => { el.textContent = r[el.dataset.bind] ?? ""; });
  const soc = $("#socials");
  if (soc) soc.innerHTML = r.socials.length ? r.socials.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join(" · ") : "[Add social media links]";
  const y = $("#year"); if (y) y.textContent = new Date().getFullYear();
  const t = document.documentElement.dataset.title; document.title = t ? `${r.name} — ${t}` : r.name;
}
function renderCategories() {
  const cats = [...MENU.map(c => [c.id, c.name]), ["boba-addons", "Boba · Chewy · Jelly · Toppings"]];
  $("#catNav").innerHTML = cats.map(([id, n]) => `<a href="#cat-${id}" data-cat="${id}">${esc(n)}</a>`).join("");
}
function addonsSection() {
  const T = CONFIG.toppings, B = CONFIG.boba, chips = a => `<div class="chips">${a.map(f => `<span class="chip">${esc(f)}</span>`).join("")}</div>`;
  return `<section class="cat" id="cat-boba-addons"><h3>Boba, Chewy, Jelly &amp; Toppings</h3>
    <div class="info-card"><h4>Boba · Popping flavours</h4>${chips(B.popping.flavours)}</div>
    <div class="info-card"><h4>Chewy</h4>${chips(B.chewy.flavours)}</div>
    <div class="info-card"><h4>Jelly</h4>${chips(["Rainbow jelly", "Coffee jelly"])}<p class="desc">Jelly prices are not listed in the PDF.</p></div>
    <div class="info-card"><h4>Toppings — ${fmt(T.price)} each</h4>${chips(T.list)}
      <p class="desc">Extra Boba / Tapioca: ${fmt(CONFIG.extraBoba.price)}. Eligible drinks (Milk, Slushy, Fizzy) can be customised when ordering.</p></div></section>`;
}
function watchCategories() {
  const links = $$("#catNav a");
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { links.forEach(a => a.classList.toggle("active", a.dataset.cat === en.target.id.replace("cat-", "")));
      $(".cat-nav a.active")?.scrollIntoView({ block: "nearest", inline: "center" }); }
  }), { rootMargin: "-130px 0px -70% 0px" });
  $$(".cat").forEach(s => io.observe(s));
}

/* ---- Rendering: header/footer ---- */

/* ---- Rendering: products ---- */
function productCard(prod) {
  const hasPrice = typeof prod.price === "number", rules = getRules(prod);
  return `<li class="menu-row"><div><b>${esc(prod.name)}</b>${prod.desc ? `<small>${esc(prod.desc)}</small>` : ""}${rules ? `<small class="tag">Boba &amp; toppings available</small>` : ""}</div>
    <div class="row-end">${hasPrice ? `<span class="price">${fmt(prod.price)}</span>` : `<span class="price tbc">Price TBC</span>`}
    <button class="btn btn-accent btn-sm" data-add="${esc(prod.id)}" ${hasPrice ? "" : "disabled"} aria-label="Add ${esc(prod.name)} to cart">Add to Cart</button></div></li>`;
}

function renderMenu() {
  $("#menuRoot").innerHTML = MENU.map(cat => `<section class="cat" id="cat-${cat.id}"><h3>${esc(cat.name)}</h3>
    ${cat.note ? `<p class="note">⚠️ ${esc(cat.note)}</p>` : ""}
    <ul class="menu-list">${cat.items.map(productCard).join("")}</ul></section>`).join("") + addonsSection();
}

/* ---- Customisation modal ---- */
const M = { prod: null, sel: emptySel(), editKey: null, editQty: 1 };
const modal = () => $("#customModal");

function openModal(prod, sel = null, editKey = null, qty = 1) {
  M.prod = prod; M.sel = sanitize(prod, sel); M.editKey = editKey; M.editQty = qty;
  const rules = getRules(prod), T = CONFIG.toppings;
  $("#cmTitle").textContent = editKey ? "Edit Your Drink" : "Customise Your Drink";
  $("#cmAdd").textContent = editKey ? "Update Cart" : "Add to Cart";
  let html = `<div class="drink-head"><div><h3>${esc(prod.name)}</h3><div class="price">Base price: ${fmt(prod.price)}</div></div></div>`;
  if (rules.boba) {
    html += `<fieldset class="group"><legend>Boba type</legend><p class="help">Optional — choose one (no extra charge).</p>
      <div class="opts cols">${["popping","chewy"].map(k => `<label class="opt"><input type="radio" name="bobaType" value="${k}"><span>${esc(CONFIG.boba[k].label)}</span></label>`).join("")}</div>
      <button type="button" class="clear" id="bobaClear">Clear boba choice</button>
      <div id="flavourWrap" hidden><p class="help" style="margin-top:10px">Popping boba flavour</p>
        <div class="opts cols">${rules.poppingFlavours.map(f => `<label class="opt"><input type="radio" name="flavour" value="${esc(f)}"><span>${esc(f)}</span></label>`).join("")}</div></div></fieldset>`;
  }
  if (rules.toppings) {
    html += `<fieldset class="group"><legend>Toppings</legend><p class="help">Choose up to ${T.max} toppings · ${fmt(T.price)} each</p>
      <div class="opts cols">${T.list.map(t => `<label class="opt"><input type="checkbox" name="topping" value="${esc(t)}"><span>${esc(t)}</span><span class="p">+${T.price.toLocaleString("en-US")}</span></label>`).join("")}</div></fieldset>`;
  }
  if (rules.extraBoba) {
    html += `<fieldset class="group"><legend>Extras</legend><div class="opts"><label class="opt"><input type="checkbox" name="extra"><span>${esc(CONFIG.extraBoba.label)}</span><span class="p">+${CONFIG.extraBoba.price.toLocaleString("en-US")}</span></label></div></fieldset>`;
  }
  $("#cmBody").innerHTML = html;
  syncModalInputs(); updateModal();
  if (!modal().open) modal().showModal();
  $("#cmBody").scrollTop = 0;
}
function syncModalInputs() {   // push M.sel into the form controls
  const s = M.sel;
  $$("input[name=bobaType]").forEach(i => i.checked = i.value === s.boba);
  $$("input[name=flavour]").forEach(i => i.checked = i.value === s.flavour);
  $$("input[name=topping]").forEach(i => i.checked = s.toppings.includes(i.value));
  const ex = $("input[name=extra]"); if (ex) ex.checked = s.extra;
}
function updateModal(msg = "") {
  const c = calcPrice(M.prod, M.sel), s = c.sel;
  M.sel = s;
  const fw = $("#flavourWrap"); if (fw) fw.hidden = s.boba !== "popping";
  const full = s.toppings.length >= CONFIG.toppings.max;
  $$("input[name=topping]").forEach(i => { const dis = full && !i.checked; i.disabled = dis; i.closest(".opt").classList.toggle("disabled", dis); });
  const rows = [`<div><span>${esc(M.prod.name)}</span><span>${fmt(c.base)}</span></div>`];
  if (s.boba) rows.push(`<div><span>${esc(CONFIG.boba[s.boba].label)}${s.flavour ? " – " + esc(s.flavour) : ""}</span><span>Free</span></div>`);
  if (s.toppings.length) rows.push(`<div><span>Toppings (${s.toppings.length} × ${fmt(CONFIG.toppings.price)})</span><span>${fmt(c.toppings)}</span></div>`);
  if (s.extra) rows.push(`<div><span>${esc(CONFIG.extraBoba.label)}</span><span>${fmt(c.extra)}</span></div>`);
  $("#cmBreakdown").innerHTML = rows.join("");
  $("#cmTotal").textContent = fmt(c.unit);
  const missing = needsFlavour(M.prod, s);
  $("#cmAdd").disabled = missing;
  $("#cmHint").textContent = msg || (missing ? "Please choose a popping boba flavour." : "");
}
function onModalChange(e) {
  const t = e.target, s = M.sel;
  if (t.name === "bobaType") { s.boba = t.value; s.flavour = t.value === "chewy" ? CONFIG.boba.chewy.flavours[0] : null; }
  else if (t.name === "flavour") s.flavour = t.value;
  else if (t.name === "topping") {
    if (t.checked && s.toppings.length >= CONFIG.toppings.max) { t.checked = false; return updateModal(`You can choose up to ${CONFIG.toppings.max} toppings.`); }
    s.toppings = t.checked ? [...s.toppings, t.value] : s.toppings.filter(x => x !== t.value);
  } else if (t.name === "extra") s.extra = t.checked;
  updateModal();
}
function closeModal() { modal().close(); }

/* ---- Cart ---- */
const CART_KEY = "bobaCart.v1";
let cart = [];
function loadCart() {
  try {
    const raw = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    cart = raw.map(l => { const prod = CATALOG.get(l.pid); if (!prod || typeof prod.price !== "number") return null;
      const sel = sanitize(prod, l.sel); return { key: lineKey(prod.id, sel), pid: prod.id, sel, qty: Math.min(CONFIG.maxQty, Math.max(1, parseInt(l.qty) || 1)) }; }).filter(Boolean);
  } catch { cart = []; }
}
const saveCart = () => { try { localStorage.setItem(CART_KEY, JSON.stringify(cart.map(({ pid, sel, qty }) => ({ pid, sel, qty })))); } catch {} };
const lineUnit = l => calcPrice(CATALOG.get(l.pid), l.sel).unit;
const cartSubtotal = () => cart.reduce((n, l) => n + lineUnit(l) * l.qty, 0);
const cartCount = () => cart.reduce((n, l) => n + l.qty, 0);

function addLine(prod, sel, qty = 1) {
  const s = sanitize(prod, sel), key = lineKey(prod.id, s);
  const ex = cart.find(l => l.key === key);
  if (ex) ex.qty = Math.min(CONFIG.maxQty, ex.qty + qty);
  else cart.push({ key, pid: prod.id, sel: s, qty: Math.min(CONFIG.maxQty, Math.max(1, qty)) });
  commitCart();
}
function replaceLine(oldKey, prod, sel, qty) {
  cart = cart.filter(l => l.key !== oldKey);   // remove old entry, then add (merges if identical entry exists)
  addLine(prod, sel, qty);
}
function changeQty(key, d) {
  const l = cart.find(x => x.key === key); if (!l) return;
  l.qty = Math.max(0, Math.min(CONFIG.maxQty, l.qty + d));
  if (l.qty === 0) cart = cart.filter(x => x.key !== key);
  commitCart();
}
const removeLine = key => { cart = cart.filter(l => l.key !== key); commitCart(); };
function commitCart() { saveCart(); renderCart(); }

function describeSel(s) {
  const out = [];
  if (s.boba) out.push(`${CONFIG.boba[s.boba].label}${s.flavour && s.boba === "popping" ? ": " + s.flavour : ""}`);
  if (s.toppings.length) out.push(`Toppings: ${s.toppings.join(", ")} (+${fmt(s.toppings.length * CONFIG.toppings.price)})`);
  if (s.extra) out.push(`${CONFIG.extraBoba.label} (+${fmt(CONFIG.extraBoba.price)})`);
  return out;
}
/* ---- Cart drawer (Delivery / Pickup) ---- */
const D = { type: null };   // "delivery" | "pickup" | null
const DEFAULT_HINT = "This opens WhatsApp with your order filled in — tap Send there to confirm it.";
const drawer = () => $("#cart-drawer");
const bump = () => $("#cart-toggle-btn").animate([{ transform: "scale(1.15)" }, { transform: "scale(1)" }], 250);

function openCart() {
  renderCart();
  $("#cart-overlay").hidden = false; drawer().hidden = false;
  requestAnimationFrame(() => { drawer().classList.add("open"); $("#cart-overlay").classList.add("open"); });
  document.body.classList.add("no-scroll"); $("#cart-close-btn").focus();
}
function closeCart() {
  drawer().classList.remove("open"); $("#cart-overlay").classList.remove("open");
  document.body.classList.remove("no-scroll");
  setTimeout(() => { if (!drawer().classList.contains("open")) { drawer().hidden = true; $("#cart-overlay").hidden = true; } }, 260);
  $("#cart-toggle-btn").focus();
}
function deliveryFee() { return D.type === "delivery" ? CONFIG.restaurant.deliveryFee : 0; }

function renderCart() {
  const n = cartCount();
  $("#cart-count").textContent = n;
  $("#cart-toggle-btn").setAttribute("aria-label", `Open cart, ${n} item${n === 1 ? "" : "s"}`);
  $("#cart-empty").hidden = cart.length > 0; $("#cart-footer").hidden = cart.length === 0;
  $("#cart-items").innerHTML = cart.map(l => {
    const prod = CATALOG.get(l.pid), det = describeSel(l.sel), custom = !!getRules(prod);
    return `<div class="line"><div class="line-top"><span>${esc(prod.name)}</span><span>${fmt(lineUnit(l) * l.qty)}</span></div>
      <ul><li>Base: ${fmt(prod.price)}</li>${det.map(d => `<li>${esc(d)}</li>`).join("")}</ul>
      <div class="line-actions"><div class="qty"><button type="button" data-dec="${esc(l.key)}" aria-label="Decrease quantity of ${esc(prod.name)}">−</button><span aria-live="polite">${l.qty}</span><button type="button" data-inc="${esc(l.key)}" aria-label="Increase quantity of ${esc(prod.name)}">+</button></div>
      ${custom ? `<button type="button" class="link" data-edit="${esc(l.key)}">Edit</button>` : ""}<button type="button" class="link" data-remove="${esc(l.key)}">Remove</button></div></div>`;
  }).join("");
  const sub = cartSubtotal(), fee = deliveryFee();
  $("#cart-total-rows").innerHTML = `<div><span>Subtotal</span><span>${fmt(sub)}</span></div>${fee ? `<div><span>Delivery fee</span><span>${fmt(fee)}</span></div>` : ""}<div class="grand"><span>Total</span><span>${fmt(sub + fee)}</span></div>`;
  syncOrderForm();
}

/* ---- Order form ---- */
function readOrder() {
  const v = id => $("#" + id).value.trim();
  return { type: D.type, name: v("customer-name"), phone: v("customer-contact"), area: v("customer-area"), address: v("customer-address"), note: v("customer-note") };
}
function orderProblem(o) {
  if (!cart.length) return "Your cart is empty.";
  if (!o.type) return "Please choose Delivery or Pickup.";
  if (o.name.length < 2) return "Please enter your name.";
  if (!/^\+?[\d\s-]{7,20}$/.test(o.phone)) return "Please enter a valid contact number.";
  if (o.type === "delivery") {
    if (!o.area) return "Please enter your delivery area.";
    if (o.address.length < 3) return "Please enter your delivery address.";
  }
  return "";
}
function syncOrderForm() {
  $$(".order-type-btn").forEach(b => b.setAttribute("aria-checked", String(b.dataset.type === D.type)));
  $("#order-type-hint").hidden = !!D.type;
  $("#cart-customer-fields").hidden = !D.type;
  $$("[data-delivery-only]").forEach(el => { el.hidden = D.type !== "delivery"; });
  const problem = orderProblem(readOrder());
  $("#whatsapp-order-btn").disabled = !!problem;
  $("#whatsapp-hint").textContent = D.type && problem ? problem : DEFAULT_HINT;
}

/* ---- WhatsApp message ---- */
function buildWhatsAppMessage(o) {
  const del = o.type === "delivery", sub = cartSubtotal(), fee = del ? CONFIG.restaurant.deliveryFee : 0;
  const L = [`*New order – ${CONFIG.restaurant.name}*`, "", `*Order type:* ${del ? "Delivery" : "Pickup"}`, `Name: ${o.name}`, `Phone: ${o.phone}`];
  if (del) L.push(`Delivery area: ${o.area}`, `Delivery address: ${o.address}`);
  if (o.note) L.push(`Additional note: ${o.note}`);
  L.push("", "*Items*");
  cart.forEach((l, i) => {
    const prod = CATALOG.get(l.pid), s = l.sel, u = lineUnit(l);
    L.push(`${i + 1}. ${prod.name} × ${l.qty}`, `   Base price: ${fmt(prod.price)}`);
    if (s.boba) L.push(`   Boba: ${CONFIG.boba[s.boba].label}${s.boba === "popping" && s.flavour ? " – " + s.flavour : ""} (free)`);
    if (s.toppings.length) L.push(`   Toppings: ${s.toppings.join(", ")} (${fmt(s.toppings.length * CONFIG.toppings.price)})`);
    if (s.extra) L.push(`   ${CONFIG.extraBoba.label}: ${fmt(CONFIG.extraBoba.price)}`);
    L.push(`   Price each: ${fmt(u)} | Item total: ${fmt(u * l.qty)}`);
  });
  L.push("", `Subtotal: ${fmt(sub)}`);
  if (del) L.push(`Delivery fee: ${fmt(fee)}`);
  L.push(`*TOTAL: ${fmt(sub + fee)}*`);
  return L.join("\n");
}
function sendOrder() {
  const o = readOrder(), problem = orderProblem(o), hint = $("#whatsapp-hint");
  if (problem) { hint.textContent = problem; return; }
  const num = String(CONFIG.restaurant.whatsapp).replace(/\D/g, "");
  if (!num) { hint.textContent = "Restaurant WhatsApp number is not configured."; return; }
  window.open(`https://wa.me/${num}?text=${encodeURIComponent(buildWhatsAppMessage(o))}`, "_blank", "noopener");
  hint.textContent = "WhatsApp opened — please tap Send there to place your order.";
}

/* ---- Add-to-cart entry point ---- */
function handleAdd(id) {
  const prod = CATALOG.get(id);
  if (!prod || typeof prod.price !== "number") return;
  if (getRules(prod)) openModal(prod); else { addLine(prod, null, 1); bump(); }
}

/* ---- Events ---- */
document.addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  if (b.dataset.add) handleAdd(b.dataset.add);
  else if (b.dataset.inc) changeQty(b.dataset.inc, 1);
  else if (b.dataset.dec) changeQty(b.dataset.dec, -1);
  else if (b.dataset.remove) removeLine(b.dataset.remove);
  else if (b.dataset.edit) { const l = cart.find(x => x.key === b.dataset.edit); if (l) openModal(CATALOG.get(l.pid), l.sel, l.key, l.qty); }
  else if (b.id === "cart-toggle-btn") openCart();
  else if (b.id === "cart-close-btn") closeCart();
  else if (b.id === "cart-browse-btn") { closeCart(); $("#menuRoot").scrollIntoView({ behavior: "smooth" }); }
  else if (b.classList.contains("order-type-btn")) { D.type = b.dataset.type; renderCart(); }
  else if (b.id === "whatsapp-order-btn") sendOrder();
  else if (b.id === "clear-cart-btn") { if (confirm("Remove all items from your cart?")) { cart = []; commitCart(); } }
  else if (b.id === "bobaClear") { M.sel.boba = null; M.sel.flavour = null; syncModalInputs(); updateModal(); }
  else if (b.id === "cmClose") closeModal();
  else if (b.id === "cmAdd") {
    const c = calcPrice(M.prod, M.sel);
    if (needsFlavour(M.prod, c.sel)) return updateModal("Please choose a popping boba flavour.");
    const editing = !!M.editKey;
    if (editing) replaceLine(M.editKey, M.prod, c.sel, M.editQty); else addLine(M.prod, c.sel, 1);
    closeModal(); if (!editing) bump();
  }
});
$("#cart-overlay").addEventListener("click", closeCart);
$("#customModal").addEventListener("click", e => { if (e.target === e.currentTarget) closeModal(); });
$("#cmBody").addEventListener("change", onModalChange);
$("#cart-customer-fields").addEventListener("input", syncOrderForm);
document.addEventListener("keydown", e => { if (e.key === "Escape" && !drawer().hidden && !$("#customModal").open) closeCart(); });

/* ---- Init ---- */
bindBrand(); renderCategories(); renderMenu(); loadCart(); renderCart(); watchCategories();
