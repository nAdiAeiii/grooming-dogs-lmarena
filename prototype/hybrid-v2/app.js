/* Grooming Dogs, Hybrid V2: behaviour.
   Every page, section anchor, question and table comes from content.js (generated from the published build
   records). Links open the real pages on grooming-dogs.com. The desk previews any guide in place. */
(function () {
  'use strict';
  var SITE = 'https://grooming-dogs.com';
  var PAGES = window.GD_PAGES, BY = {};
  PAGES.forEach(function (p) { BY[p.pid] = p; });
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches;
  var narrow = function () { return window.innerWidth <= 1024; };
  var href = function (pid, anchor) { return SITE + BY[pid].url + (anchor ? '#' + anchor : ''); };
  var ext = function (pid, anchor, label, cls) { return '<a class="ext ' + (cls || '') + '" href="' + href(pid, anchor) + '" target="_blank" rel="noopener">' + esc(label) + '</a>'; };

  /* ---------- content model (clusters are a model, not the menu) ---------- */
  var CHAPTERS = [
    { name: 'Understand your dog', line: 'Start with the coat: it sets the schedule and the tools.', pids: ['GD-03', 'GD-02'] },
    { name: 'Everyday grooming', line: 'The jobs you do at home, each step by step.', pids: ['GD-01', 'GD-05', 'GD-04', 'GD-07', 'GD-08', 'GD-09'] },
    { name: 'Tools & technique', line: 'What each tool does, what to trim yourself, and the words groomers use.', pids: ['GD-10', 'GD-06', 'GD-17'] },
    { name: 'Grooming by situation', line: 'Puppies, older dogs, nervous dogs, and what to do when something goes wrong.', pids: ['GD-11', 'GD-13', 'GD-12', 'GD-14'] },
    { name: 'Professional grooming', line: 'Choosing a groomer, and what it costs.', pids: ['GD-15', 'GD-16'] }
  ];
  var CHAPTER_OF = {};
  CHAPTERS.forEach(function (c) { c.pids.forEach(function (pid) { CHAPTER_OF[pid] = c.name; }); });
  // The live menu "Primary" (Start here removed on 2026-10-06), unchanged.
  var MENU = [
    { label: 'Grooming tasks', items: ['GD-04', 'GD-05', 'GD-06', 'GD-07', 'GD-08', 'GD-09'] },
    { label: 'Your dog', items: ['GD-11', 'GD-13', 'GD-12'] },
    { label: 'Problems', pid: 'GD-14' },
    { label: 'Tools & groomers', items: ['GD-10', 'GD-15', 'GD-16'] }
  ];
  var COMPARE = [
    { pid: 'GD-07', section: 'grinder-or-clipper', tab: 'Clippers or grinder', q: 'Nail clippers or a grinder?' },
    { pid: 'GD-15', section: 'salon-mobile-self-wash-or-home-visit', tab: 'Where to get it done', q: 'Salon, mobile groomer, home visit or self-wash?' },
    { pid: 'GD-16', section: 'home-grooming-vs-professional-grooming', tab: 'Home or professional', q: 'Groom at home or pay a professional?' },
    { pid: 'GD-06', section: 'what-to-trim-at-home-and-what-to-leave', tab: 'Trim it or leave it', q: 'Trim it yourself or leave it to a groomer?' }
  ];
  var tableAt = function (pid, section) { return (BY[pid].tables || []).filter(function (t) { return t.section === section; })[0]; };
  var sectionTitle = function (pid, id) { var s = BY[pid].sections.filter(function (x) { return x.id === id; })[0]; return s ? s.title : ''; };
  var firstShort = function (p) {
    var lead = p.lead ? (p.lead.match(/^[^:]*?[.!?](\s|$)/) || [''])[0].trim() : '';
    return lead || (p.short && p.short[0]) || p.meta;
  };

  /* ---------- masthead menu ---------- */
  $('#menu').innerHTML = MENU.map(function (m, i) {
    if (m.pid) { return '<li><a class="ext" href="' + href(m.pid) + '" target="_blank" rel="noopener">' + esc(m.label) + '</a></li>'; }
    return '<li><button type="button" class="menu-btn" aria-expanded="false" aria-controls="sub-' + i + '">' + esc(m.label) + '</button>' +
      '<ul class="submenu" id="sub-' + i + '">' + m.items.map(function (pid) {
        return '<li><a href="' + href(pid) + '" target="_blank" rel="noopener">' + esc(BY[pid].crumb || BY[pid].title) + ' ↗</a></li>';
      }).join('') + '</ul></li>';
  }).join('');
  function closeMenus(except) {
    $$('.menu li.open').forEach(function (li) { if (li !== except) { li.classList.remove('open'); li.querySelector('.menu-btn').setAttribute('aria-expanded', 'false'); } });
  }
  var mast = $('.mast'), navToggle = $('#menu-toggle');
  function setNav(open) { mast.classList.toggle('nav-open', open); navToggle.setAttribute('aria-expanded', String(open)); }
  navToggle.addEventListener('click', function () { setNav(!mast.classList.contains('nav-open')); });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.mast')) { setNav(false); }
    var b = e.target.closest('.menu-btn');
    if (b) { var li = b.parentNode; closeMenus(li); var open = li.classList.toggle('open'); b.setAttribute('aria-expanded', String(open)); return; }
    if (!e.target.closest('.submenu')) { closeMenus(null); }
  });

  /* ---------- opening + chapters ---------- */
  $('#standfirst').textContent = BY['GD-00'].intent;
  $('#chapter-list').innerHTML = CHAPTERS.map(function (c) {
    return '<section class="chapter" data-reveal aria-label="' + esc(c.name) + '"><div class="ch-head"><h3>' + esc(c.name) + '</h3><p>' + esc(c.line) + '</p></div>' +
      '<div class="ch-rows">' + c.pids.map(function (pid) {
        var p = BY[pid];
        return '<div class="row" data-row="' + pid + '"><button type="button" class="row-main" data-preview="' + pid + '">' +
          '<span class="t">' + esc(p.h1) + '</span><span class="s">' + esc(firstShort(p)) + '</span></button>' + ext(pid, null, 'Open', 'row-open') + '</div>';
      }).join('') + '</div></section>';
  }).join('');

  /* ---------- decide between ---------- */
  $('#decide-tabs').innerHTML = COMPARE.map(function (c, i) {
    return '<button type="button" role="tab" class="tab" id="tab-' + i + '" aria-controls="decide-panel" aria-selected="false" data-cmp="' + i + '">' + esc(c.tab) + '</button>';
  }).join('');
  var cmpIndex = 0;
  function renderCompare(i) {
    cmpIndex = i;
    if (current && !narrow() && current !== COMPARE[i].pid) { showPreview(COMPARE[i].pid, { section: COMPARE[i].section }); }
    var c = COMPARE[i], t = tableAt(c.pid, c.section);
    $$('[data-cmp]').forEach(function (b) { b.setAttribute('aria-selected', String(+b.getAttribute('data-cmp') === i)); b.tabIndex = +b.getAttribute('data-cmp') === i ? 0 : -1; });
    $('#decide-panel').setAttribute('aria-labelledby', 'tab-' + i);
    var rowHeads = t.head[0] === '' || /^(option)$/i.test(t.head[0]);
    var head = '<thead><tr>' + t.head.map(function (h) { return '<th scope="col">' + esc(h) + '</th>'; }).join('') + '</tr></thead>';
    var body = '<tbody>' + t.rows.map(function (r) {
      return '<tr>' + r.map(function (cell, k) {
        if (k === 0 && rowHeads) { return '<th scope="row">' + esc(cell) + '</th>'; }
        return '<td data-col="' + esc(t.head[k] || '') + '">' + esc(cell) + '</td>';
      }).join('') + '</tr>';
    }).join('') + '</tbody>';
    $('#decide-panel').innerHTML = '<p class="tp-question">' + esc(c.q) + '</p><div class="table-scroll"><table class="cmp">' + head + body + '</table></div>' +
      '<p class="tp-source">From “' + esc(sectionTitle(c.pid, c.section)) + '” in ' + ext(c.pid, c.section, BY[c.pid].h1) + ' · <button type="button" class="link-btn" data-preview="' + c.pid + '" data-section="' + c.section + '">Preview the guide</button></p>';
  }
  $('#decide-tabs').addEventListener('keydown', function (e) {
    var cur = +document.activeElement.getAttribute('data-cmp');
    if (isNaN(cur)) { return; }
    var L = COMPARE.length, n = { ArrowRight: (cur + 1) % L, ArrowLeft: (cur + L - 1) % L, Home: 0, End: L - 1 }[e.key];
    if (n === undefined) { n = null; }
    if (n === null) { return; }
    e.preventDefault(); renderCompare(n); $('#tab-' + n).focus();
  });

  /* ---------- symptom finder (GD-14 "symptoms at a glance") ---------- */
  var SYM = tableAt('GD-14', 'symptoms-at-a-glance');
  var SYM_SEC = [['itch', 'itching-redness'], ['redness', 'itching-redness'], ['bumps', 'itching-redness'], ['head shaking', 'head-shaking'], ['smell', 'a-dog-that-still-smells'], ['flaky', 'dry-or-flaky-skin'], ['tear', 'tear-staining'], ['growing back', 'coat-not-growing-back'], ['cut', 'if-your-dog-was-hurt']];
  function symSection(label) {
    var l = label.toLowerCase(), hit = SYM_SEC.filter(function (m) { return l.indexOf(m[0]) !== -1; })[0];
    if (!hit) { return 'symptoms-at-a-glance'; }
    var s = BY['GD-14'].sections.filter(function (x) { return x.id.indexOf(hit[1]) === 0; })[0];
    return s ? s.id : 'symptoms-at-a-glance';
  }
  $('#sym-list').innerHTML = SYM.rows.map(function (r, i) { return '<li><button type="button" class="pick" data-sym="' + i + '" aria-pressed="false">' + esc(r[0]) + '</button></li>'; }).join('');
  function renderSym(i) {
    var r = SYM.rows[i], sec = symSection(r[0]);
    $$('[data-sym]').forEach(function (b) { b.setAttribute('aria-pressed', String(+b.getAttribute('data-sym') === i)); });
    $('#sym-detail').innerHTML = '<h3>' + esc(r[0]) + '</h3><dl>' +
      '<div class="kv"><dt>Possible grooming factor</dt><dd>' + esc(r[1]) + '</dd></div>' +
      '<div class="kv"><dt>What to change</dt><dd>' + esc(r[2]) + '</dd></div>' +
      '<div class="kv alert"><dt>See a vet if</dt><dd>' + esc(r[3]) + '</dd></div></dl>' +
      '<p>' + ext('GD-14', sec, sectionTitle('GD-14', sec) || 'Problems after grooming') + '</p>';
  }

  /* ---------- coat lens (GD-03 → GD-02 schedule → GD-10 starter kit) ---------- */
  var ID = tableAt('GD-03', 'how-to-identify-your-dogs-coat'), SCHED = tableAt('GD-02', 'the-grooming-schedule-by-coat-type'), KIT = tableAt('GD-10', 'starter-kits-by-coat-type');
  var findRow = function (t, group) { var key = group.split(' ')[0].toLowerCase(); return t.rows.filter(function (r) { return r[0].toLowerCase().indexOf(key) === 0; })[0]; };
  $('#coat-list').innerHTML = ID.rows.map(function (r, i) { return '<li><button type="button" class="pick" data-coat="' + i + '" aria-pressed="false">' + esc(r[0]) + '</button></li>'; }).join('');
  function renderCoat(i) {
    var g = ID.rows[i][1], s = findRow(SCHED, g), k = findRow(KIT, g);
    $$('[data-coat]').forEach(function (b) { b.setAttribute('aria-pressed', String(+b.getAttribute('data-coat') === i)); });
    $('#coat-result').innerHTML = '<h3>' + esc(/coat$/i.test(g) ? g : g + ' coat') + '</h3><dl>' +
      (s ? '<div class="kv"><dt>Brushing</dt><dd>' + esc(s[1]) + '</dd></div><div class="kv"><dt>Bathing</dt><dd>' + esc(s[2]) + '</dd></div><div class="kv"><dt>Professional grooming</dt><dd>' + esc(s[3]) + '</dd></div>' : '') +
      (k ? '<div class="kv"><dt>Brushing tools to start with</dt><dd>' + esc(k[1]) + '</dd></div>' : '') + '</dl>' +
      '<p class="tp-source">From ' + ext('GD-02', 'the-grooming-schedule-by-coat-type', 'the schedule by coat type') + ' and ' + ext('GD-10', 'starter-kits-by-coat-type', 'starter kits by coat type') + '. Not sure? ' + ext('GD-03', 'how-to-identify-your-dogs-coat', 'Identify the coat') + '.</p>' +
      '<p><button type="button" class="link-btn" data-preview="GD-05" data-section="brushing-different-coat-types">Preview: brushing different coat types</button></p>';
  }

  /* ---------- how this guide works (from /about/, /editorial-policy/, /contact/) ---------- */
  $('#works-grid').innerHTML = [['What this is', 'GD-18', BY['GD-18'].intent], ['How guides are sourced', 'GD-19', BY['GD-19'].meta], ['Corrections', 'GD-20', BY['GD-20'].meta]].map(function (w) {
    return '<div data-reveal><h3>' + esc(w[0]) + '</h3><p>' + esc(w[2]) + '</p>' + ext(w[1], null, BY[w[1]].title) + '</div>';
  }).join('');

  /* ---------- the desk preview ---------- */
  var current = null, lastUser = 0;
  function previewHTML(pid, opt) {
    var p = BY[pid]; opt = opt || {};
    var secs = p.sections.filter(function (s) { return s.id !== 'common-questions'; });
    var tag = p.ordered ? 'ol' : 'ul';
    var short = p.short && p.short.length ? (p.short.length > 1
      ? (p.lead ? '<p>' + esc(p.lead) + '</p>' : '') + '<' + tag + '>' + p.short.slice(0, 6).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</' + tag + '>'
      : '<p>' + esc(p.short[0]) + '</p>') : '<p>' + esc(p.meta) + '</p>';
    var faq = opt.faq != null && p.faqs[opt.faq] ? '<div class="pv-faq"><strong>' + esc(p.faqs[opt.faq].q) + '</strong>' + esc(p.faqs[opt.faq].a) + '</div>' : '';
    var next = p.links.map(function (u) { return PAGES.filter(function (x) { return x.url === u; })[0]; })
      .filter(function (x) { return x && CHAPTER_OF[x.pid]; }).slice(0, 4);
    return '<p class="pv-chapter">' + esc(CHAPTER_OF[pid] || 'Grooming Dogs') + '</p>' +
      '<h2 class="pv-title" id="' + (opt.idPrefix || 'pv') + '-title">' + esc(p.h1) + '</h2>' + faq +
      '<div class="pv-short"><h3>' + (p.short ? 'The short answer, as published' : 'What this page covers') + '</h3>' + short + '</div>' +
      '<div class="pv-block"><h3>In this guide</h3><div class="pv-secs">' + secs.map(function (s) {
        return '<a class="ext' + (s.id === opt.section ? ' hit' : '') + '" href="' + href(pid, s.id) + '" target="_blank" rel="noopener">' + esc(s.title) + '</a>';
      }).join('') + '</div></div>' +
      (next.length ? '<div class="pv-block"><h3>Readers go next</h3><div class="pv-next">' + next.map(function (x) {
        return '<button type="button" data-preview="' + x.pid + '">' + esc(x.h1) + '<span>' + esc(CHAPTER_OF[x.pid]) + '</span></button>';
      }).join('') + '</div></div>' : '') +
      '<a class="pv-open" href="' + href(pid, opt.section) + '" target="_blank" rel="noopener">Open on grooming-dogs.com <span aria-hidden="true">↗</span></a>';
  }
  function suggestHTML() {
    var qs = [['GD-04', 0], ['GD-07', 0], ['GD-05', 1], ['GD-03', 0]].map(function (x) { return { pid: x[0], i: x[1], q: BY[x[0]].faqs[x[1]] && BY[x[0]].faqs[x[1]].q }; }).filter(function (x) { return x.q; });
    return '<div class="pv-block pv-suggest"><h3>Questions readers ask</h3>' + qs.map(function (x) {
      return '<button type="button" data-preview="' + x.pid + '" data-faq="' + x.i + '">' + esc(x.q) + '</button>';
    }).join('') + '</div>';
  }
  function showPreview(pid, opt) {
    opt = opt || {};
    current = pid;
    if (opt.user) { lastUser = Date.now(); }
    $$('.row').forEach(function (r) { r.classList.toggle('is-active', r.getAttribute('data-row') === pid); });
    if (narrow() && opt.user) { openSheet(pid, opt); return; }
    var box = $('#preview');
    var paint = function () { box.innerHTML = previewHTML(pid, opt) + suggestHTML(); box.classList.remove('swapping'); };
    if (!reduced && box.innerHTML) { box.classList.add('swapping'); setTimeout(paint, 80); } else { paint(); }
    if (opt.user && !finePointer) { $('#desk').scrollTop = 0; }
  }

  /* hover intent: the first preview waits a moment; later ones are instant (emil: skip delay on subsequent) */
  var hoverTimer = null, warm = 0;
  document.addEventListener('mouseover', function (e) {
    if (!finePointer || narrow()) { return; }
    var b = e.target.closest('.row-main[data-preview]');
    if (!b || b.getAttribute('data-preview') === current) { return; }
    clearTimeout(hoverTimer);
    var go = function () { showPreview(b.getAttribute('data-preview')); warm = Date.now(); };
    if (Date.now() - warm < 900) { go(); } else { hoverTimer = setTimeout(go, 140); }
  });
  document.addEventListener('mouseout', function (e) { if (e.target.closest && e.target.closest('.row-main')) { clearTimeout(hoverTimer); warm = Date.now(); } });

  /* ---------- phone sheet ---------- */
  var lastFocus = null;
  function openSheet(pid, opt) {
    lastFocus = document.activeElement;
    $('#sheet-body').innerHTML = previewHTML(pid, Object.assign({}, opt, { idPrefix: 'sheet' }));
    var s = $('#sheet'), bd = $('#sheet-backdrop');
    s.hidden = false; bd.hidden = false;
    if (!reduced) { s.classList.add('from'); void s.offsetWidth; s.classList.remove('from'); }
    document.body.style.overflow = 'hidden';
    $('#sheet-close').focus();
  }
  function closeSheet() {
    var s = $('#sheet');
    if (s.hidden) { return; }
    var done = function () { s.hidden = true; $('#sheet-backdrop').hidden = true; document.body.style.overflow = ''; if (lastFocus) { lastFocus.focus(); } };
    if (reduced) { done(); return; }
    s.classList.add('from'); setTimeout(function () { s.classList.remove('from'); done(); }, 260);
  }
  $('#sheet-close').addEventListener('click', closeSheet);
  $('#sheet-backdrop').addEventListener('click', closeSheet);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeSheet(); closeMenus(null); setNav(false); }
    if (e.key === 'Tab' && !$('#sheet').hidden) {
      var f = $$('#sheet a, #sheet button'), first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    if (e.key === '/' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); focusSearch(); }
  });

  /* ---------- search: a static index of the published pages ---------- */
  var SYN = { shed: 'shedding de-shed undercoat', shedding: 'shed de-shed undercoat', tangle: 'mat', tangles: 'mat', knot: 'mat', knots: 'mat', matted: 'mat', mats: 'mat',
    claw: 'nail', claws: 'nail', nails: 'nail', quick: 'nail quick', bath: 'bathe bath shampoo', wash: 'bath shampoo', shampoo: 'bath', smells: 'smell', stinks: 'smell', stink: 'smell',
    dry: 'drying dryer', dryer: 'drying dryer', tooth: 'teeth', dental: 'teeth', breath: 'teeth', ear: 'ears', scared: 'anxious fear', nervous: 'anxious fear', hates: 'anxious fear', afraid: 'anxious fear',
    old: 'senior older', older: 'senior', puppy: 'puppy', price: 'cost', prices: 'cost', expensive: 'cost', haircut: 'trim haircut', cut: 'trim', groomer: 'groomer professional', vet: 'vet' };
  var STOP = /^(the|and|for|how|what|does|can|should|with|dog|dogs|my|your|often|when|why|get|its|after|you|use|from|this|that|a|an|is|are|do|i|to|of|in|on)$/;
  var index = [];
  PAGES.forEach(function (p) {
    if (p.pid === 'GD-00' || p.pid === 'GD-21') { return; }
    var tableText = (p.tables || []).map(function (t) { return t.rows.map(function (r) { return r.join(' '); }).join(' '); }).join(' ');
    index.push({ kind: 'Guide', pid: p.pid, title: p.h1, text: [p.title, p.crumb, p.meta, p.lead || '', (p.short || []).join(' '), tableText].join(' ') });
    p.sections.forEach(function (s) { if (s.id !== 'common-questions') { index.push({ kind: 'Section', pid: p.pid, section: s.id, title: s.title, text: p.h1 }); } });
    p.faqs.forEach(function (f, i) { index.push({ kind: 'Question', pid: p.pid, faq: i, title: f.q, text: f.a + ' ' + p.h1 }); });
  });
  var stem = function (w) { return w.length > 4 && /s$/.test(w) && !/ss$/.test(w) ? w.slice(0, -1) : w; };
  function words(q) {
    return q.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').split(/\s+/).filter(function (w) { return w.length > 1 && !STOP.test(w); })
      .map(function (w) { var f = [stem(w)]; if (SYN[w]) { SYN[w].split(' ').forEach(function (s) { f.push(stem(s)); }); } return f; });
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
      if (it.kind === 'Question' && hit === ws.length) { s += 0.5; }
      return { it: it, s: s };
    }).filter(function (r) { return r.s >= 1; }).sort(function (a, b) { return b.s - a.s; }).slice(0, 7);
  }
  var results = $('#results'), timer;
  function showResults(q) {
    if (!q.trim()) { results.innerHTML = ''; return; }
    var rs = search(q);
    if (!rs.length) {
      results.innerHTML = '<p class="no-res">No published guide matches “' + esc(q) + '”. Try <button type="button" data-try="mats">mats</button>, <button type="button" data-try="nails">nails</button> or <button type="button" data-try="smell after bath">smell after bath</button>.</p>';
      return;
    }
    results.innerHTML = '<ol aria-label="Search results">' + rs.map(function (r) {
      var it = r.it, path = it.kind === 'Guide' ? BY[it.pid].url : (it.kind === 'Section' ? BY[it.pid].h1 : 'Answered in ' + BY[it.pid].h1);
      return '<li><button type="button" class="res" data-preview="' + it.pid + '"' + (it.section ? ' data-section="' + it.section + '"' : '') + (it.faq != null ? ' data-faq="' + it.faq + '"' : '') + '>' +
        '<span class="r-kind">' + it.kind + '</span><span class="r-title">' + esc(it.title) + '</span><span class="r-path">' + esc(path) + '</span></button></li>';
    }).join('') + '</ol>';
  }
  $('#ask-input').addEventListener('input', function (e) { clearTimeout(timer); var v = e.target.value; timer = setTimeout(function () { showResults(v); }, 110); });
  $('#ask').addEventListener('submit', function (e) { e.preventDefault(); clearTimeout(timer); showResults($('#ask-input').value); var f = results.querySelector('button'); if (f) { f.focus(); } });
  function focusSearch() {
    var i = $('#ask-input');
    if (narrow()) { closeSheet(); window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }); }
    i.focus({ preventScroll: !narrow() });
  }
  $('#mast-search').addEventListener('click', function () { setNav(false); focusSearch(); });

  /* ---------- one click handler for previews and pickers ---------- */
  document.addEventListener('click', function (e) {
    var el;
    if ((el = e.target.closest('[data-try]'))) { $('#ask-input').value = el.getAttribute('data-try'); showResults(el.getAttribute('data-try')); return; }
    if ((el = e.target.closest('[data-preview]'))) {
      var faq = el.getAttribute('data-faq');
      showPreview(el.getAttribute('data-preview'), { user: true, section: el.getAttribute('data-section'), faq: faq == null ? null : +faq });
      return;
    }
    if ((el = e.target.closest('[data-cmp]'))) { renderCompare(+el.getAttribute('data-cmp')); return; }
    if ((el = e.target.closest('[data-sym]'))) { renderSym(+el.getAttribute('data-sym')); return; }
    if ((el = e.target.closest('[data-coat]'))) { renderCoat(+el.getAttribute('data-coat')); }
  });

  /* ---------- entrances: once, from a visible state ---------- */
  ['#decide > *', '#symptoms > *', '#coat > *', '#works > .head'].forEach(function (sel) { $$(sel).forEach(function (el, i) { el.setAttribute('data-reveal', ''); el.style.setProperty('--i', Math.min(i, 4)); }); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px', threshold: 0.04 });
    $$('[data-reveal]').forEach(function (el) { io.observe(el); });
  } else { $$('[data-reveal]').forEach(function (el) { el.classList.add('is-in'); }); }

  /* ---------- the desk follows the reading: each section puts its source guide on the desk ---------- */
  var FOLLOW = {
    chapters: function () { return ['GD-01']; },
    decide: function () { return [COMPARE[cmpIndex].pid, COMPARE[cmpIndex].section]; },
    symptoms: function () { return ['GD-14', 'symptoms-at-a-glance']; },
    coat: function () { return ['GD-03', 'how-to-identify-your-dogs-coat']; },
    works: function () { return ['GD-19']; }
  };
  if ('IntersectionObserver' in window) {
    var follow = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting || narrow() || Date.now() - lastUser < 4000) { return; }
        var t = FOLLOW[e.target.id]();
        if (t[0] !== current) { showPreview(t[0], { section: t[1] }); }
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    Object.keys(FOLLOW).forEach(function (id) { follow.observe(document.getElementById(id)); });
  }

  /* ---------- start: the pillar guide on the desk ---------- */
  renderCompare(0); renderSym(0); renderCoat(2);
  showPreview('GD-01');
})();
