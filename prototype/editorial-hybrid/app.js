/* Grooming Dogs homepage prototype. Content comes from content.js (the 22 published pages) and data.js
   (coat sheet and plate entries quoted from the same build records). Links open the live pages. */
(function () {
  'use strict';
  var PAGES = window.GD_PAGES, D = window.GD_DATA;
  var BY = {}; PAGES.forEach(function (p) { BY[p.pid] = p; });
  /* On the live site (window.GD_LIVE) links are same-site and open in place; the prototype opens grooming-dogs.com in a new tab. */
  var LIVE = !!window.GD_LIVE, SITE = LIVE ? '' : 'https://grooming-dogs.com', TGT = LIVE ? '' : ' target="_blank" rel="noopener"';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var cap = function (s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; };
  var href = function (pid, sec) { return SITE + BY[pid].url + (sec ? '#' + sec : ''); };
  var ext = function (pid, sec, text, cls) { return '<a' + (cls ? ' class="' + cls + '"' : '') + ' href="' + href(pid, sec) + '"' + TGT + '>' + esc(text) + '</a>'; };
  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  var phone = function () { return innerWidth <= 760; };
  /* On the live site the image URLs come from the media library (window.GD_IMG, keyed like assets/photos.json). */
  var img = function (k) { return (window.GD_IMG && window.GD_IMG[k]) || 'assets/img/' + k + '.jpg'; };
  var icon = function (id) { return '<svg class="ic" aria-hidden="true"><use href="#ph-' + id + '"/></svg>'; };
  var tool = function (id, cls) { return '<svg' + (cls ? ' class="' + cls + '"' : '') + ' viewBox="0 0 240 120" aria-hidden="true"><use href="#t-' + id + '"/></svg>'; };
  var firstSentence = function (s) { var m = String(s).match(/^.*?[.!?](\s|$)/); return (m ? m[0] : s).trim(); };
  var tableAt = function (pid, sec) { return (BY[pid].tables || []).filter(function (t) { return t.section === sec; })[0]; };

  /* where each page sits, for the slip's label and colour */
  var GROUP = {};
  [['Your dog’s coat', 'var(--sage)', ['GD-02', 'GD-03']], ['Grooming tasks', 'var(--honey)', ['GD-01', 'GD-04', 'GD-05', 'GD-06', 'GD-07', 'GD-08', 'GD-09']],
   ['Tools and words', 'var(--honey)', ['GD-10', 'GD-17']], ['Your dog', 'var(--action)', ['GD-11', 'GD-12', 'GD-13']], ['Problems', 'var(--slate)', ['GD-14']],
   ['Groomers', 'var(--heather)', ['GD-15', 'GD-16']], ['About this guide', 'var(--muted)', ['GD-18', 'GD-19', 'GD-20', 'GD-21', 'GD-00']]]
    .forEach(function (g) { g[2].forEach(function (pid) { GROUP[pid] = { name: g[0], c: g[1] }; }); });

  /* ---------- masthead menu: the live menu, with each guide's first published line ---------- */
  var MENU = [
    { label: 'Start here', intro: 'New to grooming? Learn the full routine, then find out what your dog’s coat needs.',
      items: [['GD-01', 'The full grooming routine', 'list'], ['GD-03', 'Dog coat types', 'dog'], ['GD-02', 'Grooming schedule', 'calendar-blank'], ['GD-17', 'Grooming glossary', 'book-open']],
      feat: ['coat-double', 'GD-03', 'Find your dog’s coat type'] },
    { label: 'Grooming tasks', intro: 'Step-by-step guides for each job, with the tools and the warning signs.',
      items: [['GD-04', 'Bathing', 'bathtub'], ['GD-07', 'Nail trimming', 'paw-print'], ['GD-05', 'Brushing', 'sparkle'], ['GD-08', 'Ear cleaning', 'ear'], ['GD-06', 'Haircuts & trimming', 'scissors'], ['GD-09', 'Teeth brushing', 'tooth']],
      feat: ['lead-bathing', 'GD-04', 'Bathing your dog, step by step'] },
    { label: 'Your dog', intro: 'Puppies, older dogs and nervous dogs need a gentler routine.',
      items: [['GD-11', 'Puppy grooming', 'baby'], ['GD-13', 'Senior dogs', 'clock'], ['GD-12', 'Anxious dogs', 'heart'], ['GD-14', 'Problems after grooming', 'warning']],
      feat: ['lead-puppy', 'GD-11', 'Puppy grooming'] },
    { label: 'Tools & groomers', intro: 'What to buy, and how to choose and pay a professional.',
      items: [['GD-10', 'Grooming tools', 'towel'], ['GD-15', 'Choosing a groomer', 'shield-check'], ['GD-16', 'Grooming cost', 'storefront']],
      feat: ['lead-groomer', 'GD-15', 'Choosing a dog groomer'] }
  ];
  if (!$('#nav-list').children.length) $('#nav-list').innerHTML = MENU.map(function (m, i) {
    var f = m.feat, fp = (window.GD_PHOTOS || []).filter(function (x) { return x.key === f[0]; })[0] || {};
    return '<li class="nav-item"><button type="button" class="nav-btn" aria-expanded="false" aria-controls="np-' + i + '">' + esc(m.label) + icon('caret-down') + '</button>' +
      '<div class="nav-panel" id="np-' + i + '" hidden><div class="np-in">' +
        '<div class="np-intro"><p class="np-h">' + esc(m.label) + '</p><p>' + esc(m.intro) + '</p><p class="nav-hint">Not in the list? Search all 22 guides <kbd>/</kbd></p></div>' +
        '<div class="np-links">' + m.items.map(function (it) {
          return '<a href="' + href(it[0]) + '"' + TGT + '>' + icon(it[2]) + '<b>' + esc(it[1]) + '</b><span>' + esc(firstSentence(D.menuLine[it[0]] || BY[it[0]].meta)) + '</span></a>';
        }).join('') + '</div>' +
        '<a class="np-feat" href="' + href(f[1]) + '"' + TGT + '><img src="' + img(f[0]) + '" alt="" loading="lazy"><b>' + esc(f[2]) + '</b><span>Photo: ' + esc(fp.credit || '') + ' / Pexels</span></a>' +
      '</div></div></li>';
  }).join('');
  var shell = function () { if (window.GDShell) { window.GDShell.close(); } };
  document.addEventListener('click', function (e) {
    if (!e.target.closest('#search')) { hideResults(); }
  });

  /* ---------- chapter index: thumb tabs (desktop) and sticky bar (phones) ---------- */
  var CH = [['coat', 'Coat', 'var(--sage)'], ['plate', 'Tools', 'var(--honey)'], ['problems', 'Problems', 'var(--slate)'], ['groomers', 'Groomers', 'var(--heather)']];
  var chLinks = CH.map(function (c) { return '<a href="#' + c[0] + '" data-target="' + c[0] + '" style="--c:' + c[2] + '">' + c[1] + '</a>'; }).join('');
  $('#thumb').innerHTML = chLinks; $('#chapter-bar').innerHTML = chLinks;
  if ('IntersectionObserver' in window) {
    var mark = function (id) { $$('[data-target]').forEach(function (a) { a.setAttribute('aria-current', String(a.getAttribute('data-target') === id)); }); };
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { mark(e.target.id); } }); }, { rootMargin: '-45% 0px -50% 0px' });
    CH.forEach(function (c) { io.observe(document.getElementById(c[0])); });
    new IntersectionObserver(function (es) { $('#chapter-bar').classList.toggle('on', !es[0].isIntersecting); }, { rootMargin: '-80px 0px 0px 0px' }).observe($('.ask'));
  }

  /* ---------- hero: highlighter, questions, browse by dog ---------- */
  /* hero: lift the text in, then let the photo settle (one-time entrance) */
  document.documentElement.classList.add('hero-go');
  /* footer photo settles once when it scrolls into view */
  var fb = $('.foot-band');
  if (fb && 'IntersectionObserver' in window && !reduced) {
    var fo = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { fb.classList.add('seen'); fo.disconnect(); } }, { threshold: 0.3 });
    fo.observe(fb);
  } else if (fb) { fb.classList.add('seen'); }
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(function () { setTimeout(function () { $('#hl').classList.add('drawn'); }, reduced ? 0 : 200); });
  var faq = function (pid, i) { return { pid: pid, i: i, q: BY[pid].faqs[i].q }; };
  var QS = [faq('GD-07', 2), faq('GD-02', 0), faq('GD-08', 2), faq('GD-04', 0)];
  QS.forEach(function (q) { if (!q.q) { throw new Error('missing FAQ'); } });
  $('#qs').innerHTML = QS.map(function (q) {
    return '<li><button type="button" data-open="' + q.pid + '" data-faq="' + q.i + '">' + esc(q.q) + ' <span>' + esc(BY[q.pid].crumb) + '</span></button></li>';
  }).join('');

  /* text loop in the search field: real questions, slow enough to read, paused while typing */
  var loop = $('#loop'), loopI = 0, loopTimer = null;
  var LOOP = ['my dog smells after a bath', 'how often to brush a double coat', 'nail clippers or a grinder?', 'knots behind the ears'];
  loop.innerHTML = '<span>' + esc(LOOP[0]) + '</span>';
  function tick() {
    var s = $('span', loop); s.classList.add('out');
    setTimeout(function () { loopI = (loopI + 1) % LOOP.length; s.textContent = LOOP[loopI]; s.classList.remove('out'); s.classList.add('in'); void s.offsetWidth; s.classList.remove('in'); }, 300);
  }
  function startLoop() { if (!reduced && !loopTimer) { loopTimer = setInterval(tick, 3500); } }
  function stopLoop() { clearInterval(loopTimer); loopTimer = null; }
  startLoop();

  /* ---------- search: guides, sections and answered questions (shadcn Command pattern, inline) ---------- */
  var SYN = { shed: 'shedding de-shed undercoat', shedding: 'shed de-shed undercoat', tangle: 'mat', tangles: 'mat', knot: 'mat', knots: 'mat', matted: 'mat', mats: 'mat',
    claw: 'nail', claws: 'nail', nails: 'nail', bath: 'bathe bath shampoo', wash: 'bath shampoo', shampoo: 'bath', smells: 'smell', stinks: 'smell', stink: 'smell',
    dryer: 'drying dryer', tooth: 'teeth', dental: 'teeth', breath: 'teeth', ear: 'ears', scared: 'anxious fear', nervous: 'anxious fear', hates: 'anxious fear', afraid: 'anxious fear',
    old: 'senior older', older: 'senior', price: 'cost', prices: 'cost', expensive: 'cost', haircut: 'trim haircut', cut: 'trim', clipper: 'clippers', grinder: 'grinder' };
  var STOP = /^(the|and|for|how|what|does|can|should|with|dog|dogs|my|your|often|when|why|get|its|after|you|use|from|this|that|a|an|is|are|do|i|to|of|in|on|or)$/;
  var index = [];
  PAGES.forEach(function (p) {
    if (p.pid === 'GD-00' || p.pid === 'GD-21') { return; }
    var tt = (p.tables || []).map(function (t) { return t.rows.map(function (r) { return r.join(' '); }).join(' '); }).join(' ');
    index.push({ kind: 'Guides', pid: p.pid, title: p.h1, sub: p.url, text: [p.title, p.crumb, p.meta, p.lead || '', (p.short || []).join(' '), tt].join(' ') });
    p.sections.forEach(function (s) { if (s.id !== 'common-questions') { index.push({ kind: 'Sections', pid: p.pid, sec: s.id, title: s.title, sub: p.h1, text: p.h1 }); } });
    p.faqs.forEach(function (f, i) { index.push({ kind: 'Questions', pid: p.pid, faq: i, title: f.q, sub: 'Answered in ' + p.h1, text: f.a + ' ' + p.h1 }); });
  });
  var stem = function (w) { return w.length > 4 && /s$/.test(w) && !/ss$/.test(w) ? w.slice(0, -1) : w; };
  function words(q) {
    return q.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').split(/\s+/).filter(function (w) { return w.length > 1 && !STOP.test(w); })
      .map(function (w) { var f = [stem(w)]; if (SYN[w]) { SYN[w].split(' ').forEach(function (s) { f.push(stem(s)); }); } return f; });
  }
  function search(q) {
    var ws = words(q); if (!ws.length) { return []; }
    return index.map(function (it) {
      var t = it.title.toLowerCase(), x = it.text.toLowerCase(), s = 0, hit = 0;
      ws.forEach(function (forms) {
        var best = 0;
        forms.forEach(function (f, i) { var w = i ? 0.6 : 1; if (t.indexOf(f) !== -1) { best = Math.max(best, 3 * w); } else if (x.indexOf(f) !== -1) { best = Math.max(best, w); } });
        if (best) { s += best; hit++; }
      });
      if (hit === ws.length && ws.length > 1) { s += 3; }
      return { it: it, s: s };
    }).filter(function (r) { return r.s >= 1; }).sort(function (a, b) { return b.s - a.s; }).slice(0, 8);
  }
  var input = $('#ask-input'), results = $('#results'), searchBox = $('#search'), active = -1, timer;
  function showResults(q) {
    searchBox.classList.toggle('has-text', !!q);
    if (!q.trim()) { hideResults(); return; }
    var rs = search(q), wasHidden = results.hidden;
    if (!rs.length) {
      results.innerHTML = '<p class="r-empty">No published guide matches “' + esc(q) + '”. Try <button type="button" data-try="mats">mats</button>, <button type="button" data-try="nails">nails</button> or <button type="button" data-try="smell after a bath">smell after a bath</button>.</p>';
    } else {
      var groups = {}; rs.forEach(function (r) { (groups[r.it.kind] = groups[r.it.kind] || []).push(r.it); });
      var n = 0;
      results.innerHTML = ['Questions', 'Sections', 'Guides'].filter(function (k) { return groups[k]; }).map(function (k) {
        return '<div role="group" aria-label="' + k + '"><p class="r-group" aria-hidden="true">' + k + '</p>' + groups[k].map(function (it) {
          return '<button type="button" class="r-item" role="option" id="r-' + (n++) + '" aria-selected="false" data-open="' + it.pid + '"' + (it.sec ? ' data-sec="' + it.sec + '"' : '') + (it.faq != null ? ' data-faq="' + it.faq + '"' : '') + '><b>' + esc(it.title) + '</b><span>' + esc(it.sub) + '</span></button>';
        }).join('') + '</div>';
      }).join('');
    }
    results.hidden = false; input.setAttribute('aria-expanded', 'true'); active = -1;
    if (wasHidden && !reduced) { results.classList.remove('enter'); void results.offsetWidth; results.classList.add('enter'); }
  }
  function hideResults() { results.hidden = true; input.setAttribute('aria-expanded', 'false'); input.removeAttribute('aria-activedescendant'); }
  function move(d) {
    var items = $$('.r-item', results); if (!items.length) { return; }
    active = (active + d + items.length) % items.length;
    items.forEach(function (b, i) { b.setAttribute('aria-selected', String(i === active)); });
    input.setAttribute('aria-activedescendant', items[active].id); items[active].scrollIntoView({ block: 'nearest' });
  }
  input.addEventListener('input', function () { clearTimeout(timer); var v = input.value; searchBox.classList.toggle('has-text', !!v); timer = setTimeout(function () { showResults(v); }, 90); });
  var quietFocus = false;
  input.addEventListener('focus', function () { stopLoop(); if (input.value && !quietFocus) { showResults(input.value); } quietFocus = false; });
  input.addEventListener('blur', function () { if (!input.value) { startLoop(); } });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); if (results.hidden) { showResults(input.value); } move(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
    else if (e.key === 'Enter') { e.preventDefault(); clearTimeout(timer); if (results.hidden) { showResults(input.value); } var b = $$('.r-item', results)[Math.max(active, 0)]; if (b) { b.click(); } }
    else if (e.key === 'Escape') { if (!results.hidden) { e.stopPropagation(); hideResults(); } else { input.value = ''; searchBox.classList.remove('has-text'); } }
  });
  function focusSearch() {
    shell();
    var top = searchBox.getBoundingClientRect().top + scrollY - 140;
    if (Math.abs(scrollY - top) > 40) { scrollTo({ top: Math.max(0, top), behavior: reduced ? 'auto' : 'smooth' }); }
    input.focus({ preventScroll: true });
  }
  $('#mast-search').addEventListener('click', function (e) { e.preventDefault(); focusSearch(); });
  $('#field-go').addEventListener('click', function () { clearTimeout(timer); if (!input.value.trim()) { input.focus(); return; } showResults(input.value); var b = $('.r-item', results); if (b) { b.focus(); } else { input.focus(); } });
  $$('[data-search]').forEach(function (b) { b.addEventListener('click', function (e) { e.preventDefault(); focusSearch(); }); });
  /* Search buttons on other pages land here as /#search. Wait for load: the browser's own fragment handling at load time moves focus. */
  if (location.hash === '#search') {
    var goSearch = function () { setTimeout(focusSearch, 0); };
    if (document.readyState === 'complete') { goSearch(); } else { addEventListener('load', goSearch); }
  }

  /* ---------- sliding pill shared by the coat picker, the problem list and the groomer tabs ---------- */
  function placePill(container, btn, instant) {
    var pill = $('.pill', container); if (!pill || !btn) { return; }
    if (instant) { pill.style.transition = 'none'; }
    pill.style.width = btn.offsetWidth + 'px'; pill.style.height = btn.offsetHeight + 'px';
    pill.style.transform = 'translate(' + btn.offsetLeft + 'px,' + btn.offsetTop + 'px)';
    if (instant) { void pill.offsetWidth; pill.style.transition = ''; }
  }

  /* ---------- coat sheet ---------- */
  var COAT = {}; D.coats.forEach(function (c) { COAT[c.id] = c; });
  var TOOL = {}; D.tools.forEach(function (t) { TOOL[t.id] = t; });
  var KITLINE = { rake: 'Undercoat rake or de-shedding tool', slicker: 'Slicker brush', comb: 'Steel comb', pin: 'Pin brush', bristle: 'Bristle brush', curry: 'Rubber curry or rubber-bristled brush' };
  var state = { coat: 'double', coatIndex: 2 };
  $('#coat-seg').insertAdjacentHTML('beforeend', D.coats.map(function (c, i) {
    return '<button type="button" class="pick" role="radio" aria-checked="' + (c.id === state.coat) + '" tabindex="' + (c.id === state.coat ? 0 : -1) + '" data-coat="' + c.id + '">' + esc(c.name) + '</button>';
  }).join(''));
  var photoCredit = {}; (window.GD_PHOTOS || []).forEach(function (p) { photoCredit[p.key] = p; });
  function renderSheet(dir) {
    var c = COAT[state.coat], ph = photoCredit[c.photo] || {};
    var extra = c.id === 'double' ? '<p>Don’t shave a double coat. ' + ext('GD-03', 'should-you-shave-a-double-coated-dog', 'Why not') + '</p>' : '';
    $('#sheet').innerHTML =
      '<div class="sheet-main">' +
        '<figure class="sheet-photo"><img src="' + img(c.photo) + '" width="800" height="534" loading="lazy" alt="' + esc(ph.alt || '') + '"><figcaption>Photo: ' + esc(ph.credit || '') + ' / Pexels</figcaption></figure>' +
        '<div class="sheet-body">' +
          '<h3>' + (/coat$/i.test(c.name) ? esc(c.name) : 'A ' + esc(c.name.toLowerCase()) + ' coat') + '</h3>' +
          '<div class="srow"><span class="sn">1</span><div><p class="sk"><span class="sr-only">Step 1: </span>' + ext('GD-03', null, 'Find your dog’s coat type') + '</p><p>' + esc(cap(c.looks)) + '</p><p style="color:var(--muted);font-size:var(--t-small);margin-top:4px">' + esc(c.breeds) + '</p></div></div>' +
          '<div class="srow"><span class="sn">2</span><div><p class="sk"><span class="sr-only">Step 2: </span>' + ext('GD-02', null, 'A grooming schedule for your dog’s coat') + '</p><dl class="sched"><dt>Brushing</dt><dd>' + esc(c.brushing) + '</dd><dt>Bathing</dt><dd>' + esc(c.bathing) + '</dd><dt>Groomer</dt><dd>' + esc(c.groomer) + '</dd>' +
            '<dt class="all">Every coat</dt><dd class="all">Nails every three to four weeks, ears checked at each groom, teeth daily if you can</dd></dl>' +
            '<p style="margin-top:8px"><b>How to brush it:</b> ' + esc(c.technique) + '</p></div></div>' +
          '<div class="srow"><span class="sn">3</span><div><p class="sk"><span class="sr-only">Step 3: </span>' + ext('GD-01', null, 'The full grooming routine') + '</p><p>Everything a home groom involves, in the order to do it.</p></div></div>' +
        '</div>' +
      '</div>' +
      '<aside class="side">' +
        '<div><h4>Start with</h4>' + c.fit.map(function (id) { return '<button type="button" class="tool-ln" data-tool="' + id + '">' + tool(id) + '<span>' + esc(KITLINE[id]) + '</span></button>'; }).join('') +
          (c.extras && c.extras !== '—' ? '<p style="font-size:var(--t-small);color:var(--muted);margin-top:6px">Optional: ' + esc(c.extras) + '</p>' : '') + '</div>' +
        '<div><h4>Stop and check</h4>' + extra + '<p class="vet">Sudden hair loss, bald patches, or shedding with itchy or sore skin is different from normal shedding. See a vet.</p></div>' +
        '<p style="font-size:var(--t-small);color:var(--muted)">From ' + ext('GD-03', null, 'Dog coat types') + ', ' + ext('GD-02', 'the-grooming-schedule-by-coat-type', 'the schedule') + ' and ' + ext('GD-10', 'starter-kits-by-coat-type', 'starter kits') + '.</p>' +
      '</aside>';
    if (dir && !reduced) { var sh = $('#sheet'); sh.style.setProperty('--dx', (dir > 0 ? 8 : -8) + 'px'); sh.classList.remove('panel-in'); void sh.offsetWidth; sh.classList.add('panel-in'); }
  }
  function setCoat(id, focus) {
    var i = D.coats.findIndex(function (c) { return c.id === id; }), dir = i - state.coatIndex;
    state.coat = id; state.coatIndex = i;
    $$('[data-coat]').forEach(function (b) { var on = b.getAttribute('data-coat') === id; b.setAttribute('aria-checked', String(on)); b.tabIndex = on ? 0 : -1; if (on && focus) { b.focus(); } });
    placePill($('#coat-seg'), $('[data-coat="' + id + '"]'));
    renderSheet(dir); if (state.plateCoat !== undefined) { setPlateCoat(id); }
  }
  $('#coat-seg').addEventListener('keydown', function (e) {
    var d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]; if (!d) { return; }
    e.preventDefault(); var n = (state.coatIndex + d + D.coats.length) % D.coats.length; setCoat(D.coats[n].id, true);
  });

  /* ---------- the grooming plate: six jobs, four tools each ---------- */
  var ROWS = [['brushes', 'Brushes', ['GD-05'], 'dog'], ['combs', 'Combs and de-shedding', ['GD-05'], 'dog'], ['nails', 'Nails', ['GD-07'], 'paw-print'],
    ['bathing', 'Bathing and drying', ['GD-04'], 'bathtub'], ['earsteeth', 'Ears and teeth', ['GD-08', 'GD-09'], 'tooth'], ['trims', 'Trims at home', ['GD-06'], 'scissors']];
  var ROW_ICON = { brushes: 'sparkle', combs: 'drop', nails: 'paw-print', bathing: 'bathtub', earsteeth: 'tooth', trims: 'scissors' };
  $('#plate-rows').innerHTML = ROWS.map(function (r) {
    var ts = D.tools.filter(function (t) { return t.task === r[0]; });
    var links = r[2].map(function (pid) { return '<a class="task-link" href="' + href(pid) + '"' + TGT + '>' + esc(BY[pid].crumb) + ' guide</a>'; }).join('');
    return '<div class="prow" data-row="' + r[0] + '"><div class="prow-head"><p class="task">' + icon(ROW_ICON[r[0]]) + esc(r[1]) + '</p>' + links +
      (r[0] === 'nails' ? '<button type="button" class="cmp-link" data-cmp-nails>Clippers or grinder?</button>' : '') + '</div>' +
      '<div class="tools">' + ts.map(function (t) {
        return '<button type="button" class="tool" data-tool="' + t.id + '" aria-haspopup="dialog">' + tool(t.id) + '<span>' + esc(t.name) + '</span></button>';
      }).join('') + '</div></div>';
  }).join('');
  /* coat filter for the brushing rows; "All coats" until the reader picks one */
  state.plateCoat = 'all';
  $('#plate-seg').insertAdjacentHTML('beforeend', [{ id: 'all', name: 'All coats' }].concat(D.coats).map(function (c) {
    return '<button type="button" class="pick" role="radio" aria-checked="' + (c.id === 'all') + '" tabindex="' + (c.id === 'all' ? 0 : -1) + '" data-pcoat="' + c.id + '">' + esc(c.name) + '</button>';
  }).join(''));
  function fitFor(id, coat) { coat = coat || state.plateCoat; return coat === 'all' || COAT[coat].fit.indexOf(id) !== -1; }
  function setPlateCoat(id, focus) {
    state.plateCoat = id;
    $$('[data-pcoat]').forEach(function (b) { var on = b.getAttribute('data-pcoat') === id; b.setAttribute('aria-checked', String(on)); b.tabIndex = on ? 0 : -1; if (on && focus) { b.focus(); } });
    placePill($('#plate-seg'), $('[data-pcoat="' + id + '"]'));
    $$('.tool').forEach(function (b) { var t = TOOL[b.getAttribute('data-tool')]; var coatRow = t.task === 'brushes' || t.task === 'combs'; b.classList.toggle('dim', coatRow && !fitFor(t.id)); });
  }
  $('#plate-seg').addEventListener('keydown', function (e) {
    var d = { ArrowRight: 1, ArrowLeft: -1 }[e.key]; if (!d) { return; }
    e.preventDefault(); var ids = ['all'].concat(D.coats.map(function (c) { return c.id; })), i = ids.indexOf(state.plateCoat);
    setPlateCoat(ids[(i + d + ids.length) % ids.length], true);
  });
  function guidesFor(t) { return ROWS.filter(function (r) { return r[0] === t.task; })[0][2]; }

  /* tool dialog: the card grows out of the chosen tool and shrinks back into it on close */
  var td = $('#tool-dialog'), tdScrim = $('#tool-scrim'), tdFrom = null;
  function toolBody(t) {
    var coatRow = t.task === 'brushes' || t.task === 'combs', fitLine = '';
    if (coatRow) {
      fitLine = state.plateCoat === 'all'
        ? '<p class="fit">A starting tool for: ' + D.coats.filter(function (c) { return c.fit.indexOf(t.id) !== -1; }).map(function (c) { return esc(c.name.toLowerCase()); }).join(', ') + '</p>'
        : '<p class="fit' + (fitFor(t.id) ? '' : ' no') + '">' + (fitFor(t.id) ? 'A starting tool for a ' : 'Not a starting tool for a ') + esc(COAT[state.plateCoat].name.toLowerCase()) + ' coat</p>';
      if (/A starting tool for: <\/p>/.test(fitLine)) { fitLine = ''; }
    }
    return tool(t.id, 'big') + '<h3 id="td-title">' + esc(t.name) + '</h3>' + fitLine +
      '<dl><dt>What it does</dt><dd>' + esc(cap(t.does)) + '</dd>' + (t.good ? '<dt>Good for</dt><dd>' + esc(cap(t.good)) + '</dd>' : '') + (t.watch ? '<dt>Watch out</dt><dd>' + esc(cap(t.watch)) + '</dd>' : '') + '</dl>' +
      '<p class="td-links">' + ext('GD-10', t.section, 'On the tools page') + guidesFor(t).map(function (pid) { return ext(pid, null, BY[pid].crumb + ' guide'); }).join('') + '</p>';
  }
  function openDialog(html, from) {
    hc.hidden = true; tdFrom = from || null; lastFocus = document.activeElement;
    $('#td-body').innerHTML = html; td.hidden = false; tdScrim.hidden = false; document.body.style.overflow = 'hidden';
    if (!reduced && from) {
      var a = from.getBoundingClientRect(), b = td.getBoundingClientRect();
      td.style.transition = 'none'; td.style.transformOrigin = '0 0';
      td.style.transform = 'translate(' + (a.left - b.left) + 'px,' + (a.top - b.top) + 'px) scale(' + (a.width / b.width) + ',' + (a.height / b.height) + ')';
      td.style.opacity = '0.2'; tdScrim.classList.add('from');
      requestAnimationFrame(function () { requestAnimationFrame(function () {
        td.style.transition = 'transform 320ms var(--ease-drawer), opacity 200ms ease'; td.style.transform = ''; td.style.opacity = ''; tdScrim.classList.remove('from');
      }); });
    }
    $('#td-close').focus();
  }
  function closeDialog() {
    if (td.hidden) { return; }
    var done = function () { td.hidden = true; tdScrim.hidden = true; td.style.transform = ''; td.style.opacity = ''; td.style.transition = ''; document.body.style.overflow = ''; var f = tdFrom || lastFocus; if (f && f.focus) { f.focus({ preventScroll: true }); } };
    if (reduced || !tdFrom) { done(); return; }
    var a = tdFrom.getBoundingClientRect(), b = td.getBoundingClientRect();
    td.style.transition = 'transform 240ms var(--ease-out), opacity 200ms ease';
    td.style.transform = 'translate(' + (a.left - b.left) + 'px,' + (a.top - b.top) + 'px) scale(' + (a.width / b.width) + ',' + (a.height / b.height) + ')'; td.style.opacity = '0';
    tdScrim.classList.add('from'); setTimeout(function () { tdScrim.classList.remove('from'); done(); }, 230);
  }
  function openTool(id, from) { openDialog(toolBody(TOOL[id]), from); td.setAttribute('aria-labelledby', 'td-title'); }
  function openNails(from) {
    var t = tableAt('GD-07', 'grinder-or-clipper');
    openDialog('<div class="td-pair">' + tool('clipper', 'big') + tool('grinder', 'big') + '</div><h3 id="td-title">Nail clippers or a grinder?</h3><div class="table-scroll">' + tableHTML(t) + '</div><p class="td-links">' + ext('GD-07', 'grinder-or-clipper', 'From “Grinder or clipper?”') + '</p>', from);
  }
  $('#td-close').addEventListener('click', closeDialog);
  tdScrim.addEventListener('click', closeDialog);

  /* hover card: mouse only, short delay first, instant while moving between tools */
  var hc = $('#hovercard'), hcTimer, hcWarm = 0;
  if (fine) {
    document.addEventListener('pointerover', function (e) {
      var b = e.target.closest('.tool'); clearTimeout(hcTimer);
      if (!b || !td.hidden) { if (!e.target.closest('#hovercard')) { hc.hidden = true; } return; }
      var go = function () {
        var t = TOOL[b.getAttribute('data-tool')], wr = $('#plate .wrap').getBoundingClientRect(), r = b.getBoundingClientRect();
        hc.innerHTML = '<b>' + esc(t.name) + '</b>' + esc(cap(t.does));
        hc.style.left = Math.max(0, Math.min(r.left - wr.left + r.width / 2 - 130, wr.width - 270)) + 'px';
        hc.style.top = (r.top - wr.top - 10) + 'px'; hc.style.transform = 'translateY(-100%)';
        hc.hidden = false; hcWarm = Date.now();
      };
      if (Date.now() - hcWarm < 600) { go(); } else { hcTimer = setTimeout(go, 350); }
    });
  }

  /* ---------- problems after grooming ---------- */
  var SYM = tableAt('GD-14', 'symptoms-at-a-glance');
  var SYM_SEC = [['itch', 'itching'], ['redness', 'itching'], ['bumps', 'itching'], ['head shaking', 'head-shaking'], ['smell', 'a-dog-that-still-smells'], ['dry', 'dry-or-flaky'], ['tear', 'tear-staining'], ['coat not', 'coat-not-growing'], ['cut', 'if-your-dog-was-hurt']];
  function symSec(label) {
    var l = label.toLowerCase(), hit = SYM_SEC.filter(function (m) { return l.indexOf(m[0]) !== -1; })[0];
    var s = hit && BY['GD-14'].sections.filter(function (x) { return x.id.indexOf(hit[1]) === 0; })[0];
    return s ? s : { id: 'symptoms-at-a-glance', title: 'Symptoms at a glance' };
  }
  $('#prob-rule').textContent = BY['GD-14'].short[0];
  function symDetail(r) {
    var s = symSec(r[0]);
    return '<dl><dt>Possible grooming factor</dt><dd>' + esc(r[1]) + '</dd><dt>What to change</dt><dd>' + esc(r[2]) + '</dd><dt>See a vet if</dt><dd class="vet">' + esc(r[3]) + '</dd></dl>' +
      '<p>' + ext('GD-14', s.id, 'Read: ' + s.title) + '</p>';
  }
  $('#sym').insertAdjacentHTML('beforeend', SYM.rows.map(function (r, i) {
    return '<button type="button" class="sym-btn" role="tab" id="st-' + i + '" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '" aria-controls="sym-d" data-sym="' + i + '">' + esc(r[0]) + icon('arrow-right') + '</button>';
  }).join(''));
  $('.prob').insertAdjacentHTML('beforeend', '<div class="sym-acc">' + SYM.rows.map(function (r, i) {
    return '<div class="acc-item"><button type="button" class="acc-btn" aria-expanded="false" aria-controls="acc-' + i + '">' + esc(r[0]) + icon('caret-down') + '</button><div class="acc-panel" id="acc-' + i + '" hidden>' + symDetail(r) + '</div></div>';
  }).join('') + '</div>');
  var symI = 0;
  function setSym(i, focus) {
    symI = i; var r = SYM.rows[i];
    $$('[data-sym]').forEach(function (b) { var on = +b.getAttribute('data-sym') === i; b.setAttribute('aria-selected', String(on)); b.tabIndex = on ? 0 : -1; if (on && focus) { b.focus(); } });
    $('#sym-d').setAttribute('aria-labelledby', 'st-' + i);
    $('#sym-d').innerHTML = '<h3>' + esc(r[0]) + '</h3>' + symDetail(r);
    placePill($('#sym'), $('#st-' + i));
  }
  $('#sym').addEventListener('keydown', function (e) {
    var d = { ArrowDown: 1, ArrowUp: -1 }[e.key]; if (!d) { return; }
    e.preventDefault(); setSym((symI + d + SYM.rows.length) % SYM.rows.length, true);
  });

  /* ---------- groomers: one decision, four steps ---------- */
  function tableHTML(t) {
    var cols = t.head.slice(1), first = t.head[0];
    var twoCol = !first;
    return '<table class="t stack"><thead><tr><th>' + esc(first || '') + '</th>' + cols.map(function (h) { return '<th scope="col">' + esc(h) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      t.rows.map(function (r) { return '<tr><th scope="row">' + esc(r[0]) + '</th>' + r.slice(1).map(function (c, i) { return '<td data-col="' + esc(cols[i]) + '">' + esc(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
  }
  var cost = BY['GD-16'], choose = BY['GD-15'];
  var STEPS = [
    { title: 'Do it yourself, or hand it over?', body: function () { var t = tableAt('GD-06', 'what-to-trim-at-home-and-what-to-leave'); return '<p class="lede">What owners can usually do at home, and what is best left to a groomer or vet.</p><div class="split">' + [0, 1].map(function (c) { return '<div><h4>' + esc(t.head[c]) + '</h4><ul class="dots">' + t.rows.map(function (r) { return '<li>' + esc(r[c]) + '</li>'; }).join('') + '</ul></div>'; }).join('') + '</div><p class="cmp-src">From ' + ext('GD-06', 'what-to-trim-at-home-and-what-to-leave', 'Trimming and haircuts at home') + '. See also ' + ext('GD-16', 'home-grooming-vs-professional-grooming', 'home or professional, compared') + '.</p>'; } },
    { title: 'Where to take your dog', body: function () { return '<div class="table-scroll">' + tableHTML(tableAt('GD-15', 'salon-mobile-self-wash-or-home-visit')) + '</div><p class="cmp-src">From ' + ext('GD-15', 'salon-mobile-self-wash-or-home-visit', 'Choosing a dog groomer') + '.</p>'; } },
    { title: 'What it costs', body: function () {
        var sh = cost.short; /* GD-16 short answer: salon, mobile, self-wash, what changes the price, caveat */
        var cards = [
          { name: 'Salon full groom', range: '$55–$200', note: 'Small to extra-large dog, before tax, in the salons we checked.', extra: 'A national chain advertises a bath and haircut from $38. That’s a starting price, not a typical bill.' },
          { name: 'Mobile groomer', range: '$90–$300+', note: 'Full grooms listed by the mobile groomers we checked.' },
          { name: 'Self-service wash', range: '$15–$20', note: 'A session, using the business’s tub and equipment.' }
        ];
        return '<p class="lede">US prices, checked October 5, 2026.</p><div class="price-cards">' + cards.map(function (c) {
          return '<div class="price"><p class="price-name">' + esc(c.name) + '</p><p class="price-range">' + esc(c.range) + '</p><p class="price-note">' + esc(c.note) + '</p>' + (c.extra ? '<p class="price-extra">' + esc(c.extra) + '</p>' : '') + '</div>';
        }).join('') + '</div><p><b>What changes the price:</b> ' + esc(sh[3].replace(/^What changes the price:\s*/, '')) + '</p><p class="price-caveat">' + esc(sh[4]) + '</p>' +
        '<p class="cmp-src">From ' + ext('GD-16', 'typical-grooming-prices', 'What dog grooming costs') + ', where every price links to its source. ' + ext('GD-16', 'ways-to-reduce-the-cost-safely', 'Ways to reduce the cost safely') + '.</p>'; } },
    { title: 'How to choose the groomer', body: function () { return '<ol class="nums">' + choose.short.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ol><p class="cmp-src">From ' + ext('GD-15', 'how-to-choose-a-groomer', 'How to choose a groomer') + '. ' + ext('GD-15', 'warning-signs', 'Warning signs') + '.</p>'; } }
  ];
  $('#pro-steps').insertAdjacentHTML('beforeend', STEPS.map(function (st, i) {
    return '<button type="button" class="step" role="tab" id="ps-' + i + '" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '" aria-controls="pro-panel" data-step="' + i + '"><span class="step-n">' + (i + 1) + '</span>' + esc(st.title) + '</button>';
  }).join(''));
  var stepI = 0;
  function setStep(i, focus) {
    var dir = i - stepI; stepI = i;
    $$('[data-step]').forEach(function (b) { var on = +b.getAttribute('data-step') === i; b.setAttribute('aria-selected', String(on)); b.tabIndex = on ? 0 : -1; if (on && focus) { b.focus(); } });
    var pnl = $('#pro-panel'); pnl.setAttribute('aria-labelledby', 'ps-' + i);
    pnl.innerHTML = '<h3>' + (i + 1) + '. ' + esc(STEPS[i].title) + '</h3>' + STEPS[i].body();
    if (dir && !reduced) { pnl.style.setProperty('--dx', (dir > 0 ? 8 : -8) + 'px'); pnl.classList.remove('panel-in'); void pnl.offsetWidth; pnl.classList.add('panel-in'); }
    placePill($('#pro-steps'), $('#ps-' + i));
  }
  $('#pro-steps').addEventListener('keydown', function (e) {
    var d = { ArrowDown: 1, ArrowUp: -1, ArrowRight: 1, ArrowLeft: -1 }[e.key]; if (!d) { return; }
    e.preventDefault(); setStep((stepI + d + STEPS.length) % STEPS.length, true);
  });
  var gp = photoCredit['lead-groomer'] || {};
  $('#pro-credit').textContent = 'Photo: ' + (gp.credit || '') + ' / Pexels';
  $('.pro-photo img').alt = gp.alt || '';

  /* ---------- footer: the live footer's links ---------- */
  var fl = function (list) { return list.map(function (x) { return '<li><a href="' + href(x[0]) + '"' + TGT + '>' + esc(x[1]) + '</a></li>'; }).join(''); };
  if (!$('#foot-guides').children.length) $('#foot-guides').innerHTML = fl([['GD-01', 'Full routine'], ['GD-03', 'Coat types'], ['GD-02', 'Schedule'], ['GD-05', 'Brushing'], ['GD-04', 'Bathing'], ['GD-07', 'Nails'], ['GD-08', 'Ears'], ['GD-09', 'Teeth'], ['GD-06', 'Haircuts & trimming']]);
  if (!$('#foot-dog').children.length) $('#foot-dog').innerHTML = fl([['GD-11', 'Puppy grooming'], ['GD-13', 'Senior dogs'], ['GD-12', 'Anxious dogs']]);
  if (!$('#foot-help').children.length) $('#foot-help').innerHTML = fl([['GD-14', 'Problems'], ['GD-10', 'Tools'], ['GD-15', 'Choosing a groomer'], ['GD-16', 'Grooming cost'], ['GD-17', 'Glossary']]);
  if (!$('#foot-about').children.length) $('#foot-about').innerHTML = fl([['GD-18', 'About'], ['GD-19', 'Editorial & sourcing policy'], ['GD-20', 'Contact & corrections'], ['GD-21', 'Privacy policy']]);

  /* ---------- reading slip: right sheet on desktop, bottom drawer on phones ---------- */
  var slip = $('#slip'), scrim = $('#scrim'), lastFocus = null;
  function slipHTML(pid, opt) {
    var p = BY[pid], g = GROUP[pid] || { name: '', c: 'var(--muted)' }, secs = p.sections.filter(function (s) { return s.id !== 'common-questions'; });
    var f = opt.faq != null ? p.faqs[opt.faq] : null;
    var short = p.short && p.short.length ? (p.lead ? '<p>' + esc(p.lead) + '</p>' : '') + (p.short.length > 1 ? '<' + (p.ordered ? 'ol' : 'ul class="dots"') + '>' + p.short.slice(0, 6).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</' + (p.ordered ? 'ol' : 'ul') + '>' : '<p>' + esc(p.short[0]) + '</p>') : '<p>' + esc(p.meta) + '</p>';
    var next = (p.links || []).map(function (u) { return PAGES.filter(function (x) { return x.url === u; })[0]; }).filter(function (x) { return x && /^GD-(0[1-9]|1[0-7])$/.test(x.pid); }).slice(0, 4);
    return '<p class="slip-chapter" style="--c:' + g.c + '">' + esc(g.name) + '</p><h2 id="slip-title">' + esc(p.h1) + '</h2>' +
      (f ? '<div class="slip-faq"><b>' + esc(f.q) + '</b><p>' + esc(f.a) + '</p></div>' : '') +
      '<div><h3>' + (p.short ? 'The short answer, as published' : 'What this page covers') + '</h3>' + short + '</div>' +
      '<div><h3>In this guide</h3><div class="slip-secs">' + secs.map(function (s) { return '<a class="' + (s.id === opt.sec ? 'hit' : '') + '" href="' + href(pid, s.id) + '"' + TGT + '>' + esc(s.title) + '</a>'; }).join('') + '</div></div>' +
      (next.length ? '<div><h3>Readers go next</h3><div class="slip-next">' + next.map(function (x) { return '<button type="button" class="chip" data-open="' + x.pid + '">' + esc(x.crumb || x.h1) + '</button>'; }).join('') + '</div></div>' : '') +
      '<a class="btn" href="' + href(pid, opt.sec) + '"' + TGT + '>Open the guide ' + icon('arrow-up-right') + '</a>';
  }
  function openSlip(pid, opt) {
    hideResults();
    var wasOpen = !slip.hidden;
    if (!wasOpen) { lastFocus = document.activeElement; }
    $('#slip-body').innerHTML = slipHTML(pid, opt || {}); $('#slip-body').scrollTop = 0;
    if (!wasOpen) {
      slip.hidden = false; scrim.hidden = false; document.body.style.overflow = 'hidden';
      if (!reduced) { slip.classList.add('from'); scrim.classList.add('from'); void slip.offsetWidth; slip.classList.remove('from'); scrim.classList.remove('from'); }
    }
    $('#slip-close').focus();
  }
  function closeSlip() {
    if (slip.hidden) { return; }
    var done = function () { slip.hidden = true; scrim.hidden = true; slip.classList.remove('from'); scrim.classList.remove('from'); slip.style.transform = ''; document.body.style.overflow = ''; if (lastFocus && lastFocus.focus) { quietFocus = lastFocus === input; lastFocus.focus({ preventScroll: true }); } };
    if (reduced) { done(); return; }
    slip.style.transform = ''; slip.classList.add('from'); scrim.classList.add('from'); setTimeout(done, 280);
  }
  $('#slip-close').addEventListener('click', closeSlip);
  scrim.addEventListener('click', closeSlip);
  /* drag the drawer down to close it (phones) */
  (function () {
    var bar = $('.slip-bar'), y0 = null, dy = 0;
    bar.addEventListener('pointerdown', function (e) { if (!phone() || e.target.closest('button')) { return; } y0 = e.clientY; dy = 0; slip.style.transition = 'none'; bar.setPointerCapture(e.pointerId); });
    bar.addEventListener('pointermove', function (e) { if (y0 == null) { return; } dy = Math.max(0, e.clientY - y0); slip.style.transform = 'translateY(' + dy + 'px)'; });
    var end = function () { if (y0 == null) { return; } y0 = null; slip.style.transition = ''; if (dy > 90) { closeSlip(); } else { slip.style.transform = ''; } };
    bar.addEventListener('pointerup', end); bar.addEventListener('pointercancel', end);
  })();

  /* ---------- one click handler ---------- */
  document.addEventListener('click', function (e) {
    var el;
    if ((el = e.target.closest('[data-try]'))) { input.value = el.getAttribute('data-try'); showResults(input.value); input.focus(); return; }
    if ((el = e.target.closest('[data-open]'))) { var fq = el.getAttribute('data-faq'); openSlip(el.getAttribute('data-open'), { sec: el.getAttribute('data-sec'), faq: fq == null ? null : +fq }); return; }
    if ((el = e.target.closest('[data-coat]'))) { setCoat(el.getAttribute('data-coat')); return; }
    if ((el = e.target.closest('.tool'))) { openTool(el.getAttribute('data-tool'), el); return; }
    if ((el = e.target.closest('[data-pcoat]'))) { setPlateCoat(el.getAttribute('data-pcoat')); return; }
    if ((el = e.target.closest('.tool-ln'))) { openTool(el.getAttribute('data-tool'), el); return; }
    if ((el = e.target.closest('[data-cmp-nails]'))) { openNails(el); return; }
    if ((el = e.target.closest('[data-sym]'))) { setSym(+el.getAttribute('data-sym')); return; }
    if ((el = e.target.closest('.acc-btn'))) { var o = el.getAttribute('aria-expanded') !== 'true'; el.setAttribute('aria-expanded', String(o)); $('#' + el.getAttribute('aria-controls')).hidden = !o; return; }
    if ((el = e.target.closest('[data-step]'))) { setStep(+el.getAttribute('data-step')); }
  });

  /* ---------- keyboard: / and Ctrl/Cmd+K to search, Escape to close, focus trap in the slip ---------- */
  document.addEventListener('keydown', function (e) {
    var typing = /INPUT|TEXTAREA/.test(document.activeElement.tagName);
    if ((e.key === '/' && !typing) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) { e.preventDefault(); closeSlip(); focusSearch(); return; }
    if (e.key === 'Escape') { if (!td.hidden) { closeDialog(); } else if (!slip.hidden) { closeSlip(); } else { shell(); } }
    var trap = !td.hidden ? '#tool-dialog' : (!slip.hidden ? '#slip' : null);
    if (e.key === 'Tab' && trap) {
      var f = $$(trap + ' a, ' + trap + ' button'), first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------- start ---------- */
  renderSheet(0); setPlateCoat('all'); setSym(0); setStep(0);
  var pills = function () { placePill($('#coat-seg'), $('[data-coat="' + state.coat + '"]'), true); placePill($('#sym'), $('#st-' + symI), true); placePill($('#pro-steps'), $('#ps-' + stepI), true); placePill($('#plate-seg'), $('[data-pcoat="' + state.plateCoat + '"]'), true); };
  pills(); (document.fonts ? document.fonts.ready : Promise.resolve()).then(pills);
  addEventListener('resize', pills);
})();
