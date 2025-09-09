# DR General Cleaning - Image Assets Guide

## 📁 Folder Structure

### `/hero/` - Hero Section Images
- **Recommended size**: 1920x1080px (16:9 ratio)
- **Format**: JPG for photos, PNG for graphics with transparency
- **Purpose**: Main banner images for the hero section
- **Examples**:
  - `cleaning-crew-allentown.jpg`
  - `professional-cleaners-lehigh-valley.jpg`
  - `spotless-home-interior.jpg`

### `/services/` - Service Category Images
- **Recommended size**: 800x600px (4:3 ratio)
- **Format**: JPG for consistency
- **Purpose**: Images representing each cleaning service
- **Examples**:
  - `house-cleaning-allentown.jpg`
  - `deep-cleaning-services.jpg`
  - `office-cleaning-bethlehem.jpg`
  - `move-out-cleaning-easton.jpg`

### `/about/` - About Us Images
- **Recommended size**: 600x600px (square) or 800x600px
- **Format**: JPG
- **Purpose**: Team photos, company vehicles, before/after shots
- **Examples**:
  - `cleaning-team.jpg`
  - `company-vehicle.jpg`
  - `before-after-cleaning.jpg`
  - `owner-portrait.jpg`

### `/testimonials/` - Customer Review Images
- **Recommended size**: 400x400px (square) for profile photos
- **Format**: JPG for photos, PNG for graphics
- **Purpose**: Customer photos, review screenshots
- **Examples**:
  - `satisfied-customer-1.jpg`
  - `google-review-screenshot.png`
  - `facebook-recommendation.jpg`

### `/team/` - Team Member Photos
- **Recommended size**: 400x400px (square)
- **Format**: JPG
- **Purpose**: Individual team member portraits
- **Examples**:
  - `john-smith-cleaner.jpg`
  - `maria-garcia-supervisor.jpg`

### `/icons/` - Service Icons & Graphics
- **Recommended size**: 64x64px to 128x128px
- **Format**: SVG (preferred) or PNG with transparency
- **Purpose**: Service icons, feature graphics
- **Examples**:
  - `house-icon.svg`
  - `deep-clean-icon.svg`
  - `office-icon.svg`
  - `eco-friendly-badge.svg`

### `/logos/` - Company Logos
- **Recommended size**: Multiple sizes (200x200px, 400x400px, 800x800px)
- **Format**: SVG (preferred) or PNG with transparency
- **Purpose**: Company logo variations
- **Examples**:
  - `dr-general-cleaning-logo.svg`
  - `logo-white-text.png`
  - `logo-blue-background.svg`

### `/backgrounds/` - Background Images
- **Recommended size**: 1920x1080px (can be tiled for smaller sections)
- **Format**: JPG for photos, PNG for patterns
- **Purpose**: Section backgrounds, texture overlays
- **Examples**:
  - `clean-texture.jpg`
  - `subtle-pattern.png`
  - `blue-gradient-bg.jpg`

## 🎯 SEO Optimization Tips

### File Naming Convention
- Use descriptive, keyword-rich filenames
- Include location keywords (Allentown, Lehigh Valley, Bethlehem, Easton)
- Use hyphens (-) instead of underscores (_)
- Keep filenames concise but descriptive

**Good Examples:**
- `house-cleaning-allentown-pa.jpg`
- `professional-cleaners-bethlehem.jpg`
- `deep-cleaning-services-lehigh-valley.jpg`

**Bad Examples:**
- `IMG_001.jpg`
- `cleaning_photo.jpg`
- `service1.png`

### Alt Text Guidelines
Always include descriptive alt text for accessibility and SEO:

```html
<img
  src="/images/services/house-cleaning-allentown.jpg"
  alt="Professional house cleaning service in Allentown PA - DR General Cleaning"
/>
```

### Image Optimization
- **File Size**: Keep images under 500KB when possible
- **Compression**: Use tools like TinyPNG or ImageOptim
- **Responsive**: Consider multiple sizes for mobile/desktop
- **WebP**: Consider using WebP format for better compression

## 📸 Recommended Images to Add

### Immediate Priority
1. **Hero Image**: Professional cleaning team or spotless home interior
2. **Service Icons**: Clean, modern icons for each service type
3. **Company Logo**: High-resolution logo in multiple formats
4. **Team Photo**: Professional team picture for About section

### Secondary Priority
1. **Before/After Photos**: Showcase your cleaning results
2. **Service Area Photos**: Local landmarks or neighborhood shots
3. **Equipment Photos**: Professional cleaning equipment
4. **Customer Testimonials**: Photos with customer reviews

### Optional Enhancements
1. **Process Photos**: Step-by-step cleaning process
2. **Safety Photos**: COVID protocols, eco-friendly products
3. **Vehicle Photos**: Branded company vehicles
4. **Office Photos**: Company headquarters or office space

## 🚀 Quick Start

1. **Add your logo**: Place your company logo in `/logos/`
2. **Hero image**: Add a high-quality hero image to `/hero/`
3. **Service icons**: Add 6 service icons to `/icons/`
4. **Update references**: Modify components to use your new images

## 🔧 Implementation Example

To use images in your React components:

```jsx
// Using an image from the public folder
<img
  src="/images/hero/cleaning-crew-allentown.jpg"
  alt="DR General Cleaning professional crew in Allentown PA"
  className="w-full h-auto rounded-lg shadow-lg"
/>

// Using an icon
<img
  src="/images/icons/house-icon.svg"
  alt="House cleaning services"
  className="w-16 h-16 mb-4"
/>
```

## 📋 Image Checklist

- [ ] Company logo (multiple formats)
- [ ] Hero/banner image
- [ ] 6 service icons
- [ ] Team photo
- [ ] Before/after cleaning photos
- [ ] Local area photos (Allentown, Bethlehem, Easton landmarks)
- [ ] Customer testimonial photos
- [ ] Equipment/product photos
- [ ] Favicon (32x32px .ico file)

Remember: High-quality, professional images build trust and improve conversion rates!
