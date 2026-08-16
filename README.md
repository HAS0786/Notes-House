# Notes-House
It's contain the complete detailed of our FYP "Notes House" that what problem we solve, how to solve, what we build, which technologies we used and what features it have also complete detail about Team Members and Supervisor.  

- Real Notes House UI screenshots are used throughout the hero, gallery, AI and analytics sections.
- Blue + white / soft-lavender visual language follows the mobile app.
- Dark mode is included.
- Added Student / Teacher / Admin feature sections.
- Added AI Study Buddy + RAG pipeline.
- Added architecture and AWS EC2 deployment target.
- Added testing, security and development journey.
- Added direct project documentation download.
- Added FAppCrafters team section.
- Added Supervisor and Evaluator sections.
- Added personal-branding links for each member.
- Added lightbox gallery.
- Kept the site framework-free: HTML + CSS + JavaScript.

## IMPORTANT: Where you change things

Open:

`config.js`

There you can change:

1. APK path
2. Documentation path
3. Hasnat LinkedIn / GitHub / Portfolio
4. Abdul Hanan LinkedIn / GitHub / Portfolio
5. Hafiz Abdul Rahman LinkedIn / GitHub / Portfolio

### APK

Put your final APK here:

`assets/Notes-House.apk`

Then the **Download APK** button will work.

### Team links

Replace the `#` values in `config.js` with the real URLs.

Do not invent URLs for team members.

## Deployment to Vercel

This is a static website. It can be deployed directly to Vercel.

Recommended structure:

notes-house-showcase-v2/
├── index.html
├── style.css
├── script.js
├── config.js
└── assets/
    ├── Notes-House.apk
    ├── docs/
    │   └── Notes-House-Documentation.pdf
    └── screenshots/

No build command is required.

## Project GitHub

The project documentation lists:

https://github.com/HAS0786/fyp_notes_house

## Content accuracy note

The website separates:
- information documented in the official project report,
- implementation details reflected by the supplied AI/backend code,
- new deployment work such as AWS EC2.

AWS EC2 is intentionally described as a deployment target until the actual deployment is verified.
