# Grammar Handbook 英文法

A bilingual (English / 日本語) study app built from **English_Grammar_Handbook.pdf** in the folder above.

- **77 lessons** covering every grammar point in the handbook, in 8 chapters
  (the handbook's own practice chapter is replaced by the practice sets below)
- **770 practice questions**: 10 per lesson, mixing multiple choice, typed answers and word ordering
- **Three language modes**: `EN` · `日本語` · `EN+日` (both, for bilingual reading)
- **Key points**: every lesson opens with its four key points, which come back on the chapter map and after each quiz
- **65 diagrams** inside the lessons: timelines for the tenses, colour-coded sentence parts (S V O C),
  scales, "which form?" finders, side-by-side comparisons, and more
- **Mind map** (`#/map`): the whole handbook on one page, from 8 chapters to 23 groups to 77 lessons, with your progress
- **Chapter maps**: each chapter page shows its lessons as cards with their key points
- **Extras**: 131 irregular verbs with a typing drill, a 53-term glossary, chapter tests, mixed practice,
  and a "review my mistakes" queue
- Click any 🔊 button, or any italic example sentence, to hear it read aloud
- Scores are saved in the browser (localStorage) on the device you study on

## How to open it

Double-click **`index.html`**. There's nothing to install, and it works offline
(online, it also loads nicer fonts from Google Fonts; offline it falls back to system fonts).

A hosted copy is also published as a private Claude artifact, so the same app works on a phone.

## How it is organized

```
index.html          the page shell (loads everything below)
css/app.css         all styling, light + dark themes
js/core.js          chapter list + the GH namespace
js/app.js           the engine: routing, lessons, diagrams, mind map, quiz, drill, speech, progress
data/01-…-08-….js   the lessons and questions, one file per chapter part
data/map.js         the mind-map layer: lesson groups, short labels, key points
data/verbs.js       131 irregular verbs (V1 / V2 / V3 + meanings)
data/glossary.js    grammar terms in English and Japanese
```

### Editing or adding content

Every lesson is one `GH.topic({...})` call. The shape is:

```js
GH.topic({
  id: "present-perfect",          // used in the URL: #/t/present-perfect
  ch: "tense", p: 35,             // chapter id, handbook page number
  t:  { en: "Present perfect simple", ja: "現在完了形" },
  d:  { en: "…one-line summary…",     ja: "…一行の説明…" },
  body: [                          // blocks, rendered in order
    { k: "core",  en: "…", ja: "…" },          // key-meaning box
    { k: "h",     en: "…", ja: "…" },          // heading
    { k: "p",     en: "…", ja: "…" },          // paragraph
    { k: "ex",    items: [["English example", { en: "note", ja: "注" }]] },
    { k: "form",  rows: [["aff", "S + have/has + V3", "I have eaten."]] },
    { k: "table", head: [...], rows: [[...]] },
    { k: "watch", en: "…", ja: "…" },          // red "watch out" box
    { k: "tip",   en: "…", ja: "…" }           // note for Japanese speakers
  ],
  q: [                             // exactly 10 questions
    { q: "She ___ here.", o: ["work", "works"], a: 1, e: { en: "…", ja: "…" } },
    { q: "I ___ (know) her since 2024.", i: ["have known", "'ve known"], e: {…} },
    { w: ["We", "consider", "the", "plan", "useful."], e: {…} }
  ]
});
```

- `o` + `a` = multiple choice (`a` is the index of the correct option; options are shuffled)
- `i` = typed answer (list every acceptable spelling; contractions are matched automatically, and
  words retyped from around the blank are ignored); on a `w` question, `i` lists the other valid orders
- `w` = word-ordering question
- `h` = optional situation hint, `{ en, ja }`
- In any text: `<x>…</x>` marks an English example (clickable for audio), `<s>…</s>` marks an
  incorrect form (shown in red), `<b>…</b>` highlights, `<code>…</code>` renders a formula
  with S / V / O / C colour-coded, and `<g>…</g>` shows words that are left out (ellipsis) in
  faded brackets; they are never read aloud.

### Diagram blocks

Every label is `{ en, ja }` unless it is an English form or sentence.

| Block | What it draws | Shape |
|---|---|---|
| `tl` | timelines (past · now · future) | `rows: [{ l, s, n, m: [marks] }]`; marks are `["x", t, label]` event, `["xs", t1, t2, count]` repeated events, `["o", t, label]` planned, `["bar", t1, t2, label]` state, `["wave", t1, t2, label]` in progress, `["arc", from, to, label]` connection, `["ref", t, label]` the time referred to, `["span", t1, t2, label]` duration; `t` runs from −1 (past) through 0 (now) to 1 (future) |
| `sv` | sentence parts as coloured tiles | `rows: [{ l, p: [[role, words, label?]], bad?, n }]` or `{ arrow: {en, ja} }`; roles: `S V O C M A F X IC SC J N D AJ AV` |
| `scale` | where expressions sit between two ends | `lo, hi, items: [[sentence, 0–100, note]]` |
| `flow` | an interactive "which form?" finder | `start, n: { id: { q, o: [[label, nextId]] } or { r, nt, ex } }` |
| `cmp` | side-by-side columns | `cols: [{ h, s, p: [points], ex: [examples] }]` (2–4 columns) |
| `shift` | before → after pairs | `head: [a, b], rows: [[from, to, note?]]` |
| `chain` | a verb chain | `s: sentence, items: [[word, label]]` |
| `nest` | units inside units | `items: [[label, text]]`, outermost first; each text must appear inside the one before |
| `pic` | in / on / at pictures | `art: "place"` (in · on · at icons) or `"time"` (a funnel), `items: [[word, text, examples]]` |

### The mind-map layer (`data/map.js`)

`GH.map.groups` lists the 23 groups (`{ id, ch, t, ids: [lesson ids] }`), and
`GH.map.topics[id]` holds each lesson's short label `s` and its four key points `k`.
Every lesson must belong to exactly one group of its own chapter.

After editing, reload the page and open the browser console: a built-in checker reports the
counts (lessons, questions, key points, diagrams, groups) and any structural problems it finds,
such as a missing translation or a finder step that leads nowhere.
