# NakamaMesh Website

Unstoppable communication for everyone. Built with pure HTML/CSS/JavaScript.

## Quick Start - Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to https://github.com
2. Click "New repository" (green button)
3. Name it: `nakamamesh.github.io` (exactly this!)
4. Make it Public
5. Click "Create repository"

### Step 2: Upload These Files

**Option A: Drag and Drop (Easiest)**
1. On your new repository page, click "uploading an existing file"
2. Drag these files into the upload area:
   - index.html
   - styles.css
   - script.js
   - NakamaMesh_Whitepaper_v1.0.pdf (add your whitepaper)
3. Scroll down and click "Commit changes"

**Option B: Command Line (If you know Git)**
```bash
git clone https://github.com/yourusername/nakamamesh.github.io.git
cd nakamamesh.github.io
# Copy all website files here
git add .
git commit -m "Initial website launch"
git push
```

### Step 3: Enable GitHub Pages

1. Go to repository Settings
2. Click "Pages" in left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait 2-3 minutes

Your site will be live at: **https://nakamamesh.github.io**

### Step 4: Add Custom Domain (Optional)

1. Buy domain from Namecheap/Porkbun (e.g., nakamamesh.network)
2. In repository Settings → Pages → Custom domain
3. Enter your domain: `nakamamesh.network`
4. In your domain registrar, add DNS records:
   - Type: A, Value: 185.199.108.153
   - Type: A, Value: 185.199.109.153
   - Type: A, Value: 185.199.110.153
   - Type: A, Value: 185.199.111.153
5. Wait 24-48 hours for DNS propagation

## Before You Upload - Update These:

### In index.html:
- Line 226: Add your contract address
- Line 227: Add BSCScan link
- Line 274: Add Android APK download link
- Line 472-483: Add your social media links

### Files to Add:
- Place `NakamaMesh_Whitepaper_v1.0.pdf` in root folder
- Add your app APK file
- (Optional) Add logo images

## File Structure

```
nakamamesh.github.io/
├── index.html          # Main website
├── styles.css          # All styling
├── script.js           # Animations and interactions
├── NakamaMesh_Whitepaper_v1.0.pdf  # Your whitepaper
└── README.md          # This file
```

## Features

- ✅ Fully responsive (mobile/tablet/desktop)
- ✅ Fast loading (no frameworks, pure HTML/CSS/JS)
- ✅ Smooth animations
- ✅ SEO optimized
- ✅ Accessibility friendly
- ✅ Dark/light themes
- ✅ Modern design

## Tech Stack

- HTML5
- CSS3 (with custom properties)
- Vanilla JavaScript
- Google Fonts (Archivo Black + Work Sans)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

MIT License - Open Source

## Contact

- Email: hello@nakamamesh.network
- Telegram: t.me/nakamamesh
- Twitter: @NakamaMesh
- GitHub: github.com/nakamamesh

---

**Built for humanity. Powered by the people.**
