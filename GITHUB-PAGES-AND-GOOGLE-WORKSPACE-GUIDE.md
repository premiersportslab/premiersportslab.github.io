# GitHub Pages + Google Workspace Domain Guide

## What each service does

- **GitHub Pages** hosts the HTML, CSS, JavaScript, and images.
- **Your domain registrar/DNS provider** points your domain to GitHub.
- **Google Workspace** continues operating Gmail, Calendar, Drive, and other Workspace services.

Do not delete Google Workspace MX, SPF, DKIM, DMARC, or verification records when connecting the website.

## 1. Complete the website settings

Edit `assets/js/config.js` and replace:

- league email
- phone number
- registration URL
- Instagram URL
- Facebook URL
- pricing and season details, if needed

Update the sample schedule in `schedule.html` before launch.

## 2. Create the GitHub repository

1. Sign in to GitHub.
2. Select **New repository**.
3. Name it `nona-basketball-league` or another simple name.
4. Set it to **Public** if your GitHub plan requires public repositories for Pages.
5. Create the repository without adding starter files.

## 3. Upload the site

1. Extract the website ZIP.
2. In the repository, choose **Add file → Upload files**.
3. Upload the contents of the extracted folder—not the outer folder itself.
4. Confirm that `index.html` appears at the repository root.
5. Commit the upload.

## 4. Enable GitHub Pages

1. Open **Repository → Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch `main` and folder `/ (root)`.
4. Save.
5. GitHub will publish a temporary URL similar to:
   `https://YOUR-USERNAME.github.io/nona-basketball-league/`

## 5. Add a custom domain

In **Settings → Pages → Custom domain**, enter your preferred website domain, such as:

`www.yourdomain.com`

GitHub normally creates or updates a `CNAME` file automatically after the domain is saved.

## 6. Configure DNS without disrupting Google Workspace

At the company currently managing your DNS, create:

### For `www`

- Type: `CNAME`
- Host/Name: `www`
- Target/Value: `YOUR-USERNAME.github.io`

Do not enter `https://` or the repository name in the CNAME target.

### For the root/apex domain

Create these `A` records for host `@`:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Keep every existing Google Workspace email record.

## 7. Enable HTTPS

After GitHub confirms the DNS configuration:

1. Return to **Settings → Pages**.
2. Enable **Enforce HTTPS**.
3. Test both the `www` and root versions of the domain.

## How to make updates

### Browser-only method

1. Open the repository.
2. Select the file.
3. Click the pencil icon.
4. Edit the content.
5. Commit the change.

GitHub Pages redeploys after the commit.

### Recommended desktop method

1. Install GitHub Desktop and Visual Studio Code.
2. Clone the repository in GitHub Desktop.
3. Edit files in Visual Studio Code.
4. Preview with Live Server.
5. Commit and push through GitHub Desktop.

## Common update locations

- Contact details, prices, links, season status: `assets/js/config.js`
- Homepage text: `index.html`
- Division details: `divisions.html`
- Weekly schedule: `schedule.html`
- Pricing and registration form: `register.html`
- FAQ: `faq.html`
- Photos: `assets/images/` and `gallery.html`
- Site-wide styling: `assets/css/styles.css`

## Registration form limitation

GitHub Pages is static hosting. It cannot securely process registrations or payments by itself. Connect the site to a registration platform, Google Form, Jotform, Stripe Payment Link, Square, or another hosted system. Place the public registration link in `assets/js/config.js`.

## Safe update procedure

Before major edits:

1. Pull the newest repository version.
2. Create a new branch.
3. Make and preview changes.
4. Merge only after checking desktop and mobile layouts.
