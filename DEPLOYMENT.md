# IntelliForceAI — cPanel Shared Hosting Deployment & Operations Manual

This guide outlines the production deployment procedure for **IntelliForceAI** on **cPanel Shared Hosting (`public_html/`)** using Next.js Static Export (`output: 'export'`).

---

## 📋 Pre-Deployment QA Checklist

Before building for production, ensure all automated tests and type checks pass:

```bash
# 1. Type Checking
npx tsc --noEmit

# 2. ESLint Audit
npm run lint

# 3. Static Export Build
npm run build

# 4. Automated QA Audit
npm run test:qa
```

---

## 🏗️ Step-by-Step Deployment Instructions

### Step 1: Generate Production Static Export
Execute the build command locally or in your CI pipeline:

```bash
npm run build
```

This compiles all 27 prerendered static pages, CSS, JS chunks, images, `.htaccess`, and `contact.php` into the `out/` directory.

### Step 2: Compress Distribution Archive
Compress the contents of the `out/` directory into a zip archive:

```bash
cd out && zip -r ../deploy-v1.0.0.zip . && cd ..
```

*Note: Zip the CONTENTS of `out/`, not the `out` folder itself, so files extract directly into `public_html/`.*

### Step 3: Upload to cPanel Shared Hosting
1. Log into your **cPanel Dashboard** (`https://yourdomain.com:2083`).
2. Open **File Manager** and navigate to `public_html/`.
3. If replacing an existing site, archive old files or clear unnecessary files.
4. Click **Upload** and select `deploy-v1.0.0.zip`.
5. Once uploaded, right-click `deploy-v1.0.0.zip` in File Manager and select **Extract**.
6. Delete `deploy-v1.0.0.zip` from `public_html/`.

---

## 📧 Contact Form Backend Setup (`public_html/contact.php`)

If PHPMailer or SMTP sending is required on cPanel:
1. Open `public_html/contact.php` in cPanel File Manager Code Editor.
2. Configure your cPanel email address and SMTP parameters:

```php
$to_email = "sales@intelliforceai.ai";
$subject_prefix = "[Website Contact] ";
```

3. Verify PHP mail execution permissions are enabled on your cPanel account.

---

## 🔒 Security & Performance Features Included

The included `.htaccess` file automatically configures:
- **HTTPS Enforcement**: 301 Redirect from HTTP to HTTPS.
- **Security Headers**: HSTS, Content Security Policy (CSP), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`.
- **Far-Future Caching**: 1-year caching for images, CSS, JS, fonts (`max-age=31536000, immutable`).
- **Gzip Compression**: `mod_deflate` enabled for text/html/css/js/json/svg.
- **Custom 404 Handling**: Redirects broken URLs to `/404.html`.

---

## 🔄 Zero-Downtime Rollback & Maintenance

### Rollback Procedure
1. Keep the previous build zip archive (e.g. `deploy-v0.9.0.zip`) stored safely in a backup folder.
2. To rollback in case of an issue:
   - Select all files in `public_html/` (except `uploads/` or user logs if any).
   - Delete current deployment.
   - Upload and extract `deploy-v0.9.0.zip`.
   - Your site will instantly revert with zero downtime.

---

## 🏁 Verification Post-Deployment

After uploading to cPanel:
1. Visit `https://yourdomain.com` in Incognito mode.
2. Press `Cmd+K` / `Ctrl+K` to test global search modal.
3. Test language switching (English / Bangla).
4. Fill out contact form at `https://yourdomain.com/contact/` to test PHP contact submission.
5. Check SSL padlock and Security Headers using [securityheaders.com](https://securityheaders.com).
