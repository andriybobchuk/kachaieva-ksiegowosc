# Nataliia Kachaieva - Księgowa Gliwice

Professional accounting services website for Nataliia Kachaieva in Gliwice, Poland.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment Instructions

### Netlify Deployment (Recommended)

1. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/nataliia-accounting.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account and select the repository
   - Build settings are auto-configured via `netlify.toml`
   - Click "Deploy site"

3. **Configure Custom Domain:**
   - In Netlify site settings → Domain management
   - Add custom domain (e.g., ksiegowa-gliwice.pl)
   - Configure DNS at your domain registrar:
     - Add CNAME record: www → your-site.netlify.app
     - Add A record: @ → 75.2.60.5

### Domain Setup (Squarespace Domains)

1. Purchase domain at [Squarespace Domains](https://domains.squarespace.com)
2. In DNS settings, add:
   - Type: CNAME, Host: www, Points to: your-site.netlify.app
   - Type: A, Host: @, Points to: 75.2.60.5
3. Enable SSL in Netlify (automatic)

## 🔍 SEO Optimization

The site is fully SEO-optimized with:
- Meta tags for search engines
- Open Graph tags for social media
- Schema.org structured data
- Sitemap.xml
- Robots.txt
- Canonical URLs

### Important SEO Files:
- `/public/robots.txt` - Search engine instructions
- `/public/sitemap.xml` - Site structure for Google
- `/index.html` - Contains all meta tags and structured data

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Inline CSS** - Styling (no external dependencies)
- **SEO** - Complete meta tags and structured data

## 📱 Features

- Responsive design
- Multi-language support (Polish, English, Ukrainian, Russian)
- Contact forms
- WhatsApp integration
- Countdown timer for promotions
- Professional benefits section
- Service pricing cards

## 📄 License

© 2024 Nataliia Kachaieva. All rights reserved.