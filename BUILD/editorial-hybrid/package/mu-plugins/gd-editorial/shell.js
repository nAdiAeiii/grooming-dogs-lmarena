/* Grooming Dogs site shell: header mega menu, phone menu and the search shortcut. Loads on every page;
   the homepage script (app.js) adds the search itself. Works on server-rendered header markup. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var mast = $('#mast');
  if (!mast) { return; }
  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ind = document.createElement('span'); ind.className = 'nav-ind'; ind.setAttribute('aria-hidden', 'true'); mast.appendChild(ind);

  function moveInd(btn) {
    if (!btn) { ind.classList.remove('on'); return; }
    var r = btn.getBoundingClientRect(), n = mast.getBoundingClientRect();
    ind.style.width = (r.width - 24) + 'px'; ind.style.transform = 'translateX(' + (r.left - n.left + 12) + 'px)'; ind.classList.add('on');
  }
  function closeMenus(except) {
    $$('.nav-btn[aria-expanded="true"]').forEach(function (b) { if (b !== except) { b.setAttribute('aria-expanded', 'false'); $('#' + b.getAttribute('aria-controls')).hidden = true; } });
    if (!except) { mast.classList.remove('menu-on'); moveInd(null); }
  }
  function openMenu(b) {
    var p = $('#' + b.getAttribute('aria-controls')), was = mast.classList.contains('menu-on');
    closeMenus(b); b.setAttribute('aria-expanded', 'true'); p.hidden = false; mast.classList.add('menu-on'); moveInd(b);
    /* animate only the first open; switching between menus is instant */
    p.classList.remove('enter'); if (!was && !reduced) { void p.offsetWidth; p.classList.add('enter'); }
  }
  function closeAll() { closeMenus(null); mast.classList.remove('nav-open'); $('#mast-menu').setAttribute('aria-expanded', 'false'); }
  window.GDShell = { close: closeAll };

  var list = $('#nav-list');
  list.addEventListener('click', function (e) {
    var b = e.target.closest('.nav-btn'); if (!b) { return; }
    if (b.getAttribute('aria-expanded') === 'true') { closeMenus(null); } else { openMenu(b); }
  });
  var fine = matchMedia('(hover: hover) and (pointer: fine) and (min-width: 961px)'), hoverT;
  list.addEventListener('mouseover', function (e) {
    var b = e.target.closest('.nav-btn'); if (!b || !fine.matches) { return; }
    clearTimeout(hoverT); hoverT = setTimeout(function () { if (b.getAttribute('aria-expanded') !== 'true') { openMenu(b); } }, mast.classList.contains('menu-on') ? 0 : 90);
  });
  mast.addEventListener('mouseleave', function () { if (fine.matches) { clearTimeout(hoverT); hoverT = setTimeout(function () { closeMenus(null); }, 180); } });
  mast.addEventListener('mouseenter', function () { clearTimeout(hoverT); });
  list.addEventListener('keydown', function (e) {
    var b = e.target.closest('.nav-btn');
    if (b && e.key === 'ArrowDown') { e.preventDefault(); openMenu(b); $('a', $('#' + b.getAttribute('aria-controls'))).focus(); }
    var panel = e.target.closest('.nav-panel');
    if (panel && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      e.preventDefault(); var ls = $$('a', panel), i = ls.indexOf(document.activeElement);
      ls[(i + (e.key === 'ArrowDown' ? 1 : ls.length - 1)) % ls.length].focus();
    }
  });
  $('#mast-menu').addEventListener('click', function () { var o = !mast.classList.contains('nav-open'); mast.classList.toggle('nav-open', o); this.setAttribute('aria-expanded', String(o)); });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-item')) { closeMenus(null); }
    if (!e.target.closest('.mast')) { mast.classList.remove('nav-open'); $('#mast-menu').setAttribute('aria-expanded', 'false'); }
  });

  /* Pages without the homepage search send the search buttons and the / shortcut to it. */
  if ($('#ask-input')) { return; }
  var toSearch = function () { location.href = '/#search'; };
  $$('#mast-search, [data-search]').forEach(function (b) { b.addEventListener('click', function (e) { e.preventDefault(); toSearch(); }); });
  document.addEventListener('keydown', function (e) {
    var typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) || document.activeElement.isContentEditable;
    if (e.key === '/' && !typing) { e.preventDefault(); toSearch(); }
    if (e.key === 'Escape') { closeAll(); }
  });
})();
