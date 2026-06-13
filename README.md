# The Way He Wants Me — Website Setup Guide

## File Structure

```
/
├── index.html        ← Main website file
├── style.css         ← All visual styling
├── script.js         ← All interactivity + chapter content
├── images/
│   ├── background.jpg  ← Landing page full-screen background
│   └── cover.jpg       ← Novel cover shown on landing page
└── music/
    ├── chapter1.mp3    ← Fallback track 1 (optional)
    ├── chapter2.mp3    ← Fallback track 2 (optional)
    └── ending.mp3      ← Fallback track 3 (optional)
```

---

## Step-by-Step: Publishing to GitHub Pages

### Step 1 — Create a GitHub account
Go to https://github.com and sign up (free).

### Step 2 — Create a new repository
1. Click the **+** button → **New repository**
2. Name it anything, e.g. `my-novel` or your-username.github.io
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload your files
1. Inside your new repository, click **uploading an existing file**
2. Drag and drop ALL of these files and folders:
   - `index.html`
   - `style.css`
   - `script.js`
   - The `images/` folder (with your background.jpg and cover.jpg)
   - The `music/` folder (optional — only if using local audio)
3. Scroll down, write a commit message like "Add novel website"
4. Click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to your repository → **Settings** tab
2. Scroll to **Pages** in the left menu
3. Under **Source**, choose **Deploy from a branch**
4. Set branch to **main** (or master), folder to **/ (root)**
5. Click **Save**

### Step 5 — Wait ~2 minutes, then visit your site
Your site will be live at:
`https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`

---

## Customization Guide

### Change the novel title
Open `index.html` and find:
```html
<h1 class="novel-title">The Way He<br /><em>Wants Me</em></h1>
```
Replace the text between the tags.

### Change background and cover images
- Replace `images/background.jpg` with any dark, atmospheric photo
- Replace `images/cover.jpg` with your book cover image
- Recommended: background at least 1920×1080px, cover at 600×900px

### Change colours
Open `style.css` and find the `:root` block near the top.
Every colour is labelled with a comment explaining what it controls.

### Change fonts
In `index.html`, find the Google Fonts `<link>` tag and replace the font names.
Then update the `--font-display`, `--font-body`, `--font-mono` variables in `style.css`.

### Edit or add chapters
Open `script.js` and find the `CHAPTERS` array near the top.
Each chapter looks like:
```js
{
  title: "I. Chapter Name",
  content: `Your chapter text here.

  A blank line starts a new paragraph.`
}
```
Add more objects to the array to add more chapters.

### Change the Spotify playlist
In `index.html`, find the `<iframe>` with `spotify.com/embed` in the src.
Replace the playlist ID in the URL with your own playlist's ID.
(The ID is the string of letters after `/playlist/` in your Spotify link.)

### Change local music fallback tracks
In `script.js`, find the `MUSIC_TRACKS` array:
```js
const MUSIC_TRACKS = [
  { label: "Track Name", src: "music/filename.mp3" },
  ...
];
```
Replace the src paths and label strings with your own files.

---

## Features

- 🌫 Animated fog overlay
- ✨ Floating dust particles
- 📖 Five-chapter reading experience with drop caps
- 🔢 Reading progress bar
- ⏱ Estimated reading time per chapter
- 🌙 Dark / light mode toggle (preference saved)
- 🔡 Adjustable font size
- ♡ Highlight any text to save it as a favourite quote
- 🎵 Embedded Spotify playlist player
- 📑 Collapsible table of contents
- ⌨ Keyboard navigation (arrow keys to change chapters, Esc to close TOC)
- 📱 Fully mobile responsive
