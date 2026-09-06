# Ruhe Noor &mdash; Haute Parfumerie Shopify 2.0 Theme

An artisanal, ultra-luxury Shopify 2.0 theme built for high-end perfume houses, boutique fragrance ateliers, and luxury beauty brands.

![Ruhe Noor Theme](https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80)

---

## 🌟 Key Highlights & Design Aesthetic

- **Luxury Ivory & Gold Palette**: Inspired by bespoke Parisian perfumeries with warm cream surfaces (`#FBF9F5`), soft sand accents (`#F4EFEA`), royal gold accents (`#C29B53`), and deep espresso tones (`#191412`).
- **Typography**: Custom pairings of *Playfair Display*, *Cormorant Garamond*, and *Outfit*.
- **100% Online Store 2.0 Architecture**: Dynamic JSON templates (`index.json`, `product.json`, `collection.json`, `cart.json`), granular customizable Shopify Liquid sections, reusable snippets, and customizable schema settings.
- **Micro-Interactions & UX**:
  - Slide-out Cart Drawer with dynamic live subtotal calculations.
  - Scent Notes Breakdown (Top, Heart, Base).
  - Filterable Collection Categories (Floral, Oriental & Oud, Woody & Amber, Fresh Citrus).
  - Animated Metric / Progress bars with scroll trigger.
  - Interactive FAQ Collapsible Accordion.
  - Responsive Mobile Navigation Drawer.

---

## 📂 Project Structure

```
├── assets/
│   ├── theme.css                  # Custom luxury Vanilla CSS styles & tokens
│   └── theme.js                   # Smooth UI interactions, drawer cart & accordions
├── config/
│   ├── settings_schema.json       # Shopify Theme Customizer controls (colors, fonts, cart)
│   └── settings_data.json         # Default theme preset settings
├── layout/
│   └── theme.liquid               # Master document structure & SEO meta tags
├── locales/
│   └── en.default.json            # English translations & UI labels
├── sections/
│   ├── header.liquid              # Sticky navigation header with search & bag
│   ├── hero-banner.liquid         # High-impact visual hero with dual CTAs
│   ├── featured-product.liquid    # Signature perfume showcase with olfactory notes
│   ├── why-choose-us.liquid       # 4 USP feature cards + editorial imagery
│   ├── art-of-fragrance.liquid    # 3-step numbered artisanal process cards
│   ├── collection-grid.liquid     # Filterable collection grid + Discovery Set card
│   ├── brand-experience.liquid    # 6 bespoke concierge perk cards
│   ├── craftsmanship-stats.liquid # Animated progress metrics & consumer satisfaction
│   ├── comparison-table.liquid    # Brand comparison matrix
│   ├── testimonials.liquid        # 5-star verified customer reviews
│   ├── press-quote.liquid         # Editorial press highlight quote
│   ├── cta-banner.liquid          # Scent quiz discovery banner
│   ├── brand-story.liquid         # Atelier heritage & perfumer signature
│   ├── faq-accordion.liquid       # Interactive collapsible questions
│   ├── newsletter-banner.liquid   # VIP salon subscription card
│   ├── footer.liquid              # 4-column luxury espresso footer
│   ├── main-product.liquid        # Dynamic product template
│   ├── main-collection.liquid     # Dynamic collection template
│   ├── main-cart.liquid           # Dynamic shopping bag template
│   ├── main-page.liquid           # Default page template
│   └── main-404.liquid            # 404 page template
├── snippets/
│   ├── product-card.liquid        # Reusable perfume card with quick-add
│   ├── cart-drawer.liquid         # Slide-out shopping bag
│   ├── icon-cart.liquid           # SVG Cart icon
│   ├── icon-search.liquid         # SVG Search icon
│   ├── icon-user.liquid           # SVG User icon
│   ├── icon-heart.liquid          # SVG Wishlist icon
│   ├── icon-star.liquid           # SVG Star rating icon
│   ├── icon-shield.liquid         # SVG Authenticity icon
│   ├── icon-truck.liquid          # SVG Shipping icon
│   ├── icon-flower.liquid         # SVG Botanical icon
│   ├── icon-bottle.liquid         # SVG Flacon icon
│   └── icon-sparkle.liquid        # SVG Sparkle craft icon
├── templates/
│   ├── index.json                 # Dynamic homepage layout (all 14 sections)
│   ├── product.json               # Product page layout
│   ├── collection.json            # Collection page layout
│   ├── cart.json                  # Cart page layout
│   ├── page.json                  # Standard page layout
│   └── 404.json                   # 404 error page layout
├── index.html                     # Standalone live interactive HTML preview
└── README.md                      # Documentation & GitHub guide
```

---

## 🚀 How to Upload to Shopify

1. **ZIP the theme files**:
   - Select the folders: `assets`, `config`, `layout`, `locales`, `sections`, `snippets`, `templates`.
   - Compress them into `ruhe-noor-shopify-theme.zip`.
2. **Upload to Shopify Admin**:
   - Navigate to **Shopify Admin** &rarr; **Online Store** &rarr; **Themes**.
   - Click **Add Theme** &rarr; **Upload zip file**.
   - Select `ruhe-noor-shopify-theme.zip` and click **Upload**.
   - Click **Customize** to edit any text, image, or section directly via the Theme Editor.

---

## 🌿 Pushing to GitHub

To push this theme to your GitHub repository:

```bash
git init
git add .
git commit -m "feat: complete Ruhe Noor luxury Shopify 2.0 theme"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

---

*Crafted with precision for Haute Parfumerie & Luxury eCommerce.*
