# 🚀 Deploy to Render - Step by Step Guide

## Method 1: GitHub Repository Deployment (Recommended)

### Step 1: Push to GitHub
1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit: SQL Data Warehouse Frontend"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### Step 2: Deploy on Render
1. Go to [render.com](https://render.com) and sign up/login
2. Click **"New +"** → **"Static Site"**
3. Connect your GitHub repository
4. Configure the deployment:

**Build Settings:**
- **Build Command:** `npm ci && npm run build`
- **Publish Directory:** `dist`
- **Node Version:** `18` (or latest)

**Advanced Settings:**
- **Auto-Deploy:** Yes (recommended)
- **Environment:** Production

5. Click **"Create Static Site"**
6. Wait for deployment (usually 2-3 minutes)
7. Your site will be live at: `https://your-app-name.onrender.com`

---

## Method 2: Manual Upload (Alternative)

### Step 1: Build Locally
```bash
npm install
npm run build
```

### Step 2: Deploy Built Files
1. Go to [render.com](https://render.com)
2. Click **"New +"** → **"Static Site"**
3. Choose **"Deploy an existing project from Git"**
4. Upload the `dist` folder contents

---

## Method 3: Render CLI (Advanced)

### Step 1: Install Render CLI
```bash
npm install -g @render/cli
```

### Step 2: Login and Deploy
```bash
render login
render deploy
```

---

## 🔧 Configuration Files Included

- **`render.yaml`**: Render service configuration
- **`package.json`**: Build scripts and dependencies
- **`vite.config.ts`**: Production build optimization

---

## 🌟 Post-Deployment

After successful deployment:

1. **Custom Domain** (Optional):
   - Go to Settings → Custom Domains
   - Add your domain and configure DNS

2. **Environment Variables** (If needed):
   - Go to Environment tab
   - Add any required variables

3. **SSL Certificate**: 
   - Automatically provided by Render

---

## 🚨 Troubleshooting

### Build Fails?
- Check Node.js version (use 18+)
- Verify all dependencies in package.json
- Check build logs for specific errors

### Site Not Loading?
- Ensure `dist` folder is being published
- Check routing configuration in render.yaml
- Verify index.html exists in dist folder

### Need Help?
- Check Render documentation: [docs.render.com](https://docs.render.com)
- Review build logs in Render dashboard
- Ensure all files are committed to Git

---

## 📊 Expected Result

Your SQL Data Warehouse Frontend will be live with:
- ✅ Professional analytics dashboard
- ✅ Interactive data visualizations  
- ✅ Responsive design for all devices
- ✅ Fast loading and optimized performance
- ✅ HTTPS security by default

**Deployment Time:** ~3-5 minutes
**URL Format:** `https://your-chosen-name.onrender.com`