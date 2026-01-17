# Quick Guide: Adding Sponsors

## 📋 Simple 3-Step Process

### Step 1: Save Logo Image
- Save your sponsor's logo in: `images/sponsors/`
- Use a clear filename like: `company-name.png`
- Recommended: PNG files with transparent backgrounds
- Size: Logos will automatically resize, but 400x200px works well

### Step 2: Open sponsors.json
Open the `sponsors.json` file in any text editor

### Step 3: Add Sponsor Entry
Copy and paste this template, then fill in the details:

```json
{
  "name": "Sponsor Company Name",
  "tier": "gold",
  "logo": "images/sponsors/company-name.png",
  "description": "Short tagline here",
  "website": "https://sponsorwebsite.com"
}
```

## 📝 Full Example

Let's say you have a new Gold sponsor called "Vienna Coffee Shop"

1. Save logo as: `images/sponsors/vienna-coffee.png`

2. Open `sponsors.json` and add:

```json
[
  {
    "name": "Vienna Coffee Shop",
    "tier": "gold",
    "logo": "images/sponsors/vienna-coffee.png",
    "description": "Best coffee in Vienna!",
    "website": "https://viennacoffee.com"
  }
]
```

### Example: VES Cheerleader (No Logo Needed)

For individual/family sponsors at the Cheerleader level, you typically don't need a logo:

```json
{
  "name": "The Smith Family",
  "tier": "cheerleader",
  "description": "Proud VES supporters!"
}
```

## 🏅 Sponsor Tiers

Choose the correct tier level:
- `"platinum"` - $1,500 - Highest tier (largest logos, booth exposure, MC callout)
- `"gold"` - $1,000 - Premium tier (large logos, course markers)
- `"silver"` - $500 - Mid tier (t-shirt logo, social media)
- `"bronze"` - $250 - Entry tier (t-shirt logo, race packet inserts)
- `"cheerleader"` - $100 - Supporter tier (name on t-shirt)

## ⚡ Pro Tips

✅ **Multiple Sponsors:** Separate each sponsor with a comma
```json
[
  { "name": "Sponsor 1", "tier": "gold", ... },
  { "name": "Sponsor 2", "tier": "silver", ... },
  { "name": "Sponsor 3", "tier": "bronze", ... }
]
```

✅ **No Logo Yet?** Omit the logo field - name will display instead
```json
{
  "name": "New Sponsor",
  "tier": "bronze",
  "description": "Coming soon!"
}
```

✅ **Test Your Changes:** Open `sponsorship.html` in a browser to see updates

## ❌ Common Mistakes

❌ Don't forget commas between sponsors
❌ Don't forget quotes around text values
❌ Make sure tier is exactly: `platinum`, `gold`, `silver`, or `bronze`
❌ Check that logo path matches your file location

## 🆘 Need Help?

If sponsors don't appear:
1. Check browser console for errors (F12 → Console)
2. Verify logo file paths are correct
3. Make sure `sponsors.json` has valid syntax
4. Try online JSON validator: https://jsonlint.com

## 📧 Questions?

Contact: ves5krun@gmail.com
