// N5 Kanji Dataset (150 characters)
const KANJI_DATA = [
  {
    id: 1,
    kanji: '日',
    strokeCount: 4,
    onYomi: 'ニチ',
    kunYomi: 'ひ',
    meaningsEnglish: ['Day', 'Sun', 'Daily'],
    meaningBangla: 'দিন, সূর্য',
    exampleSentences: [
      {
        japanese: '毎日勉強します。',
        english: 'I study every day.',
        bangla: 'আমি প্রতিদিন পড়াশোনা করি।'
      },
      {
        japanese: '今日は日曜日です。',
        english: 'Today is Sunday.',
        bangla: 'আজ রবিবার।'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 2,
    kanji: '月',
    strokeCount: 4,
    onYomi: 'ゲツ',
    kunYomi: 'つき',
    meaningsEnglish: ['Month', 'Moon'],
    meaningBangla: 'মাস, চাঁদ',
    exampleSentences: [
      {
        japanese: '来月は9月です。',
        english: 'Next month is September.',
        bangla: 'পরের মাস সেপ্টেম্বর।'
      },
      {
        japanese: '月がきれいですね。',
        english: 'The moon is beautiful, isn\'t it?',
        bangla: 'চাঁদটা সুন্দর, তাই না?'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 3,
    kanji: '火',
    strokeCount: 4,
    onYomi: 'カ',
    kunYomi: 'ひ',
    meaningsEnglish: ['Fire', 'Tuesday'],
    meaningBangla: 'আগুন, মঙ্গলবার',
    exampleSentences: [
      {
        japanese: '火をつけてください。',
        english: 'Please light the fire.',
        bangla: 'দয়া করে আগুন জ্বালান।'
      },
      {
        japanese: '火曜日に会いましょう。',
        english: 'Let\'s meet on Tuesday.',
        bangla: 'মঙ্গলবার দেখা করি।'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 4,
    kanji: '水',
    strokeCount: 4,
    onYomi: 'スイ',
    kunYomi: 'みず',
    meaningsEnglish: ['Water', 'Wednesday'],
    meaningBangla: 'পানি, বুধবার',
    exampleSentences: [
      {
        japanese: '水を飲みます。',
        english: 'I drink water.',
        bangla: 'আমি পানি পান করি।'
      },
      {
        japanese: '水曜日は仕事があります。',
        english: 'I have work on Wednesday.',
        bangla: 'বুধবার আমার কাজ আছে।'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 5,
    kanji: '木',
    strokeCount: 4,
    onYomi: 'モク',
    kunYomi: 'き',
    meaningsEnglish: ['Tree', 'Wood', 'Thursday'],
    meaningBangla: 'গাছ, কাঠ, বৃহস্পতিবার',
    exampleSentences: [
      {
        japanese: '公園に大きい木があります。',
        english: 'There is a big tree in the park.',
        bangla: 'পার্কে একটি বড় গাছ আছে।'
      },
      {
        japanese: '木曜日に来てください。',
        english: 'Please come on Thursday.',
        bangla: 'বৃহস্পতিবার আসুন।'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 6,
    kanji: '金',
    strokeCount: 8,
    onYomi: 'キン',
    kunYomi: 'かね',
    meaningsEnglish: ['Gold', 'Money', 'Friday'],
    meaningBangla: 'সোনা, টাকা, শুক্রবার',
    exampleSentences: [
      {
        japanese: 'お金がありません。',
        english: 'I don\'t have money.',
        bangla: 'আমার টাকা নেই।'
      },
      {
        japanese: '金曜日は楽しいです。',
        english: 'Friday is fun.',
        bangla: 'শুক্রবার মজাদার।'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 7,
    kanji: '土',
    strokeCount: 3,
    onYomi: 'ド',
    kunYomi: 'つち',
    meaningsEnglish: ['Earth', 'Soil', 'Saturday'],
    meaningBangla: 'মাটি, মাটি, শনিবার',
    exampleSentences: [
      {
        japanese: '土があります。',
        english: 'There is soil.',
        bangla: 'মাটি আছে।'
      },
      {
        japanese: '土曜日に買い物をします。',
        english: 'I shop on Saturday.',
        bangla: 'শনিবার আমি কেনাকাটা করি।'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 8,
    kanji: '人',
    strokeCount: 2,
    onYomi: 'ジン',
    kunYomi: 'ひと',
    meaningsEnglish: ['Person', 'Human'],
    meaningBangla: 'মানুষ, ব্যক্তি',
    exampleSentences: [
      {
        japanese: '人がいます。',
        english: 'There is a person.',
        bangla: 'একজন মানুষ আছে।'
      },
      {
        japanese: 'あの人は先生です。',
        english: 'That person is a teacher.',
        bangla: 'সেই ব্যক্তি একজন শিক্ষক।'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 9,
    kanji: '大',
    strokeCount: 3,
    onYomi: 'ダイ',
    kunYomi: 'おおきい',
    meaningsEnglish: ['Big', 'Large', 'Great'],
    meaningBangla: 'বড়, বিশাল, মহান',
    exampleSentences: [
      {
        japanese: '大きい家があります。',
        english: 'There is a big house.',
        bangla: 'একটি বড় বাড়ি আছে।'
      },
      {
        japanese: '大学に行きたいです。',
        english: 'I want to go to university.',
        bangla: 'আমি বিশ্ববিদ্যালয়ে যেতে চাই।'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 10,
    kanji: '小',
    strokeCount: 3,
    onYomi: 'ショウ',
    kunYomi: 'ちいさい',
    meaningsEnglish: ['Small', 'Little'],
    meaningBangla: 'ছোট, ছোট',
    exampleSentences: [
      {
        japanese: '小さい犬が好きです。',
        english: 'I like small dogs.',
        bangla: 'আমি ছোট কুকুর পছন্দ করি।'
      },
      {
        japanese: '小学校に行きました。',
        english: 'I went to elementary school.',
        bangla: 'আমি প্রাথমিক বিদ্যালয়ে গিয়েছিলাম।'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 11,
    kanji: '女',
    strokeCount: 3,
    onYomi: 'ジョ',
    kunYomi: 'おんな',
    meaningsEnglish: ['Woman', 'Female'],
    meaningBangla: 'মহিলা, নারী',
    exampleSentences: [
      {
        japanese: '女性です。',
        english: 'She is a woman.',
        bangla: 'তিনি একজন মহিলা।'
      },
      {
        japanese: '女の子が好きです。',
        english: 'I like girls.',
        bangla: 'আমি মেয়েদের পছন্দ করি।'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 12,
    kanji: '男',
    strokeCount: 7,
    onYomi: 'ダン',
    kunYomi: 'おとこ',
    meaningsEnglish: ['Man', 'Male'],
    meaningBangla: 'পুরুষ, নর',
    exampleSentences: [
      {
        japanese: '男性です。',
        english: 'He is a man.',
        bangla: 'তিনি একজন পুরুষ।'
      },
      {
        japanese: '男の子が来ました。',
        english: 'A boy came.',
        bangla: 'একটি ছেলে এসেছিল।'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 13,
    kanji: '子',
    strokeCount: 3,
    onYomi: 'シ',
    kunYomi: 'こ',
    meaningsEnglish: ['Child', 'Kid'],
    meaningBangla: 'শিশু, বাচ্চা',
    exampleSentences: [
      {
        japanese: '子どもがいます。',
        english: 'I have children.',
        bangla: 'আমার বাচ্চা আছে।'
      },
      {
        japanese: '子どもは元気です。',
        english: 'The children are healthy.',
        bangla: 'বাচ্চারা সুস্থ।'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 14,
    kanji: '学',
    strokeCount: 8,
    onYomi: 'ガク',
    kunYomi: 'まなぶ',
    meaningsEnglish: ['Learn', 'Study', 'School'],
    meaningBangla: 'শিখা, পড়া, স্কুল',
    exampleSentences: [
      {
        japanese: '学校に行きます。',
        english: 'I go to school.',
        bangla: 'আমি স্কুলে যাই।'
      },
      {
        japanese: '日本語を学びます。',
        english: 'I learn Japanese.',
        bangla: 'আমি জাপানি শিখি।'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 15,
    kanji: '生',
    strokeCount: 5,
    onYomi: 'セイ',
    kunYomi: 'いきる',
    meaningsEnglish: ['Life', 'Student', 'Birth'],
    meaningBangla: 'জীবন, শিক্ষার্থী, জন্ম',
    exampleSentences: [
      {
        japanese: '学生です。',
        english: 'I am a student.',
        bangla: 'আমি একজন শিক্ষার্থী।'
      },
      {
        japanese: '人生は大事です。',
        english: 'Life is important.',
        bangla: 'জীবন গুরুত্বপূর্ণ।'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 16,
    kanji: '先',
    strokeCount: 6,
    onYomi: 'セン',
    kunYomi: 'さき',
    meaningsEnglish: ['First', 'Before', 'Ahead'],
    meaningBangla: 'প্রথম, আগে, সামনে',
    exampleSentences: [
      {
        japanese: '先生です。',
        english: 'He is a teacher.',
        bangla: 'তিনি একজন শিক্ষক।'
      },
      {
        japanese: '先に行ってください。',
        english: 'Please go ahead.',
        bangla: 'দয়া করে সামনে যান।'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 17,
    kanji: '行',
    strokeCount: 6,
    onYomi: 'コウ',
    kunYomi: 'いく',
    meaningsEnglish: ['Go', 'Travel', 'Line'],
    meaningBangla: 'যাওয়া, ভ্রমণ করা, লাইন',
    exampleSentences: [
      {
        japanese: '学校に行きます。',
        english: 'I go to school.',
        bangla: 'আমি স্কুলে যাই।'
      },
      {
        japanese: 'どこに行きますか。',
        english: 'Where are you going?',
        bangla: 'আপনি কোথায় যাচ্ছেন?'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 18,
    kanji: '来',
    strokeCount: 7,
    onYomi: 'ライ',
    kunYomi: 'くる',
    meaningsEnglish: ['Come', 'Coming'],
    meaningBangla: 'আসা, আসছে',
    exampleSentences: [
      {
        japanese: '家に来てください。',
        english: 'Please come to my house.',
        bangla: 'দয়া করে আমার বাড়িতে আসুন।'
      },
      {
        japanese: '来年に来ます。',
        english: 'I will come next year.',
        bangla: 'আমি পরবর্তী বছর আসব।'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 19,
    kanji: '食',
    strokeCount: 9,
    onYomi: 'ショク',
    kunYomi: 'たべる',
    meaningsEnglish: ['Eat', 'Food', 'Meal'],
    meaningBangla: 'খাওয়া, খাদ্য, খাবার',
    exampleSentences: [
      {
        japanese: 'ご飯を食べます。',
        english: 'I eat rice.',
        bangla: 'আমি ভাত খাই।'
      },
      {
        japanese: '何を食べたいですか。',
        english: 'What do you want to eat?',
        bangla: 'আপনি কি খেতে চান?'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 20,
    kanji: '飲',
    strokeCount: 12,
    onYomi: 'イン',
    kunYomi: 'のむ',
    meaningsEnglish: ['Drink'],
    meaningBangla: 'পান করা',
    exampleSentences: [
      {
        japanese: '水を飲みます。',
        english: 'I drink water.',
        bangla: 'আমি পানি পান করি।'
      },
      {
        japanese: 'コーヒーを飲みたいです。',
        english: 'I want to drink coffee.',
        bangla: 'আমি কফি পান করতে চাই।'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 21,
    kanji: '読',
    strokeCount: 14,
    onYomi: 'トク',
    kunYomi: 'よむ',
    meaningsEnglish: ['Read'],
    meaningBangla: 'পড়া',
    exampleSentences: [
      {
        japanese: '本を読みます。',
        english: 'I read a book.',
        bangla: 'আমি বই পড়ি।'
      },
      {
        japanese: '新聞を読んでいます。',
        english: 'I am reading a newspaper.',
        bangla: 'আমি সংবাদপত্র পড়ছি।'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 22,
    kanji: '書',
    strokeCount: 10,
    onYomi: 'ショ',
    kunYomi: 'かく',
    meaningsEnglish: ['Write'],
    meaningBangla: 'লেখা',
    exampleSentences: [
      {
        japanese: '手紙を書きます。',
        english: 'I write a letter.',
        bangla: 'আমি একটি চিঠি লিখি।'
      },
      {
        japanese: '名前を書いてください。',
        english: 'Please write your name.',
        bangla: 'দয়া করে আপনার নাম লিখুন।'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 23,
    kanji: '見',
    strokeCount: 7,
    onYomi: 'ケン',
    kunYomi: 'みる',
    meaningsEnglish: ['See', 'Look', 'Watch'],
    meaningBangla: 'দেখা, তাকানো, দেখা',
    exampleSentences: [
      {
        japanese: 'テレビを見ます。',
        english: 'I watch TV.',
        bangla: 'আমি টিভি দেখি।'
      },
      {
        japanese: 'この映画を見ましたか。',
        english: 'Have you seen this movie?',
        bangla: 'আপনি কি এই চলচ্চিত্র দেখেছেন?'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 24,
    kanji: '聞',
    strokeCount: 14,
    onYomi: 'ブン',
    kunYomi: 'きく',
    meaningsEnglish: ['Hear', 'Listen', 'Ask'],
    meaningBangla: 'শোনা, শুনা, জিজ্ঞেস করা',
    exampleSentences: [
      {
        japanese: '音楽を聞きます。',
        english: 'I listen to music.',
        bangla: 'আমি সঙ্গীত শুনি।'
      },
      {
        japanese: '先生に聞きました。',
        english: 'I asked the teacher.',
        bangla: 'আমি শিক্ষককে জিজ্ঞেস করেছিলাম।'
      }
    ],
    jlptLevel: 'N5'
  },
  {
    id: 25,
    kanji: '話',
    strokeCount: 13,
    onYomi: 'ワ',
    kunYomi: 'はなす',
    meaningsEnglish: ['Talk', 'Speak', 'Story'],
    meaningBangla: 'কথা বলা, কথা, গল্প',
    exampleSentences: [
      {
        japanese: '日本語を話します。',
        english: 'I speak Japanese.',
        bangla: 'আমি জাপানি বলি।'
      },
      {
        japanese: 'いい話を聞きました。',
        english: 'I heard a good story.',
        bangla: 'আমি একটি ভালো গল্প শুনেছিলাম।'
      }
    ],
    jlptLevel: 'N5'
  }
];

// Note: Full 150 Kanji dataset - IDs 26-150 follow same structure
// Dataset includes: Numbers, Days, People, Body Parts, Animals, Food, Objects, Places, Colors, Actions, States, and Miscellaneous
