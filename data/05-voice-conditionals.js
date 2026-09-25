/* 05 Voice & conditionals (handbook pp. 56–61) */

GH.topic({
  id: "passive", ch: "voice", p: 56,
  t: { en: "Active and passive voice", ja: "能動態と受動態" },
  d: { en: "Building the passive with be + V3 in every tense, why we choose it, and verbs that can't be passive.", ja: "すべての時制で be＋過去分詞の受動態を作る、受動態を選ぶ理由、受動態にできない動詞" },
  body: [
    { k: "core", en: `<b>Active</b> makes the doer the subject: <x>Mei repaired the phone.</x> <b>Passive</b> makes the affected thing the subject: <x>The phone was repaired by Mei.</x> The passive changes how information is organized, not the time.`,
      ja: `<b>能動態</b>は動作をする人を主語にし（<x>Mei repaired the phone.</x>）、<b>受動態</b>は動作を受けるものを主語にします（<x>The phone was repaired by Mei.</x>）。受動態は情報の並べ方を変えるもので、時を変えるものではありません。` },
    { k: "h", en: "Build the passive: be + V3", ja: "be＋過去分詞で受動態を作る" },
    { k: "p", en: `Start with a transitive active sentence. Move its object to the subject position. Put <i>be</i> in the tense you need, and use V3 for the main verb. Add <i>by</i> + agent only when it's useful.`,
      ja: `他動詞の能動態の文から始め、目的語を主語の位置に移します。be を必要な時制にし、本動詞を過去分詞にします。by＋動作主は必要なときだけ加えます。` },
    { k: "sv", t: { en: "Active → passive in three moves", ja: "能動態 → 受動態の3ステップ" }, rows: [
      { l: { en: "Active", ja: "能動態" }, p: [["S", `Mei`, { en: "the doer", ja: "動作主" }], ["V", `repaired`], ["O", `the phone.`, { en: "the thing affected", ja: "動作を受けるもの" }]] },
      { arrow: { en: "1 the object becomes the subject · 2 the verb becomes be + V3 · 3 the doer moves to by… (or disappears)", ja: "① 目的語が主語に ② 動詞は be＋V3 に ③ 動作主は by… へ（省略も可）" } },
      { l: { en: "Passive", ja: "受動態" }, p: [["S", `The phone`], ["V", `was repaired`, { en: "be + V3", ja: "be＋V3" }], ["M", `by Mei.`, { en: "optional", ja: "省略可" }]] }
    ] },
    { k: "table", head: [{ en: "Tense", ja: "時制" }, { en: "Active", ja: "能動態" }, { en: "Passive", ja: "受動態" }], rows: [
      [{ en: "Present simple", ja: "現在形" }, `<x>They check it.</x>`, `<x>It is checked.</x>`],
      [{ en: "Past simple", ja: "過去形" }, `<x>They checked it.</x>`, `<x>It was checked.</x>`],
      [{ en: "Present continuous", ja: "現在進行形" }, `<x>They are checking it.</x>`, `<x>It is being checked.</x>`],
      [{ en: "Past continuous", ja: "過去進行形" }, `<x>They were checking it.</x>`, `<x>It was being checked.</x>`],
      [{ en: "Present perfect", ja: "現在完了" }, `<x>They have checked it.</x>`, `<x>It has been checked.</x>`],
      [{ en: "Past perfect", ja: "過去完了" }, `<x>They had checked it.</x>`, `<x>It had been checked.</x>`],
      [{ en: "Future / modal", ja: "未来・助動詞" }, `<x>They will/must check it.</x>`, `<x>It will/must be checked.</x>`],
      [{ en: "Future perfect", ja: "未来完了" }, `<x>They will have checked it.</x>`, `<x>It will have been checked.</x>`]
    ] },
    { k: "p", en: `Negatives and questions use the first helper: <x>It hasn't been checked.</x> <x>Has it been checked?</x> <x>Will it be checked?</x> The main verb stays V3 in every passive.`,
      ja: `否定文・疑問文は最初の助動詞を使います：<x>It hasn't been checked.</x>／<x>Has it been checked?</x>／<x>Will it be checked?</x> 本動詞はどの受動態でも過去分詞のままです。` },
    { k: "h", en: "Why choose the passive?", ja: "なぜ受動態を選ぶのか" },
    { k: "ex", items: [
      [`My bike <b>was stolen</b>.`, { en: `the doer is unknown`, ja: `動作主がわからない` }],
      [`Your payment <b>has been received</b>.`, { en: `the doer is obvious or unimportant`, ja: `動作主が明らか・重要でない` }],
      [`I bought a phone. It <b>was delivered</b> yesterday.`, { en: `keeps the topic (the phone) as the subject`, ja: `話題（電話）を主語に保つ` }],
      [`The samples <b>were stored</b> at low temperature.`, { en: `formal descriptions of processes`, ja: `手順の改まった説明` }]
    ] },
    { k: "p", en: `Active is often clearer when responsibility matters: <x>I entered the wrong number</x> says who acted; <x>The wrong number was entered</x> hides it. Neither voice is good or bad in itself.`,
      ja: `責任を明確にしたいときは能動態のほうがわかりやすいことがあります：<x>I entered the wrong number.</x> は誰がしたかを示し、<x>The wrong number was entered.</x> はそれを伏せています。どちらの態にも良し悪しはありません。` },
    { k: "h", en: "Limits", ja: "受動態にできない場合" },
    { k: "p", en: `Intransitive verbs have no passive: <x>The accident happened</x>, not <s>was happened</s>; <x>She arrived</x>, not <s>was arrived</s>. Some state verbs resist it too: <x>This bag has two pockets</x> — not <s>Two pockets are had by this bag</s>.`,
      ja: `自動詞は受動態になりません：<s>was happened</s> ではなく <x>The accident happened.</x>、<s>was arrived</s> ではなく <x>She arrived.</x> 状態を表す動詞にも受動態にしにくいものがあります：<x>This bag has two pockets.</x>（<s>Two pockets are had by this bag</s> は不可）。` },
    { k: "watch", en: `<x>The door is closed</x> can describe a state (<i>closed</i> as an adjective) or an event. <x>The door is being closed</x> clearly shows an action in progress.`,
      ja: `<x>The door is closed.</x> は状態（閉まっている）も出来事（閉められる）も表せます。<x>The door is being closed.</x> なら、閉められている最中の動作であることがはっきりします。` },
    { k: "tip", en: `〜れる／〜られる isn't always an English passive. 雨に降られた is <x>I got caught in the rain</x>, and 事故が起きた is <x>An accident happened</x> — never passive.`,
      ja: `日本語の「〜れる／〜られる」がいつも英語の受動態になるとは限りません。「雨に降られた」は <x>I got caught in the rain.</x>、「事故が起きた」は <x>An accident happened.</x>（受動態にしない）です。` }
  ],
  q: [
    { q: `The phone ___ repaired.`, h: { en: `Passive of "They have repaired the phone."`, ja: `They have repaired the phone. を受動態に` }, i: [`has been`],
      e: { en: `Present perfect passive: <i>has been</i> + V3.`, ja: `現在完了の受動態：has been＋過去分詞です。` } },
    { q: `The report ___ right now.`, h: { en: `Someone is checking it at this moment.`, ja: `今まさに確認されている。` }, o: [`is checked`, `is being checked`, `has checked`], a: 1,
      e: { en: `Present continuous passive: <i>is being</i> + V3.`, ja: `現在進行形の受動態：is being＋過去分詞です。` } },
    { q: `My bike ___ last night.`, o: [`stole`, `was stolen`, `was stealing`], a: 1,
      e: { en: `Past passive: <i>was</i> + V3.`, ja: `過去の受動態：was＋過去分詞です。` } },
    { q: `The accident ___ at 9 p.m.`, o: [`was happened`, `happened`, `was happening by`], a: 1,
      e: { en: `<i>Happen</i> is intransitive, so it has no passive.`, ja: `happen は自動詞なので受動態になりません。` } },
    { q: `The results will ___ next week.`, o: [`announce`, `be announced`, `been announced`], a: 1,
      e: { en: `Future passive: <i>will be</i> + V3.`, ja: `未来の受動態：will be＋過去分詞です。` } },
    { q: `___ the package been delivered yet?`, o: [`Has`, `Is`, `Did`], a: 0,
      e: { en: `Question with the first helper: <i>Has it been…?</i>`, ja: `最初の助動詞で疑問文を作ります：Has it been…?` } },
    { q: `English ___ in many countries.`, o: [`speaks`, `is spoken`, `is speaking`], a: 1,
      e: { en: `Present simple passive.`, ja: `現在形の受動態です。` } },
    { q: { en: `Why is the passive used in <x>Your payment has been received</x>?`, ja: `<x>Your payment has been received</x> で受動態を使う理由は？` },
      o: [{ en: "The receiver is obvious or unimportant.", ja: "受け取った人が明らか・重要でないから。" }, { en: "The sentence is about the future.", ja: "未来のことだから。" }], a: 0,
      e: { en: `The focus is the payment, not who received it.`, ja: `焦点は支払いで、誰が受け取ったかではありません。` } },
    { q: `When I arrived, the room ___.`, h: { en: `The cleaning was in progress.`, ja: `掃除の最中だった。` }, o: [`was cleaned`, `was being cleaned`, `had been cleaning`], a: 1,
      e: { en: `Past continuous passive: <i>was being</i> + V3.`, ja: `過去進行形の受動態：was being＋過去分詞です。` } },
    { q: `She ___ at the station at noon.`, o: [`was arrived`, `arrived`], a: 1,
      e: { en: `<i>Arrive</i> is intransitive.`, ja: `arrive は自動詞です。` } }
  ]
});

GH.topic({
  id: "passive-causative", ch: "voice", p: 57,
  t: { en: "Passive patterns and causatives", ja: "受動態の応用と使役" },
  d: { en: "Two-object passives, get-passives, reporting passives, have/get something done, and make/let/have/get/help.", ja: "目的語が2つある文の受動態、get の受動態、It is said that…、have/get＋目的語＋過去分詞、make・let・have・get・help" },
  body: [
    { k: "h", en: "Two-object passives", ja: "目的語が2つある文の受動態" },
    { k: "p", en: `<x>They gave me a receipt</x> → <x>I was given a receipt</x> or <x>A receipt was given to me</x>. Not every verb allows both: <x>They explained the rule to me</x> → <x>The rule was explained to me</x> (not <s>I was explained the rule</s>).`,
      ja: `<x>They gave me a receipt.</x> → <x>I was given a receipt.</x> または <x>A receipt was given to me.</x> ただし、すべての動詞で両方ができるわけではありません：<x>They explained the rule to me.</x> → <x>The rule was explained to me.</x>（<s>I was explained the rule</s> は不可）。` },
    { k: "p", en: `Some verb + preposition combinations allow the passive: <x>Someone has slept in this bed</x> → <x>This bed has been slept in.</x>`,
      ja: `前置詞を伴う動詞の中には受動態にできるものもあります：<x>Someone has slept in this bed.</x> → <x>This bed has been slept in.</x>` },
    { k: "h", en: "Get-passives", ja: "get の受動態" },
    { k: "p", en: `<x>He got promoted.</x> <x>My phone got damaged.</x> <i>Get</i> + V3 stresses an event or change and is common in informal English. For stable states, <i>be</i> is more neutral: <x>She is respected.</x>`,
      ja: `<x>He got promoted.</x>／<x>My phone got damaged.</x> get＋過去分詞は出来事や変化を強調し、くだけた英語でよく使います。安定した状態には be のほうが中立的です：<x>She is respected.</x>` },
    { k: "h", en: "Reporting passives", ja: "伝聞の受動態" },
    { k: "ex", items: [
      [`It <b>is said that</b> he is honest.`, { en: `= People say that he is honest.`, ja: `＝People say that he is honest.` }],
      [`He <b>is said to be</b> honest.`, { en: `subject + passive reporting verb + to V1`, ja: `主語＋受動の伝達動詞＋to 不定詞` }],
      [`She <b>is believed to have left</b>.`, { en: `perfect infinitive: the leaving was earlier`, ja: `完了不定詞：出発はそれ以前` }],
      [`She <b>is thought to be working</b> abroad.`, { en: `continuous infinitive: ongoing now`, ja: `進行形の不定詞：今も続いている` }]
    ] },
    { k: "p", en: `These are common in news reports, but they hide the source. In practical writing, naming the source may be more useful: <x>The manager says…</x>`,
      ja: `ニュースなどでよく使われますが、情報源が伏せられます。実用的な文章では、情報源を示すほうがよい場合もあります：<x>The manager says…</x>` },
    { k: "h", en: "Have or get something done", ja: "have/get＋目的語＋過去分詞" },
    { k: "p", en: `<x>I had my phone repaired</x> = I arranged for someone to repair it. <x>I got my phone repaired</x> is similar and more informal. The pattern is <code>have/get + object + V3</code>, and the first verb carries the tense: <x>I have it serviced every year.</x> <x>I'm having it repaired.</x> <x>I'll get it checked.</x>`,
      ja: `<x>I had my phone repaired.</x>＝電話を（誰かに頼んで）修理してもらった。<x>I got my phone repaired.</x> も同様で、よりくだけた言い方です。形は <code>have/get＋目的語＋過去分詞</code> で、時制は最初の動詞で表します：<x>I have it serviced every year.</x>／<x>I'm having it repaired.</x>／<x>I'll get it checked.</x>` },
    { k: "p", en: `The same pattern can describe something unwanted: <x>I had my wallet stolen</x> = someone stole it from me.`,
      ja: `同じ形で、望まない出来事も表せます：<x>I had my wallet stolen.</x>＝財布を盗まれた。` },
    { k: "cmp", t: { en: "Who did the work?", ja: "実際にしたのは誰？" }, cols: [
      { h: { en: "You did it yourself", ja: "自分でした" }, s: `S + V + object`, ex: [`I repaired my phone.`, `I cut my hair.`] },
      { h: { en: "Someone did it for you", ja: "してもらった" }, s: `have / get + object + V3`, ex: [`I had my phone repaired.`, `I had my hair cut.`, `I got the car washed.`] }
    ] },
    { k: "h", en: "Make, let, have, get, help", ja: "使役動詞：make・let・have・get・help" },
    { k: "table", head: ["@pattern", { en: "Meaning", ja: "意味" }, "@example"], rows: [
      [{ f: "make + person + V1" }, { en: "cause / force", ja: "（強制的に）〜させる" }, `<x>The error made me restart.</x>`],
      [{ f: "let + person + V1" }, { en: "allow", ja: "〜させてあげる（許可）" }, `<x>She let me leave early.</x>`],
      [{ f: "have + person + V1" }, { en: "arrange / instruct", ja: "（頼んで）〜してもらう" }, `<x>I had a technician check it.</x>`],
      [{ f: "get + person + to V1" }, { en: "persuade / arrange", ja: "（説得して）〜してもらう" }, `<x>I got a technician to check it.</x>`],
      [{ f: "help + person + (to) V1" }, { en: "assist", ja: "〜するのを手伝う" }, `<x>She helped me (to) finish.</x>`]
    ] },
    { k: "watch", en: `<x>They made me wait</x> becomes <x>I was made to wait</x> — <i>to</i> returns in the passive. For passive permission, say <x>I was allowed to leave</x>, not <s>I was let to leave</s>. <x>I repaired my phone</x> = I did it myself; <x>I had it repaired</x> = someone else did.`,
      ja: `<x>They made me wait.</x> を受動態にすると <x>I was made to wait.</x> となり、to が戻ります。許可の受動態は <s>I was let to leave</s> ではなく <x>I was allowed to leave.</x> です。<x>I repaired my phone.</x>＝自分で修理した、<x>I had it repaired.</x>＝修理してもらった。` },
    { k: "tip", en: `〜してもらう is often <i>have/get</i> something done: 髪を切ってもらった = <x>I had my hair cut.</x> <s>I cut my hair.</s> would mean you cut it yourself!`,
      ja: `「〜してもらう」は have/get＋目的語＋過去分詞で表すことが多いです。「髪を切ってもらった」は <x>I had my hair cut.</x>。<s>I cut my hair.</s> だと「自分で切った」ことになります。` }
  ],
  q: [
    { q: `I ___ my hair cut yesterday.`, h: { en: `A hairdresser did it.`, ja: `美容師に切ってもらった。` }, o: [`had`, `made`, `let`], a: 0,
      e: { en: `<i>Have</i> + object + V3 = an arranged service.`, ja: `have＋目的語＋過去分詞で「〜してもらう」です。` } },
    { q: `I had my phone ___.`, o: [`repair`, `repaired`, `repairing`], a: 1,
      e: { en: `<i>Have</i> + object + V3.`, ja: `have＋目的語＋過去分詞です。` } },
    { q: `She ___ me leave early.`, h: { en: `She allowed it.`, ja: `許してくれた。` }, o: [`made`, `let`, `got`], a: 1,
      e: { en: `<i>Let</i> + person + V1 = allow.`, ja: `let＋人＋原形＝〜させてあげる、です。` } },
    { q: `The error made me ___ the computer.`, o: [`restart`, `to restart`, `restarted`], a: 0,
      e: { en: `<i>Make</i> + person + V1.`, ja: `make＋人＋原形です。` } },
    { q: `I got a technician ___ it.`, o: [`check`, `to check`, `checked`], a: 1,
      e: { en: `<i>Get</i> + person + <i>to</i> V1.`, ja: `get＋人＋to 不定詞です。` } },
    { q: `I was made ___ for an hour.`, o: [`wait`, `to wait`, `waiting`], a: 1,
      e: { en: `In the passive, <i>to</i> returns: <i>was made to wait</i>.`, ja: `受動態では to が戻ります（was made to wait）。` } },
    { q: `We ___ to leave early.`, h: { en: `We had permission.`, ja: `許可された。` }, o: [`were let`, `were allowed`], a: 1,
      e: { en: `Passive permission → <i>be allowed to</i>.`, ja: `許可の受動態は be allowed to です。` } },
    { q: `He is said ___ very honest.`, o: [`be`, `to be`, `being`], a: 1,
      e: { en: `Subject + <i>is said to</i> + V1.`, ja: `主語＋is said to＋原形です。` } },
    { q: `The rule ___ to me by the manager.`, o: [`was explained`, `I was explained`, `explained`], a: 0,
      e: { en: `With <i>explain</i>, the thing explained becomes the subject — not <i>I was explained</i>.`, ja: `explain は「説明された内容」を主語にします（I was explained は不可）。` } },
    { q: `I ___ my wallet stolen on the train.`, o: [`had`, `made`, `let`], a: 0,
      e: { en: `<i>Have</i> + object + V3 can describe an unwanted event.`, ja: `have＋目的語＋過去分詞は、望まない出来事も表せます。` } }
  ]
});

GH.topic({
  id: "conditionals-real", ch: "voice", p: 58,
  t: { en: "Conditionals: facts and real possibilities", ja: "条件文：事実と現実的な可能性" },
  d: { en: "Zero and first conditionals, clause order, unless, as long as, provided that, even if, and in case.", ja: "ゼロ条件文と第1条件文、節の順序、unless・as long as・provided that・even if・in case" },
  body: [
    { k: "core", en: `A conditional connects a condition with a result. Choose the forms from the time and from how real the speaker thinks the situation is. The zero/first/second/third labels are common patterns, not a complete list.`,
      ja: `条件文は条件と結果を結びつけます。時と、話し手がその状況をどれくらい現実的だと考えているかで形を選びます。ゼロ・第1・第2・第3条件文という呼び方はよくある型の名前で、すべてを網羅するものではありません。` },
    { k: "scale", t: { en: "How real is the situation? The four common patterns", ja: "どれくらい現実的？よくある4つの型" }, lo: { en: "imagined", ja: "想像上" }, hi: { en: "always true", ja: "いつも本当" }, items: [
      [`If you heat ice, it melts.`, 100, { en: "zero: always true · if + present, present", ja: "ゼロ条件文：いつも本当・if＋現在形, 現在形" }],
      [`If it rains tomorrow, I'll stay home.`, 66, { en: "first: a real possibility · if + present, will", ja: "第1条件文：現実的な可能性・if＋現在形, will" }],
      [`If I won the prize, I'd travel.`, 28, { en: "second: imagined or unlikely · if + past, would", ja: "仮定法過去：想像・可能性が低い・if＋過去形, would" }],
      [`If I had studied, I would have passed.`, 4, { en: "third: a past that can't change · if + had V3, would have V3", ja: "仮定法過去完了：変えられない過去・if＋had V3, would have V3" }]
    ], n: { en: `This lesson covers the top two; the next lesson covers the imagined ones.`, ja: `このレッスンでは上の2つを、次のレッスンで想像上の2つを学びます。` } },
    { k: "h", en: "Zero conditional: general relationships", ja: "ゼロ条件文：一般的な関係" },
    { k: "p", en: `<code>If + present, present</code>: <x>If you heat ice enough, it melts.</x> <x>If I work late, I take a taxi.</x> <i>When</i> can replace <i>if</i> for expected events: <x>When I work late, I take a taxi.</x> Past habits use past forms: <x>If we missed the bus, we walked.</x>`,
      ja: `<code>If＋現在形, 現在形</code>：<x>If you heat ice enough, it melts.</x>／<x>If I work late, I take a taxi.</x> 当然起こることなら if の代わりに when も使えます（<x>When I work late, I take a taxi.</x>）。過去の習慣は過去形で：<x>If we missed the bus, we walked.</x>` },
    { k: "h", en: "First conditional: a real future possibility", ja: "第1条件文：現実的な未来の可能性" },
    { k: "p", en: `<code>If + present, will + V1</code>: <x>If it rains tomorrow, I'll stay home.</x> Rain is a real, open possibility. The result can use other modals or an imperative: <x>If you finish early, you can leave.</x> <x>If you feel worse, you should rest.</x> <x>If you see Mei, tell her.</x>`,
      ja: `<code>If＋現在形, will＋原形</code>：<x>If it rains tomorrow, I'll stay home.</x> 雨は現実にありうる可能性です。結果の部分には他の助動詞や命令文も使えます：<x>If you finish early, you can leave.</x>／<x>If you feel worse, you should rest.</x>／<x>If you see Mei, tell her.</x>` },
    { k: "p", en: `The condition can be continuous or perfect when the meaning needs it: <x>If you're working tomorrow, I'll call later.</x> <x>If you've finished, we can go.</x>`,
      ja: `意味に応じて、条件の部分を進行形や完了形にもできます：<x>If you're working tomorrow, I'll call later.</x>／<x>If you've finished, we can go.</x>` },
    { k: "h", en: "Clause order", ja: "節の順序" },
    { k: "p", en: `<x>If it rains, I'll stay home.</x> (comma after a fronted if-clause) / <x>I'll stay home if it rains.</x> (usually no comma). The order changes emphasis more than meaning.`,
      ja: `<x>If it rains, I'll stay home.</x>（if節が前ならカンマ）／<x>I'll stay home if it rains.</x>（後ろなら通常カンマなし）。順序で変わるのは意味よりも強調です。` },
    { k: "h", en: "Unless, as long as, provided that, even if, in case", ja: "unless・as long as・provided that・even if・in case" },
    { k: "ex", items: [
      [`I'll go <b>unless</b> it rains.`, { en: `= if it doesn't rain`, ja: `＝雨が降らなければ` }],
      [`You can borrow it <b>as long as</b> you return it tomorrow.`, { en: `a requirement`, ja: `条件（〜さえすれば）` }],
      [`<b>Provided that</b> you register, you can attend.`, { en: `a more formal condition`, ja: `より改まった条件` }],
      [`<b>Even if</b> it rains, I'll go.`, { en: `rain won't change the decision`, ja: `たとえ雨でも行く` }],
      [`Take a copy <b>in case</b> the original is lost.`, { en: `a precaution: do it now`, ja: `備え：今のうちにしておく` }]
    ] },
    { k: "watch", en: `For ordinary future conditions, use <x>If it rains</x>, not <s>If it will rain</s>. But willingness can allow <i>will</i>: <x>If you will wait here, I'll check.</x> And <x>I don't know if it will rain</x> uses <i>if</i> = whether.`,
      ja: `普通の未来の条件は <s>If it will rain</s> ではなく <x>If it rains</x>。ただし意志を表す will は可能です：<x>If you will wait here, I'll check.</x> また <x>I don't know if it will rain.</x> の if は「〜かどうか」です。` },
    { k: "tip", en: `〜たら・〜ば・〜なら usually become <i>if</i>, but check the meaning: 〜ない限り → <i>unless</i>; 〜するといけないから → <i>in case</i>; たとえ〜ても → <i>even if</i>.`,
      ja: `「〜たら・〜ば・〜なら」はたいてい if ですが、意味を確認しましょう。「〜ない限り」→ unless、「〜するといけないから」→ in case、「たとえ〜ても」→ even if。` }
  ],
  q: [
    { q: `If you heat ice, it ___.`, o: [`melts`, `will melted`, `melted`], a: 0,
      e: { en: `A general truth → zero conditional (present, present).`, ja: `一般的な真理なのでゼロ条件文（現在形, 現在形）です。` } },
    { q: `If it ___ tomorrow, we'll stay home.`, o: [`will rain`, `rains`, `rained`], a: 1,
      e: { en: `First conditional: <i>if</i> + present.`, ja: `第1条件文：if＋現在形です。` } },
    { q: `If it rains, we ___ (stay) home.`, i: [`will stay`, `'ll stay`],
      e: { en: `First conditional result: <i>will</i> + V1.`, ja: `第1条件文の結果：will＋原形です。` } },
    { q: `I'll go to the beach ___ it rains.`, h: { en: `You'll go if it doesn't rain.`, ja: `雨が降らなければ行く。` }, o: [`unless`, `if`, `in case`], a: 0,
      e: { en: `<i>Unless</i> = if … not.`, ja: `unless＝if … not です。` } },
    { q: `You can borrow my car ___ you return it by six.`, o: [`as long as`, `unless`, `even if`], a: 0,
      e: { en: `A requirement → <i>as long as</i>.`, ja: `条件（〜さえすれば）なので as long as です。` } },
    { q: `Take an umbrella ___ it rains.`, o: [`in case`, `unless`, `as long as`], a: 0,
      e: { en: `A precaution → <i>in case</i>.`, ja: `備えなので in case です。` } },
    { q: `___ it rains, the match will go ahead.`, h: { en: `Rain won't change anything.`, ja: `雨でも変わらない。` }, o: [`Even if`, `Unless`, `In case`], a: 0,
      e: { en: `<i>Even if</i> = the result won't change.`, ja: `even if＝たとえ〜でも、です。` } },
    { q: `If you see Mei, ___ her to call me.`, o: [`tell`, `will tell`, `told`], a: 0,
      e: { en: `The result can be an imperative.`, ja: `結果の部分は命令文でもかまいません。` } },
    { q: { en: `Which sentence has the comma in the right place?`, ja: `カンマの位置が正しい文は？` }, o: [`If it rains, I'll stay home.`, `I'll stay home, if, it rains.`, `If it rains I'll, stay home.`], a: 0,
      e: { en: `A comma follows a fronted if-clause.`, ja: `前に置いた if節の後にカンマを付けます。` } },
    { q: `If you ___ finished, we can go.`, o: [`have`, `will have`, `had had`], a: 0,
      e: { en: `The condition can use the present perfect when needed.`, ja: `必要なら条件の部分に現在完了も使えます。` } }
  ]
});

GH.topic({
  id: "conditionals-unreal", ch: "voice", p: 59,
  t: { en: "Second and third conditionals", ja: "仮定法過去・仮定法過去完了" },
  d: { en: "Imagined present and future (second), imagined past (third), were, could/might, and common mistakes.", ja: "現在・未来についての仮定（仮定法過去）、過去についての仮定（仮定法過去完了）、were、could/might、よくある誤り" },
  body: [
    { k: "h", en: "Second conditional: an imagined present or future", ja: "仮定法過去：現在・未来の仮定" },
    { k: "p", en: `<code>If + past, would/could/might + V1</code>: <x>If I had more time, I would study more.</x> (an imagined present) <x>If I won the prize, I would travel.</x> (a remote future possibility). The past form shows <b>distance from reality</b>, not past time.`,
      ja: `<code>If＋過去形, would/could/might＋原形</code>：<x>If I had more time, I would study more.</x>（現在の事実に反する仮定）／<x>If I won the prize, I would travel.</x>（可能性の低い未来）。過去形は時ではなく<b>現実からの距離</b>を表します。` },
    { k: "p", en: `Compare <x>If I get the job, I'll move</x> (a real possibility) with <x>If I got the job, I'd move</x> (more hypothetical). <x>If I were you, I'd ask</x> is the standard advice phrase. <i>Were</i> with I/he/she/it is safe for formal work and tests; <i>was</i> is common informally.`,
      ja: `<x>If I get the job, I'll move.</x>（現実的な可能性）と <x>If I got the job, I'd move.</x>（より仮定的）を比べましょう。<x>If I were you, I'd ask.</x> は助言の決まり文句です。I/he/she/it にも were を使うのが、改まった場面や試験では安全です。会話では was もよく使われます。` },
    { k: "h", en: "Third conditional: an imagined past", ja: "仮定法過去完了：過去の仮定" },
    { k: "p", en: `<code>If + had + V3, would/could/might have + V3</code>: <x>If I had studied, I would have passed.</x> It usually implies I didn't study and didn't pass. <i>Could have</i> stresses ability or opportunity: <x>If I had known, I could have helped.</x> <i>Might have</i> is less certain: <x>If I'd left earlier, I might have caught the train.</x>`,
      ja: `<code>If＋had＋過去分詞, would/could/might have＋過去分詞</code>：<x>If I had studied, I would have passed.</x> 通常、実際には勉強せず合格しなかったことを表します。could have は能力・機会（<x>If I had known, I could have helped.</x>）、might have は不確かさ（<x>If I'd left earlier, I might have caught the train.</x>）を表します。` },
    { k: "h", en: "Negatives and questions", ja: "否定文と疑問文" },
    { k: "ex", items: [
      [`If I <b>weren't</b> busy, I <b>would join</b> you.`, { en: `second conditional, negative`, ja: `仮定法過去の否定` }],
      [`If I <b>hadn't forgotten</b>, I <b>would have called</b>.`, { en: `third conditional, negative`, ja: `仮定法過去完了の否定` }],
      [`What <b>would</b> you <b>do</b> if you <b>lost</b> your phone?`, { en: `only the main clause inverts`, ja: `倒置するのは主節だけ` }],
      [`<b>Would</b> you <b>have gone</b> if she <b>had invited</b> you?`, { en: `third conditional question`, ja: `仮定法過去完了の疑問文` }]
    ] },
    { k: "flow", t: { en: "Which conditional?", ja: "どの条件文？" }, start: "always", n: {
      always: { q: { en: "Is it always true — a general fact or a habit?", ja: "いつも当てはまる一般的な事実・習慣？" }, o: [
        [{ en: "Yes", ja: "はい" }, "zero"], [{ en: "No", ja: "いいえ" }, "when"]] },
      when: { q: { en: "When is the condition?", ja: "条件はいつのこと？" }, o: [
        [{ en: "Now or in the future", ja: "今・未来" }, "real"],
        [{ en: "In the past", ja: "過去" }, "past"]] },
      real: { q: { en: "Is it a real possibility, or something imagined or unlikely?", ja: "現実的な可能性？それとも想像・可能性が低いこと？" }, o: [
        [{ en: "Real — it may well happen", ja: "現実的：十分ありうる" }, "first"],
        [{ en: "Imagined, unlikely, or contrary to fact", ja: "想像・可能性が低い・事実に反する" }, "second"]] },
      past: { q: { en: "Are you imagining a different past — one that didn't happen?", ja: "実際とは違う過去を想像している？" }, o: [
        [{ en: "Yes, the past was different", ja: "はい、実際はそうではなかった" }, "res"],
        [{ en: "No — I just don't know what happened", ja: "いいえ、実際どうだったかわからないだけ" }, "realPast"]] },
      res: { q: { en: "Is the result in the past too, or is it now?", ja: "結果も過去のこと？それとも今のこと？" }, o: [
        [{ en: "The result is in the past", ja: "結果も過去" }, "third"],
        [{ en: "The result is now", ja: "結果は今" }, "mixed"]] },
      zero: { r: { en: "zero conditional: if + present, present", ja: "ゼロ条件文：if＋現在形, 現在形" }, ex: [`If you heat ice, it melts.`] },
      first: { r: { en: "first conditional: if + present, will + V1", ja: "第1条件文：if＋現在形, will＋原形" }, ex: [`If it rains tomorrow, I'll stay home.`] },
      second: { r: { en: "second conditional: if + past, would + V1", ja: "仮定法過去：if＋過去形, would＋原形" }, ex: [`If I had more time, I would study more.`, `If I were you, I'd ask.`] },
      third: { r: { en: "third conditional: if + had V3, would have V3", ja: "仮定法過去完了：if＋had V3, would have V3" }, ex: [`If I had studied, I would have passed.`] },
      mixed: { r: { en: "mixed conditional: if + had V3, would + V1", ja: "混合仮定法：if＋had V3, would＋原形" }, ex: [`If I had slept well, I wouldn't be tired now.`] },
      realPast: { r: { en: "a real past condition: if + past, past", ja: "過去の現実の条件：if＋過去形, 過去形" }, nt: { en: "Nothing is imagined here — you are reasoning about what really happened.", ja: "仮定ではなく、実際に起きたことについて推論しています。" }, ex: [`If he was there, he saw it.`] }
    } },
    { k: "watch", en: `Standard English: <x>If I had known</x>, not <s>If I would have known</s>. (<i>Would</i> can appear in an if-clause for willingness or polite requests: <x>If you would sign here…</x>) And a past verb after <i>if</i> isn't always unreal: <x>If he was there, he saw it</x> is a real inference about the past.`,
      ja: `標準英語では <s>If I would have known</s> ではなく <x>If I had known</x> です。（意志や依頼を表す would は if節に入ることがあります：<x>If you would sign here…</x>）また、if の後の過去形がいつも仮定とは限りません：<x>If he was there, he saw it.</x> は、過去の事実についての推論です。` },
    { k: "tip", en: `Japanese 〜なら／〜たら doesn't show how real a situation is, so decide first: real → <x>If I have time, I'll go.</x>; imagined → <x>If I had time, I'd go.</x>; past regret → <x>If I'd had time, I'd have gone.</x>`,
      ja: `日本語の「〜なら／〜たら」は現実度を示さないので、まず判断しましょう。現実的 → <x>If I have time, I'll go.</x>、仮定 → <x>If I had time, I'd go.</x>、過去への後悔 → <x>If I'd had time, I'd have gone.</x>` }
  ],
  q: [
    { q: `If I ___ (have) more time, I would study more.`, i: [`had`],
      e: { en: `An imagined present → past form after <i>if</i>.`, ja: `現在の事実に反する仮定なので、if の後は過去形です。` } },
    { q: `If I had more money, I ___ a new laptop.`, o: [`will buy`, `would buy`, `would bought`], a: 1,
      e: { en: `Second conditional result: <i>would</i> + V1.`, ja: `仮定法過去の結果：would＋原形です。` } },
    { q: `If I ___ you, I'd ask for help.`, o: [`am`, `was being`, `were`], a: 2,
      e: { en: `<i>If I were you</i> is the standard phrase.`, ja: `If I were you が決まった言い方です。` } },
    { q: `If I had checked the number, I ___ the error.`, o: [`would notice`, `would have noticed`, `will notice`], a: 1,
      e: { en: `An imagined past result: <i>would have</i> + V3.`, ja: `過去の仮定の結果：would have＋過去分詞です。` } },
    { q: `If I ___ (study) harder, I would have passed.`, i: [`had studied`, `'d studied`],
      e: { en: `Third conditional: <i>if</i> + <i>had</i> + V3.`, ja: `仮定法過去完了：if＋had＋過去分詞です。` } },
    { q: { en: `Which is correct in standard English?`, ja: `標準英語として正しいのは？` }, o: [`If I would have known, I would have helped.`, `If I had known, I would have helped.`], a: 1,
      e: { en: `Use <i>had</i> + V3 in the if-clause.`, ja: `if節には had＋過去分詞を使います。` } },
    { q: `If I had known, I ___ helped.`, h: { en: `You were able to help, but you didn't know.`, ja: `手伝う力はあったのに、知らなかった。` }, o: [`could have`, `can have`, `could`], a: 0,
      e: { en: `<i>Could have</i> + V3 = past ability or opportunity.`, ja: `could have＋過去分詞＝過去の能力・機会です。` } },
    { q: `What would you do if you ___ your phone?`, o: [`lose`, `lost`, `had lost`], a: 1,
      e: { en: `An imagined future → past form.`, ja: `未来の仮定なので過去形です。` } },
    { q: { en: `Compared with <x>If I get the job, I'll move</x>, what does <x>If I got the job, I'd move</x> suggest?`, ja: `<x>If I get the job, I'll move</x> と比べて、<x>If I got the job, I'd move</x> はどんな感じ？` },
      o: [{ en: "It's more hypothetical, less likely.", ja: "より仮定的（可能性が低い感じ）" }, { en: "It's about the past.", ja: "過去の話" }], a: 0,
      e: { en: `The past form adds distance from reality.`, ja: `過去形が現実からの距離を加えています。` } },
    { q: `If I ___ busy, I would join you.`, o: [`weren't`, `wasn't being`, `am not`], a: 0,
      e: { en: `Negative second conditional: <i>If I weren't…</i>`, ja: `仮定法過去の否定：If I weren't… です。` } }
  ]
});

GH.topic({
  id: "mixed-conditionals", ch: "voice", p: 60,
  t: { en: "Mixed conditionals and alternatives", ja: "混合仮定法と if を使わない仮定" },
  d: { en: "Mixing past and present times, formal inversion (Had I known…), without / but for / otherwise, suppose, and only if vs if only.", ja: "過去と現在を混ぜた仮定、倒置（Had I known…）、without・but for・otherwise、suppose、only if と if only" },
  body: [
    { k: "core", en: `A mixed conditional links <b>different times</b>. Decide the time of the condition and the time of the result separately.`,
      ja: `混合仮定法は<b>異なる時</b>を結びつけます。条件の時と結果の時を、それぞれ決めましょう。` },
    { k: "table", head: [{ en: "Time relationship", ja: "時の関係" }, "@pattern", "@example"], rows: [
      [{ en: "past condition → present result", ja: "過去の条件 → 現在の結果" }, { f: "If + had V3, would + V1" }, `<x>If I had slept well, I wouldn't be tired now.</x>`],
      [{ en: "present / general condition → past result", ja: "現在（一般）の条件 → 過去の結果" }, { f: "If + past, would have + V3" }, `<x>If I were more careful, I wouldn't have made that mistake.</x>`]
    ] },
    { k: "tl", t: { en: "Two times in one sentence", ja: "1つの文に2つの時" }, rows: [
      { l: { en: "Past condition → present result", ja: "過去の条件 → 現在の結果" }, s: `If I had slept well last night, I wouldn't be tired now.`, m: [["x", -0.6, { en: "slept badly", ja: "よく眠れなかった" }], ["arc", -0.6, -0.02], ["bar", -0.02, 0.2, { en: "tired now", ja: "今眠い" }]],
        n: { en: "What really happened: I slept badly, so I'm tired now.", ja: "実際には、よく眠れなかったので今眠い。" } },
      { l: { en: "General condition → past result", ja: "一般的な条件 → 過去の結果" }, s: `If I were more careful, I wouldn't have made that mistake.`, m: [["bar", -0.92, 0.92, { en: "not a careful person", ja: "注意深くない性格" }], ["x", -0.64, { en: "the mistake", ja: "ミス" }]],
        n: { en: "What's really true: I'm not careful in general, so I made the mistake.", ja: "実際には、普段から注意深くないのでミスをした。" } }
    ] },
    { k: "p", en: `Time words like <i>now, yesterday, then</i> make the times clear. Other combinations happen too: <x>If you took the earlier train, you should be here by now.</x> (a real past possibility → a present expectation)`,
      ja: `now, yesterday, then などの時の語があると、時がはっきりします。他の組み合わせもあります：<x>If you took the earlier train, you should be here by now.</x>（過去の現実の可能性 → 現在の予想）` },
    { k: "h", en: "Formal inversion without if", ja: "if を使わない倒置" },
    { k: "ex", items: [
      [`<b>Had I known</b>, I would have helped.`, { en: `= If I had known`, ja: `＝If I had known` }],
      [`<b>Were I</b> in your position, I would wait.`, { en: `= If I were`, ja: `＝If I were` }],
      [`<b>Should you need</b> assistance, please call.`, { en: `= If you should need (formal, tentative)`, ja: `＝If you should need（改まった・控えめ）` }],
      [`<b>Had I not checked</b>, I would have missed it.`, { en: `negative: not after the subject`, ja: `否定は主語の後に not` }]
    ] },
    { k: "p", en: `Inversion works only with these auxiliaries — you can't say <s>Knew I the answer</s> for <i>If I knew the answer</i>. The negative is <x>Had I not checked</x>, not <s>Hadn't I checked</s>.`,
      ja: `倒置はこれらの助動詞でしかできません。If I knew the answer を <s>Knew I the answer</s> とは言えません。否定は <s>Hadn't I checked</s> ではなく <x>Had I not checked</x> です。` },
    { k: "h", en: "Alternatives to if", ja: "if 以外の仮定の表現" },
    { k: "p", en: `<x>Without your help, I would have failed.</x> (= if you hadn't helped) <x>But for the delay, we would have arrived on time.</x> (formal: without the delay) <x>Save your work; otherwise, you might lose it.</x> <x>Suppose we left now — would we arrive in time?</x> <x>What if the train is late?</x> <x>Whether or not it rains, we're going.</x>`,
      ja: `<x>Without your help, I would have failed.</x>（＝あなたが助けてくれなかったら）／<x>But for the delay, we would have arrived on time.</x>（堅い：遅れがなかったら）／<x>Save your work; otherwise, you might lose it.</x>（さもないと）／<x>Suppose we left now — would we arrive in time?</x>（仮に〜としたら）／<x>What if the train is late?</x>（もし〜だったらどうする）／<x>Whether or not it rains, we're going.</x>（降っても降らなくても）` },
    { k: "h", en: "Only if versus if only", ja: "only if と if only" },
    { k: "p", en: `<x>You can enter only if you have a ticket.</x> = a ticket is necessary. <x>If only I had a ticket!</x> = a wish. A fronted <i>only if</i> causes inversion: <x>Only if you have a ticket can you enter.</x>`,
      ja: `<x>You can enter only if you have a ticket.</x>＝チケットがある場合に限り入れる（必要条件）。<x>If only I had a ticket!</x>＝チケットがあればなあ（願望）。only if を文頭に出すと倒置が起きます：<x>Only if you have a ticket can you enter.</x>` },
    { k: "watch", en: `An unreal past condition can't change what actually happened. It expresses an alternative scenario, a regret, or an evaluation — keep it separate from the factual story.`,
      ja: `過去の仮定は、実際に起きたことを変えられません。別のシナリオ・後悔・評価を表すもので、事実の話とは区別しましょう。` },
    { k: "tip", en: `〜していたら、今ごろ…なのに is a classic mixed conditional: 早く寝ていたら、今眠くないのに → <x>If I had gone to bed early, I wouldn't be sleepy now.</x>`,
      ja: `「（あのとき）〜していたら、今ごろ…なのに」は典型的な混合仮定法です。「早く寝ていたら、今眠くないのに」→ <x>If I had gone to bed early, I wouldn't be sleepy now.</x>` }
  ],
  q: [
    { q: `If I had slept well last night, I ___ tired now.`, o: [`wouldn't have been`, `wouldn't be`, `won't be`], a: 1,
      e: { en: `Past condition → present result: <i>would</i> + V1.`, ja: `過去の条件 → 現在の結果：would＋原形です。` } },
    { q: `If I ___ more careful, I wouldn't have made that mistake.`, h: { en: `You are generally not a careful person.`, ja: `普段から注意深くない。` }, o: [`were`, `had been being`, `am`], a: 0,
      e: { en: `A general present characteristic → past form; the past result → <i>would have</i>.`, ja: `現在（一般）の性質は過去形、過去の結果は would have です。` } },
    { q: `___ I known, I would have helped.`, o: [`Had`, `If`, `Have`], a: 0,
      e: { en: `Formal inversion: <i>Had I known</i> = If I had known.`, ja: `倒置：Had I known＝If I had known です。` } },
    { q: `___ you need any help, please call us.`, o: [`Should`, `Would`, `Did`], a: 0,
      e: { en: `<i>Should you need</i> = if you (should) need.`, ja: `Should you need＝if you (should) need です。` } },
    { q: `___ I not checked, I would have missed the error.`, o: [`Had`, `Hadn't`, `Did`], a: 0,
      e: { en: `Negative inversion: <i>Had I not</i>.`, ja: `否定の倒置は Had I not です。` } },
    { q: `___ your help, I would have failed.`, o: [`Without`, `Unless`, `Otherwise`], a: 0,
      e: { en: `<i>Without</i> + noun = if … hadn't been there.`, ja: `without＋名詞＝〜がなかったら、です。` } },
    { q: `Save your work; ___, you might lose it.`, o: [`otherwise`, `unless`, `without`], a: 0,
      e: { en: `<i>Otherwise</i> = if you don't.`, ja: `otherwise＝さもないと、です。` } },
    { q: `___ I had a ticket!`, h: { en: `a wish`, ja: `願望` }, o: [`Only if`, `If only`], a: 1,
      e: { en: `<i>If only</i> expresses a wish.`, ja: `if only は願望を表します。` } },
    { q: `Only if you have a ticket ___ enter.`, o: [`you can`, `can you`], a: 1,
      e: { en: `A fronted <i>only if</i> causes inversion in the main clause.`, ja: `only if を前に出すと、主節が倒置します。` } },
    { q: `If you had booked earlier, you ___ traveling now.`, o: [`would be`, `would have been`, `will be`], a: 0,
      e: { en: `Past condition → an ongoing present result.`, ja: `過去の条件 → 現在進行中の結果です。` } }
  ]
});

GH.topic({
  id: "wish", ch: "voice", p: 61,
  t: { en: "Wish, if only, hope, and preference", ja: "wish・if only・hope・好みの表現" },
  d: { en: "Wishes about the present and the past, wish + would, hope, would rather, prefer, and it's time.", ja: "現在と過去についての願望、wish＋would、hope、would rather、prefer、It's time" },
  body: [
    { k: "cmp", t: { en: "Three ways to want something", ja: "願いを表す3つの形" }, cols: [
      { h: `wish + past`, s: { en: "now: I want it to be different", ja: "今：違えばいいのに" }, ex: [`I wish I knew the answer.`, `I wish I were taller.`] },
      { h: `wish + had V3`, s: { en: "past: a regret", ja: "過去：後悔" }, ex: [`I wish I had asked.`, `I wish I hadn't bought it.`] },
      { h: `hope`, s: { en: "a real possibility", ja: "実現しうること" }, ex: [`I hope it's sunny tomorrow.`, `I hope you enjoyed it.`] }
    ], n: { en: `The past form after <i>wish</i> shows distance from reality, not past time.`, ja: `wish の後の過去形は、時ではなく現実からの距離を表します。` } },
    { k: "h", en: "Wish for a different present", ja: "現在とは違うことを願う" },
    { k: "p", en: `<code>wish + past form</code>: <x>I wish I had more time.</x> <x>I wish I knew the answer.</x> (I don't know it.) <x>I wish I were taller.</x> (<i>was</i> is common informally) <x>I wish I could speak more confidently.</x> The past form marks distance from reality.`,
      ja: `<code>wish＋過去形</code>：<x>I wish I had more time.</x>／<x>I wish I knew the answer.</x>（実際は知らない）／<x>I wish I were taller.</x>（会話では was も）／<x>I wish I could speak more confidently.</x> 過去形は現実からの距離を表します。` },
    { k: "h", en: "Wish for a different past", ja: "過去とは違うことを願う（後悔）" },
    { k: "p", en: `<code>wish + had + V3</code>: <x>I wish I had asked more questions.</x> (I regret not asking.) <x>I wish I hadn't bought it.</x> (I regret buying it.) <x>If only I had checked!</x> is stronger and more emotional.`,
      ja: `<code>wish＋had＋過去分詞</code>：<x>I wish I had asked more questions.</x>（聞かなかったことを後悔）／<x>I wish I hadn't bought it.</x>（買ったことを後悔）。<x>If only I had checked!</x> はより強く感情的な言い方です。` },
    { k: "h", en: "Wish + would", ja: "wish＋would" },
    { k: "p", en: `<x>I wish he would listen.</x> <x>I wish it would stop raining.</x> — a desired change, often with frustration. Don't use it for an open hope: <x>I hope I pass tomorrow</x>, not <s>I wish I would pass</s>.`,
      ja: `<x>I wish he would listen.</x>／<x>I wish it would stop raining.</x>：変わってほしいという願い（いらだちを含むことが多い）です。実現しうる希望には使いません：<s>I wish I would pass</s> ではなく <x>I hope I pass tomorrow.</x>` },
    { k: "h", en: "Hope: a possible outcome", ja: "hope：実現しうること" },
    { k: "p", en: `<x>I hope it goes well.</x> / <x>I hope it will go well.</x> <x>I hope you enjoyed the event.</x> (an uncertain past). Other patterns: <x>I wish you luck.</x> Formal <x>I wish to apply</x> simply means "I want to apply".`,
      ja: `<x>I hope it goes well.</x>／<x>I hope it will go well.</x>／<x>I hope you enjoyed the event.</x>（過去の不確かなこと）。別の型：<x>I wish you luck.</x>（幸運を祈る）。改まった <x>I wish to apply.</x> は単に「申し込みたい」という意味です。` },
    { k: "h", en: "Would rather and would prefer", ja: "would rather と would prefer" },
    { k: "table", head: ["@pattern", "@example"], rows: [
      [{ en: "Same subject", ja: "主語が同じ" }, `<x>I'd rather stay.</x> <x>I'd rather not go.</x>`],
      [{ en: "Past preference", ja: "過去の好み" }, `<x>I'd rather have stayed.</x>`],
      [{ en: "Different subject", ja: "主語が違う" }, `<x>I'd rather you stayed.</x> <x>I'd rather you didn't go.</x>`],
      [{ en: "An earlier action", ja: "以前の行為" }, `<x>I'd rather you hadn't told them.</x>`],
      [`prefer A to B`, `<x>I prefer tea to coffee.</x> <x>I prefer walking to driving.</x>`],
      [`would prefer to / + object + to`, `<x>I'd prefer to wait.</x> <x>I'd prefer you to wait.</x>`]
    ] },
    { k: "watch", en: `<x>It's time to leave</x> = the moment has arrived. <x>It's time we left</x> / <x>It's high time we left</x> uses a past form for a needed action now and suggests delay — it doesn't mean we already left.`,
      ja: `<x>It's time to leave.</x>＝もう出る時間だ。<x>It's time we left.</x>／<x>It's high time we left.</x> は今必要な行動を過去形で表し、「もう遅いくらいだ」という感じを含みます。すでに出たという意味ではありません。` },
    { k: "tip", en: `〜ならいいのに (now) = <i>wish</i> + past; 〜すればよかった (past) = <i>wish</i> + <i>had</i> V3; 〜するといいな (possible) = <i>hope</i>. 明日晴れるといいな is <x>I hope it's sunny tomorrow</x> — not <i>wish</i>.`,
      ja: `「（今）〜ならいいのに」＝wish＋過去形、「（過去に）〜すればよかった」＝wish＋had＋過去分詞、「（実現しうること）〜するといいな」＝hope。「明日晴れるといいな」は <x>I hope it's sunny tomorrow.</x> で、wish は使いません。` }
  ],
  q: [
    { q: `I wish I ___ (know) the answer.`, i: [`knew`],
      e: { en: `A wish about the present → past form.`, ja: `現在についての願望なので過去形です。` } },
    { q: `I wish I ___ (ask) more questions yesterday.`, i: [`had asked`, `'d asked`],
      e: { en: `Past regret → <i>had</i> + V3.`, ja: `過去への後悔なので had＋過去分詞です。` } },
    { q: `I wish I ___ taller.`, o: [`am`, `were`, `will be`], a: 1,
      e: { en: `<i>Were</i> is the safe choice after <i>wish</i>.`, ja: `wish の後は were が無難です。` } },
    { q: `I ___ it's sunny tomorrow.`, h: { en: `It's possible.`, ja: `晴れる可能性はある。` }, o: [`wish`, `hope`], a: 1,
      e: { en: `A possible outcome → <i>hope</i>.`, ja: `実現しうることには hope を使います。` } },
    { q: `I wish he ___ listen to me.`, h: { en: `You're frustrated with his behavior.`, ja: `彼の態度にいらだっている。` }, o: [`would`, `will`, `does`], a: 0,
      e: { en: `<i>Wish</i> + <i>would</i> = a desired change in behavior.`, ja: `wish＋would＝態度が変わってほしい、です。` } },
    { q: `I wish I ___ bought this jacket. It's too small.`, o: [`didn't`, `hadn't`, `wouldn't`], a: 1,
      e: { en: `Regret about a past action → <i>hadn't</i> + V3.`, ja: `過去の行為への後悔なので hadn't＋過去分詞です。` } },
    { q: `I'd rather you ___ tell anyone.`, o: [`don't`, `didn't`, `won't`], a: 1,
      e: { en: `<i>Would rather</i> + a different subject + past form.`, ja: `would rather＋別の主語＋過去形です。` } },
    { q: `I prefer tea ___ coffee.`, o: [`than`, `to`, `over than`], a: 1,
      e: { en: `<i>Prefer A to B</i>.`, ja: `prefer A to B の形です。` } },
    { q: `It's late. It's time we ___ home.`, o: [`go`, `went`, `will go`], a: 1,
      e: { en: `<i>It's time</i> + subject + past form.`, ja: `It's time＋主語＋過去形です。` } },
    { q: `I'd rather ___ at home tonight.`, o: [`stay`, `to stay`, `staying`], a: 0,
      e: { en: `<i>Would rather</i> + V1 (same subject).`, ja: `would rather＋原形（主語が同じ場合）です。` } }
  ]
});
