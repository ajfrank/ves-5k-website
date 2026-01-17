# VES Vikings 5K & Fun Run Website

A modern, playful, and fully responsive website for the Vienna Elementary School Vikings Annual 5K & Fun Run event.

## 🎨 Features

- **Modern & Playful Design** - Vibrant colors, smooth animations, and engaging layout
- **Fully Responsive** - Looks great on desktop, tablet, and mobile devices
- **Easy Sponsor Management** - Simple JSON-based system to add/update sponsors
- **Three Main Pages:**
  - Home - Event information and FAQs
  - Registration - Pricing and important dates
  - Sponsorship - Sponsor tiers and current sponsors

## 📁 File Structure

```
VES 5K/
├── index.html           # Home page
├── registration.html    # Registration information
├── sponsorship.html     # Sponsorship opportunities
├── styles.css          # All styling
├── script.js           # Main JavaScript functionality
├── sponsors.js         # Sponsor loading system
├── sponsors.json       # Sponsor data (EDIT THIS!)
├── images/             # Image assets folder
│   └── sponsors/       # Sponsor logos go here
└── README.md          # This file
```

## 🚀 Getting Started

1. **Open the website** - Simply open `index.html` in a web browser
2. **No server required** - This is a static website that runs directly in the browser

## 📸 Adding Sponsor Logos

### Step 1: Create Images Folder

Create a folder structure for sponsor logos:
```
VES 5K/
└── images/
    └── sponsors/
```

### Step 2: Add Sponsor Logos

Place your sponsor logo images in the `images/sponsors/` folder. Supported formats:
- PNG (recommended - supports transparency)
- JPG
- SVG

Example:
```
images/sponsors/company-name.png
images/sponsors/local-business.jpg
```

### Step 3: Edit sponsors.json

Open `sponsors.json` and add your sponsor information:

```json
[
  {
    "name": "Company Name",
    "tier": "platinum",
    "logo": "images/sponsors/company-name.png",
    "description": "Supporting our community",
    "website": "https://company-website.com"
  }
]
```

**Field Descriptions:**
- `name` (required) - The sponsor's name
- `tier` (required) - Sponsorship level: `"platinum"`, `"gold"`, `"silver"`, or `"bronze"`
- `logo` (optional) - Path to the logo image
- `description` (optional) - Short description or tagline
- `website` (optional) - URL to sponsor's website (makes card clickable)

### Example: Adding Multiple Sponsors

```json
[
  {
    "name": "Vienna Dental Care",
    "tier": "platinum",
    "logo": "images/sponsors/vienna-dental.png",
    "description": "Proud supporter of VES",
    "website": "https://viennadental.com"
  },
  {
    "name": "Main Street Pizza",
    "tier": "gold",
    "logo": "images/sponsors/main-street-pizza.png",
    "description": "Family-owned since 1995",
    "website": "https://mainstreetpizza.com"
  },
  {
    "name": "Vienna Hardware",
    "tier": "silver",
    "logo": "images/sponsors/vienna-hardware.png",
    "description": "Your local hardware store"
  },
  {
    "name": "Sarah's Bakery",
    "tier": "bronze",
    "logo": "images/sponsors/sarahs-bakery.png",
    "description": "Fresh baked goods daily",
    "website": "https://sarahsbakery.com"
  }
]
```

## 🎨 Customization Tips

### Changing Colors

Edit the CSS variables in `styles.css` (lines 9-18):

```css
:root {
    --primary-color: #FF6B6B;    /* Main accent color */
    --secondary-color: #4ECDC4;  /* Secondary accent */
    --accent-color: #FFE66D;     /* Highlight color */
    /* ... more colors ... */
}
```

### Updating Event Information

All event details are in the HTML files. Search for the specific information you want to change:
- Dates and times
- Pricing
- Location details
- FAQs

### Adding More Pages

1. Create a new HTML file (e.g., `course-map.html`)
2. Copy the header/footer from any existing page
3. Add your content
4. Update the navigation menu in all pages to include the new link

## 📱 Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## 🎯 Key Features

### Sponsor Management Benefits

✅ **No coding required** - Just edit JSON file
✅ **Automatic sorting** - Sponsors grouped by tier
✅ **Flexible** - Logo optional, can add sponsors without images
✅ **Clickable cards** - Add website URL to make sponsor cards clickable
✅ **Responsive** - Looks great on all screen sizes

### Design Features

✅ **Smooth animations** - Fade-in effects and hover states
✅ **Mobile-friendly** - Hamburger menu and responsive layout
✅ **Modern gradients** - Eye-catching hero sections
✅ **Accessible** - Good contrast and readable fonts
✅ **Fast loading** - Optimized CSS and minimal dependencies

## 📧 Contact

Email: ves5krun@gmail.com

## 🏃‍♂️ Event Details

- **Date:** Sunday, April 27, 2025
- **Location:** Vienna Elementary, 128 Center St. S, Vienna, VA
- **Times:**
  - 7:45 AM - Warm Up with Mr. Sid
  - 8:10 AM - 1 Mile Fun Run/Walk
  - 8:35 AM - 5K Race

---

**Made with ❤️ for Vienna Elementary School**
