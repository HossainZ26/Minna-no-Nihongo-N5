// ============================================================
//  server.js — Japanese Learning Station Backend
//  Node.js + Express  |  Port 3000
//  Run:  node server.js   (or: npm run dev  with nodemon)
// ============================================================

const express = require('express');
const cors    = require('cors');
const multer  = require('multer');
const path    = require('path');
const fs      = require('fs');

const app  = express();
const PORT = 3000;

// ─── Paths ───────────────────────────────────────────────────
const ROOT_DIR    = path.join(__dirname, '..');
const UPLOADS_DIR = path.join(ROOT_DIR, 'uploads');
const AUDIO_DIR   = path.join(UPLOADS_DIR, 'audio');
const IMAGES_DIR  = path.join(UPLOADS_DIR, 'images');
const DOCS_DIR    = path.join(UPLOADS_DIR, 'docs');

// Make sure all upload folders exist
[AUDIO_DIR, IMAGES_DIR, DOCS_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// ─── Middleware ───────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// Serve uploaded files at /uploads/audio/..., /uploads/images/..., etc.
app.use('/uploads', express.static(UPLOADS_DIR));

// Serve the frontend HTML/CSS/JS at http://localhost:3000
app.use(express.static(path.join(ROOT_DIR, 'frontend')));

// ─── Multer storage helpers ───────────────────────────────────
function makeStorage(destDir) {
  return multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, destDir);
    },
    filename: function (req, file, cb) {
      // Prepend timestamp to avoid name collisions
      const safeName = Date.now() + '-' + file.originalname.replace(/\s+/g, '_');
      cb(null, safeName);
    }
  });
}

const uploadAudio = multer({
  storage: makeStorage(AUDIO_DIR),
  limits: { fileSize: 50 * 1024 * 1024 },       // 50 MB max
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith('audio/')) return cb(null, true);
    cb(new Error('Only audio files are allowed'));
  }
}).single('audio');

const uploadImage = multer({
  storage: makeStorage(IMAGES_DIR),
  limits: { fileSize: 10 * 1024 * 1024 },        // 10 MB max
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith('image/')) return cb(null, true);
    cb(new Error('Only image files are allowed'));
  }
}).single('image');

const uploadDoc = multer({
  storage: makeStorage(DOCS_DIR),
  limits: { fileSize: 20 * 1024 * 1024 },         // 20 MB max
  fileFilter: function (req, file, cb) {
    const allowed = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain'
    ];
    if (allowed.includes(file.mimetype)) return cb(null, true);
    cb(new Error('Only PDF, Word, or TXT files are allowed'));
  }
}).single('doc');

// ─── Routes ──────────────────────────────────────────────────

// GET /  →  frontend index.html (served by express.static above)

// GET /api  →  API info
app.get('/api', function (req, res) {
  res.json({
    message: 'Japanese Learning Station API 🌸',
    version: '1.0.0',
    endpoints: {
      'GET  /materials':       'List all uploaded files',
      'POST /upload/audio':    'Upload an audio file (field: audio)',
      'POST /upload/image':    'Upload an image file  (field: image)',
      'POST /upload/doc':      'Upload a document     (field: doc)',
    }
  });
});

// GET /materials  →  list all uploaded files
app.get('/materials', function (req, res) {
  function listFiles(dir, subPath) {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir)
      .filter(f => !f.startsWith('.'))     // skip .gitkeep etc.
      .map(function (filename) {
        return {
          name: filename,
          path: 'uploads/' + subPath + '/' + filename
        };
      });
  }

  res.json({
    audio:  listFiles(AUDIO_DIR,  'audio'),
    images: listFiles(IMAGES_DIR, 'images'),
    docs:   listFiles(DOCS_DIR,   'docs')
  });
});

// POST /upload/audio
app.post('/upload/audio', function (req, res) {
  uploadAudio(req, res, function (err) {
    if (err) return res.status(400).json({ success: false, error: err.message });
    if (!req.file) return res.status(400).json({ success: false, error: 'No file uploaded' });
    res.json({
      success: true,
      message: 'Audio uploaded successfully',
      path: 'uploads/audio/' + req.file.filename,
      name: req.file.originalname
    });
  });
});

// POST /upload/image
app.post('/upload/image', function (req, res) {
  uploadImage(req, res, function (err) {
    if (err) return res.status(400).json({ success: false, error: err.message });
    if (!req.file) return res.status(400).json({ success: false, error: 'No file uploaded' });
    res.json({
      success: true,
      message: 'Image uploaded successfully',
      path: 'uploads/images/' + req.file.filename,
      name: req.file.originalname
    });
  });
});

// POST /upload/doc
app.post('/upload/doc', function (req, res) {
  uploadDoc(req, res, function (err) {
    if (err) return res.status(400).json({ success: false, error: err.message });
    if (!req.file) return res.status(400).json({ success: false, error: 'No file uploaded' });
    res.json({
      success: true,
      message: 'Document uploaded successfully',
      path: 'uploads/docs/' + req.file.filename,
      name: req.file.originalname
    });
  });
});

// 404 fallback for unknown API routes
app.use('/api', function (req, res) {
  res.status(404).json({ error: 'Route not found' });
});

// ─── Start server ─────────────────────────────────────────────
app.listen(PORT, function () {
  console.log('');
  console.log('🌸 Japanese Learning Station is running!');
  console.log('─────────────────────────────────────────');
  console.log('🌐 Website:  http://localhost:' + PORT);
  console.log('📡 API info: http://localhost:' + PORT + '/api');
  console.log('📁 Uploads:  http://localhost:' + PORT + '/uploads');
  console.log('─────────────────────────────────────────');
  console.log('');
});
