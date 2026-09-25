/* Grammar Handbook 英文法 — shared namespace. Data files call GH.topic(...) in reading order. */
window.GH = (() => {
  const topics = [];
  const byId = {};

  const chapters = [
    { id: "found", n: "01", t: { en: "Foundations", ja: "基礎" },
      d: { en: "Word classes, verb forms, sentence parts, and how clauses join.", ja: "品詞・動詞の形・文の要素・節のつなぎ方" } },
    { id: "nouns", n: "02", t: { en: "Nouns & modifiers", ja: "名詞と修飾語" },
      d: { en: "Countability, plurals, articles, pronouns, agreement, adjectives, adverbs, prepositions.", ja: "可算・不可算、複数形、冠詞、代名詞、一致、形容詞、副詞、前置詞" } },
    { id: "tense", n: "03", t: { en: "Tense & aspect", ja: "時制と相" },
      d: { en: "The twelve tense patterns, the other future forms, and how to choose between them.", ja: "12の時制パターンとその他の未来表現、そして使い分け" } },
    { id: "qm", n: "04", t: { en: "Questions & modals", ja: "疑問文と助動詞" },
      d: { en: "Questions, negatives, requests, and the modal verb system.", ja: "疑問文・否定文・依頼表現・助動詞の体系" } },
    { id: "voice", n: "05", t: { en: "Voice & conditionals", ja: "態と仮定法" },
      d: { en: "Passive voice, causatives, conditionals, and wishes.", ja: "受動態・使役・条件文・仮定法・wish" } },
    { id: "clauses", n: "06", t: { en: "Clauses & verb patterns", ja: "節と動詞のパターン" },
      d: { en: "Reported speech, relative and noun clauses, gerunds, infinitives, participles.", ja: "話法・関係詞節・名詞節・動名詞・不定詞・分詞" } },
    { id: "adv", n: "07", t: { en: "Advanced structure & writing", ja: "発展構文とライティング" },
      d: { en: "Purpose and result, emphasis, inversion, ellipsis, punctuation, register.", ja: "目的と結果・強調・倒置・省略・句読点・文体" } },
    { id: "ref", n: "08", t: { en: "Verb forms & reference", ja: "動詞の活用とリファレンス" },
      d: { en: "Irregular verbs, easily confused pairs, and a sentence-building checklist.", ja: "不規則動詞・紛らわしい動詞・文を組み立てるチェックリスト" } }
  ];

  function topic(t) {
    if (byId[t.id]) { console.warn("Duplicate topic id:", t.id); return; }
    topics.push(t);
    byId[t.id] = t;
  }

  // map: the mind-map layer (lesson groups, short labels, key points), filled by data/map.js
  return { chapters, topics, byId, topic, verbs: [], glossary: [], map: { groups: [], topics: {} } };
})();
