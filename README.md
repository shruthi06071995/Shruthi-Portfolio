# Shruthi — Professional Portfolio

A responsive React + Vite portfolio starter with Tailwind CSS v4, Framer Motion, and Lucide icons.

## Run locally

1. Install Node.js (LTS) if you have not already.
2. Extract this folder and open it in VS Code.
3. Open the VS Code terminal (**Terminal → New Terminal**).
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL Vite prints in the terminal, usually `http://localhost:5173`.

## Personalize before publishing

Open `src/data.js` and update:
- `socialLinks.linkedin` with your LinkedIn profile URL.
- `socialLinks.email` with your professional email address.
- Project GitHub and live-demo URLs.
- Skill lists and project descriptions to match what you can confidently explain in an interview.

### Add your profile photo

1. Put your photo in `public/shruthi-photo.jpg`.
2. In `src/App.jsx`, find the `photo-placeholder` section inside the hero.
3. Replace its inner placeholder content with:

   ```jsx
   <img
     src="/shruthi-photo.jpg"
     alt="Shruthi"
     className="profile-photo"
   />
   ```

4. Add this to `src/index.css`:

   ```css
   .profile-photo {
     width: 100%;
     height: 100%;
     object-fit: cover;
     object-position: center top;
     position: absolute;
     inset: 0;
   }
   ```

   Keep the `photo-frame` wrapper to preserve the decorative border.

## Build for production

```bash
npm run build
npm run preview
```

The production build is created in `dist/`.

## Notes

- The profile image and contact/social URLs are placeholders until you replace them.
- Do not claim features or skills on the portfolio that you cannot demonstrate.
- Tailwind is installed and configured; the current layout uses custom CSS alongside Tailwind so the visual design is easy to tune.
