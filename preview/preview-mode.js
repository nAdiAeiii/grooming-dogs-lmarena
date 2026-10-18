/* Runs in <head>, before first paint: switch the proposed stylesheet on when the viewer
   chose "Proposed" (remembered per browser), so the page never flashes the other version. */
(function () {
	var on = false;
	try { on = localStorage.getItem('gd-preview-mode') === 'proposed'; } catch (e) {}
	if (location.hash === '#proposed') { on = true; }
	var link = document.getElementById('pv-proposed-css');
	if (link) { link.disabled = !on; }
	document.documentElement.classList.toggle('pv-proposed', on);
})();
