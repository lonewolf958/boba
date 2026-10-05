/* =========================================================================
   BOBA BAY — ORDER ONLINE
   File: script.js

   PURPOSE
   - Render the complete menu
   - Render category navigation
   - Product customization
   - Shopping cart
   - Quantity controls
   - Delivery / Pickup
   - Customer details
   - WhatsApp ordering

   IMPORTANT
   Restaurant name, tagline, address, phone, socials, etc.
   are already written in index.html.
   This script does NOT render those details.
   ========================================================================= */


/* =========================================================================
   1. ORDERING SETTINGS
   ========================================================================= */

const CONFIG = {

  /* WhatsApp number used for orders */
  whatsapp: "255000000000",

  /* Currency */
  currency: "TSh",

  /* Delivery */
  deliveryFee: 0,

  /* Maximum quantity of one item */
  maxQty: 99,

  /* -----------------------------------------------------------------------
     BOBA
     ----------------------------------------------------------------------- */

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
      label: "Chewy Boba",
      flavour: "Tapioca"
    }
  },

  /* -----------------------------------------------------------------------
     TOPPINGS
     ----------------------------------------------------------------------- */

  toppings: {
    price: 1000,
    max: 2,

    items: [
      "Strawberry Chunks",
      "Marshmallows",
      "Chocolate Sprinkles",
      "Whipped Cream",
      "Toasted Nuts",
      "Oreo Crumbs"
    ]
  },

  /* -----------------------------------------------------------------------
