/* ==========================================================================
   BOBA BEAR — DIGITAL MENU
   File: script.js

   PURPOSE
   This file controls:
   - Restaurant information
   - Menu categories, products, descriptions and prices
   - Boba, flavour and topping customization
   - Price calculations
   - Category navigation
   - Displaying the digital menu

   HOW TO EDIT THIS FILE
   1. Restaurant details: edit SECTION 1.
   2. Boba and toppings: edit SECTION 2.
   3. Products and prices: edit SECTION 3.
   4. Menu behaviour: edit the remaining sections only if needed.

   IMPORTANT
   - Keep product names and category IDs unique where possible.
   - Use null for an unconfirmed price.
   - Do not remove functions unless you know they are no longer needed.
   - If your Order Online page uses script2.js, update its menu data too.
   ========================================================================== */


/* ==========================================================================
   SECTION 1 — RESTAURANT CONFIGURATION
   ==========================================================================

   EDIT THIS SECTION TO CHANGE YOUR RESTAURANT DETAILS.

   WhatsApp number:
   - Include the country code.
   - Use digits only.
   - Example: 255712345678

   Delivery fee:
   - Enter the fee in Tanzanian Shillings.
   - This setting is for Delivery orders only.
   ========================================================================== */

const CONFIG = {

  restaurant: {

    name: "Boba Bear",

    tagline: "Pop it. Sip it. Love it.",

    whatsapp: "255000000000",

    address: "[Add restaurant address]",

    phone: "[Add telephone number]",

    hours: "[Add opening hours]",

    // Add social media links here.
    // Example:
    // { label: "Instagram", url: "https://instagram.com/yourpage" }

    socials: [],

    deliveryNote: "Home Delivery Available",

    deliveryFee: 0

  },


  // Currency displayed beside prices.
  currency: "TSh",


  // Maximum quantity allowed per item.
  maxQty: 99,


  /* ------------------------------------------------------------------------
     BOBA OPTIONS
     ------------------------------------------------------------------------

     Popping Boba:
     Customers can select a flavour from the list below.

     Chewy Boba:
     Tapioca is the available option.

     requireFlavourForPopping:
     true  = customers must choose a popping boba flavour.
     false = customers can select popping boba without a flavour.
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


    requireFlavourForPopping: true

  },


  /* ------------------------------------------------------------------------
     TOPPINGS
     ------------------------------------------------------------------------

     price = price per topping
     max   = maximum number of toppings per drink
     list  = available topping options

     Change the price or list here.
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


  // Optional paid extra, separate from the selected boba type.

  extraBoba: {

    label: "Extra Boba / Tapioca",

    price: 1000

  },


  /* ------------------------------------------------------------------------
     DEFAULT CUSTOMIZATION RULES
     ------------------------------------------------------------------------

     true  = enabled by default for eligible categories.
     false = disabled by default.

     Individual categories and products can override these settings.
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

   Use p() when adding menu items.

   Format:
   p("Product name", price, "Description")

   Examples:
   p("Mango Milk", 12000)
   p("Strawberry Milk", 11000, "Fresh strawberry milk")

   If the price is not confirmed, use null:
   p("New Drink", null, "Drink description")

   Optional fourth argument:
   p("New Drink", 12000, "Description", { custom: false })

   The fourth argument can also contain { check: true } to mark an
   item whose price or information needs checking.

   Do not type TSh into the numeric price.
   ========================================================================== */

const p = (name, price, desc = "", extra = {}) => ({
  name,
  price,
  desc,
  ...extra
});


/* ==========================================================================
   SECTION 3 — MENU DATA
   ==========================================================================

   THIS IS THE MAIN SECTION YOU WILL EDIT WHEN UPDATING THE MENU.

   Each category contains:
   - id: unique identifier used by the website
   - name: category name displayed to customers
   - icon: category emoji
   - tint: category colour (if used by your HTML/CSS)
   - custom: customization settings
   - note: optional message displayed above the products
   - items: products in that category

   ADD A PRODUCT:
   Add another p("Product name", price, "Description") inside the
   appropriate category's items array.

   ADD A CATEGORY:
   Copy an existing category object and change its id, name and items.

   REMOVE A PRODUCT:
   Remove its p(...) entry, including the correct comma.

   CHANGE A PRICE:
   Edit the number inside the product's p(...) entry.

   CUSTOMIZATION:
   custom: ON     = use default customization settings
   custom: false  = no customization for that category

   A product can override its category's customization settings.

   NOTE:
   Some products below have null prices because the original menu
   information was unclear. Confirm those prices before publishing.
   ========================================================================== */

const MENU = [

  /* ------------------------------------------------------------------------
     CATEGORY 1 — WEEKEND SPECIALS · MILK
     ------------------------------------------------------------------------ */

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


  /* ------------------------------------------------------------------------
     CATEGORY 2 — KUNAFA
     ------------------------------------------------------------------------ */

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


  /* ------------------------------------------------------------------------
     CATEGORY 3 — ICE CREAM
     ------------------------------------------------------------------------ */

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


  /* ------------------------------------------------------------------------
     CATEGORY 4 — MILK
     ------------------------------------------------------------------------ */

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


  /* ------------------------------------------------------------------------
     CATEGORY 5 — SLUSHY
     ------------------------------------------------------------------------ */

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


  /* ------------------------------------------------------------------------
     CATEGORY 6 — FIZZY
     ------------------------------------------------------------------------ */

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


  /* ------------------------------------------------------------------------
     CATEGORY 7 — FRUIT TEA
     ------------------------------------------------------------------------ */

  {
    id: "fruit-tea",
    name: "Fruit Tea",
    icon: "🍹",
    tint: "#fde4c8",
    custom: false,

    items: [

      p("Mango dream", 8000,
        "Mango + Orange"),

      p("Summer blaze", 10000,
        "Strawberry + Blueberry"),

      p("Super melon", 8000,
        "Watermelon + strawberry"),

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


  /* ------------------------------------------------------------------------
     CATEGORY 8 — CHOCOLATE
     ------------------------------------------------------------------------ */

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


  /* ------------------------------------------------------------------------
     CATEGORY 9 — MILK TEA
     ------------------------------------------------------------------------ */

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

   These functions are used throughout the website.
   You normally do not need to edit them when changing menu items.
   ========================================================================== */

// Find one element.
const $ = (selector, root = document) =>
  root.querySelector(selector);


// Find multiple elements and return them as an array.
const $$ = (selector, root = document) =>
  [...root.querySelectorAll(selector)];


// Safely escape text before inserting it into HTML.
const esc = value =>
  String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);


// Format prices using the configured currency.
const fmt = amount =>
  `${CONFIG.currency} ${Number(amount).toLocaleString("en-US")}`;


// Convert product or category names into URL-friendly identifiers.
const slug = value =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");


/* ==========================================================================
   SECTION 5 — PRODUCT CATALOG
   ==========================================================================

   Automatically creates a catalog of all products.

   Each product receives:
   - A unique ID
   - A reference to its category

   Other website features can use these IDs to identify products.
   ========================================================================== */

const CATALOG = new Map();

MENU.forEach(category => {

  category.items.forEach(item => {

    // Generate the product ID from its category and name.
    item.id = `${category.id}-${slug(item.name)}`;

    // Keep a reference to the product's parent category.
    item.cat = category;

    // Warn developers if an ID already exists.
    if (CATALOG.has(item.id)) {
      console.error("Duplicate product ID:", item.id);
    }

    CATALOG.set(item.id, item);

  });

});


/* ==========================================================================
   SECTION 6 — CUSTOMIZATION RULES
   ==========================================================================

   Determines which products allow boba, toppings and extra boba.

   A product's own customization settings take priority over its
   category's settings.

   Examples:
   - custom: false disables customization.
   - custom: ON uses the default settings.
   - custom: { boba: true, toppings: false, extraBoba: false }
     enables only boba customization.
   ========================================================================== */

function getRules(product) {

  const settings =
    product.custom !== undefined
      ? product.custom
      : product.cat.custom;

  // No customization for this product.
  if (!settings) return null;

  const rules = {

    boba: !!settings.boba,

    toppings: !!settings.toppings,

    extraBoba: !!settings.extraBoba,

    // Use the product's own flavour list if one is supplied.
    poppingFlavours:
      settings.poppingFlavours || CONFIG.boba.popping.flavours

  };

  // Return null if every customization option is disabled.
  return (
    rules.boba ||
    rules.toppings ||
    rules.extraBoba
  ) ? rules : null;

}


/* ==========================================================================
   SECTION 7 — CUSTOMER SELECTION DEFAULTS
   ========================================================================== */

// Default selection before a customer customizes a product.
const emptySel = () => ({

  boba: null,

  flavour: null,

  toppings: [],

  extra: false

});


/* ==========================================================================
   SECTION 8 — VALIDATE CUSTOMER CUSTOMIZATIONS
   ==========================================================================

   Prevents invalid selections, unsupported flavours, duplicate toppings
   and selections exceeding the configured topping limit.

   Keep this validation even if the interface already restricts choices.
   ========================================================================== */

function sanitize(product, selection) {

  const rules = getRules(product);

  const output = emptySel();

  // Return an empty selection if customization is disabled.
  if (!rules || !selection) return output;


  // Validate the selected boba type.
  if (
    rules.boba &&
    (
      selection.boba === "popping" ||
      selection.boba === "chewy"
    )
  ) {

    output.boba = selection.boba;

    if (selection.boba === "chewy") {

      // Chewy boba uses its only available option.
      output.flavour = CONFIG.boba.chewy.flavours[0];

    } else if (
      rules.poppingFlavours.includes(selection.flavour)
    ) {

      // Only accept an allowed popping boba flavour.
      output.flavour = selection.flavour;

    }

  }


  // Validate and limit toppings.
  if (rules.toppings && Array.isArray(selection.toppings)) {

    output.toppings = [...new Set(selection.toppings)]

      // Remove toppings not present in the configuration.
      .filter(topping =>
        CONFIG.toppings.list.includes(topping)
      )

      // Enforce the maximum topping count.
      .slice(0, CONFIG.toppings.max);

  }


  // Extra boba is allowed only if the product supports it.
  output.extra = !!(
    rules.extraBoba && selection.extra
  );


  return output;

}


/* ==========================================================================
   SECTION 9 — PRICE CALCULATIONS
   ==========================================================================

   Calculates:
   - Base product price
   - Total topping charges
   - Extra boba charge
   - Final unit price

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


/* ==========================================================================
   SECTION 10 — PRODUCT LINE IDENTIFICATION
   ==========================================================================

   Creates a key identifying a product and its selected customizations.

   This helps ordering functionality distinguish the same drink with
   different flavours or toppings.

   Do not change this unless you are also updating the order/cart code.
   ========================================================================== */

const lineKey = (productId, selection) => [

  productId,

  selection.boba || "",

  selection.flavour || "",

  [...selection.toppings].sort().join("+"),

  selection.extra ? "x" : ""

].join("|");


/* ==========================================================================
   SECTION 11 — POPPING BOBA FLAVOUR VALIDATION
   ========================================================================== */

const needsFlavour = (product, selection) =>

  CONFIG.boba.requireFlavourForPopping &&

  selection.boba === "popping" &&

  !selection.flavour;


/* ==========================================================================
   SECTION 12 — RESTAURANT BRANDING
   ==========================================================================

   Updates restaurant details wherever HTML elements use data-bind.

   Example HTML:
   <span data-bind="name"></span>
   <span data-bind="address"></span>
   <span data-bind="phone"></span>

   The value inside data-bind must match a property in CONFIG.restaurant.
   ========================================================================== */

function bindBrand() {

  const restaurant = CONFIG.restaurant;


  // Update restaurant information in the HTML.
  $$("[data-bind]").forEach(element => {

    element.textContent =
      restaurant[element.dataset.bind] ?? "";

  });


  // Display social media links.
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


  // Automatically update the copyright year.
  const yearElement = $("#year");

  if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

  }


  // Set the browser tab title.
  const pageTitle = document.documentElement.dataset.title;

  document.title = pageTitle

    ? `${restaurant.name} — ${pageTitle}`

    : restaurant.name;

}


/* ==========================================================================
   SECTION 13 — CATEGORY NAVIGATION
   ==========================================================================

   Automatically generates the category links at the top of the menu.

   The HTML must contain an element with id="catNav".
   ========================================================================== */

function renderCategories() {

  const categories = [

    ...MENU.map(category => [
      category.id,
      category.name
    ]),

    // Additional navigation link for boba and toppings.
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
   SECTION 14 — BOBA AND TOPPINGS INFORMATION
   ==========================================================================

   Displays the available boba flavours, jelly options and toppings.

   These are informational options. Actual product customization is
   controlled separately by the rules in SECTION 6.
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
   SECTION 15 — ACTIVE CATEGORY TRACKING
   ==========================================================================

   Highlights the category currently visible while the customer scrolls.

   Requires:
   - A .cat element for every menu category.
   - A #catNav element containing category links.
   - An IntersectionObserver-supported browser.
   ========================================================================== */

function watchCategories() {

  const categoryLinks = $$("#catNav a");


  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) return;


      // Highlight the active category link.
      categoryLinks.forEach(link => {

        link.classList.toggle(

          "active",

          link.dataset.cat ===
            entry.target.id.replace("cat-", "")

        );

      });


      // Keep the active navigation link visible.
      $(".cat-nav a.active")?.scrollIntoView({

        block: "nearest",

        inline: "center"

      });

    });

  }, {

    rootMargin: "-130px 0px -70% 0px"

  });


  // Observe all menu categories.
  $$(".cat").forEach(section => {

    observer.observe(section);

  });

}


/* ==========================================================================
   SECTION 16 — MENU PRODUCT DISPLAY
   ==========================================================================

   Controls how individual products appear in the menu.

   Products with a confirmed numeric price display that price.
   Products with a null price display "Price TBC".

   The existing HTML/CSS classes are preserved.
   ========================================================================== */

const row = product => `

  <li class="menu-row">

    <div>

      <b>${esc(product.name)}</b>

      ${product.desc ? `

        <small>${esc(product.desc)}</small>

      ` : ""}

    </div>


    ${
      typeof product.price === "number"

        ? `<span class="price">${fmt(product.price)}</span>`

        : `<span class="price tbc">Price TBC</span>`
    }

  </li>

`;


/* ==========================================================================
   SECTION 17 — RENDER THE COMPLETE MENU
   ==========================================================================

   Builds the menu category sections and their product lists.

   The HTML must contain an element with id="menuRoot".
   ========================================================================== */

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

        ${category.items.map(row).join("")}

      </ul>

    </section>

  `).join("") + addonsSection();

}


/* ==========================================================================
   SECTION 18 — START THE APPLICATION
   ==========================================================================

   Runs the functions needed to display the digital menu.

   Keep this section at the bottom of the file.
   ========================================================================== */

// 1. Update restaurant information.
bindBrand();

// 2. Generate category navigation.
renderCategories();

// 3. Display all menu categories and products.
renderMenu();

// 4. Track the active category while scrolling.
watchCategories();
