# GLOW CHIC &mdash; Luxury Skincare Shopify 2.0 Theme

A radiant, high-converting, ultra-luxury Shopify 2.0 theme built for skincare, beauty, cosmetics, and wellness brands.

![Glow Chic Theme](https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80)

---

## 🌟 Key Highlights & Design Aesthetic

- **Luxury Rose Blush & Burgundy Palette**: Curated with soft blush tones (`#FFF8F6`, `#FDF0ED`, `#FBE6E2`), deep burgundy accents (`#6C1D2F`), glowing gold stars (`#F59E0B`), and deep charcoal typography (`#251E20`).
- **Modern Typography**: High-end serif & sans-serif pairings (*Playfair Display*, *Cormorant Garamond*, *Plus Jakarta Sans*, *Outfit*).
- **100% Online Store 2.0 Architecture**: Dynamic JSON templates (`index.json`, `product.json`, `collection.json`, `cart.json`), granular customizable Shopify Liquid sections, reusable snippets, and customizable schema settings.
- **Micro-Interactions & UX**:
  - Top Announcement Bar with shipping notice and link.
  - Sticky Luxury Header with navigation, search, wishlist badge, cart count badge, and "ORDER NOW" CTA.
  - Split 2-Column Hero Section (*Glow From Within*) with pill badge, 3 live trust stats, and floating badges.
  - Featured Product Section (*Glow Serum*) with interactive 3-image gallery switcher, 23% discount badge, 5-star ratings, 2x2 highlight pills, quantity selector, and trust badges.
  - Collection Grid (*Discover Your Glow*) with instant category filter tabs (Hydration, Anti-Aging, Cleansers, Moisturizers).
  - Brand Ritual Showcase (*Your Daily Glow Ritual*) with model image, floating quote badge, and 4 numbered routine cards (`01`, `02`, `03`, `04`).
  - Brand Story / Quote Banner (*Beautiful Skin Starts With Care*) with dermatologist signature.
  - Clinical Results & Animated Progress Bars (*Why Customers Love Glow Serum* &mdash; 98%, 96%, 94%, 99%).
  - Glow Serum Benefits 6-Card Grid & "GET GLOW SERUM NOW" CTA.
  - Feel the Difference 3-Step Process (*Prepare*, *Revitalize*, *Radiate*).
  - Comparison Matrix (*Why Choose Glow Serum?* vs. Other Brands).
  - Customer Testimonials with 4.9 rating banner, carousel arrows, and verified buyer reviews.
  - Full-Width Special Offer CTA Banner (*Your Glow, Your Ritual, Your Moment*).
  - Interactive FAQ Collapsible Accordion (6 skincare questions).
  - Newsletter Signup Card (*Join the Glow Club*).
  - Pre-Footer Promo Strip & 4-Column Luxury Footer.
  - Slide-out Cart Drawer with free shipping progress meter and toast notifications.

---

## 📂 Project Structure

```
├── assets/
│   ├── theme.css                  # Custom luxury Vanilla CSS styles & tokens
│   └── theme.js                   # Interactive UI features, drawer cart & accordions
├── config/
│   ├── settings_schema.json       # Shopify Theme Customizer controls (colors, fonts, cart)
│   └── settings_data.json         # Default theme preset settings
├── layout/
│   └── theme.liquid               # Master document structure & SEO meta tags
├── locales/
│   └── en.default.json            # English translations & UI labels
├── sections/
│   ├── header.liquid              # Sticky header with announcement bar & order CTA
│   ├── hero-banner.liquid         # Split 2-column hero with floating badges & stats
│   ├── featured-product.liquid    # Glow Serum showcase with 3 thumbnails & highlights
│   ├── collection-grid.liquid     # Filterable collection grid with category tabs
│   ├── brand-experience.liquid    # Your Daily Glow Ritual 2-column showcase
│   ├── brand-story.liquid         # Beautiful Skin Starts With Care quote card
│   ├── craftsmanship-stats.liquid # Animated clinical study progress bars (98%, 96%, 94%, 99%)
│   ├── why-choose-us.liquid       # Glow Serum Benefits 6-card grid
│   ├── art-of-fragrance.liquid    # Feel the Difference 3-step process
│   ├── comparison-table.liquid    # Glow Serum vs. Other Brands comparison table
│   ├── testimonials.liquid        # 5-star customer reviews with navigation
│   ├── cta-banner.liquid          # Special limited-time offer banner
│   ├── faq-accordion.liquid       # Interactive collapsible skincare FAQ
│   ├── newsletter-banner.liquid   # Join the Glow Club newsletter card
│   ├── footer.liquid              # Pre-footer promo strip + 4-column footer
│   ├── main-product.liquid        # Dynamic product template
│   ├── main-collection.liquid     # Dynamic collection template
│   ├── main-cart.liquid           # Dynamic shopping bag template
│   ├── main-page.liquid           # Default page template
│   └── main-404.liquid            # 404 page template
├── snippets/
│   ├── product-card.liquid        # Reusable product card with quick-add
│   ├── cart-drawer.liquid         # Slide-out shopping bag with free shipping meter
│   ├── icon-cart.liquid           # SVG Cart icon
│   ├── icon-search.liquid         # SVG Search icon
│   ├── icon-user.liquid           # SVG User icon
│   ├── icon-heart.liquid          # SVG Wishlist icon
│   ├── icon-star.liquid           # SVG Star rating icon
│   ├── icon-shield.liquid         # SVG Guarantee icon
│   ├── icon-truck.liquid          # SVG Shipping icon
│   ├── icon-flower.liquid         # SVG Botanical icon
│   ├── icon-bottle.liquid         # SVG Serum bottle icon
│   ├── icon-check.liquid          # SVG Check icon
│   ├── icon-close.liquid          # SVG Close icon
│   └── icon-sparkle.liquid        # SVG Sparkle craft icon
├── templates/
│   ├── index.json                 # Dynamic homepage layout (all 13 sections in sequence)
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
   - Compress them into `glow-chic-shopify-theme.zip`.
2. **Upload to Shopify Admin**:
   - Navigate to **Shopify Admin** &rarr; **Online Store** &rarr; **Themes**.
   - Click **Add Theme** &rarr; **Upload zip file**.
   - Select `glow-chic-shopify-theme.zip` and click **Upload**.
   - Click **Customize** to edit any text, image, or section directly via the Theme Editor.

---

## 🌿 Pushing to GitHub

To push this theme to your GitHub repository:

```bash
git add .
git commit -m "Convert theme to 100% pixel-perfect Glow Chic Skincare Shopify 2.0 Theme"
git push origin main
```
