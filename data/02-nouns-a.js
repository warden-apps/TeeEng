/* 02 Nouns & modifiers — part A (handbook pp. 18–24) */

GH.topic({
  id: "nouns-countability", ch: "nouns", p: 18,
  t: { en: "Nouns: countability, number, possession", ja: "名詞：可算・不可算・所有" },
  d: { en: "Countable and uncountable meanings, units for counting, possessives, and nouns used as modifiers.", ja: "可算・不可算の意味、数えるための単位、所有格、名詞の修飾用法" },
  body: [
    { k: "core", en: `<b>Countable</b> nouns have singular and plural forms and take <i>a/an</i> in the singular: <x>one phone, two phones</x>. <b>Uncountable</b> (mass) nouns normally take no <i>a/an</i> and no plural in that meaning: <x>water, advice, equipment</x>.`,
      ja: `<b>可算名詞</b>には単数形と複数形があり、単数では a/an を付けます（<x>one phone, two phones</x>）。<b>不可算名詞</b>はその意味では通常、a/an も複数形もとりません（<x>water, advice, equipment</x>）。` },
    { k: "cmp", t: { en: "What each kind of noun allows", ja: "名詞の種類ごとに使える形" }, cols: [
      { h: { en: "Countable", ja: "可算名詞" }, s: `phone · idea · chair · customer`, p: [
        { en: `<i>a / an</i> in the singular: <i>a phone</i>`, ja: `単数では a/an：<i>a phone</i>` },
        { en: `a plural form: <i>two phones</i>`, ja: `複数形がある：<i>two phones</i>` },
        { en: `<i>many, few, a few, fewer</i>`, ja: `<i>many, few, a few, fewer</i>` }],
        ex: [`I need a charger.`, `How many chairs do we need?`] },
      { h: { en: "Uncountable", ja: "不可算名詞" }, s: `water · advice · furniture · information`, p: [
        { en: `no <i>a / an</i>, no plural`, ja: `a/an も複数形もない` },
        { en: `count with a unit: <i>a piece of advice</i>`, ja: `単位で数える：<i>a piece of advice</i>` },
        { en: `<i>much, little, a little, less</i>`, ja: `<i>much, little, a little, less</i>` }],
        ex: [`Can I give you some advice?`, `How much furniture do we need?`] }
    ] },
    { k: "p", en: `<b>Common</b> nouns name categories (<i>city, customer</i>); <b>proper</b> nouns name particular things (<i>Osaka, Japan, Mei</i>). <b>Concrete</b> nouns are physical; <b>abstract</b> nouns are ideas or qualities (<i>patience, information</i>). These distinctions are separate from countability.`,
      ja: `<b>普通名詞</b>は種類を表し（<i>city, customer</i>）、<b>固有名詞</b>は特定のものを表します（<i>Osaka, Japan, Mei</i>）。<b>具体名詞</b>は物理的なもの、<b>抽象名詞</b>は考えや性質（<i>patience, information</i>）です。これらの区別は可算・不可算とは別のものです。` },
    { k: "h", en: "Count uncountable nouns with a unit", ja: "不可算名詞は単位で数える" },
    { k: "table", head: [{ en: "Usually uncountable", ja: "通常は不可算" }, { en: "Natural expressions", ja: "自然な言い方" }], rows: [
      [`information / advice / news`, `<x>some information</x>; <x>a piece of advice</x>; <x>the news is good</x>`],
      [`furniture / luggage / equipment`, `<x>a chair</x>; <x>two bags</x>; <x>several pieces of equipment</x>`],
      [`homework / research / progress`, `<x>some homework</x>; <x>a research project</x>; <x>a lot of progress</x>`],
      [`water / bread / rice`, `<x>a glass of water</x>; <x>two loaves of bread</x>; <x>a bowl of rice</x>`]
    ] },
    { k: "h", en: "Countability can change meaning", ja: "意味によって可算・不可算が変わる" },
    { k: "ex", items: [
      [`I love <b>coffee</b>. / Two <b>coffees</b>, please.`, { en: `the drink in general / two servings`, ja: `飲み物としてのコーヒー／2杯` }],
      [`She has a lot of <b>experience</b>. / It was a great <b>experience</b>.`, { en: `knowledge gained / one event`, ja: `経験（知識）／1つの体験` }],
      [`Recycle <b>paper</b>. / I read <b>a paper</b> on AI.`, { en: `the material / an article`, ja: `紙（素材）／論文` }],
      [`We had <b>chicken</b> for dinner. / The farm has ten <b>chickens</b>.`, { en: `meat / animals`, ja: `鶏肉／ニワトリ` }]
    ] },
    { k: "h", en: "Possession and noun modifiers", ja: "所有格と名詞の修飾用法" },
    { k: "p", en: `Singular: <x>the customer's phone</x>. Regular plural: <x>the customers' phones</x>. Irregular plural: <x>the children's books</x>. Joint possession: <x>Mei and Arun's office</x>; separate possession: <x>Mei's and Arun's offices</x>. An apostrophe never makes an ordinary plural: <x>phones</x>, not <s>phone's</s>.`,
      ja: `単数：<x>the customer's phone</x>。規則複数形：<x>the customers' phones</x>。不規則複数形：<x>the children's books</x>。共有：<x>Mei and Arun's office</x>、別々に所有：<x>Mei's and Arun's offices</x>。アポストロフィで普通の複数形を作ることはありません（<s>phone's</s> ではなく <x>phones</x>）。` },
    { k: "p", en: `A first noun can modify a second: <x>a phone shop</x>, <x>a shoe shop</x>. The modifier is usually singular (a few exceptions, like <x>a sports shop</x>). Measurements too: <x>a two-year contract</x>, but <x>The contract lasts two years.</x>`,
      ja: `名詞が別の名詞を修飾することもあります（<x>a phone shop</x>、<x>a shoe shop</x>）。修飾する名詞は通常単数形です（例外：<x>a sports shop</x>）。数量表現も同様です：<x>a two-year contract</x>（ただし <x>The contract lasts two years.</x>）。` },
    { k: "watch", en: `A singular countable noun normally needs a determiner: <x>I bought a phone</x>, not <s>I bought phone</s>. Plural and uncountable nouns can stand alone for general meaning: <x>Phones are useful.</x> <x>Information matters.</x>`,
      ja: `単数の可算名詞には通常、限定詞が必要です：<s>I bought phone.</s> ではなく <x>I bought a phone.</x> 複数名詞や不可算名詞は、一般的な意味なら単独で使えます：<x>Phones are useful.</x>／<x>Information matters.</x>` },
    { k: "tip", en: `Japanese nouns don't mark countability (情報, アドバイス, 家具 are all just nouns), so learners say <s>an advice</s> or <s>informations</s>. Learn these as uncountable: <i>advice, information, news, furniture, luggage, equipment, homework</i>.`,
      ja: `日本語の名詞には可算・不可算の区別がないため、<s>an advice</s> や <s>informations</s> のような誤りがよく起きます。<i>advice, information, news, furniture, luggage, equipment, homework</i> は不可算名詞として覚えましょう。` }
  ],
  q: [
    { q: `Can I give you ___ advice?`, o: [`an`, `a piece of`, `many`], a: 1,
      e: { en: `<i>Advice</i> is uncountable; use <i>a piece of advice</i> or <i>some advice</i>.`, ja: `<i>advice</i> は不可算名詞なので、a piece of advice か some advice を使います。` } },
    { q: { en: `Which sentence is correct?`, ja: `正しい文はどれ？` },
      o: [`My informations are wrong.`, `My information is wrong.`, `My information are wrong.`], a: 1,
      e: { en: `<i>Information</i> is uncountable and takes a singular verb.`, ja: `<i>information</i> は不可算名詞なので単数扱いです。` } },
    { q: `We need to buy some new ___.`, o: [`furnitures`, `furniture`, `furniture's`], a: 1,
      e: { en: `<i>Furniture</i> has no ordinary plural.`, ja: `<i>furniture</i> には通常の複数形がありません。` } },
    { q: { en: `In <x>Two coffees, please</x>, what does <i>coffees</i> mean?`, ja: `<x>Two coffees, please</x> の <i>coffees</i> の意味は？` },
      o: [{ en: "two cups (servings) of coffee", ja: "コーヒー2杯" }, { en: "two kinds of coffee bean only", ja: "コーヒー豆の2つの品種だけ" }, { en: "It is a mistake.", ja: "誤りである" }], a: 0,
      e: { en: `As a substance <i>coffee</i> is uncountable, but servings can be counted.`, ja: `物質としての coffee は不可算ですが、1杯分は数えられます。` } },
    { q: `The ___ phones are on the desk.`, h: { en: `The phones belong to several customers.`, ja: `複数の客の電話です。` },
      o: [`customer's`, `customers'`, `customers`], a: 1,
      e: { en: `Regular plural possessive: <i>customers'</i>.`, ja: `規則複数形の所有格は <i>customers'</i> です。` } },
    { q: `These are the ___ books.`, h: { en: `books for children`, ja: `子ども向けの本` },
      o: [`childrens'`, `children's`, `childs'`], a: 1,
      e: { en: `Irregular plural <i>children</i> + <i>'s</i>.`, ja: `不規則複数形 children に 's を付けます。` } },
    { q: { en: `Which sentence is correct?`, ja: `正しい文はどれ？` },
      o: [`I bought phone yesterday.`, `I bought a phone yesterday.`, `I bought an phone yesterday.`], a: 1,
      e: { en: `A singular countable noun needs a determiner, and <i>phone</i> starts with a consonant sound, so <i>a</i>.`, ja: `単数の可算名詞には限定詞が必要です。phone は子音で始まるので a です。` } },
    { q: `We signed a ___ contract.`, o: [`two-years`, `two-year`, `two years`], a: 1,
      e: { en: `A measurement used as a modifier stays singular and is hyphenated: <i>a two-year contract</i>.`, ja: `修飾語として使う数量表現は単数形で、ハイフンでつなぎます（a two-year contract）。` } },
    { q: `She made a lot of ___ in English this year.`, o: [`progresses`, `progress`, `a progress`], a: 1,
      e: { en: `<i>Progress</i> is uncountable.`, ja: `<i>progress</i> は不可算名詞です。` } },
    { q: { en: `Which one is NOT an ordinary plural?`, ja: `普通の複数形として正しくないのは？` },
      o: [`phones`, `phone's`, `cities`], a: 1,
      e: { en: `An apostrophe does not make an ordinary plural.`, ja: `アポストロフィで普通の複数形は作りません。` } }
  ]
});

GH.topic({
  id: "plural-spelling", ch: "nouns", p: 19,
  t: { en: "Plurals: when to add -s or -es", ja: "複数形のつくり方" },
  d: { en: "Spelling rules for regular plurals, and how compound nouns become plural.", ja: "規則的な複数形のつづりと、複合名詞の複数形" },
  body: [
    { k: "core", en: `Most countable nouns change their spelling for two or more. Learn the regular rules, then the exceptions as pairs: <x>one dog / two dogs</x>.`,
      ja: `ほとんどの可算名詞は、2つ以上になるとつづりが変わります。まず規則を覚え、例外はペアで覚えましょう：<x>one dog / two dogs</x>。` },
    { k: "table", head: [{ en: "Noun ending", ja: "語尾" }, { en: "What to do", ja: "規則" }, "@example"], rows: [
      [{ en: "Most nouns", ja: "ほとんどの名詞" }, { en: "Add -s", ja: "-s を付ける" }, `<x>dog → dogs</x>; <x>phone → phones</x>`],
      [`-s, -ss, -sh, -ch, -x`, { en: "Usually add -es", ja: "たいてい -es" }, `<x>bus → buses</x>; <x>class → classes</x>; <x>dish → dishes</x>; <x>watch → watches</x>; <x>box → boxes</x>`],
      [`-z`, { en: "Add -es; sometimes double the z", ja: "-es（z を重ねることも）" }, `<x>quiz → quizzes</x>; <x>buzz → buzzes</x>`],
      [{ en: "Consonant + y", ja: "子音字＋y" }, { en: "Change y to -ies", ja: "y を i に変えて -es" }, `<x>baby → babies</x>; <x>city → cities</x>`],
      [{ en: "Vowel + y", ja: "母音字＋y" }, { en: "Keep the y; add -s", ja: "そのまま -s" }, `<x>boy → boys</x>; <x>key → keys</x>; <x>day → days</x>`],
      [{ en: "Some -f / -fe", ja: "一部の -f / -fe" }, { en: "Change to -ves", ja: "-ves に変える" }, `<x>leaf → leaves</x>; <x>knife → knives</x>; <x>wife → wives</x>`],
      [{ en: "Other -f / -fe", ja: "その他の -f / -fe" }, { en: "Just add -s", ja: "そのまま -s" }, `<x>roof → roofs</x>; <x>belief → beliefs</x>; <x>chief → chiefs</x>`],
      [{ en: "Some -o", ja: "一部の -o" }, { en: "Add -es", ja: "-es を付ける" }, `<x>potato → potatoes</x>; <x>tomato → tomatoes</x>; <x>hero → heroes</x>`],
      [{ en: "Many other -o", ja: "その他の多くの -o" }, { en: "Just add -s", ja: "そのまま -s" }, `<x>photo → photos</x>; <x>piano → pianos</x>; <x>radio → radios</x>`]
    ] },
    { k: "flow", t: { en: "Plural finder", ja: "複数形ファインダー" }, start: "end", n: {
      end: { q: { en: "How does the noun end?", ja: "名詞の語尾は？" }, o: [
        [{ en: "-s, -ss, -sh, -ch, -x or -z", ja: "-s・-ss・-sh・-ch・-x・-z" }, "es"],
        [{ en: "a consonant + y (city, baby)", ja: "子音字＋y（city, baby）" }, "ies"],
        [{ en: "a vowel + y (key, day)", ja: "母音字＋y（key, day）" }, "ys"],
        [{ en: "-f or -fe (knife, roof)", ja: "-f・-fe（knife, roof）" }, "f"],
        [{ en: "-o (tomato, photo)", ja: "-o（tomato, photo）" }, "o"],
        [{ en: "anything else", ja: "それ以外" }, "s"]] },
      es: { r: "+ -es", nt: { en: "Add -es, which adds a syllable /ɪz/. Exception: when -ch sounds like /k/, just add -s: stomach → stomachs. A few -z words double the z: quiz → quizzes.", ja: "-es を付け、/ɪz/ の音節が加わります。例外：-ch が /k/ の音なら -s だけ（stomach → stomachs）。quiz → quizzes のように z を重ねる語もあります。" }, ex: [`bus → buses`, `box → boxes`, `watch → watches`] },
      ies: { r: "y → -ies", nt: { en: "Change y to i and add -es.", ja: "y を i に変えて -es を付けます。" }, ex: [`baby → babies`, `city → cities`] },
      ys: { r: "+ -s", nt: { en: "Keep the y and just add -s.", ja: "y はそのままで -s を付けます。" }, ex: [`boy → boys`, `key → keys`, `day → days`] },
      f: { r: { en: "-ves or -s", ja: "-ves か -s" }, nt: { en: "Learn each word: some change to -ves, others just add -s. A few allow both (scarfs / scarves).", ja: "語ごとに覚えます：-ves になる語と、-s だけの語があります。両方可能な語もあります（scarfs / scarves）。" }, ex: [`knife → knives`, `leaf → leaves`, `roof → roofs`, `belief → beliefs`] },
      o: { r: { en: "-es or -s", ja: "-es か -s" }, nt: { en: "Learn each word: potato, tomato and hero take -es; photo, piano and radio just add -s.", ja: "語ごとに覚えます：potato・tomato・hero は -es、photo・piano・radio は -s だけです。" }, ex: [`potato → potatoes`, `hero → heroes`, `photo → photos`] },
      s: { r: "+ -s", nt: { en: "Most nouns just add -s. Watch for irregular nouns: child → children, man → men, fish → fish.", ja: "ほとんどの名詞は -s を付けるだけです。不規則な名詞に注意：child → children、man → men、fish → fish。" }, ex: [`dog → dogs`, `phone → phones`] }
    } },
    { k: "note", l: { en: "Scenario: a shopping list", ja: "場面：買い物リスト" },
      en: `<x>three apples, two boxes of tea, six tomatoes, and two loaves of bread</x>. <i>Apple</i> takes -s; <i>box</i> takes -es; <i>tomato</i> takes -es; <i>loaf</i> becomes <i>loaves</i>. <i>Bread</i> stays uncountable, so count the loaves — not <s>breads</s>.`,
      ja: `<x>three apples, two boxes of tea, six tomatoes, and two loaves of bread</x>。apple は -s、box は -es、tomato は -es、loaf は loaves になります。bread は不可算なので、<s>breads</s> ではなく loaf（かたまり）を数えます。` },
    { k: "h", en: "The spelling rules have limits", ja: "つづりのルールには限界がある" },
    { k: "p", en: `Not every -ch word takes -es: <x>stomach → stomachs</x>, because the ending sounds like /k/. Some words allow two spellings: <i>scarfs / scarves</i>, <i>cargos / cargoes</i>. Check a dictionary rather than forcing every -o or -f noun into one rule.`,
      ja: `-ch で終わる語がすべて -es になるわけではありません。<x>stomach → stomachs</x> は語尾が /k/ の音だからです。2通りのつづりが認められる語もあります（<i>scarfs / scarves</i>、<i>cargos / cargoes</i>）。-o や -f で終わる名詞を無理に1つのルールに当てはめず、辞書で確認しましょう。` },
    { k: "h", en: "Compound nouns: find the main noun", ja: "複合名詞：中心の名詞を探す" },
    { k: "p", en: `<x>mother-in-law → mothers-in-law</x> (more than one mother); <x>passer-by → passers-by</x>. But <x>toothbrush → toothbrushes</x> (the whole thing is a brush). Most noun + noun compounds pluralize the last word: <x>bus stop → bus stops</x>.`,
      ja: `<x>mother-in-law → mothers-in-law</x>（母親が複数）、<x>passer-by → passers-by</x>。一方 <x>toothbrush → toothbrushes</x>（全体で1つのブラシ）。名詞＋名詞の複合語のほとんどは、最後の語を複数形にします：<x>bus stop → bus stops</x>。` },
    { k: "note", l: { en: "Easy check", ja: "かんたんチェック" },
      en: `After <i>two, three, many, several, these, those</i>, use a plural countable noun: <x>two babies</x>, <x>many boxes</x>, <x>these phones</x>. An irregular plural may look unchanged: <x>two fish</x>.`,
      ja: `<i>two, three, many, several, these, those</i> の後は可算名詞の複数形：<x>two babies</x>、<x>many boxes</x>、<x>these phones</x>。不規則な複数形は形が変わらないこともあります：<x>two fish</x>。` },
    { k: "tip", en: `Japanese counts with counters (3個, 2本, 5枚) and never changes the noun, so the -s is easy to forget. After any number above one, listen for the /s/, /z/ or /ɪz/ ending: <x>three boxes</x>.`,
      ja: `日本語は助数詞（3個・2本・5枚）で数え、名詞の形は変わらないので、-s を忘れがちです。2以上の数の後では、語尾の /s/・/z/・/ɪz/ の音を意識しましょう：<x>three boxes</x>。` }
  ],
  q: [
    { q: `I bought two ___ (box) of tea.`, i: [`boxes`],
      e: { en: `After -x, add -es.`, ja: `-x で終わるので -es を付けます。` } },
    { q: `Both ___ (baby) are asleep.`, i: [`babies`],
      e: { en: `Consonant + y → -ies.`, ja: `子音字＋y なので y を i に変えて -es。` } },
    { q: `I lost my ___ (key) again.`, i: [`keys`],
      e: { en: `Vowel + y: just add -s.`, ja: `母音字＋y はそのまま -s。` } },
    { q: `Be careful with those ___ (knife).`, i: [`knives`],
      e: { en: `<i>Knife</i> changes to <i>knives</i>.`, ja: `knife は knives になります。` } },
    { q: `Add six ___ to the salad.`, o: [`tomatos`, `tomatoes`, `tomato`], a: 1,
      e: { en: `<i>Tomato</i> takes -es.`, ja: `tomato は -es を付けます。` } },
    { q: `She showed me her holiday ___.`, o: [`photoes`, `photos`, `photo's`], a: 1,
      e: { en: `<i>Photo</i> just adds -s.`, ja: `photo はそのまま -s を付けます。` } },
    { q: `Several houses on this street have flat ___.`, o: [`rooves`, `roofs`, `roof`], a: 1,
      e: { en: `<i>Roof</i> just adds -s: <i>roofs</i>.`, ja: `roof はそのまま -s（roofs）です。` } },
    { q: `My two ___ both live in Kyoto.`, o: [`sister-in-laws`, `sisters-in-law`, `sisters-in-laws`], a: 1,
      e: { en: `Pluralize the main noun: <i>sisters</i>-in-law.`, ja: `中心の名詞 sister を複数形にします（sisters-in-law）。` } },
    { q: `We need two more ___ for the bathroom.`, o: [`toothbrushs`, `toothbrushes`, `teethbrushes`], a: 1,
      e: { en: `The whole compound is a kind of brush, so add -es at the end.`, ja: `全体で1つのブラシなので、語尾に -es を付けます。` } },
    { q: `The teacher gave us three ___ (quiz) this week.`, i: [`quizzes`],
      e: { en: `<i>Quiz</i> doubles the z: <i>quizzes</i>.`, ja: `quiz は z を重ねて quizzes です。` } }
  ]
});

GH.topic({
  id: "plural-exceptions", ch: "nouns", p: 20,
  t: { en: "Fish or fishes? Plurals with exceptions", ja: "例外的な複数形" },
  d: { en: "Same-form plurals, irregular plurals, nouns that look plural, and what agreement reveals.", ja: "単複同形、不規則な複数形、複数形に見える名詞、一致が示す数" },
  body: [
    { k: "core", en: `The everyday plural of <i>fish</i> is <b>fish</b>: <x>one fish, two fish, ten fish</x>. It is still countable; it simply uses the same form for singular and plural.`,
      ja: `<i>fish</i> の日常的な複数形は <b>fish</b> です（<x>one fish, two fish, ten fish</x>）。数えられる名詞ですが、単数と複数が同じ形なのです。` },
    { k: "table", head: [{ en: "Situation", ja: "場面" }, "@example", { en: "Meaning", ja: "意味" }], rows: [
      [{ en: "Counting animals in a tank", ja: "水槽の魚を数える" }, `<x>There are six fish in the tank.</x>`, { en: "six individual animals", ja: "6匹" }],
      [{ en: "Fish as food", ja: "食べ物としての魚" }, `<x>We ate fish for dinner.</x>`, { en: "food; uncountable here", ja: "食材（不可算）" }],
      [{ en: "Different kinds, in science", ja: "種類（学術的）" }, `<x>The book describes the fishes of this region.</x>`, { en: "kinds or species", ja: "魚の種類" }]
    ] },
    { k: "p", en: `<i>Fishes</i> is valid for species, especially in science, but <x>six fish of three species</x> is also natural. For everyday counting, <i>fish</i> is the safe default. In <x>He fishes on Sundays</x>, <i>fishes</i> is a verb agreeing with <i>he</i>.`,
      ja: `<i>fishes</i> は特に学術的な文脈で「種類」を表すときに使えますが、<x>six fish of three species</x> も自然です。日常的に数えるなら fish が無難です。<x>He fishes on Sundays.</x> の fishes は、主語 he に一致した動詞（釣りをする）です。` },
    { k: "h", en: "Other important exceptions", ja: "その他の重要な例外" },
    { k: "table", head: [{ en: "Pattern", ja: "パターン" }, "@example"], rows: [
      [{ en: "Same singular and plural", ja: "単複同形" }, `<x>one sheep / two sheep</x>; <x>one deer / two deer</x>; <x>one species / two species</x>; <x>one series / two series</x>`],
      [{ en: "Change the vowel inside", ja: "中の母音が変わる" }, `<x>man / men</x>; <x>woman / women</x>; <x>tooth / teeth</x>; <x>foot / feet</x>; <x>mouse / mice</x>`],
      [{ en: "Different ending", ja: "語尾が変わる" }, `<x>child / children</x>; <x>person / people</x>; <x>ox / oxen</x>`],
      [{ en: "Looks plural, usually singular", ja: "複数形に見えるが単数扱い" }, `<x>The news is good.</x> <x>Mathematics is useful.</x>`],
      [{ en: "Usually plural", ja: "常に複数扱い" }, `<x>These scissors are sharp.</x> <x>My trousers are new.</x>`]
    ] },
    { k: "p", en: `Count pair nouns with <i>pair</i>: <x>A pair of scissors is on the desk.</x> (<i>pair</i> is the singular head) / <x>Two pairs of scissors are on the desk.</x>`,
      ja: `対になっている名詞は pair で数えます：<x>A pair of scissors is on the desk.</x>（中心語 pair が単数）／<x>Two pairs of scissors are on the desk.</x>` },
    { k: "h", en: "Same spelling, different agreement", ja: "同じつづりでも一致で数がわかる" },
    { k: "ex", items: [
      [`<b>This</b> fish <b>is</b> small. / <b>These</b> fish <b>are</b> small.`, { en: `this/these and is/are show the number`, ja: `this/these と is/are で単数か複数かがわかる` }],
      [`One species <b>is</b> protected. / Several species <b>are</b> protected.`, { en: `don't assume an unchanged noun is singular`, ja: `形が変わらない名詞が単数とは限らない` }]
    ] },
    { k: "p", en: `<i>People</i> is the usual plural of <i>person</i>: <x>Three people are waiting.</x> <i>Persons</i> appears in formal notices and legal writing; <i>peoples</i> means different nations or communities.`,
      ja: `<i>person</i> の通常の複数形は <i>people</i> です（<x>Three people are waiting.</x>）。<i>persons</i> は掲示や法律文書など堅い場面で使われ、<i>peoples</i> は「諸民族」の意味です。` },
    { k: "note", en: `English has no plural rule without exceptions. Learn each noun with its countability and plural: <x>a fish / two fish</x>; <x>a child / children</x>; <x>some information</x>.`,
      ja: `英語の複数形には例外のないルールはありません。名詞は可算・不可算と複数形をセットで覚えましょう：<x>a fish / two fish</x>、<x>a child / children</x>、<x>some information</x>。` },
    { k: "tip", en: `<i>People</i> is already plural, so say <x>Many people are…</x>, not <s>many peoples is</s>. <i>Police</i> takes a plural verb too: <x>The police are investigating.</x>`,
      ja: `<i>people</i> はそれ自体が複数形です。<s>many peoples is</s> ではなく <x>Many people are…</x>。また <i>police</i> も複数扱いです：<x>The police are investigating.</x>` }
  ],
  q: [
    { q: `There are six ___ in the tank.`, o: [`fishes`, `fish`, `fishs`], a: 1,
      e: { en: `The everyday plural is <i>fish</i>.`, ja: `日常的な複数形は fish です。` } },
    { q: `Three ___ are waiting outside.`, o: [`persons`, `people`, `peoples`], a: 1,
      e: { en: `The usual plural of <i>person</i> is <i>people</i>.`, ja: `person の通常の複数形は people です。` } },
    { q: `My ___ hurt after the long walk.`, o: [`foots`, `feet`, `feets`], a: 1,
      e: { en: `<i>Foot → feet</i>.`, ja: `foot の複数形は feet です。` } },
    { q: `The news ___ good today.`, o: [`is`, `are`], a: 0,
      e: { en: `<i>News</i> looks plural but takes a singular verb.`, ja: `news は複数形に見えますが単数扱いです。` } },
    { q: `These scissors ___ very sharp.`, o: [`is`, `are`], a: 1,
      e: { en: `<i>Scissors</i> is plural.`, ja: `scissors は複数扱いです。` } },
    { q: `A pair of scissors ___ on the desk.`, o: [`is`, `are`], a: 0,
      e: { en: `<i>Pair</i> is the singular head of the subject.`, ja: `主語の中心語 pair が単数なので is です。` } },
    { q: `Several species ___ protected in this park.`, o: [`is`, `are`], a: 1,
      e: { en: `<i>Species</i> has one form for singular and plural; <i>several</i> shows it is plural here.`, ja: `species は単複同形です。several があるので複数扱いです。` } },
    { q: { en: `In <x>He fishes on Sundays</x>, what is <i>fishes</i>?`, ja: `<x>He fishes on Sundays</x> の <i>fishes</i> は？` },
      o: [{ en: "a plural noun", ja: "名詞の複数形" }, { en: "a verb agreeing with <i>he</i>", ja: "主語 he に一致した動詞" }], a: 1,
      e: { en: `It means he goes fishing; -es marks third-person singular.`, ja: `「釣りをする」という動詞で、-es は3人称単数現在の語尾です。` } },
    { q: `The two ___ (child) are playing outside.`, i: [`children`],
      e: { en: `<i>Child → children</i>.`, ja: `child の複数形は children です。` } },
    { q: `We saw three ___ (mouse) in the barn.`, i: [`mice`],
      e: { en: `<i>Mouse → mice</i>.`, ja: `mouse の複数形は mice です。` } }
  ]
});

GH.topic({
  id: "three-s", ch: "nouns", p: 21,
  t: { en: "Dogs, dog's, and works: three jobs of -s", ja: "3つの -s" },
  d: { en: "Plural -s, possessive 's, and verb -s — and why adjectives never become plural.", ja: "複数形の -s、所有格の 's、動詞の -s。そして形容詞は複数形にならない" },
  body: [
    { k: "core", en: `The ending <b>-s</b> has more than one job. Ask: is the word a noun or a verb? Is there an apostrophe?`,
      ja: `語尾の <b>-s</b> には複数の働きがあります。その語は名詞か動詞か、アポストロフィはあるかを確認しましょう。` },
    { k: "table", head: ["@form", { en: "Job", ja: "働き" }, "@example"], rows: [
      [`dogs`, { en: "Plural noun", ja: "名詞の複数形" }, `<x>The dogs are outside.</x>`],
      [`dog's`, { en: "Possessive of one dog", ja: "1匹の犬の所有格" }, `<x>The dog's bowl is empty.</x>`],
      [`dogs'`, { en: "Possessive of several dogs", ja: "複数の犬の所有格" }, `<x>The dogs' bowls are empty.</x>`],
      [`works`, { en: "Present verb after he / she / it or one noun", ja: "3人称単数の主語に続く現在形の動詞" }, `<x>Mei works here.</x>`],
      [`work`, { en: "Present verb after I / you / we / they or a plural noun", ja: "I・you・we・they や複数名詞に続く動詞" }, `<x>The assistants work here.</x>`]
    ] },
    { k: "h", en: "The pattern that confuses many learners", ja: "多くの学習者が混乱するパターン" },
    { k: "ex", items: [
      [`The <b>dog runs</b>. / The <b>dogs run</b>.`, { en: `singular subject → verb -s; plural subject → no verb -s`, ja: `単数主語 → 動詞に -s／複数主語 → 動詞に -s なし` }],
      [`The <b>customer wants</b> a receipt. / The <b>customers want</b> receipts.`, { en: `the noun, the verb, and the object each follow their own logic`, ja: `名詞・動詞・目的語は、それぞれ別の理由で形が決まる` }]
    ] },
    { k: "p", en: `Don't put -s on every word just because the subject is plural. After <i>does</i>, the main verb returns to V1: <x>She works here → Does she work here? → She doesn't work here.</x>`,
      ja: `主語が複数だからといって、すべての語に -s を付けるわけではありません。does の後では本動詞は原形に戻ります：<x>She works here → Does she work here? → She doesn't work here.</x>` },
    { k: "h", en: "Adjectives never become plural", ja: "形容詞は複数形にならない" },
    { k: "p", en: `<x>a small dog / two small dogs</x>; <x>a new phone / three new phones</x> — not <s>smalls dogs</s> or <s>news phones</s>. Nationality adjectives are unchanged too: <x>a Japanese student / two Japanese students</x>.`,
      ja: `<x>a small dog / two small dogs</x>、<x>a new phone / three new phones</x>。<s>smalls dogs</s> や <s>news phones</s> とはなりません。国籍を表す形容詞も同じです：<x>a Japanese student / two Japanese students</x>。` },
    { k: "note", l: { en: "Scenario: a shop notice", ja: "場面：店の掲示" },
      en: `<x>Our customers' details are private.</x> — several customers, so the plural possessive <i>customers'</i>; <i>details</i> is a plural subject. <x>Each customer's number is checked.</x> — <i>each</i> means one at a time, so <i>customer's</i> and <i>is</i> are singular.`,
      ja: `<x>Our customers' details are private.</x>：客は複数なので所有格は customers'、主語 details も複数。<x>Each customer's number is checked.</x>：each は1人ずつを表すので、customer's も is も単数です。` },
    { k: "watch", en: `Apostrophes don't form ordinary plurals: <x>two phones</x>, not <s>two phone's</s>. <i>She's</i> = she is / she has. <i>Its</i> = belonging to it; <i>it's</i> = it is / it has.`,
      ja: `アポストロフィで普通の複数形は作りません（<s>two phone's</s> ではなく <x>two phones</x>）。<i>she's</i>＝she is / she has。<i>its</i>＝それの、<i>it's</i>＝it is / it has。` },
    { k: "tip", en: `Japanese marks none of these three jobs, so check each <i>-s</i> separately: Is the noun plural? Is there an owner? Is the subject he/she/it? <x>My sister's friends live in Osaka.</x> uses two of them.`,
      ja: `日本語にはこの3つの -s に当たる語尾がないので、1つずつ確認しましょう。名詞は複数か？所有者はいるか？主語は3人称単数か？ <x>My sister's friends live in Osaka.</x> には2種類の -s が使われています。` }
  ],
  q: [
    { q: `The ___ bowl is empty.`, h: { en: `The bowl belongs to one dog.`, ja: `1匹の犬のボウルです。` }, o: [`dogs`, `dog's`, `dogs'`], a: 1,
      e: { en: `One owner → <i>dog's</i>.`, ja: `所有者が1匹なので dog's です。` } },
    { q: `The ___ bowls are empty.`, h: { en: `The bowls belong to several dogs.`, ja: `複数の犬のボウルです。` }, o: [`dog's`, `dogs'`, `dogs`], a: 1,
      e: { en: `Several owners → <i>dogs'</i>.`, ja: `所有者が複数なので dogs' です。` } },
    { q: `The dogs ___ in the park every morning.`, o: [`runs`, `run`, `running`], a: 1,
      e: { en: `A plural subject takes the base form: <i>run</i>.`, ja: `主語が複数なので動詞は原形 run です。` } },
    { q: `Mei ___ at the station café.`, o: [`work`, `works`, `working`], a: 1,
      e: { en: `One person (third-person singular) → <i>works</i>.`, ja: `3人称単数なので works です。` } },
    { q: `Does she ___ on Saturdays?`, o: [`works`, `work`], a: 1,
      e: { en: `After <i>does</i>, use V1.`, ja: `does の後は原形です。` } },
    { q: { en: `Which is correct?`, ja: `正しいのはどれ？` }, o: [`two smalls dogs`, `two small dogs`, `two small dog`], a: 1,
      e: { en: `Adjectives never take a plural -s.`, ja: `形容詞は複数形になりません。` } },
    { q: `The company changed ___ logo last year.`, o: [`it's`, `its`], a: 1,
      e: { en: `Possessive <i>its</i> has no apostrophe; <i>it's</i> = it is / it has.`, ja: `所有を表す its にアポストロフィは付きません。it's は it is / it has です。` } },
    { q: `___ raining again.`, o: [`Its`, `It's`], a: 1,
      e: { en: `<i>It's</i> = it is.`, ja: `It's＝it is です。` } },
    { q: `Each ___ number is checked.`, o: [`customer's`, `customers'`, `customers`], a: 0,
      e: { en: `<i>Each</i> refers to one customer at a time → singular possessive.`, ja: `each は1人ずつを指すので単数の所有格です。` } },
    { q: { en: `Which sentence is correct?`, ja: `正しい文はどれ？` }, o: [`I bought two phone's.`, `I bought two phones.`, `I bought two phoneses.`], a: 1,
      e: { en: `A plural needs no apostrophe.`, ja: `複数形にアポストロフィは不要です。` } }
  ]
});

GH.topic({
  id: "articles", ch: "nouns", p: 22,
  t: { en: "Articles: a, an, the, or no article", ja: "冠詞：a・an・the・無冠詞" },
  d: { en: "Choosing a/an, the, or no article from countability and whether the listener can identify the thing.", ja: "可算・不可算と「聞き手が特定できるか」から、a/an・the・無冠詞を選ぶ" },
  body: [
    { k: "core", en: `Articles tell the listener how to identify a noun. <b>A/an</b> presents one member of a category. <b>The</b> points to something the listener can identify. <b>Zero article</b> means no article at all.`,
      ja: `冠詞は、聞き手が名詞をどう特定すればよいかを示します。<b>a/an</b> は種類の中の1つを示し、<b>the</b> は聞き手が特定できるものを指します。<b>無冠詞</b>は冠詞を付けないことです。` },
    { k: "table", head: [{ en: "Situation", ja: "状況" }, { en: "Choice", ja: "選択" }, "@example"], rows: [
      [{ en: "One non-identified singular countable noun", ja: "特定されていない単数の可算名詞" }, `a / an`, `<x>I need a charger.</x>`],
      [{ en: "Identifiable thing(s), countable or uncountable", ja: "特定できるもの（可算・不可算とも）" }, `the`, `<x>Where is the charger you lent me?</x>`],
      [{ en: "A plural category in general", ja: "一般的な種類（複数名詞）" }, { en: "no article", ja: "無冠詞" }, `<x>Chargers can be expensive.</x>`],
      [{ en: "An uncountable substance or idea in general", ja: "一般的な物質・概念（不可算名詞）" }, { en: "no article", ja: "無冠詞" }, `<x>Information is useful.</x>`]
    ] },
    { k: "flow", t: { en: "Article finder", ja: "冠詞ファインダー" }, start: "count", n: {
      count: { q: { en: "In this meaning, is the noun countable?", ja: "この意味で、名詞は数えられる？" }, o: [
        [{ en: "Yes — like phone, idea, customer", ja: "はい（phone, idea, customer など）" }, "one"],
        [{ en: "No — like water, advice, information", ja: "いいえ（water, advice, information など）" }, "gen"]] },
      one: { q: { en: "Is it singular — just one?", ja: "単数（1つ）？" }, o: [
        [{ en: "Yes, singular", ja: "はい、単数" }, "known"],
        [{ en: "No, plural", ja: "いいえ、複数" }, "gen"]] },
      known: { q: { en: "Can your listener tell exactly which one you mean? (It was mentioned before, it's the only one here, or you say which.)", ja: "聞き手はどれのことか特定できる？（前に話に出た・その場で1つだけ・説明で限定している）" }, o: [
        [{ en: "Yes, they can identify it", ja: "はい、特定できる" }, "the"],
        [{ en: "No, it's just one of many", ja: "いいえ、たくさんある中の1つ" }, "a"]] },
      gen: { q: { en: "Do you mean particular, identifiable ones — or the thing in general?", ja: "特定の（どれかわかる）もの？それとも一般的な話？" }, o: [
        [{ en: "Particular ones the listener can identify", ja: "聞き手が特定できるもの" }, "the"],
        [{ en: "The thing in general", ja: "一般的な話" }, "zero"]] },
      a: { r: "a / an", nt: { en: "One member of a group, not identified yet. Choose by the first sound: a university, an hour.", ja: "まだ特定されていない「ある1つ」。最初の音で選びます：a university、an hour。" }, ex: [`I need a charger.`, `She is an engineer.`] },
      the: { r: "the", nt: { en: "The listener can identify it. A possessive or this / that also identifies it: my phone, this phone.", ja: "聞き手が特定できるもの。所有格や this / that でも特定できます：my phone、this phone。" }, ex: [`Where's the charger you lent me?`, `The information on this page is correct.`] },
      zero: { r: { en: "no article", ja: "無冠詞" }, nt: { en: "Plural or uncountable nouns in general take no article.", ja: "一般的な意味の複数名詞・不可算名詞には冠詞を付けません。" }, ex: [`I like cats.`, `Information is power.`] }
    } },
    { k: "p", en: `Identifiable can mean previously mentioned, unique in the situation, or specified: <x>I bought a phone. The phone is blue.</x> <x>Please close the door.</x> <x>The battery in this phone is weak.</x>`,
      ja: `「特定できる」とは、すでに話に出た、その場で1つに決まる、説明で限定されている、といった場合です：<x>I bought a phone. The phone is blue.</x>／<x>Please close the door.</x>／<x>The battery in this phone is weak.</x>` },
    { k: "h", en: "A or an depends on sound", ja: "a か an かは音で決まる" },
    { k: "ex", items: [
      [`<b>a</b> university, <b>a</b> useful tool, <b>a</b> European city`, { en: `these begin with a consonant sound (/j/)`, ja: `最初の音が子音（/j/）` }],
      [`<b>an</b> hour, <b>an</b> honest answer, <b>an</b> email, <b>an</b> MBA`, { en: `these begin with a vowel sound`, ja: `最初の音が母音` }]
    ] },
    { k: "p", en: `Use <i>a/an</i> for jobs and category membership: <x>She is an engineer.</x> <x>It is a useful app.</x> Use <i>one</i> when the number itself matters: <x>I need one copy, not two.</x>`,
      ja: `職業や分類を表すときは a/an：<x>She is an engineer.</x>／<x>It is a useful app.</x> 数そのものを強調するなら one：<x>I need one copy, not two.</x>` },
    { k: "h", en: "Common zero-article patterns", ja: "よく使う無冠詞のパターン" },
    { k: "p", en: `Languages and subjects: <x>speak English</x>, <x>study history</x>. Meals: <x>have breakfast</x>. Most cities and countries: <x>Osaka</x>, <x>Japan</x> — but <x>the United States</x>, <x>the Netherlands</x>. Days and months: <x>on Monday</x>, <x>in June</x>. Places used for their purpose: <x>go to school</x>, <x>be at work</x>, <x>go to bed</x> — but <x>go to the school</x> for the building.`,
      ja: `言語・教科：<x>speak English</x>、<x>study history</x>。食事：<x>have breakfast</x>。多くの都市・国：<x>Osaka</x>、<x>Japan</x>（ただし <x>the United States</x>、<x>the Netherlands</x>）。曜日・月：<x>on Monday</x>、<x>in June</x>。本来の目的で使う場所：<x>go to school</x>、<x>be at work</x>、<x>go to bed</x>（建物としては <x>go to the school</x>）。` },
    { k: "p", en: `Use <i>the</i> with superlatives and ordinals: <x>the best option</x>, <x>the first customer</x>. Rivers, seas, oceans, and mountain ranges usually take <i>the</i> (<x>the Nile</x>, <x>the Pacific</x>, <x>the Alps</x>); most single mountains and lakes don't (<x>Mount Fuji</x>, <x>Lake Biwa</x>).`,
      ja: `最上級や序数には the：<x>the best option</x>、<x>the first customer</x>。川・海・大洋・山脈には通常 the を付け（<x>the Nile</x>、<x>the Pacific</x>、<x>the Alps</x>）、単独の山や湖には通常付けません（<x>Mount Fuji</x>、<x>Lake Biwa</x>）。` },
    { k: "watch", en: `"Specific" is not enough: <x>I spoke to a customer this morning</x> refers to a particular person, but the listener can't identify them yet, so <i>a</i>. Also, don't combine determiners: <x>my phone</x> or <x>the phone</x>, not <s>the my phone</s>.`,
      ja: `「特定の」だけでは the になりません。<x>I spoke to a customer this morning.</x> は特定の人ですが、聞き手はまだ誰か特定できないので a です。また、限定詞を重ねないこと：<s>the my phone</s> ではなく <x>my phone</x> か <x>the phone</x>。` },
    { k: "tip", en: `Japanese has no articles, so ask two questions for every noun. (1) Is it singular and countable? Then it needs something — <i>a, the, my…</i> (2) Can my listener tell which one? Then <i>the</i>. 猫が好き = <x>I like cats.</x> (general, plural), not <s>I like cat.</s>`,
      ja: `日本語には冠詞がないので、名詞ごとに2つ確認しましょう。①単数の可算名詞か？ → それなら a・the・my などが必要。②聞き手はどれのことかわかるか？ → わかるなら the。「猫が好き」は <x>I like cats.</x>（一般論は複数形）で、<s>I like cat.</s> は誤りです。` }
  ],
  q: [
    { q: `I need ___ charger for my phone.`, h: { en: `You don't have one yet — any charger will do.`, ja: `まだ持っていない。どの充電器でもいい。` }, o: [`a`, `the`, `—`], a: 0,
      e: { en: `One charger that hasn't been identified → <i>a</i>.`, ja: `特定されていない1つの充電器なので a です。` } },
    { q: `I bought a phone yesterday. ___ phone is blue.`, o: [`A`, `The`, `—`], a: 1,
      e: { en: `It was just introduced, so the listener can identify it.`, ja: `直前に話に出たので、聞き手は特定できます。` } },
    { q: `She is ___ engineer.`, o: [`a`, `an`, `the`], a: 1,
      e: { en: `<i>Engineer</i> starts with a vowel sound.`, ja: `engineer は母音で始まるので an です。` } },
    { q: `He studies at ___ university in Tokyo.`, o: [`a`, `an`], a: 0,
      e: { en: `<i>University</i> starts with a /j/ consonant sound.`, ja: `university は子音 /j/ で始まるので a です。` } },
    { q: `I'll be back in ___ hour.`, o: [`a`, `an`], a: 1,
      e: { en: `The <i>h</i> is silent, so <i>hour</i> starts with a vowel sound.`, ja: `h は発音しないので母音で始まり、an です。` } },
    { q: `___ information is power.`, h: { en: `A general statement.`, ja: `一般論です。` }, o: [`An`, `The`, `—`], a: 2,
      e: { en: `An uncountable noun used in a general sense takes no article.`, ja: `一般的な意味の不可算名詞なので無冠詞です。` } },
    { q: `I like ___.`, h: { en: `cats in general`, ja: `猫全般` }, o: [`cat`, `cats`, `the cat`], a: 1,
      e: { en: `For a general category, use the plural with no article.`, ja: `一般論では無冠詞の複数形を使います。` } },
    { q: `We climbed ___ Mount Fuji last summer.`, o: [`the`, `—`, `a`], a: 1,
      e: { en: `Most single mountains take no article.`, ja: `単独の山には通常冠詞を付けません。` } },
    { q: `Is ___ Pacific the largest ocean?`, o: [`the`, `—`, `a`], a: 0,
      e: { en: `Oceans take <i>the</i>.`, ja: `大洋には the を付けます。` } },
    { q: `My son goes to ___ school by bus.`, h: { en: `He goes there to attend lessons.`, ja: `授業を受けに行く。` }, o: [`the`, `a`, `—`], a: 2,
      e: { en: `<i>Go to school</i> describes the normal activity, with no article.`, ja: `本来の目的（授業）で行くので無冠詞です。` } }
  ]
});

GH.topic({
  id: "determiners", ch: "nouns", p: 23,
  t: { en: "Determiners and quantifiers", ja: "限定詞と数量詞" },
  d: { en: "This/that, many/much, few/a few, little/a little, some/any, every/each, and of-patterns.", ja: "this/that、many/much、few/a few、little/a little、some/any、every/each、of を使う形" },
  body: [
    { k: "core", en: `A <b>determiner</b> comes before the noun — and before any adjectives: <x>those three new phones</x>. It tells <b>which</b> or <b>how much</b>. Determiners include articles, demonstratives, possessives, and quantifiers.`,
      ja: `<b>限定詞</b>は名詞の前、形容詞よりも前に置き（<x>those three new phones</x>）、<b>どれ</b>か、<b>どれだけ</b>かを示します。冠詞・指示詞・所有格・数量詞などが含まれます。` },
    { k: "h", en: "This, that, these, those", ja: "this・that・these・those" },
    { k: "p", en: `<i>This/that</i> + singular or uncountable: <x>this phone</x>, <x>that information</x>. <i>These/those</i> + plural: <x>these phones</x>. <i>This/these</i> = near (in space, time, or the conversation); <i>that/those</i> = farther away.`,
      ja: `<i>this/that</i>＋単数・不可算名詞（<x>this phone</x>、<x>that information</x>）、<i>these/those</i>＋複数名詞（<x>these phones</x>）。<i>this/these</i> は近いもの（空間・時間・話の流れ）、<i>that/those</i> は遠いものを指します。` },
    { k: "table", head: [{ en: "Quantity", ja: "量" }, { en: "Plural countable", ja: "可算名詞の複数形" }, { en: "Uncountable", ja: "不可算名詞" }], rows: [
      [{ en: "Large amount", ja: "多い" }, `<x>many customers</x>; <x>a lot of customers</x>`, `<x>much time</x>; <x>a lot of time</x>`],
      [{ en: "Small, positive", ja: "少しある" }, `<x>a few questions</x>`, `<x>a little information</x>`],
      [{ en: "Almost none (negative feel)", ja: "ほとんどない" }, `<x>few questions</x>`, `<x>little information</x>`],
      [{ en: "More than needed", ja: "多すぎる" }, `<x>too many messages</x>`, `<x>too much work</x>`],
      [{ en: "Sufficient", ja: "十分" }, `<x>enough chairs</x>`, `<x>enough time</x>`],
      [{ en: "Smaller quantity", ja: "より少ない" }, `<x>fewer errors</x>`, `<x>less time</x>`]
    ] },
    { k: "cmp", t: { en: "One small a changes the feeling", ja: "a があるかないかで印象が変わる" }, cols: [
      { h: `a few / a little`, s: { en: "some — enough to be useful", ja: "少しある（肯定的）" }, ex: [`There are a few seats left.`, `We still have a little time.`] },
      { h: `few / little`, s: { en: "almost none — not enough", ja: "ほとんどない（否定的）" }, ex: [`There are few seats left.`, `We have little time.`] }
    ], n: { en: `<i>a few / few</i> go with plural countable nouns; <i>a little / little</i> go with uncountable nouns.`, ja: `<i>a few / few</i> は可算名詞の複数形、<i>a little / little</i> は不可算名詞と使います。` } },
    { k: "h", en: "Some and any", ja: "some と any" },
    { k: "p", en: `<i>Some</i> in affirmative statements, <i>any</i> in questions and negatives: <x>I have some questions.</x> / <x>Do you have any questions?</x> / <x>I don't have any questions.</x> Use <i>some</i> in offers and requests: <x>Would you like some tea?</x> <x>Could I have some water?</x> <i>Any</i> can also mean "whichever": <x>Choose any seat.</x>`,
      ja: `肯定文では some、疑問文・否定文では any が基本です（<x>I have some questions.</x>／<x>Do you have any questions?</x>／<x>I don't have any questions.</x>）。勧誘や依頼では some（<x>Would you like some tea?</x>／<x>Could I have some water?</x>）。any は「どれでも」の意味にもなります（<x>Choose any seat.</x>）。` },
    { k: "h", en: "All, every, each, both, either, neither", ja: "all・every・each・both・either・neither" },
    { k: "p", en: `<i>All</i> views the group together (<x>all customers</x>). <i>Every</i> + singular noun covers all members (<x>every customer</x>). <i>Each</i> focuses on members one by one (<x>each customer</x>). <i>Both</i> = the two together; <i>either</i> = one or the other; <i>neither</i> = not one and not the other. <i>Every</i> and <i>each</i> take singular agreement: <x>Every customer has a number.</x>`,
      ja: `<i>all</i> はグループ全体（<x>all customers</x>）、<i>every</i>＋単数名詞はすべてのメンバー（<x>every customer</x>）、<i>each</i> は1人ずつに注目します（<x>each customer</x>）。<i>both</i>＝両方、<i>either</i>＝どちらか一方、<i>neither</i>＝どちらも〜ない。every と each は単数扱いです：<x>Every customer has a number.</x>` },
    { k: "h", en: "With of", ja: "of を使う形" },
    { k: "p", en: `<x>most people</x>, but <x>most of the people</x> / <x>most of them</x>. <x>some customers</x>, but <x>some of our customers</x>. <x>all (of) the customers</x> and <x>both (of) my friends</x> allow an optional <i>of</i>. Say <x>every one of them</x>, not <s>every of them</s>.`,
      ja: `<x>most people</x> と <x>most of the people</x>／<x>most of them</x>。<x>some customers</x> と <x>some of our customers</x>。<x>all (of) the customers</x>、<x>both (of) my friends</x> の of は省略できます。<s>every of them</s> ではなく <x>every one of them</x> です。` },
    { k: "watch", en: `<i>Enough</i> + noun: <x>enough time</x>. Adjective/adverb + <i>enough</i>: <x>old enough</x>, <x>quickly enough</x>. <i>Another</i> = one more (singular); <i>other</i> + noun; <i>others</i> stands alone; <i>the other</i> = the remaining one of two.`,
      ja: `名詞の前に enough（<x>enough time</x>）、形容詞・副詞の後に enough（<x>old enough</x>、<x>quickly enough</x>）。<i>another</i>＝もう1つの（単数）、<i>other</i>＋名詞、<i>others</i> は単独で使う、<i>the other</i>＝2つのうち残りの1つ。` },
    { k: "tip", en: `少し is <i>a few</i> (countable) or <i>a little</i> (uncountable); ほとんどない is <i>few / little</i> without <i>a</i>. That single <i>a</i> flips the feeling from positive to negative.`,
      ja: `「少し」は数えられるなら <i>a few</i>、数えられないなら <i>a little</i>。「ほとんどない」は a を付けない <i>few / little</i> です。a が1つあるかないかで、肯定的な意味と否定的な意味が入れ替わります。` }
  ],
  q: [
    { q: `How ___ time do we have?`, o: [`many`, `much`], a: 1,
      e: { en: `<i>Time</i> is uncountable → <i>much</i>.`, ja: `time は不可算なので much です。` } },
    { q: `There were too ___ messages to read.`, o: [`much`, `many`], a: 1,
      e: { en: `<i>Messages</i> is plural countable → <i>many</i>.`, ja: `messages は可算名詞の複数形なので many です。` } },
    { q: `Don't worry — we still have ___ minutes.`, h: { en: `Some time remains; the speaker is positive.`, ja: `まだ少し時間がある（肯定的）。` }, o: [`few`, `a few`, `a little`], a: 1,
      e: { en: `<i>A few</i> + plural countable stresses that some exist.`, ja: `a few＋可算名詞の複数形で「少しはある」です。` } },
    { q: `Sadly, ___ people came to the event.`, h: { en: `Almost nobody came.`, ja: `ほとんど誰も来なかった。` }, o: [`few`, `a few`, `little`], a: 0,
      e: { en: `<i>Few</i> (no <i>a</i>) stresses the shortage.`, ja: `a のない few で「ほとんどない」を表します。` } },
    { q: `Would you like ___ tea?`, o: [`any`, `some`], a: 1,
      e: { en: `Offers use <i>some</i>.`, ja: `勧誘では some を使います。` } },
    { q: `I don't have ___ questions.`, o: [`some`, `any`], a: 1,
      e: { en: `Negatives normally use <i>any</i>.`, ja: `否定文では通常 any を使います。` } },
    { q: `Every employee ___ an ID card.`, o: [`have`, `has`], a: 1,
      e: { en: `<i>Every</i> + singular noun → singular verb.`, ja: `every＋単数名詞なので単数扱いです。` } },
    { q: `This version has ___ errors than the last one.`, o: [`less`, `fewer`], a: 1,
      e: { en: `<i>Errors</i> is countable → <i>fewer</i>.`, ja: `errors は可算名詞なので fewer です。` } },
    { q: { en: `Which is correct?`, ja: `正しいのはどれ？` }, o: [`every of them`, `every one of them`, `every them`], a: 1,
      e: { en: `Use <i>every one of</i> + pronoun.`, ja: `every one of＋代名詞を使います。` } },
    { q: `She isn't old ___ to drive.`, o: [`enough`, `enough of`, `too`], a: 0,
      e: { en: `Adjective + <i>enough</i>.`, ja: `形容詞＋enough の語順です。` } }
  ]
});

GH.topic({
  id: "pronouns", ch: "nouns", p: 24,
  t: { en: "Pronouns and reference", ja: "代名詞" },
  d: { en: "Subject, object, possessive and reflexive forms; singular they; dummy it and there; clear reference.", ja: "主格・目的格・所有格・再帰代名詞、単数の they、形式主語の it と there、指すものを明確にする" },
  body: [
    { k: "table", head: [{ en: "Subject", ja: "主格" }, { en: "Object", ja: "目的格" }, { en: "Possessive determiner", ja: "所有格" }, { en: "Possessive pronoun", ja: "所有代名詞" }, { en: "Reflexive", ja: "再帰代名詞" }], rows: [
      [`I`, `me`, `my`, `mine`, `myself`],
      [`you`, `you`, `your`, `yours`, `yourself / yourselves`],
      [`he`, `him`, `his`, `his`, `himself`],
      [`she`, `her`, `her`, `hers`, `herself`],
      [`it`, `it`, `its`, `—`, `itself`],
      [`we`, `us`, `our`, `ours`, `ourselves`],
      [`they`, `them`, `their`, `theirs`, `themselves`]
    ] },
    { k: "h", en: "Choose the grammatical job", ja: "文中の働きで形を選ぶ" },
    { k: "p", en: `Use subject forms as subjects, and object forms after verbs and prepositions: <x>for me</x>, <x>with her</x>, <x>between you and me</x>. In careful English: <x>Mei and I arrived</x>; <x>They invited Mei and me.</x> Check by removing the other name: <x>I arrived</x> / <x>invited me</x>.`,
      ja: `主語には主格、動詞や前置詞の後には目的格を使います（<x>for me</x>、<x>with her</x>、<x>between you and me</x>）。きちんとした英語では <x>Mei and I arrived.</x>／<x>They invited Mei and me.</x> 迷ったら、もう1人の名前を消して確認します（<x>I arrived</x>／<x>invited me</x>）。` },
    { k: "p", en: `<i>My</i> needs a noun (<x>my phone</x>); <i>mine</i> replaces the noun phrase (<x>This phone is mine.</x>). Possessive pronouns have no apostrophe: <i>yours, hers, ours, theirs</i>. <i>It's</i> = it is / it has; <i>its</i> = belonging to it.`,
      ja: `<i>my</i> は後ろに名詞が必要（<x>my phone</x>）、<i>mine</i> は名詞句の代わりになります（<x>This phone is mine.</x>）。所有代名詞にアポストロフィは付きません（<i>yours, hers, ours, theirs</i>）。<i>it's</i>＝it is / it has、<i>its</i>＝それの。` },
    { k: "h", en: "Reflexive and reciprocal", ja: "再帰と相互" },
    { k: "ex", items: [
      [`I cut <b>myself</b>. She introduced <b>herself</b>.`, { en: `subject and object are the same person`, ja: `主語と目的語が同じ人` }],
      [`I checked it <b>myself</b>.`, { en: `emphasis: I did it, not someone else`, ja: `強調：他の人ではなく自分で` }],
      [`She lives <b>by herself</b>.`, { en: `= alone`, ja: `＝ひとりで` }],
      [`They helped <b>each other</b>.`, { en: `mutual: each helped the other`, ja: `お互いに助け合った` }]
    ] },
    { k: "p", en: `Don't use <i>myself</i> as a polite replacement for <i>I/me</i>: <x>Please email Mei or me</x>, not <s>Mei or myself</s>.`,
      ja: `丁寧に聞こえるからといって I/me の代わりに myself を使わないこと：<s>Mei or myself</s> ではなく <x>Please email Mei or me.</x>` },
    { k: "h", en: "Singular they and indefinite pronouns", ja: "単数の they と不定代名詞" },
    { k: "p", en: `<x>Someone left their phone. I hope they come back.</x> Singular <i>they</i> is standard for an unknown person and for people who use <i>they</i>; it still takes <i>are/have</i>. <i>Everyone, somebody, nobody, each</i> take singular verbs: <x>Everyone is ready.</x> <i>Nobody</i> is already negative: <x>Nobody called.</x>`,
      ja: `<x>Someone left their phone. I hope they come back.</x> 性別がわからない人や、they を使う人を指す単数の they は標準的な用法で、動詞は are/have を使います。<i>everyone, somebody, nobody, each</i> は単数扱い（<x>Everyone is ready.</x>）。<i>nobody</i> はそれ自体が否定です（<x>Nobody called.</x>）。` },
    { k: "h", en: "Dummy subjects and substitution", ja: "形式上の主語と代用" },
    { k: "p", en: `<x>It is raining.</x> <x>It is important to check.</x> — <i>it</i> fills the subject position. <x>There is a problem.</x> — <i>there</i> introduces existence (it is not a place here). <i>One/ones</i> replace countable nouns: <x>the blue one</x>, <x>the cheaper ones</x>.`,
      ja: `<x>It is raining.</x>／<x>It is important to check.</x> の it は主語の位置を埋める形式主語です。<x>There is a problem.</x> の there は存在を表し、場所の意味はありません。<i>one/ones</i> は可算名詞の代わりになります（<x>the blue one</x>、<x>the cheaper ones</x>）。` },
    { k: "watch", en: `Keep the reference clear: <x>When Mei spoke to Hana, she looked worried</x> doesn't say who looked worried. Repeat the name when accuracy matters.`,
      ja: `指すものを明確に：<x>When Mei spoke to Hana, she looked worried.</x> では、心配そうだったのがどちらかわかりません。正確さが大切なときは名前を繰り返しましょう。` },
    { k: "tip", en: `Japanese often drops pronouns (昨日見た), but English needs them: <x>I saw it yesterday.</x> And while 自分 is flexible, an English reflexive must refer to the subject: <x>She blamed herself.</x>`,
      ja: `日本語では「昨日見た」のように主語や目的語を省きますが、英語では代名詞が必要です：<x>I saw it yesterday.</x> また、日本語の「自分」は柔軟に使えますが、英語の再帰代名詞は主語と同じ人を指すときに使います：<x>She blamed herself.</x>` }
  ],
  q: [
    { q: `They invited Mei and ___.`, o: [`I`, `me`, `myself`], a: 1,
      e: { en: `Object position → <i>me</i>. Check: <i>They invited me.</i>`, ja: `目的語の位置なので me です。確認：They invited me.` } },
    { q: `Mei and ___ arrived early.`, o: [`I`, `me`, `myself`], a: 0,
      e: { en: `Subject position → <i>I</i>.`, ja: `主語の位置なので I です。` } },
    { q: `This phone is ___.`, o: [`my`, `mine`, `mine's`], a: 1,
      e: { en: `<i>Mine</i> stands alone; <i>my</i> needs a noun.`, ja: `単独で使うのは mine です。my は後ろに名詞が必要です。` } },
    { q: `Is this bag ___?`, o: [`your's`, `yours`, `your`], a: 1,
      e: { en: `Possessive pronouns have no apostrophe.`, ja: `所有代名詞にアポストロフィは付きません。` } },
    { q: `She introduced ___ to the class.`, o: [`her`, `herself`, `she`], a: 1,
      e: { en: `The subject and object are the same person → reflexive.`, ja: `主語と目的語が同じ人なので再帰代名詞です。` } },
    { q: `The two teams helped ___ during the project.`, h: { en: `Each team helped the other.`, ja: `お互いに助け合った。` }, o: [`themselves`, `each other`, `them`], a: 1,
      e: { en: `A mutual relationship → <i>each other</i>.`, ja: `相互の関係なので each other です。` } },
    { q: `Someone left ___ umbrella here.`, o: [`their`, `they`, `there`], a: 0,
      e: { en: `Singular <i>they</i> → possessive <i>their</i>.`, ja: `単数の they の所有格は their です。` } },
    { q: `Everyone ___ ready for the meeting.`, o: [`is`, `are`], a: 0,
      e: { en: `<i>Everyone</i> takes a singular verb.`, ja: `everyone は単数扱いです。` } },
    { q: `___ is a problem with the printer.`, o: [`It`, `There`, `Its`], a: 1,
      e: { en: `<i>There is</i> introduces existence.`, ja: `存在を表すので There is です。` } },
    { q: `Please email Mei or ___ if you have questions.`, o: [`myself`, `me`, `I`], a: 1,
      e: { en: `Object of <i>email</i> → <i>me</i>. Don't use <i>myself</i> to sound polite.`, ja: `email の目的語なので me です。丁寧にしようとして myself を使わないこと。` } }
  ]
});
