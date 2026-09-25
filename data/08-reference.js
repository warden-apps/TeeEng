/* 08 Verb forms & reference (handbook pp. 86–87, 88–93, 97) */

GH.topic({
  id: "regular-confusables", ch: "ref", p: 87,
  t: { en: "Regular verbs and easily confused forms", ja: "規則動詞と紛らわしい動詞" },
  d: { en: "Regular -ed forms, and the pairs that trip everyone up: lie/lay, rise/raise, sit/set — plus pronunciation traps.", ja: "規則動詞の -ed、間違えやすいペア（lie/lay・rise/raise・sit/set）、発音の注意点" },
  body: [
    { k: "core", en: `Regular verbs use the same <i>-ed</i> form for V2 and V3, but the grammar still differs: <x>I worked yesterday.</x> (V2) <x>I have worked here for years.</x> (V3) <x>The machine was repaired.</x> (V3, passive)`,
      ja: `規則動詞は V2 と V3 が同じ <i>-ed</i> の形ですが、文法上の働きは違います：<x>I worked yesterday.</x>（V2）／<x>I have worked here for years.</x>（V3）／<x>The machine was repaired.</x>（V3・受動態）` },
    { k: "table", head: [{ en: "V1", ja: "V1（原形）" }, { en: "V2 / V3", ja: "V2・V3" }, { en: "Meaning", ja: "意味" }], rows: [
      [`ask`, `asked`, { en: "request information or action", ja: "尋ねる・頼む" }],
      [`check`, `checked`, { en: "examine, verify", ja: "確認する" }],
      [`decide`, `decided`, { en: "choose after thinking", ja: "決める" }],
      [`explain`, `explained`, { en: "make clear", ja: "説明する" }],
      [`plan`, `planned`, { en: "arrange, intend", ja: "計画する" }],
      [`practice`, `practiced`, { en: "train a skill", ja: "練習する" }],
      [`repair`, `repaired`, { en: "fix", ja: "修理する" }],
      [`study`, `studied`, { en: "learn systematically", ja: "勉強する" }],
      [`try`, `tried`, { en: "attempt, test", ja: "試す" }],
      [`wait`, `waited`, { en: "remain until something happens", ja: "待つ" }],
      [`work`, `worked`, { en: "perform a job; function", ja: "働く・機能する" }]
    ] },
    { k: "h", en: "Lie, lay, rise, raise, sit, set", ja: "紛らわしいペア" },
    { k: "table", head: [{ en: "Verb", ja: "動詞" }, { en: "Forms", ja: "活用" }, { en: "Meaning and pattern", ja: "意味と型" }], rows: [
      [`lie`, `lie – lay – lain`, { en: "recline; no object: <x>I lie down.</x> <x>Yesterday I lay down.</x> <x>I have lain here for an hour.</x>", ja: "横になる（目的語なし）：<x>I lie down.</x>／<x>Yesterday I lay down.</x>／<x>I have lain here for an hour.</x>" }],
      [`lay`, `lay – laid – laid`, { en: "put something down; takes an object: <x>Lay the phone here.</x> <x>I laid it here.</x>", ja: "（何かを）置く（目的語をとる）：<x>Lay the phone here.</x>／<x>I laid it here.</x>" }],
      [`lie`, `lie – lied – lied`, { en: "say something untrue: <x>He lied to me.</x>", ja: "うそをつく：<x>He lied to me.</x>" }],
      [`rise`, `rise – rose – risen`, { en: "go up; no object: <x>Prices rose.</x>", ja: "上がる（目的語なし）：<x>Prices rose.</x>" }],
      [`raise`, `raise – raised – raised`, { en: "make something go up; takes an object: <x>The company raised prices.</x>", ja: "（何かを）上げる（目的語をとる）：<x>The company raised prices.</x>" }],
      [`sit / set`, `sit – sat – sat / set – set – set`, { en: "<x>Sit down.</x> (no object) / <x>Set the box down.</x> (object)", ja: "<x>Sit down.</x>（目的語なし）／<x>Set the box down.</x>（目的語をとる）" }]
    ] },
    { k: "cmp", t: { en: "Does something receive the action?", ja: "動作を受けるもの（目的語）がある？" }, cols: [
      { h: { en: "No object: it moves by itself", ja: "目的語なし：自分で動く" }, s: `lie · rise · sit`, ex: [`I lie down after lunch.`, `Prices rose sharply.`, `Please sit down.`] },
      { h: { en: "Object: you move something", ja: "目的語あり：何かを動かす" }, s: `lay · raise · set`, ex: [`Lay the phone on the table.`, `The company raised prices.`, `Set the box down here.`] }
    ], n: { en: `Careful: the past of <i>lie</i> (recline) is <i>lay</i> — the same spelling as the present of <i>lay</i>.`, ja: `注意：lie（横になる）の過去形は lay で、lay（置く）の現在形と同じつづりです。` } },
    { k: "h", en: "Pronunciation traps", ja: "発音の注意" },
    { k: "p", en: `<i>Read</i>: V1 is /riːd/, but V2 and V3 are /red/. <i>Lead</i>: the verb V1 is /liːd/, and <i>led</i> is /led/. <i>Wind</i> (to turn) is /waɪnd/ and <i>wound</i> is /waʊnd/ — while the noun <i>wound</i> (an injury) is /wuːnd/.`,
      ja: `<i>read</i>：原形は /riːd/ ですが、過去形・過去分詞は /red/ です。<i>lead</i>：動詞の原形は /liːd/、過去形 led は /led/。<i>wind</i>（巻く）は /waɪnd/ で、その過去形 wound は /waʊnd/。名詞の wound（傷）は /wuːnd/ です。` },
    { k: "h", en: "Pairs to learn carefully", ja: "特に注意する形" },
    { k: "p", en: `<i>bear – bore – borne</i> (carry, endure), but <i>born</i> in <x>I was born in Japan</x>. <i>Hang – hung – hung</i> (suspend something), but <i>hanged</i> for execution. <i>Cost – cost – cost</i> (have a price), but <i>costed</i> for calculating a project's costs. <i>Shine – shone</i> (emit light), but <i>shined</i> (polished).`,
      ja: `<i>bear – bore – borne</i>（耐える・運ぶ）ですが、「生まれる」は <x>I was born in Japan.</x> と born を使います。<i>hang – hung – hung</i>（つるす）ですが、絞首刑は hanged。<i>cost – cost – cost</i>（値段がかかる）ですが、費用を算出する意味では costed。<i>shine – shone</i>（光る）と <i>shined</i>（磨いた）も区別します。` },
    { k: "watch", en: `<i>Practice / practise</i>: American English uses <i>practice</i> for both the noun and the verb; British English writes the noun <i>practice</i> and the verb <i>practise</i>. Both systems are standard when used consistently.`,
      ja: `<i>practice / practise</i>：アメリカ英語は名詞も動詞も practice。イギリス英語は名詞が practice、動詞が practise です。どちらも一貫して使えば標準的です。` },
    { k: "tip", en: `Japanese often uses one verb where English has a pair, so memorize by object: <b>no object → lie / rise / sit</b>; <b>object → lay / raise / set</b>.`,
      ja: `日本語では区別しにくいので、「目的語があるか」で覚えましょう：<b>目的語なし → lie / rise / sit</b>、<b>目的語あり → lay / raise / set</b>。` }
  ],
  q: [
    { q: `I'm tired. I'm going to ___ down.`, o: [`lie`, `lay`], a: 0,
      e: { en: `No object → <i>lie</i>.`, ja: `目的語がないので lie です。` } },
    { q: `Please ___ the book on the table.`, o: [`lie`, `lay`], a: 1,
      e: { en: `There's an object (<i>the book</i>) → <i>lay</i>.`, ja: `目的語（the book）があるので lay です。` } },
    { q: `Prices ___ sharply last year.`, o: [`rose`, `raised`], a: 0,
      e: { en: `No object → <i>rise – rose</i>.`, ja: `目的語がないので rise – rose です。` } },
    { q: `The company ___ prices last year.`, o: [`rose`, `raised`], a: 1,
      e: { en: `There's an object (<i>prices</i>) → <i>raise – raised</i>.`, ja: `目的語（prices）があるので raise – raised です。` } },
    { q: `She ___ to me about the money.`, h: { en: `She didn't tell the truth.`, ja: `本当のことを言わなかった。` }, o: [`lay`, `lied`], a: 1,
      e: { en: `<i>Lie – lied – lied</i> = not tell the truth.`, ja: `うそをつくは lie – lied – lied です。` } },
    { q: `I ___ that book last summer.`, h: { en: `the past form of read`, ja: `read の過去形` }, o: [`read`, `readed`], a: 0,
      e: { en: `<i>Read</i> doesn't change its spelling, but V2 is pronounced /red/.`, ja: `read はつづりが変わらず、過去形の発音は /red/ です。` } },
    { q: `I was ___ in Osaka.`, o: [`borne`, `born`], a: 1,
      e: { en: `<x>Be born</x> = come into the world.`, ja: `「生まれる」は be born です。` } },
    { q: `She ___ (study) French for three years at university.`, h: { en: `past simple`, ja: `過去形` }, i: [`studied`],
      e: { en: `Consonant + y → -ied.`, ja: `子音字＋y → -ied です。` } },
    { q: `The picture ___ on the wall for years.`, o: [`hung`, `hanged`], a: 0,
      e: { en: `<i>Hang – hung</i> for objects; <i>hanged</i> is used for execution.`, ja: `ものをつるすのは hung です。hanged は絞首刑に使います。` } },
    { q: `The repair ___ 200 dollars.`, o: [`cost`, `costed`], a: 0,
      e: { en: `<i>Cost – cost – cost</i> when it means "have a price".`, ja: `「値段がかかる」意味では cost – cost – cost です。` } }
  ]
});

GH.topic({
  id: "irregular-verbs", ch: "ref", p: 86,
  t: { en: "Irregular verbs", ja: "不規則動詞" },
  d: { en: "How to learn the 131 irregular verbs, the pattern families, and a link to the full table and typing drill.", ja: "131語の不規則動詞の覚え方、活用のパターン、一覧表と入力ドリルへのリンク" },
  kw: "irregular verb table drill v2 v3 不規則動詞 活用",
  body: [
    { k: "core", en: `Irregular verbs don't follow the <i>-ed</i> rule. Learn each one as a three-part sequence — <b>eat – ate – eaten</b> — and use it straight away in real frames.`,
      ja: `不規則動詞は -ed のルールに従いません。<b>eat – ate – eaten</b> のように3つセットで覚え、すぐに実際の文で使ってみましょう。` },
    { k: "h", en: "Four useful families", ja: "4つのパターン" },
    { k: "table", head: [{ en: "Family", ja: "型" }, "@example", { en: "What to notice", ja: "ポイント" }], rows: [
      [`AAA (V1 = V2 = V3)`, `cut – cut – cut; put – put – put`, { en: "Context and auxiliaries reveal the time.", ja: "時は文脈と助動詞で判断します。" }],
      [`ABB (V2 = V3)`, `buy – bought – bought; feel – felt – felt`, { en: "One changed form does two jobs.", ja: "1つの変化形が2つの役割を果たします。" }],
      [`ABA (V1 = V3)`, `come – came – come; run – ran – run`, { en: "The perfect returns to a base-looking form.", ja: "完了形で原形と同じ形に戻ります。" }],
      [`ABC (all different)`, `eat – ate – eaten; go – went – gone`, { en: "Learn the full three-part sequence.", ja: "3つとも覚えます。" }]
    ] },
    { k: "h", en: "A better memory unit", ja: "覚え方のコツ" },
    { k: "p", en: `Learn <b>eat – ate – eaten</b>, then say: <x>I eat at noon.</x> <x>I ate earlier.</x> <x>I have eaten already.</x> Add <x>I didn't eat.</x> <x>Did you eat?</x> <x>The cake was eaten.</x> This links each form to its grammar and stops you using V2 after <i>did</i> or <i>have</i>.`,
      ja: `<b>eat – ate – eaten</b> を覚えたら、すぐに使ってみましょう：<x>I eat at noon.</x>／<x>I ate earlier.</x>／<x>I have eaten already.</x> さらに <x>I didn't eat.</x>／<x>Did you eat?</x>／<x>The cake was eaten.</x> こうすると、did や have の後に V2 を使う誤りを防げます。` },
    { k: "p", en: `For each new verb, also learn whether it needs an object, a preposition, or a particular complement: <x>depend on</x>, <x>enjoy doing</x>, <x>want to do</x>. An accurate V3 alone can't tell you the sentence pattern.`,
      ja: `新しい動詞は、目的語・前置詞・後ろに続く形もいっしょに覚えましょう：<x>depend on</x>、<x>enjoy doing</x>、<x>want to do</x>。V3 を正しく言えても、文型まではわかりません。` },
    { k: "h", en: "Pronunciation and variants", ja: "発音と変種" },
    { k: "p", en: `<i>Read</i>: /riːd/ → /red/ → /red/. <i>Get</i>: <i>got</i> is standard as V3 in British English, while American English often uses <i>gotten</i> for obtaining or becoming (<i>have got</i> stays common for possession). Some verbs allow two forms: <i>burned / burnt</i>, <i>learned / learnt</i>, <i>dreamed / dreamt</i>.`,
      ja: `<i>read</i>：/riːd/ → /red/ → /red/。<i>get</i>：イギリス英語では V3 は got が標準、アメリカ英語では「得る・〜になる」の意味で gotten をよく使います（所有の have got はどちらでも一般的）。2つの形がある動詞もあります：<i>burned / burnt</i>、<i>learned / learnt</i>、<i>dreamed / dreamt</i>。` },
    { k: "watch", en: `Prefixes usually keep the pattern: <i>write – wrote – written</i> → <i>rewrite – rewrote – rewritten</i>; <i>understand</i> follows <i>stand – stood</i>.`,
      ja: `接頭辞が付いても、たいてい同じパターンです：<i>write – wrote – written</i> → <i>rewrite – rewrote – rewritten</i>。<i>understand</i> は <i>stand – stood</i> と同じ変化をします。` },
    { k: "link", href: "#/verbs", t: { en: "Open the full table of 131 verbs and the typing drill", ja: "131語の一覧表と入力ドリルを開く" } },
    { k: "tip", en: `Drill in threes, out loud, with a rhythm: <i>go – went – gone</i>, <i>see – saw – seen</i>, <i>take – took – taken</i>. Many learners know the meaning but hesitate on V3 — the drill in this app targets exactly that.`,
      ja: `3つ1組で、声に出してリズムよく練習しましょう：<i>go – went – gone</i>、<i>see – saw – seen</i>、<i>take – took – taken</i>。意味はわかっていても V3 が出てこないことが多いので、このアプリのドリルで練習しましょう。` }
  ],
  q: [
    { q: `She has ___ (go) home already.`, i: [`gone`],
      e: { en: `go – went – gone.`, ja: `go – went – gone です。` } },
    { q: `He ___ (take) the train to work yesterday.`, i: [`took`],
      e: { en: `take – took – taken.`, ja: `take – took – taken です。` } },
    { q: `Have you ___ my message?`, o: [`saw`, `seen`, `see`], a: 1,
      e: { en: `Perfect + V3: <i>seen</i>.`, ja: `完了形＋過去分詞：seen です。` } },
    { q: `The window was ___ by the storm.`, o: [`broke`, `broken`, `breaked`], a: 1,
      e: { en: `Passive + V3: <i>broken</i>.`, ja: `受動態＋過去分詞：broken です。` } },
    { q: `I ___ my keys this morning.`, o: [`lost`, `lose`, `losed`], a: 0,
      e: { en: `lose – lost – lost.`, ja: `lose – lost – lost です。` } },
    { q: { en: `Which family does <i>cut – cut – cut</i> belong to?`, ja: `<i>cut – cut – cut</i> はどの型？` },
      o: [`AAA`, `ABB`, `ABC`], a: 0,
      e: { en: `All three forms are the same.`, ja: `3つとも同じ形です。` } },
    { q: { en: `Which family does <i>come – came – come</i> belong to?`, ja: `<i>come – came – come</i> はどの型？` },
      o: [{ en: "ABA (V1 = V3)", ja: "ABA（V1＝V3）" }, { en: "ABB (V2 = V3)", ja: "ABB（V2＝V3）" }, { en: "AAA", ja: "AAA" }], a: 0,
      e: { en: `The past participle returns to the base form.`, ja: `過去分詞が原形と同じ形に戻ります。` } },
    { q: `She has ___ (write) three books.`, i: [`written`],
      e: { en: `write – wrote – written.`, ja: `write – wrote – written です。` } },
    { q: `They ___ the match last night.`, o: [`win`, `won`, `wan`], a: 1,
      e: { en: `win – won – won.`, ja: `win – won – won です。` } },
    { q: { en: `How is <i>read</i> pronounced in <x>I read that book last year</x>?`, ja: `<x>I read that book last year</x> の read の発音は？` },
      o: [{ en: "/riːd/, like 'reed'", ja: "/riːd/（リード）" }, { en: "/red/, like 'red'", ja: "/red/（レッド）" }], a: 1,
      e: { en: `The past form is spelled the same but pronounced /red/.`, ja: `過去形はつづりは同じですが、発音は /red/ です。` } }
  ]
});

GH.topic({
  id: "sentence-building", ch: "ref", p: 97,
  t: { en: "Build and check a complete sentence", ja: "文を組み立てて点検する" },
  d: { en: "A four-step method for building a sentence, a worked expansion, and a final editing checklist.", ja: "文を組み立てる4つのステップ、拡張の実例、最後のチェックリスト" },
  body: [
    { k: "core", en: `Start with <b>meaning</b>, then select a pattern. 1. Choose the message: a fact, question, request, prediction, report, or hypothesis. 2. Choose the participants: who or what is the subject, and does the verb need an object, complement, or preposition? 3. Choose time and viewpoint. 4. Add detail and logical links.`,
      ja: `まず<b>伝えたい内容</b>から始め、それに合う形を選びます。①どんな発言か（事実・質問・依頼・予測・伝聞・仮定）。②参加者は誰か（主語は何か、動詞は目的語・補語・前置詞を必要とするか）。③時と見方。④詳細と論理のつながりを加える。` },
    { k: "h", en: "A worked expansion", ja: "少しずつ広げる例" },
    { k: "ex", items: [
      [`The customer waited.`, { en: `a simple past event: subject + verb`, ja: `過去の出来事：主語＋動詞` }],
      [`The customer was waiting outside.`, { en: `the continuous puts the activity in progress; <i>outside</i> adds place`, ja: `進行形で進行中の様子に。outside で場所を追加` }],
      [`The customer who had lost her phone was waiting outside.`, { en: `a defining relative clause identifies her; <i>had lost</i> looks back from that scene`, ja: `関係詞節で「どの客か」を特定。had lost はその場面より前を表す` }],
      [`The customer who had lost her phone was waiting outside, so I asked her to come in.`, { en: `two independent clauses linked by <i>so</i>; <i>asked</i> selects person + to V1`, ja: `so で2つの独立節をつなぐ。asked は「人＋to 不定詞」をとる` }]
    ] },
    { k: "h", en: "Final editing checklist", ja: "最後のチェックリスト" },
    { k: "table", head: [{ en: "Check", ja: "確認すること" }, { en: "Ask yourself", ja: "自問" }], rows: [
      [{ en: "Clause skeleton", ja: "節の骨組み" }, { en: "Does each finite clause have the subject and verb it needs?", ja: "それぞれの節に、必要な主語と動詞があるか？" }],
      [{ en: "Agreement", ja: "一致" }, { en: "Does the verb match the head of the subject?", ja: "動詞は主語の中心語に合っているか？" }],
      [{ en: "Form after a helper", ja: "助動詞の後の形" }, { en: "did or modal + V1? have + V3? be + V-ing?", ja: "did・助動詞＋原形？ have＋過去分詞？ be＋-ing？" }],
      [{ en: "Time and aspect", ja: "時と相" }, { en: "What is the reference time? What viewpoint am I expressing?", ja: "基準時点はどこか？ どんな見方を表したいか？" }],
      [{ en: "Noun phrase", ja: "名詞句" }, { en: "Does a singular countable noun have a determiner? Is the number right?", ja: "単数の可算名詞に限定詞があるか？ 数は合っているか？" }],
      [{ en: "Verb pattern", ja: "動詞の型" }, { en: "Correct object, preposition, -ing, or infinitive?", ja: "目的語・前置詞・-ing・不定詞は正しいか？" }],
      [{ en: "Clause connection", ja: "節のつなぎ" }, { en: "Is the relationship clear? Are full clauses joined correctly?", ja: "関係は明確か？ 独立節は正しくつながれているか？" }],
      [{ en: "Reference", ja: "指示" }, { en: "Can the reader tell what it, they, this, or which refers to?", ja: "it・they・this・which が何を指すかわかるか？" }],
      [{ en: "Punctuation", ja: "句読点" }, { en: "Correct boundaries, commas, apostrophes, and capitals?", ja: "区切り・カンマ・アポストロフィ・大文字は正しいか？" }]
    ] },
    { k: "h", en: "A practical learning order", ja: "学習の順番" },
    { k: "p", en: `First master <i>be, do, have</i>; V1/V2/V3; subject-verb-object; articles and number. Then compare simple with continuous, past with present perfect, <i>will</i> with <i>going to</i>. Then add modals, the passive, conditionals, relative clauses, reported speech, and verb complements. Use inversion and clefts when you need their emphasis.`,
      ja: `まず be・do・have、V1／V2／V3、主語・動詞・目的語、冠詞と数を固めます。次に単純形と進行形、過去形と現在完了、will と going to を比べます。それから助動詞・受動態・条件文・関係詞節・話法・動詞の後の形へ進み、倒置や強調構文は必要なときに使いましょう。` },
    { k: "note", l: { en: "The central habit", ja: "いちばん大事な習慣" },
      en: `For any two possible forms, ask "What meaning changes?" A grammar rule becomes useful when you can explain a contrast and then use it in a sentence of your own.`,
      ja: `2つの形で迷ったら、「意味はどう変わるか」を考えましょう。違いを説明でき、自分の文で使えるようになって初めて、その文法は役に立つ知識になります。` },
    { k: "tip", en: `Write one sentence a day about your own life, then run it through the checklist. Short and correct beats long and shaky — and the app's mixed practice keeps the patterns fresh.`,
      ja: `自分のことについて1日1文書き、チェックリストで点検してみましょう。長くて不安な文より、短くて正確な文のほうが力になります。アプリの「ランダム演習」で型を繰り返し確認しましょう。` }
  ],
  q: [
    { q: { en: `Which sentence has a complete clause skeleton?`, ja: `節の骨組みが完全な文は？` },
      o: [`The very helpful employee at the counter.`, `The very helpful employee at the counter helped me.`], a: 1,
      e: { en: `A finite verb is needed for a complete sentence.`, ja: `完全な文には定形動詞が必要です。` } },
    { q: `The list of names ___ ready.`, o: [`is`, `are`], a: 0,
      e: { en: `Agreement follows the head noun <i>list</i>.`, ja: `中心語 list に一致させます。` } },
    { q: `Did you ___ the email?`, o: [`sent`, `send`], a: 1,
      e: { en: `<i>Did</i> + V1.`, ja: `did＋原形です。` } },
    { q: `She has ___ the report.`, o: [`wrote`, `written`], a: 1,
      e: { en: `Perfect <i>have</i> + V3.`, ja: `完了の have＋過去分詞です。` } },
    { q: `I bought ___ phone yesterday.`, o: [`a`, `—`], a: 0,
      e: { en: `A singular countable noun needs a determiner.`, ja: `単数の可算名詞には限定詞が必要です。` } },
    { q: `I enjoy ___ to music.`, o: [`listening`, `to listen`], a: 0,
      e: { en: `<i>Enjoy</i> + -ing.`, ja: `enjoy＋-ing です。` } },
    { q: `I checked the account ___ the customer asked me to.`, o: [`because`, `so that`], a: 0,
      e: { en: `A reason → <i>because</i>.`, ja: `理由なので because です。` } },
    { q: { en: `Which sentence joins the clauses correctly?`, ja: `節が正しくつながれている文は？` },
      o: [`The system failed, we restarted it.`, `The system failed, so we restarted it.`], a: 1,
      e: { en: `Use a conjunction (or a semicolon or full stop).`, ja: `接続詞（またはセミコロン・ピリオド）でつなぎます。` } },
    { q: { en: `Which sentence keeps the reference clear?`, ja: `指すものが明確な文は？` },
      o: [`When Mei spoke to Hana, she looked worried.`, `When Mei spoke to Hana, Hana looked worried.`], a: 1,
      e: { en: `Repeat the name when <i>she</i> could refer to either person.`, ja: `she がどちらを指すかわからないときは、名前を繰り返します。` } },
    { w: [`The`, `customer`, `who`, `had`, `lost`, `her`, `phone`, `was`, `waiting`, `outside.`],
      e: { en: `Head noun + relative clause as the subject, then the verb phrase, then the place.`, ja: `中心の名詞＋関係詞節で主語を作り、動詞句、場所の順に並べます。` } }
  ]
});
