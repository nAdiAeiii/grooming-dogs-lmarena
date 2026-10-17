/* The Practical Grooming Desk: prototype content.
   Every line here is SAMPLE CONTENT written for this concept prototype. It is not published
   grooming-dogs.com content and has not been reviewed by a groomer or a vet. */
window.DESK = (function () {
  'use strict';

  var coats = [
    { id: 'smooth', name: 'Short smooth', word: 'smooth', hint: 'Short, flat hair that sheds lightly all year.', breeds: 'Beagle, Boxer, Labrador-type short coats, Dachshund (smooth)' },
    { id: 'double', name: 'Double', word: 'double', hint: 'Soft, dense undercoat under longer guard hairs; sheds heavily in spring and autumn.', breeds: 'Husky, German Shepherd, Golden Retriever, Corgi' },
    { id: 'curly', name: 'Curly', word: 'curly', hint: 'Tight curls that keep growing and trap loose hair instead of shedding it.', breeds: 'Poodle, Bichon Frise, many doodles' },
    { id: 'wire', name: 'Wire', word: 'wire', hint: 'Harsh, wiry outer coat with a softer layer beneath.', breeds: 'Most terriers, Schnauzer, Wirehaired Dachshund' },
    { id: 'silky', name: 'Long silky', word: 'silky', hint: 'Long, fine, straight hair with little undercoat; tangles easily.', breeds: 'Yorkshire Terrier, Maltese, Shih Tzu' }
  ];

  var tasks = [
    { id: 'brush', name: 'Brushing', verb: 'brush' },
    { id: 'bathe', name: 'Bathing', verb: 'bathe' },
    { id: 'mats', name: 'Mats & shedding', verb: 'deal with mats' },
    { id: 'nails', name: 'Nails', verb: 'trim nails' },
    { id: 'ears', name: 'Ears', verb: 'check ears' },
    { id: 'teeth', name: 'Teeth', verb: 'brush teeth' }
  ];

  /* answers[task][coat] = { often, tools: [toolId], answer, watch, guide } */
  var answers = {
    brush: {
      smooth: { often: 'Once a week', tools: ['curry', 'bristle'], answer: 'A rubber curry in short circles lifts loose hair and dead skin; a bristle brush along the coat finishes it. Five minutes is enough.', watch: 'Scratching hard on bare patches: go gentler, a short coat has little padding.', guide: 'brush-short-coat' },
      double: { often: '2–3 times a week; daily in a coat blow', tools: ['rake', 'slicker', 'comb'], answer: 'Rake the undercoat out in the direction the hair grows, then slicker the top coat, then run a comb to the skin to find what you missed.', watch: 'Do not shave a double coat to stop shedding; it can grow back unevenly. Ask a groomer first.', guide: 'brush-double-coat' },
      curly: { often: 'Every 1–2 days', tools: ['slicker', 'comb'], answer: 'Line-brush: part the coat in sections and brush each from the skin outwards with a slicker, then check every section with a comb.', watch: 'If the comb will not reach the skin, the coat is matting underneath even when the top looks fine.', guide: 'brush-curly-coat' },
      wire: { often: 'Once or twice a week', tools: ['slicker', 'comb'], answer: 'A light slicker, then a comb through the beard and leg furnishings. The body coat needs less work than it looks.', watch: 'Keeping the harsh texture usually means hand-stripping, which is a groomer skill to learn in person.', guide: 'brush-wire-coat' },
      silky: { often: 'Daily', tools: ['pin', 'comb'], answer: 'A pin brush through the length, then a wide-to-fine comb from the tips upward, holding the hair above any knot.', watch: 'Behind the ears, armpits and collar line knot first; check them every day.', guide: 'brush-silky-coat' }
    },
    bathe: {
      smooth: { often: 'Every 1–3 months, or when dirty', tools: ['curry'], answer: 'Lukewarm water, a dog shampoo massaged in with a rubber curry, and a long rinse. A short coat dries with a towel.', watch: 'Redness, flaking or a smell that comes back fast after a bath: talk to your vet.', guide: 'bathe-at-home' },
      double: { often: 'Every 2–3 months', tools: ['rake', 'dryer'], answer: 'Brush out the undercoat first; loose undercoat turns to felt when wet. Rinse until the water runs clear at the skin, then dry fully.', watch: 'A damp undercoat left to air-dry can stay wet against the skin for hours.', guide: 'bathe-at-home' },
      curly: { often: 'Every 3–6 weeks', tools: ['slicker', 'dryer'], answer: 'Brush out completely before the bath; water tightens any mat. Dry with a dryer on a cool or low setting while brushing.', watch: 'Mats that were missed before the bath will be harder to remove afterwards.', guide: 'bathe-at-home' },
      wire: { often: 'Every 2–3 months', tools: ['slicker'], answer: 'Bathe less often than you think; frequent baths soften a wire coat. Rinse well and towel-dry.', watch: 'Wash the beard more often than the body, with water and a cloth.', guide: 'bathe-at-home' },
      silky: { often: 'Every 2–4 weeks', tools: ['pin', 'comb', 'dryer'], answer: 'Detangle first, wash in the direction the hair falls, use a dog conditioner, and squeeze rather than rub with the towel.', watch: 'Rubbing a long coat dry creates the tangles you just brushed out.', guide: 'bathe-at-home' }
    },
    mats: {
      smooth: { often: 'Shedding: weekly brush', tools: ['curry', 'deshedder'], answer: 'Smooth coats do not mat, but they shed. A rubber curry once a week collects most of it before it reaches the sofa.', watch: 'Patchy hair loss or bald spots are not normal shedding: see your vet.', guide: 'shedding-season' },
      double: { often: 'Daily during a coat blow', tools: ['rake', 'deshedder', 'slicker'], answer: 'Spring and autumn bring a coat blow. Short daily sessions with a rake beat one long weekend session.', watch: 'Use a deshedding blade gently and not every day; pressing hard can irritate skin.', guide: 'shedding-season' },
      curly: { often: 'Check daily', tools: ['slicker', 'comb'], answer: 'Small mats: hold the hair at the skin, then tease the mat apart from the outer edge with the slicker or comb, a little at a time.', watch: 'A mat tight against the skin, or a coat matted all over, needs a groomer. Do not cut mats out with scissors.', guide: 'work-out-a-mat' },
      wire: { often: 'Check weekly', tools: ['comb', 'slicker'], answer: 'Mats form in the leg furnishings and beard. Work them out with your fingers and a comb before they tighten.', watch: 'Seeds and burrs in the furnishings after walks: remove them the same day.', guide: 'work-out-a-mat' },
      silky: { often: 'Check daily', tools: ['comb', 'pin'], answer: 'Work knots from the tip toward the skin, holding the hair between the knot and the skin so the dog feels no pull.', watch: 'If a knot is against the skin or the dog flinches, stop. A groomer can clip it safely.', guide: 'work-out-a-mat' }
    },
    nails: {
      smooth: { often: 'Every 3–4 weeks', tools: ['clipper', 'grinder', 'styptic'], answer: 'Trim small slivers from the tip. On light nails you can see the pink quick; stay well short of it.', watch: 'If a nail bleeds, press styptic powder on it. Bleeding that does not stop: call your vet.', guide: 'trim-nails' },
      double: { often: 'Every 3–4 weeks', tools: ['clipper', 'grinder', 'styptic'], answer: 'Hold the paw firmly, part the hair between the toes so you can see the whole nail, and take thin slices.', watch: 'Dark nails hide the quick. Take less, more often.', guide: 'trim-nails' },
      curly: { often: 'Every 3–4 weeks', tools: ['clipper', 'grinder', 'styptic'], answer: 'Trim the hair between the pads short first so you can see the nails and the dog has grip on hard floors.', watch: 'Hair caught in a grinder pulls; tuck or trim it back first.', guide: 'trim-nails' },
      wire: { often: 'Every 3–4 weeks', tools: ['clipper', 'grinder', 'styptic'], answer: 'Terriers often have strong, dark nails. A grinder gives you more control than one big clip.', watch: 'Dew claws higher on the leg do not touch the ground and grow into curls if forgotten.', guide: 'trim-nails' },
      silky: { often: 'Every 3–4 weeks', tools: ['clipper', 'grinder', 'styptic'], answer: 'Small breeds have small nails; a scissor-style clipper sized for small dogs is easier to control.', watch: 'Long foot hair hides overgrown nails. Lift it and look every couple of weeks.', guide: 'trim-nails' }
    },
    ears: {
      smooth: { often: 'Look weekly, clean when dirty', tools: ['earclean'], answer: 'Look and sniff once a week. Wipe only what you can see with a cotton pad and a dog ear cleaner.', watch: 'Redness, swelling, a strong smell, discharge or head shaking: that is a vet visit, not a cleaning job.', guide: 'check-ears' },
      double: { often: 'Look weekly', tools: ['earclean', 'comb'], answer: 'Check the ear and the hair just behind it, where mats form close to the skin.', watch: 'Never push anything into the ear canal.', guide: 'check-ears' },
      curly: { often: 'Look weekly', tools: ['earclean'], answer: 'Curly coats grow hair in the ear opening. Whether to remove it is a question for your groomer or vet; do not pluck it on your own.', watch: 'Smell, discharge or scratching at the ear: see your vet.', guide: 'check-ears' },
      wire: { often: 'Look weekly', tools: ['earclean'], answer: 'Wipe the visible inner flap with a pad and cleaner; leave the canal alone.', watch: 'Head shaking or a tilted head: see your vet.', guide: 'check-ears' },
      silky: { often: 'Look twice a week', tools: ['earclean', 'comb'], answer: 'Long ear hair traps food and moisture. Comb the ear feathering and dry the ears after baths.', watch: 'A dark, waxy build-up or smell: see your vet.', guide: 'check-ears' }
    },
    teeth: {
      smooth: { often: 'Daily is ideal; several times a week helps', tools: ['toothbrush'], answer: 'Use a dog toothbrush or finger brush and dog toothpaste. Start with the outer surfaces of the back teeth.', watch: 'Never use human toothpaste; some contain ingredients, such as xylitol, that are toxic to dogs.', guide: 'brush-teeth' },
      double: { often: 'Daily is ideal', tools: ['toothbrush'], answer: 'Lift the lip, brush along the gum line in small circles, a few teeth at a time.', watch: 'Bleeding gums, bad breath that persists or a broken tooth: see your vet.', guide: 'brush-teeth' },
      curly: { often: 'Daily is ideal', tools: ['toothbrush'], answer: 'Keep the hair around the mouth short or clipped back so toothpaste does not end up matted into it.', watch: 'Any swelling in the face or mouth: see your vet.', guide: 'brush-teeth' },
      wire: { often: 'Daily is ideal', tools: ['toothbrush'], answer: 'Wipe the beard after brushing; toothpaste and food stain the furnishings.', watch: 'Persistent bad breath: see your vet.', guide: 'brush-teeth' },
      silky: { often: 'Daily is ideal', tools: ['toothbrush'], answer: 'Small mouths crowd teeth together; a finger brush reaches the back teeth more easily.', watch: 'Loose or discoloured teeth: see your vet.', guide: 'brush-teeth' }
    }
  };

  /* Tools on the tool board. coats = coats the tool is a main tool for. */
  var tools = [
    { id: 'slicker', name: 'Slicker brush', does: 'Fine bent wire pins that pull loose hair and small tangles out of the top coat.', good: ['double', 'curly', 'wire', 'silky'], limit: 'Pressed hard or dragged on one spot it scratches skin ("brush burn"). Keep the stroke light.', confused: 'pin', guides: ['brush-curly-coat', 'work-out-a-mat'] },
    { id: 'rake', name: 'Undercoat rake', does: 'One or two rows of long teeth that reach through the top coat and pull out loose undercoat.', good: ['double'], limit: 'Little use on single coats; on curly or silky coats it can drag and break hair.', confused: 'deshedder', guides: ['brush-double-coat', 'shedding-season'] },
    { id: 'comb', name: 'Steel comb', does: 'Wide and fine teeth. The test that tells you whether brushing reached the skin.', good: ['double', 'curly', 'wire', 'silky'], limit: 'Not a de-matting tool: forcing it through a mat hurts. Use it to find mats, not to rip them.', confused: 'rake', guides: ['brush-curly-coat', 'brush-silky-coat'] },
    { id: 'pin', name: 'Pin brush', does: 'Straight pins with rounded tips that move through long hair without pulling.', good: ['silky'], limit: 'Too gentle to remove undercoat or tangles near the skin.', confused: 'slicker', guides: ['brush-silky-coat'] },
    { id: 'curry', name: 'Rubber curry', does: 'Soft rubber nubs that lift loose hair and dead skin from short coats; also good for shampooing.', good: ['smooth'], limit: 'Does nothing for long or dense coats.', confused: 'bristle', guides: ['brush-short-coat', 'bathe-at-home'] },
    { id: 'bristle', name: 'Bristle brush', does: 'Natural or nylon bristles that smooth a short coat and spread its oils.', good: ['smooth'], limit: 'Will not reach the skin through a thick or long coat.', confused: 'curry', guides: ['brush-short-coat'] },
    { id: 'deshedder', name: 'Deshedding blade', does: 'A fine-toothed edge that pulls loose undercoat during heavy shedding.', good: ['double'], limit: 'Used too often or too firmly it can cut guard hairs and irritate skin. Short, light sessions.', confused: 'rake', guides: ['shedding-season'] },
    { id: 'clipper', name: 'Nail clipper', does: 'Scissor-style or guillotine blades that take a slice off the nail tip.', good: ['smooth', 'double', 'curly', 'wire', 'silky'], limit: 'A blunt clipper crushes rather than cuts. One wrong slice can reach the quick.', confused: 'grinder', guides: ['trim-nails'] },
    { id: 'grinder', name: 'Nail grinder', does: 'A rotating sanding drum that files the nail down a little at a time.', good: ['smooth', 'double', 'curly', 'wire', 'silky'], limit: 'Noise and vibration bother some dogs; long hair can catch in the drum. Short touches to avoid heat.', confused: 'clipper', guides: ['trim-nails'] },
    { id: 'dryer', name: 'Pet dryer', does: 'A dryer used on a cool or low setting to dry dense or curly coats right to the skin.', good: ['double', 'curly', 'silky'], limit: 'Hot air close to the skin can burn. Keep it moving, keep it cool, never leave a dog alone with it.', confused: null, guides: ['bathe-at-home'] },
    { id: 'toothbrush', name: 'Dog toothbrush', does: 'A soft angled brush or a finger brush, used with dog toothpaste.', good: ['smooth', 'double', 'curly', 'wire', 'silky'], limit: 'Brushing does not treat dental disease that is already there.', confused: null, guides: ['brush-teeth'] },
    { id: 'earclean', name: 'Ear cleaner & pads', does: 'A dog ear-cleaning solution on cotton pads, for the visible part of the ear only.', good: ['smooth', 'double', 'curly', 'wire', 'silky'], limit: 'Never cotton buds in the canal. Cleaning is not a treatment for an ear problem.', confused: null, guides: ['check-ears'] },
    { id: 'styptic', name: 'Styptic powder', does: 'A powder pressed onto a nail tip to help stop minor bleeding after a trim.', good: ['smooth', 'double', 'curly', 'wire', 'silky'], limit: 'For a nicked nail, not a wound. Bleeding that does not stop needs a vet.', confused: null, guides: ['trim-nails'] }
  ];

  /* Two ways to do the same job. rows: [label, a, b] */
  var methods = [
    { id: 'nails', name: 'Nails', a: 'Clipper', b: 'Grinder', tools: ['clipper', 'grinder'],
      rows: [
        ['How it works', 'Takes a slice off the tip', 'Files the nail down gradually'],
        ['Time per paw', 'Seconds', 'A minute or two'],
        ['Control near the quick', 'Lower: each cut is a commitment', 'Higher: you stop the moment you are close'],
        ['Noise and feel', 'A click and a squeeze', 'Buzz and vibration'],
        ['Best for', 'Calm dogs, light nails, quick sessions', 'Dark or thick nails, smooth finished edges'],
        ['Watch for', 'Crushing with a blunt blade', 'Heat from long touches; hair caught in the drum']
      ],
      note: 'Many owners use both: clip the tip, then smooth with the grinder.', guide: 'trim-nails' },
    { id: 'drying', name: 'Drying', a: 'Towel', b: 'Dryer', tools: ['dryer'],
      rows: [
        ['How it works', 'Squeeze and blot water out', 'Air on a cool or low setting while brushing'],
        ['Time', 'Fast for short coats', 'Longer, but finishes the job on thick coats'],
        ['Reaches the skin on', 'Smooth and wire coats', 'Double, curly and long coats'],
        ['Noise and feel', 'Quiet', 'Loud; needs getting used to'],
        ['Best for', 'Short coats, nervous dogs', 'Curly and double coats that must not stay damp'],
        ['Watch for', 'Rubbing tangles a long coat', 'Hot air too close to the skin']
      ],
      note: 'A towel first, then the dryer, cuts the drying time on a thick coat.', guide: 'bathe-at-home' },
    { id: 'mats', name: 'Mats', a: 'Work it out', b: 'Leave it to a groomer', tools: ['comb', 'slicker'],
      rows: [
        ['When', 'Small, loose mats away from the skin', 'Tight mats against the skin, or matted all over'],
        ['How', 'Hold the hair at the skin, tease from the outside in', 'Clipped out safely with professional clippers'],
        ['Time', 'A few minutes per mat', 'One appointment'],
        ['Comfort', 'Fine if the dog does not flinch', 'Kinder than pulling at a tight mat'],
        ['Never', 'Cut a mat out with scissors: skin lifts into the mat', 'Wait until the whole coat has felted'],
        ['Next time', 'Line-brush and comb-check more often', 'Ask the groomer for a shorter, easier length']
      ],
      note: 'The comb test after brushing is what keeps mats small enough to work out.', guide: 'work-out-a-mat' }
  ];

  /* Guides. steps: [title, text]. next: [{guide, why}] */
  var guides = {
    'brush-short-coat': { title: 'Brush a short smooth coat', coats: ['smooth'], time: '5 minutes', tools: ['curry', 'bristle'],
      intro: 'Short coats need little, but a weekly brush keeps shedding off the furniture and lets you check the skin.',
      steps: [['Curry in circles', 'Work a rubber curry over the body in small circles to loosen hair and dead skin.'], ['Brush with the coat', 'Follow with a bristle brush in the direction the hair grows.'], ['Check as you go', 'Look for lumps, cuts, ticks or sore spots while your hands are on the coat.']],
      stop: 'A new lump, a wound, or skin that is red and hot: see your vet before brushing over it.',
      next: [{ guide: 'bathe-at-home', why: 'Bathe only when the coat is dirty' }, { guide: 'trim-nails', why: 'While the dog is settled, check the nails' }] },
    'brush-double-coat': { title: 'Brush a double coat', coats: ['double'], time: '15–20 minutes', tools: ['rake', 'slicker', 'comb'],
      intro: 'The work in a double coat is underneath. Brush the undercoat out and the top coat looks after itself.',
      steps: [['Rake the undercoat', 'Work the rake in the direction of growth, section by section, starting at the back legs.'], ['Slicker the top coat', 'Light strokes over the guard hairs to lift what the rake loosened.'], ['Comb to the skin', 'Run a comb through each area. Where it catches, brush that spot again.'], ['Behind the ears and the trousers', 'These felt first. Give them a final comb.']],
      stop: 'Do not shave a double coat to reduce shedding without asking a groomer; it can grow back patchy.',
      next: [{ guide: 'shedding-season', why: 'Spring and autumn need a different routine' }, { guide: 'bathe-at-home', why: 'Brush out fully before any bath' }, { guide: 'work-out-a-mat', why: 'Found a tangle behind the ears?' }] },
    'brush-curly-coat': { title: 'Brush a curly coat', coats: ['curly'], time: '15–30 minutes', tools: ['slicker', 'comb'],
      intro: 'Curly coats hold on to loose hair, so it mats close to the skin while the surface looks fluffy. Line-brushing reaches it.',
      steps: [['Part a line', 'Hold the coat up with one hand so a line of skin shows.'], ['Brush from the skin out', 'Short slicker strokes below the line, moving the line up a little at a time.'], ['Comb-check every section', 'The comb should glide from skin to tip. If it catches, go back.'], ['Finish legs and ears', 'Armpits, behind the ears and the legs mat first.']],
      stop: 'If the comb cannot reach the skin across large areas, book a groomer instead of forcing it.',
      next: [{ guide: 'work-out-a-mat', why: 'The comb caught on a tangle' }, { guide: 'bathe-at-home', why: 'Bath day: brush out first' }] },
    'brush-wire-coat': { title: 'Brush a wire coat', coats: ['wire'], time: '10 minutes', tools: ['slicker', 'comb'],
      intro: 'A wire coat sheds little and needs light brushing; the beard and leg furnishings need the most attention.',
      steps: [['Light slicker over the body', 'Short strokes with the growth.'], ['Comb the furnishings', 'Legs, beard and eyebrows, where hair is longer and softer.'], ['Wipe the beard', 'A damp cloth after meals keeps it clean.']],
      stop: 'Hand-stripping keeps the harsh texture but should be learned from a groomer in person.',
      next: [{ guide: 'work-out-a-mat', why: 'Burrs or tangles in the legs' }, { guide: 'trim-nails', why: 'Terriers often have strong, dark nails' }] },
    'brush-silky-coat': { title: 'Brush a long silky coat', coats: ['silky'], time: '10–15 minutes daily', tools: ['pin', 'comb'],
      intro: 'Fine, long hair tangles quickly. A short daily brush is far easier than a weekly rescue.',
      steps: [['Pin brush the length', 'Long strokes, following the fall of the hair.'], ['Comb from the tips', 'Start at the ends and work up toward the skin.'], ['Hold above knots', 'Hold the hair between the knot and the skin so nothing pulls.'], ['Daily hotspots', 'Behind the ears, armpits and the collar line.']],
      stop: 'A knot against the skin, or a dog that flinches: stop and ask a groomer.',
      next: [{ guide: 'work-out-a-mat', why: 'A knot will not come out' }, { guide: 'check-ears', why: 'Long ear hair traps dirt' }] },
    'bathe-at-home': { title: 'Bathe your dog at home', coats: ['smooth', 'double', 'curly', 'wire', 'silky'], time: '30–60 minutes', tools: ['curry', 'dryer'],
      intro: 'Brush first, keep the water lukewarm, rinse longer than feels necessary, and dry fully.',
      steps: [['Brush out first', 'Water tightens tangles and felts loose undercoat.'], ['Set up', 'A non-slip mat, dog shampoo, towels and treats within reach.'], ['Wet and wash', 'Lukewarm water, shampoo worked in with a curry or your fingers, avoiding eyes and ears.'], ['Rinse, then rinse again', 'Leftover shampoo irritates skin. Rinse until the water runs clear at the skin.'], ['Dry', 'Towel first; then a dryer on a cool or low setting for thick or curly coats.']],
      stop: 'Skin that is red, flaky or smells again soon after a bath: talk to your vet rather than bathing more.',
      next: [{ guide: 'trim-nails', why: 'Nails are softer after a bath' }, { guide: 'check-ears', why: 'Dry the ears afterwards' }] },
    'shedding-season': { title: 'Get through shedding season', coats: ['double', 'smooth'], time: '10 minutes a day for 2–3 weeks', tools: ['rake', 'deshedder', 'curry'],
      intro: 'Double coats drop their undercoat twice a year. Little and often keeps it off the floor and out of the coat.',
      steps: [['Daily short sessions', 'Ten minutes a day beats an hour at the weekend.'], ['Rake, then slicker', 'The rake pulls the undercoat; the slicker lifts it away.'], ['Deshedder lightly', 'Once or twice a week, light strokes only.'], ['A warm bath helps', 'Bathing and a thorough dry can release a lot of loose undercoat at once.']],
      stop: 'Bald patches, sores or hair loss outside the usual seasons are not normal shedding: see your vet.',
      next: [{ guide: 'brush-double-coat', why: 'The weekly routine outside the season' }, { guide: 'bathe-at-home', why: 'A bath to finish the coat blow' }] },
    'work-out-a-mat': { title: 'Work out a mat', coats: ['curly', 'silky', 'wire', 'double'], time: '5 minutes per mat', tools: ['comb', 'slicker'],
      intro: 'Small mats can be teased out at home. Tight mats against the skin are a job for a groomer.',
      steps: [['Find the edges', 'Feel where the mat starts and ends.'], ['Hold at the skin', 'Pinch the hair between the mat and the skin so the dog feels no pull.'], ['Tease from the outside', 'Pick the outer edge apart with the end of the comb or the slicker, a little at a time.'], ['Comb through', 'When the comb glides through, the mat is gone.']],
      stop: 'Never cut a mat out with scissors: the skin lifts into the mat and is easy to cut. Tight mats need a groomer.',
      next: [{ guide: 'brush-curly-coat', why: 'Line-brushing stops the next one' }, { guide: 'brush-silky-coat', why: 'The daily routine for long coats' }] },
    'trim-nails': { title: 'Trim your dog’s nails', coats: ['smooth', 'double', 'curly', 'wire', 'silky'], time: '10 minutes', tools: ['clipper', 'grinder', 'styptic'],
      intro: 'Take less, more often. A thin slice every few weeks is safer than a big cut once a season.',
      steps: [['Get the dog used to it', 'Handle paws for a few days with treats before any tool comes out.'], ['Hold the paw firmly', 'Press gently on the pad to extend the nail.'], ['Take thin slices', 'Cut or grind small amounts from the tip, angled with the nail.'], ['Stop before the quick', 'On light nails you see the pink; on dark nails, stop when a dark dot appears in the cut surface.'], ['Reward', 'One paw a day is fine.']],
      stop: 'Bleeding that does not stop with styptic powder and pressure: call your vet.',
      next: [{ guide: 'calm-a-nervous-dog', why: 'If your dog pulls away' }, { guide: 'check-ears', why: 'Add a weekly ear check' }] },
    'check-ears': { title: 'Check and clean ears', coats: ['smooth', 'double', 'curly', 'wire', 'silky'], time: '5 minutes', tools: ['earclean'],
      intro: 'Look and sniff weekly. Clean only the part you can see, and only when it is dirty.',
      steps: [['Look and sniff', 'A healthy ear is pale pink and has little smell.'], ['Wipe what you can see', 'A cotton pad with dog ear cleaner on the inner flap.'], ['Dry after water', 'After baths and swims, dry the ear gently with a pad.']],
      stop: 'Redness, swelling, smell, discharge, scratching or head shaking: see your vet. Do not clean a sore ear.',
      next: [{ guide: 'brush-teeth', why: 'While you are at the head' }, { guide: 'bathe-at-home', why: 'Keep water out at bath time' }] },
    'brush-teeth': { title: 'Brush your dog’s teeth', coats: ['smooth', 'double', 'curly', 'wire', 'silky'], time: '2 minutes', tools: ['toothbrush'],
      intro: 'Daily brushing is the habit that matters most. Start slowly; a few teeth on the first day is a success.',
      steps: [['Taste first', 'Let the dog lick dog toothpaste from your finger.'], ['Lift the lip', 'Rub along the outer surface of the back teeth with a finger brush.'], ['Small circles', 'Move to a toothbrush and work along the gum line, a few teeth at a time.']],
      stop: 'Never use human toothpaste. Bleeding gums, a broken tooth or swelling: see your vet.',
      next: [{ guide: 'check-ears', why: 'A weekly ear check fits the same routine' }, { guide: 'calm-a-nervous-dog', why: 'If your dog will not open up' }] },
    'calm-a-nervous-dog': { title: 'Groom a nervous dog', coats: ['smooth', 'double', 'curly', 'wire', 'silky'], time: 'Short sessions over weeks', tools: [],
      intro: 'Make grooming predictable and short. Stop while it is still going well.',
      steps: [['Tiny steps', 'Show the tool, treat. Touch with the tool, treat. One step at a time over days.'], ['Short sessions', 'One paw or one area, then stop on a good note.'], ['Read the signs', 'Lip licking, yawning, turning away or freezing mean slow down.']],
      stop: 'Growling, snapping or panic are signals to stop. Ask your vet or a qualified behaviour professional for help.',
      next: [{ guide: 'trim-nails', why: 'Apply it to nail trims' }, { guide: 'brush-teeth', why: 'Apply it to tooth brushing' }] }
  };

  var faqs = [
    { q: 'How do I know which coat my dog has?', a: 'Part the hair. A soft, dense layer under longer hair is a double coat; tight curls are curly; harsh hair is wire; long fine hair with little underneath is silky; short flat hair is smooth. Mixed breeds can sit between two.', link: { coat: 'double', task: 'brush', label: 'Try it in the sentence' } },
    { q: 'Can I shave my double-coated dog in summer?', a: 'Ask a groomer first. Shaving does not stop shedding and the coat can grow back unevenly. Regular brushing of the undercoat usually helps more.', link: { guide: 'shedding-season', label: 'Shedding season' } },
    { q: 'Clip or grind the nails?', a: 'Clippers are quick; grinders give more control near the quick. Many owners use both.', link: { method: 'nails', label: 'Compare the two' } },
    { q: 'How often should I bathe my dog?', a: 'It depends on the coat: curly and silky coats every few weeks, smooth and wire coats much less often. Only when dirty is a fine rule for many dogs.', link: { task: 'bathe', label: 'Bathing for your coat' } },
    { q: 'My dog hates being groomed. Where do I start?', a: 'With very short sessions and treats, one step at a time, stopping before the dog gets worried.', link: { guide: 'calm-a-nervous-dog', label: 'Groom a nervous dog' } },
    { q: 'When should I stop and call someone?', a: 'Any sign of pain, a wound, swelling, a smell from the ears, bleeding that will not stop, or a mat tight against the skin. That is the point to call your vet or a groomer.', link: { scroll: 'limits', label: 'What this desk covers' } }
  ];

  return { coats: coats, tasks: tasks, answers: answers, tools: tools, methods: methods, guides: guides, faqs: faqs };
})();
