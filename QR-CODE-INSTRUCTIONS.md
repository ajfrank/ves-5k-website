# How to Add the Payment QR Code

## Quick Instructions

### Step 1: Add Your QR Code Image
1. Save your QR code image as: `images/payment-qr-code.png` (or `.jpg`)
2. Make sure the file is at least 500x500 pixels for best quality

### Step 2: Update sponsorship.html
1. Open `sponsorship.html` in a text editor
2. Find this section (around line 55-60):

```html
<div class="qr-code-container">
    <div class="qr-placeholder">
        <p style="font-size: 3rem; margin: 0;">📱</p>
        <p style="margin: 0.5rem 0; font-weight: 600; color: var(--dark);">QR Code Coming Soon</p>
        <p class="small" style="color: var(--gray);">Add your payment QR code image as:<br><code>images/payment-qr-code.png</code></p>
    </div>
    <!-- Uncomment the line below and remove the placeholder above once you add your QR code -->
    <!-- <img src="images/payment-qr-code.png" alt="Payment QR Code" class="qr-code"> -->
</div>
```

3. **Delete the placeholder section** and **uncomment the image tag** so it looks like this:

```html
<div class="qr-code-container">
    <img src="images/payment-qr-code.png" alt="Payment QR Code" class="qr-code">
</div>
```

### Step 3: Done!
Refresh your browser and your QR code will appear!

---

## If Your QR Code is a JPG File

If your file is `payment-qr-code.jpg` instead of `.png`, change the image source:

```html
<img src="images/payment-qr-code.jpg" alt="Payment QR Code" class="qr-code">
```

---

## Visual Guide

**Before (Placeholder):**
```
📱
QR Code Coming Soon
Add your payment QR code image as:
images/payment-qr-code.png
```

**After (Your QR Code):**
```
[Your actual QR code displays here]
```

---

## Recommended QR Code Specifications

- **Size:** At least 500x500 pixels
- **Format:** PNG (recommended for transparency) or JPG
- **Background:** White or transparent
- **Test it:** Scan the QR code with your phone before adding to ensure it works!

## Troubleshooting

**QR code not showing?**
- Verify the file is named exactly `payment-qr-code.png` (or `.jpg`)
- Make sure it's in the `images/` folder
- Check that you removed the placeholder and uncommented the img tag
- Try a hard refresh in your browser (Ctrl+Shift+R or Cmd+Shift+R)

**QR code looks blurry?**
- Use a higher resolution image (at least 500x500 pixels)
- PNG format often looks better than JPG

---

Need help? Contact: ves5krun@gmail.com
