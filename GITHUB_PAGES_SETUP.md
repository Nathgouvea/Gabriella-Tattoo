# GitHub Pages Setup - Fix Deployment Error

## 🚨 Current Issue

The deployment is failing with error 403 because GitHub Pages isn't properly configured in your repository settings.

## 🔧 Step-by-Step Fix

### 1. Enable GitHub Pages in Repository Settings

1. **Go to your repository on GitHub:**

   - Navigate to: `https://github.com/Nathgouvea/Gabriella-Tattoo`

2. **Open Repository Settings:**

   - Click on the **Settings** tab in your repository

3. **Navigate to Pages:**

   - In the left sidebar, click on **Pages**

4. **Configure Pages Source:**

   - Under **Source**, select **GitHub Actions**
   - This will allow the workflow to deploy to GitHub Pages

5. **Save Settings:**
   - The changes will be saved automatically

### 2. Verify Repository Permissions

1. **Check Repository Visibility:**

   - Ensure your repository is **public** (or you have GitHub Pro for private repos)
   - GitHub Pages requires public repositories unless you have GitHub Pro

2. **Check Workflow Permissions:**
   - Go to **Settings** → **Actions** → **General**
   - Ensure **Actions permissions** is set to "Allow all actions and reusable workflows"

### 3. Trigger a New Deployment

After updating the settings, you can trigger a new deployment by:

1. **Push a small change:**

   ```bash
   git add .
   git commit -m "fix: update GitHub Actions workflow"
   git push origin main
   ```

2. **Or manually trigger the workflow:**
   - Go to **Actions** tab in your repository
   - Click on the **build-and-deploy** workflow
   - Click **Run workflow** button
   - Select the **main** branch and click **Run workflow**

## 🔍 What Changed in the Workflow

The updated workflow now includes:

### ✅ Proper Permissions

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

### ✅ Modern Deployment Approach

- Uses `actions/configure-pages@v3`
- Uses `actions/upload-pages-artifact@v2`
- Uses `actions/deploy-pages@v2`

### ✅ Concurrency Control

```yaml
concurrency:
  group: "pages"
  cancel-in-progress: false
```

## 📋 Expected Results

After following these steps:

1. **GitHub Pages will be enabled** in your repository
2. **The workflow will have proper permissions** to deploy
3. **Your site will be available at:** `https://nathgouvea.github.io/Gabriella-Tattoo/`

## 🚀 Alternative: Manual Deployment

If you prefer to deploy manually instead of using GitHub Actions:

1. **Build locally:**

   ```bash
   npm run build
   ```

2. **Deploy manually:**

   ```bash
   npm run deploy
   ```

3. **Configure Pages source:**
   - Go to **Settings** → **Pages**
   - Set **Source** to "Deploy from a branch"
   - Select **gh-pages** branch and **/(root)** folder

## 🔍 Troubleshooting

### Still Getting 403 Error?

1. **Check repository visibility** - must be public
2. **Verify GitHub Pages is enabled** in Settings → Pages
3. **Check workflow permissions** in Settings → Actions → General
4. **Ensure you're using the main branch** for deployment

### Workflow Not Running?

1. **Check Actions tab** to see if the workflow is listed
2. **Verify the workflow file** is in `.github/workflows/deploy.yml`
3. **Check branch name** - ensure you're pushing to `main`

### Site Not Loading?

1. **Wait a few minutes** - deployment can take 2-5 minutes
2. **Check the gh-pages branch** exists in your repository
3. **Verify the URL** is correct: `https://nathgouvea.github.io/Gabriella-Tattoo/`

## 📞 Need Help?

If you're still having issues:

1. Check the **Actions** tab for detailed error logs
2. Verify all settings in **Settings** → **Pages**
3. Ensure your repository is **public**
4. Try the manual deployment approach

---

**Next Step:** Follow the steps above to enable GitHub Pages in your repository settings, then push the updated workflow file.
