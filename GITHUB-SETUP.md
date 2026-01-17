# GitHub SSH Setup & Push Guide

## Step 1: Generate SSH Key

Run this command in your terminal (replace with your GitHub email):

```bash
ssh-keygen -t ed25519 -C "your-github-email@example.com"
```

When prompted:
- Press **Enter** to accept the default file location
- Press **Enter** twice to skip setting a passphrase (or add one for extra security)

## Step 2: Start SSH Agent & Add Your Key

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

## Step 3: Copy Your Public Key

```bash
cat ~/.ssh/id_ed25519.pub
```

This will display your public key. **Copy the entire output** (starts with `ssh-ed25519`).

## Step 4: Add SSH Key to GitHub

1. Go to **GitHub.com** and log in
2. Click your profile picture → **Settings**
3. Click **SSH and GPG keys** (left sidebar)
4. Click **New SSH key**
5. Give it a title (e.g., "My Mac")
6. Paste your public key into the "Key" field
7. Click **Add SSH key**

## Step 5: Test Your SSH Connection

```bash
ssh -T git@github.com
```

You should see: `Hi username! You've successfully authenticated...`

## Step 6: Create GitHub Repository

1. Go to **github.com/new**
2. Repository name: `ves-5k-website` (or whatever you prefer)
3. Choose **Public** or **Private**
4. **Don't** initialize with README (your project already has files)
5. Click **Create repository**

## Step 7: Initialize Git & Push Your Project

In your terminal, run these commands from your project folder:

```bash
cd "/Users/ajfrank/Desktop/VES 5K"

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: VES 5K website"

# Add GitHub as remote (replace USERNAME and REPO with yours)
git remote add origin git@github.com:USERNAME/REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Quick Reference Commands

```bash
# Check git status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push changes
git push

# Pull latest changes
git pull
```

---

## Troubleshooting

**"Permission denied (publickey)"**
- Make sure you added your SSH key to GitHub
- Test connection: `ssh -T git@github.com`

**"remote origin already exists"**
- Remove it: `git remote remove origin`
- Then add it again with the correct URL

**Need to change remote URL?**
```bash
git remote set-url origin git@github.com:USERNAME/REPO.git
```

---

**Need help?** Let me know which step you're on and I can help!
