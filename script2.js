/* ============================================================
   BOBA BEAR — ORDER ONLINE
   FILE: style2.css

   DESIGN ONLY

   If you want to change the website's appearance,
   start with the DESIGN SETTINGS section below.
   ============================================================ */


/* ============================================================
   1. DESIGN SETTINGS — EDIT HERE
   ============================================================ */

:root {

  /* ---------- Main Colours ---------- */

  --color-primary: #0f766e;
  --color-primary-dark: #0b4f4a;

  --color-background: #f2f8f7;
  --color-card: #ffffff;

  --color-text: #10282a;
  --color-muted: #587370;

  --color-accent: #f26b3a;
  --color-accent-dark: #d9541f;

  --color-border: #d6e5e2;

  --color-success: #1fa855;

  /* ---------- Special Colours ---------- */

  --color-taro: #6d5fd0;
  --color-light-accent: #fff1ea;
  --color-light-primary: #e6f4f1;

  /* ---------- Footer ---------- */

  --color-footer: #0a3a3a;
  --color-footer-text: #d7ebe8;

  /* ---------- Typography ---------- */

  --font-heading: "Fraunces", Georgia, serif;
  --font-body: "Manrope", system-ui, sans-serif;

  /* ---------- Layout ---------- */

  --max-width: 1120px;

  --header-height: 64px;

  --radius-small: 12px;
  --radius-medium: 16px;
  --radius-large: 20px;

  /* ---------- Shadows ---------- */

  --shadow-small:
    0 3px 12px rgba(11, 79, 74, 0.08);

  --shadow:
    0 6px 20px rgba(11, 79, 74, 0.12);

  --shadow-large:
    0 12px 30px rgba(11, 79, 74, 0.18);
}


/* ============================================================
   2. BASIC RESET
   ============================================================ */

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 130px;
}

body {
  margin: 0;
  background: var(--color-background);
  color: var(--color-text);

  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.5;

  overflow-x: hidden;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}


/* ============================================================
   3. TYPOGRAPHY
   ============================================================ */

h1,
h2,
h3,
h4 {
  margin: 0 0 8px;
  font-family: var(--font-heading);
  line-height: 1.15;
}

h2 {
  color: var(--color-primary-dark);
}

p {
  margin-top: 0;
}

.page-title {
  margin-bottom: 8px;

  color: var(--color-primary-dark);

  font-size: clamp(
    2rem,
    6vw,
    2.8rem
  );
}

.page-intro {
  max-width: 760px;

  color: var(--color-muted);

  margin-bottom: 24px;
}


/* ============================================================
   4. GENERAL LAYOUT
   ============================================================ */

.wrap {
  width: min(
    var(--max-width),
    calc(100% - 32px)
  );

  margin-inline: auto;
}


/* ============================================================
   5. HEADER
   ============================================================ */

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;

  background: var(--color-primary-dark);

  box-shadow: var(--shadow-small);
}

.header-inner {
  min-height: var(--header-height);

  display: flex;
  align-items: center;
  gap: 12px;
}


/* Brand */

.brand {
  display: flex;
  align-items: center;
  gap: 8px;

  margin-right: auto;

  color: #ffffff;

  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;

  text-decoration: none;
}

.brand-logo {
  width: 40px;
  height: 40px;

  display: grid;
  place-items: center;

  background: #ffffff;

  border-radius: 50%;

  font-size: 1.25rem;
}


/* ============================================================
   6. BUTTONS
   ============================================================ */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 999px;

  padding: 12px 22px;

  font-weight: 800;

  text-decoration: none;

  transition:
    transform 0.15s ease,
    background 0.15s ease;
}

.btn:hover:not(:disabled) {
  transform: translateY(-1px);
}

.btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.btn-small {
  padding: 9px 16px;
  font-size: 0.9rem;
}

.btn-primary {
  background: #ffffff;
  color: var(--color-primary-dark);
}

.btn-primary:hover {
  background: #e6f6f3;
}

.btn-accent {
  background: var(--color-accent);
  color: #ffffff;
}

.btn-accent:hover:not(:disabled) {
  background: var(--color-accent-dark);
}


/* ============================================================
   7. ORDER PAGE
   ============================================================ */

.order-page {
  padding: 30px 0 50px;
}


/* ============================================================
   8. CATEGORY NAVIGATION
   ============================================================ */

.category-bar {
  position: sticky;
  top: var(--header-height);
  z-index: 50;

  padding: 8px 0;

  background: var(--color-background);
}

.category-nav {
  display: flex;
  gap: 8px;

  overflow-x: auto;

  padding-bottom: 4px;

  scrollbar-width: thin;
}

.category-nav a {
  flex: 0 0 auto;

  padding: 8px 16px;

  background: #ffffff;

  border: 1px solid var(--color-border);
  border-radius: 999px;

  color: var(--color-primary-dark);

  font-size: 0.9rem;
  font-weight: 700;

  text-decoration: none;
}

.category-nav a.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #ffffff;
}


/* ============================================================
   9. MENU CATEGORIES
   ============================================================ */

.menu-category {
  scroll-margin-top: 130px;

  padding-top: 22px;
}

.menu-category-title {
  display: flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 12px;

  color: var(--color-primary-dark);

  font-size: 1.6rem;
}

.menu-category-title::before {
  content: "";

  width: 5px;
  height: 30px;

  background: var(--color-accent);

  border-radius: 4px;
}


/* Category notes */

.menu-note {
  margin-bottom: 12px;

  padding: 10px 12px;

  background: #fff7d6;

  border: 1px dashed #d9b84a;

  border-radius: var(--radius-small);

  color: #5f531e;

  font-size: 0.85rem;
}


/* ============================================================
   10. MENU LIST
   ============================================================ */

.menu-list {
  margin: 0;
  padding: 0;

  list-style: none;

  background: var(--color-card);

  border-top: 4px solid var(--color-primary);

  border-radius: var(--radius-large);

  box-shadow: var(--shadow);

  overflow: hidden;
}


/* Product */

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 16px;

  padding: 14px 16px;

  border-bottom: 1px solid var(--color-border);
}

.menu-item:last-child {
  border-bottom: 0;
}

.menu-info {
  min-width: 0;
}

.menu-name {
  display: block;

  font-weight: 800;
}

.menu-description {
  display: block;

  margin-top: 3px;

  color: var(--color-muted);

  font-size: 0.85rem;
}

.custom-tag {
  display: block;

  margin-top: 4px;

  color: var(--color-taro);

  font-size: 0.75rem;
  font-weight: 800;
}


/* Product right side */

.menu-actions {
  flex: 0 0 auto;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 6px;
}

.price {
  color: var(--color-primary);
  font-weight: 800;
}

.price-tbc {
  color: var(--color-muted);
  font-size: 0.85rem;
}


/* ============================================================
   11. INFORMATION CARDS
   ============================================================ */

.info-card {
  margin-bottom: 14px;

  padding: 16px;

  background: #ffffff;

  border-left: 5px solid var(--color-primary);

  border-radius: var(--radius-medium);

  box-shadow: var(--shadow);
}

.info-card h4 {
  margin-bottom: 8px;
}

.chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  padding: 6px 12px;

  background: var(--color-light-primary);

  border: 1px solid #c5e2dd;

  border-radius: 999px;

  color: var(--color-primary-dark);

  font-size: 0.85rem;
}


/* ============================================================
   12. CART BUTTON
   ============================================================ */

.cart-button {
  position: fixed;

  right: 16px;
  bottom: calc(
    16px + env(safe-area-inset-bottom, 0px)
  );

  z-index: 200;

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 14px 20px;

  background: var(--color-accent);

  border: 0;
  border-radius: 999px;

  color: #ffffff;

  font-weight: 800;

  box-shadow: var(--shadow-large);
}

.cart-button:hover {
  background: var(--color-accent-dark);
}

.cart-count {
  min-width: 24px;
  height: 24px;

  display: grid;
  place-items: center;

  padding: 0 6px;

  background: #ffffff;

  border-radius: 999px;

  color: var(--color-accent-dark);

  font-size: 0.8rem;
}


/* ============================================================
   13. CART DRAWER
   ============================================================ */

.cart-overlay {
  position: fixed;
  inset: 0;

  z-index: 300;

  background: rgba(10, 40, 40, 0.55);

  opacity: 0;

  transition: opacity 0.25s;
}

.cart-overlay.open {
  opacity: 1;
}


.cart-drawer {
  position: fixed;

  top: 0;
  right: 0;

  z-index: 400;

  width: min(440px, 100%);
  height: 100dvh;

  display: flex;
  flex-direction: column;

  background: var(--color-background);

  transform: translateX(100%);

  transition: transform 0.25s ease;
}

.cart-drawer.open {
  transform: translateX(0);
}


/* Cart header */

.cart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 14px 18px;

  background: var(--color-primary-dark);

  color: #ffffff;
}

.cart-header h2 {
  margin: 0;

  color: #ffffff;

  font-size: 1.3rem;
}


/* Close button */

.close-button {
  width: 38px;
  height: 38px;

  display: grid;
  place-items: center;

  border: 0;
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.18);

  color: #ffffff;

  cursor: pointer;
}

.close-button.dark {
  background: var(--color-light-primary);
  color: var(--color-primary-dark);
}


/* Cart content */

.cart-content {
  flex: 1;

  overflow-y: auto;

  padding: 14px 16px 32px;
}


/* ============================================================
   14. CART ITEMS
   ============================================================ */

.cart-item {
  margin-bottom: 10px;

  padding: 12px;

  background: #ffffff;

  border-radius: var(--radius-medium);

  box-shadow: var(--shadow-small);
}

.cart-item-header {
  display: flex;
  justify-content: space-between;

  gap: 10px;

  font-weight: 800;
}

.cart-item-details {
  margin: 5px 0 8px;
  padding-left: 18px;

  color: var(--color-muted);

  font-size: 0.85rem;
}

.cart-item-actions {
  display: flex;
  align-items: center;
  gap: 8px;

  flex-wrap: wrap;
}


/* Quantity */

.quantity {
  display: inline-flex;
  align-items: center;

  border: 1px solid var(--color-border);

  border-radius: 999px;
}

.quantity button {
  width: 34px;
  height: 34px;

  border: 0;

  background: transparent;

  font-size: 1.1rem;
}

.quantity-value {
  min-width: 24px;

  text-align: center;

  font-weight: 800;
}

.cart-link {
  padding: 4px 6px;

  border: 0;

  background: transparent;

  color: var(--color-accent-dark);

  font-weight: 700;
}


/* ============================================================
   15. EMPTY CART
   ============================================================ */

.empty-cart {
  padding: 40px 0;

  text-align: center;

  color: var(--color-muted);
}


/* ============================================================
   16. ORDER DETAILS
   ============================================================ */

.order-box {
  margin: 14px 0;

  padding: 16px;

  background: #ffffff;

  border-radius: var(--radius-large);

  box-shadow: var(--shadow);
}

.order-box h3 {
  color: var(--color-primary-dark);

  font-family: var(--font-body);

  font-size: 1rem;
  font-weight: 800;
}


/* Delivery / Pickup */

.order-type-buttons {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 10px;
}

.order-type-button {
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 4px;

  padding: 14px 8px;

  background: #ffffff;

  border: 2px solid var(--color-border);

  border-radius: var(--radius-medium);

  color: var(--color-text);
}

.order-type-button span {
  font-size: 1.5rem;
}

.order-type-button[aria-checked="true"] {
  background: var(--color-light-accent);

  border-color: var(--color-accent);
}

.order-message {
  margin: 10px 0 0;

  color: var(--color-muted);

  font-size: 0.85rem;
}


/* ============================================================
   17. FORM INPUTS
   ============================================================ */

.customer-fields {
  margin-top: 14px;
  padding-top: 14px;

  border-top: 1px solid var(--color-border);
}

.form-input {
  display: block;

  width: 100%;

  margin-bottom: 10px;

  padding: 12px;

  background: #ffffff;

  border: 2px solid var(--color-border);

  border-radius: var(--radius-small);

  color: var(--color-text);
}

.form-input:focus {
  outline: 3px solid rgba(242, 107, 58, 0.25);

  border-color: var(--color-accent);
}

textarea.form-input {
  min-height: 72px;

  resize: vertical;
}


/* ============================================================
   18. CART TOTALS
   ============================================================ */

.cart-totals {
  margin-top: 12px;
}

.cart-total-row {
  display: flex;
  justify-content: space-between;

  padding: 4px 0;
}

.cart-total-grand {
  margin-top: 6px;
  padding-top: 10px;

  border-top: 2px solid var(--color-border);

  color: var(--color-primary-dark);

  font-size: 1.25rem;
  font-weight: 800;
}


/* ============================================================
   19. WHATSAPP
   ============================================================ */

.whatsapp-button {
  width: 100%;

  margin-top: 12px;

  padding: 15px;

  border: 0;
  border-radius: 999px;

  background: var(--color-success);

  color: #ffffff;

  font-weight: 800;
}

.whatsapp-button:hover:not(:disabled) {
  background: #178a45;
}

.whatsapp-button:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.whatsapp-message {
  margin: 8px 0;

  text-align: center;

  color: var(--color-muted);

  font-size: 0.82rem;
}

.clear-cart {
  display: block;

  margin: 14px auto 0;

  border: 0;

  background: transparent;

  color: var(--color-accent-dark);

  font-weight: 700;

  text-decoration: underline;
}


/* ============================================================
   20. CUSTOMIZATION MODAL
   ============================================================ */

.customization-modal {
  width: min(520px, calc(100% - 24px));

  max-height: calc(100dvh - 24px);

  margin: auto;
  padding: 0;

  border: 0;

  border-radius: 22px;

  background: var(--color-background);

  overflow: hidden;
}

.customization-modal::backdrop {
  background: rgba(15, 35, 25, 0.55);
}

.modal-container {
  display: flex;
  flex-direction: column;

  max-height: calc(100dvh - 24px);
}


/* Modal header */

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 14px 18px;

  background: #ffffff;

  border-top: 5px solid var(--color-primary);
  border-bottom: 1px solid var(--color-border);
}

.modal-header h2 {
  margin: 0;

  font-size: 1.3rem;
}


/* Modal body */

.modal-body {
  flex: 1;

  overflow-y: auto;

  padding: 16px 18px;
}


/* Product header */

.custom-product {
  margin-bottom: 16px;
}

.custom-product-name {
  margin-bottom: 3px;

  font-family: var(--font-body);

  font-size: 1.15rem;
  font-weight: 800;
}


/* Option group */

.option-group {
  margin-bottom: 20px;

  border: 0;
  padding: 0;
}

.option-group legend {
  margin-bottom: 3px;

  color: var(--color-primary-dark);

  font-weight: 800;
}

.option-help {
  margin-bottom: 8px;

  color: var(--color-muted);

  font-size: 0.85rem;
}


/* Options */

.options-grid {
  display: grid;

  grid-template-columns:
    repeat(auto-fill, minmax(130px, 1fr));

  gap: 8px;
}

.option {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 8px;

  padding: 10px 12px;

  background: #ffffff;

  border: 2px solid var(--color-border);

  border-radius: 14px;

  cursor: pointer;
}

.option input {
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  opacity: 0;

  cursor: pointer;
}

.option:has(input:checked) {
  background: var(--color-light-accent);

  border-color: var(--color-accent);

  font-weight: 700;
}

.option:has(input:checked)::after {
  content: "✓";

  color: var(--color-accent-dark);

  font-weight: 800;
}

.option-price {
  color: var(--color-primary);

  font-size: 0.85rem;

  font-weight: 700;
}


/* Clear selection */

.clear-selection {
  padding: 4px 0;

  border: 0;

  background: transparent;

  color: var(--color-accent-dark);

  font-weight: 700;

  text-decoration: underline;
}


/* ============================================================
   21. MODAL FOOTER
   ============================================================ */

.modal-footer {
  padding: 12px 18px 16px;

  background: #ffffff;

  border-top: 1px solid var(--color-border);

  box-shadow: 0 -6px 16px rgba(0, 0, 0, 0.05);
}

.price-breakdown {
  display: grid;

  gap: 2px;

  margin-bottom: 8px;

  color: var(--color-muted);

  font-size: 0.85rem;
}

.price-breakdown-row {
  display: flex;
  justify-content: space-between;
}

.modal-total-row {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 12px;
}

.modal-total-row small {
  display: block;

  color: var(--color-muted);
}

.modal-total-row strong {
  color: var(--color-primary-dark);

  font-size: 1.4rem;
}

.modal-message {
  min-height: 1em;

  margin: 8px 0 0;

  color: var(--color-muted);

  font-size: 0.82rem;
}


/* ============================================================
   22. FOOTER
   ============================================================ */

.site-footer {
  padding: 30px 0 18px;

  background: var(--color-footer);

  color: var(--color-footer-text);
}

.copyright {
  margin: 0;

  text-align: center;

  font-size: 0.85rem;
}


/* ============================================================
   23. UTILITY
   ============================================================ */

[hidden] {
  display: none !important;
}

.no-scroll {
  overflow: hidden;
}


/* ============================================================
   24. DESKTOP
   ============================================================ */

@media (min-width: 760px) {

  .order-page {
    padding-top: 40px;
  }

  .menu-item {
    padding: 16px 20px;
  }

  .menu-item:hover {
    background: #fbfdfc;
  }
}
