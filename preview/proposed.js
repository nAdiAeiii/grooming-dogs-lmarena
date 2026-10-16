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
})();
