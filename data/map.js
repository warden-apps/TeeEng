/* The mind-map layer: how the 77 lessons group together, a short label for each lesson,
   and four key points per lesson. Key points appear at the top of every lesson ("Key points"),
   on the chapter maps, in the mind-map previews, and on the quiz results page. */

GH.map.groups.push(
  { id: "found-blocks", ch: "found", t: { en: "Building blocks", ja: "文の材料" }, ids: ["grammar-map", "parts-of-speech"] },
  { id: "found-verbs", ch: "found", t: { en: "Verbs", ja: "動詞" }, ids: ["verb-types", "verb-forms", "be-have-do", "verb-endings"] },
  { id: "found-structure", ch: "found", t: { en: "Sentence structure", ja: "文の構造" }, ids: ["sentence-jobs", "phrases-clauses", "sentence-types"] },
  { id: "found-joining", ch: "found", t: { en: "Joining ideas", ja: "文をつなぐ" }, ids: ["coordinating", "subordinating", "linking-adverbials"] },

  { id: "nouns-nouns", ch: "nouns", t: { en: "Nouns & plurals", ja: "名詞と複数形" }, ids: ["nouns-countability", "plural-spelling", "plural-exceptions", "three-s"] },
  { id: "nouns-det", ch: "nouns", t: { en: "Determiners & pronouns", ja: "限定詞と代名詞" }, ids: ["articles", "determiners", "pronouns", "agreement"] },
  { id: "nouns-desc", ch: "nouns", t: { en: "Describing words", ja: "説明する語" }, ids: ["adjectives", "adjective-order", "comparison", "adverbs"] },
  { id: "nouns-prep", ch: "nouns", t: { en: "Prepositions", ja: "前置詞" }, ids: ["prep-place", "prep-time"] },

  { id: "tense-overview", ch: "tense", t: { en: "The big picture", ja: "全体像" }, ids: ["tense-map"] },
  { id: "tense-present", ch: "tense", t: { en: "Present", ja: "現在" }, ids: ["present-simple", "present-continuous", "present-perfect", "present-perfect-continuous", "present-choices"] },
  { id: "tense-past", ch: "tense", t: { en: "Past", ja: "過去" }, ids: ["past-simple", "past-continuous", "past-perfect", "past-perfect-continuous", "past-choices"] },
  { id: "tense-future", ch: "tense", t: { en: "Future", ja: "未来" }, ids: ["future-will", "going-to", "future-continuous", "future-perfect", "future-perfect-continuous", "future-choices"] },

  { id: "qm-questions", ch: "qm", t: { en: "Questions & negatives", ja: "疑問文と否定文" }, ids: ["questions", "indirect-questions-tags", "negatives", "imperatives"] },
  { id: "qm-modals", ch: "qm", t: { en: "Modal verbs", ja: "助動詞" }, ids: ["modals-system", "modals-uses", "modal-perfects"] },

  { id: "voice-passive", ch: "voice", t: { en: "Passive & causative", ja: "受動態と使役" }, ids: ["passive", "passive-causative"] },
  { id: "voice-cond", ch: "voice", t: { en: "Conditionals & wishes", ja: "条件文と願望" }, ids: ["conditionals-real", "conditionals-unreal", "mixed-conditionals", "wish"] },

  { id: "clauses-reported", ch: "clauses", t: { en: "Reported speech", ja: "話法" }, ids: ["reported-statements", "reported-questions"] },
  { id: "clauses-rel", ch: "clauses", t: { en: "Relative & noun clauses", ja: "関係詞節と名詞節" }, ids: ["relative-basic", "relative-advanced", "noun-clauses"] },
  { id: "clauses-verb", ch: "clauses", t: { en: "Verb patterns", ja: "動詞の型" }, ids: ["gerunds", "infinitives", "ing-vs-to", "participles", "used-to", "phrasal-verbs"] },

  { id: "adv-logic", ch: "adv", t: { en: "Logic & emphasis", ja: "論理と強調" }, ids: ["reason-purpose-result", "emphasis-clefts", "inversion", "ellipsis"] },
  { id: "adv-writing", ch: "adv", t: { en: "Clear writing", ja: "伝わる文章" }, ids: ["punctuation", "register", "frequent-errors"] },

  { id: "ref-verbs", ch: "ref", t: { en: "Verb forms", ja: "動詞の活用" }, ids: ["regular-confusables", "irregular-verbs"] },
  { id: "ref-check", ch: "ref", t: { en: "Final check", ja: "最終チェック" }, ids: ["sentence-building"] }
);

Object.assign(GH.map.topics, {
  /* ---------------------------------------------------------------- 01 Foundations */
  "grammar-map": { s: { en: "The grammar map", ja: "文法の全体像" }, k: [
    { en: `Units build up: word → phrase → clause → sentence.`, ja: `単位は 語 → 句 → 節 → 文 と積み上がる。` },
    { en: `A clause is built around a subject + a finite verb.`, ja: `節は「主語＋定形動詞」が中心。` },
    { en: `Ask two questions: what kind of word is it, and what job does it do here?`, ja: `「どんな品詞か」と「文中で何の働きか」を分けて考える。` },
    { en: `English shows each word's job by word order, not by particles.`, ja: `英語は助詞ではなく語順で働きを示す。` }] },
  "parts-of-speech": { s: { en: "Parts of speech", ja: "品詞" }, k: [
    { en: `Nine classes: noun, pronoun, verb, adjective, adverb, determiner, preposition, conjunction, interjection.`, ja: `9品詞：名詞・代名詞・動詞・形容詞・副詞・限定詞・前置詞・接続詞・間投詞。` },
    { en: `Decide the class from its use: a <i>fast</i> train (adjective) / it moves <i>fast</i> (adverb).`, ja: `品詞は使われ方で決まる：a fast train（形容詞）／moves fast（副詞）。` },
    { en: `-ly doesn't always mean adverb: <i>friendly</i> is an adjective.`, ja: `-ly＝副詞とは限らない（friendly は形容詞）。` },
    { en: `An adjective can't be the verb: <i>This bag <b>is</b> expensive.</i>`, ja: `形容詞だけでは述語になれない：This bag is expensive.` }] },
  "verb-types": { s: { en: "Verb types & 5 patterns", ja: "動詞の種類と5文型" }, k: [
    { en: `Main verbs carry the meaning; auxiliaries and modals help.`, ja: `本動詞が意味の中心、助動詞・法助動詞が補助する。` },
    { en: `The verb decides the pattern: SV, SVC, SVO, SVOO, SVOC.`, ja: `動詞が文型（SV・SVC・SVO・SVOO・SVOC）を決める。` },
    { en: `State meanings use simple forms: <i>I know</i>, not <i>I'm knowing</i>.`, ja: `状態の意味は単純形：I know（I'm knowing は不可）。` },
    { en: `Don't add <i>be</i> to a main verb: <i>I agree</i>, not <i>I am agree</i>.`, ja: `本動詞に be を足さない：I agree（I am agree は誤り）。` }] },
  "verb-forms": { s: { en: "V1 · V2 · V3 · V-ing · V-s", ja: "動詞の5つの形" }, k: [
    { en: `Five forms, not five tenses: eat · ate · eaten · eating · eats.`, ja: `5つの「形」であって時制ではない：eat・ate・eaten・eating・eats。` },
    { en: `do/did or a modal + V1 · have + V3 · be + V-ing · passive be + V3.`, ja: `do・did・助動詞＋V1、have＋V3、be＋V-ing、受動の be＋V3。` },
    { en: `V2 stands alone as the past; V3 needs a helper (or works as an adjective).`, ja: `V2 は単独で過去形。V3 は助動詞が必要（形容詞としても使う）。` },
    { en: `Only the first verb in a chain shows tense and agreement.`, ja: `時制と一致を表すのは、連なる動詞の最初の1つだけ。` }] },
  "be-have-do": { s: { en: "Be, have, do", ja: "be・have・do" }, k: [
    { en: `All three work as main verbs and as helpers.`, ja: `3つとも本動詞としても助動詞としても使う。` },
    { en: `<i>Be</i> moves itself in questions: <i>Are you ready?</i> — never <i>Do you ready?</i>`, ja: `be は自ら前に出る：Are you ready?（Do you ready? は誤り）` },
    { en: `Main-verb <i>have</i> uses do (<i>Do you have…?</i>); perfect <i>have</i> moves (<i>Have you finished?</i>).`, ja: `本動詞の have は do を使い（Do you have…?）、完了の have は自ら前に出る（Have you finished?）。` },
    { en: `Chain order: modal → have → be (continuous) → be (passive) → main verb.`, ja: `並ぶ順：助動詞 → 完了 have → 進行 be → 受動 be → 本動詞。` }] },
  "verb-endings": { s: { en: "-s, -ed, -ing endings", ja: "-s・-ed・-ing の語尾" }, k: [
    { en: `-es after s, sh, ch, x, z; consonant + y → -ies / -ied.`, ja: `s・sh・ch・x・z の後は -es、子音字＋y は -ies／-ied。` },
    { en: `Double the consonant after a stressed short vowel: stop → stopped.`, ja: `アクセントのある短母音＋子音字は重ねる：stop → stopped。` },
    { en: `-ed sounds /t/, /d/ or /ɪd/; only /ɪd/ adds a syllable (want-ed).`, ja: `-ed の発音は /t/・/d/・/ɪd/。音節が増えるのは /ɪd/ だけ（want-ed）。` },
    { en: `Irregular verbs don't use -ed: go → went → gone.`, ja: `不規則動詞は -ed を使わない：go → went → gone。` }] },
  "sentence-jobs": { s: { en: "Subject, object, complement", ja: "主語・目的語・補語" }, k: [
    { en: `The subject controls agreement: <i>The list of names <b>is</b> ready.</i>`, ja: `主語が動詞の形を決める：The list of names is ready.` },
    { en: `Objects and complements are required; time, place and manner details are optional.`, ja: `目的語・補語は必要な要素。時・場所・様態などは付け足し。` },
    { en: `<i>give / send / show</i> + person + thing, or thing + <i>to</i> + person; <i>buy / make / get</i> use <i>for</i>.`, ja: `give・send・show は「人＋もの」か「もの＋to＋人」、buy・make・get は for を使う。` },
    { en: `Not every verb takes two objects: <i>explain it to me</i>, not <i>explain me it</i>.`, ja: `二重目的語をとらない動詞もある：explain it to me（explain me it は不可）。` }] },
  "phrases-clauses": { s: { en: "Phrases & clauses", ja: "句と節" }, k: [
    { en: `A phrase is built around a head: a noun, verb, adjective, adverb or preposition.`, ja: `句は中心語（名詞・動詞・形容詞・副詞・前置詞）のまわりにできる。` },
    { en: `A finite clause has a subject + finite verb; a non-finite clause uses to V1, V-ing or V3.`, ja: `定形節は主語＋定形動詞、非定形節は to V1・V-ing・V3 を使う。` },
    { en: `A main clause can stand alone; a subordinate clause depends on another structure.`, ja: `主節は単独で文になり、従属節は他の構造に依存する。` },
    { en: `Short modifiers go before the noun, long ones after it: <i>the new phone on the desk</i>.`, ja: `短い修飾は名詞の前、長い修飾は後ろ：the new phone on the desk。` }] },
  "sentence-types": { s: { en: "Simple, compound, complex", ja: "単文・重文・複文" }, k: [
    { en: `Count the clauses, not the words: one independent clause = a simple sentence.`, ja: `語数ではなく節を数える。独立節1つなら単文。` },
    { en: `Compound = independent + independent; complex = independent + subordinate.`, ja: `重文＝独立節＋独立節、複文＝独立節＋従属節。` },
    { en: `A comma alone can't join two sentences (a comma splice).`, ja: `カンマだけで2つの文はつなげない（カンマスプライス）。` },
    { en: `Repair it with a conjunction, a semicolon or a full stop.`, ja: `接続詞・セミコロン・ピリオドのどれかで直す。` }] },
  "coordinating": { s: { en: "and, but, so… (FANBOYS)", ja: "等位接続詞" }, k: [
    { en: `FANBOYS join equal units: for, and, nor, but, or, yet, so.`, ja: `FANBOYS（for, and, nor, but, or, yet, so）が対等な単位をつなぐ。` },
    { en: `Put a comma before the conjunction only when it joins two full clauses.`, ja: `2つの完全な節をつなぐときだけ、接続詞の前にカンマ。` },
    { en: `Pairs: both…and, either…or, neither…nor, not only…but also.`, ja: `相関接続詞：both…and、either…or、neither…nor、not only…but also。` },
    { en: `Use one link only: not <i>Although…, but…</i>`, ja: `接続詞は1つだけ（Although…, but… は誤り）。` }] },
  "subordinating": { s: { en: "because, when, if…", ja: "従属接続詞" }, k: [
    { en: `They show the relation: reason, time, condition, concession, purpose.`, ja: `理由・時・条件・譲歩・目的などの関係を示す。` },
    { en: `Clause first → comma; clause last → usually no comma.`, ja: `従属節が前ならカンマ、後ろなら通常カンマなし。` },
    { en: `<i>because</i> + clause · <i>because of</i> + noun; <i>although</i> + clause · <i>despite</i> + noun / -ing.`, ja: `because＋節／because of＋名詞、although＋節／despite＋名詞・-ing。` },
    { en: `For the future after when, if, until: use the present — <i>when I arrive</i>.`, ja: `when・if・until の後は未来でも現在形：when I arrive。` }] },
  "linking-adverbials": { s: { en: "however, therefore…", ja: "接続副詞" }, k: [
    { en: `<i>However, therefore, moreover</i> are adverbs, not conjunctions.`, ja: `however・therefore・moreover は接続詞ではなく副詞。` },
    { en: `Put a full stop or semicolon before them: <i>…cheap; however, it…</i>`, ja: `前はピリオドかセミコロン：…cheap; however, it…` },
    { en: `Choose the logic: addition, contrast, result, example, restatement.`, ja: `追加・対比・結果・例示・言い換えなど、論理に合う語を選ぶ。` },
    { en: `<i>On the contrary</i> rejects a claim; <i>on the other hand</i> adds another side.`, ja: `on the contrary は否定、on the other hand は別の側面。` }] },

  /* ---------------------------------------------------------------- 02 Nouns & modifiers */
  "nouns-countability": { s: { en: "Countable & uncountable", ja: "可算と不可算" }, k: [
    { en: `Countable: a/an and a plural (a phone, two phones). Uncountable: neither.`, ja: `可算名詞は a/an と複数形あり、不可算名詞はどちらもなし。` },
    { en: `Count uncountables with units: a piece of advice, a glass of water.`, ja: `不可算名詞は単位で数える：a piece of advice、a glass of water。` },
    { en: `Meaning can switch it: coffee (the drink) / two coffees (two cups).`, ja: `意味で変わる：coffee（飲み物）／two coffees（2杯）。` },
    { en: `A singular countable noun needs a determiner: <i>a phone</i>, <i>my phone</i>.`, ja: `単数の可算名詞には限定詞が必要：a phone／my phone。` }] },
  "plural-spelling": { s: { en: "Plural spelling", ja: "複数形のつづり" }, k: [
    { en: `Most nouns add -s; after s, sh, ch, x, z add -es.`, ja: `ほとんどは -s、s・sh・ch・x・z の後は -es。` },
    { en: `Consonant + y → -ies (city → cities); vowel + y → -s (key → keys).`, ja: `子音字＋y → -ies（city → cities）、母音字＋y → -s（key → keys）。` },
    { en: `Some -f / -fe → -ves (knife → knives), but roof → roofs.`, ja: `一部の -f/-fe は -ves（knife → knives）、ただし roof → roofs。` },
    { en: `Compounds pluralize the main noun: sisters-in-law, bus stops.`, ja: `複合名詞は中心の名詞を複数に：sisters-in-law、bus stops。` }] },
  "plural-exceptions": { s: { en: "Irregular plurals", ja: "不規則な複数形" }, k: [
    { en: `Same form for one and many: fish, sheep, species, series.`, ja: `単複同形：fish・sheep・species・series。` },
    { en: `Old patterns: man → men, foot → feet, child → children, mouse → mice.`, ja: `古い形：man → men、foot → feet、child → children、mouse → mice。` },
    { en: `<i>News</i> and <i>mathematics</i> are singular; <i>scissors</i> and <i>police</i> are plural.`, ja: `news・mathematics は単数扱い、scissors・police は複数扱い。` },
    { en: `<i>People</i> is already plural: <i>Many people are…</i>`, ja: `people はそれ自体が複数：Many people are…` }] },
  "three-s": { s: { en: "Three jobs of -s", ja: "3つの -s" }, k: [
    { en: `dogs = plural · dog's = one owner · dogs' = several owners.`, ja: `dogs＝複数、dog's＝1匹の所有、dogs'＝複数の所有。` },
    { en: `Verb -s marks he / she / it in the present: <i>Mei works.</i>`, ja: `動詞の -s は3人称単数現在：Mei works.` },
    { en: `A plural subject takes no verb -s: <i>The dogs run.</i>`, ja: `主語が複数なら動詞に -s は付かない：The dogs run.` },
    { en: `Adjectives never take -s. <i>its</i> = belonging to it; <i>it's</i> = it is.`, ja: `形容詞に -s は付かない。its＝それの、it's＝it is。` }] },
  "articles": { s: { en: "a / an / the / no article", ja: "冠詞" }, k: [
    { en: `<i>a / an</i> = one of a kind that the listener can't identify yet.`, ja: `a/an＝聞き手がまだ特定できない「ある1つ」。` },
    { en: `<i>the</i> = the listener can tell which one (mentioned, unique, or specified).`, ja: `the＝聞き手がどれか特定できる（既出・唯一・限定）。` },
    { en: `No article for general plurals and uncountables: <i>I like cats.</i>`, ja: `一般論の複数・不可算は無冠詞：I like cats.` },
    { en: `<i>a</i> or <i>an</i> depends on the first sound: a university, an hour.`, ja: `a か an かは最初の音で決まる：a university、an hour。` }] },
  "determiners": { s: { en: "Determiners & quantifiers", ja: "限定詞と数量詞" }, k: [
    { en: `many / few / fewer + countable; much / little / less + uncountable.`, ja: `many・few・fewer＋可算、much・little・less＋不可算。` },
    { en: `<i>a few / a little</i> = some (positive); <i>few / little</i> = almost none.`, ja: `a few／a little＝少しある、few／little＝ほとんどない。` },
    { en: `<i>some</i> in statements and offers; <i>any</i> in questions and negatives.`, ja: `some は肯定文・勧誘、any は疑問文・否定文。` },
    { en: `<i>every / each</i> + singular noun + singular verb: <i>Every employee has…</i>`, ja: `every・each＋単数名詞＋単数の動詞：Every employee has…` }] },
  "pronouns": { s: { en: "Pronouns", ja: "代名詞" }, k: [
    { en: `Subject forms as subjects; object forms after verbs and prepositions.`, ja: `主語には主格、動詞・前置詞の後には目的格。` },
    { en: `<i>my</i> + noun, <i>mine</i> alone; no apostrophe in yours, hers, its.`, ja: `my＋名詞、mine は単独。yours・hers・its にアポストロフィなし。` },
    { en: `Use a reflexive when subject = object: <i>She introduced herself.</i>`, ja: `主語＝目的語なら再帰代名詞：She introduced herself.` },
    { en: `Singular <i>they</i> for an unknown person; everyone / nobody take singular verbs.`, ja: `不明な人には単数の they。everyone・nobody は単数扱い。` }] },
  "agreement": { s: { en: "Subject-verb agreement", ja: "主語と動詞の一致" }, k: [
    { en: `Find the head of the subject, not the nearest noun.`, ja: `近くの名詞ではなく、主語の中心語を見つける。` },
    { en: `<i>a number of</i> → plural; <i>the number of</i> → singular.`, ja: `a number of は複数、the number of は単数。` },
    { en: `An amount seen as one unit is singular: <i>Ten minutes is enough.</i>`, ja: `ひとまとまりの量は単数：Ten minutes is enough.` },
    { en: `<i>together with / as well as</i> don't make the subject plural.`, ja: `together with・as well as は主語を複数にしない。` }] },
  "adjectives": { s: { en: "Adjectives", ja: "形容詞" }, k: [
    { en: `Before a noun or after a linking verb: <i>a helpful colleague</i> / <i>She is helpful.</i>`, ja: `名詞の前か連結動詞の後：a helpful colleague／She is helpful.` },
    { en: `-ed = how you feel (bored); -ing = what causes it (boring).`, ja: `-ed＝自分の気持ち（bored）、-ing＝原因（boring）。` },
    { en: `Linking verbs take adjectives (<i>tastes good</i>); actions take adverbs (<i>looked carefully</i>).`, ja: `連結動詞＋形容詞（tastes good）、動作＋副詞（looked carefully）。` },
    { en: `Learn them with their patterns: good at, interested in, afraid of.`, ja: `後ろの形とセットで覚える：good at、interested in、afraid of。` }] },
  "adjective-order": { s: { en: "Adjective order", ja: "形容詞の語順" }, k: [
    { en: `Usual order: opinion, size, age, shape, color, origin, material, purpose.`, ja: `意見・大きさ・新旧・形・色・出身・素材・用途の順。` },
    { en: `Determiners and numbers come first: <i>my two new black bags</i>.`, ja: `限定詞・数詞がいちばん前：my two new black bags。` },
    { en: `The purpose word stays next to the noun: <i>running shoes</i>.`, ja: `用途の語は名詞の直前：running shoes。` },
    { en: `Commas only between separate qualities: <i>a kind, patient teacher</i>.`, ja: `カンマは独立した性質の間だけ：a kind, patient teacher。` }] },
  "comparison": { s: { en: "Comparatives & superlatives", ja: "比較級と最上級" }, k: [
    { en: `Short words: cheaper / the cheapest. Long words: more useful / the most useful.`, ja: `短い語は -er／-est、長い語は more／most。` },
    { en: `Irregular: good → better → best; bad → worse → worst.`, ja: `不規則：good → better → best、bad → worse → worst。` },
    { en: `Equal: <i>as … as</i>; less: <i>not as … as</i>.`, ja: `同等は as … as、「〜ほど…ない」は not as … as。` },
    { en: `Strengthen with <i>much / far</i> (much better) — never <i>very better</i> or <i>more cheaper</i>.`, ja: `強調は much・far（much better）。very better・more cheaper は誤り。` }] },
  "adverbs": { s: { en: "Adverbs & position", ja: "副詞と位置" }, k: [
    { en: `Adverbs say how, when, where, how often, how much — or give a view.`, ja: `様態・時・場所・頻度・程度、話し手の態度を表す。` },
    { en: `Frequency adverbs: before a main verb, after <i>be</i> and after the first auxiliary.`, ja: `頻度の副詞は一般動詞の前、be・最初の助動詞の後。` },
    { en: `Never between a verb and its object: <i>I like English very much.</i>`, ja: `動詞と目的語の間に入れない：I like English very much.` },
    { en: `Position changes meaning: <i>Only I called Mei</i> ≠ <i>I called only Mei</i>.`, ja: `位置で意味が変わる：Only I called Mei ≠ I called only Mei。` }] },
  "prep-place": { s: { en: "Prepositions: place", ja: "前置詞：場所" }, k: [
    { en: `<i>in</i> = inside a space · <i>on</i> = on a surface or line · <i>at</i> = at a point.`, ja: `in＝空間の中、on＝面・線の上、at＝地点。` },
    { en: `on a bus / train / plane, in a car / taxi; by bus, but on foot.`, ja: `on a bus・in a car。手段は by bus、徒歩は on foot。` },
    { en: `Movement: into, out of, onto, across, through, along, past.`, ja: `移動：into・out of・onto・across・through・along・past。` },
    { en: `<i>go home</i> (no <i>to</i>); arrive <i>at</i> a place, <i>in</i> a city.`, ja: `go home に to は不要。arrive at＋地点、arrive in＋都市。` }] },
  "prep-time": { s: { en: "Prepositions: time", ja: "前置詞：時" }, k: [
    { en: `<i>at</i> + clock time · <i>on</i> + day / date · <i>in</i> + month, year, season, part of the day.`, ja: `at＋時刻、on＋曜日・日付、in＋月・年・季節・時間帯。` },
    { en: `<i>for</i> + a length · <i>since</i> + a start · <i>during</i> + noun · <i>while</i> + clause.`, ja: `for＋期間、since＋起点、during＋名詞、while＋節。` },
    { en: `<i>by</i> = deadline (no later than) · <i>until</i> = continuing up to then.`, ja: `by＝期限（〜までに）、until＝継続（〜までずっと）。` },
    { en: `No preposition before this, next, last, every: <i>next Monday</i>.`, ja: `this・next・last・every の前に前置詞は不要：next Monday。` }] },

  /* ---------------------------------------------------------------- 03 Tense & aspect */
  "tense-map": { s: { en: "The 12-pattern map", ja: "12の時制マップ" }, k: [
    { en: `Tense = time (present, past, future); aspect = the viewpoint.`, ja: `時制＝時（現在・過去・未来）、相＝見方。` },
    { en: `Simple = whole · continuous = in progress · perfect = looking back · perfect continuous = duration up to a point.`, ja: `単純＝全体、進行＝途中、完了＝振り返り、完了進行＝ある時点までの継続。` },
    { en: `3 times × 4 aspects = the 12 patterns.`, ja: `3つの時×4つの相＝12パターン。` },
    { en: `Negative: <i>not</i> after the first auxiliary. Question: move the first auxiliary.`, ja: `否定は最初の助動詞の後に not、疑問は最初の助動詞を前へ。` }] },
  "present-simple": { s: { en: "Present simple", ja: "現在形" }, k: [
    { en: `Facts, habits, states and timetables — not "right now".`, ja: `事実・習慣・状態・時刻表。「今この瞬間」ではない。` },
    { en: `he / she / it + V-s: <i>She works.</i>`, ja: `3人称単数は V-s：She works.` },
    { en: `Questions and negatives: do / does + V1 — <i>Does she work?</i>`, ja: `疑問・否定は do/does＋原形：Does she work?` },
    { en: `Frequency adverbs go before the verb, after <i>be</i>: <i>I usually walk.</i>`, ja: `頻度の副詞は一般動詞の前、be の後：I usually walk.` }] },
  "present-continuous": { s: { en: "Present continuous", ja: "現在進行形" }, k: [
    { en: `am / is / are + V-ing: in progress now, or around now.`, ja: `am/is/are＋-ing：今、または今ごろ進行中。` },
    { en: `Temporary situations and changes: <i>Prices are rising.</i>`, ja: `一時的な状況・変化：Prices are rising.` },
    { en: `Future arrangements: <i>I'm meeting her at six.</i>`, ja: `手配済みの予定：I'm meeting her at six.` },
    { en: `Not for states: <i>I know</i>, <i>I like it</i> — not <i>I'm knowing</i>.`, ja: `状態には使わない：I know、I like it（I'm knowing は不可）。` }] },
  "present-perfect": { s: { en: "Present perfect", ja: "現在完了形" }, k: [
    { en: `have / has + V3: look back from now.`, ja: `have/has＋V3：今から振り返る。` },
    { en: `Four uses: present result, experience, open period, continuing state.`, ja: `4つの用法：結果・経験・まだ終わらない期間・継続する状態。` },
    { en: `<i>for</i> + a length, <i>since</i> + a starting point: <i>since 2024</i>.`, ja: `for＋期間、since＋起点：since 2024。` },
    { en: `Not with finished times like yesterday: <i>I saw him yesterday.</i>`, ja: `yesterday など終わった時とは使わない：I saw him yesterday.` }] },
  "present-perfect-continuous": { s: { en: "Present perfect continuous", ja: "現在完了進行形" }, k: [
    { en: `have / has been + V-ing: an activity lasting up to now.`, ja: `have/has been＋-ing：今まで続いてきた活動。` },
    { en: `It stresses time and effort: <i>I've been studying for two hours.</i>`, ja: `時間や労力を強調：I've been studying for two hours.` },
    { en: `Recent activity with visible effects: <i>I'm out of breath — I've been running.</i>`, ja: `影響が見える最近の活動：息切れ → I've been running。` },
    { en: `Counts and states take the simple perfect: <i>I've written three emails</i>, <i>I've known her</i>.`, ja: `数や状態は完了形：I've written three emails、I've known her。` }] },
  "present-choices": { s: { en: "Choosing a present form", ja: "現在時制の使い分け" }, k: [
    { en: `Routine or fact → present simple; temporary or now → present continuous.`, ja: `習慣・事実 → 現在形、一時的・今 → 現在進行形。` },
    { en: `Results or amounts up to now → present perfect.`, ja: `今までの結果・量 → 現在完了。` },
    { en: `Activity or time spent up to now → present perfect continuous.`, ja: `今までの活動・費やした時間 → 現在完了進行形。` },
    { en: `<i>How long have you…?</i> (still true) vs <i>When did you…?</i> (a past point).`, ja: `How long have you…?（今も続く）と When did you…?（過去の時点）。` }] },
  "past-simple": { s: { en: "Past simple", ja: "過去形" }, k: [
    { en: `V2 places an event in finished past time: <i>I called him yesterday.</i>`, ja: `V2 で終わった過去に位置づける：I called him yesterday.` },
    { en: `Also past states, past habits and the steps of a story.`, ja: `過去の状態・習慣・話の流れにも使う。` },
    { en: `Questions and negatives: did + V1 — <i>Did you go?</i> With be: <i>Were you…?</i>`, ja: `疑問・否定は did＋原形（Did you go?）、be は Were you…?` },
    { en: `A past form can show distance, not time: <i>If I had more time…</i>`, ja: `過去形は時でなく「距離」を表すこともある：If I had more time…` }] },
  "past-continuous": { s: { en: "Past continuous", ja: "過去進行形" }, k: [
    { en: `was / were + V-ing: in progress at a past time.`, ja: `was/were＋-ing：過去のある時点で進行中。` },
    { en: `Background for an event: <i>I was cooking when the phone rang.</i>`, ja: `出来事の背景：I was cooking when the phone rang.` },
    { en: `Two activities at the same time: <i>While I was…, she was…</i>`, ja: `同時進行の2つの活動：While I was…, she was…` },
    { en: `Events one after another use the past simple: <i>I arrived and ordered.</i>`, ja: `連続する出来事は過去形：I arrived and ordered.` }] },
  "past-perfect": { s: { en: "Past perfect", ja: "過去完了形" }, k: [
    { en: `had + V3: look back from a past point to something earlier.`, ja: `had＋V3：過去の時点から、それより前を振り返る。` },
    { en: `<i>When I arrived, he had left</i> = he was already gone.`, ja: `When I arrived, he had left.＝着いたときにはもういなかった。` },
    { en: `A time phrase can set the past point: <i>By 8 p.m., I had finished.</i>`, ja: `基準時点は時の表現でも示せる：By 8 p.m., I had finished.` },
    { en: `Not needed when after / before already show the order.`, ja: `after・before で順序がわかるなら過去形でよい。` }] },
  "past-perfect-continuous": { s: { en: "Past perfect continuous", ja: "過去完了進行形" }, k: [
    { en: `had been + V-ing: an activity lasting up to a past point.`, ja: `had been＋-ing：過去の時点まで続いていた活動。` },
    { en: `Duration: <i>I had been waiting for 20 minutes when…</i>`, ja: `期間：I had been waiting for 20 minutes when…` },
    { en: `Evidence at a past moment: <i>He was sweating because he had been running.</i>`, ja: `過去の時点での影響：He was sweating because he had been running.` },
    { en: `States and counts take had + V3: <i>had known</i>, <i>had finished two chapters</i>.`, ja: `状態・数は had＋V3：had known、had finished two chapters。` }] },
  "past-choices": { s: { en: "Choosing a past form", ja: "過去時制の使い分け" }, k: [
    { en: `Story events → past simple; background → past continuous.`, ja: `話の出来事 → 過去形、背景 → 過去進行形。` },
    { en: `Earlier result → past perfect; earlier duration → past perfect continuous.`, ja: `それ以前の結果 → 過去完了、それ以前の継続 → 過去完了進行形。` },
    { en: `<i>by the time</i> → had V3; <i>until</i> → continuing up to that point.`, ja: `by the time → had＋V3、until → その時まで続く。` },
    { en: `<i>used to</i> for past states and habits; <i>would</i> only for repeated actions.`, ja: `used to は過去の状態・習慣、would は繰り返しの動作だけ。` }] },
  "future-will": { s: { en: "Future with will", ja: "will の未来" }, k: [
    { en: `will + V1: prediction, decision now, offer, promise, request.`, ja: `will＋原形：予測・その場の決定・申し出・約束・依頼。` },
    { en: `<i>won't</i> can mean refusal: <i>The car won't start.</i>`, ja: `won't は拒絶も表す：The car won't start.` },
    { en: `<i>Shall I…? / Shall we…?</i> for offers and suggestions.`, ja: `Shall I…?／Shall we…? は申し出・提案。` },
    { en: `No <i>will</i> after when / if for future time: <i>when I arrive</i>.`, ja: `未来の when・if の後に will は使わない：when I arrive。` }] },
  "going-to": { s: { en: "Going to & other futures", ja: "be going to ほか" }, k: [
    { en: `be going to: an intention made before speaking, or evidence you can see now.`, ja: `be going to：話す前からの意図、今見えている根拠。` },
    { en: `Present continuous for arrangements; present simple for timetables.`, ja: `手配済みの予定は現在進行形、時刻表は現在形。` },
    { en: `<i>be about to</i> = very soon · <i>be due to</i> = scheduled.`, ja: `be about to＝まさに〜しようとしている、be due to＝予定。` },
    { en: `<i>was going to</i> = an earlier plan (often not carried out).`, ja: `was going to＝過去の計画（実現しなかったことが多い）。` }] },
  "future-continuous": { s: { en: "Future continuous", ja: "未来進行形" }, k: [
    { en: `will be + V-ing: in progress at a future time.`, ja: `will be＋-ing：未来のある時点で進行中。` },
    { en: `<i>At eight I'll be working</i> = already underway at eight.`, ja: `At eight I'll be working.＝8時には仕事の最中。` },
    { en: `A neutral question about plans: <i>Will you be using the car?</i>`, ja: `予定を中立的に尋ねる：Will you be using the car?` },
    { en: `Not with states: <i>I'll know</i>, not <i>I'll be knowing</i>.`, ja: `状態には使わない：I'll know（I'll be knowing は不可）。` }] },
  "future-perfect": { s: { en: "Future perfect", ja: "未来完了形" }, k: [
    { en: `will have + V3: complete by a future point.`, ja: `will have＋V3：未来のある時点までに完了。` },
    { en: `Often with <i>by</i>: <i>By Friday, I'll have sent it.</i>`, ja: `by とよく使う：By Friday, I'll have sent it.` },
    { en: `<i>by the time</i> + present: <i>By the time you arrive, we'll have…</i>`, ja: `by the time＋現在形：By the time you arrive, we'll have…` },
    { en: `Also a confident guess: <i>They'll have arrived by now.</i>`, ja: `推量にも使う：They'll have arrived by now.` }] },
  "future-perfect-continuous": { s: { en: "Future perfect continuous", ja: "未来完了進行形" }, k: [
    { en: `will have been + V-ing: duration up to a future point.`, ja: `will have been＋-ing：未来の時点までの継続。` },
    { en: `<i>By eight, I'll have been studying for three hours.</i>`, ja: `By eight, I'll have been studying for three hours.（8時で3時間勉強していることになる）` },
    { en: `It doesn't say the activity stops at that point.`, ja: `その時点で活動が終わるとは限らない。` },
    { en: `Counts and states take will have + V3.`, ja: `数や状態は will have＋V3。` }] },
  "future-choices": { s: { en: "Choosing a future form", ja: "未来表現の使い分け" }, k: [
    { en: `Decide the message first: decision, intention, arrangement, timetable or prediction.`, ja: `まず内容を決める：決定・意図・予定・時刻表・予測。` },
    { en: `After when, as soon as, until, if: a present form for the future.`, ja: `when・as soon as・until・if の後は現在形。` },
    { en: `<i>will</i> is fine in embedded questions: <i>I don't know when she will arrive.</i>`, ja: `間接疑問では will を使える：I don't know when she will arrive.` },
    { en: `Future seen from the past: <i>would</i> / <i>was going to</i>.`, ja: `過去から見た未来は would／was going to。` }] },

  /* ---------------------------------------------------------------- 04 Questions & modals */
  "questions": { s: { en: "Questions", ja: "疑問文" }, k: [
    { en: `Move the first auxiliary (or <i>be</i>) before the subject: <i>Is she working?</i>`, ja: `最初の助動詞（または be）を主語の前へ：Is she working?` },
    { en: `No auxiliary? Add do / does / did + V1: <i>Does she work?</i>`, ja: `助動詞がなければ do/does/did＋原形：Does she work?` },
    { en: `Subject questions need no do: <i>Who called?</i> vs <i>Who did you call?</i>`, ja: `主語を尋ねるなら do 不要：Who called? と Who did you call?` },
    { en: `Short answers repeat the auxiliary: <i>Yes, I do.</i> <i>No, I haven't.</i>`, ja: `短い答えは助動詞を繰り返す：Yes, I do.／No, I haven't.` }] },
  "indirect-questions-tags": { s: { en: "Indirect questions & tags", ja: "間接疑問と付加疑問" }, k: [
    { en: `Embedded questions use statement order: <i>…where the station is</i>.`, ja: `間接疑問は平叙文の語順：…where the station is。` },
    { en: `Yes / no questions → if / whether; <i>whether</i> before to V1 and <i>or not</i>.`, ja: `Yes/No 疑問は if/whether。to＋原形・or not の前は whether。` },
    { en: `Tags flip the polarity: positive statement → negative tag, and back.`, ja: `付加疑問は肯定と否定を逆に：肯定文 → 否定の付加疑問。` },
    { en: `Answer the fact: <i>Didn't you pay? — Yes, I did</i> (= I paid).`, ja: `答えは事実に合わせる：払ったなら Yes, I did。` }] },
  "negatives": { s: { en: "Negatives", ja: "否定文" }, k: [
    { en: `<i>not</i> goes after the first auxiliary; otherwise don't / doesn't / didn't + V1.`, ja: `not は最初の助動詞の後。なければ don't／doesn't／didn't＋原形。` },
    { en: `No double negatives: <i>I didn't see anybody.</i>`, ja: `二重否定を避ける：I didn't see anybody.` },
    { en: `<i>hardly, rarely, never</i> are already negative.`, ja: `hardly・rarely・never はそれ自体が否定。` },
    { en: `<i>Not everyone</i> = some didn't; <i>no one</i> = nobody at all.`, ja: `not everyone＝一部は違う、no one＝誰も〜ない。` }] },
  "imperatives": { s: { en: "Imperatives & requests", ja: "命令文と依頼" }, k: [
    { en: `Imperative = V1 with no subject: <i>Wait here.</i> <i>Don't be late.</i>`, ja: `命令文は主語なしの原形：Wait here.／Don't be late.` },
    { en: `<i>Let's</i> + V1; negative: <i>Let's not</i> + V1.`, ja: `Let's＋原形、否定は Let's not＋原形。` },
    { en: `Requests grow politer: Can you…? → Could you…? → Would you mind -ing?`, ja: `依頼は Can you → Could you → Would you mind -ing の順にていねい。` },
    { en: `Exclamations: <i>What a</i> + noun! / <i>How</i> + adjective!`, ja: `感嘆文：What a＋名詞！／How＋形容詞！` }] },
  "modals-system": { s: { en: "Modal verbs", ja: "助動詞の全体像" }, k: [
    { en: `Modal + V1, no -s, no do: <i>She can go. Can she go?</i>`, ja: `助動詞＋原形。-s も do も不要：She can go.／Can she go?` },
    { en: `Meanings: ability, permission, possibility, advice, necessity, deduction.`, ja: `意味：能力・許可・可能性・助言・必要・推量。` },
    { en: `Certainty: must (sure) › may / might / could (possible) › can't (impossible).`, ja: `確信度：must（確信）› may・might・could（可能性）› can't（ありえない）。` },
    { en: `Don't stack modals: <i>will be able to</i>, not <i>will can</i>.`, ja: `助動詞を重ねない：will be able to（will can は不可）。` }] },
  "modals-uses": { s: { en: "Ability, duty, advice", ja: "能力・義務・助言" }, k: [
    { en: `<i>could</i> = general past ability; <i>was able to / managed to</i> = one success.`, ja: `could＝過去の一般的な能力、was able to・managed to＝1回の成功。` },
    { en: `must / have to = necessary; mustn't = prohibited; don't have to = not necessary.`, ja: `must・have to＝必要、mustn't＝禁止、don't have to＝不要。` },
    { en: `<i>should</i> = advice; <i>had better</i> = strong advice with a warning.`, ja: `should＝助言、had better＝警告を含む強い忠告。` },
    { en: `<i>be supposed to</i> = an expected duty; <i>would rather</i> = preference.`, ja: `be supposed to＝〜することになっている、would rather＝むしろ〜したい。` }] },
  "modal-perfects": { s: { en: "Modal perfects", ja: "助動詞＋完了形" }, k: [
    { en: `modal + have + V3 = a judgment about the past.`, ja: `助動詞＋have＋V3＝過去についての判断。` },
    { en: `must have = surely did · can't have = surely didn't · might have = possibly did.`, ja: `must have＝したに違いない、can't have＝したはずがない、might have＝したかもしれない。` },
    { en: `<i>should have</i> = it was right, but it didn't happen (regret or criticism).`, ja: `should have＝すべきだったのに（後悔・非難）。` },
    { en: `Write <i>should have</i>, never <i>should of</i>.`, ja: `should of ではなく should have と書く。` }] },

  /* ---------------------------------------------------------------- 05 Voice & conditionals */
  "passive": { s: { en: "The passive", ja: "受動態" }, k: [
    { en: `be + V3: the active object becomes the subject.`, ja: `be＋V3。能動態の目的語が主語になる。` },
    { en: `Only <i>be</i> changes for tense: is checked, was checked, has been checked.`, ja: `時制で変わるのは be だけ：is／was／has been checked。` },
    { en: `Use it when the doer is unknown, obvious or unimportant.`, ja: `動作主が不明・明らか・重要でないときに使う。` },
    { en: `No passive for intransitive verbs: <i>It happened</i>, not <i>was happened</i>.`, ja: `自動詞は受動態にならない：It happened.` }] },
  "passive-causative": { s: { en: "Causatives & more passives", ja: "使役と受動態の応用" }, k: [
    { en: `have / get + object + V3 = someone else does it: <i>I had my hair cut.</i>`, ja: `have/get＋目的語＋V3＝してもらう：I had my hair cut.` },
    { en: `make + person + V1 (force) · let + person + V1 (allow).`, ja: `make＋人＋原形（させる）、let＋人＋原形（許す）。` },
    { en: `get + person + to V1 · help + person + (to) V1.`, ja: `get＋人＋to V1、help＋人＋(to) V1。` },
    { en: `Reporting passive: <i>He is said to be honest.</i>`, ja: `伝聞の受動態：He is said to be honest.` }] },
  "conditionals-real": { s: { en: "Real conditionals", ja: "現実的な条件文" }, k: [
    { en: `Zero: if + present, present — general truths.`, ja: `ゼロ条件文：if＋現在形, 現在形（一般的な真理）。` },
    { en: `First: if + present, will + V1 — a real future possibility.`, ja: `第1条件文：if＋現在形, will＋原形（現実的な未来）。` },
    { en: `No <i>will</i> in the condition: <i>if it rains</i>, not <i>if it will rain</i>.`, ja: `条件の節に will を使わない：if it rains。` },
    { en: `unless = if not · in case = as a precaution · even if = it won't change.`, ja: `unless＝〜しない限り、in case＝念のため、even if＝たとえ〜でも。` }] },
  "conditionals-unreal": { s: { en: "Unreal conditionals", ja: "仮定法" }, k: [
    { en: `Second: if + past, would + V1 — imagined now, or an unlikely future.`, ja: `仮定法過去：if＋過去形, would＋原形（今の仮定・可能性の低い未来）。` },
    { en: `Third: if + had V3, would have V3 — an imagined past.`, ja: `仮定法過去完了：if＋had V3, would have V3（過去の仮定）。` },
    { en: `The past form shows distance from reality, not past time.`, ja: `過去形は時ではなく現実からの距離を表す。` },
    { en: `<i>If I were you, I'd…</i> for advice; never <i>if I would have known</i>.`, ja: `助言は If I were you。if I would have known は誤り。` }] },
  "mixed-conditionals": { s: { en: "Mixed conditionals", ja: "混合仮定法" }, k: [
    { en: `Past condition → present result: if + had V3, would + V1.`, ja: `過去の条件 → 現在の結果：if＋had V3, would＋原形。` },
    { en: `Formal inversion without if: <i>Had I known…</i>, <i>Should you need…</i>`, ja: `if を使わない倒置：Had I known…／Should you need…` },
    { en: `<i>without, but for, otherwise</i> can replace if.`, ja: `without・but for・otherwise で if を置き換えられる。` },
    { en: `<i>only if</i> = a necessary condition · <i>if only</i> = a wish.`, ja: `only if＝必要条件、if only＝願望。` }] },
  "wish": { s: { en: "Wish, hope, preference", ja: "wish・hope・好み" }, k: [
    { en: `wish + past = I want now to be different: <i>I wish I knew.</i>`, ja: `wish＋過去形＝今とは違えばいいのに：I wish I knew.` },
    { en: `wish + had V3 = regret about the past: <i>I wish I had asked.</i>`, ja: `wish＋had V3＝過去への後悔：I wish I had asked.` },
    { en: `<i>hope</i> for real possibilities: <i>I hope it's sunny tomorrow.</i>`, ja: `実現しうることは hope：I hope it's sunny tomorrow.` },
    { en: `would rather + V1; would rather + someone + past form.`, ja: `would rather＋原形、would rather＋人＋過去形。` }] },

  /* ---------------------------------------------------------------- 06 Clauses & verb patterns */
  "reported-statements": { s: { en: "Reported statements", ja: "間接話法（平叙文）" }, k: [
    { en: `After <i>said</i>, shift one step back: am → was, will → would, have done → had done.`, ja: `said の後は1つ過去へ：am → was、will → would、have done → had done。` },
    { en: `No shift after <i>says</i>, or for facts that are still true.`, ja: `says の後や、今も正しい事実なら変えなくてよい。` },
    { en: `Change viewpoint words: I → she, here → there, tomorrow → the next day.`, ja: `視点の語を変える：I → she、here → there、tomorrow → the next day。` },
    { en: `<i>say</i> + message · <i>tell</i> + person + message.`, ja: `say＋内容、tell＋人＋内容。` }] },
  "reported-questions": { s: { en: "Reported questions & commands", ja: "疑問文・命令文の伝達" }, k: [
    { en: `Reported questions use statement order and no do: <i>She asked where I lived.</i>`, ja: `疑問の伝達は平叙文の語順・do なし：She asked where I lived.` },
    { en: `Yes / no questions become if / whether.`, ja: `Yes/No 疑問は if/whether で伝える。` },
    { en: `Commands: tell / ask + person + (not) to V1.`, ja: `命令：tell/ask＋人＋(not) to V1。` },
    { en: `Each reporting verb has a pattern: suggest -ing, offer to, accuse of.`, ja: `伝達動詞ごとの型を覚える：suggest -ing、offer to、accuse of。` }] },
  "relative-basic": { s: { en: "Relative clauses", ja: "関係詞節の基本" }, k: [
    { en: `who / that for people · which / that for things · whose for possession.`, ja: `人は who/that、ものは which/that、所有は whose。` },
    { en: `<i>where</i> = in / at which; <i>when</i> for times.`, ja: `where＝in/at which、時は when。` },
    { en: `Defining: no commas. Non-defining: commas, and never <i>that</i>.`, ja: `制限用法はカンマなし。非制限用法はカンマあり・that 不可。` },
    { en: `Object pronouns can go; don't repeat the object: <i>the phone (that) I bought</i>.`, ja: `目的格は省略可。目的語を重ねない：the phone (that) I bought。` }] },
  "relative-advanced": { s: { en: "Relative clauses: advanced", ja: "関係詞節の発展" }, k: [
    { en: `Preposition + whom / which (formal); never preposition + that.`, ja: `前置詞＋whom/which（堅い）。前置詞＋that は不可。` },
    { en: `Reduced relatives: <i>people waiting outside</i>, <i>forms completed yesterday</i>.`, ja: `分詞で短縮：people waiting outside、forms completed yesterday。` },
    { en: `<i>what</i> = the thing that; <i>whoever / whichever</i> = any person / one that.`, ja: `what＝the thing that、whoever・whichever＝〜なら誰でも／どれでも。` },
    { en: `Quantity + of whom / which: <i>two of whom spoke Japanese</i>.`, ja: `数量＋of whom/which：two of whom spoke Japanese。` }] },
  "noun-clauses": { s: { en: "Noun clauses", ja: "名詞節" }, k: [
    { en: `A clause can be a subject or an object: <i>I know that she is busy.</i>`, ja: `節が主語・目的語になる：I know that she is busy.` },
    { en: `Long subject clauses move to the end with <i>it</i>: <i>It surprised me that…</i>`, ja: `長い主語は it で後ろへ：It surprised me that…` },
    { en: `Embedded questions keep statement order: <i>where she lives</i>.`, ja: `間接疑問は平叙文の語順：where she lives。` },
    { en: `After demands, V1 for every subject: <i>They insisted that he be present.</i>`, ja: `要求の後はどの主語でも原形：They insisted that he be present.` }] },
  "gerunds": { s: { en: "Gerunds (-ing)", ja: "動名詞" }, k: [
    { en: `-ing can act as a noun: subject, object, or after a preposition.`, ja: `-ing は名詞として主語・目的語・前置詞の後に使う。` },
    { en: `enjoy, avoid, finish, mind, suggest, keep + -ing.`, ja: `enjoy・avoid・finish・mind・suggest・keep＋-ing。` },
    { en: `After a preposition, always -ing — including <i>look forward to meeting</i>.`, ja: `前置詞の後は必ず -ing（look forward to meeting も）。` },
    { en: `Passive and perfect -ing: being + V3, having + V3.`, ja: `受動・完了の -ing：being＋V3、having＋V3。` }] },
  "infinitives": { s: { en: "Infinitives", ja: "不定詞" }, k: [
    { en: `want, decide, hope, refuse + to V1; ask / tell + person + to V1.`, ja: `want・decide・hope・refuse＋to V1、ask/tell＋人＋to V1。` },
    { en: `Purpose: to V1 — <i>I called to confirm.</i>`, ja: `目的は to V1：I called to confirm.` },
    { en: `Bare V1 after modals and after let / make + object.`, ja: `助動詞や let/make＋目的語の後は原形。` },
    { en: `to have V3 = earlier · to be V3 = passive.`, ja: `to have V3＝それ以前、to be V3＝受動。` }] },
  "ing-vs-to": { s: { en: "-ing or to? Meaning changes", ja: "-ing と to で意味が変わる" }, k: [
    { en: `-ing looks back, to looks forward: remember locking / remember to lock.`, ja: `-ing は過去、to はこれから：remember locking／remember to lock。` },
    { en: `stop -ing = quit · stop to V1 = pause in order to do it.`, ja: `stop -ing＝やめる、stop to＝〜するために止まる。` },
    { en: `try -ing = test a method · try to V1 = make an effort.`, ja: `try -ing＝試しにやってみる、try to＝〜しようと努める。` },
    { en: `would like + to V1; need -ing has a passive meaning.`, ja: `would like＋to V1、need -ing は受動の意味。` }] },
  "participles": { s: { en: "Participle clauses", ja: "分詞構文" }, k: [
    { en: `V-ing (active) and V3 (passive) clauses add time, reason or background.`, ja: `V-ing（能動）・V3（受動）の節で時・理由・背景を表す。` },
    { en: `Having + V3 = completed before the main event.`, ja: `Having＋V3＝主節より前に完了。` },
    { en: `The understood subject must be the main subject (no dangling participles).`, ja: `意味上の主語は主節の主語と一致させる（懸垂分詞を避ける）。` },
    { en: `see / hear + object + V1 (the whole event) or V-ing (in progress).`, ja: `see/hear＋目的語＋原形（全体）／-ing（途中）。` }] },
  "used-to": { s: { en: "used to · be used to · would", ja: "used to・be used to・would" }, k: [
    { en: `used to + V1 = a past habit or state that is not true now.`, ja: `used to＋原形＝以前の習慣・状態（今は違う）。` },
    { en: `be used to + noun / -ing = accustomed; get used to = become accustomed.`, ja: `be used to＋名詞・-ing＝慣れている、get used to＝慣れる。` },
    { en: `would = repeated past actions only, never states.`, ja: `would は過去の繰り返しの動作だけ（状態には不可）。` },
    { en: `Questions and negatives: did … use to.`, ja: `疑問・否定は did … use to。` }] },
  "phrasal-verbs": { s: { en: "Phrasal verbs", ja: "句動詞" }, k: [
    { en: `The particle changes the meaning: look up / look for / look after.`, ja: `後ろの語で意味が変わる：look up／look for／look after。` },
    { en: `Separable: turn off the phone = turn the phone off.`, ja: `分離できる：turn off the phone＝turn the phone off。` },
    { en: `A pronoun goes in the middle: <i>turn it off</i>, never <i>turn off it</i>.`, ja: `代名詞は真ん中：turn it off（turn off it は誤り）。` },
    { en: `Some are inseparable (<i>look after her</i>); some take no object (<i>broke down</i>).`, ja: `分離できないもの（look after her）、目的語をとらないもの（broke down）もある。` }] },

  /* ---------------------------------------------------------------- 07 Advanced structure & writing */
  "reason-purpose-result": { s: { en: "Reason, purpose, result", ja: "理由・目的・結果" }, k: [
    { en: `Reason: <i>because…</i> · purpose: to V1 or so that + clause.`, ja: `理由は because、目的は to V1 か so that＋節。` },
    { en: `so + adjective + that · such (a) + adjective + noun + that.`, ja: `so＋形容詞＋that、such (a)＋形容詞＋名詞＋that。` },
    { en: `too + adjective + to V1 = impossible · adjective + enough + to V1.`, ja: `too＋形容詞＋to V1＝〜すぎて…できない、形容詞＋enough＋to V1。` },
    { en: `<i>like</i> + noun (similar to) · <i>as</i> + role (in that job).`, ja: `like＋名詞（〜のように）、as＋役割（〜として）。` }] },
  "emphasis-clefts": { s: { en: "Emphasis & clefts", ja: "強調と分裂文" }, k: [
    { en: `Emphatic do: <i>I do understand.</i>`, ja: `強調の do：I do understand.` },
    { en: `It-cleft: <i>It was Mei who called.</i> puts the focus on Mei.`, ja: `強調構文：It was Mei who called.（Mei に焦点）` },
    { en: `Wh-cleft: <i>What I need is time.</i>`, ja: `what で始める強調：What I need is time.` },
    { en: `New or long information goes last; <i>it</i> and <i>there</i> postpone it.`, ja: `新しい・長い情報は後ろへ。it・there で後回しにする。` }] },
  "inversion": { s: { en: "Inversion", ja: "倒置" }, k: [
    { en: `Fronted negatives invert: <i>Never had I seen…</i>`, ja: `否定語を前に出すと倒置：Never had I seen…` },
    { en: `No auxiliary? Add do: <i>Rarely does she complain.</i>`, ja: `助動詞がなければ do を補う：Rarely does she complain.` },
    { en: `Fixed pairs: hardly … when, no sooner … than.`, ja: `決まった組：hardly … when、no sooner … than。` },
    { en: `<i>So do I / Neither have I</i>; formal <i>Had I known…</i>`, ja: `So do I／Neither have I、改まった Had I known…` }] },
  "ellipsis": { s: { en: "Ellipsis & substitution", ja: "省略と代用" }, k: [
    { en: `Leave out what's clear after an auxiliary: <i>Yes, I do. She hasn't.</i>`, ja: `助動詞の後の自明な部分を省く：Yes, I do.／She hasn't.` },
    { en: `<i>so / not</i> replace a clause: <i>I think so. I hope not.</i>`, ja: `so／not が節の代わり：I think so.／I hope not.` },
    { en: `<i>one / ones</i> replace countable nouns — not uncountables.`, ja: `one／ones は可算名詞の代わり（不可算には使わない）。` },
    { en: `Repeat the words when leaving them out would be unclear.`, ja: `省くとわかりにくいときは繰り返す。` }] },
  "punctuation": { s: { en: "Punctuation", ja: "句読点" }, k: [
    { en: `A comma can't join two sentences: use and / so, a semicolon, or a full stop.`, ja: `カンマだけで2文をつながない（and・so、セミコロン、ピリオド）。` },
    { en: `Commas around non-defining clauses; none around defining ones.`, ja: `非制限用法はカンマで囲み、制限用法には付けない。` },
    { en: `A colon follows a complete lead-in, to introduce a list or explanation.`, ja: `コロンは完全な文の後で列挙・説明を導く。` },
    { en: `its = belonging to it · it's = it is; whose ≠ who's.`, ja: `its＝それの、it's＝it is。whose と who's も区別。` }] },
  "register": { s: { en: "Register & varieties", ja: "文体と英米差" }, k: [
    { en: `Match the style to the situation: chat, service, formal writing.`, ja: `場面に合わせる：会話・接客・改まった文章。` },
    { en: `Final prepositions, split infinitives and contractions are standard.`, ja: `文末の前置詞・分離不定詞・短縮形は標準的。` },
    { en: `British vs American: at / on the weekend, got / gotten, travelled / traveled.`, ja: `英米差：at/on the weekend、got/gotten、travelled/traveled。` },
    { en: `Politeness comes from structure (<i>Could you…?</i>), not from extra words.`, ja: `ていねいさは構文で（Could you…?）、語数ではない。` }] },
  "frequent-errors": { s: { en: "Frequent errors", ja: "よくある誤り" }, k: [
    { en: `Check the form after a helper: did + V1, have + V3, be + V-ing.`, ja: `助動詞の後の形を確認：did＋原形、have＋V3、be＋-ing。` },
    { en: `No extra <i>be</i> (<i>I agree</i>); no passive for <i>happen</i> (<i>It happened</i>).`, ja: `余分な be を付けない（I agree）、happen は受動態にしない（It happened）。` },
    { en: `Patterns: enjoy -ing, look forward to -ing, explain it to me.`, ja: `型：enjoy -ing、look forward to -ing、explain it to me。` },
    { en: `Learn the reason, then make a new example of your own.`, ja: `理由を理解し、自分で新しい例文を作る。` }] },

  /* ---------------------------------------------------------------- 08 Verb forms & reference */
  "regular-confusables": { s: { en: "Confusable verbs", ja: "紛らわしい動詞" }, k: [
    { en: `Regular verbs: V2 = V3 = -ed, but the two jobs differ.`, ja: `規則動詞は V2＝V3＝-ed。ただし働きは違う。` },
    { en: `No object: lie, rise, sit. With an object: lay, raise, set.`, ja: `目的語なし：lie・rise・sit、目的語あり：lay・raise・set。` },
    { en: `lie (say something false) – lied – lied; lie (recline) – lay – lain.`, ja: `うそをつく lie – lied – lied、横になる lie – lay – lain。` },
    { en: `Traps: read (V2 sounds /red/), born vs borne, hung vs hanged.`, ja: `注意：read の過去形は /red/、born と borne、hung と hanged。` }] },
  "irregular-verbs": { s: { en: "Irregular verbs", ja: "不規則動詞" }, k: [
    { en: `Learn each verb in threes: eat – ate – eaten.`, ja: `3つセットで覚える：eat – ate – eaten。` },
    { en: `Families: AAA (cut), ABB (buy), ABA (come), ABC (go).`, ja: `型：AAA（cut）・ABB（buy）・ABA（come）・ABC（go）。` },
    { en: `Use each form in its frame: did + V1, have + V3, was + V3.`, ja: `それぞれの形を文で使う：did＋V1、have＋V3、was＋V3。` },
    { en: `Practice with the 131-verb table and the typing drill.`, ja: `131語の一覧表と入力ドリルで練習する。` }] },
  "sentence-building": { s: { en: "Build & check a sentence", ja: "文の組み立てと点検" }, k: [
    { en: `Start from meaning: message → participants → time → details.`, ja: `意味から始める：内容 → 参加者 → 時 → 詳細。` },
    { en: `Check the skeleton: every clause needs a subject + a finite verb.`, ja: `骨組みを確認：どの節にも主語＋定形動詞。` },
    { en: `Then agreement, verb forms, determiners, links and punctuation.`, ja: `次に一致・動詞の形・限定詞・つなぎ・句読点。` },
    { en: `For any two forms, ask: what meaning changes?`, ja: `2つの形で迷ったら「意味はどう変わる？」と考える。` }] }
});
