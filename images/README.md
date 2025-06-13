# Images Directory Structure

This directory contains all visual assets for the Stellar Splits landing page.

## 📁 Folder Organization

### `/logos`
- Primary Stellar Splits logo variations
- Brand logos in different formats (PNG, SVG, etc.)
- Logo variations for light/dark backgrounds
- Partner or sponsor logos

**Recommended naming:**
- `stellar-splits-logo.svg`
- `stellar-splits-logo-white.svg`
- `stellar-splits-logo-dark.svg`

### `/icons`
- UI icons and symbols
- Social media icons (if using custom ones)
- Feature icons for landing page sections
- Navigation icons

**Recommended naming:**
- `icon-music.svg`
- `icon-splits.svg`
- `icon-security.svg`

### `/backgrounds`
- Hero section background images
- Section background textures or patterns
- Gradient overlays
- Abstract backgrounds

**Recommended naming:**
- `hero-background.jpg`
- `section-bg-pattern.png`
- `gradient-overlay.svg`

### `/screenshots`
- Product screenshots
- App interface mockups
- Dashboard previews
- Feature demonstrations

**Recommended naming:**
- `dashboard-preview.png`
- `mobile-app-screenshot.png`
- `splits-interface.jpg`

### `/social`
- Open Graph images for social sharing
- Social media post graphics
- Profile images
- Social media banners

**Recommended naming:**
- `og-image.jpg` (1200x630px for Open Graph)
- `twitter-card.jpg` (1200x600px for Twitter)
- `social-banner.png`

## 🎨 Image Guidelines

### **Formats**
- **SVG**: For logos, icons, and simple graphics
- **PNG**: For images with transparency
- **JPG**: For photos and complex images
- **WebP**: For optimized web delivery (optional)

### **Sizes**
- **Hero images**: 1920x1080px or larger
- **Open Graph**: 1200x630px
- **Twitter Cards**: 1200x600px
- **Icons**: 24x24, 32x32, 48x48, 64x64px
- **Logos**: Vector (SVG) preferred for scalability

### **Optimization**
- Compress images for web delivery
- Use appropriate quality settings
- Consider lazy loading for large images
- Provide multiple sizes for responsive design

## 🔗 Usage in HTML

```html
<!-- Logo -->
<img src="./images/logos/stellar-splits-logo.svg" alt="Stellar Splits Logo">

<!-- Background -->
<section style="background-image: url('./images/backgrounds/hero-background.jpg')">

<!-- Icon -->
<img src="./images/icons/icon-music.svg" alt="Music Icon">

<!-- Screenshot -->
<img src="./images/screenshots/dashboard-preview.png" alt="Dashboard Preview">
```

## 📱 Responsive Images

Consider providing multiple sizes for responsive design:

```html
<picture>
  <source media="(min-width: 768px)" srcset="./images/backgrounds/hero-desktop.jpg">
  <source media="(min-width: 480px)" srcset="./images/backgrounds/hero-tablet.jpg">
  <img src="./images/backgrounds/hero-mobile.jpg" alt="Hero Background">
</picture>
```

---

**Note**: Remember to update the `vercel.json` configuration if you need specific caching rules for images.
