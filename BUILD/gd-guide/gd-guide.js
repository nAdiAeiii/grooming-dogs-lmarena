/* Grooming Dogs: long-form guide enhancements (owner-approved ideas 2, 4, 6, 7, 8; roll-out 2026-10-05).
   Progressive enhancement: without this script pages keep their plain links ([n] → #sn).
   Source features switch themselves off on pages without a source list. No storage, cookies or network requests. */
(function () {
	'use strict';
	var root = document.querySelector('.elementor[data-elementor-type="wp-page"]');
	if (!root) { return; }

	var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };
	var el = function (tag, cls, text) { var e = document.createElement(tag); if (cls) { e.className = cls; } if (text) { e.textContent = text; } return e; };

	/* ---------- sections and their H2s ---------- */
	var tops = $$(':scope > .e-con', root);
	var sections = tops.map(function (sec) {
		var w = sec.querySelector('.elementor-widget-heading[id]');
		var h2 = w && w.querySelector('h2');
		return { el: sec, inner: sec.querySelector(':scope > .e-con-inner') || sec, id: h2 ? w.id : null, h2: h2, title: h2 ? h2.textContent.trim() : null };
	});
	var withH2 = sections.filter(function (s) { return s.h2; });
	function sectionOf(node) {
		for (var i = 0; i < sections.length; i++) { if (sections[i].el.contains(node)) { return sections[i]; } }
		return null;
	}

	/* ---------- sources (all published source lists on the page; text read, never rewritten) ---------- */
	var lists = $$('.gd-sources', root);
	var sources = {};
	lists.forEach(function (list) {
		$$('li[id]', list).forEach(function (li) {
			var label = li.querySelector('.gd-src-label');
			var text = li.textContent.replace(label ? label.textContent : '', '').trim();
			sources[li.id] = { li: li, label: label ? label.textContent.trim() : '', short: text.split(':')[0].trim(), html: li.innerHTML };
		});
	});
	var srcCount = Object.keys(sources).length;
	var inLists = function (n) { return lists.some(function (l) { return l.contains(n); }); };
	var cites = srcCount ? $$('sup > a[href^="#"]', root).filter(function (a) { return !inLists(a) && sources[a.getAttribute('href').slice(1)]; }) : [];

	if (cites.length) {
		cites.forEach(function (a, i) {
			a.id = 'gd-c' + (i + 1);
			a.classList.add('gd-cite');
			a.setAttribute('role', 'button');
			a.setAttribute('aria-haspopup', 'dialog');
			a.setAttribute('aria-expanded', 'false');
			a.setAttribute('aria-controls', 'gd-pop');
			a._sec = sectionOf(a);
		});

		/* ---------- 6. sources list: where each source is cited (back-links) ---------- */
		Object.keys(sources).forEach(function (sid) {
			var seen = [], links = [];
			cites.forEach(function (a) {
				if (a.getAttribute('href') !== '#' + sid) { return; }
				var key = a._sec && a._sec.id ? a._sec.id : 'intro';
				if (seen.indexOf(key) !== -1) { return; }
				seen.push(key);
				var l = el('a', null, a._sec && a._sec.title ? a._sec.title : 'Introduction');
				l.href = '#' + a.id;
				l.setAttribute('data-gd-jump', a.id);
				links.push(l);
			});
			if (!links.length) { return; }
			var span = el('span', 'gd-cited', 'Cited in: ');
			links.forEach(function (l, i) { if (i) { span.appendChild(document.createTextNode(', ')); } span.appendChild(l); });
			sources[sid].li.appendChild(span);
		});

		/* ---------- 6. section source line (only where the section cites something) ---------- */
		withH2.forEach(function (s) {
			var ids = [];
			cites.forEach(function (a) { var sid = a.getAttribute('href').slice(1); if (a._sec === s && ids.indexOf(sid) === -1) { ids.push(sid); } });
			if (!ids.length) { return; }
			var order = Object.keys(sources);
			ids.sort(function (x, y) { return order.indexOf(x) - order.indexOf(y); });
			var p = el('p', 'gd-secsrc', 'Sources for this section: ');
			ids.forEach(function (sid, i) {
				if (i) { p.appendChild(document.createTextNode('; ')); }
				var l = el('a', null, sources[sid].label + ' ' + sources[sid].short);
				l.href = '#' + sid;
				p.appendChild(l);
			});
			s.inner.appendChild(p);
		});

		/* ---------- 4. source preview ---------- */
		var pop = el('span', 'gd-pop');
		pop.id = 'gd-pop';
		pop.setAttribute('role', 'dialog');
		pop.hidden = true;
		var openA = null;

		var place = function (a) {
			var w = pop.offsetWidth, h = pop.offsetHeight, r = a.getBoundingClientRect();
			var vw = document.documentElement.clientWidth;
			var x = Math.max(16, Math.min(r.left + r.width / 2 - w / 2, vw - w - 16));
			var y = r.bottom + 8;
			if (r.bottom + h + 16 > window.innerHeight && r.top > h + 24) { y = r.top - h - 8; }
			var op = pop.offsetParent;
			if (!op || op === document.body || op === document.documentElement) {
				pop.style.left = (x + window.scrollX) + 'px'; pop.style.top = (y + window.scrollY) + 'px';
			} else {
				var o = op.getBoundingClientRect();
				pop.style.left = (x - o.left - op.clientLeft + op.scrollLeft) + 'px';
				pop.style.top = (y - o.top - op.clientTop + op.scrollTop) + 'px';
			}
		};
		var closePop = function (refocus) {
			if (!openA) { return; }
			var a = openA;
			pop.hidden = true;
			a.setAttribute('aria-expanded', 'false');
			openA = null;
			if (refocus) { a.focus(); }
		};
		var openPop = function (a) {
			var sid = a.getAttribute('href').slice(1), s = sources[sid];
			if (openA && openA !== a) { closePop(false); }
			pop.innerHTML = '';
			var text = el('span', 'gd-pop__text');
			text.innerHTML = s.html; /* the source entry exactly as published */
			$$('.gd-cited', text).forEach(function (n) { n.remove(); });
			$$('a', text).forEach(function (l) { l.setAttribute('rel', 'noopener'); });
			var actions = el('span', 'gd-pop__actions');
			var all = el('a', null, 'See all sources');
			all.href = '#' + sid;
			all.addEventListener('click', function () { closePop(false); });
			actions.appendChild(all);
			var close = el('button', 'gd-pop__close', '×');
			close.type = 'button';
			close.setAttribute('aria-label', 'Close source');
			close.addEventListener('click', function () { closePop(true); });
			pop.setAttribute('aria-label', 'Source ' + s.label.replace(/[\[\]]/g, ''));
			pop.appendChild(text); pop.appendChild(actions); pop.appendChild(close);
			a.parentNode.insertBefore(pop, a.nextSibling); /* right after the marker (a <sup> can hold several): natural Tab order */
			pop.hidden = false;
			place(a);
			a.setAttribute('aria-expanded', 'true');
			openA = a;
		};
		cites.forEach(function (a) {
			a.addEventListener('click', function (e) { e.preventDefault(); if (openA === a) { closePop(false); } else { openPop(a); } });
			a.addEventListener('keydown', function (e) { if (e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); a.click(); } });
		});
		document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && openA) { closePop(true); } });
		document.addEventListener('click', function (e) { if (openA && !pop.contains(e.target) && !e.target.closest('.gd-cite')) { closePop(false); } });
		document.addEventListener('focusin', function (e) { if (openA && !pop.contains(e.target) && e.target !== openA) { closePop(false); } });
		window.addEventListener('resize', function () { if (openA) { place(openA); } });

		/* back-link jump: open a closed FAQ answer first, then bring the marker into view */
		var jumpTo = function (a) {
			var tab = a.closest('.elementor-tab-content');
			var go = function () {
				a.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' });
				a.focus({ preventScroll: true });
				a.classList.add('is-flash');
				setTimeout(function () { a.classList.remove('is-flash'); }, 1600);
			};
			if (tab && getComputedStyle(tab).display === 'none') {
				var title = root.querySelector('.elementor-tab-title[aria-controls="' + tab.id + '"]');
				if (title) { title.click(); setTimeout(go, reduce ? 0 : 450); return; }
			}
			go();
		};
		lists.forEach(function (list) {
			list.addEventListener('click', function (e) {
				var l = e.target.closest('[data-gd-jump]');
				if (!l) { return; }
				e.preventDefault();
				jumpTo(document.getElementById(l.getAttribute('data-gd-jump')));
			});
		});
	}

	/* ---------- Sources list: collapsible at the end of the page (owner decision 2026-10-06) ----------
	   Without JavaScript the list stays open as published. The label and everything after it in the same
	   block move into <details id="sources">; any link to a source or to #sources opens it first. */
	var srcBox = null;
	var label = srcCount && document.getElementById('sources');
	if (label && label.classList.contains('gd-label')) {
		srcBox = el('details', 'gd-srcbox');
		var summary = el('summary', null, label.textContent.trim() + ' (' + srcCount + ')');
		srcBox.appendChild(summary);
		var body = el('div', 'gd-srcbox__body');
		while (label.nextSibling) { body.appendChild(label.nextSibling); }
		srcBox.appendChild(body);
		label.parentNode.replaceChild(srcBox, label);
		srcBox.id = 'sources';
		var opens = function (href) { return href === '#sources' || (href && href.charAt(0) === '#' && !!sources[href.slice(1)]); };
		document.addEventListener('click', function (e) {
			var a = e.target.closest('a[href^="#"]');
			/* markers open their preview card instead; everything else that points at a source opens the list */
			if (a && !a.classList.contains('gd-cite') && !srcBox.contains(a) && opens(a.getAttribute('href'))) { srcBox.open = true; }
		}, true);
		var fromHash = function () {
			if (opens(location.hash)) {
				srcBox.open = true;
				var t = document.getElementById(location.hash.slice(1));
				if (t) { t.scrollIntoView({ block: 'start' }); }
			}
		};
		window.addEventListener('hashchange', fromHash);
		fromHash();
	}

	/* ---------- 2. contents (only for pages with at least three sections) ---------- */
	if (withH2.length >= 3) {
		var items = withH2.map(function (s) { return { id: s.id, title: s.title }; });
		if (srcCount && document.getElementById('sources')) { items.push({ id: 'sources', title: 'Sources' }); }
		var tocList = function () {
			var ol = el('ol');
			items.forEach(function (it) { var li = el('li'), a = el('a', null, it.title); a.href = '#' + it.id; a.setAttribute('data-id', it.id); li.appendChild(a); ol.appendChild(li); });
			return ol;
		};
		var toc = el('nav', 'gd-toc');
		toc.setAttribute('aria-label', 'On this page');
		var tocInner = el('div', 'gd-toc__inner');
		var tocLabel = el('p', 'gd-toc__label', 'On this page');
		tocLabel.setAttribute('aria-hidden', 'true');
		tocInner.appendChild(tocLabel); tocInner.appendChild(tocList()); toc.appendChild(tocInner);
		root.insertBefore(toc, tops[1] || null);

		/* Small screens: a collapsed list under the introduction, unless the page already has its own
		   jump list to these sections there (GD-17) — never duplicate existing navigation. */
		var ownJumps = $$('a[href^="#"]', sections[0].el).filter(function (a) {
			return withH2.some(function (s) { return a.getAttribute('href') === '#' + s.id; });
		}).length;
		if (ownJumps < 3) {
			var tocM = el('details', 'gd-toc-m');
			var navM = el('nav'); navM.setAttribute('aria-label', 'On this page');
			navM.appendChild(tocList()); tocM.appendChild(el('summary', null, 'On this page')); tocM.appendChild(navM);
			sections[0].inner.appendChild(tocM);
		}

		var tocLinks = $$('a', toc), current = null;
		var spy = function () {
			var id = null;
			withH2.forEach(function (s) { if (s.el.getBoundingClientRect().top < 140) { id = s.id; } });
			var src = srcCount && document.getElementById('sources');
			if (src && src.getBoundingClientRect().top < 140) { id = 'sources'; }
			if (id === current) { return; }
			current = id;
			tocLinks.forEach(function (a) { if (a.getAttribute('data-id') === id) { a.setAttribute('aria-current', 'location'); } else { a.removeAttribute('aria-current'); } });
		};
		var ticking = false;
		window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(function () { ticking = false; spy(); }); } }, { passive: true });
		spy();
	}

	/* ---------- 7. copy a link to a section (H2s only) ---------- */
	if (withH2.length) {
		var status = el('div', 'gd-status');
		status.setAttribute('role', 'status');
		status.setAttribute('aria-live', 'polite');
		document.body.appendChild(status);
		var statusT;
		var say = function (msg) { status.textContent = msg; clearTimeout(statusT); statusT = setTimeout(function () { status.textContent = ''; }, 2500); };
		var canon = (document.querySelector('link[rel="canonical"]') || {}).href || location.href.split('#')[0];
		withH2.forEach(function (s) {
			var b = el('button', 'gd-anchor', '#');
			b.type = 'button';
			b.setAttribute('aria-label', 'Copy link to section: ' + s.title);
			b.addEventListener('click', function () {
				var url = canon.split('#')[0] + '#' + s.id;
				var fallback = function () { history.replaceState(null, '', '#' + s.id); say('Link to this section is in the address bar'); };
				if (navigator.clipboard && navigator.clipboard.writeText) {
					navigator.clipboard.writeText(url).then(function () { say('Link to this section copied'); }, fallback);
				} else { fallback(); }
			});
			s.h2.parentNode.classList.add('gd-h2wrap');
			s.h2.parentNode.insertBefore(b, s.h2.nextSibling);
		});
	}

	/* ---------- 8. reading information (quiet metadata in the byline; source count only if sources exist) ---------- */
	var byline = $$('p', sections[0].el).filter(function (p) { return /^By Grooming Dogs/.test(p.textContent.trim()); })[0];
	if (byline) {
		var words = 0;
		sections.forEach(function (s) { if (!s.el.classList.contains('gd-band')) { words += s.el.innerText.split(/\s+/).filter(Boolean).length; } });
		var info = el('span', 'gd-readinfo', ' · ' + Math.max(1, Math.round(words / 220)) + ' min read');
		if (srcCount) {
			info.appendChild(document.createTextNode(' · '));
			var sl = el('a', null, srcCount + ' ' + (srcCount === 1 ? 'source' : 'sources'));
			sl.href = '#sources';
			info.appendChild(sl);
		}
		byline.appendChild(info);
	}

	/* ---------- 9. footer: back to top (works without JS as a plain link to the top) ---------- */
	$$('a.gd-totop').forEach(function (a) {
		a.addEventListener('click', function (e) {
			e.preventDefault();
			window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
			var first = document.querySelector('.gd-header a'); /* not the skip link: it would appear for mouse users */
			if (first) { first.focus({ preventScroll: true }); }
		});
	});
})();
