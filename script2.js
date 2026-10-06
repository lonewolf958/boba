/* ============================================================
   BOBA BAY — ORDER ONLINE
   File: script2.js

   EDIT THESE SECTIONS:
   1. RESTAURANT SETTINGS
   2. BOBA FLAVOURS
   3. TOPPINGS
   4. EXTRAS
   5. MENU

   You normally do NOT need to edit anything below
   the "DO NOT EDIT BELOW" line.
============================================================ */


/* ============================================================
   1. RESTAURANT SETTINGS
============================================================ */

const CONFIG = {

  // Restaurant name
  name: "Boba Bay",

  // WhatsApp number
  // Use country code without +
  whatsapp: "255700000000",

  // Delivery fee
  deliveryFee: 3000,

  // Price for each topping
  toppingPrice: 1000,

  // Maximum number of toppings
  maxToppings: 2,

  // Price for extra boba / tapioca
  extraBobaPrice: 1000,

  // Cart storage name
  storageKey: "bobabay_cart"

};


/* ============================================================
   2. BOBA FLAVOURS
============================================================ */

// Popping boba flavours
const POPPING_FLAVOURS = [
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
];


// Jelly flavours
const JELLY_FLAVOURS = [
  "Rainbow jelly",
  "Coffee jelly"
];


// Boba choices
const BOBA_TYPES = [

  {
    id: "popping",
    name: "Popping Boba",
    note: "",
    label: "Popping boba flavour",
    options: POPPING_FLAVOURS,
    columns: "cols-3"
  },

  {
    id: "chewy",
    name: "Chewy Boba",
    note: "(Tapioca)",
    label: "",
    options: [],
    columns: ""
  },

  {
    id: "jelly",
    name: "Jelly",
    note: "",
    label: "Jelly flavour",
    options: JELLY_FLAVOURS,
    columns: "cols-2"
  }

];


/* ============================================================
   3. TOPPINGS
============================================================ */

const TOPPINGS = [
  "Strawberry Chunks",
  "Marshmallows",
  "Chocolate Sprinkles",
  "Whipped Cream",
  "Toasted Nuts",
  "Oreo Crumbs"
];


/* ============================================================
   4. EXTRAS
============================================================ */

const EXTRAS = [
  {
    name: "Extra Boba / Tapioca",
    price: CONFIG.extraBobaPrice
  }
];


/* ============================================================
   5. MENU
============================================================ */

const MENU_DATA = [

  /* -------------------- WEEKEND SPECIALS -------------------- */

  {
    id: "weekend",
    name: "Weekend Specials",
    custom: true,

    items: [

      {
        name: "Classic Frappuccino",
        description:
          "Iced coffee with a shot of espresso topped with whipped cream. Choice of caramel or chocolate drizzle",
        price: 12000
      },

      {
        name: "Caramel Frappuccino",
        description:
          "Caramel iced coffee with a shot of espresso topped with whipped cream and caramel drizzles",
        price: 12000
      },

      {
        name: "Hazelnut Frappuccino",
        description:
          "Hazelnut iced coffee with a shot of espresso topped with whipped cream and chocolate drizzles",
        price: 13000
      },

      {
        name: "Pistachio Falooda",
        description:
          "Pistachio milkshake with fresh vegan jelly, vermicelli and sabja seeds",
        price: 13000
      },

      {
        name: "Rose Falooda",
        description:
          "Rose milkshake with fresh vegan jelly, vermicelli and sabja seeds",
        price: 12000
      },

      {
        name: "Strawberry Falooda",
        description:
          "Strawberry milkshake with fresh vegan jelly, vermicelli and sabja seeds",
        price: 12000
      },

      {
        name: "Coffee Falooda",
        description:
          "Coffee milkshake with fresh vegan jelly, vermicelli and sabja seeds",
        price: 12000
      },

      {
        name: "Iced Matcha",
        description: "Iced matcha with whipped cream",
        price: 12000
      },

      {
        name: "Iced Matcha Latte",
        description:
          "Iced matcha with a shot of espresso topped with whipped cream",
        price: 12000
      },

      {
        name: "Iced Latte",
        description: "",
        price: 10000
      }

    ]
  },


  /* -------------------- KUNAFA -------------------- */

  {
    id: "kunafa",
    name: "Kunafa",
    custom: false,

    items: [

      {
        name: "Kunafa Milkshake",
        description:
          "Crispy kunafa, chocolate milkshake and pistachio",
        price: 15000
      },

      {
        name: "Kunafa Ice Cream",
        description:
          "Crispy kunafa, chocolate milkshake and pistachio",
        price: 15000
      }

    ]
  },


  /* -------------------- ICE CREAM -------------------- */

  {
    id: "icecream",
    name: "Ice Cream",
    custom: false,

    note:
      "Boba ice creams are topped with fruit or tapioca boba. Tell us your choice in the order note.",

    items: [

      {
        name: "Boba Ice Cream (Cup)",
        description: "Topped with fruit or tapioca boba",
        price: 7000
      },

      {
        name: "Boba Ice Cream (Cone)",
        description: "Topped with fruit or tapioca boba",
        price: 12000
      }

    ]
  },


  /* -------------------- MILK -------------------- */

  {
    id: "milk",
    name: "Milk",
    custom: true,

    items: [

      {
        name: "Caramel",
        description:
          "Keep it smooth and creamy with our Caramel Milk Tea",
        price: 11000
      },

      {
        name: "Coffee",
        description:
          "The perfect pick-me-up to start the day",
        price: 11000
      },

      {
        name: "Matcha",
        description:
          "When life's feeling evergreen, match it with our Matcha Milk Tea",
        price: 12000
      },

      {
        name: "Lotus",
        description:
          "A refreshing and indulgent Summer iced drink for all Lotus lovers!",
        price: 12000
      },

      {
        name: "Sakura",
        description:
          "A drink for sakura lovers. You'll be treated to the scent of sakura every time you take a sip",
        price: 12000
      },

      {
        name: "Blueberry",
        description:
          "Unique blend of blueberry milkshake!",
        price: 13000
      },

      {
        name: "Blue Velvet",
        description:
          "A twist on the classic red velvet. A must try!",
        price: 12000
      },

      {
        name: "Kiwi Delight",
        description:
          "Low calories, high in fiber and very tasty!",
        price: 12000
      },

      {
        name: "Red Velvet",
        description:
          "Perfect for anyone who loves a good red velvet cake",
        price: 12000
      },

      {
        name: "Unicorn Fluff",
        description:
          "Perfect blend of strawberry, blueberry and bubblegum milk",
        price: 13000
      },

      {
        name: "Tiramisu",
        description: "",
        price: 13000
      },

      {
        name: "Kahlua",
        description: "Sweet creamy coffee",
        price: 11000
      },

      {
        name: "Vanilla",
        description: "",
        price: 11000
      },

      {
        name: "Bubble Gum",
        description:
          "Take a trip down memory lane with this cool infusion. A nostalgic, caffeine-free indulgence that everyone can enjoy",
        price: 11000
      },

      {
        name: "Acai Smoothie",
        description: "Acai. Our absolute favourite",
        price: 12000
      },

      {
        name: "Creamy Mango",
        description: "Mango milkshake with whipped cream",
        price: 12000
      },

      {
        name: "Pistachio",
        description: "",
        price: 13000
      },

      {
        name: "Taro",
        description:
          "Give yourself a Taro-fic treat with our loveable Taro milk tea",
        price: 12000
      },

      {
        name: "Blueberry Swirl",
        description:
          "Blueberry milkshake with whipped cream and blueberry jam",
        price: 14000
      },

      {
        name: "Bamboo Charcoal",
        description: "Vanilla + bamboo charcoal",
        price: 13000
      },

      {
        name: "Rose",
        description: "Rose milkshake",
        price: 12000
      },

      {
        name: "Hedwig",
        description: "Vanilla frappe",
        price: 11000
      },

      {
        name: "Inaara Strawberry",
        description:
          "Strawberry milk with strawberry chunks",
        price: 12000
      },

      {
        name: "Strawberry",
        description:
          "Sweet, creamy, full bodied strawberry drink",
        price: 11000
      },

      {
        name: "Strawberries & Cream",
        description:
          "Strawberry milkshake, whipped cream and strawberry",
        price: 12000
      },

      {
        name: "Strawberry Jasmine Milk",
        description: "",
        price: 12000
      }

    ]
  },


  /* -------------------- CHOCOLATE -------------------- */

  {
    id: "chocolate",
    name: "Chocolate",
    custom: true,

    items: [

      {
        name: "Chocolate",
        description: "",
        price: 11000
      },

      {
        name: "Choco Mint",
        description:
          "Chocolate milk paired with mint and chocolate chunks",
        price: 12000
      },

      {
        name: "Nutella Shake",
        description: "",
        price: 12000
      },

      {
        name: "Choco Overload",
        description:
          "Chocolate milkshake with chocolate chunks and extra chocolate drizzles",
        price: 13000
      },

      {
        name: "Hazelnut",
        description: "",
        price: 12000
      },

      {
        name: "Oreo",
        description:
          "Oreo milkshake with Oreo crumbs on top",
        price: 12000
      },

      {
        name: "Hazelnut Frappe",
        description: "Hazelnut + coffee",
        price: 12000
      },

      {
        name: "Rich and Creamy Coco",
        description:
          "Rich dark cocoa with whipped cream",
        price: 13000
      },

      {
        name: "Chocolate Truffle",
        description:
          "Chocolate ganache, toasted nuts and coconut",
        price: 12000
      },

      {
        name: "Nutcracker",
        description:
          "Hazelnut and Nutella milk topped with toasted nuts",
        price: 12000
      },

      {
        name: "Rudolph",
        description:
          "KitKat milk topped with whipped cream and KitKat shavings",
        price: 12000
      },

      {
        name: "Issac",
        description:
          "Rich chocolate topped with toasted marshmallows, Oreo crumbs and whipped cream",
        price: 13000
      },

      {
        name: "Death by Chocolate",
        description:
          "Chocolate, Nutella and hazelnut milkshake with chocolate whipped cream, marshmallows and chocolate sprinkles",
        price: 13000
      },

      {
        name: "Nimbus 2000",
        description:
          "Tiramisu and dark chocolate",
        price: 13000
      },

      {
        name: "Warm Hug",
        description:
          "Ferrero Rocher and dark chocolate",
        price: 16000
      },

      {
        name: "Minty Mistletoe",
        description:
          "Minty chocolate topped with whipped cream and chocolate shavings",
        price: 13000
      },

      {
        name: "Ferrero",
        description: "",
        price: 16000
      }

    ]
  },


  /* -------------------- MILK TEA -------------------- */

  {
    id: "milktea",
    name: "Milk Tea",
    custom: true,

    note:
      "Add a shot of tea (Oolong, Jasmine or Assam): ask us when you order or add it in the order note.",

    items: [

      {
        name: "Assam",
        description:
          "Take a breath of fresh air from the valleys of the Assam garden with every sip!",
        price: 11000
      },

      {
        name: "Jasmine",
        description:
          "Dive deep into the aroma of our Jasmine milk tea",
        price: 11000
      },

      {
        name: "Oolong",
        description:
          "Dark roasted Oolong tea leaves with slight smokiness and earthy tones",
        price: 11000
      }

    ]
  },


  /* -------------------- FRUIT TEA -------------------- */

  {
    id: "fruit",
    name: "Fruit Tea",
    custom: true,

    items: [

      {
        name: "Mango Dream",
        description: "Mango + orange",
        price: 8000
      },

      {
        name: "Summer Blaze",
        description: "Strawberry + blueberry",
        price: 10000
      },

      {
        name: "Super Melon",
        description: "Watermelon + strawberry",
        price: 8000
      },

      {
        name: "Passionfruit Sunrise",
        description: "Passion + mango + strawberry",
        price: 10000
      },

      {
        name: "Hawaii",
        description: "Pineapple + mango + passion juice",
        price: 10000
      },

      {
        name: "Caribbean Love",
        description: "Passion + peach + mango",
        price: 10000
      },

      {
        name: "Twisted Lemonade",
        description: "Refreshing strawberry lemonade",
        price: 8000
      },

      {
        name: "Spicy Mango",
        description: "Mango with a hint of chilli",
        price: 8000
      },

      {
        name: "Tiki Passion",
        description:
          "Strawberry + watermelon + passion + mango",
        price: 10000
      },

      {
        name: "Pina Colada",
        description: "Pineapple + passion",
        price: 8000
      },

      {
        name: "Mango Passion Frappe",
        description:
          "Mango, passion and berries infused drink",
        price: 12000
      },

      {
        name: "Peachy Sweetie",
        description: "Peach and strawberry",
        price: 10000
      },

      {
        name: "Pomegranate Paradise",
        description:
          "Mango + strawberry + pomegranate + peach",
        price: 10000
      },

      {
        name: "Dragon",
        description:
          "Mango + passion + pomegranate + raspberry",
        price: 10000
      },

      {
        name: "Strawberry Lychee",
        description:
          "Strawberry + lychee",
        price: 10000
      },

      {
        name: "Treasure Mango",
        description:
          "Mango, strawberry and peach",
        price: 10000
      }

    ]
  },


  /* -------------------- SLUSHY -------------------- */

  {
    id: "slushy",
    name: "Slushy",
    custom: true,

    items: [

      {
        name: "Icy Lemon",
        description: "",
        price: 8000
      },

      {
        name: "Apple Burst",
        description: "",
        price: 8000
      },

      {
        name: "Winter Blaze",
        description: "",
        price: 10000
      },

      {
        name: "Red Grape",
        description: "",
        price: 10000
      },

      {
        name: "Bloody Vampire",
        description: "Cranberry slush",
        price: 10000
      },

      {
        name: "Witches Brew",
        description: "Kiwi slush",
        price: 10000
      },

      {
        name: "Poison Apple",
        description:
          "Apple Burst + Icy Lemon with a hint of blood (grape)",
        price: 8000
      },

      {
        name: "Jack Frost",
        description:
          "Winter Blaze + Icy Lemon + grape slush",
        price: 10000
      },

      {
        name: "Strawberry Blush",
        description: "Strawberry + orange",
        price: 10000
      },

      {
        name: "Mango Berry",
        description: "Mango + blackberry",
        price: 10000
      },

      {
        name: "Mixed Berry",
        description:
          "A perfect blend of all delicious berries",
        price: 10000
      },

      {
        name: "Pink Lemonade",
        description:
          "Strawberry and lemon slush",
        price: 10000
      },

      {
        name: "Blue Lemonade",
        description:
          "Blueberry and lemon slush",
        price: 10000
      },

      {
        name: "Boo Berry",
        description:
          "Strawberry, blueberry and grape slush",
        price: 10000
      },

      {
        name: "North Pole",
        description:
          "Blueberry and lemon slush",
        price: 10000
      },

      {
        name: "Gryffindor",
        description:
          "Vampire and raspberry",
        price: 10000
      },

      {
        name: "Hufflepuff",
        description:
          "Mango and orange",
        price: 10000
      },

      {
        name: "Slytherin",
        description:
          "Kiwi and apple",
        price: 10000
      },

      {
        name: "Ravenclaw",
        description:
          "Winter and blue raspberry",
        price: 10000
      },

      {
        name: "Love Struck",
        description:
          "Strawberry lemonade and pink lemonade topped with a lemon slice",
        price: 10000
      }

    ]
  },


  /* -------------------- FIZZY -------------------- */

  {
    id: "fizzy",
    name: "Fizzy",
    custom: true,

    items: [

      {
        name: "Frozen Strawberry Fizz",
        description: "",
        price: 8000
      },

      {
        name: "Passionfruit & Mango Fizz",
        description: "",
        price: 8000
      },

      {
        name: "Mojito Fizz",
        description: "",
        price: 8000
      },

      {
        name: "Red Raspberry Fizz",
        description: "",
        price: 8000
      },

      {
        name: "Electric Fizz",
        description:
          "A much-requested drink and a favourite for the kids. A blue fizzy drink that is super delicious",
        price: 8000
      },

      {
        name: "Grape Soda",
        description: "",
        price: 8000
      },

      {
        name: "Energizer",
        description: "",
        price: 8000
      }

    ]
  }

];


/* ============================================================
   ============================================================
   DO NOT EDIT BELOW THIS LINE
   WEBSITE / CART FUNCTIONALITY
   ============================================================
   ============================================================ */


/* ============================================================
   HELPER FUNCTIONS
============================================================ */

const $ = (selector) =>
  document.querySelector(selector);

const $$ = (selector) =>
  [...document.querySelectorAll(selector)];

const formatPrice = (amount) =>
  "TSh " + Number(amount).toLocaleString("en-US");

const escapeHTML = (value) =>
  String(value).replace(
    /[&<>"']/g,
    character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[character])
  );


/* ============================================================
   CART STATE
============================================================ */

let cart = [];
let orderType = null;
let currentItem = null;
let closeTimer = null;


/*
  currentItem looks like:

  {
    item: menu item,
    editIndex: -1
  }

  OR

  {
    item: menu item,
    editIndex: number
  }
*/


/* ============================================================
   LOAD SAVED CART
============================================================ */

try {

  const savedCart =
    JSON.parse(
      localStorage.getItem(CONFIG.storageKey)
    );

  if (Array.isArray(savedCart)) {

    cart = savedCart
      .filter(item =>
        item &&
        typeof item.name === "string" &&
        Number.isFinite(Number(item.price)) &&
        Number.isFinite(Number(item.qty)) &&
        Number(item.qty) > 0
      )
      .map(item => ({
        key: String(item.key || item.name),
        name: item.name,
        opts: Array.isArray(item.opts)
          ? item.opts.map(String)
          : [],
        price: Number(item.price),
        qty: Number(item.qty)
      }));

  }

} catch (error) {

  cart = [];

}


/* ============================================================
   SAVE CART
============================================================ */

function saveCart() {

  try {

    localStorage.setItem(
      CONFIG.storageKey,
      JSON.stringify(cart)
    );

  } catch (error) {

    // Ignore localStorage errors

  }

}


/* ============================================================
   BASIC PAGE SETUP
============================================================ */

$$("[data-bind=name]").forEach(element => {

  element.textContent = CONFIG.name;

});

$("#year").textContent =
  new Date().getFullYear();


/* ============================================================
   MENU RENDERING
============================================================ */

function renderMenu() {

  renderCategoryNavigation();
  renderMenuSections();

}


/* -------------------- CATEGORY NAVIGATION -------------------- */

function renderCategoryNavigation() {

  $("#catNav").innerHTML =
    MENU_DATA
      .map(category => `
        <a href="#${category.id}">
          ${escapeHTML(category.name)}
        </a>
      `)
      .join("");

}


/* -------------------- MENU SECTIONS -------------------- */

function renderMenuSections() {

  $("#menuRoot").innerHTML =
    MENU_DATA
      .map(category => {

        const note = category.note
          ? `
            <p class="note">
              ${escapeHTML(category.note)}
            </p>
          `
          : "";

        const items =
          category.items
            .map((item, index) => {

              const description =
                item.description
                  ? `
                    <small>
                      ${escapeHTML(item.description)}
                    </small>
                  `
                  : "";

              const customizable =
                category.custom
                  ? `
                    <span class="tag">
                      Customisable
                    </span>
                  `
                  : "";

              return `
                <li class="menu-row">

                  <div>

                    <b>
                      ${escapeHTML(item.name)}
                    </b>

                    ${description}

                    ${customizable}

                  </div>

                  <div class="row-end">

                    <span class="price">
                      ${formatPrice(item.price)}
                    </span>

                    <button
                      class="btn btn-accent btn-sm"
                      type="button"
                      data-add="${category.id}:${index}"
                    >
                      Add to Cart
                    </button>

                  </div>

                </li>
              `;

            })
            .join("");

        return `
          <section
            class="cat"
            id="${category.id}"
          >

            <h3>
              ${escapeHTML(category.name)}
            </h3>

            ${note}

            <ul class="menu-list">
              ${items}
            </ul>

          </section>
        `;

      })
      .join("");

}


/* ============================================================
   ADD-TO-CART BUTTONS
============================================================ */

$("#menuRoot").addEventListener("click", event => {

  const button =
    event.target.closest("[data-add]");

  if (!button) return;

  const [categoryId, itemIndex] =
    button.dataset.add.split(":");

  const category =
    MENU_DATA.find(
      category => category.id === categoryId
    );

  const item =
    category?.items[Number(itemIndex)];

  if (!item) return;


  // Customisable products open the customisation modal.
  if (category.custom) {

    openCustomisationModal(item, -1);

    return;

  }


  // Normal products go directly into the cart.
  addToCart(
    item.name,
    [],
    item.price
  );

});


/* ============================================================
   CATEGORY NAVIGATION — ACTIVE CATEGORY
============================================================ */

function watchCategories() {

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) {
            return;
          }

          $$("#catNav a").forEach(link => {

            link.classList.toggle(
              "active",
              link.getAttribute("href") ===
                "#" + entry.target.id
            );

          });

        });

      },
      {
        rootMargin: "-30% 0px -60% 0px"
      }
    );


  $$(".cat").forEach(section => {

    observer.observe(section);

  });

}


/* ============================================================
   CUSTOMISATION MODAL
============================================================ */

const customModal =
  $("#customModal");


/* -------------------- OPEN MODAL -------------------- */

function openCustomisationModal(
  item,
  editIndex = -1
) {

  currentItem = {
    item,
    editIndex
  };


  const isEditing =
    editIndex >= 0;


  $("#cmTitle").textContent =
    isEditing
      ? "Edit Your Drink"
      : "Customise Your Drink";


  $("#cmAdd").textContent =
    isEditing
      ? "Update Cart"
      : "Add to Cart";


  $("#cmHint").textContent = "";


  renderCustomisationOptions();


  if (isEditing && cart[editIndex]) {

    restoreCartOptions(
      cart[editIndex]
    );

  }


  $("#cmBody").scrollTop = 0;

  calculateCustomisation();


  document.body.classList.add("no-scroll");


  if (customModal.showModal) {

    customModal.showModal();

  } else {

    customModal.setAttribute(
      "open",
      ""
    );

  }

}


/* -------------------- RENDER CUSTOM OPTIONS -------------------- */

function renderCustomisationOptions() {

  const item =
    currentItem.item;


  const bobaChoices =
    BOBA_TYPES
      .map(boba => `
        <label class="option boba-card">

          <input
            type="radio"
            name="boba"
            value="${boba.id}"
          >

          <span>
            ${escapeHTML(boba.name)}
          </span>

          ${
            boba.note
              ? `<small>${escapeHTML(boba.note)}</small>`
              : ""
          }

        </label>
      `)
      .join("");


  const flavourSections =
    BOBA_TYPES
      .filter(boba => boba.options.length)
      .map(boba => {

        const options =
          boba.options
            .map(flavour => `
              <label class="option">

                <input
                  type="radio"
                  name="sub-${boba.id}"
                  value="${escapeHTML(flavour)}"
                >

                ${escapeHTML(flavour)}

              </label>
            `)
            .join("");

        return `
          <fieldset
            class="opt"
            id="cmOpt-${boba.id}"
            hidden
          >

            <legend>
              ${escapeHTML(boba.label)}
            </legend>

            <p class="help">
              Choose one (no extra charge)
            </p>

            <div class="opt-grid ${boba.columns || "cols-3"}">
              ${options}
            </div>

          </fieldset>
        `;

      })
      .join("");


  const toppingOptions =
    TOPPINGS
      .map(topping => `
        <label class="option topping">

          <input
            type="checkbox"
            name="top"
            value="${escapeHTML(topping)}"
          >

          <span>
            ${escapeHTML(topping)}
          </span>

          <em>
            +${formatPrice(CONFIG.toppingPrice)}
          </em>

        </label>
      `)
      .join("");


  const extraOptions =
    EXTRAS.length
      ? EXTRAS
          .map((extra, index) => `
            <label class="option topping">

              <input
                type="checkbox"
                name="extra"
                value="${index}"
              >

              <span>
                ${escapeHTML(extra.name)}
              </span>

              <em>
                +${formatPrice(extra.price)}
              </em>

            </label>
          `)
          .join("")
      : "";


  $("#cmBody").innerHTML = `

    <!-- PRODUCT -->

    <div class="cm-product">

      <h3>
        ${escapeHTML(item.name)}
      </h3>

      <p>
        Base price:
        ${formatPrice(item.price)}
      </p>

    </div>


    <!-- BOBA -->

    <fieldset class="opt">

      <legend>
        Boba type
      </legend>

      <p class="help">
        Optional — choose one (no extra charge)
      </p>

      <div class="opt-grid cols-types">
        ${bobaChoices}
      </div>

      <button
        type="button"
        class="clear-choice"
        id="cmClearBoba"
      >
        Clear boba choice
      </button>

    </fieldset>


    <!-- BOBA FLAVOURS -->

    ${flavourSections}


    <!-- TOPPINGS -->

    <fieldset class="opt">

      <legend>
        Toppings
      </legend>

      <p class="help">
        Choose up to
        ${CONFIG.maxToppings}
        toppings ·
        ${formatPrice(CONFIG.toppingPrice)}
        each
        <span id="cmTopCount"></span>
      </p>

      <div class="opt-grid cols-2">
        ${toppingOptions}
      </div>

    </fieldset>


    <!-- EXTRAS -->

    ${
      EXTRAS.length
        ? `
          <fieldset class="opt">

            <legend>
              Extras
            </legend>

            <p class="help">
              Optional
            </p>

            <div class="opt-grid cols-2">
              ${extraOptions}
            </div>

          </fieldset>
        `
        : ""
    }

  `;

}


/* ============================================================
   RESTORE OPTIONS WHEN EDITING CART ITEM
============================================================ */

function restoreCartOptions(item) {

  const options =
    item.opts || [];


  // Restore boba type
  const bobaOption =
    options.find(option =>
      BOBA_TYPES.some(
        boba =>
          option === boba.name ||
          option.startsWith(boba.name + " ") ||
          option.startsWith(boba.name + " – ")
      )
    );


  if (bobaOption) {

    const boba =
      BOBA_TYPES.find(
        boba =>
          bobaOption === boba.name ||
          bobaOption.startsWith(boba.name + " ") ||
          bobaOption.startsWith(boba.name + " – ")
      );


    if (boba) {

      const input =
        $(
          `[name="boba"][value="${boba.id}"]`
        );

      if (input) {
        input.checked = true;
      }


      const flavour =
        options.find(option =>
          boba.options.some(
            flavour =>
              option === flavour ||
              option.endsWith(" – " + flavour)
          )
        );


      if (
        flavour &&
        boba.options.length
      ) {

        const selectedFlavour =
          boba.options.find(
            flavour =>
              flavour === flavour ||
              flavour.endsWith(
                " – " + flavour
              )
          );


        const flavourInput =
          [
            ...$$("#cmBody [name='sub-" + boba.id + "']")
          ].find(
            input =>
              input.value === selectedFlavour
          );


        if (flavourInput) {
          flavourInput.checked = true;
        }

      }

    }

  }


  // Restore toppings
  const toppingList =
    options.find(
      option =>
        option.startsWith("Toppings: ")
    );


  if (toppingList) {

    toppingList
      .replace("Toppings: ", "")
      .split(", ")
      .forEach(toppingName => {

        const input =
          [
            ...$$("#cmBody [name='top']")
          ].find(
            input =>
              input.value === toppingName
          );

        if (input) {
          input.checked = true;
        }

      });

  }


  // Restore extras
  EXTRAS.forEach(
    (extra, index) => {

      if (!options.includes(extra.name)) {
        return;
      }

      const input =
        $(
          `[name="extra"][value="${index}"]`
        );

      if (input) {
        input.checked = true;
      }

    }
  );

}


/* ============================================================
   CLOSE CUSTOMISATION MODAL
============================================================ */

function closeCustomisationModal() {

  if (customModal.close) {

    customModal.close();

  } else {

    customModal.removeAttribute(
      "open"
    );

  }


  document.body.classList.remove(
    "no-scroll"
  );


  currentItem = null;

}


/* ============================================================
   CALCULATE CUSTOMISATION
============================================================ */

function calculateCustomisation() {

  if (!currentItem) {
    return null;
  }


  const body =
    $("#cmBody");


  /* -------------------- BOBA TYPE -------------------- */

  const selectedBobaInput =
    body.querySelector(
      "[name='boba']:checked"
    );


  const selectedBoba =
    selectedBobaInput
      ? BOBA_TYPES.find(
          boba =>
            boba.id ===
            selectedBobaInput.value
        )
      : null;


  /* -------------------- SHOW FLAVOURS -------------------- */

  BOBA_TYPES
    .filter(boba => boba.options.length)
    .forEach(boba => {

      const field =
        body.querySelector(
          "#cmOpt-" + boba.id
        );


      const shouldShow =
        Boolean(
          selectedBoba &&
          selectedBoba.id === boba.id
        );


      field.hidden =
        !shouldShow;


      if (!shouldShow) {

        field
          .querySelectorAll("input")
          .forEach(input => {

            input.checked = false;

          });

      }

    });


  /* -------------------- FLAVOUR -------------------- */

  const hasFlavour =
    Boolean(
      selectedBoba &&
      selectedBoba.options.length
    );


  const selectedFlavourInput =
    hasFlavour
      ? body.querySelector(
          `[name="sub-${selectedBoba.id}"]:checked`
        )
      : null;


  const selectedFlavour =
    selectedFlavourInput
      ? selectedFlavourInput.value
      : "";


  /* -------------------- TOPPINGS -------------------- */

  const toppings =
    [
      ...body.querySelectorAll(
        "[name='top']:checked"
      )
    ].map(
      input => input.value
    );


  body
    .querySelectorAll("[name='top']")
    .forEach(input => {

      input.disabled =
        !input.checked &&
        toppings.length >= CONFIG.maxToppings;

    });


  $("#cmTopCount").textContent =
    `(${toppings.length}/${CONFIG.maxToppings} selected)`;


  /* -------------------- EXTRAS -------------------- */

  const extras =
    [
      ...body.querySelectorAll(
        "[name='extra']:checked"
      )
    ]
      .map(
        input =>
          EXTRAS[Number(input.value)]
      )
      .filter(Boolean);


  /* -------------------- SELECTED STYLES -------------------- */

  body
    .querySelectorAll(".option")
    .forEach(label => {

      const input =
        label.querySelector("input");


      label.classList.toggle(
        "selected",
        input.checked
      );


      label.classList.toggle(
        "disabled",
        input.disabled
      );

    });


  /* -------------------- PRICE -------------------- */

  const toppingTotal =
    toppings.length *
    CONFIG.toppingPrice;


  const extraTotal =
    extras.reduce(
      (total, extra) =>
        total + extra.price,
      0
    );


  const total =
    currentItem.item.price +
    toppingTotal +
    extraTotal;


  /* -------------------- OPTIONS -------------------- */

  const bobaName =
    selectedBoba
      ? selectedBoba.name +
        (
          selectedBoba.note
            ? " " + selectedBoba.note
            : ""
        )
      : "";


  const options = [];


  if (selectedBoba) {

    options.push(
      bobaName +
      (
        selectedFlavour
          ? " – " + selectedFlavour
          : ""
      )
    );

  }


  if (toppings.length) {

    options.push(
      "Toppings: " +
      toppings.join(", ")
    );

  }


  extras.forEach(extra => {

    options.push(extra.name);

  });


  /* -------------------- SUMMARY -------------------- */

  let summary = `

    <div class="sum-main">

      <span>
        ${escapeHTML(currentItem.item.name)}
      </span>

      <span>
        ${formatPrice(currentItem.item.price)}
      </span>

    </div>

  `;


  if (selectedBoba) {

    summary += `

      <div>

        <span>
          ${escapeHTML(bobaName)}
        </span>

        <span>
          No charge
        </span>

      </div>

    `;

  }


  if (selectedFlavour) {

    summary += `

      <div>

        <span>
          ${escapeHTML(selectedFlavour)}
        </span>

        <span>
          No charge
        </span>

      </div>

    `;

  }


  if (toppings.length) {

    summary += `

      <div>

        <span>
          Toppings:
          ${toppings.map(escapeHTML).join(", ")}
        </span>

        <span>
          ${formatPrice(toppingTotal)}
        </span>

      </div>

    `;

  }


  extras.forEach(extra => {

    summary += `

      <div>

        <span>
          ${escapeHTML(extra.name)}
        </span>

        <span>
          ${formatPrice(extra.price)}
        </span>

      </div>

    `;

  });


  $("#cmBreakdown").innerHTML =
    summary;


  $("#cmTotal").textContent =
    formatPrice(total);


  return {

    options,
    price: total,
    boba: selectedBoba,
    needFlavour:
      hasFlavour &&
      !selectedFlavour

  };

}


/* ============================================================
   CUSTOMISATION EVENTS
============================================================ */

$("#cmBody").addEventListener(
  "change",
  () => {

    $("#cmHint").textContent = "";

    calculateCustomisation();

  }
);


$("#cmBody").addEventListener(
  "click",
  event => {

    if (
      event.target.closest(
        "#cmClearBoba"
      )
    ) {

      $$("#cmBody [name='boba']")
        .forEach(input => {

          input.checked = false;

        });


      calculateCustomisation();

    }

  }
);


/* -------------------- CLOSE MODAL -------------------- */

$("#cmClose").onclick =
  closeCustomisationModal;


customModal.addEventListener(
  "click",
  event => {

    if (event.target === customModal) {

      closeCustomisationModal();

    }

  }
);


customModal.addEventListener(
  "close",
  () => {

    document.body.classList.remove(
      "no-scroll"
    );

  }
);


/* -------------------- ADD / UPDATE CART -------------------- */

$("#cmAdd").onclick = () => {

  const result =
    calculateCustomisation();


  if (!result) {
    return;
  }


  if (result.needFlavour) {

    $("#cmHint").textContent =
      "Please choose a " +
      result.boba.label.toLowerCase() +
      ".";


    const flavourBox =
      $("#cmOpt-" + result.boba.id);


    if (flavourBox) {

      flavourBox.scrollIntoView({
        block: "nearest",
        behavior: "smooth"
      });

    }

    return;

  }


  /* -------------------- EDIT EXISTING ITEM -------------------- */

  if (currentItem.editIndex >= 0) {

    const index =
      currentItem.editIndex;


    if (cart[index]) {

      cart[index] = {

        key:
          currentItem.item.name +
          "|" +
          result.options.join("|"),

        name:
          currentItem.item.name,

        opts:
          result.options,

        price:
          result.price,

        // Keep original quantity
        qty:
          cart[index].qty

      };


      saveCart();
      renderCart();

    }

  }


  /* -------------------- ADD NEW ITEM -------------------- */

  else {

    addToCart(
      currentItem.item.name,
      result.options,
      result.price
    );

  }


  closeCustomisationModal();

};


/* ============================================================
   CART
============================================================ */


/* -------------------- ADD TO CART -------------------- */

function addToCart(
  name,
  options,
  price
) {

  const key =
    name +
    "|" +
    options.join("|");


  const existingItem =
    cart.find(
      item => item.key === key
    );


  if (existingItem) {

    existingItem.qty++;

  } else {

    cart.push({

      key,
      name,
      opts: options,
      price,
      qty: 1

    });

  }


  saveCart();
  renderCart();


  // Small cart button animation
  const cartButton =
    $("#cart-toggle-btn");


  if (cartButton.animate) {

    cartButton.animate(
      [
        {
          transform: "scale(1)"
        },
        {
          transform: "scale(1.12)"
        },
        {
          transform: "scale(1)"
        }
      ],
      {
        duration: 250
      }
    );

  }

}


/* -------------------- CART TOTALS -------------------- */

function getSubtotal() {

  return cart.reduce(
    (total, item) =>
      total +
      item.price * item.qty,
    0
  );

}


function getCartCount() {

  return cart.reduce(
    (total, item) =>
      total + item.qty,
    0
  );

}


/* ============================================================
   RENDER CART
============================================================ */

function renderCart() {

  const itemCount =
    getCartCount();


  const cartIsEmpty =
    itemCount === 0;


  $("#cart-count").textContent =
    itemCount;


  $("#cart-toggle-btn").setAttribute(
    "aria-label",
    `Open cart, ${itemCount} item${
      itemCount === 1 ? "" : "s"
    }`
  );


  $("#cart-empty").hidden =
    !cartIsEmpty;


  $("#cart-footer").hidden =
    cartIsEmpty;


  renderCartItems();
  renderCartTotals();

  validateOrder();

}


/* -------------------- CART ITEMS -------------------- */

function renderCartItems() {

  $("#cart-items").innerHTML =
    cart
      .map((item, index) => `

        <div class="cart-item">

          <div class="ci-top">

            <span>
              ${escapeHTML(item.name)}
            </span>

            <span>
              ${formatPrice(
                item.price * item.qty
              )}
            </span>

          </div>


          ${
            item.opts.length
              ? `
                <div class="ci-opts">

                  ${item.opts
                    .map(
                      option => `
                        <div>
                          ${escapeHTML(option)}
                        </div>
                      `
                    )
                    .join("")}

                </div>
              `
              : ""
          }


          <div class="ci-act">

            <div class="qty">

              <button
                type="button"
                data-q="${index}:-1"
                aria-label="Fewer"
              >
                −
              </button>

              <span>
                ${item.qty}
              </span>

              <button
                type="button"
                data-q="${index}:1"
                aria-label="More"
              >
                +
              </button>

            </div>


            <button
              type="button"
              class="link-btn edit-btn"
              data-edit="${index}"
            >
              Edit
            </button>


            <button
              type="button"
              class="link-btn"
              data-rm="${index}"
            >
              Remove
            </button>

          </div>

        </div>

      `)
      .join("");

}


/* -------------------- CART TOTALS -------------------- */

function renderCartTotals() {

  const subtotal =
    getSubtotal();


  const deliveryFee =
    orderType === "delivery"
      ? CONFIG.deliveryFee
      : 0;


  $("#cart-total-rows").innerHTML = `

    <div class="trow">

      <span>
        Subtotal
      </span>

      <span>
        ${formatPrice(subtotal)}
      </span>

    </div>


    ${
      orderType === "delivery"
        ? `
          <div class="trow">

            <span>
              Delivery fee
            </span>

            <span>
              ${formatPrice(deliveryFee)}
            </span>

          </div>
        `
        : ""
    }


    <div class="trow grand">

      <span>
        Total
      </span>

      <span>
        ${formatPrice(
          subtotal + deliveryFee
        )}
      </span>

    </div>

  `;

}


/* ============================================================
   CART BUTTONS
============================================================ */

$("#cart-items").addEventListener(
  "click",
  event => {

    const quantityButton =
      event.target.closest("[data-q]");

    const editButton =
      event.target.closest("[data-edit]");

    const removeButton =
      event.target.closest("[data-rm]");


    /* -------------------- QUANTITY -------------------- */

    if (quantityButton) {

      const [
        index,
        change
      ] =
        quantityButton.dataset.q
          .split(":")
          .map(Number);


      if (!cart[index]) {
        return;
      }


      cart[index].qty += change;


      if (cart[index].qty < 1) {

        cart.splice(index, 1);

      }


      saveCart();
      renderCart();

      return;

    }


    /* -------------------- EDIT -------------------- */

    if (editButton) {

      const index =
        Number(
          editButton.dataset.edit
        );


      if (!cart[index]) {
        return;
      }


      let menuItem = null;


      for (const category of MENU_DATA) {

        menuItem =
          category.items.find(
            item =>
              item.name ===
              cart[index].name
          );


        if (menuItem) {
          break;
        }

      }


      if (menuItem) {

        openCustomisationModal(
          menuItem,
          index
        );

      } else {

        alert(
          "This item can no longer be edited because it is not available on the current menu."
        );

      }


      return;

    }


    /* -------------------- REMOVE -------------------- */

    if (removeButton) {

      cart.splice(
        Number(
          removeButton.dataset.rm
        ),
        1
      );


      saveCart();
      renderCart();

    }

  }
);


/* ============================================================
   CLEAR CART
============================================================ */

$("#clear-cart-btn").onclick = () => {

  if (!confirm("Clear your cart?")) {
    return;
  }


  cart = [];

  saveCart();
  renderCart();

};


/* ============================================================
   CART DRAWER
============================================================ */

const cartDrawer =
  $("#cart-drawer");

const cartOverlay =
  $("#cart-overlay");


/* -------------------- OPEN CART -------------------- */

function openCart() {

  clearTimeout(closeTimer);


  cartDrawer.hidden = false;
  cartOverlay.hidden = false;


  document.body.classList.add(
    "no-scroll"
  );


  requestAnimationFrame(() => {

    cartDrawer.classList.add("open");
    cartOverlay.classList.add("open");

  });


  $("#cart-close-btn").focus();

}


/* -------------------- CLOSE CART -------------------- */

function closeCart() {

  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("open");


  document.body.classList.remove(
    "no-scroll"
  );


  clearTimeout(closeTimer);


  closeTimer =
    setTimeout(() => {

      cartDrawer.hidden = true;
      cartOverlay.hidden = true;

    }, 250);


  $("#cart-toggle-btn").focus();

}


/* -------------------- CART EVENTS -------------------- */

$("#cart-toggle-btn").onclick =
  openCart;

$("#cart-close-btn").onclick =
  closeCart;

cartOverlay.onclick =
  closeCart;

$("#cart-browse-btn").onclick =
  closeCart;


/* -------------------- ESCAPE KEY -------------------- */

document.addEventListener(
  "keydown",
  event => {

    if (event.key !== "Escape") {
      return;
    }


    if (!cartDrawer.hidden) {

      closeCart();

    } else if (customModal.open) {

      closeCustomisationModal();

    }

  }
);


/* ============================================================
   ORDER TYPE
============================================================ */

$$(".order-type-btn")
  .forEach(button => {

    button.onclick = () => {

      orderType =
        button.dataset.type;


      // Update selected button
      $$(".order-type-btn")
        .forEach(otherButton => {

          otherButton.setAttribute(
            "aria-checked",
            String(
              otherButton === button
            )
          );

        });


      // Show customer fields
      $("#cart-customer-fields")
        .hidden = false;


      // Show delivery fields only for delivery
      $("[data-delivery-only]")
        .hidden =
          orderType !== "delivery";


      // Update message
      $("#order-type-hint")
        .textContent =
          orderType === "delivery"
            ? `Delivery fee: ${formatPrice(
                CONFIG.deliveryFee
              )}`
            : "Pick up at the shop. No delivery fee.";


      renderCart();

    };

  });


/* ============================================================
   ORDER VALIDATION
============================================================ */

function getInputValue(id) {

  return $("#"+id)
    .value
    .trim();

}


function getMissingFields() {

  const missing = [];


  if (!cart.length) {

    missing.push(
      "add a drink"
    );

  }


  if (!orderType) {

    missing.push(
      "choose Delivery or Pickup"
    );

  }


  if (!getInputValue("customer-name")) {

    missing.push(
      "your name"
    );

  }


  const phone =
    getInputValue(
      "customer-contact"
    ).replace(/\D/g, "");


  if (phone.length < 9) {

    missing.push(
      "a valid phone number"
    );

  }


  if (orderType === "delivery") {

    if (!getInputValue("customer-area")) {

      missing.push(
        "delivery area"
      );

    }


    if (!getInputValue("customer-address")) {

      missing.push(
        "delivery address"
      );

    }

  }


  return missing;

}


/* -------------------- VALIDATE ORDER -------------------- */

function validateOrder() {

  const missing =
    getMissingFields();


  const whatsappButton =
    $("#whatsapp-order-btn");


  whatsappButton.disabled =
    missing.length > 0;


  $("#whatsapp-hint")
    .textContent =
      missing.length
        ? "Still needed: " +
          missing.join(", ")
        : "Ready. This opens WhatsApp with your order.";

}


/* ============================================================
   CUSTOMER INPUT EVENTS
============================================================ */

[
  "customer-name",
  "customer-contact",
  "customer-area",
  "customer-address",
  "customer-note"

].forEach(id => {

  $("#" + id).addEventListener(
    "input",
    validateOrder
  );

});


/* ============================================================
   WHATSAPP ORDER
============================================================ */

$("#whatsapp-order-btn").onclick = () => {

  const missing =
    getMissingFields();


  if (missing.length) {

    validateOrder();

    return;

  }


  const subtotal =
    getSubtotal();


  const deliveryFee =
    orderType === "delivery"
      ? CONFIG.deliveryFee
      : 0;


  const total =
    subtotal + deliveryFee;


  /* -------------------- MESSAGE -------------------- */

  const message = [

    `*New order: ${CONFIG.name}*`,

    `Type: ${
      orderType === "delivery"
        ? "Delivery"
        : "Pickup"
    }`,

    `Name: ${getInputValue("customer-name")}`,

    `Phone: ${getInputValue("customer-contact")}`

  ];


  /* -------------------- DELIVERY -------------------- */

  if (orderType === "delivery") {

    message.push(
      `Area: ${getInputValue("customer-area")}`,
      `Address: ${getInputValue("customer-address")}`
    );

  }


  /* -------------------- ITEMS -------------------- */

  message.push(
    "",
    "*Items*"
  );


  cart.forEach(item => {

    message.push(
      `${item.qty} x ${item.name} - ${formatPrice(
        item.price * item.qty
      )}`
    );


    item.opts.forEach(option => {

      message.push(
        `   • ${option}`
      );

    });

  });


  /* -------------------- TOTALS -------------------- */

  message.push(
    "",
    `Subtotal: ${formatPrice(subtotal)}`
  );


  if (deliveryFee) {

    message.push(
      `Delivery fee: ${formatPrice(deliveryFee)}`
    );

  }


  message.push(
    `*Total: ${formatPrice(total)}*`
  );


  /* -------------------- NOTE -------------------- */

  const note =
    getInputValue(
      "customer-note"
    );


  if (note) {

    message.push(
      "",
      `Note: ${note}`
    );

  }


  /* -------------------- OPEN WHATSAPP -------------------- */

  const whatsappURL =
    `https://wa.me/${CONFIG.whatsapp}` +
    `?text=${encodeURIComponent(
      message.join("\n")
    )}`;


  window.open(
    whatsappURL,
    "_blank"
  );

};


/* ============================================================
   START WEBSITE
============================================================ */

renderMenu();

watchCategories();

renderCart();
