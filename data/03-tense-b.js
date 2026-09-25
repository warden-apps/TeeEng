/* 03 Tense & aspect — part B: past forms (handbook pp. 38–42) */

GH.topic({
  id: "past-simple", ch: "tense", p: 38,
  t: { en: "05 · Past simple", ja: "05・過去形" },
  d: { en: "Finished events, past states and habits, story sequence — and past forms that show distance rather than past time.", ja: "完了した出来事・過去の状態と習慣・話の流れ、そして時ではなく「距離」を表す過去形" },
  body: [
    { k: "core", en: `Locates a situation in a <b>past time frame</b>: a finished event, a past state, a habit, or a step in a story. It can last one second or many years.`,
      ja: `出来事を<b>過去の時間枠</b>に位置づけます：完了した出来事・過去の状態・習慣・話の中の出来事。1秒のことも、何年にもわたることもあります。` },
    { k: "form", rows: [
      ["aff", "S + V2", "She worked. / She went. / She was ready."],
      ["neg", "S + did not + V1", "She didn't go. / She wasn't ready."],
      ["q", "Did + S + V1?", "Did she go? / Was she ready?"],
      ["short", "Yes, S + did.", "Yes, she did. / No, she didn't."]
    ] },
    { k: "h", en: "Main uses", ja: "主な用法" },
    { k: "ex", items: [
      [`I <b>called</b> him yesterday.`, { en: `finished event`, ja: `完了した出来事` }],
      [`I <b>lived</b> in Taiwan for six months.`, { en: `past state`, ja: `過去の状態` }],
      [`We <b>played</b> football every Sunday when we were children.`, { en: `past routine`, ja: `過去の習慣` }],
      [`I <b>arrived</b>, <b>took</b> a number, and <b>waited</b>.`, { en: `story sequence`, ja: `話の流れ（出来事の連続）` }]
    ] },
    { k: "tl", t: { en: "Past simple on a timeline", ja: "過去形をタイムラインで見る" }, rows: [
      { l: { en: "Finished event", ja: "完了した出来事" }, s: `I called him yesterday.`, m: [["ref", -0.55, { en: "yesterday", ja: "昨日" }], ["x", -0.55]],
        n: { en: "A point in finished past time.", ja: "終わった過去の一時点。" } },
      { l: { en: "Past state", ja: "過去の状態" }, s: `I lived in Taiwan for six months.`, m: [["bar", -0.92, -0.42], ["span", -0.92, -0.42, { en: "six months", ja: "6か月" }]],
        n: { en: "A finished period — it doesn't reach now.", ja: "終わった期間（今には届いていない）。" } },
      { l: { en: "Past routine", ja: "過去の習慣" }, s: `We played football every Sunday.`, m: [["xs", -0.95, -0.32, 6], ["span", -0.95, -0.32, { en: "when we were kids", ja: "子どものころ" }]],
        n: { en: "Repeated in a past period.", ja: "過去のある期間に繰り返された。" } }
    ] },
    { k: "p", en: `The time can be understood rather than stated: <x>Did you enjoy the meal?</x> refers to a known, finished meal.`,
      ja: `時は明示しなくても、文脈でわかることがあります：<x>Did you enjoy the meal?</x> は、終わったばかりの食事を指しています。` },
    { k: "h", en: "The past simple doesn't mean the result is gone", ja: "過去形は「結果が消えた」という意味ではない" },
    { k: "p", en: `<x>I broke my phone yesterday</x> reports the breaking — it may still be broken. <x>I bought this phone last year</x> doesn't mean I no longer own it. <x>I started working here in May</x> is compatible with still working here.`,
      ja: `<x>I broke my phone yesterday.</x> は壊した出来事を述べるだけで、今も壊れているかもしれません。<x>I bought this phone last year.</x> も、今は持っていないという意味ではありません。<x>I started working here in May.</x> は、今もここで働いていても使えます。` },
    { k: "h", en: "Past forms can show distance, not past time", ja: "過去形が「距離」を表すこともある" },
    { k: "p", en: `<x>If I had more time, I would study more</x> uses <i>had</i> for an imagined present. <x>I wanted to ask a question</x> can soften a present request. A past-looking form isn't always a past event.`,
      ja: `<x>If I had more time, I would study more.</x> の had は、現実とは違う現在を想像しています。<x>I wanted to ask a question.</x> は、今の依頼をやわらげる表現にもなります。過去の形がいつも過去の出来事を表すとは限りません。` },
    { k: "h", en: "Be and do need separate handling", ja: "be と do の扱い" },
    { k: "p", en: `<x>Where were you?</x> <x>What did you do?</x> — never <s>Where did you be?</s> For past possession: <x>Did you have a car?</x> / <x>I didn't have one.</x> / <x>I had a car.</x>`,
      ja: `<x>Where were you?</x>／<x>What did you do?</x>。<s>Where did you be?</s> とは言いません。過去の所有は <x>Did you have a car?</x>／<x>I didn't have one.</x>／<x>I had a car.</x> です。` },
    { k: "watch", en: `<x>Did you eat?</x> / <x>I didn't eat</x> — not <s>Did you ate</s> / <s>I didn't ate</s>. <x>Who called you?</x> asks about the subject (no <i>did</i>); <x>Who did you call?</x> asks about the object.`,
      ja: `<s>Did you ate</s>／<s>I didn't ate</s> ではなく <x>Did you eat?</x>／<x>I didn't eat.</x> です。<x>Who called you?</x> は主語を尋ね（did 不要）、<x>Who did you call?</x> は目的語を尋ねます。` },
    { k: "tip", en: `In Japanese, 昨日 or 去年 can carry the past meaning, but English also marks it on the verb: <x>I went yesterday</x>, never <s>I go yesterday</s>. Every past event needs a past verb.`,
      ja: `日本語では「昨日」「去年」などで過去がわかりますが、英語では動詞の形でも過去を示します。<s>I go yesterday.</s> ではなく <x>I went yesterday.</x> です。過去の出来事には必ず過去形の動詞が必要です。` }
  ],
  q: [
    { q: `I ___ (see) her yesterday.`, i: [`saw`],
      e: { en: `Finished past time → past simple (<i>see → saw</i>).`, ja: `終わった過去の時点なので過去形です（see → saw）。` } },
    { q: `Did you ___ the movie?`, o: [`enjoyed`, `enjoy`, `enjoying`], a: 1,
      e: { en: `After <i>did</i>, use V1.`, ja: `did の後は原形です。` } },
    { q: `She ___ at the party last night.`, o: [`didn't be`, `wasn't`, `didn't`], a: 1,
      e: { en: `The negative past of <i>be</i>: <i>wasn't</i>.`, ja: `be の過去の否定は wasn't です。` } },
    { q: `Where ___ you last weekend?`, o: [`did`, `were`, `was`], a: 1,
      e: { en: `<i>Be</i> makes its own question: <i>Where were you?</i>`, ja: `be はそれ自体で疑問文を作ります（Where were you?）。` } },
    { q: `Who ___ you this morning?`, h: { en: `Someone called you. Who was it?`, ja: `誰かがあなたに電話した。それは誰？` }, o: [`did call`, `called`, `calls`], a: 1,
      e: { en: `<i>Who</i> is the subject, so no <i>did</i>.`, ja: `who が主語なので did は不要です。` } },
    { q: `Who ___ this morning?`, h: { en: `You called someone. Who?`, ja: `あなたが誰かに電話した。誰に？` }, o: [`did you call`, `you called`, `called you`], a: 0,
      e: { en: `<i>Who</i> is the object → <i>did</i> + subject + V1.`, ja: `who が目的語なので did＋主語＋原形です。` } },
    { q: `We ___ football every Sunday when we were kids.`, o: [`play`, `played`, `have played`], a: 1,
      e: { en: `A past routine → past simple.`, ja: `過去の習慣は過去形です。` } },
    { q: `I ___ a car when I lived in the countryside.`, o: [`had`, `did have a`, `was having`], a: 0,
      e: { en: `Past possession → <i>had</i>.`, ja: `過去の所有は had です。` } },
    { q: `They ___ (not / go) to the meeting.`, i: [`didn't go`, `did not go`],
      e: { en: `Negative: <i>didn't</i> + V1.`, ja: `否定は didn't＋原形です。` } },
    { q: { en: `In <x>If I had more time, I would study more</x>, does <i>had</i> refer to past time?`, ja: `<x>If I had more time, I would study more</x> の <i>had</i> は過去を表している？` },
      o: [{ en: "Yes, it's about the past.", ja: "はい、過去のことだ。" }, { en: "No, it imagines a different present.", ja: "いいえ、現実とは違う現在を想像している。" }], a: 1,
      e: { en: `Here the past form shows distance from reality, not past time.`, ja: `ここでの過去形は、時ではなく現実からの距離を表しています。` } }
  ]
});

GH.topic({
  id: "past-continuous", ch: "tense", p: 39,
  t: { en: "06 · Past continuous", ja: "06・過去進行形" },
  d: { en: "Activities in progress at a past time, background for events, simultaneous actions — and when simple is better.", ja: "過去のある時点で進行中の活動、出来事の背景、同時進行、そして過去形のほうがよい場合" },
  body: [
    { k: "core", en: `Views an activity from inside its progress <b>at a past time or during a past period</b>. It often supplies the background against which other events happen.`,
      ja: `<b>過去のある時点や期間</b>に進行中だった活動を、内側からとらえます。他の出来事が起きた「背景」を示すことがよくあります。` },
    { k: "form", rows: [
      ["aff", "S + was/were + V-ing", "I was studying. They were talking."],
      ["neg", "S + was/were not + V-ing", "I wasn't sleeping."],
      ["q", "Was/Were + S + V-ing?", "Were you working at eight?"],
      ["short", "Yes, S + was/were.", "Yes, I was. / No, I wasn't."]
    ] },
    { k: "h", en: "Main uses", ja: "主な用法" },
    { k: "ex", items: [
      [`At eight last night, I <b>was studying</b>.`, { en: `in progress at a past point`, ja: `過去のある時点で進行中` }],
      [`I <b>was checking</b> the bill when the customer <b>called</b>.`, { en: `background + event: the call came during the checking`, ja: `背景＋出来事：確認中に電話が来た` }],
      [`While I <b>was explaining</b> the plan, my colleague <b>was preparing</b> the form.`, { en: `simultaneous activities`, ja: `同時に進行していた活動` }],
      [`I <b>was living</b> with a friend at the time.`, { en: `a temporary past situation`, ja: `過去の一時的な状況` }],
      [`He <b>was always interrupting</b> me.`, { en: `repeated behavior with an attitude`, ja: `繰り返される行動（不満）` }]
    ] },
    { k: "tl", t: { en: "In progress in the past", ja: "過去のある時点で進行中" }, rows: [
      { l: { en: "At a past moment", ja: "過去の一時点" }, s: `At eight last night, I was studying.`, m: [["ref", -0.5, { en: "8 p.m.", ja: "午後8時" }], ["wave", -0.74, -0.26]],
        n: { en: "The activity surrounds that moment.", ja: "活動がその時点をはさんで進行している。" } },
      { l: { en: "Background + event", ja: "背景＋出来事" }, s: `I was checking the bill when the customer called.`, m: [["wave", -0.84, -0.18], ["x", -0.5, { en: "call", ja: "電話" }]],
        n: { en: "A short event happens in the middle of a longer activity.", ja: "長い活動の途中で、短い出来事が起きる。" } },
      { l: { en: "Compare: already in progress", ja: "比較：すでに進行中" }, s: `When I arrived, she was cooking dinner.`, m: [["wave", -0.86, -0.26], ["x", -0.56, { en: "I arrived", ja: "到着" }]],
        n: { en: "Cooking had started before I arrived.", ja: "着く前から料理が始まっていた。" } },
      { l: { en: "Compare: one after the other", ja: "比較：順番に起きた" }, s: `When I arrived, she cooked dinner.`, m: [["x", -0.76, { en: "I arrived", ja: "到着" }], ["arc", -0.76, -0.34], ["x", -0.34, { en: "cooked", ja: "料理" }]],
        n: { en: "She started cooking after I arrived.", ja: "着いてから料理を始めた。" } }
    ] },
    { k: "h", en: "Interruption is common, not required", ja: "「割り込み」は必須ではない" },
    { k: "p", en: `<x>We were chatting all evening</x> is complete without another event. And <x>I was reading when she arrived</x> places her arrival during the reading; it doesn't say I stopped.`,
      ja: `<x>We were chatting all evening.</x> は、他の出来事がなくても完結した文です。また <x>I was reading when she arrived.</x> は、読書中に彼女が来たことを表すだけで、読むのをやめたとは言っていません。` },
    { k: "h", en: "Past simple vs past continuous", ja: "過去形と過去進行形" },
    { k: "p", en: `<x>When I arrived, she cooked dinner</x> usually means she started cooking after I arrived. <x>When I arrived, she was cooking dinner</x> means cooking was already in progress. <x>I worked all day</x> views the day as a whole; <x>I was working all day</x> stresses activity throughout — perhaps explaining a missed call.`,
      ja: `<x>When I arrived, she cooked dinner.</x> は通常、私が着いてから料理を始めたという意味。<x>When I arrived, she was cooking dinner.</x> は、着いたときにはすでに料理中だったという意味です。<x>I worked all day.</x> は1日全体をまとめて述べ、<x>I was working all day.</x> は1日中ずっと活動していたことを強調します（電話に出られなかった理由など）。` },
    { k: "h", en: "While and when", ja: "while と when" },
    { k: "p", en: `<i>While</i> often introduces a duration; <i>when</i> can introduce a point or a period. Neither decides the tense automatically: <x>When I lived in Taiwan, I studied Chinese</x> uses simple forms for a past period.`,
      ja: `<i>while</i> は期間を導くことが多く、<i>when</i> は時点にも期間にも使えます。どちらも時制を自動的に決めるわけではありません：<x>When I lived in Taiwan, I studied Chinese.</x> は、過去の期間を単純形で表しています。` },
    { k: "watch", en: `Two past events don't always mean continuous + simple. Use the continuous only for an in-progress background. <x>I arrived and ordered lunch</x> uses two simple forms for successive events.`,
      ja: `過去の出来事が2つあれば「進行形＋過去形」になるとは限りません。進行形は進行中の背景にだけ使います。<x>I arrived and ordered lunch.</x> は連続する出来事なので、両方とも過去形です。` },
    { k: "tip", en: `〜していた is the past continuous when it means an activity in progress (電話が鳴ったとき、料理していた = <x>I was cooking when the phone rang</x>). For a state (知っていた), use the past simple: <x>I knew</x>.`,
      ja: `「〜していた」は、進行中の活動なら過去進行形です（電話が鳴ったとき料理していた＝<x>I was cooking when the phone rang.</x>）。状態（知っていた）なら過去形：<x>I knew</x> です。` }
  ],
  q: [
    { q: `At eight last night, I ___ (cook) dinner.`, i: [`was cooking`],
      e: { en: `In progress at a past point → past continuous.`, ja: `過去のある時点で進行中 → 過去進行形です。` } },
    { q: `I ___ the bill when the customer called.`, o: [`checked`, `was checking`, `am checking`], a: 1,
      e: { en: `The background activity was in progress when the call came.`, ja: `電話が来たときに進行中だった背景の活動です。` } },
    { q: `While I ___ TV, the lights went out.`, o: [`watched`, `was watching`, `watch`], a: 1,
      e: { en: `<i>While</i> + an activity in progress.`, ja: `while＋進行中の活動です。` } },
    { q: { en: `Which sentence means the cooking was already in progress when you arrived?`, ja: `着いたとき、すでに料理の最中だったことを表す文は？` },
      o: [`When I arrived, she cooked dinner.`, `When I arrived, she was cooking dinner.`], a: 1,
      e: { en: `The continuous shows it was already in progress.`, ja: `進行形は、すでに進行中だったことを表します。` } },
    { q: `They ___ when I called them.`, o: [`were sleeping`, `sleeping`, `was sleeping`], a: 0,
      e: { en: `<i>They</i> + <i>were</i> + V-ing.`, ja: `they には were＋-ing です。` } },
    { q: `I ___ and ordered lunch.`, h: { en: `Two events, one after the other.`, ja: `連続する2つの出来事です。` }, o: [`was arriving`, `arrived`], a: 1,
      e: { en: `Successive events → past simple.`, ja: `連続する出来事は過去形です。` } },
    { q: `___ you working at 10 p.m. yesterday?`, o: [`Did`, `Were`, `Was`], a: 1,
      e: { en: `A past continuous question: <i>Were you</i> + V-ing?`, ja: `過去進行形の疑問文：Were you＋-ing? の形です。` } },
    { q: `I ___ the answer at that time.`, o: [`was knowing`, `knew`], a: 1,
      e: { en: `<i>Know</i> is a state → past simple.`, ja: `know は状態動詞なので過去形です。` } },
    { q: `He ___ me in meetings. It was so annoying.`, o: [`was always interrupting`, `did always interrupt`], a: 0,
      e: { en: `<i>Always</i> + past continuous = repeated behavior with irritation.`, ja: `always＋過去進行形は、繰り返される行動への不満を表します。` } },
    { w: [`She`, `was`, `sleeping`, `when`, `the`, `phone`, `rang.`],
      e: { en: `Background (<i>was sleeping</i>) + event (<i>rang</i>).`, ja: `背景（was sleeping）＋出来事（rang）です。` } }
  ]
});

GH.topic({
  id: "past-perfect", ch: "tense", p: 40,
  t: { en: "07 · Past perfect simple", ja: "07・過去完了形" },
  d: { en: "Looking back from a past point: earlier events, results, experience and duration — and when the past simple is enough.", ja: "過去のある時点から振り返る：それ以前の出来事・結果・経験・期間、そして過去形で十分な場合" },
  body: [
    { k: "core", en: `Look back from a <b>past reference point</b> to something earlier. Form: <code>had + V3</code> for every subject.`,
      ja: `<b>過去の基準時点</b>から、それより前のことを振り返ります。形はすべての主語で <code>had + V3</code> です。` },
    { k: "form", rows: [
      ["aff", "S + had + V3", "I had eaten before the meeting."],
      ["neg", "S + had not + V3", "I hadn't eaten before the meeting."],
      ["q", "Had + S + V3?", "Had you eaten before the meeting?"],
      ["short", "Yes, S + had.", "Yes, I had. / No, I hadn't."]
    ] },
    { k: "h", en: "An earlier event with a past result", ja: "過去の時点での結果" },
    { k: "ex", items: [
      [`When I reached the shop, it <b>had closed</b>.`, { en: `it closed before I arrived; it was already closed`, ja: `着く前に閉まっていた（すでに閉店）` }],
      [`I couldn't log in because I <b>had forgotten</b> my password.`, { en: `the earlier forgetting explains the past problem`, ja: `それ以前に忘れていたことが過去の問題の原因` }],
      [`By 8 p.m., I <b>had finished</b> the report.`, { en: `a time phrase gives the past reference point`, ja: `時の表現が過去の基準時点を示す` }],
      [`Why didn't you join us? — I <b>had</b> already <b>eaten</b>.`, { en: `the conversation supplies the reference point`, ja: `会話の流れが基準時点を示す` }]
    ] },
    { k: "tl", t: { en: "Looking back from a past point", ja: "過去の時点から振り返る" }, rows: [
      { l: { en: "Earlier than then", ja: "その時より前" }, s: `When I reached the shop, it had closed.`, m: [["ref", -0.3, { en: "I reached it", ja: "到着" }], ["x", -0.72, { en: "closed", ja: "閉店" }], ["arc", -0.72, -0.3]],
        n: { en: "The closing came before the past moment.", ja: "閉店は、その過去の時点より前。" } },
      { l: { en: "Duration up to then", ja: "その時までの継続" }, s: `By 2020, I had lived there for ten years.`, m: [["ref", -0.28, `2020`], ["bar", -0.92, -0.28], ["span", -0.92, -0.28, { en: "ten years", ja: "10年" }]],
        n: { en: "A state measured at a past point.", ja: "過去の時点で測った状態の長さ。" } },
      { l: { en: "Compare: past simple", ja: "比較：過去形" }, s: `When I arrived, he left.`, m: [["ref", -0.38, { en: "I arrived", ja: "到着" }], ["x", -0.3, { en: "he left", ja: "出た" }]],
        n: { en: "He left at that moment — as I arrived, or just after.", ja: "私が着いたときに（着いた直後に）出た。" } }
    ] },
    { k: "p", en: `The past perfect doesn't need a past simple verb in the same sentence. It needs a past viewpoint — from another clause, an earlier sentence, a time phrase, or shared context: <x>By then, the guests had left.</x>`,
      ja: `過去完了は、同じ文に過去形の動詞がなくても使えます。必要なのは過去の視点で、それは別の節・前の文・時の表現・文脈から示されます：<x>By then, the guests had left.</x>` },
    { k: "h", en: "Other major uses", ja: "その他の主な用法" },
    { k: "ex", items: [
      [`By 2020, I <b>had lived</b> there for ten years.`, { en: `duration up to a past point`, ja: `過去のある時点までの継続` }],
      [`It was the best meal I <b>had ever eaten</b>.`, { en: `experience before a past point`, ja: `過去のある時点までの経験` }],
      [`She said she <b>had lost</b> her card.`, { en: `reported speech`, ja: `間接話法（時制の一致）` }],
      [`If I <b>had studied</b>, I would have passed.`, { en: `an imagined past (it didn't happen)`, ja: `過去の事実に反する仮定` }],
      [`I wish I <b>had asked</b>.`, { en: `past regret`, ja: `過去への後悔` }]
    ] },
    { k: "h", en: "When the past simple is also fine", ja: "過去形でもよい場合" },
    { k: "p", en: `<x>After I finished work, I went home</x> already shows the order; <x>After I had finished work, I went home</x> stresses completion. A story doesn't need past perfect for every earlier event. But compare <x>When I arrived, he left</x> (he left then) with <x>When I arrived, he had left</x> (he was already gone).`,
      ja: `<x>After I finished work, I went home.</x> は after で順序が明確なので過去形で十分です。<x>After I had finished work, I went home.</x> は「終えてから」を強調します。物語では、前に起きた出来事すべてに過去完了を使う必要はありません。ただし <x>When I arrived, he left.</x>（私が着いたときに彼は出た）と <x>When I arrived, he had left.</x>（着いたときにはもう出ていた）は意味が違います。` },
    { k: "watch", en: `"The past perfect always means a completed earlier action" is too strong: <x>Before I had finished speaking, she interrupted</x> describes something not yet completed.`,
      ja: `「過去完了は必ず完了した以前の動作を表す」は言い過ぎです：<x>Before I had finished speaking, she interrupted.</x> は、話し終える前に（まだ完了しないうちに）遮られたことを表します。` },
    { k: "tip", en: `Japanese doesn't mark "earlier than past" separately (着いたとき、店は閉まっていた). In English, when the order matters, use <i>had</i> + V3: <x>When I arrived, the shop had closed.</x>`,
      ja: `日本語では「過去よりさらに前」を特に区別しません（着いたとき、店は閉まっていた）。英語では、順序が重要なとき had＋過去分詞を使います：<x>When I arrived, the shop had closed.</x>` }
  ],
  q: [
    { q: `When I arrived, the shop ___ (close).`, h: { en: `It closed before you got there.`, ja: `着く前に閉まっていた。` }, i: [`had closed`, `'d closed`, `had already closed`, `'d already closed`],
      e: { en: `Earlier than a past point → past perfect.`, ja: `過去の時点より前なので過去完了です。` } },
    { q: `I couldn't log in because I ___ my password.`, o: [`forgot`, `had forgotten`, `have forgotten`], a: 1,
      e: { en: `The forgetting happened before the past problem.`, ja: `ログインできなかった時点より前に忘れていました。` } },
    { q: { en: `Is <x>By 8 p.m., I had finished.</x> complete without a past-simple clause?`, ja: `<x>By 8 p.m., I had finished.</x> は過去形の節がなくても完全な文？` },
      o: [{ en: "Yes — by 8 p.m. gives the past reference point.", ja: "はい。by 8 p.m. が過去の基準時点を示している。" }, { en: "No — the past perfect always needs a past simple verb.", ja: "いいえ。過去完了には必ず過去形の動詞が必要。" }], a: 0,
      e: { en: `A time phrase can supply the reference point.`, ja: `時の表現が基準時点を示せます。` } },
    { q: `It was the best meal I ___.`, o: [`ever ate`, `had ever eaten`, `have ever eaten`], a: 1,
      e: { en: `Experience up to a past point → past perfect.`, ja: `過去のある時点までの経験なので過去完了です。` } },
    { q: { en: `Which sentence means he was already gone when you arrived?`, ja: `着いたとき、彼はすでにいなかったことを表す文は？` },
      o: [`When I arrived, he left.`, `When I arrived, he had left.`], a: 1,
      e: { en: `The past perfect shows he left earlier.`, ja: `過去完了は、それ以前に出たことを表します。` } },
    { q: `By 2020, she ___ in Osaka for ten years.`, o: [`lived`, `had lived`, `has lived`], a: 1,
      e: { en: `Duration up to a past point.`, ja: `過去のある時点までの継続です。` } },
    { q: `___ you ever been abroad before you moved here?`, o: [`Have`, `Had`, `Did`], a: 1,
      e: { en: `Experience before a past point → <i>Had you ever…?</i>`, ja: `過去のある時点より前の経験なので Had you ever…? です。` } },
    { q: `She said she ___ her card.`, h: { en: `Her words: "I have lost my card."`, ja: `彼女の言葉：「カードをなくしました」` }, o: [`has lost`, `had lost`, `loses`], a: 1,
      e: { en: `Reported speech backshift: <i>have lost → had lost</i>.`, ja: `間接話法の時制の一致：have lost → had lost です。` } },
    { q: `After I ___ work, I went home.`, o: [`finished`, `had finish`, `have finished`], a: 0,
      e: { en: `<i>After</i> already shows the order, so the past simple works (<i>had finished</i> would too).`, ja: `after で順序が明確なので過去形で十分です（had finished も可）。` } },
    { q: `They ___ before we got to the station.`, o: [`had left`, `have left`, `leave`], a: 0,
      e: { en: `Earlier than a past point.`, ja: `過去の時点より前のことです。` } }
  ]
});

GH.topic({
  id: "past-perfect-continuous", ch: "tense", p: 41,
  t: { en: "08 · Past perfect continuous", ja: "08・過去完了進行形" },
  d: { en: "Activity or duration leading up to a past point, and evidence of an earlier activity.", ja: "過去のある時点までの活動・継続期間、そして以前の活動が残した影響" },
  body: [
    { k: "core", en: `An <b>activity extending over time up to a past reference point</b>, or an earlier activity that explains a condition at that point.`,
      ja: `<b>過去の基準時点まで続いていた活動</b>、あるいはその時点の状態を説明する、それ以前の活動を表します。` },
    { k: "form", rows: [
      ["aff", "S + had been + V-ing", "I had been studying."],
      ["neg", "S + had not been + V-ing", "I hadn't been sleeping well."],
      ["q", "Had + S + been + V-ing?", "Had you been waiting long?"],
      ["short", "Yes, S + had.", "Yes, I had. / No, I hadn't."]
    ] },
    { k: "h", en: "Main uses", ja: "主な用法" },
    { k: "ex", items: [
      [`I <b>had been waiting</b> for twenty minutes when the clerk called my number.`, { en: `duration before a past event`, ja: `過去の出来事までの継続期間` }],
      [`My hands were dirty because I <b>had been repairing</b> my bike.`, { en: `past evidence; the activity may have stopped`, ja: `過去の時点での影響（活動は終わっていたかもしれない）` }],
      [`She <b>had been working</b> late for weeks, so she took a day off.`, { en: `repeated activity before a past point`, ja: `過去のある時点までの繰り返し` }]
    ] },
    { k: "tl", t: { en: "Activity up to a past point", ja: "過去の時点まで続く活動" }, rows: [
      { l: { en: "Duration", ja: "継続期間" }, s: `I had been waiting for twenty minutes when the clerk called my number.`, m: [["ref", -0.3, { en: "number called", ja: "番号が呼ばれた" }], ["wave", -0.86, -0.3], ["span", -0.86, -0.3, { en: "20 minutes", ja: "20分" }]],
        n: { en: "How long it had lasted, measured at a past moment.", ja: "過去のある時点で測った、それまでの長さ。" } },
      { l: { en: "Evidence then", ja: "その時の跡" }, s: `My hands were dirty because I had been repairing my bike.`, m: [["wave", -0.9, -0.5, { en: "repairing", ja: "修理" }], ["arc", -0.5, -0.28], ["ref", -0.28, { en: "dirty hands", ja: "手が汚れていた" }]],
        n: { en: "An earlier activity explains a past condition.", ja: "それ以前の活動が、過去の状態を説明する。" } }
    ] },
    { k: "h", en: "Compare three past viewpoints", ja: "3つの過去の見方" },
    { k: "ex", items: [
      [`At eight, I <b>was studying</b>.`, { en: `inside the activity at eight`, ja: `8時に勉強の最中だった` }],
      [`By eight, I <b>had been studying</b> for two hours.`, { en: `looking back over two hours of study from eight`, ja: `8時の時点で2時間勉強し続けていた` }],
      [`By eight, I <b>had finished</b> two chapters.`, { en: `counting completed results by eight`, ja: `8時までに2章を終えていた（結果）` }]
    ] },
    { k: "h", en: "Simple or continuous?", ja: "過去完了か過去完了進行形か" },
    { k: "p", en: `<x>I had read the report</x> = completed reading. <x>I had been reading the report</x> = the activity, not necessarily finished. State verbs prefer the simple: <x>I had known her for years</x>, not <s>had been knowing</s>.`,
      ja: `<x>I had read the report.</x>＝読み終えていた。<x>I had been reading the report.</x>＝読んでいた（読み終えたとは限らない）。状態動詞は過去完了（単純形）を使います：<s>had been knowing</s> ではなく <x>I had known her for years.</x>` },
    { k: "p", en: `Was the activity still happening? The form alone doesn't say. <x>He had been running when he hurt his ankle</x> — running continued to the accident. <x>He was sweating because he had been running</x> — the running may have just stopped.`,
      ja: `活動がまだ続いていたかどうかは、形だけでは決まりません。<x>He had been running when he hurt his ankle.</x> は、けがをしたときまで走っていた。<x>He was sweating because he had been running.</x> は、直前まで走っていた（もうやめていたかも）。` },
    { k: "watch", en: `Don't add heavy forms just because a story is in the past. <x>I was tired because I worked all day</x> is natural. <x>I had been working all day</x> specifically highlights the earlier duration.`,
      ja: `過去の話だからといって重い形を使う必要はありません。<x>I was tired because I worked all day.</x> で自然です。<x>I had been working all day.</x> は、それまでの継続期間を特に強調する言い方です。` },
    { k: "tip", en: `ずっと〜していた, up to a past moment, becomes <i>had been</i> + V-ing: 電話が来るまで20分待っていた = <x>I had been waiting for twenty minutes when the call came.</x>`,
      ja: `「（過去のある時点まで）ずっと〜していた」は had been＋-ing です。「電話が来るまで20分待っていた」＝<x>I had been waiting for twenty minutes when the call came.</x>` }
  ],
  q: [
    { q: `I ___ (try) to sign in for twenty minutes when the clerk helped me.`, i: [`had been trying`, `'d been trying`],
      e: { en: `Repeated attempts up to a past point.`, ja: `過去の時点まで続いていた試みです。` } },
    { q: `His clothes were wet because he ___ in the rain.`, o: [`had been walking`, `has been walking`, `walks`], a: 0,
      e: { en: `An earlier activity that explains a past condition.`, ja: `過去の状態を説明する、それ以前の活動です。` } },
    { q: `By noon, we ___ for three hours.`, o: [`had been driving`, `have been driving`, `were drive`], a: 0,
      e: { en: `Duration up to a past point.`, ja: `過去の時点までの継続期間です。` } },
    { q: `At eight o'clock yesterday, I ___ in my room.`, h: { en: `You were in the middle of studying at that moment.`, ja: `その時点で勉強の最中だった。` }, o: [`was studying`, `had been studying`], a: 0,
      e: { en: `In progress at a past point → past continuous.`, ja: `過去の時点で進行中なので過去進行形です。` } },
    { q: `By eight o'clock, I ___ for two hours.`, o: [`was studying`, `had been studying`], a: 1,
      e: { en: `Duration up to a past point → past perfect continuous.`, ja: `過去の時点までの継続期間なので過去完了進行形です。` } },
    { q: `By eight o'clock, I ___ two chapters.`, o: [`had been finishing`, `had finished`], a: 1,
      e: { en: `Counting completed results → past perfect simple.`, ja: `完了した結果を数えるので過去完了です。` } },
    { q: `I ___ her for years before we worked together.`, o: [`had been knowing`, `had known`], a: 1,
      e: { en: `<i>Know</i> is a state → past perfect simple.`, ja: `know は状態動詞なので過去完了です。` } },
    { q: `___ you been waiting long when the bus came?`, o: [`Have`, `Had`, `Were`], a: 1,
      e: { en: `<i>Had</i> + subject + <i>been</i> + V-ing?`, ja: `Had＋主語＋been＋-ing? の形です。` } },
    { q: `She took a day off because she ___ late for weeks.`, o: [`had been working`, `was work`, `has been working`], a: 0,
      e: { en: `Repeated activity leading up to a past point.`, ja: `過去の時点までの繰り返しです。` } },
    { q: { en: `In <x>He was sweating because he had been running</x>, was he necessarily still running?`, ja: `<x>He was sweating because he had been running</x> で、彼はまだ走っていた？` },
      o: [{ en: "Not necessarily — he may have just stopped.", ja: "そうとは限らない。直前にやめていたかもしれない。" }, { en: "Yes, definitely.", ja: "はい、必ず走っていた。" }], a: 0,
      e: { en: `The form links the earlier activity to the past moment; the context decides whether it continued.`, ja: `以前の活動と過去の時点を結びつける形です。続いていたかどうかは文脈次第です。` } }
  ]
});

GH.topic({
  id: "past-choices", ch: "tense", p: 42,
  t: { en: "Past forms: order, background, duration", ja: "過去時制の使い分け" },
  d: { en: "Four viewpoints on one scene, a worked story, after/before/by the time, and used to vs would.", ja: "1つの場面の4つの見方、物語の例、after・before・by the time、used to と would" },
  body: [
    { k: "tl", t: { en: "One scene, four viewpoints", ja: "1つの場面、4つの見方" }, rows: [
      { l: { en: "Past simple", ja: "過去形" }, s: `When I arrived, Mei called the customer.`, m: [["ref", -0.4, { en: "I arrived", ja: "到着" }], ["x", -0.28, { en: "call", ja: "電話" }]],
        n: { en: "The call happened at or after my arrival.", ja: "私が着いたとき（着いてから）電話した。" } },
      { l: { en: "Past continuous", ja: "過去進行形" }, s: `When I arrived, Mei was calling the customer.`, m: [["ref", -0.4, { en: "I arrived", ja: "到着" }], ["wave", -0.64, -0.16]],
        n: { en: "The call was in progress.", ja: "電話の最中だった。" } },
      { l: { en: "Past perfect", ja: "過去完了形" }, s: `When I arrived, Mei had called the customer.`, m: [["ref", -0.4, { en: "I arrived", ja: "到着" }], ["x", -0.78, { en: "call", ja: "電話" }], ["arc", -0.78, -0.4]],
        n: { en: "The call was already finished.", ja: "電話はすでに終わっていた。" } },
      { l: { en: "Past perfect continuous", ja: "過去完了進行形" }, s: `When I arrived, Mei had been calling customers for an hour.`, m: [["ref", -0.4, { en: "I arrived", ja: "到着" }], ["wave", -0.92, -0.4], ["span", -0.92, -0.4, { en: "an hour", ja: "1時間" }]],
        n: { en: "Repeated calling up to that moment.", ja: "その時点まで電話をかけ続けていた。" } }
    ] },
    { k: "h", en: "A worked story", ja: "物語で確認する" },
    { k: "ex", items: [
      [`Yesterday I <b>arrived</b> at the shop at nine.`, { en: `main event → past simple`, ja: `主な出来事 → 過去形` }],
      [`A customer <b>was waiting</b> outside.`, { en: `background in progress → past continuous`, ja: `進行中の背景 → 過去進行形` }],
      [`She <b>had forgotten</b> her password…`, { en: `an earlier problem relevant to the scene → past perfect`, ja: `それ以前の問題 → 過去完了` }],
      [`…and <b>had been trying</b> to sign in for twenty minutes.`, { en: `duration of attempts before the scene → past perfect continuous`, ja: `その場面までの試みの継続 → 過去完了進行形` }],
      [`I <b>checked</b> her details and <b>helped</b> her reset it.`, { en: `main events → past simple`, ja: `主な出来事 → 過去形` }]
    ] },
    { k: "p", en: `Once the earlier time frame is clear, the story can continue in the past simple. Repeating <i>had</i> in every sentence is unnecessary.`,
      ja: `以前の時間枠がはっきりしたら、物語は過去形で続けられます。すべての文で had を繰り返す必要はありません。` },
    { k: "h", en: "After, before, by the time", ja: "after・before・by the time" },
    { k: "p", en: `<x>After I ate, I left</x> / <x>After I had eaten, I left</x> — both show eating first. <x>I left before she arrived</x> — the order is clear without the perfect. <x>By the time she arrived, I had left</x> — I was already gone. <x>I waited until she arrived</x> — the waiting continued up to her arrival.`,
      ja: `<x>After I ate, I left.</x>／<x>After I had eaten, I left.</x> はどちらも「食べてから出た」。<x>I left before she arrived.</x> は完了形がなくても順序が明確です。<x>By the time she arrived, I had left.</x>＝彼女が着いたときには、私はもういなかった。<x>I waited until she arrived.</x>＝彼女が着くまで待ち続けた。` },
    { k: "h", en: "Used to and would", ja: "used to と would" },
    { k: "p", en: `<x>I used to live there</x> = a past state that is no longer true. <x>We would walk there every evening</x> = a repeated past action, once the past context is set. <i>Would</i> doesn't work for past states: <x>I used to own a bike</x>, not <s>I would own a bike</s>.`,
      ja: `<x>I used to live there.</x>＝以前はそこに住んでいた（今は違う）。<x>We would walk there every evening.</x>＝毎晩そこを散歩したものだ（過去の場面が示された後で）。would は過去の状態には使えません：<s>I would own a bike</s> ではなく <x>I used to own a bike.</x>` },
    { k: "note", l: { en: "Check your intention", ja: "意図を確認する" },
      en: `Ask yourself: am I advancing the story (simple), painting the background (continuous), looking back to an earlier result (perfect), or measuring earlier activity (perfect continuous)?`,
      ja: `自問しましょう：話を先に進めているのか（過去形）、背景を描いているのか（過去進行形）、それ以前の結果を振り返っているのか（過去完了）、それ以前の活動の長さを示しているのか（過去完了進行形）。` },
    { k: "flow", t: { en: "Which past form?", ja: "どの過去時制？" }, start: "main", n: {
      main: { q: { en: "Is it a main event that moves the story forward?", ja: "話を先に進める主な出来事？" }, o: [
        [{ en: "Yes, it happens next in the story", ja: "はい、話の中で次に起きること" }, "ps"],
        [{ en: "No", ja: "いいえ" }, "prog"]] },
      prog: { q: { en: "Was it in progress at that moment — the background to the scene?", ja: "その時点で進行中だった（場面の背景）？" }, o: [
        [{ en: "Yes, in progress", ja: "はい、進行中" }, "pc"],
        [{ en: "No", ja: "いいえ" }, "before"]] },
      before: { q: { en: "Did it happen, or start, before the past moment you're describing?", ja: "話している過去の時点より前に起きた（始まった）こと？" }, o: [
        [{ en: "Yes, earlier", ja: "はい、それより前" }, "focus"],
        [{ en: "No — it's a state or habit at that time", ja: "いいえ、その時の状態・習慣" }, "psState"]] },
      focus: { q: { en: "Are you focusing on a finished result, or on how long the activity had been going on?", ja: "完了した結果に注目？それとも活動がどれだけ続いていたか？" }, o: [
        [{ en: "A result, a completion, or a state", ja: "結果・完了・状態" }, "pp"],
        [{ en: "The activity and its duration", ja: "活動とその長さ" }, "ppc"]] },
      ps: { r: { en: "past simple", ja: "過去形" }, ex: [`Yesterday I arrived at the shop at nine.`, `I checked her details and helped her.`] },
      psState: { r: { en: "past simple", ja: "過去形" }, nt: { en: "States and habits at the time use the past simple (or used to).", ja: "その時の状態・習慣は過去形（または used to）で表します。" }, ex: [`I knew the answer.`, `She lived near the station.`] },
      pc: { r: { en: "past continuous", ja: "過去進行形" }, ex: [`A customer was waiting outside.`] },
      pp: { r: { en: "past perfect", ja: "過去完了形" }, nt: { en: "Skip it when after / before already make the order clear.", ja: "after・before で順序がわかるなら、過去形でもかまいません。" }, ex: [`She had forgotten her password.`] },
      ppc: { r: { en: "past perfect continuous", ja: "過去完了進行形" }, ex: [`She had been trying to sign in for twenty minutes.`] }
    } },
    { k: "watch", en: `Avoid invented rules: the past perfect doesn't always need a past simple nearby; the past continuous doesn't always need an interruption; "earlier" doesn't always mean past perfect.`,
      ja: `作られた「ルール」に注意：過去完了の近くに必ず過去形があるとは限らない。過去進行形に必ず「割り込み」があるとは限らない。「前のこと」だから必ず過去完了になるとも限らない。` },
    { k: "tip", en: `Japanese 〜ていた can be the past continuous (料理していた), the past perfect (もう出ていた), or the past perfect continuous (ずっと待っていた). Decide the viewpoint before you choose the English form.`,
      ja: `日本語の「〜ていた」は、過去進行形（料理していた）、過去完了（もう出ていた）、過去完了進行形（ずっと待っていた）のどれにもなります。どの見方なのかを決めてから英語の形を選びましょう。` }
  ],
  q: [
    { q: `When I arrived, Mei ___ the customer.`, h: { en: `The call was in progress.`, ja: `電話の最中だった。` }, o: [`called`, `was calling`, `had called`], a: 1,
      e: { en: `In progress at that moment → past continuous.`, ja: `その時点で進行中なので過去進行形です。` } },
    { q: `When I arrived, Mei ___ the customer.`, h: { en: `The call was already over.`, ja: `電話はもう終わっていた。` }, o: [`called`, `was calling`, `had called`], a: 2,
      e: { en: `Already completed → past perfect.`, ja: `すでに完了していたので過去完了です。` } },
    { q: `When I arrived, Mei ___ customers for an hour.`, h: { en: `She had kept calling up to that moment.`, ja: `その時点まで電話をかけ続けていた。` }, o: [`was calling`, `had been calling`, `called`], a: 1,
      e: { en: `Duration up to a past moment → past perfect continuous.`, ja: `過去の時点までの継続なので過去完了進行形です。` } },
    { q: `By the time she arrived, I ___.`, o: [`left`, `had left`, `have left`], a: 1,
      e: { en: `Already gone at her arrival → past perfect.`, ja: `彼女が着いたときにはもういなかったので過去完了です。` } },
    { q: `I waited ___ she arrived.`, o: [`by`, `until`, `by the time`], a: 1,
      e: { en: `The waiting continued up to her arrival → <i>until</i>.`, ja: `着くまで待ち続けたので until です。` } },
    { q: `I ___ own a bike when I was a student.`, o: [`would`, `used to`], a: 1,
      e: { en: `A past state → <i>used to</i>, not <i>would</i>.`, ja: `過去の状態には used to を使います（would は不可）。` } },
    { q: `When we lived by the river, we ___ walk there every evening.`, o: [`would`, `were`], a: 0,
      e: { en: `A repeated past action in a set past context → <i>would</i> (<i>used to</i> also works).`, ja: `過去の場面での繰り返しの動作なので would です（used to も可）。` } },
    { q: `I left ___ she arrived, so we didn't meet.`, o: [`before`, `after`, `until`], a: 0,
      e: { en: `<i>Before</i> makes the order clear without the perfect.`, ja: `before で順序が明確なので過去形で十分です。` } },
    { q: `A customer ___ outside when I arrived.`, o: [`waited`, `was waiting`, `had waited`], a: 1,
      e: { en: `Background in progress at the scene.`, ja: `その場面で進行中だった背景です。` } },
    { q: `She couldn't pay because she ___ her wallet at home.`, o: [`left`, `had left`, `was leaving`], a: 1,
      e: { en: `An earlier event explaining the past problem → past perfect.`, ja: `過去の問題を説明する、それ以前の出来事なので過去完了です。` } }
  ]
});
