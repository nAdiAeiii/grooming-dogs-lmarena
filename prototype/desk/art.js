/* Drawings made in code: coat swatches (strokes in each coat's typical colours) and tool
   silhouettes (filled shapes in currentColor, so the board can light them). No photographs. */
window.DESK_ART = (function () {
  'use strict';

  // Small deterministic random so a coat always draws the same way.
  function rng(seed) {
    var s = seed >>> 0;
    return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  }
  function f(n) { return Math.round(n * 10) / 10; }

  var COAT_STYLE = {
    smooth: { ground: '#9a6b3f', inks: ['#7d5430', '#b5824f', '#c79a66'], seed: 11 },
    double: { ground: '#d9d4cc', inks: ['#3a3836', '#8e8a84', '#f4f1ec', '#5d5a56'], seed: 23 },
    curly: { ground: '#c98e55', inks: ['#a96f3c', '#e0ad73', '#b87d47'], seed: 37 },
    wire: { ground: '#8b8478', inks: ['#4b4740', '#b4ab9b', '#2f2c28', '#d2c8b6'], seed: 41 },
    silky: { ground: '#56616d', inks: ['#3c4650', '#7f8b97', '#c4a074', '#a7b2bd'], seed: 53 }
  };

  // Each coat is a texture drawn in a 500 x 100 box.
  function coatSVG(id, label) {
    var st = COAT_STYLE[id];
    var r = rng(st.seed);
    var W = 500, H = 100, out = [];
    var pick = function () { return st.inks[Math.floor(r() * st.inks.length)]; };
    var i, x, y;
    if (id === 'smooth') {
      for (i = 0; i < 900; i++) {
        x = r() * W; y = r() * H;
        out.push('<path d="M' + f(x) + ' ' + f(y) + 'l' + f(9 + r() * 6) + ' ' + f(2 + r() * 2) + '" stroke="' + pick() + '" stroke-width="1.6" stroke-linecap="round"/>');
      }
    } else if (id === 'double') {
      for (i = 0; i < 700; i++) {
        x = r() * W; y = r() * H;
        out.push('<path d="M' + f(x) + ' ' + f(y) + 'q4 -3 8 0" stroke="' + st.inks[2] + '" stroke-width="1.8" fill="none" stroke-linecap="round" opacity=".85"/>');
      }
      for (i = 0; i < 420; i++) {
        x = r() * W; y = r() * H;
        out.push('<path d="M' + f(x) + ' ' + f(y) + 'q' + f(10 + r() * 8) + ' ' + f(-6 - r() * 4) + ' ' + f(24 + r() * 10) + ' ' + f(-2 + r() * 4) + '" stroke="' + pick() + '" stroke-width="1.5" fill="none" stroke-linecap="round"/>');
      }
    } else if (id === 'curly') {
      for (i = 0; i < 520; i++) {
        x = r() * W; y = r() * H;
        var rad = 3 + r() * 4;
        out.push('<path d="M' + f(x) + ' ' + f(y) + 'a' + f(rad) + ' ' + f(rad) + ' 0 1 1 ' + f(rad * 1.2) + ' ' + f(rad * 0.9) + '" stroke="' + pick() + '" stroke-width="2.2" fill="none" stroke-linecap="round"/>');
      }
    } else if (id === 'wire') {
      for (i = 0; i < 640; i++) {
        x = r() * W; y = r() * H;
        var a = r() * 3 - 1.5;
        out.push('<path d="M' + f(x) + ' ' + f(y) + 'l' + f(4 + r() * 3) + ' ' + f(-4 + a) + 'l' + f(3 + r() * 3) + ' ' + f(5 + a) + 'l' + f(4 + r() * 2) + ' ' + f(-3) + '" stroke="' + pick() + '" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>');
      }
    } else {
      for (i = 0; i < 140; i++) {
        y = r() * (H + 40) - 20; x = r() * 80 - 60;
        var amp = 6 + r() * 10, len = 220 + r() * 260;
        out.push('<path d="M' + f(x) + ' ' + f(y) + 'c' + f(len * 0.3) + ' ' + f(-amp) + ' ' + f(len * 0.6) + ' ' + f(amp) + ' ' + f(len) + ' ' + f(amp * 0.4) + '" stroke="' + pick() + '" stroke-width="1.4" fill="none" stroke-linecap="round"/>');
      }
    }
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid slice" role="img" aria-label="' + label + '">' +
      '<rect width="' + W + '" height="' + H + '" fill="' + st.ground + '"/>' + out.join('') + '</svg>';
  }

  // Tool silhouettes, drawn on a 240 x 120 board slot, filled with currentColor.
  var T = {
    slicker: '<rect x="36" y="52" width="120" height="16" rx="8"/><rect x="150" y="30" width="58" height="60" rx="10"/><g>' + teethV(154, 30, 8, 6, 3, 7) + '</g>',
    rake: '<rect x="30" y="54" width="132" height="14" rx="7"/><rect x="160" y="30" width="16" height="62" rx="4"/>' + teethH(176, 33, 8, 7, 22),
    comb: '<rect x="24" y="44" width="192" height="16" rx="3"/>' + teethV(30, 60, 24, 30, 3.5, 7.8),
    pin: '<rect x="30" y="54" width="110" height="14" rx="7"/><ellipse cx="176" cy="61" rx="44" ry="34"/>',
    curry: '<ellipse cx="120" cy="60" rx="74" ry="40"/><rect x="60" y="14" width="120" height="14" rx="7"/>',
    bristle: '<rect x="30" y="54" width="104" height="14" rx="7"/><rect x="132" y="36" width="84" height="50" rx="14"/>',
    deshedder: '<rect x="30" y="54" width="112" height="14" rx="7"/><path d="M140 30h20q34 30 0 62h-20z"/><rect x="160" y="26" width="10" height="70" rx="2"/>',
    clipper: '<path d="M40 40q40 -8 84 16l-6 10q-40 -18 -76 -12z"/><path d="M40 82q40 8 84 -16l-6 -10q-40 18 -76 12z"/><path d="M118 52l72 -6q12 6 0 16l-72 4z"/><circle cx="122" cy="61" r="9"/>',
    grinder: '<rect x="40" y="42" width="130" height="38" rx="19"/><rect x="168" y="50" width="22" height="22" rx="3"/><rect x="190" y="44" width="22" height="34" rx="6"/>',
    dryer: '<rect x="60" y="34" width="120" height="44" rx="22"/><rect x="176" y="40" width="28" height="32" rx="4"/><rect x="88" y="74" width="26" height="40" rx="8"/>',
    toothbrush: '<rect x="20" y="56" width="170" height="10" rx="5"/><rect x="186" y="48" width="34" height="14" rx="3"/>',
    earclean: '<rect x="96" y="40" width="48" height="74" rx="10"/><rect x="108" y="22" width="24" height="20" rx="3"/><rect x="116" y="8" width="8" height="16" rx="3"/><circle cx="62" cy="92" r="16"/><circle cx="178" cy="96" r="12"/>',
    styptic: '<rect x="88" y="48" width="64" height="62" rx="8"/><rect x="82" y="34" width="76" height="18" rx="5"/>'
  };
  function teethV(x0, y0, n, len, w, gap) {
    var s = '', g = gap || 7;
    for (var i = 0; i < n; i++) { s += '<rect x="' + (x0 + i * g) + '" y="' + (y0 - (len > 20 ? 0 : len)) + '" width="' + w + '" height="' + (len > 20 ? len : len + 4) + '" rx="1.5"/>'; }
    return s;
  }
  function teethH(x0, y0, n, w, len) {
    var s = '';
    for (var i = 0; i < n; i++) { s += '<rect x="' + x0 + '" y="' + (y0 + i * 7.5) + '" width="' + len + '" height="' + 3.5 + '" rx="1.5"/>'; }
    return s;
  }
  function toolSVG(id) {
    return '<svg viewBox="0 0 240 120" aria-hidden="true" focusable="false"><g fill="currentColor">' + (T[id] || '') + '</g></svg>';
  }

  return { coatSVG: coatSVG, toolSVG: toolSVG };
})();
