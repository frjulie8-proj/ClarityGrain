# ClarityGrain LLC — Website

Food & restaurant analytics consulting website.
Built with plain HTML, CSS, and JavaScript. No build tools required.

---

## Project structure

```
claritygrain/
├── index.html        ← single page, all three sections
├── css/
│   └── style.css     ← all styles
├── js/
│   └── main.js       ← navigation + form logic
└── README.md
```

---

## Deploy to GitHub Pages (free)

### Step 1 — Create a GitHub account
Go to github.com and sign up if you don't have one.

### Step 2 — Create a new repository
1. Click the **+** icon → **New repository**
2. Name it: `claritygrain` (or `yourusername.github.io` for a root domain)
3. Set to **Public**
4. Do NOT initialize with README (you already have one)
5. Click **Create repository**

### Step 3 — Push your code

Open your terminal and run:

```bash
cd claritygrain
git init
git add .
git commit -m "Initial commit — ClarityGrain website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/claritygrain.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 4 — Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source** → select **main** branch → **/ (root)**
4. Click **Save**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/claritygrain`

Takes about 1–2 minutes to go live.

---

## Connect a custom domain (e.g. claritygrain.com)

### Step 1 — Buy domain
Go to namecheap.com and purchase `claritygrain.com` (~$10–15/year).

### Step 2 — Add CNAME file to your project
Create a file named `CNAME` (no extension) in the root folder with:

```
claritygrain.com
```

Then commit and push:
```bash
git add CNAME
git commit -m "Add custom domain"
git push
```

### Step 3 — Configure DNS at Namecheap
Go to Namecheap → Manage your domain → Advanced DNS.

Add these **A Records**:
| Type | Host | Value |
|------|------|-------|
| A Record | @ | 185.199.108.153 |
| A Record | @ | 185.199.109.153 |
| A Record | @ | 185.199.110.153 |
| A Record | @ | 185.199.111.153 |

Add this **CNAME Record**:
| Type | Host | Value |
|------|------|-------|
| CNAME Record | www | YOUR_USERNAME.github.io |

### Step 4 — Add domain in GitHub Pages settings
1. Go to Settings → Pages
2. Under **Custom domain** enter: `claritygrain.com`
3. Check **Enforce HTTPS** (wait a few minutes for SSL to activate)

DNS can take up to 48 hours to propagate, but usually works within 1 hour.

---

## Set up the contact form (Formspree — free tier)

The contact form uses Formspree to send submissions to your email.

### Step 1
Go to formspree.io and sign up for a free account.

### Step 2
Create a new form. Copy your form ID (looks like `xpzgkabcd`).

### Step 3
Open `index.html` and find this line:
```html
<form class="form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" novalidate>
```

Replace `YOUR_FORM_ID` with your actual form ID:
```html
<form class="form" action="https://formspree.io/f/xpzgkabcd" method="POST" novalidate>
```

### Step 4
Commit and push:
```bash
git add index.html
git commit -m "Add Formspree form ID"
git push
```

Formspree free tier allows 50 submissions/month — more than enough to start.

---

## Making updates

Any change to your site:

```bash
git add .
git commit -m "Update copy on services page"
git push
```

GitHub Pages auto-deploys within ~1 minute.

---

## Quick reference — Git commands

```bash
# Check status of changed files
git status

# Stage all changes
git add .

# Commit with a message
git commit -m "Your message here"

# Push to GitHub
git push

# See history
git log --oneline
```

---

## OPT documentation note
This website serves as evidence of your active LLC operation.
Keep screenshots of it dated — useful for SEVP documentation.
