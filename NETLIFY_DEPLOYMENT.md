# Deploying to Netlify

This project is configured for npm and Next.js. Netlify detects modern Next.js projects automatically; `netlify.toml` records the expected build command and publish directory.

1. Push this cleaned project to a Git repository and connect that repository in Netlify.
2. Use the `main` branch, leave the base directory empty, and keep the build settings from `netlify.toml`.
3. In **Site configuration > Environment variables**, add the following server-only variables:

   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`

4. Redeploy after adding or changing environment variables.

Do not prefix either Telegram variable with `NEXT_PUBLIC_`, do not add their values to this repository, and do not upload `.env.local`.

The `/api/visit` route safely does nothing when the variables are absent, so the site remains usable without Telegram alerts.
