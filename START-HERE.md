# 🎉 VES Vikings 5K Website - Complete!

Your modern, playful website is ready! Here's everything you need to know:

## 📁 What You Have

### Main Website Files
- **index.html** - Home page with event info and FAQs
- **registration.html** - Registration details and pricing
- **sponsorship.html** - Sponsor tiers and sponsor showcase
- **styles.css** - All the beautiful styling
- **script.js** - Interactive features
- **sponsors.js** - Sponsor loading system

### Sponsor Management
- **sponsors.json** - **EDIT THIS FILE** to add/update sponsors
- **images/sponsors/** - Put sponsor logo files here
- **how-to-add-sponsors.html** - Step-by-step visual guide
- **SPONSOR-GUIDE.md** - Quick reference guide

### Documentation
- **README.md** - Complete documentation
- This file - Quick start guide

## 🚀 How to Use Your Website

### To View the Website:
1. Navigate to: `/Users/ajfrank/Desktop/VES 5K/`
2. Double-click `index.html` (or right-click → Open With → Browser)
3. Browse all three pages using the navigation menu

### To Add Sponsors:
**Option 1: Visual Guide (Recommended)**
- Open `how-to-add-sponsors.html` in your browser for step-by-step instructions with examples

**Option 2: Quick Method**
1. Save sponsor logo to `images/sponsors/company-name.png`
2. Edit `sponsors.json` and add:
```json
{
  "name": "Company Name",
  "tier": "gold",
  "logo": "images/sponsors/company-name.png",
  "description": "Supporting VES",
  "website": "https://company.com"
}
```
3. Refresh `sponsorship.html` in browser - Done!

## 🎨 Design Features

✨ **Modern & Playful**
- Vibrant gradient hero sections
- Smooth animations and transitions
- Fun emoji accents throughout
- Engaging hover effects

📱 **Fully Responsive**
- Perfect on desktop, tablet, and mobile
- Mobile hamburger menu
- Responsive sponsor grids
- Touch-friendly buttons

🎯 **User-Friendly**
- Clear navigation
- Easy-to-read typography
- Intuitive layout
- Smooth scrolling

## 📋 Key Pages Overview

### Home Page (index.html)
- Eye-catching hero section
- Quick info cards (date, location, pricing, perks)
- Detailed race information
- Schedule with times
- Pricing breakdown
- FAQs section
- Call-to-action buttons

### Registration Page (registration.html)
- Detailed pricing table
- Early bird vs. late registration info
- What participants receive
- Important dates timeline
- T-shirt guarantee information
- Contact form link

### Sponsorship Page (sponsorship.html)
- Four sponsorship tiers (Platinum, Gold, Silver, Bronze)
- Benefits for each tier
- Sponsor showcase (dynamically loaded from JSON)
- Become a sponsor CTA
- Automatic tier grouping and display

## 🏅 Sponsor Tiers

| Tier | Display | Best For |
|------|---------|----------|
| ⭐ Platinum | Largest, featured | Top sponsors ($1000+) |
| 🥇 Gold | Large | Major sponsors ($500-999) |
| 🥈 Silver | Medium | Supporting sponsors ($250-499) |
| 🥉 Bronze | Standard | Community sponsors ($100-249) |

## 🎨 Color Scheme

The website uses a vibrant, energetic palette:
- **Primary Red**: #FF6B6B (main accent)
- **Teal**: #4ECDC4 (secondary accent)
- **Yellow**: #FFE66D (highlights)
- **Purple**: #9B59B6 (gradients)
- **Blue**: #3498DB (gradients)

To change colors, edit the CSS variables at the top of `styles.css`.

## 📱 Mobile Features

- Responsive hamburger menu
- Touch-optimized buttons
- Stacked layouts on small screens
- Optimized images
- Fast loading on mobile networks

## ⚡ Quick Tips

### Updating Event Info
All dates, times, and prices are in the HTML files. Just search for the text you want to change and update it.

### Adding More Content
The modular design makes it easy to add sections. Copy an existing section and modify the content.

### Custom Styling
Colors and spacing are controlled by CSS variables in `styles.css` for easy customization.

### Testing Changes
Always refresh your browser (Cmd+Shift+R or Ctrl+Shift+F5) to see changes.

## 🆘 Common Questions

**Q: How do I publish this website?**
A: You can upload these files to any web hosting service. Contact your web hosting provider for specific instructions.

**Q: Do I need a database?**
A: No! This is a static website. The sponsor system uses a simple JSON file.

**Q: Can I add more pages?**
A: Yes! Copy any existing page, update the content, and add a link in the navigation menu.

**Q: What if a sponsor doesn't have a logo?**
A: No problem! Just omit the "logo" field in sponsors.json and their name will display instead.

**Q: Can I change the fonts?**
A: Yes! The website uses Google Fonts (Fredoka & Poppins). You can change these in the HTML `<head>` section and CSS.

## 📧 Need Help?

Event Contact: ves5krun@gmail.com

## 🎯 Next Steps

1. ✅ Open `index.html` in your browser to view the site
2. ✅ Open `how-to-add-sponsors.html` for a visual guide
3. ✅ Add your first sponsor to test the system
4. ✅ Customize any text or information as needed
5. ✅ Share with your team!

---

**Made with ❤️ for Vienna Elementary School Vikings**

*Good luck with your 5K event on April 27, 2025!* 🏃‍♂️🏃‍♀️
