/* Preview-only behaviour that Elementor, HFE and the live server would otherwise provide:
   header menu, accordion toggles, and the Current / Proposed toolbar. */
(function () {
	'use strict';

	// Header: desktop submenus (click or keyboard) and the mobile/tablet panel.
	var burger = document.querySelector('.pv-burger');
	var menu = document.getElementById('pv-menu');
	if (burger && menu) {
		burger.addEventListener('click', function () {
			var open = menu.classList.toggle('is-open');
			burger.setAttribute('aria-expanded', String(open));
		});
	}
	var closeAll = function (except) {
		document.querySelectorAll('.gd-nav li.is-open').forEach(function (li) {
			if (li !== except) {
				li.classList.remove('is-open');
				li.querySelector('.pv-sub-toggle').setAttribute('aria-expanded', 'false');
			}
		});
	};
	document.querySelectorAll('.pv-sub-toggle').forEach(function (btn) {
		btn.addEventListener('click', function (e) {
			e.stopPropagation();
			var li = btn.parentNode;
			closeAll(li);
			var open = li.classList.toggle('is-open');
			btn.setAttribute('aria-expanded', String(open));
		});
	});
	document.addEventListener('click', function () { closeAll(null); });
	document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeAll(null); } });

	// Accordion: Elementor's toggle behaviour.
	document.querySelectorAll('.elementor-tab-title').forEach(function (t) {
		var toggle = function () {
			var panel = document.getElementById(t.getAttribute('aria-controls'));
			var open = t.getAttribute('aria-expanded') !== 'true';
			t.setAttribute('aria-expanded', String(open));
			t.classList.toggle('elementor-active', open);
			if (panel) { panel.hidden = !open; }
		};
		t.addEventListener('click', toggle);
		t.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
	});

	// "Back to top" link in the footer.
	document.querySelectorAll('.gd-totop').forEach(function (a) {
		a.addEventListener('click', function (e) { e.preventDefault(); window.scrollTo({ top: 0 }); });
	});

	// Toolbar: compare the live design with the proposed changes. Switching reloads the page,
	// so scripts that build the page (guide enhancements, proposed.js) run once in a clean state.
	var proposed = document.documentElement.classList.contains('pv-proposed');
	var bar = document.createElement('div');
	bar.className = 'pv-bar';
	bar.setAttribute('role', 'group');
	bar.setAttribute('aria-label', 'Preview version');
	bar.innerHTML = '<a href="../hub.html">All pages</a>' +
		'<button type="button" data-mode="current" aria-pressed="' + !proposed + '">Live design</button>' +
		'<button type="button" data-mode="proposed" aria-pressed="' + proposed + '">Proposed</button>';
	bar.addEventListener('click', function (e) {
		var b = e.target.closest('button[data-mode]');
		if (!b || b.getAttribute('aria-pressed') === 'true') { return; }
		try { localStorage.setItem('gd-preview-mode', b.getAttribute('data-mode')); } catch (err) {}
		location.reload();
	});
	document.body.appendChild(bar);
})();
