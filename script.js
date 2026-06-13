/* ================================================================
   THE WAY HE WANTS ME — script.js
   All interactivity: chapters, nav, particles, music, quotes, etc.
   ================================================================

   CUSTOMIZATION MAP (search these labels with Ctrl+F):
   ──────────────────────────────────────────────────
   [NOVEL TITLE]      Change the novel title string
   [CHAPTERS]         Edit chapter titles and prose content
   [MUSIC TRACKS]     Edit the local fallback playlist
   [QUOTE SEEDS]      Pre-loaded favourite quotes
   [PARTICLE CONFIG]  Tweak dust particle behaviour
   [FOG CONFIG]       Adjust fog intensity
   ================================================================ */

'use strict';

/* ──────────────────────────────────────────────────────────────
   [CHAPTERS] — The full novel content.
   ──────────────────────────────────────────────────────────────
   Structure:
     {
       title: "Chapter heading shown to the reader",
       content: `Raw text of the chapter.
                 Each blank line becomes a new paragraph.`
     }

   HOW TO EDIT:
   • Change the title strings to rename chapters.
   • Replace the text inside the backticks (` `) with your prose.
   • Use two newlines (blank line) to start a new paragraph.
   • The first paragraph gets a decorative drop-cap automatically.
   ────────────────────────────────────────────────────────────── */

const CHAPTERS = [
  {
    title: "I.Restrains",
    content: `The blood under my fingernails has already dried by the time I opened my eyes.
I appeared to be seated in a padded restraint chair - not because I fought it, this time I chose to comply, surprisingly. But I have to confess, giving up felt better than I thought.

It seems that the other staff are gone. They left quietly. I could swear one of them limped before disappearing behind the heavy metal door. Well, I guess that's future me's problem.

The familiar room is sterile, you could smell chlorine from a mile away. I tried to clear my mind and focus on dusty pinks, pale lavenders, gray-blue shadows like bruises smeared across the walls. Then I noticed something strange - a single mechanical unit glowing beside me: a low table with a crown-like device at the center, surrounded by slow-spinning glass plates that click softly as they orbit. Delicate wires snaked down like veins. It looked like it should be humming, but it's not. It's waiting.

I bring my head up and notice Doctor Korrin standing beside it, clipboard in hand, silent for just long enough to make my chest tighten.

"You were beautiful today."

He finally breaks the silence, not spearing a single glance at me. His tone is metal. Yet it doesn't seem sarcastic, it's something else. Unpredictable. Violent even.

After a long few seconds he finally turns to me, his empty eyes scanning my face as usual, like he was reading the pulse beneath my skin.

"But you know we don't tolerate such behaviours in this institution, sweetheart. There are rules, and... there are consequences." His voice commanding and distant, sending shivers down my spine with each syllable.

I flinch as the machine suddenly lights up - faint amber, like candlelight reflected on the wet glass. He reaches for the crown.

"C.A.R.E. — Cognitive Affective Regression Engine or The 'Loop Machine' as I call it.." he begun: "Was designed to simulate traumatic memory loops. Controlled regression. In simple words, you will relive fragments sealed or hidden in your subconscious - real or synthesized. I will monitor your behavioural response closely, and determine what triggers your... episodes and suppresses certain memories."

He steps closer. I don't dare to move or even look at him as he places the cold metal crown gently on my head, fingers brushing my temple in a strangely comforting motion. I was about to speak when he suddenly placed a hand over my mouth, making me flinch.

"You will not speak unless instructed or else I'll make you shut up. And you will not close your eyes unless I allow it. Do you understand?" His voice doesn't rise. It never needs to.

Yet my heart reflexively started racing, as if I was running a marathon. I'm not sure if it's fear, shame, or something completely different: the quiet thrill of pleasing him again after failing him so beautifully.

The glass plates begin to spin faster.

"Now… tell me what you felt..." He says firmly, gaze fixated on me, making my stomach turn. "When you sank your teeth into her skin. I want to hear it in your own words. And if you behave, maybe it won't hurt as much."

The machine hums.

I don't know. I didn't feel. Or I felt too much. My mind suddenly is full of honey-colored fog, sticky and slow. Words rise and collapse before they reach my lips.

"I... I didn't want her to touch me." I mumble. My own voice for some reason sounds so small, like it belongs to somebody else.

"She's bad.. evil, she was going to hurt you, take you from me! And she... It- It should've been you."

And there it is - the truth leaking out, naked and trembling.

My vision shimmers. The machine pulses softly and images flicker inside my skull like dying film reels - the nurse's hand reaching, the way her voice cracked, my teeth sinking in like I was starving. I remember the warmth, the panic, the thrill. It felt real. More real than anything in weeks. Maybe months.

I felt sick, sitting here, strapped in, head buzzing under his invention - I'm floating. Drifting. I'm free.

And I know he's watching. I can feel his gaze like a needle dragging across my skin.

Something in me shifts.

All of a sudden I want to give it all to him. My thoughts, my memories, my violence. I want him to take it. To use it. To rearrange me until I'm useful again. Beautiful. Fixed.

"That's it. Let it go. Give in. You've been fighting for so long, hiding, protecting yourself, hurting. But now it's time to relax. Don't fight it sweetheart, come on."

The machine tightens its grip again, not on my skin, but on my mind. It feels like static in my blood, like invisible wires reeling my thoughts in, one by one, wrapping them neatly for him. Everything slows down. The hum becomes a melody. Distant. Metallic. Like the sound of my soul being archived.

Dr. Korrin stands behind the console, tall and still, a silhouette made of angles and shadows, his face glows with the faint green reflection of the monitors. He won't look at me — and that absence burns more than his gaze ever could.

I sit with my legs and hands tied up to a chair, as well as my head, neatly fixed in the required position. I can feel my thoughts dancing - not by choice, but as a side effect. Anxiety. A rhythm my body falls into when my mind floats too far from the surface. The air smells like ozone and iron. Time drips.

Then, finally, his voice, sharp as a razorblade cutting through the tangles of my mind:

"You bit her."

Not angry. Not surprised, just... observing.

I nod slowly, vision still glassy.

"She tried to give me those pills," I murmur, hoping it would come out as something more than just a slight whisper. "She didn't say why. You didn't say she could."

That one last bit seems to get his attention. Finally. He moves - just a few steps - but it shifts his entire demeanour. The lights flicker slightly. My pulse stutters.

"That's what it is, huh?" he took some notes. "I think we can find a reason to let that one slide, don't we sweetheart? Besides, you showed quite an improvement in your behaviour lately. You really can be good when you want to."

I just nod, drowning in an endless sea of my thoughts.

He steps closer. His gloved hand rests gently - suspiciously gently - against my cheekbone. I stay still, eyes fluttering, body leaning instinctively into the cold synthetic touch.

"Tell me what you felt when you bit her."

I hesitate, shame curling low in my stomach. But the machine won't let me resist, I don't have a choice anyway. It pulses once - softly - and the words fall out of my mouth like a confession whispered in a chapel.

"It felt… good," I admit. "She screamed. I liked it. I wanted her to stop pretending to care. I wanted her to bleed."

Dr. Korrin's fingers traced my jaw in his usual, cold possessive manner.

"You knew there will be consequences."

That wasn't a question. It never is.

I whispered, "Yes, Doctor."

He studied me like a specimen - not with cruelty, but with fascination. Devotion. Like I was something rare, like his personal Nobel scientific discovery. I felt like all my life I was blooming in decay. And he was the only person patient enough to get me open.

"You've become volatile again.

Good."

Another setting on the machine shifts and I feel a soft heat behind my eyes. A crackling at the base of my skull. Thoughts begin to dissolve like film in acid. In their place, something new begins to write itself - structured, clean, his.

"I'm going to decrease your cognitive responses. The more you resist the waves, the more it'll hurt. So be a good little girl, don't fight it. That's how we make progress, isn't it?"

I nod, dazed, hypnotized by the edge in his tone and harmonizing sounds of the machine. I want to answer, but my mouth won't work properly.

So I just smile. So sloppy. Hollow. Full of devotion.

"That's it." he murmurs, and everything inside me folds.

The lights dim.

I disappear into the fog.

The world becomes quieter. Lighter. Emptier in all the right ways.

Just the way he wants me.

Just the way I needed to be.`
  },
  {
    title: "II. Deeper",
    content: `When I opened my eyes again, it felt like an eternity had passed. Or a second. The difference between them had long since ceased to matter.

The room no longer seemed familiar. It had shifted somehow, changed its angles. The walls hummed with a faint vibration, as if the very space were adjusting itself to the machine's breathing. Something sharp stung in my nose — the smell of chlorine had been replaced by something sweet, heavy, like rusty water and sugar.

I tried to move, but the straps on my hands and feet only dug deeper, like they were alive. The C.A.R.E. kept humming. The glass plates spun faster, their clicking falling into a rhythm like a heartbeat. It took me a moment to figure out whether it belonged to me, or to the small churning gears.

Dr. Korrin stood in the same place as always — the same still silhouette, smooth flawless face with glints of binary code somewhere deep behind his eyes. He didn't look up, methodically entering another set of data onto yellowed paper. And that silence was tearing me apart. But I waited obediently. I always wait.

And then, at last:

"You did well today," he said calmly. "But we both know that's far from the limit."

He stepped closer. I caught the scent of his gloves again — cold latex and sharp medical alcohol. He leaned toward me, and his whisper crept quietly to the most sensitive point of the ear — warm and velvety, but all the more cruel for it:

"Today we'll go deeper."

The machine suddenly flared with a soft blue light, and I stared at him like a lost fawn in the middle of a busy highway, and a few moments later I felt my own thoughts begin to arrange themselves into someone else's words. They were born far beyond the edges of my fractured mind, but the voice remained mine.

"No, please, don't leave me!"
"It's my fault."
"I want you to fix me."
"I don't know what's happening to me."

I didn't know whether I was saying it out loud, or whether it was just an echo inside my skull.

"Shh," his palm covered my mouth again, not allowing a single sound as his fingers touched my cold skin. "I hear you, even when you're silent."

And I knew — he really did hear. Every crack in my memory, every tremor of my heart, every desire I was afraid to admit even to myself.

The plates spun faster, the room seemed to turn to glass, cracking under the pressure.

And suddenly: I'm running down the cold hallway, a thousand electric impulses coursing through my veins, the nurse is screaming, her face slowly blurring and turning into a hollow mask. I am drowning in my own screams now. But at the center — him. Always him. The one still, unchanging core.

I barely had time to blink. The light turned warm again, muted, and I could have sworn I felt my pupils dilating — I couldn't see anything anymore. There was only his voice, slowly cutting through the fog:

"Tell me. What do you feel right now?"

I sincerely and wholeheartedly hated that question, but the words tumbled from my lips on their own:

"I… belong to you."

He slowly raised his head. His gaze met my eyes for the first time. So intent, and infinitely, habitually cold.

"Correct," he said, measured. "But that's not enough."

Just a moment later the machine produced a new sound — low, resonant, like the rolling thunder of a distant, approaching storm. The straps pulled so tight I could barely take a breath. New silhouettes flared before my eyes.

Oh.. it seems that's me. Standing over a body, my dress covered in blood again. Whose hands am I holding? It doesn't matter, really. I'm smiling.

And in that smile — only him.

C.A.R.E. pulsed like a mechanical heart, sending impulses into every free corner of my consciousness, and into that place where consciousness no longer existed. I could feel myself dissolving completely. My memories being rewritten, stitched through with someone else's thread.

And in that moment his voice became so soft, almost tender:

"Shh, sweetheart, it'll be over soon. Your past doesn't matter anymore. You don't need to be afraid. I'll fix everything."

I wanted to nod or give some sign, but my body wouldn't listen, just spasming faintly under the pressure of electric impulses that, now and then, sent saliva trickling down my chin.

"Your potential exceeds all my expectations," he said, mechanically. "That's enough for today. You need to rest."

The light went out.

And I fell into the void once again, which like a bottomless rabbit hole had neither end nor beginning. Soon a warm cloud of unconsciousness wrapped itself around me, and the world dissolved completely.`
  },
  {
    title: "III. Mirror Corridor",
    content: `Dim light was pressing through the blinds, practically forcing my eyes open.

I was back in the same place again. The same walls, the same grey, the same mechanical hum. But something in the air had changed. It had grown too thick. Viscous, heavy.

I tried to move — the straps were gone. Relief at last. But the freedom felt fake, sticky, like a fever dream you can't wake from.

Dr. Korrin stood across from me. His gaze was the same as always — piercing and predatorily silent. Only... hadn't his eyes always been green? I remembered blue. Or red? No, I'm confusing things. I always confuse things.

"Stand up," he said unexpectedly.

I obeyed. But in the same instant I noticed — another doctor was standing behind him. And another — against the wall. They were silent, breathing in unison. Their stern faces differed only in the flicker of their eyes.

"Is this a trick? Some kind of crazy illusion?" I asked uncertainly, reflexively stepping back and pressing into my own chair.

"Everything is an illusion," they answered in unison. "Except for the fact that you will never leave this place."

I pressed my palm to my chest. My heart was pounding at a frantic pace, as though it didn't belong to me at all. I took a step forward — and the ground suddenly disappeared from under my feet. A bottomless corridor stretched before me; its walls lined with crystal mirrors. In each one — me. In each one — different. In each one — another version. Here I'm crying. Here I'm laughing. Oh... it looks like I have no eyes.

"Look," the doctor's silhouettes were drawing closer. Their voices came from everywhere and nowhere at once. "Each of them is a version of you. Your possibilities, your potential. Don't be afraid — we'll get rid of everything that might stand in our way."

"Stop this! I'm scared. I want to go home." I wanted to scream, but only a silent moan escaped my throat.

The mirrors began to crack, and the images vanished one by one. The crying me — shattered into a thousand shards, leaving geometrically precise cuts along my wrists. The laughing one — crumbled to dust. The eyeless one — blurred into a dark stain that crept slowly forward, consuming everything in its path. I ran and tried to scream, but the sound was swallowed by the machine — it hung directly above me now, suspended in air like a giant revolving eye.

"Stop resisting," said one of the doctors. Or all of them. I didn't even try to tell them apart. "We'll leave only what is necessary, what will make you better, what will finally free you from suffering."

I closed my eyes and tried to take a few deep breaths, the way the doctor had taught me. But I only kept falling into the abyss, until I felt the touch of cold gloves gliding smoothly over my wet palm. My doctor. Real. Or just another phantom. His voice was so close, warm and quiet:

"You know them, sweetheart, every one of them. Now open your eyes and tell me — which one is YOU?"

The question came like thunder out of a clear sky. And I didn't know the answer. Everything inside me clenched and forced the breath out of me, demanding only one thing: to please. To choose the answer he wanted.

"I am yours." That was my last breath.

A single second — and everything before me crumbled into darkness. All the figures vanished. Only he remained.

For a brief moment I thought a quick smile had flickered across his face. But he never smiled — his features were always quite static, his expression stern and unchanging. But I could have sworn I saw a smile that time. I knew he was pleased.

"Correct," he said at last. "But you're still not ready to accept reality."

And suddenly I was pulled back again, my whole body going rigid. I fell and fell until at last I opened my eyes.`
  },
  {
    title: "IV. Faded Pink Walls",
    content: `This time I woke up back in my room.

The walls, so familiar to me by now, were painted in a faded, dead pink. Not a bright or gentle color — murky, sullen, with a film of dust, and something achingly sweet inside it, like old toys, or the faded ribbons I used to braid into my hair.

The heavy metal bed was still made up with the same dull grey sheets.

And in the air hung the indelible smell of antiseptic, mixed with something sweet, like the cloying pink perfume that used to sit on my mother's dresser.

This place made me feel so tired and impossibly small. It erased contrast and stole the last drops of light, leaving inside only a soft, viscous hum. I was slowly becoming will-less, as though dissolving into these walls, while the damp pink mold crept quietly under my skin — a silent echo of longing and sweet surrender.

Between sessions, time lost its shape. I sat in my room and stared at the dull walls, trying to touch them — and each time I felt my fingers pass right through the concrete as though it were made of fog. Sometimes it seemed that I myself was fog.

Without the machine's hum it was unbearable. Too quiet. Too empty. My thoughts grew sticky, tangled as cobwebs. I kept catching myself straining to listen down the corridor: was he coming? And when the silence stretched for too long, I started to shake.

"Doctor…" I would sometimes whisper into the empty walls, but there was no answer.

Every time he entered the room, I flinched — not from fear, but from relief. His figure filled the space completely, and the air seemed to thicken, everything felt more real. When he silently nodded, inviting me to follow, I almost ran after him.

Now I sat in the chair willingly, giving him my wrists so he could fasten the straps. When the machine came to life, I felt my blood spreading through my veins — clean, warm, real.

The silence no longer frightened me. It was filled with his presence. His still silhouette, his voice, his control. Even the worst nightmares, the darkest thoughts, were easier to bear than the bare, suffocating gray of being alone.

One day he delayed the session. He simply stood at the table, leafing through papers. I waited. My heart was beating as if it were about to burst from my chest — too loud.

"Doctor," it slipped out of me. "Please."

He slowly raised his eyes. They were almost glowing — softly, steadily, mockingly.

"Patience, darling." His voice seemed so distant, so out of reach.

I no longer wanted to go back to the emptiness.

After each session, dreams and waking wove ever more tightly into one continuous stream. I almost stopped being able to tell when a session began and when it ended. Sometimes I thought I was lying in the chair, only to find myself in the room; sometimes I'd be walking down the hall and suddenly see the C.A.R.E.'s arcs glowing around me.

Everything blurred together. The doctor's silhouette now followed me everywhere, always. In mirrors, in the shadows on the walls, even in my palms when I had to hide my face in them. His eyes burned in places that used to be dark.

I no longer waited for footsteps in the corridor — they never stopped. There was no need to beg him not to turn off the machine: it never turned off. The machine had become the background, the breath. Every cell inside me pulsed to its rhythm.

"Doctor," I would murmur from time to time, not knowing whether it was out loud or in a dream.

"Yes," he would answer. Always.

I no longer searched for a way out. On the contrary, I was ashamed to remember that I had ever tried to resist. Why? Everything was here: order, silence, his gaze, his voice, his calmness.

In those moments when the cold straps closed around my wrists, I finally felt put together, whole. There was no coercion in them — only protection. I knew: as long as they were holding me, I was fine.`
  },
  {
    title: "V. Yours",
    content: `I stopped being merely a "patient." That word disappeared, as well as all the dates and hours.

"You're mine," he said one time, and not a single doubt or question rose inside me. I nodded as calmly as one nods when confirming something so obvious. I could feel him rebuilding me. Every word — a command, every movement — a test. He had installed a new understanding in me: what had once been weakness and pain now became proof that I was perfect.

"You are flawless. I made you this way," he said.

And I believed him. Because who else but him could possibly know?

The endlessly glowing machine had become an altar, to which I brought the last remnants of my doubts. In its light I saw myself - real, clean, beautiful, right. Only within it did I truly exist.

Sometimes the doctor tested my obedience. He sat me in the chair, but this time without the straps, and simply rested his palm on my shoulder. I stayed perfectly still, deliberately keeping my breathing even to slow my pulse — I was so afraid of breaking that moment.

"Good girl," he said. "You need to accept this. You have nothing left to be afraid of."

After another three-hour session, I found myself back in my room. It had grown dark outside, so all the staff except for a few guards and on-duty nurses must have left by then.

Suddenly there came a long, drawn-out creak, and a painfully familiar silhouette appeared in the doorway. The doctor was holding a metal tray with several dishes on it and a small stainless steel cup. The food served here was simple enough — this time I got a bowl of warm chicken soup, a piece of fresh bread, and a cup of plain water.

"Open your mouth," he said, and brought the first spoonful to my lips.

I obeyed without the slightest thought. The doctor had run the session long this time, so I've missed dinner, which wasn't really a tragedy, considering that given the choice I would have lived on fresh air and lemon candy drops.

The spoon left traces of warm liquid at the corners of my mouth, but with each of his movements, each new near-forced swallow, my body filled with warmth and fullness.

I swallowed greedily, not taking my eyes off him. His face was closer than it had ever been, and I was tracking his every move, wanting to memorize every millimeter of his captivatingly indifferent face.

I looked up at him, languidly, and felt something at the corners of my lips almost like a drool — but not from hunger, from the desire to please and to take everything he would give.

"There we go," he said softly, as if deliberately. "Good girl. You need to be fully recovered by tomorrow, so I've given you something to help you fall asleep faster." He patted the edge of the bed gently, inviting me to lie down. "I have to admit, I'm proud of you. The results achieved in such a short time significantly exceed all projected indicators. That makes you an exceptionally valuable specimen."

Suddenly, he lifted me in his arms and, sweeping back the cold blanket in one sharp motion, lowered me back into bed before I could make a single sound.

He leaned in slightly, holding my gaze.

"But don't deceive yourself darling. Every last particle of serotonin and endorphins in your blood, your thoughts, your feelings, even the way you're breathing right now — all of it is the result of my work. And you have no right to share it with anyone but me."

His voice dropped a full octave.

"That is precisely why you belong to me, your mind and your body."

He paused, letting the words sink deeper:

"You will forget all the fears and sufferings that tormented you before. You won't have to worry or wait anymore. But you need to understand that everything has its price. And sometimes free will is the very least we can give up for absolute freedom of the mind."

Each word wrapped itself around me like a heavy fog, and I could feel myself sinking deeper into sleep with every passing second.

I could no longer answer him, couldn't even nod, but I knew: this was love. Or at least love's cruel interpretation — which was more than enough, in my long-distorted reality, with its equally broken moral compass.

His love was strict, commanding, and sometimes scorching. But it was the only thing that still kept me tethered to a world where even angels committed the worst of sins.

I belonged to him — and it was enough.`
  }
];


/* ──────────────────────────────────────────────────────────────
   [MUSIC TRACKS] — Local fallback playlist.
   ──────────────────────────────────────────────────────────────
   The Spotify embed is primary. These tracks play only if the
   user clicks the local player (hidden by default).

   CUSTOMIZATION:
   • Replace the src strings with your own .mp3 file paths.
   • The files should be placed in the /music/ folder.
   • Change the label strings to match your track names.
   ────────────────────────────────────────────────────────────── */
const MUSIC_TRACKS = [
  { label: "Prelude — Static",       src: "music/chapter1.mp3" },
  { label: "The Machine Hums",       src: "music/chapter2.mp3" },
  { label: "Belonging",              src: "music/ending.mp3"   }
];


/* ──────────────────────────────────────────────────────────────
   [PARTICLE CONFIG] — Dust particle look and behaviour.
   ────────────────────────────────────────────────────────────── */
const PARTICLE_CONFIG = {
  count:      120,
  minSize:    1.5,
  maxSize:    4,
  minSpeed:   0.15,
  maxSpeed:   0.4,
  opacity:    0.8
};


/* ================================================================
   INTERNAL STATE — do not edit unless you know what you're doing
   ================================================================ */

let currentChapter  = 0;
let fontSize        = 1.0;    /* multiplier on --font-size-base        */
let tocOpen         = false;
let isDark          = false;
let savedQuotes     = [];
let currentTrack    = 0;
let isPlaying       = false;
let audioEl         = null;
let particles       = [];
let animFrame       = null;


/* ================================================================
   DOM REFERENCES
   ================================================================ */

const $ = id => document.getElementById(id);

const DOM = {
  body:           $('body'),
  landingSection: $('landing'),
  readingSection: $('reading-section'),
  beginBtn:       $('begin-btn'),
  backBtn:        $('back-to-top-btn'),
  parallaxBg:     $('parallax-bg'),
  proseContent:   $('prose-content'),
  chapterHeading: $('chapter-heading'),
  chapterCounter: $('chapter-counter'),
  estTime:        $('estimated-time'),
  progressBar:    $('progress-bar'),
  progressCont:   $('progress-container'),
  headerChapter:  $('header-chapter-name'),
  tocSidebar:     $('toc-sidebar'),
  tocList:        $('toc-list'),
  tocToggle:      $('toc-toggle'),
  prevChapterBtn: $('prev-chapter-btn'),
  nextChapterBtn: $('next-chapter-btn'),
  fontIncrease:   $('font-increase'),
  fontDecrease:   $('font-decrease'),
  themeToggle:    $('theme-toggle'),
  themeIcon:      $('theme-icon'),
  dustCanvas:     $('dust-canvas'),
  selTooltip:     $('selection-tooltip'),
  saveQuoteBtn:   $('save-quote-btn'),
  quotesList:     $('quotes-list'),
  clearQuotesBtn: $('clear-quotes-btn'),
  playPauseBtn:   $('play-pause-btn'),
  prevTrackBtn:   $('prev-track'),
  nextTrackBtn:   $('next-track'),
  volumeSlider:   $('volume-slider'),
  trackName:      $('track-name'),
  localPlayer:    $('local-player')
};


/* ================================================================
   CHAPTER RENDERING
   ================================================================ */

/**
 * Converts raw chapter text into HTML paragraphs.
 * Blank lines → paragraph breaks.
 */
function renderProse(rawText) {
  return rawText
    .split(/\n{2,}/)
    .map(block => block.trim())
    .filter(Boolean)
    .map(block => {
      // Single newlines within a block become <br>
      const inner = block.replace(/\n/g, '<br>');
      return `<p>${inner}</p>`;
    })
    .join('\n');
}

/**
 * Load and display a chapter by index.
 */
function loadChapter(index) {
  if (index < 0 || index >= CHAPTERS.length) return;
  currentChapter = index;

  const chapter = CHAPTERS[index];

  // Update heading
  DOM.chapterHeading.textContent = chapter.title;
  DOM.headerChapter.textContent  = chapter.title;

  // Render prose with enter animation
  DOM.proseContent.innerHTML = renderProse(chapter.content);
  DOM.proseContent.classList.remove('prose-enter');
  // Force reflow to restart animation
  void DOM.proseContent.offsetWidth;
  DOM.proseContent.classList.add('prose-enter');

  // Estimated reading time (avg 200 wpm)
  const wordCount = chapter.content.split(/\s+/).length;
  const minutes   = Math.max(1, Math.ceil(wordCount / 200));
  DOM.estTime.textContent = `~${minutes} min read`;

  // Chapter counter
  DOM.chapterCounter.textContent = `${index + 1} / ${CHAPTERS.length}`;

  // Previous / next button states
  DOM.prevChapterBtn.disabled = index === 0;
  DOM.prevChapterBtn.style.visibility = index === 0 ? 'hidden' : 'visible';
  DOM.nextChapterBtn.disabled = index === CHAPTERS.length - 1;
  DOM.nextChapterBtn.style.visibility = index === CHAPTERS.length - 1 ? 'hidden' : 'visible';

  // Highlight active TOC item
  document.querySelectorAll('.toc-list a').forEach((a, i) => {
    a.classList.toggle('active', i === index);
  });

  // Scroll reading column to top
  DOM.readingSection.scrollTo({ top: 0 });
  window.scrollTo({ top: 0 });

  // Reset progress bar
  updateProgressBar();
}


/* ================================================================
   TABLE OF CONTENTS
   ================================================================ */

function buildTOC() {
  DOM.tocList.innerHTML = '';
  CHAPTERS.forEach((ch, i) => {
    const li = document.createElement('li');
    const a  = document.createElement('a');
    a.href = '#';
    a.textContent = ch.title;
    a.setAttribute('aria-label', `Go to ${ch.title}`);
    a.addEventListener('click', e => {
      e.preventDefault();
      loadChapter(i);
      // On mobile, close the sidebar after navigation
      if (window.innerWidth < 700) toggleTOC(false);
    });
    li.appendChild(a);
    DOM.tocList.appendChild(li);
  });
}

function toggleTOC(forceState) {
  tocOpen = forceState !== undefined ? forceState : !tocOpen;
  DOM.tocSidebar.classList.toggle('open', tocOpen);
  DOM.tocSidebar.setAttribute('aria-hidden', String(!tocOpen));
  DOM.tocToggle.setAttribute('aria-expanded', String(tocOpen));
}


/* ================================================================
   READING PROGRESS BAR
   ================================================================ */

function updateProgressBar() {
  const scrollTop    = window.scrollY || document.documentElement.scrollTop;
  const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
  const pct          = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
  DOM.progressBar.style.width = `${pct}%`;
  DOM.progressCont.setAttribute('aria-valuenow', Math.round(pct));
}


/* ================================================================
   PARALLAX BACKGROUND
   ================================================================ */

function handleParallax(e) {
  if (!DOM.parallaxBg) return;
  const x = (e.clientX / window.innerWidth  - 0.5) * 12;
  const y = (e.clientY / window.innerHeight - 0.5) * 8;
  DOM.parallaxBg.style.transform = `translate(${x}px, ${y}px)`;
}

// Gyroscope parallax for mobile
function handleDeviceOrientation(e) {
  if (!DOM.parallaxBg) return;
  const x = (e.gamma || 0) * 0.4;
  const y = (e.beta  || 0) * 0.3;
  DOM.parallaxBg.style.transform = `translate(${x}px, ${y}px)`;
}


/* ================================================================
   DUST PARTICLES (canvas)
   ================================================================ */

function initParticles() {
  const canvas = DOM.dustCanvas;
  const ctx    = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  particles = Array.from({ length: 150 }, () => ({
    x:       Math.random() * window.innerWidth,
    y:       Math.random() * window.innerHeight,
    r:       0.5 + Math.random() * 2,
    speedX:  (Math.random() - 0.5) * 0.6,
    speedY:  (Math.random() - 0.5) * 0.6,
    angle:   Math.random() * Math.PI * 2,
    spin:    (Math.random() - 0.5) * 0.03,
    alpha:   0.3 + Math.random() * 0.5,
    flicker: Math.random() * Math.PI * 2,
    length:  3 + Math.random() * 6
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      // Flicker opacity gently
      p.flicker += 0.02;
      const opacity = p.alpha * (0.7 + Math.sin(p.flicker) * 0.3);

      // Draw as a tiny elongated dust speck, not a circle
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.beginPath();
      ctx.ellipse(0, 0, p.length, p.r * 0.5, 0, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(215, 208, 210, ${opacity})`;
      ctx.fill();
      ctx.restore();

      // Chaotic movement — drifts in all directions with turbulence
      p.speedX += (Math.random() - 0.5) * 0.04;
      p.speedY += (Math.random() - 0.5) * 0.04;

      // Limit max speed so they don't fly away
      p.speedX = Math.max(-0.8, Math.min(0.8, p.speedX));
      p.speedY = Math.max(-0.8, Math.min(0.8, p.speedY));

      p.x     += p.speedX;
      p.y     += p.speedY;
      p.angle += p.spin;

      // Wrap around screen edges
      if (p.x < -10)                    p.x = canvas.width  + 10;
      if (p.x > canvas.width  + 10)     p.x = -10;
      if (p.y < -10)                    p.y = canvas.height + 10;
      if (p.y > canvas.height + 10)     p.y = -10;
    });

    animFrame = requestAnimationFrame(draw);
  }

  draw();
}

/* ================================================================
   FONT SIZE CONTROL
   ================================================================ */

function applyFontSize() {
  // CUSTOMIZATION: min/max font scale limits
  fontSize = Math.max(0.75, Math.min(1.4, fontSize));
  document.documentElement.style.setProperty(
    '--font-size-base',
    `${fontSize * 1.18}rem`
  );
}


/* ================================================================
   DARK / LIGHT MODE TOGGLE
   ================================================================ */

function toggleTheme() {
  isDark = !isDark;
  DOM.body.classList.toggle('dark-mode', isDark);
  DOM.themeIcon.textContent = isDark ? '☀' : '☽';
  // Persist preference
  try { localStorage.setItem('twHWM-theme', isDark ? 'dark' : 'light'); } catch(_) {}
}

function loadSavedTheme() {
  try {
    const saved = localStorage.getItem('twHWM-theme');
    if (saved === 'dark') toggleTheme();
  } catch(_) {}
}


/* ================================================================
   TEXT SELECTION → SAVE QUOTE
   ================================================================ */

document.addEventListener('mouseup', e => {
  const selection = window.getSelection();
  const text      = selection ? selection.toString().trim() : '';

  if (text.length > 8 && text.length < 280) {
    // Position tooltip near the selection
    const range  = selection.getRangeAt(0);
    const rect   = range.getBoundingClientRect();
    const tooltip = DOM.selTooltip;

    tooltip.style.left = `${rect.left + rect.width / 2 + window.scrollX}px`;
    tooltip.style.top  = `${rect.top  + window.scrollY}px`;
    tooltip.classList.add('visible');
    tooltip.setAttribute('aria-hidden', 'false');
    tooltip._pendingQuote = text;
  } else {
    DOM.selTooltip.classList.remove('visible');
    DOM.selTooltip.setAttribute('aria-hidden', 'true');
  }
});

// Hide tooltip on outside click
document.addEventListener('mousedown', e => {
  if (!DOM.selTooltip.contains(e.target)) {
    DOM.selTooltip.classList.remove('visible');
    DOM.selTooltip.setAttribute('aria-hidden', 'true');
  }
});

DOM.saveQuoteBtn.addEventListener('click', () => {
  const quote = DOM.selTooltip._pendingQuote;
  if (!quote) return;

  savedQuotes.push(quote);
  renderQuotes();
  persistQuotes();

  DOM.selTooltip.classList.remove('visible');
  DOM.selTooltip.setAttribute('aria-hidden', 'true');
  window.getSelection().removeAllRanges();
});

function renderQuotes() {
  DOM.quotesList.innerHTML = '';

  if (savedQuotes.length === 0) {
    const li = document.createElement('li');
    li.className   = 'quotes-empty';
    li.textContent = 'Highlight any sentence in the text to save it here.';
    DOM.quotesList.appendChild(li);
    return;
  }

  savedQuotes.forEach((q, i) => {
    const li = document.createElement('li');
    li.textContent = `"${q}"`;
    li.title       = 'Click to remove';
    li.style.cursor = 'pointer';
    li.addEventListener('click', () => {
      savedQuotes.splice(i, 1);
      renderQuotes();
      persistQuotes();
    });
    DOM.quotesList.appendChild(li);
  });
}

function persistQuotes() {
  try { localStorage.setItem('twHWM-quotes', JSON.stringify(savedQuotes)); } catch(_) {}
}

function loadSavedQuotes() {
  try {
    const q = JSON.parse(localStorage.getItem('twHWM-quotes') || '[]');
    if (Array.isArray(q)) { savedQuotes = q; renderQuotes(); }
  } catch(_) {}
}

DOM.clearQuotesBtn.addEventListener('click', () => {
  savedQuotes = [];
  renderQuotes();
  persistQuotes();
});


/* ================================================================
   LOCAL AUDIO PLAYER (fallback)
   ================================================================ */

function initAudioPlayer() {
  audioEl = DOM.audioEl = $('audio-player');
  if (!audioEl) return;

  // Load first track
  loadTrack(0);

  DOM.playPauseBtn.addEventListener('click', togglePlay);
  DOM.prevTrackBtn.addEventListener('click', () => changeTrack(-1));
  DOM.nextTrackBtn.addEventListener('click', () => changeTrack(1));

  DOM.volumeSlider.addEventListener('input', () => {
    audioEl.volume = parseFloat(DOM.volumeSlider.value);
  });

  audioEl.addEventListener('ended', () => changeTrack(1));
  audioEl.volume = parseFloat(DOM.volumeSlider.value);
}

function loadTrack(index) {
  currentTrack = (index + MUSIC_TRACKS.length) % MUSIC_TRACKS.length;
  const track  = MUSIC_TRACKS[currentTrack];
  if (!track || !audioEl) return;
  audioEl.src = track.src;
  DOM.trackName.textContent = track.label;
  if (isPlaying) audioEl.play().catch(() => {});
}

function togglePlay() {
  if (!audioEl) return;
  if (isPlaying) {
    audioEl.pause();
    DOM.playPauseBtn.textContent = '▶';
  } else {
    audioEl.play().catch(() => {});
    DOM.playPauseBtn.textContent = '⏸';
  }
  isPlaying = !isPlaying;
}

function changeTrack(dir) {
  loadTrack(currentTrack + dir);
}


/* ================================================================
   LANDING → READING TRANSITION
   ================================================================ */

DOM.beginBtn.addEventListener('click', () => {
  DOM.landingSection.style.display = 'none';
  DOM.readingSection.classList.add('visible');

  // Scroll to top of reading section
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Load first chapter
  loadChapter(0);
});

DOM.backBtn.addEventListener('click', () => {
  DOM.readingSection.classList.remove('visible');
  DOM.landingSection.style.display = '';
  window.scrollTo({ top: 0, behavior: 'instant' });
});


/* ================================================================
   CHAPTER NAVIGATION
   ================================================================ */

DOM.prevChapterBtn.addEventListener('click', () => {
  if (currentChapter > 0) loadChapter(currentChapter - 1);
});

DOM.nextChapterBtn.addEventListener('click', () => {
  if (currentChapter < CHAPTERS.length - 1) loadChapter(currentChapter + 1);
});

// Keyboard navigation
document.addEventListener('keydown', e => {
  // Only when reading section is visible
  if (!DOM.readingSection.classList.contains('visible')) return;

  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    if (currentChapter < CHAPTERS.length - 1) loadChapter(currentChapter + 1);
  }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    if (currentChapter > 0) loadChapter(currentChapter - 1);
  }
  if (e.key === 'Escape') toggleTOC(false);
});


/* ================================================================
   CONTROLS WIRING
   ================================================================ */

DOM.fontIncrease.addEventListener('click', () => { fontSize += 0.08; applyFontSize(); });
DOM.fontDecrease.addEventListener('click', () => { fontSize -= 0.08; applyFontSize(); });

DOM.themeToggle.addEventListener('click', toggleTheme);
DOM.tocToggle.addEventListener('click', () => toggleTOC());

window.addEventListener('scroll', updateProgressBar, { passive: true });

window.addEventListener('mousemove', handleParallax, { passive: true });
if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', handleDeviceOrientation, { passive: true });
}


/* ================================================================
   INIT
   ================================================================ */

function init() {
  buildTOC();
  initParticles();
  initAudioPlayer();
  loadSavedTheme();
  loadSavedQuotes();
  applyFontSize();

  // Keyboard navigation hint in aria-label
  DOM.prevChapterBtn.setAttribute('aria-label', 'Previous chapter (left arrow key)');
  DOM.nextChapterBtn.setAttribute('aria-label', 'Next chapter (right arrow key)');
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
