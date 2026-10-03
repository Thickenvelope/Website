# Thick Envelope

A free college admissions hub for students and families.

This is a **static website** — plain HTML, CSS, and JavaScript. There is no build step,
nothing to install, and no command to run. Open `index.html` in a browser and it works.

---

## Deploying to Cloudflare Pages

1. Push this folder to a GitHub repository.
2. In the Cloudflare dashboard go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repository, then on the build settings screen:
   - **Framework preset:** `None`
   - **Build command:** leave completely empty
   - **Build output directory:** `/`
4. Click **Save and Deploy**.

Every push to the main branch redeploys the site automatically.

---

## File map

```
index.html            Home page
resources.html        Resources landing page
deadlines.html        Deadline calendar page
tours.html            Campus tours page
ambassadors.html      Ambassador directory
newsletter.html       Newsletter signup page
404.html              Shown for any broken link

assets/css/
  styles.css          All styling for the whole site

assets/js/
  config.js           SITE SETTINGS — start here for most edits
  site.js             Builds the header and footer on every page
  data/
    ambassadors.js    Ambassador records (mock data)
    tours.js          Tour tips and tour stops (mock data)
  pages/
    home.js           Home page stats and cards
    ambassadors-page.js  Ambassador directory and filters
    tours-page.js        Tour tips and tour stop cards

_headers              Security headers for Cloudflare Pages
```

---

## Making common changes

| I want to change…                   | Edit this file                      |
| ----------------------------------- | ----------------------------------- |
| Menu items, site name, contact info | `assets/js/config.js`               |
| Hero headline or subtitle           | `assets/js/config.js` → `hero`      |
| Home page cards or stats            | `assets/js/config.js`               |
| Footer links and wording            | `assets/js/config.js` → `footer`    |
| Ambassador profiles                 | `assets/js/data/ambassadors.js`     |
| Campus tour tips or tour stops      | `assets/js/data/tours.js`           |
| Colours, fonts, spacing             | `assets/css/styles.css` (section 01)|

The header and footer are generated from `config.js`, so adding a menu item updates
every page at once. There is no duplicated navigation markup to keep in sync.

---

## Connecting the newsletter

Signups currently validate the address and show a confirmation message without sending
anything. To go live, paste your email provider's form URL into `config.js`:

```js
newsletter: {
  formAction: "https://your-provider.example.com/subscribe"
}
```

Once that value is set, the form posts directly to the provider. No other changes needed.

---

## Placeholder content

Ambassador profiles, tour stops, and the deadline table use **sample data**. All colleges
and people are fictional. Real data replaces them in Phase 2.
