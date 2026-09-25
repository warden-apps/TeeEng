/* 02 Nouns & modifiers — part B (handbook pp. 25–31) */

GH.topic({
  id: "agreement", ch: "nouns", p: 25,
  t: { en: "Subject-verb agreement", ja: "主語と動詞の一致" },
  d: { en: "Find the head of the subject; each/every, a number of vs the number of, quantities, group nouns, either/or, there is/are.", ja: "主語の中心語を見つける。each/every、a number of と the number of、数量、集合名詞、either/or、there is/are" },
  body: [
    { k: "core", en: `The subject's person and number control the finite verb. Most present verbs change only for third-person singular (<x>she works / they work</x>); <i>be</i> changes more (<x>I am / she is / they are</x>); past verbs have one form for all subjects, except <i>was/were</i>.`,
      ja: `主語の人称と数が定形動詞の形を決めます。多くの現在形の動詞は3人称単数のときだけ変化し（<x>she works / they work</x>）、be はより多く変化します（<x>I am / she is / they are</x>）。過去形は was/were 以外、すべての主語で同じ形です。` },
    { k: "h", en: "Find the head, not the nearest noun", ja: "近くの名詞ではなく中心語を見る" },
    { k: "ex", items: [
      [`The <b>list</b> of customers <b>is</b> ready.`, { en: `head = list (singular)`, ja: `中心語は list（単数）` }],
      [`The <b>customers</b> on the list <b>are</b> ready.`, { en: `head = customers (plural)`, ja: `中心語は customers（複数）` }],
      [`<b>One</b> of my friends <b>lives</b> nearby.`, { en: `head = one (singular)`, ja: `中心語は one（単数）` }]
    ] },
    { k: "table", head: [{ en: "Subject pattern", ja: "主語のパターン" }, { en: "Agreement", ja: "一致" }, "@example"], rows: [
      [`each / every + singular noun`, { en: "singular", ja: "単数" }, `<x>Every employee has an ID.</x>`],
      [`everyone / someone / nobody`, { en: "singular", ja: "単数" }, `<x>Nobody knows.</x>`],
      [{ en: "two nouns joined by and", ja: "and で結んだ2つの名詞" }, { en: "plural", ja: "複数" }, `<x>Mei and Arun are here.</x>`],
      [{ en: "one person with two roles", ja: "1人で2つの役割" }, { en: "may be singular", ja: "単数のこともある" }, `<x>My friend and manager is here.</x>`],
      [{ en: "uncountable head", ja: "中心語が不可算名詞" }, { en: "singular", ja: "単数" }, `<x>The information is correct.</x>`],
      [`a number of + plural noun`, { en: "plural", ja: "複数" }, `<x>A number of people are waiting.</x>`],
      [`the number of + plural noun`, { en: "singular", ja: "単数" }, `<x>The number of visitors is rising.</x>`]
    ] },
    { k: "h", en: "Quantities and group nouns", ja: "数量と集合名詞" },
    { k: "p", en: `An amount treated as one unit is singular: <x>Ten minutes is enough.</x> <x>Fifty dollars is too much.</x> Counting the individual units can be plural: <x>Ten minutes have passed.</x> Fractions follow the of-noun: <x>Half of the work is done.</x> / <x>Half of the workers are here.</x>`,
      ja: `ひとまとまりの量は単数扱いです（<x>Ten minutes is enough.</x>／<x>Fifty dollars is too much.</x>）。1つ1つを数える感覚なら複数になります（<x>Ten minutes have passed.</x>）。分数などは of の後の名詞に一致します：<x>Half of the work is done.</x>／<x>Half of the workers are here.</x>` },
    { k: "p", en: `Group nouns (<i>team, family, staff</i>) can be singular or plural. American English usually treats the group as one unit (<x>The team is…</x>); British English uses the plural more freely (<x>The team are…</x>). Stay consistent.`,
      ja: `集合名詞（<i>team, family, staff</i>）は単数・複数どちらにもなります。アメリカ英語では通常、集団を1つの単位として単数扱いし（<x>The team is…</x>）、イギリス英語では複数扱いもよく使われます（<x>The team are…</x>）。1つの文章の中では統一しましょう。` },
    { k: "h", en: "Either/or, neither/nor, and there", ja: "either/or・neither/nor・there" },
    { k: "p", en: `<x>Either Mei or Arun is coming.</x> With mixed number, the verb usually agrees with the nearer part: <x>Either the manager or the assistants are coming.</x> In careful writing: <x>There is a problem.</x> / <x>There are two problems.</x> (<i>There's two problems</i> is common in speech but not safe for tests.)`,
      ja: `<x>Either Mei or Arun is coming.</x> 単数と複数が混じるときは、通常近いほうに一致します：<x>Either the manager or the assistants are coming.</x> きちんとした文章では <x>There is a problem.</x>／<x>There are two problems.</x>（<i>There's two problems</i> は会話ではよく聞きますが、試験では避けましょう）。` },
    { k: "watch", en: `<i>As well as, together with, along with</i> do not make a plural subject: <x>The manager, together with two assistants, is attending.</x> Compare <x>The manager and two assistants are attending.</x>`,
      ja: `<i>as well as, together with, along with</i> は主語を複数にしません：<x>The manager, together with two assistants, is attending.</x> 比較：<x>The manager and two assistants are attending.</x>` },
    { k: "note", l: { en: "Special nouns", ja: "注意すべき名詞" },
      en: `<x>The news is good.</x> <x>Mathematics is difficult.</x> <x>The police are investigating.</x> <x>These scissors are sharp.</x> <i>Data</i> is often singular in general use and plural in technical writing.`,
      ja: `<x>The news is good.</x>／<x>Mathematics is difficult.</x>／<x>The police are investigating.</x>／<x>These scissors are sharp.</x> <i>data</i> は一般には単数扱い、専門的な文章では複数扱いされることもあります。` },
    { k: "tip", en: `Japanese verbs never change for the subject, so long subjects cause slips: <s>The price of these apples are high.</s> Find the head first (<i>price</i>), then choose the verb: <x>The price of these apples is high.</x>`,
      ja: `日本語の動詞は主語によって形が変わらないので、主語が長いと間違えやすくなります（<s>The price of these apples are high.</s>）。まず中心語（<i>price</i>）を見つけてから動詞を選びましょう：<x>The price of these apples is high.</x>` }
  ],
  q: [
    { q: `The list of customers ___ ready.`, o: [`is`, `are`], a: 0,
      e: { en: `The head is <i>list</i> (singular).`, ja: `中心語は list（単数）です。` } },
    { q: `One of my friends ___ in Kobe.`, o: [`live`, `lives`], a: 1,
      e: { en: `The head is <i>one</i>, so <i>lives</i>.`, ja: `中心語は one なので lives です。` } },
    { q: `A number of people ___ waiting outside.`, o: [`is`, `are`], a: 1,
      e: { en: `<i>A number of</i> means "several", so the verb is plural.`, ja: `a number of（いくつかの）は複数扱いです。` } },
    { q: `The number of visitors ___ rising every year.`, o: [`is`, `are`], a: 0,
      e: { en: `<i>The number</i> is the singular head.`, ja: `中心語 the number が単数です。` } },
    { q: `Ten minutes ___ enough for this task.`, o: [`is`, `are`], a: 0,
      e: { en: `The amount is treated as one unit.`, ja: `量をひとまとまりと考えるので単数扱いです。` } },
    { q: `The manager, together with two assistants, ___ attending.`, o: [`is`, `are`], a: 0,
      e: { en: `<i>Together with</i> doesn't make the subject plural.`, ja: `together with は主語を複数にしません。` } },
    { q: `There ___ two problems with this plan.`, o: [`is`, `are`], a: 1,
      e: { en: `The real subject after <i>there</i> is plural: <i>two problems</i>.`, ja: `there の後の主語 two problems が複数です。` } },
    { q: `Half of the workers ___ on holiday.`, o: [`is`, `are`], a: 1,
      e: { en: `<i>Half of</i> follows the of-noun: <i>workers</i> (plural).`, ja: `half of は of の後の名詞 workers（複数）に一致します。` } },
    { q: `Neither Mei nor Arun ___ the answer.`, o: [`know`, `knows`], a: 1,
      e: { en: `Two singular alternatives → singular verb.`, ja: `単数の2つの選択肢なので単数扱いです。` } },
    { q: `The price of these apples ___ very high.`, o: [`is`, `are`], a: 0,
      e: { en: `The head is <i>price</i>, not <i>apples</i>.`, ja: `中心語は apples ではなく price です。` } }
  ]
});

GH.topic({
  id: "adjectives", ch: "nouns", p: 26,
  t: { en: "Adjectives and adjective phrases", ja: "形容詞と形容詞句" },
  d: { en: "Before nouns and after linking verbs, -ed versus -ing adjectives, adjective patterns, and degree.", ja: "名詞の前と連結動詞の後、-ed と -ing の形容詞、形容詞の後に続く形、程度の表し方" },
  body: [
    { k: "core", en: `An adjective describes a noun's quality, condition, type, or relationship. It usually comes <b>before a noun</b> (<x>a helpful colleague</x>) or <b>after a linking verb</b> (<x>My colleague is helpful.</x>). English adjectives never change for plural.`,
      ja: `形容詞は名詞の性質・状態・種類・関係を表します。通常は<b>名詞の前</b>（<x>a helpful colleague</x>）か<b>連結動詞の後</b>（<x>My colleague is helpful.</x>）に置きます。英語の形容詞は複数形になりません。` },
    { k: "h", en: "After linking verbs", ja: "連結動詞の後" },
    { k: "p", en: `Linking verbs: <i>be, seem, become, feel, look, sound, smell, taste, remain</i>. They take an adjective describing the subject: <x>The soup tastes good.</x> <x>You look tired.</x> Compare <x>She looked carefully at the screen</x> — here <i>look</i> is an action, so the adverb <i>carefully</i> describes how.`,
      ja: `連結動詞：<i>be, seem, become, feel, look, sound, smell, taste, remain</i>。後ろには主語を説明する形容詞が来ます（<x>The soup tastes good.</x>／<x>You look tired.</x>）。<x>She looked carefully at the screen.</x> では look は動作なので、副詞 carefully が「どのように」を表します。` },
    { k: "p", en: `Some adjectives prefer one position. <i>Asleep, afraid, alive</i> usually come after the verb: <x>The child is asleep</x> (but <x>a sleeping child</x>). <i>Main, mere, former</i> come before a noun: <x>the main reason</x>. Adjectives follow indefinite pronouns: <x>something useful</x>, <x>anyone available</x>.`,
      ja: `位置が決まっている形容詞もあります。<i>asleep, afraid, alive</i> は通常動詞の後です（<x>The child is asleep.</x>。名詞の前なら <x>a sleeping child</x>）。<i>main, mere, former</i> は名詞の前です（<x>the main reason</x>）。不定代名詞の後には形容詞が続きます（<x>something useful</x>、<x>anyone available</x>）。` },
    { k: "h", en: "-ed versus -ing adjectives", ja: "-ed と -ing の形容詞" },
    { k: "cmp", t: { en: "Feeling or cause?", ja: "気持ちか、原因か" }, cols: [
      { h: `-ed`, s: { en: "how someone feels", ja: "人が感じる気持ち" }, ex: [`I'm bored.`, `I'm interested in grammar.`, `She was surprised.`] },
      { h: `-ing`, s: { en: "what causes the feeling", ja: "その気持ちを起こすもの" }, ex: [`The lesson is boring.`, `Grammar is interesting.`, `The result was surprising.`] }
    ], n: { en: `Both in one sentence: <x>She was surprised by the surprising result.</x>`, ja: `1つの文に両方：<x>She was surprised by the surprising result.</x>` } },
    { k: "p", en: `Other pairs: <i>excited/exciting, confused/confusing, tired/tiring, satisfied/satisfying</i>. It is a meaning difference, not a people-versus-things rule: a person can be <i>boring</i> if they make others bored.`,
      ja: `他にも <i>excited/exciting, confused/confusing, tired/tiring, satisfied/satisfying</i> などがあります。「人なら -ed、ものなら -ing」ではなく意味の違いです。人が <i>boring</i>（退屈な人）になることもあります。` },
    { k: "h", en: "Adjective patterns and degree", ja: "形容詞の後に続く形と程度" },
    { k: "p", en: `Learn adjectives with their patterns: <x>good at speaking</x>, <x>interested in learning</x>, <x>afraid of making mistakes</x>, <x>pleased with the result</x>, <x>ready to begin</x>, <x>sure that it works</x>. Gradable adjectives take <i>very, fairly, rather</i> (<x>very cold</x>); extreme adjectives prefer <i>absolutely, completely</i> (<x>absolutely freezing</x>).`,
      ja: `形容詞は後ろに続く形とセットで覚えましょう：<x>good at speaking</x>、<x>interested in learning</x>、<x>afraid of making mistakes</x>、<x>pleased with the result</x>、<x>ready to begin</x>、<x>sure that it works</x>。程度を表せる形容詞には very, fairly, rather（<x>very cold</x>）、極端な意味の形容詞には absolutely, completely が合います（<x>absolutely freezing</x>）。` },
    { k: "p", en: `Adjectives that each describe the noun separately can take a comma: <x>a clear, helpful explanation</x>. Adjectives that build a unit take none: <x>three large plastic boxes</x>.`,
      ja: `それぞれ独立して名詞を説明する形容詞はカンマで区切れます（<x>a clear, helpful explanation</x>）。積み重なって1つのまとまりを作る形容詞にはカンマを付けません（<x>three large plastic boxes</x>）。` },
    { k: "watch", en: `<x>I am boring</x> means I make other people bored! For your feeling, say <x>I am bored.</x> <x>I feel bad</x> describes your state; <i>I feel badly</i> means something different.`,
      ja: `<x>I am boring.</x> は「私は（人を退屈させる）つまらない人間だ」という意味です。自分の気持ちなら <x>I am bored.</x> と言いましょう。<x>I feel bad.</x> は気分が悪い・申し訳ないという状態を表します。` },
    { k: "tip", en: `退屈だ can be <i>bored</i> or <i>boring</i>. Ask: is it my feeling (<i>bored</i>) or the thing that causes it (<i>boring</i>)? わくわくした = <x>I was excited.</x>; わくわくする試合 = <x>an exciting game</x>.`,
      ja: `「退屈だ」は、自分の気持ちなら <i>bored</i>、そう感じさせるものなら <i>boring</i> です。「わくわくした」は <x>I was excited.</x>、「わくわくする試合」は <x>an exciting game</x>。` }
  ],
  q: [
    { q: `The movie was so long. I was ___.`, o: [`boring`, `bored`], a: 1,
      e: { en: `Your feeling → <i>bored</i>.`, ja: `自分の気持ちなので bored です。` } },
    { q: `The lecture was really ___.`, o: [`boring`, `bored`], a: 0,
      e: { en: `The lecture caused the feeling → <i>boring</i>.`, ja: `講義がそう感じさせたので boring です。` } },
    { q: `I'm very ___ in Japanese history.`, o: [`interesting`, `interested`], a: 1,
      e: { en: `<i>Interested in</i> describes your feeling.`, ja: `interested in で自分の興味を表します。` } },
    { q: `This soup tastes ___.`, o: [`good`, `well`, `goodly`], a: 0,
      e: { en: `<i>Taste</i> is a linking verb here, so use an adjective.`, ja: `taste はここでは連結動詞なので形容詞を使います。` } },
    { q: `She looked ___ at the screen.`, o: [`careful`, `carefully`], a: 1,
      e: { en: `Here <i>look</i> is an action, so an adverb describes how.`, ja: `ここでの look は動作なので、どのように見たかを表す副詞です。` } },
    { q: `Don't wake the baby — she's ___.`, o: [`asleep`, `sleep`], a: 0,
      e: { en: `<i>Asleep</i> is the adjective that comes after the verb; <i>sleep</i> is a verb or noun.`, ja: `asleep は動詞の後に置く形容詞です。sleep は動詞・名詞です。` } },
    { q: `Is there ___ on TV tonight?`, o: [`anything interesting`, `interesting anything`], a: 0,
      e: { en: `Adjectives follow indefinite pronouns.`, ja: `不定代名詞の後に形容詞を置きます。` } },
    { q: `She's really good ___ explaining things.`, o: [`in`, `at`, `on`], a: 1,
      e: { en: `<i>Good at</i> + -ing.`, ja: `good at＋-ing 形です。` } },
    { q: `It's ___ freezing outside!`, o: [`very`, `absolutely`], a: 1,
      e: { en: `<i>Freezing</i> is an extreme adjective, so <i>absolutely</i> fits better than <i>very</i>.`, ja: `freezing は極端な意味の形容詞なので、very より absolutely が自然です。` } },
    { q: `We bought three ___ boxes.`, o: [`large plastic`, `plastic large`, `large, plastic`], a: 0,
      e: { en: `Size comes before material, and adjectives that build a unit take no comma.`, ja: `大きさ → 素材の順です。積み重なる形容詞にカンマは付けません。` } }
  ]
});

GH.topic({
  id: "adjective-order", ch: "nouns", p: 27,
  t: { en: "Adjective order: what comes first?", ja: "形容詞の語順" },
  d: { en: "The usual order: opinion, size, age, shape, color, origin, material, purpose.", ja: "意見・大きさ・新旧・形・色・出身・素材・用途の順番" },
  body: [
    { k: "core", en: `When two or more adjectives come before a noun, English has a usual order. In practice you use only a few positions — never all eight.`,
      ja: `名詞の前に形容詞を2つ以上並べるとき、英語には通常の順番があります。実際に使うのはそのうちいくつかだけで、8つすべてを並べることはありません。` },
    { k: "table", head: [{ en: "Position", ja: "順番" }, { en: "The question it answers", ja: "答える問い" }, "@example"], rows: [
      [{ en: "1. Opinion", ja: "1. 意見・評価" }, { en: "What do you think of it?", ja: "どう思うか" }, `<x>beautiful, lovely, useful</x>`],
      [{ en: "2. Size", ja: "2. 大きさ" }, { en: "How big is it?", ja: "大きさは" }, `<x>small, big, tall</x>`],
      [{ en: "3. Age", ja: "3. 新旧" }, { en: "How old is it?", ja: "新しさ・古さは" }, `<x>new, old, young</x>`],
      [{ en: "4. Shape", ja: "4. 形" }, { en: "What shape is it?", ja: "形は" }, `<x>round, square, rectangular</x>`],
      [{ en: "5. Color", ja: "5. 色" }, { en: "What color is it?", ja: "色は" }, `<x>black, red, blue</x>`],
      [{ en: "6. Origin", ja: "6. 出身・国籍" }, { en: "Where is it from?", ja: "どこのものか" }, `<x>Japanese, Thai, Italian</x>`],
      [{ en: "7. Material", ja: "7. 素材" }, { en: "What is it made of?", ja: "何でできているか" }, `<x>wooden, leather, plastic</x>`],
      [{ en: "8. Purpose / type", ja: "8. 用途・種類" }, { en: "What is it for?", ja: "何のためのものか" }, `<x>sleeping (bag)</x>, <x>running (shoes)</x>`]
    ] },
    { k: "sv", t: { en: "The slots in action", ja: "順番を実際の名詞句で見る" }, rows: [
      { p: [["D", `a`], ["AJ", `beautiful`, { en: "1 opinion", ja: "1 意見" }], ["AJ", `small`, { en: "2 size", ja: "2 大きさ" }], ["AJ", `wooden`, { en: "7 material", ja: "7 素材" }], ["N", `table`]] },
      { p: [["D", `my`], ["D", `two`, { en: "number", ja: "数" }], ["AJ", `new`, { en: "3 age", ja: "3 新旧" }], ["AJ", `black`, { en: "5 color", ja: "5 色" }], ["N", `bags`]] },
      { p: [["AJ", `comfortable`, { en: "1 opinion", ja: "1 意見" }], ["AJ", `black`, { en: "5 color", ja: "5 色" }], ["AJ", `running`, { en: "8 purpose", ja: "8 用途" }], ["N", `shoes`]] }
    ], n: { en: `Determiners and numbers come first; the purpose word sits right next to the noun.`, ja: `限定詞と数がいちばん前、用途の語は名詞のすぐ前に来ます。` } },
    { k: "p", en: `Articles, possessives, and numbers come first of all: <x>my two new black bags</x>. Purpose words may be nouns or -ing forms, and they stay right next to the noun.`,
      ja: `冠詞・所有格・数詞はいちばん前に置きます：<x>my two new black bags</x>。用途を表す語は名詞や -ing 形のこともあり、名詞のすぐ前に置きます。` },
    { k: "h", en: "Everyday scenarios", ja: "日常の場面" },
    { k: "ex", items: [
      [`a beautiful small wooden table`, { en: `opinion → size → material`, ja: `意見 → 大きさ → 素材` }],
      [`a new black leather bag`, { en: `age → color → material`, ja: `新旧 → 色 → 素材` }],
      [`a pair of comfortable black running shoes`, { en: `opinion → color → purpose`, ja: `意見 → 色 → 用途` }],
      [`a delicious Thai meal`, { en: `opinion → origin`, ja: `意見 → 出身` }],
      [`a small round metal box`, { en: `size → shape → material`, ja: `大きさ → 形 → 素材` }]
    ] },
    { k: "h", en: "Commas between adjectives?", ja: "形容詞の間のカンマ" },
    { k: "p", en: `<x>a kind, patient teacher</x>: two separate qualities — <i>and</i> fits (kind and patient), so a comma is fine. <x>a small wooden table</x>: <i>small</i> describes the wooden table as a unit, so no comma. Never put a comma between the last adjective and the noun.`,
      ja: `<x>a kind, patient teacher</x>：2つの独立した性質で and でつなげられる（kind and patient）ので、カンマを入れられます。<x>a small wooden table</x>：small は wooden table 全体を説明するのでカンマなし。最後の形容詞と名詞の間には決してカンマを入れません。` },
    { k: "note", l: { en: "Useful flexibility", ja: "柔軟に考える" },
      en: `This order is a strong tendency, not a machine; emphasis can change it. Learn natural short combinations: <x>a beautiful old house</x>, <x>a small black bag</x>, <x>a new Japanese car</x>.`,
      ja: `この順番は強い傾向であって、機械的な規則ではありません。強調によって変わることもあります。自然な短い組み合わせで覚えましょう：<x>a beautiful old house</x>、<x>a small black bag</x>、<x>a new Japanese car</x>。` },
    { k: "tip", en: `Japanese order is flexible (黒い新しいかばん and 新しい黒いかばん are both fine), but English is not: <x>a new black bag</x>. A handy memory aid is <b>OSASCOMP</b>: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose.`,
      ja: `日本語では「黒い新しいかばん」「新しい黒いかばん」のどちらも自然ですが、英語では <x>a new black bag</x> が普通です。覚え方は <b>OSASCOMP</b>（Opinion 意見・Size 大きさ・Age 新旧・Shape 形・Color 色・Origin 出身・Material 素材・Purpose 用途）。` }
  ],
  q: [
    { w: [`a`, `new`, `black`, `leather`, `bag`],
      e: { en: `Age → color → material → noun.`, ja: `新旧 → 色 → 素材 → 名詞の順です。` } },
    { w: [`a`, `beautiful`, `small`, `wooden`, `table`],
      e: { en: `Opinion → size → material.`, ja: `意見 → 大きさ → 素材の順です。` } },
    { q: `She bought a ___ car.`, o: [`Japanese new`, `new Japanese`, `new, Japanese`], a: 1,
      e: { en: `Age before origin, with no comma.`, ja: `新旧 → 出身の順で、カンマは不要です。` } },
    { q: `He wore ___ shoes.`, o: [`black comfortable running`, `comfortable black running`, `running comfortable black`], a: 1,
      e: { en: `Opinion → color → purpose.`, ja: `意見 → 色 → 用途の順です。` } },
    { q: `I found a ___ box in the attic.`, o: [`small round metal`, `metal small round`, `round metal small`], a: 0,
      e: { en: `Size → shape → material.`, ja: `大きさ → 形 → 素材の順です。` } },
    { q: `We had a ___ meal.`, o: [`Thai delicious`, `delicious Thai`], a: 1,
      e: { en: `Opinion before origin.`, ja: `意見 → 出身の順です。` } },
    { q: `Look at that ___ dog!`, o: [`brown small`, `small brown`], a: 1,
      e: { en: `Size before color.`, ja: `大きさ → 色の順です。` } },
    { q: { en: `Which is punctuated correctly?`, ja: `カンマの使い方が正しいのは？` }, o: [`a small, wooden table`, `a small wooden table`, `a small wooden, table`], a: 1,
      e: { en: `Adjectives that build a unit take no comma.`, ja: `積み重なる形容詞にはカンマを入れません。` } },
    { q: { en: `Which is punctuated correctly?`, ja: `カンマの使い方が正しいのは？` }, o: [`a kind, patient teacher`, `a kind patient, teacher`], a: 0,
      e: { en: `Two separate qualities (kind and patient) can take a comma.`, ja: `独立した2つの性質（kind and patient）はカンマで区切れます。` } },
    { w: [`my`, `two`, `new`, `black`, `bags`],
      e: { en: `Possessive and number first, then age and color.`, ja: `所有格・数詞が先で、その後に新旧・色が続きます。` } }
  ]
});

GH.topic({
  id: "comparison", ch: "nouns", p: 28,
  t: { en: "Comparatives and superlatives", ja: "比較級と最上級" },
  d: { en: "Forming comparatives and superlatives, as…as, words like much and far, and comparing the right things.", ja: "比較級・最上級の作り方、as…as、much や far による強調、比べる対象をそろえる" },
  body: [
    { k: "core", en: `A <b>comparative</b> compares one thing with another (<x>cheaper</x>, <x>more useful</x>). A <b>superlative</b> picks the extreme in a group (<x>the cheapest</x>, <x>the most useful</x>). <b>Equality</b>: <x>as … as</x>.`,
      ja: `<b>比較級</b>は2つを比べ（<x>cheaper</x>、<x>more useful</x>）、<b>最上級</b>はグループの中で一番を示します（<x>the cheapest</x>、<x>the most useful</x>）。<b>同等</b>は <x>as … as</x> です。` },
    { k: "table", head: [{ en: "Adjective type", ja: "形容詞のタイプ" }, { en: "Comparative", ja: "比較級" }, { en: "Superlative", ja: "最上級" }], rows: [
      [{ en: "Short (usually one syllable)", ja: "短い（多くは1音節）" }, `small → smaller`, `the smallest`],
      [{ en: "Ending in -e", ja: "-e で終わる" }, `large → larger`, `the largest`],
      [{ en: "Short vowel + consonant", ja: "短母音＋子音字" }, `big → bigger`, `the biggest`],
      [{ en: "Consonant + y", ja: "子音字＋y" }, `easy → easier`, `the easiest`],
      [{ en: "Most longer adjectives", ja: "長い形容詞の多く" }, `more useful`, `the most useful`],
      [{ en: "Irregular", ja: "不規則" }, `good → better; bad → worse`, `the best; the worst`]
    ] },
    { k: "p", en: `Some two-syllable adjectives allow both forms: <i>cleverer / more clever</i>, <i>simpler / more simple</i>. But <x>more careful</x>, not <s>carefuler</s>. <i>Farther/further</i> both describe distance; <i>further</i> also means "additional": <x>further information</x>.`,
      ja: `2音節の形容詞には両方の形があるものもあります（<i>cleverer / more clever</i>、<i>simpler / more simple</i>）。ただし <s>carefuler</s> ではなく <x>more careful</x>。<i>farther/further</i> はどちらも距離を表し、<i>further</i> には「追加の」の意味もあります（<x>further information</x>）。` },
    { k: "h", en: "Build the comparison", ja: "比較の文を作る" },
    { k: "ex", items: [
      [`This plan is <b>cheaper than</b> that one.`, { en: `comparative + than`, ja: `比較級＋than` }],
      [`It is <b>as useful as</b> the old one.`, { en: `equality`, ja: `同等` }],
      [`It is <b>not as expensive as</b> I expected.`, { en: `not as … as = less`, ja: `not as … as＝〜ほど…ない` }],
      [`This is <b>the best</b> option.`, { en: `superlative with the`, ja: `the＋最上級` }]
    ] },
    { k: "p", en: `Don't double the comparison: <s>more cheaper</s>, <s>most easiest</s>. Superlatives usually take <i>the</i>; a possessive replaces it: <x>my best friend</x>. <i>Less</i> + adjective = a smaller degree: <x>less expensive</x>, <x>the least expensive</x>.`,
      ja: `比較を二重にしないこと（<s>more cheaper</s>、<s>most easiest</s>）。最上級には通常 the を付けますが、所有格がある場合は不要です（<x>my best friend</x>）。<i>less</i>＋形容詞は「より〜でない」です（<x>less expensive</x>、<x>the least expensive</x>）。` },
    { k: "h", en: "Degree and change", ja: "程度と変化" },
    { k: "p", en: `Strengthen comparatives with <i>much, far, a lot, a little, slightly, even</i>: <x>much better</x>, <x>slightly cheaper</x> — not <s>very better</s>. Use <i>by far</i> with superlatives: <x>by far the easiest option</x>. Continuing change: <x>better and better</x>, <x>more and more useful</x>. Linked change: <x>The more you practice, the more confident you become.</x>`,
      ja: `比較級を強めるには much, far, a lot, a little, slightly, even を使います（<x>much better</x>、<x>slightly cheaper</x>。<s>very better</s> は不可）。最上級には by far（<x>by far the easiest option</x>）。変化の継続：<x>better and better</x>、<x>more and more useful</x>。比例：<x>The more you practice, the more confident you become.</x>` },
    { k: "watch", en: `Compare the same kind of thing: <x>My salary is higher than my brother's</x>, not <s>than my brother</s>. <i>Elder</i> is used for family before a noun (<x>my elder sister</x>); otherwise use <i>older</i>: <x>She is older than me.</x>`,
      ja: `同じ種類のものを比べること：<s>than my brother</s> ではなく <x>My salary is higher than my brother's.</x>（兄の給料）。<i>elder</i> は家族について名詞の前で使い（<x>my elder sister</x>）、それ以外は older です：<x>She is older than me.</x>` },
    { k: "tip", en: `Japanese より comes before the adjective (私より背が高い), but English <i>than</i> comes after it: <x>taller than me</x>. And 一番 needs <i>the</i> + superlative: <x>the tallest in the class</x>.`,
      ja: `日本語の「より」は形容詞の前（私より背が高い）ですが、英語の than は形容詞の後です：<x>taller than me</x>。「一番〜」は the＋最上級：<x>the tallest in the class</x>。` }
  ],
  q: [
    { q: `This phone is ___ (cheap) than that one.`, i: [`cheaper`],
      e: { en: `Short adjective + -er.`, ja: `短い形容詞は -er を付けます。` } },
    { q: `It was the ___ (easy) test of the year.`, i: [`easiest`],
      e: { en: `Consonant + y → -iest.`, ja: `子音字＋y → -iest です。` } },
    { q: `Your idea is ___ than mine.`, o: [`more good`, `better`, `gooder`], a: 1,
      e: { en: `good → better → best.`, ja: `good → better → best と変化します。` } },
    { q: `This is ___ useful option of all.`, o: [`most`, `the most`, `more most`], a: 1,
      e: { en: `The superlative of a long adjective: <i>the most useful</i>. A singular countable noun also needs its determiner, <i>the</i>.`, ja: `長い形容詞の最上級は the most useful です。単数の可算名詞なので限定詞の the も必要です。` } },
    { q: { en: `Which is correct?`, ja: `正しいのはどれ？` }, o: [`This is more cheaper.`, `This is much cheaper.`, `This is very cheaper.`], a: 1,
      e: { en: `Use <i>much</i> to strengthen a comparative; never combine <i>more</i> with -er.`, ja: `比較級の強調には much を使います。more と -er は重ねません。` } },
    { q: `The new model is not ___ expensive as the old one.`, o: [`so`, `more`, `than`], a: 0,
      e: { en: `<i>Not as/so … as</i>.`, ja: `not as/so … as の形です。` } },
    { q: `My salary is higher than ___.`, o: [`my brother`, `my brother's`], a: 1,
      e: { en: `Compare salary with salary: <i>my brother's</i> (salary).`, ja: `給料と給料を比べるので my brother's です。` } },
    { q: `This is by far ___ option.`, o: [`the easiest`, `easier`, `the easier`], a: 0,
      e: { en: `<i>By far</i> + superlative.`, ja: `by far＋最上級です。` } },
    { q: `The more you practice, ___ you become.`, o: [`the more confident`, `more confident`, `the most confident`], a: 0,
      e: { en: `<i>The</i> + comparative …, <i>the</i> + comparative.`, ja: `the＋比較級 …, the＋比較級 の形です。` } },
    { q: `She is ___ than me.`, o: [`elder`, `older`], a: 1,
      e: { en: `After the verb, use <i>older</i>; <i>elder</i> is for family before a noun.`, ja: `動詞の後では older を使います。elder は名詞の前で家族に使います。` } }
  ]
});

GH.topic({
  id: "adverbs", ch: "nouns", p: 29,
  t: { en: "Adverbs: meaning, position, scope", ja: "副詞：意味・位置・作用域" },
  d: { en: "Kinds of adverbs, where they go, adjective versus adverb forms, and how position changes what an adverb limits.", ja: "副詞の種類と位置、形容詞と副詞の形、位置によって修飾範囲が変わること" },
  body: [
    { k: "core", en: `An adverb can say how, when, where, how often, or to what degree something happens — or give the speaker's attitude to the whole clause: <i>quickly</i> (manner), <i>often</i> (frequency), <i>probably</i> (likelihood), <i>fortunately</i> (evaluation).`,
      ja: `副詞は、どのように・いつ・どこで・どのくらいの頻度で・どの程度かを表し、文全体に対する話し手の態度も表します：<i>quickly</i>（様態）、<i>often</i>（頻度）、<i>probably</i>（可能性）、<i>fortunately</i>（評価）。` },
    { k: "table", head: [{ en: "Kind", ja: "種類" }, { en: "Typical position", ja: "典型的な位置" }, "@example"], rows: [
      [{ en: "Manner", ja: "様態" }, { en: "after the verb / object", ja: "動詞・目的語の後" }, `<x>She explained the rule clearly.</x>`],
      [{ en: "Place", ja: "場所" }, { en: "after the verb / object", ja: "動詞・目的語の後" }, `<x>Put it here.</x> <x>We met outside.</x>`],
      [{ en: "Time", ja: "時" }, { en: "end or beginning", ja: "文末か文頭" }, `<x>I'll call tomorrow.</x> <x>Yesterday, I stayed home.</x>`],
      [{ en: "Frequency", ja: "頻度" }, { en: "before a main verb; after main be", ja: "一般動詞の前・be動詞の後" }, `<x>I often study.</x> <x>She is always helpful.</x>`],
      [{ en: "Frequency with auxiliaries", ja: "助動詞がある場合の頻度" }, { en: "after the first auxiliary", ja: "最初の助動詞の後" }, `<x>I have never seen it.</x> <x>She can usually help.</x>`],
      [{ en: "Degree", ja: "程度" }, { en: "before an adjective / adverb", ja: "形容詞・副詞の前" }, `<x>very useful</x>; <x>quite slowly</x>`],
      [{ en: "Whole-clause stance", ja: "文全体への態度" }, { en: "beginning or middle", ja: "文頭か文中" }, `<x>Fortunately, it worked.</x> <x>It probably works.</x>`]
    ] },
    { k: "scale", t: { en: "How often? Frequency adverbs", ja: "どのくらいの頻度？（頻度の副詞）" }, lo: { en: "never", ja: "ゼロ" }, hi: { en: "every time", ja: "毎回" }, items: [
      [`I always check twice.`, 100, { en: "always: every time", ja: "always：いつも" }],
      [`I usually walk to work.`, 88, { en: "usually: most of the time", ja: "usually：たいてい" }],
      [`I often study at night.`, 70, { en: "often: many times", ja: "often：よく" }],
      [`I sometimes cook.`, 48, { en: "sometimes: now and then", ja: "sometimes：ときどき" }],
      [`I rarely eat out.`, 12, { en: "rarely / seldom: almost never", ja: "rarely / seldom：めったに〜ない" }],
      [`I never smoke.`, 0, { en: "never: at no time", ja: "never：決して〜ない" }]
    ], n: { en: `The bars are a rough guide, not exact percentages. <i>Rarely</i> and <i>never</i> are already negative: <i>I never smoke</i>, not <i>I don't never smoke</i>.`, ja: `バーはおおよその目安で、正確な割合ではありません。rarely・never はそれ自体が否定なので、I don't never smoke とは言いません。` } },
    { k: "h", en: "Don't split a verb from its object", ja: "動詞と目的語の間に入れない" },
    { k: "p", en: `<x>I speak English well</x>, not <s>I speak well English</s>. <x>She carefully checked the account</x> and <x>She checked the account carefully</x> are both fine. Several end details usually go manner → place → time: <x>We worked quietly at home yesterday.</x>`,
      ja: `<s>I speak well English.</s> ではなく <x>I speak English well.</x> <x>She carefully checked the account.</x> と <x>She checked the account carefully.</x> はどちらも自然です。文末に複数並べるときは、通常 様態 → 場所 → 時 の順です：<x>We worked quietly at home yesterday.</x>` },
    { k: "h", en: "Adjective or adverb?", ja: "形容詞か副詞か" },
    { k: "ex", items: [
      [`a careful worker / She works carefully.`, { en: `adjective / adverb`, ja: `形容詞／副詞` }],
      [`a good explanation / She explains well.`, { en: `<i>well</i> can also be an adjective: <i>I don't feel well</i> (healthy)`, ja: `well は形容詞（体調がよい）にもなる：I don't feel well` }],
      [`She works <b>hard</b>. / She <b>hardly</b> works.`, { en: `hard = with effort; hardly = almost not`, ja: `hard＝熱心に／hardly＝ほとんど〜ない` }],
      [`He arrived <b>late</b>. / I've been busy <b>lately</b>.`, { en: `late = after the expected time; lately = recently`, ja: `late＝遅れて／lately＝最近` }],
      [`It's <b>near</b>. / I <b>nearly</b> missed it.`, { en: `near = close; nearly = almost`, ja: `near＝近く／nearly＝もう少しで` }]
    ] },
    { k: "h", en: "Scope: what exactly is modified?", ja: "作用域：何を修飾しているか" },
    { k: "p", en: `<x>Only I called Mei</x> = nobody else called her. <x>I called only Mei</x> = Mei was the only person I called. In careful writing, put <i>only</i> next to its focus. <x>Not all customers agreed</x> = some did not. <i>Almost everyone</i> is not the same as <i>everyone almost</i>.`,
      ja: `<x>Only I called Mei.</x>＝電話したのは私だけ。<x>I called only Mei.</x>＝電話した相手は Mei だけ。きちんとした文では only を修飾する語の隣に置きましょう。<x>Not all customers agreed.</x>＝全員が賛成したわけではない（部分否定）。almost everyone（ほとんど全員）と everyone almost は意味が違います。` },
    { k: "watch", en: `<i>Too</i> = more than suitable: <x>too expensive to buy</x>. <i>Very</i> = a high degree: <x>very expensive</x>. <i>Enough</i> follows adjectives and adverbs (<x>clear enough</x>) but comes before nouns (<x>enough time</x>).`,
      ja: `<i>too</i>＝適切な程度を超えて（<x>too expensive to buy</x>＝高すぎて買えない）。<i>very</i>＝とても（<x>very expensive</x>）。<i>enough</i> は形容詞・副詞の後（<x>clear enough</x>）、名詞の前（<x>enough time</x>）に置きます。` },
    { k: "tip", en: `Japanese learners often write <s>I like very much English.</s> Keep the object next to its verb: <x>I like English very much.</x> Likewise <x>I can speak English well</x>, not <s>I can speak well English</s>.`,
      ja: `「英語がとても好きです」を <s>I like very much English.</s> としがちですが、動詞と目的語の間に副詞は入れません：<x>I like English very much.</x> 同様に、<s>I can speak well English.</s> ではなく <x>I can speak English well.</x> です。` }
  ],
  q: [
    { q: { en: `Which is correct?`, ja: `正しいのはどれ？` }, o: [`I like very much English.`, `I like English very much.`, `I very much English like.`], a: 1,
      e: { en: `Don't put the adverb between the verb and its object.`, ja: `動詞と目的語の間に副詞を入れません。` } },
    { q: `She ___ late for work.`, o: [`is always`, `always is`], a: 0,
      e: { en: `Frequency adverbs follow main <i>be</i>.`, ja: `頻度の副詞は be動詞の後に置きます。` } },
    { q: `I ___ coffee in the morning.`, o: [`drink usually`, `usually drink`], a: 1,
      e: { en: `Frequency adverbs go before a main verb.`, ja: `頻度の副詞は一般動詞の前に置きます。` } },
    { q: `I ___ to Hokkaido.`, o: [`have never been`, `never have been`, `have been never`], a: 0,
      e: { en: `Put the frequency adverb after the first auxiliary: <i>have never been</i>.`, ja: `頻度の副詞は最初の助動詞の後に置きます（have never been）。` } },
    { q: `He studied ___ for the exam.`, h: { en: `with a lot of effort`, ja: `一生懸命に` }, o: [`hard`, `hardly`], a: 0,
      e: { en: `<i>Hard</i> = with effort; <i>hardly</i> = almost not.`, ja: `hard＝熱心に、hardly＝ほとんど〜ないです。` } },
    { q: `I've been very busy ___.`, h: { en: `recently`, ja: `最近` }, o: [`late`, `lately`], a: 1,
      e: { en: `<i>Lately</i> = recently.`, ja: `lately＝最近です。` } },
    { q: `She speaks English ___.`, o: [`good`, `well`], a: 1,
      e: { en: `To describe how she speaks, use the adverb <i>well</i>.`, ja: `話し方を表すので副詞の well です。` } },
    { q: { en: `Which sentence means that Mei was the only person I called?`, ja: `「電話した相手は Mei だけ」という意味の文は？` }, o: [`Only I called Mei.`, `I called only Mei.`], a: 1,
      e: { en: `<i>Only</i> goes next to its focus, <i>Mei</i>.`, ja: `only は修飾する Mei の隣に置きます。` } },
    { q: `This bag is ___ expensive to buy.`, h: { en: `I can't buy it.`, ja: `買えない。` }, o: [`very`, `too`], a: 1,
      e: { en: `<i>Too</i> + adjective + to-infinitive = so much that it isn't possible.`, ja: `too＋形容詞＋to不定詞で「〜すぎて…できない」です。` } },
    { w: [`We`, `worked`, `quietly`, `at`, `home`, `yesterday.`], i: [`We worked quietly at home yesterday.`, `We quietly worked at home yesterday.`],
      e: { en: `At the end, the usual order is manner → place → time. A manner adverb can also go before the verb: <i>We quietly worked…</i>`, ja: `文末では 様態 → 場所 → 時 の順が普通です。様態の副詞は動詞の前にも置けます（We quietly worked…）。` } }
  ]
});

GH.topic({
  id: "prep-place", ch: "nouns", p: 30,
  t: { en: "Prepositions: place and movement", ja: "前置詞：場所と移動" },
  d: { en: "In, on, at; above/below, over/under, between/among; transport; and movement words like into, across, through.", ja: "in・on・at、above/below・over/under・between/among、乗り物、into・across・through など移動を表す語" },
  body: [
    { k: "core", en: `A preposition relates its complement to something else: <x>at the station</x>, <x>with me</x>, <x>after checking</x>. Prepositions are full of fixed patterns, so literal translation is unreliable.`,
      ja: `前置詞は、後ろの語句と他のものとの関係を表します（<x>at the station</x>、<x>with me</x>、<x>after checking</x>）。決まった組み合わせが多いので、直訳は当てになりません。` },
    { k: "table", head: [{ en: "Preposition", ja: "前置詞" }, { en: "Basic picture of space", ja: "空間のとらえ方" }, "@example"], rows: [
      [`<b>in</b>`, { en: "inside an area or container", ja: "空間・容器の中" }, `<x>in the room</x>; <x>in Japan</x>; <x>in a box</x>`],
      [`<b>on</b>`, { en: "on a surface or line; some transport", ja: "面・線の上／一部の乗り物" }, `<x>on the table</x>; <x>on the coast</x>; <x>on a train</x>`],
      [`<b>at</b>`, { en: "a point, venue, or activity", ja: "地点・施設・活動の場" }, `<x>at the door</x>; <x>at work</x>; <x>at the station</x>`],
      [`<b>above / below</b>`, { en: "higher / lower, no contact needed", ja: "上方・下方（接触なし）" }, `<x>a shelf above the desk</x>`],
      [`<b>over / under</b>`, { en: "directly higher / lower; sometimes covering", ja: "真上・真下／覆って" }, `<x>a blanket over the bed</x>`],
      [`<b>between / among</b>`, { en: "separate items / within a group", ja: "個々の間／集団の中" }, `<x>between A and B</x>; <x>among friends</x>`]
    ] },
    { k: "pic", art: "place", t: { en: "The three basic pictures", ja: "基本の3つのイメージ" }, items: [
      [`in`, { en: "inside a space or container", ja: "空間・容器の中" }, `in the box · in Japan`],
      [`on`, { en: "touching a surface or line", ja: "面・線に接して" }, `on the table · on the train`],
      [`at`, { en: "at a point or place of activity", ja: "地点・活動の場所" }, `at the door · at work`]
    ] },
    { k: "h", en: "In, at and on can describe the same place", ja: "同じ場所でも in・at・on を使い分ける" },
    { k: "p", en: `<x>at the station</x> treats it as a meeting point; <x>in the station</x> means inside the building; <x>on the platform</x> means on its surface. <x>at school</x> often means attending lessons; <x>in the school</x> is the building.`,
      ja: `<x>at the station</x> は待ち合わせなどの「地点」、<x>in the station</x> は駅の建物の「中」、<x>on the platform</x> はホームの「上」です。<x>at school</x> は「学校で（授業に出て）」、<x>in the school</x> は「校舎の中」です。` },
    { k: "p", en: `Transport: <x>on a bus / train / plane</x>, but <x>in a car / taxi</x>. Use <x>by bus / train / car</x> for the method, with no article — but <x>on foot</x>, not <s>by foot</s>. <x>get on/off a bus</x>; <x>get in/out of a car</x>.`,
      ja: `乗り物：<x>on a bus / train / plane</x>、ただし <x>in a car / taxi</x>。手段は <x>by bus / train / car</x>（無冠詞）、ただし徒歩は <x>on foot</x>（<s>by foot</s> は不可）。<x>get on/off a bus</x>、<x>get in/out of a car</x>。` },
    { k: "h", en: "Movement and direction", ja: "移動と方向" },
    { k: "p", en: `<i>To</i> = destination (<x>go to Osaka</x>). <i>Into / out of</i> = crossing into or out of an inside space (<x>walk into the room</x>). <i>Onto / off</i> = to or from a surface (<x>jump onto the stage</x>). <i>Across</i> = from one side to the other; <i>through</i> = in one end and out the other; <i>along</i> = following a line; <i>past</i> = beyond a point. <i>Toward(s)</i> gives a direction without promising arrival.`,
      ja: `<i>to</i>＝目的地（<x>go to Osaka</x>）。<i>into / out of</i>＝中へ／中から（<x>walk into the room</x>）。<i>onto / off</i>＝面の上へ／上から（<x>jump onto the stage</x>）。<i>across</i>＝横切って、<i>through</i>＝通り抜けて、<i>along</i>＝〜に沿って、<i>past</i>＝〜を通り過ぎて。<i>toward(s)</i> は方向だけを示し、到着は含みません。` },
    { k: "p", en: `<x>arrive at</x> a point or venue; <x>arrive in</x> a city or country; <i>reach</i> takes a direct object: <x>reach Osaka</x>. <x>go home</x>, <x>arrive home</x>, <x>come here</x> take no <i>to</i>.`,
      ja: `<x>arrive at</x>＋地点・施設、<x>arrive in</x>＋都市・国。<i>reach</i> は前置詞なしで目的語をとります（<x>reach Osaka</x>）。<x>go home</x>、<x>arrive home</x>、<x>come here</x> には to を付けません。` },
    { k: "p", en: `<i>Between</i> is not limited to two: <x>talks between three companies</x> treats them as separate participants. <i>Beside</i> = next to; <i>besides</i> = in addition to. <i>Opposite</i> = facing across; <i>in front of</i> = ahead of.`,
      ja: `<i>between</i> は2つに限りません（<x>talks between three companies</x>＝個々の参加者の間）。<i>beside</i>＝〜のそばに、<i>besides</i>＝〜に加えて。<i>opposite</i>＝向かい側に、<i>in front of</i>＝〜の前に。` },
    { k: "watch", en: `Preposition <i>to</i> takes -ing: <x>I look forward to meeting you.</x> Infinitive <i>to</i> takes V1: <x>I want to meet you.</x> They look identical but do different jobs.`,
      ja: `前置詞の to の後は -ing（<x>I look forward to meeting you.</x>）、不定詞の to の後は原形（<x>I want to meet you.</x>）。見た目は同じでも働きが違います。` },
    { k: "tip", en: `Japanese に covers <i>in, on, at</i> and <i>to</i> (東京に住む／机の上に置く／駅に着く／学校に行く). Choose by the picture: container → <i>in</i>; surface → <i>on</i>; point → <i>at</i>; destination → <i>to</i>. And 家に帰る is <x>go home</x>, with no <i>to</i>.`,
      ja: `日本語の「に」は in・on・at・to のすべてに当たります（東京に住む／机の上に置く／駅に着く／学校に行く）。イメージで選びましょう：容器の中 → in、面の上 → on、地点 → at、目的地 → to。「家に帰る」は <x>go home</x>（to は付けない）です。` }
  ],
  q: [
    { q: `I'll meet you ___ the station at six.`, h: { en: `as a meeting point`, ja: `待ち合わせ場所として` }, o: [`in`, `on`, `at`], a: 2,
      e: { en: `A meeting point → <i>at</i>.`, ja: `待ち合わせの地点なので at です。` } },
    { q: `My keys are ___ the table.`, o: [`in`, `on`, `at`], a: 1,
      e: { en: `On a surface → <i>on</i>.`, ja: `面の上なので on です。` } },
    { q: `She lives ___ Japan.`, o: [`in`, `on`, `at`], a: 0,
      e: { en: `Countries and cities → <i>in</i>.`, ja: `国・都市には in を使います。` } },
    { q: `I usually go to work ___ foot.`, o: [`by`, `on`, `in`], a: 1,
      e: { en: `<i>On foot</i>, not <i>by foot</i>.`, ja: `徒歩は on foot です。` } },
    { q: `We got ___ the taxi outside the hotel.`, o: [`on`, `into`, `at`], a: 1,
      e: { en: `Cars and taxis: <i>get in/into</i>. Buses and trains: <i>get on</i>.`, ja: `車・タクシーは get in/into、バス・電車は get on です。` } },
    { q: `The train arrived ___ Osaka at noon.`, o: [`to`, `in`, `at`], a: 1,
      e: { en: `<i>Arrive in</i> + a city.`, ja: `都市には arrive in を使います。` } },
    { q: `What time did you get ___?`, o: [`to home`, `home`, `at home`], a: 1,
      e: { en: `<i>Home</i> takes no <i>to</i> after verbs of motion.`, ja: `移動を表す動詞の後の home に to は付けません。` } },
    { q: `She walked ___ the room and sat down.`, o: [`into`, `onto`, `through`], a: 0,
      e: { en: `Crossing into an inside space → <i>into</i>.`, ja: `部屋の中へ入るので into です。` } },
    { q: `We walked ___ the bridge to the other side.`, o: [`across`, `along`, `into`], a: 0,
      e: { en: `From one side to the other → <i>across</i>.`, ja: `こちら側から向こう側へ → across です。` } },
    { q: `I look forward to ___ you next week.`, o: [`see`, `seeing`, `saw`], a: 1,
      e: { en: `Here <i>to</i> is a preposition, so use -ing.`, ja: `この to は前置詞なので -ing 形です。` } }
  ]
});

GH.topic({
  id: "prep-time", ch: "nouns", p: 31,
  t: { en: "Prepositions: time and word partners", ja: "前置詞：時とコロケーション" },
  d: { en: "At/on/in for time; for, since, during, by, until; and prepositions that belong to particular words.", ja: "時を表す at・on・in、for・since・during・by・until、特定の語と結びつく前置詞" },
  body: [
    { k: "table", head: ["@pattern", { en: "Use", ja: "用法" }, "@example"], rows: [
      [`<b>at</b>`, { en: "clock times; certain fixed times", ja: "時刻・決まった時" }, `<x>at 8:30</x>; <x>at noon</x>; <x>at night</x>`],
      [`<b>on</b>`, { en: "days, dates, specific day-parts", ja: "曜日・日付・特定の日の一部" }, `<x>on Monday</x>; <x>on 6 December</x>; <x>on Friday morning</x>`],
      [`<b>in</b>`, { en: "months, years, seasons, general day-parts", ja: "月・年・季節・一日の時間帯" }, `<x>in June</x>; <x>in 2026</x>; <x>in winter</x>; <x>in the morning</x>`],
      [`<b>for</b>`, { en: "duration", ja: "期間" }, `<x>for two hours</x>; <x>for years</x>`],
      [`<b>since</b>`, { en: "starting point", ja: "起点" }, `<x>since Monday</x>; <x>since I moved</x>`],
      [`<b>during</b>`, { en: "within a period or event", ja: "期間・出来事の間に" }, `<x>during the meeting</x>; <x>during the summer</x>`],
      [`<b>by</b>`, { en: "no later than a deadline", ja: "期限（〜までに）" }, `<x>Finish by Friday.</x>`],
      [`<b>until / till</b>`, { en: "continuing up to an endpoint", ja: "継続（〜までずっと）" }, `<x>Stay until Friday.</x>`]
    ] },
    { k: "pic", art: "time", t: { en: "at · on · in: from a point to a long period", ja: "at・on・in：点から長い期間へ" }, items: [
      [`in`, { en: "months, years, seasons, parts of the day", ja: "月・年・季節・一日の時間帯" }, `in June · in 2026 · in winter · in the morning`],
      [`on`, { en: "days and dates", ja: "曜日・日付" }, `on Monday · on 6 December · on Friday morning`],
      [`at`, { en: "clock times and exact moments", ja: "時刻・ある瞬間" }, `at 8:30 · at noon · at night`]
    ], n: { en: `The wider the period, the wider the band: <i>in</i> for long periods, <i>on</i> for single days, <i>at</i> for points in time.`, ja: `期間が長いほど帯が広くなります。長い期間は in、1日単位は on、時点は at。` } },
    { k: "h", en: "Important contrasts", ja: "重要な違い" },
    { k: "ex", items: [
      [`I'll call you <b>in</b> two hours.`, { en: `two hours from now`, ja: `今から2時間後に` }],
      [`We talked <b>for</b> two hours.`, { en: `duration`, ja: `2時間（期間）` }],
      [`Please reply <b>within</b> two hours.`, { en: `before that time runs out`, ja: `2時間以内に` }],
      [`I called two hours <b>ago</b>.`, { en: `counting back from now; used with past simple`, ja: `今から2時間前に（過去形と使う）` }]
    ] },
    { k: "p", en: `<i>During</i> + noun (<x>during the meeting</x>); <i>while</i> + clause (<x>while we were meeting</x>). <i>By Friday</i> = Friday is the latest time; <i>until Friday</i> = something continues up to Friday. <x>I won't finish until Friday</x> = I'll finish on Friday, not before.`,
      ja: `<i>during</i>＋名詞（<x>during the meeting</x>）、<i>while</i>＋節（<x>while we were meeting</x>）。<i>by Friday</i>＝金曜日までに（期限）、<i>until Friday</i>＝金曜日までずっと（継続）。<x>I won't finish until Friday.</x>＝金曜日にならないと終わらない。` },
    { k: "tl", t: { en: "by and until on a timeline", ja: "by と until をタイムラインで見る" }, rows: [
      { l: { en: "by = deadline", ja: "by＝期限" }, s: `Please send the report by Friday.`, m: [["ref", 0.62, { en: "Friday", ja: "金曜日" }], ["span", 0, 0.62, { en: "any time before", ja: "それまでのいつか" }], ["o", 0.35, { en: "send", ja: "送る" }]],
        n: { en: "One action, done no later than Friday.", ja: "1回の行動を、金曜日までに済ませる。" } },
      { l: { en: "until = continuing", ja: "until＝継続" }, s: `I'll stay here until Friday.`, m: [["ref", 0.62, { en: "Friday", ja: "金曜日" }], ["bar", 0, 0.62, { en: "stay", ja: "滞在" }]],
        n: { en: "A situation that keeps going up to Friday.", ja: "金曜日までずっと続く状況。" } }
    ] },
    { k: "p", en: `<i>On time</i> = at the scheduled time; <i>in time</i> = early enough. <i>At the end of the lesson</i> = at that point; <i>in the end</i> = finally. British <x>at the weekend</x> and American <x>on the weekend</x> are both standard.`,
      ja: `<i>on time</i>＝時間どおりに、<i>in time</i>＝間に合って。<i>at the end of the lesson</i>＝授業の終わりに、<i>in the end</i>＝結局。イギリスの <x>at the weekend</x> とアメリカの <x>on the weekend</x> はどちらも標準です。` },
    { k: "p", en: `No preposition before <i>this, next, last, every</i>: <x>next Monday</x>, <x>last year</x>, <x>this morning</x>, <x>every day</x>. <i>Today, tomorrow, yesterday</i> also stand alone.`,
      ja: `<i>this, next, last, every</i> の前には前置詞を付けません（<x>next Monday</x>、<x>last year</x>、<x>this morning</x>、<x>every day</x>）。<i>today, tomorrow, yesterday</i> も前置詞なしで使います。` },
    { k: "h", en: "Dependent prepositions: learn the whole pattern", ja: "決まった前置詞はセットで覚える" },
    { k: "table", head: [{ en: "Word family", ja: "品詞" }, { en: "Common combinations", ja: "よく使う組み合わせ" }], rows: [
      [{ en: "Verbs", ja: "動詞" }, `<x>depend on</x>; <x>listen to</x>; <x>wait for</x>; <x>belong to</x>; <x>apologize for</x>; <x>agree with</x> someone / <x>about</x> something`],
      [{ en: "Adjectives", ja: "形容詞" }, `<x>good at</x>; <x>interested in</x>; <x>worried about</x>; <x>responsible for</x>; <x>similar to</x>; <x>different from</x>`],
      [{ en: "Nouns", ja: "名詞" }, `<x>reason for</x>; <x>solution to</x>; <x>increase in</x>; <x>access to</x>; <x>difference between</x>`]
    ] },
    { k: "p", en: `Some verbs take no preposition: <x>discuss the problem</x> (not <s>discuss about</s>), <x>enter the room</x> (not <s>enter to</s>), <x>contact me</x> (not <s>contact to me</s>). Their nouns differ: <x>a discussion about</x>, <x>make contact with</x>.`,
      ja: `前置詞をとらない動詞もあります：<x>discuss the problem</x>（<s>discuss about</s> は不可）、<x>enter the room</x>（<s>enter to</s> は不可）、<x>contact me</x>（<s>contact to me</s> は不可）。ただし名詞形では <x>a discussion about</x>、<x>make contact with</x> となります。` },
    { k: "watch", en: `A preposition at the end is natural English: <x>Who are you talking to?</x> <x>This is the colleague I work with.</x> Formal <i>To whom…?</i> exists, but final prepositions are not wrong.`,
      ja: `前置詞で文を終えるのは自然な英語です：<x>Who are you talking to?</x>／<x>This is the colleague I work with.</x> 堅い <i>To whom…?</i> もありますが、文末の前置詞は誤りではありません。` },
    { k: "tip", en: `〜について話し合う tempts learners to say <s>discuss about</s>, and 部屋に入る tempts <s>enter into the room</s>. <i>Discuss, enter, contact, marry</i> and <i>reach</i> take their object directly.`,
      ja: `「〜について話し合う」から <s>discuss about</s>、「部屋に入る」から <s>enter into the room</s> としがちですが、<i>discuss, enter, contact, marry, reach</i> は前置詞なしで直接目的語をとります。` }
  ],
  q: [
    { q: `The meeting starts ___ 9:30.`, o: [`in`, `on`, `at`], a: 2,
      e: { en: `Clock time → <i>at</i>.`, ja: `時刻には at を使います。` } },
    { q: `I was born ___ 2001.`, o: [`in`, `on`, `at`], a: 0,
      e: { en: `Years → <i>in</i>.`, ja: `年には in を使います。` } },
    { q: `See you ___ Friday morning.`, o: [`in`, `on`, `at`], a: 1,
      e: { en: `A specific day-part → <i>on</i>.`, ja: `特定の日の時間帯には on を使います。` } },
    { q: `Please send the report ___ Friday.`, h: { en: `Friday is the deadline.`, ja: `金曜日が締め切りです。` }, o: [`by`, `until`], a: 0,
      e: { en: `A deadline → <i>by</i>.`, ja: `期限なので by です。` } },
    { q: `I'll stay here ___ Friday.`, h: { en: `You will keep staying up to Friday.`, ja: `金曜日までずっといる。` }, o: [`by`, `until`], a: 1,
      e: { en: `A continuing situation → <i>until</i>.`, ja: `継続なので until です。` } },
    { q: `We talked ___ two hours.`, o: [`for`, `since`, `during`], a: 0,
      e: { en: `Duration → <i>for</i>.`, ja: `期間なので for です。` } },
    { q: `I've lived here ___ 2020.`, o: [`for`, `since`, `from`], a: 1,
      e: { en: `A starting point → <i>since</i>.`, ja: `起点なので since です。` } },
    { q: `Someone's phone rang ___ the meeting.`, o: [`during`, `while`, `for`], a: 0,
      e: { en: `<i>During</i> + noun; <i>while</i> would need a clause.`, ja: `during＋名詞です。while なら節が必要です。` } },
    { q: `Let's discuss ___ the plan tomorrow.`, o: [`about`, `—`, `on`], a: 1,
      e: { en: `<i>Discuss</i> takes a direct object.`, ja: `discuss は直接目的語をとります。` } },
    { q: `I'll see you ___.`, o: [`on next Monday`, `next Monday`, `in next Monday`], a: 1,
      e: { en: `No preposition before <i>next</i>.`, ja: `next の前に前置詞は付けません。` } }
  ]
});
