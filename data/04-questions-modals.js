/* 04 Questions & modals (handbook pp. 49–55) */

GH.topic({
  id: "questions", ch: "qm", p: 49,
  t: { en: "Questions: yes/no, wh-, subject/object", ja: "疑問文" },
  d: { en: "Yes/no questions, wh-questions, subject versus object questions, and short answers.", ja: "Yes/No 疑問文、wh 疑問文、主語を尋ねる疑問文と目的語を尋ねる疑問文、短い答え方" },
  body: [
    { k: "core", en: `If the clause has an auxiliary, a modal, or main <i>be</i>, move the <b>first one</b> before the subject. If there's only an ordinary main verb, add <i>do / does / did</i>.`,
      ja: `節に助動詞・法助動詞・be動詞があれば、<b>最初のもの</b>を主語の前に出します。一般動詞だけのときは do / does / did を加えます。` },
    { k: "table", head: [{ en: "Statement", ja: "平叙文" }, { en: "Question", ja: "疑問文" }], rows: [
      [`<x>She works here.</x>`, `<x>Does she work here?</x>`],
      [`<x>She worked yesterday.</x>`, `<x>Did she work yesterday?</x>`],
      [`<x>She is working.</x>`, `<x>Is she working?</x>`],
      [`<x>She has been working.</x>`, `<x>Has she been working?</x>`],
      [`<x>She will have finished.</x>`, `<x>Will she have finished?</x>`],
      [`<x>You can help.</x>`, `<x>Can you help?</x>`]
    ] },
    { k: "sv", t: { en: "How a question is built", ja: "疑問文の作り方" }, rows: [
      { l: { en: "Statement with an auxiliary", ja: "助動詞がある平叙文" }, p: [["S", `She`], ["A", `is`], ["V", `working.`]] },
      { arrow: { en: "Move the first auxiliary (or be) in front of the subject.", ja: "最初の助動詞（または be）を主語の前に出す。" } },
      { p: [["A", `Is`], ["S", `she`], ["V", `working?`]] },
      { l: { en: "Statement with no auxiliary", ja: "助動詞がない平叙文" }, p: [["S", `She`], ["V", `works`, { en: "verb + -s", ja: "動詞＋-s" }], ["M", `here.`]] },
      { arrow: { en: "Add does; the main verb goes back to V1.", ja: "does を加え、本動詞は原形に戻す。" } },
      { p: [["A", `Does`], ["S", `she`], ["V", `work`, { en: "V1", ja: "原形" }], ["M", `here?`]] },
      { l: { en: "Who is the subject: no do", ja: "who が主語：do は不要" }, p: [["S", `Who`], ["V", `called`], ["O", `Mei?`]] },
      { l: { en: "Who is the object: did + subject + V1", ja: "who が目的語：did＋主語＋原形" }, p: [["O", `Who`], ["A", `did`], ["S", `Mei`], ["V", `call?`]] }
    ] },
    { k: "h", en: "Wh-questions", ja: "wh 疑問文" },
    { k: "p", en: `Put the question phrase before the yes/no structure: <x>Where do you live?</x> <x>Why has she left?</x> <x>How long have you been waiting?</x> <i>Who</i> = person; <i>what</i> = thing or content; <i>which</i> = a choice within a set; <i>where</i> = place; <i>when</i> = time; <i>why</i> = reason; <i>how</i> = manner or condition.`,
      ja: `疑問詞を Yes/No 疑問文の形の前に置きます：<x>Where do you live?</x>／<x>Why has she left?</x>／<x>How long have you been waiting?</x> <i>who</i>＝人、<i>what</i>＝もの・内容、<i>which</i>＝限られた中からの選択、<i>where</i>＝場所、<i>when</i>＝時、<i>why</i>＝理由、<i>how</i>＝方法・状態。` },
    { k: "p", en: `<i>How many</i> + plural countable; <i>how much</i> + uncountable. <i>How often</i> = frequency; <i>how long</i> = duration or length; <i>how far</i> = distance; <i>how soon</i> = time until something happens.`,
      ja: `<i>how many</i>＋可算名詞の複数形、<i>how much</i>＋不可算名詞。<i>how often</i>＝頻度、<i>how long</i>＝期間・長さ、<i>how far</i>＝距離、<i>how soon</i>＝あとどのくらいで。` },
    { k: "h", en: "Subject versus object questions", ja: "主語を尋ねる疑問文と目的語を尋ねる疑問文" },
    { k: "ex", items: [
      [`<b>Who called</b> Mei?`, { en: `who = subject (somebody called Mei); no do-support`, ja: `who が主語（誰かが Mei に電話した）。do は不要` }],
      [`<b>Who did</b> Mei <b>call</b>?`, { en: `who = object (Mei called somebody); did + V1`, ja: `who が目的語（Mei が誰かに電話した）。did＋原形` }],
      [`<b>Which phone works</b>? / <b>Which phone do</b> you <b>want</b>?`, { en: `subject / object`, ja: `主語／目的語` }]
    ] },
    { k: "p", en: `Negative and emphatic subject questions can still use <i>do</i>: <x>Who doesn't want coffee?</x> <x>Who did call you, then?</x>`,
      ja: `否定や強調の場合は、主語を尋ねる疑問文でも do を使うことがあります：<x>Who doesn't want coffee?</x>／<x>Who did call you, then?</x>` },
    { k: "h", en: "Short answers", ja: "短い答え方" },
    { k: "p", en: `Repeat the auxiliary, not the main verb: <x>Do you work here? — Yes, I do.</x> <x>Have you finished? — No, I haven't.</x> Don't end with a contracted positive: <x>Yes, I am</x>, not <s>Yes, I'm</s>. Negative contractions are fine: <x>No, I'm not.</x>`,
      ja: `本動詞ではなく助動詞を繰り返します：<x>Do you work here? — Yes, I do.</x>／<x>Have you finished? — No, I haven't.</x> 肯定の短縮形で終えないこと：<s>Yes, I'm</s> ではなく <x>Yes, I am.</x> 否定の短縮形は問題ありません：<x>No, I'm not.</x>` },
    { k: "watch", en: `<x>What does it mean?</x>, not <s>What means it?</s> For a neutral subject question: <x>What happened?</x>, not <s>What did happen?</s> <x>How is she?</x> = her condition; <x>What is she like?</x> = a description; <x>What does she like?</x> = her preferences.`,
      ja: `<s>What means it?</s> ではなく <x>What does it mean?</x>。中立的に主語を尋ねるなら <x>What happened?</x>（<s>What did happen?</s> ではない）。<x>How is she?</x>＝元気か（体調）、<x>What is she like?</x>＝どんな人か、<x>What does she like?</x>＝何が好きか。` },
    { k: "tip", en: `Japanese questions just add か, so learners forget to move the auxiliary. <s>You are ready?</s> with a rising tone is only for surprise; the normal question is <x>Are you ready?</x>`,
      ja: `日本語は文末に「か」を付けるだけで疑問文になるので、助動詞を前に出すのを忘れがちです。<s>You are ready?</s>（上昇調）は驚いて確認するときにしか使いません。普通の疑問文は <x>Are you ready?</x> です。` }
  ],
  q: [
    { q: `___ she work on Saturdays?`, o: [`Do`, `Does`, `Is`], a: 1,
      e: { en: `Third-person singular with an ordinary verb → <i>Does</i>.`, ja: `3人称単数の一般動詞なので Does です。` } },
    { q: `___ they finished yet?`, o: [`Did`, `Have`, `Do`], a: 1,
      e: { en: `Present perfect → move <i>have</i>.`, ja: `現在完了なので have を前に出します。` } },
    { q: `Where ___?`, o: [`you live`, `do you live`, `live you`], a: 1,
      e: { en: `Wh-word + <i>do</i> + subject + V1.`, ja: `疑問詞＋do＋主語＋原形です。` } },
    { q: `Who ___ the window?`, h: { en: `Someone broke it. Who?`, ja: `誰かが割った。誰？` }, o: [`did break`, `broke`, `breaked`], a: 1,
      e: { en: `<i>Who</i> is the subject → no <i>did</i>.`, ja: `who が主語なので did は不要です。` } },
    { q: `Who ___ at the party?`, h: { en: `You saw someone. Who?`, ja: `あなたが誰かを見かけた。誰を？` }, o: [`did you see`, `you saw`, `saw you`], a: 0,
      e: { en: `<i>Who</i> is the object → <i>did you see</i>.`, ja: `who が目的語なので did you see です。` } },
    { q: `What ___ this word mean?`, o: [`is`, `does`, `do`], a: 1,
      e: { en: `<i>What does it mean?</i> — not <i>What means it?</i>`, ja: `What does it mean? が正しい形です。` } },
    { q: `How ___ money do you need?`, o: [`many`, `much`], a: 1,
      e: { en: `<i>Money</i> is uncountable → <i>how much</i>.`, ja: `money は不可算なので how much です。` } },
    { q: `How ___ do you visit your parents?`, h: { en: `asking about frequency`, ja: `頻度を尋ねる` }, o: [`long`, `often`, `far`], a: 1,
      e: { en: `Frequency → <i>how often</i>.`, ja: `頻度は how often です。` } },
    { q: `Are you tired? — Yes, ___.`, o: [`I'm`, `I am`, `I do`], a: 1,
      e: { en: `Don't end with a contracted positive auxiliary.`, ja: `肯定の短縮形で文を終えません。` } },
    { q: { en: `You want to know about her personality. What do you ask?`, ja: `彼女の人柄を知りたい。どう尋ねる？` }, o: [`How is she?`, `What is she like?`, `What does she like?`], a: 1,
      e: { en: `<i>What is she like?</i> asks for a description.`, ja: `What is she like? で人柄や様子を尋ねます。` } }
  ]
});

GH.topic({
  id: "indirect-questions-tags", ch: "qm", p: 50,
  t: { en: "Indirect questions and question tags", ja: "間接疑問文と付加疑問文" },
  d: { en: "Statement word order inside embedded questions, if vs whether, and how to form and answer question tags.", ja: "間接疑問文は平叙文の語順、if と whether、付加疑問文の作り方と答え方" },
  body: [
    { k: "core", en: `An <b>embedded question</b> sits inside another clause and uses <b>statement word order</b>: <x>Could you tell me where the station is?</x> — not <s>where is the station</s>.`,
      ja: `<b>間接疑問文</b>は別の節の中に組み込まれた疑問で、<b>平叙文の語順</b>になります：<x>Could you tell me where the station is?</x>（<s>where is the station</s> ではない）。` },
    { k: "table", head: [{ en: "Direct question", ja: "直接疑問文" }, { en: "Embedded version", ja: "間接疑問文" }], rows: [
      [`<x>Where does she live?</x>`, `<x>Do you know where she lives?</x>`],
      [`<x>Why did he leave?</x>`, `<x>I wonder why he left.</x>`],
      [`<x>Is it available?</x>`, `<x>Could you check if/whether it is available?</x>`],
      [`<x>What time will it arrive?</x>`, `<x>Do you know what time it will arrive?</x>`]
    ] },
    { k: "sv", t: { en: "Inside another sentence, the question turns back into a statement", ja: "文の中に入ると、疑問文は平叙文の語順に戻る" }, rows: [
      { l: { en: "Direct question", ja: "直接疑問文" }, p: [["X", `Where`, { en: "question word", ja: "疑問詞" }], ["V", `is`], ["S", `the station?`]] },
      { arrow: { en: "After Could you tell me…: question word + subject + verb.", ja: "Could you tell me… の後は：疑問詞＋主語＋動詞。" } },
      { l: { en: "Embedded question", ja: "間接疑問文" }, p: [["M", `Could you tell me`], ["X", `where`, { en: "question word", ja: "疑問詞" }], ["S", `the station`], ["V", `is?`]] },
      { l: { en: "No do inside", ja: "中に do は入れない" }, p: [["M", `Do you know`], ["X", `where`], ["S", `she`], ["V", `lives?`, { en: "not does she live", ja: "does she live にしない" }]] }
    ] },
    { k: "p", en: `Remove <i>do</i>-support inside the embedded clause. The whole sentence takes a question mark only if it is a question (<x>Can you tell me…?</x>); a statement such as <x>I wonder where she is.</x> takes a full stop.`,
      ja: `間接疑問の中では do を使いません。文全体が疑問文なら「?」（<x>Can you tell me…?</x>）、平叙文なら「.」を付けます（<x>I wonder where she is.</x>）。` },
    { k: "h", en: "If or whether?", ja: "if と whether" },
    { k: "p", en: `Both work for most yes/no questions: <x>I don't know if/whether it works.</x> Use <i>whether</i> before <i>to</i> + V1 (<x>whether to go</x>), after a preposition (<x>worried about whether…</x>), and right before <i>or not</i> (<x>whether or not it works</x>).`,
      ja: `多くの場合どちらも使えます：<x>I don't know if/whether it works.</x> ただし、to＋原形の前（<x>whether to go</x>）、前置詞の後（<x>worried about whether…</x>）、or not の直前（<x>whether or not it works</x>）では whether を使います。` },
    { k: "h", en: "Question tags", ja: "付加疑問文" },
    { k: "p", en: `Add a short auxiliary + pronoun, usually with the opposite polarity: <x>You're ready, aren't you?</x> <x>She doesn't drive, does she?</x> <x>They left, didn't they?</x> Match the auxiliary, tense, and subject.`,
      ja: `文の後に短い「助動詞＋代名詞」を付けます。通常は肯定と否定を逆にします：<x>You're ready, aren't you?</x>／<x>She doesn't drive, does she?</x>／<x>They left, didn't they?</x> 助動詞・時制・主語を合わせましょう。` },
    { k: "ex", items: [
      [`I'm late, <b>aren't I</b>?`, { en: `the usual irregular tag`, ja: `よく使う不規則な形` }],
      [`Let's start, <b>shall we</b>?`, { en: `after let's`, ja: `let's の後` }],
      [`Close the door, <b>will you</b>?`, { en: `after an imperative`, ja: `命令文の後` }],
      [`Nobody called, <b>did they</b>?`, { en: `nobody is negative → positive tag`, ja: `nobody は否定の意味 → 肯定の付加疑問` }],
      [`Everyone is ready, <b>aren't they</b>?`, { en: `everyone → they`, ja: `everyone は they で受ける` }]
    ] },
    { k: "p", en: `A falling tone seeks agreement; a rising tone is a real check. Same-polarity tags show interest, surprise, or challenge: <x>So you're leaving, are you?</x>`,
      ja: `下降調は同意を求め、上昇調は本当に確認したいときに使います。肯定＋肯定の付加疑問は、興味・驚き・挑戦を表します：<x>So you're leaving, are you?</x>` },
    { k: "watch", en: `Answer the real fact, especially after negative questions: <x>Didn't you pay? — Yes, I did.</x> = I paid. <x>No, I didn't.</x> = I didn't pay. When in doubt, add the verb.`,
      ja: `特に否定疑問文には、事実に合わせて答えます：<x>Didn't you pay? — Yes, I did.</x>＝払った。<x>No, I didn't.</x>＝払っていない。迷ったら動詞まで言いましょう。` },
    { k: "tip", en: `Japanese answers agree with the question (払わなかったの？—はい、払いませんでした). English answers follow the fact: if you paid, say <i>Yes</i>; if not, <i>No</i> — whatever form the question takes.`,
      ja: `日本語は質問に合わせて答えます（払わなかったの？—はい、払いませんでした）。英語は事実に合わせます。払ったなら Yes、払っていないなら No。質問が否定形でも同じです。` }
  ],
  q: [
    { q: `Could you tell me where ___?`, o: [`is the station`, `the station is`, `does the station`], a: 1,
      e: { en: `Embedded questions use statement order.`, ja: `間接疑問文は平叙文の語順です。` } },
    { q: `Do you know what time ___?`, o: [`does the shop open`, `the shop opens`, `opens the shop`], a: 1,
      e: { en: `No <i>do</i>-support inside an embedded question.`, ja: `間接疑問の中では do を使いません。` } },
    { q: `I wonder why ___.`, o: [`did he leave`, `he left`, `he did leave?`], a: 1,
      e: { en: `Statement order — and the whole sentence is a statement, so it ends with a full stop.`, ja: `平叙文の語順です。文全体も平叙文なのでピリオドで終わります。` } },
    { q: `I can't decide ___ to go or not.`, o: [`if`, `whether`], a: 1,
      e: { en: `Before <i>to</i> + V1, use <i>whether</i>.`, ja: `to＋原形の前では whether を使います。` } },
    { q: `You're coming tomorrow, ___?`, o: [`are you`, `aren't you`, `don't you`], a: 1,
      e: { en: `A positive statement takes a negative tag with <i>be</i>.`, ja: `肯定文なので be の否定の付加疑問です。` } },
    { q: `She doesn't eat meat, ___?`, o: [`does she`, `doesn't she`, `is she`], a: 0,
      e: { en: `A negative statement takes a positive tag.`, ja: `否定文なので肯定の付加疑問です。` } },
    { q: `I'm late, ___?`, o: [`amn't I`, `aren't I`, `am not I`], a: 1,
      e: { en: `The usual tag for <i>I'm</i> is <i>aren't I</i>.`, ja: `I'm の付加疑問は aren't I です。` } },
    { q: `Let's take a break, ___?`, o: [`will we`, `shall we`, `don't we`], a: 1,
      e: { en: `After <i>let's</i>, use <i>shall we</i>.`, ja: `let's の後は shall we です。` } },
    { q: `Nobody called, ___?`, o: [`did they`, `didn't they`, `did nobody`], a: 0,
      e: { en: `<i>Nobody</i> is negative, so the tag is positive, with <i>they</i>.`, ja: `nobody は否定の意味なので肯定の付加疑問。代名詞は they です。` } },
    { q: `Didn't you pay? — ___`, h: { en: `You DID pay.`, ja: `実際には払った。` }, o: [`Yes, I did.`, `No, I did.`], a: 0,
      e: { en: `Answer the fact: you paid → <i>Yes, I did</i>.`, ja: `事実に合わせます。払ったので Yes, I did です。` } }
  ]
});

GH.topic({
  id: "negatives", ch: "qm", p: 51,
  t: { en: "Negatives and negative meaning", ja: "否定文と否定の意味" },
  d: { en: "Where not goes, no and none, avoiding double negatives, near-negatives, scope, and agreement responses.", ja: "not の位置、no と none、二重否定を避ける、準否定語、否定の範囲、同意の応答" },
  body: [
    { k: "core", en: `Put <i>not</i> after the <b>first helper</b>: <x>She is not ready.</x> <x>She has not finished.</x> <x>She cannot come.</x> With an ordinary verb and no helper, use <i>do / does / did not</i> + V1: <x>I don't know.</x>`,
      ja: `not は<b>最初の助動詞</b>の後に置きます（<x>She is not ready.</x>／<x>She has not finished.</x>／<x>She cannot come.</x>）。助動詞のない一般動詞は do / does / did not＋原形：<x>I don't know.</x>` },
    { k: "p", en: `<i>Not</i> negates a clause or phrase. <i>No</i> goes before a noun: <x>no time</x>, <x>no customers</x>. <i>None</i> stands alone: <x>None are available.</x> <x>None of the information is useful.</x>`,
      ja: `<i>not</i> は節や句を否定し、<i>no</i> は名詞の前に置きます（<x>no time</x>、<x>no customers</x>）。<i>none</i> は単独で使います（<x>None are available.</x>／<x>None of the information is useful.</x>）。` },
    { k: "h", en: "No one, nothing, never, hardly", ja: "no one・nothing・never・hardly" },
    { k: "p", en: `<x>Nobody called.</x> / <x>I didn't see anybody.</x> are standard. Avoid double negatives in standard English: <s>I didn't see nobody.</s> <i>Never</i> = at no time; <i>hardly / scarcely / barely</i> = almost not; <i>rarely / seldom</i> = not often. They are already negative: <x>I hardly know him</x>, not <s>I don't hardly know him</s>.`,
      ja: `<x>Nobody called.</x>／<x>I didn't see anybody.</x> が標準的な形です。標準英語では二重否定を避けます（<s>I didn't see nobody.</s>）。<i>never</i>＝一度も〜ない、<i>hardly / scarcely / barely</i>＝ほとんど〜ない、<i>rarely / seldom</i>＝めったに〜ない。これらはすでに否定の意味を含むので、<s>I don't hardly know him</s> ではなく <x>I hardly know him.</x> です。` },
    { k: "h", en: "Scope changes the message", ja: "否定の範囲で意味が変わる" },
    { k: "ex", items: [
      [`<b>Not everyone</b> agreed.`, { en: `some did not (partial negation)`, ja: `全員が賛成したわけではない（部分否定）` }],
      [`<b>No one</b> agreed.`, { en: `zero people agreed`, ja: `誰も賛成しなかった（全体否定）` }],
      [`I <b>didn't promise</b> to call.`, { en: `there was no promise`, ja: `電話すると約束はしていない` }],
      [`I promised <b>not to call</b>.`, { en: `the promise was to avoid calling`, ja: `電話しないと約束した` }]
    ] },
    { k: "p", en: `<x>I don't think it's correct</x> usually means "I think it isn't correct", said politely.`,
      ja: `<x>I don't think it's correct.</x> は通常、「正しくないと思う」をやわらかく言う表現です。` },
    { k: "h", en: "Negative infinitives and -ing forms", ja: "不定詞・-ing 形の否定" },
    { k: "p", en: `<i>Not</i> usually comes before the non-finite verb: <x>I decided not to go.</x> <x>Thank you for not interrupting.</x> <x>Not knowing the answer, I asked for help.</x>`,
      ja: `not は通常、不定詞や -ing 形の前に置きます：<x>I decided not to go.</x>／<x>Thank you for not interrupting.</x>／<x>Not knowing the answer, I asked for help.</x>` },
    { k: "h", en: "Negative questions and agreement", ja: "否定疑問文と同意の応答" },
    { k: "p", en: `<x>Haven't you finished yet?</x> often shows surprise or impatience; <x>Have you finished yet?</x> is more neutral. <x>Why don't we leave?</x> is a suggestion. Agreeing: <x>I'm tired. — So am I.</x> / <x>Me too.</x> <x>I haven't finished. — Neither have I.</x> / <x>Me neither.</x>`,
      ja: `<x>Haven't you finished yet?</x> は驚きやいらだちを含むことが多く、<x>Have you finished yet?</x> のほうが中立的です。<x>Why don't we leave?</x> は提案です。同意の応答：<x>I'm tired. — So am I.</x>／<x>Me too.</x>、<x>I haven't finished. — Neither have I.</x>／<x>Me neither.</x>` },
    { k: "watch", en: `<i>Mustn't</i> = prohibited; <i>don't have to</i> = not necessary. <i>Not yet</i> = it hasn't happened so far (maybe later); <i>no longer</i> = it was true before, but not now.`,
      ja: `<i>mustn't</i>＝禁止、<i>don't have to</i>＝必要ない。<i>not yet</i>＝まだ〜ない（これからかも）、<i>no longer</i>＝もはや〜ない（以前はそうだった）。` },
    { k: "tip", en: `正しくないと思う is naturally <x>I don't think it's correct</x> — English prefers to negate <i>think</i> rather than say <i>I think it isn't correct</i>.`,
      ja: `「正しくないと思う」は、英語では <x>I don't think it's correct.</x> と think を否定するのが自然です。<i>I think it isn't correct</i> より好まれます。` }
  ],
  q: [
    { q: `She ___ finished yet.`, o: [`has not`, `doesn't have`, `not has`], a: 0,
      e: { en: `<i>Not</i> goes after the first helper.`, ja: `最初の助動詞の後に not を置きます。` } },
    { q: `I ___ the answer.`, o: [`don't know`, `not know`, `know not`], a: 0,
      e: { en: `An ordinary verb → <i>don't</i> + V1.`, ja: `一般動詞なので don't＋原形です。` } },
    { q: `I didn't see ___.`, o: [`nobody`, `anybody`], a: 1,
      e: { en: `Avoid double negatives: <i>didn't … anybody</i>.`, ja: `二重否定を避けて didn't … anybody とします。` } },
    { q: `I ___ know him.`, h: { en: `almost not`, ja: `ほとんど知らない` }, o: [`don't hardly`, `hardly`], a: 1,
      e: { en: `<i>Hardly</i> is already negative.`, ja: `hardly はそれ自体が否定の意味です。` } },
    { q: { en: `Which sentence means some people did not agree?`, ja: `「賛成しなかった人もいる」という意味の文は？` }, o: [`Not everyone agreed.`, `No one agreed.`], a: 0,
      e: { en: `<i>Not everyone</i> = partial negation.`, ja: `not everyone は部分否定です。` } },
    { q: `I decided ___ to the party.`, o: [`not to go`, `to not going`, `don't go`], a: 0,
      e: { en: `<i>Not</i> before the infinitive.`, ja: `不定詞の前に not を置きます。` } },
    { q: `I'm tired. — So ___ I.`, o: [`do`, `am`, `have`], a: 1,
      e: { en: `Match the auxiliary: <i>am</i> → <i>So am I</i>.`, ja: `助動詞を合わせます：am → So am I。` } },
    { q: `I haven't finished. — Neither ___ I.`, o: [`do`, `have`, `am`], a: 1,
      e: { en: `Match the auxiliary <i>have</i>.`, ja: `助動詞 have に合わせます。` } },
    { q: `You ___ pay; it's free.`, o: [`mustn't`, `don't have to`], a: 1,
      e: { en: `Not necessary → <i>don't have to</i>.`, ja: `必要ないので don't have to です。` } },
    { q: `___ customers came today.`, h: { en: `zero customers`, ja: `客はゼロ` }, o: [`No`, `None`, `Not`], a: 0,
      e: { en: `<i>No</i> + noun.`, ja: `no＋名詞です。` } }
  ]
});

GH.topic({
  id: "imperatives", ch: "qm", p: 52,
  t: { en: "Imperatives, requests, exclamations", ja: "命令文・依頼・感嘆文" },
  d: { en: "Imperatives and let's, a scale of request politeness, offers and suggestions, and what/how exclamations.", ja: "命令文と let's、依頼のていねいさの段階、申し出と提案、what／how の感嘆文" },
  body: [
    { k: "core", en: `An imperative uses V1, usually with no stated subject: <x>Wait here.</x> <x>Please sign this form.</x> <x>Be careful.</x> The understood subject is <i>you</i>. Negative: <x>Don't wait outside.</x> <x>Don't be late.</x>`,
      ja: `命令文は原形を使い、通常主語を言いません：<x>Wait here.</x>／<x>Please sign this form.</x>／<x>Be careful.</x> 省略された主語は you です。否定は <x>Don't wait outside.</x>／<x>Don't be late.</x>` },
    { k: "p", en: `<i>Let's</i> + V1 includes the speaker: <x>Let's check the number.</x> Negative: <x>Let's not rush.</x> <x>Let me check</x> asks for space to act; <x>Let him speak</x> tells someone to allow him.`,
      ja: `<i>let's</i>＋原形は話し手を含みます（<x>Let's check the number.</x>）。否定は <x>Let's not rush.</x>。<x>Let me check.</x> は「確認させて」、<x>Let him speak.</x> は「彼に話させて」です。` },
    { k: "h", en: "Requests on a scale of directness", ja: "依頼の直接さの段階" },
    { k: "scale", t: { en: "From direct to indirect", ja: "直接的 → 遠回し" }, lo: { en: "direct", ja: "直接的" }, hi: { en: "indirect, polite", ja: "遠回し・ていねい" }, items: [
      [`Show me your ID.`, 8, { en: "an instruction; can sound abrupt", ja: "指示（ぶっきらぼうに聞こえることも）" }],
      [`Please show me your ID.`, 28, { en: "polite words, still an instruction", ja: "ていねいだが指示" }],
      [`Can you show me your ID, please?`, 52, { en: "an everyday request", ja: "日常的な依頼" }],
      [`Could you show me your ID, please?`, 74, { en: "more tentative and polite", ja: "より控えめでていねい" }],
      [`Would you mind showing me your ID?`, 94, { en: "an indirect request: mind + V-ing", ja: "遠回しな依頼：mind＋-ing" }]
    ] },
    { k: "p", en: `<i>Could you…?</i> here is a present request, not past ability. <x>Would you mind if I checked…?</x> asks permission for my own action. The answer <i>No, go ahead</i> means "no objection"; <x>Of course, here it is</x> can be clearer.`,
      ja: `ここでの <i>Could you…?</i> は今の依頼で、過去の能力ではありません。<x>Would you mind if I checked…?</x> は自分の行動への許可を求める表現です。<i>No, go ahead.</i>（いいですよ）は「気にしない」という意味で、<x>Of course, here it is.</x> のほうがわかりやすいこともあります。` },
    { k: "h", en: "Offers, suggestions, invitations", ja: "申し出・提案・勧誘" },
    { k: "p", en: `Offers: <x>Shall I check?</x> <x>Can I help?</x> <x>Would you like some help?</x> Suggestions: <x>Let's go.</x> <x>Why don't we go?</x> <x>How about going?</x> <x>We could go.</x> An invitation: <x>Would you like to join us?</x> Compare <x>Do you like coffee?</x> (general preference) with <x>Would you like some coffee?</x> (an offer now).`,
      ja: `申し出：<x>Shall I check?</x>／<x>Can I help?</x>／<x>Would you like some help?</x> 提案：<x>Let's go.</x>／<x>Why don't we go?</x>／<x>How about going?</x>／<x>We could go.</x> 勧誘：<x>Would you like to join us?</x> <x>Do you like coffee?</x>（普段の好み）と <x>Would you like some coffee?</x>（今の勧め）を比べましょう。` },
    { k: "h", en: "Exclamations", ja: "感嘆文" },
    { k: "ex", items: [
      [`<b>What a</b> helpful person!`, { en: `What + a/an + adjective + singular noun`, ja: `What＋a/an＋形容詞＋単数名詞` }],
      [`<b>What</b> useful advice! <b>What</b> lovely photos!`, { en: `What + adjective + uncountable or plural noun (no a/an)`, ja: `What＋形容詞＋不可算・複数名詞（a/an なし）` }],
      [`<b>How</b> helpful she is! <b>How</b> quickly he speaks!`, { en: `How + adjective/adverb + subject + verb`, ja: `How＋形容詞・副詞＋主語＋動詞` }]
    ] },
    { k: "watch", en: `<i>Please</i> doesn't erase an impatient tone. <i>You must…</i> can sound like an imposed obligation; if you're offering a choice, use <x>You can…</x> or <x>Would you like to…?</x>`,
      ja: `please を付けても、いらだった口調は消えません。<i>You must…</i> は義務を押しつけるように聞こえることがあります。選択肢を示すなら <x>You can…</x> や <x>Would you like to…?</x> を使いましょう。` },
    { k: "tip", en: `〜してください is often translated as <i>Please</i> + V1, but that is still a command. For a real request, use <x>Could you…?</x>: 窓を開けてください → <x>Could you open the window?</x>`,
      ja: `「〜してください」を Please＋原形 と訳しがちですが、これはていねいでも命令です。お願いするなら <x>Could you…?</x> を使いましょう。「窓を開けてください」→ <x>Could you open the window?</x>` }
  ],
  q: [
    { q: `___ late tomorrow.`, o: [`Don't be`, `Not be`, `Don't`], a: 0,
      e: { en: `The negative imperative of <i>be</i> is <i>Don't be</i>.`, ja: `be の否定命令は Don't be です。` } },
    { q: `Let's ___ a taxi.`, o: [`to take`, `take`, `taking`], a: 1,
      e: { en: `<i>Let's</i> + V1.`, ja: `let's＋原形です。` } },
    { q: `Let's ___ rush.`, o: [`don't`, `not`, `no`], a: 1,
      e: { en: `The negative is <i>Let's not</i> + V1.`, ja: `否定は Let's not＋原形です。` } },
    { q: `Would you mind ___ the door?`, o: [`to close`, `closing`, `close`], a: 1,
      e: { en: `<i>Mind</i> + V-ing.`, ja: `mind＋-ing です。` } },
    { q: { en: `Which is the most polite request?`, ja: `最もていねいな依頼は？` }, o: [`Show me your ID.`, `Can you show me your ID?`, `Could you show me your ID, please?`], a: 2,
      e: { en: `<i>Could you…, please?</i> is the most tentative and polite.`, ja: `Could you…, please? が最も控えめでていねいです。` } },
    { q: `___ I carry that for you?`, h: { en: `You are making an offer.`, ja: `申し出をしている。` }, o: [`Shall`, `Do`, `Am`], a: 0,
      e: { en: `<i>Shall I…?</i> makes an offer.`, ja: `Shall I…? は申し出です。` } },
    { q: `___ some coffee?`, h: { en: `You're offering coffee right now.`, ja: `今コーヒーを勧めている。` }, o: [`Do you like`, `Would you like`], a: 1,
      e: { en: `An offer now → <i>Would you like…?</i>`, ja: `今の勧めには Would you like…? を使います。` } },
    { q: `___ a beautiful view!`, o: [`How`, `What`, `So`], a: 1,
      e: { en: `<i>What a</i> + adjective + noun.`, ja: `What a＋形容詞＋名詞です。` } },
    { q: `___ quickly she learns!`, o: [`What`, `How`], a: 1,
      e: { en: `<i>How</i> + adverb + subject + verb.`, ja: `How＋副詞＋主語＋動詞です。` } },
    { q: `___ useful advice!`, o: [`What a`, `What`, `How`], a: 1,
      e: { en: `<i>Advice</i> is uncountable, so no <i>a</i>.`, ja: `advice は不可算なので a を付けません。` } }
  ]
});

GH.topic({
  id: "modals-system", ch: "qm", p: 53,
  t: { en: "Modal verbs: the system", ja: "助動詞の全体像" },
  d: { en: "What modals express, their form rules, one form with several meanings, and modals with continuous, perfect and passive.", ja: "助動詞が表す意味、形のルール、1つの形の複数の意味、進行形・完了形・受動態との組み合わせ" },
  body: [
    { k: "core", en: `Core modals: <i>can, could, may, might, will, would, shall, should, must</i>. They take V1, add no -s, and make questions and negatives without <i>do</i>. They express ability, permission, possibility, obligation, or inference.`,
      ja: `主な法助動詞：<i>can, could, may, might, will, would, shall, should, must</i>。後ろに原形をとり、-s を付けず、疑問文・否定文に do を使いません。能力・許可・可能性・義務・推量などを表します。` },
    { k: "table", head: [{ en: "Function", ja: "働き" }, { en: "Common forms", ja: "主な形" }, "@example"], rows: [
      [{ en: "Ability", ja: "能力" }, `can, could, be able to`, `<x>I can explain it.</x>`],
      [{ en: "Permission", ja: "許可" }, `can, may, could (requests)`, `<x>May I sit here?</x>`],
      [{ en: "Possibility", ja: "可能性" }, `may, might, could`, `<x>It might rain.</x>`],
      [{ en: "Advice", ja: "助言" }, `should, ought to`, `<x>You should check it.</x>`],
      [{ en: "Necessity", ja: "必要・義務" }, `must, have to, need to`, `<x>You must show ID.</x>`],
      [{ en: "Prohibition", ja: "禁止" }, `must not, cannot`, `<x>You mustn't share the password.</x>`],
      [{ en: "No necessity", ja: "不必要" }, `don't have to, don't need to`, `<x>You don't have to print it.</x>`],
      [{ en: "Strong inference", ja: "強い推量" }, `must; can't (impossible)`, `<x>That must be Mei.</x> <x>It can't be Arun.</x>`]
    ] },
    { k: "h", en: "Form rules", ja: "形のルール" },
    { k: "p", en: `<x>She can go</x> — not <s>can goes</s> or <s>can to go</s>. <x>Can she go?</x> — not <s>Does she can go?</s> Don't stack two core modals: <x>will be able to</x>, not <s>will can</s>. <i>Ought to</i> includes <i>to</i>; <i>have to, be able to, be allowed to</i> change like ordinary verbs.`,
      ja: `<s>can goes</s> や <s>can to go</s> ではなく <x>She can go.</x>、<s>Does she can go?</s> ではなく <x>Can she go?</x>。法助動詞は2つ重ねません：<s>will can</s> ではなく <x>will be able to</x>。<i>ought to</i> には to が含まれ、<i>have to, be able to, be allowed to</i> は普通の動詞のように形が変わります。` },
    { k: "h", en: "One form, several meanings", ja: "1つの形、複数の意味" },
    { k: "ex", items: [
      [`You <b>must</b> leave.`, { en: `necessity`, ja: `義務（出なければならない）` }],
      [`You <b>must</b> be tired.`, { en: `inference from evidence`, ja: `推量（疲れているに違いない）` }],
      [`<b>Can</b> you swim? / <b>Can</b> I leave?`, { en: `ability / permission`, ja: `能力／許可` }],
      [`<b>Could</b> you help? / I <b>could</b> swim at five.`, { en: `request / past ability`, ja: `依頼／過去の能力` }]
    ] },
    { k: "h", en: "Time and aspect after modals", ja: "助動詞の後の形" },
    { k: "table", head: ["@pattern", { en: "Meaning", ja: "意味" }, "@example"], rows: [
      [{ f: "modal + V1" }, { en: "basic", ja: "基本" }, `<x>may work</x>; <x>may be tired</x>`],
      [{ f: "modal + be + V-ing" }, { en: "in progress", ja: "進行中" }, `<x>may be working</x>`],
      [{ f: "modal + have + V3" }, { en: "earlier", ja: "以前のこと" }, `<x>may have worked</x>`],
      [{ f: "modal + have been + V-ing" }, { en: "earlier activity", ja: "以前の継続" }, `<x>may have been working</x>`],
      [{ f: "modal + be + V3" }, { en: "passive", ja: "受動" }, `<x>may be repaired</x>`]
    ] },
    { k: "p", en: `<i>Must / can't</i> express strong deductions; <i>may / might / could</i> express possibility. Don't assign fixed percentages — stress, context, and words like <i>well, possibly, surely</i> change the confidence.`,
      ja: `<i>must / can't</i> は強い推量、<i>may / might / could</i> は可能性を表します。決まった確率（％）を当てはめないこと。強勢・文脈・<i>well, possibly, surely</i> などの語で確信度は変わります。` },
    { k: "scale", t: { en: "How sure is the speaker?", ja: "話し手はどのくらい確信している？" }, lo: { en: "sure it isn't", ja: "ありえない" }, hi: { en: "sure it is", ja: "確信" }, items: [
      [`That must be Mei.`, 94, { en: "I'm sure (from the evidence)", ja: "〜に違いない（根拠から）" }],
      [`That should be Mei.`, 72, { en: "I expect so", ja: "〜のはずだ" }],
      [`That may / might / could be Mei.`, 45, { en: "it's possible", ja: "〜かもしれない" }],
      [`That can't be Mei.`, 4, { en: "I'm sure it isn't", ja: "〜のはずがない" }]
    ], n: { en: `The order is what matters; the bar lengths are a rough picture, not percentages.`, ja: `大切なのは順序です。バーの長さはおおよそのイメージで、割合ではありません。` } },
    { k: "watch", en: `Modal "past forms" don't always mean past time: <x>Could you help now?</x> <x>It might rain tomorrow.</x> <x>I would go if I could.</x> Their distance is often about politeness or imagination.`,
      ja: `助動詞の「過去形」がいつも過去を表すとは限りません：<x>Could you help now?</x>／<x>It might rain tomorrow.</x>／<x>I would go if I could.</x> ていねいさや仮定を表す「距離」であることが多いのです。` },
    { k: "tip", en: `〜かもしれない fits <i>may / might</i>, 〜に違いない fits <i>must</i>, and 〜はずがない fits <i>can't</i>: <x>She can't be at home — the lights are off.</x>`,
      ja: `「〜かもしれない」は may / might、「〜に違いない」は must、「〜はずがない」は can't です：<x>She can't be at home — the lights are off.</x>（電気が消えているから、家にいるはずがない）` }
  ],
  q: [
    { q: `She can ___ three languages.`, o: [`speaks`, `speak`, `to speak`], a: 1,
      e: { en: `Modal + V1.`, ja: `助動詞＋原形です。` } },
    { q: `___ drive?`, o: [`Does she can`, `Can she`, `Does she`], a: 1,
      e: { en: `Modals make questions without <i>do</i>.`, ja: `助動詞は do を使わずに疑問文を作ります。` } },
    { q: `I'll ___ help you tomorrow.`, o: [`can`, `be able to`, `able to`], a: 1,
      e: { en: `Don't stack modals: <i>will be able to</i>.`, ja: `助動詞を重ねず will be able to とします。` } },
    { q: `You look exhausted. You ___ be tired.`, h: { en: `an inference`, ja: `推量` }, o: [`must`, `should`, `can`], a: 0,
      e: { en: `Strong inference → <i>must</i>.`, ja: `強い推量には must を使います。` } },
    { q: `That ___ be Arun — he's in Paris this week.`, o: [`must`, `can't`, `should`], a: 1,
      e: { en: `Impossibility → <i>can't</i>.`, ja: `ありえないので can't です。` } },
    { q: `It ___ rain later, so take an umbrella.`, o: [`might`, `must`, `can't`], a: 0,
      e: { en: `Possibility → <i>might</i>.`, ja: `可能性には might を使います。` } },
    { q: `You ___ share your password.`, h: { en: `It's forbidden.`, ja: `禁止されている。` }, o: [`mustn't`, `don't have to`], a: 0,
      e: { en: `Prohibition → <i>mustn't</i>.`, ja: `禁止は mustn't です。` } },
    { q: `He may ___ right now.`, h: { en: `possibly in progress`, ja: `今〜しているかもしれない` }, o: [`work`, `be working`, `have worked`], a: 1,
      e: { en: `Modal + <i>be</i> + V-ing = in progress.`, ja: `助動詞＋be＋-ing で進行中を表します。` } },
    { q: `The window may ___ tomorrow.`, h: { en: `passive`, ja: `受動` }, o: [`repair`, `be repaired`, `repaired`], a: 1,
      e: { en: `Modal + <i>be</i> + V3 = passive.`, ja: `助動詞＋be＋過去分詞で受動を表します。` } },
    { q: `You ___ to wear a seat belt.`, o: [`must`, `ought`], a: 1,
      e: { en: `<i>Ought</i> is followed by <i>to</i>: <i>ought to wear</i>.`, ja: `ought は to を伴います（ought to wear）。` } }
  ]
});

GH.topic({
  id: "modals-uses", ch: "qm", p: 54,
  t: { en: "Ability, permission, duty, advice", ja: "能力・許可・義務・助言" },
  d: { en: "Can, could and be able to; permission vs possibility; must, have to and need to; should, had better, be supposed to, would rather.", ja: "can・could・be able to、許可と可能性、must・have to・need to、should・had better・be supposed to・would rather" },
  body: [
    { k: "h", en: "Can, could, and be able to", ja: "can・could・be able to" },
    { k: "p", en: `<i>Can</i> = present ability, and everyday requests or permission. <i>Could</i> = general past ability: <x>I could swim when I was six.</x> For one specific success in the past, use <i>was able to</i> or <i>managed to</i>: <x>We managed to fix it yesterday.</x> <i>Could</i> is still fine with perception verbs and negatives: <x>I could hear music.</x> <x>I couldn't open it.</x>`,
      ja: `<i>can</i>＝現在の能力、日常的な依頼・許可。<i>could</i>＝過去の一般的な能力（<x>I could swim when I was six.</x>）。過去の特定の場面で「できた」ことには was able to や managed to を使います（<x>We managed to fix it yesterday.</x>）。知覚動詞や否定文では could も自然です：<x>I could hear music.</x>／<x>I couldn't open it.</x>` },
    { k: "p", en: `Use <i>be able to</i> where <i>can</i> can't go: <x>I'll be able to help.</x> <x>I've been able to study.</x> <x>I want to be able to speak clearly.</x>`,
      ja: `can が使えない形では be able to を使います：<x>I'll be able to help.</x>／<x>I've been able to study.</x>／<x>I want to be able to speak clearly.</x>` },
    { k: "h", en: "Permission versus possibility", ja: "許可と可能性" },
    { k: "p", en: `<x>May I leave?</x> / <x>Can I leave?</x> ask for permission; <x>You may / can leave</x> gives it. <x>Could I leave early?</x> is a tentative request (answer <x>Yes, you can.</x>). <x>It may rain</x> is possibility, not permission. <x>It can get cold here</x> = a general possibility; <x>It might be cold tomorrow</x> = a particular one.`,
      ja: `<x>May I leave?</x>／<x>Can I leave?</x> は許可を求め、<x>You may / can leave.</x> は許可を与えます。<x>Could I leave early?</x> は控えめな依頼（答えは <x>Yes, you can.</x>）。<x>It may rain.</x> は許可ではなく可能性です。<x>It can get cold here.</x>＝（一般的に）寒くなることがある、<x>It might be cold tomorrow.</x>＝（明日は）寒いかもしれない。` },
    { k: "h", en: "Must, have to, and need to", ja: "must・have to・need to" },
    { k: "p", en: `All express necessity. <i>Must</i> often gives the speaker's strong instruction; <i>have to</i> often presents a requirement from rules or circumstances (a tendency, not an absolute rule). Past: <x>I had to leave early.</x> Future: <x>I'll have to renew it.</x>`,
      ja: `どれも必要を表します。<i>must</i> は話し手の強い指示、<i>have to</i> は規則や状況による必要を表すことが多いです（傾向であって絶対のルールではありません）。過去は <x>I had to leave early.</x>、未来は <x>I'll have to renew it.</x> です。` },
    { k: "ex", items: [
      [`You <b>mustn't</b> leave.`, { en: `leaving is prohibited`, ja: `出てはいけない（禁止）` }],
      [`You <b>don't have to</b> leave.`, { en: `leaving is optional`, ja: `出る必要はない（任意）` }],
      [`You <b>needn't</b> leave.`, { en: `also "not necessary" (more British or formal)`, ja: `出る必要はない（イギリス英語・やや堅い）` }]
    ] },
    { k: "cmp", t: { en: "Necessary, advisable, optional, forbidden", ja: "必要・助言・任意・禁止" }, cols: [
      { h: `must / have to`, s: { en: "necessary", ja: "必要" }, ex: [`You must show your ID.`, `I have to renew my visa.`] },
      { h: `should`, s: { en: "a good idea", ja: "〜したほうがいい" }, ex: [`You should rest.`] },
      { h: `don't have to`, s: { en: "not necessary — your choice", ja: "必要ない（任意）" }, ex: [`You don't have to print it.`] },
      { h: `mustn't`, s: { en: "forbidden — don't do it", ja: "禁止（してはいけない）" }, ex: [`You mustn't share the password.`] }
    ], n: { en: `The classic trap: <i>mustn't</i> and <i>don't have to</i> look alike but mean very different things.`, ja: `よくある落とし穴：<i>mustn't</i> と <i>don't have to</i> は形が似ていますが、意味はまったく違います。` } },
    { k: "h", en: "Should, ought to, had better", ja: "should・ought to・had better" },
    { k: "p", en: `<i>Should / ought to</i> = advice or expectation: <x>You should rest.</x> <x>The parcel should arrive today.</x> <i>Had better</i> + V1 = strong advice with an implied consequence: <x>You'd better save your work.</x> (negative: <i>had better not</i>). Despite <i>had</i>, it is about now or the future.`,
      ja: `<i>should / ought to</i>＝助言・予想（<x>You should rest.</x>／<x>The parcel should arrive today.</x>）。<i>had better</i>＋原形＝強い忠告（しないと困ったことになる）：<x>You'd better save your work.</x>（否定は had better not）。had があっても、今・未来のことです。` },
    { k: "p", en: `<i>Be supposed to</i> = an expectation, duty, or arrangement: <x>You're supposed to sign here.</x> <x>You were supposed to call.</x> (but you didn't). <i>Would rather</i> + V1 = preference: <x>I'd rather wait.</x>`,
      ja: `<i>be supposed to</i>＝〜することになっている（<x>You're supposed to sign here.</x>／<x>You were supposed to call.</x>＝電話することになっていたのに）。<i>would rather</i>＋原形＝むしろ〜したい（<x>I'd rather wait.</x>）。` },
    { k: "watch", en: `<i>Should</i> can be advice or probability: <x>You should be at home</x> may mean "that's the right place for you" or "I expect you're there".`,
      ja: `<i>should</i> は助言にも推量にもなります：<x>You should be at home.</x> は「家にいるべきだ」とも「家にいるはずだ」とも取れます。` },
    { k: "tip", en: `Learners often use <i>had better</i> for 〜したほうがいい, but it can sound like a warning. For friendly advice, prefer <x>You should…</x> or <x>Maybe you could…</x>.`,
      ja: `「〜したほうがいい」を had better と訳しがちですが、had better は「さもないと困る」という警告のように響くことがあります。親しみのある助言なら <x>You should…</x> や <x>Maybe you could…</x> が無難です。` }
  ],
  q: [
    { q: `I ___ swim when I was six.`, o: [`could`, `was able`], a: 0,
      e: { en: `General past ability → <i>could</i>.`, ja: `過去の一般的な能力なので could です。` } },
    { q: `The door was stuck, but we ___ open it in the end.`, o: [`could`, `managed to`], a: 1,
      e: { en: `One specific success → <i>managed to</i> (or <i>were able to</i>).`, ja: `特定の場面での成功なので managed to です（were able to も可）。` } },
    { q: `I'll ___ help you after lunch.`, o: [`can`, `be able to`], a: 1,
      e: { en: `After <i>will</i>, use <i>be able to</i>.`, ja: `will の後は be able to です。` } },
    { q: `___ I sit here?`, h: { en: `asking permission politely`, ja: `ていねいに許可を求める` }, o: [`May`, `Must`, `Should`], a: 0,
      e: { en: `<i>May I…?</i> asks for permission.`, ja: `May I…? で許可を求めます。` } },
    { q: `I ___ leave early yesterday because of a meeting.`, o: [`must`, `had to`, `have to`], a: 1,
      e: { en: `Past obligation → <i>had to</i>.`, ja: `過去の義務は had to です。` } },
    { q: `You ___ print the receipt; it's optional.`, o: [`mustn't`, `don't have to`], a: 1,
      e: { en: `Optional → <i>don't have to</i>.`, ja: `任意なので don't have to です。` } },
    { q: `You ___ save your work, or you might lose it.`, o: [`had better`, `would rather`], a: 0,
      e: { en: `Strong advice with a consequence → <i>had better</i>.`, ja: `結果を伴う強い忠告なので had better です。` } },
    { q: `You're ___ to sign here.`, o: [`suppose`, `supposed`], a: 1,
      e: { en: `<i>Be supposed to</i>.`, ja: `be supposed to の形です。` } },
    { q: `I'd rather ___ here.`, o: [`to wait`, `wait`, `waiting`], a: 1,
      e: { en: `<i>Would rather</i> + V1.`, ja: `would rather＋原形です。` } },
    { q: `The parcel ___ arrive today — it was sent on Monday.`, h: { en: `an expectation`, ja: `予想` }, o: [`should`, `must not`, `can't`], a: 0,
      e: { en: `<i>Should</i> can express an expectation.`, ja: `should は予想（〜するはず）も表します。` } }
  ]
});

GH.topic({
  id: "modal-perfects", ch: "qm", p: 55,
  t: { en: "Modal perfects: earlier possibilities", ja: "助動詞＋完了形" },
  d: { en: "must have, can't have, may/might/could have, should have, would have — deductions, regrets and imagined results about the past.", ja: "must have・can't have・may/might/could have・should have・would have：過去についての推量・後悔・仮定の結果" },
  body: [
    { k: "core", en: `Use <code>modal + have + V3</code> to talk about an <b>earlier</b> situation through a modal meaning. The modal gives the judgment; the perfect places the event earlier.`,
      ja: `<code>助動詞＋have＋過去分詞</code> で、<b>以前の</b>出来事について助動詞の意味（推量・後悔など）を表します。助動詞が判断を、完了形が「以前」を示します。` },
    { k: "table", head: ["@pattern", { en: "Common meaning", ja: "主な意味" }, "@example"], rows: [
      [{ f: "must have + V3" }, { en: "strong positive deduction", ja: "〜したに違いない" }, `<x>She must have left.</x>`],
      [{ f: "can't / couldn't have + V3" }, { en: "strong negative deduction", ja: "〜したはずがない" }, `<x>He can't have paid — the record is empty.</x>`],
      [{ f: "may / might / could have + V3" }, { en: "past possibility", ja: "〜したかもしれない" }, `<x>She might have forgotten.</x>`],
      [{ f: "should / ought to have + V3" }, { en: "expected or advisable (but it didn't happen)", ja: "〜すべきだった（のにしなかった）" }, `<x>You should have checked.</x>`],
      [{ f: "shouldn't have + V3" }, { en: "criticism or regret", ja: "〜すべきではなかった" }, `<x>I shouldn't have rushed.</x>`],
      [{ f: "would have + V3" }, { en: "imagined past result", ja: "〜しただろう（仮定の結果）" }, `<x>I would have helped if I had known.</x>`]
    ] },
    { k: "scale", t: { en: "Judging what happened", ja: "過去の出来事についての確信度" }, lo: { en: "sure it didn't", ja: "ありえない" }, hi: { en: "sure it did", ja: "確信" }, items: [
      [`She must have left.`, 94, { en: "I'm sure she left", ja: "出たに違いない" }],
      [`She may / might / could have left.`, 45, { en: "perhaps she left", ja: "出たかもしれない" }],
      [`She can't have left.`, 4, { en: "I'm sure she didn't", ja: "出たはずがない" }]
    ] },
    { k: "h", en: "One form, different readings", ja: "同じ形でも意味が変わる" },
    { k: "p", en: `<x>You could have called</x> can mean you had the chance but didn't (often critical). <x>She could have called while I was away</x> can mean it's possible she called. Context decides.`,
      ja: `<x>You could have called.</x> は「電話できたのに（しなかった）」という非難のこともあれば、<x>She could have called while I was away.</x> のように「留守中に電話したかもしれない」という可能性のこともあります。文脈で判断しましょう。` },
    { k: "p", en: `<x>The parcel should have arrived by now</x> = an expectation (it doesn't prove arrival). <x>You should have told me</x> = criticism for not telling.`,
      ja: `<x>The parcel should have arrived by now.</x>＝もう届いているはずだ（予想。届いた証拠ではない）。<x>You should have told me.</x>＝言ってくれればよかったのに（非難）。` },
    { k: "h", en: "Necessity in the past", ja: "過去の必要" },
    { k: "p", en: `<x>I had to go</x> = going was required. <x>I must have gone there before</x> = I infer that I went. <i>Must have</i> is normally a deduction, not past obligation. <x>I didn't need to book</x> = booking was unnecessary (maybe I didn't). <x>I needn't have booked</x> = I booked, but it was unnecessary.`,
      ja: `<x>I had to go.</x>＝行かなければならなかった（義務）。<x>I must have gone there before.</x>＝前に行ったことがあるに違いない（推量）。must have は通常、過去の義務ではなく推量です。<x>I didn't need to book.</x>＝予約する必要はなかった（たぶんしなかった）。<x>I needn't have booked.</x>＝予約したが、その必要はなかった。` },
    { k: "p", en: `Extensions: <x>He might have been working.</x> (an earlier ongoing activity) <x>The message must have been sent.</x> (passive) <x>It should have been checked.</x>`,
      ja: `発展形：<x>He might have been working.</x>（そのとき仕事をしていたのかもしれない）／<x>The message must have been sent.</x>（送られたに違いない：受動）／<x>It should have been checked.</x>（確認されるべきだった）` },
    { k: "watch", en: `Write <i>could have / should have / would have</i> — never <s>could of / should of / would of</s>. The contractions <i>could've, should've, would've</i> sound like "of", but the verb is <i>have</i>.`,
      ja: `<s>could of / should of / would of</s> ではなく、could have / should have / would have と書きます。短縮形 could've などが of のように聞こえるだけで、正しくは have です。` },
    { k: "tip", en: `〜したに違いない = <i>must have</i> + V3; 〜したはずがない = <i>can't have</i> + V3; 〜すればよかった = <i>should have</i> + V3: <x>I should have studied harder.</x>`,
      ja: `「〜したに違いない」＝must have＋過去分詞、「〜したはずがない」＝can't have＋過去分詞、「〜すればよかった」＝should have＋過去分詞：<x>I should have studied harder.</x>（もっと勉強すればよかった）` }
  ],
  q: [
    { q: `She's not at her desk. She must ___ (leave).`, i: [`have left`],
      e: { en: `A strong deduction about the past: <i>must have</i> + V3.`, ja: `過去についての強い推量：must have＋過去分詞です。` } },
    { q: `He ___ paid — the payment record is empty.`, o: [`must have`, `can't have`, `should have`], a: 1,
      e: { en: `A strong negative deduction → <i>can't have</i>.`, ja: `強い否定の推量なので can't have です。` } },
    { q: `She ___ forgotten about the meeting.`, h: { en: `It's possible.`, ja: `可能性がある。` }, o: [`might have`, `must`, `should`], a: 0,
      e: { en: `Past possibility → <i>might have</i> + V3.`, ja: `過去の可能性なので might have＋過去分詞です。` } },
    { q: `You ___ checked the address before sending it.`, h: { en: `You didn't, and that was a mistake.`, ja: `確認しなかった（それはミスだった）。` }, o: [`should have`, `must have`, `can't have`], a: 0,
      e: { en: `Advisable but it didn't happen → <i>should have</i>.`, ja: `すべきだったのにしなかったので should have です。` } },
    { q: `I ___ so much. Now I feel sick.`, o: [`shouldn't have eaten`, `mustn't eat`, `couldn't eat`], a: 0,
      e: { en: `Regret about an action → <i>shouldn't have</i> + V3.`, ja: `後悔なので shouldn't have＋過去分詞です。` } },
    { q: `I ___ helped if I had known.`, o: [`would have`, `will have`, `would`], a: 0,
      e: { en: `An imagined past result → <i>would have</i> + V3.`, ja: `仮定の過去の結果なので would have＋過去分詞です。` } },
    { q: { en: `Which is spelled correctly?`, ja: `正しいつづりは？` }, o: [`I should of called.`, `I should have called.`, `I should had called.`], a: 1,
      e: { en: `<i>Should have</i> — never <i>should of</i>.`, ja: `should of ではなく should have です。` } },
    { q: { en: `You booked a table, but the restaurant was empty. Which sentence fits?`, ja: `席を予約したが、店はがらがらだった。合う文は？` }, o: [`I needn't have booked.`, `I didn't need to book, so I didn't.`], a: 0,
      e: { en: `<i>Needn't have</i> + V3 = you did it, but it was unnecessary.`, ja: `needn't have＋過去分詞＝したけれど必要なかった、です。` } },
    { q: `The message ___ sent — she replied to it.`, o: [`must have been`, `must be`, `can't have been`], a: 0,
      e: { en: `A passive deduction about the past: <i>must have been</i> + V3.`, ja: `過去の受動についての推量：must have been＋過去分詞です。` } },
    { q: `I ___ leave early yesterday — my boss told me to.`, o: [`must have`, `had to`], a: 1,
      e: { en: `Past obligation → <i>had to</i>; <i>must have</i> would be a deduction.`, ja: `過去の義務は had to です。must have だと推量になります。` } }
  ]
});
