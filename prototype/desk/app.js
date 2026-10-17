/* The Practical Grooming Desk: behaviour.
   One shared state (coat, task, tool, method) drives the sentence, the answer sheet, the tool board,
   the comparison and the guide route. Guides open in place at #g-<slug>. */
(function () {
  'use strict';
  var D = window.DESK, A = window.DESK_ART;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var coatById = {}, taskById = {}, toolById = {}, methodById = {};
  D.coats.forEach(function (c) { coatById[c.id] = c; });
  D.tasks.forEach(function (t) { taskById[t.id] = t; });
  D.tools.forEach(function (t) { toolById[t.id] = t; });
  D.methods.forEach(function (m) { methodById[m.id] = m; });
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Display words for the comparison (short enough to sit at poster size).
  var WORDS = { nails: ['Clip', 'Grind'], drying: ['Towel', 'Dryer'], mats: ['Tease out', 'Groomer'] };

  var state = { coat: 'double', task: 'brush', tool: null, method: 'nails' };
  try {
    var saved = JSON.parse(localStorage.getItem('desk-state') || '{}');
    if (coatById[saved.coat]) { state.coat = saved.coat; }
    if (taskById[saved.task]) { state.task = saved.task; }
  } catch (e) { /* storage unavailable: defaults are fine */ }
  function save() { try { localStorage.setItem('desk-state', JSON.stringify({ coat: state.coat, task: state.task })); } catch (e) {} }

  /* ---------- chips ---------- */
  function coatChip(c, cls) {
    return '<button type="button" class="chip chip-coat ' + (cls || '') + '" data-coat="' + c.id + '" aria-pressed="false">' +
      '<span class="mini" aria-hidden="true">' + A.coatSVG(c.id, '') + '</span>' + esc(c.name) + '</button>';
  }
  $('#coat-chips').innerHTML = D.coats.map(function (c) { return coatChip(c); }).join('');
  $('#board-coat-chips').innerHTML = D.coats.map(function (c) {
    return '<button type="button" class="chip" data-coat="' + c.id + '" aria-pressed="false">' + esc(c.name) + '</button>';
  }).join('');
  $('#task-chips').innerHTML = D.tasks.map(function (t) {
    return '<button type="button" class="chip" data-task="' + t.id + '" aria-pressed="false">' + esc(t.name) + '</button>';
  }).join('');
  $('#ways-switch').innerHTML = D.methods.map(function (m) {
    return '<button type="button" class="chip" data-method="' + m.id + '" aria-pressed="false">' + esc(m.name) + '</button>';
  }).join('');

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-coat]');
    if (b && b.tagName === 'BUTTON') { setCoat(b.getAttribute('data-coat')); return; }
    b = e.target.closest('[data-task]');
    if (b && b.tagName === 'BUTTON') {
      setTask(b.getAttribute('data-task'));
      // On a phone the answer sits under the pickers: bring its top into view, once, gently.
      var ans = $('#answer'), r = ans.getBoundingClientRect();
      if (window.innerWidth < 960 && r.top > window.innerHeight * 0.8) { ans.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' }); }
      return;
    }
    b = e.target.closest('[data-method]');
    if (b && b.tagName === 'BUTTON') { setMethod(b.getAttribute('data-method')); return; }
  });

  function press(sel, attr, val) {
    document.querySelectorAll(sel).forEach(function (el) { el.setAttribute('aria-pressed', String(el.getAttribute(attr) === val)); });
  }

  /* ---------- coat ---------- */
  function setCoat(id, quiet) {
    if (!coatById[id]) { return; }
    var changed = id !== state.coat;
    state.coat = id;
    press('[data-coat]', 'data-coat', id);
    var c = coatById[id];
    $('#swatch-word').textContent = c.word;
    drawSwatch(id, changed && !quiet);
    $('#coat-hint').innerHTML = '<strong>' + esc(c.name) + ':</strong> ' + esc(c.hint) + ' <span>For example ' + esc(c.breeds) + '.</span>';
    $('#board-coat-word').textContent = c.word;
    $('#guides-swatch').innerHTML = A.coatSVG(id, '');
    $('#limits-cap').innerHTML = A.coatSVG(id, '');
    renderAnswer(changed && !quiet);
    renderBoard();
    renderRoute();
    if (!quiet) { save(); }
  }

  function drawSwatch(id, animate) {
    var box = $('#swatch');
    var el = document.createElement('span');
    el.className = 'sw' + (animate && !reduced ? ' enter' : '');
    el.innerHTML = A.coatSVG(id, coatById[id].name + ' coat');
    box.appendChild(el);
    var olds = Array.prototype.slice.call(box.children, 0, -1);
    if (animate && !reduced) {
      el.addEventListener('animationend', function () { olds.forEach(function (o) { o.remove(); }); }, { once: true });
      setTimeout(function () { olds.forEach(function (o) { if (o.parentNode) { o.remove(); } }); }, 900);
    } else {
      olds.forEach(function (o) { o.remove(); });
    }
  }

  /* ---------- task + answer ---------- */
  function setTask(id) {
    if (!taskById[id]) { return; }
    var changed = id !== state.task;
    state.task = id;
    press('[data-task]', 'data-task', id);
    renderAnswer(changed);
    renderRoute();
    save();
  }

  function answerTitle(task, coat) {
    var t = taskById[task], c = coatById[coat];
    var map = { brush: 'Brushing', bathe: 'Bathing', mats: c.id === 'smooth' || c.id === 'double' ? 'Shedding in' : 'Mats in', nails: 'Nails on', ears: 'Ears on', teeth: 'Teeth on' };
    var lead = map[t.id];
    return lead + ' a ' + c.word + ' coat';
  }

  function renderAnswer(animate) {
    var a = D.answers[state.task][state.coat];
    var box = $('#answer');
    var paint = function () {
      $('#answer-title').textContent = answerTitle(state.task, state.coat);
      $('#answer-often').textContent = a.often;
      $('#answer-body').textContent = a.answer;
      $('#answer-tools').innerHTML = a.tools.map(function (id) {
        var t = toolById[id];
        return '<li><a href="#board" data-tool="' + id + '">' + A.toolSVG(id) + esc(t.name) + '</a></li>';
      }).join('');
      $('#answer-watch').innerHTML = '<strong>Stop and check</strong>' + esc(a.watch);
      var g = D.guides[a.guide];
      var link = $('#answer-guide');
      link.href = '#g-' + a.guide;
      link.textContent = 'Read the guide: ' + g.title;
      box.classList.remove('is-swapping');
    };
    if (animate && !reduced) { box.classList.add('is-swapping'); setTimeout(paint, 90); } else { paint(); }
  }

  /* ---------- tool board ---------- */
  function renderBoard() {
    var list = $('#board-list');
    if (!list.children.length) {
      list.innerHTML = D.tools.map(function (t) {
        return '<li><button type="button" class="peg" id="peg-' + t.id + '" data-peg="' + t.id + '" aria-pressed="false">' +
          A.toolSVG(t.id) + '<span class="peg-name">' + esc(t.name) + '</span><span class="peg-fit"></span></button></li>';
      }).join('');
      list.addEventListener('click', function (e) {
        var b = e.target.closest('[data-peg]');
        if (b) {
          selectTool(b.getAttribute('data-peg'), true);
          // On a narrow board the detail sits below thirteen pegs: bring it into view.
          var d = $('#tool-detail'), r = d.getBoundingClientRect();
          if (r.top > window.innerHeight * 0.75 || r.bottom < 0) { d.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' }); }
        }
      });
    }
    D.tools.forEach(function (t) {
      var peg = $('#peg-' + t.id);
      var fit = t.good.indexOf(state.coat) !== -1;
      peg.classList.toggle('is-fit', fit);
      $('.peg-fit', peg).textContent = fit ? 'Main tool for this coat' : 'Little use on this coat';
    });
    if (state.tool) { renderToolDetail(); }
  }

  function selectTool(id, focus) {
    if (!toolById[id]) { return; }
    state.tool = id;
    press('[data-peg]', 'data-peg', id);
    renderToolDetail();
    if (focus) { $('#tool-detail').focus({ preventScroll: true }); }
  }

  function renderToolDetail() {
    var t = toolById[state.tool], c = coatById[state.coat];
    var fit = t.good.indexOf(state.coat) !== -1;
    var coats = D.coats.map(function (k) {
      return '<span class="' + (t.good.indexOf(k.id) !== -1 ? 'on' : '') + '">' + esc(k.name) + '</span>';
    }).join('');
    var conf = t.confused ? '<button type="button" data-swap-tool="' + t.confused + '">Often confused with the ' + esc(toolById[t.confused].name.toLowerCase()) + '</button>' : '';
    var guides = t.guides.map(function (g) { return '<a href="#g-' + g + '">' + esc(D.guides[g].title) + '</a>'; }).join('');
    $('#tool-detail').innerHTML =
      '<div class="td-head">' + A.toolSVG(t.id) + '<h3 class="td-title">' + esc(t.name) + '</h3></div>' +
      '<p class="board-lead">' + (fit ? 'A main tool for a ' + esc(c.word) + ' coat.' : 'Little use on a ' + esc(c.word) + ' coat.') + '</p>' +
      '<div class="td-grid">' +
        '<div><h4>What it does</h4><p>' + esc(t.does) + '</p></div>' +
        '<div><h4>Where it stops being useful</h4><p>' + esc(t.limit) + '</p></div>' +
        '<div><h4>Main tool for</h4><div class="td-coats">' + coats + '</div></div>' +
        '<div><h4>Guides that use it</h4><div class="td-links">' + guides + '</div></div>' +
      '</div>' +
      (conf ? '<div class="td-links">' + conf + '</div>' : '');
  }
  document.addEventListener('click', function (e) {
    var s = e.target.closest('[data-swap-tool]');
    if (s) { selectTool(s.getAttribute('data-swap-tool'), true); }
    var t = e.target.closest('a[data-tool]');
    if (t) {
      e.preventDefault();
      selectTool(t.getAttribute('data-tool'), false);
      go('board');
    }
  });

  /* ---------- two ways ---------- */
  function setMethod(id) {
    if (!methodById[id]) { return; }
    var changed = id !== state.method;
    state.method = id;
    press('[data-method]', 'data-method', id);
    var m = methodById[id], w = WORDS[id];
    $('#ways-title').innerHTML = '<span class="w-a">' + esc(w[0]) + '</span><span class="w-or">or</span><span class="w-b">' + esc(w[1]) + '</span>' +
      '<span class="sr-only">: ' + esc(m.name.toLowerCase()) + ', compared</span>';
    var obj = $('#ways-object');
    obj.innerHTML = m.tools.length > 1 ? A.toolSVG(m.tools[0]).replace('<svg', '<svg class="o-a"') + A.toolSVG(m.tools[1]).replace('<svg', '<svg class="o-b"') : A.toolSVG(m.tools[0]);
    if (changed && !reduced) { obj.classList.remove('swap'); void obj.offsetWidth; obj.classList.add('swap'); }
    $('#ways-table').innerHTML = '<caption class="sr-only">' + esc(m.a) + ' compared with ' + esc(m.b) + '</caption>' +
      '<thead><tr><td></td><th scope="col">' + esc(m.a) + '</th><th scope="col">' + esc(m.b) + '</th></tr></thead><tbody>' +
      m.rows.map(function (r) { return '<tr><th scope="row">' + esc(r[0]) + '</th><td>' + esc(r[1]) + '</td><td>' + esc(r[2]) + '</td></tr>'; }).join('') + '</tbody>';
    $('#ways-note').innerHTML = esc(m.note) + ' <a href="#g-' + m.guide + '">' + esc(D.guides[m.guide].title) + '</a>.';
  }

  /* ---------- guide route table ---------- */
  function renderRoute() {
    var current = D.answers[state.task][state.coat].guide;
    var order = ['brush-short-coat', 'brush-double-coat', 'brush-curly-coat', 'brush-wire-coat', 'brush-silky-coat', 'shedding-season', 'work-out-a-mat', 'bathe-at-home', 'trim-nails', 'check-ears', 'brush-teeth', 'calm-a-nervous-dog'];
    $('#route-body').innerHTML = order.map(function (slug) {
      var g = D.guides[slug], n = g.next[0];
      return '<tr class="' + (slug === current ? 'is-match' : '') + '"><td><a href="#g-' + slug + '">' + esc(g.title) + '</a>' +
        (slug === current ? '<span class="sr-only"> (matches your answer)</span>' : '') + '</td><td>' + esc(g.time) + '</td>' +
        '<td><a href="#g-' + n.guide + '">' + esc(D.guides[n.guide].title) + '</a></td></tr>';
    }).join('');
  }

  /* ---------- questions ---------- */
  $('#faq-list').innerHTML = D.faqs.map(function (f, i) {
    var l = f.link, act;
    if (l.guide) { act = '<a href="#g-' + l.guide + '">' + esc(l.label) + '</a>'; }
    else if (l.scroll) { act = '<a href="#' + l.scroll + '">' + esc(l.label) + '</a>'; }
    else { act = '<button type="button" data-faq="' + i + '">' + esc(l.label) + '</button>'; }
    return '<div class="faq-row" data-reveal><h3 class="faq-q">' + esc(f.q) + '</h3><div class="faq-a"><p>' + esc(f.a) + '</p>' + act + '</div></div>';
  }).join('');
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-faq]');
    if (!b) { return; }
    var l = D.faqs[+b.getAttribute('data-faq')].link;
    if (l.method) { setMethod(l.method); go('compare'); return; }
    if (l.coat) { setCoat(l.coat); }
    if (l.task) { setTask(l.task); }
    go('desk');
  });

  /* ---------- ask the desk ---------- */
  var SYN = { shed: 'shedding', shedding: 'shedding undercoat', tangle: 'mat', tangles: 'mat', knot: 'mat knots', knots: 'mat', matted: 'mat', mats: 'mat',
    claw: 'nails', claws: 'nails', nail: 'nails', quick: 'nails quick', bath: 'bathe bath shampoo', wash: 'bathe shampoo', shampoo: 'bathe shampoo',
    dry: 'dryer drying towel', drying: 'dryer towel', tooth: 'teeth', dental: 'teeth', breath: 'teeth', ear: 'ears', smell: 'smell ears vet',
    scared: 'nervous', anxious: 'nervous', hates: 'nervous', shave: 'shave shaving', brush: 'brush brushing', poodle: 'curly', doodle: 'curly',
    husky: 'double', shepherd: 'double', golden: 'double', yorkie: 'silky', maltese: 'silky', terrier: 'wire', beagle: 'smooth', boxer: 'smooth' };
  var index = [];
  D.tasks.forEach(function (t) {
    D.coats.forEach(function (c) {
      var a = D.answers[t.id][c.id];
      index.push({ kind: 'Answer', title: answerTitle(t.id, c.id), text: [t.name, t.verb, c.name, c.word, c.breeds, a.answer, a.watch].join(' '), act: { coat: c.id, task: t.id } });
    });
  });
  Object.keys(D.guides).forEach(function (slug) {
    var g = D.guides[slug];
    index.push({ kind: 'Guide', title: g.title, text: [g.intro, g.stop].concat(g.steps.map(function (s) { return s.join(' '); })).join(' '), act: { guide: slug } });
  });
  D.tools.forEach(function (t) { index.push({ kind: 'Tool', title: t.name, text: t.does + ' ' + t.limit, act: { tool: t.id } }); });
  D.methods.forEach(function (m) { index.push({ kind: 'Comparison', title: m.a + ' or ' + m.b.toLowerCase(), text: m.name + ' ' + m.rows.map(function (r) { return r.join(' '); }).join(' '), act: { method: m.id } }); });
  D.faqs.forEach(function (f, i) { index.push({ kind: 'Question', title: f.q, text: f.a, act: { faq: i } }); });

  // Query words (stopwords dropped, plurals stemmed), each with its synonyms.
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
        forms.forEach(function (t, i) {
          var w = i === 0 ? 1 : 0.6; // the typed word counts more than its synonyms
          if (title.indexOf(t) !== -1) { best = Math.max(best, 3 * w); } else if (text.indexOf(t) !== -1) { best = Math.max(best, 1 * w); }
        });
        if (best) { s += best; hit++; }
      });
      if (hit === ws.length && ws.length > 1) { s += 3; } // every word of the question is covered
      if (s > 0 && it.act.coat && it.act.coat === state.coat) { s += 0.25; }
      return { it: it, s: s };
    }).filter(function (r) { return r.s > 0; }).sort(function (a, b) { return b.s - a.s; }).slice(0, 6);
  }
  var results = $('#ask-results');
  function showResults(q) {
    if (!q.trim()) { results.innerHTML = ''; return; }
    var rs = search(q);
    if (!rs.length) {
      results.innerHTML = '<p class="ask-empty">Nothing on the desk matches “' + esc(q) + '” yet. Try a word like <button type="button" class="link-plain" data-try="mats">mats</button>, <button type="button" class="link-plain" data-try="nails">nails</button> or <button type="button" class="link-plain" data-try="shedding">shedding</button>.</p>';
      return;
    }
    results.innerHTML = '<ul>' + rs.map(function (r, i) {
      var it = r.it;
      if (it.act.guide) { return '<li><a href="#g-' + it.act.guide + '"><span class="r-kind">' + it.kind + '</span><span class="r-title">' + esc(it.title) + '</span></a></li>'; }
      return '<li><button type="button" data-result="' + index.indexOf(it) + '"><span class="r-kind">' + it.kind + '</span><span class="r-title">' + esc(it.title) + '</span></button></li>';
    }).join('') + '</ul>';
  }
  var timer;
  $('#ask-input').addEventListener('input', function (e) { clearTimeout(timer); var v = e.target.value; timer = setTimeout(function () { showResults(v); }, 120); });
  $('#ask').addEventListener('submit', function (e) {
    e.preventDefault();
    showResults($('#ask-input').value);
    var first = results.querySelector('a, button[data-result]');
    if (first) { first.focus(); }
  });
  results.addEventListener('click', function (e) {
    var tr = e.target.closest('[data-try]');
    if (tr) { $('#ask-input').value = tr.getAttribute('data-try'); showResults(tr.getAttribute('data-try')); return; }
    var b = e.target.closest('[data-result]');
    if (!b) { return; }
    var act = index[+b.getAttribute('data-result')].act;
    if (act.coat) { setCoat(act.coat); setTask(act.task); $('#answer').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'nearest' }); $('#answer-title').focus && $('#answer-guide').focus(); }
    else if (act.tool) { selectTool(act.tool, false); go('board'); }
    else if (act.method) { setMethod(act.method); go('compare'); }
    else if (act.faq !== undefined) { go('questions'); }
  });

  /* ---------- guide view ---------- */
  function renderGuide(slug) {
    var g = D.guides[slug], c = coatById[state.coat];
    var forCoat = g.coats.indexOf(state.coat) !== -1;
    var a = D.answers[state.task][state.coat];
    var coatNote = forCoat && a.guide === slug ?
      '<aside class="g-coatnote" aria-label="For your dog\'s coat"><span class="mini" aria-hidden="true">' + A.coatSVG(c.id, '') + '</span><strong>For a ' + esc(c.word) + ' coat</strong><p>' + esc(a.answer) + ' How often: ' + esc(a.often.toLowerCase()) + '.</p></aside>' :
      (forCoat ? '' : '<aside class="g-coatnote" aria-label="Coat note"><strong>Written mainly for ' + g.coats.map(function (k) { return coatById[k].word; }).join(', ') + ' coats.</strong><p>Your selection is a ' + esc(c.word) + ' coat. <a class="link-plain" href="#desk">Find the answer for your coat</a>.</p></aside>');
    var tools = g.tools.length ? '<div class="g-tools"><h2>You’ll need</h2><ul>' + g.tools.map(function (id) {
      return '<li><a href="#board" data-tool="' + id + '">' + A.toolSVG(id) + esc(toolById[id].name) + '</a></li>';
    }).join('') + '</ul></div>' : '';
    var next = '<nav class="g-next" aria-label="Next steps"><h2>Next step</h2>' + g.next.map(function (n) {
      return '<a href="#g-' + n.guide + '"><span class="n-title">' + esc(D.guides[n.guide].title) + ' →</span><span class="n-why">' + esc(n.why) + '</span></a>';
    }).join('') + '</nav>';
    $('#guide').innerHTML =
      '<article class="guide wrap" aria-labelledby="g-title">' +
        '<a class="g-back link-plain" href="#desk">← Back to the answer finder</a>' +
        '<h1 class="g-title" id="g-title" tabindex="-1">' + esc(g.title) + '</h1>' +
        '<p class="g-meta"><span>Time: <strong>' + esc(g.time) + '</strong></span><span>Coats: <strong>' + g.coats.map(function (k) { return coatById[k].name; }).join(', ') + '</strong></span></p>' +
        '<div class="g-grid"><div class="g-main">' +
          '<p class="g-intro">' + esc(g.intro) + '</p>' + coatNote +
          '<ol class="g-steps">' + g.steps.map(function (s) { return '<li><h3>' + esc(s[0]) + '</h3><p>' + esc(s[1]) + '</p></li>'; }).join('') + '</ol>' +
          '<div class="g-stop" role="note"><h3>Stop and get help</h3><p>' + esc(g.stop) + '</p></div>' +
          '<p class="g-sample">Sample guide written for this concept prototype. Not reviewed by a groomer or a vet, and not veterinary advice.</p>' +
        '</div><div class="g-side">' + tools + next + '</div></div>' +
      '</article>';
  }

  /* ---------- routing ---------- */
  function go(id) {
    if (location.hash !== '#' + id) { location.hash = id; } else { route(); }
  }
  function route() {
    var h = location.hash.slice(1);
    var home = $('#home'), guide = $('#guide');
    if (h.indexOf('g-') === 0 && D.guides[h.slice(2)]) {
      renderGuide(h.slice(2));
      home.hidden = true; guide.hidden = false;
      document.title = D.guides[h.slice(2)].title + ' · The Practical Grooming Desk';
      window.scrollTo(0, 0);
      $('#g-title').focus({ preventScroll: true });
      markNav(null);
      return;
    }
    guide.hidden = true; home.hidden = false;
    document.title = 'The Practical Grooming Desk';
    var target = h && document.getElementById(h);
    if (target && h !== 'top') { target.scrollIntoView({ behavior: 'auto', block: 'start' }); } else if (h === 'top') { window.scrollTo(0, 0); }
    markNav(h);
  }
  function markNav(h) {
    document.querySelectorAll('.mast-links a').forEach(function (a) { a.setAttribute('aria-current', String(a.getAttribute('href') === '#' + h)); });
  }
  window.addEventListener('hashchange', route);

  /* ---------- section entrances (once, from a visible state) ---------- */
  function setupReveal() {
    var groups = ['#board .board-intro > *', '#board .board-wall', '#compare .ways-stage', '#compare .ways-facts', '#guides .guides-head', '#guides .guides-aside', '#guides .table-scroll', '#limits .limits-text > *', '#limits .limits-facts li', '.close-line'];
    groups.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el, i) { el.setAttribute('data-reveal', ''); el.style.setProperty('--i', i); });
    });
    if (!('IntersectionObserver' in window)) { document.querySelectorAll('[data-reveal]').forEach(function (el) { el.classList.add('is-in'); }); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    document.querySelectorAll('[data-reveal]').forEach(function (el) { io.observe(el); });
  }

  /* ---------- start ---------- */
  setCoat(state.coat, true);
  setTask(state.task);
  setMethod(state.method);
  selectTool(D.answers[state.task][state.coat].tools[0], false);
  setupReveal();
  route();
})();
