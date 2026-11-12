# Hola Homes Mexico

Static V1 website for Hola Homes Mexico.

## Public Site Files

Deploy these files:

- `index.html`
- `styles.css`
- `script.js`

Optional supporting file:

- `email-signature.html` for copying Susana's Gmail signature

Do not deploy the screenshot files or `docs/superpowers/` planning notes unless you intentionally want them in the repo.

## Local Preview

From this folder:

```bash
python3 -m http.server 8010
```

Then open:

```text
http://localhost:8010/index.html
```

## Deployment

Recommended:

1. Create a GitHub repo.
2. Add `index.html`, `styles.css`, `script.js`, and optionally `email-signature.html`.
3. Import the repo into Vercel.
4. Add the custom domain `holahomesmx.com`.
5. Add Vercel's DNS records in Porkbun.

## Post-Launch Tasks

- Replace placeholder property cards with real listings.
- Create Google Form for client intake.
- Connect intake CTA to the form URL.
- Add Senja testimonials.
- Add Google Analytics and Meta Pixel before running ads.
- Replace map embed with the verified Google Business Profile map once the profile is live.
