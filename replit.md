# Emperor FM

## Overview

Emperor FM is a static web-based audio streaming application (podcast/story player) that serves Hindi audio stories with multiple episodes. It functions as a simple front-end-only app with no backend — all content is hardcoded in JavaScript and audio files are hosted externally via CDN (jsdelivr) and GitHub Pages. The app features a dark-themed UI with story cards on a home page and an audio player page for listening to episodes.

The project is currently a work-in-progress — the `script.js` file is incomplete (the `loadHome()` function is truncated), and the story data uses placeholder audio URLs instead of the actual episode URLs provided in the design spec (`attached_assets/Pasted-APP-NAME-EMPEROR-FM...txt`).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Pure HTML/CSS/JavaScript** — No frameworks, no build tools, no bundler. Just three files: `index.html`, `style.css`, and `script.js`.
- **Single Page App (manual)** — The app simulates page navigation by showing/hiding DOM sections (`home` div and `playerSection` div) using a `.hidden` CSS class. No router is used.
- **Data is hardcoded** — All story and episode data lives in a JavaScript array (`stories`) in `script.js`. There is no database or API.
- **Audio playback** — Uses the native HTML5 `<audio>` element with controls. Playback speed is adjustable via a `<select>` dropdown.

### Content Structure
- The app is designed to have **6 stories**, each with multiple episodes (up to 10 each based on the design spec).
- Each story has a title, a thumbnail image, and an array of episodes with names and audio source URLs.
- Audio files are `.m4a` format hosted on GitHub via jsdelivr CDN.
- Thumbnail images are hosted on GitHub Pages (`AlexEmperor998.github.io/Emperor_FM/`).

### Design Spec (from attached_assets)
The file `attached_assets/Pasted-APP-NAME-EMPEROR-FM...txt` contains the full design specification including:
- App icon URL
- All 6 story titles: Super Zene, Super Yoddha, and 4 others (spec is truncated)
- Thumbnail URLs for each story
- Episode names and actual CDN audio URLs for each episode
- Visual design requirements: dark black sky background, twinkling star animation, galaxy style, clean modern dark UI
- A QR code section for donations and a Telegram channel link

### Key Issues to Address
1. **`script.js` is incomplete** — The `loadHome()` function body is cut off. The functions `goHome()`, `changeSpeed()`, and episode navigation logic are missing entirely.
2. **Story data uses placeholder URLs** — The `stories` array uses SoundHelix placeholder MP3s instead of the actual episode URLs from the design spec.
3. **Only 2 episodes max per story** — The spec calls for 10 episodes per story but only 1-2 placeholders exist.
4. **Missing visual features** — The twinkling stars animation and galaxy-style background described in the spec are not implemented.
5. **Missing thumbnails in story cards** — The design spec provides thumbnail URLs but the current code doesn't reference them.

### Hosting
- Designed to be hosted on **GitHub Pages** at `AlexEmperor998.github.io/Emperor_FM/`.
- All assets (images, audio) are externally hosted — no local media files in the repo.

## External Dependencies

### CDN / External Services
- **jsdelivr CDN** (`cdn.jsdelivr.net/gh/alexkumar4/S1@...`) — Hosts the actual `.m4a` audio episode files from a GitHub repository.
- **GitHub Pages** (`AlexEmperor998.github.io/Emperor_FM/`) — Hosts story thumbnail images (`story1.jpg`, `story2.jpg`, etc.), the app icon (`icon.jpg`), and a QR code image (`qr.jpg`).
- **SoundHelix** (`soundhelix.com`) — Currently used as placeholder audio. Should be replaced with actual episode URLs.
- **Telegram** (`t.me/emperor_fm`) — External link to the Emperor FM Telegram channel for community/updates.

### Third-Party Libraries
- None. The project uses no external JavaScript libraries, CSS frameworks, or build tools.

### Database
- None. All data is client-side only, hardcoded in JavaScript.