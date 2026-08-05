# Telegram visitor-alert setup

Every time someone loads your live site, you'll get a Telegram message with:
page visited, approximate (IP/city-level) location, IP, ISP, device, OS,
browser, language, screen size, timezone, referrer, and timestamp.

This does **not** use precise GPS — browsers only expose exact device
location through a permission prompt, and this intentionally avoids that.

## 1. Create your bot

1. Open Telegram, search for **@BotFather**, start a chat.
2. Send `/newbot` and follow the prompts (name + username).
3. BotFather replies with a token like `123456789:AAExampleTokenHere`.
   That's your `TELEGRAM_BOT_TOKEN`.

## 2. Get your chat ID

1. Search for your new bot in Telegram and send it any message (e.g. "hi").
2. In a browser, visit:
   `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
3. Look for `"chat":{"id": 123456789, ...}` in the response — that number is
   your `TELEGRAM_CHAT_ID`.

## 3. Configure the project

Create a `.env.local` file in the project root (copy `.env.local.example`):

```
TELEGRAM_BOT_TOKEN=123456789:AAExampleTokenHere
TELEGRAM_CHAT_ID=123456789
```

## 4. Configure it on your host (for the deployed site)

The tracker only fires in production builds. Add the same two variables
in your hosting provider's environment variable settings (e.g. Vercel →
Project → Settings → Environment Variables), then redeploy.

## Notes

- If the env vars aren't set, the `/api/visit` route silently does
  nothing — the site still works normally, you just won't get alerts.
- Location is approximate and city-level, resolved server-side from the
  visitor's IP via a free geolocation API (ipapi.co). It can be off by
  a fair amount, especially for mobile networks and VPN users.
- Consider a short note in your site's footer or a privacy line (e.g.
  "This site logs basic visit analytics") — costs nothing and keeps
  things transparent for visitors.
