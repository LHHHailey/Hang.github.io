# Personal Job-Seeking Website

Static personal site for coursework / job applications: **About**, **Skills**, **Projects**, **CV** (PDF), and **Contact**. Built with plain HTML, CSS, and a single JavaScript `profile` object—no build step.

---

## What’s in this repo

| File | Purpose |
|------|---------|
| `index.html` | Page structure and navigation |
| `styles.css` | Layout and responsive styles |
| `script.js` | All copy: headline, tags, bio, education, skills, projects, links |
| `LIUHang.pdf` | CV linked from the **CV** section |

The hero area (name, one-line headline, tags) is in the header; there is no separate “Home” section card.

---

## Edit your content

Open **`script.js`** and update the `profile` object:

- `name`, `headline`, `tags`
- `bioParagraphs` (array of paragraphs for **About Me**)
- `educationLines` (two lines shown under **Education**)
- `strengths`, `technicalSkills`, `businessSkills`, `tools`
- `projects` — each item has `title`, `time`, `problem`, `data`, `approach`, `outcome`, `contribution`, optional `links`
- `resumeText`, `resumeLink` (path or URL to your PDF)
- `contact`: `email`, `emailAlt`, `github`, `phone`

After changing the PDF filename, set `resumeLink` to match .

---

## Preview locally

**Quick:** double-click `index.html` (some browsers limit `file://` behavior; a local server is safer).

**Recommended:**

```powershell
cd path\to\524final4.14
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

---

## Deploy on GitHub Pages

1. Create a **public** repository on GitHub.
2. Upload **at least** these four files to the **root** of the repo:  
   `index.html`, `styles.css`, `script.js`, `LIUHang.pdf` (or your chosen PDF + matching `resumeLink`).
3. **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **`main`** (or `master`), folder **`/ (root)`**
4. Wait 1–3 minutes, then open:  
   `https://<username>.github.io/<repository>/`

Update the site by uploading new versions of the files or pushing commits.
