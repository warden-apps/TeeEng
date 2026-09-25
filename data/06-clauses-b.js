/* 06 Clauses & verb patterns — part B (handbook pp. 67–72) */

GH.topic({
  id: "gerunds", ch: "clauses", p: 67,
  t: { en: "Gerunds and -ing complements", ja: "動名詞" },
  d: { en: "Four jobs of -ing, verbs followed by -ing, -ing after prepositions (including to), and -ing with subjects, negatives, passive and perfect.", ja: "-ing 形の4つの働き、-ing をとる動詞、前置詞（to を含む）の後の -ing、意味上の主語・否定・受動・完了" },
  body: [
    { k: "core", en: `The -ing form has several jobs. Traditional grammar calls it a <b>gerund</b> when it works like a noun: <x>Learning English takes time.</x>`,
      ja: `-ing 形にはいくつもの働きがあります。名詞のように働くとき、伝統文法ではこれを<b>動名詞</b>と呼びます：<x>Learning English takes time.</x>` },
    { k: "table", head: [{ en: "Job", ja: "働き" }, "@example", { en: "Structure", ja: "構造" }], rows: [
      [{ en: "Activity as subject", ja: "主語" }, `<x>Learning English takes time.</x>`, { en: "an -ing clause as subject", ja: "-ing 節が主語" }],
      [{ en: "Verb complement", ja: "動詞の目的語" }, `<x>I enjoy learning English.</x>`, { en: "enjoy takes -ing", ja: "enjoy は -ing をとる" }],
      [{ en: "After a preposition", ja: "前置詞の目的語" }, `<x>I'm interested in learning English.</x>`, { en: "in + -ing", ja: "in＋-ing" }],
      [{ en: "Continuous verb", ja: "進行形" }, `<x>I am learning English.</x>`, { en: "be + V-ing", ja: "be＋-ing" }]
    ] },
    { k: "p", en: `An -ing clause can take its own object and adverb: <x>Reading difficult articles carefully improves my skills.</x>`,
      ja: `-ing 節は、それ自身の目的語や副詞をとれます：<x>Reading difficult articles carefully improves my skills.</x>` },
    { k: "h", en: "Verbs commonly followed by -ing", ja: "-ing をとる動詞" },
    { k: "p", en: `<i>enjoy, avoid, finish, keep, consider, suggest, admit, deny, mind, miss, practice, postpone, risk</i>: <x>I enjoy reading.</x> <x>Avoid sharing passwords.</x> <x>She suggested waiting.</x> <x>Would you mind checking?</x>`,
      ja: `<i>enjoy, avoid, finish, keep, consider, suggest, admit, deny, mind, miss, practice, postpone, risk</i>：<x>I enjoy reading.</x>／<x>Avoid sharing passwords.</x>／<x>She suggested waiting.</x>／<x>Would you mind checking?</x>` },
    { k: "p", en: `Fixed patterns: <x>I spent an hour studying.</x> <x>I have trouble remembering names.</x> <x>The book is worth reading.</x> <x>She's busy preparing the form.</x> <x>go shopping / swimming / running</x>.`,
      ja: `決まった形：<x>I spent an hour studying.</x>（〜して時間を過ごす）／<x>I have trouble remembering names.</x>（〜するのに苦労する）／<x>The book is worth reading.</x>（〜する価値がある）／<x>She's busy preparing the form.</x>（〜するのに忙しい）／<x>go shopping / swimming / running</x>。` },
    { k: "h", en: "After prepositions", ja: "前置詞の後" },
    { k: "p", en: `<x>before leaving</x>, <x>after checking</x>, <x>without asking</x>, <x>by practicing</x>, <x>instead of guessing</x>, <x>good at explaining</x>. After a true preposition, use -ing — never <i>to</i> + V1.`,
      ja: `<x>before leaving</x>、<x>after checking</x>、<x>without asking</x>、<x>by practicing</x>、<x>instead of guessing</x>、<x>good at explaining</x>。本当の前置詞の後では -ing 形を使い、to＋原形は使いません。` },
    { k: "cmp", t: { en: "Two different words spelled to", ja: "同じつづりの2つの to" }, cols: [
      { h: { en: "to = preposition", ja: "to が前置詞" }, s: { en: "→ -ing (or a noun)", ja: "→ -ing（または名詞）" }, ex: [`I look forward to meeting you.`, `I'm used to working late.`, `I object to paying twice.`],
        p: [{ en: `Test: a noun fits after it — <i>look forward to the weekend</i>.`, ja: `見分け方：後ろに名詞を置ける（<i>look forward to the weekend</i>）。` }] },
      { h: { en: "to = part of the infinitive", ja: "to が不定詞の一部" }, s: { en: "→ V1", ja: "→ 原形" }, ex: [`I want to meet you.`, `I decided to wait.`],
        p: [{ en: `A noun doesn't fit: <i>want to the weekend</i> is impossible.`, ja: `名詞は置けない（<i>want to the weekend</i> とは言えない）。` }] }
    ] },
    { k: "h", en: "Subjects, negatives, passive and perfect", ja: "意味上の主語・否定・受動・完了" },
    { k: "p", en: `<x>I appreciate your helping me</x> (formal) / <x>I appreciate you helping me</x> (common). <x>Not checking the details caused a delay.</x> <x>I dislike being interrupted.</x> (passive) <x>She admitted having made a mistake.</x> (perfect — <i>admitted making</i> also works).`,
      ja: `<x>I appreciate your helping me.</x>（堅い）／<x>I appreciate you helping me.</x>（一般的）。<x>Not checking the details caused a delay.</x>（否定）／<x>I dislike being interrupted.</x>（受動）／<x>She admitted having made a mistake.</x>（完了。admitted making でも可）。` },
    { k: "watch", en: `<x>I enjoy reading</x>, not <s>I enjoy to read</s>. <x>I'm looking forward to seeing you</x>, not <s>to see you</s>. But <x>I want to see you</x> needs the infinitive. The word before decides the form.`,
      ja: `<s>I enjoy to read</s> ではなく <x>I enjoy reading.</x>、<s>looking forward to see you</s> ではなく <x>I'm looking forward to seeing you.</x> ただし <x>I want to see you.</x> は不定詞です。前の語が後ろの形を決めます。` },
    { k: "tip", en: `〜するのを楽しみにしている is <i>look forward to</i> + -ing: お会いできるのを楽しみにしています = <x>I'm looking forward to meeting you.</x> This <i>to</i> is a preposition — a classic exam point.`,
      ja: `「〜するのを楽しみにしている」は look forward to＋-ing です：「お会いできるのを楽しみにしています」＝<x>I'm looking forward to meeting you.</x> この to は前置詞で、試験によく出るポイントです。` }
  ],
  q: [
    { q: `I enjoy ___ novels in English.`, o: [`to read`, `reading`, `read`], a: 1,
      e: { en: `<i>Enjoy</i> + -ing.`, ja: `enjoy＋-ing です。` } },
    { q: `I'm looking forward to ___ you.`, o: [`meet`, `meeting`, `met`], a: 1,
      e: { en: `<i>To</i> is a preposition here → -ing.`, ja: `この to は前置詞なので -ing です。` } },
    { q: `Please avoid ___ your password.`, o: [`to share`, `sharing`, `share`], a: 1,
      e: { en: `<i>Avoid</i> + -ing.`, ja: `avoid＋-ing です。` } },
    { q: `She's good at ___ things clearly.`, o: [`explain`, `explaining`, `to explain`], a: 1,
      e: { en: `After the preposition <i>at</i> → -ing.`, ja: `前置詞 at の後なので -ing です。` } },
    { q: `___ English every day improves your listening.`, o: [`Listen`, `Listening to`, `To listening`], a: 1,
      e: { en: `An -ing clause as subject.`, ja: `-ing 節が主語になっています。` } },
    { q: `This book is worth ___.`, o: [`to read`, `reading`, `read`], a: 1,
      e: { en: `<i>Worth</i> + -ing.`, ja: `worth＋-ing です。` } },
    { q: `I spent two hours ___ for my keys.`, o: [`to look`, `looking`, `look`], a: 1,
      e: { en: `<i>Spend</i> time + -ing.`, ja: `spend＋時間＋-ing です。` } },
    { q: `I dislike ___ when I'm talking.`, o: [`interrupting`, `being interrupted`, `to interrupt`], a: 1,
      e: { en: `Passive -ing: <i>being</i> + V3.`, ja: `受動の -ing：being＋過去分詞です。` } },
    { q: `He left without ___ goodbye.`, o: [`say`, `saying`, `to say`], a: 1,
      e: { en: `<i>Without</i> + -ing.`, ja: `without＋-ing です。` } },
    { q: `Would you mind ___ (open) the window?`, i: [`opening`],
      e: { en: `<i>Mind</i> + -ing.`, ja: `mind＋-ing です。` } }
  ]
});

GH.topic({
  id: "infinitives", ch: "clauses", p: 68,
  t: { en: "Infinitives: to do and bare do", ja: "不定詞" },
  d: { en: "To-infinitives after verbs, adjectives and nouns; purpose; bare infinitives after modals and let/make/have; perfect, continuous and passive infinitives.", ja: "動詞・形容詞・名詞の後の to 不定詞、目的、助動詞・let・make・have の後の原形不定詞、完了・進行・受動の不定詞" },
  body: [
    { k: "core", en: `An infinitive is a non-finite verb form. The <b>to-infinitive</b>: <i>to eat, to be, to have eaten</i>. The <b>bare infinitive</b> is the same without <i>to</i>, used after modals and a few other verbs.`,
      ja: `不定詞は時制をもたない動詞の形です。<b>to 不定詞</b>：<i>to eat, to be, to have eaten</i>。<b>原形不定詞</b>は to のない形で、助動詞などの後に使います。` },
    { k: "h", en: "Common to-infinitive patterns", ja: "よく使う to 不定詞の型" },
    { k: "table", head: ["@pattern", { en: "Common words", ja: "よく使う語" }, "@example"], rows: [
      [{ f: "verb + to V1" }, `want, hope, plan, decide, promise, refuse, agree, manage, fail, learn, afford`, `<x>I decided to wait.</x>`],
      [{ f: "verb + person + to V1" }, `want, ask, tell, allow, expect, encourage`, `<x>She asked me to wait.</x>`],
      [{ f: "adjective + to V1" }, `ready, happy, difficult, easy`, `<x>I'm happy to help.</x> <x>It's difficult to understand.</x>`],
      [{ f: "noun + to V1" }, `a chance, a decision, a way`, `<x>a chance to practice</x>`],
      [{ en: "purpose", ja: "目的" }, `to / in order to / so as to`, `<x>I called to confirm the date.</x>`]
    ] },
    { k: "p", en: `For a negative purpose: <x>in order not to forget</x> / <x>so as not to forget</x>.`,
      ja: `否定の目的は <x>in order not to forget</x>／<x>so as not to forget</x>（忘れないように）です。` },
    { k: "h", en: "Bare infinitives", ja: "原形不定詞" },
    { k: "p", en: `Modal + V1: <x>can go</x>, <x>should check</x>, <x>must be</x>. <i>Let / make / have</i> + object + V1: <x>Let me check.</x> <x>She made me wait.</x> <x>I had him call.</x> <i>Help</i> + object + (to) V1: <x>Help me (to) understand.</x> And <x>Why not ask?</x>`,
      ja: `助動詞＋原形：<x>can go</x>、<x>should check</x>、<x>must be</x>。let / make / have＋目的語＋原形：<x>Let me check.</x>／<x>She made me wait.</x>／<x>I had him call.</x> help＋目的語＋(to) 原形：<x>Help me (to) understand.</x> また <x>Why not ask?</x>（〜したらどう？）。` },
    { k: "p", en: `After perception verbs, the bare infinitive views the whole event: <x>I saw him cross the road.</x> The -ing form views it in progress: <x>I saw him crossing the road.</x>`,
      ja: `知覚動詞の後では、原形は出来事全体を（<x>I saw him cross the road.</x>＝渡るのを見た）、-ing は進行中の様子を表します（<x>I saw him crossing the road.</x>＝渡っているところを見た）。` },
    { k: "h", en: "Perfect, continuous, passive infinitives", ja: "完了・進行・受動の不定詞" },
    { k: "table", head: ["@form", "@example", { en: "Meaning", ja: "意味" }], rows: [
      [{ f: "to V1" }, `<x>I hope to finish.</x>`, { en: "same time as, or later than, the main verb", ja: "主節と同じか後の時" }],
      [{ f: "to be V-ing" }, `<x>She seems to be working.</x>`, { en: "in progress", ja: "進行中" }],
      [{ f: "to have V3" }, `<x>She seems to have left.</x>`, { en: "earlier than the main verb", ja: "主節より前" }],
      [{ f: "to be V3" }, `<x>It needs to be repaired.</x>`, { en: "passive", ja: "受動" }],
      [{ f: "to have been V3" }, `<x>It appears to have been damaged.</x>`, { en: "an earlier passive event", ja: "以前の受動" }]
    ] },
    { k: "p", en: `Give the infinitive its own subject with <i>for</i>: <x>For you to leave now would be difficult.</x> An understood verb can be left out: <x>Do you want to join? — Yes, I want to.</x>`,
      ja: `for で不定詞の意味上の主語を示せます：<x>For you to leave now would be difficult.</x> わかりきった動詞は省略できます：<x>Do you want to join? — Yes, I want to.</x>` },
    { k: "watch", en: `<i>To</i> + V1 only: <x>to go</x>, not <s>to went</s>. A split infinitive (<x>to fully understand</x>) is standard when it's natural — clarity matters more than an old "never split" rule.`,
      ja: `to の後は原形だけです：<s>to went</s> ではなく <x>to go</x>。分離不定詞（<x>to fully understand</x>）は、自然なら標準的な英語です。「決して分けるな」という古いルールより明快さが大切です。` },
    { k: "tip", en: `〜するために is a purpose infinitive: 日付を確認するために電話した = <x>I called to confirm the date.</x> Don't write <s>for confirm</s> or <s>for to confirm</s>.`,
      ja: `「〜するために」は目的を表す不定詞です：「日付を確認するために電話した」＝<x>I called to confirm the date.</x> <s>for confirm</s> や <s>for to confirm</s> とはしません。` }
  ],
  q: [
    { q: `I decided ___ for the next train.`, o: [`waiting`, `to wait`, `wait`], a: 1,
      e: { en: `<i>Decide</i> + to V1.`, ja: `decide＋to 不定詞です。` } },
    { q: `She asked me ___ outside.`, o: [`wait`, `to wait`, `waiting`], a: 1,
      e: { en: `<i>Ask</i> + person + to V1.`, ja: `ask＋人＋to 不定詞です。` } },
    { q: `Let me ___ the schedule.`, o: [`to check`, `check`, `checking`], a: 1,
      e: { en: `<i>Let</i> + object + bare V1.`, ja: `let＋目的語＋原形です。` } },
    { q: `She made me ___ for an hour.`, o: [`wait`, `to wait`, `waited`], a: 0,
      e: { en: `<i>Make</i> + object + bare V1.`, ja: `make＋目的語＋原形です。` } },
    { q: `I called ___ the date.`, h: { en: `purpose`, ja: `目的` }, o: [`for confirming`, `to confirm`, `for confirm`], a: 1,
      e: { en: `Purpose → to V1.`, ja: `目的は to 不定詞で表します。` } },
    { q: `I wrote it down ___ forget.`, o: [`in order not to`, `not in order to`, `in order to not`], a: 0,
      e: { en: `Negative purpose: <i>in order not to</i>. You may hear <i>in order to not</i> in speech, but <i>in order not to</i> is the standard form.`, ja: `否定の目的：in order not to です。会話では in order to not も聞きますが、標準的な形は in order not to です。` } },
    { q: `She seems ___ already.`, h: { en: `The leaving happened earlier.`, ja: `すでに出たようだ。` }, o: [`to leave`, `to have left`, `leaving`], a: 1,
      e: { en: `The perfect infinitive = earlier than <i>seems</i>.`, ja: `完了不定詞は seems より前のことを表します。` } },
    { q: `The printer needs ___.`, o: [`to repair`, `to be repaired`, `repair`], a: 1,
      e: { en: `Passive infinitive: <i>to be</i> + V3.`, ja: `受動の不定詞：to be＋過去分詞です。` } },
    { q: `I saw him ___ the road.`, h: { en: `You watched the whole crossing.`, ja: `渡りきるのを全部見た。` }, o: [`cross`, `to cross`, `crossed`], a: 0,
      e: { en: `Perception verb + bare V1 = the whole event.`, ja: `知覚動詞＋原形は出来事全体を表します。` } },
    { q: `It's difficult ___ his accent.`, o: [`understand`, `to understand`, `understanding of`], a: 1,
      e: { en: `Adjective + to V1.`, ja: `形容詞＋to 不定詞です。` } }
  ]
});

GH.topic({
  id: "ing-vs-to", ch: "clauses", p: 69,
  t: { en: "Doing versus to do: meaning changes", ja: "動名詞と不定詞で意味が変わる動詞" },
  d: { en: "remember, forget, stop, try, regret, mean, go on — plus like/love/prefer, would like, need + -ing, and negative scope.", ja: "remember・forget・stop・try・regret・mean・go on、like／love／prefer、would like、need＋-ing、否定の位置" },
  body: [
    { k: "core", en: `Some verbs take both -ing and a to-infinitive — sometimes with a small difference in viewpoint, sometimes with a <b>big change in meaning</b>. Learn them as pairs.`,
      ja: `-ing と to 不定詞の両方をとる動詞があります。ほとんど同じ意味のこともあれば、<b>意味が大きく変わる</b>こともあります。ペアで覚えましょう。` },
    { k: "table", head: [{ en: "Verb", ja: "動詞" }, { en: "+ V-ing", ja: "＋ -ing" }, { en: "+ to V1", ja: "＋ to 不定詞" }], rows: [
      [`<b>remember</b>`, { en: `recall an earlier action: <x>I remember locking it.</x>`, ja: `（過去に）〜したことを覚えている：<x>I remember locking it.</x>` }, { en: `remember a task: <x>Remember to lock it.</x>`, ja: `（これから）忘れずに〜する：<x>Remember to lock it.</x>` }],
      [`<b>forget</b>`, { en: `lose the memory of an earlier action: <x>I'll never forget meeting her.</x>`, ja: `（過去に）〜したことを忘れる：<x>I'll never forget meeting her.</x>` }, { en: `fail to do a task: <x>I forgot to call.</x>`, ja: `〜し忘れる：<x>I forgot to call.</x>` }],
      [`<b>stop</b>`, { en: `end that activity: <x>I stopped smoking.</x>`, ja: `〜するのをやめる：<x>I stopped smoking.</x>` }, { en: `pause in order to do something: <x>I stopped to buy water.</x>`, ja: `〜するために立ち止まる：<x>I stopped to buy water.</x>` }],
      [`<b>try</b>`, { en: `test a method: <x>Try restarting it.</x>`, ja: `試しに〜してみる：<x>Try restarting it.</x>` }, { en: `attempt (maybe without success): <x>I tried to restart it, but it failed.</x>`, ja: `〜しようと努力する：<x>I tried to restart it, but it failed.</x>` }],
      [`<b>regret</b>`, { en: `be sorry about the past: <x>I regret buying it.</x>`, ja: `（過去に）〜したことを後悔する：<x>I regret buying it.</x>` }, { en: `formal bad news: <x>I regret to inform you…</x>`, ja: `残念ながら〜する：<x>I regret to inform you…</x>` }],
      [`<b>mean</b>`, { en: `involve: <x>This means working late.</x>`, ja: `〜することを意味する：<x>This means working late.</x>` }, { en: `intend: <x>I meant to call.</x>`, ja: `〜するつもりだ：<x>I meant to call.</x>` }],
      [`<b>go on</b>`, { en: `continue the same activity: <x>She went on talking.</x>`, ja: `〜し続ける：<x>She went on talking.</x>` }, { en: `move on to something new: <x>She went on to explain the fee.</x>`, ja: `続けて（次に）〜する：<x>She went on to explain the fee.</x>` }]
    ] },
    { k: "tl", t: { en: "-ing looks back, to looks forward", ja: "-ing は振り返り、to はこれから" }, rows: [
      { l: { en: "remember + -ing", ja: "remember＋-ing" }, s: `I remember locking the door.`, m: [["x", -0.55, { en: "locked it", ja: "鍵をかけた" }], ["arc", 0, -0.55, { en: "remember", ja: "覚えている" }]],
        n: { en: "The action is already done; you recall it.", ja: "すでにしたことを思い出す。" } },
      { l: { en: "remember + to", ja: "remember＋to" }, s: `Remember to lock the door.`, m: [["arc", 0, 0.55, { en: "remember", ja: "覚えておく" }], ["o", 0.55, { en: "lock it", ja: "鍵をかける" }]],
        n: { en: "A task still to do.", ja: "これからすること。" } },
      { l: { en: "regret + -ing", ja: "regret＋-ing" }, s: `I regret buying it.`, m: [["x", -0.5, { en: "bought it", ja: "買った" }], ["arc", 0, -0.5, { en: "sorry now", ja: "今後悔" }]],
        n: { en: "Sorry now about something in the past.", ja: "過去のことを今後悔している。" } }
    ] },
    { k: "h", en: "Small differences and overlap", ja: "小さな違いと重なり" },
    { k: "p", en: `<i>Like, love, hate, prefer</i> take both: <x>I like swimming.</x> / <x>I like to swim.</x> The -ing form tends to stress the experience, the infinitive a habit or choice. Use <i>would like / love / prefer</i> + to V1 for a particular wish: <x>I'd like to apply.</x> <i>Begin, start, continue</i> allow both with little difference: <x>It started raining / to rain.</x>`,
      ja: `<i>like, love, hate, prefer</i> は両方とれます：<x>I like swimming.</x>／<x>I like to swim.</x>（-ing は経験そのもの、不定詞は習慣や選択を強調しがち）。特定の希望には would like / love / prefer＋to 不定詞：<x>I'd like to apply.</x> <i>begin, start, continue</i> はほぼ同じ意味で両方とれます：<x>It started raining / to rain.</x>` },
    { k: "h", en: "Need + -ing", ja: "need＋-ing" },
    { k: "p", en: `<x>The phone needs repairing</x> = it needs to be repaired (a passive meaning). <x>I need to repair the phone</x> = I need to do it myself.`,
      ja: `<x>The phone needs repairing.</x>＝電話は修理が必要だ（受動の意味）。<x>I need to repair the phone.</x>＝私が修理する必要がある。` },
    { k: "h", en: "Negative scope", ja: "否定の位置" },
    { k: "p", en: `<x>I remembered not to call.</x> = I remembered to avoid calling. <x>I didn't remember to call.</x> = I forgot the task. <x>I regret not asking.</x> = I'm sorry I didn't ask.`,
      ja: `<x>I remembered not to call.</x>＝電話しないことを覚えていた。<x>I didn't remember to call.</x>＝電話するのを忘れた。<x>I regret not asking.</x>＝聞かなかったことを後悔している。` },
    { k: "watch", en: `Don't generalize from one verb: <x>want to go</x>, <x>enjoy going</x>, <x>ask someone to go</x>, <x>suggest going</x>. Similar meanings don't guarantee the same pattern.`,
      ja: `1つの動詞から一般化しないこと：<x>want to go</x>、<x>enjoy going</x>、<x>ask someone to go</x>、<x>suggest going</x>。意味が似ていても、型が同じとは限りません。` },
    { k: "tip", en: `A memory trick: <b>-ing looks back</b> (remember / forget / regret something already done); <b>to looks forward</b> (remember / forget a task to do). 忘れずに電話してね = <x>Remember to call.</x> 電話したのを覚えている = <x>I remember calling.</x>`,
      ja: `覚え方：<b>-ing は過去を振り返る</b>（したことを覚えている・忘れる・後悔する）、<b>to はこれからを見る</b>（これからすることを覚えている・忘れる）。「忘れずに電話してね」＝<x>Remember to call.</x>、「電話したことを覚えている」＝<x>I remember calling.</x>` }
  ],
  q: [
    { q: `Remember ___ the door when you leave.`, o: [`locking`, `to lock`], a: 1,
      e: { en: `A task for the future → <i>remember to</i>.`, ja: `これからすることなので remember to です。` } },
    { q: `I remember ___ the door, so it's definitely locked.`, o: [`locking`, `to lock`], a: 0,
      e: { en: `Recalling an earlier action → <i>remember</i> + -ing.`, ja: `以前したことを思い出すので remember＋-ing です。` } },
    { q: `I forgot ___ my mother yesterday. She's upset.`, o: [`calling`, `to call`], a: 1,
      e: { en: `Failed to do a task → <i>forget to</i>.`, ja: `すべきことをし忘れたので forget to です。` } },
    { q: `He stopped ___ last year. He feels healthier now.`, o: [`smoking`, `to smoke`], a: 0,
      e: { en: `He ended the activity → <i>stop</i> + -ing.`, ja: `その活動をやめたので stop＋-ing です。` } },
    { q: `On the way home, I stopped ___ some water.`, o: [`buying`, `to buy`], a: 1,
      e: { en: `Paused in order to do something → <i>stop to</i>.`, ja: `〜するために立ち止まったので stop to です。` } },
    { q: `The app won't open. Try ___ your phone.`, h: { en: `Test a possible solution.`, ja: `解決法を試してみる。` }, o: [`restarting`, `to restart`], a: 0,
      e: { en: `<i>Try</i> + -ing = test a method.`, ja: `try＋-ing＝試しにやってみる、です。` } },
    { q: `I tried ___ the box, but it was too heavy.`, o: [`lifting`, `to lift`], a: 1,
      e: { en: `<i>Try to</i> = make an effort (and here, fail).`, ja: `try to＝〜しようと努力する（ここではできなかった）です。` } },
    { q: `I regret ___ you that your application was unsuccessful.`, o: [`telling`, `to tell`], a: 1,
      e: { en: `Formal bad news → <i>regret to</i>.`, ja: `悪い知らせの前置きなので regret to です。` } },
    { q: `The phone needs ___.`, o: [`repairing`, `to repair`], a: 0,
      e: { en: `<i>Need</i> + -ing has a passive meaning.`, ja: `need＋-ing は受動の意味になります。` } },
    { q: `I'd like ___ for the job.`, o: [`applying`, `to apply`], a: 1,
      e: { en: `<i>Would like</i> + to V1.`, ja: `would like＋to 不定詞です。` } }
  ]
});

GH.topic({
  id: "participles", ch: "clauses", p: 70,
  t: { en: "Participles and reduced clauses", ja: "分詞と分詞構文" },
  d: { en: "Participle clauses for time, reason and background; perfect and passive participles; dangling participles; with + object; see/hear + object.", ja: "時・理由・背景を表す分詞構文、完了分詞と受動分詞、懸垂分詞、with＋目的語＋分詞、知覚動詞＋目的語＋分詞" },
  body: [
    { k: "core", en: `Participles are V-ing (present participle) and V3 (past participle). Their names don't set the time: <x>Working tomorrow, I'll miss the event</x> refers to the future.`,
      ja: `分詞には V-ing（現在分詞）と V3（過去分詞）があります。名前は時を表すわけではありません：<x>Working tomorrow, I'll miss the event.</x> は未来のことです。` },
    { k: "h", en: "Participle clauses for background", ja: "背景を表す分詞構文" },
    { k: "ex", items: [
      [`<b>Walking home</b>, I saw Mei.`, { en: `= while I was walking home`, ja: `＝家に歩いて帰る途中で` }],
      [`<b>Feeling tired</b>, I went to bed.`, { en: `= because I felt tired`, ja: `＝疲れていたので` }],
      [`<b>Written clearly</b>, the instructions are easy to follow.`, { en: `passive: the instructions were written clearly`, ja: `受動：説明書は明快に書かれているので` }],
      [`<b>Having finished</b> the report, I went home.`, { en: `completion before the main event`, ja: `報告書を書き終えてから` }],
      [`<b>Having been warned</b>, we were careful.`, { en: `perfect passive participle`, ja: `警告されていたので（完了受動分詞）` }]
    ] },
    { k: "p", en: `These are compact and common in writing; a full clause is often easier in speech.`,
      ja: `分詞構文は簡潔で、書き言葉によく使われます。会話では完全な節のほうが自然なことが多いです。` },
    { k: "h", en: "Keep the understood subject correct", ja: "意味上の主語を一致させる" },
    { k: "p", en: `The participle's understood subject should match the main clause's subject: <x>Walking home, I saw a dog</x> — I was walking. <s>Walking home, the rain started.</s> makes the rain the walker! Fix it: <x>While I was walking home, it started to rain.</x> This mistake is called a <b>dangling participle</b>.`,
      ja: `分詞構文の意味上の主語は、主節の主語と一致させます：<x>Walking home, I saw a dog.</x>（歩いていたのは I）。<s>Walking home, the rain started.</s> では雨が歩いていることになってしまいます。直すなら <x>While I was walking home, it started to rain.</x> この誤りを<b>懸垂分詞</b>と言います。` },
    { k: "p", en: `Some fixed expressions are exceptions: <x>generally speaking</x>, <x>judging by the evidence</x>, <x>considering the circumstances</x>.`,
      ja: `決まった表現は例外です：<x>generally speaking</x>（一般的に言えば）、<x>judging by the evidence</x>（証拠から判断すると）、<x>considering the circumstances</x>（状況を考えると）。` },
    { k: "h", en: "With and absolute constructions", ja: "with を使う形と独立分詞構文" },
    { k: "p", en: `<x>With the customer waiting, I called the manager.</x> gives the participle its own subject. <x>Weather permitting, we'll go outside.</x> = if the weather permits. <x>The meeting over, everyone left.</x> is literary.`,
      ja: `<x>With the customer waiting, I called the manager.</x> は with で分詞の主語を示す形です。<x>Weather permitting, we'll go outside.</x>＝天気がよければ。<x>The meeting over, everyone left.</x> は文語的な言い方です。` },
    { k: "h", en: "See / hear + object + participle", ja: "知覚動詞＋目的語＋分詞" },
    { k: "p", en: `<x>I saw her cross the road.</x> = the whole crossing. <x>I saw her crossing the road.</x> = in progress. <x>I heard my name called.</x> uses a passive participle; <x>I heard someone calling my name.</x> is active and ongoing.`,
      ja: `<x>I saw her cross the road.</x>＝渡るのを（最後まで）見た。<x>I saw her crossing the road.</x>＝渡っているところを見た。<x>I heard my name called.</x> は受動（名前が呼ばれるのを聞いた）、<x>I heard someone calling my name.</x> は能動で進行中です。` },
    { k: "watch", en: `<x>a broken phone</x> isn't "the past tense of a phone" — <i>broken</i> describes its condition. <x>an interesting lesson</x> / <x>interested students</x> use participle adjectives. Separate a form's job from its name.`,
      ja: `<x>a broken phone</x> の broken は「過去」ではなく、電話の状態を表しています。<x>an interesting lesson</x>／<x>interested students</x> も分詞から来た形容詞です。形の名前と働きを区別しましょう。` },
    { k: "tip", en: `〜しながら or 〜ので can often become a participle clause, but check the subject: 歩いていると雨が降ってきた is <x>While I was walking, it started to rain</x> — not <s>Walking, the rain started</s>.`,
      ja: `日本語の「〜しながら／〜ので」は分詞構文にできることが多いですが、主語を確認しましょう。「歩いていると雨が降ってきた」は <x>While I was walking, it started to rain.</x> で、<s>Walking, the rain started.</s> は誤りです。` }
  ],
  q: [
    { q: `___ home, I saw an old friend.`, o: [`Walked`, `Walking`, `To walk`], a: 1,
      e: { en: `An active participle clause: I was walking.`, ja: `能動の分詞構文です（歩いていたのは I）。` } },
    { q: `___ tired, I went to bed early.`, o: [`Feeling`, `Felt`, `To feel`], a: 0,
      e: { en: `<i>Feeling tired</i> = because I felt tired.`, ja: `Feeling tired＝疲れていたので、です。` } },
    { q: `___ the report, I went home.`, h: { en: `The report was finished first.`, ja: `報告書を先に終えた。` }, o: [`Having finished`, `Finished`, `Being finish`], a: 0,
      e: { en: `A perfect participle = completed before the main event.`, ja: `完了分詞は、主節より前に完了したことを表します。` } },
    { q: `___ in simple English, the book is easy to read.`, o: [`Writing`, `Written`, `Having writing`], a: 1,
      e: { en: `A passive participle: the book is written in simple English.`, ja: `受動の分詞：本は簡単な英語で書かれています。` } },
    { q: { en: `Which sentence is correct?`, ja: `正しい文はどれ？` }, o: [`Walking home, the rain started.`, `While I was walking home, it started to rain.`], a: 1,
      e: { en: `In the first, the rain seems to be walking — a dangling participle.`, ja: `1つ目は雨が歩いていることになってしまいます（懸垂分詞）。` } },
    { q: `I saw her ___ the road.`, h: { en: `She was in the middle of crossing.`, ja: `渡っている最中だった。` }, o: [`crossing`, `crossed`, `to cross`], a: 0,
      e: { en: `Perception verb + -ing = in progress.`, ja: `知覚動詞＋-ing は進行中を表します。` } },
    { q: `I heard my name ___.`, o: [`call`, `called`, `calling me`], a: 1,
      e: { en: `A passive participle: my name was called.`, ja: `受動の分詞：名前が呼ばれた、です。` } },
    { q: `With the customer ___, I called the manager.`, o: [`wait`, `waiting`, `waited`], a: 1,
      e: { en: `<i>With</i> + object + -ing.`, ja: `with＋目的語＋-ing です。` } },
    { q: `___ permitting, we'll have lunch outside.`, o: [`Weather`, `The weather is`, `If weather`], a: 0,
      e: { en: `An absolute construction: <i>Weather permitting</i> = if the weather permits.`, ja: `独立分詞構文：Weather permitting＝天気がよければ、です。` } },
    { q: `My phone has a ___ screen.`, o: [`breaking`, `broken`, `broke`], a: 1,
      e: { en: `A participle adjective describing its condition.`, ja: `状態を表す分詞形容詞です。` } }
  ]
});

GH.topic({
  id: "used-to", ch: "clauses", p: 71,
  t: { en: "Used to, be used to, and would", ja: "used to・be used to・would" },
  d: { en: "Past habits and states with used to, would for remembered repetition, and be/get used to + -ing for familiarity.", ja: "used to（過去の習慣・状態）、would（過去の繰り返し）、be/get used to＋-ing（慣れ）" },
  body: [
    { k: "table", head: ["@pattern", { en: "Meaning", ja: "意味" }, "@example"], rows: [
      [{ f: "used to + V1" }, { en: "a past habit or state, contrasted with now", ja: "以前は〜だった（今は違う）" }, `<x>I used to live in Taiwan.</x>`],
      [{ f: "be used to + noun / V-ing" }, { en: "be accustomed; it feels familiar", ja: "〜に慣れている" }, `<x>I'm used to working late.</x>`],
      [{ f: "get used to + noun / V-ing" }, { en: "become accustomed", ja: "〜に慣れる" }, `<x>I'm getting used to the new schedule.</x>`],
      [{ f: "would + V1" }, { en: "a repeated past action in a story", ja: "（よく）〜したものだ" }, `<x>Every evening, we would walk by the river.</x>`]
    ] },
    { k: "tl", t: { en: "Three uses of used, on a timeline", ja: "3つの used をタイムラインで見る" }, rows: [
      { l: { en: "used to + V1", ja: "used to＋原形" }, s: `I used to smoke.`, m: [["xs", -0.95, -0.4, 6], ["ref", -0.3, { en: "stopped", ja: "やめた" }]],
        n: { en: "A past habit — not true any more.", ja: "過去の習慣（今は違う）。" } },
      { l: { en: "be used to + -ing", ja: "be used to＋-ing" }, s: `I'm used to working late.`, m: [["bar", -0.6, 0.7, { en: "feels normal", ja: "慣れている" }]],
        n: { en: "A present state: it's familiar now.", ja: "今の状態：もう慣れている。" } },
      { l: { en: "get used to + -ing", ja: "get used to＋-ing" }, s: `I'm getting used to the new schedule.`, m: [["wave", -0.4, 0.3, { en: "getting used to it", ja: "慣れていく途中" }]],
        n: { en: "The change of becoming familiar.", ja: "慣れていく変化の途中。" } }
    ] },
    { k: "h", en: "Used to: former habits and states", ja: "used to：以前の習慣・状態" },
    { k: "p", en: `<x>I used to smoke.</x> (I don't now.) <x>There used to be a shop here.</x> There's no present form — for current habits, use the present simple: <x>I walk to work now.</x> Questions and negatives: <x>Did you use to live here?</x> <x>I didn't use to like coffee.</x> <x>I never used to drink coffee.</x>`,
      ja: `<x>I used to smoke.</x>（今は吸わない）／<x>There used to be a shop here.</x>（以前はここに店があった）。現在形はなく、今の習慣は現在形で表します：<x>I walk to work now.</x> 疑問文・否定文：<x>Did you use to live here?</x>／<x>I didn't use to like coffee.</x>／<x>I never used to drink coffee.</x>` },
    { k: "h", en: "Would for remembered repetition", ja: "would：思い出の中の繰り返し" },
    { k: "p", en: `Set the past scene first: <x>When we lived near the river, we would walk there every evening.</x> <i>Would</i> doesn't work for states: <x>I used to own a bike</x>, not <s>I would own a bike</s>. The past simple also works for habits: <x>We walked there every evening.</x> A single event takes the past simple: <x>I visited once</x>, not <s>I used to visit once</s>.`,
      ja: `まず過去の場面を示します：<x>When we lived near the river, we would walk there every evening.</x> would は状態には使えません：<s>I would own a bike</s> ではなく <x>I used to own a bike.</x> 過去の習慣は過去形でも表せます（<x>We walked there every evening.</x>）。1回だけの出来事は過去形です：<s>I used to visit once</s> ではなく <x>I visited once.</x>` },
    { k: "h", en: "Be / get used to: familiarity", ja: "be/get used to：慣れ" },
    { k: "p", en: `<x>I'm used to the heat.</x> <x>I'm used to speaking Japanese at work.</x> <x>I got used to it after a month.</x> <x>I'll get used to it.</x> Here <i>to</i> is a preposition, so a verb after it takes -ing.`,
      ja: `<x>I'm used to the heat.</x>（暑さに慣れている）／<x>I'm used to speaking Japanese at work.</x>／<x>I got used to it after a month.</x>（1か月で慣れた）／<x>I'll get used to it.</x>（そのうち慣れる）。この to は前置詞なので、後ろの動詞は -ing 形にします。` },
    { k: "ex", items: [
      [`I <b>used to work</b> late.`, { en: `I did it in the past (not now)`, ja: `以前は遅くまで働いていた（今は違う）` }],
      [`I'<b>m used to working</b> late.`, { en: `it's familiar to me now`, ja: `遅くまで働くのに慣れている` }]
    ] },
    { k: "watch", en: `<x>The tool is used to open the case</x> is a third structure: passive <i>be used</i> + a purpose infinitive (people use the tool to open the case). It has nothing to do with being accustomed.`,
      ja: `<x>The tool is used to open the case.</x> は第3の構文で、受動態 be used＋目的の不定詞（その道具はケースを開けるのに使われる）です。「慣れ」とは関係ありません。` },
    { k: "tip", en: `よく〜したものだ = <i>used to</i> / <i>would</i>; 〜に慣れている = <i>be used to</i> + -ing; 〜に慣れる = <i>get used to</i> + -ing. 早起きに慣れた = <x>I got used to getting up early.</x>`,
      ja: `「よく〜したものだ」＝used to / would、「〜に慣れている」＝be used to＋-ing、「〜に慣れる」＝get used to＋-ing。「早起きに慣れた」＝<x>I got used to getting up early.</x>` }
  ],
  q: [
    { q: `I ___ in Taiwan when I was a child.`, o: [`used to live`, `am used to living`, `would live`], a: 0,
      e: { en: `A past state → <i>used to</i> (not <i>would</i>).`, ja: `過去の状態なので used to です（would は不可）。` } },
    { q: `I'm used to ___ late.`, o: [`work`, `working`, `worked`], a: 1,
      e: { en: `<i>Be used to</i> + -ing.`, ja: `be used to＋-ing です。` } },
    { q: `I ___ getting up early. It's easy now.`, o: [`used to`, `am used to`], a: 1,
      e: { en: `Familiar now → <i>be used to</i>.`, ja: `今慣れているので be used to です。` } },
    { q: `It was hard at first, but I ___ the noise.`, o: [`got used to`, `used to`], a: 0,
      e: { en: `Became accustomed → <i>get used to</i>.`, ja: `慣れたので get used to です。` } },
    { q: `___ you use to play the piano?`, o: [`Did`, `Were`, `Do`], a: 0,
      e: { en: `Question: <i>Did</i> + subject + <i>use to</i>.`, ja: `疑問文：Did＋主語＋use to です。` } },
    { q: `I didn't ___ like coffee, but now I love it.`, o: [`used to`, `use to`], a: 1,
      e: { en: `After <i>didn't</i>, <i>use to</i> is the safest form.`, ja: `didn't の後は use to が最も安全な形です。` } },
    { q: `When we were kids, we ___ play by the river every day.`, o: [`would`, `were used to`], a: 0,
      e: { en: `A repeated past action in a story → <i>would</i>.`, ja: `思い出の中の繰り返しなので would です。` } },
    { q: `There ___ be a bookstore on this corner.`, o: [`used to`, `would`], a: 0,
      e: { en: `A former state → <i>used to</i>.`, ja: `以前の状態なので used to です。` } },
    { q: `I ___ Kyoto once, in 2019.`, o: [`used to visit`, `visited`], a: 1,
      e: { en: `A single event → past simple.`, ja: `1回の出来事なので過去形です。` } },
    { q: { en: `What does <x>This tool is used to open cans</x> mean?`, ja: `<x>This tool is used to open cans</x> の意味は？` },
      o: [{ en: "This tool is accustomed to opening cans.", ja: "この道具は缶を開けるのに慣れている。" }, { en: "People use this tool to open cans.", ja: "この道具は缶を開けるのに使われる。" }], a: 1,
      e: { en: `Passive <i>be used</i> + a purpose infinitive.`, ja: `受動態 be used＋目的の不定詞です。` } }
  ]
});

GH.topic({
  id: "phrasal-verbs", ch: "clauses", p: 72,
  t: { en: "Phrasal and prepositional verbs", ja: "句動詞" },
  d: { en: "Separable and inseparable multiword verbs, pronoun position, intransitive phrasal verbs, and final prepositions in questions.", ja: "分離できる句動詞とできない句動詞、代名詞の位置、目的語をとらない句動詞、疑問文の文末に残る前置詞" },
  body: [
    { k: "core", en: `A multiword verb combines a verb with one or more small words. The meaning can be literal (<x>sit down</x>) or idiomatic (<x>give up</x> = stop trying). A dictionary shows whether it takes an object and where the object goes.`,
      ja: `句動詞は、動詞と小さな語（副詞・前置詞）の組み合わせです。意味がそのままのこと（<x>sit down</x>）もあれば、慣用的なこと（<x>give up</x>＝あきらめる）もあります。目的語をとるか、どこに置くかは辞書で確認しましょう。` },
    { k: "h", en: "Separable versus inseparable", ja: "分離できるものとできないもの" },
    { k: "p", en: `<i>Turn off</i> (a device) is separable: <x>Turn off the phone.</x> / <x>Turn the phone off.</x> With a pronoun object, the pronoun must go in the middle: <x>Turn it off</x>, not <s>turn off it</s>. <i>Look after</i> (take care of) is inseparable: <x>Look after the customer.</x> <x>Look after her</x> — not <s>look her after</s>.`,
      ja: `<i>turn off</i>（電源を切る）は分離できます：<x>Turn off the phone.</x>／<x>Turn the phone off.</x> 目的語が代名詞なら、必ず間に入れます：<s>turn off it</s> ではなく <x>Turn it off.</x> <i>look after</i>（世話をする）は分離できません：<x>Look after the customer.</x>／<x>Look after her.</x>（<s>look her after</s> は不可）` },
    { k: "sv", t: { en: "Where does the object go?", ja: "目的語はどこに置く？" }, rows: [
      { l: { en: "Separable: two orders with a noun", ja: "分離できる：名詞なら2通り" }, p: [["V", `Turn`], ["O", `the phone`], ["X", `off.`, { en: "particle", ja: "副詞" }]] },
      { p: [["V", `Turn`], ["X", `off`, { en: "particle", ja: "副詞" }], ["O", `the phone.`]] },
      { l: { en: "A pronoun goes in the middle", ja: "代名詞は真ん中" }, p: [["V", `Turn`], ["O", `it`, { en: "pronoun", ja: "代名詞" }], ["X", `off.`, { en: "particle", ja: "副詞" }]] },
      { bad: true, p: [["V", `Turn`], ["X", `off`], ["O", `it.`]] },
      { l: { en: "Inseparable: the object always follows", ja: "分離できない：目的語は必ず後ろ" }, p: [["V", `Look after`], ["O", `her.`]] }
    ] },
    { k: "table", head: ["@pattern", { en: "Meaning", ja: "意味" }, { en: "Object behavior", ja: "目的語の位置" }], rows: [
      [`turn on / off`, { en: "start / stop the power", ja: "電源を入れる／切る" }, `<x>Turn it on / off.</x>`],
      [`fill in / out`, { en: "complete a form", ja: "書類に記入する" }, `<x>Fill it in / out.</x>`],
      [`write down`, { en: "record in writing", ja: "書き留める" }, `<x>Write it down.</x>`],
      [`find out`, { en: "discover", ja: "調べてわかる" }, `<x>Find out the reason.</x> / <x>find the reason out</x>`],
      [`give up`, { en: "stop an activity or attempt", ja: "やめる・あきらめる" }, `<x>Give it up.</x> <x>give up smoking</x>`],
      [`look for`, { en: "search for", ja: "探す" }, `<x>Look for it.</x>`],
      [`deal with`, { en: "handle", ja: "対処する" }, `<x>Deal with it.</x>`],
      [`run out of`, { en: "use up a supply", ja: "使い果たす" }, `<x>We've run out of paper.</x>`]
    ] },
    { k: "h", en: "Intransitive patterns", ja: "目的語をとらない句動詞" },
    { k: "p", en: `<x>The car broke down.</x> <x>Please sit down.</x> <x>Carry on.</x> These take no object. The same verb can also have a transitive meaning: <x>He broke the costs down.</x> = he divided and explained them.`,
      ja: `<x>The car broke down.</x>（故障した）／<x>Please sit down.</x>／<x>Carry on.</x>（続けて）は目的語をとりません。同じ句動詞が、目的語をとる別の意味をもつこともあります：<x>He broke the costs down.</x>＝費用を細かく分けて説明した。` },
    { k: "h", en: "Long objects, questions, relatives", ja: "長い目的語・疑問文・関係詞節" },
    { k: "p", en: `With a separable verb, a long object usually goes after the particle: <x>Turn off the phone that is connected to the display.</x> Final particles are natural in questions and relative clauses: <x>What are you looking for?</x> <x>This is the issue we need to deal with.</x>`,
      ja: `分離できる句動詞でも、長い目的語は通常後ろに置きます：<x>Turn off the phone that is connected to the display.</x> 疑問文や関係詞節では、前置詞・副詞が文末に残るのが自然です：<x>What are you looking for?</x>／<x>This is the issue we need to deal with.</x>` },
    { k: "watch", en: `The same verb changes meaning with the particle: <x>look up</x> information, <x>look for</x> a key, <x>look after</x> a child, <x>look into</x> a complaint, <x>look forward to</x> a visit. Learn each one as vocabulary, together with its grammar.`,
      ja: `同じ動詞でも、後ろの語で意味が変わります：<x>look up</x>（調べる）、<x>look for</x>（探す）、<x>look after</x>（世話をする）、<x>look into</x>（調査する）、<x>look forward to</x>（楽しみにする）。それぞれ文法とセットで語彙として覚えましょう。` },
    { k: "tip", en: `Learners often put the pronoun last: <s>Turn off it.</s> For separable verbs, remember: <b>pronoun in the middle</b> — <x>Turn it off.</x> <x>Pick it up.</x> <x>Fill it in.</x>`,
      ja: `代名詞を最後に置いて <s>Turn off it.</s> としてしまう誤りがよく見られます。分離できる句動詞では<b>代名詞は真ん中</b>がルールです：<x>Turn it off.</x>／<x>Pick it up.</x>／<x>Fill it in.</x>` }
  ],
  q: [
    { q: `Please turn ___ before the movie starts.`, h: { en: `"It" is your phone.`, ja: `it は携帯電話のこと。` }, o: [`off it`, `it off`], a: 1,
      e: { en: `A pronoun goes between the verb and the particle.`, ja: `代名詞は動詞と副詞の間に置きます。` } },
    { q: `Could you look ___ my cat this weekend?`, o: [`after`, `for`, `up`], a: 0,
      e: { en: `<i>Look after</i> = take care of.`, ja: `look after＝世話をする、です。` } },
    { q: `I'm looking ___ my glasses. Have you seen them?`, o: [`after`, `for`, `into`], a: 1,
      e: { en: `<i>Look for</i> = search for.`, ja: `look for＝探す、です。` } },
    { q: `If you don't know the word, look it ___ in a dictionary.`, o: [`up`, `for`, `after`], a: 0,
      e: { en: `<i>Look up</i> = find information.`, ja: `look up＝調べる、です。` } },
    { q: `We've run ___ milk. Can you buy some?`, o: [`out`, `out of`, `off`], a: 1,
      e: { en: `<i>Run out of</i> + noun.`, ja: `run out of＋名詞です。` } },
    { q: `Please fill ___ this form.`, o: [`in`, `up`, `on`], a: 0,
      e: { en: `<i>Fill in / out</i> = complete a form.`, ja: `fill in / out＝記入する、です。` } },
    { q: `Our car broke ___ on the highway.`, o: [`up`, `down`, `off`], a: 1,
      e: { en: `<i>Break down</i> = stop working (no object).`, ja: `break down＝故障する（目的語なし）です。` } },
    { q: `Don't give ___! You're almost there.`, o: [`up`, `in it`, `out`], a: 0,
      e: { en: `<i>Give up</i> = stop trying.`, ja: `give up＝あきらめる、です。` } },
    { q: `The manager will deal ___ the complaint.`, o: [`with`, `about`, `for`], a: 0,
      e: { en: `<i>Deal with</i> = handle.`, ja: `deal with＝対処する、です。` } },
    { q: { en: `Which is correct?`, ja: `正しいのはどれ？` }, o: [`Look her after.`, `Look after her.`], a: 1,
      e: { en: `<i>Look after</i> is inseparable.`, ja: `look after は分離できません。` } }
  ]
});
