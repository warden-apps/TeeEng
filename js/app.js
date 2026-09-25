/* Grammar Handbook 英文法 — app engine. Plain JavaScript, no build step. */
(() => {
  "use strict";
  const GH = window.GH;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const app = $("#app"), topbar = $("#top"), drawer = $("#drawer"), scrim = $("#scrim"), foot = $("#foot");
  const IS_LOCAL = location.protocol === "file:";
  const PDF = "../English_Grammar_Handbook.pdf";

  /* ------------------------------------------------------------------ interface text */
  const UI = {
    en: {
      app: "Grammar Handbook", appSub: "英文法ハンドブック", tagline: "Meaning · Form · Real use",
      heroLead: "Every grammar point from the reference handbook, explained in English or Japanese, with ten practice questions per topic.",
      contents: "Contents", search: "Search topics", close: "Close", home: "Home", tools: "Tools & review",
      start: "Start lesson 1", resume: "Continue", mixed: "Mixed practice", mistakes: "Review mistakes",
      verbs: "Irregular verbs", glossary: "Glossary",
      mapTitle: "The 12-pattern map", mapNote: "Time × viewpoint. Open any pattern.",
      present: "Present", past: "Past", future: "Future",
      simple: "Simple", continuous: "Continuous", perfect: "Perfect", perfectCont: "Perfect continuous",
      topicsN: "topics", qN: "questions",
      opened: "Lessons opened", done: "Quizzes taken", avg: "Average score", toReview: "Saved mistakes",
      practice: "Practice", practice10: "Practice · 10 questions",
      practiceLead: "Ten questions on this topic, with an explanation after every answer.",
      best: "Best", core: "Core meaning", watch: "Watch out", tip: "For Japanese speakers", remember: "Remember",
      form: "Form", pattern: "Pattern", example: "Example",
      aff: "Affirmative", neg: "Negative", q: "Question", short: "Short answer",
      page: "Handbook p.", prev: "Previous", next: "Next",
      chooseBest: "Choose the best answer", typeAnswer: "Type the missing words", orderWords: "Put the words in order",
      tapWords: "Tap the words below to build the sentence.",
      situation: "Situation", check: "Check", reset: "Clear", cont: "Next question", results: "See results",
      nothing: "(nothing)", correct: "Correct", wrong: "Not quite", answer: "Answer", yours: "Your answer",
      listen: "Listen", from: "From",
      qOf: (i, n) => `Question ${i} of ${n}`,
      score: "Score", retry: "Try again", newSet: "New set", backLesson: "Back to lesson", nextTopic: "Next topic",
      review: "Your answers",
      msg10: "Perfect score. This pattern is yours.",
      msg8: "Strong result. Read the explanation for anything you missed.",
      msg5: "Good start. Reread the explanations, then try again.",
      msg0: "Worth another look. Reread the lesson, then try again.",
      noMistakes: "No saved mistakes. Wrong answers from any quiz collect here until you answer them correctly.",
      chTest: "Chapter test", chTestNote: "15 random questions from this chapter.",
      mixedNote: "20 random questions from every chapter.", mistakesNote: "Retry the questions you got wrong.",
      verbsNote: "V1 · V2 · V3 for 131 verbs, with a typing drill.", glossaryNote: "Grammar terms in English and Japanese.",
      drill: "Verb drill", drillLead: "Type the past form (V2) and the past participle (V3).",
      all: "All", searchVerbs: "Search verbs or meanings", searchTerms: "Search terms",
      v1: "V1 · base", v2: "V2 · past", v3: "V3 · past participle", meaning: "Meaning", group: "Type",
      noMatch: "No matches.", resetP: "Reset progress", resetSure: "Tap again to erase all saved scores",
      resetDone: "Progress cleared.", saved: "Scores are saved in this browser only.",
      source: "Lessons follow “English Grammar: The Reference Handbook”, with notes for Japanese speakers and new practice sets.",
      openPdf: "Open this page in the PDF", lang: "Explanation language", chapter: "Chapter", lesson: "Lesson",
      notFound: "That page does not exist.", goHome: "Go to contents", drillDone: "Drill complete",
      alsoOk: "Also accepted",
      groups: { AAA: "all three the same (cut–cut–cut)", ABB: "V2 = V3 (buy–bought–bought)", ABA: "V1 = V3 (come–came–come)", AAB: "V1 = V2 (beat–beat–beaten)", ABC: "all different (eat–ate–eaten)" },
      keyPoints: "Key points", recap: "Key points to remember",
      mindMap: "Mind map", mapPage: "Grammar mind map",
      mapLead: "The whole handbook on one page: 8 chapters, 23 groups, 77 lessons. Open a group to see its lessons, then open a lesson to study it. On a computer, point at a lesson to preview its key points.",
      expandAll: "Show all lessons", collapseAll: "Groups only",
      lgNone: "Not started", lgRead: "Opened", lgLo: "Score 0–4", lgMid: "5–7", lgHi: "8–10",
      route: "Your route", routeLead: "Take the chapters in order, or jump in anywhere. Every lesson gives you key points, diagrams, and ten practice questions.",
      openMap: "Open the mind map", youAreHere: "you are here",
      chapterMap: "Chapter map", chapterMapLead: "Every lesson in this chapter, with the points to remember. Open any card to study it.",
      prevCh: "Previous chapter", nextCh: "Next chapter",
      tlPast: "PAST", tlNow: "NOW", tlFuture: "FUTURE",
      lgEvent: "event", lgProg: "in progress", lgState: "state", lgLink: "connection", lgRef: "time referred to", lgPlan: "planned or expected",
      flowUse: "Use", flowAgain: "Start again", flowAll: "Show every path", flowYour: "Your answers so far", flowChange: "Change this answer"
    },
    ja: {
      app: "英文法ハンドブック", appSub: "Grammar Handbook", tagline: "意味・形・実際の使い方",
      heroLead: "ハンドブックのすべての文法項目を、英語または日本語で解説。各トピックに練習問題が10問ずつあります。",
      contents: "目次", search: "トピックを検索", close: "閉じる", home: "ホーム", tools: "ツールと復習",
      start: "レッスン1から始める", resume: "続きから", mixed: "ランダム演習", mistakes: "間違えた問題の復習",
      verbs: "不規則動詞", glossary: "文法用語集",
      mapTitle: "12の時制マップ", mapNote: "「時」×「見方」。好きなパターンを開けます。",
      present: "現在", past: "過去", future: "未来",
      simple: "単純形", continuous: "進行形", perfect: "完了形", perfectCont: "完了進行形",
      topicsN: "トピック", qN: "問",
      opened: "開いたレッスン", done: "受けたテスト", avg: "平均スコア", toReview: "復習待ちの問題",
      practice: "練習問題", practice10: "練習問題（10問）",
      practiceLead: "このトピックの問題が10問。1問ごとに解説が表示されます。",
      best: "ベスト", core: "基本の意味", watch: "注意", tip: "日本語話者のためのポイント", remember: "おぼえておこう",
      form: "形", pattern: "パターン", example: "例",
      aff: "肯定文", neg: "否定文", q: "疑問文", short: "短い答え方",
      page: "ハンドブック p.", prev: "前へ", next: "次へ",
      chooseBest: "最も適切なものを選びましょう", typeAnswer: "空所に入る語句を入力しましょう", orderWords: "語句を正しい順に並べましょう",
      tapWords: "下の語句をタップして文を作りましょう。",
      situation: "状況", check: "答え合わせ", reset: "クリア", cont: "次の問題", results: "結果を見る",
      nothing: "（何も入れない）", correct: "正解", wrong: "不正解", answer: "正解", yours: "あなたの答え",
      listen: "音声を聞く", from: "トピック",
      qOf: (i, n) => `第${i}問 / 全${n}問`,
      score: "スコア", retry: "もう一度", newSet: "別の問題で", backLesson: "レッスンに戻る", nextTopic: "次のトピック",
      review: "解答の振り返り",
      msg10: "満点です。この文法はもうあなたのものです。",
      msg8: "よくできました。間違えた問題は解説を確認しましょう。",
      msg5: "いいスタートです。解説を読み直して、もう一度挑戦しましょう。",
      msg0: "レッスンをもう一度読んでから再挑戦しましょう。",
      noMistakes: "保存された間違いはありません。どのテストでも、間違えた問題はここに集まり、正解すると消えます。",
      chTest: "章末テスト", chTestNote: "この章からランダムに15問。",
      mixedNote: "全章からランダムに20問。", mistakesNote: "間違えた問題にもう一度挑戦。",
      verbsNote: "131語の V1・V2・V3 と意味。入力ドリルつき。", glossaryNote: "文法用語の英語と日本語の対応表。",
      drill: "不規則動詞ドリル", drillLead: "過去形（V2）と過去分詞（V3）を入力しましょう。",
      all: "すべて", searchVerbs: "動詞・意味で検索", searchTerms: "用語を検索",
      v1: "V1・原形", v2: "V2・過去形", v3: "V3・過去分詞", meaning: "意味", group: "タイプ",
      noMatch: "該当するものがありません。", resetP: "学習記録をリセット", resetSure: "もう一度押すと記録をすべて消去します",
      resetDone: "学習記録を消去しました。", saved: "スコアはこのブラウザにのみ保存されます。",
      source: "解説は「English Grammar: The Reference Handbook」に沿っています。日本語話者向けの注記と新しい練習問題を加えました。",
      openPdf: "PDFの該当ページを開く", lang: "解説の言語", chapter: "第", lesson: "レッスン",
      notFound: "ページが見つかりません。", goHome: "目次へ", drillDone: "ドリル完了",
      alsoOk: "別解",
      groups: { AAA: "3つとも同じ（cut–cut–cut）", ABB: "V2＝V3（buy–bought–bought）", ABA: "V1＝V3（come–came–come）", AAB: "V1＝V2（beat–beat–beaten）", ABC: "すべて異なる（eat–ate–eaten）" },
      keyPoints: "要点", recap: "おぼえておきたい要点",
      mindMap: "マップ", mapPage: "英文法マインドマップ",
      mapLead: "ハンドブック全体を1ページに：8つの章、23のグループ、77のレッスン。グループを開くとレッスンが表示され、レッスンを開いて学習できます。パソコンでは、レッスンにカーソルを合わせると要点が表示されます。",
      expandAll: "すべてのレッスンを表示", collapseAll: "グループだけ表示",
      lgNone: "未学習", lgRead: "開いた", lgLo: "0〜4点", lgMid: "5〜7点", lgHi: "8〜10点",
      route: "学習ルート", routeLead: "章の順に進んでも、好きなところから始めてもかまいません。どのレッスンにも要点・図解・練習問題10問があります。",
      openMap: "マインドマップを開く", youAreHere: "学習中",
      chapterMap: "章のマップ", chapterMapLead: "この章のすべてのレッスンと、おぼえておきたい要点。カードを開いて学習しましょう。",
      prevCh: "前の章", nextCh: "次の章",
      tlPast: "過去", tlNow: "今", tlFuture: "未来",
      lgEvent: "出来事", lgProg: "進行中", lgState: "状態", lgLink: "つながり", lgRef: "基準の時", lgPlan: "予定・予測",
      flowUse: "使う形", flowAgain: "最初から", flowAll: "すべての分岐を見る", flowYour: "ここまでの答え", flowChange: "この答えを変える"
    }
  };

  /* ------------------------------------------------------------------ saved progress */
  const KEY = "grammar-handbook-v1";
  const P = { lang: "", best: {}, last: {}, read: {}, wrong: {}, recent: "", n: 0, ok: 0, mm: {} };
  try {
    const d = JSON.parse(localStorage.getItem(KEY) || "null");
    if (d && typeof d === "object") for (const k of Object.keys(P)) if (d[k] != null && typeof d[k] === typeof P[k]) P[k] = d[k];
  } catch (e) { /* storage unavailable: the app still works, without saved progress */ }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch (e) { /* ignore */ } }

  let LANG = ["en", "ja", "both"].includes(P.lang) ? P.lang
    : ((navigator.language || "").toLowerCase().startsWith("ja") ? "ja" : "en");

  /* ------------------------------------------------------------------ text helpers */
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const strip = s => String(s == null ? "" : s).replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&");
  const one = () => (LANG === "ja" ? "ja" : "en");
  function ui(k, ...args) {
    const v = UI[one()][k] != null ? UI[one()][k] : UI.en[k];
    return typeof v === "function" ? v(...args) : (v != null ? v : k);
  }
  // Label in both languages when the reader chose bilingual mode.
  function uiB(k) { return LANG === "both" ? `${UI.en[k]}<span class="lbl-ja" lang="ja">${UI.ja[k]}</span>` : ui(k); }
  function pick(o) { if (o == null) return ""; if (typeof o === "string") return o; return LANG === "ja" ? (o.ja || o.en || "") : (o.en || o.ja || ""); }
  function tx(o) {
    if (o == null) return "";
    if (typeof o === "string") return o;
    if (LANG === "both" && o.en && o.ja) return `<span lang="en">${o.en}</span><span class="jb" lang="ja">${o.ja}</span>`;
    return `<span lang="${LANG === "ja" && o.ja ? "ja" : "en"}">${pick(o)}</span>`;
  }
  function hx(o) {
    if (typeof o === "string") return o;
    if (LANG === "both" && o.ja) return `<span lang="en">${o.en}</span><span class="h-ja" lang="ja">${o.ja}</span>`;
    return pick(o);
  }
  function para(o, cls = "") {
    if (o == null) return "";
    if (typeof o === "string") return `<p class="${cls}">${o}</p>`;
    if (LANG === "both" && o.en && o.ja) return `<div class="bi ${cls}"><p lang="en">${o.en}</p><p class="bi-ja" lang="ja">${o.ja}</p></div>`;
    return `<p class="${cls}" lang="${LANG === "ja" && o.ja ? "ja" : "en"}">${pick(o)}</p>`;
  }
  // A short inline label: one language, or "English · 日本語" in bilingual mode.
  function inl(o) {
    if (o == null) return "";
    if (typeof o === "string") return o;
    return LANG === "both" && o.en && o.ja ? `${o.en}<span class="lbl-ja" lang="ja">${o.ja}</span>` : pick(o);
  }
  // A node label for the maps: one language, or English over Japanese in bilingual mode.
  function lab(o) {
    if (typeof o === "string") return `<span lang="en">${o}</span>`;
    if (LANG === "both" && o.ja) return `<span lang="en">${o.en}</span><span class="mm-ja" lang="ja">${o.ja}</span>`;
    return `<span lang="${LANG === "ja" && o.ja ? "ja" : "en"}">${pick(o)}</span>`;
  }
  // Text for speech: words shown as <g>omitted</g> are never read aloud.
  const speakable = s => strip(String(s == null ? "" : s).replace(/<g>[\s\S]*?<\/g>/g, ""))
    .replace(/\s*→\s*/g, ", ").replace(/\s+\/\s+/g, ", ").replace(/\s+/g, " ").replace(/ ([.,!?;:])/g, "$1").trim();
  // Colour the grammar roles inside a formula: S, V…, O, C.
  function fx(s) {
    return esc(s).replace(/(^|[\s+/(\[→])(S|O|C|V1|V2|V3|V-ing|V-s|V)(?=$|[\s+/)\],.?;:!→])/g,
      (m, pre, tok) => `${pre}<span class="r-${tok[0] === "V" ? "v" : tok.toLowerCase()}">${tok}</span>`);
  }

  /* ------------------------------------------------------------------ speech */
  const tts = {
    ok: typeof window.speechSynthesis !== "undefined" && typeof window.SpeechSynthesisUtterance !== "undefined",
    voice: null,
    pick() {
      try {
        const vs = speechSynthesis.getVoices().filter(v => /^en([-_]|$)/i.test(v.lang));
        const us = vs.filter(v => /US/i.test(v.lang));
        this.voice = us.find(v => /natural|online|google/i.test(v.name)) || us[0] ||
          vs.find(v => /GB/i.test(v.lang)) || vs[0] || null;
      } catch (e) { this.voice = null; }
    },
    say(text) {
      if (!this.ok || !text) return;
      try {
        speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(speakable(text));
        u.lang = (this.voice && this.voice.lang) || "en-US";
        if (this.voice) u.voice = this.voice;
        u.rate = 0.92;
        speechSynthesis.speak(u);
      } catch (e) { /* speech not available in this view */ }
    }
  };
  if (tts.ok) { tts.pick(); try { speechSynthesis.addEventListener("voiceschanged", () => tts.pick()); } catch (e) { /* ignore */ } }

  /* ------------------------------------------------------------------ icons */
  const I = {
    menu: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg>',
    close: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg>',
    speak: '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4z" fill="currentColor"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/></svg>',
    ok: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>',
    no: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M7 7l10 10M17 7L7 17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" fill="none"/></svg>',
    right: '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>',
    left: '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M19 12H6M11 6l-6 6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>',
    search: '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="2" fill="none"/><path d="M16 16l4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    map: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><g stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"><circle cx="12" cy="12" r="3.2"/><circle cx="4.5" cy="5.5" r="2"/><circle cx="19.5" cy="5.5" r="2"/><circle cx="4.5" cy="18.5" r="2"/><circle cx="19.5" cy="18.5" r="2"/><path d="M9.6 9.9L6 7M14.4 9.9L18 7M9.6 14.1L6 17M14.4 14.1L18 17"/></g></svg>',
    down: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 4v15M6 13l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>'
  };
  function sayBtn(text, cls = "say") {
    if (!tts.ok) return "";
    const t = esc(speakable(text));
    return `<button type="button" class="${cls}" data-say="${t}" aria-label="${esc(ui("listen"))}" title="${esc(ui("listen"))}">${I.speak}</button>`;
  }

  /* ------------------------------------------------------------------ topic helpers */
  const chapterOf = t => GH.chapters.find(c => c.id === t.ch);
  const topicsOf = id => GH.topics.filter(t => t.ch === id);
  const tMain = t => (LANG === "ja" ? t.t.ja : t.t.en);
  const tSub = t => (LANG === "ja" ? t.t.en : t.t.ja);
  function status(id) {
    const b = P.best[id];
    if (b == null) return P.read[id] ? "read" : "none";
    return b >= 8 ? "hi" : b >= 5 ? "mid" : "lo";
  }
  const scoreChip = id => (P.best[id] == null ? "" : `<span class="sc sc-${status(id)}">${P.best[id]}/10</span>`);
  const searchText = t => [t.t.en, t.t.ja, t.d && t.d.en, t.d && t.d.ja, t.id.replace(/-/g, " "), t.kw || ""].join(" ").toLowerCase();
  function trow(t, compact) {
    const cur = (view.name === "t" || view.name === "q") && view.arg === t.id;
    return `<a class="trow${compact ? " sm" : ""}" href="#/t/${t.id}" data-s="${esc(searchText(t))}"${cur ? ' aria-current="page"' : ""}>` +
      `<span class="st st-${status(t.id)}" aria-hidden="true"></span>` +
      `<span class="tt"><span class="t1">${tMain(t)}</span>${compact ? "" : `<span class="t2">${tSub(t)}</span>`}</span>` +
      `${scoreChip(t.id)}</a>`;
  }
  function itemFromQid(qid) {
    const k = qid.lastIndexOf(":");
    if (k < 0) return null;
    const t = GH.byId[qid.slice(0, k)], i = +qid.slice(k + 1);
    return t && t.q && t.q[i] ? { tid: t.id, i, q: t.q[i] } : null;
  }
  const mistakeItems = () => Object.keys(P.wrong).map(itemFromQid).filter(Boolean);

  /* ------------------------------------------------------------------ mind-map layer */
  const MM = GH.map;
  const keysOf = id => (MM.topics[id] && MM.topics[id].k) || [];
  const groupOf = id => MM.groups.find(g => g.ids.includes(id));
  const groupsOf = chId => MM.groups.filter(g => g.ch === chId);
  function shortOf(t) {
    const m = MM.topics[t.id];
    return m && m.s ? m.s : { en: t.t.en.replace(/^\d+ · /, ""), ja: t.t.ja.replace(/^\d+・/, "") };
  }
  function chDone(chId) { const ts = topicsOf(chId); return [ts.filter(t => P.best[t.id] != null).length, ts.length]; }
  const dots = ids => `<span class="mm-dots" aria-hidden="true">${ids.map(id => `<i class="st st-${status(id)}"></i>`).join("")}</span>`;
  function keyCard(t, cls = "") {
    const ks = keysOf(t.id);
    if (!ks.length) return "";
    return `<section class="keys ${cls}" aria-label="${esc(ui(cls ? "recap" : "keyPoints"))}"><div class="lbl">${uiB(cls ? "recap" : "keyPoints")}</div>` +
      `<ul class="keys-l">${ks.map(k => `<li>${tx(k)}</li>`).join("")}</ul></section>`;
  }
  const legendHTML = () => `<div class="mm-legend">${[["none", "lgNone"], ["read", "lgRead"], ["lo", "lgLo"], ["mid", "lgMid"], ["hi", "lgHi"]]
    .map(([s, k]) => `<span><i class="st st-${s}" aria-hidden="true"></i>${ui(k)}</span>`).join("")}</div>`;

  /* ------------------------------------------------------------------ home */
  const MAP = [
    ["present-simple", "01", 'I <span class="mv">work</span>.'],
    ["past-simple", "05", 'I <span class="mv">worked</span>.'],
    ["future-will", "09", 'I <span class="ax">will</span> <span class="mv">work</span>.'],
    ["present-continuous", "02", 'I <span class="ax">am</span> <span class="mv">working</span>.'],
    ["past-continuous", "06", 'I <span class="ax">was</span> <span class="mv">working</span>.'],
    ["future-continuous", "10", 'I <span class="ax">will be</span> <span class="mv">working</span>.'],
    ["present-perfect", "03", 'I <span class="ax">have</span> <span class="mv">worked</span>.'],
    ["past-perfect", "07", 'I <span class="ax">had</span> <span class="mv">worked</span>.'],
    ["future-perfect", "11", 'I <span class="ax">will have</span> <span class="mv">worked</span>.'],
    ["present-perfect-continuous", "04", 'I <span class="ax">have been</span> <span class="mv">working</span>.'],
    ["past-perfect-continuous", "08", 'I <span class="ax">had been</span> <span class="mv">working</span>.'],
    ["future-perfect-continuous", "12", 'I <span class="ax">will have been</span> <span class="mv">working</span>.']
  ];
  function mapHTML() {
    const rows = ["simple", "continuous", "perfect", "perfectCont"], cols = ["present", "past", "future"];
    let h = `<div class="map-grid"><span></span>${cols.map(c => `<span class="map-h">${uiB(c)}</span>`).join("")}`;
    rows.forEach((r, ri) => {
      h += `<span class="map-rl">${uiB(r)}</span>`;
      for (let ci = 0; ci < 3; ci++) {
        const [id, num, s] = MAP[ri * 3 + ci];
        const t = GH.byId[id];
        const b = P.best[id];
        h += `<a class="cell st-bg-${status(id)}" href="#/t/${id}"${t ? ` title="${esc(tMain(t))}"` : ""}>` +
          `<span class="cell-top"><span class="num">${num}</span>${b != null ? `<span class="cell-sc">${b}/10</span>` : ""}</span>` +
          `<span class="s" lang="en">${s}</span></a>`;
      }
    });
    return h + "</div>";
  }
  const statHTML = (label, value) => `<div class="stat"><div class="stat-v">${value}</div><div class="stat-l">${label}</div></div>`;
  function chapterSection(ch) {
    const ts = topicsOf(ch.id);
    if (!ts.length) return "";
    const done = ts.filter(t => P.best[t.id] != null).length;
    const pct = Math.round((done / ts.length) * 100);
    return `<section class="chapter cc-${ch.id}" id="ch-${ch.id}">
<header class="ch-h"><span class="ch-n">${ch.n}</span><div class="ch-tt"><h2><a href="#/c/${ch.id}">${hx(ch.t)}</a></h2><p>${tx(ch.d)}</p></div>
<div class="ch-p" title="${done}/${ts.length}"><span class="bar"><span style="width:${pct}%"></span></span><span>${done}/${ts.length}</span></div></header>
<div class="tlist">${ts.map(t => trow(t)).join("")}</div></section>`;
  }
  const toolCard = (href, title, note) => `<a class="tool" href="${href}"><span class="tool-t">${title}</span><span class="tool-n">${note}</span></a>`;
  function ring(p, label) {
    const r = 19, c = 2 * Math.PI * r;
    return `<svg class="rt-ring" viewBox="0 0 46 46" aria-hidden="true"><circle class="rt-bg" cx="23" cy="23" r="${r}"/>` +
      (p > 0 ? `<circle class="rt-fg" cx="23" cy="23" r="${r}" stroke-dasharray="${(c * p).toFixed(2)} ${c.toFixed(2)}" transform="rotate(-90 23 23)"/>` : "") +
      `<text x="23" y="27.5" text-anchor="middle">${label}</text></svg>`;
  }
  // The eight chapters as stations on one line, with progress rings.
  function routeHTML() {
    const cur = P.recent && GH.byId[P.recent] ? GH.byId[P.recent].ch : "";
    return `<section class="route" aria-labelledby="route-h">
<div class="route-h"><div><h2 id="route-h">${hx({ en: UI.en.route, ja: UI.ja.route })}</h2><p>${ui("routeLead")}</p></div><a class="btn" href="#/map">${I.map} ${ui("openMap")}</a></div>
<ol class="route-l">${GH.chapters.map(ch => {
      const [d, n] = chDone(ch.id), here = ch.id === cur;
      return `<li class="rt cc-${ch.id}${here ? " cur" : ""}"><a href="#/c/${ch.id}"${here ? ' aria-current="step"' : ""}>${ring(n ? d / n : 0, ch.n)}` +
        `<span class="rt-t">${pick(ch.t)}</span><span class="rt-p">${d}/${n}${here ? ` · ${ui("youAreHere")}` : ""}</span></a></li>`;
    }).join("")}</ol></section>`;
  }
  function homeView() {
    const ids = GH.topics.map(t => t.id);
    const opened = ids.filter(id => P.read[id]).length;
    const doneIds = ids.filter(id => P.best[id] != null);
    const avg = doneIds.length ? Math.round((doneIds.reduce((a, id) => a + P.best[id], 0) / doneIds.length) * 10) : null;
    const wrong = mistakeItems().length;
    const recent = P.recent && GH.byId[P.recent];
    const first = GH.topics[0];
    const other = LANG === "ja" ? "en" : "ja";
    return `<div class="wrap home">
<section class="hero">
  <div class="hero-t">
    <p class="eyebrow">${ui("tagline")}</p>
    <h1>${ui("app")}<span class="h1-sub" lang="${other}">${ui("appSub")}</span></h1>
    <p class="lead">${ui("heroLead")}</p>
    <p class="facts">${GH.topics.length} ${ui("topicsN")} · ${GH.topics.reduce((a, t) => a + (t.q ? t.q.length : 0), 0)} ${ui("qN")} · English / 日本語</p>
    <div class="actions">
      ${recent ? `<a class="btn primary" href="#/t/${recent.id}">${ui("resume")}: ${tMain(recent)} ${I.right}</a>`
        : first ? `<a class="btn primary" href="#/t/${first.id}">${ui("start")} ${I.right}</a>` : ""}
      <a class="btn" href="#/r/mixed">${ui("mixed")}</a>
    </div>
  </div>
  <div class="map">
    <div class="map-head"><h2>${ui("mapTitle")}</h2><p>${ui("mapNote")}</p></div>
    ${mapHTML()}
  </div>
</section>
<section class="stats">
  ${statHTML(ui("opened"), `${opened}<small>/${ids.length}</small>`)}
  ${statHTML(ui("done"), `${doneIds.length}<small>/${ids.length}</small>`)}
  ${statHTML(ui("avg"), avg == null ? "–" : `${avg}<small>%</small>`)}
  ${statHTML(ui("toReview"), wrong ? `<a href="#/r/mistakes">${wrong}</a>` : "0")}
</section>
${routeHTML()}
${GH.chapters.map(chapterSection).join("")}
<section class="chapter tools">
<header class="ch-h"><span class="ch-n">＋</span><div class="ch-tt"><h2>${hx({ en: UI.en.tools, ja: UI.ja.tools })}</h2></div></header>
<div class="tool-grid">
  ${toolCard("#/verbs", ui("verbs"), ui("verbsNote"))}
  ${toolCard("#/glossary", ui("glossary"), ui("glossaryNote"))}
  ${toolCard("#/r/mixed", ui("mixed"), ui("mixedNote"))}
  ${toolCard("#/r/mistakes", ui("mistakes") + (wrong ? ` <span class="pill">${wrong}</span>` : ""), ui("mistakesNote"))}
</div></section>
</div>`;
  }

  /* ------------------------------------------------------------------ chapter page */
  // A lesson card for the chapter map: title, status, and the key points.
  function tcard(t) {
    const st = status(t.id), b = P.best[t.id];
    return `<a class="tcard" href="#/t/${t.id}"><span class="tcard-h"><span class="st st-${st}" aria-hidden="true"></span>` +
      `<span class="tcard-t">${tMain(t)}</span>${b != null ? `<span class="sc sc-${st}">${b}/10</span>` : ""}</span>` +
      `<ul class="tcard-k">${keysOf(t.id).map(k => `<li>${tx(k)}</li>`).join("")}</ul></a>`;
  }
  function chapterView(id) {
    const ch = GH.chapters.find(c => c.id === id);
    if (!ch) return notFound();
    const gs = groupsOf(id), [d, n] = chDone(id);
    const ci = GH.chapters.indexOf(ch), prev = GH.chapters[ci - 1], next = GH.chapters[ci + 1];
    const inGroups = new Set(gs.flatMap(g => g.ids));
    const loose = topicsOf(id).filter(t => !inGroups.has(t.id));
    const group = (title, ids) => `<div class="cmap-g"><div class="cmap-gh">${inl(title)}${dots(ids)}</div>` +
      `<div class="cmap-cards">${ids.map(tid => GH.byId[tid]).filter(Boolean).map(tcard).join("")}</div></div>`;
    return `<div class="wrap narrow cc-${id}">
<nav class="crumb"><a href="#/">${ui("home")}</a><span aria-hidden="true">/</span><a href="#/map">${ui("mindMap")}</a></nav>
<header class="lesson-head"><p class="eyebrow">${LANG === "ja" ? `第${+ch.n}章` : `${ui("chapter")} ${ch.n}`}</p>
<h1>${pick(ch.t)}</h1><p class="sub" lang="${LANG === "ja" ? "en" : "ja"}">${LANG === "ja" ? ch.t.en : ch.t.ja}</p>
<p class="lede">${tx(ch.d)}</p>
<div class="meta"><a class="btn primary" href="#/r/ch-${id}">${ui("chTest")} ${I.right}</a><span class="muted small">${ui("chTestNote")}</span></div></header>
<section class="cmap" aria-labelledby="cmap-h">
<div class="cmap-h"><h2 id="cmap-h">${hx({ en: UI.en.chapterMap, ja: UI.ja.chapterMap })}</h2><p>${ui("chapterMapLead")}</p></div>
<div class="cmap-root"><span class="mm-num">${ch.n}</span><span>${pick(ch.t)}</span><span class="mm-pct">${d}/${n}</span></div>
<div class="cmap-body">${gs.map(g => group(g.t, g.ids)).join("")}${loose.length ? group({ en: "More", ja: "その他" }, loose.map(t => t.id)) : ""}</div>
</section>
<nav class="pn ch-nav">
  ${prev ? `<a class="pn-a" href="#/c/${prev.id}"><span class="pn-l">${I.left} ${ui("prevCh")}</span><span class="pn-t">${prev.n} · ${pick(prev.t)}</span></a>` : "<span></span>"}
  ${next ? `<a class="pn-a nx" href="#/c/${next.id}"><span class="pn-l">${ui("nextCh")} ${I.right}</span><span class="pn-t">${next.n} · ${pick(next.t)}</span></a>` : "<span></span>"}
</nav></div>`;
  }

  /* ------------------------------------------------------------------ mind map */
  // Groups open on request; the map starts as chapters → groups so it fits on one screen.
  const mmOpen = gid => !!P.mm[gid];
  function mmTopic(t) {
    const st = status(t.id), b = P.best[t.id], ks = keysOf(t.id);
    return `<a class="mm-t" href="#/t/${t.id}"><span class="st st-${st}" aria-hidden="true"></span><span class="mm-tx">${lab(shortOf(t))}</span>` +
      `${b != null ? `<span class="sc sc-${st}">${b}/10</span>` : ""}` +
      `${ks.length ? `<span class="mm-pop" aria-hidden="true"><b>${tMain(t)}</b>${ks.map(k => `<span class="mm-pk">${tx(k)}</span>`).join("")}</span>` : ""}</a>`;
  }
  function mmBranch(ch) {
    const [d, n] = chDone(ch.id);
    return `<div class="mm-br cc-${ch.id}">
<a class="mm-n mm-ch" id="mn-c-${ch.id}" data-p="mn-root" data-ch="${ch.id}" href="#/c/${ch.id}"><span class="mm-num">${ch.n}</span><span class="mm-tx">${lab(ch.t)}</span><span class="mm-pct">${d}/${n}</span></a>
<div class="mm-kids">${groupsOf(ch.id).map(g => {
      const open = mmOpen(g.id), ts = g.ids.map(id => GH.byId[id]).filter(Boolean);
      return `<div class="mm-grp${open ? "" : " shut"}"><button type="button" class="mm-g" id="mn-g-${g.id}" data-p="mn-c-${ch.id}" data-ch="${ch.id}" data-act="mmg" data-g="${g.id}" aria-expanded="${open}">` +
        `<span class="mm-tx">${lab(g.t)}</span>${dots(g.ids)}</button><div class="mm-tl">${ts.map(mmTopic).join("")}</div></div>`;
    }).join("")}</div></div>`;
  }
  function mapView() {
    const total = GH.topics.length, done = GH.topics.filter(t => P.best[t.id] != null).length;
    const other = LANG === "ja" ? "en" : "ja";
    return `<div class="wrap mmv">
<nav class="crumb"><a href="#/">${ui("home")}</a></nav>
<header class="lesson-head"><h1>${ui("mapPage")}</h1><p class="sub" lang="${other}">${LANG === "ja" ? "Grammar mind map" : "英文法マインドマップ"}</p>
<p class="lede">${ui("mapLead")}</p>
<div class="mm-tools"><button type="button" class="btn sm" data-act="mmall" data-v="1">${ui("expandAll")}</button><button type="button" class="btn sm" data-act="mmall" data-v="0">${ui("collapseAll")}</button>${legendHTML()}</div></header>
<div class="mm-scroll"><div class="mm-canvas" id="mmc"><svg class="mm-svg" aria-hidden="true"></svg>
<div class="mm-side mm-l">${GH.chapters.slice(3).map(mmBranch).join("")}</div>
<div class="mm-rw"><div class="mm-n mm-root" id="mn-root"><span class="mm-rt">${LANG === "ja" ? "英文法" : "English grammar"}</span><span class="mm-rs" lang="${other}">${LANG === "ja" ? "English grammar" : "英文法"}</span><span class="mm-rp">${done}/${total}</span></div></div>
<div class="mm-side mm-r">${GH.chapters.slice(0, 3).map(mmBranch).join("")}</div>
</div></div></div>`;
  }
  // Curved branches between each node and its parent, measured from the laid-out page.
  function drawLinks() {
    const box = $("#mmc"), svg = box && $(".mm-svg", box);
    if (!svg || getComputedStyle(svg).display === "none") return;
    const r0 = box.getBoundingClientRect();
    let out = "";
    $$("[data-p]", box).forEach(el => {
      if (!el.offsetParent) return;
      const p = document.getElementById(el.dataset.p);
      if (!p || !p.offsetParent) return;
      const a = p.getBoundingClientRect(), c = el.getBoundingClientRect();
      const toRight = c.left + c.width / 2 >= a.left + a.width / 2;
      const x1 = (toRight ? a.right : a.left) - r0.left, y1 = a.top + a.height / 2 - r0.top;
      const x2 = (toRight ? c.left : c.right) - r0.left, y2 = c.top + c.height / 2 - r0.top;
      const k = (x2 - x1) * 0.5, lv = el.classList.contains("mm-ch") ? "l1" : "l2";
      out += `<path class="${lv} cc-${el.dataset.ch}" d="M${x1.toFixed(1)} ${y1.toFixed(1)}C${(x1 + k).toFixed(1)} ${y1.toFixed(1)} ${(x2 - k).toFixed(1)} ${y2.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}"/>`;
    });
    svg.setAttribute("viewBox", `0 0 ${r0.width.toFixed(1)} ${r0.height.toFixed(1)}`);
    svg.innerHTML = out;
  }

  /* ------------------------------------------------------------------ lesson page */
  function exItem(it) {
    let s, n;
    if (Array.isArray(it)) [s, n] = it;
    else if (typeof it === "string") s = it;
    else ({ s, n } = it);
    const bad = /^\s*<s>/.test(s);
    const icon = bad ? `<span class="say-sp" aria-hidden="true">${I.no}</span>` : (sayBtn(s) || '<span class="say-sp"></span>');
    return `<li class="ex${bad ? " bad" : ""}">${icon}<div class="ex-b"><div class="ex-s" lang="en">${s}</div>${n ? `<div class="ex-n">${tx(n)}</div>` : ""}</div></li>`;
  }
  function cell(c) {
    if (c == null) return "";
    if (typeof c === "string") return c.startsWith("@") ? uiB(c.slice(1)) : c;
    if (c.f) return fx(c.f);
    return tx(c);
  }
  function tableHTML(head, rows, cls = "") {
    const th = head ? `<thead><tr>${head.map(h => `<th>${cell(h)}</th>`).join("")}</tr></thead>` : "";
    const tb = rows.map(r => `<tr>${r.map(c => `<td${typeof c === "string" && !c.startsWith("@") ? ' lang="en"' : ""}${c && c.f ? ' class="fx"' : ""}>${cell(c)}</td>`).join("")}</tr>`).join("");
    return `<div class="tbl-wrap"><table class="tbl ${cls}">${th}<tbody>${tb}</tbody></table></div>`;
  }
  function formTable(b) {
    const rows = b.rows.map(r => {
      const lab = typeof r[0] === "string" && UI.en[r[0]] ? uiB(r[0]) : tx(r[0]);
      return `<tr><th scope="row">${lab}</th><td class="fx">${fx(r[1])}</td><td class="fe" lang="en">${r[2] || ""}</td></tr>`;
    }).join("");
    return `<div class="tbl-wrap"><table class="tbl form"><thead><tr><th>${uiB("form")}</th><th>${uiB("pattern")}</th><th>${uiB("example")}</th></tr></thead><tbody>${rows}</tbody></table></div>`;
  }
  /* ---------- diagrams ---------- */
  const vizHead = t => (t ? `<figcaption class="viz-h">${inl(t)}</figcaption>` : "");
  const vizNote = n => (n ? `<div class="viz-note">${tx(n)}</div>` : "");
  const pickShort = o => (o == null ? "" : typeof o === "string" ? o : (LANG === "ja" ? o.ja || o.en : o.en || o.ja));

  // Timelines: t runs from -1 (far past) through 0 (now) to 1 (far future).
  let tlSeq = 0;
  const TLX = t => 200 + t * 172;
  const TL_KEY = {
    x: ["lgEvent", '<svg width="14" height="14" viewBox="0 0 14 14"><path class="tl-ev" d="M3 3L11 11M11 3L3 11"/></svg>'],
    xs: ["lgEvent", null],
    wave: ["lgProg", '<svg width="24" height="14" viewBox="0 0 24 14"><path class="tl-pr" d="M1 7q2.75 -4.5 5.5 0t5.5 0t5.5 0t5.5 0"/></svg>'],
    bar: ["lgState", '<svg width="24" height="14" viewBox="0 0 24 14"><rect class="tl-st" x="1" y="3" width="22" height="8" rx="4"/></svg>'],
    arc: ["lgLink", '<svg width="24" height="14" viewBox="0 0 24 14"><path class="tl-arc" d="M2 12Q12 -4 22 12"/></svg>'],
    ref: ["lgRef", '<svg width="10" height="14" viewBox="0 0 10 14"><line class="tl-ref" x1="5" y1="0" x2="5" y2="14"/></svg>'],
    o: ["lgPlan", '<svg width="14" height="14" viewBox="0 0 14 14"><circle class="tl-fut" cx="7" cy="7" r="5"/></svg>']
  };
  function tlSVG(marks, label) {
    const id = "tla" + (++tlSeq);
    const txt = (x, y, s, cls = "tl-lab", anchor = "middle") => (s ? `<text class="${cls}" x="${x.toFixed(1)}" y="${y}" text-anchor="${anchor}">${esc(s)}</text>` : "");
    const cross = (x, r) => `<path class="tl-ev" d="M${(x - r).toFixed(1)} ${60 - r}L${(x + r).toFixed(1)} ${60 + r}M${(x + r).toFixed(1)} ${60 - r}L${(x - r).toFixed(1)} ${60 + r}"/>`;
    // Shapes first, labels last: each label has a halo in the panel colour, so lines never cut through words.
    let g = "", lb = "";
    for (const [k, a, b, c] of marks) {
      if (k === "x") { const x = TLX(a); g += cross(x, 5.5); lb += txt(x, 44, pickShort(b)); }
      else if (k === "xs") { const n = typeof c === "number" ? c : 6, x1 = TLX(a), x2 = TLX(b); for (let i = 0; i < n; i++) g += cross(x1 + ((x2 - x1) * i) / Math.max(1, n - 1), 4); }
      else if (k === "o") { const x = TLX(a); g += `<circle class="tl-fut" cx="${x.toFixed(1)}" cy="60" r="6"/>`; lb += txt(x, 44, pickShort(b)); }
      else if (k === "bar") { const x1 = TLX(a), x2 = TLX(b); g += `<rect class="tl-st" x="${x1.toFixed(1)}" y="54" width="${Math.max(3, x2 - x1).toFixed(1)}" height="12" rx="6"/>`; lb += txt((x1 + x2) / 2, 44, pickShort(c)); }
      else if (k === "wave") {
        const x1 = TLX(a), x2 = TLX(b), n = Math.max(2, Math.round((x2 - x1) / 6)), st = (x2 - x1) / n;
        let d = `M${x1.toFixed(1)} 60q${(st / 2).toFixed(2)} -5.5 ${st.toFixed(2)} 0`;
        for (let i = 1; i < n; i++) d += `t${st.toFixed(2)} 0`;
        g += `<path class="tl-pr" d="${d}"/>`; lb += txt((x1 + x2) / 2, 44, pickShort(c));
      }
      else if (k === "arc") {
        const x1 = TLX(a), x2 = TLX(b), h = Math.min(26, 11 + Math.abs(x2 - x1) * 0.1), mx = (x1 + x2) / 2;
        g += `<path class="tl-arc" d="M${x1.toFixed(1)} 50Q${mx.toFixed(1)} ${(50 - 2 * h).toFixed(1)} ${x2.toFixed(1)} 50" marker-end="url(#${id})"/>`;
        lb += txt(mx, Math.round(50 - h - 5), pickShort(c));
      }
      else if (k === "ref") { const x = TLX(a); g += `<line class="tl-ref" x1="${x.toFixed(1)}" y1="18" x2="${x.toFixed(1)}" y2="76"/>`; lb += txt(x, 12, pickShort(b), "tl-lab tl-reft"); }
      else if (k === "span") { const x1 = TLX(a), x2 = TLX(b); g += `<path class="tl-span" d="M${x1.toFixed(1)} 35V30H${x2.toFixed(1)}V35"/>`; lb += txt((x1 + x2) / 2, 25, pickShort(c)); }
    }
    g += lb;
    return `<svg class="tl-svg" viewBox="0 0 400 102" role="img" aria-label="${esc(label)}">` +
      `<defs><marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" orient="auto"><path class="tl-arh" d="M0 1L9 5L0 9z"/></marker></defs>` +
      `<line class="tl-axis" x1="14" y1="76" x2="384" y2="76"/><path class="tl-axis" d="M377 72L385 76L377 80"/>` +
      `<line class="tl-now" x1="200" y1="18" x2="200" y2="82"/>` + g +
      txt(14, 96, ui("tlPast"), "tl-axt", "start") + txt(200, 96, ui("tlNow"), "tl-axt tl-nowt") + txt(385, 96, ui("tlFuture"), "tl-axt", "end") + "</svg>";
  }
  function tlBlock(b) {
    const used = new Set();
    b.rows.forEach(r => r.m.forEach(m => used.add(m[0] === "xs" ? "x" : m[0])));
    const key = Object.keys(TL_KEY).filter(k => used.has(k) && TL_KEY[k][1]).map(k => `<span>${TL_KEY[k][1]}${ui(TL_KEY[k][0])}</span>`).join("");
    return `<figure class="viz tl">${vizHead(b.t)}<div class="tl-rows">${b.rows.map(r => `<div class="tl-row">${tlSVG(r.m, speakable(r.s))}` +
      `<div class="tl-x">${r.l ? `<div class="tl-l">${inl(r.l)}</div>` : ""}<div class="tl-s">${sayBtn(r.s)}<span lang="en">${r.s}</span></div>${r.n ? `<div class="tl-n">${tx(r.n)}</div>` : ""}</div></div>`).join("")}</div>` +
      `<div class="tl-key">${key}</div>${vizNote(b.n)}</figure>`;
  }

  // Sentence parts: each tile is a word group with its grammatical role.
  const ROLE = {
    S: ["S", { en: "subject", ja: "主語" }], V: ["V", { en: "verb", ja: "動詞" }], O: ["O", { en: "object", ja: "目的語" }],
    C: ["C", { en: "complement", ja: "補語" }], M: ["M", { en: "modifier", ja: "修飾語" }], A: ["Aux", { en: "auxiliary", ja: "助動詞" }],
    F: ["", { en: "focus", ja: "焦点" }], X: ["", null], J: ["", { en: "joining word", ja: "接続詞" }],
    IC: ["", { en: "independent clause", ja: "独立節" }], SC: ["", { en: "subordinate clause", ja: "従属節" }],
    N: ["", { en: "noun", ja: "名詞" }], D: ["", { en: "determiner", ja: "限定詞" }], AJ: ["", { en: "adjective", ja: "形容詞" }],
    AV: ["", { en: "adverb", ja: "副詞" }]
  };
  function svPart([r, w, l]) {
    const [tag, def] = ROLE[r] || ["", null], text = l ? inl(l) : def ? inl(def) : "";
    return `<span class="sv-p rc-${r}"><span class="sv-w" lang="en">${w}</span>${tag || text ? `<span class="sv-lab">${tag ? `<b>${tag}</b>` : ""}${text}</span>` : ""}</span>`;
  }
  function svBlock(b) {
    return `<figure class="viz sv">${vizHead(b.t)}<div class="sv-rows">${b.rows.map(row => {
      if (row.arrow) return `<div class="sv-arrow">${I.down}<span>${tx(row.arrow)}</span></div>`;
      const words = row.p.map(p => p[1]).join(" ");
      return `<div class="sv-row${row.bad ? " bad" : ""}">${row.l ? `<div class="sv-rl">${inl(row.l)}</div>` : ""}` +
        `<div class="sv-line">${row.bad ? `<span class="sv-x" aria-hidden="true">${I.no}</span>` : sayBtn(words)}<div class="sv-parts">${row.p.map(svPart).join("")}</div></div>` +
        `${row.n ? `<div class="sv-n">${tx(row.n)}</div>` : ""}</div>`;
    }).join("")}</div>${vizNote(b.n)}</figure>`;
  }

  // Scales: where each expression sits between two ends.
  function scaleBlock(b) {
    return `<figure class="viz scale">${vizHead(b.t)}` +
      `${b.lo || b.hi ? `<div class="sc-ends" aria-hidden="true"><span>${I.left} ${inl(b.lo)}</span><span>${inl(b.hi)} ${I.right}</span></div>` : ""}` +
      `<ul class="sc-l">${b.items.map(([w, v, n]) => `<li><div class="sc-top"><div class="sc-w">${sayBtn(w, "say sm")}<span lang="en">${w}</span></div>${n ? `<div class="sc-n">${tx(n)}</div>` : ""}</div>` +
        `<div class="sc-bar" aria-hidden="true"><span style="width:${Math.max(0, Math.min(100, v))}%"></span></div></li>`).join("")}</ul>${vizNote(b.n)}</figure>`;
  }

  // Finders: answer a few questions to reach the right form.
  const FLOW = {};
  const flowForm = r => (typeof r === "string" ? `<div class="fl-ans" lang="en">${r}</div>` : `<div class="fl-ans meta">${tx(r)}</div>`);
  function flowTree(b, id, depth, seen) {
    const node = b.n[id];
    if (!node || depth > 9 || seen.has(id)) return "";
    if (node.r != null) return `<span class="fl-tr">${typeof node.r === "string" ? node.r : inl(node.r)}</span>`;
    const s2 = new Set(seen).add(id);
    return `<div class="fl-tq">${tx(node.q)}</div><ul class="fl-tree">${node.o.map(([l, to]) => `<li><span class="fl-ta">${inl(l)} →</span> ${flowTree(b, to, depth + 1, s2)}</li>`).join("")}</ul>`;
  }
  function flowInner(fid) {
    const F = FLOW[fid], b = F.b, path = F.path, cur = b.n[path[path.length - 1]];
    const trail = path.slice(0, -1).map((id, i) => {
      const node = b.n[id], opt = node.o.find(o => o[1] === path[i + 1]);
      return `<li><button type="button" class="fl-tb" data-act="flowback" data-f="${fid}" data-i="${i}" title="${esc(ui("flowChange"))}">${esc(strip(pickShort(node.q)))} <b>${opt ? esc(strip(pickShort(opt[0]))) : ""}</b></button></li>`;
    }).join("");
    const body = cur.q
      ? `<div class="fl-q"><p class="fl-qt">${tx(cur.q)}</p><div class="fl-opts">${cur.o.map(([l, to]) => `<button type="button" class="fl-o" data-act="flow" data-f="${fid}" data-to="${esc(to)}"><span>${tx(l)}</span>${I.right}</button>`).join("")}</div></div>`
      : `<div class="fl-r" role="status"><div class="fl-rl">${ui("flowUse")}</div>${flowForm(cur.r)}${cur.nt ? `<div class="fl-rn">${para(cur.nt)}</div>` : ""}${cur.ex ? `<ul class="exs">${[].concat(cur.ex).map(exItem).join("")}</ul>` : ""}</div>`;
    return `${vizHead(b.t)}${path.length > 1 ? `<ol class="fl-trail" aria-label="${esc(ui("flowYour"))}">${trail}</ol>` : ""}${body}` +
      `<div class="fl-act">${path.length > 1 ? `<button type="button" class="btn sm" data-act="flowreset" data-f="${fid}">${ui("flowAgain")}</button>` : ""}</div>` +
      `<details class="fl-all"${F.all ? " open" : ""}><summary>${ui("flowAll")}</summary>${flowTree(b, b.start, 0, new Set())}</details>`;
  }
  function flowBlock(b, fid) {
    if (!FLOW[fid] || FLOW[fid].b !== b) FLOW[fid] = { b, path: [b.start], all: false };
    return `<figure class="viz flow" data-fid="${fid}">${flowInner(fid)}</figure>`;
  }
  function flowRedraw(fid) {
    const f = $$(".flow", app).find(el => el.dataset.fid === fid);
    if (!f) return;
    f.innerHTML = flowInner(fid);
    enhance(f);
  }

  // Side-by-side comparison columns.
  function cmpBlock(b) {
    const n = b.cols.length;
    return `<figure class="viz cmp">${vizHead(b.t)}<div class="cmp-g" style="--n:${n === 4 ? 2 : n}">${b.cols.map(c => {
      const form = typeof c.h === "string";
      return `<section class="cmp-c"><h4 class="cmp-h${form ? "" : " meta"}"${form ? ' lang="en"' : ""}>${form ? c.h : inl(c.h)}</h4>` +
        `${c.s ? `<p class="cmp-s">${typeof c.s === "string" ? `<span lang="en">${c.s}</span>` : tx(c.s)}</p>` : ""}` +
        `${c.p ? `<ul class="cmp-p">${c.p.map(x => `<li>${tx(x)}</li>`).join("")}</ul>` : ""}` +
        `${c.ex ? `<ul class="exs">${c.ex.map(exItem).join("")}</ul>` : ""}</section>`;
    }).join("")}</div>${vizNote(b.n)}</figure>`;
  }

  // Before → after pairs (e.g. tense backshift).
  function shiftBlock(b) {
    return `<figure class="viz shift">${vizHead(b.t)}<div class="sh-g">` +
      `${b.head ? `<div class="sh-hd">${inl(b.head[0])}</div><div></div><div class="sh-hd">${inl(b.head[1])}</div>` : ""}` +
      b.rows.map(([a, c, n]) => {
        const cellTx = v => (typeof v === "string" ? `<span lang="en">${v}</span>` : `<span class="sh-p">${inl(v)}</span>`);
        return `<div class="sh-a">${cellTx(a)}</div><div class="sh-ar" aria-hidden="true">${I.right}</div><div class="sh-b">${cellTx(c)}${n ? `<span class="sh-n">${inl(n)}</span>` : ""}</div>`;
      }).join("") +
      `</div>${vizNote(b.n)}</figure>`;
  }

  // A verb chain: each helper decides the form of the next verb.
  function chainBlock(b) {
    return `<figure class="viz chain">${vizHead(b.t)}${b.s ? `<div class="chn-s">${sayBtn(b.s)}<span lang="en">${b.s}</span></div>` : ""}` +
      `<div class="chn">${b.items.map(([w, l], i) => `${i ? `<span class="chn-ar" aria-hidden="true">${I.right}</span>` : ""}<div class="chn-i"><span class="chn-w" lang="en">${w}</span><span class="chn-l">${inl(l)}</span></div>`).join("")}</div>${vizNote(b.n)}</figure>`;
  }

  // Nested units: each item's text sits inside the previous one.
  function nestBlock(b) {
    const build = (i, text) => {
      let content = text;
      if (i + 1 < b.items.length) {
        const sub = b.items[i + 1][1], k = text.toLowerCase().indexOf(sub.toLowerCase());
        if (k >= 0) content = text.slice(0, k) + build(i + 1, text.slice(k, k + sub.length)) + text.slice(k + sub.length);
      }
      return `<span class="nb nb-d${Math.min(i, 4)}"><span class="nb-l" lang="${LANG === "ja" ? "ja" : "en"}">${inl(b.items[i][0])}</span>${content}</span>`;
    };
    return `<figure class="viz nest">${vizHead(b.t)}<div class="nb-wrap" lang="en">${build(0, b.items[0][1])}</div>${vizNote(b.n)}</figure>`;
  }

  // Pictures for in / on / at.
  const PIC = {
    in: '<svg viewBox="0 0 120 90" aria-hidden="true"><path class="pp-o" d="M24 18V74H96V18"/><circle class="pp-b" cx="60" cy="58" r="11"/></svg>',
    on: '<svg viewBox="0 0 120 90" aria-hidden="true"><path class="pp-o" d="M14 58H106M26 58V82M94 58V82"/><circle class="pp-b" cx="60" cy="45" r="11"/></svg>',
    at: '<svg viewBox="0 0 120 90" aria-hidden="true"><path class="pp-o" d="M14 80H106"/><path class="pp-b" d="M60 76C60 76 44 55 44 42A16 16 0 0 1 76 42C76 55 60 76 60 76Z"/><circle class="pp-h" cx="60" cy="42" r="6"/></svg>'
  };
  function picBlock(b) {
    if (b.art === "time") {
      const w = ["100%", "78%", "56%"], o = ["30%", "20%", "12%"];
      return `<figure class="viz pic">${vizHead(b.t)}<div class="pyr">${b.items.map(([p, d, ex], i) => `<div class="pyr-b" style="--w:${w[i] || "50%"};--o:${o[i] || "10%"}"><span class="pyr-p" lang="en">${p}</span><span class="pyr-d">${tx(d)}</span>${ex ? `<span class="pyr-x" lang="en">${ex}</span>` : ""}</div>`).join("")}</div>${vizNote(b.n)}</figure>`;
    }
    return `<figure class="viz pic">${vizHead(b.t)}<div class="pp-g">${b.items.map(([p, d, ex]) => `<div class="pp">${PIC[p] || ""}<div class="pp-w" lang="en">${p}</div><div class="pp-n">${tx(d)}</div>${ex ? `<div class="pp-ex" lang="en">${ex}</div>` : ""}</div>`).join("")}</div>${vizNote(b.n)}</figure>`;
  }

  function block(b, i, t) {
    switch (b.k) {
      case "tl": return tlBlock(b);
      case "sv": return svBlock(b);
      case "scale": return scaleBlock(b);
      case "flow": return flowBlock(b, `${t ? t.id : "x"}:${i}`);
      case "cmp": return cmpBlock(b);
      case "shift": return shiftBlock(b);
      case "chain": return chainBlock(b);
      case "nest": return nestBlock(b);
      case "pic": return picBlock(b);
      case "core": return `<div class="core"><div class="lbl">${uiB("core")}</div>${para(b)}</div>`;
      case "h": return `<h3>${hx(b)}</h3>`;
      case "p": return para(b);
      case "list": return `<ul class="list">${b.items.map(it => `<li>${tx(it)}</li>`).join("")}</ul>`;
      case "ex": return `<ul class="exs">${b.items.map(exItem).join("")}</ul>`;
      case "form": return formTable(b);
      case "table": return tableHTML(b.head, b.rows, b.cls);
      case "watch": return `<aside class="box watch"><div class="lbl">${uiB("watch")}</div>${para(b)}</aside>`;
      case "tip": return `<aside class="box tip"><div class="lbl">${uiB("tip")}</div>${para(b)}</aside>`;
      case "note": return `<aside class="box note"><div class="lbl">${b.l ? hx(b.l) : uiB("remember")}</div>${para(b)}</aside>`;
      case "link": return `<p><a class="btn" href="${b.href}">${tx(b.t)} ${I.right}</a></p>`;
      default: return "";
    }
  }
  function topicView(id) {
    const t = GH.byId[id];
    if (!t) return notFound();
    if (!P.read[id] || P.recent !== id) { P.read[id] = 1; P.recent = id; save(); }
    const ch = chapterOf(t);
    const i = GH.topics.indexOf(t), prev = GH.topics[i - 1], next = GH.topics[i + 1];
    const best = P.best[id];
    const page = t.p ? (IS_LOCAL
      ? `<a class="chip" href="${PDF}#page=${t.p}" target="_blank" rel="noopener" title="${esc(ui("openPdf"))}">${ui("page")} ${t.p}</a>`
      : `<span class="chip">${ui("page")} ${t.p}</span>`) : "";
    const g = groupOf(id);
    return `<div class="read cc-${ch.id}">
<nav class="crumb"><a href="#/">${ui("home")}</a><span aria-hidden="true">/</span><a href="#/c/${ch.id}">${ch.n} · ${pick(ch.t)}</a>${g ? `<span aria-hidden="true">/</span><span>${pick(g.t)}</span>` : ""}</nav>
<header class="lesson-head">
  <h1>${tMain(t)}</h1><p class="sub" lang="${LANG === "ja" ? "en" : "ja"}">${tSub(t)}</p>
  ${t.d ? `<p class="lede">${tx(t.d)}</p>` : ""}
  <div class="meta">${page}${best != null ? `<span class="chip chip-${status(id)}">${ui("best")} ${best}/10</span>` : ""}<a class="btn sm" href="#/q/${id}">${ui("practice")} ${I.right}</a></div>
</header>
${keyCard(t)}
<article class="lesson">${(t.body || []).map((b, k) => block(b, k, t)).join("")}</article>
<section class="cta">
  <div><h2>${ui("practice10")}</h2><p>${ui("practiceLead")}</p></div>
  <a class="btn primary lg" href="#/q/${id}">${best != null ? ui("retry") : ui("practice")} ${I.right}</a>
</section>
<nav class="pn">
  ${prev ? `<a class="pn-a" href="#/t/${prev.id}"><span class="pn-l">${I.left} ${ui("prev")}</span><span class="pn-t">${tMain(prev)}</span></a>` : "<span></span>"}
  ${next ? `<a class="pn-a nx" href="#/t/${next.id}"><span class="pn-l">${ui("next")} ${I.right}</span><span class="pn-t">${tMain(next)}</span></a>` : "<span></span>"}
</nav></div>`;
  }

  /* ------------------------------------------------------------------ quiz engine */
  const Q = { cur: null };
  const qtype = q => (q.o ? "mc" : q.w ? "order" : "input");
  function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function prep(it) {
    const q = it.q;
    if (q.o) { it.opts = q.o.map((_, i) => i); if (!q.fix) shuffle(it.opts); }
    if (q.w) {
      it.pool = q.w.map((_, i) => i);
      let tries = 0;
      do { shuffle(it.pool); } while (q.w.length > 2 && tries++ < 30 && it.pool.every((v, i) => q.w[v] === q.w[i]));
      it.picked = [];
    }
    return it;
  }
  const makeQuiz = (key, o) => Object.assign({ key, pos: 0, res: [], done: false }, o, { items: (o.items || []).map(prep) });
  function topicQuiz(id) {
    const t = GH.byId[id];
    if (!t || !t.q || !t.q.length) return null;
    return makeQuiz("t:" + id, { tid: id, title: t.t, back: "#/t/" + id, backLabel: t.t, items: t.q.map((q, i) => ({ tid: id, i, q })) });
  }
  function allItems(ts) { const out = []; ts.forEach(t => (t.q || []).forEach((q, i) => out.push({ tid: t.id, i, q }))); return out; }
  function reviewQuiz(arg) {
    let pool, n, title, back = "#/", backLabel = { en: UI.en.home, ja: UI.ja.home };
    if (arg === "mistakes") { pool = mistakeItems(); n = 20; title = { en: UI.en.mistakes, ja: UI.ja.mistakes }; }
    else if (arg && arg.startsWith("ch-")) {
      const ch = GH.chapters.find(c => c.id === arg.slice(3));
      if (!ch) return null;
      pool = allItems(topicsOf(ch.id)); n = 15;
      title = { en: `${UI.en.chTest}: ${ch.t.en}`, ja: `${UI.ja.chTest}：${ch.t.ja}` };
      back = "#/c/" + ch.id; backLabel = ch.t;
    } else { pool = allItems(GH.topics); n = 20; title = { en: UI.en.mixed, ja: UI.ja.mixed }; }
    const items = shuffle(pool).slice(0, n).map(x => Object.assign({}, x));
    return makeQuiz("r:" + arg, { arg, title, back, backLabel, items, empty: !items.length });
  }
  const curItem = () => (Q.cur && !Q.cur.done && !Q.cur.empty ? Q.cur.items[Q.cur.pos] : null);

  function norm(s) {
    return String(s || "").toLowerCase()
      .replace(/[’‘`´]/g, "'").replace(/[“”]/g, '"')
      .replace(/\bwon't\b/g, "will not").replace(/\bcan't\b/g, "cannot").replace(/\bshan't\b/g, "shall not")
      .replace(/n't\b/g, " not").replace(/'ve\b/g, " have").replace(/'ll\b/g, " will").replace(/'re\b/g, " are")
      .replace(/\bi'm\b/g, "i am").replace(/\bcan not\b/g, "cannot")
      .replace(/[.,!?;:"()]/g, " ").replace(/\s+/g, " ").trim();
  }
  const accepts = (list, v) => { const nv = norm(v); return !!nv && list.some(a => norm(a) === nv); };
  // Learners often retype the words around the blank ("I am checking" for "I ___ (check)").
  // Drop up to three words that repeat the text just before or just after the blank.
  function trimAround(sent, v) {
    if (!sent || sent.indexOf("___") < 0) return v;
    const [pre, post] = sent.split("___");
    const before = norm(pre).split(" ").filter(Boolean), after = norm(post.replace(/^\s*\([^)]*\)/, "")).split(" ").filter(Boolean);
    let w = norm(v).split(" ").filter(Boolean);
    for (let k = Math.min(3, before.length, w.length - 1); k > 0; k--) {
      if (before.slice(-k).join(" ") === w.slice(0, k).join(" ")) { w = w.slice(k); break; }
    }
    for (let k = Math.min(3, after.length, w.length - 1); k > 0; k--) {
      if (after.slice(0, k).join(" ") === w.slice(-k).join(" ")) { w = w.slice(0, w.length - k); break; }
    }
    return w.join(" ");
  }

  function sentHTML(s, q, type, r) {
    let k = 0;
    return s.replace(/___/g, () => {
      const first = k++ === 0;
      if (type === "input" && first) {
        if (r) return `<span class="q-given ${r.ok ? "ok" : "no"}">${esc(r.given) || "—"}</span>`;
        const w = Math.max(9, ...(q.i || [""]).map(a => a.length + 2));
        return `<input id="qin" class="q-in" type="text" size="${w}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="${esc(ui("typeAnswer"))}">`;
      }
      return '<span class="blank"></span>';
    });
  }
  const optHTML = o => (typeof o === "string" ? (o === "—" ? `— <span class="muted">${ui("nothing")}</span>` : o) : tx(o));
  function mcHTML(it, r) {
    const q = it.q;
    return `<div class="opts">${it.opts.map((oi, di) => {
      let cls = "opt";
      if (r) cls += oi === q.a ? " is-right" : oi === r.given ? " is-wrong" : " is-dim";
      const o = q.o[oi], meta = typeof o !== "string";
      const mark = r && oi === q.a ? `<span class="mark">${I.ok}</span>` : r && oi === r.given ? `<span class="mark">${I.no}</span>` : "";
      return `<button type="button" class="${cls}" data-act="mc" data-i="${di}"${r ? " disabled" : ""}><span class="key">${"ABCDEFG"[di]}</span>` +
        `<span class="ot${meta ? " meta" : ""}"${meta ? "" : ' lang="en"'}>${optHTML(o)}</span>${mark}</button>`;
    }).join("")}</div>`;
  }
  function orderHTML(it, r) {
    const q = it.q;
    const ans = it.picked.length
      ? it.picked.map((wi, k) => `<button type="button" class="wchip on" data-act="unpick" data-k="${k}"${r ? " disabled" : ""}>${esc(q.w[wi])}</button>`).join("")
      : `<span class="ord-ph">${ui("tapWords")}</span>`;
    const pool = it.pool.map(wi => (it.picked.includes(wi)
      ? `<span class="wchip ghost" aria-hidden="true">${esc(q.w[wi])}</span>`
      : `<button type="button" class="wchip" data-act="pick" data-w="${wi}"${r ? " disabled" : ""}>${esc(q.w[wi])}</button>`)).join("");
    return `<div class="ord-ans${r ? (r.ok ? " ok" : " no") : ""}" lang="en">${ans}</div>${r ? "" : `<div class="ord-pool" lang="en">${pool}</div>`}`;
  }
  // The correct sentence with the answer filled in, when the question has one.
  function completed(q) {
    if (q.w) return esc(q.i ? q.i[0] : q.w.join(" "));
    const s = typeof q.q === "string" ? q.q : q.s;
    if (!s || s.indexOf("___") < 0) return null;
    const blanks = s.split("___").length - 1;
    let fill;
    if (q.o) { const o = q.o[q.a]; if (typeof o !== "string") return null; fill = blanks === 1 ? [o] : o.split(" / "); }
    else if (q.i) fill = [q.i[0]];
    else return null;
    if (fill.length !== blanks) return null;
    let k = 0;
    return s.replace(/___(\s*\([^)]*\))?/g, () => { const f = fill[k++].trim(); return f === "—" ? "" : `<b>${f}</b>`; })
      .replace(/ {2,}/g, " ").replace(/ ([.,!?;:])/g, "$1").trim();
  }
  function answerHTML(q) {
    if (q.o) return optHTML(q.o[q.a]);
    if (q.w) return esc(q.i ? q.i[0] : q.w.join(" "));
    return esc(q.i[0]);
  }
  function feedbackHTML(it, r) {
    const q = it.q, full = completed(q);
    const alts = q.i && q.i.length > 1 && !q.w ? q.i.slice(1).filter(a => !/^['’]/.test(a)) : [];
    const line = full ? `${sayBtn(full)}<span lang="en">${full}</span>` : `<span lang="en">${answerHTML(q)}</span>`;
    return `<div class="fb ${r.ok ? "ok" : "no"}" role="status">
<div class="fb-h">${r.ok ? I.ok : I.no}<span>${ui(r.ok ? "correct" : "wrong")}</span></div>
${!r.ok || full ? `<div class="fb-a">${!r.ok ? `<span class="fb-l">${ui("answer")}</span>` : ""}${line}</div>` : ""}
${alts.length ? `<div class="fb-alt"><span class="fb-l">${ui("alsoOk")}</span> <span lang="en">${alts.map(esc).join(" · ")}</span></div>` : ""}
<div class="fb-e">${para(q.e)}</div></div>`;
  }
  function quizView() {
    const qz = Q.cur;
    if (!qz) return notFound();
    const crumb = `<nav class="crumb"><a href="${qz.back}">${I.left} ${pick(qz.backLabel)}</a></nav>`;
    if (qz.empty) return `<div class="quiz">${crumb}<h1 class="q-title">${pick(qz.title)}</h1><div class="empty">${ui("noMistakes")}</div></div>`;
    if (qz.done) return resultsView(qz, crumb);
    const it = qz.items[qz.pos], q = it.q, r = qz.res[qz.pos], type = qtype(q), n = qz.items.length;
    const src = !qz.tid && GH.byId[it.tid] ? `<a class="q-src" href="#/t/${it.tid}">${ui("from")}: ${tMain(GH.byId[it.tid])}</a>` : "";
    let h = `<div class="quiz">${crumb}
<div class="q-top"><h1 class="q-title">${qz.tid ? `${ui("practice")} · ${tMain(GH.byId[qz.tid])}` : pick(qz.title)}</h1><div class="q-count">${ui("qOf", qz.pos + 1, n)}</div></div>
<div class="dots" aria-hidden="true">${qz.items.map((_, i) => `<span class="dot${i === qz.pos ? " cur" : ""}${qz.res[i] ? (qz.res[i].ok ? " ok" : " no") : ""}"></span>`).join("")}</div>
<div class="qcard">
<div class="q-lbl"><span>${ui(type === "mc" ? "chooseBest" : type === "order" ? "orderWords" : "typeAnswer")}</span>${src}</div>`;
    if (q.h) h += `<p class="q-ctx"><span class="q-ctx-l">${ui("situation")}</span>${tx(q.h)}</p>`;
    if (q.q && typeof q.q === "object") h += `<p class="q-meta">${tx(q.q)}</p>`;
    const sent = typeof q.q === "string" ? q.q : q.s;
    const typing = type === "input" && !r;
    if (typing) h += '<form id="qform" autocomplete="off" novalidate>';
    if (sent) h += `<p class="q-s" lang="en">${sentHTML(sent, q, type, r)}</p>`;
    if (type === "mc") h += mcHTML(it, r);
    if (type === "order") h += orderHTML(it, r);
    if (!r) {
      if (typing) h += `<div class="q-nav"><button type="submit" class="btn primary">${ui("check")}</button></div></form>`;
      if (type === "order") h += `<div class="q-nav"><button type="button" class="btn" data-act="clear"${it.picked.length ? "" : " disabled"}>${ui("reset")}</button>` +
        `<button type="button" class="btn primary" data-act="check"${it.picked.length === q.w.length ? "" : " disabled"}>${ui("check")}</button></div>`;
    } else {
      h += feedbackHTML(it, r);
      h += `<div class="q-nav"><button type="button" class="btn primary" id="qnext" data-act="next">${ui(qz.pos === n - 1 ? "results" : "cont")} ${I.right}</button></div>`;
    }
    return h + "</div></div>";
  }
  function qSummary(q) {
    if (q.w) return `<span lang="en" class="rv-s">${esc(q.i ? q.i[0] : q.w.join(" "))}</span>`;
    let s = "";
    if (q.q && typeof q.q === "object") s += `<span class="rv-m">${tx(q.q)}</span> `;
    const sent = typeof q.q === "string" ? q.q : q.s;
    if (sent) s += `<span lang="en" class="rv-s">${sent.replace(/___/g, '<span class="blank sm"></span>')}</span>`;
    return s;
  }
  function reviewItem(it, r, i) {
    const q = it.q;
    r = r || { ok: false, given: "" };
    const given = q.o ? optHTML(q.o[r.given]) : esc(r.given);
    return `<details class="rv ${r.ok ? "ok" : "no"}"${r.ok ? "" : " open"}>
<summary><span class="rv-i">${r.ok ? I.ok : I.no}</span><span class="rv-n">${i + 1}</span><span class="rv-q">${qSummary(q)}</span></summary>
<div class="rv-b">
${!r.ok ? `<div><span class="fb-l">${ui("yours")}</span> <span lang="en" class="rv-v">${given}</span></div>` : ""}
${!q.w ? `<div><span class="fb-l">${ui("answer")}</span> <span lang="en" class="rv-v">${answerHTML(q)}</span></div>` : ""}
<div class="fb-e">${para(q.e)}</div></div></details>`;
  }
  function resultsView(qz, crumb) {
    const n = qz.items.length, sc = qz.res.filter(r => r && r.ok).length, p = sc / n;
    const msg = ui(sc === n ? "msg10" : p >= 0.8 ? "msg8" : p >= 0.5 ? "msg5" : "msg0");
    const t = qz.tid && GH.byId[qz.tid];
    const nextT = t && GH.topics[GH.topics.indexOf(t) + 1];
    return `<div class="quiz">${crumb}
<section class="res">
  <div class="res-l">${ui("score")} · ${t ? tMain(t) : pick(qz.title)}</div>
  <div class="res-score">${sc}<small>/${n}</small></div>
  <p class="res-msg">${msg}</p>
  <div class="actions">
    <button type="button" class="btn primary" data-act="retry">${qz.tid ? ui("retry") : ui("newSet")}</button>
    ${t ? `<a class="btn" href="#/t/${t.id}">${ui("backLesson")}</a>` : ""}
    ${nextT ? `<a class="btn" href="#/t/${nextT.id}">${ui("nextTopic")} ${I.right}</a>` : ""}
  </div>
</section>
${t ? `<div class="cc-${t.ch}">${keyCard(t, "recap")}</div>` : ""}
<h2 class="rv-h">${ui("review")}</h2>
<div class="rv-list">${qz.items.map((it, i) => reviewItem(it, qz.res[i], i)).join("")}</div></div>`;
  }
  function record(ok, given) {
    const qz = Q.cur, it = curItem();
    if (!it || qz.res[qz.pos]) return;
    qz.res[qz.pos] = { ok, given };
    const qid = it.tid + ":" + it.i;
    P.n++;
    if (ok) { P.ok++; delete P.wrong[qid]; } else P.wrong[qid] = Date.now();
    save();
    render(false);
    focusNext();
  }
  function answerMC(di) {
    const it = curItem();
    if (!it || !it.q.o || Q.cur.res[Q.cur.pos]) return;
    const oi = it.opts[di];
    if (oi == null) return;
    record(oi === it.q.a, oi);
  }
  function check() {
    const it = curItem();
    if (!it || Q.cur.res[Q.cur.pos]) return;
    const q = it.q, type = qtype(q);
    if (type === "input") {
      const el = $("#qin"), v = el ? el.value : "";
      if (!v.trim()) { if (el) el.focus(); return; }
      const sent = typeof q.q === "string" ? q.q : q.s, trimmed = trimAround(sent, v);
      if (accepts(q.i, v)) record(true, v.trim());
      else if (accepts(q.i, trimmed)) record(true, trimmed); // show only the part that fills the blank
      else record(false, v.trim());
    } else if (type === "order") {
      if (it.picked.length !== q.w.length) return;
      const v = it.picked.map(wi => q.w[wi]).join(" ");
      record(accepts(q.i || [q.w.join(" ")], v), v);
    }
  }
  function pickWord(wi) {
    const it = curItem();
    if (!it || Q.cur.res[Q.cur.pos] || it.picked.includes(wi)) return;
    it.picked.push(wi);
    render(false);
    const b = it.picked.length === it.q.w.length ? $('[data-act="check"]') : $(".ord-pool button");
    if (b) b.focus({ preventScroll: true });
  }
  function unpickWord(k) { const it = curItem(); if (!it || Q.cur.res[Q.cur.pos]) return; it.picked.splice(k, 1); render(false); }
  function clearOrder() { const it = curItem(); if (!it || Q.cur.res[Q.cur.pos]) return; it.picked = []; render(false); }
  function next() {
    const qz = Q.cur;
    if (!qz || qz.done || !qz.res[qz.pos]) return;
    if (qz.pos < qz.items.length - 1) { qz.pos++; render(false); window.scrollTo(0, 0); focusFirst(); }
    else finish();
  }
  function finish() {
    const qz = Q.cur;
    qz.done = true;
    if (qz.tid) {
      const sc = qz.res.filter(r => r && r.ok).length;
      P.best[qz.tid] = Math.max(P.best[qz.tid] == null ? -1 : P.best[qz.tid], sc);
      P.last[qz.tid] = sc;
      save();
    }
    render(false);
    window.scrollTo(0, 0);
  }
  function retry() {
    const qz = Q.cur;
    if (!qz) return;
    Q.cur = qz.tid ? topicQuiz(qz.tid) : reviewQuiz(qz.arg);
    render(false);
    window.scrollTo(0, 0);
    focusFirst();
  }

  /* ------------------------------------------------------------------ irregular verbs */
  const vstate = { q: "", g: "all" };
  function vgroup(v) {
    const f = s => s.split("/")[0].trim();
    const a = f(v[0]), b = f(v[1]), c = f(v[2]);
    if (a === b && b === c) return "AAA";
    if (b === c) return "ABB";
    if (a === c) return "ABA";
    if (a === b) return "AAB";
    return "ABC";
  }
  function verbTbody() {
    const q = vstate.q.trim().toLowerCase();
    const rows = GH.verbs.filter(v => (vstate.g === "all" || vgroup(v) === vstate.g) &&
      (!q || [v[0], v[1], v[2], v[3].en, v[3].ja].join(" ").toLowerCase().includes(q)));
    if (!rows.length) return `<tr><td colspan="5" class="muted">${ui("noMatch")}</td></tr>`;
    return rows.map(v => `<tr><td class="vw">${sayBtn(`${v[0]}, ${v[1].replace(/\//g, ", ")}, ${v[2].replace(/\//g, ", ")}`, "say sm")}<b lang="en">${v[0]}</b></td>` +
      `<td lang="en">${v[1]}</td><td lang="en">${v[2]}</td><td class="vm">${tx(v[3])}</td><td><span class="gtag">${vgroup(v)}</span></td></tr>`).join("");
  }
  function verbsView() {
    const groups = ["all", "AAA", "ABB", "ABA", "AAB", "ABC"];
    const g = ui("groups");
    return `<div class="wrap narrow">
<nav class="crumb"><a href="#/">${ui("home")}</a></nav>
<header class="lesson-head"><h1>${ui("verbs")}</h1><p class="sub" lang="${LANG === "ja" ? "en" : "ja"}">${LANG === "ja" ? "Irregular verbs" : "不規則動詞"}</p>
<p class="lede">${ui("verbsNote")}</p>
<div class="meta"><a class="btn primary" href="#/drill">${ui("drill")} ${I.right}</a><a class="btn" href="#/t/irregular-verbs">${ui("lesson")}</a></div></header>
<div class="vtools"><label class="search"><span>${I.search}</span><input id="vsearch" type="search" placeholder="${esc(ui("searchVerbs"))}" value="${esc(vstate.q)}" autocomplete="off"></label>
<div class="chips" role="group">${groups.map(k => `<button type="button" class="fchip" data-act="vgroup" data-g="${k}" aria-pressed="${vstate.g === k}"${k !== "all" ? ` title="${esc(g[k])}"` : ""}>${k === "all" ? ui("all") : k}</button>`).join("")}</div></div>
<p class="legend">${Object.keys(g).map(k => `<span><b>${k}</b> ${g[k]}</span>`).join("")}</p>
<div class="tbl-wrap"><table class="tbl verbs"><thead><tr><th>${ui("v1")}</th><th>${ui("v2")}</th><th>${ui("v3")}</th><th>${ui("meaning")}</th><th>${ui("group")}</th></tr></thead><tbody id="vbody">${verbTbody()}</tbody></table></div>
</div>`;
  }
  let drill = null;
  const newDrill = () => ({ items: shuffle(GH.verbs.slice()).slice(0, 10), pos: 0, res: [], done: false });
  function dAccept(forms, val) {
    const alts = forms.split("/").map(s => s.trim().toLowerCase());
    const parts = String(val || "").toLowerCase().replace(/[’]/g, "'").split(/[\s,/]+/).filter(Boolean);
    return parts.length > 0 && parts.every(p => alts.includes(p));
  }
  function drillView() {
    if (!GH.verbs.length) return notFound();
    const d = drill || (drill = newDrill());
    const n = d.items.length;
    const crumb = `<nav class="crumb"><a href="#/verbs">${I.left} ${ui("verbs")}</a></nav>`;
    if (d.done) {
      const sc = d.res.filter(r => r && r.ok).length;
      return `<div class="quiz">${crumb}<section class="res"><div class="res-l">${ui("drillDone")}</div><div class="res-score">${sc}<small>/${n}</small></div>
<div class="actions"><button type="button" class="btn primary" data-act="dretry">${ui("newSet")}</button><a class="btn" href="#/verbs">${ui("verbs")}</a></div></section>
<div class="rv-list drill-list">${d.items.map((v, i) => { const r = d.res[i]; return `<div class="rv ${r.ok ? "ok" : "no"}"><div class="rv-row"><span class="rv-i">${r.ok ? I.ok : I.no}</span>${sayBtn(`${v[0]}, ${v[1]}, ${v[2]}`, "say sm")}<span lang="en" class="rv-s"><b>${v[0]}</b> – ${v[1]} – ${v[2]}</span><span class="muted small">${pick(v[3])}</span></div></div>`; }).join("")}</div></div>`;
    }
    const v = d.items[d.pos], r = d.res[d.pos];
    const field = (id, lab, ok, val) => `<label>${lab}<input id="${id}" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"${r ? ` value="${esc(val)}" disabled class="${ok ? "ok" : "no"}"` : ""}></label>`;
    return `<div class="quiz">${crumb}
<div class="q-top"><h1 class="q-title">${ui("drill")}</h1><div class="q-count">${ui("qOf", d.pos + 1, n)}</div></div>
<div class="dots" aria-hidden="true">${d.items.map((_, i) => `<span class="dot${i === d.pos ? " cur" : ""}${d.res[i] ? (d.res[i].ok ? " ok" : " no") : ""}"></span>`).join("")}</div>
<div class="qcard">
<div class="q-lbl"><span>${ui("drillLead")}</span></div>
<div class="dr-verb"><span lang="en">${v[0]}</span>${sayBtn(v[0])}</div>
<p class="dr-mean">${tx(v[3])}</p>
${r ? "" : '<form id="dform" autocomplete="off" novalidate>'}
<div class="dr-in">${field("dv2", ui("v2"), r && r.ok2, r && r.a)}${field("dv3", ui("v3"), r && r.ok3, r && r.b)}</div>
${r ? `<div class="fb ${r.ok ? "ok" : "no"}" role="status"><div class="fb-h">${r.ok ? I.ok : I.no}<span>${ui(r.ok ? "correct" : "wrong")}</span></div>
<div class="fb-a">${sayBtn(`${v[0]}, ${v[1].replace(/\//g, ", ")}, ${v[2].replace(/\//g, ", ")}`)}<span lang="en"><b>${v[0]}</b> – ${v[1]} – ${v[2]}</span></div></div>
<div class="q-nav"><button type="button" class="btn primary" id="dnext" data-act="dnext">${ui(d.pos === n - 1 ? "results" : "cont")} ${I.right}</button></div>`
      : `<div class="q-nav"><button type="submit" class="btn primary">${ui("check")}</button></div></form>`}
</div></div>`;
  }
  function drillCheck() {
    const d = drill;
    if (!d || d.done || d.res[d.pos]) return;
    const v = d.items[d.pos], e2 = $("#dv2"), e3 = $("#dv3");
    const a = e2 ? e2.value.trim() : "", b = e3 ? e3.value.trim() : "";
    if (!a) { if (e2) e2.focus(); return; }
    if (!b) { if (e3) e3.focus(); return; }
    const ok2 = dAccept(v[1], a), ok3 = dAccept(v[2], b);
    d.res[d.pos] = { ok: ok2 && ok3, ok2, ok3, a, b };
    render(false);
    focusNext();
  }
  function drillNext() {
    const d = drill;
    if (!d || !d.res[d.pos]) return;
    if (d.pos < d.items.length - 1) { d.pos++; render(false); focusFirst(); }
    else { d.done = true; render(false); window.scrollTo(0, 0); }
  }

  /* ------------------------------------------------------------------ glossary */
  const gstate = { q: "" };
  function glossList() {
    const q = gstate.q.trim().toLowerCase();
    const rows = GH.glossary.filter(g => !q || [g[0].en, g[0].ja, g[1].en, g[1].ja].join(" ").toLowerCase().includes(q));
    if (!rows.length) return `<p class="muted">${ui("noMatch")}</p>`;
    return rows.map(g => {
      const main = LANG === "ja" ? g[0].ja : g[0].en, sub = LANG === "ja" ? g[0].en : g[0].ja;
      return `<div class="gl"><dt><span class="gl-main" lang="${LANG === "ja" ? "ja" : "en"}">${main}</span><span class="gl-sub" lang="${LANG === "ja" ? "en" : "ja"}">${sub}</span></dt><dd>${tx(g[1])}</dd></div>`;
    }).join("");
  }
  function glossaryView() {
    return `<div class="read">
<nav class="crumb"><a href="#/">${ui("home")}</a></nav>
<header class="lesson-head"><h1>${ui("glossary")}</h1><p class="sub" lang="${LANG === "ja" ? "en" : "ja"}">${LANG === "ja" ? "Glossary" : "文法用語集"}</p><p class="lede">${ui("glossaryNote")}</p></header>
<label class="search gsearch"><span>${I.search}</span><input id="gsearch" type="search" placeholder="${esc(ui("searchTerms"))}" value="${esc(gstate.q)}" autocomplete="off"></label>
<dl class="gloss" id="glist">${glossList()}</dl></div>`;
  }
  const notFound = () => `<div class="read"><h1 class="q-title">${ui("notFound")}</h1><p><a class="btn" href="#/">${ui("goHome")}</a></p></div>`;

  /* ------------------------------------------------------------------ chrome, drawer */
  let drawerOpen = false;
  function renderChrome() {
    document.documentElement.lang = LANG === "ja" ? "ja" : "en";
    const langs = [["en", "EN"], ["ja", "日本語"], ["both", "EN+日"]];
    topbar.innerHTML = `<div class="top-in">
<button type="button" class="icon-btn" id="btn-contents" data-act="drawer" aria-controls="drawer" aria-expanded="${drawerOpen}">${I.menu}<span class="hide-sm">${ui("contents")}</span></button>
<a class="icon-btn" href="#/map" aria-label="${esc(ui("mapPage"))}"${view.name === "map" ? ' aria-current="page"' : ""}>${I.map}<span class="hide-sm">${ui("mindMap")}</span></a>
<a class="brand" href="#/"><span class="mark" aria-hidden="true"><b class="r-s">S</b><b class="r-v">V</b><b class="r-o">O</b></span><span class="brand-t">${ui("app")}</span></a>
<div class="seg" role="group" aria-label="${esc(ui("lang"))}">${langs.map(([l, lab]) => `<button type="button" data-act="lang" data-l="${l}" aria-pressed="${LANG === l}">${lab}</button>`).join("")}</div>
</div>`;
    foot.innerHTML = `<div class="foot-in"><p>${ui("source")}</p><p>${ui("saved")} <button type="button" class="linkish" data-act="reset">${ui("resetP")}</button></p></div>`;
  }
  function fillDrawer() {
    const tool = (href, label) => `<a class="trow sm" href="${href}"><span class="st st-tool" aria-hidden="true"></span><span class="tt"><span class="t1">${label}</span></span></a>`;
    drawer.innerHTML = `<div class="dr-head"><strong>${ui("contents")}</strong><button type="button" class="icon-btn" data-act="drawer-close" aria-label="${esc(ui("close"))}">${I.close}</button></div>
<label class="search dr-search"><span>${I.search}</span><input id="tsearch" type="search" placeholder="${esc(ui("search"))}" autocomplete="off"></label>
<nav class="dr-body">
${tool("#/", ui("home")).replace('class="trow sm"', 'class="trow sm home-link"')}
${tool("#/map", ui("mapPage")).replace('class="trow sm"', 'class="trow sm home-link"')}
${GH.chapters.map(ch => { const ts = topicsOf(ch.id); return ts.length ? `<section class="dr-ch"><h4><span>${ch.n}</span>${pick(ch.t)}</h4>${ts.map(t => trow(t, true)).join("")}</section>` : ""; }).join("")}
<section class="dr-ch"><h4><span>＋</span>${ui("tools")}</h4>${tool("#/verbs", ui("verbs"))}${tool("#/glossary", ui("glossary"))}${tool("#/r/mixed", ui("mixed"))}${tool("#/r/mistakes", ui("mistakes"))}</section>
<p class="dr-empty muted" hidden>${ui("noMatch")}</p>
</nav>`;
  }
  function openDrawer() {
    fillDrawer();
    drawer.removeAttribute("inert");
    drawer.classList.add("open");
    scrim.hidden = false;
    drawerOpen = true;
    const b = $("#btn-contents");
    if (b) b.setAttribute("aria-expanded", "true");
    const cur = $('[aria-current="page"]', drawer);
    if (cur) cur.scrollIntoView({ block: "center" });
    if (window.matchMedia && matchMedia("(pointer: fine)").matches) setTimeout(() => { const s = $("#tsearch"); if (s) s.focus({ preventScroll: true }); }, 80);
  }
  function closeDrawer() {
    if (!drawerOpen) return;
    drawer.classList.remove("open");
    drawer.setAttribute("inert", "");
    scrim.hidden = true;
    drawerOpen = false;
    const b = $("#btn-contents");
    if (b) b.setAttribute("aria-expanded", "false");
  }
  function filterTOC(q) {
    q = q.trim().toLowerCase();
    let any = false;
    $$(".dr-ch", drawer).forEach(sec => {
      let vis = 0;
      $$(".trow", sec).forEach(a => { const show = !q || (a.dataset.s || a.textContent.toLowerCase()).includes(q); a.hidden = !show; if (show) vis++; });
      sec.hidden = vis === 0;
      if (vis) any = true;
    });
    $$(".home-link", drawer).forEach(h => { h.hidden = !!q; });
    const e = $(".dr-empty", drawer);
    if (e) e.hidden = any;
  }

  /* ------------------------------------------------------------------ routing, rendering */
  let view = { name: "home", arg: "" };
  function parse() {
    const h = location.hash.replace(/^#\/?/, "");
    const i = h.indexOf("/");
    return i < 0 ? { name: h || "home", arg: "" } : { name: h.slice(0, i), arg: decodeURIComponent(h.slice(i + 1)) };
  }
  function enhance(root) {
    $$("code", root).forEach(c => { if (!c.dataset.fx) { c.innerHTML = fx(c.textContent); c.dataset.fx = "1"; } });
    if (tts.ok) $$("x", root).forEach(el => { el.title = ui("listen"); });
  }
  function focusNext() { const b = $("#qnext") || $("#dnext"); if (b) b.focus({ preventScroll: true }); }
  function focusFirst() { const i = $("#qin") || $("#dv2"); if (i) i.focus({ preventScroll: true }); }
  function render(fresh) {
    document.documentElement.lang = LANG === "ja" ? "ja" : "en";
    let html;
    switch (view.name) {
      case "t": html = topicView(view.arg); break;
      case "c": html = chapterView(view.arg); break;
      case "q": case "r": html = quizView(); break;
      case "verbs": html = verbsView(); break;
      case "drill": html = drillView(); break;
      case "glossary": html = glossaryView(); break;
      case "map": html = mapView(); break;
      case "home": html = homeView(); break;
      default: html = notFound();
    }
    app.innerHTML = html;
    enhance(app);
    const mb = $('a[href="#/map"]', topbar);
    if (mb) { if (view.name === "map") mb.setAttribute("aria-current", "page"); else mb.removeAttribute("aria-current"); }
    if (fresh) { window.scrollTo(0, 0); focusFirst(); }
    if (view.name === "map") requestAnimationFrame(drawLinks);
  }
  function onRoute() {
    view = parse();
    if (view.name === "q") Q.cur = topicQuiz(view.arg);
    else if (view.name === "r") Q.cur = reviewQuiz(view.arg);
    else if (view.name === "drill") drill = newDrill();
    closeDrawer();
    render(true);
  }
  function setLang(l) {
    if (!["en", "ja", "both"].includes(l) || l === LANG) return;
    LANG = l;
    P.lang = l;
    save();
    renderChrome();
    if (drawerOpen) { fillDrawer(); const b = $("#btn-contents"); if (b) b.setAttribute("aria-expanded", "true"); }
    render(false);
  }
  let resetArmed = 0;
  function resetProgress(btn) {
    if (Date.now() - resetArmed > 5000) { resetArmed = Date.now(); btn.textContent = ui("resetSure"); return; }
    ["best", "last", "read", "wrong"].forEach(k => { P[k] = {}; });
    P.recent = ""; P.n = 0; P.ok = 0;
    save();
    resetArmed = 0;
    btn.textContent = ui("resetDone");
    render(false);
  }

  /* ------------------------------------------------------------------ events */
  document.addEventListener("click", e => {
    const t = e.target;
    const sb = t.closest("[data-say]");
    if (sb) { e.preventDefault(); tts.say(sb.getAttribute("data-say")); return; }
    const xe = t.closest("x");
    if (xe && tts.ok) { tts.say(xe.innerHTML); return; }
    if (drawerOpen && t.closest("#drawer a")) closeDrawer();
    const a = t.closest("[data-act]");
    if (!a || a.disabled) return;
    switch (a.dataset.act) {
      case "lang": setLang(a.dataset.l); break;
      case "drawer": if (drawerOpen) closeDrawer(); else openDrawer(); break;
      case "drawer-close": closeDrawer(); break;
      case "mc": answerMC(+a.dataset.i); break;
      case "check": check(); break;
      case "pick": pickWord(+a.dataset.w); break;
      case "unpick": unpickWord(+a.dataset.k); break;
      case "clear": clearOrder(); break;
      case "next": next(); break;
      case "retry": retry(); break;
      case "vgroup": vstate.g = a.dataset.g; render(false); break;
      case "dcheck": drillCheck(); break;
      case "dnext": drillNext(); break;
      case "dretry": drill = newDrill(); render(false); window.scrollTo(0, 0); focusFirst(); break;
      case "reset": resetProgress(a); break;
      case "flow": { const F = FLOW[a.dataset.f]; if (F && F.b.n[a.dataset.to]) { F.path.push(a.dataset.to); flowRedraw(a.dataset.f); focusFlow(a.dataset.f); } break; }
      case "flowback": { const F = FLOW[a.dataset.f]; if (F) { F.path = F.path.slice(0, +a.dataset.i + 1); flowRedraw(a.dataset.f); focusFlow(a.dataset.f); } break; }
      case "flowreset": { const F = FLOW[a.dataset.f]; if (F) { F.path = [F.b.start]; flowRedraw(a.dataset.f); focusFlow(a.dataset.f); } break; }
      case "mmg": {
        const br = a.closest(".mm-grp"), open = br.classList.contains("shut");
        br.classList.toggle("shut", !open);
        a.setAttribute("aria-expanded", String(open));
        P.mm[a.dataset.g] = open ? 1 : 0; save(); drawLinks();
        break;
      }
      case "mmall": MM.groups.forEach(g => { P.mm[g.id] = a.dataset.v === "1" ? 1 : 0; }); save(); render(false); break;
    }
  });
  // Keep keyboard users in place after a finder step: focus its first choice, or its result.
  function focusFlow(fid) {
    const f = $$(".flow", app).find(el => el.dataset.fid === fid);
    const b = f && ($(".fl-o", f) || $(".fl-r", f));
    if (b) { if (!b.matches("button")) b.setAttribute("tabindex", "-1"); b.focus({ preventScroll: true }); }
  }
  // Remember whether "Show every path" is open while a finder redraws.
  app.addEventListener("toggle", e => {
    const d = e.target;
    if (!d.classList || !d.classList.contains("fl-all")) return;
    const f = d.closest(".flow");
    if (f && FLOW[f.dataset.fid]) FLOW[f.dataset.fid].all = d.open;
  }, true);
  // The mind map redraws its branches whenever the layout changes.
  let rsT = 0;
  window.addEventListener("resize", () => { clearTimeout(rsT); rsT = setTimeout(() => { if (view.name === "map") drawLinks(); }, 120); });
  if (window.matchMedia) {
    const mq = matchMedia("(max-width: 1119px)");
    const onBp = () => { if (view.name === "map") render(false); };
    if (mq.addEventListener) mq.addEventListener("change", onBp); else if (mq.addListener) mq.addListener(onBp);
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (view.name === "map") drawLinks(); });
  app.addEventListener("input", e => {
    const id = e.target.id;
    if (id === "vsearch") { vstate.q = e.target.value; const b = $("#vbody"); if (b) b.innerHTML = verbTbody(); }
    else if (id === "gsearch") { gstate.q = e.target.value; const l = $("#glist"); if (l) l.innerHTML = glossList(); }
  });
  drawer.addEventListener("input", e => { if (e.target.id === "tsearch") filterTOC(e.target.value); });
  scrim.addEventListener("click", closeDrawer);
  // Typed answers live in forms, so Enter and a phone keyboard's Go key both submit natively.
  app.addEventListener("submit", e => {
    e.preventDefault();
    if (e.target.id === "qform") check();
    else if (e.target.id === "dform") drillCheck();
  });
  document.addEventListener("keydown", e => {
    if (e.isComposing || e.keyCode === 229) return; // Japanese IME is converting text
    if (e.key === "Escape" && drawerOpen) { closeDrawer(); const b = $("#btn-contents"); if (b) b.focus(); return; }
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = (e.target.tagName || "").toLowerCase();
    const enter = e.key === "Enter" || e.keyCode === 13;
    if (view.name === "drill" && drill && !drill.done) {
      if (!enter || tag === "button" || tag === "a") return;
      if (drill.res[drill.pos]) { e.preventDefault(); drillNext(); }
      else if (e.target.id === "dv2") { e.preventDefault(); const b = $("#dv3"); if (b) b.focus(); }
      return;
    }
    if ((view.name !== "q" && view.name !== "r") || !curItem()) return;
    const it = curItem(), r = Q.cur.res[Q.cur.pos], type = qtype(it.q);
    if (enter) {
      if (tag === "button" || tag === "a" || tag === "input") return;
      if (r) { e.preventDefault(); next(); }
      else if (type === "order" && it.picked.length === it.q.w.length) { e.preventDefault(); check(); }
      return;
    }
    if (tag === "input" || tag === "textarea" || r || type !== "mc") return;
    const k = e.key.toLowerCase();
    let i = "1234567".indexOf(k);
    if (i < 0) i = "abcdefg".indexOf(k);
    if (k.length === 1 && i >= 0 && i < it.opts.length) { e.preventDefault(); answerMC(i); }
  });
  window.addEventListener("hashchange", onRoute);

  /* ------------------------------------------------------------------ content check */
  // Structural checks for the diagram blocks: every text in both languages, every reference resolvable.
  function checkViz(b, w, issues) {
    const bi = (o, what) => { if (o != null && typeof o !== "string" && (!o.en || !o.ja)) issues.push(`${w}: ${what} needs en + ja`); };
    bi(b.t, "title");
    if (b.k !== "flow") bi(b.n, "note"); // in a finder, n holds the question nodes
    if (b.k === "tl") {
      if (!Array.isArray(b.rows) || !b.rows.length) return issues.push(`${w}: no rows`);
      b.rows.forEach((r, i) => {
        if (!r.s || !Array.isArray(r.m) || !r.m.length) issues.push(`${w} row ${i + 1}: sentence or marks missing`);
        bi(r.n, `row ${i + 1} note`); bi(r.l, `row ${i + 1} label`);
        (r.m || []).forEach(m => {
          if (!["x", "xs", "o", "bar", "wave", "arc", "ref", "span"].includes(m[0])) issues.push(`${w} row ${i + 1}: unknown mark ${m[0]}`);
          if (!(m[1] >= -1 && m[1] <= 1)) issues.push(`${w} row ${i + 1}: mark ${m[0]} out of range`);
          if (["xs", "bar", "wave", "arc", "span"].includes(m[0]) && !(m[2] >= -1 && m[2] <= 1)) issues.push(`${w} row ${i + 1}: mark ${m[0]} end out of range`);
          m.slice(2).forEach(x => { if (x && typeof x === "object") bi(x, `row ${i + 1} mark label`); });
        });
      });
    } else if (b.k === "sv") {
      (b.rows || []).forEach((r, i) => {
        if (r.arrow) return bi(r.arrow, `arrow ${i + 1}`);
        bi(r.l, `row ${i + 1} label`); bi(r.n, `row ${i + 1} note`);
        (r.p || []).forEach(p => { if (!ROLE[p[0]]) issues.push(`${w} row ${i + 1}: unknown role ${p[0]}`); bi(p[2], `row ${i + 1} part label`); });
        if (!r.p || !r.p.length) issues.push(`${w} row ${i + 1}: no parts`);
      });
    } else if (b.k === "scale") {
      bi(b.lo, "lo"); bi(b.hi, "hi");
      (b.items || []).forEach((it, i) => { if (typeof it[1] !== "number") issues.push(`${w} item ${i + 1}: value`); bi(it[2], `item ${i + 1} note`); });
    } else if (b.k === "flow") {
      if (!b.n || !b.n[b.start]) return issues.push(`${w}: start node missing`);
      const seen = new Set(), stack = [b.start];
      while (stack.length) {
        const id = stack.pop();
        if (seen.has(id)) continue;
        seen.add(id);
        const node = b.n[id];
        if (!node) { issues.push(`${w}: node "${id}" missing`); continue; }
        if (node.q) { bi(node.q, `node ${id} question`); (node.o || []).forEach(([l, to]) => { bi(l, `node ${id} option`); stack.push(to); }); }
        else if (node.r == null) issues.push(`${w}: node "${id}" has neither question nor result`);
        else { bi(node.nt, `node ${id} note`); if (typeof node.r !== "string") bi(node.r, `node ${id} result`); }
      }
      Object.keys(b.n).forEach(id => { if (!seen.has(id)) issues.push(`${w}: node "${id}" is unreachable`); });
    } else if (b.k === "cmp") {
      (b.cols || []).forEach((c, i) => { bi(c.h, `column ${i + 1} head`); if (typeof c.s !== "string") bi(c.s, `column ${i + 1} subtitle`); (c.p || []).forEach(x => bi(x, `column ${i + 1} point`)); });
    } else if (b.k === "shift") {
      (b.head || []).forEach(h => bi(h, "head")); (b.rows || []).forEach((r, i) => r.forEach(c => bi(c, `row ${i + 1}`)));
    } else if (b.k === "chain") {
      (b.items || []).forEach((it, i) => bi(it[1], `item ${i + 1} label`));
    } else if (b.k === "nest") {
      (b.items || []).forEach((it, i) => {
        bi(it[0], `level ${i + 1} label`);
        if (i && b.items[i - 1][1].toLowerCase().indexOf(it[1].toLowerCase()) < 0) issues.push(`${w}: level ${i + 1} is not inside level ${i}`);
      });
    } else if (b.k === "pic") {
      (b.items || []).forEach((it, i) => bi(it[1], `item ${i + 1} text`));
    }
  }
  function validate() {
    const issues = [];
    GH.topics.forEach(t => {
      if (!t.t || !t.t.en || !t.t.ja) issues.push(`${t.id}: title`);
      if (!GH.chapters.some(c => c.id === t.ch)) issues.push(`${t.id}: unknown chapter ${t.ch}`);
      if (!Array.isArray(t.q) || t.q.length !== 10) issues.push(`${t.id}: ${t.q ? t.q.length : 0} questions`);
      (t.body || []).forEach((b, j) => {
        if (["core", "p", "watch", "tip", "note"].includes(b.k) && (!b.en || !b.ja)) issues.push(`${t.id} block ${j}: missing translation`);
        if (b.k === "h" && (!b.en || !b.ja)) issues.push(`${t.id} heading ${j}: missing translation`);
        checkViz(b, `${t.id} block ${j} (${b.k})`, issues);
      });
      const ks = keysOf(t.id);
      if (ks.length < 3) issues.push(`${t.id}: ${ks.length} key points`);
      ks.forEach((k, n) => { if (!k.en || !k.ja) issues.push(`${t.id} key point ${n + 1}: missing translation`); });
      const gs = MM.groups.filter(g => g.ids.includes(t.id));
      if (gs.length !== 1) issues.push(`${t.id}: in ${gs.length} map groups`);
      else if (gs[0].ch !== t.ch) issues.push(`${t.id}: map group ${gs[0].id} belongs to another chapter`);
      (t.q || []).forEach((q, i) => {
        const w = `${t.id} #${i + 1}`, type = qtype(q), sent = typeof q.q === "string" ? q.q : q.s;
        if (!q.e || !q.e.en || !q.e.ja) issues.push(`${w}: explanation`);
        if (q.q && typeof q.q === "object" && (!q.q.en || !q.q.ja)) issues.push(`${w}: prompt translation`);
        if (q.h && (!q.h.en || !q.h.ja)) issues.push(`${w}: situation translation`);
        if (type === "mc") {
          if (!Array.isArray(q.o) || q.o.length < 2) issues.push(`${w}: options`);
          else if (!(q.a >= 0 && q.a < q.o.length)) issues.push(`${w}: answer index ${q.a}`);
          else {
            const seen = new Set(q.o.map(o => (typeof o === "string" ? o : o.en)));
            if (seen.size !== q.o.length) issues.push(`${w}: duplicate options`);
            q.o.forEach((o, j) => { if (typeof o !== "string" && (!o.en || !o.ja)) issues.push(`${w}: option ${j} translation`); });
          }
          if (!q.q && !q.s) issues.push(`${w}: no prompt`);
          const blanks = sent ? sent.split("___").length - 1 : 0;
          if (blanks > 1 && typeof q.o[q.a] === "string" && q.o[q.a].split(" / ").length !== blanks) issues.push(`${w}: blanks vs answer parts`);
        } else if (type === "input") {
          if (!Array.isArray(q.i) || !q.i.length) issues.push(`${w}: accepted answers`);
          if (!sent || sent.split("___").length !== 2) issues.push(`${w}: typed questions need exactly one blank`);
        } else {
          if (!Array.isArray(q.w) || q.w.length < 2) issues.push(`${w}: words`);
          else if (q.i && !q.i.some(a => norm(a) === norm(q.w.join(" ")))) issues.push(`${w}: word order not accepted`);
        }
      });
    });
    MM.groups.forEach(g => g.ids.forEach(id => { if (!GH.byId[id]) issues.push(`map group ${g.id}: unknown lesson ${id}`); }));
    const count = GH.topics.reduce((a, t) => a + (t.q ? t.q.length : 0), 0);
    const vizN = GH.topics.reduce((a, t) => a + (t.body || []).filter(b => ["tl", "sv", "scale", "flow", "cmp", "shift", "chain", "nest", "pic"].includes(b.k)).length, 0);
    const keyN = GH.topics.reduce((a, t) => a + keysOf(t.id).length, 0);
    if (issues.length) console.warn(`[Grammar Handbook] ${issues.length} content issue(s):\n` + issues.join("\n"));
    else console.info(`[Grammar Handbook] ${GH.topics.length} topics, ${count} questions, ${keyN} key points, ${vizN} diagrams, ${MM.groups.length} map groups, ${GH.verbs.length} verbs, ${GH.glossary.length} terms: content check passed.`);
    return issues;
  }
  GH.validate = validate;

  /* ------------------------------------------------------------------ start */
  renderChrome();
  onRoute();
  validate();
})();
