/* ==========================================================================
   BOBA BEAR — ORDER ONLINE
   File: script2.js

   PURPOSE
   This file controls the complete online ordering system:
   - Restaurant information and delivery settings
   - Menu categories, products and prices
   - Boba, flavour and topping customization
   - Product customization modal
   - Shopping cart and quantity controls
   - Delivery and Pickup orders
   - Customer details and order validation
   - WhatsApp checkout

   ================================================================
   QUICK EDITING GUIDE
   ================================================================

   SECTION 1  — Restaurant information and general settings
   SECTION 2  — Boba, toppings and extra boba
   SECTION 3  — Product creation helper
   SECTION 4  — Menu categories and products
   SECTION 5  — General helper functions
   SECTION 6  — Product catalog and IDs
   SECTION 7  — Customization rules
   SECTION 8  — Price calculations
   SECTION 9  — Restaurant branding
   SECTION 10 — Category navigation
   SECTION 11 — Boba and toppings information
   SECTION 12 — Product display
   SECTION 13 — Customization modal
   SECTION 14 — Shopping cart
   SECTION 15 — Cart drawer and Delivery/Pickup
   SECTION 16 — Customer order form
   SECTION 17 — WhatsApp checkout
   SECTION 18 — Event listeners
   SECTION 19 — Application initialization

   IMPORTANT
   - Update the menu in BOTH script1.js and script2.js.
   - Keep the same product names and prices in both files.
   - Do not rename HTML IDs or CSS classes without updating the
     corresponding HTML, CSS and JavaScript.
   - Use null for unconfirmed prices.
   ========================================================================== */


/* ==========================================================================
   SECTION 1 — RESTAURANT CONFIGURATION
   ==========================================================================

   Edit this section when restaurant details change.

   WhatsApp:
   Enter the full international number using digits only.
   Example: 255712345678

   Delivery fee:
   The configured fee is charged to Delivery orders only.
   Pickup orders do not receive a delivery fee.

   Social media:
   Add entries using the format shown below.
   ========================================================================== */

const CONFIG = {

  restaurant: {

    name: "Boba Bear",

    tagline: "Pop it. Sip it. Love it.",

    whatsapp: "255000000000",

    address: "[Add restaurant address]",

    phone: "[Add telephone number]",

    hours: "[Add opening hours]",

    socials: [
      // { label: "Instagram", url: "https://instagram.com/yourpage" },
      // { label: "Facebook", url: "https://facebook.com/yourpage" }
    ],

    deliveryNote: "Home Delivery Available",

    deliveryFee: 0

  },


  // Currency displayed throughout the website.
  currency: "TSh",


  // Maximum quantity of a product in one cart line.
  maxQty: 99,


  /* ------------------------------------------------------------------------
     BOBA OPTIONS
     ------------------------------------------------------------------------ */

  boba: {

    popping: {

      label: "Popping Boba",

      flavours: [
        "Strawberry",
        "Blueberry",
        "Mango",
        "Orange",
        "Green Apple",
        "Grape",
        "Pink Lemon",
        "Lemon",
        "Kiwi",
        "Watermelon",
        "Raspberry",
        "Passion",
        "Lychee",
        "Pomegranate",
        "Peach",
        "Salty Caramel",
        "Chocolate",
        "Coffee",
        "Taro",
        "Tropical"
      ]

    },

    chewy: {

      label: "Chewy Boba (Tapioca)",

      flavours: ["Tapioca"]

    },

    // true = a flavour must be selected for Popping Boba.
    // false = a flavour is optional.
    requireFlavourForPopping: true

  },


  /* ------------------------------------------------------------------------
     TOPPINGS
     ------------------------------------------------------------------------

     price = price per topping
     max   = maximum number of toppings per drink
     list  = available toppings
     ------------------------------------------------------------------------ */

  toppings: {

    price: 1000,

    max: 2,

    list: [
      "Strawberry Chunks",
      "Marshmallows",
      "Chocolate Sprinkles",
      "Whipped Cream",
      "Toasted Nuts",
      "Oreo Crumbs"
    ]

  },


  // Optional paid extra, separate from the boba type.

  extraBoba: {

    label: "Extra Boba / Tapioca",

    price: 1000

  },


  /* ------------------------------------------------------------------------
     DEFAULT CUSTOMIZATION RULES
     ------------------------------------------------------------------------

     true  = enabled
     false = disabled

     Categories and individual products can override these defaults.
     ------------------------------------------------------------------------ */

  customDefault: {

    boba: true,

    toppings: true,

    extraBoba: true

  }

};


// Short reference to the default customization settings.
const ON = CONFIG.customDefault;


/* ==========================================================================
   SECTION 2 — PRODUCT CREATION HELPER
   ==========================================================================

   Use this helper to add products in SECTION 3.

   Format:
   p("Product name", price, "Description")

   Examples:
   p("Mango Milk", 12000)
   p("Strawberry Milk", 11000, "Fresh strawberry milk")

   For an unconfirmed price:
   p("New Drink", null, "Description")

   To disable customization for one product:
   p("New Drink", 12000, "Description", { custom: false })

   To mark information that needs checking:
   p("New Drink", 12000, "Description", { check: true })
   ========================================================================== */

const p = (name, price, desc = "", extra = {}) => ({
  name,
  price,
  desc,
  ...extra
});


/* ==========================================================================
   SECTION 3 — MENU CATEGORIES AND PRODUCTS
   ==========================================================================

   THIS IS THE MAIN SECTION FOR EDITING YOUR MENU.

   Each category contains:
   - id       : internal category identifier
   - name     : category name shown to customers
   - icon     : category emoji
   - tint     : optional category colour
   - custom   : customization rules
   - note     : optional message displayed above the products
   - items    : products belonging to this category

   ADD A PRODUCT:
   Add a p(...) entry inside the appropriate items array.

   CHANGE A PRICE:
   Edit the number in the relevant p(...) entry.

   REMOVE A PRODUCT:
   Remove its p(...) entry and check the commas.

   ADD A CATEGORY:
   Copy a category object and give it a new unique id.

   CUSTOMIZATION:
   custom: ON     = use default settings
   custom: false  = disable customization
   custom: { ... } = define custom rules

   IMPORTANT:
   Keep this menu synchronized with script1.js.
   The product IDs are generated automatically from category IDs
   and product names in SECTION 6.
   ========================================================================== */

const MENU = [

  // ------------------------------------------------------------------------
  // CATEGORY 1 — WEEKEND SPECIALS · MILK
  // ------------------------------------------------------------------------

  {
    id: "weekend-milk",
    name: "Weekend Specials · Milk",
    icon: "☕",
    tint: "#f3e6d0",
    custom: ON,

    items: [

      p("Classic Frappuccino", 12000,
        "Iced coffee with a shot of espresso topped with whipped cream. Choice of caramel or chocolate drizzle"),

      p("Caramel Frappuccino", 12000,
        "Caramel iced coffee with a shot of espresso topped with whipped cream and caramel drizzles"),

      p("Hazelnut Frappuccino", 13000,
        "Hazelnut iced coffee with a shot of espresso topped with whipped cream and chocolate drizzles"),

      p("Pistachio Falooda", 13000,
        "Pistachio milkshake with fresh vegan jelly, vermicelli and sabja seeds"),

      p("Rose Falooda", 12000,
        "Rose milkshake with fresh vegan jelly, vermicelli and sabja seeds"),

      p("Strawberry Falooda", 12000,
        "Strawberry milkshake with fresh vegan jelly, vermicelli and sabja seeds"),

      p("Coffee Falooda", 12000,
        "Coffee milkshake with fresh vegan jelly, vermicelli and sabja seeds"),

      p("Iced matcha", 12000,
        "Iced matcha with whipped cream."),

      p("Iced matcha latte", 12000,
        "Iced matcha with a shot of espresso topped with whipped cream."),

      p("Iced latte", 10000)

    ]
  },


  // ------------------------------------------------------------------------
  // CATEGORY 2 — KUNAFA
  // ------------------------------------------------------------------------

  {
    id: "kunafa",
    name: "Kunafa",
    icon: "🥮",
    tint: "#f6e3b9",
    custom: false,

    items: [

      p("Kunafa milkshake", 15000,
        "Crispy kunafa, chocolate milkshake and pistachio milkshake"),

      p("Kunafa ice-cream", 15000,
        "Crispy kunafa, chocolate milkshake and pistachio milkshake")

    ]
  },


  // ------------------------------------------------------------------------
  // CATEGORY 3 — ICE CREAM
  // ------------------------------------------------------------------------

  {
    id: "ice-cream",
    name: "Ice Cream",
    icon: "🍦",
    tint: "#fbe0ea",
    custom: false,

    note: "Prices for Boba Ice creams (Cup / Cone) are handwritten and unclear in the PDF, and Inaara Ice cream has no price shown. Please confirm.",

    items: [

      p("Boba Ice creams – Cup", null,
        "Topped with Fruit or Tapioca Boba",
        { check: true }),

      p("Boba Ice creams – Cone", null,
        "Topped with Fruit or Tapioca Boba",
        { check: true }),

      p("Inaara Ice cream", null,
        "Half milkshake half ice-cream! Your choice of milkshake and ice-cream topped with tapioca or popping boba. Ask the Server for the flavor of the day",
        { check: true })

    ]
  },


  // ------------------------------------------------------------------------
  // CATEGORY 4 — MILK
  // ------------------------------------------------------------------------

  {
    id: "milk",
    name: "Milk",
    icon: "🥛",
    tint: "#efe6fb",
    custom: ON,

    note: "Prices/descriptions for Strawberries & Cream and Strawberry Jasmine Milk are cut off in the PDF photo and need confirming.",

    items: [

      p("Caramel", 11000,
        "Keep it smooth and creamy with our Caramel Milk Tea."),

      p("Coffee", 11000,
        "The perfect pick-me-up to start the day"),

      p("Matcha", 12000,
        "When life's feeling evergreen, match it with our Matcha Milk Tea"),

      p("Lotus", 12000,
        "A refreshing and indulgent Summer iced drink for all Lotus lovers!"),

      p("Sakura", 12000,
        "It's definitely a drink for sakura lovers, as you'll be treated to the scent of sakura every time you take a sip"),

      p("Blueberry", 13000,
        "Unique blend of blueberry milkshake!"),

      p("Blue Velvet", 12000,
        "A twist on the classic red velvet. A must try!"),

      p("Kiwi delight", 12000,
        "Low calories, high in fiber and very tasty!"),

      p("Red Velvet", 12000,
        "Perfect for anyone who loves a good red velvet cake"),

      p("Unicorn fluff", 13000,
        "Perfect blend of Strawberry, Blueberry and bubblegum Milk"),

      p("Tiramisu", 13000),

      p("Kahlua", 11000,
        "Sweet creamy coffee"),

      p("Vanilla", 11000),

      p("Bubble Gum", 11000,
        "Take a trip down memory lane with this cool infusion. It's a nostalgic, caffeine-free indulgence that everyone can enjoy"),

      p("Acai Smoothie", 12000,
        "Acai. Our absolute favorite"),

      p("Creamy Mango", 12000,
        "Mango milkshake with whipped cream"),

      p("Pistachio", 13000),

      p("Taro", 12000,
        "Give yourself a Taro-fic treat with our loveable Taro milk tea"),

      p("Blueberry Swirl", 14000,
        "Blueberry milkshake with whipped cream and blueberry jam"),

      p("Bamboo Charcoal", 13000,
        "Vanilla + bamboo charcoal"),

      p("Rose", 12000,
        "Rose milkshake"),

      p("Hedwig", 11000,
        "Vanilla Frappe"),

      p("Inaara Strawberry", 12000,
        "Strawberry milk with strawberry chunks",
        { check: true }),

      p("Strawberry", 11000,
        "Sweet, creamy, full bodied strawberry drink",
        { check: true }),

      p("Strawberries & Cream", 12000,
        "Strawberry milkshake, whipped cream and strawb… (text cut off in PDF)",
        { check: true }),

      p("Strawberry Jasmine Milk", null, "",
        { check: true })

    ]
  },


  // ------------------------------------------------------------------------
  // CATEGORY 5 — SLUSHY
  // ------------------------------------------------------------------------

  {
    id: "slushy",
    name: "Slushy",
    icon: "🧊",
    tint: "#d8ecf8",
    custom: ON,

    items: [

      p("Icey Lemon", 8000),
      p("Apple Burst", 8000),
      p("Winter Blaze", 10000),
      p("Red Grape", 10000),

      p("Bloody Vampire", 10000,
        "Cranberry Slush"),

      p("Witches Brew", 10000,
        "Kiwi Slush"),

      p("Poison Apple", 8000,
        "Apple Burst + Icey Lemon with a hint of Blood (Grape)"),

      p("Jack Frost", 10000,
        "Winter Blaze + Icey lemon + Grape Slush"),

      p("Strawberry blush", 10000,
        "Strawberry + Orange"),

      p("Mango Berry", 10000,
        "Mango + blackberry"),

      p("Mixed berry", 10000,
        "Mixed berry is a perfectly blend of all delicious berries"),

      p("Pink lemonade", 10000,
        "strawberry and lemon slush"),

      p("Blue lemonade", 10000,
        "blueberry and lemon slush"),

      p("Boo Berry", 10000,
        "Strawberry, blueberry and grape slush"),

      p("North Pole", 10000,
        "Blueberry and lemon slush"),

      p("Gryffindor", 10000,
        "Vampire and raspberry"),

      p("Hufflepuff", 10000,
        "Mango and orange"),

      p("Slytherin", 10000,
        "Kiwi and apple"),

      p("Ravenclaw", 10000,
        "Winter and blue raspberry"),

      p("Love struck", 10000,
        "Strawberry lemonade and Pink lemonade topped with a lemon slice")

    ]
  },


  // ------------------------------------------------------------------------
  // CATEGORY 6 — FIZZY
  // ------------------------------------------------------------------------

  {
    id: "fizzy",
    name: "Fizzy",
    icon: "🫧",
    tint: "#d9f2ea",
    custom: ON,

    note: "Prices for Grape Soda and Energizer, and the right edge of the other Fizzy prices, are cropped in the PDF photo; 8,000 is shown for the five visible. Please confirm.",

    items: [

      p("Frozen Strawberry Fizz", 8000),

      p("Passionfruit & Mango Fizz", 8000),

      p("Mojito Fizz", 8000),

      p("Red Raspberry Fizz", 8000, "",
        { check: true }),

      p("Electric Fizz", 8000,
        "A much-requested drink and a favorite for the kids. A blue fizzy drink that is super delicious",
        { check: true }),

      p("Grape Soda", null, "",
        { check: true }),

      p("Energizer", null, "",
        { check: true })

    ]
  },


  // ------------------------------------------------------------------------
  // CATEGORY 7 — FRUIT TEA
  // ------------------------------------------------------------------------

  {
    id: "fruit-tea",
    name: "Fruit Tea",
    icon: "🍹",
    tint: "#fde4c8",
    custom: false,

    items: [

      p("Mango dream", 8000, "Mango + Orange"),

      p("Summer blaze", 10000, "Strawberry + Blueberry"),

      p("Super melon", 8000, "Watermelon + strawberry"),

      p("Passionfruit sunrise", 10000,
        "Passion + Mango + Strawberry"),

      p("Hawaii", 10000,
        "Pineapple + mango + Passion juice"),

      p("Caribbean love", 10000,
        "Passion + peach + mango"),

      p("Twisted lemonade", 8000,
        "Refreshing Strawberry lemonade"),

      p("Spicy mango", 8000,
        "Mango with a hint of Chili"),

      p("Tiki passion", 10000,
        "Strawberry + Watermelon + Passion + Mango"),

      p("Pina colada", 8000,
        "Pineapple + Passion"),

      p("Mango passion frappe", 12000,
        "Mango, Passion and Berries infused drink"),

      p("Peachy sweetie", 10000,
        "Peach and strawberry"),

      p("Pomegranate Paradise", 10000,
        "Mango + Strawberry + Pomegranate + Peach"),

      p("Dragon", 10000,
        "Mango + Passion + Pomegranate + Raspberry"),

      p("Strawberry Lychee", 10000,
        "Strawberry + Lychee"),

      p("Treasure mango", 10000,
        "Mango, strawberry and peach")

    ]
  },


  // ------------------------------------------------------------------------
  // CATEGORY 8 — CHOCOLATE
  // ------------------------------------------------------------------------

  {
    id: "chocolate",
    name: "Chocolate",
    icon: "🍫",
    tint: "#ead7c8",
    custom: false,

    note: "Ferrero price is cropped in the PDF (16,0…); 16,000 assumed – please confirm.",

    items: [

      p("Chocolate", 11000),

      p("Choco mint", 12000,
        "Chocolate Milk paired with mint and chocolate chunks"),

      p("Nutella shake", 12000),

      p("Choco overload", 13000,
        "Chocolate Milkshake with Chocolate chunks and extra Chocolate drizzles"),

      p("Hazelnut", 12000),

      p("Oreo", 12000,
        "Oreo milkshake with Oreo crumbs on top"),

      p("Hazelnut Frappe", 12000,
        "Hazelnut + coffee"),

      p("Rich and creamy Coco", 13000,
        "Rich dark cocoa with whipped cream"),

      p("Chocolate Truffle", 12000,
        "Chocolate ganache, toasted nuts and coconut"),

      p("Nutcracker", 12000,
        "Hazelnut and Nutella milk topped with toasted nuts"),

      p("Rudolph", 12000,
        "KitKat milk topped with whipped cream and KitKat shavings"),

      p("Issac", 13000,
        "Rich chocolate topped with toasted marshmallows, Oreo crumbs and whipped cream"),

      p("Death by Chocolate", 13000,
        "Chocolate, Nutella and hazelnut milkshake with chocolate whipped cream, marshmallows and chocolate sprinkles"),

      p("Nimbus 2000", 13000,
        "Tiramisu and dark chocolate"),

      p("Warm Hug", 16000,
        "Ferrero Rocher and dark chocolate"),

      p("Minty mistletoe", 13000,
        "Minty chocolate topped with whipped cream and chocolate shavings"),

      p("Ferrero", 16000, "",
        { check: true })

    ]
  },


  // ------------------------------------------------------------------------
  // CATEGORY 9 — MILK TEA
  // ------------------------------------------------------------------------

  {
    id: "milk-tea",
    name: "Milk Tea",
    icon: "🍵",
    tint: "#e3ecd2",
    custom: false,

    note: "Milk Tea prices are cut off in the PDF photo, so these cannot be ordered until prices are added. 'Add a shot of Tea' (Oolong, Jasmine, Assam) also has no visible price.",

    items: [

      p("Assam", null,
        "Take a breath of fresh air from the valleys of As… garden with every sip! (text cut off in PDF)",
        { check: true }),

      p("Jasmine", null,
        "Dive deep into the aroma of our Jasmine Milk … (text cut off in PDF)",
        { check: true }),

      p("Oolong", null,
        "Dark roasted Oolong Tea leaves from Wuyi M… flavor with slight smokiness and earthy tone…",
        { check: true })

    ]
  }

];


/* ==========================================================================
   SECTION 4 — GENERAL HELPER FUNCTIONS
   ==========================================================================

   These functions are shared throughout the application.
   You normally do not need to edit them when updating the menu.
   ========================================================================== */

// Find one HTML element.
const $ = (selector, root = document) =>
  root.querySelector(selector);


// Find multiple HTML elements.
const $$ = (selector, root = document) =>
  [...root.querySelectorAll(selector)];


// Escape special characters before inserting text into HTML.
const esc = value =>
  String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);


// Format a price using the configured currency.
const fmt = amount =>
  `${CONFIG.currency} ${Number(amount).toLocaleString("en-US")}`;

 
// Create URL-friendly identifiers from names.
const slug = value =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");


/* ==========================================================================
   SECTION 5 — PRODUCT CATALOG AND IDs
   ==========================================================================

   Creates a searchable catalog of products.

   Product IDs are generated automatically from the category ID and
   product name. Other features use these IDs to identify cart items.

   Do not change this section when simply changing a price or description.
   ========================================================================== */

const CATALOG = new Map();

MENU.forEach(category => {

  category.items.forEach(item => {

    item.id = `${category.id}-${slug(item.name)}`;

    item.cat = category;

    if (CATALOG.has(item.id)) {
      console.error("Duplicate product ID:", item.id);
    }

    CATALOG.set(item.id, item);

  });

});


/* ==========================================================================
   SECTION 6 — CUSTOMIZATION RULES
   ==========================================================================

   Determines whether a product supports:
   - Boba
   - Toppings
   - Extra boba

   Product-specific rules take priority over category rules.
   ========================================================================== */

function getRules(product) {

  const settings =
    product.custom !== undefined
      ? product.custom
      : product.cat.custom;

  if (!settings) return null;

  const rules = {

    boba: !!settings.boba,

    toppings: !!settings.toppings,

    extraBoba: !!settings.extraBoba,

    poppingFlavours:
      settings.poppingFlavours || CONFIG.boba.popping.flavours

  };

  return (
    rules.boba ||
    rules.toppings ||
    rules.extraBoba
  ) ? rules : null;

}


// Default selection before a customer customizes a product.
const emptySel = () => ({

  boba: null,

  flavour: null,

  toppings: [],

  extra: false

});


/* ==========================================================================
   SECTION 7 — VALIDATE CUSTOMER SELECTIONS
   ==========================================================================

   Checks that customer selections follow the configured rules.

   It prevents unsupported flavours, duplicate toppings and selections
   that exceed the topping limit.
   ========================================================================== */

function sanitize(product, selection) {

  const rules = getRules(product);

  const output = emptySel();

  if (!rules || !selection) return output;


  // Validate boba type and flavour.
  if (
    rules.boba &&
    (
      selection.boba === "popping" ||
      selection.boba === "chewy"
    )
  ) {

    output.boba = selection.boba;

    if (selection.boba === "chewy") {

      output.flavour = CONFIG.boba.chewy.flavours[0];

    } else if (
      rules.poppingFlavours.includes(selection.flavour)
    ) {

      output.flavour = selection.flavour;

    }

  }


  // Validate toppings and enforce the maximum.
  if (rules.toppings && Array.isArray(selection.toppings)) {

    output.toppings = [...new Set(selection.toppings)]

      .filter(topping =>
        CONFIG.toppings.list.includes(topping)
      )

      .slice(0, CONFIG.toppings.max);

  }


  // Extra boba is available only if enabled for the product.
  output.extra = !!(
    rules.extraBoba && selection.extra
  );


  return output;

}


/* ==========================================================================
   SECTION 8 — PRICE CALCULATIONS
   ==========================================================================

   Calculates the base price, toppings, extras and final unit price.

   Topping and extra-boba prices are controlled in SECTION 1.
   ========================================================================== */

function calcPrice(product, selection) {

  const selected = sanitize(product, selection);

  const toppingsTotal =
    selected.toppings.length * CONFIG.toppings.price;

  const extraTotal =
    selected.extra ? CONFIG.extraBoba.price : 0;

  return {

    base: product.price,

    toppings: toppingsTotal,

    extra: extraTotal,

    unit: product.price + toppingsTotal + extraTotal,

    sel: selected

  };

}


// Unique key for a product and its customization selections.
const lineKey = (productId, selection) => [

  productId,

  selection.boba || "",

  selection.flavour || "",

  [...selection.toppings].sort().join("+"),

  selection.extra ? "x" : ""

].join("|");


// Determines whether a popping-boba flavour still needs to be selected.
const needsFlavour = (product, selection) =>

  CONFIG.boba.requireFlavourForPopping &&

  selection.boba === "popping" &&

  !selection.flavour;


/* ==========================================================================
   SECTION 9 — RESTAURANT BRANDING
   ==========================================================================

   Updates restaurant information wherever the HTML uses data-bind.

   Example:
   <span data-bind="name"></span>
   <span data-bind="phone"></span>
   <span data-bind="address"></span>

   The data-bind value must match a property in CONFIG.restaurant.
   ========================================================================== */

function bindBrand() {

  const restaurant = CONFIG.restaurant;


  // Update restaurant information.
  $$("[data-bind]").forEach(element => {

    element.textContent =
      restaurant[element.dataset.bind] ?? "";

  });


  // Update social media links.
  const socialsElement = $("#socials");

  if (socialsElement) {

    socialsElement.innerHTML = restaurant.socials.length

      ? restaurant.socials.map(social => `

          <a
            href="${esc(social.url)}"
            target="_blank"
            rel="noopener"
          >${esc(social.label)}</a>

        `).join(" · ")

      : "[Add social media links]";

  }


  // Update the copyright year.
  const yearElement = $("#year");

  if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

  }


  // Update the browser tab title.
  const pageTitle = document.documentElement.dataset.title;

  document.title = pageTitle

    ? `${restaurant.name} — ${pageTitle}`

    : restaurant.name;

}


/* ==========================================================================
   SECTION 10 — CATEGORY NAVIGATION
   ==========================================================================

   Automatically creates the category links.

   Requires an HTML element with id="catNav".
   ========================================================================== */

function renderCategories() {

  const categories = [

    ...MENU.map(category => [
      category.id,
      category.name
    ]),

    [
      "boba-addons",
      "Boba · Chewy · Jelly · Toppings"
    ]

  ];


  $("#catNav").innerHTML = categories.map(([id, name]) => `

    <a
      href="#cat-${id}"
      data-cat="${id}"
    >${esc(name)}</a>

  `).join("");

}


/* ==========================================================================
   SECTION 11 — BOBA AND TOPPINGS INFORMATION
   ==========================================================================

   Displays the available boba flavours, jelly options and toppings.

   The information here is generated from the configuration in SECTION 1.
   ========================================================================== */

function addonsSection() {

  const toppings = CONFIG.toppings;

  const boba = CONFIG.boba;


  // Convert an array of options into display chips.
  const chips = options => `

    <div class="chips">

      ${options.map(option => `

        <span class="chip">${esc(option)}</span>

      `).join("")}

    </div>

  `;


  return `

    <section class="cat" id="cat-boba-addons">

      <h3>Boba, Chewy, Jelly &amp; Toppings</h3>


      <div class="info-card">

        <h4>Boba · Popping flavours</h4>

        ${chips(boba.popping.flavours)}

      </div>


      <div class="info-card">

        <h4>Chewy</h4>

        ${chips(boba.chewy.flavours)}

      </div>


      <div class="info-card">

        <h4>Jelly</h4>

        ${chips(["Rainbow jelly", "Coffee jelly"])}

        <p class="desc">
          Jelly prices are not listed in the PDF.
        </p>

      </div>


      <div class="info-card">

        <h4>Toppings — ${fmt(toppings.price)} each</h4>

        ${chips(toppings.list)}

        <p class="desc">

          Extra Boba / Tapioca:
          ${fmt(CONFIG.extraBoba.price)}.

          Eligible drinks (Milk, Slushy, Fizzy) can be
          customised when ordering.

        </p>

      </div>

    </section>

  `;

}


/* ==========================================================================
   SECTION 12 — PRODUCT DISPLAY
   ==========================================================================

   Builds each product row, including:
   - Product name and description
   - Product price
   - Customization label
   - Add to Cart button

   Products without confirmed numeric prices cannot be added to the cart.
   Existing CSS classes and data attributes are preserved.
   ========================================================================== */

function productCard(product) {

  const hasPrice = typeof product.price === "number";

  const rules = getRules(product);


  return `

    <li class="menu-row">

      <div>

        <b>${esc(product.name)}</b>

        ${product.desc ? `

          <small>${esc(product.desc)}</small>

        ` : ""}

        ${rules ? `

          <small class="tag">
            Boba &amp; toppings available
          </small>

        ` : ""}

      </div>


      <div class="row-end">

        ${
          hasPrice

            ? `<span class="price">${fmt(product.price)}</span>`

            : `<span class="price tbc">Price TBC</span>`
        }


        <button
          class="btn btn-accent btn-sm"
          data-add="${esc(product.id)}"
          ${hasPrice ? "" : "disabled"}
          aria-label="Add ${esc(product.name)} to cart"
        >
          Add to Cart
        </button>

      </div>

    </li>

  `;

}


/* Render every category and its products. */

function renderMenu() {

  $("#menuRoot").innerHTML = MENU.map(category => `

    <section
      class="cat"
      id="cat-${category.id}"
    >

      <h3>${esc(category.name)}</h3>


      ${category.note ? `

        <p class="note">
          ⚠️ ${esc(category.note)}
        </p>

      ` : ""}


      <ul class="menu-list">

        ${category.items.map(productCard).join("")}

      </ul>

    </section>

  `).join("") + addonsSection();

}


/* ==========================================================================
   SECTION 13 — PRODUCT CUSTOMIZATION MODAL
   ==========================================================================

   Controls the customization popup shown before a product is added.

   Required HTML IDs:
   customModal, cmTitle, cmAdd, cmBody, cmBreakdown, cmTotal, cmHint

   Keep these IDs unchanged unless the HTML is updated too.
   ========================================================================== */

// Current product and selection inside the modal.
const M = {

  prod: null,

  sel: emptySel(),

  editKey: null,

  editQty: 1

};


// Reference to the modal element.
const modal = () => $("#customModal");


/* --------------------------------------------------------------------------
   13.1 — OPEN THE MODAL
   -------------------------------------------------------------------------- */

function openModal(product, selection = null, editKey = null, qty = 1) {

  M.prod = product;

  M.sel = sanitize(product, selection);

  M.editKey = editKey;

  M.editQty = qty;


  const rules = getRules(product);

  const toppings = CONFIG.toppings;


  $("#cmTitle").textContent =
    editKey ? "Edit Your Drink" : "Customise Your Drink";

  $("#cmAdd").textContent =
    editKey ? "Update Cart" : "Add to Cart";


  let html = `

    <div class="drink-head">

      <div>

        <h3>${esc(product.name)}</h3>

        <div class="price">
          Base price: ${fmt(product.price)}
        </div>

      </div>

    </div>

  `;


  // Boba type and popping flavour options.
  if (rules.boba) {

    html += `

      <fieldset class="group">

        <legend>Boba type</legend>

        <p class="help">
          Optional — choose one (no extra charge).
        </p>


        <div class="opts cols">

          ${["popping", "chewy"].map(type => `

            <label class="opt">

              <input
                type="radio"
                name="bobaType"
                value="${type}"
              >

              <span>${esc(CONFIG.boba[type].label)}</span>

            </label>

          `).join("")}

        </div>


        <button
          type="button"
          class="clear"
          id="bobaClear"
        >
          Clear boba choice
        </button>


        <div id="flavourWrap" hidden>

          <p class="help" style="margin-top:10px">
            Popping boba flavour
          </p>


          <div class="opts cols">

            ${rules.poppingFlavours.map(flavour => `

              <label class="opt">

                <input
                  type="radio"
                  name="flavour"
                  value="${esc(flavour)}"
                >

                <span>${esc(flavour)}</span>

              </label>

            `).join("")}

          </div>

        </div>

      </fieldset>

    `;

  }


  // Topping options.
  if (rules.toppings) {

    html += `

      <fieldset class="group">

        <legend>Toppings</legend>

        <p class="help">

          Choose up to ${toppings.max} toppings ·
          ${fmt(toppings.price)} each

        </p>


        <div class="opts cols">

          ${toppings.list.map(topping => `

            <label class="opt">

              <input
                type="checkbox"
                name="topping"
                value="${esc(topping)}"
              >

              <span>${esc(topping)}</span>

              <span class="p">
                +${toppings.price.toLocaleString("en-US")}
              </span>

            </label>

          `).join("")}

        </div>

      </fieldset>

    `;

  }


  // Optional paid extra.
  if (rules.extraBoba) {

    html += `

      <fieldset class="group">

        <legend>Extras</legend>


        <div class="opts">

          <label class="opt">

            <input
              type="checkbox"
              name="extra"
            >

            <span>${esc(CONFIG.extraBoba.label)}</span>

            <span class="p">
              +${CONFIG.extraBoba.price.toLocaleString("en-US")}
            </span>

          </label>

        </div>

      </fieldset>

    `;

  }


  $("#cmBody").innerHTML = html;


  syncModalInputs();

  updateModal();


  if (!modal().open) {

    modal().showModal();

  }


  $("#cmBody").scrollTop = 0;

}


/* --------------------------------------------------------------------------
   13.2 — SYNCHRONIZE THE MODAL INPUTS
   -------------------------------------------------------------------------- */

function syncModalInputs() {

  const selection = M.sel;


  $$("input[name=bobaType]").forEach(input => {

    input.checked = input.value === selection.boba;

  });


  $$("input[name=flavour]").forEach(input => {

    input.checked = input.value === selection.flavour;

  });


  $$("input[name=topping]").forEach(input => {

    input.checked = selection.toppings.includes(input.value);

  });


  const extraInput = $("input[name=extra]");

  if (extraInput) {

    extraInput.checked = selection.extra;

  }

}


/* --------------------------------------------------------------------------
   13.3 — UPDATE MODAL PRICES AND VALIDATION
   -------------------------------------------------------------------------- */

function updateModal(message = "") {

  const calculation = calcPrice(M.prod, M.sel);

  const selection = calculation.sel;

  M.sel = selection;


  // Show the flavour choices only for popping boba.
  const flavourWrap = $("#flavourWrap");

  if (flavourWrap) {

    flavourWrap.hidden = selection.boba !== "popping";

  }


  // Disable additional toppings when the maximum is reached.
  const maximumReached =
    selection.toppings.length >= CONFIG.toppings.max;


  $$("input[name=topping]").forEach(input => {

    const disabled =
      maximumReached && !input.checked;

    input.disabled = disabled;

    input.closest(".opt").classList.toggle(
      "disabled",
      disabled
    );

  });


  // Build the itemized price breakdown.
  const rows = [

    `<div>
      <span>${esc(M.prod.name)}</span>
      <span>${fmt(calculation.base)}</span>
    </div>`

  ];


  if (selection.boba) {

    rows.push(`

      <div>

        <span>

          ${esc(CONFIG.boba[selection.boba].label)}

          ${selection.flavour
            ? " – " + esc(selection.flavour)
            : ""}

        </span>

        <span>Free</span>

      </div>

    `);

  }


  if (selection.toppings.length) {

    rows.push(`

      <div>

        <span>

          Toppings (${selection.toppings.length} ×
          ${fmt(CONFIG.toppings.price)})

        </span>

        <span>${fmt(calculation.toppings)}</span>

      </div>

    `);

  }


  if (selection.extra) {

    rows.push(`

      <div>

        <span>${esc(CONFIG.extraBoba.label)}</span>

        <span>${fmt(calculation.extra)}</span>

      </div>

    `);

  }


  $("#cmBreakdown").innerHTML = rows.join("");

  $("#cmTotal").textContent = fmt(calculation.unit);


  // Prevent adding a popping-boba drink without a required flavour.
  const missingFlavour = needsFlavour(M.prod, selection);

  $("#cmAdd").disabled = missingFlavour;

  $("#cmHint").textContent = message || (

    missingFlavour
      ? "Please choose a popping boba flavour."
      : ""

  );

}


/* --------------------------------------------------------------------------
   13.4 — HANDLE CUSTOMER CUSTOMIZATION CHANGES
   -------------------------------------------------------------------------- */

function onModalChange(event) {

  const input = event.target;

  const selection = M.sel;


  if (input.name === "bobaType") {

    selection.boba = input.value;

    selection.flavour =

      input.value === "chewy"

        ? CONFIG.boba.chewy.flavours[0]

        : null;

  }


  else if (input.name === "flavour") {

    selection.flavour = input.value;

  }


  else if (input.name === "topping") {

    if (
      input.checked &&
      selection.toppings.length >= CONFIG.toppings.max
    ) {

      input.checked = false;

      return updateModal(
        `You can choose up to ${CONFIG.toppings.max} toppings.`
      );

    }


    selection.toppings = input.checked

      ? [...selection.toppings, input.value]

      : selection.toppings.filter(
          topping => topping !== input.value
        );

  }


  else if (input.name === "extra") {

    selection.extra = input.checked;

  }


  updateModal();

}


// Close the customization modal.
function closeModal() {

  modal().close();

}


/* ==========================================================================
   SECTION 14 — SHOPPING CART
   ==========================================================================

   Handles:
   - Saving and restoring cart contents
   - Adding products
   - Editing customized products
   - Updating quantities
   - Removing products
   - Calculating the subtotal

   CART_KEY identifies the browser's saved cart.
   Changing it will make previously saved carts under the old key
   unavailable to this script.
   ========================================================================== */

const CART_KEY = "bobaCart.v1";

let cart = [];


/* --------------------------------------------------------------------------
   14.1 — LOAD SAVED CART
   -------------------------------------------------------------------------- */

function loadCart() {

  try {

    const saved = JSON.parse(
      localStorage.getItem(CART_KEY) || "[]"
    );


    cart = saved.map(line => {

      const product = CATALOG.get(line.pid);

      // Ignore products that no longer exist or have no confirmed price.
      if (!product || typeof product.price !== "number") {

        return null;

      }


      const selection = sanitize(product, line.sel);

      return {

        key: lineKey(product.id, selection),

        pid: product.id,

        sel: selection,

        qty: Math.min(

          CONFIG.maxQty,

          Math.max(1, parseInt(line.qty) || 1)

        )

      };

    }).filter(Boolean);

  } catch {

    cart = [];

  }

}


/* --------------------------------------------------------------------------
   14.2 — SAVE CART
   -------------------------------------------------------------------------- */

const saveCart = () => {

  try {

    localStorage.setItem(

      CART_KEY,

      JSON.stringify(

        cart.map(({ pid, sel, qty }) => ({

          pid,
          sel,
          qty

        }))

      )

    );

  } catch {

    // Cart still works during the current page session
    // if browser storage is unavailable.

  }

};


/* --------------------------------------------------------------------------
   14.3 — CART TOTAL HELPERS
   -------------------------------------------------------------------------- */

// Price of one customized item.
const lineUnit = line =>

  calcPrice(CATALOG.get(line.pid), line.sel).unit;


// Total of all products before delivery.
const cartSubtotal = () =>

  cart.reduce(

    (total, line) =>

      total + lineUnit(line) * line.qty,

    0

  );


// Total number of individual items in the cart.
const cartCount = () =>

  cart.reduce(

    (total, line) => total + line.qty,

    0

  );


/* --------------------------------------------------------------------------
   14.4 — ADD PRODUCTS TO CART
   -------------------------------------------------------------------------- */

function addLine(product, selection, quantity = 1) {

  const selected = sanitize(product, selection);

  const key = lineKey(product.id, selected);


  // Merge identical products with identical customizations.
  const existing = cart.find(line => line.key === key);


  if (existing) {

    existing.qty = Math.min(

      CONFIG.maxQty,

      existing.qty + quantity

    );

  } else {

    cart.push({

      key,

      pid: product.id,

      sel: selected,

      qty: Math.min(

        CONFIG.maxQty,

        Math.max(1, quantity)

      )

    });

  }


  commitCart();

}


/* --------------------------------------------------------------------------
   14.5 — REPLACE AN EDITED CART ITEM
   -------------------------------------------------------------------------- */

function replaceLine(oldKey, product, selection, quantity) {

  cart = cart.filter(line => line.key !== oldKey);

  addLine(product, selection, quantity);

}


/* --------------------------------------------------------------------------
   14.6 — CHANGE QUANTITY
   -------------------------------------------------------------------------- */

function changeQty(key, difference) {

  const line = cart.find(item => item.key === key);

  if (!line) return;


  line.qty = Math.max(

    0,

    Math.min(CONFIG.maxQty, line.qty + difference)

  );


  // Remove the line if its quantity reaches zero.
  if (line.qty === 0) {

    cart = cart.filter(item => item.key !== key);

  }


  commitCart();

}


/* Remove one cart line. */

const removeLine = key => {

  cart = cart.filter(line => line.key !== key);

  commitCart();

};


/* Save cart changes and refresh the cart display. */

function commitCart() {

  saveCart();

  renderCart();

}


/* --------------------------------------------------------------------------
   14.7 — DESCRIBE CUSTOMIZATIONS
   -------------------------------------------------------------------------- */

function describeSel(selection) {

  const details = [];


  if (selection.boba) {

    details.push(

      `${CONFIG.boba[selection.boba].label}` +

      (

        selection.flavour && selection.boba === "popping"

          ? ": " + selection.flavour

          : ""

      )

    );

  }


  if (selection.toppings.length) {

    details.push(

      `Toppings: ${selection.toppings.join(", ")} ` +

      `(+${fmt(selection.toppings.length * CONFIG.toppings.price)})`

    );

  }


  if (selection.extra) {

    details.push(

      `${CONFIG.extraBoba.label} ` +

      `(+${fmt(CONFIG.extraBoba.price)})`

    );

  }


  return details;

}


/* ==========================================================================
   SECTION 15 — CART DRAWER AND DELIVERY / PICKUP
   ==========================================================================

   Controls opening and closing the cart drawer.

   Required HTML IDs:
   cart-drawer, cart-overlay, cart-toggle-btn, cart-close-btn,
   cart-items, cart-count, cart-empty, cart-footer,
   cart-total-rows, cart-browse-btn, clear-cart-btn

   Order types:
   - delivery
   - pickup

   The delivery fee comes from CONFIG.restaurant.deliveryFee.
   ========================================================================== */

const D = {

  type: null

};


// Default message shown beneath the WhatsApp button.
const DEFAULT_HINT =

  "This opens WhatsApp with your order filled in — tap Send there to confirm it.";


// Cart drawer reference.
const drawer = () => $("#cart-drawer");


// Animate the cart button when a product is added.
const bump = () =>

  $("#cart-toggle-btn").animate(

    [

      { transform: "scale(1.15)" },

      { transform: "scale(1)" }

    ],

    250

  );


/* --------------------------------------------------------------------------
   15.1 — OPEN CART
   -------------------------------------------------------------------------- */

function openCart() {

  renderCart();

  $("#cart-overlay").hidden = false;

  drawer().hidden = false;


  requestAnimationFrame(() => {

    drawer().classList.add("open");

    $("#cart-overlay").classList.add("open");

  });


  document.body.classList.add("no-scroll");

  $("#cart-close-btn").focus();

}


/* --------------------------------------------------------------------------
   15.2 — CLOSE CART
   -------------------------------------------------------------------------- */

function closeCart() {

  drawer().classList.remove("open");

  $("#cart-overlay").classList.remove("open");

  document.body.classList.remove("no-scroll");


  setTimeout(() => {

    if (!drawer().classList.contains("open")) {

      drawer().hidden = true;

      $("#cart-overlay").hidden = true;

    }

  }, 260);


  $("#cart-toggle-btn").focus();

}


/* --------------------------------------------------------------------------
   15.3 — DELIVERY FEE
   -------------------------------------------------------------------------- */

function deliveryFee() {

  return D.type === "delivery"

    ? CONFIG.restaurant.deliveryFee

    : 0;

}


/* --------------------------------------------------------------------------
   15.4 — RENDER CART
   -------------------------------------------------------------------------- */

function renderCart() {

  const count = cartCount();


  // Update cart button count and accessibility label.
  $("#cart-count").textContent = count;

  $("#cart-toggle-btn").setAttribute(

    "aria-label",

    `Open cart, ${count} item${count === 1 ? "" : "s"}`

  );


  // Show empty state or cart footer.
  $("#cart-empty").hidden = cart.length > 0;

  $("#cart-footer").hidden = cart.length === 0;


  // Display cart items.
  $("#cart-items").innerHTML = cart.map(line => {

    const product = CATALOG.get(line.pid);

    const details = describeSel(line.sel);

    const customizable = !!getRules(product);


    return `

      <div class="line">


        <div class="line-top">

          <span>${esc(product.name)}</span>

          <span>${fmt(lineUnit(line) * line.qty)}</span>

        </div>


        <ul>

          <li>Base: ${fmt(product.price)}</li>

          ${details.map(detail => `

            <li>${esc(detail)}</li>

          `).join("")}

        </ul>


        <div class="line-actions">


          <div class="qty">

            <button
              type="button"
              data-dec="${esc(line.key)}"
              aria-label="Decrease quantity of ${esc(product.name)}"
            >−</button>


            <span aria-live="polite">${line.qty}</span>


            <button
              type="button"
              data-inc="${esc(line.key)}"
              aria-label="Increase quantity of ${esc(product.name)}"
            >+</button>

          </div>


          ${customizable ? `

            <button
              type="button"
              class="link"
              data-edit="${esc(line.key)}"
            >Edit</button>

          ` : ""}


          <button
            type="button"
            class="link"
            data-remove="${esc(line.key)}"
          >Remove</button>


        </div>

      </div>

    `;

  }).join("");


  // Calculate subtotal and delivery fee.
  const subtotal = cartSubtotal();

  const fee = deliveryFee();


  // Display the order total.
  $("#cart-total-rows").innerHTML = `

    <div>

      <span>Subtotal</span>

      <span>${fmt(subtotal)}</span>

    </div>


    ${fee ? `

      <div>

        <span>Delivery fee</span>

        <span>${fmt(fee)}</span>

      </div>

    ` : ""}


    <div class="grand">

      <span>Total</span>

      <span>${fmt(subtotal + fee)}</span>

    </div>

  `;


  // Update checkout button availability.
  syncOrderForm();

}


/* ==========================================================================
   SECTION 16 — CUSTOMER ORDER FORM
   ==========================================================================

   Reads and validates customer details before checkout.

   Expected HTML IDs:
   customer-name
   customer-contact
   customer-area
   customer-address
   customer-note
   cart-customer-fields
   order-type-hint
   whatsapp-order-btn
   whatsapp-hint

   Delivery requires an area and address.
   Pickup does not require delivery details.
   ========================================================================== */


/* --------------------------------------------------------------------------
   16.1 — READ CUSTOMER DETAILS
   -------------------------------------------------------------------------- */

function readOrder() {

  const value = id => $("#" + id).value.trim();


  return {

    type: D.type,

    name: value("customer-name"),

    phone: value("customer-contact"),

    area: value("customer-area"),

    address: value("customer-address"),

    note: value("customer-note")

  };

}


/* --------------------------------------------------------------------------
   16.2 — VALIDATE CUSTOMER DETAILS
   -------------------------------------------------------------------------- */

function orderProblem(order) {

  if (!cart.length) {

    return "Your cart is empty.";

  }


  if (!order.type) {

    return "Please choose Delivery or Pickup.";

  }


  if (order.name.length < 2) {

    return "Please enter your name.";

  }


  if (!/^\+?[\d\s-]{7,20}$/.test(order.phone)) {

    return "Please enter a valid contact number.";

  }


  if (order.type === "delivery") {

    if (!order.area) {

      return "Please enter your delivery area.";

    }


    if (order.address.length < 3) {

      return "Please enter your delivery address.";

    }

  }


  return "";

}


/* --------------------------------------------------------------------------
   16.3 — UPDATE THE ORDER FORM
   -------------------------------------------------------------------------- */

function syncOrderForm() {

  // Show which order type is selected.
  $$(".order-type-btn").forEach(button => {

    button.setAttribute(

      "aria-checked",

      String(button.dataset.type === D.type)

    );

  });


  // Show or hide customer fields.
  $("#order-type-hint").hidden = !!D.type;

  $("#cart-customer-fields").hidden = !D.type;


  // Show delivery-only fields when Delivery is selected.
  $$("[data-delivery-only]").forEach(element => {

    element.hidden = D.type !== "delivery";

  });


  // Enable checkout only when the order is valid.
  const problem = orderProblem(readOrder());

  $("#whatsapp-order-btn").disabled = !!problem;


  $("#whatsapp-hint").textContent =

    D.type && problem

      ? problem

      : DEFAULT_HINT;

}


/* ==========================================================================
   SECTION 17 — WHATSAPP CHECKOUT
   ==========================================================================

   Builds the order message and opens WhatsApp.

   The customer must press Send in WhatsApp to submit the order.

   The restaurant WhatsApp number is controlled in SECTION 1.
   ========================================================================== */


/* --------------------------------------------------------------------------
   17.1 — BUILD ORDER MESSAGE
   -------------------------------------------------------------------------- */

function buildWhatsAppMessage(order) {

  const isDelivery = order.type === "delivery";

  const subtotal = cartSubtotal();

  const fee = isDelivery

    ? CONFIG.restaurant.deliveryFee

    : 0;


  const lines = [

    `*New order – ${CONFIG.restaurant.name}*`,

    "",

    `*Order type:* ${isDelivery ? "Delivery" : "Pickup"}`,

    `Name: ${order.name}`,

    `Phone: ${order.phone}`

  ];


  // Include delivery information only for delivery orders.
  if (isDelivery) {

    lines.push(

      `Delivery area: ${order.area}`,

      `Delivery address: ${order.address}`

    );

  }


  if (order.note) {

    lines.push(`Additional note: ${order.note}`);

  }


  lines.push("", "*Items*");


  // Add each cart item and its customization details.
  cart.forEach((line, index) => {

    const product = CATALOG.get(line.pid);

    const selection = line.sel;

    const unitPrice = lineUnit(line);


    lines.push(

      `${index + 1}. ${product.name} × ${line.qty}`,

      `   Base price: ${fmt(product.price)}`

    );


    if (selection.boba) {

      lines.push(

        `   Boba: ${CONFIG.boba[selection.boba].label}` +

        (

          selection.boba === "popping" && selection.flavour

            ? " – " + selection.flavour

            : ""

        ) +

        " (free)"

      );

    }


    if (selection.toppings.length) {

      lines.push(

        `   Toppings: ${selection.toppings.join(", ")} ` +

        `(${fmt(selection.toppings.length * CONFIG.toppings.price)})`

      );

    }


    if (selection.extra) {

      lines.push(

        `   ${CONFIG.extraBoba.label}: ` +

        `${fmt(CONFIG.extraBoba.price)}`

      );

    }


    lines.push(

      `   Price each: ${fmt(unitPrice)} | ` +

      `Item total: ${fmt(unitPrice * line.qty)}`

    );

  });


  // Final order totals.
  lines.push(

    "",

    `Subtotal: ${fmt(subtotal)}`

  );


  if (isDelivery) {

    lines.push(`Delivery fee: ${fmt(fee)}`);

  }


  lines.push(`*TOTAL: ${fmt(subtotal + fee)}*`);


  return lines.join("\n");

}


/* --------------------------------------------------------------------------
   17.2 — OPEN WHATSAPP WITH THE ORDER
   -------------------------------------------------------------------------- */

function sendOrder() {

  const order = readOrder();

  const problem = orderProblem(order);

  const hint = $("#whatsapp-hint");


  if (problem) {

    hint.textContent = problem;

    return;

  }


  // Remove any spaces or symbols from the restaurant number.
  const number = String(CONFIG.restaurant.whatsapp)

    .replace(/\D/g, "");


  if (!number) {

    hint.textContent =
      "Restaurant WhatsApp number is not configured.";

    return;

  }


  const message = buildWhatsAppMessage(order);


  window.open(

    `https://wa.me/${number}?text=${encodeURIComponent(message)}`,

    "_blank",

    "noopener"

  );


  hint.textContent =
    "WhatsApp opened — please tap Send there to place your order.";

}


/* ==========================================================================
   SECTION 18 — EVENT LISTENERS AND BUTTON ACTIONS
   ==========================================================================

   Connects HTML buttons and form inputs to the functions above.

   Important:
   The existing data attributes and HTML IDs must remain unchanged.
   ========================================================================== */


/* --------------------------------------------------------------------------
   18.1 — ADD-TO-CART ENTRY POINT
   -------------------------------------------------------------------------- */

function handleAdd(productId) {

  const product = CATALOG.get(productId);


  // Do not allow products with unconfirmed prices into the cart.
  if (!product || typeof product.price !== "number") {

    return;

  }


  // Open customization when the product supports it.
  if (getRules(product)) {

    openModal(product);

  } else {

    addLine(product, null, 1);

    bump();

  }

}


/* --------------------------------------------------------------------------
   18.2 — MAIN BUTTON HANDLER
   -------------------------------------------------------------------------- */

document.addEventListener("click", event => {

  const button = event.target.closest("button");

  if (!button) return;


  // Add a menu product.
  if (button.dataset.add) {

    handleAdd(button.dataset.add);

  }


  // Increase or decrease cart quantity.
  else if (button.dataset.inc) {

    changeQty(button.dataset.inc, 1);

  }

  else if (button.dataset.dec) {

    changeQty(button.dataset.dec, -1);

  }


  // Remove a cart item.
  else if (button.dataset.remove) {

    removeLine(button.dataset.remove);

  }


  // Edit a customized cart item.
  else if (button.dataset.edit) {

    const line = cart.find(

      item => item.key === button.dataset.edit

    );


    if (line) {

      openModal(

        CATALOG.get(line.pid),

        line.sel,

        line.key,

        line.qty

      );

    }

  }


  // Open or close the cart.
  else if (button.id === "cart-toggle-btn") {

    openCart();

  }

  else if (button.id === "cart-close-btn") {

    closeCart();

  }


  // Return to the menu.
  else if (button.id === "cart-browse-btn") {

    closeCart();

    $("#menuRoot").scrollIntoView({

      behavior: "smooth"

    });

  }


  // Choose Delivery or Pickup.
  else if (button.classList.contains("order-type-btn")) {

    D.type = button.dataset.type;

    renderCart();

  }


  // Submit the order through WhatsApp.
  else if (button.id === "whatsapp-order-btn") {

    sendOrder();

  }


  // Clear the complete cart.
  else if (button.id === "clear-cart-btn") {

    if (confirm("Remove all items from your cart?")) {

      cart = [];

      commitCart();

    }

  }


  // Clear boba customization.
  else if (button.id === "bobaClear") {

    M.sel.boba = null;

    M.sel.flavour = null;

    syncModalInputs();

    updateModal();

  }


  // Close customization modal.
  else if (button.id === "cmClose") {

    closeModal();

  }


  // Add or update the customized product.
  else if (button.id === "cmAdd") {

    const calculation = calcPrice(M.prod, M.sel);


    if (needsFlavour(M.prod, calculation.sel)) {

      return updateModal(
        "Please choose a popping boba flavour."
      );

    }


    const editing = !!M.editKey;


    if (editing) {

      replaceLine(

        M.editKey,

        M.prod,

        calculation.sel,

        M.editQty

      );

    } else {

      addLine(

        M.prod,

        calculation.sel,

        1

      );

    }


    closeModal();


    if (!editing) {

      bump();

    }

  }

});


/* --------------------------------------------------------------------------
   18.3 — CART OVERLAY
   -------------------------------------------------------------------------- */

// Close the cart when the overlay is clicked.
$("#cart-overlay").addEventListener(

  "click",

  closeCart

);


/* --------------------------------------------------------------------------
   18.4 — CUSTOMIZATION MODAL
   -------------------------------------------------------------------------- */

// Close the modal when the backdrop itself is clicked.
$("#customModal").addEventListener("click", event => {

  if (event.target === event.currentTarget) {

    closeModal();

  }

});


// Update customizations whenever an option changes.
$("#cmBody").addEventListener(

  "change",

  onModalChange

);


/* --------------------------------------------------------------------------
   18.5 — CUSTOMER FORM
   -------------------------------------------------------------------------- */

// Revalidate checkout as the customer enters details.
$("#cart-customer-fields").addEventListener(

  "input",

  syncOrderForm

);


/* --------------------------------------------------------------------------
   18.6 — ESCAPE KEY
   -------------------------------------------------------------------------- */

// Close the cart with Escape, unless the customization modal is open.
document.addEventListener("keydown", event => {

  if (

    event.key === "Escape" &&

    !drawer().hidden &&

    !$("#customModal").open

  ) {

    closeCart();

  }

});


/* ==========================================================================
   SECTION 19 — APPLICATION INITIALIZATION
   ==========================================================================

   Runs when this script is loaded.

   Order:
   1. Update restaurant information.
   2. Generate category navigation.
   3. Render the menu.
   4. Load saved cart items.
   5. Render the cart.
   6. Start category tracking.

   Keep this section at the bottom of the file.
   ========================================================================== */

bindBrand();

renderCategories();

renderMenu();

loadCart();

renderCart();

watchCategories();
