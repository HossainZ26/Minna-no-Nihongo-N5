/* ===== JAPANESE LEARNING STATION — STATIC / GITHUB PAGES VERSION ===== */
/* All features run in the browser only — no backend required.             */

// ── Navbar: hamburger + active link ──────────────────────────────────────────
(function initNav() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  const links = document.querySelectorAll('.nav-links a');
  links.forEach(a => {
    if (a.getAttribute('href') && window.location.pathname.endsWith(a.getAttribute('href'))) {
      a.classList.add('active');
    }
  });
})();

// ── Toast notifications ───────────────────────────────────────────────────────
function showToast(message, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── Grammar accordion ─────────────────────────────────────────────────────────
function initGrammarAccordion() {
  document.querySelectorAll('.grammar-header').forEach(header => {
    header.addEventListener('click', () => {
      const body   = header.nextElementSibling;
      const isOpen = header.classList.contains('open');

      document.querySelectorAll('.grammar-header').forEach(h => {
        h.classList.remove('open');
        h.nextElementSibling.classList.remove('open');
      });

      if (!isOpen) {
        header.classList.add('open');
        body.classList.add('open');
      }
    });
  });

  const first = document.querySelector('.grammar-header');
  if (first) {
    first.classList.add('open');
    first.nextElementSibling.classList.add('open');
  }
}

// ── Vocabulary: search + filter + flip ───────────────────────────────────────
function initVocabulary() {
  const searchInput  = document.getElementById('vocab-search');
  const filterSelect = document.getElementById('vocab-filter');
  const cards        = document.querySelectorAll('.vocab-card');

  function filterCards() {
    const query    = searchInput  ? searchInput.value.toLowerCase()  : '';
    const category = filterSelect ? filterSelect.value.toLowerCase() : '';
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const cat  = (card.dataset.category || '').toLowerCase();
      card.style.display = (!query || text.includes(query)) && (!category || cat === category) ? '' : 'none';
    });
  }

  if (searchInput)  searchInput.addEventListener('input',  filterCards);
  if (filterSelect) filterSelect.addEventListener('change', filterCards);

  cards.forEach(card => card.addEventListener('click', () => card.classList.toggle('flipped')));
}

// ── Audio — client-side only (files are temporary, in-browser) ────────────────
function initListening() {
  const uploadArea = document.getElementById('upload-area');
  const fileInput  = document.getElementById('audio-input');
  const fileList   = document.getElementById('file-list');

  if (!uploadArea || !fileInput) return;

  uploadArea.addEventListener('click', () => fileInput.click());

  uploadArea.addEventListener('dragover', e => {
    e.preventDefault();
    uploadArea.classList.add('drag-over');
  });
  uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('drag-over'));
  uploadArea.addEventListener('drop', e => {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');
    handleAudioFiles(e.dataTransfer.files);
  });

  fileInput.addEventListener('change', () => handleAudioFiles(fileInput.files));

  function handleAudioFiles(files) {
    Array.from(files).forEach(file => {
      if (!file.type.startsWith('audio/')) {
        showToast('Please upload audio files only.', 'error');
        return;
      }
      addAudioItem(file.name, URL.createObjectURL(file));
      showToast(`"${file.name}" loaded!`, 'success');
    });
  }

  function addAudioItem(name, src) {
    const emptyState = document.getElementById('empty-state');
    if (emptyState) emptyState.style.display = 'none';

    const li = document.createElement('li');
    li.className = 'file-item';
    li.innerHTML = `
      <span class="file-icon">🎵</span>
      <div class="file-info">
        <div class="file-name">${name}</div>
        <audio controls src="${src}"></audio>
      </div>`;
    fileList.prepend(li);
  }
}

// ── Documents + Images — client-side only ─────────────────────────────────────
function initAssignment() {
  const docInput = document.getElementById('doc-input');
  const imgInput = document.getElementById('img-input');
  const docList  = document.getElementById('doc-list');
  const imgList  = document.getElementById('img-list');

  if (docInput && docList) {
    docInput.addEventListener('change', () => {
      Array.from(docInput.files).forEach(file => {
        const emptyEl = document.getElementById('doc-empty');
        if (emptyEl) emptyEl.style.display = 'none';

        const url = URL.createObjectURL(file);
        const li  = document.createElement('li');
        li.className = 'file-item';
        li.innerHTML = `
          <span class="file-icon">📄</span>
          <div class="file-info">
            <div class="file-name">${file.name}</div>
            <a href="${url}" target="_blank" class="btn btn-blue"
               style="font-size:0.78rem;padding:0.3rem 0.8rem;margin-top:0.5rem;display:inline-block;">Open ↗</a>
          </div>`;
        docList.prepend(li);
        showToast(`"${file.name}" loaded!`, 'success');
      });
    });
  }

  if (imgInput && imgList) {
    imgInput.addEventListener('change', () => {
      Array.from(imgInput.files).forEach(file => {
        if (!file.type.startsWith('image/')) {
          showToast('Please upload image files only.', 'error');
          return;
        }
        const emptyEl = document.getElementById('img-empty');
        if (emptyEl) emptyEl.style.display = 'none';

        const url = URL.createObjectURL(file);
        const li  = document.createElement('li');
        li.className = 'file-item';
        li.innerHTML = `
          <img src="${url}" alt="${file.name}"
               style="width:70px;height:60px;object-fit:cover;border-radius:8px;">
          <div class="file-info"><div class="file-name">${file.name}</div></div>`;
        imgList.prepend(li);
        showToast(`"${file.name}" loaded!`, 'success');
      });
    });
  }
}

// ── Tab switching ─────────────────────────────────────────────────────────────
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });
}

// ── Animate progress bars ─────────────────────────────────────────────────────
function animateProgressBars() {
  setTimeout(() => {
    document.querySelectorAll('.progress-bar[data-width]').forEach(bar => {
      bar.style.width = bar.dataset.width + '%';
    });
  }, 300);
}

// ── Kana quiz ─────────────────────────────────────────────────────────────────
function initKanaQuiz() {
  const quizSection = document.getElementById('kana-quiz');
  if (!quizSection) return;

  const hiragana = [
    {k:'あ',r:'a'},{k:'い',r:'i'},{k:'う',r:'u'},{k:'え',r:'e'},{k:'お',r:'o'},
    {k:'か',r:'ka'},{k:'き',r:'ki'},{k:'く',r:'ku'},{k:'け',r:'ke'},{k:'こ',r:'ko'},
    {k:'さ',r:'sa'},{k:'し',r:'shi'},{k:'す',r:'su'},{k:'せ',r:'se'},{k:'そ',r:'so'},
    {k:'た',r:'ta'},{k:'ち',r:'chi'},{k:'つ',r:'tsu'},{k:'て',r:'te'},{k:'と',r:'to'},
    {k:'な',r:'na'},{k:'に',r:'ni'},{k:'ぬ',r:'nu'},{k:'ね',r:'ne'},{k:'の',r:'no'},
    {k:'は',r:'ha'},{k:'ひ',r:'hi'},{k:'ふ',r:'fu'},{k:'へ',r:'he'},{k:'ほ',r:'ho'},
    {k:'ま',r:'ma'},{k:'み',r:'mi'},{k:'む',r:'mu'},{k:'め',r:'me'},{k:'も',r:'mo'},
    {k:'や',r:'ya'},{k:'ゆ',r:'yu'},{k:'よ',r:'yo'},
    {k:'ら',r:'ra'},{k:'り',r:'ri'},{k:'る',r:'ru'},{k:'れ',r:'re'},{k:'ろ',r:'ro'},
    {k:'わ',r:'wa'},{k:'を',r:'wo'},{k:'ん',r:'n'}
  ];

  let current  = 0;
  let score    = 0;
  let shuffled = [...hiragana].sort(() => Math.random() - 0.5);

  const questionEl = document.getElementById('quiz-question');
  const answerEl   = document.getElementById('quiz-answer');
  const resultEl   = document.getElementById('quiz-result');
  const scoreEl    = document.getElementById('quiz-score');
  const nextBtn    = document.getElementById('quiz-next');

  function showQuestion() {
    if (current >= shuffled.length) {
      quizSection.innerHTML = `
        <div style="text-align:center;padding:2rem;">
          <div style="font-size:3rem;margin-bottom:1rem;">🎉</div>
          <h3>Quiz Complete!</h3>
          <p>Score: <strong>${score}/${shuffled.length}</strong></p>
          <button class="btn btn-red" onclick="location.reload()" style="margin-top:1rem;">Try Again</button>
        </div>`;
      return;
    }
    questionEl.textContent = shuffled[current].k;
    answerEl.value = '';
    answerEl.focus();
    resultEl.textContent = '';
    if (scoreEl) scoreEl.textContent = `${current + 1} / ${shuffled.length}  ·  Score: ${score}`;
  }

  if (answerEl) answerEl.addEventListener('keydown', e => { if (e.key === 'Enter') checkAnswer(); });
  if (nextBtn)  nextBtn.addEventListener('click', checkAnswer);

  function checkAnswer() {
    const item   = shuffled[current];
    const answer = (answerEl.value || '').trim().toLowerCase();
    if (answer === item.r) {
      resultEl.textContent = '✅ Correct!';
      resultEl.style.color = '#27ae60';
      score++;
    } else {
      resultEl.textContent = `❌ Answer: ${item.r}`;
      resultEl.style.color = '#c0392b';
    }
    current++;
    setTimeout(showQuestion, 800);
  }

  showQuestion();
}

// ── Init everything ───────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initGrammarAccordion();
  initVocabulary();
  initListening();
  initAssignment();
  initTabs();
  animateProgressBars();
  initKanaQuiz();
});
