# Image Placeholder Guide

## How to Use Images in Your React Components

### 1. Hero Section Example
Replace the current hero section with an image background:

```jsx
// In src/components/Hero.jsx
<section id="home" className="relative bg-blue-600 text-white py-20 lg:py-32">
  <div className="absolute inset-0">
    <img
      src="/images/hero/cleaning-crew-allentown.jpg"
      alt="DR General Cleaning professional team in Allentown PA"
      className="w-full h-full object-cover opacity-20"
    />
  </div>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Your existing content */}
  </div>
</section>
```

### 2. Service Icons Example
Update the Services component to use custom icons:

```jsx
// In src/components/Services.jsx
const services = [
  {
    title: "House Cleaning Allentown PA",
    description: "Professional house cleaning services...",
    icon: "/images/icons/house-cleaning-icon.svg"
  },
  // ... other services
];

// In the render section:
<div className="text-4xl mb-4">
  <img src={service.icon} alt={service.title} className="w-16 h-16 mx-auto" />
</div>
```

### 3. About Section Example
Add team photos to the About section:

```jsx
// In src/components/About.jsx
<div className="bg-blue-600 rounded-lg p-8 text-white">
  <img
    src="/images/about/cleaning-team.jpg"
    alt="DR General Cleaning team in Allentown PA"
    className="w-full rounded-lg mb-6"
  />
  {/* Rest of your content */}
</div>
```

## Sample Image References

### Hero Background
```jsx
<div className="relative">
  <img
    src="/images/hero/professional-cleaners-allentown.jpg"
    alt="Professional house cleaners in Allentown Pennsylvania"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="relative bg-blue-600 bg-opacity-80 text-white py-20 lg:py-32">
    {/* Your hero content */}
  </div>
</div>
```

### Service Cards with Images
```jsx
<div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-all">
  <img
    src="/images/services/house-cleaning-allentown.jpg"
    alt="House cleaning service in Allentown PA"
    className="w-full h-48 object-cover rounded-lg mb-4"
  />
  <h3 className="text-xl font-semibold mb-3">House Cleaning Allentown PA</h3>
  <p className="text-gray-600">Professional house cleaning services...</p>
</div>
```

### Areas Served with Local Images
```jsx
// In src/components/AreasServed.jsx
<div className="bg-white rounded-xl shadow-lg p-8">
  <img
    src="/images/backgrounds/lehigh-valley-map.jpg"
    alt="Lehigh Valley Pennsylvania service area map"
    className="w-full rounded-lg mb-6"
  />
  <h3 className="text-2xl font-bold mb-6">Our Service Coverage Map</h3>
  {/* Rest of your content */}
</div>
```

## Quick Image Integration Steps

1. **Add your images** to the appropriate folders:
   - Hero images → `/public/images/hero/`
   - Service images → `/public/images/services/`
   - Icons → `/public/images/icons/`
   - Team photos → `/public/images/team/`

2. **Update your components** to reference the new images:
   - Replace placeholder text with `<img>` tags
   - Add descriptive alt text with location keywords
   - Use proper CSS classes for responsive design

3. **Optimize for SEO**:
   - Use descriptive filenames with location keywords
   - Include location in alt text: "House cleaning in Allentown PA"
   - Add title attributes for additional context

## Example File Structure After Adding Images

```
public/
├── images/
│   ├── hero/
│   │   ├── cleaning-crew-allentown.jpg
│   │   ├── spotless-kitchen-bethlehem.jpg
│   │   └── professional-equipment.jpg
│   ├── services/
│   │   ├── house-cleaning-allentown.jpg
│   │   ├── deep-cleaning-easton.jpg
│   │   └── office-cleaning-bethlehem.jpg
│   ├── icons/
│   │   ├── house-icon.svg
│   │   ├── deep-clean-icon.svg
│   │   └── office-icon.svg
│   ├── about/
│   │   ├── team-photo.jpg
│   │   ├── company-van.jpg
│   │   └── before-after-1.jpg
│   └── logos/
│       ├── dr-general-cleaning-logo.svg
│       └── logo-white-text.png
```

## SEO-Friendly Image Example

```jsx
<img
  src="/images/services/house-cleaning-allentown-pa.jpg"
  alt="Professional house cleaning service in Allentown Pennsylvania by DR General Cleaning"
  title="House Cleaning Services Allentown PA - DR General Cleaning"
  className="w-full h-64 object-cover rounded-lg shadow-lg"
/>
```

Remember to compress your images before uploading to keep file sizes small for faster loading!
