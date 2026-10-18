// Home page: "Grooming for your dog's situation" carousel (owner request 2026-10-06).
// Items come from the page markup (data-gd-carousel). The four text cards below stay the real, crawlable links;
// a click/Enter on a carousel card goes to the same page. "Pause motion" stops the drift (WCAG 2.2.2);
// the component itself turns autoplay off under prefers-reduced-motion.
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import CircularCarousel from './CircularCarousel';

// The cylinder needs about 12 cards to form a ring (4 cards overlap and show their inner shading), so the four
// situations are repeated in order; the visible counter is hidden because it would count the repeats.
const ringOf = (items) => {
  const times = Math.max(1, Math.ceil(12 / items.length));
  const out = [];
  for (let t = 0; t < times; t += 1) { items.forEach((it) => out.push(it)); }
  return out;
};

function Situations({ items }) {
  const [paused, setPaused] = useState(false);
  const ring = ringOf(items);
  return (
    <>
      <div className="gd-cc__stage">
        <CircularCarousel
          items={ring}
          preset="cylinder"
          intro="rise"
          cardWidth={220}
          aspectRatio={1}
          speed={14}
          captions
          autoplay={paused ? 'off' : 'drift'}
          fadeColor="#FFFCF7"
          onItemClick={(item) => { if (item && item.href) window.location.assign(item.href); }}
        />
      </div>
      <button type="button" className="gd-cc__pause" aria-pressed={paused} onClick={() => setPaused((p) => !p)}>
        {paused ? 'Play motion' : 'Pause motion'}
      </button>
    </>
  );
}

document.querySelectorAll('[data-gd-carousel]').forEach((el) => {
  let items = [];
  try { items = JSON.parse(el.getAttribute('data-gd-carousel')); } catch (e) { return; }
  if (!items.length || !window.React || !window.ReactDOM) { return; }
  el.classList.add('is-mounted');
  createRoot(el).render(<Situations items={items} />);
});
