// N5 Grammar organized by 10 Lessons
// Each lesson contains grammar patterns with examples

const GRAMMAR_LESSONS = [
{lesson: 1, title: 'Particles (助詞) - Part 1', patterns: [
{pattern: '〜は〜です', meaning: 'Topic marker', formula: '[Topic] は [Description] です。', explanation: 'The particle は (wa) marks the topic. It tells what the sentence is about. Note: written は but pronounced wa.', examples: [
{jp: 'わたしは がくせい です。', en: 'I am a student.', bn: 'আমি একজন শিক্ষার্থী।'},
{jp: 'これは ほん です。', en: 'This is a book.', bn: 'এটি একটি বই।'},
{jp: 'やまださんは にほんじん です。', en: 'Mr. Yamada is Japanese.', bn: 'ইয়ামাদা সাহেব জাপানি।'},
{jp: 'きょうは もくようび です。', en: 'Today is Thursday.', bn: 'আজ বৃহস্পতিবার।'}
]},
{pattern: '〜が〜', meaning: 'Subject marker - emphasizes WHO', formula: '[Subject] が [Verb / Adjective]。', explanation: 'The particle が (ga) marks the grammatical subject. Use when identifying something new, asking questions, or with verbs like すき (like), わかる (understand).', examples: [
{jp: 'だれが きましたか。', en: 'Who came?', bn: 'কে এসেছে?'},
{jp: 'ねこが います。', en: 'There is a cat.', bn: 'একটি বিড়াল আছে।'},
{jp: 'にほんごが すきです。', en: 'I like Japanese.', bn: 'আমি জাপানি ভালোবাসি।'},
{jp: 'わたしが やります。', en: 'I will do it.', bn: 'আমি এটি করব।'}
]},
{pattern: '〜を〜', meaning: 'Object marker', formula: '[Subject] は [Object] を [Verb]。', explanation: 'The particle を (wo) marks the direct object of the verb — the thing that the action is performed on.', examples: [
{jp: 'ごはんを たべます。', en: 'I eat rice.', bn: 'আমি ভাত খাই।'},
{jp: 'みずを のみます。', en: 'I drink water.', bn: 'আমি পানি পান করি।'},
{jp: 'くるまを うんてん します。', en: 'I drive a car.', bn: 'আমি গাড়ি চালাই।'},
{jp: 'えいがを みます。', en: 'I watch a movie.', bn: 'আমি সিনেমা দেখি।'}
]},
{pattern: '〜に〜', meaning: 'Location / Target / Time', formula: '[Location / Time / Target] に [Action]。', explanation: 'The particle に (ni) marks the place where something is, the time when something happens, or the target/destination of an action.', examples: [
{jp: 'がっこうに いきます。', en: 'I go to school.', bn: 'আমি স্কুলে যাই।'},
{jp: 'せんせいに ききます。', en: 'I ask the teacher.', bn: 'আমি শিক্ষককে জিজ্ঞেস করি।'},
{jp: 'あした に あいます。', en: 'We meet tomorrow.', bn: 'আমরা আগামীকাল দেখা করি।'},
{jp: 'きょう に しょくじ します。', en: 'We eat today.', bn: 'আমরা আজ খাই।'}
]}
]},
{lesson: 2, title: 'Particles (助詞) - Part 2', patterns: [
{pattern: '〜で〜', meaning: 'Location (action) / Means / Material', formula: '[Location] で [Action]。', explanation: 'The particle で (de) marks the location where an action takes place, or the means/method by which something is done. Different from に which marks static location.', examples: [
{jp: 'としょかんで べんきょう します。', en: 'I study at the library.', bn: 'আমি লাইব্রেরিতে পড়াশোনা করি।'},
{jp: 'ぺんで かきます。', en: 'I write with a pen.', bn: 'আমি কলম দিয়ে লিখি।'},
{jp: 'あした で いい です。', en: 'Tomorrow is fine.', bn: 'আগামীকাল ঠিক আছে।'},
{jp: 'でんしゃで いきます。', en: 'I go by train.', bn: 'আমি ট্রেনে যাই।'}
]},
{pattern: '〜から〜', meaning: 'From / Because / Source', formula: '[Source / Reason] から [Action]。', explanation: 'The particle から (kara) marks the starting point, source, or reason. Can mean "from" for locations/times, or "because" for reasons.', examples: [
{jp: 'とうきょうから きました。', en: 'I came from Tokyo.', bn: 'আমি টোকিও থেকে এসেছি।'},
{jp: 'びょうきだから やすみます。', en: 'Because I am sick, I rest.', bn: 'অসুস্থ বলে আমি বিশ্রাম নিই।'},
{jp: '9じから 5じまで はたらきます。', en: 'I work from 9 to 5.', bn: 'আমি সকাল ৯টা থেকে বিকাল ৫টা পর্যন্ত কাজ করি।'},
{jp: 'ちちから きいた。', en: 'I heard it from father.', bn: 'আমি বাবার কাছ থেকে শুনেছি।'}
]},
{pattern: '〜まで〜', meaning: 'Until / To / Up to', formula: '[Destination / Time] まで [Action]。', explanation: 'The particle まで (made) marks the end point, destination, or time limit. Often used with から for range.', examples: [
{jp: 'がっこうまで あるきます。', en: 'I walk to school.', bn: 'আমি স্কুল পর্যন্ত হাঁটি।'},
{jp: 'ひるまで ねます。', en: 'I sleep until noon.', bn: 'আমি দুপুর পর্যন্ত ঘুমাই।'},
{jp: '5ねんまで にほん に います。', en: 'I will be in Japan for 5 years.', bn: 'আমি ৫ বছর জাপানে থাকব।'},
{jp: 'りょうり まで します。', en: 'I will do cooking.', bn: 'আমি রান্না করব।'}
]},
{pattern: '〜も〜', meaning: 'Also / Too / Even', formula: '[Item] も [Action]。', explanation: 'The particle も (mo) means "also", "too", or "even". It adds additional items to what was already mentioned.', examples: [
{jp: 'わたしも いきます。', en: 'I will go too.', bn: 'আমিও যাব।'},
{jp: 'ねこも ねこも います。', en: 'We have cats too.', bn: 'আমাদের বিড়ালও আছে।'},
{jp: 'ぎゅうにゅうも のみます。', en: 'I also drink milk.', bn: 'আমি দুধও পান করি।'},
{jp: 'きむちも たべます。', en: 'I eat kimchi too.', bn: 'আমি কিমচিও খাই।'}
]}
]},
{lesson: 3, title: 'Basic Sentence Patterns', patterns: [
{pattern: '〜です / 〜ます', meaning: 'Polite present form / To be', formula: '[Noun] です / [Verb] ます。', explanation: 'The most basic polite sentence ending. です ends nouns/adjectives, ます ends verbs. Both are formal/polite.', examples: [
{jp: 'ほん です。', en: 'It is a book.', bn: 'এটি একটি বই।'},
{jp: 'たべます。', en: 'I eat.', bn: 'আমি খাই।'},
{jp: 'がくせい です。', en: 'I am a student.', bn: 'আমি একজন শিক্ষার্থী।'},
{jp: 'きょうは あたたかい です。', en: 'Today is warm.', bn: 'আজ উষ্ণ আছে।'}
]},
{pattern: '〜ません / 〜ません', meaning: 'Negative polite form', formula: '[Verb stem] ません。', explanation: 'To make a verb negative in polite form, remove ます and add ません. Use for negating actions.', examples: [
{jp: 'いきません。', en: 'I do not go.', bn: 'আমি যাই না।'},
{jp: 'たべません。', en: 'I do not eat.', bn: 'আমি খাই না।'},
{jp: 'のみません。', en: 'I do not drink.', bn: 'আমি পান করি না।'},
{jp: 'わかりません。', en: 'I do not understand.', bn: 'আমি বুঝি না।'}
]},
{pattern: '〜ました / 〜ません', meaning: 'Past polite form', formula: '[Verb stem] ました / [Verb stem] ませんでした。', explanation: 'Past tense in polite form. ました = did, ませんでした = did not. Used for completed actions.', examples: [
{jp: 'きょう は いきました。', en: 'I went today.', bn: 'আমি আজ গিয়েছিলাম।'},
{jp: 'たべました。', en: 'I ate.', bn: 'আমি খেয়েছিলাম।'},
{jp: 'いきませんでした。', en: 'I did not go.', bn: 'আমি যাইনি।'},
{jp: 'やりました。', en: 'I did it.', bn: 'আমি এটি করেছিলাম।'}
]},
{pattern: '〜ですか / 〜ますか', meaning: 'Question form (polite)', formula: '[Noun] ですか / [Verb] ますか。', explanation: 'Questions in polite form. Simply add か at the end. Intonation rises at the end.', examples: [
{jp: 'あなた は がくせい ですか。', en: 'Are you a student?', bn: 'আপনি কি শিক্ষার্থী?'},
{jp: 'なに を たべますか。', en: 'What do you eat?', bn: 'আপনি কি খান?'},
{jp: 'どこに いきますか。', en: 'Where are you going?', bn: 'আপনি কোথায় যাচ্ছেন?'},
{jp: 'いくつですか。', en: 'How old are you?', bn: 'আপনার বয়স কত?'}
]}
]},
{lesson: 4, title: 'Adjectives & Descriptions', patterns: [
{pattern: 'い-adjective (い形)', meaning: 'Adjectives ending in い', formula: '[い-adjective] [Noun]', explanation: 'Most adjectives end in い. In present tense, just attach to noun. In past, change い to かった.', examples: [
{jp: 'おおきい ねこ です。', en: 'It is a big cat.', bn: 'এটি একটি বড় বিড়াল।'},
{jp: 'あたらしい ほん です。', en: 'It is a new book.', bn: 'এটি একটি নতুন বই।'},
{jp: 'むずかしい もんだい です。', en: 'It is a difficult problem.', bn: 'এটি একটি কঠিন সমস্যা।'},
{jp: 'やさしい せんせい です。', en: 'The teacher is kind.', bn: 'শিক্ষক দয়ালু।'}
]},
{pattern: 'な-adjective (な形)', meaning: 'Adjectives needing な', formula: '[な-adjective] な [Noun]', explanation: 'Some adjectives (often from Chinese origin) need な before the noun. Different from い-adjectives.', examples: [
{jp: 'きれい な はな です。', en: 'It is a beautiful flower.', bn: 'এটি একটি সুন্দর ফুল।'},
{jp: 'げんき な こども です。', en: 'The child is healthy/energetic.', bn: 'শিশু সুস্থ/প্রাণবন্ত।'},
{jp: 'しずか な へや です。', en: 'It is a quiet room.', bn: 'এটি একটি শান্ত ঘর।'},
{jp: 'ゆうめい な ひと です。', en: 'He is a famous person.', bn: 'তিনি একজন বিখ্যাত ব্যক্তি।'}
]},
{pattern: '〜いです / 〜いですか', meaning: 'い-adjective with です/question', formula: '[い-adjective] です / [い-adjective] ですか。', explanation: 'い-adjectives can stand alone with です. No need for separate です like な-adjectives.', examples: [
{jp: 'おいしい です。', en: 'It is delicious.', bn: 'এটি সুস্বাদু।'},
{jp: 'たかい ですか。', en: 'Is it expensive?', bn: 'এটি কি দামি?'},
{jp: 'あたたかい です。', en: 'It is warm.', bn: 'এটি উষ্ণ।'},
{jp: 'さむい ですか。', en: 'Is it cold?', bn: 'এটি কি ঠান্ডা?'}
]},
{pattern: '〜くないです (negative adjective)', meaning: 'Negative form of い-adjective', formula: '[い-adjective stem] + くないです。', explanation: 'To negate い-adjectives: change い to く and add ないです.', examples: [
{jp: 'おいしくないです。', en: 'It is not delicious.', bn: 'এটি সুস্বাদু নয়।'},
{jp: 'おおきくない です。', en: 'It is not big.', bn: 'এটি বড় নয়।'},
{jp: 'むずかしくない です。', en: 'It is not difficult.', bn: 'এটি কঠিন নয়।'},
{jp: 'あつくない です。', en: 'It is not hot.', bn: 'এটি গরম নয়।'}
]}
]},
{lesson: 5, title: 'Question Words (疑問詞)', patterns: [
{pattern: 'なに (何)', meaning: 'What', formula: 'なに は / なに を / なに ですか。', explanation: 'なに means "what". The particle after なに changes based on the type of object.', examples: [
{jp: 'これ は なに ですか。', en: 'What is this?', bn: 'এটি কি?'},
{jp: 'なに を たべますか。', en: 'What do you eat?', bn: 'আপনি কি খান?'},
{jp: 'なに が ほしい ですか。', en: 'What do you want?', bn: 'আপনি কি চান?'},
{jp: 'なに を やりますか。', en: 'What do you do?', bn: 'আপনি কি করেন?'}
]},
{pattern: 'だれ (誰)', meaning: 'Who', formula: 'だれ は / だれ が / だれ ですか。', explanation: 'だれ means "who". Ask about people and the role they play in the sentence.', examples: [
{jp: 'だれ が きましたか。', en: 'Who came?', bn: 'কে এসেছে?'},
{jp: 'これ は だれ の ほん ですか。', en: 'Whose book is this?', bn: 'এটি কার বই?'},
{jp: 'だれ が やりますか。', en: 'Who will do it?', bn: 'কে এটি করবে?'},
{jp: 'あなた は だれ ですか。', en: 'Who are you?', bn: 'আপনি কে?'}
]},
{pattern: 'どこ (何処)', meaning: 'Where', formula: 'どこ に / どこ で ですか。', explanation: 'どこ means "where". に = destination, で = location of action.', examples: [
{jp: 'がっこう は どこ ですか。', en: 'Where is the school?', bn: 'স্কুল কোথায়?'},
{jp: 'どこ に いきますか。', en: 'Where are you going?', bn: 'আপনি কোথায় যাচ্ছেন?'},
{jp: 'どこ で まちますか。', en: 'Where will we meet?', bn: 'আমরা কোথায় দেখা করব?'},
{jp: 'どこ から きましたか。', en: 'Where did you come from?', bn: 'আপনি কোথা থেকে এসেছেন?'}
]},
{pattern: 'いつ (何時)', meaning: 'When', formula: 'いつ ですか。', explanation: 'いつ means "when". Ask about the time of actions or events.', examples: [
{jp: 'しゅくだい は いつ までですか。', en: 'When is the homework due?', bn: 'বাড়ির কাজ কখন জমা দিতে হবে?'},
{jp: 'いつ いきますか。', en: 'When will you go?', bn: 'আপনি কখন যাবেন?'},
{jp: 'いつ あいますか。', en: 'When shall we meet?', bn: 'আমরা কখন দেখা করব?'},
{jp: 'いつ まで いますか。', en: 'Until when will you stay?', bn: 'আপনি কখন পর্যন্ত থাকবেন?'}
]}
]},
{lesson: 6, title: 'Common Verbs - Present & Past', patterns: [
{pattern: '〜ています (continuous)', meaning: 'Currently doing / Habitual action', formula: '[Verb te-form] + います。', explanation: 'Indicates ongoing action (right now) or habitual action (regularly). Very common in Japanese.', examples: [
{jp: 'テレビ を みています。', en: 'I am watching TV.', bn: 'আমি টেলিভিশন দেখছি।'},
{jp: 'ほん を よんでいます。', en: 'I am reading a book.', bn: 'আমি বই পড়ছি।'},
{jp: 'えいご を べんきょうしています。', en: 'I am studying English.', bn: 'আমি ইংরেজি পড়ছি।'},
{jp: 'あした いきます。', en: 'I go tomorrow (regularly).', bn: 'আমি আগামীকাল যাই (নিয়মিত)।'}
]},
{pattern: '〜たい (want to)', meaning: 'Want to do something', formula: '[Verb stem] + たいです。', explanation: 'Expresses desire to do something. Add たい to verb stem, then use like い-adjective.', examples: [
{jp: 'にほん に いきたい です。', en: 'I want to go to Japan.', bn: 'আমি জাপানে যেতে চাই।'},
{jp: 'たべたい です。', en: 'I want to eat.', bn: 'আমি খেতে চাই।'},
{jp: 'べんきょう したいです。', en: 'I want to study.', bn: 'আমি পড়তে চাই।'},
{jp: 'はなしたい ことが あります。', en: 'I have something I want to talk about.', bn: 'আমার বলার মতো কিছু আছে।'}
]},
{pattern: '〜ことができます (can/able)', meaning: 'Can do / Able to do', formula: '[Verb dictionary] ことが できます。', explanation: 'Expresses ability or capability. Means "can do" or "is able to do".', examples: [
{jp: 'にほんご が できます。', en: 'I can speak Japanese.', bn: 'আমি জাপানি বলতে পারি।'},
{jp: 'くるま を うんてん することが できます。', en: 'I can drive a car.', bn: 'আমি গাড়ি চালাতে পারি।'},
{jp: 'おおきな荷物 を もつ ことが できません。', en: 'I cannot carry heavy luggage.', bn: 'আমি ভারী লাগেজ বহন করতে পারি না।'},
{jp: 'えいご を はなす ことが できます。', en: 'I can speak English.', bn: 'আমি ইংরেজি বলতে পারি।'}
]},
{pattern: '〜なければなりません (must)', meaning: 'Must do / Have to', formula: '[Verb negative] なければなりません。', explanation: 'Expresses obligation or necessity. "Must do" or "have to do". Can be shortened to ～なくちゃ.', examples: [
{jp: 'べんきょう しなければなりません。', en: 'I must study.', bn: 'আমাকে অবশ্যই পড়তে হবে।'},
{jp: 'あした いかなければなりません。', en: 'I must go tomorrow.', bn: 'আমাকে আগামীকাল যেতে হবে।'},
{jp: 'まも う しなければなりません。', en: 'I must wait more.', bn: 'আমাকে আরও অপেক্ষা করতে হবে।'},
{jp: 'しゅくだい を だしなければなりません。', en: 'I must submit homework.', bn: 'আমাকে বাড়ির কাজ জমা দিতে হবে।'}
]}
]},
{lesson: 7, title: 'Comparisons & Conditionals', patterns: [
{pattern: '〜より〜のほうが〜です', meaning: 'Comparison - X is more than Y', formula: '[Item A] より [Item B] の ほうが [adjective] です。', explanation: 'Compares two things. "B is more [adjective] than A". Often used with adjectives.', examples: [
{jp: 'いぬ より ねこ の ほうが かわいい です。', en: 'Cats are cuter than dogs.', bn: 'কুকুরের চেয়ে বিড়াল আরও কিউট।'},
{jp: 'あき より なつ の ほうが あつい です。', en: 'Summer is hotter than autumn.', bn: 'শরতের চেয়ে গ্রীষ্ম আরও গরম।'},
{jp: 'とうきょう より おおさか の ほうが ちいさい です。', en: 'Osaka is smaller than Tokyo.', bn: 'টোকিওর চেয়ে ওসাকা আরও ছোট।'},
{jp: 'えいご より にほんご の ほうが むずかしい です。', en: 'Japanese is more difficult than English.', bn: 'ইংরেজির চেয়ে জাপানি আরও কঠিন।'}
]},
{pattern: '〜もし〜たら / 〜ば〜', meaning: 'If / Conditional', formula: 'もし [verb conditional] たら / [verb conditional] ば [result]。', explanation: 'Expresses conditional: "if...then". たら is more common in conversation.', examples: [
{jp: 'もし あした あめ だったら やめます。', en: 'If it rains tomorrow, we will cancel.', bn: 'যদি আগামীকাল বৃষ্টি হয়, আমরা বাতিল করব।'},
{jp: 'いい きょうしつ があれば いきたい です。', en: 'If there is a good class, I want to go.', bn: 'যদি ভালো ক্লাস থাকে, আমি যেতে চাই।'},
{jp: 'たいむ があったら がっこう に いきます。', en: 'If I have time, I will go to school.', bn: 'যদি সময় থাকে, আমি স্কুলে যাব।'},
{jp: 'けんき があれば かつ ことが できます。', en: 'If we have spirit, we can win.', bn: 'যদি আমাদের সাহস থাকে, আমরা জিততে পারি।'}
]},
{pattern: '〜でも (even if)', meaning: 'Even if / Even though', formula: '[Noun/Adjective] でも [result]。', explanation: 'Indicates something happens regardless: "even if", "no matter what". Shows contrast or persistence.', examples: [
{jp: 'あめ でも いきます。', en: 'Even if it rains, I will go.', bn: 'বৃষ্টি হলেও আমি যাব।'},
{jp: 'むずかしくても やります。', en: 'Even if it is difficult, I will do it.', bn: 'কঠিন হলেও আমি করব।'},
{jp: 'たかくても かいます。', en: 'Even if it is expensive, I will buy it.', bn: 'দামি হলেও আমি কিনব।'},
{jp: 'つかれていても べんきょう します。', en: 'Even if I am tired, I will study.', bn: 'ক্লান্ত হলেও আমি পড়ব।'}
]},
{pattern: '〜のに (despite / in order to)', meaning: 'Despite / Although / In order to', formula: '[Clause] のに [result]。', explanation: 'Shows contrast: "despite X, Y happened" or "in order to achieve X, do Y". Context determines meaning.', examples: [
{jp: 'べんきょう しているのに わかりません。', en: 'Despite studying, I do not understand.', bn: 'পড়লেও আমি বুঝি না।'},
{jp: 'あめ なのに いきました。', en: 'Although it was raining, I went.', bn: 'বৃষ্টি হচ্ছিল তবে আমি গেছিলাম।'},
{jp: 'げんき なのに やすみます。', en: 'Despite being healthy, he is resting.', bn: 'সুস্থ থাকলেও তিনি বিশ্রাম নিচ্ছেন।'},
{jp: 'とくい なのに うかりました。', en: 'Despite being good at it, I failed.', bn: 'ভালো হলেও আমি ব্যর্থ হয়েছি।'}
]}
]},
{lesson: 8, title: 'Time Expressions & Duration', patterns: [
{pattern: '〜ぐらい / 〜くらい (about)', meaning: 'Approximately / About', formula: '[Amount] ぐらい / くらい [Item]。', explanation: 'Indicates approximation. "About X amount" or "around". Both ぐらい and くらい are the same.', examples: [
{jp: '2じかん ぐらい べんきょう します。', en: 'I study for about 2 hours.', bn: 'আমি প্রায় ২ ঘণ্টা পড়ি।'},
{jp: '100えん くらい です。', en: 'It costs about 100 yen.', bn: 'এটি প্রায় ১০০ ইয়েন খরচ করে।'},
{jp: '30ぷん ぐらい ネットをします。', en: 'I use the internet for about 30 minutes.', bn: 'আমি প্রায় ৩০ মিনিট ইন্টারনেট ব্যবহার করি।'},
{jp: 'ごにん くらい います。', en: 'There are about 5 people.', bn: 'প্রায় ৫ জন মানুষ আছে।'}
]},
{pattern: '〜あいだ (during / for a period)', meaning: 'During / For a period / While', formula: '[Duration / Event] あいだ [Action]。', explanation: 'Indicates a time period during which something happens. "While X, Y happened" or "for the duration of X, Y".', examples: [
{jp: 'すうじゅっしゅかん あいだ せんせい にいました。', en: 'The teacher was here for several weeks.', bn: 'শিক্ষক কয়েক সপ্তাহ ধরে এখানে ছিলেন।'},
{jp: '15ねん あいだ にほん に います。', en: 'I have been in Japan for 15 years.', bn: 'আমি ১৫ বছর ধরে জাপানে আছি।'},
{jp: 'えいが を みている あいだに でんわが なりました。', en: 'While watching a movie, the phone rang.', bn: 'চলচ্চিত্র দেখার সময় ফোন বেজেছিল।'},
{jp: 'はなします あいだ きいてください。', en: 'Please listen while I am speaking.', bn: 'আমি কথা বলার সময় শুনুন।'}
]},
{pattern: '〜ばかり (just / only)', meaning: 'Just now / Only / About to', formula: '[Action] たばかり / [Item] ばかり [Action]。', explanation: 'Indicates something just happened, or limits to only that thing. Can mean "just did X" or "only X".', examples: [
{jp: 'さっき たべたばかり です。', en: 'I just ate a moment ago.', bn: 'আমি এইমাত্র খেয়েছি।'},
{jp: 'しょうがっこう に いったばかり です。', en: 'He just entered elementary school.', bn: 'তিনি এইমাত্র প্রাথমিক স্কুলে প্রবেश করেছেন।'},
{jp: 'ほん ばかり よんでいます。', en: 'I only read books.', bn: 'আমি শুধু বই পড়ি।'},
{jp: 'ぎゅうにゅう ばかり のみます。', en: 'I only drink milk.', bn: 'আমি শুধু দুধ পান করি।'}
]},
{pattern: '〜たばかり (just did)', meaning: 'Just finished / Just did', formula: '[Action past] たばかり [description]。', explanation: 'Specifically used for actions that just finished. "Just did X" with recent completion.', examples: [
{jp: 'いま たべたばかり です。', en: 'I just finished eating now.', bn: 'আমি এখনই খাওয়া শেষ করেছি।'},
{jp: 'せんしゅう からった わたしのくるま。', en: 'The car I just bought last week.', bn: 'গত সপ্তাহে আমি যে গাড়ি কিনেছি।'},
{jp: 'ほん を かった ばかり です।', en: 'I just bought the book.', bn: 'আমি এইমাত্র বই কিনেছি।'},
{jp: 'がっこう を でた ばかり です。', en: 'I just graduated from school.', bn: 'আমি এইমাত্র স্কুল থেকে গ্রাজুয়েট হয়েছি।'}
]}
]},
{lesson: 9, title: 'Expressions & Requests', patterns: [
{pattern: '〜ください (please)', meaning: 'Please do / Please give', formula: '[Verb te-form] ください / [Item] を ください।', explanation: 'Polite request form. "Please do X" or "Give me X please". Very common and polite.', examples: [
{jp: 'みず を ください।', en: 'Please give me water.', bn: 'আমাকে পানি দিন।'},
{jp: 'すわって ください।', en: 'Please sit down.', bn: 'দয়া করে বসুন।'},
{jp: 'ちょっと まって ください।', en: 'Please wait a moment.', bn: 'দয়া করে একটু অপেক্ষা করুন।'},
{jp: 'えいご で はなして ください।', en: 'Please speak in English.', bn: 'দয়া করে ইংরেজিতে কথা বলুন।'}
]},
{pattern: '〜てください (request to do)', meaning: 'Request / Please do', formula: '[Verb te-form] てください।', explanation: 'Polite request for someone to do something. More natural than ぜひ or imperative.', examples: [
{jp: 'これ を かって ください।', en: 'Please buy this.', bn: 'দয়া করে এটি কিনুন।'},
{jp: 'きょう しきょう を つけて ください।', en: 'Please turn on the light.', bn: 'দয়া করে আলো চালু করুন।'},
{jp: 'このしんぶん を よんで ください।', en: 'Please read this newspaper.', bn: 'দয়া করে এই সংবাদপত্র পড়ুন।'},
{jp: 'もう いっど いって ください।', en: 'Please say it one more time.', bn: 'দয়া করে এটি আরও একবার বলুন।'}
]},
{pattern: '〜ほうがいい (should / better)', meaning: 'Should / Better to / It is better', formula: '[Action] ほうが いい です।', explanation: 'Gives advice or suggestions. "It is better to..." or "You should...". Polite and helpful.', examples: [
{jp: 'もう すこし べんきょう したほうが いい です।', en: 'You should study a bit more.', bn: 'আপনি আরও একটু বেশি পড়বেন।'},
{jp: 'あした はやく ねたほうが いい です।', en: 'You should sleep early tomorrow.', bn: 'আগামীকাল আপনি তাড়াতাড়ি ঘুমাবেন।'},
{jp: 'ずっと あるいたほうが いい です።', en: 'It is better to walk the whole way.', bn: 'সম্পূর্ণ পথ হাঁটা ভালো।'},
{jp: 'ここ で まったほうが いい です।', en: 'You should wait here.', bn: 'আপনি এখানে অপেক্ষা করুন।'}
]},
{pattern: '〜ようです / 〜そうです (seems / looks)', meaning: 'Seems like / Appears to / Looks like', formula: '[Description] ようです / [Description] そうです।', explanation: 'ようです = seems based on observation. そうです = seems based on appearance or information heard.', examples: [
{jp: 'あした は あめ ようです।', en: 'It seems like it will rain tomorrow.', bn: 'আগামীকাল বৃষ্টি হবে বলে মনে হয়।'},
{jp: 'この りんご は おいしい そうです।', en: 'This apple looks delicious.', bn: 'এই আপেল সুস্বাদু দেখাচ্ছে।'},
{jp: 'かのじょ は ゆうめい ようです।', en: 'She seems to be famous.', bn: 'তিনি বিখ্যাত বলে মনে হয়।'},
{jp: 'あの ほん は むずかしい そうです।', en: 'That book looks difficult (by reputation).', bn: 'সেই বই কঠিন বলে শোনা যায়।'}
]}
]},
{lesson: 10, title: 'Advanced Patterns', patterns: [
{pattern: '〜に違いない (must be / must have)', meaning: 'Must be / Definitely', formula: '[Description] に ちがいない।', explanation: 'Strong conviction about something. "It must be X" or "X must have happened". Very certain.', examples: [
{jp: 'あれ は かれ に ちがいない।', en: 'That must be him.', bn: 'এটি অবশ্যই তিনি।'},
{jp: 'だれか が かぎ を とった に ちがいない।', en: 'Someone must have taken the key.', bn: 'কেউ চাবি নিয়েছে অবশ্যই।'},
{jp: 'さっき の おんな の ひと が おかあさん に ちがいない।', en: 'That woman must be his mother.', bn: 'সেই মহিলা অবশ্যই তার মা।'},
{jp: 'きっと あした も きます に ちがいない।', en: 'He will definitely come tomorrow too.', bn: 'তিনি আগামীকালও আসবেন অবশ্যই।'}
]},
{pattern: '〜ずに / 〜ないで (without)', meaning: 'Without doing / Instead of', formula: '[Verb negative] ずに / [Verb] ないで [result]।', explanation: 'Shows action done without doing something else. "Without X, Y" or "Instead of X, Y".', examples: [
{jp: 'べんきょう しないで あそびました।', en: 'Instead of studying, I played.', bn: 'পড়ার পরিবর্তে আমি খেলেছিলাম।'},
{jp: 'ねないで ずっと みていました।', en: 'I watched without sleeping / I stayed awake watching.', bn: 'না ঘুমিয়ে আমি সারারাত দেখেছিলাম।'},
{jp: 'ほん を よまないで テレビ を みました।', en: 'Instead of reading a book, I watched TV.', bn: 'বই পড়ার পরিবর্তে আমি টিভি দেখেছিলাম।'},
{jp: 'ふね に のらずに しんかんせん に のりました।', en: 'Instead of taking a ship, I took the bullet train.', bn: 'জাহাজের পরিবর্তে আমি বুলেট ট্রেনে উঠেছিলাম।'}
]},
{pattern: '〜だけ (only / just)', meaning: 'Only / Just / Merely', formula: '[Item / Amount] だけ [Action]।', explanation: 'Limits to only that thing. "Only X" or "Just X". Similar to ばかり but more straightforward.', examples: [
{jp: 'ほん だけ かいました।', en: 'I bought only books.', bn: 'আমি শুধু বই কিনেছিলাম।'},
{jp: '500えん だけ あります।', en: 'I only have 500 yen.', bn: 'আমার শুধু ৫০০ ইয়েন আছে।'},
{jp: 'あした だけ がんばります।', en: 'I will do my best just for tomorrow.', bn: 'আমি শুধু আগামীকাল চেষ্টা করব।'},
{jp: 'すうじゅっしゅ だけ かっこうに いきました।', en: 'I went to school for just a few weeks.', bn: 'আমি শুধু কয়েক সপ্তাহ স্কুলে গিয়েছিলাম।'}
]},
{pattern: '〜に決めました (decided)', meaning: 'Decided / Made up mind', formula: '[Item / Action] に きめました।', explanation: 'Shows a decision was made. "I decided on X" or "I decided to do X".', examples: [
{jp: 'にほん に りょこう に きめました।', en: 'I decided to travel to Japan.', bn: 'আমি জাপানে ভ্রমণ করার সিদ্ধান্ত নিয়েছি।'},
{jp: '青い シャツ に きめました।', en: 'I decided on the blue shirt.', bn: 'আমি নীল শার্ট বেছে নিয়েছি।'},
{jp: '毎日 べんきょう する に きめました।', en: 'I decided to study every day.', bn: 'আমি প্রতিদিন পড়ার সিদ্ধান্ত নিয়েছি।'},
{jp: '新しい しごと に きめました।', en: 'I decided on the new job.', bn: 'আমি নতুন কাজ বেছে নিয়েছি।'}
]}
]}
];
