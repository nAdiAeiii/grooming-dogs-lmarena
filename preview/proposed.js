/* Proposed behaviour changes. Runs only in "Proposed" mode.
   Shipping version: in BUILD/gd-home/src/mount.jsx start with useState(true) (paused) and
   intro "none", then rebuild dist/gd-carousel.js; this preview reaches the same resting state
   by pressing the component's own Pause button once it has mounted. */
(function () {
	'use strict';
	if (!document.documentElement.classList.contains('pv-proposed')) { return; }

	// 3. DS-OD-04: the situation carousel no longer moves until the reader presses "Play motion".
	var tries = 0;
	var timer = setInterval(function () {
		var btn = document.querySelector('.gd-cc__pause');
		if (btn) {
			if (btn.getAttribute('aria-pressed') !== 'true') { btn.click(); }
			clearInterval(timer);
		} else if (++tries > 50) {
			clearInterval(timer);
		}
	}, 100);

	// 11. Short answer first: move the short-answer box above the lead photo of the introduction, and
	//     the phone "On this page" list (added later by gd-guide.js) right after it. In WordPress this is
	//     the same move in Elementor: drag the "Short answer" container above the image widget (GD-01 to GD-16).
	if (document.body.classList.contains('gd-guide')) {
		var box = document.querySelector('.gd-box--short'), img = document.querySelector('.elementor-widget-image');
		if (box && img && (img.compareDocumentPosition(box) & 4)) { img.parentNode.insertBefore(box, img); box.classList.add('pv-moved'); }
		var n = 0, t2 = setInterval(function () {
			var tocM = document.querySelector('.gd-toc-m');
			if (tocM && box && box.classList.contains('pv-moved')) { box.parentNode.insertBefore(tocM, box.nextSibling); tocM.classList.add('pv-moved'); clearInterval(t2); }
			else if (++n > 60) { clearInterval(t2); }
		}, 50);
		// 6. New favicon in proposed mode (the comb, prototype/favicon/rfg).
		var ic = document.querySelector('link[rel="icon"]') || document.head.appendChild(Object.assign(document.createElement('link'), { rel: 'icon' }));
		ic.type = 'image/svg+xml'; ic.href = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="112" fill="#3A2318"/><rect x="80" y="112" width="352" height="112" rx="40" fill="#E3A33B"/><rect x="80" y="200" width="64" height="216" rx="32" fill="#E3A33B"/><rect x="176" y="200" width="64" height="216" rx="32" fill="#E3A33B"/><rect x="272" y="200" width="64" height="216" rx="32" fill="#E3A33B"/><rect x="368" y="200" width="64" height="216" rx="32" fill="#E3A33B"/></svg>');
	}
})();
