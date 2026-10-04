/* DIGITAL MENU PAGE — menu data and restaurant details are at the top of this file.
   (script2.js contains the same menu for the Order Online page: edit both.) */
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

const row = prod => `<li class="menu-row"><div><b>${esc(prod.name)}</b>${prod.desc ? `<small>${esc(prod.desc)}</small>` : ""}</div>
  ${typeof prod.price === "number" ? `<span class="price">${fmt(prod.price)}</span>` : `<span class="price tbc">Price TBC</span>`}</li>`;
function renderMenu() {
  $("#menuRoot").innerHTML = MENU.map(cat => `<section class="cat" id="cat-${cat.id}"><h3>${esc(cat.name)}</h3>
    ${cat.note ? `<p class="note">⚠️ ${esc(cat.note)}</p>` : ""}<ul class="menu-list">${cat.items.map(row).join("")}</ul></section>`).join("") + addonsSection();
}
bindBrand(); renderCategories(); renderMenu(); watchCategories();
