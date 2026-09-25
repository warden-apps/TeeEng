/* 06 Clauses & verb patterns — part A (handbook pp. 62–66) */

GH.topic({
  id: "reported-statements", ch: "clauses", p: 62,
  t: { en: "Reported speech: statements and time", ja: "間接話法：平叙文と時制の一致" },
  d: { en: "Backshift after past reporting verbs, when not to shift, changing pronouns and time words, and say vs tell.", ja: "過去の伝達動詞の後の時制の一致、一致させない場合、代名詞や時の語の変化、say と tell" },
  body: [
    { k: "core", en: `<b>Direct speech</b> quotes the exact words: <x>Mei said, "I am tired."</x> <b>Reported speech</b> reports the message: <x>Mei said (that) she was tired.</x> <i>That</i> is often omitted.`,
      ja: `<b>直接話法</b>は発言をそのまま引用し（<x>Mei said, "I am tired."</x>）、<b>間接話法</b>は内容を伝えます（<x>Mei said (that) she was tired.</x>）。that はよく省略されます。` },
    { k: "h", en: "Backshift after a past reporting verb", ja: "時制の一致（時制を1つ過去へ）" },
    { k: "table", head: [{ en: "Original words", ja: "元の発言" }, { en: "Typical later report", ja: "後で伝えるとき" }], rows: [
      [`<x>"I work here."</x>`, `<x>She said she worked there.</x>`],
      [`<x>"I am working."</x>`, `<x>She said she was working.</x>`],
      [`<x>"I have finished."</x>`, `<x>She said she had finished.</x>`],
      [`<x>"I finished yesterday."</x>`, `<x>She said she had finished the day before.</x>`],
      [`<x>"I will call."</x>`, `<x>She said she would call.</x>`],
      [`<x>"I can help."</x>`, `<x>She said she could help.</x>`]
    ] },
    { k: "shift", t: { en: "One step back in time", ja: "時制を1つ過去へ" }, head: [{ en: "Original words", ja: "元の発言" }, { en: "Reported after said", ja: "said の後で伝える" }], rows: [
      [`am / is`, `was`], [`are`, `were`], [`work / works`, `worked`], [`am working`, `was working`],
      [`worked`, `had worked`, { en: "or stays worked if the order is clear", ja: "順序が明らかなら worked のままでも可" }],
      [`have worked`, `had worked`], [`will`, `would`], [`can`, `could`],
      [{ en: "must (obligation)", ja: "must（義務）" }, `had to`], [`had worked · would · could · should · might`, { en: "no change", ja: "変化なし" }, { en: "these can't shift further", ja: "これ以上は下がらない" }]
    ] },
    { k: "p", en: `The past perfect stays the same. <i>Would, could, should, might, ought to</i> usually stay the same too. <i>Must</i> for obligation often becomes <i>had to</i>; <i>must</i> for deduction can stay.`,
      ja: `過去完了はそのままです。<i>would, could, should, might, ought to</i> も通常そのままです。義務の must は had to になることが多く、推量の must はそのままでもかまいません。` },
    { k: "h", en: "When no shift is needed", ja: "時制を変えなくてよい場合" },
    { k: "p", en: `With a present reporting verb: <x>She says she is tired.</x> For things still true: <x>She said she lives in Osaka.</x> For general facts: <x>The teacher said the Earth goes around the Sun.</x> A backshifted <i>lived</i> wouldn't necessarily mean she moved.`,
      ja: `伝達動詞が現在形なら変えません（<x>She says she is tired.</x>）。今も当てはまること（<x>She said she lives in Osaka.</x>）や一般的な事実（<x>The teacher said the Earth goes around the Sun.</x>）は現在形のままでもかまいません。lived にしても、引っ越したという意味になるとは限りません。` },
    { k: "h", en: "Pronouns, places, and times", ja: "代名詞・場所・時の表現" },
    { k: "p", en: `Change these to fit the new viewpoint: <i>I → he/she</i>; <i>here → there</i>; <i>today → that day</i>; <i>tomorrow → the next day</i>; <i>yesterday → the day before</i>; <i>now → then</i>; <i>this → that</i>. They don't all have to change — if you're still in the same place on the same day, <i>here</i> or <i>today</i> may stay.`,
      ja: `新しい視点に合わせて変えます：<i>I → he/she</i>、<i>here → there</i>、<i>today → that day</i>、<i>tomorrow → the next day</i>、<i>yesterday → the day before</i>、<i>now → then</i>、<i>this → that</i>。すべて変える必要はなく、同じ場所・同じ日なら here や today のままでかまいません。` },
    { k: "shift", t: { en: "Viewpoint words move too", ja: "視点を表す語も変わる" }, head: [{ en: "In the original words", ja: "元の発言" }, { en: "Reported later, elsewhere", ja: "後で・別の場所で伝える" }], rows: [
      [`I / me / my`, `she / her / her`, { en: "or he / him / his — whoever spoke", ja: "話した人に合わせる（he / him / his など）" }],
      [`here`, `there`], [`now`, `then`], [`this`, `that`], [`today`, `that day`],
      [`tomorrow`, `the next day`], [`yesterday`, `the day before`], [`next week`, `the following week`]
    ], n: { en: `Change them only when the viewpoint really has changed — on the same day, <i>today</i> can stay.`, ja: `実際に視点が変わったときだけ変えます。同じ日なら today のままでかまいません。` } },
    { k: "ex", items: [
      [`"I'll call you tomorrow," Mei told Arun on Monday.`, { en: `Reported on Wednesday: <i>Mei told Arun she would call him the next day</i> (or <i>on Tuesday</i>, which is clearer).`, ja: `水曜日に伝えると：<i>Mei told Arun she would call him the next day</i>（on Tuesday のほうが明確）` }]
    ] },
    { k: "h", en: "Say versus tell", ja: "say と tell" },
    { k: "p", en: `<i>Say</i> + message: <x>She said that she was tired.</x> <x>She said hello to me.</x> <i>Tell</i> + person + message: <x>She told me that she was tired.</x> Not <s>She said me</s> or <s>She told that she was tired</s>. Fixed phrases: <x>tell the truth</x>, <x>tell a story</x>, <x>tell a lie</x>.`,
      ja: `<i>say</i>＋内容（<x>She said that she was tired.</x>／<x>She said hello to me.</x>）、<i>tell</i>＋人＋内容（<x>She told me that she was tired.</x>）。<s>She said me</s> や <s>She told that she was tired</s> は誤りです。決まった表現：<x>tell the truth</x>、<x>tell a story</x>、<x>tell a lie</x>。` },
    { k: "watch", en: `A report isn't an endorsement: <x>She said the phone was new</x> reports her claim; it doesn't prove it. Choose a reporting verb that matches what was really meant.`,
      ja: `伝えることは、内容を保証することではありません：<x>She said the phone was new.</x> は彼女の主張を伝えているだけです。元の発言の意図に合った伝達動詞を選びましょう。` },
    { k: "tip", en: `Japanese keeps the original tense (彼女は疲れていると言った), but English usually shifts back after <i>said</i>: <x>She said she was tired.</x>`,
      ja: `日本語は元の時制のまま伝えますが（彼女は疲れていると言った）、英語では said の後で時制を1つ過去にずらすのが普通です：<x>She said she was tired.</x>` }
  ],
  q: [
    { q: `Mei said she ___ her card.`, h: { en: `Her words: "I have lost my card."`, ja: `彼女の言葉：「カードをなくしました」` }, i: [`had lost`, `'d lost`],
      e: { en: `Backshift: <i>have lost → had lost</i>.`, ja: `時制の一致：have lost → had lost です。` } },
    { q: `He said he ___ tired.`, h: { en: `His words: "I am tired."`, ja: `彼の言葉：「疲れている」` }, o: [`is being`, `was`, `were`], a: 1,
      e: { en: `<i>am → was</i>.`, ja: `am → was です。` } },
    { q: `She said she ___ call me later.`, h: { en: `Her words: "I will call you later."`, ja: `彼女の言葉：「後で電話する」` }, o: [`will`, `would`, `is going`], a: 1,
      e: { en: `<i>will → would</i>. <i>Will</i> is possible if the call is still to come, but <i>would</i> is the standard backshift.`, ja: `will → would です。電話がまだこれからなら will も可能ですが、would が標準的な時制の一致です。` } },
    { q: `He said he ___ swim.`, h: { en: `His words: "I can swim."`, ja: `彼の言葉：「泳げる」` }, o: [`can`, `could`, `could have`], a: 1,
      e: { en: `<i>can → could</i>.`, ja: `can → could です。` } },
    { q: `She ___ me that she was busy.`, o: [`said`, `told`, `spoke`], a: 1,
      e: { en: `<i>Tell</i> + person.`, ja: `tell＋人の形です。` } },
    { q: `She ___ that she was busy.`, o: [`said`, `told`], a: 0,
      e: { en: `<i>Say</i> + message, with no person.`, ja: `say＋内容（人を入れない）です。` } },
    { q: `He said he would call me ___.`, h: { en: `His words on Monday: "I'll call you tomorrow." You report them on Wednesday.`, ja: `月曜日の発言「明日電話する」を水曜日に伝える。` }, o: [`tomorrow`, `the next day`, `yesterday`], a: 1,
      e: { en: `From a later viewpoint, <i>tomorrow</i> becomes <i>the next day</i>.`, ja: `後から伝えるので tomorrow → the next day です。` } },
    { q: `The teacher said the Earth ___ around the Sun.`, o: [`goes`, `had gone`, `will go`], a: 0,
      e: { en: `A general fact can stay in the present.`, ja: `一般的な事実は現在形のままでかまいません。` } },
    { q: `She says she ___ tired.`, h: { en: `The reporting verb is present.`, ja: `伝達動詞が現在形。` }, o: [`is`, `was`, `had been`], a: 0,
      e: { en: `No backshift after a present reporting verb.`, ja: `伝達動詞が現在形なら時制は変えません。` } },
    { q: `He said he ___ leave early.`, h: { en: `His words: "I must leave early." (obligation)`, ja: `彼の言葉：「早く帰らなければならない」（義務）` }, o: [`had to`, `must have`, `musts`], a: 0,
      e: { en: `<i>Must</i> for obligation often becomes <i>had to</i>.`, ja: `義務の must は had to になることが多いです。` } }
  ]
});

GH.topic({
  id: "reported-questions", ch: "clauses", p: 63,
  t: { en: "Reported questions, commands, patterns", ja: "間接話法：疑問文・命令文・伝達動詞の型" },
  d: { en: "Reported questions in statement order, reported commands with to-infinitives, and the patterns reporting verbs take.", ja: "平叙文の語順になる疑問文の伝達、to 不定詞を使う命令文の伝達、伝達動詞がとる型" },
  body: [
    { k: "core", en: `Reported questions use <b>statement order</b> and no <i>do</i>-support: <x>"Where do you live?" → She asked where I lived.</x> <x>"Have you paid?" → She asked if/whether I had paid.</x>`,
      ja: `疑問文を伝えるときは<b>平叙文の語順</b>にし、do は使いません：<x>"Where do you live?" → She asked where I lived.</x>／<x>"Have you paid?" → She asked if/whether I had paid.</x>` },
    { k: "sv", t: { en: "Reporting a question", ja: "疑問文を伝える" }, rows: [
      { l: { en: "Her question", ja: "元の質問" }, p: [["X", `"Where`, { en: "question word", ja: "疑問詞" }], ["A", `do`], ["S", `you`], ["V", `live?"`]] },
      { arrow: { en: "Statement order, no do, and the tense shifts back.", ja: "平叙文の語順にし、do を消して、時制を1つ過去へ。" } },
      { l: { en: "Reported", ja: "伝達" }, p: [["M", `She asked`], ["X", `where`, { en: "question word", ja: "疑問詞" }], ["S", `I`], ["V", `lived.`]] },
      { l: { en: "A yes / no question", ja: "Yes/No 疑問文" }, p: [["M", `She asked`], ["X", `if`, { en: "or whether", ja: "または whether" }], ["S", `I`], ["V", `had paid.`]] }
    ] },
    { k: "p", en: `Not <s>She asked where did I live</s>. A statement reporting a question ends with a full stop: <x>She asked where I lived.</x> Use a question mark only if the whole sentence is a question: <x>Did she ask where you lived?</x>`,
      ja: `<s>She asked where did I live</s> は誤りです。疑問を伝える平叙文はピリオドで終えます（<x>She asked where I lived.</x>）。文全体が疑問文のときだけ「?」を付けます（<x>Did she ask where you lived?</x>）。` },
    { k: "h", en: "Commands, requests, warnings", ja: "命令・依頼・警告" },
    { k: "ex", items: [
      [`"Wait here." → She <b>told me to wait</b> there.`, { en: `tell + person + to V1`, ja: `tell＋人＋to 不定詞` }],
      [`"Please help me." → She <b>asked me to help</b> her.`, { en: `ask + person + to V1`, ja: `ask＋人＋to 不定詞` }],
      [`"Don't touch it." → She <b>warned me not to touch</b> it.`, { en: `reporting verb + person + not to V1`, ja: `伝達動詞＋人＋not to 不定詞` }]
    ] },
    { k: "h", en: "Reporting verb patterns", ja: "伝達動詞の型" },
    { k: "table", head: ["@pattern", { en: "Common verbs", ja: "よく使う動詞" }, "@example"], rows: [
      [{ f: "verb + to V1" }, `offer, promise, agree, refuse`, `<x>She offered to help.</x>`],
      [{ f: "verb + person + to V1" }, `ask, tell, advise, remind, warn`, `<x>She reminded me to call.</x>`],
      [{ f: "verb + V-ing" }, `admit, deny, suggest, recommend`, `<x>He admitted making a mistake.</x>`],
      [{ f: "verb + that-clause" }, `say, explain, suggest, claim`, `<x>She explained that it was delayed.</x>`],
      [{ f: "verb + preposition + V-ing" }, `apologize for, insist on, object to`, `<x>He apologized for arriving late.</x>`]
    ] },
    { k: "h", en: "Suggest and recommend", ja: "suggest と recommend" },
    { k: "p", en: `<x>She suggested waiting.</x> <x>She suggested that we wait.</x> <x>She suggested that we should wait.</x> — but not <s>She suggested me to wait</s>. Likewise <x>She recommended checking the details</x> or <x>She recommended that I check them.</x>`,
      ja: `<x>She suggested waiting.</x>／<x>She suggested that we wait.</x>／<x>She suggested that we should wait.</x> は正しく、<s>She suggested me to wait</s> は誤りです。recommend も同様です：<x>She recommended checking the details.</x>／<x>She recommended that I check them.</x>` },
    { k: "h", en: "Accuse, blame, congratulate, thank", ja: "前置詞がセットになる動詞" },
    { k: "p", en: `<i>accuse someone of</i>: <x>They accused him of lying.</x> <i>blame someone for</i>: <x>She blamed me for the delay.</x> <i>congratulate someone on</i>: <x>I congratulated her on passing.</x> <i>thank someone for</i>: <x>Thank you for helping.</x>`,
      ja: `<i>accuse someone of</i>（<x>They accused him of lying.</x>）、<i>blame someone for</i>（<x>She blamed me for the delay.</x>）、<i>congratulate someone on</i>（<x>I congratulated her on passing.</x>）、<i>thank someone for</i>（<x>Thank you for helping.</x>）。` },
    { k: "p", en: `Keep the original speech act: <x>He promised to call</x> (a commitment), <x>He offered to call</x> (willingness), <x>He threatened to call</x> (a threat), <x>He said he would call</x> (neutral).`,
      ja: `元の発言の意図を保ちましょう：<x>He promised to call.</x>（約束）、<x>He offered to call.</x>（申し出）、<x>He threatened to call.</x>（脅し）、<x>He said he would call.</x>（中立）。` },
    { k: "watch", en: `<x>Tell me what to do</x> = tell me which action I should take. <x>Tell me to do it</x> = give me an instruction to do a known action.`,
      ja: `<x>Tell me what to do.</x>＝何をすればいいか教えて。<x>Tell me to do it.</x>＝それをするように言って（指示）。` },
    { k: "tip", en: `〜するように言った is <i>told</i> + person + <i>to</i> V1: 待つように言われた = <x>She told me to wait.</x> 〜しないように is <i>not to</i>: <x>She told me not to worry.</x>`,
      ja: `「〜するように言った」は told＋人＋to 不定詞です：「待つように言われた」＝<x>She told me to wait.</x> 「〜しないように」は not to：<x>She told me not to worry.</x>` }
  ],
  q: [
    { q: `She asked where ___.`, h: { en: `Her words: "Where do you live?"`, ja: `彼女の質問：「どこに住んでいるの？」` }, o: [`did I live`, `I lived`, `do I live`], a: 1,
      e: { en: `Statement order, with no <i>do</i>-support.`, ja: `平叙文の語順で、do は使いません。` } },
    { q: `He asked ___ I had paid.`, h: { en: `His words: "Have you paid?"`, ja: `彼の質問：「払いましたか？」` }, o: [`if`, `that`, `what`], a: 0,
      e: { en: `A yes/no question → <i>if</i> or <i>whether</i>.`, ja: `Yes/No 疑問文は if か whether で伝えます。` } },
    { q: `She told me ___ it.`, h: { en: `Her words: "Don't touch it."`, ja: `彼女の言葉：「触らないで」` }, o: [`don't touch`, `not to touch`, `to not touching`], a: 1,
      e: { en: `A negative command → <i>not to</i> + V1.`, ja: `否定の命令は not to＋原形です。` } },
    { q: `She asked me ___ her.`, h: { en: `Her words: "Please help me."`, ja: `彼女の言葉：「手伝ってください」` }, o: [`help`, `to help`, `helping`], a: 1,
      e: { en: `<i>Ask</i> + person + <i>to</i> V1.`, ja: `ask＋人＋to 不定詞です。` } },
    { q: `She suggested ___ for the next bus.`, o: [`to wait`, `waiting`, `me to wait`], a: 1,
      e: { en: `<i>Suggest</i> + V-ing (or a that-clause).`, ja: `suggest＋-ing（または that節）です。` } },
    { q: `He admitted ___ a mistake.`, o: [`to make`, `making`, `that make`], a: 1,
      e: { en: `<i>Admit</i> + V-ing.`, ja: `admit＋-ing です。` } },
    { q: `She offered ___ me with my bags.`, o: [`helping`, `to help`, `me to help`], a: 1,
      e: { en: `<i>Offer</i> + <i>to</i> V1.`, ja: `offer＋to 不定詞です。` } },
    { q: `They accused him ___ lying.`, o: [`for`, `of`, `on`], a: 1,
      e: { en: `<i>Accuse someone of</i> + V-ing.`, ja: `accuse someone of＋-ing です。` } },
    { q: `I congratulated her ___ passing the exam.`, o: [`on`, `for`, `of`], a: 0,
      e: { en: `<i>Congratulate someone on</i>.`, ja: `congratulate someone on の形です。` } },
    { q: `He apologized ___ late.`, o: [`to arrive`, `for arriving`, `arriving`], a: 1,
      e: { en: `<i>Apologize for</i> + V-ing.`, ja: `apologize for＋-ing です。` } }
  ]
});

GH.topic({
  id: "relative-basic", ch: "clauses", p: 64,
  t: { en: "Relative clauses: who, which, that", ja: "関係詞節の基本" },
  d: { en: "Defining and non-defining clauses, choosing who/which/that/whose/where, when to omit the pronoun, and which for a whole clause.", ja: "制限用法と非制限用法、who・which・that・whose・where の選び方、関係代名詞を省略できる場合、前の節全体を受ける which" },
  body: [
    { k: "core", en: `A relative clause describes or identifies a noun, called the <b>antecedent</b>: <x>The customer who called yesterday is here.</x>`,
      ja: `関係詞節は名詞（<b>先行詞</b>）を説明・特定します：<x>The customer who called yesterday is here.</x>` },
    { k: "sv", t: { en: "The noun first, then the relative clause", ja: "名詞が先、関係詞節はその後ろ" }, rows: [
      { p: [["S", `The customer <b>who called yesterday</b>`, { en: "subject = noun + relative clause", ja: "主語＝名詞＋関係詞節" }], ["V", `is`], ["M", `here.`]] },
      { p: [["S", `I`], ["V", `know`], ["O", `a shop <b>where you can buy it.</b>`, { en: "object = noun + relative clause", ja: "目的語＝名詞＋関係詞節" }]] }
    ], n: { en: `The whole highlighted clause belongs to the noun in front of it: 昨日電話してきた客 → <i>the customer who called yesterday</i>.`, ja: `色の付いた節全体が、前の名詞を説明しています：昨日電話してきた客 → <i>the customer who called yesterday</i>。` } },
    { k: "h", en: "Defining relative clauses", ja: "制限用法（どれかを特定する）" },
    { k: "p", en: `A defining clause identifies which one you mean, and takes no commas. <i>Who/that</i> for people; <i>which/that</i> for things; <i>whose</i> for possession; <i>where</i> for places; <i>when</i> for times.`,
      ja: `制限用法はどれのことかを特定し、カンマは付けません。人には who/that、ものには which/that、所有には whose、場所には where、時には when を使います。` },
    { k: "table", head: [{ en: "Role in the clause", ja: "節の中での働き" }, "@example", { en: "Can you omit it?", ja: "省略できる？" }], rows: [
      [{ en: "Subject", ja: "主語" }, `<x>The woman who called me is here.</x>`, { en: "No — who is the subject of called", ja: "不可（who が called の主語）" }],
      [{ en: "Object", ja: "目的語" }, `<x>The woman (who/that) I called is here.</x>`, { en: "Often yes", ja: "多くの場合可能" }],
      [{ en: "Possessor", ja: "所有" }, `<x>The woman whose phone broke is here.</x>`, { en: "No", ja: "不可" }],
      [{ en: "Object of a final preposition", ja: "文末の前置詞の目的語" }, `<x>The colleague (who) I work with is here.</x>`, { en: "Often yes", ja: "多くの場合可能" }]
    ] },
    { k: "flow", t: { en: "Relative word finder", ja: "関係詞ファインダー" }, start: "extra", n: {
      extra: { q: { en: "Does the clause only add extra information, set off with commas? (The noun is already identified: Mei, my mother, the Eiffel Tower.)", ja: "カンマで区切って情報を付け足すだけ？（名詞はすでに特定されている：Mei、私の母、エッフェル塔など）" }, o: [
        [{ en: "Yes — extra information, with commas", ja: "はい：追加情報（カンマあり）" }, "nd"],
        [{ en: "No — it tells you which one I mean", ja: "いいえ：どれのことかを特定する" }, "poss"]] },
      nd: { q: { en: "What does it describe?", ja: "何について説明する？" }, o: [
        [{ en: "A person", ja: "人" }, "ndWho"], [{ en: "A thing, or the whole previous idea", ja: "もの、または前の内容全体" }, "ndWhich"], [{ en: "Whose (possession)", ja: "所有（〜の）" }, "whose"]] },
      poss: { q: { en: "Does it show possession — her phone, its products?", ja: "所有（彼女の電話・その会社の製品など）を表す？" }, o: [
        [{ en: "Yes", ja: "はい" }, "whose"], [{ en: "No", ja: "いいえ" }, "person"]] },
      person: { q: { en: "Is the noun a person?", ja: "名詞は人？" }, o: [
        [{ en: "Yes, a person", ja: "はい、人" }, "pRole"], [{ en: "No — a thing, place or time", ja: "いいえ：もの・場所・時" }, "place"]] },
      pRole: { q: { en: "Inside the clause, is it the subject? (the woman ___ called me)", ja: "節の中で主語？（the woman ___ called me）" }, o: [
        [{ en: "Yes, the subject", ja: "はい、主語" }, "whoSubj"], [{ en: "No, the object (the woman ___ I called)", ja: "いいえ、目的語（the woman ___ I called）" }, "whoObj"]] },
      place: { q: { en: "Does the word mean \"in / at which\" (a place) or \"when\" (a time)?", ja: "「in / at which（場所）」または「その時（時）」の意味？" }, o: [
        [{ en: "A place: the shop ___ I work", ja: "場所：the shop ___ I work" }, "where"],
        [{ en: "A time: the day ___ we met", ja: "時：the day ___ we met" }, "when"],
        [{ en: "Neither: the shop ___ I visited", ja: "どちらでもない：the shop ___ I visited" }, "tRole"]] },
      tRole: { q: { en: "Inside the clause, is it the subject? (the phone ___ broke)", ja: "節の中で主語？（the phone ___ broke）" }, o: [
        [{ en: "Yes, the subject", ja: "はい、主語" }, "whichSubj"], [{ en: "No, the object (the phone ___ I bought)", ja: "いいえ、目的語（the phone ___ I bought）" }, "whichObj"]] },
      whoSubj: { r: `who / that`, nt: { en: "It's the subject, so you can't leave it out.", ja: "主語なので省略できません。" }, ex: [`The woman who called me is here.`] },
      whoObj: { r: { en: "who / that / nothing", ja: "who / that / 省略" }, nt: { en: "An object relative can be left out.", ja: "目的格の関係代名詞は省略できます。" }, ex: [`The woman I called is here.`] },
      whichSubj: { r: `which / that`, ex: [`The phone that broke is on the desk.`] },
      whichObj: { r: { en: "which / that / nothing", ja: "which / that / 省略" }, nt: { en: "An object relative can be left out.", ja: "目的格の関係代名詞は省略できます。" }, ex: [`This is the phone I bought.`] },
      where: { r: `where`, ex: [`That's the shop where I work.`] },
      when: { r: `when`, ex: [`I remember the day when we met.`] },
      whose: { r: `whose`, ex: [`The woman whose phone broke is waiting.`] },
      ndWho: { r: `, who … ,`, nt: { en: "Commas, and never that; don't leave it out.", ja: "カンマで区切り、that は使わず、省略もしません。" }, ex: [`Mei, who works upstairs, helped me.`] },
      ndWhich: { r: `, which … ,`, nt: { en: "Commas, and never that. Which can also point back to a whole idea.", ja: "カンマで区切り、that は使いません。which は前の内容全体も受けられます。" }, ex: [`My phone, which I bought last year, still works.`, `He forgot his ID, which caused a delay.`] }
    } },
    { k: "h", en: "Non-defining relative clauses", ja: "非制限用法（追加情報）" },
    { k: "p", en: `A non-defining clause adds extra information about something already identified, set off by commas: <x>Mei, who works upstairs, helped me.</x> Use <i>who/whom/which/whose</i> — never <i>that</i> — and don't omit the pronoun: <x>My phone, which I bought last year, still works.</x>`,
      ja: `非制限用法は、すでに特定されたものについて追加情報を加え、カンマで区切ります：<x>Mei, who works upstairs, helped me.</x> who/whom/which/whose を使い（that は不可）、関係代名詞は省略しません：<x>My phone, which I bought last year, still works.</x>` },
    { k: "ex", items: [
      [`My brother <b>who lives in Bangkok</b> helps me.`, { en: `defining: tells you which brother (I have more than one)`, ja: `制限用法：どの兄弟かを特定（兄弟が複数いる）` }],
      [`My brother<b>, who lives in Bangkok,</b> helps me.`, { en: `non-defining: extra information about my brother`, ja: `非制限用法：兄弟についての追加情報` }]
    ] },
    { k: "h", en: "No repeated subject or object", ja: "代名詞を重ねない" },
    { k: "p", en: `<x>The phone that I bought is blue</x> — not <s>the phone that I bought it</s>, because <i>that</i> already fills the object role. <x>The woman who called is here</x> — not <s>who she called</s>.`,
      ja: `<s>the phone that I bought it</s> ではなく <x>The phone that I bought is blue.</x>（that がすでに目的語の役割を果たしています）。<s>who she called</s> ではなく <x>The woman who called is here.</x>` },
    { k: "h", en: "Which for a whole clause", ja: "前の節全体を受ける which" },
    { k: "p", en: `<x>He forgot his ID, which caused a delay.</x> — <i>which</i> refers to the whole forgetting, not just the ID. Use a comma.`,
      ja: `<x>He forgot his ID, which caused a delay.</x> の which は、ID だけでなく「ID を忘れたこと」全体を指しています。カンマを付けます。` },
    { k: "watch", en: `For places, check the role: <x>the shop where I work</x> (= in which I work), but <x>the shop that I visited</x> (<i>shop</i> is the object of <i>visited</i>). Don't use <i>where</i> just because the noun is a place.`,
      ja: `場所でも役割を確認しましょう：<x>the shop where I work</x>（＝in which I work）、しかし <x>the shop that I visited</x>（shop は visited の目的語）。名詞が場所だからといって where を使うとは限りません。` },
    { k: "tip", en: `Japanese puts the description before the noun (昨日電話してきた客), but English puts the relative clause after it: <x>the customer who called yesterday</x>. Say the noun first, then add <i>who/which/that</i>.`,
      ja: `日本語は説明を名詞の前に置きますが（昨日電話してきた客）、英語では関係詞節を名詞の後に置きます：<x>the customer who called yesterday</x>。まず名詞を言ってから、who/which/that で説明を加えましょう。` }
  ],
  q: [
    { q: `The customer ___ called yesterday is here.`, o: [`who`, `which`, `whose`], a: 0,
      e: { en: `A person, as subject → <i>who</i> (or <i>that</i>).`, ja: `人で主語なので who（that も可）です。` } },
    { q: `This is the phone ___ I bought last week.`, o: [`who`, `which`, `where`], a: 1,
      e: { en: `A thing, as object → <i>which/that</i> (or leave it out).`, ja: `もので目的語なので which/that（省略も可）です。` } },
    { q: `The woman ___ phone broke is waiting.`, o: [`who`, `whose`, `which`], a: 1,
      e: { en: `Possession → <i>whose</i>.`, ja: `所有なので whose です。` } },
    { q: `That's the shop ___ I work.`, o: [`which`, `where`, `that`], a: 1,
      e: { en: `<i>Where</i> = in which (I work in the shop).`, ja: `where＝in which（その店で働く）です。` } },
    { q: `That's the shop ___ I visited yesterday.`, o: [`where`, `which`], a: 1,
      e: { en: `<i>Shop</i> is the object of <i>visited</i> → <i>which/that</i>.`, ja: `shop は visited の目的語なので which/that です。` } },
    { q: { en: `In which sentence can the relative pronoun be omitted?`, ja: `関係代名詞を省略できるのはどれ？` }, o: [`The person who called me is here.`, `The person who I called is here.`], a: 1,
      e: { en: `In the second, <i>who</i> is the object (<i>I</i> is the subject), so it can be omitted.`, ja: `2つ目の who は目的語（主語は I）なので省略できます。` } },
    { q: { en: `Which sentence is correct?`, ja: `正しい文はどれ？` }, o: [`The phone that I bought it is blue.`, `The phone that I bought is blue.`], a: 1,
      e: { en: `Don't repeat the object — <i>that</i> already fills it.`, ja: `目的語を重ねないこと。that がすでに目的語です。` } },
    { q: `Mei, ___ works upstairs, helped me.`, o: [`that`, `who`], a: 1,
      e: { en: `Non-defining clauses can't use <i>that</i>.`, ja: `非制限用法では that は使えません。` } },
    { q: `He forgot his ID, ___ caused a delay.`, o: [`that`, `which`, `what`], a: 1,
      e: { en: `<i>Which</i> refers to the whole previous clause.`, ja: `which は前の節全体を指します。` } },
    { w: [`The`, `colleague`, `I`, `work`, `with`, `is`, `very`, `kind.`],
      e: { en: `The relative pronoun (the object of <i>with</i>) is omitted, and the preposition stays at the end.`, ja: `関係代名詞（with の目的語）が省略され、前置詞は後ろに残ります。` } }
  ]
});

GH.topic({
  id: "relative-advanced", ch: "clauses", p: 65,
  t: { en: "Relative clauses: advanced choices", ja: "関係詞節の発展" },
  d: { en: "Whom and prepositions, reduced relatives, infinitive relatives, what/whoever/whichever, and quantity + of which/whom.", ja: "whom と前置詞、分詞による後置修飾、不定詞による修飾、what・whoever・whichever、数量＋of which/whom" },
  body: [
    { k: "h", en: "Whom and prepositions", ja: "whom と前置詞" },
    { k: "p", en: `<i>Who</i> is normal as an object in modern English: <x>the person who I met</x>. <i>Whom</i> is formal, especially after a fronted preposition: <x>the person to whom I spoke</x>. A natural informal version is <x>the person (who) I spoke to</x>. Never put <i>that</i> after a preposition: <x>the topic about which we spoke</x>, not <s>about that</s>. <i>Whose</i> works for things too: <x>a company whose products are reliable</x>.`,
      ja: `現代英語では、目的語にも who が普通に使われます（<x>the person who I met</x>）。whom は堅く、特に前置詞の後で使います（<x>the person to whom I spoke</x>）。くだけた言い方なら <x>the person (who) I spoke to</x>。前置詞の後に that は置けません：<s>about that</s> ではなく <x>the topic about which we spoke</x>。whose はものにも使えます：<x>a company whose products are reliable</x>。` },
    { k: "h", en: "Reduced relatives", ja: "分詞による後置修飾（関係詞節の短縮）" },
    { k: "ex", items: [
      [`People <b>waiting outside</b> should queue.`, { en: `= people who are waiting outside`, ja: `＝people who are waiting outside` }],
      [`The forms <b>completed yesterday</b> are on the desk.`, { en: `= the forms that were completed yesterday`, ja: `＝the forms that were completed yesterday` }],
      [`People <b>living here in 1990</b> remember the flood.`, { en: `-ing doesn't always mean present time`, ja: `-ing がいつも現在を表すとは限らない` }]
    ] },
    { k: "p", en: `Reduction works only when the result fits in grammar and meaning — you can't just delete <i>who/which</i> from any clause.`,
      ja: `短縮できるのは、文法と意味が成り立つ場合だけです。どんな節からでも who/which を消せるわけではありません。` },
    { k: "h", en: "Infinitive relatives", ja: "不定詞による修飾" },
    { k: "p", en: `<x>I have work to do.</x> <x>She was the first person to arrive.</x> <x>We need a place to stay.</x> Keep a needed preposition: <x>a chair to sit on</x>. <x>The only person to have finished</x> uses a perfect infinitive.`,
      ja: `<x>I have work to do.</x>／<x>She was the first person to arrive.</x>／<x>We need a place to stay.</x> 必要な前置詞は残します：<x>a chair to sit on</x>。<x>the only person to have finished</x> は完了不定詞です。` },
    { k: "h", en: "What, whoever, whichever", ja: "what・whoever・whichever" },
    { k: "p", en: `<x>What you said surprised me.</x> — <i>what</i> = "the thing that", so don't write <s>the thing what you said</s>. <x>Take whichever seat you prefer.</x> <x>Whoever arrives first can start.</x> <x>Whatever happens, stay calm.</x> (= no matter what happens)`,
      ja: `<x>What you said surprised me.</x> の what＝the thing that です（<s>the thing what you said</s> は不可）。<x>Take whichever seat you prefer.</x>（どちらでも）／<x>Whoever arrives first can start.</x>（誰でも）／<x>Whatever happens, stay calm.</x>（何が起きても）` },
    { k: "h", en: "Quantity + relative", ja: "数量＋関係詞" },
    { k: "p", en: `<x>We met three employees, two of whom spoke Japanese.</x> <x>I tried several plans, none of which suited me.</x> Use <i>whom</i> for people and <i>which</i> for things, with commas.`,
      ja: `<x>We met three employees, two of whom spoke Japanese.</x>／<x>I tried several plans, none of which suited me.</x> 人には whom、ものには which を使い、カンマで区切ります。` },
    { k: "watch", en: `<x>That's the reason why I left.</x> / <x>That's the reason I left.</x> / <x>That's why I left.</x> are all natural. Avoid piling up <s>the reason why … is because</s> — simply say <x>I left because…</x>`,
      ja: `<x>That's the reason why I left.</x>／<x>That's the reason I left.</x>／<x>That's why I left.</x> はどれも自然です。<s>the reason why … is because</s> のように重ねるのは避け、<x>I left because…</x> と言いましょう。` },
    { k: "tip", en: `〜すること／〜したもの often becomes <i>what</i>: 彼が言ったことに驚いた = <x>What he said surprised me.</x> There's no need for <i>the thing</i>.`,
      ja: `日本語の「〜すること／〜したもの」は what で表せることが多いです。「彼が言ったことに驚いた」＝<x>What he said surprised me.</x>（the thing は不要）` }
  ],
  q: [
    { q: `The person ___ I spoke was very helpful.`, o: [`to whom`, `to that`, `whom to`], a: 0,
      e: { en: `Preposition + <i>whom</i> (formal); never preposition + <i>that</i>.`, ja: `前置詞＋whom（堅い言い方）です。前置詞＋that は不可です。` } },
    { q: `The topic ___ we talked was interesting.`, o: [`about which`, `about that`, `which about`], a: 0,
      e: { en: `Preposition + <i>which</i>.`, ja: `前置詞＋which です。` } },
    { q: `People ___ outside should form a line.`, o: [`wait`, `waiting`, `waited`], a: 1,
      e: { en: `Reduced relative: <i>waiting</i> = who are waiting.`, ja: `分詞の後置修飾：waiting＝who are waiting です。` } },
    { q: `The forms ___ yesterday are ready.`, o: [`completing`, `completed`, `complete`], a: 1,
      e: { en: `Passive reduced relative: <i>completed</i> = that were completed.`, ja: `受動の後置修飾：completed＝that were completed です。` } },
    { q: `I need a chair to sit ___.`, o: [`—`, `on`, `in it`], a: 1,
      e: { en: `Keep the needed preposition: <i>a chair to sit on</i>.`, ja: `必要な前置詞を残します：a chair to sit on。` } },
    { q: `___ you said really helped me.`, o: [`That`, `What`, `Which`], a: 1,
      e: { en: `<i>What</i> = the thing that.`, ja: `what＝the thing that です。` } },
    { q: `___ arrives first can open the door.`, o: [`Who`, `Whoever`, `Whom`], a: 1,
      e: { en: `<i>Whoever</i> = any person who.`, ja: `whoever＝〜する人は誰でも、です。` } },
    { q: `We met five students, two of ___ spoke Japanese.`, o: [`them`, `whom`, `who`], a: 1,
      e: { en: `Quantity + <i>of whom</i> for people.`, ja: `人には数量＋of whom を使います。` } },
    { q: `I tried several plans, none of ___ worked.`, o: [`which`, `them`, `what`], a: 0,
      e: { en: `Quantity + <i>of which</i> for things.`, ja: `ものには数量＋of which を使います。` } },
    { q: `She was the first person ___.`, o: [`arriving`, `to arrive`, `arrived`], a: 1,
      e: { en: `<i>The first person to</i> + V1.`, ja: `the first person to＋原形です。` } }
  ]
});

GH.topic({
  id: "noun-clauses", ch: "clauses", p: 66,
  t: { en: "Noun clauses and complement clauses", ja: "名詞節" },
  d: { en: "That-clauses, embedded questions, clauses after adjectives and nouns, relative vs content clauses, and the subjunctive after demands.", ja: "that節、間接疑問、形容詞・名詞の後の節、関係詞節と同格の that、要求の後の仮定法現在" },
  body: [
    { k: "core", en: `Some clauses do the jobs of noun phrases — subject, object, or complement. Traditional grammar calls them <b>noun clauses</b>.`,
      ja: `節の中には、名詞句と同じように主語・目的語・補語の働きをするものがあります。伝統文法ではこれを<b>名詞節</b>と呼びます。` },
    { k: "h", en: "That-clauses: propositions", ja: "that節" },
    { k: "p", en: `<x>I know that she is busy.</x> — the clause is the object of <i>know</i>. <x>That she remembered surprised me.</x> — a clause as subject. More conversational: <x>It surprised me that she remembered.</x> (dummy <i>it</i> moves the long clause to the end).`,
      ja: `<x>I know that she is busy.</x> の that節は know の目的語です。<x>That she remembered surprised me.</x> は節が主語。会話的には <x>It surprised me that she remembered.</x> と形式主語 it を使い、長い節を後ろに回します。` },
    { k: "sv", t: { en: "A whole clause in a noun's place", ja: "節が名詞の位置に入る" }, rows: [
      { l: { en: "Clause as object", ja: "目的語の節" }, p: [["S", `I`], ["V", `know`], ["O", `that she is busy.`, { en: "that-clause", ja: "that節" }]] },
      { l: { en: "Clause as subject", ja: "主語の節" }, p: [["S", `That she remembered my name`, { en: "that-clause", ja: "that節" }], ["V", `surprised`], ["O", `me.`]] },
      { arrow: { en: "A long subject usually moves to the end, with it holding its place.", ja: "長い主語は、it を代わりに置いて後ろへ回すのが普通。" } },
      { p: [["S", `It`, { en: "placeholder", ja: "形式主語" }], ["V", `surprised`], ["O", `me`], ["S", `that she remembered my name.`, { en: "real subject", ja: "真の主語" }]] }
    ] },
    { k: "p", en: `<i>That</i> is often omitted after common verbs: <x>I think (that) it works.</x> Keep it at the start of a subject clause: <x>That she left is surprising</x> — not <s>She left is surprising</s>.`,
      ja: `よく使う動詞の後では that を省略できます：<x>I think (that) it works.</x> ただし主語になる節の that は省略できません：<s>She left is surprising</s> ではなく <x>That she left is surprising.</x>` },
    { k: "h", en: "Embedded questions: missing information", ja: "間接疑問" },
    { k: "p", en: `<x>I don't know where she lives.</x> <x>The question is whether we can afford it.</x> <x>I wonder why he left.</x> Statement order applies: <i>where she lives</i>, not <s>where does she live</s>. <x>whether to leave</x> is a non-finite version.`,
      ja: `<x>I don't know where she lives.</x>／<x>The question is whether we can afford it.</x>／<x>I wonder why he left.</x> 平叙文の語順にします（<s>where does she live</s> ではない）。<x>whether to leave</x> は不定詞を使った形です。` },
    { k: "h", en: "Clauses after adjectives and nouns", ja: "形容詞・名詞の後の節" },
    { k: "p", en: `<x>I'm glad that you came.</x> <x>I'm sure that it works.</x> <x>The fact that she called matters.</x> <x>There is a possibility that it will rain.</x>`,
      ja: `<x>I'm glad that you came.</x>／<x>I'm sure that it works.</x>／<x>The fact that she called matters.</x>／<x>There is a possibility that it will rain.</x>` },
    { k: "ex", items: [
      [`The claim <b>that he made</b> was false.`, { en: `relative clause: "he made a claim" — a role is missing inside`, ja: `関係詞節：he made a claim（節の中に欠けた要素がある）` }],
      [`The claim <b>that he was absent</b> was false.`, { en: `content clause: it states what the claim was — the clause is complete`, ja: `同格の that：主張の内容を述べる（節は完全）` }]
    ] },
    { k: "h", en: "The subjunctive after demands", ja: "要求を表す語の後の仮定法現在" },
    { k: "p", en: `<x>They insisted that he be present.</x> <x>I suggest that she check it.</x> <x>It is important that everyone arrive on time.</x> The verb is V1, even with he/she/it. British English often uses <i>should</i> + V1: <x>They insisted that he should be present.</x>`,
      ja: `<x>They insisted that he be present.</x>／<x>I suggest that she check it.</x>／<x>It is important that everyone arrive on time.</x> 主語が he/she/it でも動詞は原形です。イギリス英語では should＋原形もよく使います：<x>They insisted that he should be present.</x>` },
    { k: "p", en: `Meaning decides: <x>I insist that he is honest</x> asserts a fact; <x>I insist that he be present</x> makes a demand.`,
      ja: `意味によって使い分けます：<x>I insist that he is honest.</x> は事実の主張、<x>I insist that he be present.</x> は要求です。` },
    { k: "watch", en: `<x>I think that…</x> introduces a content clause; <x>the phone that…</x> introduces a relative clause. Same word, different job.`,
      ja: `<x>I think that…</x> の that は名詞節を導き、<x>the phone that…</x> の that は関係詞節を導きます。同じ語でも働きが違います。` },
    { k: "tip", en: `〜ということ is usually a that-clause: 彼が来たことに驚いた = <x>I was surprised that he came.</x> 〜かどうか is <i>whether/if</i>: <x>I don't know whether it's true.</x>`,
      ja: `「〜ということ」はたいてい that節です：「彼が来たことに驚いた」＝<x>I was surprised that he came.</x> 「〜かどうか」は whether/if：<x>I don't know whether it's true.</x>` }
  ],
  q: [
    { q: `I know ___ she is busy.`, o: [`that`, `what`, `which`], a: 0,
      e: { en: `A that-clause as the object of <i>know</i>.`, ja: `know の目的語になる that節です。` } },
    { q: `___ she left early is surprising.`, o: [`That`, `What`, `—`], a: 0,
      e: { en: `A subject that-clause keeps <i>that</i>.`, ja: `主語になる that節の that は省略できません。` } },
    { q: `It surprised me ___ she remembered my name.`, o: [`that`, `what`, `which`], a: 0,
      e: { en: `Dummy <i>it</i>, with the that-clause at the end.`, ja: `形式主語 it を使い、that節を後ろに置いています。` } },
    { q: `I don't know where ___.`, o: [`does she live`, `she lives`, `lives she`], a: 1,
      e: { en: `Embedded question → statement order.`, ja: `間接疑問なので平叙文の語順です。` } },
    { q: `The question is ___ we can afford it.`, o: [`whether`, `that`, `what`], a: 0,
      e: { en: `An open yes/no question → <i>whether</i>.`, ja: `Yes/No の内容なので whether です。` } },
    { q: `They insisted that he ___ present.`, o: [`is`, `be`, `was being`], a: 1,
      e: { en: `Subjunctive after a demand (<i>insist</i>): V1 <i>be</i>.`, ja: `要求（insist）の後の仮定法現在：原形 be です。` } },
    { q: `It's important that everyone ___ on time.`, o: [`arrives`, `arrive`, `arrived`], a: 1,
      e: { en: `Subjunctive: V1 even with <i>everyone</i>.`, ja: `仮定法現在：everyone でも原形です。` } },
    { q: { en: `In which sentence is <i>that</i> a relative pronoun?`, ja: `that が関係代名詞なのはどれ？` }, o: [`The claim that he made was false.`, `The claim that he was absent was false.`], a: 0,
      e: { en: `In the first, <i>that</i> is the object of <i>made</i>; the second states the content of the claim.`, ja: `1つ目の that は made の目的語。2つ目は主張の内容を述べる同格の that です。` } },
    { q: `I'm sure ___ it will work.`, o: [`that`, `what`, `whether`], a: 0,
      e: { en: `Adjective + that-clause.`, ja: `形容詞＋that節です。` } },
    { q: `I suggest that she ___ the report again.`, o: [`checks`, `check`, `checked`], a: 1,
      e: { en: `After <i>suggest</i> (a recommendation), the subjunctive uses V1.`, ja: `suggest（提案）の後は仮定法現在で原形です。` } }
  ]
});
