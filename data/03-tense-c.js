/* 03 Tense & aspect — part C: future forms (handbook pp. 43–48) */

GH.topic({
  id: "future-will", ch: "tense", p: 43,
  t: { en: "09 · Future simple: will", ja: "09・will の未来" },
  d: { en: "Prediction, instant decisions, offers, promises, requests, refusal and inference — plus will vs going to, and shall.", ja: "予測・その場の決定・申し出・約束・依頼・拒絶・推量、will と going to の違い、shall" },
  body: [
    { k: "core", en: `<code>will + V1</code> expresses the speaker's prediction, willingness, decision, promise, or another judgment. It often refers to the future — but not every <i>will</i> is future.`,
      ja: `<code>will + V1</code> は、話し手の予測・意志・決定・約束などの判断を表します。未来を表すことが多いものの、will がいつも未来を表すとは限りません。` },
    { k: "form", rows: [
      ["aff", "S + will + V1", "I'll call you tomorrow."],
      ["neg", "S + will not + V1", "I won't forget."],
      ["q", "Will + S + V1?", "Will you be here?"],
      ["short", "Yes, S + will.", "Yes, I will. / No, I won't."]
    ] },
    { k: "p", en: `<i>Will</i> is the same for all subjects, and <i>will not</i> contracts to <i>won't</i>. Use V1 after it: <x>will go</x>, <x>will be</x> — not <s>will goes</s> or <s>will to go</s>.`,
      ja: `will はすべての主語で同じ形で、will not の短縮形は won't です。後ろは原形：<x>will go</x>、<x>will be</x>（<s>will goes</s>、<s>will to go</s> は不可）。` },
    { k: "h", en: "Main uses", ja: "主な用法" },
    { k: "ex", items: [
      [`I think the shop <b>will be</b> busy tomorrow.`, { en: `prediction or belief`, ja: `予測・見込み` }],
      [`The phone is ringing. I'<b>ll answer</b> it.`, { en: `a decision made now`, ja: `その場での決定` }],
      [`I'<b>ll carry</b> that for you.`, { en: `offer`, ja: `申し出` }],
      [`I'<b>ll send</b> it by Friday.`, { en: `promise`, ja: `約束` }],
      [`<b>Will</b> you close the door, please?`, { en: `request`, ja: `依頼` }],
      [`He <b>won't</b> listen. The machine <b>won't</b> start.`, { en: `refusal or failure — not future time`, ja: `拒絶・（機械が）どうしても〜しない` }],
      [`That <b>will be</b> the delivery driver.`, { en: `a confident guess about now`, ja: `現在についての推量` }]
    ] },
    { k: "h", en: "Will vs going to", ja: "will と going to" },
    { k: "p", en: `<x>I'll study tonight</x> may announce a decision, promise, or prediction. <x>I'm going to study tonight</x> presents an intention that already exists. "Will = no plan, going to = plan" is a useful starting tendency, not a ban on <i>will</i> for planned events.`,
      ja: `<x>I'll study tonight.</x> はその場の決定・約束・予測を表し、<x>I'm going to study tonight.</x> はすでにある意図を表します。「will＝計画なし、going to＝計画あり」は出発点としては便利ですが、計画に will を使ってはいけないという意味ではありません。` },
    { k: "p", en: `<x>It will rain tomorrow</x> = a forecast or belief. <x>Look at those clouds — it's going to rain</x> = a prediction from present evidence. Neither carries a fixed percentage of certainty.`,
      ja: `<x>It will rain tomorrow.</x>＝予報・見込み。<x>Look at those clouds — it's going to rain.</x>＝今見えている根拠に基づく予測。どちらも確信度の決まった数値を表すわけではありません。` },
    { k: "cmp", t: { en: "will or be going to? A starting guide", ja: "will か be going to か：出発点としての目安" }, cols: [
      { h: `will`, s: { en: "decided or judged as you speak", ja: "話しながら決める・判断する" }, p: [
        { en: "decisions made now, offers, promises", ja: "その場の決定・申し出・約束" },
        { en: "beliefs and forecasts", ja: "見込み・予報" }],
        ex: [`The phone's ringing. I'll get it.`, `I think it will rain tomorrow.`] },
      { h: `be going to`, s: { en: "already in place before you speak", ja: "話す前からあるもの" }, p: [
        { en: "intentions you already have", ja: "すでにある意図" },
        { en: "predictions from what you can see now", ja: "今見えている根拠からの予測" }],
        ex: [`I'm going to apply for the job.`, `Look at those clouds — it's going to rain.`] }
    ], n: { en: `A tendency, not a wall: planned events can still take <i>will</i>, especially in formal announcements.`, ja: `これは傾向であって、厳密な境界ではありません。計画済みのことにも will を使うことがあります（特に改まった告知）。` } },
    { k: "h", en: "Shall", ja: "shall" },
    { k: "p", en: `<x>Shall I help?</x> / <x>Shall we start?</x> are common offers and suggestions, especially in British English. <i>Shall</i> for plain I/we future statements is more formal. Legal <i>shall</i> is specialized — don't copy it into conversation.`,
      ja: `<x>Shall I help?</x>／<x>Shall we start?</x> は申し出・提案によく使います（特にイギリス英語）。I/we の単純な未来に shall を使うのは堅い言い方です。法律文書の shall は特殊な用法なので、会話には使わないこと。` },
    { k: "watch", en: `<i>Will</i> is not automatic for every future sentence. Compare <x>The train leaves at eight</x> (timetable), <x>I'm meeting Mei tonight</x> (arrangement), and <x>I'll call when I arrive</x> (no <i>will</i> after <i>when</i>).`,
      ja: `未来の文にいつも will を使うわけではありません。<x>The train leaves at eight.</x>（時刻表）、<x>I'm meeting Mei tonight.</x>（手配済みの予定）、<x>I'll call when I arrive.</x>（when の後に will は使わない）を比べましょう。` },
    { k: "tip", en: `Japanese 〜ます covers plans, decisions and predictions alike. In English, a decision made on the spot takes <i>will</i>: 電話が鳴っている。私が出ます → <x>I'll get it.</x>, not <s>I'm going to get it</s>.`,
      ja: `日本語の「〜ます」は予定・決定・予測のどれにも使えます。英語では、その場で決めたことには will を使います。「電話が鳴っている。私が出ます」→ <x>I'll get it.</x>（<s>I'm going to get it</s> ではない）。` }
  ],
  q: [
    { q: `The phone is ringing. I ___ it.`, h: { en: `You decide right now.`, ja: `今その場で決めた。` }, o: [`'ll answer`, `'m going to answer`, `answer`], a: 0,
      e: { en: `A decision made at the moment of speaking → <i>will</i>.`, ja: `話している瞬間に決めたことには will を使います。` } },
    { q: `She ___ to the party tomorrow.`, o: [`will comes`, `will come`, `will to come`], a: 1,
      e: { en: `<i>Will</i> + V1.`, ja: `will＋原形です。` } },
    { q: `I promise I ___ tell anyone.`, o: [`won't`, `don't will`, `willn't`], a: 0,
      e: { en: `<i>Will not</i> = <i>won't</i>.`, ja: `will not の短縮形は won't です。` } },
    { q: `That bag looks heavy. I ___ it for you.`, o: [`'ll carry`, `carry`, `am carrying`], a: 0,
      e: { en: `An offer → <i>will</i>.`, ja: `申し出には will を使います。` } },
    { q: `My car ___ start this morning.`, h: { en: `It refused to work.`, ja: `どうしても動かない。` }, o: [`doesn't`, `won't`, `isn't`], a: 1,
      e: { en: `<i>Won't</i> can express refusal or failure.`, ja: `won't は拒絶や「どうしても〜しない」を表せます。` } },
    { q: `___ I open the window?`, h: { en: `You are offering to help.`, ja: `手伝いを申し出ている。` }, o: [`Will`, `Shall`, `Do`], a: 1,
      e: { en: `<i>Shall I…?</i> makes an offer.`, ja: `Shall I…? で申し出を表します。` } },
    { q: `Look at those dark clouds! It ___ rain.`, o: [`will`, `is going to`], a: 1,
      e: { en: `A prediction from present evidence → <i>going to</i>.`, ja: `今見えている根拠に基づく予測なので going to です。` } },
    { q: `Someone's at the door. That ___ the delivery driver.`, o: [`will be`, `is going`, `will`], a: 0,
      e: { en: `<i>Will</i> can express a confident guess about now.`, ja: `will は現在についての推量も表せます。` } },
    { q: `I think prices ___ (rise) next year.`, i: [`will rise`, `'ll rise`, `are going to rise`, `'re going to rise`],
      e: { en: `A belief or forecast → <i>will</i>. <i>Are going to rise</i> is also natural for a prediction.`, ja: `予測・見込みには will を使います。予測なので are going to rise も自然です。` } },
    { q: `I'll call you when I ___ home.`, o: [`will get`, `get`, `got`], a: 1,
      e: { en: `After <i>when</i> (future time), use a present form.`, ja: `未来の時を表す when の後は現在形です。` } }
  ]
});

GH.topic({
  id: "going-to", ch: "tense", p: 44,
  t: { en: "Going to and other future forms", ja: "be going to とその他の未来表現" },
  d: { en: "Intention and evidence with be going to; four future forms compared; be about to, be due to, be to; and gonna.", ja: "be going to の意図と根拠、4つの未来表現の比較、be about to・be due to・be to、gonna" },
  body: [
    { k: "core", en: `<code>be going to + V1</code> expresses an <b>intention</b> that already exists, or a <b>prediction based on present evidence</b>.`,
      ja: `<code>be going to + V1</code> は、すでにある<b>意図</b>、または<b>今の状況に基づく予測</b>を表します。` },
    { k: "form", rows: [
      ["aff", "S + am/is/are going to + V1", "I am going to study. She is going to call."],
      ["neg", "S + am/is/are not going to + V1", "I'm not going to buy it."],
      ["q", "Am/Is/Are + S + going to + V1?", "Are you going to apply?"],
      ["short", "Yes, S + be. / No, S + be not.", "Yes, I am. / No, she isn't."]
    ] },
    { k: "ex", items: [
      [`I've decided. I'm <b>going to apply</b> for the job.`, { en: `the intention existed before I spoke`, ja: `話す前からある意図` }],
      [`Be careful! That glass is <b>going to fall</b>.`, { en: `the present situation supports the prediction`, ja: `今の状況に基づく予測` }],
      [`I'm <b>going to travel</b> the world someday.`, { en: `not only "very soon"`, ja: `近い未来だけではない` }]
    ] },
    { k: "tl", t: { en: "Where going to comes from", ja: "going to の出どころ" }, rows: [
      { l: { en: "Intention", ja: "意図" }, s: `I've decided. I'm going to apply for the job.`, m: [["x", -0.45, { en: "decided", ja: "決めた" }], ["arc", -0.45, 0.55], ["o", 0.55, { en: "apply", ja: "応募" }]],
        n: { en: "The plan existed before you spoke.", ja: "話す前から意図がある。" } },
      { l: { en: "Evidence now", ja: "今の根拠" }, s: `Look at those clouds — it's going to rain.`, m: [["bar", -0.14, 0.14, { en: "dark clouds", ja: "黒い雲" }], ["arc", 0.14, 0.52], ["o", 0.52, { en: "rain", ja: "雨" }]],
        n: { en: "A prediction from what you can see now.", ja: "今見えていることからの予測。" } },
      { l: { en: "Compare: will", ja: "比較：will" }, s: `The phone's ringing. I'll get it.`, m: [["arc", 0, 0.28, { en: "decided now", ja: "今決めた" }], ["o", 0.28, { en: "answer", ja: "出る" }]],
        n: { en: "will: the decision is made at the moment of speaking.", ja: "will：話している瞬間に決めたこと。" } }
    ] },
    { k: "h", en: "Compare four future choices", ja: "4つの未来表現を比べる" },
    { k: "table", head: ["@form", { en: "Typical focus", ja: "主な意味" }, "@example"], rows: [
      [`will + V1`, { en: "decision, promise, willingness, prediction", ja: "決定・約束・意志・予測" }, `<x>I'll call him now.</x>`],
      [`be going to + V1`, { en: "existing intention or present evidence", ja: "すでにある意図・今の根拠" }, `<x>I'm going to call him after work.</x>`],
      [{ en: "present continuous", ja: "現在進行形" }, { en: "a settled arrangement", ja: "手配済みの予定" }, `<x>I'm meeting him at six.</x>`],
      [{ en: "present simple", ja: "現在形" }, { en: "timetable or schedule", ja: "時刻表・スケジュール" }, `<x>His flight arrives at six.</x>`]
    ] },
    { k: "p", en: `<x>I'm going to the station</x> is the present continuous of <i>go</i>, not the going-to future. <x>I'm going to go to the station</x> contains both and is fine.`,
      ja: `<x>I'm going to the station.</x> は go の現在進行形で、未来の be going to ではありません。<x>I'm going to go to the station.</x> は両方を含む正しい文です。` },
    { k: "h", en: "More future expressions", ja: "その他の未来表現" },
    { k: "list", items: [
      { en: `<b>be about to</b> + V1 = on the point of happening: <x>The train is about to leave.</x> (Not with a distant time like <i>next year</i>.)`, ja: `<b>be about to</b>＋原形＝まさに〜しようとしている：<x>The train is about to leave.</x>（next year など遠い時とは使わない）` },
      { en: `<b>be due to</b> + V1 = scheduled or expected: <x>The train is due to arrive at six.</x>`, ja: `<b>be due to</b>＋原形＝〜する予定だ：<x>The train is due to arrive at six.</x>` },
      { en: `<b>be to</b> + V1 = formal plans or instructions: <x>The director is to visit tomorrow.</x>`, ja: `<b>be to</b>＋原形＝（公式の）予定・指示：<x>The director is to visit tomorrow.</x>` },
      { en: `<b>be likely to</b> + V1 = probability: <x>Prices are likely to rise.</x>`, ja: `<b>be likely to</b>＋原形＝〜しそうだ：<x>Prices are likely to rise.</x>` },
      { en: `<b>plan / intend / hope / expect to</b> + V1 = different attitudes. A hope is not a confirmed arrangement.`, ja: `<b>plan / intend / hope / expect to</b>＋原形＝それぞれ異なる態度（hope は確定した予定ではない）` }
    ] },
    { k: "h", en: "Future in the past", ja: "過去から見た未来" },
    { k: "p", en: `<x>I was going to call, but I forgot</x> describes an earlier intention. It often suggests an unfulfilled plan, but not always: <x>I was going to call, and I did.</x>`,
      ja: `<x>I was going to call, but I forgot.</x> は、過去の時点での意図を表します。実現しなかった計画を表すことが多いものの、必ずではありません：<x>I was going to call, and I did.</x>` },
    { k: "watch", en: `<i>Gonna</i> is informal speech for <i>going to</i> + verb: <x>I'm gonna call.</x> Use <i>going to</i> in writing. It never replaces movement <i>going to</i> + a place: not <s>I'm gonna Osaka</s>.`,
      ja: `<i>gonna</i> は going to＋動詞のくだけた話し言葉です（<x>I'm gonna call.</x>）。書き言葉では going to を使いましょう。移動を表す going to＋場所の代わりにはなりません：<s>I'm gonna Osaka</s> は誤りです。` },
    { k: "tip", en: `〜するつもりだ fits <i>be going to</i> (an existing intention): <x>I'm going to study abroad next year.</x> 〜するところだ fits <i>be about to</i>: <x>I'm about to leave.</x>`,
      ja: `「〜するつもりだ」（前から決めている意図）は be going to：<x>I'm going to study abroad next year.</x> 「（ちょうど）〜するところだ」は be about to：<x>I'm about to leave.</x>` }
  ],
  q: [
    { q: `I've already decided. I ___ (apply) next month.`, h: { en: `an existing intention`, ja: `すでにある意図` }, i: [`am going to apply`, `'m going to apply`],
      e: { en: `An existing intention → <i>be going to</i>.`, ja: `すでにある意図には be going to を使います。` } },
    { q: `Watch out! That glass ___ fall.`, o: [`will`, `is going to`], a: 1,
      e: { en: `Present evidence → <i>going to</i>.`, ja: `今の状況に基づく予測なので going to です。` } },
    { q: `I ___ Mei at six tonight.`, h: { en: `The meeting is arranged.`, ja: `会う約束をしている。` }, o: [`meet`, `am meeting`, `will meeting`], a: 1,
      e: { en: `An arrangement → present continuous.`, ja: `手配済みの予定は現在進行形です。` } },
    { q: `The flight ___ at 7:45 tomorrow.`, h: { en: `from the airline's timetable`, ja: `航空会社の時刻表の情報` }, o: [`arrives`, `is arriving to`, `will arriving`], a: 0,
      e: { en: `Timetable → present simple.`, ja: `時刻表は現在形です。` } },
    { q: `Hurry! The train is ___ leave.`, o: [`about to`, `due`, `going`], a: 0,
      e: { en: `<i>Be about to</i> = on the point of happening.`, ja: `be about to＝まさに〜しようとしている。` } },
    { q: `The next train is ___ arrive at 6:15.`, o: [`due to`, `about`, `likely`], a: 0,
      e: { en: `<i>Be due to</i> = scheduled.`, ja: `be due to＝〜する予定です。` } },
    { q: { en: `Which sentence suits formal writing?`, ja: `改まった文章に合うのは？` }, o: [`I'm gonna call her.`, `I'm going to call her.`], a: 1,
      e: { en: `Use <i>going to</i> in writing; <i>gonna</i> is informal speech.`, ja: `書き言葉では going to を使います。gonna はくだけた話し言葉です。` } },
    { q: `I ___ call you, but I forgot. Sorry!`, o: [`was going to`, `am going to`, `will`], a: 0,
      e: { en: `An earlier intention (future in the past).`, ja: `過去の時点での意図（過去から見た未来）です。` } },
    { q: `Prices are ___ to rise next year.`, o: [`likely`, `about`, `due`], a: 0,
      e: { en: `<i>Be likely to</i> = probably will.`, ja: `be likely to＝〜しそうだ。` } },
    { q: { en: `In <x>I'm going to the station</x>, what is <i>going</i>?`, ja: `<x>I'm going to the station</x> の going は？` },
      o: [{ en: "the be-going-to future", ja: "未来を表す be going to" }, { en: "the present continuous of <i>go</i> (movement)", ja: "go（移動）の現在進行形" }], a: 1,
      e: { en: `It's movement to a place, not <i>going to</i> + verb.`, ja: `場所への移動を表す進行形で、going to＋動詞ではありません。` } }
  ]
});

GH.topic({
  id: "future-continuous", ch: "tense", p: 45,
  t: { en: "10 · Future continuous", ja: "10・未来進行形" },
  d: { en: "Activities in progress at a future time, and events expected as part of the normal course of things.", ja: "未来のある時点で進行中の活動、そして自然な成り行きとして予定されている出来事" },
  body: [
    { k: "core", en: `An activity viewed as <b>in progress at a future time</b>. It can also present an expected event as part of the normal course of events.`,
      ja: `<b>未来のある時点で進行中</b>の活動を表します。また、予定どおりの成り行きとして起こる出来事を表すこともあります。` },
    { k: "form", rows: [
      ["aff", "S + will be + V-ing", "I'll be working at eight."],
      ["neg", "S + will not be + V-ing", "I won't be working tomorrow."],
      ["q", "Will + S + be + V-ing?", "Will you be working tomorrow?"],
      ["short", "Yes, S + will.", "Yes, I will. / No, I won't."]
    ] },
    { k: "h", en: "In progress at a future point", ja: "未来のある時点で進行中" },
    { k: "ex", items: [
      [`At this time tomorrow, I'll <b>be flying</b> to Bangkok.`, { en: `inside the flight at that time`, ja: `その時刻には飛行中` }],
      [`Don't call at seven — I'll <b>be having</b> dinner.`, { en: `dinner surrounds that time`, ja: `7時には夕食の最中` }],
      [`When you arrive, I'll <b>be waiting</b> outside.`, { en: `waiting in progress at your arrival`, ja: `到着時に待っている最中` }]
    ] },
    { k: "tl", t: { en: "In progress at a future time", ja: "未来の時点で進行中" }, rows: [
      { l: { en: "Future continuous", ja: "未来進行形" }, s: `At this time tomorrow, I'll be flying to Bangkok.`, m: [["ref", 0.5, { en: "this time tomorrow", ja: "明日の今ごろ" }], ["wave", 0.28, 0.72]],
        n: { en: "You'll be inside the activity at that moment.", ja: "その時点で活動の最中にいる。" } },
      { l: { en: "Compare: a start time", ja: "比較：開始時刻" }, s: `I'll start work at eight.`, m: [["ref", 0.5, { en: "8:00", ja: "8時" }], ["o", 0.5, { en: "start", ja: "開始" }]],
        n: { en: "Work begins at eight.", ja: "8時に始める。" } },
      { l: { en: "Future continuous", ja: "未来進行形" }, s: `I'll be working at eight.`, m: [["ref", 0.5, { en: "8:00", ja: "8時" }], ["wave", 0.22, 0.8]],
        n: { en: "Work is already underway at eight.", ja: "8時にはすでに仕事の最中。" } }
    ] },
    { k: "p", en: `It doesn't say the activity begins at that moment: <x>I'll start work at eight</x> gives a start time; <x>I'll be working at eight</x> says work is already underway at eight.`,
      ja: `その瞬間に始まるという意味ではありません。<x>I'll start work at eight.</x> は開始時刻、<x>I'll be working at eight.</x> は8時には仕事の最中だという意味です。` },
    { k: "h", en: "The expected course of events", ja: "自然な成り行きとしての予定" },
    { k: "p", en: `<x>I'll be seeing Mei tomorrow, so I can give her the form.</x> — the meeting is simply part of my schedule. <x>Will you be using the printer this afternoon?</x> sounds like a neutral question about plans (perhaps before asking to use it); <x>Will you use the printer?</x> can sound like a request.`,
      ja: `<x>I'll be seeing Mei tomorrow, so I can give her the form.</x>：明日会うのは予定の一部なので、ついでに渡せる。<x>Will you be using the printer this afternoon?</x> は相手の予定を中立的に尋ねる言い方（使いたいときの前置きなど）、<x>Will you use the printer?</x> は依頼のように聞こえることがあります。` },
    { k: "h", en: "Continuous and state meanings", ja: "進行形と状態の意味" },
    { k: "p", en: `<x>I'll know the answer tomorrow</x> — not <s>I'll be knowing</s>. <x>I'll be having lunch</x> is fine (an activity), but possession is <x>I'll have a new phone next week</x>.`,
      ja: `<x>I'll know the answer tomorrow.</x>（<s>I'll be knowing</s> は不可）。<x>I'll be having lunch.</x> は活動なので可能ですが、所有は <x>I'll have a new phone next week.</x> です。` },
    { k: "watch", en: `The formula includes <i>be</i>: <x>will be working</x>, not <s>will working</s>. In questions, only <i>will</i> moves: <x>What will you be doing?</x>`,
      ja: `形には be が入ります：<s>will working</s> ではなく <x>will be working</x>。疑問文で前に出すのは will だけです：<x>What will you be doing?</x>` },
    { k: "tip", en: `明日の今ごろは〜しているだろう is exactly the future continuous: <x>This time tomorrow, I'll be sitting on the beach.</x> It places you inside the scene.`,
      ja: `「明日の今ごろは〜しているだろう」は、まさに未来進行形です：<x>This time tomorrow, I'll be sitting on the beach.</x> その場面の中にいる自分を描く表現です。` }
  ],
  q: [
    { q: `At this time tomorrow, I ___ (fly) to Bangkok.`, i: [`will be flying`, `'ll be flying`],
      e: { en: `In progress at a future time → future continuous.`, ja: `未来のある時点で進行中なので未来進行形です。` } },
    { q: `Don't call at seven — I ___ dinner.`, o: [`will have`, `will be having`, `am have`], a: 1,
      e: { en: `Dinner will be in progress at seven.`, ja: `7時には夕食の最中です。` } },
    { q: { en: `Which is correct?`, ja: `正しいのはどれ？` }, o: [`I will working at eight.`, `I will be working at eight.`, `I will be work at eight.`], a: 1,
      e: { en: `<i>Will be</i> + V-ing.`, ja: `will be＋-ing です。` } },
    { q: `What ___ this time next week?`, o: [`will you be doing`, `will you doing`, `are you will do`], a: 0,
      e: { en: `Only <i>will</i> moves before the subject.`, ja: `主語の前に出すのは will だけです。` } },
    { q: `When you arrive, I ___ outside.`, o: [`will be waiting`, `wait`, `waited`], a: 0,
      e: { en: `Waiting will be in progress when you arrive.`, ja: `到着時に待っている最中です。` } },
    { q: { en: `Which sentence neutrally asks about someone's plans (before asking to borrow the car)?`, ja: `（車を借りる前に）相手の予定を中立的に尋ねる文は？` },
      o: [`Will you use the car tonight?`, `Will you be using the car tonight?`], a: 1,
      e: { en: `The future continuous sounds like a neutral question about plans.`, ja: `未来進行形は、予定を中立的に尋ねる響きになります。` } },
    { q: `I ___ the answer tomorrow.`, o: [`will be knowing`, `will know`], a: 1,
      e: { en: `<i>Know</i> is a state → <i>will know</i>.`, ja: `know は状態動詞なので will know です。` } },
    { q: { en: `What does <x>I'll be working at eight</x> say?`, ja: `<x>I'll be working at eight</x> の意味は？` },
      o: [{ en: "Work starts exactly at eight.", ja: "8時ちょうどに仕事を始める。" }, { en: "Work is already underway at eight.", ja: "8時には仕事の最中だ。" }], a: 1,
      e: { en: `The future continuous puts you inside the activity at that time.`, ja: `未来進行形は、その時点で活動の最中であることを表します。` } },
    { q: `I ___ Mei tomorrow anyway, so I can give her the form.`, o: [`'ll be seeing`, `saw`, `have seen`], a: 0,
      e: { en: `The meeting is an expected part of the normal schedule.`, ja: `予定どおりの成り行きとして会うことを表します。` } },
    { q: `We ___ updates every Friday.`, h: { en: `a planned, recurring activity`, ja: `予定された定期的な活動` }, o: [`will be sending`, `sent`, `are sent`], a: 0,
      e: { en: `A planned recurring activity in the future.`, ja: `未来の予定された定期的な活動です。` } }
  ]
});

GH.topic({
  id: "future-perfect", ch: "tense", p: 46,
  t: { en: "11 · Future perfect simple", ja: "11・未来完了形" },
  d: { en: "What will be complete by a future point: deadlines, counts, experience, continuing states — and confident guesses about the past.", ja: "未来のある時点までに完了していること：期限・数・経験・継続する状態、そして過去についての推量" },
  body: [
    { k: "core", en: `Look back from a <b>future reference point</b> at what will already be completed, achieved, experienced, or true by then.`,
      ja: `<b>未来の基準時点</b>から振り返り、その時までに完了・達成・経験していること、または続いていることを表します。` },
    { k: "form", rows: [
      ["aff", "S + will have + V3", "I'll have finished by six."],
      ["neg", "S + will not have + V3", "I won't have finished by six."],
      ["q", "Will + S + have + V3?", "Will you have finished by six?"],
      ["short", "Yes, S + will.", "Yes, I will. / No, I won't."]
    ] },
    { k: "h", en: "Completion before a future deadline", ja: "未来の期限までの完了" },
    { k: "ex", items: [
      [`By Friday, I'<b>ll have sent</b> the documents.`, { en: `sending will be done no later than Friday`, ja: `金曜日までには送り終えている` }],
      [`By the time you arrive, we'<b>ll have prepared</b> the room.`, { en: `the preparation will already be done`, ja: `あなたが着くころには準備が終わっている` }]
    ] },
    { k: "tl", t: { en: "Looking back from a future point", ja: "未来の時点から振り返る" }, rows: [
      { l: { en: "Done by then", ja: "その時までに完了" }, s: `By Friday, I'll have sent the documents.`, m: [["ref", 0.62, { en: "Friday", ja: "金曜日" }], ["o", 0.3, { en: "send", ja: "送る" }], ["arc", 0.3, 0.62]],
        n: { en: "Finished at some point before Friday.", ja: "金曜日より前のどこかで終わっている。" } },
      { l: { en: "A state up to then", ja: "その時までの状態" }, s: `Next month, I'll have known her for ten years.`, m: [["ref", 0.45, { en: "next month", ja: "来月" }], ["bar", -0.9, 0.45], ["span", -0.9, 0.45, { en: "ten years", ja: "10年" }]],
        n: { en: "The state reaches the future point — and continues.", ja: "状態が未来の時点まで届き、その後も続く。" } }
    ] },
    { k: "p", en: `<x>I'll finish at six</x> predicts the finishing time. <x>I'll have finished by six</x> allows earlier completion and focuses on the completed state at six. Note that the <i>by the time</i> clause uses a present form (<i>you arrive</i>).`,
      ja: `<x>I'll finish at six.</x> は終わる時刻の予測、<x>I'll have finished by six.</x> は6時より前に終わる可能性も含み、6時の時点で完了している状態に注目します。by the time の節は現在形（you arrive）を使う点に注意しましょう。` },
    { k: "h", en: "Amounts and experience by a future point", ja: "未来の時点までの量と経験" },
    { k: "ex", items: [
      [`By the end of today, I'<b>ll have helped</b> thirty customers.`, { en: `counts completed instances`, ja: `完了した数を数える` }],
      [`By next year, she'<b>ll have visited</b> ten countries.`, { en: `experience accumulated by then`, ja: `その時までの経験` }]
    ] },
    { k: "h", en: "Duration with states", ja: "状態の継続" },
    { k: "p", en: `<x>Next month, I'll have known her for ten years.</x> The state continues up to that point. <x>By June, I'll have worked here for a year</x> can describe continuing employment — it doesn't end in June.`,
      ja: `<x>Next month, I'll have known her for ten years.</x> 状態がその時点まで続きます。<x>By June, I'll have worked here for a year.</x> も、6月で辞めるという意味ではなく、勤務が続いていることを表せます。` },
    { k: "p", en: `Negative: <x>I won't have finished by six</x> = still incomplete at six (not "never"). A second use: <x>They'll have arrived by now</x> = a confident guess about the past (I assume they've arrived).`,
      ja: `否定：<x>I won't have finished by six.</x>＝6時にはまだ終わっていない（永遠に終わらないという意味ではない）。別の用法：<x>They'll have arrived by now.</x>＝もう着いているだろう（過去についての確信のある推量）。` },
    { k: "watch", en: `Use <x>will have eaten / gone / written</x>, not <s>will have ate / went / wrote</s>. <i>Will</i> needs <i>have</i>, even with he/she/it: <x>She will have finished</x>, not <s>will has finished</s>.`,
      ja: `<s>will have ate / went / wrote</s> ではなく <x>will have eaten / gone / written</x>。he/she/it でも will の後は have：<s>will has finished</s> ではなく <x>She will have finished.</x>` },
    { k: "tip", en: `〜までには…し終えているだろう is the future perfect: <x>By Friday, I'll have finished it.</x> Watch <i>by</i> (までに, a deadline) versus <i>until</i> (まで, continuing).`,
      ja: `「〜までには…し終えているだろう」が未来完了です：<x>By Friday, I'll have finished it.</x> by（〜までに：期限）と until（〜までずっと：継続）の違いにも注意しましょう。` }
  ],
  q: [
    { q: `By Friday, I ___ (finish) the report.`, i: [`will have finished`, `'ll have finished`],
      e: { en: `Completed by a future point → future perfect.`, ja: `未来の時点までに完了するので未来完了です。` } },
    { q: `By the time you arrive, we ___ the room.`, o: [`will prepare`, `will have prepared`, `have prepared`], a: 1,
      e: { en: `Already done at your arrival → future perfect.`, ja: `到着時にはすでに完了しているので未来完了です。` } },
    { q: `By the time you ___, we'll have finished.`, o: [`will arrive`, `arrive`, `arrived`], a: 1,
      e: { en: `A <i>by the time</i> clause uses a present form for future meaning.`, ja: `by the time の節は、未来のことでも現在形です。` } },
    { q: { en: `Which is correct?`, ja: `正しいのはどれ？` }, o: [`She will has finished.`, `She will have finished.`, `She will have finish.`], a: 1,
      e: { en: `<i>Will have</i> + V3 for every subject.`, ja: `すべての主語で will have＋過去分詞です。` } },
    { q: `Next month, I ___ her for ten years.`, o: [`will know`, `will have known`, `will be knowing`], a: 1,
      e: { en: `A state continuing up to a future point.`, ja: `未来の時点まで続く状態です。` } },
    { q: `By the end of today, I ___ thirty customers.`, o: [`will have helped`, `will be helped`, `help`], a: 0,
      e: { en: `Counting completed results by a future point.`, ja: `未来の時点までに完了した数を数えています。` } },
    { q: { en: `What does <x>I won't have finished by six</x> mean?`, ja: `<x>I won't have finished by six</x> の意味は？` },
      o: [{ en: "I will never finish.", ja: "決して終わらない。" }, { en: "It will still be incomplete at six.", ja: "6時の時点ではまだ終わっていない。" }], a: 1,
      e: { en: `It only describes the state at six.`, ja: `6時の時点の状態を述べているだけです。` } },
    { q: `It's 10 p.m. They ___ home by now.`, h: { en: `a confident guess`, ja: `もう着いているだろうという推量` }, o: [`will have arrived`, `will arrive`, `arrive`], a: 0,
      e: { en: `<i>Will have</i> + V3 can be a confident assumption about the past.`, ja: `will have＋過去分詞は「もう〜しただろう」という推量にもなります。` } },
    { q: `By 2030, she ___ ten countries.`, o: [`will have visited`, `will visited`, `has visited`], a: 0,
      e: { en: `Experience accumulated by a future point.`, ja: `未来の時点までの経験です。` } },
    { q: `Please send it ___ Friday.`, h: { en: `Friday is the latest time.`, ja: `金曜日が締め切りです。` }, o: [`until`, `by`], a: 1,
      e: { en: `A deadline → <i>by</i>.`, ja: `期限には by を使います。` } }
  ]
});

GH.topic({
  id: "future-perfect-continuous", ch: "tense", p: 47,
  t: { en: "12 · Future perfect continuous", ja: "12・未来完了進行形" },
  d: { en: "Duration or effort accumulated up to a future point, and how it contrasts with the other future forms.", ja: "未来の時点までに積み重なる継続期間や努力、そして他の未来表現との違い" },
  body: [
    { k: "core", en: `<b>Activity accumulated over a period leading up to a future point</b>, with attention to duration or effort.`,
      ja: `<b>未来のある時点まで続いてきた活動</b>を、その期間や労力に注目して表します。` },
    { k: "form", rows: [
      ["aff", "S + will have been + V-ing", "I'll have been working for six hours."],
      ["neg", "S + will not have been + V-ing", "I won't have been working very long."],
      ["q", "Will + S + have been + V-ing?", "Will you have been waiting long?"],
      ["short", "Yes, S + will.", "Yes, I will. / No, I won't."]
    ] },
    { k: "h", en: "Main uses", ja: "主な用法" },
    { k: "ex", items: [
      [`By eight tonight, I'<b>ll have been studying</b> for three hours.`, { en: `duration measured at eight`, ja: `8時の時点で3時間勉強していることになる` }],
      [`By December, I'<b>ll have been learning</b> Japanese for four years.`, { en: `a long learning history, not nonstop activity`, ja: `長い学習の歴史（休みなくという意味ではない）` }],
      [`She'll be tired when she gets home because she'<b>ll have been working</b> all day.`, { en: `earlier activity explains a future condition`, ja: `未来の状態を説明する、それまでの活動` }]
    ] },
    { k: "tl", t: { en: "Duration up to a future point", ja: "未来の時点までの継続" }, rows: [
      { l: { en: "Time spent", ja: "費やした時間" }, s: `By eight tonight, I'll have been studying for three hours.`, m: [["ref", 0.6, { en: "8 p.m.", ja: "午後8時" }], ["wave", 0.08, 0.6], ["span", 0.08, 0.6, { en: "three hours", ja: "3時間" }]],
        n: { en: "Measured at eight; the studying may go on.", ja: "8時の時点で測った長さ。勉強はその後も続くかもしれない。" } },
      { l: { en: "A long history", ja: "長い歴史" }, s: `By December, I'll have been learning Japanese for four years.`, m: [["ref", 0.6, { en: "December", ja: "12月" }], ["wave", -0.88, 0.6], ["span", -0.88, 0.6, { en: "four years", ja: "4年" }]],
        n: { en: "It started in the past and reaches the future point.", ja: "過去に始まり、未来の時点まで続く。" } }
    ] },
    { k: "h", en: "Compare three forms", ja: "3つの形を比べる" },
    { k: "ex", items: [
      [`At eight, I'<b>ll be studying</b>.`, { en: `inside the activity at eight`, ja: `8時には勉強の最中` }],
      [`By eight, I'<b>ll have studied</b> three chapters.`, { en: `completed material`, ja: `8時までに3章を終える（完了した量）` }],
      [`By eight, I'<b>ll have been studying</b> for three hours.`, { en: `time spent on the activity`, ja: `8時の時点で3時間勉強し続けている（費やした時間）` }]
    ] },
    { k: "p", en: `With <i>live, work, study</i>, both perfect forms fit: <x>By May, I'll have worked here for two years</x> / <x>I'll have been working here for two years.</x> The continuous stresses activity and duration.`,
      ja: `<i>live, work, study</i> では両方の完了形が使えます：<x>By May, I'll have worked here for two years.</x>／<x>I'll have been working here for two years.</x> 進行形は活動と期間を強調します。` },
    { k: "p", en: `The activity doesn't necessarily stop at the reference point: <x>At noon, I'll have been working for four hours</x> doesn't say work ends at noon. For states, use the simple form: <x>By May, I'll have owned this car for ten years</x> (not <s>will have been owning</s>).`,
      ja: `基準時点で活動が終わるとは限りません：<x>At noon, I'll have been working for four hours.</x> は、正午で仕事が終わるとは言っていません。状態には単純形を使います：<x>By May, I'll have owned this car for ten years.</x>（<s>will have been owning</s> は不可）。` },
    { k: "watch", en: `Don't use this form to count finished outputs: <x>By noon, I'll have written five emails</x>, not <s>I'll have been writing five emails</s>.`,
      ja: `完成した数を数えるときには使いません：<s>I'll have been writing five emails</s> ではなく <x>By noon, I'll have written five emails.</x>` },
    { k: "tip", en: `〜の時点で…し続けていることになる (a duration) is the future perfect continuous: 来年の4月で日本語を4年勉強していることになる = <x>By next April, I'll have been studying Japanese for four years.</x>`,
      ja: `「〜の時点で…し続けていることになる」（継続期間）が未来完了進行形です。「来年の4月で日本語を4年勉強していることになる」＝<x>By next April, I'll have been studying Japanese for four years.</x>` }
  ],
  q: [
    { q: `By eight tonight, I ___ (study) for three hours.`, i: [`will have been studying`, `'ll have been studying`],
      e: { en: `Duration up to a future point → future perfect continuous.`, ja: `未来の時点までの継続期間なので未来完了進行形です。` } },
    { q: `By December, I ___ Japanese for four years.`, o: [`will have been learning`, `will be learning`, `learned`], a: 0,
      e: { en: `A long duration measured at a future point.`, ja: `未来の時点で測る長い期間です。` } },
    { q: `By noon, I ___ five emails.`, h: { en: `Count the finished emails.`, ja: `書き終えた数を数えます。` }, o: [`will have been writing`, `will have written`], a: 1,
      e: { en: `Counting completed outputs → future perfect simple.`, ja: `完成した数を数えるので未来完了です。` } },
    { q: `She'll be exhausted because she ___ all day.`, o: [`will have been working`, `will work`, `has worked`], a: 0,
      e: { en: `Earlier activity that explains a future condition.`, ja: `未来の状態を説明する、それまでの活動です。` } },
    { q: `At eight tomorrow, I ___ in the library.`, h: { en: `You'll be in the middle of studying at that time.`, ja: `その時刻には勉強の最中。` }, o: [`will be studying`, `will have been studying`], a: 0,
      e: { en: `In progress at a future point → future continuous.`, ja: `未来の時点で進行中なので未来進行形です。` } },
    { q: `By May, I ___ this car for ten years.`, o: [`will have been owning`, `will have owned`], a: 1,
      e: { en: `<i>Own</i> is a state → future perfect simple.`, ja: `own は状態動詞なので未来完了です。` } },
    { q: { en: `Which is correct?`, ja: `正しいのはどれ？` }, o: [`I will have been work for six hours.`, `I will have been working for six hours.`, `I will been working for six hours.`], a: 1,
      e: { en: `<i>Will have been</i> + V-ing.`, ja: `will have been＋-ing です。` } },
    { q: `___ you have been waiting long by the time I get there?`, o: [`Will`, `Have`, `Are`], a: 0,
      e: { en: `Question: <i>Will</i> + subject + <i>have been</i> + V-ing?`, ja: `疑問文：Will＋主語＋have been＋-ing? の形です。` } },
    { q: { en: `Does <x>At noon, I'll have been working for four hours</x> say you'll stop at noon?`, ja: `<x>At noon, I'll have been working for four hours</x> は正午に仕事をやめるという意味？` },
      o: [{ en: "No — it only measures the duration at noon.", ja: "いいえ。正午の時点での期間を述べているだけ。" }, { en: "Yes — the work ends at noon.", ja: "はい。正午で仕事が終わる。" }], a: 0,
      e: { en: `To state an end, add it: <i>…and then I'll take a break</i>.`, ja: `終わりを言いたいなら …and then I'll take a break のように付け加えます。` } },
    { w: [`By`, `June,`, `I`, `will`, `have`, `been`, `living`, `here`, `for`, `a`, `year.`],
      e: { en: `Future perfect continuous: <i>will have been</i> + V-ing.`, ja: `未来完了進行形：will have been＋-ing です。` } }
  ]
});

GH.topic({
  id: "future-choices", ch: "tense", p: 48,
  t: { en: "Future choices and time clauses", ja: "未来表現の選択と時・条件の副詞節" },
  d: { en: "Matching the message to a future form; present tenses after when and if; and the exceptions where will is allowed.", ja: "伝えたい内容に合う未来表現、when・if の後の現在形、そして will が使える例外" },
  body: [
    { k: "table", head: [{ en: "Intended message", ja: "伝えたいこと" }, { en: "Natural form", ja: "自然な形" }], rows: [
      [{ en: "A decision or offer now", ja: "今の決定・申し出" }, `<x>I'll help you.</x>`],
      [{ en: "An existing intention", ja: "すでにある意図" }, `<x>I'm going to apply.</x>`],
      [{ en: "A prediction from visible evidence", ja: "見えている根拠による予測" }, `<x>That shelf is going to fall.</x>`],
      [{ en: "A belief or forecast", ja: "見込み・予報" }, `<x>I think prices will rise.</x>`],
      [{ en: "An arrangement", ja: "手配済みの予定" }, `<x>I'm meeting Mei at six.</x>`],
      [{ en: "A timetable", ja: "時刻表" }, `<x>The train leaves at six.</x>`],
      [{ en: "In progress at a future time", ja: "未来の時点で進行中" }, `<x>I'll be working at six.</x>`],
      [{ en: "Completed by a future time", ja: "未来の時点までに完了" }, `<x>I'll have finished by six.</x>`],
      [{ en: "Duration up to a future time", ja: "未来の時点までの継続期間" }, `<x>I'll have been working for eight hours by six.</x>`]
    ] },
    { k: "flow", t: { en: "Which future form?", ja: "どの未来表現？" }, start: "tt", n: {
      tt: { q: { en: "Is it a timetable or an official schedule?", ja: "時刻表・公式のスケジュール？" }, o: [
        [{ en: "Yes", ja: "はい" }, "ps"], [{ en: "No", ja: "いいえ" }, "arr"]] },
      arr: { q: { en: "Is it an arrangement you've fixed with other people (time and place set)?", ja: "他の人と決めた予定（日時・場所が決まっている）？" }, o: [
        [{ en: "Yes", ja: "はい" }, "pc"], [{ en: "No", ja: "いいえ" }, "int"]] },
      int: { q: { en: "Did you decide before speaking — or can you see evidence right now?", ja: "話す前に決めていた？または今、根拠が見えている？" }, o: [
        [{ en: "Yes", ja: "はい" }, "gt"], [{ en: "No", ja: "いいえ" }, "now"]] },
      now: { q: { en: "Are you deciding, offering or promising now — or giving your opinion or a forecast?", ja: "今決めた・申し出る・約束する？または意見・予測を述べる？" }, o: [
        [{ en: "Yes", ja: "はい" }, "will"], [{ en: "No — I'm describing a future moment", ja: "いいえ：未来のある時点の様子を述べる" }, "asp"]] },
      asp: { q: { en: "What will be true at that future moment?", ja: "未来のその時点では、どうなっている？" }, o: [
        [{ en: "Something will be in progress", ja: "何かが進行中" }, "fc"],
        [{ en: "Something will be complete", ja: "何かが完了している" }, "fp"],
        [{ en: "An activity will have lasted a certain time", ja: "活動がある時間続いている" }, "fpc"]] },
      ps: { r: { en: "present simple", ja: "現在形" }, ex: [`The train leaves at six.`] },
      pc: { r: { en: "present continuous", ja: "現在進行形" }, ex: [`I'm meeting Mei at six.`] },
      gt: { r: `be going to`, ex: [`I'm going to apply.`, `That shelf is going to fall.`] },
      will: { r: `will`, ex: [`I'll help you.`, `I think prices will rise.`] },
      fc: { r: { en: "future continuous: will be + V-ing", ja: "未来進行形：will be＋-ing" }, ex: [`I'll be working at six.`] },
      fp: { r: { en: "future perfect: will have + V3", ja: "未来完了形：will have＋V3" }, ex: [`I'll have finished by six.`] },
      fpc: { r: { en: "future perfect continuous: will have been + V-ing", ja: "未来完了進行形：will have been＋-ing" }, ex: [`I'll have been working for eight hours by six.`] }
    } },
    { k: "p", en: `These categories overlap: one event can be a plan, an arrangement, and a prediction, depending on what you want to foreground.`,
      ja: `これらの分類は重なり合います。同じ出来事でも、何を前面に出したいかによって、計画・予定・予測のどれにもなります。` },
    { k: "h", en: "Present forms in time and condition clauses", ja: "時・条件の節では現在形" },
    { k: "p", en: `After <i>when, after, before, until, as soon as, once, if, unless</i>, use a present form for future time or conditions: <x>I'll call when I arrive.</x> <x>We'll start after she gets here.</x> <x>If it rains, we'll stay home.</x>`,
      ja: `<i>when, after, before, until, as soon as, once, if, unless</i> の後では、未来の時や条件を現在形で表します：<x>I'll call when I arrive.</x>／<x>We'll start after she gets here.</x>／<x>If it rains, we'll stay home.</x>` },
    { k: "p", en: `The present perfect can stress completion first: <x>I'll send it after I've checked it.</x> <x>Don't leave until you've signed the form.</x>`,
      ja: `現在完了で「〜し終えてから」を強調することもできます：<x>I'll send it after I've checked it.</x>／<x>Don't leave until you've signed the form.</x>` },
    { k: "h", en: "When will IS allowed", ja: "will が使える場合" },
    { k: "ex", items: [
      [`I don't know when she <b>will arrive</b>.`, { en: `an embedded question (what time?), not a time clause`, ja: `間接疑問（いつ到着するか）で、時の副詞節ではない` }],
      [`I wonder if she <b>will come</b>.`, { en: `if = whether`, ja: `if＝〜かどうか` }],
      [`If you <b>will wait</b> here, I'll ask the manager.`, { en: `will = willingness (a polite request)`, ja: `will＝意志（ていねいな依頼）` }],
      [`If you <b>won't listen</b>, I can't help.`, { en: `won't = refusal`, ja: `won't＝拒絶` }]
    ] },
    { k: "h", en: "Future viewed from the past", ja: "過去から見た未来" },
    { k: "p", en: `<x>She said she would call.</x> <x>She was going to call.</x> <x>The train was due to leave at six.</x> None of these tells you what finally happened.`,
      ja: `<x>She said she would call.</x>／<x>She was going to call.</x>／<x>The train was due to leave at six.</x> どれも、最終的にどうなったかは表していません。` },
    { k: "watch", en: `"When = present simple" isn't the whole rule. Ask whether the clause is a future time clause, an embedded question, or part of a past story.`,
      ja: `「when の後は現在形」だけでは不十分です。その節が未来の時を表す副詞節なのか、間接疑問なのか、過去の話の一部なのかを確認しましょう。` },
    { k: "tip", en: `Japanese uses 〜たら for both time and condition (着いたら電話する). English turns that into a present form: <x>I'll call when I arrive</x> / <x>if I arrive</x> — never <s>when I will arrive</s>.`,
      ja: `日本語の「〜たら」は時にも条件にも使います（着いたら電話する）。英語では現在形にします：<x>I'll call when I arrive.</x>／<x>if I arrive</x>。<s>when I will arrive</s> とはしません。` }
  ],
  q: [
    { q: `Text me as soon as you ___ (get) your results.`, i: [`get`],
      e: { en: `<i>As soon as</i> introduces a future time clause → present simple, not <i>will get</i>.`, ja: `as soon as は未来の時を表す副詞節を導くので現在形です（will get は不可）。` } },
    { q: { en: `Why is <i>will</i> possible in <x>I don't know when she will arrive</x>?`, ja: `<x>I don't know when she will arrive</x> で will が使えるのはなぜ？` },
      o: [{ en: "It's an embedded question, not a time clause.", ja: "時の副詞節ではなく、間接疑問だから。" }, { en: "Because the sentence is negative.", ja: "否定文だから。" }, { en: "It's actually a mistake.", ja: "実は誤りだから。" }], a: 0,
      e: { en: `The when-clause is the object of <i>know</i> (an embedded question), so ordinary future forms are fine.`, ja: `when節は know の目的語（間接疑問）なので、普通の未来表現が使えます。` } },
    { q: `If it ___ tomorrow, we'll stay home.`, o: [`rains`, `will rain`], a: 0,
      e: { en: `An ordinary future condition → present.`, ja: `普通の未来の条件なので現在形です。` } },
    { q: `I'll send it after I ___ it.`, o: [`will check`, `have checked`, `checked`], a: 1,
      e: { en: `The present perfect stresses that checking comes first.`, ja: `現在完了で「確認し終えてから」を強調しています。` } },
    { q: `The train ___ at six.`, h: { en: `from the timetable`, ja: `時刻表の情報` }, o: [`leaves`, `will leaving`, `is going leave`], a: 0,
      e: { en: `Timetable → present simple.`, ja: `時刻表は現在形です。` } },
    { q: `I ___ you with that box.`, h: { en: `an offer made now`, ja: `今の申し出` }, o: [`'ll help`, `'m helping`, `help`], a: 0,
      e: { en: `An offer → <i>will</i>.`, ja: `申し出には will を使います。` } },
    { q: `If you ___ wait here, I'll get the manager.`, h: { en: `a polite request (willingness)`, ja: `ていねいな依頼（意志）` }, o: [`will`, `are`], a: 0,
      e: { en: `This <i>will</i> means willingness, so it is allowed after <i>if</i>.`, ja: `この will は意志を表すので、if の後でも使えます。` } },
    { q: `We'll start as soon as everyone ___.`, o: [`arrives`, `will arrive`, `arrived`], a: 0,
      e: { en: `<i>As soon as</i> + present for the future.`, ja: `as soon as＋現在形で未来を表します。` } },
    { q: `Don't leave until you ___ the form.`, o: [`will sign`, `have signed`, `signed`], a: 1,
      e: { en: `The present perfect shows completion before leaving.`, ja: `去る前に完了していることを現在完了で表します。` } },
    { q: `She said she ___ call me later.`, o: [`will`, `would`], a: 1,
      e: { en: `Future seen from the past → <i>would</i>.`, ja: `過去から見た未来なので would です。` } }
  ]
});
