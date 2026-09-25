/* 03 Tense & aspect — part A: map and present forms (handbook pp. 32–37, 96) */

GH.topic({
  id: "tense-map", ch: "tense", p: 32,
  t: { en: "The 12-pattern map", ja: "12の時制マップ" },
  d: { en: "Time plus viewpoint: how four aspects combine with present, past and future, and how negatives and questions work.", ja: "「時」と「見方（相）」：4つの相と現在・過去・未来の組み合わせ、否定文・疑問文の作り方" },
  body: [
    { k: "core", en: `<b>Time</b> locates a situation: present, past, or future. <b>Aspect</b> shows how the speaker views it — as a whole (simple), in progress (continuous), looking back from a reference point (perfect), or as activity leading up to that point (perfect continuous). Three times × four aspects = the familiar "12 tenses".`,
      ja: `<b>時</b>は出来事がいつかを示し（現在・過去・未来）、<b>相（アスペクト）</b>は話し手がそれをどう見ているかを示します：全体として（単純形）、進行中として（進行形）、基準時点から振り返って（完了形）、基準時点まで続く活動として（完了進行形）。3つの時×4つの相＝いわゆる「12時制」です。` },
    { k: "table", head: ["@pattern", "@present", "@past", "@future"], rows: [
      [{ en: "Simple", ja: "単純形" }, `<x>I work.</x>`, `<x>I worked.</x>`, `<x>I will work.</x>`],
      [{ en: "Continuous", ja: "進行形" }, `<x>I am working.</x>`, `<x>I was working.</x>`, `<x>I will be working.</x>`],
      [{ en: "Perfect", ja: "完了形" }, `<x>I have worked.</x>`, `<x>I had worked.</x>`, `<x>I will have worked.</x>`],
      [{ en: "Perfect continuous", ja: "完了進行形" }, `<x>I have been working.</x>`, `<x>I had been working.</x>`, `<x>I will have been working.</x>`]
    ] },
    { k: "p", en: `Strictly, English verbs have two tenses: present and past. Future time is expressed with constructions such as <i>will</i>, <i>be going to</i>, and present forms. The 12-pattern map is a practical learning tool, not a claim that <i>will</i> is the only future.`,
      ja: `厳密には、英語の動詞の時制は現在と過去の2つだけです。未来は <i>will</i>、<i>be going to</i>、現在形などの構文で表します。12時制は学習に便利な整理であって、will だけが未来を表すという意味ではありません。` },
    { k: "h", en: "What each aspect adds", ja: "それぞれの「相」が加える意味" },
    { k: "list", items: [
      { en: `<b>Simple</b>: facts, habits, states, or whole events. Simple does not mean short: <x>I lived there for twenty years.</x>`, ja: `<b>単純形</b>：事実・習慣・状態・出来事全体。「短い」という意味ではありません：<x>I lived there for twenty years.</x>` },
      { en: `<b>Continuous</b> (<code>be + V-ing</code>): views an activity from inside, or as temporary or developing. It doesn't say whether the task finishes.`, ja: `<b>進行形</b>（<code>be + V-ing</code>）：活動を内側から、あるいは一時的・変化中のものとしてとらえます。完了したかどうかは示しません。` },
      { en: `<b>Perfect</b> (<code>have + V3</code>): looks back from a reference point — now, a past point, or a future point. It doesn't simply mean "finished": <x>I have known her for years.</x>`, ja: `<b>完了形</b>（<code>have + V3</code>）：基準時点（今・過去のある時点・未来のある時点）から振り返ります。単に「終わった」という意味ではありません：<x>I have known her for years.</x>` },
      { en: `<b>Perfect continuous</b> (<code>have been + V-ing</code>): activity or duration leading up to the reference point; it may continue or have just stopped.`, ja: `<b>完了進行形</b>（<code>have been + V-ing</code>）：基準時点までの活動や継続期間。まだ続いていることも、直前に終わったこともあります。` }
    ] },
    { k: "tl", t: { en: "The four aspects on a timeline (present)", ja: "4つの相をタイムラインで見る（現在）" }, rows: [
      { l: { en: "Simple: the whole picture", ja: "単純形：全体として" }, s: `I work here.`, m: [["xs", -0.85, 0.85, 7]],
        n: { en: "A routine or fact, true around now.", ja: "今当てはまる習慣・事実。" } },
      { l: { en: "Continuous: in progress", ja: "進行形：途中の様子" }, s: `I'm working now.`, m: [["wave", -0.24, 0.24]],
        n: { en: "Seen from inside, happening around now.", ja: "内側から見た、今進行中の活動。" } },
      { l: { en: "Perfect: looking back", ja: "完了形：振り返り" }, s: `I've finished the report.`, m: [["x", -0.5, { en: "finished", ja: "終えた" }], ["arc", -0.5, 0, { en: "result now", ja: "今の結果" }]],
        n: { en: "An earlier event, viewed from now.", ja: "以前の出来事を今から振り返る。" } },
      { l: { en: "Perfect continuous: up to now", ja: "完了進行形：今まで続く" }, s: `I've been working for three hours.`, m: [["wave", -0.62, 0], ["span", -0.62, 0, { en: "three hours", ja: "3時間" }]],
        n: { en: "Activity lasting up to now, with its duration.", ja: "今まで続いてきた活動と、その長さ。" } }
    ], n: { en: `Move the viewpoint to a past or future point and the same four pictures give the past and future patterns.`, ja: `基準を過去や未来のある時点に移すと、同じ4つの見方で過去・未来のパターンになります。` } },
    { k: "h", en: "Choose with three questions", ja: "3つの問いで選ぶ" },
    { k: "p", en: `1. Where is the <b>reference point</b> — now, a past scene, or a future point? 2. What is the <b>viewpoint</b> — the whole event, in progress, an earlier result, or duration? 3. Does the verb's <b>meaning</b> allow continuous forms? State meanings usually prefer simple forms.`,
      ja: `① <b>基準時点</b>はどこか（今・過去の場面・未来のある時点）。② <b>見方</b>は何か（出来事全体・進行中・以前の結果・継続期間）。③ 動詞の<b>意味</b>は進行形に合うか（状態を表す意味なら通常は単純形）。` },
    { k: "h", en: "Negatives and questions", ja: "否定文と疑問文" },
    { k: "p", en: `Put <i>not</i> after the first auxiliary: <x>I have not eaten.</x> <x>I will not have eaten.</x> For a question, move the first auxiliary before the subject: <x>Have you eaten?</x> <x>Will you have eaten?</x> Simple main verbs need <i>do/does/did</i>: <x>I don't eat.</x> <x>Did you eat?</x> Main <i>be</i> works directly: <x>Are you hungry?</x>`,
      ja: `否定文は最初の助動詞の後に not を置きます（<x>I have not eaten.</x>／<x>I will not have eaten.</x>）。疑問文は最初の助動詞を主語の前に出します（<x>Have you eaten?</x>／<x>Will you have eaten?</x>）。単純形の一般動詞は do/does/did を使い（<x>I don't eat.</x>／<x>Did you eat?</x>）、be動詞はそのまま前に出します（<x>Are you hungry?</x>）。` },
    { k: "note", l: { en: "Four form rules", ja: "4つの形のルール" },
      en: `Modal or <i>do</i> + V1. Perfect <i>have</i> + V3. Continuous <i>be</i> + V-ing. Passive <i>be</i> + V3. In a long chain, apply each rule to the next verb: <i>will → have → been → working</i>.`,
      ja: `法助動詞・do＋原形。完了の have＋過去分詞。進行の be＋-ing。受動の be＋過去分詞。長い動詞の連なりでは、それぞれのルールを次の動詞に順に当てはめます：<i>will → have → been → working</i>。` },
    { k: "chain", t: { en: "Building the longest pattern", ja: "いちばん長いパターンを組み立てる" }, s: `By June, I will have been working here for a year.`, items: [
      [`will`, { en: "future (modal)", ja: "未来（助動詞）" }], [`have`, { en: "V1 after will", ja: "will の後は V1" }], [`been`, { en: "V3 after have", ja: "have の後は V3" }], [`working`, { en: "V-ing after be", ja: "be の後は V-ing" }]
    ] },
    { k: "watch", en: `Time words are clues, not switches. <i>For two years</i> works with several tenses: <x>I lived there for two years.</x> / <x>I have lived there for two years.</x> / <x>By June I will have lived there for two years.</x> What changes is the reference point.`,
      ja: `時を表す語句は手がかりであって、時制を自動的に決めるものではありません。<i>for two years</i> はいろいろな時制と使えます：<x>I lived there for two years.</x>／<x>I have lived there for two years.</x>／<x>By June I will have lived there for two years.</x> 変わるのは基準時点です。` },
    { k: "tip", en: `Japanese 〜た and 〜ている each cover several English forms. 〜た can be past simple (<x>I ate</x>) or present perfect (<x>I've already eaten</x>); 〜ている can be continuous (<x>I'm eating</x>) or a resulting state (<x>The window is open</x>). Always decide the reference point and viewpoint first.`,
      ja: `日本語の「〜た」「〜ている」は、それぞれ複数の英語の形に対応します。「〜た」は過去形（<x>I ate</x>）にも現在完了（<x>I've already eaten</x>）にもなり、「〜ている」は進行形（<x>I'm eating</x>）にも結果の状態（<x>The window is open</x>）にもなります。まず基準時点と見方を決めましょう。` }
  ],
  q: [
    { q: { en: `Which pattern is <x>I had been working</x>?`, ja: `<x>I had been working</x> はどの時制？` },
      o: [{ en: "Past perfect continuous", ja: "過去完了進行形" }, { en: "Present perfect continuous", ja: "現在完了進行形" }, { en: "Past continuous", ja: "過去進行形" }], a: 0,
      e: { en: `<i>Had been</i> + V-ing = past perfect continuous.`, ja: `had been＋-ing は過去完了進行形です。` } },
    { q: { en: `Which pattern is <x>I will have worked</x>?`, ja: `<x>I will have worked</x> はどの時制？` },
      o: [{ en: "Future perfect", ja: "未来完了形" }, { en: "Future continuous", ja: "未来進行形" }, { en: "Present perfect", ja: "現在完了形" }], a: 0,
      e: { en: `<i>Will have</i> + V3 = future perfect.`, ja: `will have＋過去分詞は未来完了形です。` } },
    { q: { en: `Choose the future continuous.`, ja: `未来進行形を選びましょう。` },
      o: [`I will work.`, `I will be working.`, `I will have been working.`], a: 1,
      e: { en: `<i>Will be</i> + V-ing.`, ja: `will be＋-ing が未来進行形です。` } },
    { q: { en: `What does the perfect aspect do?`, ja: `完了相の働きは？` },
      o: [{ en: "It always means an action is finished.", ja: "動作が終わったことを必ず表す。" }, { en: "It looks back from a reference point.", ja: "基準時点から振り返る。" }, { en: "It shows an action in progress.", ja: "進行中の動作を表す。" }], a: 1,
      e: { en: `Perfect looks back from a reference point; <i>I have known her for years</i> is a continuing state, not a finished action.`, ja: `完了は基準時点から振り返る見方です。I have known her for years は終わった動作ではなく、継続中の状態です。` } },
    { q: { en: `Make it negative: <x>She has finished.</x>`, ja: `否定文にしましょう：<x>She has finished.</x>` },
      o: [`She doesn't have finished.`, `She has not finished.`, `She not has finished.`], a: 1,
      e: { en: `Put <i>not</i> after the first auxiliary.`, ja: `最初の助動詞の後に not を置きます。` } },
    { q: { en: `Make it a question: <x>They will have left.</x>`, ja: `疑問文にしましょう：<x>They will have left.</x>` },
      o: [`Will they have left?`, `Have they will left?`, `Do they will have left?`], a: 0,
      e: { en: `Move only the first auxiliary, <i>will</i>.`, ja: `最初の助動詞 will だけを前に出します。` } },
    { q: { en: `Make it a question: <x>She works here.</x>`, ja: `疑問文にしましょう：<x>She works here.</x>` },
      o: [`Works she here?`, `Does she work here?`, `Does she works here?`], a: 1,
      e: { en: `A simple main verb uses <i>does</i> + V1.`, ja: `単純形の一般動詞は does＋原形です。` } },
    { q: `By next June, I will ___ (live) here for ten years.`, i: [`have lived`, `have been living`],
      e: { en: `Future perfect: <i>will have</i> + V3. The future perfect continuous (<i>will have been living</i>) is also correct.`, ja: `未来完了：will have＋過去分詞です。未来完了進行形（will have been living）も正解です。` } },
    { q: `I ___ (work) at this time yesterday.`, h: { en: `The work was in progress at that moment.`, ja: `その時点で仕事の最中だった。` }, i: [`was working`],
      e: { en: `In progress at a past time → past continuous.`, ja: `過去のある時点で進行中 → 過去進行形です。` } },
    { w: [`I`, `have`, `been`, `waiting`, `for`, `an`, `hour.`],
      e: { en: `Present perfect continuous: <i>have been</i> + V-ing.`, ja: `現在完了進行形：have been＋-ing です。` } }
  ]
});

GH.topic({
  id: "present-simple", ch: "tense", p: 33,
  t: { en: "01 · Present simple", ja: "01・現在形" },
  d: { en: "Facts, habits, states, timetables and instructions — and how to make questions and negatives.", ja: "事実・習慣・状態・時刻表・手順、そして疑問文と否定文の作り方" },
  body: [
    { k: "core", en: `A fact, state, habit, or repeated event viewed as generally true now. It does <b>not</b> mean the action is happening at this exact second.`,
      ja: `今の時点で一般的に当てはまる事実・状態・習慣・繰り返しの出来事を表します。今この瞬間に動作が行われているという意味では<b>ありません</b>。` },
    { k: "form", rows: [
      ["aff", "S + V1 / V-s", "She works. / She is ready."],
      ["neg", "S + do/does not + V1", "She doesn't work. / She isn't ready."],
      ["q", "Do/Does + S + V1?", "Does she work? / Is she ready?"],
      ["short", "Yes, S + do/does.", "Yes, she does. / No, she doesn't."]
    ] },
    { k: "h", en: "Main uses", ja: "主な用法" },
    { k: "ex", items: [
      [`I <b>study</b> after dinner.`, { en: `habit or routine`, ja: `習慣・日課` }],
      [`Water <b>freezes</b> at 0°C.`, { en: `general fact`, ja: `一般的な事実` }],
      [`I <b>know</b> the answer. She <b>lives</b> in Osaka.`, { en: `present state`, ja: `現在の状態` }],
      [`The train <b>leaves</b> at 8 tomorrow.`, { en: `timetable or schedule (future time)`, ja: `時刻表・予定（未来の内容）` }],
      [`First, you <b>enter</b> your name; then you <b>press</b> Continue.`, { en: `instructions or commentary`, ja: `手順・実況` }],
      [`I <b>promise</b> to check. I <b>apologize</b>.`, { en: `saying it performs the act`, ja: `言うこと自体が行為になる` }]
    ] },
    { k: "tl", t: { en: "Present simple on a timeline", ja: "現在形をタイムラインで見る" }, rows: [
      { l: { en: "Habit", ja: "習慣" }, s: `I study after dinner.`, m: [["xs", -0.88, 0.88, 7]],
        n: { en: "Repeated again and again — and still true.", ja: "何度も繰り返され、今も当てはまる。" } },
      { l: { en: "State or fact", ja: "状態・事実" }, s: `She lives in Osaka.`, m: [["bar", -0.88, 0.88]],
        n: { en: "True now; it may change later — simple doesn't mean forever.", ja: "今当てはまる状態。将来変わることもある（永久という意味ではない）。" } },
      { l: { en: "Timetable", ja: "時刻表" }, s: `The train leaves at 8 tomorrow.`, m: [["x", 0.55, { en: "8:00 tomorrow", ja: "明日8時" }]],
        n: { en: "A fixed schedule: future time, present form.", ja: "決まった予定：未来のことでも現在形。" } }
    ] },
    { k: "h", en: "Time expressions and position", ja: "時の表現と語順" },
    { k: "p", en: `Common words: <i>always, usually, often, sometimes, rarely, never, every day, on Mondays, twice a week</i>. Frequency adverbs go before a main verb and after <i>be</i>: <x>I usually walk.</x> <x>I am usually early.</x> <i>Every day</i> (two words) is a time phrase; <i>everyday</i> is an adjective: <x>everyday English</x>.`,
      ja: `よく使う語：<i>always, usually, often, sometimes, rarely, never, every day, on Mondays, twice a week</i>。頻度の副詞は一般動詞の前、be動詞の後に置きます（<x>I usually walk.</x>／<x>I am usually early.</x>）。<i>every day</i>（2語）は「毎日」、<i>everyday</i>（1語）は形容詞「日常の」です（<x>everyday English</x>）。` },
    { k: "h", en: "Present simple vs present continuous", ja: "現在形と現在進行形" },
    { k: "p", en: `<x>I work from home</x> = my general routine. <x>I'm working from home this week</x> = temporary. <x>I live in Osaka</x> can still change later — simple doesn't mean permanent. <x>I'm living with a friend</x> presents the situation as temporary.`,
      ja: `<x>I work from home.</x>＝普段の働き方。<x>I'm working from home this week.</x>＝今週だけの一時的な状況。<x>I live in Osaka.</x> も将来変わる可能性はあり、単純形は「永久に」という意味ではありません。<x>I'm living with a friend.</x> は一時的な状況として述べています。` },
    { k: "h", en: "Questions and negatives", ja: "疑問文と否定文" },
    { k: "p", en: `<x>Where does she work?</x> — <i>does</i> carries the agreement, so <i>work</i> stays V1. <x>Who works here?</x> — <i>who</i> is the subject, so there is no <i>does</i>. <x>She doesn't usually work on Sundays.</x>`,
      ja: `<x>Where does she work?</x>：does が3単現を担うので work は原形のまま。<x>Who works here?</x>：who が主語なので does は不要です。<x>She doesn't usually work on Sundays.</x>` },
    { k: "watch", en: `Say <x>She works</x> / <x>Does she work?</x> / <x>She doesn't work</x> — not <s>She work</s> or <s>Does she works</s>. With <i>be</i>: <x>Are you tired?</x>, not <s>Do you tired?</s> With a state verb: <x>I understand</x>, not <s>I am understanding</s>.`,
      ja: `<x>She works</x>／<x>Does she work?</x>／<x>She doesn't work</x> が正しく、<s>She work</s> や <s>Does she works</s> は誤りです。be動詞は <x>Are you tired?</x>（<s>Do you tired?</s> は不可）。状態動詞は <x>I understand</x>（<s>I am understanding</s> は通常不可）。` },
    { k: "tip", en: `Japanese 〜ます covers both habits and the near future (毎日走ります／明日行きます). English present simple covers habits and timetables, but for your own plans use <i>be going to</i> or the present continuous: <x>I'm going to Kyoto tomorrow.</x>`,
      ja: `日本語の「〜ます」は習慣にも近い未来にも使えます（毎日走ります／明日行きます）。英語の現在形は習慣や時刻表には使えますが、自分の予定には be going to や現在進行形を使います：<x>I'm going to Kyoto tomorrow.</x>` }
  ],
  q: [
    { q: `She ___ (work) at a phone shop.`, h: { en: `This is her normal routine.`, ja: `普段の仕事です。` }, i: [`works`],
      e: { en: `Present simple for a routine, with third-person -s.`, ja: `日常の習慣は現在形。3人称単数の -s を付けます。` } },
    { q: `Water ___ at 100°C.`, o: [`boils`, `is boiling`, `boil`], a: 0,
      e: { en: `A general fact → present simple.`, ja: `一般的な事実は現在形です。` } },
    { q: `___ your brother live in Tokyo?`, o: [`Do`, `Does`, `Is`], a: 1,
      e: { en: `A third-person singular question → <i>Does</i>.`, ja: `3人称単数の疑問文は Does です。` } },
    { q: `She ___ meat.`, o: [`don't eat`, `doesn't eat`, `doesn't eats`], a: 1,
      e: { en: `<i>Doesn't</i> + V1.`, ja: `doesn't＋原形です。` } },
    { q: `The train ___ at 8:10 tomorrow morning.`, o: [`leaves`, `is leave`, `leave`], a: 0,
      e: { en: `Timetables use the present simple, even for the future.`, ja: `時刻表は未来のことでも現在形を使えます。` } },
    { q: `Who ___ the key to this room?`, o: [`does have`, `has`, `have`], a: 1,
      e: { en: `<i>Who</i> is the subject, so no <i>does</i>: <i>Who has…?</i>`, ja: `who が主語なので does は不要です（Who has…?）。` } },
    { q: `I ___ what you mean.`, o: [`am understanding`, `understand`], a: 1,
      e: { en: `<i>Understand</i> is a state verb → simple form.`, ja: `understand は状態動詞なので単純形です。` } },
    { q: `He ___ late for class.`, o: [`is often`, `often is`], a: 0,
      e: { en: `Frequency adverbs go after <i>be</i>.`, ja: `頻度の副詞は be動詞の後に置きます。` } },
    { q: `I use English ___.`, o: [`every day`, `everyday`], a: 0,
      e: { en: `<i>Every day</i> (two words) = each day; <i>everyday</i> is an adjective.`, ja: `every day（2語）＝毎日。everyday は形容詞です。` } },
    { q: { en: `Which sentence describes a temporary situation?`, ja: `一時的な状況を表す文は？` },
      o: [`I work from home.`, `I'm working from home this week.`], a: 1,
      e: { en: `The continuous presents it as temporary; the simple describes the general routine.`, ja: `進行形は一時的な状況、単純形は普段の習慣を表します。` } }
  ]
});

GH.topic({
  id: "present-continuous", ch: "tense", p: 34,
  t: { en: "02 · Present continuous", ja: "02・現在進行形" },
  d: { en: "Activities in progress around now, temporary situations, change, repeated behavior, and future arrangements.", ja: "今ごろ進行中の活動、一時的な状況、変化、繰り返される行動、未来の予定" },
  body: [
    { k: "core", en: `An activity viewed as <b>in progress around now</b>, or a situation presented as temporary, developing, or arranged for the future.`,
      ja: `<b>今ごろ進行中</b>の活動、あるいは一時的・変化中・予定済みの状況を表します。` },
    { k: "form", rows: [
      ["aff", "S + am/is/are + V-ing", "She is checking the bill."],
      ["neg", "S + am/is/are not + V-ing", "She isn't checking the bill."],
      ["q", "Am/Is/Are + S + V-ing?", "Is she checking the bill?"],
      ["short", "Yes, S + be. / No, S + be not.", "Yes, she is. / No, she isn't."]
    ] },
    { k: "h", en: "Main uses", ja: "主な用法" },
    { k: "ex", items: [
      [`Please wait — I'm <b>checking</b> your account.`, { en: `happening now`, ja: `今まさに行っている` }],
      [`I'm <b>reading</b> a book about language.`, { en: `around now, not necessarily this second`, ja: `最近・このところ（今この瞬間とは限らない）` }],
      [`She's <b>staying</b> with her cousin this month.`, { en: `temporary situation`, ja: `一時的な状況` }],
      [`My English is <b>improving</b>. Prices are <b>rising</b>.`, { en: `development or change`, ja: `変化・発展` }],
      [`He's always <b>losing</b> his keys!`, { en: `repeated behavior with an attitude, often irritation`, ja: `繰り返される行動（いらだち・驚きなど）` }],
      [`I'm <b>meeting</b> a colleague at six.`, { en: `future arrangement`, ja: `未来の予定（手配済み）` }]
    ] },
    { k: "tl", t: { en: "Present continuous on a timeline", ja: "現在進行形をタイムラインで見る" }, rows: [
      { l: { en: "Right now", ja: "今まさに" }, s: `Please wait — I'm checking your account.`, m: [["wave", -0.16, 0.16]],
        n: { en: "In progress at this moment.", ja: "今この瞬間に進行中。" } },
      { l: { en: "Temporary", ja: "一時的" }, s: `She's staying with her cousin this month.`, m: [["wave", -0.42, 0.42], ["span", -0.42, 0.42, { en: "this month", ja: "今月" }]],
        n: { en: "Around now, for a limited time.", ja: "今を含む限られた期間。" } },
      { l: { en: "Arrangement", ja: "手配済みの予定" }, s: `I'm meeting a colleague at six.`, m: [["o", 0.5, { en: "six o'clock", ja: "6時" }]],
        n: { en: "A future plan already fixed with someone.", ja: "相手と決めてある未来の予定。" } }
    ] },
    { k: "h", en: "Compare the viewpoint", ja: "見方を比べる" },
    { k: "p", en: `<x>She is kind</x> describes her character; <x>She is being kind</x> describes her behavior now. <x>I think it's correct</x> is an opinion; <x>I'm thinking about the answer</x> is active consideration. <x>This soup tastes good</x> is a quality; <x>The chef is tasting the soup</x> is an action.`,
      ja: `<x>She is kind.</x> は性格、<x>She is being kind.</x> は今の振る舞いです。<x>I think it's correct.</x> は意見、<x>I'm thinking about the answer.</x> は検討中。<x>This soup tastes good.</x> は性質、<x>The chef is tasting the soup.</x> は動作です。` },
    { k: "p", en: `Continuous doesn't mean "every second without a break": <x>I'm learning Japanese</x> includes sleep and other activities. Nor does it promise completion: <x>I'm writing a report</x> says nothing about finishing. Common time words: <i>now, right now, at the moment, currently, these days, this week</i>.`,
      ja: `進行形は「一瞬も休まず」という意味ではありません（<x>I'm learning Japanese.</x> には寝ている時間も含まれます）。完了も約束しません（<x>I'm writing a report.</x> は書き終えるかどうかを述べていません）。よく使う語：<i>now, right now, at the moment, currently, these days, this week</i>。` },
    { k: "watch", en: `Don't drop <i>be</i>: <x>I am studying</x>, not <s>I studying</s>. In these state meanings use <x>I want / I know / I belong</x>, not <s>I am wanting / knowing / belonging</s>.`,
      ja: `be を落とさないこと：<s>I studying</s> ではなく <x>I am studying</x>。状態を表す意味では、<s>I am wanting / knowing / belonging</s> ではなく <x>I want / I know / I belong</x> を使います。` },
    { k: "tip", en: `〜ている is not always the present continuous. 結婚している = <x>I'm married</x>; 知っている = <x>I know</x>; 窓が開いている = <x>The window is open</x>. Use <i>be + V-ing</i> only for an activity in progress or a temporary situation.`,
      ja: `「〜ている」がいつも現在進行形になるとは限りません。「結婚している」＝<x>I'm married</x>、「知っている」＝<x>I know</x>、「窓が開いている」＝<x>The window is open</x>。be＋-ing は、進行中の活動や一時的な状況にだけ使います。` }
  ],
  q: [
    { q: `Please wait. I ___ (check) your account.`, i: [`am checking`, `'m checking`],
      e: { en: `An action in progress now → present continuous.`, ja: `今進行中の動作 → 現在進行形です。` } },
    { q: `This week she ___ at a different branch.`, o: [`works`, `is working`], a: 1,
      e: { en: `A temporary situation → continuous.`, ja: `一時的な状況 → 進行形です。` } },
    { q: `Look! It ___.`, o: [`snows`, `is snowing`], a: 1,
      e: { en: `It is happening right now.`, ja: `今まさに起きていることです。` } },
    { q: `I ___ my dentist at 4 p.m. tomorrow.`, h: { en: `The appointment is already arranged.`, ja: `予約済みです。` }, o: [`see`, `am seeing`, `am see`], a: 1,
      e: { en: `A future arrangement → present continuous.`, ja: `手配済みの未来の予定 → 現在進行形です。` } },
    { q: `He ___ his keys! It's so annoying.`, o: [`always loses`, `is always losing`], a: 1,
      e: { en: `<i>Always</i> + continuous often expresses irritation.`, ja: `always＋進行形は、いらだちを表すことが多いです。` } },
    { q: `I ___ this song.`, o: [`am liking`, `like`], a: 1,
      e: { en: `<i>Like</i> is a state verb.`, ja: `like は状態動詞です。` } },
    { q: `Prices ___ every month.`, o: [`are rising`, `rising`], a: 0,
      e: { en: `Change in progress — and don't drop <i>be</i>.`, ja: `進行中の変化です。be を落とさないこと。` } },
    { q: { en: `What does <x>She is being very patient today</x> mean?`, ja: `<x>She is being very patient today</x> の意味は？` },
      o: [{ en: "She is a patient person by nature.", ja: "もともと我慢強い性格だ。" }, { en: "She is behaving patiently today.", ja: "今日は我慢強く振る舞っている。" }], a: 1,
      e: { en: `<i>Be being</i> + adjective = current behavior.`, ja: `be being＋形容詞は今の振る舞いを表します。` } },
    { q: `___ you working on the report right now?`, o: [`Do`, `Are`, `Is`], a: 1,
      e: { en: `Question: <i>Are</i> + <i>you</i> + V-ing.`, ja: `Are＋you＋-ing の形です。` } },
    { q: { en: `Which sentence says he has a wife (a state)?`, ja: `「彼は結婚している（妻がいる）」を表す文は？` },
      o: [`He is marrying.`, `He is married.`, `He marries.`], a: 1,
      e: { en: `A state: <i>be married</i>. <i>He is marrying</i> would mean a wedding is happening now or planned.`, ja: `状態は be married です。He is marrying だと「結婚式の最中・予定」の意味になります。` } }
  ]
});

GH.topic({
  id: "present-perfect", ch: "tense", p: 35,
  t: { en: "03 · Present perfect simple", ja: "03・現在完了形" },
  d: { en: "Looking back from now: results, experience, open periods, continuing states — plus been vs gone and perfect vs past.", ja: "今から振り返る：結果・経験・まだ終わっていない期間・継続する状態。been と gone、現在完了と過去形の違いも" },
  body: [
    { k: "core", en: `Look back <b>from now</b> to an earlier situation, experience, result, or duration. The present viewpoint is essential — it is not just another past tense.`,
      ja: `<b>今の時点から</b>、それ以前の状況・経験・結果・継続期間を振り返ります。視点が「今」にあることが本質で、単なる過去形の言い換えではありません。` },
    { k: "form", rows: [
      ["aff", "S + have/has + V3", "I have eaten. She has left."],
      ["neg", "S + have/has not + V3", "I haven't eaten. She hasn't left."],
      ["q", "Have/Has + S + V3?", "Have you eaten? Has she left?"],
      ["short", "Yes, S + have/has.", "Yes, I have. / No, she hasn't."]
    ] },
    { k: "h", en: "Four major meanings", ja: "4つの主な意味" },
    { k: "ex", items: [
      [`I've <b>lost</b> my key.`, { en: `present result: the key is missing now`, ja: `現在の結果：鍵が今もない（完了・結果）` }],
      [`Have you ever <b>worked</b> abroad?`, { en: `experience up to now`, ja: `今までの経験` }],
      [`I've <b>answered</b> ten emails today.`, { en: `an open period that is still going on`, ja: `まだ終わっていない期間での回数・量` }],
      [`I've <b>known</b> her for five years.`, { en: `a continuing state`, ja: `継続している状態` }]
    ] },
    { k: "tl", t: { en: "Present perfect: looking back from now", ja: "現在完了：今から振り返る" }, rows: [
      { l: { en: "Result", ja: "結果" }, s: `I've lost my key.`, m: [["x", -0.5, { en: "lost it", ja: "なくした" }], ["arc", -0.5, 0, { en: "still missing", ja: "今もない" }]],
        n: { en: "A past event with a result that matters now.", ja: "過去の出来事が、今に結果を残している。" } },
      { l: { en: "Experience", ja: "経験" }, s: `I've worked abroad twice.`, m: [["x", -0.78], ["x", -0.4], ["span", -0.96, 0, { en: "in my life so far", ja: "今までの人生で" }]],
        n: { en: "Some time up to now — exactly when doesn't matter.", ja: "今までのどこかで。いつだったかは問題にしない。" } },
      { l: { en: "Continuing state", ja: "継続" }, s: `I've known her for five years.`, m: [["bar", -0.7, 0], ["span", -0.7, 0, { en: "for five years", ja: "5年間" }]],
        n: { en: "A state from the past up to now — and still true.", ja: "過去から今まで続き、今も続いている状態。" } },
      { l: { en: "Compare: past simple", ja: "比較：過去形" }, s: `I saw him yesterday.`, m: [["ref", -0.55, { en: "yesterday", ja: "昨日" }], ["x", -0.55]],
        n: { en: "A finished time, with no link to now → past simple.", ja: "終わった時で、今とのつながりなし → 過去形。" } }
    ] },
    { k: "h", en: "Useful words", ja: "よく使う語" },
    { k: "p", en: `<i>ever / never</i>: <x>Have you ever tried it?</x> <x>I've never tried it.</x> <i>already</i>: <x>I've already paid.</x> <i>yet</i>: <x>Have you paid yet?</x> <x>I haven't paid yet.</x> <i>just</i>: <x>She's just arrived.</x> <i>still</i>: <x>I still haven't received it.</x> Also <i>so far, up to now, recently, lately</i>.`,
      ja: `<i>ever / never</i>：<x>Have you ever tried it?</x>／<x>I've never tried it.</x> <i>already</i>：<x>I've already paid.</x> <i>yet</i>：<x>Have you paid yet?</x>／<x>I haven't paid yet.</x> <i>just</i>：<x>She's just arrived.</x> <i>still</i>：<x>I still haven't received it.</x> ほかに <i>so far, up to now, recently, lately</i> など。` },
    { k: "p", en: `<i>For</i> + a length of time: <x>for two years</x>. <i>Since</i> + a starting point: <x>since 2024</x>, <x>since I moved here</x>. <x>How long have you lived here?</x> asks about a duration continuing to now.`,
      ja: `<i>for</i>＋期間（<x>for two years</x>）、<i>since</i>＋起点（<x>since 2024</x>、<x>since I moved here</x>）。<x>How long have you lived here?</x> は、今まで続いている期間を尋ねます。` },
    { k: "h", en: "Been versus gone", ja: "been と gone" },
    { k: "p", en: `<x>She's been to Tokyo</x> = she visited (experience) and probably came back. <x>She's gone to Tokyo</x> = she left and is there, or on the way, now. <x>She's been in Tokyo for a week</x> = her stay continues.`,
      ja: `<x>She's been to Tokyo.</x>＝東京に行ったことがある（経験。たいてい戻っている）。<x>She's gone to Tokyo.</x>＝東京に行ってしまった（今ここにいない）。<x>She's been in Tokyo for a week.</x>＝1週間東京に滞在している（継続）。` },
    { k: "h", en: "Present perfect vs past simple", ja: "現在完了と過去形" },
    { k: "p", en: `<x>I have seen that film</x> gives an experience relevant now. <x>I saw it last Friday</x> places it in finished past time. Don't combine the present perfect with a finished time: <x>I saw him yesterday</x>, not <s>I have seen him yesterday</s>.`,
      ja: `<x>I have seen that film.</x> は今につながる経験、<x>I saw it last Friday.</x> は終わった過去の時点に位置づけます。現在完了を過去の特定の時点と一緒に使わないこと：<s>I have seen him yesterday.</s> ではなく <x>I saw him yesterday.</x> です。` },
    { k: "watch", en: `Perfect doesn't always mean completed: <x>I've owned this phone for a year</x> normally means I still own it. American English often uses the past simple with <i>just / already / yet</i> (<x>Did you eat yet?</x>) — a regional difference, not an error.`,
      ja: `完了形はいつも「完了した」という意味ではありません。<x>I've owned this phone for a year.</x> は通常、今も持っているという意味です。アメリカ英語では just / already / yet と過去形を使うこともよくあります（<x>Did you eat yet?</x>）。地域差であって誤りではありません。` },
    { k: "tip", en: `もう食べた is <x>I've already eaten</x> (present perfect). Useful clues: もう (already), まだ〜ない (not yet), 〜したことがある (ever / never), ずっと〜している (for / since). But with 昨日 or 先週, use the past simple.`,
      ja: `「もう食べた」は <x>I've already eaten.</x>（現在完了）です。「もう」（already）、「まだ〜ない」（not yet）、「〜したことがある」（ever / never）、「ずっと〜している」（for / since）が手がかりです。ただし「昨日」「先週」など過去の時点があれば過去形を使います。` }
  ],
  q: [
    { q: `I ___ (know) Mei since 2024.`, i: [`have known`, `'ve known`],
      e: { en: `A state continuing up to now → present perfect.`, ja: `今まで続いている状態 → 現在完了です。` } },
    { q: `I ___ him yesterday.`, o: [`have seen`, `saw`], a: 1,
      e: { en: `<i>Yesterday</i> is finished time → past simple.`, ja: `yesterday は終わった時点なので過去形です。` } },
    { q: `Have you ___ been to Kyoto?`, o: [`ever`, `yet`, `already`], a: 0,
      e: { en: `An experience question: <i>Have you ever…?</i>`, ja: `経験を尋ねる Have you ever…? の形です。` } },
    { q: `I haven't finished my homework ___.`, o: [`already`, `yet`, `just`], a: 1,
      e: { en: `Negative: <i>not … yet</i>.`, ja: `否定文では not … yet を使います。` } },
    { q: `She's ___ arrived — she's taking off her coat.`, o: [`just`, `yet`, `ever`], a: 0,
      e: { en: `<i>Just</i> = very recently.`, ja: `just＝たった今です。` } },
    { q: { en: `Mika isn't here; she is in Tokyo now. Which sentence fits?`, ja: `ミカは今ここにいない。東京に行っている。合う文は？` },
      o: [`She's been to Tokyo.`, `She's gone to Tokyo.`], a: 1,
      e: { en: `<i>Has gone</i> = she left and is there now.`, ja: `has gone は「行ってしまって今ここにいない」です。` } },
    { q: `We've lived here ___ ten years.`, o: [`since`, `for`], a: 1,
      e: { en: `<i>For</i> + a length of time.`, ja: `期間には for を使います。` } },
    { q: `We've lived here ___ 2016.`, o: [`since`, `for`], a: 0,
      e: { en: `<i>Since</i> + a starting point.`, ja: `起点には since を使います。` } },
    { q: `Oh no! I ___ my key, so I can't get in.`, o: [`have lost`, `had lost`, `was losing`], a: 0,
      e: { en: `A present result: the key is missing now.`, ja: `現在の結果：鍵が今もないことを表します。` } },
    { q: `How long ___ here?`, o: [`do you live`, `have you lived`, `are you living`], a: 1,
      e: { en: `A duration up to now → present perfect.`, ja: `今までの期間を尋ねるので現在完了です。` } }
  ]
});

GH.topic({
  id: "present-perfect-continuous", ch: "tense", p: 36,
  t: { en: "04 · Present perfect continuous", ja: "04・現在完了進行形" },
  d: { en: "Activity or duration up to now, recent activity with visible effects, and when to prefer the simple form.", ja: "今までの活動・継続期間、影響の見える最近の活動、そして完了形（単純形）を選ぶべき場合" },
  body: [
    { k: "core", en: `Focus on an <b>activity extending over time toward now</b>, or a recent activity whose effects you can see. It may still be happening — or may have just stopped.`,
      ja: `<b>今に向かって続いてきた活動</b>、あるいは影響が見えている最近の活動に焦点を当てます。まだ続いていることも、直前に終わったこともあります。` },
    { k: "form", rows: [
      ["aff", "S + have/has been + V-ing", "I have been studying."],
      ["neg", "S + have/has not been + V-ing", "She hasn't been sleeping well."],
      ["q", "Have/Has + S + been + V-ing?", "Have you been waiting long?"],
      ["short", "Yes, S + have/has.", "Yes, I have. / No, I haven't."]
    ] },
    { k: "h", en: "Main uses", ja: "主な用法" },
    { k: "ex", items: [
      [`I've been <b>studying</b> for two hours.`, { en: `activity continuing to now; the focus is time spent`, ja: `今まで続いている活動（費やした時間に注目）` }],
      [`She's been <b>working</b> late this week.`, { en: `repeated activity in a recent period`, ja: `最近の期間に繰り返されている活動` }],
      [`You're out of breath. Have you been <b>running</b>?`, { en: `recent activity with evidence; it may have stopped`, ja: `影響が見える最近の活動（もう終わっているかもしれない）` }],
      [`I've been <b>staying</b> with a friend while I look for a room.`, { en: `a temporary ongoing situation`, ja: `一時的に続いている状況` }]
    ] },
    { k: "tl", t: { en: "Activity up to now", ja: "今まで続く活動" }, rows: [
      { l: { en: "Duration", ja: "継続期間" }, s: `I've been studying for two hours.`, m: [["wave", -0.55, 0], ["span", -0.55, 0, { en: "two hours", ja: "2時間" }]],
        n: { en: "The activity runs up to now (and may go on).", ja: "活動が今まで続いている（この先も続くかもしれない）。" } },
      { l: { en: "Recent, with evidence", ja: "直前の活動の跡" }, s: `I'm out of breath because I've been running.`, m: [["wave", -0.62, -0.18, { en: "running", ja: "走っていた" }], ["arc", -0.18, 0, { en: "out of breath", ja: "息切れ" }]],
        n: { en: "The running may have just stopped; its effect shows now.", ja: "走るのは直前に終わったかもしれないが、影響が今見えている。" } },
      { l: { en: "Compare: counting results", ja: "比較：結果を数える" }, s: `I've written three emails.`, m: [["x", -0.62], ["x", -0.38], ["x", -0.14], ["arc", -0.14, 0, { en: "three done", ja: "3通完了" }]],
        n: { en: "Finished results you can count → present perfect simple.", ja: "数えられる完成した結果 → 現在完了（単純形）。" } }
    ] },
    { k: "h", en: "Duration versus result", ja: "継続か結果か" },
    { k: "p", en: `<x>I've written three emails</x> counts completed results. <x>I've been writing emails</x> stresses the activity, with no count. <x>I've cleaned the room</x> — the result. <x>I've been cleaning the room</x> — may explain why I'm tired; it doesn't promise the room is finished.`,
      ja: `<x>I've written three emails.</x> は完成した数を数えます。<x>I've been writing emails.</x> は活動に重点があり、数は述べません。<x>I've cleaned the room.</x>＝結果（掃除が終わった）。<x>I've been cleaning the room.</x>＝疲れている理由などを説明し、掃除が終わったとは限りません。` },
    { k: "p", en: `With <i>live, work, study</i>, both forms work: <x>I've lived here for two years</x> / <x>I've been living here for two years.</x> The continuous highlights the activity or a temporary feel.`,
      ja: `<i>live, work, study</i> では両方使えます：<x>I've lived here for two years.</x>／<x>I've been living here for two years.</x> 進行形は活動そのものや一時的な感じを強調します。` },
    { k: "h", en: "When the simple form is better", ja: "完了形（単純形）を選ぶとき" },
    { k: "p", en: `State meanings prefer the simple perfect: <x>I've known her for years</x>, not <s>I've been knowing her</s>; <x>I've had this phone since May</x>, not <s>I've been having</s>. Single completed events too: <x>The train has arrived.</x>`,
      ja: `状態を表す意味では完了形（単純形）を使います：<s>I've been knowing her</s> ではなく <x>I've known her for years.</x>、<s>I've been having</s> ではなく <x>I've had this phone since May.</x> 1回で完了する出来事も同様です：<x>The train has arrived.</x>` },
    { k: "p", en: `Negatives need care: <x>I haven't been sleeping well</x> = poor sleep over a period; <x>I haven't slept</x> = no sleep at all in that period.`,
      ja: `否定文には注意が必要です：<x>I haven't been sleeping well.</x>＝このところよく眠れていない。<x>I haven't slept.</x>＝（その期間）まったく寝ていない。` },
    { k: "watch", en: `<i>For two hours</i> doesn't automatically require the continuous: <x>I've known him for two hours</x> is a state. Ask yourself: do I mean activity and duration, or a state, result, or count?`,
      ja: `<i>for two hours</i> があるから進行形、とは限りません。<x>I've known him for two hours.</x> は状態です。活動と継続期間を言いたいのか、状態・結果・数を言いたいのかを考えましょう。` },
    { k: "tip", en: `ずっと〜している often becomes the present perfect continuous (<x>I've been waiting for an hour</x>), but not with state verbs: ずっと知っている = <x>I've known</x>; ずっと持っている = <x>I've had</x>.`,
      ja: `「ずっと〜している」は現在完了進行形になることが多いですが（<x>I've been waiting for an hour.</x>）、状態動詞は例外です：「ずっと知っている」＝<x>I've known</x>、「ずっと持っている」＝<x>I've had</x>。` }
  ],
  q: [
    { q: `I ___ (study) for two hours, and I'm still going.`, h: { en: `Emphasize the activity.`, ja: `活動を強調します。` }, i: [`have been studying`, `'ve been studying`],
      e: { en: `Activity continuing to now → present perfect continuous.`, ja: `今まで続いている活動 → 現在完了進行形です。` } },
    { q: `You look tired. ___ you been working late?`, o: [`Have`, `Did`, `Are`], a: 0,
      e: { en: `<i>Have</i> + subject + <i>been</i> + V-ing.`, ja: `Have＋主語＋been＋-ing の形です。` } },
    { q: `I ___ her for years.`, o: [`have been knowing`, `have known`], a: 1,
      e: { en: `<i>Know</i> is a state → simple perfect.`, ja: `know は状態動詞なので現在完了（単純形）です。` } },
    { q: `I ___ three emails this morning.`, h: { en: `Count the finished emails.`, ja: `書き終えた数を数えます。` }, o: [`have been writing`, `have written`], a: 1,
      e: { en: `Counting completed results → simple perfect.`, ja: `完成した数を数えるので現在完了（単純形）です。` } },
    { q: `My hands are dirty because I ___ the garden.`, o: [`have been working in`, `am working in`, `work in`], a: 0,
      e: { en: `A recent activity with visible evidence.`, ja: `目に見える影響を残す最近の活動です。` } },
    { q: `How long ___ for the bus?`, o: [`are you waiting`, `have you been waiting`, `do you wait`], a: 1,
      e: { en: `Duration up to now → present perfect continuous.`, ja: `今までの継続期間 → 現在完了進行形です。` } },
    { q: `The train ___.`, h: { en: `It is at the platform now.`, ja: `今ホームに着いている。` }, o: [`has been arriving`, `has arrived`], a: 1,
      e: { en: `A single completed event → simple perfect.`, ja: `1回で完了する出来事なので現在完了（単純形）です。` } },
    { q: { en: `Does <x>I've been running</x> mean you are running at this moment?`, ja: `<x>I've been running</x> は「今この瞬間に走っている」という意味？` },
      o: [{ en: "Not necessarily — you may have just stopped.", ja: "そうとは限らない。直前に終わったこともある。" }, { en: "Yes, always.", ja: "はい、必ずそうだ。" }], a: 0,
      e: { en: `It connects the activity to now; you might say it out of breath, just after stopping.`, ja: `活動と今のつながりを表します。走り終えて息を切らしているときにも使えます。` } },
    { q: `I ___ well lately.`, h: { en: `poor sleep over a period`, ja: `このところよく眠れていない` }, o: [`haven't slept`, `haven't been sleeping`], a: 1,
      e: { en: `A continuous negative = poor sleep over a period.`, ja: `進行形の否定で「このところ〜できていない」を表します。` } },
    { q: `I ___ this phone since May.`, o: [`have had`, `have been having`], a: 0,
      e: { en: `Possession is a state → simple perfect.`, ja: `所有は状態なので現在完了（単純形）です。` } }
  ]
});

GH.topic({
  id: "present-choices", ch: "tense", p: 37,
  t: { en: "Present forms: choose the meaning", ja: "現在時制の使い分け" },
  d: { en: "Simple, continuous, perfect or perfect continuous? Choose by meaning — plus how long vs when, and already/yet/still/just.", ja: "現在形・現在進行形・現在完了・現在完了進行形の使い分け、How long と When、already・yet・still・just" },
  body: [
    { k: "table", head: [{ en: "What you want to say", ja: "伝えたいこと" }, "@example", { en: "Why this form", ja: "理由" }], rows: [
      [{ en: "General routine or fact", ja: "普段の習慣・事実" }, `<x>I work at a phone shop.</x>`, { en: "present simple describes my situation", ja: "現在形で普段の状況を表す" }],
      [{ en: "Temporary current activity", ja: "一時的な現在の活動" }, `<x>I'm working at another branch this week.</x>`, { en: "continuous = temporary", ja: "進行形＝一時的" }],
      [{ en: "Completed amount up to now", ja: "今までに終えた量" }, `<x>I've helped twelve customers today.</x>`, { en: "perfect counts results", ja: "完了形は結果を数える" }],
      [{ en: "Activity leading up to now", ja: "今まで続いてきた活動" }, `<x>I've been helping customers all morning.</x>`, { en: "perfect continuous stresses time and effort", ja: "完了進行形は時間と労力を強調" }]
    ] },
    { k: "flow", t: { en: "Which present form?", ja: "どの現在時制？" }, start: "link", n: {
      link: { q: { en: "Does your sentence connect the past with now? (up to now, so far, since, for, ever, already)", ja: "過去と今をつなぐ内容？（今まで・これまで・since・for・ever・already）" }, o: [
        [{ en: "No — it's about now, or about in general", ja: "いいえ：今のこと、または一般的なこと" }, "gen"],
        [{ en: "Yes — it looks back from now", ja: "はい：今から振り返る" }, "back"]] },
      gen: { q: { en: "Is it a routine, a fact, or a general state — or something temporary, in progress, or changing?", ja: "習慣・事実・一般的な状態？それとも一時的・進行中・変化中のこと？" }, o: [
        [{ en: "Routine, fact, general state", ja: "習慣・事実・一般的な状態" }, "ps"],
        [{ en: "Temporary, in progress, changing", ja: "一時的・進行中・変化中" }, "state1"]] },
      state1: { q: { en: "Is the verb a state verb here? (know, like, want, own, believe, understand)", ja: "ここでの動詞は状態動詞？（know, like, want, own, believe, understand など）" }, o: [
        [{ en: "Yes, a state", ja: "はい、状態" }, "psState"],
        [{ en: "No, an activity", ja: "いいえ、動作" }, "pc"]] },
      back: { q: { en: "What do you want to focus on?", ja: "何に注目したい？" }, o: [
        [{ en: "A result, an amount, an experience, or a state", ja: "結果・量・経験・状態" }, "pp"],
        [{ en: "The activity itself and the time it has taken", ja: "活動そのものと、かかった時間" }, "state2"]] },
      state2: { q: { en: "Is the verb a state verb here? (know, have = own, be, believe)", ja: "ここでの動詞は状態動詞？（know, have＝持っている, be, believe など）" }, o: [
        [{ en: "Yes, a state", ja: "はい、状態" }, "ppState"],
        [{ en: "No, an activity", ja: "いいえ、動作" }, "ppc"]] },
      ps: { r: { en: "present simple", ja: "現在形" }, ex: [`I work at a phone shop.`, `Water boils at 100°C.`] },
      psState: { r: { en: "present simple", ja: "現在形" }, nt: { en: "State verbs stay simple, even for now.", ja: "状態動詞は、今のことでも単純形のままです。" }, ex: [`I know the answer.`, `I like this song.`] },
      pc: { r: { en: "present continuous", ja: "現在進行形" }, ex: [`I'm working at another branch this week.`, `Prices are rising.`] },
      pp: { r: { en: "present perfect", ja: "現在完了形" }, ex: [`I've helped twelve customers today.`, `Have you ever been to Kyoto?`] },
      ppState: { r: { en: "present perfect (simple)", ja: "現在完了形（単純形）" }, nt: { en: "State verbs use the simple perfect for duration.", ja: "状態動詞は、継続でも完了形（単純形）を使います。" }, ex: [`I've known her for years.`, `I've had this phone since May.`] },
      ppc: { r: { en: "present perfect continuous", ja: "現在完了進行形" }, ex: [`I've been helping customers all morning.`, `How long have you been waiting?`] }
    } },
    { k: "h", en: "Present perfect or past simple?", ja: "現在完了か過去形か" },
    { k: "p", en: `<x>I lived in Osaka for two years</x> = a finished past period. <x>I've lived in Osaka for two years</x> = I still live there. <x>I have lived in Osaka before</x> = past experience, without claiming I live there now.`,
      ja: `<x>I lived in Osaka for two years.</x>＝終わった過去の期間。<x>I've lived in Osaka for two years.</x>＝今も住んでいる。<x>I have lived in Osaka before.</x>＝経験（今住んでいるとは言っていない）。` },
    { k: "p", en: `<x>I've seen her twice this week</x> treats the week as still open. <x>I saw her twice this week</x> treats those occasions as finished (and is common in American English). The calendar word alone doesn't decide.`,
      ja: `<x>I've seen her twice this week.</x> は今週をまだ続いている期間として扱います。<x>I saw her twice this week.</x> はその機会を終わったこととして扱います（アメリカ英語でよく使われます）。時を表す語だけでは決まりません。` },
    { k: "h", en: "Perfect simple or continuous?", ja: "完了形か完了進行形か" },
    { k: "ex", items: [
      [`I've <b>read</b> the book.`, { en: `I finished it`, ja: `読み終えた` }],
      [`I've <b>been reading</b> the book.`, { en: `the reading activity; not necessarily finished`, ja: `読んでいる最中（読み終えたとは限らない）` }],
      [`I've <b>waited</b> long enough.`, { en: `the waiting should end now`, ja: `もう十分待った（もう待たない）` }],
      [`I've <b>been waiting</b> for an hour.`, { en: `duration, maybe frustration`, ja: `1時間も待っている（いらだち）` }]
    ] },
    { k: "h", en: `"How long?" and "When?"`, ja: `How long と When` },
    { k: "p", en: `<x>How long have you worked here?</x> asks for the duration up to now. <x>When did you start?</x> asks for the past starting event. <x>How long did you work there?</x> asks about a job that has ended.`,
      ja: `<x>How long have you worked here?</x>＝今までの期間。<x>When did you start?</x>＝過去の開始時点。<x>How long did you work there?</x>＝終わった仕事の期間。` },
    { k: "h", en: "Already, yet, still, just", ja: "already・yet・still・just" },
    { k: "p", en: `<x>She's already left.</x> = earlier than expected. <x>Has she left yet?</x> = by now? <x>She hasn't left yet.</x> = not so far (maybe later). <x>She still hasn't left.</x> = a continuing non-departure, often with surprise. <x>She's just left.</x> = very recently.`,
      ja: `<x>She's already left.</x>＝もう出た（予想より早く）。<x>Has she left yet?</x>＝もう出た？ <x>She hasn't left yet.</x>＝まだ出ていない（これから出るかも）。<x>She still hasn't left.</x>＝いまだに出ていない（驚き）。<x>She's just left.</x>＝たった今出た。` },
    { k: "note", l: { en: "Meaning first", ja: "意味が先" },
      en: `Don't choose a tense just because a sentence contains <i>today, for, since, now</i> or <i>already</i>. Decide whether the period is open or finished, and whether you mean a state, a result, an amount, or an activity.`,
      ja: `<i>today, for, since, now, already</i> があるからといって時制を決めないこと。期間がまだ続いているのか終わったのか、状態・結果・量・活動のどれを伝えたいのかを考えましょう。` },
    { k: "tip", en: `Japanese 〜ている covers 住んでいる (live), 読んでいる (am reading) and more. In English, match the viewpoint: routine → <i>live</i>; right now → <i>am reading</i>; up to now → <i>have lived / have been reading</i>.`,
      ja: `日本語の「〜ている」は「住んでいる」「読んでいる」など幅広く使いますが、英語では見方に合わせます：普段の状況 → <i>live</i>、今まさに → <i>am reading</i>、今まで続いて → <i>have lived / have been reading</i>。` }
  ],
  q: [
    { q: `I ___ (answer) twelve emails so far today.`, h: { en: `Count the completed emails.`, ja: `済んだ数を数えます。` }, i: [`have answered`, `'ve answered`],
      e: { en: `A completed amount in an open period → present perfect.`, ja: `まだ終わっていない期間での数 → 現在完了です。` } },
    { q: { en: `Which sentence says you still live in Osaka?`, ja: `今も大阪に住んでいることを表す文は？` },
      o: [`I lived in Osaka for two years.`, `I've lived in Osaka for two years.`], a: 1,
      e: { en: `Present perfect + <i>for</i> = continuing up to now.`, ja: `現在完了＋for は今まで続いていることを表します。` } },
    { q: `When ___ working here?`, o: [`have you started`, `did you start`], a: 1,
      e: { en: `<i>When</i> asks for a past point → past simple.`, ja: `When は過去の時点を尋ねるので過去形です。` } },
    { q: `How long ___ here?`, h: { en: `You still work here.`, ja: `今もここで働いている。` }, o: [`did you work`, `have you worked`], a: 1,
      e: { en: `Duration up to now → present perfect.`, ja: `今までの期間なので現在完了です。` } },
    { q: `I ___ customers all morning, so I'm tired.`, o: [`have been helping`, `help`], a: 0,
      e: { en: `Activity leading up to now → perfect continuous.`, ja: `今まで続いてきた活動 → 現在完了進行形です。` } },
    { q: `She ___ hasn't replied to my message.`, h: { en: `You're surprised; it's been a long time.`, ja: `驚いている。ずいぶん経つのに。` }, o: [`already`, `still`, `just`], a: 1,
      e: { en: `<i>Still</i> + negative = surprise that it hasn't happened.`, ja: `still＋否定で「いまだに〜ない」です。` } },
    { q: `Have you finished the report ___?`, o: [`already`, `yet`, `still`], a: 1,
      e: { en: `Questions usually use <i>yet</i>.`, ja: `疑問文では通常 yet を使います。` } },
    { q: `I ___ the book, so you can borrow it.`, h: { en: `You finished it.`, ja: `読み終えた。` }, o: [`have been reading`, `have read`], a: 1,
      e: { en: `A completed result → present perfect simple.`, ja: `完了した結果なので現在完了（単純形）です。` } },
    { q: `I ___ at another branch this week.`, o: [`work`, `am working`], a: 1,
      e: { en: `Temporary → continuous.`, ja: `一時的なので進行形です。` } },
    { q: `I ___ at a phone shop.`, h: { en: `your normal job`, ja: `普段の仕事` }, o: [`work`, `am working`], a: 0,
      e: { en: `General situation → present simple.`, ja: `普段の状況なので現在形です。` } }
  ]
});
