/* =========================================================================
   BOBA BAY — TABLE MENU
   File: script.js

   PURPOSE
   -------------------------------------------------------------------------
   This file controls:
   - Restaurant information
   - Menu categories and products
   - Prices and descriptions
   - Category navigation
   - Boba and topping information
   - Active category tracking
   - Digital menu rendering

   COMPATIBLE WITH:
   - Current Boba Bay Table Menu HTML
   - Current Boba Bay style.css / style1.css

   NOTE:
   This is the TABLE MENU version.
   Ordering/cart/customisation functionality is not included here.
   ========================================================================== */


/* =========================================================================
   SECTION 1 — RESTAURANT CONFIGURATION
   ========================================================================= */

const CONFIG = {

  restaurant: {

    name: "Boba Bay",

    tagline: "Ride the Wave of FLavor.",

    whatsapp: "255000000000",

    address: "[Add restaurant address]",

    phone: "[Add telephone number]",

    hours: "[Add opening hours]",

    socials: [],

    deliveryNote: "Home Delivery Available",

    deliveryFee: 0

  },

  currency: "TSh"

};


/* =========================================================================
   SECTION 2 — BOBA AND TOPPING INFORMATION
   ========================================================================= */

const BOBA = {

  popping: [
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
  ],

  chewy: [
    "Tapioca"
  ]

};


const TOPPINGS = {

  price: 1000,

  list: [
    "Strawberry Chunks",
    "Marshmallows",
    "Chocolate Sprinkles",
    "Whipped Cream",
    "Toasted Nuts",
    "Oreo Crumbs"
  ]

};


const JELLY = [
  "Rainbow Jelly",
  "Coffee Jelly"
];


const EXTRA_BOBA_PRICE = 1000;


/* =========================================================================
   SECTION 3 — PRODUCT HELPER
   ========================================================================= */

const p = (name, price, desc = "", extra = {}) => ({
  name,
  price,
  desc,
  ...extra
});


/* =========================================================================
   SECTION 4 — MENU DATA
   ========================================================================= */

const MENU = [

  /* -----------------------------------------------------------------------
     WEEKEND SPECIALS · MILK
     ----------------------------------------------------------------------- */

  {
    id: "weekend-milk",
    name: "Weekend Specials · Milk",
    icon: "☕",
    tint: "#f3e6d0",

    items: [

      p(
        "Classic Frappuccino",
        12000,
        "Iced coffee with a shot of espresso topped with whipped cream. Choice of caramel or chocolate drizzle"
      ),

      p(
        "Caramel Frappuccino",
        12000,
        "Caramel iced coffee with a shot of espresso topped with whipped cream and caramel drizzles"
      ),

      p(
        "Hazelnut Frappuccino",
        13000,
        "Hazelnut iced coffee with a shot of espresso topped with whipped cream and chocolate drizzles"
      ),

      p(
        "Pistachio Falooda",
        13000,
        "Pistachio milkshake with fresh vegan jelly, vermicelli and sabja seeds"
      ),

      p(
        "Rose Falooda",
        12000,
        "Rose milkshake with fresh vegan jelly, vermicelli and sabja seeds"
      ),

      p(
        "Strawberry Falooda",
        12000,
        "Strawberry milkshake with fresh vegan jelly, vermicelli and sabja seeds"
      ),

      p(
        "Coffee Falooda",
        12000,
        "Coffee milkshake with fresh vegan jelly, vermicelli and sabja seeds"
      ),

      p(
        "Iced Matcha",
        12000,
        "Iced matcha with whipped cream."
      ),

      p(
        "Iced Matcha Latte",
        12000,
        "Iced matcha with a shot of espresso topped with whipped cream."
      ),

      p(
        "Iced Latte",
        10000
      )

    ]
  },


  /* -----------------------------------------------------------------------
     KUNAFA
     ----------------------------------------------------------------------- */

  {
    id: "kunafa",
    name: "Kunafa",
    icon: "🥮",
    tint: "#f6e3b9",

    items: [

      p(
        "Kunafa Milkshake",
        15000,
        "Crispy kunafa, chocolate milkshake and pistachio milkshake"
      ),

      p(
        "Kunafa Ice-Cream",
        15000,
        "Crispy kunafa, chocolate milkshake and pistachio milkshake"
      )

    ]
  },


  /* -----------------------------------------------------------------------
     ICE CREAM
     ----------------------------------------------------------------------- */

  {
    id: "ice-cream",
    name: "Ice Cream",
    icon: "🍦",
    tint: "#fbe0ea",

    note:
      "Prices for Boba Ice Creams (Cup / Cone) are unclear. Inaara Ice Cream has no price shown. Please confirm.",

    items: [

      p(
        "Boba Ice Creams – Cup",
        null,
        "Topped with Fruit or Tapioca Boba"
      ),

      p(
        "Boba Ice Creams – Cone",
        null,
        "Topped with Fruit or Tapioca Boba"
      ),

      p(
        "Inaara Ice Cream",
        null,
        "Half milkshake, half ice-cream. Your choice of milkshake and ice-cream topped with tapioca or popping boba. Ask the server for the flavour of the day."
      )

    ]
  },


  /* -----------------------------------------------------------------------
     MILK
     ----------------------------------------------------------------------- */

  {
    id: "milk",
    name: "Milk",
    icon: "🥛",
    tint: "#efe6fb",

    note:
      "Prices/descriptions for Strawberries & Cream and Strawberry Jasmine Milk need confirming.",

    items: [

      p(
        "Caramel",
        11000,
        "Keep it smooth and creamy with our Caramel Milk Tea."
      ),

      p(
        "Coffee",
        11000,
        "The perfect pick-me-up to start the day"
      ),

      p(
        "Matcha",
        12000,
        "When life's feeling evergreen, match it with our Matcha Milk Tea"
      ),

      p(
        "Lotus",
        12000,
        "A refreshing and indulgent Summer iced drink for all Lotus lovers!"
      ),

      p(
        "Sakura",
        12000,
        "It's definitely a drink for sakura lovers, as you'll be treated to the scent of sakura every time you take a sip"
      ),

      p(
        "Blueberry",
        13000,
        "Unique blend of blueberry milkshake!"
      ),

      p(
        "Blue Velvet",
        12000,
        "A twist on the classic red velvet. A must try!"
      ),

      p(
        "Kiwi Delight",
        12000,
        "Low calories, high in fiber and very tasty!"
      ),

      p(
        "Red Velvet",
        12000,
        "Perfect for anyone who loves a good red velvet cake"
      ),

      p(
        "Unicorn Fluff",
        13000,
        "Perfect blend of Strawberry, Blueberry and bubblegum Milk"
      ),

      p(
        "Tiramisu",
        13000
      ),

      p(
        "Kahlua",
        11000,
        "Sweet creamy coffee"
      ),

      p(
        "Vanilla",
        11000
      ),

      p(
        "Bubble Gum",
        11000,
        "Take a trip down memory lane with this cool infusion. It's a nostalgic, caffeine-free indulgence that everyone can enjoy"
      ),

      p(
        "Acai Smoothie",
        12000,
        "Acai. Our absolute favorite"
      ),

      p(
        "Creamy Mango",
        12000,
        "Mango milkshake with whipped cream"
      ),

      p(
        "Pistachio",
        13000
      ),

      p(
        "Taro",
        12000,
        "Give yourself a Taro-fic treat with our loveable Taro milk tea"
      ),

      p(
        "Blueberry Swirl",
        14000,
        "Blueberry milkshake with whipped cream and blueberry jam"
      ),

      p(
        "Bamboo Charcoal",
        13000,
        "Vanilla + bamboo charcoal"
      ),

      p(
        "Rose",
        12000,
        "Rose milkshake"
      ),

      p(
        "Hedwig",
        11000,
        "Vanilla Frappe"
      ),

      p(
        "Inaara Strawberry",
        12000,
        "Strawberry milk with strawberry chunks"
      ),

      p(
        "Strawberry",
        11000,
        "Sweet, creamy, full bodied strawberry drink"
      ),

      p(
        "Strawberries & Cream",
        12000,
        "Strawberry milkshake, whipped cream and strawberry topping. Description needs confirming."
      ),

      p(
        "Strawberry Jasmine Milk",
        null,
        "Price needs confirming."
      )

    ]
  },


  /* -----------------------------------------------------------------------
     SLUSHY
     ----------------------------------------------------------------------- */

  {
    id: "slushy",
    name: "Slushy",
    icon: "🧊",
    tint: "#d8ecf8",

    items: [

      p("Icey Lemon", 8000),

      p("Apple Burst", 8000),

      p("Winter Blaze", 10000),

      p("Red Grape", 10000),

      p("Bloody Vampire", 10000, "Cranberry Slush"),

      p("Witches Brew", 10000, "Kiwi Slush"),

      p(
        "Poison Apple",
        8000,
        "Apple Burst + Icey Lemon with a hint of Blood (Grape)"
      ),

      p(
        "Jack Frost",
        10000,
        "Winter Blaze + Icey Lemon + Grape Slush"
      ),

      p(
        "Strawberry Blush",
        10000,
        "Strawberry + Orange"
      ),

      p(
        "Mango Berry",
        10000,
        "Mango + blackberry"
      ),

      p(
        "Mixed Berry",
        10000,
        "Mixed berry is a perfect blend of all delicious berries"
      ),

      p(
        "Pink Lemonade",
        10000,
        "Strawberry and lemon slush"
      ),

      p(
        "Blue Lemonade",
        10000,
        "Blueberry and lemon slush"
      ),

      p(
        "Boo Berry",
        10000,
        "Strawberry, blueberry and grape slush"
      ),

      p(
        "North Pole",
        10000,
        "Blueberry and lemon slush"
      ),

      p(
        "Gryffindor",
        10000,
        "Vampire and raspberry"
      ),

      p(
        "Hufflepuff",
        10000,
        "Mango and orange"
      ),

      p(
        "Slytherin",
        10000,
        "Kiwi and apple"
      ),

      p(
        "Ravenclaw",
        10000,
        "Winter and blue raspberry"
      ),

      p(
        "Love Struck",
        10000,
        "Strawberry lemonade and Pink lemonade topped with a lemon slice"
      )

    ]
  },


  /* -----------------------------------------------------------------------
     FIZZY
     ----------------------------------------------------------------------- */

  {
    id: "fizzy",
    name: "Fizzy",
    icon: "🫧",
    tint: "#d9f2ea",

    note:
      "Prices for Grape Soda and Energizer need confirming.",

    items: [

      p("Frozen Strawberry Fizz", 8000),

      p("Passionfruit & Mango Fizz", 8000),

      p("Mojito Fizz", 8000),

      p("Red Raspberry Fizz", 8000),

      p(
        "Electric Fizz",
        8000,
        "A much-requested drink and a favorite for the kids. A blue fizzy drink that is super delicious"
      ),

      p(
        "Grape Soda",
        null,
        "Price needs confirming."
      ),

      p(
        "Energizer",
        null,
        "Price needs confirming."
      )

    ]
  },


  /* -----------------------------------------------------------------------
     FRUIT TEA
     ----------------------------------------------------------------------- */

  {
    id: "fruit-tea",
    name: "Fruit Tea",
    icon: "🍹",
    tint: "#fde4c8",

    items: [

      p("Mango Dream", 8000, "Mango + Orange"),

      p("Summer Blaze", 10000, "Strawberry + Blueberry"),

      p("Super Melon", 8000, "Watermelon + Strawberry"),

      p(
        "Passionfruit Sunrise",
        10000,
        "Passion + Mango + Strawberry"
      ),

      p(
        "Hawaii",
        10000,
        "Pineapple + Mango + Passion juice"
      ),

      p(
        "Caribbean Love",
        10000,
        "Passion + Peach + Mango"
      ),

      p(
        "Twisted Lemonade",
        8000,
        "Refreshing Strawberry lemonade"
      ),

      p(
        "Spicy Mango",
        8000,
        "Mango with a hint of Chili"
      ),

      p(
        "Tiki Passion",
        10000,
        "Strawberry + Watermelon + Passion + Mango"
      ),

      p(
        "Pina Colada",
        8000,
        "Pineapple + Passion"
      ),

      p(
        "Mango Passion Frappe",
        12000,
        "Mango, Passion and Berries infused drink"
      ),

      p(
        "Peachy Sweetie",
        10000,
        "Peach and strawberry"
      ),

      p(
        "Pomegranate Paradise",
        10000,
        "Mango + Strawberry + Pomegranate + Peach"
      ),

      p(
        "Dragon",
        10000,
        "Mango + Passion + Pomegranate + Raspberry"
      ),

      p(
        "Strawberry Lychee",
        10000,
        "Strawberry + Lychee"
      ),

      p(
        "Treasure Mango",
        10000,
        "Mango, strawberry and peach"
      )

    ]
  },


  /* -----------------------------------------------------------------------
     CHOCOLATE
     ----------------------------------------------------------------------- */

  {
    id: "chocolate",
    name: "Chocolate",
    icon: "🍫",
    tint: "#ead7c8",

    note:
      "Ferrero price needs confirming.",

    items: [

      p("Chocolate", 11000),

      p(
        "Choco Mint",
        12000,
        "Chocolate Milk paired with mint and chocolate chunks"
      ),

      p("Nutella Shake", 12000),

      p(
        "Choco Overload",
        13000,
        "Chocolate Milkshake with Chocolate chunks and extra Chocolate drizzles"
      ),

      p("Hazelnut", 12000),

      p(
        "Oreo",
        12000,
        "Oreo milkshake with Oreo crumbs on top"
      ),

      p(
        "Hazelnut Frappe",
        12000,
        "Hazelnut + coffee"
      ),

      p(
        "Rich and Creamy Coco",
        13000,
        "Rich dark cocoa with whipped cream"
      ),

      p(
        "Chocolate Truffle",
        12000,
        "Chocolate ganache, toasted nuts and coconut"
      ),

      p(
        "Nutcracker",
        12000,
        "Hazelnut and Nutella milk topped with toasted nuts"
      ),

      p(
        "Rudolph",
        12000,
        "KitKat milk topped with whipped cream and KitKat shavings"
      ),

      p(
        "Issac",
        13000,
        "Rich chocolate topped with toasted marshmallows, Oreo crumbs and whipped cream"
      ),

      p(
        "Death by Chocolate",
        13000,
        "Chocolate, Nutella and hazelnut milkshake with chocolate whipped cream, marshmallows and chocolate sprinkles"
      ),

      p(
        "Nimbus 2000",
        13000,
        "Tiramisu and dark chocolate"
      ),

      p(
        "Warm Hug",
        16000,
        "Ferrero Rocher and dark chocolate"
      ),

      p(
        "Minty Mistletoe",
        13000,
        "Minty chocolate topped with whipped cream and chocolate shavings"
      ),

      p(
        "Ferrero",
        16000
      )

    ]
  },


  /* -----------------------------------------------------------------------
     MILK TEA
     ----------------------------------------------------------------------- */

  {
    id: "milk-tea",
    name: "Milk Tea",
    icon: "🍵",
    tint: "#e3ecd2",

    note:
      "Milk Tea prices are not confirmed in the supplied menu. Please confirm prices before publishing.",

    items: [

      p(
        "Assam",
        null,
        "A refreshing Assam tea-based milk tea. Description needs confirming."
      ),

      p(
        "Jasmine",
        null,
        "Aromatic Jasmine Milk Tea. Description needs confirming."
      ),

      p(
        "Oolong",
        null,
        "Dark roasted Oolong Tea with a slight smoky and earthy flavour."
      )

    ]
  }

];


/* =========================================================================
   SECTION 5 — GENERAL HELPERS
   ========================================================================= */

const $ = (selector, root = document) =>
  root.querySelector(selector);


const $$ = (selector, root = document) =>
  [...root.querySelectorAll(selector)];


const esc = value =>
  String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);


const fmt = amount =>
  `${CONFIG.currency} ${Number(amount).toLocaleString("en-US")}`;


/* =========================================================================
   SECTION 6 — RESTAURANT BRANDING
   ========================================================================= */

function bindBrand() {

  const restaurant = CONFIG.restaurant;

  $$("[data-bind]").forEach(element => {

    const key = element.dataset.bind;

    element.textContent =
      restaurant[key] ?? "";

  });


  const yearElement = $("#year");

  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }


  /*
   * The HTML already contains:
   *
   * <title>Boba Bay — Table Menu</title>
   *
   * This also makes the title update automatically if the restaurant
   * name is changed in CONFIG.
   */

  const pageTitle =
    document.documentElement.dataset.title;

  document.title = pageTitle
    ? `${restaurant.name} — ${pageTitle}`
    : restaurant.name;

}


/* =========================================================================
   SECTION 7 — CATEGORY NAVIGATION
   ========================================================================= */

function renderCategories() {

  const nav = $("#catNav");

  if (!nav) return;


  nav.innerHTML = MENU.map(category => `

    <a
      href="#cat-${esc(category.id)}"
      data-cat="${esc(category.id)}"
    >
      ${esc(category.name)}
    </a>

  `).join("") +

  `

    <a
      href="#cat-boba-addons"
      data-cat="boba-addons"
    >
      Boba & Toppings
    </a>

  `;

}


/* =========================================================================
   SECTION 8 — BOBA AND TOPPING INFORMATION
   ========================================================================= */

function chips(options) {

  return `

    <div class="chips">

      ${options.map(option => `

        <span class="chip">
          ${esc(option)}
        </span>

      `).join("")}

    </div>

  `;

}


function addonsSection() {

  return `

    <section
      class="cat"
      id="cat-boba-addons"
    >

      <h3>Boba &amp; Toppings</h3>


      <div class="info-card">

        <h4>Popping Boba</h4>

        ${chips(BOBA.popping)}

      </div>


      <div class="info-card">

        <h4>Chewy Boba</h4>

        ${chips(BOBA.chewy)}

      </div>


      <div class="info-card">

        <h4>Jelly</h4>

        ${chips(JELLY)}

        <p class="desc">
          Jelly prices are not listed.
          Please ask the server for availability and pricing.
        </p>

      </div>


      <div class="info-card">

        <h4>Toppings — ${fmt(TOPPINGS.price)} each</h4>

        ${chips(TOPPINGS.list)}

        <p class="desc">
          Extra Boba / Tapioca:
          ${fmt(EXTRA_BOBA_PRICE)}.
        </p>

      </div>

    </section>

  `;

}


/* =========================================================================
   SECTION 9 — MENU ITEM RENDERING
   ========================================================================= */

function renderProduct(product) {

  const priceHTML =
    typeof product.price === "number"

      ? `
        <span class="price">
          ${fmt(product.price)}
        </span>
      `

      : `
        <span class="price tbc">
          Price TBC
        </span>
      `;


  return `

    <li class="menu-row">

      <div>

        <b>
          ${esc(product.name)}
        </b>

        ${
          product.desc
            ? `
              <small class="desc">
                ${esc(product.desc)}
              </small>
            `
            : ""
        }

      </div>


      <div class="row-end">

        ${priceHTML}

      </div>

    </li>

  `;

}


/* =========================================================================
   SECTION 10 — COMPLETE MENU RENDERING
   ========================================================================= */

function renderMenu() {

  const root = $("#menuRoot");

  if (!root) return;


  const menuHTML = MENU.map(category => `

    <section
      class="cat"
      id="cat-${esc(category.id)}"
    >

      <h3>
        ${esc(category.name)}
      </h3>


      ${
        category.note
          ? `
            <p class="note">
              ⚠️ ${esc(category.note)}
            </p>
          `
          : ""
      }


      <ul class="menu-list">

        ${category.items
          .map(renderProduct)
          .join("")}

      </ul>

    </section>

  `).join("");


  root.innerHTML =
    menuHTML +
    addonsSection();

}


/* =========================================================================
   SECTION 11 — ACTIVE CATEGORY TRACKING
   ========================================================================= */

function watchCategories() {

  const links = $$("#catNav a");

  const sections = $$(".cat");

  if (!links.length || !sections.length) return;


  /*
   * Highlight the category currently visible on screen.
   */

  const observer =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) return;


          const categoryID =
            entry.target.id.replace("cat-", "");


          links.forEach(link => {

            link.classList.toggle(
              "active",
              link.dataset.cat === categoryID
            );

          });


          /*
           * Keep the active category visible
           * inside the horizontal navigation.
           */

          const activeLink =
            $("#catNav a.active");

          if (activeLink) {

            activeLink.scrollIntoView({

              behavior: "smooth",

              block: "nearest",

              inline: "center"

            });

          }

        });

      },

      {
        rootMargin: "-130px 0px -65% 0px",

        threshold: 0

      }

    );


  sections.forEach(section => {

    observer.observe(section);

  });

}


/* =========================================================================
   SECTION 12 — INITIALISE TABLE MENU
   ========================================================================= */

function initMenu() {

  // Restaurant name, tagline and footer bindings.
  bindBrand();

  // Create horizontal category navigation.
  renderCategories();

  // Render all menu products.
  renderMenu();

  // Highlight the category currently being viewed.
  watchCategories();

}


/* =========================================================================
   START
   ========================================================================= */

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    initMenu
  );

} else {

  initMenu();

}
