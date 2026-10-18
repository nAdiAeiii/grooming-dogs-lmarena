/* Grooming Dogs, Hybrid Concept V1: behaviour.
   Shared state (coat, task, tool, method) drives the mosaic picker, the highlighted title, the
   annotated answer, the tool plate, the two-ways plate and the reading path. Guides open at #g-<slug>. */
(function () {
  'use strict';
  var D = window.DESK, A = window.DESK_ART;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var byId = function (list) { var m = {}; list.forEach(function (x) { m[x.id] = x; }); return m; };
  var COAT = byId(D.coats), TASK = byId(D.tasks), TOOL = byId(D.tools), METHOD = byId(D.methods);
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var WORDS = { nails: ['Clip', 'grind'], drying: ['Towel', 'dryer'], mats: ['Tease it out', 'see a groomer'] };

  var state = { coat: 'double', task: 'brush', tool: null, method: 'nails' };
  try {
    var saved = JSON.parse(localStorage.getItem('gd-hybrid') || '{}');
    if (COAT[saved.coat]) { state.coat = saved.coat; }
    if (TASK[saved.task]) { state.task = saved.task; }
  } catch (e) { /* no storage: defaults */ }
  function save() { try { localStorage.setItem('gd-hybrid', JSON.stringify({ coat: state.coat, task: state.task })); } catch (e) {} }
  function press(sel, attr, val) { $$(sel).forEach(function (el) { el.setAttribute('aria-pressed', String(el.getAttribute(attr) === val)); }); }
  function go(id) { if (location.hash !== '#' + id) { location.hash = id; } else { route(); } }

  /* ---------- build controls ---------- */
  $('#mosaic').innerHTML = D.coats.map(function (c, i) {
    return '<button type="button" class="coat-tile" data-coat="' + c.id + '" aria-pressed="false" style="--i:' + i + '">' +
      A.coatSVG(c.id, '') + '<span class="tile-name">' + esc(c.name) + '</span><span class="tile-short" aria-hidden="true">' + esc(c.word) + '</span></button>';
  }).join('');
  $('#tasks').innerHTML = D.tasks.map(function (t) {
    return '<button type="button" class="task" data-task="' + t.id + '" aria-pressed="false">' + esc(t.name) + '</button>';
  }).join('');
  $('#ways-tabs').innerHTML = D.methods.map(function (m) {
    return '<button type="button" class="task" data-method="' + m.id + '" aria-pressed="false">' + esc(m.name) + '</button>';
  }).join('');
  $('#plate-list').innerHTML = D.tools.map(function (t) {
    return '<li><button type="button" class="peg" id="peg-' + t.id + '" data-peg="' + t.id + '" aria-pressed="false">' +
      A.toolSVG(t.id) + '<span class="peg-name">' + esc(t.name) + '</span><span class="sr-only peg-fit"></span></button></li>';
  }).join('');

  /* ---------- coat ---------- */
  function setCoat(id, quiet) {
    if (!COAT[id]) { return; }
    var changed = id !== state.coat;
    state.coat = id;
    press('[data-coat]', 'data-coat', id);
    var i = D.coats.findIndex(function (c) { return c.id === id; });
    $('#mosaic').style.setProperty('--cols', D.coats.map(function (c, k) { return k === i ? '1.8fr' : '1fr'; }).join(' '));
    var hl = $('#title-coat');
    hl.textContent = COAT[id].word;
    if (changed && !quiet && !reduced) { hl.classList.remove('swap'); void hl.offsetWidth; hl.classList.add('swap'); }
    $('#plate-coat').textContent = COAT[id].word;
    $('#reading-swatch').innerHTML = A.coatSVG(id, '');
    renderAnswer(changed && !quiet);
    renderPlate();
    renderRoute();
    if (!quiet) { save(); }
  }

  /* ---------- task + answer ---------- */
  function setTask(id) {
    if (!TASK[id]) { return; }
    var changed = id !== state.task;
    state.task = id;
    press('[data-task]', 'data-task', id);
    renderAnswer(changed);
    renderRoute();
    save();
  }
  function answerTitle(task, coat) {
    var c = COAT[coat];
    var lead = { brush: 'Brushing', bathe: 'Bathing', mats: (coat === 'smooth' || coat === 'double') ? 'Shedding in' : 'Mats in', nails: 'Nails on', ears: 'Ears on', teeth: 'Teeth on' }[task];
    return lead + ' a ' + c.word + ' coat';
  }
  function renderAnswer(animate) {
    var a = D.answers[state.task][state.coat], c = COAT[state.coat], box = $('#answer');
    var paint = function () {
      $('#answer-title').textContent = answerTitle(state.task, state.coat);
      $('#answer-often').textContent = a.often;
      $('#answer-body').textContent = a.answer;
      $('#answer-coat').innerHTML = '<strong>' + esc(c.name) + ' coat:</strong> ' + esc(c.hint) + ' For example ' + esc(c.breeds) + '.';
      $('#answer-tools').innerHTML = a.tools.map(function (id) {
        return '<li><a href="#plate" data-tool="' + id + '">' + esc(TOOL[id].name) + A.toolSVG(id) + '</a></li>';
      }).join('');
      $('#answer-watch').textContent = a.watch;
      var link = $('#answer-guide');
      link.href = '#g-' + a.guide;
      link.textContent = 'Read the guide: ' + D.guides[a.guide].title;
      box.classList.remove('is-swapping');
    };
    if (animate && !reduced) { box.classList.add('is-swapping'); setTimeout(paint, 90); } else { paint(); }
  }

  /* ---------- the plate ---------- */
  function renderPlate() {
    D.tools.forEach(function (t) {
      var fit = t.good.indexOf(state.coat) !== -1, peg = $('#peg-' + t.id);
      peg.classList.toggle('is-fit', fit);
      $('.peg-fit', peg).textContent = fit ? ', a main tool for this coat' : ', little use on this coat';
    });
    if (state.tool) { renderEntry(); }
  }
  function selectTool(id, focus) {
    if (!TOOL[id]) { return; }
    state.tool = id;
    press('[data-peg]', 'data-peg', id);
    renderEntry();
    if (focus) {
      var e = $('#tool-entry'); e.focus({ preventScroll: true });
      var r = e.getBoundingClientRect();
      if (r.top > innerHeight * 0.75 || r.bottom < 0) { e.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' }); }
    }
  }
  function renderEntry() {
    var t = TOOL[state.tool], c = COAT[state.coat], fit = t.good.indexOf(state.coat) !== -1;
    $('#tool-entry').innerHTML = A.toolSVG(t.id) +
      '<h3>' + esc(t.name) + '</h3>' +
      '<p class="fit">' + (fit ? 'A main tool for a ' : 'Little use on a ') + esc(c.word) + ' coat</p>' +
      '<div><h4>What it does</h4><p>' + esc(t.does) + '</p></div>' +
      '<div><h4>Where it stops being useful</h4><p>' + esc(t.limit) + '</p></div>' +
      '<div><h4>A main tool for</h4><div class="coats">' + D.coats.map(function (k) {
        return '<span class="' + (t.good.indexOf(k.id) !== -1 ? 'on' : '') + '">' + esc(k.name) + '</span>';
      }).join('') + '</div></div>' +
      '<div class="links">' + t.guides.map(function (g) { return '<a href="#g-' + g + '">' + esc(D.guides[g].title) + '</a>'; }).join('') +
      (t.confused ? '<button type="button" data-swap-tool="' + t.confused + '">Often confused with the ' + esc(TOOL[t.confused].name.toLowerCase()) + '</button>' : '') + '</div>';
  }

  /* ---------- two ways ---------- */
  function setMethod(id) {
    if (!METHOD[id]) { return; }
    var changed = id !== state.method, m = METHOD[id], w = WORDS[id];
    state.method = id;
    press('[data-method]', 'data-method', id);
    $('#ways-title').innerHTML = esc(w[0]) + ' <span class="or">or</span> ' + esc(w[1]) + '?';
    var pair = '<div class="pair' + (m.tools.length > 1 ? '' : ' one') + (changed && !reduced ? ' swap' : '') + '">' +
      A.toolSVG(m.tools[0]) + (m.tools[1] ? A.toolSVG(m.tools[1]).replace('<svg', '<svg class="b"') : '') + '</div>';
    $('#ways-plate').innerHTML = pair;
    $('#ways-table').innerHTML = '<caption class="sr-only">' + esc(m.a) + ' compared with ' + esc(m.b) + '</caption>' +
      '<thead><tr><td></td><th scope="col">' + esc(m.a) + '</th><th scope="col">' + esc(m.b) + '</th></tr></thead><tbody>' +
      m.rows.map(function (r) { return '<tr><th scope="row">' + esc(r[0]) + '</th><td>' + esc(r[1]) + '</td><td>' + esc(r[2]) + '</td></tr>'; }).join('') + '</tbody>';
    $('#ways-note').innerHTML = esc(m.note) + ' Next: <a href="#g-' + m.guide + '">' + esc(D.guides[m.guide].title) + '</a>.';
  }

  /* ---------- reading path ---------- */
  var ORDER = ['brush-short-coat', 'brush-double-coat', 'brush-curly-coat', 'brush-wire-coat', 'brush-silky-coat', 'shedding-season', 'work-out-a-mat', 'bathe-at-home', 'trim-nails', 'check-ears', 'brush-teeth', 'calm-a-nervous-dog'];
  function renderRoute() {
    var current = D.answers[state.task][state.coat].guide;
    $('#route-body').innerHTML = ORDER.map(function (slug) {
      var g = D.guides[slug], n = g.next[0];
      return '<tr class="' + (slug === current ? 'is-match' : '') + '"><td><a href="#g-' + slug + '">' + esc(g.title) + '</a>' +
        (slug === current ? '<span class="sr-only"> (the guide for your answer)</span>' : '') + '</td><td>' + esc(g.time) + '</td>' +
        '<td><a href="#g-' + n.guide + '">' + esc(D.guides[n.guide].title) + '</a></td></tr>';
    }).join('');
  }

  /* ---------- questions as reading text ---------- */
  $('#faq-list').innerHTML = D.faqs.map(function (f, i) {
    var l = f.link, act;
    if (l.guide) { act = '<a href="#g-' + l.guide + '">' + esc(l.label) + '</a>'; }
    else if (l.scroll) { act = '<a href="#limits">' + esc(l.label) + '</a>'; }
    else { act = '<button type="button" data-faq="' + i + '">' + esc(l.label) + '</button>'; }
    return '<p><span class="q">' + esc(f.q) + '</span> ' + esc(f.a) + ' ' + act + '.</p>';
  }).join('');

  /* ---------- ask ---------- */
  var SYN = { shed: 'shedding', shedding: 'shedding undercoat', tangle: 'mat', tangles: 'mat', knot: 'mat knots', knots: 'mat', matted: 'mat', mats: 'mat',
    claw: 'nails', claws: 'nails', nail: 'nails', quick: 'nails quick', bath: 'bathe bath shampoo', wash: 'bathe shampoo', shampoo: 'bathe shampoo',
    dry: 'dryer drying towel', drying: 'dryer towel', tooth: 'teeth', dental: 'teeth', breath: 'teeth', ear: 'ears', smell: 'smell ears vet',
    scared: 'nervous', anxious: 'nervous', hates: 'nervous', shave: 'shave shaving', poodle: 'curly', doodle: 'curly',
    husky: 'double', shepherd: 'double', golden: 'double', yorkie: 'silky', maltese: 'silky', terrier: 'wire', beagle: 'smooth', boxer: 'smooth' };
  var index = [];
  D.tasks.forEach(function (t) { D.coats.forEach(function (c) {
    var a = D.answers[t.id][c.id];
    index.push({ kind: 'Answer', title: answerTitle(t.id, c.id), text: [t.name, t.verb, c.name, c.word, c.breeds, a.answer, a.watch].join(' '), act: { coat: c.id, task: t.id } });
  }); });
  Object.keys(D.guides).forEach(function (s) { var g = D.guides[s]; index.push({ kind: 'Guide', title: g.title, text: [g.intro, g.stop].concat(g.steps.map(function (x) { return x.join(' '); })).join(' '), act: { guide: s } }); });
  D.tools.forEach(function (t) { index.push({ kind: 'Tool', title: t.name, text: t.does + ' ' + t.limit, act: { tool: t.id } }); });
  D.methods.forEach(function (m) { index.push({ kind: 'Comparison', title: m.a + ' or ' + m.b.toLowerCase(), text: m.name + ' ' + m.rows.map(function (r) { return r.join(' '); }).join(' '), act: { method: m.id } }); });
  D.faqs.forEach(function (f) { index.push({ kind: 'Question', title: f.q, text: f.a, act: { faq: true } }); });
  function stem(w) { return w.length > 4 && /s$/.test(w) && !/ss$/.test(w) ? w.slice(0, -1) : w; }
  function words(q) {
    var out = [];
    q.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').split(/\s+/).forEach(function (w) {
      if (w.length < 3 || /^(the|and|for|how|what|does|can|should|with|dog|dogs|my|your|often|when|why|get|its)$/.test(w)) { return; }
      var forms = [stem(w)];
      if (SYN[w]) { SYN[w].split(' ').forEach(function (s) { forms.push(stem(s)); }); }
      out.push(forms);
    });
    return out;
  }
  function search(q) {
    var ws = words(q);
    if (!ws.length) { return []; }
    return index.map(function (it) {
      var title = it.title.toLowerCase(), text = it.text.toLowerCase(), s = 0, hit = 0;
      ws.forEach(function (forms) {
        var best = 0;
        forms.forEach(function (t, i) { var w = i === 0 ? 1 : 0.6; if (title.indexOf(t) !== -1) { best = Math.max(best, 3 * w); } else if (text.indexOf(t) !== -1) { best = Math.max(best, w); } });
        if (best) { s += best; hit++; }
      });
      if (hit === ws.length && ws.length > 1) { s += 3; }
      if (s > 0 && it.act.coat === state.coat) { s += 0.25; }
      return { it: it, s: s };
    }).filter(function (r) { return r.s > 0; }).sort(function (a, b) { return b.s - a.s; }).slice(0, 6);
  }
  var results = $('#ask-results'), timer;
  function show(q) {
    if (!q.trim()) { results.innerHTML = ''; return; }
    var rs = search(q);
    if (!rs.length) {
      results.innerHTML = '<p class="ask-empty">Nothing matches “' + esc(q) + '” yet. Try <button type="button" data-try="mats">mats</button>, <button type="button" data-try="nails">nails</button> or <button type="button" data-try="shedding">shedding</button>.</p>';
      return;
    }
    results.innerHTML = '<ul>' + rs.map(function (r) {
      var it = r.it, inner = '<span class="r-kind">' + it.kind + '</span><span class="r-title">' + esc(it.title) + '</span>';
      return it.act.guide ? '<li><a href="#g-' + it.act.guide + '">' + inner + '</a></li>' : '<li><button type="button" data-result="' + index.indexOf(it) + '">' + inner + '</button></li>';
    }).join('') + '</ul>';
  }
  $('#ask-input').addEventListener('input', function (e) { clearTimeout(timer); var v = e.target.value; timer = setTimeout(function () { show(v); }, 120); });
  $('#ask').addEventListener('submit', function (e) { e.preventDefault(); show($('#ask-input').value); var f = results.querySelector('a, button[data-result]'); if (f) { f.focus(); } });

  /* ---------- one click handler ---------- */
  document.addEventListener('click', function (e) {
    var el;
    if ((el = e.target.closest('[data-coat]'))) { setCoat(el.getAttribute('data-coat')); return; }
    if ((el = e.target.closest('[data-task]'))) {
      setTask(el.getAttribute('data-task'));
      var r = $('#answer').getBoundingClientRect();
      if (innerWidth < 900 && r.top > innerHeight * 0.8) { $('#answer').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' }); }
      return;
    }
    if ((el = e.target.closest('[data-method]'))) { setMethod(el.getAttribute('data-method')); return; }
    if ((el = e.target.closest('[data-peg]'))) { selectTool(el.getAttribute('data-peg'), true); return; }
    if ((el = e.target.closest('[data-swap-tool]'))) { selectTool(el.getAttribute('data-swap-tool'), true); return; }
    if ((el = e.target.closest('a[data-tool]'))) { e.preventDefault(); selectTool(el.getAttribute('data-tool'), false); go('plate'); return; }
    if ((el = e.target.closest('[data-try]'))) { $('#ask-input').value = el.getAttribute('data-try'); show(el.getAttribute('data-try')); return; }
    if ((el = e.target.closest('[data-result]'))) {
      var act = index[+el.getAttribute('data-result')].act;
      if (act.coat) { setCoat(act.coat); setTask(act.task); $('#answer').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' }); $('#answer-guide').focus({ preventScroll: true }); }
      else if (act.tool) { selectTool(act.tool, false); go('plate'); }
      else if (act.method) { setMethod(act.method); go('ways'); }
      else { go('questions'); }
      return;
    }
    if ((el = e.target.closest('[data-faq]'))) {
      var l = D.faqs[+el.getAttribute('data-faq')].link;
      if (l.method) { setMethod(l.method); go('ways'); return; }
      if (l.coat) { setCoat(l.coat); }
      if (l.task) { setTask(l.task); }
      go('find');
    }
  });

  /* ---------- guide view: the article on the axis ---------- */
  function renderGuide(slug) {
    var g = D.guides[slug], c = COAT[state.coat], a = D.answers[state.task][state.coat];
    var forCoat = g.coats.indexOf(state.coat) !== -1;
    var coatNote = forCoat && a.guide === slug
      ? '<aside class="g-coat" aria-label="For your dog\'s coat"><span class="mini" aria-hidden="true">' + A.coatSVG(c.id, '') + '</span><strong>For a ' + esc(c.word) + ' coat</strong>' + esc(a.answer) + ' How often: ' + esc(a.often.toLowerCase()) + '.</aside>'
      : (forCoat ? '' : '<aside class="g-coat" aria-label="Coat note"><strong>Written mainly for ' + g.coats.map(function (k) { return COAT[k].word; }).join(', ') + ' coats.</strong>Your dog has a ' + esc(c.word) + ' coat. <a href="#find">Find the answer for that coat</a>.</aside>');
    var tools = g.tools.length ? '<div><h2>You’ll need</h2><ul class="tool-links">' + g.tools.map(function (id) {
      return '<li><a href="#plate" data-tool="' + id + '">' + esc(TOOL[id].name) + A.toolSVG(id) + '</a></li>'; }).join('') + '</ul></div>' : '';
    var next = '<nav class="g-next" aria-label="Next steps"><h2>Then read</h2>' + g.next.map(function (n) {
      return '<a href="#g-' + n.guide + '"><span class="n-title">' + esc(D.guides[n.guide].title) + ' →</span><span class="n-why">' + esc(n.why) + '</span></a>'; }).join('') + '</nav>';
    $('#guide').innerHTML = '<article class="guide sheet" aria-labelledby="g-title">' +
      '<p class="crumb"><a href="#find">Grooming Dogs</a> › ' + esc(g.title) + '</p>' +
      '<aside class="axis-left g-margin">' + tools + next + '</aside>' +
      '<div class="axis-right"><h1 class="g-title" id="g-title" tabindex="-1">' + esc(g.title) + '</h1>' +
      '<p class="g-meta"><span>Time <strong>' + esc(g.time) + '</strong></span><span>Coats <strong>' + g.coats.map(function (k) { return COAT[k].name; }).join(', ') + '</strong></span></p>' +
      '<div class="g-body"><p class="g-intro">' + esc(g.intro) + '</p>' + coatNote +
      '<ol class="g-steps">' + g.steps.map(function (s) { return '<li><h3>' + esc(s[0]) + '</h3><p>' + esc(s[1]) + '</p></li>'; }).join('') + '</ol>' +
      '<div class="g-stop" role="note"><h3>Stop and get help</h3><p>' + esc(g.stop) + '</p></div>' +
      '<p class="g-sample">Sample guide written for a concept prototype. Not reviewed by a groomer or a vet, and not veterinary advice.</p></div></div>' +
      '</article>';
  }

  /* ---------- routing ---------- */
  function route() {
    var h = location.hash.slice(1), home = $('#home'), guide = $('#guide');
    if (h.indexOf('g-') === 0 && D.guides[h.slice(2)]) {
      renderGuide(h.slice(2));
      home.hidden = true; guide.hidden = false;
      document.title = D.guides[h.slice(2)].title + ' · Grooming Dogs';
      window.scrollTo(0, 0);
      $('#g-title').focus({ preventScroll: true });
      markNav(null);
      return;
    }
    guide.hidden = true; home.hidden = false;
    document.title = 'Grooming Dogs Hybrid V1';
    var t = h && document.getElementById(h);
    if (h === 'top') { window.scrollTo(0, 0); } else if (t) { t.scrollIntoView({ block: 'start' }); }
    markNav(h);
  }
  function markNav(h) { $$('.mast-links a').forEach(function (a) { a.setAttribute('aria-current', String(a.getAttribute('href') === '#' + h)); }); }
  window.addEventListener('hashchange', route);

  /* ---------- entrances: once, from a visible state ---------- */
  ['.plate-head .axis-right', '.plate-head .axis-left', '.plate-body', '.ways-text > *', '.reading-title', '.reading-aside', '.reading .table-scroll', '.limits .axis-left', '.limits .axis-right > *', '.faq-text p', '.close-line'].forEach(function (sel) {
    $$(sel).forEach(function (el, i) { el.setAttribute('data-reveal', ''); el.style.setProperty('--i', Math.min(i, 6)); });
  });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    $$('[data-reveal]').forEach(function (el) { io.observe(el); });
  } else { $$('[data-reveal]').forEach(function (el) { el.classList.add('is-in'); }); }

  /* ---------- start ---------- */
  setCoat(state.coat, true);
  setTask(state.task);
  setMethod(state.method);
  selectTool(D.answers[state.task][state.coat].tools[0], false);
  route();
})();
