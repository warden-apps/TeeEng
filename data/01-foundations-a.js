/* 01 Foundations — part A (handbook pp. 6–11) */

GH.topic({
  id: "grammar-map", ch: "found", p: 6,
  t: { en: "The grammar map", ja: "文法の全体像" },
  d: { en: "Word, phrase, clause, sentence — and the difference between a word's class and its job.", ja: "語・句・節・文の関係と、「品詞」と「文中での働き」の違い" },
  body: [
    { k: "core", en: `Grammar connects words to meaning. It builds upward: <b>word → phrase → clause → sentence</b>. At each level, ask what kind of unit it is and what job it does.`,
      ja: `文法は語と意味をつなぐしくみです。<b>語 → 句 → 節 → 文</b>と積み上がっていきます。それぞれの段階で「どんな単位か」「どんな働きをしているか」を考えましょう。` },
    { k: "h", en: "From a word to a sentence", ja: "語から文へ" },
    { k: "table", head: [{ en: "Unit", ja: "単位" }, { en: "What it is", ja: "説明" }, "@example"], rows: [
      [{ en: "Word", ja: "語" }, { en: "A small grammatical unit", ja: "最小の文法単位" }, `<x>customer</x>, <x>helpful</x>, <x>quickly</x>`],
      [{ en: "Phrase", ja: "句" }, { en: "One or more words working as a unit", ja: "1語以上がまとまって1つの働きをするもの" }, `<x>the new customer</x>; <x>very helpful</x>; <x>at the counter</x>`],
      [{ en: "Clause", ja: "節" }, { en: "A unit built around a subject and a verb phrase", ja: "主語と動詞（句）を中心とするまとまり" }, `<x>the customer is waiting</x>`],
      [{ en: "Sentence", ja: "文" }, { en: "One or more clauses presented as a complete unit", ja: "1つ以上の節からなる、書き言葉での完結した単位" }, `<x>The customer is waiting because the system is slow.</x>`]
    ] },
    { k: "nest", t: { en: "Each unit sits inside a bigger one", ja: "小さな単位は大きな単位の中にある" }, items: [
      [{ en: "Sentence", ja: "文" }, `The customer is waiting because the system is slow.`],
      [{ en: "Clause", ja: "節" }, `The customer is waiting`],
      [{ en: "Phrase", ja: "句" }, `The customer`],
      [{ en: "Word", ja: "語" }, `customer`]
    ] },
    { k: "sv", t: { en: "One longer sentence, four parts", ja: "長めの文を4つの部分に分ける" }, rows: [
      { p: [["S", `The new customer`, { en: "subject noun phrase", ja: "主語（名詞句）" }], ["V", `has been waiting`, { en: "verb phrase", ja: "動詞句" }],
        ["M", `at the counter`, { en: "place: prepositional phrase", ja: "場所：前置詞句" }], ["M", `because the system is slow.`, { en: "reason: subordinate clause", ja: "理由：従属節" }]] }
    ], n: { en: `Only <i>the new customer</i> and <i>has been waiting</i> are needed for a sentence; the two M parts add place and reason.`, ja: `文に欠かせないのは <i>the new customer</i> と <i>has been waiting</i> だけ。2つの M は場所と理由を付け足しています。` } },
    { k: "h", en: "Three different questions", ja: "3つの問い" },
    { k: "table", head: [{ en: "Question", ja: "問い" }, { en: "What it identifies", ja: "わかること" }, "@example"], rows: [
      [{ en: "What kind of word is it?", ja: "どんな種類の語か？" }, { en: "Word class (part of speech)", ja: "品詞" }, { en: `<x>customer</x> is a noun.`, ja: `<x>customer</x> は名詞` }],
      [{ en: "What job does it do here?", ja: "この文で何の働きをしているか？" }, { en: "Grammatical function", ja: "文法的機能（主語・目的語など）" }, { en: `<x>The customer</x> is the subject.`, ja: `<x>The customer</x> は主語` }],
      [{ en: "What does this pattern mean?", ja: "この形はどんな意味か？" }, { en: "Meaning in context", ja: "文脈での意味" }, { en: `<x>has been waiting</x> links earlier waiting to now.`, ja: `<x>has been waiting</x> は以前から今まで待ち続けていることを表す` }]
    ] },
    { k: "p", en: `A noun is not always a subject: in <x>I helped the customer</x>, the noun phrase is an object. An adjective is never an object: in <x>The customer seems happy</x>, <i>happy</i> is a subject complement.`,
      ja: `名詞がいつも主語になるわけではありません。<x>I helped the customer</x> では名詞句が目的語です。また形容詞は目的語になりません。<x>The customer seems happy</x> の <i>happy</i> は主格補語です。` },
    { k: "h", en: "Essential terms", ja: "基本用語" },
    { k: "p", en: `<b>Singular / plural</b>: one / more than one. <b>Person</b>: first = speaker (<i>I, we</i>); second = listener (<i>you</i>); third = others (<i>he, she, it, they</i>). <b>Agreement</b>: matching forms, as in <x>she works</x> / <x>they work</x>.`,
      ja: `<b>単数／複数</b>：1つ／2つ以上。<b>人称</b>：1人称＝話し手（<i>I, we</i>）、2人称＝聞き手（<i>you</i>）、3人称＝それ以外（<i>he, she, it, they</i>）。<b>一致</b>：<x>she works</x>／<x>they work</x> のように形をそろえること。` },
    { k: "p", en: `<b>Finite verb</b>: carries tense (or is a modal) and anchors the clause. In <x>She has been studying</x>, <i>has</i> is finite; <i>been</i> and <i>studying</i> are non-finite. A <b>main clause</b> can normally stand alone; a <b>subordinate clause</b> depends on another structure.`,
      ja: `<b>定形動詞</b>：時制を表す（または法助動詞である）動詞で、節の中心になります。<x>She has been studying</x> では <i>has</i> が定形、<i>been</i> と <i>studying</i> は非定形です。<b>主節</b>は通常それだけで文になり、<b>従属節</b>は他の構造に依存します。` },
    { k: "note", en: `A label describes a use in a sentence. <i>Work</i> is a noun in <x>My work is difficult</x> and a verb in <x>I work here</x>.`,
      ja: `品詞は文中での使われ方で決まります。<i>work</i> は <x>My work is difficult</x> では名詞、<x>I work here</x> では動詞です。` },
    { k: "tip", en: `In Japanese, particles such as が and を show each word's job, so word order is flexible. English has no such particles — position does the job. <x>The dog bit the man.</x> and <x>The man bit the dog.</x> mean opposite things.`,
      ja: `日本語では「が」「を」などの助詞が語の働きを示すので、「犬が男をかんだ」「男を犬がかんだ」のように語順を入れ替えられます。英語にはこうした助詞がなく、<b>語順</b>が働きを決めます。<x>The dog bit the man.</x> と <x>The man bit the dog.</x> は意味が逆です。` }
  ],
  q: [
    { q: { en: `Which unit is <x>at the counter</x>?`, ja: `<x>at the counter</x> はどの単位？` },
      o: [{ en: "A word", ja: "語" }, { en: "A phrase", ja: "句" }, { en: "A clause", ja: "節" }], a: 1,
      e: { en: `It is a prepositional phrase: several words acting as one unit, with no subject + finite verb.`, ja: `前置詞句です。複数の語が1つのまとまりとして働いていますが、主語＋定形動詞はありません。` } },
    { q: { en: `Which of these is a clause?`, ja: `節はどれ？` },
      o: [`the very helpful employee at the counter`, `the customer is waiting`, `at the counter near the window`], a: 1,
      e: { en: `Only <i>the customer is waiting</i> has a subject and a finite verb. A long phrase is still a phrase.`, ja: `主語と定形動詞をもつのは <i>the customer is waiting</i> だけです。長くても句は句です。` } },
    { q: { en: `In <x>The customer seems happy</x>, what is <i>happy</i>?`, ja: `<x>The customer seems happy</x> の <i>happy</i> は？` },
      o: [{ en: "An object", ja: "目的語" }, { en: "A subject complement", ja: "主格補語" }, { en: "The subject", ja: "主語" }], a: 1,
      e: { en: `<i>Seems</i> is a linking verb; <i>happy</i> describes the subject, so it is a subject complement, not an object.`, ja: `<i>seems</i> は連結動詞で、<i>happy</i> は主語を説明しているので主格補語です。目的語ではありません。` } },
    { q: { en: `In <x>My work is difficult</x>, <i>work</i> is a…`, ja: `<x>My work is difficult</x> の <i>work</i> の品詞は？` },
      o: [{ en: "noun", ja: "名詞" }, { en: "verb", ja: "動詞" }, { en: "adjective", ja: "形容詞" }], a: 0,
      e: { en: `<i>My</i> introduces a noun, and <i>work</i> is the head of the subject. In <i>I work here</i>, the same word is a verb.`, ja: `<i>My</i> の後に来て主語の中心になっているので名詞です。<i>I work here</i> なら同じ語が動詞になります。` } },
    { q: { en: `Which word is the finite verb in <x>She has been studying</x>?`, ja: `<x>She has been studying</x> で定形動詞（時制を担う動詞）はどれ？` },
      o: [`has`, `been`, `studying`], a: 0,
      e: { en: `<i>Has</i> carries present tense and agrees with <i>she</i>. <i>Been</i> and <i>studying</i> are non-finite.`, ja: `<i>has</i> が現在時制を表し、主語 <i>she</i> と一致しています。<i>been</i> と <i>studying</i> は非定形です。` } },
    { q: { en: `Which sentence shows correct agreement?`, ja: `主語と動詞が一致している文は？` },
      o: [`She work here.`, `She works here.`, `They works here.`], a: 1,
      e: { en: `Third-person singular <i>she</i> takes <i>works</i>; <i>they</i> takes <i>work</i>.`, ja: `3人称単数の <i>she</i> には <i>works</i>、<i>they</i> には <i>work</i> を使います。` } },
    { q: { en: `Which pronoun is second person?`, ja: `2人称の代名詞はどれ？` },
      o: [`I`, `you`, `they`], a: 1,
      e: { en: `Second person = the listener: <i>you</i>. <i>I</i> is first person; <i>they</i> is third person.`, ja: `2人称は聞き手＝<i>you</i> です。<i>I</i> は1人称、<i>they</i> は3人称です。` } },
    { q: { en: `In <x>I stayed because it was raining</x>, which part is the main clause?`, ja: `<x>I stayed because it was raining</x> の主節は？` },
      o: [`I stayed`, `because it was raining`, `it was raining`], a: 0,
      e: { en: `<i>I stayed</i> can stand alone. <i>Because it was raining</i> is a subordinate clause giving the reason.`, ja: `<i>I stayed</i> は単独で文になれる主節です。<i>because it was raining</i> は理由を表す従属節です。` } },
    { q: { en: `Which sentence says that the <b>dog</b> did the biting?`, ja: `かみついたのが「犬」である文はどれ？` },
      o: [`The man bit the dog.`, `The dog bit the man.`, `The man the dog bit.`], a: 1,
      e: { en: `English marks the subject by position: the noun before the verb is the subject.`, ja: `英語では語順で主語が決まります。動詞の前の名詞が主語です。` } },
    { w: [`The`, `new`, `phone`, `on`, `the`, `desk`, `is`, `mine.`], i: [`The new phone on the desk is mine.`, `The phone on the new desk is mine.`],
      e: { en: `Build the subject noun phrase first (<i>the new phone on the desk</i>), then add the verb and complement.`, ja: `まず主語の名詞句（<i>the new phone on the desk</i>）を作り、動詞と補語を続けます。` } }
  ]
});

GH.topic({
  id: "parts-of-speech", ch: "found", p: 7,
  t: { en: "Parts of speech", ja: "品詞とその働き" },
  d: { en: "Nine word classes, how to recognize them from their use, and why one word can change class.", ja: "9つの品詞、使われ方から品詞を見分ける方法、同じ語でも品詞が変わる理由" },
  body: [
    { k: "core", en: `A word class (part of speech) is a family of words that behave alike. Recognize a class by its <b>use in the sentence</b>, not by its spelling.`,
      ja: `品詞とは、同じようにふるまう語のグループです。品詞はつづりではなく、<b>文の中での使われ方</b>で見分けます。` },
    { k: "p", en: `Traditional school grammar lists eight parts of speech. Here <b>determiners</b> (<i>a, the, my, this, some</i>) are treated separately from adjectives, because that makes noun phrases easier to build.`,
      ja: `伝統的な学校文法では品詞を8つとしますが、ここでは <b>限定詞</b>（<i>a, the, my, this, some</i> など）を形容詞と分けて扱います。そのほうが名詞句を組み立てやすくなるからです。` },
    { k: "table", head: [{ en: "Word class", ja: "品詞" }, { en: "Main job", ja: "主な働き" }, "@example"], rows: [
      [{ en: "Noun", ja: "名詞" }, { en: "Names a person, thing, place, event, or idea", ja: "人・もの・場所・出来事・考えを表す" }, `<x>A customer needs information.</x>`],
      [{ en: "Pronoun", ja: "代名詞" }, { en: "Refers to people or things without a full noun", ja: "名詞を繰り返さずに人やものを指す" }, `<x>She needs it.</x> <x>Someone called.</x>`],
      [{ en: "Verb", ja: "動詞" }, { en: "Expresses an action, event, state, or relationship", ja: "動作・出来事・状態・関係を表す" }, `<x>We work.</x> <x>It happened.</x> <x>I know.</x>`],
      [{ en: "Adjective", ja: "形容詞" }, { en: "Describes a noun, or a subject or object", ja: "名詞や主語・目的語を説明する" }, `<x>a new phone</x>; <x>The phone is new.</x>`],
      [{ en: "Adverb", ja: "副詞" }, { en: "Modifies a verb, adjective, adverb, or clause", ja: "動詞・形容詞・副詞・節を修飾する" }, `<x>speaks clearly</x>; <x>very useful</x>; <x>Luckily, it worked.</x>`],
      [{ en: "Determiner", ja: "限定詞" }, { en: "Identifies or quantifies a noun", ja: "名詞がどれか・どれだけかを示す" }, `<x>a / the / my / this / some phone(s)</x>`],
      [{ en: "Preposition", ja: "前置詞" }, { en: "Heads a phrase that shows a relationship", ja: "関係を表す句をつくる" }, `<x>in Japan</x>; <x>after lunch</x>; <x>for you</x>`],
      [{ en: "Conjunction", ja: "接続詞" }, { en: "Connects words, phrases, or clauses", ja: "語・句・節をつなぐ" }, `<x>tea and coffee</x>; <x>I left because it was late.</x>`],
      [{ en: "Interjection", ja: "間投詞" }, { en: "Expresses a reaction outside normal clause structure", ja: "文の構造の外で感情や反応を表す" }, `<x>Oh!</x> <x>Wow!</x> <x>Ouch!</x>`]
    ] },
    { k: "sv", t: { en: "Label every word in one sentence", ja: "1つの文のすべての語に品詞を付ける" }, rows: [
      { p: [["D", `The`], ["AJ", `helpful`], ["N", `assistant`], ["V", `explained`], ["D", `the`], ["N", `problem`], ["AV", `clearly.`]] }
    ], n: { en: `Determiner + adjective + noun build each noun phrase; the adverb <i>clearly</i> tells how she explained.`, ja: `限定詞＋形容詞＋名詞で名詞句ができ、副詞 <i>clearly</i> は「どのように説明したか」を表します。` } },
    { k: "h", en: "Recognize a class through its use", ja: "使われ方で品詞を見分ける" },
    { k: "ex", items: [
      [`a <b>fast</b> train`, { en: `adjective: describes the noun <i>train</i>`, ja: `形容詞：名詞 <i>train</i> を説明` }],
      [`The train moves <b>fast</b>.`, { en: `adverb: describes how it moves`, ja: `副詞：どのように動くかを説明` }],
      [`<b>before</b> lunch`, { en: `preposition + noun`, ja: `前置詞＋名詞` }],
      [`<b>before</b> we eat`, { en: `introduces a clause (subordinating conjunction)`, ja: `節を導く（従属接続詞）` }],
      [`I have seen it <b>before</b>.`, { en: `adverb: stands alone`, ja: `副詞：単独で使われている` }]
    ] },
    { k: "p", en: `<i>That</i> changes jobs too: <x>that phone</x> (determiner), <x>I think that it works</x> (clause marker), <x>the phone that I bought</x> (relative marker). Read the whole sentence before choosing a label.`,
      ja: `<i>that</i> も働きが変わります。<x>that phone</x>（限定詞）、<x>I think that it works</x>（節を導く接続詞）、<x>the phone that I bought</x>（関係代名詞）。ラベルを決める前に文全体を読みましょう。` },
    { k: "h", en: "Open and closed classes", ja: "開いた品詞と閉じた品詞" },
    { k: "p", en: `Nouns, main verbs, adjectives, and many adverbs readily gain new words (<i>app, stream, online</i>). Pronouns, determiners, prepositions, conjunctions, and auxiliaries are small, fixed systems — learn their patterns and contrasts carefully.`,
      ja: `名詞・動詞・形容詞・多くの副詞には新しい語がどんどん加わります（<i>app, stream, online</i> など）。一方、代名詞・限定詞・前置詞・接続詞・助動詞は数が少なく固定された体系です。使い分けをしっかり覚えましょう。` },
    { k: "watch", en: `Not every <i>-ly</i> word is an adverb: <i>friendly, lovely, lonely</i> are usually adjectives (<x>a friendly person</x>). Not every adverb ends in <i>-ly</i>: <i>often, soon, well, fast</i>.`,
      ja: `<i>-ly</i> で終わる語がすべて副詞とは限りません。<i>friendly, lovely, lonely</i> は通常は形容詞です（<x>a friendly person</x>）。逆に <i>often, soon, well, fast</i> のように <i>-ly</i> で終わらない副詞もあります。` },
    { k: "tip", en: `Japanese adjectives can be predicates on their own (高い = "is expensive"), so learners often drop <i>be</i>: <s>This bag expensive.</s> An English adjective needs a verb: <x>This bag is expensive.</x>`,
      ja: `日本語の形容詞は「高い。」だけで述語になれますが、英語の形容詞は単独では述語になれません。<s>This bag expensive.</s> ではなく、<x>This bag is expensive.</x> のように be動詞が必要です。` }
  ],
  q: [
    { q: { en: `In <x>The helpful assistant explained the problem clearly</x>, what part of speech is <i>clearly</i>?`, ja: `<x>The helpful assistant explained the problem clearly</x> の <i>clearly</i> の品詞は？` },
      o: [{ en: "Adjective", ja: "形容詞" }, { en: "Adverb", ja: "副詞" }, { en: "Noun", ja: "名詞" }], a: 1,
      e: { en: `It describes how she explained: an adverb modifying the verb.`, ja: `どのように説明したかを表す、動詞を修飾する副詞です。` } },
    { q: { en: `In <x>The helpful assistant explained the problem clearly</x>, what part of speech is <i>helpful</i>?`, ja: `<x>The helpful assistant explained the problem clearly</x> の <i>helpful</i> の品詞は？` },
      o: [{ en: "Adjective", ja: "形容詞" }, { en: "Adverb", ja: "副詞" }, { en: "Verb", ja: "動詞" }], a: 0,
      e: { en: `It describes the noun <i>assistant</i>, so it is an adjective.`, ja: `名詞 <i>assistant</i> を説明しているので形容詞です。` } },
    { q: { en: `Which word is an adverb?`, ja: `副詞はどれ？` },
      o: [`friendly`, `lovely`, `often`, `lonely`], a: 2,
      e: { en: `<i>Friendly, lovely, lonely</i> are adjectives despite <i>-ly</i>; <i>often</i> is an adverb of frequency.`, ja: `<i>friendly, lovely, lonely</i> は -ly で終わっても形容詞です。<i>often</i> は頻度を表す副詞です。` } },
    { q: { en: `In <x>The train moves fast</x>, <i>fast</i> is…`, ja: `<x>The train moves fast</x> の <i>fast</i> の品詞は？` },
      o: [{ en: "an adjective", ja: "形容詞" }, { en: "an adverb", ja: "副詞" }, { en: "a preposition", ja: "前置詞" }], a: 1,
      e: { en: `It tells how the train moves, so it is an adverb. In <i>a fast train</i> it would be an adjective.`, ja: `列車がどのように動くかを表すので副詞です。<i>a fast train</i> なら形容詞です。` } },
    { q: { en: `In <x>Call me before you leave</x>, <i>before</i> is…`, ja: `<x>Call me before you leave</x> の <i>before</i> は？` },
      o: [{ en: "a preposition", ja: "前置詞" }, { en: "a subordinating conjunction (it introduces a clause)", ja: "従属接続詞（節を導いている）" }, { en: "an adverb", ja: "副詞" }], a: 1,
      e: { en: `<i>Before</i> is followed by a clause (<i>you leave</i>: subject + verb), so it works as a subordinating conjunction.`, ja: `後ろに節（<i>you leave</i>：主語＋動詞）が続くので、従属接続詞として働いています。` } },
    { q: { en: `In <x>I bought this phone</x>, <i>this</i> is…`, ja: `<x>I bought this phone</x> の <i>this</i> は？` },
      o: [{ en: "a determiner", ja: "限定詞" }, { en: "a pronoun", ja: "代名詞" }, { en: "an adverb", ja: "副詞" }], a: 0,
      e: { en: `<i>This</i> comes before the noun and identifies which phone. Alone (<i>I like this</i>), it would be a pronoun.`, ja: `名詞の前で「どの電話か」を特定しているので限定詞です。<i>I like this.</i> のように単独なら代名詞です。` } },
    { q: { en: `In <x>I think that it works</x>, <i>that</i> is…`, ja: `<x>I think that it works</x> の <i>that</i> は？` },
      o: [{ en: "a determiner", ja: "限定詞" }, { en: "a clause marker (conjunction)", ja: "節を導く接続詞" }, { en: "a relative pronoun", ja: "関係代名詞" }], a: 1,
      e: { en: `It introduces the clause <i>it works</i> as the object of <i>think</i>.`, ja: `<i>think</i> の目的語となる節 <i>it works</i> を導く接続詞です。` } },
    { q: { en: `Choose the correct sentence.`, ja: `正しい文を選びましょう。` },
      o: [`This bag expensive.`, `This bag is expensive.`, `This bag is expensively.`], a: 1,
      e: { en: `An adjective cannot be the verb of a clause. Use linking <i>be</i> + adjective.`, ja: `形容詞だけでは述語になれません。be動詞＋形容詞を使います。` } },
    { q: `She explained the rule ___ (clear).`, h: { en: `Describe how she explained.`, ja: `どのように説明したかを表します。` }, i: [`clearly`],
      e: { en: `To describe the verb <i>explained</i>, use the adverb <i>clearly</i>.`, ja: `動詞 <i>explained</i> を修飾するので副詞 <i>clearly</i> を使います。` } },
    { q: { en: `Which group is a closed class (a small, fixed set)?`, ja: `数が限られた「閉じた品詞」はどれ？` },
      o: [{ en: "Nouns", ja: "名詞" }, { en: "Prepositions", ja: "前置詞" }, { en: "Adjectives", ja: "形容詞" }], a: 1,
      e: { en: `New nouns and adjectives appear all the time; prepositions form a small, fixed system.`, ja: `名詞や形容詞は新語が次々に加わりますが、前置詞は数の限られた体系です。` } }
  ]
});

GH.topic({
  id: "verb-types", ch: "found", p: 8,
  t: { en: "Verbs: actions, states, and patterns", ja: "動詞：動作・状態・文型" },
  d: { en: "Main verbs, auxiliaries and modals; the five verb patterns; state versus activity meanings.", ja: "本動詞・助動詞・法助動詞、5つの文型、状態動詞と動作動詞" },
  body: [
    { k: "core", en: `A verb does more than name an action. It can express a state (<i>know</i>), possession (<i>own</i>), an event (<i>happen</i>), perception (<i>hear</i>), or a relationship (<i>belong</i>). The verb also <b>controls the sentence pattern</b>.`,
      ja: `動詞は動作だけを表すわけではありません。状態（<i>know</i>）、所有（<i>own</i>）、出来事（<i>happen</i>）、知覚（<i>hear</i>）、関係（<i>belong</i>）なども表します。そして、動詞が<b>文の型を決めます</b>。` },
    { k: "h", en: "Main verbs, auxiliaries, and modals", ja: "本動詞・助動詞・法助動詞" },
    { k: "ex", items: [
      [`She <b>repairs</b> phones.`, { en: `main (lexical) verb: carries the meaning`, ja: `本動詞：意味の中心` }],
      [`She <b>has</b> repaired it. <b>Does</b> it work?`, { en: `auxiliaries: help form tense, questions, negatives`, ja: `助動詞：時制・疑問文・否定文を作る` }],
      [`It <b>might</b> work.`, { en: `modal: adds possibility, ability, necessity…`, ja: `法助動詞：可能性・能力・必要などの意味を加える` }]
    ] },
    { k: "p", en: `<i>Be, have,</i> and <i>do</i> can be main verbs or auxiliaries: <x>I have a phone</x> (main) vs <x>I have bought a phone</x> (auxiliary); <x>I do my homework</x> vs <x>Do you study?</x>`,
      ja: `<i>be, have, do</i> は本動詞にも助動詞にもなります。<x>I have a phone</x>（本動詞）と <x>I have bought a phone</x>（助動詞）、<x>I do my homework</x> と <x>Do you study?</x> を比べましょう。` },
    { k: "h", en: "The verb controls the sentence pattern", ja: "動詞が文型を決める" },
    { k: "sv", t: { en: "The five verb patterns", ja: "5つの文型" }, rows: [
      { l: { en: "S + V · intransitive", ja: "第1文型 S＋V・自動詞" }, p: [["S", `The baby`], ["V", `slept.`]] },
      { l: { en: "S + V + C · linking verb", ja: "第2文型 S＋V＋C・連結動詞" }, p: [["S", `He`], ["V", `seems`], ["C", `tired.`, { en: "describes he", ja: "he を説明" }]] },
      { l: { en: "S + V + O · transitive", ja: "第3文型 S＋V＋O・他動詞" }, p: [["S", `I`], ["V", `opened`], ["O", `the window.`]] },
      { l: { en: "S + V + O + O · two objects", ja: "第4文型 S＋V＋O＋O・二重目的語" }, p: [["S", `She`], ["V", `gave`], ["O", `me`, { en: "receiver", ja: "受け手" }], ["O", `a receipt.`, { en: "thing given", ja: "渡すもの" }]] },
      { l: { en: "S + V + O + C · object complement", ja: "第5文型 S＋V＋O＋C・目的格補語" }, p: [["S", `They`], ["V", `made`], ["O", `me`], ["C", `happy.`, { en: "describes me", ja: "me を説明" }]] }
    ], n: { en: `Other verbs in each pattern: <i>arrive, happen</i> (S + V) · <i>become, look</i> (S + V + C) · <i>send, show</i> (S + V + O + O) · <i>consider, name</i> (S + V + O + C).`, ja: `同じ型の動詞：<i>arrive, happen</i>（S＋V）、<i>become, look</i>（S＋V＋C）、<i>send, show</i>（S＋V＋O＋O）、<i>consider, name</i>（S＋V＋O＋C）。` } },
    { k: "p", en: `Some verbs allow several patterns: <x>The door opened</x> / <x>I opened the door</x>. Some omit an understood object: <x>Have you eaten?</x> Learn each verb <b>with</b> its pattern, not only its translation.`,
      ja: `複数の型をとる動詞もあります（<x>The door opened.</x>／<x>I opened the door.</x>）。わかりきった目的語を省くこともあります（<x>Have you eaten?</x>）。訳語だけでなく、<b>型とセットで</b>動詞を覚えましょう。` },
    { k: "h", en: "State or activity?", ja: "状態か動作か" },
    { k: "p", en: `State meanings usually take simple forms: <x>I know</x>, <x>she owns</x>, <x>it belongs</x>. Activity meanings allow continuous forms: <x>I am studying</x>. Some verbs change meaning:`,
      ja: `状態を表す意味では通常、単純形を使います（<x>I know</x>, <x>she owns</x>, <x>it belongs</x>）。動作を表す意味なら進行形が使えます（<x>I am studying</x>）。意味によって使い分ける動詞もあります。` },
    { k: "ex", items: [
      [`I <b>think</b> it's good. / I'm <b>thinking</b> about it.`, { en: `opinion (state) / considering (activity)`, ja: `意見（状態）／検討中（動作）` }],
      [`I <b>have</b> a car. / I'm <b>having</b> lunch.`, { en: `possession / eating (activity)`, ja: `所有／食事中（動作）` }],
      [`He <b>is</b> rude. / He <b>is being</b> rude.`, { en: `his character / his behavior right now`, ja: `性格／今の振る舞い` }]
    ] },
    { k: "watch", en: `English clauses normally need a verb: <x>I am tired</x>, not <s>I tired</s>. But don't add <i>be</i> before every verb: <x>I agree</x>, not <s>I am agree</s>; <x>I like it</x>, not <s>I am like it</s>.`,
      ja: `英語の節には通常、動詞が必要です。<s>I tired</s> ではなく <x>I am tired</x>。ただし、動詞の前に be を付けすぎないこと。<s>I am agree</s> ではなく <x>I agree</x>、<s>I am like it</s> ではなく <x>I like it</x> です。` },
    { k: "tip", en: `These five patterns are the 5文型 from school: SV, SVC, SVO, SVOO, SVOC. Also, Japanese 〜している can be a state: 結婚している is <x>I am married</x> (not <s>I am marrying</s>), and 知っている is <x>I know</x>.`,
      ja: `この表の5つの型は、学校で習う「5文型」（SV・SVC・SVO・SVOO・SVOC）そのものです。また、日本語の「〜している」は状態を表すことがあります。「結婚している」は <x>I am married</x>（<s>I am marrying</s> ではない）、「知っている」は <x>I know</x> です。` }
  ],
  q: [
    { q: { en: `Which pattern does <x>She gave me a receipt</x> follow?`, ja: `<x>She gave me a receipt</x> の文型は？` },
      o: [`S + V + O`, `S + V + O + O`, `S + V + O + C`], a: 1,
      e: { en: `<i>Me</i> (the recipient) and <i>a receipt</i> (the thing given) are two objects.`, ja: `<i>me</i>（受け取る人）と <i>a receipt</i>（渡すもの）の2つの目的語があります（第4文型）。` } },
    { q: { en: `Which pattern does <x>They made me happy</x> follow?`, ja: `<x>They made me happy</x> の文型は？` },
      o: [`S + V + C`, `S + V + O + O`, `S + V + O + C`], a: 2,
      e: { en: `<i>Happy</i> describes the object <i>me</i>: it is an object complement.`, ja: `<i>happy</i> は目的語 <i>me</i> を説明する目的格補語です（第5文型）。` } },
    { q: { en: `Which sentence has an intransitive verb (no object)?`, ja: `自動詞（目的語をとらない動詞）の文はどれ？` },
      o: [`The train arrived.`, `I opened the window.`, `She repairs phones.`], a: 0,
      e: { en: `<i>Arrived</i> has no direct object.`, ja: `<i>arrived</i> には目的語がありません（第1文型）。` } },
    { q: `I ___ with you.`, o: [`am agree`, `agree`, `agreeing`], a: 1,
      e: { en: `<i>Agree</i> is a main verb; do not add <i>be</i>.`, ja: `<i>agree</i> は本動詞なので be は不要です。` } },
    { q: `I ___ tired today.`, o: [`—`, `am`, `do`], a: 1,
      e: { en: `<i>Tired</i> is an adjective, so the clause needs linking <i>be</i>.`, ja: `<i>tired</i> は形容詞なので be動詞が必要です。` } },
    { q: { en: `In which sentence is <i>have</i> an auxiliary?`, ja: `<i>have</i> が助動詞として使われている文は？` },
      o: [`I have a question.`, `I have finished the report.`, `We have lunch at noon.`], a: 1,
      e: { en: `<i>Have</i> + V3 (<i>finished</i>) forms the present perfect. In the others, <i>have</i> is the main verb.`, ja: `<i>have</i>＋過去分詞で現在完了を作る助動詞です。他の2つでは本動詞です。` } },
    { q: `I ___ the answer now.`, h: { en: `A state, not an activity.`, ja: `動作ではなく状態です。` }, o: [`know`, `am knowing`, `am know`], a: 0,
      e: { en: `<i>Know</i> expresses a state, so the simple form is normal.`, ja: `<i>know</i> は状態を表すので単純形が普通です。` } },
    { q: `Please be quiet. I ___ about your offer.`, o: [`think`, `am thinking`, `thinks`], a: 1,
      e: { en: `Here <i>think</i> means "consider": an activity in progress.`, ja: `ここでの <i>think</i> は「検討する」という動作なので進行形です。` } },
    { q: { en: `What does <x>He is being rude</x> suggest?`, ja: `<x>He is being rude</x> が表すのは？` },
      o: [{ en: "Rudeness is his permanent character.", ja: "失礼なのは彼の生まれつきの性格だ。" }, { en: "He is behaving rudely right now.", ja: "彼は今、失礼な振る舞いをしている。" }, { en: "He will be rude in the future.", ja: "彼はこれから失礼になる。" }], a: 1,
      e: { en: `<i>Be being</i> + adjective focuses on current behavior.`, ja: `<i>be being</i>＋形容詞は「今の振る舞い」を表します。` } },
    { w: [`We`, `consider`, `the`, `plan`, `useful.`],
      e: { en: `S + V + O + C: the complement <i>useful</i> describes the object <i>the plan</i>.`, ja: `S＋V＋O＋C の第5文型です。補語 <i>useful</i> が目的語 <i>the plan</i> を説明します。` } }
  ]
});

GH.topic({
  id: "verb-forms", ch: "found", p: 9,
  t: { en: "V1, V2, V3, V-ing, and V-s", ja: "動詞の5つの形" },
  d: { en: "The five forms of a verb and which helper each one follows.", ja: "動詞の5つの形と、それぞれがどの助動詞の後に来るか" },
  body: [
    { k: "core", en: `V1, V2, V3, V-ing and V-s are <b>forms</b> of a verb, not five tenses. Dictionaries call V1/V2/V3 the base form, the past tense, and the past participle.`,
      ja: `V1・V2・V3・V-ing・V-s は動詞の<b>形</b>であって、5つの時制ではありません。辞書では V1／V2／V3 を「原形」「過去形」「過去分詞」と呼びます。` },
    { k: "table", head: ["@form", "eat", "work", { en: "Main uses", ja: "主な用法" }], rows: [
      [{ en: "V1: base", ja: "V1：原形" }, `eat`, `work`, `<x>I eat</x>; <x>can eat</x>; <x>did eat</x>; <x>to eat</x>`],
      [{ en: "V2: past", ja: "V2：過去形" }, `ate`, `worked`, `<x>I ate yesterday.</x>`],
      [{ en: "V3: past participle", ja: "V3：過去分詞" }, `eaten`, `worked`, `<x>have eaten</x>; <x>was eaten</x>`],
      [{ en: "V-ing", ja: "V-ing：-ing 形" }, `eating`, `working`, `<x>am eating</x>; <x>enjoy eating</x>`],
      [{ en: "V-s", ja: "V-s：3人称単数現在" }, `eats`, `works`, `<x>He eats.</x> <x>She works.</x>`]
    ] },
    { k: "h", en: "Why V2 and V3 are different", ja: "V2 と V3 の違い" },
    { k: "p", en: `V2 can be the finite past verb on its own: <x>She ate.</x> V3 normally needs a helper when it acts as a verb: <x>She has eaten</x> (perfect), <x>The cake was eaten</x> (passive). V3 also works like an adjective: <x>a broken screen</x>.`,
      ja: `V2 はそれだけで過去の述語になれます（<x>She ate.</x>）。V3 は動詞として使うとき、通常は助動詞が必要です（<x>She has eaten</x>＝完了形、<x>The cake was eaten</x>＝受動態）。V3 は形容詞のようにも使えます（<x>a broken screen</x>）。` },
    { k: "ex", items: [
      [`I <b>ate</b> lunch.`, { en: `a finished past event`, ja: `過去に完了した出来事` }],
      [`I <b>have eaten</b> lunch.`, { en: `the earlier eating, viewed from now`, ja: `今の時点から見た「食べた」` }],
      [`Lunch <b>was eaten</b> outside.`, { en: `lunch is affected: passive voice`, ja: `昼食が「食べられた」：受動態` }]
    ] },
    { k: "h", en: "Which form follows which helper?", ja: "どの助動詞の後にどの形が来るか" },
    { k: "table", head: [{ en: "Before the main verb", ja: "本動詞の前" }, { en: "Form", ja: "続く形" }, "@example"], rows: [
      [`do / does / did`, { f: "V1" }, `<x>Did she eat?</x> <x>She doesn't eat meat.</x>`],
      [`can / will / should / must`, { f: "V1" }, `<x>She can eat.</x> <x>She will be ready.</x>`],
      [{ en: "have / has / had (perfect)", ja: "have / has / had（完了）" }, { f: "V3" }, `<x>She has eaten.</x> <x>She had gone.</x>`],
      [{ en: "be (continuous)", ja: "be（進行形）" }, { f: "V-ing" }, `<x>She is eating.</x>`],
      [{ en: "be (passive)", ja: "be（受動態）" }, { f: "V3" }, `<x>The food was eaten.</x>`]
    ] },
    { k: "note", l: { en: "One tense marker is enough", ja: "時制を表すのは1か所だけ" },
      en: `After <i>did</i>, use V1: <x>Did you go?</x> / <x>I didn't go.</x> After <i>does</i>, drop the -s: <x>Does she work?</x> In a verb chain, only the <b>first</b> helper carries tense and agreement: <x>She has been working</x>; <x>they have been working</x>.`,
      ja: `<i>did</i> の後は V1（<x>Did you go?</x>／<x>I didn't go.</x>）。<i>does</i> の後は -s を付けません（<x>Does she work?</x>）。動詞が連なるときは、<b>最初の</b>助動詞だけが時制と一致を担います（<x>She has been working</x>／<x>they have been working</x>）。` },
    { k: "chain", t: { en: "Tense on the first verb, then a chain of forms", ja: "時制は最初の動詞だけ、後は形の連鎖" }, s: `She has been working.`, items: [
      [`has`, { en: "tense + agreement", ja: "時制と一致" }], [`been`, { en: "V3 after have", ja: "have の後は V3" }], [`working`, { en: "V-ing after be", ja: "be の後は V-ing" }]
    ], n: { en: `With <i>they</i>, only the first verb changes: <i>They have been working.</i>`, ja: `主語が <i>they</i> なら、変わるのは最初の動詞だけ：<i>They have been working.</i>` } },
    { k: "watch", en: `<s>I have ate</s> and <s>I am eat</s> are wrong. Use <x>I have eaten</x> and <x>I am eating</x>. Regular verbs hide the V2/V3 difference (<i>worked / worked</i>); irregular verbs reveal it (<i>ate / eaten</i>).`,
      ja: `<s>I have ate</s> や <s>I am eat</s> は誤りです。<x>I have eaten</x>、<x>I am eating</x> が正しい形です。規則動詞では V2 と V3 が同じ形（<i>worked / worked</i>）なので違いが見えにくいですが、不規則動詞（<i>ate / eaten</i>）でははっきりします。` },
    { k: "tip", en: `V3 (過去分詞) does not automatically mean "past". <x>It will be repaired tomorrow</x> uses V3 in a future passive. Think of V3 as "the form after perfect <i>have</i> or passive <i>be</i>".`,
      ja: `V3（過去分詞）は「過去」を意味するとは限りません。<x>It will be repaired tomorrow.</x> は未来の受動態で V3 を使っています。V3 は「完了の have や受動態の be の後に来る形」と覚えると混乱しません。` }
  ],
  q: [
    { q: `Did she ___ (eat) lunch?`, i: [`eat`],
      e: { en: `After <i>did</i>, use V1.`, ja: `<i>did</i> の後は原形（V1）です。` } },
    { q: `She has already ___ (eat).`, i: [`eaten`],
      e: { en: `Perfect <i>have/has</i> takes V3.`, ja: `完了の <i>has</i> の後は過去分詞（V3）です。` } },
    { q: `They are ___ (eat) dinner now.`, i: [`eating`],
      e: { en: `Continuous <i>be</i> takes V-ing.`, ja: `進行形の <i>be</i> の後は -ing 形です。` } },
    { q: `The cake was ___ by the children.`, o: [`ate`, `eaten`, `eating`], a: 1,
      e: { en: `Passive <i>be</i> takes V3.`, ja: `受動態の be の後は過去分詞（V3）です。` } },
    { q: `She can ___ very well.`, o: [`swims`, `swim`, `swimming`], a: 1,
      e: { en: `Modals are followed by V1.`, ja: `助動詞 can の後は原形です。` } },
    { q: { en: `Which sentence is correct?`, ja: `正しい文はどれ？` },
      o: [`I have ate breakfast.`, `I have eaten breakfast.`, `I eaten breakfast.`], a: 1,
      e: { en: `Perfect = <i>have</i> + V3 (<i>eaten</i>).`, ja: `完了形は have＋過去分詞（<i>eaten</i>）です。` } },
    { q: `Does he ___ here?`, o: [`works`, `work`, `worked`], a: 1,
      e: { en: `<i>Does</i> already carries the -s, so the main verb is V1.`, ja: `<i>does</i> が3単現を担うので、本動詞は原形です。` } },
    { q: { en: `What are the V2 and V3 of <i>write</i>?`, ja: `<i>write</i> の V2 と V3 は？` },
      o: [`wrote / written`, `written / wrote`, `writed / writed`], a: 0,
      e: { en: `write – wrote – written.`, ja: `write – wrote – written と活用します。` } },
    { q: `He ___ to work by train every day.`, o: [`go`, `goes`, `going`], a: 1,
      e: { en: `Third-person singular present: V-s (<i>goes</i>).`, ja: `3人称単数・現在なので V-s（<i>goes</i>）です。` } },
    { q: { en: `In <x>It will be repaired tomorrow</x>, does <i>repaired</i> (V3) show past time?`, ja: `<x>It will be repaired tomorrow</x> の <i>repaired</i>（V3）は過去を表している？` },
      o: [{ en: "Yes — V3 always shows past time.", ja: "はい。V3 は常に過去を表す。" }, { en: "No — it is a future passive; V3 simply follows passive be.", ja: "いいえ。未来の受動態で、V3 は受動態の be の後に来る形にすぎない。" }], a: 1,
      e: { en: `V3 is a form, not a time. The time here is future (<i>will</i>).`, ja: `V3 は形であって、時を表すものではありません。ここでの時は未来（<i>will</i>）です。` } }
  ]
});

GH.topic({
  id: "be-have-do", ch: "found", p: 10,
  t: { en: "Be, have, do: the control panel", ja: "be・have・do の働き" },
  d: { en: "The forms of be, have and do, their jobs as main verbs and helpers, and the order of a verb chain.", ja: "be・have・do の活用、本動詞と助動詞としての働き、動詞が連なるときの順序" },
  body: [
    { k: "table", head: [{ en: "Verb", ja: "動詞" }, "@present", "@past", { en: "Other forms", ja: "その他の形" }], rows: [
      [`<b>be</b>`, `am / is / are`, `was / were`, `be / been / being`],
      [`<b>have</b>`, `have / has`, `had`, `have / had / having`],
      [`<b>do</b>`, `do / does`, `did`, `do / done / doing`]
    ] },
    { k: "p", en: `<i>Be</i>: I <b>am</b>; he/she/it <b>is</b>; you/we/they <b>are</b>. Past: I/he/she/it <b>was</b>; you/we/they <b>were</b>. <i>Have</i> and <i>do</i>: he/she/it <b>has / does</b>; other subjects <b>have / do</b>.`,
      ja: `<i>be</i>：I <b>am</b>／he・she・it <b>is</b>／you・we・they <b>are</b>。過去は I・he・she・it <b>was</b>／you・we・they <b>were</b>。<i>have</i> と <i>do</i>：he・she・it は <b>has・does</b>、それ以外は <b>have・do</b>。` },
    { k: "h", en: "Be: identity, state, continuous, passive", ja: "be：同一・状態・進行形・受動態" },
    { k: "ex", items: [
      [`I <b>am</b> Japanese. She <b>is</b> tired.`, { en: `main (linking) verb`, ja: `本動詞（連結動詞）` }],
      [`I <b>am</b> learning.`, { en: `continuous helper`, ja: `進行形の助動詞` }],
      [`The account <b>was</b> opened.`, { en: `passive helper`, ja: `受動態の助動詞` }],
      [`<b>Are</b> you ready? I <b>am not</b> ready.`, { en: `be makes its own questions and negatives — never <s>Do you are ready?</s>`, ja: `be はそれ自体で疑問文・否定文を作る（<s>Do you are ready?</s> は誤り）` }]
    ] },
    { k: "h", en: "Have: possession and perfect", ja: "have：所有と完了" },
    { k: "p", en: `Main verb: <x>I have a question. Do you have time? I don't have cash.</x> Perfect helper: <x>I have finished. Have you finished? I haven't finished.</x> Main-verb <i>have</i> uses <i>do</i> in questions and negatives; perfect <i>have</i> does not.`,
      ja: `本動詞：<x>I have a question. Do you have time? I don't have cash.</x> 完了の助動詞：<x>I have finished. Have you finished? I haven't finished.</x> 本動詞の have は疑問文・否定文で do を使いますが、完了の have は使いません。` },
    { k: "p", en: `<x>I've got a question</x> / <x>Have you got a pen?</x> are common for present possession, especially in British English. For past possession use <i>had</i>: <x>I had a bike as a child.</x>`,
      ja: `現在の所有には <x>I've got a question.</x>／<x>Have you got a pen?</x> もよく使われます（特にイギリス英語）。過去の所有は <i>had</i> を使います（<x>I had a bike as a child.</x>）。` },
    { k: "h", en: "Do: action, support, emphasis, substitution", ja: "do：動作・疑問否定の補助・強調・代用" },
    { k: "ex", items: [
      [`I <b>do</b> the paperwork.`, { en: `main verb`, ja: `本動詞` }],
      [`<b>Do</b> you work here? She <b>doesn't</b> work here.`, { en: `support for questions and negatives`, ja: `疑問文・否定文を作る助動詞` }],
      [`I <b>do</b> understand. He <b>did</b> call.`, { en: `emphasis`, ja: `強調` }],
      [`She studies more than I <b>do</b>.`, { en: `substitutes for <i>study</i>`, ja: `<i>study</i> の代わり（代動詞）` }],
      [`I <b>didn't do</b> it.`, { en: `first <i>do</i> = negative helper; second <i>do</i> = main verb (V1)`, ja: `最初の do は否定の助動詞、2つ目の do は本動詞（原形）` }]
    ] },
    { k: "note", l: { en: "Building rule", ja: "組み立てのルール" },
      en: `The usual order is <b>modal → perfect have → continuous be → passive be → main verb</b>. Each helper decides the form of the next verb. <x>The phone might have been being tested</x> is grammatical but heavy; <x>They might have been testing the phone</x> is easier.`,
      ja: `通常の順序は<b>法助動詞 → 完了の have → 進行の be → 受動の be → 本動詞</b>です。各助動詞が次の動詞の形を決めます。<x>The phone might have been being tested.</x> は文法的に正しいものの重く、<x>They might have been testing the phone.</x> のほうが自然です。` },
    { k: "chain", t: { en: "Each helper decides the next form", ja: "助動詞が次の動詞の形を決める" }, s: `They might have been testing the phone.`, items: [
      [`might`, { en: "modal", ja: "法助動詞" }], [`have`, { en: "V1 after a modal", ja: "助動詞の後は V1" }], [`been`, { en: "V3 after have", ja: "have の後は V3" }], [`testing`, { en: "V-ing after be", ja: "be の後は V-ing" }]
    ] },
    { k: "watch", en: `Contractions can hide the verb: <i>she's</i> = she is <b>or</b> she has; <i>I'd</i> = I had <b>or</b> I would. Check the next word: <x>She's working</x> (is) / <x>She's worked</x> (has); <x>I'd left</x> (had) / <x>I'd leave</x> (would).`,
      ja: `短縮形は元の動詞が見えにくくなります。<i>she's</i> は she is または she has、<i>I'd</i> は I had または I would。次の語で判断しましょう。<x>She's working</x>（is）／<x>She's worked</x>（has）、<x>I'd left</x>（had）／<x>I'd leave</x>（would）。` },
    { k: "tip", en: `Japanese marks statements, negatives and questions with endings (〜ます／〜ません／〜ますか). English uses <i>do/does/did</i> for ordinary verbs but moves <i>be</i> itself: <x>Are you busy?</x> — never <s>Do you busy?</s>`,
      ja: `日本語は「〜ます／〜ません／〜ますか」と語尾を変えるだけですが、英語では一般動詞の疑問文・否定文に <i>do/does/did</i> を使い、be動詞はそれ自体を前に出します。「忙しいですか？」は <x>Are you busy?</x>。<s>Do you busy?</s> は誤りです。` }
  ],
  q: [
    { q: `___ you ready?`, o: [`Do`, `Are`, `Is`], a: 1,
      e: { en: `<i>Be</i> forms its own question: <i>Are you…?</i>`, ja: `be動詞はそれ自体を前に出して疑問文を作ります。` } },
    { q: `She ___ a new laptop.`, o: [`have`, `has`, `haves`], a: 1,
      e: { en: `He/she/it + <i>has</i>.`, ja: `3人称単数には <i>has</i> を使います。` } },
    { q: `___ you have any cash?`, o: [`Do`, `Have`, `Are`], a: 0,
      e: { en: `Main-verb <i>have</i> uses <i>do</i> in questions: <i>Do you have…?</i>`, ja: `本動詞の have の疑問文は <i>Do you have…?</i> です。` } },
    { q: `___ you finished the report yet?`, o: [`Do`, `Have`, `Are`], a: 1,
      e: { en: `Perfect <i>have</i> moves in front itself: <i>Have you finished?</i>`, ja: `完了の have はそれ自体を前に出します。` } },
    { q: `They ___ at home last night.`, o: [`was`, `were`, `been`], a: 1,
      e: { en: `You/we/they + <i>were</i>.`, ja: `they の過去形は <i>were</i> です。` } },
    { q: { en: `In <x>She's worked here for years</x>, <i>'s</i> stands for…`, ja: `<x>She's worked here for years</x> の <i>'s</i> は？` },
      o: [`is`, `has`, `was`], a: 1,
      e: { en: `V3 (<i>worked</i>) follows, so it is perfect <i>has</i>.`, ja: `後ろが過去分詞（<i>worked</i>）なので完了の has です。` } },
    { q: { en: `In <x>I'd leave now if I were you</x>, <i>'d</i> stands for…`, ja: `<x>I'd leave now if I were you</x> の <i>'d</i> は？` },
      o: [`had`, `would`, `did`], a: 1,
      e: { en: `V1 (<i>leave</i>) follows, so it is <i>would</i>.`, ja: `後ろが原形（<i>leave</i>）なので would です。` } },
    { q: { en: `Which sentence uses emphatic <i>do</i>?`, ja: `強調の <i>do</i> を使っている文は？` },
      o: [`Do you work here?`, `I do understand your point.`, `I do the dishes every night.`], a: 1,
      e: { en: `Emphatic <i>do</i> + V1 stresses that something really is true.`, ja: `強調の do＋原形で「本当に〜する」と強めています。` } },
    { q: `I didn't ___ (do) my homework yesterday.`, i: [`do`],
      e: { en: `After <i>didn't</i>, the main verb <i>do</i> stays V1.`, ja: `<i>didn't</i> の後の本動詞 do は原形のままです。` } },
    { w: [`They`, `might`, `have`, `been`, `testing`, `the`, `phone.`],
      e: { en: `Modal → perfect <i>have</i> → continuous <i>been</i> → V-ing.`, ja: `法助動詞 → 完了の have → 進行の been → -ing 形の順です。` } }
  ]
});

GH.topic({
  id: "verb-endings", ch: "found", p: 11,
  t: { en: "Verb endings: spelling and sound", ja: "語尾のつづりと発音" },
  d: { en: "Spelling rules for -s, -ed and -ing, and how the endings are pronounced.", ja: "-s・-ed・-ing のつづりのルールと発音" },
  body: [
    { k: "h", en: "Third-person singular: -s or -es", ja: "3人称単数現在：-s／-es" },
    { k: "table", head: [{ en: "Rule", ja: "ルール" }, "@example"], rows: [
      [{ en: "Most verbs: add -s", ja: "ほとんどの動詞：-s を付ける" }, `<x>work → works</x>; <x>eat → eats</x>`],
      [{ en: "After -s, -sh, -ch, -x, -z: add -es", ja: "-s, -sh, -ch, -x, -z の後：-es を付ける" }, `<x>pass → passes</x>; <x>wash → washes</x>; <x>watch → watches</x>; <x>fix → fixes</x>`],
      [{ en: "Consonant + y → -ies", ja: "子音字＋y → y を i に変えて -es" }, `<x>study → studies</x>`],
      [{ en: "Vowel + y: keep the y", ja: "母音字＋y：そのまま -s" }, `<x>play → plays</x>`],
      [{ en: "Special forms", ja: "特別な形" }, `<x>have → has</x>; <x>do → does</x>; <x>go → goes</x>; <x>be → is</x>`]
    ] },
    { k: "h", en: "Regular V2 and V3: -ed", ja: "規則動詞の過去形・過去分詞：-ed" },
    { k: "table", head: [{ en: "Rule", ja: "ルール" }, "@example"], rows: [
      [{ en: "Add -ed", ja: "-ed を付ける" }, `<x>work → worked</x>`],
      [{ en: "Final -e: add -d", ja: "語尾が -e：-d だけ付ける" }, `<x>live → lived</x>`],
      [{ en: "Consonant + y → -ied", ja: "子音字＋y → -ied" }, `<x>try → tried</x>`],
      [{ en: "Vowel + y: keep the y", ja: "母音字＋y：そのまま -ed" }, `<x>enjoy → enjoyed</x>`],
      [{ en: "Stressed short vowel + one consonant: double it", ja: "アクセントのある短母音＋子音字1つ：子音字を重ねる" }, `<x>stop → stopped</x>; <x>prefer → preferred</x>`],
      [{ en: "Unstressed last syllable, or final w / x / y: don't double", ja: "最後の音節にアクセントがない、または w / x / y：重ねない" }, `<x>open → opened</x>; <x>fix → fixed</x>`]
    ] },
    { k: "h", en: "The -ing form", ja: "-ing 形" },
    { k: "p", en: `Usually add <i>-ing</i>: <x>read → reading</x>. Drop a silent final <i>-e</i>: <x>make → making</x> (but <x>be → being</x>, <x>see → seeing</x>, <x>agree → agreeing</x>). Change <i>-ie</i> to <i>-y</i>: <x>lie → lying</x>, <x>die → dying</x>. Double where the stress pattern requires it: <x>run → running</x>, <x>begin → beginning</x> — but <x>visit → visiting</x>, <x>fix → fixing</x>.`,
      ja: `通常は <i>-ing</i> を付けます（<x>read → reading</x>）。発音しない語尾の <i>-e</i> は取ります（<x>make → making</x>。ただし <x>be → being</x>、<x>see → seeing</x>、<x>agree → agreeing</x>）。<i>-ie</i> は <i>-y</i> に変えます（<x>lie → lying</x>、<x>die → dying</x>）。アクセントの位置によっては子音字を重ねます（<x>run → running</x>、<x>begin → beginning</x>。<x>visit → visiting</x>、<x>fix → fixing</x> は重ねない）。` },
    { k: "p", en: `British English often doubles a final <i>l</i> (<i>travelling, travelled</i>); American English does not (<i>traveling, traveled</i>). Both are standard.`,
      ja: `イギリス英語では語尾の l を重ねることが多く（<i>travelling, travelled</i>）、アメリカ英語では重ねません（<i>traveling, traveled</i>）。どちらも標準的なつづりです。` },
    { k: "h", en: "Endings follow sound, not spelling", ja: "語尾の発音はつづりではなく音で決まる" },
    { k: "table", head: [{ en: "Ending", ja: "語尾" }, { en: "Sound", ja: "発音" }, "@example"], rows: [
      [{ en: "-s after voiceless sounds", ja: "無声音の後の -s" }, `/s/`, `<x>works, stops, laughs</x>`],
      [{ en: "-s after s, z, sh, ch, j sounds", ja: "s, z, sh, ch, j の音の後の -s" }, `/ɪz/`, `<x>passes, washes, changes</x>`],
      [{ en: "-s after other voiced sounds", ja: "その他の有声音の後の -s" }, `/z/`, `<x>plays, runs, calls</x>`],
      [{ en: "-ed after /t/ or /d/", ja: "/t/・/d/ の後の -ed" }, `/ɪd/`, `<x>wanted, needed</x>`],
      [{ en: "-ed after other voiceless sounds", ja: "その他の無声音の後の -ed" }, `/t/`, `<x>worked, watched, laughed</x>`],
      [{ en: "-ed after other voiced sounds", ja: "その他の有声音の後の -ed" }, `/d/`, `<x>played, cleaned, loved</x>`]
    ] },
    { k: "p", en: `Only /ɪz/ and /ɪd/ add a syllable: <i>worked</i> has one syllable, <i>wanted</i> has two. Noun plurals and possessives follow the same sound pattern: <i>cats</i> /s/, <i>dogs</i> /z/, <i>buses</i> /ɪz/.`,
      ja: `音節が1つ増えるのは /ɪz/ と /ɪd/ だけです。<i>worked</i> は1音節、<i>wanted</i> は2音節。名詞の複数形・所有格の -s も同じ発音パターンです（<i>cats</i> /s/、<i>dogs</i> /z/、<i>buses</i> /ɪz/）。` },
    { k: "watch", en: `Irregular verbs do not follow the -ed rule: <x>go → went → gone</x>, <x>buy → bought → bought</x>. Learn each one in a short sentence (see Irregular verbs).`,
      ja: `不規則動詞は -ed のルールに従いません（<x>go → went → gone</x>、<x>buy → bought → bought</x>）。短い文の中で1つずつ覚えましょう（「不規則動詞」を参照）。` },
    { k: "tip", en: `Japanese adds a vowel after most consonants, so <i>worked</i> can come out as "wa-ku-do". Say it as one syllable: /wɜːkt/. Only verbs ending in a /t/ or /d/ sound get an extra vowel: <i>want-ed</i>.`,
      ja: `日本語の感覚だと <i>worked</i> を「ワークド」と母音を入れて発音しがちですが、実際は1音節の /wɜːkt/（「ワークト」に近い）です。余分な母音が入るのは <i>want-ed</i> のように /t/・/d/ の音で終わる動詞だけです。` }
  ],
  q: [
    { q: `She ___ (watch) the news every evening.`, i: [`watches`],
      e: { en: `After -ch, add -es.`, ja: `-ch で終わるので -es を付けます。` } },
    { q: `He ___ (study) law at university.`, h: { en: `Present simple.`, ja: `現在形です。` }, i: [`studies`],
      e: { en: `Consonant + y → -ies.`, ja: `子音字＋y なので y を i に変えて -es を付けます。` } },
    { q: `My brother ___ (play) the guitar in a band.`, i: [`plays`],
      e: { en: `Vowel + y: just add -s.`, ja: `母音字＋y はそのまま -s を付けます。` } },
    { q: `The bus ___ (stop) suddenly.`, h: { en: `Past simple.`, ja: `過去形です。` }, i: [`stopped`],
      e: { en: `Stressed short vowel + one consonant: double it.`, ja: `アクセントのある短母音＋子音字1つなので、子音字を重ねて -ed です。` } },
    { q: `Yesterday I ___ to fix the printer.`, o: [`tryed`, `tried`, `tride`], a: 1,
      e: { en: `Consonant + y → -ied.`, ja: `子音字＋y → -ied です。` } },
    { q: { en: `Which -ing form is spelled correctly?`, ja: `つづりが正しい -ing 形は？` },
      o: [`makeing`, `making`, `makking`], a: 1,
      e: { en: `Drop the silent -e: make → making.`, ja: `発音しない e を取って making です。` } },
    { q: { en: `Which -ing form is spelled correctly?`, ja: `つづりが正しい -ing 形は？` },
      o: [`lieing`, `liing`, `lying`], a: 2,
      e: { en: `-ie changes to -y before -ing: lying.`, ja: `-ie は y に変えてから -ing を付けます（lying）。` } },
    { q: { en: `How many syllables does <i>worked</i> have?`, ja: `<i>worked</i> は何音節？` },
      o: [{ en: "One", ja: "1音節" }, { en: "Two", ja: "2音節" }], a: 0,
      e: { en: `-ed after a voiceless sound is /t/, with no extra syllable.`, ja: `無声音の後の -ed は /t/ なので、音節は増えません。` } },
    { q: { en: `In which verb is -ed pronounced /ɪd/ (an extra syllable)?`, ja: `-ed が /ɪd/（音節が1つ増える）と発音されるのは？` },
      o: [`played`, `needed`, `laughed`], a: 1,
      e: { en: `After /t/ or /d/, -ed is /ɪd/: need-ed.`, ja: `/t/・/d/ の後の -ed は /ɪd/ です（need-ed）。` } },
    { q: { en: `Which ending is pronounced /ɪz/?`, ja: `語尾が /ɪz/ と発音されるのは？` },
      o: [`works`, `changes`, `calls`], a: 1,
      e: { en: `After the /dʒ/ sound in <i>change</i>, -s is /ɪz/.`, ja: `<i>change</i> の /dʒ/ の音の後の -s は /ɪz/ です。` } }
  ]
});
