/* ==========================================================================
   BOBA BAY — ORDER ONLINE
   File: script2.js

   THIS SCRIPT CONTROLS:
   - Menu rendering
   - Category navigation
   - Product customization
   - Boba selection
   - Toppings
   - Extra boba / tapioca
   - Shopping cart
   - Delivery / Pickup
   - Customer details
   - WhatsApp ordering

   IMPORTANT:
   Restaurant branding is controlled by the HTML.

   This script does NOT change:
   - Restaurant name
   - Tagline
   - Logo
   - Address
   - Phone displayed on page
   - Opening hours
   - Social links
   ========================================================================== */


/* ==========================================================================
   1. CONFIGURATION
   ========================================================================== */

const CONFIG = {

  /* WhatsApp number.
     Enter digits only, international format. */
  whatsapp: "255000000000",

  /* Currency */
  currency: "TSh",

  /* Delivery fee */
  deliveryFee: 0,

  /* Maximum quantity of one cart line */
  maxQty: 99,


  /* ------------------------------------------------------------------------
     BOBA
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
        "Lime",
        "Pink Lemon",
        "Lemon",
        "Kiwi",
        "Watermelon",
        "Raspberry",
        "Passion",
        "Lychee",
        "Pomegranate",
        "Peach",
        "Taro",
        "Tropical"
      ]

    },

    chewy: {

      label: "Chewy Boba",

      flavours: [
        "Tapioca"
      ]

    }

  },


  /* ------------------------------------------------------------------------
     TOPPINGS
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


  /* ------------------------------------------------------------------------
     EXTRA BOBA
     ------------------------------------------------------------------------ */

  extraBoba: {

    label: "Extra Boba / Tapioca",

    price: 4000

  }

};


/* ==========================================================================
   2. PRODUCT HELPER
   ========================================================================== */

const p = (
  name,
  price,
  desc = "",
  extra = {}
) => ({
  name,
  price,
  desc,
  ...extra
});


/* ==========================================================================
   3. MENU
   ========================================================================== */

const MENU = [

  /* ------------------------------------------------------------------------
     WEEKEND SPECIALS · MILK
     ------------------------------------------------------------------------ */

  {
    id: "weekend-milk",
    name: "Weekend Specials · Milk",
    subtitle: "Special drinks and creamy favourites.",
    custom: true,

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


  /* ------------------------------------------------------------------------
     KUNAFA
     ------------------------------------------------------------------------ */

  {
    id: "kunafa",
    name: "Kunafa",
    subtitle: "Rich and indulgent desserts.",
    custom: false,

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


  /* ------------------------------------------------------------------------
     ICE CREAM
     ------------------------------------------------------------------------ */

  {
    id: "ice-cream",
    name: "Ice Cream",
    subtitle: "Cool and creamy treats.",
    custom: false,

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
        "Half milkshake half ice-cream! Your choice of milkshake and ice-cream topped with tapioca or popping boba."
      )

    ]

  },


  /* ------------------------------------------------------------------------
     MILK
     ------------------------------------------------------------------------ */

  {
    id: "milk",
    name: "Milk",
    subtitle: "Smooth, creamy and full of flavour.",
    custom: true,

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
        "It's definitely a drink for sakura lovers."
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
        "A nostalgic, caffeine-free indulgence that everyone can enjoy"
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
        "Strawberry milkshake, whipped cream and strawberry"
      ),

      p(
        "Strawberry Jasmine Milk",
        null
      )

    ]

  },


  /* ------------------------------------------------------------------------
     SLUSHY
     ------------------------------------------------------------------------ */

  {
    id: "slushy",
    name: "Slushy",
    subtitle: "Cold, colourful and refreshing.",
    custom: true,

    items: [

      p("Icey Lemon", 8000),

      p("Apple Burst", 8000),

      p("Winter Blaze", 10000),

      p("Red Grape", 10000),

      p(
        "Bloody Vampire",
        10000,
        "Cranberry Slush"
      ),

      p(
        "Witches Brew",
        10000,
        "Kiwi Slush"
      ),

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
        "Mango + Blackberry"
      ),

      p(
        "Mixed Berry",
        10000,
        "Mixed berry blend"
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


  /* ------------------------------------------------------------------------
     FIZZY
     ------------------------------------------------------------------------ */

  {
    id: "fizzy",
    name: "Fizzy",
    subtitle: "Refreshing sparkling drinks.",
    custom: true,

    items: [

      p(
        "Frozen Strawberry Fizz",
        8000
      ),

      p(
        "Passionfruit & Mango Fizz",
        8000
      ),

      p(
        "Mojito Fizz",
        8000
      ),

      p(
        "Red Raspberry Fizz",
        8000
      ),

      p(
        "Electric Fizz",
        8000,
        "A blue fizzy drink that is super delicious"
      ),

      p(
        "Grape Soda",
        null
      ),

      p(
        "Energizer",
        null
      )

    ]

  },


  /* ------------------------------------------------------------------------
     FRUIT TEA
     ------------------------------------------------------------------------ */

  {
    id: "fruit-tea",
    name: "Fruit Tea",
    subtitle: "Fresh fruity combinations.",
    custom: false,

    items: [

      p(
        "Mango Dream",
        8000,
        "Mango + Orange"
      ),

      p(
        "Summer Blaze",
        10000,
        "Strawberry + Blueberry"
      ),

      p(
        "Super Melon",
        8000,
        "Watermelon + Strawberry"
      ),

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


  /* ------------------------------------------------------------------------
     CHOCOLATE
     ------------------------------------------------------------------------ */

  {
    id: "chocolate",
    name: "Chocolate",
    subtitle: "Rich chocolate drinks.",
    custom: false,

    items: [

      p(
        "Chocolate",
        11000
      ),

      p(
        "Choco Mint",
        12000,
        "Chocolate Milk paired with mint and chocolate chunks"
      ),

      p(
        "Nutella Shake",
        12000
      ),

      p(
        "Choco Overload",
        13000,
        "Chocolate Milkshake with Chocolate chunks and extra Chocolate drizzles"
      ),

      p(
        "Hazelnut",
        12000
      ),

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
        "KitKat milk topped with whipped cream and
