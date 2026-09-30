import { lessons, practiceSteps, normalizeProgress, isComplete } from './content.js';

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const KEY = 'design-theory-progress-v1';
let state = normalizeProgress(null);
let storageAvailable = true;
try { state = normalizeProgress(JSON.parse(localStorage.getItem(KEY))); } catch { storageAvailable = false; }
let active = lessons[0], tab = 'learn', opener = null;
const dialog = $('#lesson-dialog');
const panel = $('#lesson-panel');
const repeat = (count, html) => Array.from({ length: count }, () => html).join('');

function art(id) {
  switch (id) {
    case 'gestalt': return `<div class="dots">${repeat(2, `<div class="dot-cluster">${repeat(9, '<i></i>')}</div>`)}</div>`;
    case 'color': return '<div class="color-rings"><i></i><i></i><i></i></div>';
    case 'hierarchy': return '<div class="type-stack"><b>Look here.</b><span>Then here.</span><small>And finally, here.</small></div>';
    case 'focus': return `<div class="focus-dots">${repeat(15, '<i></i>')}</div>`;
    case 'typography': return '<div class="type-pair">A<span>a</span></div>';
    case 'layout': return `<div class="grid-art">${repeat(5, '<i></i>')}</div>`;
    case 'space': return '<div class="space-art"><span>less, but better.</span></div>';
    case 'balance': return `<div class="balance-art"><i></i><div>${repeat(4, '<i></i>')}</div></div>`;
  }
}

function storageNotice() {
  $('#storage-notice').hidden = storageAvailable;
  $('#storage-notice').textContent = 'Penyimpanan browser tidak tersedia. Progres hanya bertahan selama halaman ini terbuka.';
  $('#progress-caption').textContent = storageAvailable ? 'Progres tersimpan di browser ini.' : 'Progres sementara untuk sesi ini.';
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); storageAvailable = true; } catch { storageAvailable = false; }
  refreshProgress(); storageNotice();
}
function renderCards() {
  $('#theory-grid').innerHTML = lessons.map((lesson, index) => `<button class="theory-card" style="--tone:${lesson.color}" data-lesson="${lesson.id}" aria-haspopup="dialog"><span class="card-top"><span class="number">${String(index + 1).padStart(2, '0')} /</span><span>${lesson.category}</span></span><span class="card-art" aria-hidden="true">${art(lesson.id)}</span><span class="card-bottom"><h3>${lesson.title}</h3><span class="card-arrow" aria-hidden="true">↗</span></span><p class="card-description">${lesson.subtitle}</p><span class="card-meta"><span>${lesson.time} · 3 soal</span><span data-status="${lesson.id}">Eksplorasi</span></span></button>`).join('');
  $$('[data-lesson]').forEach(button => button.addEventListener('click', () => openLesson(button.dataset.lesson, button)));
}
function refreshProgress() {
  const count = lessons.filter(lesson => isComplete(lesson, state)).length;
  $('#progress').value = count;
  $('#progress-label').textContent = `${count} dari 8 prinsip selesai`;
  for (const lesson of lessons) {
    const status = $(`[data-status="${lesson.id}"]`);
    const answered = (state.answers[lesson.id] || []).filter(Number.isInteger).length;
    status.textContent = isComplete(lesson, state) ? '✓ Selesai' : answered ? `${answered}/3 dijawab` : 'Eksplorasi';
    status.classList.toggle('done', isComplete(lesson, state));
  }
  $('#continue').innerHTML = count === 8 ? 'Tinjau materi <span>↗</span>' : count ? 'Lanjut belajar <span>↗</span>' : 'Mulai belajar <span>↗</span>';
  $$('[data-check]').forEach(input => { input.checked = state.checks[input.dataset.check] === true; });
  $('#check-count').textContent = `${Object.values(state.checks).filter(Boolean).length} / 4 diperiksa`;
}

function openLesson(id, trigger) {
  active = lessons.find(lesson => lesson.id === id) || lessons[0];
  opener = trigger || document.activeElement;
  dialog.style.setProperty('--tone', active.color);
  $('#lesson-title').textContent = active.title;
  $('#lesson-subtitle').textContent = active.subtitle;
  $('#lesson-eyebrow').textContent = `PRINSIP ${String(lessons.indexOf(active) + 1).padStart(2, '0')} / 08 · ${active.category}`;
  setTab('learn');
  if (!dialog.open) dialog.showModal();
  $('#close-dialog').focus();
}
function setTab(next, focus = false) {
  tab = next;
  $$('[data-tab]').forEach(button => {
    button.setAttribute('aria-selected', String(button.dataset.tab === tab));
    button.tabIndex = button.dataset.tab === tab ? 0 : -1;
  });
  panel.setAttribute('aria-labelledby', `tab-${tab}`);
  renderPanel(); panel.scrollTop = 0;
  if (focus) $(`#tab-${tab}`).focus();
}
function footer() {
  const answers = state.answers[active.id] || [];
  const answered = answers.filter(Number.isInteger).length;
  $('#lesson-status').textContent = tab === 'quiz' ? `${answered} / 3 soal dijawab · Selesai setelah menjawab semua soal` : `${active.time} · Eksperimen + latihan Canva & Figma`;
  $('#next-lesson').textContent = tab === 'learn' ? 'Lanjut ke penerapan ↗' : tab === 'apply' ? 'Uji pemahaman ↗' : 'Prinsip berikutnya ↗';
  if (tab === 'quiz' && active === lessons.at(-1)) $('#next-lesson').textContent = 'Kembali ke atlas ↗';
}
function renderPanel() {
  if (tab === 'learn') {
    panel.innerHTML = `<div class="learn-layout"><div><p class="lesson-intro">${active.intro}</p>${active.points.map(([title, text]) => `<div class="principle-point"><h3>${title}</h3><p>${text}</p></div>`).join('')}<p class="takeaway">${active.takeaway}</p><a class="lesson-source" href="${active.source[1]}" target="_blank" rel="noopener noreferrer">Baca sumber: ${active.source[0]} ↗</a></div><div class="demo-wrap"><div class="demo-heading">LAB VISUAL / COBA SENDIRI</div><div class="demo-stage" id="demo-stage" role="img" aria-label="Eksperimen visual"></div><label for="demo-range">${active.experiment[0]}<output id="demo-value" for="demo-range"></output></label><input id="demo-range" type="range" min="0" max="100" value="50"><div class="range-labels"><span>${active.experiment[1]}</span><span>${active.experiment[2]}</span></div><p>${active.experiment[3]}</p></div></div>`;
    setupDemo();
  } else if (tab === 'apply') {
    panel.innerHTML = `<div class="apply-brief"><h3>Brief latihan</h3><p>${active.brief}</p></div><div class="apply-columns">${[['Canva', active.canva], ['Figma', active.figma]].map(([tool, steps]) => `<section><h3>${tool}</h3><ol>${steps.map(step => `<li>${step}</li>`).join('')}</ol></section>`).join('')}</div><p class="success-note"><strong>Periksa hasilmu:</strong> ${active.success}</p><p class="small-note">Kerjakan di aplikasi pilihanmu. Latihan ini tidak terhubung ke akun Canva atau Figma.</p>`;
  } else renderQuiz();
  footer();
}
function setupDemo() {
  const stage = $('#demo-stage');
  const contents = {
    gestalt: art('gestalt'), color: '<div class="demo-colors"><span></span><span></span></div>',
    hierarchy: '<div class="type-stack"><b>Bentuk<br>& Makna</b><span>Sabtu, 24 Oktober</span><small>Studio 02 · 10.00</small></div>',
    focus: `<div class="focus-dots">${repeat(9, '<i></i>')}</div>`,
    typography: '<div class="demo-type">Desain memberi ruang<br>untuk gagasan bertemu.<br>Setiap baris mengajak<br>mata terus membaca.</div>',
    layout: '<div class="demo-grid"><i></i><i></i><i></i></div>',
    space: '<div class="demo-space">Ruang untuk<br>sebuah ide.</div>',
    balance: '<div class="demo-balance"><i></i><i></i></div>'
  };
  stage.innerHTML = contents[active.id];
  const update = () => {
    const value = Number($('#demo-range').value);
    let display = `${value}%`;
    switch (active.id) {
      case 'gestalt': stage.style.setProperty('--gap', `${8 + value * .65}px`); display = `${Math.round(8 + value * .65)} px`; break;
      case 'color': {
        const hue = Math.round(value * 3.6), other = (hue + 180) % 360;
        $$('.demo-colors span').forEach((span, i) => { const h = i ? other : hue; span.style.background = `hsl(${h} 75% 70%)`; span.textContent = `${h}°`; });
        display = `${hue}° + ${other}°`; break;
      }
      case 'hierarchy': { const size = Math.round(22 + value * .36); stage.style.setProperty('--size', `${size}px`); display = `${size} px`; break; }
      case 'focus': { const count = 1 + Math.floor(value * .08); $$('.demo-stage .focus-dots i').forEach((dot, i) => dot.classList.toggle('lit', [4, 0, 8, 2, 6, 1, 7, 3, 5].indexOf(i) < count)); display = `${count} aksen`; break; }
      case 'typography': { const leading = 1 + value * .01; stage.style.setProperty('--leading', leading); display = `${leading.toFixed(2)}×`; break; }
      case 'layout': stage.style.setProperty('--shift', `${(100 - value) * .35}px`); display = value === 100 ? 'Sejajar' : `${Math.round((100 - value) * .35)} px geser`; break;
      case 'space': { const padding = Math.round(5 + value * .4); stage.style.setProperty('--padding', `${padding}px`); display = `${padding} px`; break; }
      case 'balance': { const weight = Math.round(25 + value * .9); stage.style.setProperty('--weight', `${weight}px`); display = `${weight} px`; break; }
    }
    $('#demo-value').textContent = display;
    $('#demo-range').setAttribute('aria-valuetext', display);
    stage.setAttribute('aria-label', `${active.title}: ${active.experiment[0]} ${display}. ${active.experiment[3]}`);
  };
  $('#demo-range').addEventListener('input', update); update();
}
function renderQuiz() {
  const answers = state.answers[active.id] || [];
  const finished = isComplete(active, state);
  const score = active.quiz.filter((q, i) => answers[i] === q[2]).length;
  panel.innerHTML = `<p class="quiz-intro">Pilih satu jawaban tiap soal. Jawaban dikunci setelah dipilih; kamu bisa mengulang setelah ketiganya selesai.</p>${active.quiz.map(([question, options, correct, explanation], index) => {
    const picked = answers[index], answered = Number.isInteger(picked);
    return `<fieldset class="question"><legend>${index + 1}. ${question}</legend><div class="answer-list">${options.map((option, choice) => `<button class="answer-option ${answered && choice === correct ? 'correct' : answered && choice === picked ? 'wrong' : ''}" data-question="${index}" data-choice="${choice}" ${answered ? 'disabled' : ''}><span>${String.fromCharCode(65 + choice)}</span><span>${option}${answered && choice === correct ? ' ✓ Jawaban tepat' : answered && choice === picked ? ' ✕ Pilihanmu' : ''}</span></button>`).join('')}</div>${answered ? `<p class="feedback ${picked === correct ? '' : 'incorrect'}" id="feedback-${index}" tabindex="-1">${picked === correct ? 'Tepat.' : 'Belum tepat.'} ${explanation}</p>` : ''}</fieldset>`;
  }).join('')}${finished ? `<div class="quiz-result"><span><strong>${score} / 3 jawaban tepat.</strong><br>${score === 3 ? 'Prinsip ini sudah kamu pahami. Coba terapkan pada karya!' : 'Baca penjelasannya, lalu coba lagi untuk memperkuat pemahaman.'}</span><button id="retry-quiz">Ulangi kuis</button></div>` : ''}`;
  $$('[data-question]').forEach(button => button.addEventListener('click', () => {
    const question = Number(button.dataset.question), choice = Number(button.dataset.choice);
    if (Number.isInteger(state.answers[active.id]?.[question])) return;
    state.answers[active.id] ||= active.quiz.map(() => null);
    state.answers[active.id][question] = choice;
    const scroll = panel.scrollTop;
    save(); renderQuiz(); footer(); panel.scrollTop = scroll;
    $(`#feedback-${question}`).focus({ preventScroll: true });
  }));
  $('#retry-quiz')?.addEventListener('click', () => {
    state.answers[active.id] = active.quiz.map(() => null);
    save(); renderQuiz(); footer(); panel.scrollTop = 0;
    $('.answer-option').focus({ preventScroll: true });
  });
}

renderCards(); refreshProgress(); storageNotice();
$('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => { opener?.focus({ preventScroll: true }); });
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
$$('[data-tab]').forEach(button => {
  button.addEventListener('click', () => setTab(button.dataset.tab));
  button.addEventListener('keydown', event => {
    const tabs = ['learn', 'apply', 'quiz']; let index = tabs.indexOf(tab);
    if (event.key === 'ArrowRight') index = (index + 1) % 3;
    else if (event.key === 'ArrowLeft') index = (index + 2) % 3;
    else if (event.key === 'Home') index = 0;
    else if (event.key === 'End') index = 2;
    else return;
    event.preventDefault(); setTab(tabs[index], true);
  });
});
$('#next-lesson').addEventListener('click', () => {
  if (tab === 'learn') setTab('apply', true);
  else if (tab === 'apply') setTab('quiz', true);
  else { const index = lessons.indexOf(active); if (index === lessons.length - 1) dialog.close(); else openLesson(lessons[index + 1].id, opener); }
});
$('#continue').addEventListener('click', event => openLesson((lessons.find(lesson => !isComplete(lesson, state)) || lessons[0]).id, event.currentTarget));
$$('[data-check]').forEach(input => input.addEventListener('change', () => { state.checks[input.dataset.check] = input.checked; save(); }));
function chooseTool(tool) {
  $$('[data-tool]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.tool === tool)));
  $('#practice-steps').innerHTML = practiceSteps[tool].map(step => `<li>${step}</li>`).join('');
}
$$('[data-tool]').forEach(button => button.addEventListener('click', () => chooseTool(button.dataset.tool)));
chooseTool('Canva');
$('#poster-toggle').addEventListener('click', () => {
  const before = $('#poster').classList.toggle('before');
  $('#poster-toggle').setAttribute('aria-pressed', String(before));
  $('#poster-toggle').innerHTML = before ? 'Lihat sesudah <span>↔</span>' : 'Lihat sebelum <span>↔</span>';
  $('#poster-caption').textContent = before ? 'Sebelum: judul bersaing dengan detail, banyak garis tebal, dan alignment tidak konsisten.' : 'Sesudah: satu judul dominan, satu aksen, dan tepi teks yang sejajar.';
});
window.addEventListener('storage', event => {
  if (event.key !== KEY && event.key !== null) return;
  try { state = normalizeProgress(JSON.parse(event.newValue)); refreshProgress(); if (dialog.open && tab === 'quiz') renderPanel(); } catch { /* Ignore invalid data from another tab. */ }
});

// Optional progressive enhancement for browsers implementing WebMCP.
if (document.modelContext?.registerTool) {
  const lifecycle = new AbortController();
  const definition = {
    name: 'open_design_lesson',
    title: 'Buka materi desain',
    description: 'Open a design theory lesson and select its learning, practice, or quiz panel. Does not answer quizzes or mark completion.',
    inputSchema: { type: 'object', properties: { lesson: { type: 'string', enum: lessons.map(item => item.id) }, section: { type: 'string', enum: ['learn', 'apply', 'quiz'] } }, required: ['lesson'], additionalProperties: false },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute(input) {
      if (!input || typeof input !== 'object' || Object.keys(input).some(key => !['lesson', 'section'].includes(key)) || !lessons.some(item => item.id === input.lesson) || (input.section !== undefined && !['learn', 'apply', 'quiz'].includes(input.section))) throw new Error('Invalid lesson or section.');
      openLesson(input.lesson, $(`[data-lesson="${input.lesson}"]`));
      if (input.section) setTab(input.section, true);
      return { lesson: active.id, section: tab, open: dialog.open };
    }
  };
  try { Promise.resolve(document.modelContext.registerTool(definition, { signal: lifecycle.signal })).catch(() => {}); } catch { /* All visible controls remain available. */ }
  window.addEventListener('pagehide', event => { if (!event.persisted) lifecycle.abort(); }, { once: true });
}
