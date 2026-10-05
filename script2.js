/* ==========================================================================
   BOBA BAY — ORDER ONLINE
   File: script2.js

   PURPOSE
   --------------------------------------------------------------------------
   This file controls:
   - Menu rendering
   - Category navigation
   - Product customization
   - Cart
   - Delivery / Pickup
   - Customer order details
   - WhatsApp ordering
   - Local storage

   IMPORTANT
   --------------------------------------------------------------------------
   Restaurant branding/details are controlled by the HTML.

   This script does NOT overwrite:
   - Restaurant name
   - Tagline
   - Logo
   - Address
   - Phone number displayed on the page
   - Opening hours
   - Social links
   - Footer restaurant information

   ========================================================================== */


/* ==========================================================================
   1. CONFIGURATION
   ========================================================================== */

const CONFIG = {

  /* WhatsApp number
     Use international format without + or spaces. */
  whatsapp: "255000000000",

  /* Currency */
  currency: "TSh",

  /* Delivery */
  deliveryFee: 0,

  /* Maximum quantity per cart item */
  maxQty: 99,

  /* Local storage */
  cartStorageKey: "bobaBayCart",

  /* Product customization */
  customization: {

    /* Toppings */
    toppingPrice: 1000,
    maxToppings: 2,

    /* Extra boba */
    extraBobaPrice: 1000,

    /* Boba options */
    poppingBoba: [
      "Strawberry",
      "Blueberry",
      "Mango",
      "Lychee",
      "Taro",
      "Tropical"
    ],

    chewyBoba: [
      "Tapioca"
    ],

    /* Toppings */
    toppings: [
      "Strawberry Chunks",
      "Marshmallows",
      "Chocolate Sprinkles",
      "Whipped Cream",
      "Toasted Nuts",
      "Oreo Crumbs"
    ]
  }
};


/* ==========================================================================
   2. MENU DATA
   ========================================================================== */

const MENU = [

  {
    id: "milk",
    title: "Milk",
    subtitle: "Creamy, smooth and full of flavour.",
    custom: true,
    items: [
      {
        id: "milk-tea",
        name: "Milk Tea",
        price: 5000,
        description: "Classic creamy milk tea."
      },
      {
        id: "brown-sugar-milk",
        name: "Brown Sugar Milk",
        price: 6000,
        description: "Rich milk with brown sugar flavour."
      },
      {
        id: "strawberry-milk",
        name: "Strawberry Milk",
        price: 6000,
        description: "Creamy milk with strawberry flavour."
      },
      {
        id: "chocolate-milk",
        name: "Chocolate Milk",
        price: 6000,
        description: "Smooth chocolate milk."
      },
      {
        id: "taro-milk",
        name: "Taro Milk",
        price: 6000,
        description: "Creamy taro-flavoured milk."
      }
    ]
  },


  {
    id: "slushy",
    title: "Slushy",
    subtitle: "Cold, refreshing and fruity.",
    custom: true,
    items: [
      {
        id: "strawberry-slushy",
        name: "Strawberry Slushy",
        price: 5000,
        description: "Refreshing strawberry slushy."
      },
      {
        id: "mango-slushy",
        name: "Mango Slushy",
        price: 5000,
        description: "Sweet and refreshing mango slushy."
      },
      {
        id: "blueberry-slushy",
        name: "Blueberry Slushy",
        price: 5000,
        description: "Cool blueberry slushy."
      },
      {
        id: "lychee-slushy",
        name: "Lychee Slushy",
        price: 5000,
        description: "Refreshing lychee flavour."
      },
      {
        id: "passion-slushy",
        name: "Passion Slushy",
        price: 5000,
        description: "Tangy passion fruit slushy."
      }
    ]
  },


  {
    id: "fizzy",
    title: "Fizzy Drinks",
    subtitle: "Refreshing sparkling drinks.",
    custom: true,
    items: [
      {
        id: "strawberry-fizzy",
        name: "Strawberry Fizzy",
        price: 5000,
        description: "Sparkling strawberry drink."
      },
      {
        id: "blueberry-fizzy",
        name: "Blueberry Fizzy",
        price: 5000,
        description: "Sparkling blueberry drink."
      },
      {
        id: "mango-fizzy",
        name: "Mango Fizzy",
        price: 5000,
        description: "Sparkling mango drink."
      },
      {
        id: "lychee-fizzy",
        name: "Lychee Fizzy",
        price: 5000,
        description: "Sparkling lychee drink."
      },
      {
        id: "passion-fizzy",
        name: "Passion Fizzy",
        price: 5000,
        description: "Sparkling passion fruit drink."
      }
    ]
  },


  {
    id: "milkshake",
    title: "Milkshakes",
    subtitle: "Thick, creamy and delicious.",
    custom: false,
    items: [
      {
        id: "vanilla-milkshake",
        name: "Vanilla Milkshake",
        price: 6000,
        description: "Classic creamy vanilla milkshake."
      },
      {
        id: "chocolate-milkshake",
        name: "Chocolate Milkshake",
        price: 6000,
        description: "Rich chocolate milkshake."
      },
      {
        id: "strawberry-milkshake",
        name: "Strawberry Milkshake",
        price: 6000,
        description: "Creamy strawberry milkshake."
      },
      {
        id: "oreo-milkshake",
        name: "Oreo Milkshake",
        price: 7000,
        description: "Creamy milkshake with Oreo flavour."
      }
    ]
  },


  {
    id: "ice-cream",
    title: "Ice Cream",
    subtitle: "Cool and creamy treats.",
    custom: false,
    items: [
      {
        id: "vanilla-ice-cream",
        name: "Vanilla Ice Cream",
        price: 4000,
        description: "Classic vanilla ice cream."
      },
      {
        id: "chocolate-ice-cream",
        name: "Chocolate Ice Cream",
        price: 4000,
        description: "Rich chocolate ice cream."
      },
      {
        id: "strawberry-ice-cream",
        name: "Strawberry Ice Cream",
        price: 4000,
        description: "Smooth strawberry ice cream."
      }
    ]
  }

];


/* ==========================================================================
   3. STATE
   ========================================================================== */

let cart = loadCart();

let currentCustomization = null;

let selectedBobaType = null;

let selectedBobaFlavour = null;

let selectedToppings = [];

let selectedExtraBoba = false;

let orderType = null;


/* ==========================================================================
   4. DOM HELPERS
   ========================================================================== */

function $(selector) {
  return document.querySelector(selector);
}


function $all(selector) {
  return Array.from(document.querySelectorAll(selector));
}


/* ==========================================================================
   5. FORMATTING
   ========================================================================== */

function money(value) {
  return `${CONFIG.currency} ${Number(value || 0).toLocaleString("en-US")}`;
}


function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function slugify(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}


/* ==========================================================================
   6. MENU HELPERS
   ========================================================================== */

function getAllMenuItems() {

  const result = [];

  MENU.forEach(category => {

    category.items.forEach(item => {

      result.push({
        ...item,
        categoryId: category.id,
        categoryTitle: category.title,
        customizable: Boolean(category.custom)
      });

    });

  });

  return result;
}


function findMenuItem(itemId) {

  for (const category of MENU) {

    const item = category.items.find(product => product.id === itemId);

    if (item) {

      return {
        ...item,
        categoryId: category.id,
        categoryTitle: category.title,
        customizable: Boolean(category.custom)
      };

    }

  }

  return null;
}


/* ==========================================================================
   7. RENDER CATEGORY NAVIGATION
   ========================================================================== */

function renderCategoryNav() {

  const nav = $("#catNav");

  if (!nav) return;

  nav.innerHTML = MENU.map(category => {

    return `
      <a
        href="#section-${escapeHTML(category.id)}"
        data-category="${escapeHTML(category.id)}"
      >
        ${escapeHTML(category.title)}
      </a>
    `;

  }).join("");

}


/* ==========================================================================
   8. RENDER MENU
   ========================================================================== */

function renderMenu() {

  const root = $("#menuRoot");

  if (!root) return;

  root.innerHTML = MENU.map(category => {

    return `
      <section
        class="menu-section"
        id="section-${escapeHTML(category.id)}"
        data-category-section="${escapeHTML(category.id)}"
      >

        <div class="menu-section-heading">

          <h2 class="menu-section-title">
            ${escapeHTML(category.title)}
          </h2>

          ${
            category.subtitle
              ? `
                <p class="menu-section-subtitle">
                  ${escapeHTML(category.subtitle)}
                </p>
              `
              : ""
          }

        </div>


        <div class="menu-grid">

          ${category.items.map(item => renderMenuCard(item, category)).join("")}

        </div>

      </section>
    `;

  }).join("");

}


/* ==========================================================================
   9. RENDER MENU CARD
   ========================================================================== */

function renderMenuCard(item, category) {

  return `
    <article
      class="menu-card"
      data-item-id="${escapeHTML(item.id)}"
    >

      <div class="menu-card-content">

        <div class="menu-card-top">

          <h3>
            ${escapeHTML(item.name)}
          </h3>

          ${
            category.custom
              ? `<span class="custom-badge">Customize</span>`
              : ""
          }

        </div>


        ${
          item.description
            ? `
              <p>
                ${escapeHTML(item.description)}
              </p>
            `
            : ""
        }


        <div class="menu-card-bottom">

          <span class="menu-card-price">
            ${money(item.price)}
          </span>

          <button
            type="button"
            class="menu-add-btn"
            data-add-item="${escapeHTML(item.id)}"
          >
            Add
          </button>

        </div>

      </div>

    </article>
  `;
}


/* ==========================================================================
   10. CATEGORY OBSERVER
   ========================================================================== */

function watchCategories() {

  const sections = $all("[data-category-section]");

  const navLinks = $all("#catNav a");

  if (!sections.length || !navLinks.length) return;


  const observer = new IntersectionObserver(

    entries => {

      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort(
          (a, b) =>
            b.intersectionRatio - a.intersectionRatio
        )[0];

      if (!visible) return;

      const category = visible.target.dataset.categorySection;

      navLinks.forEach(link => {

        link.classList.toggle(
          "active",
          link.dataset.category === category
        );

      });

    },

    {
      rootMargin: "-20% 0px -65% 0px",
      threshold: [0, 0.1, 0.25, 0.5]
    }

  );


  sections.forEach(section => observer.observe(section));

}


/* ==========================================================================
   11. OPEN CUSTOMIZATION
   ========================================================================== */

function openCustomization(item) {

  currentCustomization = {
    item,
    quantity: 1
  };

  selectedBobaType = null;
  selectedBobaFlavour = null;
  selectedToppings = [];
  selectedExtraBoba = false;


  const modal = $("#custom-modal");
  const title = $("#custom-modal-title");
  const body = $("#custom-modal-body");

  if (!modal || !title || !body) return;


  title.textContent = item.name;


  body.innerHTML = `

    <div class="custom-group">

      <div class="custom-group-title">
        Boba
      </div>

      <div class="custom-group-hint">
        Choose one boba type.
      </div>


      <div class="custom-choice-grid">

        <label class="custom-choice">

          <input
            type="radio"
            name="boba-type"
            value="popping"
          >

          <span>
            Popping Boba
          </span>

        </label>


        <label class="custom-choice">

          <input
            type="radio"
            name="boba-type"
            value="chewy"
          >

          <span>
            Chewy Boba
          </span>

        </label>

      </div>


      <div id="boba-flavour-area"></div>

    </div>


    ${renderToppingsSection()}


    ${renderExtraBobaSection()}

  `;


  updateCustomizationPrice();

  modal.classList.add("is-open");

  document.body.classList.add("modal-open");

}


/* ==========================================================================
   12. RENDER TOPPINGS
   ========================================================================== */

function renderToppingsSection() {

  return `

    <div class="custom-group">

      <div class="custom-group-title">
        Toppings
      </div>

      <div class="custom-group-hint">
        Choose up to ${CONFIG.customization.maxToppings}.
      </div>


      <div class="custom-options">

        ${CONFIG.customization.toppings.map((topping, index) => `

          <label class="custom-option">

            <input
              type="checkbox"
              name="topping"
              value="${escapeHTML(topping)}"
              data-topping-index="${index}"
            >

            <span class="custom-option-label">
              ${escapeHTML(topping)}
            </span>

            <span class="custom-option-price">
              +${money(CONFIG.customization.toppingPrice)}
            </span>

          </label>

        `).join("")}

      </div>

    </div>

  `;

}


/* ==========================================================================
   13. RENDER EXTRA BOBA
   ========================================================================== */

function renderExtraBobaSection() {

  return `

    <div class="custom-group">

      <div class="custom-group-title">
        Extra Boba
      </div>

      <div class="custom-group-hint">
        Add extra boba for ${money(CONFIG.customization.extraBobaPrice)}.
      </div>


      <label class="custom-option">

        <input
          type="checkbox"
          id="extra-boba-checkbox"
        >

        <span class="custom-option-label">
          Extra Boba / Tapioca
        </span>

        <span class="custom-option-price">
          +${money(CONFIG.customization.extraBobaPrice)}
        </span>

      </label>

    </div>

  `;

}


/* ==========================================================================
   14. RENDER BOBA FLAVOURS
   ========================================================================== */

function renderBobaFlavours(type) {

  const area = $("#boba-flavour-area");

  if (!area) return;


  const flavours =
    type === "popping"
      ? CONFIG.customization.poppingBoba
      : CONFIG.customization.chewyBoba;


  if (!flavours.length) {

    area.innerHTML = "";

    return;

  }


  area.innerHTML = `

    <div class="custom-group">

      <div class="custom-group-title">
        ${type === "popping" ? "Popping Boba Flavour" : "Chewy Boba"}
      </div>

      <div class="custom-group-hint">
        Choose one.
      </div>


      <div class="custom-options">

        ${flavours.map(flavour => `

          <label class="custom-option">

            <input
              type="radio"
              name="boba-flavour"
              value="${escapeHTML(flavour)}"
            >

            <span class="custom-option-label">
              ${escapeHTML(flavour)}
            </span>

          </label>

        `).join("")}

      </div>

    </div>

  `;

}


/* ==========================================================================
   15. CLOSE CUSTOMIZATION
   ========================================================================== */

function closeCustomization() {

  const modal = $("#custom-modal");

  if (!modal) return;

  modal.classList.remove("is-open");

  document.body.classList.remove("modal-open");

  currentCustomization = null;

  selectedBobaType = null;
  selectedBobaFlavour = null;
  selectedToppings = [];
  selectedExtraBoba = false;

}


/* ==========================================================================
   16. CUSTOMIZATION PRICE
   ========================================================================== */

function getCustomizationPrice() {

  let extra = 0;

  extra +=
    selectedToppings.length *
    CONFIG.customization.toppingPrice;

  if (selectedExtraBoba) {

    extra += CONFIG.customization.extraBobaPrice;

  }

  return extra;

}


function updateCustomizationPrice() {

  const priceElement = $("#custom-modal-price");

  if (!priceElement || !currentCustomization) return;


  const total =
    currentCustomization.item.price +
    getCustomizationPrice();


  priceElement.textContent = money(total);

}


/* ==========================================================================
   17. READ CUSTOMIZATION
   ========================================================================== */

function readCustomization() {

  if (!currentCustomization) return null;


  const bobaInput =
    document.querySelector(
      'input[name="boba-type"]:checked'
    );


  const flavourInput =
    document.querySelector(
      'input[name="boba-flavour"]:checked'
    );


  const toppingInputs =
    $all(
      'input[name="topping"]:checked'
    );


  selectedBobaType =
    bobaInput ? bobaInput.value : null;


  selectedBobaFlavour =
    flavourInput ? flavourInput.value : null;


  selectedToppings =
    toppingInputs.map(
      input => input.value
    );


  const extraBobaCheckbox =
    $("#extra-boba-checkbox");


  selectedExtraBoba =
    Boolean(
      extraBobaCheckbox &&
      extraBobaCheckbox.checked
    );


  return {

    bobaType: selectedBobaType,

    bobaFlavour: selectedBobaFlavour,

    toppings: [...selectedToppings],

    extraBoba: selectedExtraBoba

  };

}


/* ==========================================================================
   18. VALIDATE CUSTOMIZATION
   ========================================================================== */

function validateCustomization(customization) {

  if (!customization) {

    return {
      valid: false,
      message: "Please choose your customization."
    };

  }


  if (!customization.bobaType) {

    return {
      valid: false,
      message: "Please choose a boba type."
    };

  }


  if (
    customization.bobaType === "popping" &&
    !customization.bobaFlavour
  ) {

    return {
      valid: false,
      message: "Please choose a popping boba flavour."
    };

  }


  if (
    customization.bobaType === "chewy" &&
    !customization.bobaFlavour
  ) {

    return {
      valid: false,
      message: "Please choose chewy boba."
    };

  }


  if (
    customization.toppings.length >
    CONFIG.customization.maxToppings
  ) {

    return {
      valid: false,
      message:
        `You can choose up to ${CONFIG.customization.maxToppings} toppings.`
    };

  }


  return {
    valid: true
  };

}


/* ==========================================================================
   19. CART STORAGE
   ========================================================================== */

function loadCart() {

  try {

    const saved =
      localStorage.getItem(
        CONFIG.cartStorageKey
      );


    if (!saved) return [];


    const parsed =
      JSON.parse(saved);


    return Array.isArray(parsed)
      ? parsed
      : [];

  } catch (error) {

    console.warn(
      "Could not load cart:",
      error
    );

    return [];

  }

}


function saveCart() {

  try {

    localStorage.setItem(
      CONFIG.cartStorageKey,
      JSON.stringify(cart)
    );

  } catch (error) {

    console.warn(
      "Could not save cart:",
      error
    );

  }

}


/* ==========================================================================
   20. CART ITEM PRICE
   ========================================================================== */

function getCartItemUnitPrice(cartItem) {

  let price = Number(cartItem.basePrice || 0);


  if (cartItem.customization) {

    price +=
      (cartItem.customization.toppings?.length || 0) *
      CONFIG.customization.toppingPrice;


    if (
      cartItem.customization.extraBoba
    ) {

      price +=
        CONFIG.customization.extraBobaPrice;

    }

  }


  return price;

}


/* ==========================================================================
   21. ADD TO CART
   ========================================================================== */

function addToCart(item, customization = null) {

  const unitPrice =
    item.price +
    (
      customization
        ? (
            (customization.toppings?.length || 0) *
            CONFIG.customization.toppingPrice
          )
        : 0
    ) +
    (
      customization?.extraBoba
        ? CONFIG.customization.extraBobaPrice
        : 0
    );


  const customizationKey =
    customization
      ? JSON.stringify(customization)
      : "";


  const existing =
    cart.find(cartItem =>

      cartItem.itemId === item.id &&
      JSON.stringify(
        cartItem.customization || null
      ) === customizationKey

    );


  if (existing) {

    existing.quantity = Math.min(
      CONFIG.maxQty,
      existing.quantity + 1
    );

  } else {

    cart.push({

      cartId:
        `${item.id}-${Date.now()}-${Math.random()
          .toString(36)
          .slice(2, 8)}`,

      itemId: item.id,

      name: item.name,

      basePrice: item.price,

      quantity: 1,

      customization: customization
        ? {
            bobaType:
              customization.bobaType,

            bobaFlavour:
              customization.bobaFlavour,

            toppings:
              [...(customization.toppings || [])],

            extraBoba:
              Boolean(customization.extraBoba)
          }
        : null

    });

  }


  saveCart();

  renderCart();

  updateCartCount();

}


/* ==========================================================================
   22. REMOVE CART ITEM
   ========================================================================== */

function removeCartItem(cartId) {

  cart =
    cart.filter(
      item => item.cartId !== cartId
    );


  saveCart();

  renderCart();

  updateCartCount();

}


/* ==========================================================================
   23. CHANGE CART QUANTITY
   ========================================================================== */

function changeCartQuantity(cartId, amount) {

  const item =
    cart.find(
      cartItem =>
        cartItem.cartId === cartId
    );


  if (!item) return;


  item.quantity += amount;


  if (item.quantity <= 0) {

    removeCartItem(cartId);

    return;

  }


  item.quantity =
    Math.min(
      CONFIG.maxQty,
      item.quantity
    );


  saveCart();

  renderCart();

  updateCartCount();

}


/* ==========================================================================
   24. CART TOTALS
   ========================================================================== */

function getCartSubtotal() {

  return cart.reduce(

    (total, item) => {

      return total +
        (
          getCartItemUnitPrice(item) *
          item.quantity
        );

    },

    0

  );

}


function getDeliveryFee() {

  if (orderType !== "delivery") {

    return 0;

  }

  return Number(CONFIG.deliveryFee || 0);

}


function getCartTotal() {

  return (
    getCartSubtotal() +
    getDeliveryFee()
  );

}


/* ==========================================================================
   25. CART COUNT
   ========================================================================== */

function updateCartCount() {

  const countElement =
    $("#cart-count");

  if (!countElement) return;


  const count =
    cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );


  countElement.textContent =
    String(count);


  countElement.hidden =
    count === 0;

}


/* ==========================================================================
   26. CART CUSTOMIZATION TEXT
   ========================================================================== */

function getCustomizationText(customization) {

  if (!customization) return "";


  const parts = [];


  if (customization.bobaType) {

    parts.push(
      customization.bobaType === "popping"
        ? "Popping Boba"
        : "Chewy Boba"
    );

  }


  if (customization.bobaFlavour) {

    parts.push(
      customization.bobaFlavour
    );

  }


  if (
    customization.toppings &&
    customization.toppings.length
  ) {

    parts.push(
      `Toppings: ${customization.toppings.join(", ")}`
    );

  }


  if (customization.extraBoba) {

    parts.push(
      "Extra Boba"
    );

  }


  return parts.join(" • ");

}


/* ==========================================================================
   27. RENDER CART
   ========================================================================== */

function renderCart() {

  const itemsContainer =
    $("#cart-items");

  const emptyState =
    $("#cart-empty");

  const footer =
    $("#cart-footer");


  if (!itemsContainer) return;


  if (!cart.length) {

    itemsContainer.innerHTML = "";

    if (emptyState) {
      emptyState.hidden = false;
    }

    if (footer) {
      footer.hidden = true;
    }

    updateCartTotals();

    return;

  }


  if (emptyState) {

    emptyState.hidden = true;

  }


  if (footer) {

    footer.hidden = false;

  }


  itemsContainer.innerHTML =
    cart.map(item => {

      const unitPrice =
        getCartItemUnitPrice(item);


      const lineTotal =
        unitPrice *
        item.quantity;


      const customizationText =
        getCustomizationText(
          item.customization
        );


      return `

        <div
          class="cart-item"
          data-cart-id="${escapeHTML(item.cartId)}"
        >

          <div class="cart-item-main">

            <div class="cart-item-name">
              ${escapeHTML(item.name)}
            </div>


            ${
              customizationText
                ? `
                  <div class="cart-item-details">
                    ${escapeHTML(customizationText)}
                  </div>
                `
                : ""
            }


            <div class="cart-item-price">
              ${money(unitPrice)}
            </div>

          </div>


          <div class="cart-item-controls">

            <button
              type="button"
              class="cart-qty-btn"
              data-cart-action="decrease"
              data-cart-id="${escapeHTML(item.cartId)}"
              aria-label="Decrease quantity"
            >
              −
            </button>


            <span class="cart-qty">
              ${item.quantity}
            </span>


            <button
              type="button"
              class="cart-qty-btn"
              data-cart-action="increase"
              data-cart-id="${escapeHTML(item.cartId)}"
              aria-label="Increase quantity"
            >
              +
            </button>


            <button
              type="button"
              class="cart-remove-btn"
              data-cart-action="remove"
              data-cart-id="${escapeHTML(item.cartId)}"
            >
              Remove
            </button>

          </div>


          <div class="cart-item-line-total">
            ${money(lineTotal)}
          </div>

        </div>

      `;

    }).join("");


  updateCartTotals();

}


/* ==========================================================================
   28. UPDATE CART TOTALS
   ========================================================================== */

function updateCartTotals() {

  const subtotal =
    getCartSubtotal();


  const deliveryFee =
    getDeliveryFee();


  const total =
    subtotal +
    deliveryFee;


  const subtotalElement =
    $("#cart-subtotal");

  const deliveryRow =
    $("#cart-delivery-row");

  const deliveryFeeElement =
    $("#cart-delivery-fee");

  const totalElement =
    $("#cart-total");


  if (subtotalElement) {

    subtotalElement.textContent =
      money(subtotal);

  }


  if (deliveryRow) {

    deliveryRow.hidden =
      orderType !== "delivery";

  }


  if (deliveryFeeElement) {

    deliveryFeeElement.textContent =
      money(deliveryFee);

  }


  if (totalElement) {

    totalElement.textContent =
      money(total);

  }

}


/* ==========================================================================
   29. CART DRAWER
   ========================================================================== */

function openCart() {

  const overlay =
    $("#cart-overlay");

  const drawer =
    $("#cart-drawer");


  if (overlay) {

    overlay.classList.add("is-open");

  }


  if (drawer) {

    drawer.classList.add("is-open");

  }


  document.body.classList.add(
    "cart-open"
  );

}


function closeCart() {

  const overlay =
    $("#cart-overlay");

  const drawer =
    $("#cart-drawer");


  if (overlay) {

    overlay.classList.remove("is-open");

  }


  if (drawer) {

    drawer.classList.remove("is-open");

  }


  document.body.classList.remove(
    "cart-open"
  );

}


/* ==========================================================================
   30. ORDER TYPE
   ========================================================================== */

function setOrderType(type) {

  if (
    type !== "delivery" &&
    type !== "pickup"
  ) {

    return;

  }


  orderType = type;


  $all(
    '[data-type="delivery"], [data-type="pickup"]'
  ).forEach(button => {

    button.classList.toggle(
      "active",
      button.dataset.type === type
    );

    button.setAttribute(
      "aria-pressed",
      button.dataset.type === type
        ? "true"
        : "false"
    );

  });


  const deliveryFields =
    $all("[data-delivery-only]");


  deliveryFields.forEach(element => {

    element.hidden =
      type !== "delivery";

  });


  const hint =
    $("#order-type-hint");


  if (hint) {

    hint.textContent =
      type === "delivery"
        ? "Please enter your delivery details."
        : "Pickup order selected.";

  }


  updateCartTotals();

}


/* ==========================================================================
   31. CUSTOMER DATA
   ========================================================================== */

function getCustomerData() {

  const name =
    $("#customer-name")?.value.trim() || "";


  const contact =
    $("#customer-contact")?.value.trim() || "";


  const area =
    $("#customer-area")?.value.trim() || "";


  const address =
    $("#customer-address")?.value.trim() || "";


  const note =
    $("#customer-note")?.value.trim() || "";


  return {

    name,
    contact,
    area,
    address,
    note

  };

}


/* ==========================================================================
   32. VALIDATE ORDER
   ========================================================================== */

function validateOrder() {

  if (!cart.length) {

    return {
      valid: false,
      message: "Your cart is empty."
    };

  }


  if (!orderType) {

    return {
      valid: false,
      message: "Please choose Delivery or Pickup."
    };

  }


  const customer =
    getCustomerData();


  if (!customer.name) {

    return {
      valid: false,
      message: "Please enter your name."
    };

  }


  if (!customer.contact) {

    return {
      valid: false,
      message: "Please enter your contact number."
    };

  }


  if (
    orderType === "delivery" &&
    !customer.address
  ) {

    return {
      valid: false,
      message: "Please enter your delivery address."
    };

  }


  return {
    valid: true,
    customer
  };

}


/* ==========================================================================
   33. BUILD WHATSAPP MESSAGE
   ========================================================================== */

function buildWhatsAppMessage() {

  const validation =
    validateOrder();


  if (!validation.valid) {

    alert(validation.message);

    return null;

  }


  const customer =
    validation.customer;


  const lines = [];


  lines.push(
    "Hello Boba Bay! 👋"
  );


  lines.push(
    ""
  );


  lines.push(
    "*New Order*"
  );


  lines.push(
    ""
  );


  cart.forEach((item, index) => {

    const unitPrice =
      getCartItemUnitPrice(item);


    const lineTotal =
      unitPrice *
      item.quantity;


    lines.push(
      `${index + 1}. ${item.name} x${item.quantity}`
    );


    if (item.customization) {

      if (item.customization.bobaType) {

        lines.push(
          `   Boba: ${
            item.customization.bobaType === "popping"
              ? "Popping Boba"
              : "Chewy Boba"
          }`
        );

      }


      if (item.customization.bobaFlavour) {

        lines.push(
          `   Flavour: ${item.customization.bobaFlavour}`
        );

      }


      if (
        item.customization.toppings &&
        item.customization.toppings.length
      ) {

        lines.push(
          `   Toppings: ${item.customization.toppings.join(", ")}`
        );

      }


      if (item.customization.extraBoba) {

        lines.push(
          "   Extra Boba: Yes"
        );

      }

    }


    lines.push(
      `   ${money(lineTotal)}`
    );


    lines.push(
      ""
    );

  });


  lines.push(
    "*Order Details*"
  );


  lines.push(
    `Order Type: ${
      orderType === "delivery"
        ? "Delivery"
        : "Pickup"
    }`
  );


  lines.push(
    `Name: ${customer.name}`
  );


  lines.push(
    `Contact: ${customer.contact}`
  );


  if (orderType === "delivery") {

    if (customer.area) {

      lines.push(
        `Area: ${customer.area}`
      );

    }


    lines.push(
      `Address: ${customer.address}`
    );

  }


  if (customer.note) {

    lines.push(
      `Note: ${customer.note}`
    );

  }


  lines.push(
    ""
  );


  lines.push(
    "*Payment Summary*"
  );


  lines.push(
    `Subtotal: ${money(getCartSubtotal())}`
  );


  if (orderType === "delivery") {

    lines.push(
      `Delivery: ${money(getDeliveryFee())}`
    );

  }


  lines.push(
    `*Total: ${money(getCartTotal())}*`
  );


  return lines.join("\n");

}


/* ==========================================================================
   34. SEND WHATSAPP ORDER
   ========================================================================== */

function sendWhatsAppOrder() {

  const message =
    buildWhatsAppMessage();


  if (!message) return;


  if (
    !CONFIG.whatsapp ||
    CONFIG.whatsapp === "255000000000"
  ) {

    alert(
      "Please add the restaurant WhatsApp number in script2.js first."
    );

    return;

  }


  const url =
    `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;


  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );

}


/* ==========================================================================
   35. CLEAR CART
   ========================================================================== */

function clearCart() {

  if (!cart.length) return;


  const confirmed =
    window.confirm(
      "Clear all items from your cart?"
    );


  if (!confirmed) return;


  cart = [];

  saveCart();

  renderCart();

  updateCartCount();

}


/* ==========================================================================
   36. EVENT HANDLERS
   ========================================================================== */

function setupEvents() {


  /* ------------------------------------------------------------------------
     Add menu item
     ------------------------------------------------------------------------ */

  document.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(
          "[data-add-item]"
        );


      if (!button) return;


      const item =
        findMenuItem(
          button.dataset.addItem
        );


      if (!item) return;


      if (item.customizable) {

        openCustomization(item);

      } else {

        addToCart(item);

        showAddedMessage(
          item.name
        );

      }

    }
  );


  /* ------------------------------------------------------------------------
     Category navigation
     ------------------------------------------------------------------------ */

  document.addEventListener(
    "click",
    event => {

      const link =
        event.target.closest(
          "#catNav a"
        );


      if (!link) return;


      const target =
        document.querySelector(
          link.getAttribute("href")
        );


      if (!target) return;


      event.preventDefault();


      const headerHeight =
        document.querySelector(
          ".site-header"
        )?.offsetHeight || 0;


      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        12;


      window.scrollTo({

        top,

        behavior: "smooth"

      });

    }
  );


  /* ------------------------------------------------------------------------
     Boba type
     ------------------------------------------------------------------------ */

  document.addEventListener(
    "change",
    event => {

      const input =
        event.target.closest(
          'input[name="boba-type"]'
        );


      if (!input) return;


      selectedBobaType =
        input.value;


      selectedBobaFlavour = null;


      renderBobaFlavours(
        input.value
      );


      updateCustomizationPrice();

    }
  );


  /* ------------------------------------------------------------------------
     Boba flavour
     ------------------------------------------------------------------------ */

  document.addEventListener(
    "change",
    event => {

      const input =
        event.target.closest(
          'input[name="boba-flavour"]'
        );


      if (!input) return;


      selectedBobaFlavour =
        input.value;


      updateCustomizationPrice();

    }
  );


  /* ------------------------------------------------------------------------
     Toppings
     ------------------------------------------------------------------------ */

  document.addEventListener(
    "change",
    event => {

      const input =
        event.target.closest(
          'input[name="topping"]'
        );


      if (!input) return;


      const checked =
        $all(
          'input[name="topping"]:checked'
        );


      if (
        checked.length >
        CONFIG.customization.maxToppings
      ) {

        input.checked = false;


        alert(
          `You can choose up to ${CONFIG.customization.maxToppings} toppings.`
        );


        return;

      }


      selectedToppings =
        checked.map(
          checkbox =>
            checkbox.value
        );


      updateCustomizationPrice();

    }
  );


  /* ------------------------------------------------------------------------
     Extra boba
     ------------------------------------------------------------------------ */

  document.addEventListener(
    "change",
    event => {

      if (
        event.target.id !==
        "extra-boba-checkbox"
      ) {

        return;

      }


      selectedExtraBoba =
        event.target.checked;


      updateCustomizationPrice();

    }
  );


  /* ------------------------------------------------------------------------
     Add customized item
     ------------------------------------------------------------------------ */

  const customAddButton =
    $("#custom-add-btn");


  if (customAddButton) {

    customAddButton.addEventListener(
      "click",
      () => {

        if (!currentCustomization) return;


        const customization =
          readCustomization();


        const validation =
          validateCustomization(
            customization
          );


        if (!validation.valid) {

          alert(
            validation.message
          );

          return;

        }


        addToCart(
          currentCustomization.item,
          customization
        );


        const itemName =
          currentCustomization.item.name;


        closeCustomization();


        showAddedMessage(
          itemName
        );

      }
    );

  }


  /* ------------------------------------------------------------------------
     Close customization modal
     ------------------------------------------------------------------------ */

  document.addEventListener(
    "click",
    event => {

      if (
        event.target.matches(
          "[data-close-custom-modal]"
        )
      ) {

        closeCustomization();

      }

    }
  );


  /* ------------------------------------------------------------------------
     Escape key
     ------------------------------------------------------------------------ */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key !== "Escape"
      ) return;


      if (currentCustomization) {

        closeCustomization();

        return;

      }


      closeCart();

    }
  );


  /* ------------------------------------------------------------------------
     Cart open
     ------------------------------------------------------------------------ */

  const cartButton =
    $("#cart-toggle-btn");


  if (cartButton) {

    cartButton.addEventListener(
      "click",
      openCart
    );

  }


  /* ------------------------------------------------------------------------
     Cart close
     ------------------------------------------------------------------------ */

  const cartClose =
    $("#cart-close-btn");


  if (cartClose) {

    cartClose.addEventListener(
      "click",
      closeCart
    );

  }


  /* ------------------------------------------------------------------------
     Cart overlay
     ------------------------------------------------------------------------ */

  const cartOverlay =
    $("#cart-overlay");


  if (cartOverlay) {

    cartOverlay.addEventListener(
      "click",
      closeCart
    );

  }


  /* ------------------------------------------------------------------------
     Cart actions
     ------------------------------------------------------------------------ */

  document.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(
          "[data-cart-action]"
        );


      if (!button) return;


      const cartId =
        button.dataset.cartId;


      const action =
        button.dataset.cartAction;


      if (
        action === "increase"
      ) {

        changeCartQuantity(
          cartId,
          1
        );

      }


      if (
        action === "decrease"
      ) {

        changeCartQuantity(
          cartId,
          -1
        );

      }


      if (
        action === "remove"
      ) {

        removeCartItem(
          cartId
        );

      }

    }
  );


  /* ------------------------------------------------------------------------
     Order type
     ------------------------------------------------------------------------ */

  document.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(
          "[data-type]"
        );


      if (!button) return;


      if (
        button.dataset.type !==
          "delivery" &&
        button.dataset.type !==
          "pickup"
      ) {

        return;

      }


      setOrderType(
        button.dataset.type
      );

    }
  );


  /* ------------------------------------------------------------------------
     WhatsApp
     ------------------------------------------------------------------------ */

  const whatsappButton =
    $("#whatsapp-order-btn");


  if (whatsappButton) {

    whatsappButton.addEventListener(
      "click",
      sendWhatsAppOrder
    );

  }


  /* ------------------------------------------------------------------------
     Clear cart
     ------------------------------------------------------------------------ */

  const clearButton =
    $("#clear-cart-btn");


  if (clearButton) {

    clearButton.addEventListener(
      "click",
      clearCart
    );

  }


  /* ------------------------------------------------------------------------
     Delivery fee updates
     ------------------------------------------------------------------------ */

  [
    "#customer-area",
    "#customer-address",
    "#customer-note",
    "#customer-name",
    "#customer-contact"
  ].forEach(selector => {

    const element =
      $(selector);


    if (!element) return;


    element.addEventListener(
      "input",
      () => {

        updateCartTotals();

      }
    );

  });

}


/* ==========================================================================
   37. ADDED MESSAGE
   ========================================================================== */

function showAddedMessage(itemName) {

  const existing =
    document.querySelector(
      ".cart-added-message"
    );


  if (existing) {

    existing.remove();

  }


  const message =
    document.createElement(
      "div"
    );


  message.className =
    "cart-added-message";


  message.textContent =
    `${itemName} added to cart`;


  document.body.appendChild(
    message
  );


  requestAnimationFrame(
    () => {

      message.classList.add(
        "show"
      );

    }
  );


  setTimeout(
    () => {

      message.classList.remove(
        "show"
      );


      setTimeout(
        () => {

          message.remove();

        },
        250
      );

    },
    1800
  );

}


/* ==========================================================================
   38. YEAR
   ========================================================================== */

function setYear() {

  const year =
    $("#year");


  if (!year) return;


  year.textContent =
    new Date().getFullYear();

}


/* ==========================================================================
   39. INITIALIZE
   ========================================================================== */

function init() {

  renderCategoryNav();

  renderMenu();

  renderCart();

  updateCartCount();

  setYear();

  setupEvents();

  watchCategories();

}


/* ==========================================================================
   40. START
   ========================================================================== */

if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    init
  );

} else {

  init();

}
