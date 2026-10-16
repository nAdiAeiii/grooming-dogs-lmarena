/* Grooming Dogs home page: path draw + icon micro-animations (owner-approved 2026-10-06).
   Progressive enhancement: everything is visible and usable without this script. Nothing runs under
   prefers-reduced-motion. No storage, cookies or network requests. */
(function () {
	'use strict';
	if (!window.matchMedia || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { return; }
	document.body.classList.add('gd-anim');
	var io = 'IntersectionObserver' in window;
	var play = function (el) {
		el.classList.remove('is-playing');
		void el.offsetWidth;
		el.classList.add('is-playing');
	};

	var path = document.querySelector('.gd-path');
	if (path) {
		if (io) {
			var po = new IntersectionObserver(function (es) {
				es.forEach(function (e) { if (e.isIntersecting) { path.classList.add('is-in'); po.disconnect(); } });
			}, { threshold: 0.35 });
			po.observe(path);
		} else { path.classList.add('is-in'); }
	}

	var cards = Array.prototype.slice.call(document.querySelectorAll('.gd-icard, .gd-tile, .gd-trust li'));
	cards.forEach(function (c) {
		c.addEventListener('mouseenter', function () { play(c); });
		c.addEventListener('focusin', function () { play(c); });
	});
	if (io) {
		var go = new IntersectionObserver(function (es) {
			es.forEach(function (e) {
				if (!e.isIntersecting) { return; }
				var kids = e.target.querySelectorAll('.gd-icard, .gd-tile, li');
				Array.prototype.forEach.call(kids, function (k, i) { setTimeout(function () { play(k); }, i * 140); });
				go.unobserve(e.target);
			});
		}, { threshold: 0.4 });
		Array.prototype.forEach.call(document.querySelectorAll('.gd-anim-group'), function (g) { go.observe(g); });
	}
})();
