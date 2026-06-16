# 🌸 Japanese Learning Station

A beginner-friendly Japanese learning website covering Hiragana, Katakana, N5 Vocabulary, Grammar, Listening, and Assignments.

---

## 📁 Folder Structure

```
Website/
├── frontend/                  ← All website pages (open in browser)
│   ├── index.html             ← Homepage
│   ├── letters.html           ← Hiragana & Katakana charts
│   ├── vocabulary.html        ← N5 vocabulary list
│   ├── grammar.html           ← N5 grammar lessons
│   ├── listening.html         ← Audio lessons
│   ├── assignments.html       ← Quizzes
│   ├── css/
│   │   └── style.css          ← All styles
│   └── js/
│       ├── main.js            ← Shared JS (nav, tabs)
│       ├── letters.js         ← Kana chart data
│       ├── vocabulary.js      ← Vocabulary data & search
│       ├── grammar.js         ← Grammar lessons
│       ├── listening.js       ← Audio lesson cards
│       └── assignments.js     ← Quiz engine
│
├── backend/                   ← Node.js + Express API
│   ├── server.js              ← Main server (run this)
│   ├── package.json           ← Dependencies
│   └── routes/
│       ├── lessons.js         ← GET /lessons
│       ├── upload.js          ← POST /upload-audio etc.
│       └── materials.js       ← GET /materials
│
└── uploads/                   ← Uploaded files go here
    ├── audio/                 ← .mp3 / .wav audio files
    ├── images/                ← .jpg / .png images
    └── docs/                  ← .pdf documents
```

---

## 🚀 How to Run the Project

### Option A — Frontend Only (no backend needed)
The frontend works completely standalone — just open the HTML files in a browser.

1. Open VS Code
2. Install the **Live Server** extension (by Ritwick Dey)
3. Right-click `frontend/index.html` → **Open with Live Server**
4. The site opens at `http://127.0.0.1:5500`

That's it! All pages, charts, vocabulary, grammar, and quiz work without the backend.

---

### Option B — Full Stack (with backend API)

#### Step 1: Install Node.js
Download from https://nodejs.org — choose the **LTS** version.
After installing, open a terminal and check it works:
```
node --version
npm --version
```

#### Step 2: Install backend dependencies
```
cd C:\Users\hossains\Website\backend
npm install
```
This reads `package.json` and installs Express, Multer, CORS, and Nodemon.

#### Step 3: Start the backend server
```
node server.js
```
You should see:
```
✅ Server running at http://localhost:3000
```

#### Step 4: Open the website
Go to `http://localhost:3000` in your browser — the frontend is served from the backend!

---

## 🔌 API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/api` | Welcome message + list of endpoints |
| GET | `/lessons` | Get all lessons |
| GET | `/lessons?category=grammar` | Filter lessons by category |
| GET | `/lessons/:id` | Get one lesson by ID |
| GET | `/materials` | List all uploaded files |
| GET | `/materials/audio` | List audio files only |
| POST | `/upload-audio` | Upload an .mp3 file |
| POST | `/upload-image` | Upload a .jpg/.png file |
| POST | `/upload-doc` | Upload a .pdf file |

### Example: Upload an audio file with curl
```bash
curl -X POST http://localhost:3000/upload-audio \
  -F "audio=@/path/to/lesson01.mp3"
```

---

## 🎧 Adding Audio Files

1. Place your `.mp3` files into `uploads/audio/`
2. Name them to match the entries in `frontend/js/listening.js`:
   - `lesson01-greetings.mp3`
   - `lesson02-numbers.mp3`
   - … etc.
3. Refresh the Listening page — the audio players will work automatically.

---

## 🗄️ Database Choice

This project uses **in-memory / local data** (JavaScript arrays + local files) — perfect for beginners.

When you are ready to scale up, migrate to **MongoDB**:
- Install MongoDB Community (free): https://www.mongodb.com/try/download/community
- Install Mongoose: `npm install mongoose`
- Replace the arrays in `routes/lessons.js` with a Mongoose schema

---

## 🛠️ Development Mode (auto-restart on save)

Instead of `node server.js`, run:
```
npm run dev
```
This uses **Nodemon**, which automatically restarts the server every time you save a file.

---

## 📦 Technologies Used

| Layer | Technology | Why |
|-------|-----------|-----|
| Frontend | HTML5 + CSS3 + Vanilla JS | Simple, no build tools needed |
| Fonts | Google Fonts (Poppins + Noto Sans JP) | Clean modern look |
| Backend | Node.js + Express | Lightweight, beginner-friendly |
| File Upload | Multer | Standard package for handling file uploads |
| CORS | cors package | Allows frontend to call backend API |

---

## 💡 Tips for Beginners

- Start with **Option A** (no backend) — the whole site works in the browser
- Add your own N5 words in `frontend/js/vocabulary.js`
- Add grammar lessons in `frontend/js/grammar.js`
- Customize colors in `frontend/css/style.css` (look for `:root { --pink: ...}`)
- All code is commented — read the comments to understand what each line does!

---

*Built with ❤️ for Japanese learners. 日本語学習、頑張ってください！*
