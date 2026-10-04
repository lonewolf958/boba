/* HOME PAGE — edit your restaurant details below.
   (The same details also appear at the top of script1.js and script2.js.) */
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
};
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

function bindBrand() {
  const r = CONFIG.restaurant;
  $$("[data-bind]").forEach(el => { el.textContent = r[el.dataset.bind] ?? ""; });
  const soc = $("#socials");
  if (soc) soc.innerHTML = r.socials.length ? r.socials.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join(" · ") : "[Add social media links]";
  const y = $("#year"); if (y) y.textContent = new Date().getFullYear();
  const t = document.documentElement.dataset.title; document.title = t ? `${r.name} — ${t}` : r.name;
}

bindBrand();
