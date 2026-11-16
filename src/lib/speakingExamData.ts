// Generated 20 JPD133 Speaking Mock Exams Data
// Strictly aligned with Lessons 8 to 11 of Dekiru Nihongo & official speaking format

export interface SampleAnswer {
  level: 'basic' | 'expanded' | 'alt'
  label: string
  jp: string
  vi: string
}

export interface ExamQuestion {
  id: string
  qJp: string
  qVi: string
  targetGrammar: string
  answers: SampleAnswer[]
}

export interface ComicPanel {
  stepNumber: number
  characterLabels: string[]
  actionDescJp: string
  actionDescVi: string
  sceneType: string
  location: string
  iconName: string
  detailHint: string
}

export interface PictureSection {
  characterName: string
  scenarioTitle: string
  timelineHint: string
  panels: [ComicPanel, ComicPanel, ComicPanel]
  question: ExamQuestion
}

export interface VocabularyNote {
  word: string
  reading?: string
  meaning: string
}

export interface SpeakingExam {
  id: string
  title: string
  shortTitle: string
  focusGrammar: string
  badge: string
  katakanaWords: string[]
  reading: {
    title: string
    passageJp: string
    passageVi: string
    underlines: string[]
    vocabNotes: VocabularyNote[]
    questions: [ExamQuestion, ExamQuestion]
  }
  qa: {
    picture: PictureSection
    freeQuestions: [ExamQuestion, ExamQuestion]
  }
}

export const SPEAKING_EXAMS: SpeakingExam[] = [
  {
    "id": "p01",
    "title": "Đề 01 (P01) · Một ngày của anh Yamada",
    "shortTitle": "山田さんの一日",
    "focusGrammar": "Bài 11 · Thể て, ～てから, ～たり～たり, ～ています",
    "badge": "Đề P01 · Bài 11",
    "katakanaWords": [
      "ジョギング",
      "シャワー",
      "フランス語（ご）",
      "メール"
    ],
    "reading": {
      "title": "「山田（やまだ）さんの一日（いちにち）」",
      "passageJp": "山田（やまだ）さんは毎朝（まいあさ）6時（じ）に起（お）きて、牛乳（ぎゅうにゅう）を飲（の）んでからジョギングをします。その後（ご）、シャワーを浴（あ）びて会社（かいしゃ）へ行（い）きます。会社（かいしゃ）でメールを書（か）いたり、会議（かいぎ）をしたりします。昼（ひる）ごはんは食堂（しょくどう）で食（た）べます。夜（よる）は家（いえ）でテレビを見（み）たり、本（ほん）を読（よ）んだりします。最近（さいきん）、フランス語（ご）を勉強（べんきょう）していて、毎晩（まいばん）30分（ぷん）くらい勉強（べんきょう）しています。",
      "passageVi": "Anh Yamada mỗi sáng thức dậy lúc 6 giờ, sau khi uống sữa thì đi chạy bộ. Sau đó, anh ấy tắm vòi sen rồi đi đến công ty. Ở công ty, anh ấy viết email, họp hành... Bữa trưa anh ấy ăn ở nhà ăn. Buổi tối ở nhà, anh ấy xem tivi, đọc sách... Gần đây anh ấy đang học tiếng Pháp, mỗi tối học khoảng 30 phút.",
      "underlines": [
        "起（お）きて、",
        "飲（の）んでから",
        "書（か）いたり、",
        "見（み）たり、",
        "読（よ）んだりします。",
        "毎晩（まいばん）30分（ぷん）くらい勉強（べんきょう）しています。"
      ],
      "vocabNotes": [
        {
          "word": "その後（ご）",
          "reading": "そのご",
          "meaning": "Sau đó"
        },
        {
          "word": "最近（さいきん）",
          "reading": "さいきん",
          "meaning": "Gần đây"
        }
      ],
      "questions": [
        {
          "id": "p01-rq1",
          "qJp": "山田（やまだ）さんは毎朝（まいあさ）何時（なんじ）に起（お）きますか。",
          "qVi": "Anh Yamada thức dậy lúc mấy giờ mỗi sáng?",
          "targetGrammar": "Bài 03 · Thời gian + に + Động từ",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "6時（じ）に起（お）きます。",
              "vi": "Anh ấy thức dậy lúc 6 giờ."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "毎朝（まいあさ）6時（じ）に起（お）きて、牛乳（ぎゅうにゅう）を飲（の）んでからジョギングをします。",
              "vi": "Mỗi sáng anh ấy thức dậy lúc 6 giờ, sau khi uống sữa thì đi chạy bộ."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "毎朝（まいあさ）6時（じ）です。",
              "vi": "Mỗi sáng là 6 giờ."
            }
          ]
        },
        {
          "id": "p01-rq2",
          "qJp": "山田（やまだ）さんは夜（よる）、どんなことをしますか。",
          "qVi": "Anh Yamada vào buổi tối làm những việc gì?",
          "targetGrammar": "Bài 11 · ～たり～たりします & ～ています",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "テレビを見（み）たり、本（ほん）を読（よ）んだりします。",
              "vi": "Anh ấy xem tivi, đọc sách..."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "家（いえ）でテレビを見（み）たり、本（ほん）を読（よ）んだりします。そして毎晩（まいばん）フランス語（ご）を30分（ぷん）くらい勉強（べんきょう）しています。",
              "vi": "Anh ấy ở nhà xem tivi, đọc sách... Và mỗi tối học tiếng Pháp khoảng 30 phút."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "テレビを見（み）たり、フランス語（ご）を勉強（べんきょう）したりします。",
              "vi": "Anh ấy xem tivi, học tiếng Pháp..."
            }
          ]
        }
      ]
    },
    "qa": {
      "picture": {
        "characterName": "田中（たなか）さん",
        "scenarioTitle": "田中さんの休日の行動 (Đề demo P0)",
        "timelineHint": "昨日（きのう）",
        "panels": [
          {
            "stepNumber": 1,
            "characterLabels": [
              "たなか",
              "さとう",
              "うえの"
            ],
            "actionDescJp": "佐藤（さとう）さんと上野（うえの）さんに会（あ）いました。",
            "actionDescVi": "Gặp bạn Sato và bạn Ueno.",
            "sceneType": "meet",
            "location": "駅の前（えきのまえ）",
            "iconName": "Users",
            "detailHint": "Gặp gỡ bạn bè"
          },
          {
            "stepNumber": 2,
            "characterLabels": [
              "たなか",
              "うえの"
            ],
            "actionDescJp": "美術館（びじゅつかん）で絵（え）を見（み）ました。",
            "actionDescVi": "Xem tranh ở bảo tàng mỹ thuật.",
            "sceneType": "museum",
            "location": "美術館（びじゅつかん）",
            "iconName": "Palette",
            "detailHint": "Ngắm tranh triển lãm"
          },
          {
            "stepNumber": 3,
            "characterLabels": [
              "たなか",
              "うえの"
            ],
            "actionDescJp": "レストランで一緒（いっしょ）にご飯（はん）を食（た）べました。",
            "actionDescVi": "Cùng nhau ăn cơm ở nhà hàng.",
            "sceneType": "eat",
            "location": "レストラン",
            "iconName": "Utensils",
            "detailHint": "Ăn uống trò chuyện"
          }
        ],
        "question": {
          "id": "p01-q1",
          "qJp": "田中（たなか）さんは昨日（きのう）何（なに）をしましたか。",
          "qVi": "Hôm qua anh Tanaka đã làm những gì?",
          "targetGrammar": "Bài 11: Nối câu quá khứ V-て hoặc ～たり～たり",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Nối chuỗi hành động thể て (Chuẩn đề)",
              "jp": "友達（ともだち）に会（あ）って、美術館（びじゅつかん）で絵（え）を見（み）て、レストランでご飯（はん）を食（た）べました。",
              "vi": "Đã gặp bạn bè, xem tranh ở viện bảo tàng, rồi ăn cơm ở nhà hàng."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Dùng mẫu ～たり～たりしました (Điểm 9-10)",
              "jp": "美術館（びじゅつかん）で絵（え）を見（み）たり、友達（ともだち）とレストランで食事（しょくじ）をしたりしました。",
              "vi": "Đã đi xem tranh ở bảo tàng mỹ thuật, rồi đi dùng bữa ở nhà hàng cùng bạn bè."
            },
            {
              "level": "alt",
              "label": "Cách 3: Chia nhỏ câu với liên từ それから",
              "jp": "まず友達（ともだち）に会（あ）いました。それから絵（え）を見（み）て、一緒（いっしょ）にご飯（はん）を食（た）べました。とても楽（たの）しかったです。",
              "vi": "Đầu tiên anh ấy gặp bạn. Sau đó xem tranh rồi cùng ăn cơm. Rất là vui."
            }
          ]
        }
      },
      "freeQuestions": [
        {
          "id": "p01-q2",
          "qJp": "去年（きょねん）の誕生日（たんじょうび）に友達（ともだち）に何（なに）をもらいましたか。",
          "qVi": "Sinh nhật năm ngoái bạn đã nhận được cái gì từ bạn bè?",
          "targetGrammar": "Bài 8: Cho nhận ～に～をもらいました",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Ngắn gọn (Đồng hồ)",
              "jp": "時計（とけい）をもらいました。",
              "vi": "Tôi đã nhận được một chiếc đồng hồ."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ chi tiết (Sách tiếng Nhật)",
              "jp": "日本語（にほんご）の本（ほん）とペンをもらいました。とてもうれしかったです。",
              "vi": "Tôi nhận được sách tiếng Nhật và một cây bút. Tôi đã rất vui."
            },
            {
              "level": "alt",
              "label": "Cách 3: Áo thun từ bạn thân",
              "jp": "親友（しんゆう）にきれいなTシャツをもらいました。今（いま）も大切（たいせつ）に使（つか）っています。",
              "vi": "Tôi nhận được chiếc áo phông rất đẹp từ bạn thân. Bây giờ tôi vẫn nâng niu sử dụng."
            }
          ]
        },
        {
          "id": "p01-q3",
          "qJp": "疲（つか）れたとき、どうしますか。",
          "qVi": "Khi mệt mỏi, bạn làm gì?",
          "targetGrammar": "Bài 11: Mẫu câu ～とき、どうしますか",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Ngủ sớm / Nghe nhạc",
              "jp": "早（はや）く寝（ね）ます。",
              "vi": "Tôi đi ngủ sớm."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Thư giãn tắm nước nóng và nghe nhạc",
              "jp": "お風呂（ふろ）に入（はい）って、好（す）きな音楽（おんがく）を聞（き）きます。",
              "vi": "Tôi ngâm bồn tắm nước nóng rồi nghe bản nhạc mình yêu thích."
            },
            {
              "level": "alt",
              "label": "Cách 3: Dùng ～たり～たり",
              "jp": "家（いえ）でゆっくり休（やす）んだり、好（す）きなアニメを見（み）たりします。",
              "vi": "Tôi thong thả nghỉ ngơi ở nhà, hoặc xem anime yêu thích."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "p02",
    "title": "Đề 02 (P02) · Ngày chủ nhật của chị Kimura",
    "shortTitle": "木村さんの日曜日",
    "focusGrammar": "Bài 11 · ～たり～たりします, ～てから, ～ています",
    "badge": "Đề P02 · Bài 11",
    "katakanaWords": [
      "スーパー",
      "サンドイッチ",
      "エアコン",
      "DVD"
    ],
    "reading": {
      "title": "「木村（きむら）さんの日曜日（にちようび）」",
      "passageJp": "木村（きむら）さんは日曜日（にちようび）の朝（あさ）、部屋（へや）の掃除（そうじ）をしてから、スーパーへ行（い）きます。スーパーで野菜（やさい）や果物（くだもの）を買（か）ったり、サンドイッチを買（か）ったりします。午後（ごご）は暑（あつ）いですから、部屋（へや）でエアコンをつけて、DVDを見（み）ます。夕方（ゆうがた）は近（ちか）くの公園（こうえん）を散歩（さんぽ）したり、写真（しゃしん）を撮（と）ったりします。日曜日（にちようび）はいつも自分（じぶん）の好（す）きなことをして、ゆっくり過（す）ごしています。",
      "passageVi": "Chị Kimura vào sáng Chủ nhật, sau khi dọn dẹp phòng thì đi siêu thị. Ở siêu thị, chị mua rau củ quả, mua bánh sandwich... Buổi chiều vì trời nóng nên chị bật điều hòa trong phòng rồi xem DVD. Chiều tối, chị đi dạo ở công viên gần nhà, chụp ảnh... Ngày Chủ nhật chị luôn làm những việc mình thích và trải qua một cách thong thả.",
      "underlines": [
        "掃除（そうじ）をしてから、",
        "買（か）ったり、",
        "買（か）ったりします。",
        "散歩（さんぽ）したり、",
        "写真（しゃしん）を撮（と）ったりします。",
        "過（す）ごしています。"
      ],
      "vocabNotes": [
        {
          "word": "ゆっくり",
          "meaning": "Thong thả, từ từ"
        },
        {
          "word": "自分（じぶん）",
          "reading": "じぶん",
          "meaning": "Bản thân mình"
        }
      ],
      "questions": [
        {
          "id": "p02-rq1",
          "qJp": "木村（きむら）さんは朝（あさ）、何（なに）をしてからスーパーへ行（い）きますか。",
          "qVi": "Chị Kimura vào buổi sáng làm gì trước khi đi siêu thị?",
          "targetGrammar": "Bài 07 & 11 · ～てから",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "部屋（へや）の掃除（そうじ）をしてから行（い）きます。",
              "vi": "Chị ấy dọn dẹp phòng xong rồi đi."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "日曜日（にちようび）の朝（あさ）、部屋（へや）の掃除（そうじ）をしてからスーパーへ行（い）きます。",
              "vi": "Vào sáng Chủ nhật, sau khi dọn dẹp phòng thì chị ấy đi siêu thị."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "アパートの部屋（へや）を掃除（そうじ）します。",
              "vi": "Chị ấy dọn dẹp phòng căn hộ."
            }
          ]
        },
        {
          "id": "p02-rq2",
          "qJp": "木村（きむら）さんは夕方（ゆうがた）、どんなことをしますか。",
          "qVi": "Chị Kimura vào buổi chiều tối làm những việc gì?",
          "targetGrammar": "Bài 11 · ～たり～たりします",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "公園（こうえん）を散歩（さんぽ）したり、写真（しゃしん）を撮（と）ったりします。",
              "vi": "Chị ấy đi dạo công viên, chụp ảnh..."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "近（ちか）くの公園（こうえん）を散歩（さんぽ）したり、写真（しゃしん）を撮（と）ったりして、ゆっくり過（す）ごしています。",
              "vi": "Chị ấy đi dạo công viên gần nhà, chụp ảnh... và trải qua một cách thong thả."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "公園（こうえん）へ行（い）って、写真（しゃしん）を撮（と）ります。",
              "vi": "Chị ấy đến công viên và chụp ảnh."
            }
          ]
        }
      ]
    },
    "qa": {
      "picture": {
        "characterName": "鈴木（すずき）さん",
        "scenarioTitle": "鈴木さんの日曜日",
        "timelineHint": "先週（せんしゅう）の日曜日（にちようび）",
        "panels": [
          {
            "stepNumber": 1,
            "characterLabels": [
              "すずき"
            ],
            "actionDescJp": "朝（あさ）7時（じ）に起（お）きて、顔（かお）を洗（あら）いました。",
            "actionDescVi": "Thức dậy lúc 7 giờ sáng và rửa mặt.",
            "sceneType": "clean",
            "location": "部屋（へや）",
            "iconName": "Sun",
            "detailHint": "Thức dậy buổi sáng"
          },
          {
            "stepNumber": 2,
            "characterLabels": [
              "すずき"
            ],
            "actionDescJp": "スーパーで卵（たまご）と果物（くだもの）を買（か）いました。",
            "actionDescVi": "Mua trứng và trái cây ở siêu thị.",
            "sceneType": "shop",
            "location": "スーパー",
            "iconName": "ShoppingBag",
            "detailHint": "Mua sắm đồ ăn"
          },
          {
            "stepNumber": 3,
            "characterLabels": [
              "すずき"
            ],
            "actionDescJp": "台所（だいどころ）でおいしいケーキを作（つく）りました。",
            "actionDescVi": "Làm món bánh kem thơm ngon trong bếp.",
            "sceneType": "cook",
            "location": "台所（だいどころ）",
            "iconName": "Cake",
            "detailHint": "Làm bánh ngọt"
          }
        ],
        "question": {
          "id": "p02-q1",
          "qJp": "鈴木（すずき）さんは先週（せんしゅう）の日曜日（にちようび）に何（なに）をしましたか。",
          "qVi": "Chị Suzuki đã làm gì vào Chủ Nhật tuần trước?",
          "targetGrammar": "Bài 11: Nối hành động thể て hoặc たり...たり",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thể て nối tiếp",
              "jp": "7時（じ）に起（お）きて、スーパーで買（か）い物（もの）をして、ケーキを作（つく）りました。",
              "vi": "Thức dậy lúc 7 giờ, đi siêu thị mua sắm, rồi làm bánh kem."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Dùng ～たり～たり",
              "jp": "スーパーで買（か）い物（もの）をしたり、家（いえ）でケーキを作（つく）ったりしました。",
              "vi": "Chị ấy đã đi mua sắm ở siêu thị, làm bánh kem ở nhà..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Chi tiết điểm 10",
              "jp": "朝（あさ）起（お）きてからスーパーへ行（い）きました。そして、家（いえ）でケーキを作（つく）って食（た）べました。",
              "vi": "Sau khi thức dậy buổi sáng, chị đi siêu thị. Sau đó làm bánh kem ở nhà rồi thưởng thức."
            }
          ]
        }
      },
      "freeQuestions": [
        {
          "id": "p02-q2",
          "qJp": "あなたの趣味（しゅみ）は何（なん）ですか。",
          "qVi": "Sở thích của bạn là gì?",
          "targetGrammar": "Bài 9: Mẫu câu 趣味は V-ることです",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Danh từ đơn giản",
              "jp": "読書（どくしょ）です。/ 音楽（おんがく）です。",
              "vi": "Là đọc sách / Là âm nhạc."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Chuẩn mẫu V-ること",
              "jp": "私（わたし）の趣味（しゅみ）は、外国（がいこく）の映画（えいが）を見（み）ることです。",
              "vi": "Sở thích của tôi là xem phim nước ngoài."
            },
            {
              "level": "alt",
              "label": "Cách 3: Sở thích đá bóng & tần suất",
              "jp": "サッカーをすることです。1週間（しゅうかん）に2回（かい）友達（ともだち）と練習（れんしゅう）します。",
              "vi": "Là chơi bóng đá. Một tuần tôi luyện tập với bạn 2 lần."
            }
          ]
        },
        {
          "id": "p02-q3",
          "qJp": "暇（ひま）なとき、たいてい何（なに）をしますか。",
          "qVi": "Khi rảnh rỗi, bạn thường làm gì?",
          "targetGrammar": "Bài 11: Mẫu câu 暇なとき / たいてい",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Ngắn gọn",
              "jp": "音楽（おんがく）を聞（き）きます。",
              "vi": "Tôi nghe nhạc."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Dùng ～たり～たり",
              "jp": "YouTubeで動画（どうが）を見（み）たり、部屋（へや）でゲームをしたりします。",
              "vi": "Tôi xem video trên YouTube, chơi game trong phòng..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Đi dạo hóng gió",
              "jp": "天気がいいときは、自転車（じてんしゃ）で近（ちか）くの川（かわ）の周（まわ）りを散歩（さんぽ）します。",
              "vi": "Khi trời đẹp, tôi đạp xe đi dạo quanh con sông gần nhà."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "p03",
    "title": "Đề 03 (P03) · Chuyến du lịch Kyoto của bạn Nam",
    "shortTitle": "ナムさんの京都旅行",
    "focusGrammar": "Bài 10 · ～ないでください, ～てから, あげました",
    "badge": "Đề P03 · Bài 10",
    "katakanaWords": [
      "ホテル",
      "タクシー",
      "カメラ",
      "おみやげ"
    ],
    "reading": {
      "title": "「ナムさんの京都（きょうと）旅行（りょこう）」",
      "passageJp": "ナムさんは先週（せんしゅう）、新幹線（しんかんせん）に乗（の）って京都（きょうと）へ旅行（りょこう）に行（い）きました。京都駅（きょうとえき）に着（つ）いてから、まずタクシーでホテルへ行（い）って荷物（にもつ）を置（お）きました。それから有名（ゆうめい）なお寺（てら）へ行（い）って、新（あたら）しいカメラで写真（しゃしん）をたくさん撮（と）りました。お寺（てら）の人（ひと）は「中（なか）で走（はし）らないでください」と言（い）いました。夕方（ゆうがた）おみやげ屋（や）でおいしいお菓子（かし）を買（か）って、友達（ともだち）にあげました。",
      "passageVi": "Bạn Nam tuần trước đã đi tàu Shinkansen đến Kyoto du lịch. Sau khi đến ga Kyoto, trước tiên bạn đi taxi đến khách sạn để gửi hành lý lại. Sau đó bạn đến một ngôi chùa nổi tiếng và chụp rất nhiều ảnh bằng chiếc máy ảnh mới. Người ở chùa nói 'Xin đừng chạy ở bên trong'. Buổi chiều tối ở tiệm quà lưu niệm, bạn mua bánh kẹo ngon để tặng bạn bè.",
      "underlines": [
        "着（つ）いてから、",
        "行（い）って",
        "置（お）きました。",
        "走（はし）らないでください",
        "買（か）って、",
        "友達（ともだち）にあげました。"
      ],
      "vocabNotes": [
        {
          "word": "有名（ゆうめい）な",
          "reading": "ゆうめいな",
          "meaning": "Nổi tiếng"
        },
        {
          "word": "おみやげ屋（や）",
          "reading": "おみやげや",
          "meaning": "Tiệm bán quà lưu niệm"
        }
      ],
      "questions": [
        {
          "id": "p03-rq1",
          "qJp": "ナムさんは京都駅（きょうとえき）に着（つ）いてから、まず何（なに）をしましたか。",
          "qVi": "Bạn Nam sau khi đến ga Kyoto thì trước tiên làm gì?",
          "targetGrammar": "Bài 07 & 10 · ～てから, ～て～",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "タクシーでホテルへ行（い）って荷物（にもつ）を置（お）きました。",
              "vi": "Bạn ấy đi taxi đến khách sạn và để hành lý lại."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "まずタクシーでホテルへ行（い）って荷物（にもつ）を置（お）いてから、お寺（てら）へ行（い）きました。",
              "vi": "Trước tiên bạn ấy đi taxi đến khách sạn để hành lý lại, sau đó đi chùa."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "ホテルへ荷物（にもつ）を置（お）きに行（い）きました。",
              "vi": "Bạn ấy đi đến khách sạn để đặt hành lý."
            }
          ]
        },
        {
          "id": "p03-rq2",
          "qJp": "お寺（てら）の人（ひと）は何（なん）と言（い）いましたか。",
          "qVi": "Người ở chùa đã nói gì?",
          "targetGrammar": "Bài 10 · ～ないでくださいと言いました",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "「中（なか）で走（はし）らないでください」と言（い）いました。",
              "vi": "Họ nói: 'Xin đừng chạy ở bên trong'."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "お寺（てら）の人（ひと）は「中（なか）で走（はし）らないでください」とナムさんに言（い）いました。",
              "vi": "Người ở chùa đã nói với bạn Nam rằng 'Xin đừng chạy ở bên trong'."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "中（なか）で走（はし）らないでくださいと注意（ちゅうい）しました。",
              "vi": "Họ nhắc nhở rằng xin đừng chạy ở bên trong."
            }
          ]
        }
      ]
    },
    "qa": {
      "picture": {
        "characterName": "山田（やまだ）さん",
        "scenarioTitle": "山田さんのボランティアの一日",
        "timelineHint": "先週（せんしゅう）の土曜日（どようび）",
        "panels": [
          {
            "stepNumber": 1,
            "characterLabels": [
              "やまだ",
              "ボランティアの人"
            ],
            "actionDescJp": "公園（こうえん）の前（まえ）に集合（しゅうごう）しました。",
            "actionDescVi": "Tập hợp trước công viên.",
            "sceneType": "meet",
            "location": "公園の入り口",
            "iconName": "MapPin",
            "detailHint": "Tập trung điểm danh"
          },
          {
            "stepNumber": 2,
            "characterLabels": [
              "やまだ"
            ],
            "actionDescJp": "みんなと一緒（いっしょ）にごみを拾（ひろ）いました。",
            "actionDescVi": "Cùng mọi người nhặt rác.",
            "sceneType": "clean",
            "location": "公園の中",
            "iconName": "Trash2",
            "detailHint": "Nhặt rác bỏ túi"
          },
          {
            "stepNumber": 3,
            "characterLabels": [
              "やまだ",
              "ボランティアの人"
            ],
            "actionDescJp": "みんなで記念（きねん）写真（しゃしん）を撮（と）りました。",
            "actionDescVi": "Mọi người cùng chụp ảnh kỷ niệm.",
            "sceneType": "camera",
            "location": "花壇の前",
            "iconName": "Camera",
            "detailHint": "Chụp hình kỷ niệm"
          }
        ],
        "question": {
          "id": "p03-q1",
          "qJp": "山田（やまだ）さんは先週（せんしゅう）の土曜日（どようび）に何（なに）をしましたか。",
          "qVi": "Anh Yamada đã làm gì vào thứ Bảy tuần trước?",
          "targetGrammar": "Bài 11: Nối câu quá khứ V-て",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thể て nối câu",
              "jp": "公園（こうえん）に集合（しゅうごう）して、ごみを拾（ひろ）って、写真（しゃしん）を撮（と）りました。",
              "vi": "Đã tập hợp ở công viên, nhặt rác, rồi chụp ảnh kỷ niệm."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Thể たり...たり kèm cảm nhận",
              "jp": "公園（こうえん）でごみを拾（ひろ）ったり、みんなと写真（しゃしん）を撮（と）ったりしました。とてもいい経験（けいけん）でした。",
              "vi": "Đã nhặt rác ở công viên, chụp ảnh cùng mọi người... Đó là một trải nghiệm rất tuyệt."
            },
            {
              "level": "alt",
              "label": "Cách 3: Rõ ràng trình tự",
              "jp": "まずボランティアの人（ひと）と会（あ）いました。それから町（まち）をきれいにして、写真（しゃしん）を撮（と）りました。",
              "vi": "Trước tiên gặp các tình nguyện viên. Sau đó dọn sạch thị trấn rồi chụp ảnh."
            }
          ]
        }
      },
      "freeQuestions": [
        {
          "id": "p03-q2",
          "qJp": "あなたの家族（かぞく）は何人（なんにん）ですか。誰（だれ）がいますか。",
          "qVi": "Gia đình bạn có mấy người? Gồm những ai?",
          "targetGrammar": "Bài 8: Đếm người và xưng hô gia đình",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Gia đình 4 người",
              "jp": "4人（にん）です。父（ちち）と母（はは）と兄（あに）と私（わたし）です。",
              "vi": "Có 4 người. Bố, mẹ, anh trai và tôi."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Gia đình 5 người kèm nơi ở",
              "jp": "5人（にん）です。両親（りょうしん）と姉（あね）と弟（おとうと）と私（わたし）です。家族（かぞく）はハノイに住（す）んでいます。",
              "vi": "Có 5 người. Bố mẹ, chị gái, em trai và tôi. Gia đình tôi sống ở Hà Nội."
            },
            {
              "level": "alt",
              "label": "Cách 3: Gia đình 3 người",
              "jp": "3人（にん）です。両親（りょうしん）と私（わたし）です。一人っ子（ひとりっこ）です。",
              "vi": "Có 3 người. Bố mẹ và tôi. Tôi là con một."
            }
          ]
        },
        {
          "id": "p03-q3",
          "qJp": "教室（きょうしつ）の中で、何をしてはいけませんか。（何（なに）をしないでくださいと言（い）われますか）",
          "qVi": "Trong phòng học không được làm gì? (Thầy cô nhắc nhở đừng làm gì?)",
          "targetGrammar": "Bài 10: Mẫu câu ～ないでください",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Đừng nói chuyện riêng",
              "jp": "大きな声（こえ）で話（はな）さないでください。",
              "vi": "Xin đừng nói chuyện to tiếng."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Cấm ăn uống và dùng điện thoại",
              "jp": "ご飯（はん）を食（た）べないでください。そして、スマートフォンを使（つか）わないでください。",
              "vi": "Xin đừng ăn cơm. Và đừng dùng điện thoại thông minh."
            },
            {
              "level": "alt",
              "label": "Cách 3: Đừng ngủ gật",
              "jp": "授業（じゅぎょう）中（ちゅう）に寝（ね）ないでください。",
              "vi": "Xin đừng ngủ trong giờ học."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "p04",
    "title": "Đề 04 (P04) · Cuộc sống học tập của bạn Smith",
    "shortTitle": "スミスさんの学生生活",
    "focusGrammar": "Bài 09 · ～ことができます, 前は～が今は～, ～とき",
    "badge": "Đề P04 · Bài 09",
    "katakanaWords": [
      "アパート",
      "ノート",
      "クラスメイト",
      "パン"
    ],
    "reading": {
      "title": "「スミスさんの学生（がくせい）生活（せいかつ）」",
      "passageJp": "スミスさんはアメリカから来（き）て、今（いま）東京（とうきょう）のアパートに住（す）んでいます。毎朝（まいあさ）8時（じ）に大（おお）きいパンを食（た）べてから、歩（ある）いて大学（だいがく）へ行（い）きます。大学（だいがく）で日本語（にほんご）を話（はな）したり、クラスメイトとノートを見（み）たりします。漢字（かんじ）が難（むずか）しいとき、いつも先生（せんせい）に聞（き）きます。スミスさんは前（まえ）は箸（はし）が使（つか）えませんでしたが、今（いま）は上手に使（つか）うことができます。",
      "passageVi": "Bạn Smith đến từ Mỹ, hiện đang sống trong một căn hộ ở Tokyo. Mỗi sáng sau khi ăn một chiếc bánh mì lớn lúc 8 giờ, bạn đi bộ đến trường đại học. Ở trường, bạn nói tiếng Nhật, cùng bạn cùng lớp xem vở ghi chép... Khi chữ Hán khó, bạn luôn hỏi thầy cô giáo. Trước đây bạn Smith không dùng được đũa, nhưng bây giờ bạn có thể dùng rất giỏi.",
      "underlines": [
        "住（す）んでいます。",
        "食（た）べてから、",
        "話（はな）したり、",
        "見（み）たりします。",
        "難（むずか）しいとき、",
        "使（つか）うことができます。"
      ],
      "vocabNotes": [
        {
          "word": "箸（はし）",
          "reading": "はし",
          "meaning": "Đôi đũa"
        },
        {
          "word": "上手（じょうず）に",
          "reading": "じょうず",
          "meaning": "Giỏi, khéo léo"
        }
      ],
      "questions": [
        {
          "id": "p04-rq1",
          "qJp": "スミスさんは漢字（かんじ）が難（むずか）しいとき、どうしますか。",
          "qVi": "Bạn Smith khi gặp chữ Hán khó thì làm như thế nào?",
          "targetGrammar": "Bài 11 · ～とき",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "いつも先生（せんせい）に聞（き）きます。",
              "vi": "Bạn ấy luôn hỏi thầy cô giáo."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "漢字（かんじ）が難（むずか）しいとき、いつも先生（せんせい）に質問（しつもん）します。",
              "vi": "Khi chữ Hán khó, bạn ấy luôn đặt câu hỏi cho thầy cô giáo."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "先生（せんせい）に聞（き）いたり、クラスメイトに聞（き）いたりします。",
              "vi": "Bạn ấy hỏi thầy cô giáo hoặc hỏi bạn cùng lớp."
            }
          ]
        },
        {
          "id": "p04-rq2",
          "qJp": "スミスさんは前（まえ）と今（いま）で、何（なに）ができるようになりましたか。",
          "qVi": "Bạn Smith trước đây và bây giờ đã có thể làm được điều gì?",
          "targetGrammar": "Bài 09 & 11 · 前は～が今は～, ～ことができます",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "箸（はし）を上手（じょうず）に使（つか）うことができます。",
              "vi": "Bạn ấy có thể dùng đũa rất khéo léo."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "前（まえ）は箸（はし）が使（つか）えませんでしたが、今（いま）は上手（じょうず）に使（つか）うことができます。",
              "vi": "Trước đây không dùng được đũa, nhưng bây giờ có thể dùng rất giỏi."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "箸（はし）でご飯（はん）を食（た）べることができます。",
              "vi": "Bạn ấy có thể ăn cơm bằng đũa."
            }
          ]
        }
      ]
    },
    "qa": {
      "picture": {
        "characterName": "スミスさん",
        "scenarioTitle": "スミスさんの大学での一日",
        "timelineHint": "昨日（きのう）",
        "panels": [
          {
            "stepNumber": 1,
            "characterLabels": [
              "スミス"
            ],
            "actionDescJp": "バスに乗（の）って大学（だいがく）へ行（い）きました。",
            "actionDescVi": "Đi xe buýt đến trường đại học.",
            "sceneType": "bus",
            "location": "バス停（てい）",
            "iconName": "Bus",
            "detailHint": "Bắt xe buýt đi học"
          },
          {
            "stepNumber": 2,
            "characterLabels": [
              "スミス",
              "クラスメイト"
            ],
            "actionDescJp": "教室（きょうしつ）でプレゼンテーションをしました。",
            "actionDescVi": "Thuyết trình trước lớp học.",
            "sceneType": "study",
            "location": "教室（きょうしつ）",
            "iconName": "Presentation",
            "detailHint": "Thuyết trình dự án"
          },
          {
            "stepNumber": 3,
            "characterLabels": [
              "スミス",
              "クラスメイト"
            ],
            "actionDescJp": "カフェテリアで一緒（いっしょ）にお昼（ひる）ご飯（はん）を食（た）べました。",
            "actionDescVi": "Cùng nhau ăn trưa tại căng tin trường.",
            "sceneType": "eat",
            "location": "カフェテリア",
            "iconName": "Coffee",
            "detailHint": "Ăn trưa căng tin"
          }
        ],
        "question": {
          "id": "p04-q1",
          "qJp": "スミスさんは昨日（きのう）何（なに）をしましたか。",
          "qVi": "Hôm qua bạn Smith đã làm những gì?",
          "targetGrammar": "Bài 11: Thể て hoặc たり...たり",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thể て nối tiếp",
              "jp": "バスで大学（だいがく）へ行（い）って、プレゼンテーションをして、カフェテリアでお昼（ひる）ご飯（はん）を食（た）べました。",
              "vi": "Đi xe buýt đến trường, làm bài thuyết trình, rồi ăn cơm trưa ở căng tin."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Thể たり...たり",
              "jp": "大学（だいがく）でプレゼンテーションをしたり、友達（ともだち）とカフェテリアで話（はな）したりしました。",
              "vi": "Đã thuyết trình ở trường đại học, trò chuyện cùng bạn bè ở căng tin..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Chi tiết mở rộng",
              "jp": "朝（あさ）バスで学校（がっこう）へ行（い）きました。授業（じゅぎょう）で上手に発表（はっぴょう）してから、友達（ともだち）と食事（しょくじ）をしました。",
              "vi": "Buổi sáng đi xe buýt đến trường. Sau khi phát biểu tốt trong lớp, bạn ấy đi ăn cùng bạn bè."
            }
          ]
        }
      },
      "freeQuestions": [
        {
          "id": "p04-q2",
          "qJp": "あなたはどんな外国語（がいこくご）を話（はな）すことができますか。",
          "qVi": "Bạn có thể nói được ngoại ngữ nào?",
          "targetGrammar": "Bài 9: Mẫu câu ～ことができます",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Tiếng Anh",
              "jp": "英語（えいご）を話（はな）すことができます。",
              "vi": "Tôi có thể nói tiếng Anh."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Tiếng Anh và một chút tiếng Nhật",
              "jp": "英語（えいご）と少し日本語（にほんご）を話（はな）すことができます。",
              "vi": "Tôi có thể nói tiếng Anh và một chút tiếng Nhật."
            },
            {
              "level": "alt",
              "label": "Cách 3: Đang học chăm chỉ",
              "jp": "ベトナム語（ご）と英語（えいご）ができます。今（いま）日本語（にほんご）も一生懸命（いっしょうけんめい）勉強（べんきょう）しています。",
              "vi": "Tôi nói được tiếng Việt và tiếng Anh. Giờ tôi cũng đang chăm chỉ học tiếng Nhật."
            }
          ]
        },
        {
          "id": "p04-q3",
          "qJp": "日本語（にほんご）の意味（いみ）がわからないとき、どうしますか。",
          "qVi": "Khi không hiểu ý nghĩa tiếng Nhật, bạn làm gì?",
          "targetGrammar": "Bài 11: Mẫu câu ～とき、どうしますか",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Tra từ điển",
              "jp": "辞書（じしょ）で調（しら）べます。",
              "vi": "Tôi tra từ điển."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Tra điện thoại và hỏi thầy cô",
              "jp": "スマートフォンで調（しら）べたり、先生（せんせい）に聞（き）いたりします。",
              "vi": "Tôi tra bằng điện thoại hoặc hỏi thầy cô giáo."
            },
            {
              "level": "alt",
              "label": "Cách 3: Dịch qua mạng",
              "jp": "インターネットで意味（いみ）を調（しら）べて、ノートにメモを書（か）きます。",
              "vi": "Tôi tra nghĩa trên mạng rồi ghi chú vào sổ."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "p05",
    "title": "Đề 05 (P05) · Sinh nhật mẹ của bạn Linh",
    "shortTitle": "リンさんのお母さんの誕生日",
    "focusGrammar": "Bài 08 · あげました, くれました, ～とき",
    "badge": "Đề P05 · Bài 08",
    "katakanaWords": [
      "デパート",
      "スカーフ",
      "チョコレート",
      "プレゼント"
    ],
    "reading": {
      "title": "「リンさんのお母（かあ）さんの誕生日（たんじょうび）」",
      "passageJp": "リンさんはベトナムの留学生（りゅうがくせい）で、今（いま）日本の大学（だいがく）に通（かよ）っています。先週（せんしゅう）はお母（かあ）さんの50歳（さい）の誕生日（たんじょうび）でしたから、デパートへ行（い）きました。きれいなスカーフとおいしいチョコレートを買（か）って、郵便局（ゆうびんきょく）から母（はは）に送（おく）りました。夜（よる）はお母（かあ）さんに電話（でんわ）をかけて、楽（たの）しく話（はな）しました。お母（かあ）さんは「すてきなプレゼントをありがとう」と言（い）って、とても喜（よろこ）んでくれました。",
      "passageVi": "Linh là du học sinh Việt Nam, hiện đang theo học tại một trường đại học ở Nhật Bản. Tuần trước là sinh nhật 50 tuổi của mẹ nên Linh đã đến trung tâm thương mại. Bạn mua một chiếc khăn quàng cổ đẹp và sô-cô-la ngon, rồi ra bưu điện gửi cho mẹ. Buổi tối bạn gọi điện thoại cho mẹ và trò chuyện rất vui vẻ. Mẹ nói 'Cảm ơn con vì món quà tuyệt vời' và đã rất vui mừng.",
      "underlines": [
        "通（かよ）っています。",
        "買（か）って、",
        "送（おく）りました。",
        "電話（でんわ）をかけて、",
        "喜（よろこ）んでくれました。"
      ],
      "vocabNotes": [
        {
          "word": "喜（よろこ）びます",
          "reading": "よろこびます",
          "meaning": "Vui mừng, phấn khởi"
        },
        {
          "word": "すてきな",
          "meaning": "Tuyệt vời, đẹp đẽ"
        }
      ],
      "questions": [
        {
          "id": "p05-rq1",
          "qJp": "リンさんはデパートでお母（かあ）さんに何（なに）を買（か）いましたか。",
          "qVi": "Bạn Linh đã mua gì cho mẹ ở trung tâm thương mại?",
          "targetGrammar": "Bài 08 · N1 と N2 を買いました",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "きれいなスカーフとおいしいチョコレートを買（か）いました。",
              "vi": "Bạn ấy mua một chiếc khăn quàng cổ đẹp và sô-cô-la ngon."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "お母（かあ）さんの誕生日（たんじょうび）のために、スカーフとチョコレートを買（か）って送（おく）りました。",
              "vi": "Để mừng sinh nhật mẹ, bạn ấy đã mua khăn quàng cổ và sô-cô-la rồi gửi về."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "誕生日（たんじょうび）のプレゼントを買（か）いました。",
              "vi": "Bạn ấy mua quà sinh nhật."
            }
          ]
        },
        {
          "id": "p05-rq2",
          "qJp": "お母（かあ）さんは電話（でんわ）で何（なん）と言（い）いましたか。",
          "qVi": "Mẹ của bạn Linh qua điện thoại đã nói gì?",
          "targetGrammar": "Bài 08 · ～と言いました",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "「すてきなプレゼントをありがとう」と言（い）いました。",
              "vi": "Mẹ nói: 'Cảm ơn con vì món quà tuyệt vời'."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "「すてきなプレゼントをありがとう」と言（い）って、とても喜（よろこ）んでくれました。",
              "vi": "Mẹ nói: 'Cảm ơn con vì món quà tuyệt vời' và đã rất vui mừng."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "プレゼントをとても喜（よろこ）びました。",
              "vi": "Mẹ đã rất vui mừng vì món quà."
            }
          ]
        }
      ]
    },
    "qa": {
      "picture": {
        "characterName": "リンさん",
        "scenarioTitle": "リンさんのプレゼント",
        "timelineHint": "先週（せんしゅう）",
        "panels": [
          {
            "stepNumber": 1,
            "characterLabels": [
              "リン"
            ],
            "actionDescJp": "デパートでスカーフとプレゼントを買（か）いました。",
            "actionDescVi": "Mua khăn quàng cổ và quà ở trung tâm thương mại.",
            "sceneType": "shop",
            "location": "デパート",
            "iconName": "Gift",
            "detailHint": "Chọn mua quà tặng"
          },
          {
            "stepNumber": 2,
            "characterLabels": [
              "リン"
            ],
            "actionDescJp": "郵便局（ゆうびんきょく）へ行（い）って荷物（にもつ）を送（おく）りました。",
            "actionDescVi": "Đến bưu điện gửi bưu kiện về cho mẹ.",
            "sceneType": "mail",
            "location": "郵便局（ゆうびんきょく）",
            "iconName": "Send",
            "detailHint": "Gửi quà bưu điện"
          },
          {
            "stepNumber": 3,
            "characterLabels": [
              "リン"
            ],
            "actionDescJp": "部屋（へや）でスマートフォンで母（はは）と話（はな）しました。",
            "actionDescVi": "Ở trong phòng gọi điện thoại cho mẹ bằng smartphone.",
            "sceneType": "call",
            "location": "自室（じしつ）",
            "iconName": "Smartphone",
            "detailHint": "Gọi điện cho mẹ"
          }
        ],
        "question": {
          "id": "p05-q1",
          "qJp": "リンさんは先週（せんしゅう）何（なに）をしましたか。",
          "qVi": "Tuần trước bạn Linh đã làm những gì?",
          "targetGrammar": "Bài 11: Nối chuỗi hành động thể て",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thể て nối câu",
              "jp": "デパートでプレゼントを買（か）って、郵便局（ゆうびんきょく）から送（おく）って、母（はは）と電話（でんわ）で話（はな）しました。",
              "vi": "Đã mua quà ở trung tâm thương mại, gửi từ bưu điện, rồi nói chuyện điện thoại với mẹ."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Thể たり...たり",
              "jp": "デパートで買（か）い物（もの）をしたり、お母（かあ）さんに電話（でんわ）をかけたりしました。",
              "vi": "Bạn ấy đã mua sắm ở trung tâm thương mại, gọi điện thoại cho mẹ..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Trình tự cảm xúc",
              "jp": "母（はは）のプレゼントを買（か）って送（おく）りました。それから電話（でんわ）をして、楽（たの）しく話（はな）しました。",
              "vi": "Đã mua và gửi quà cho mẹ. Sau đó gọi điện thoại và trò chuyện rất vui vẻ."
            }
          ]
        }
      },
      "freeQuestions": [
        {
          "id": "p05-q2",
          "qJp": "母（はは）の日（ひ）や誕生日（たんじょうび）に、お母（かあ）さんに何（なに）をあげましたか。",
          "qVi": "Vào ngày của Mẹ hoặc sinh nhật, bạn đã tặng gì cho mẹ?",
          "targetGrammar": "Bài 8: Mẫu câu ～に～をあげました",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Hoa tươi",
              "jp": "きれいな花（はな）をあげました。",
              "vi": "Tôi đã tặng hoa tươi rất đẹp."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Quần áo và thiệp chúc",
              "jp": "服（ふく）と手紙（てがみ）をあげました。母（はは）はとても喜（よろこ）びました。",
              "vi": "Tôi tặng quần áo và một lá thư. Mẹ tôi đã rất vui."
            },
            {
              "level": "alt",
              "label": "Cách 3: Tự nấu ăn đãi mẹ",
              "jp": "母（はは）のために、おいしい料理（りょうり）を作（つく）ってあげました。",
              "vi": "Tôi đã tự tay nấu những món ăn ngon chiêu đãi mẹ."
            }
          ]
        },
        {
          "id": "p05-q3",
          "qJp": "家族（かぞく）や友達（ともだち）に会（あ）いたいとき、どうしますか。",
          "qVi": "Khi muốn gặp gia đình hoặc bạn bè, bạn làm gì?",
          "targetGrammar": "Bài 11: Mẫu câu ～とき、どうしますか",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Gọi điện thoại",
              "jp": "電話（でんわ）をかけます。",
              "vi": "Tôi gọi điện thoại."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Gọi video nói chuyện",
              "jp": "スマートフォンでビデオ通話（つうわ）をして、顔（かお）を見（み）ながら話（はな）します。",
              "vi": "Tôi gọi video bằng điện thoại thông minh, vừa nhìn mặt vừa trò chuyện."
            },
            {
              "level": "alt",
              "label": "Cách 3: Nhắn tin và gửi ảnh",
              "jp": "メッセージを送（おく）ったり、写真（しゃしん）を見（み）たりします。",
              "vi": "Tôi nhắn tin hoặc ngắm lại những bức ảnh kỷ niệm."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "p06",
    "title": "Đề 06 (P06) · Tour du lịch xe buýt của anh Takahashi",
    "shortTitle": "高橋さんのバスツアー",
    "focusGrammar": "Bài 10 · ～ないでください, 見えます, ～てから",
    "badge": "Đề P06 · Bài 10",
    "katakanaWords": [
      "バスツアー",
      "チケット",
      "ガイド",
      "カメラ"
    ],
    "reading": {
      "title": "「高橋（たかはし）さんのバスツアー」",
      "passageJp": "高橋（たかはし）さんは先週（せんしゅう）の土曜日（どようび）、バスツアーに参加（さんか）しました。朝（あさ）8時（じ）に駅（えき）の前（まえ）でガイドさんにチケットを見（み）せてから、バスに乗（の）りました。ガイドさんは「危（あぶ）ないですから、バスの中（なか）で立（た）たないでください」と言（い）いました。窓（まど）から大（おお）きい山（やま）がきれいに見（み）えました。昼（ひる）ごはんは有名（ゆうめい）な店（みせ）で魚（さかな）料理（りょうり）を食（た）べて、写真（しゃしん）をたくさん撮（と）りました。",
      "passageVi": "Anh Takahashi thứ Bảy tuần trước đã tham gia một chuyến du lịch bằng xe buýt. Sau khi đưa vé cho hướng dẫn viên ở trước nhà ga lúc 8 giờ sáng, anh lên xe buýt. Hướng dẫn viên nói 'Vì nguy hiểm nên xin đừng đứng dậy khi ở trong xe buýt'. Từ cửa sổ có thể nhìn thấy ngọn núi lớn rất đẹp. Bữa trưa anh ăn món cá ở một quán nổi tiếng và chụp rất nhiều ảnh.",
      "underlines": [
        "見（み）せてから、",
        "乗（の）りました。",
        "立（た）たないでください",
        "見（み）えました。",
        "食（た）べて、",
        "撮（と）りました。"
      ],
      "vocabNotes": [
        {
          "word": "危（あぶ）ない",
          "reading": "あぶない",
          "meaning": "Nguy hiểm"
        },
        {
          "word": "窓（まど）",
          "reading": "まど",
          "meaning": "Cửa sổ"
        }
      ],
      "questions": [
        {
          "id": "p06-rq1",
          "qJp": "ガイドさんはバスの中（なか）で何（なん）と言（い）いましたか。",
          "qVi": "Hướng dẫn viên ở trong xe buýt đã nói gì?",
          "targetGrammar": "Bài 10 · ～ないでくださいと言いました",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "「危（あぶ）ないですから、立（た）たないでください」と言（い）いました。",
              "vi": "Họ nói: 'Vì nguy hiểm nên xin đừng đứng dậy'."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "ガイドさんは「危（あぶ）ないですから、バスの中（なか）で立（た）たないでください」と説明（せつめい）しました。",
              "vi": "Hướng dẫn viên đã giải thích: 'Vì nguy hiểm nên xin đừng đứng dậy trong xe buýt'."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "バスの中（なか）で立（た）ってはいけませんと言（い）いました。",
              "vi": "Họ nói không được đứng dậy trong xe buýt."
            }
          ]
        },
        {
          "id": "p06-rq2",
          "qJp": "高橋（たかはし）さんは昼（ひる）ごはんに何（なに）を食（た）べましたか。",
          "qVi": "Anh Takahashi đã ăn gì vào bữa trưa?",
          "targetGrammar": "Bài 02 & 03 · Danh từ を食べました",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "有名（ゆうめい）な店（みせ）で魚（さかな）料理（りょうり）を食（た）べました。",
              "vi": "Anh ấy ăn món cá ở một quán ăn nổi tiếng."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "昼（ひる）ごはんは有名（ゆうめい）な店（みせ）で魚（さかな）料理（りょうり）を食（た）べて、写真（しゃしん）をたくさん撮（と）りました。",
              "vi": "Bữa trưa anh ấy ăn món cá ở quán nổi tiếng và chụp rất nhiều ảnh."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "おいしい魚（さかな）料理（りょうり）です。",
              "vi": "Là món ăn cá rất ngon."
            }
          ]
        }
      ]
    },
    "qa": {
      "picture": {
        "characterName": "高橋（たかはし）さん",
        "scenarioTitle": "高橋さんのバスツアー",
        "timelineHint": "先週（せんしゅう）の土曜日（どようび）",
        "panels": [
          {
            "stepNumber": 1,
            "characterLabels": [
              "たかはし",
              "ガイド"
            ],
            "actionDescJp": "駅の前（まえ）でバスに乗（の）りました。",
            "actionDescVi": "Lên xe buýt trước nhà ga.",
            "sceneType": "bus",
            "location": "東京駅前",
            "iconName": "Bus",
            "detailHint": "Lên xe du lịch"
          },
          {
            "stepNumber": 2,
            "characterLabels": [
              "たかはし"
            ],
            "actionDescJp": "富士山（ふじさん）を見（み）て、写真（しゃしん）を撮（と）りました。",
            "actionDescVi": "Ngắm núi Phú Sĩ và chụp ảnh.",
            "sceneType": "camera",
            "location": "富士山",
            "iconName": "Mountain",
            "detailHint": "Ngắm cảnh chụp ảnh"
          },
          {
            "stepNumber": 3,
            "characterLabels": [
              "たかはし"
            ],
            "actionDescJp": "温泉（おんせん）に入（はい）って、ゆっくり休（やす）みました。",
            "actionDescVi": "Tắm suối nước nóng Onsen và thư giãn.",
            "sceneType": "bath",
            "location": "温泉ホテル",
            "iconName": "Sparkles",
            "detailHint": "Tắm Onsen thư giãn"
          }
        ],
        "question": {
          "id": "p06-q1",
          "qJp": "高橋（たかはし）さんは先週（せんしゅう）の土曜日（どようび）に何（なに）をしましたか。",
          "qVi": "Anh Takahashi đã làm gì vào thứ Bảy tuần trước?",
          "targetGrammar": "Bài 11: Nối câu quá khứ V-て hoặc たり...たり",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thể て nối tiếp",
              "jp": "バスに乗（の）って、富士山（ふじさん）で写真（しゃしん）を撮（と）って、温泉（おんせん）に入（はい）りました。",
              "vi": "Lên xe buýt, chụp ảnh ở núi Phú Sĩ, rồi đi tắm suối nước nóng Onsen."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Thể たり...たり",
              "jp": "富士山（ふじさん）の景色（けしき）を見（み）たり、温泉（おんせん）に入（はい）ったりしました。",
              "vi": "Đã ngắm phong cảnh núi Phú Sĩ, tắm suối nước nóng..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Chi tiết điểm cao",
              "jp": "朝（あさ）バスで富士山（ふじさん）へ行（い）きました。写真（しゃしん）をたくさん撮（と）ってから、温泉（おんせん）でゆっくり休（やす）みました。",
              "vi": "Buổi sáng đi xe buýt đến núi Phú Sĩ. Sau khi chụp rất nhiều ảnh, anh ấy đã thư giãn nghỉ ngơi ở suối nước nóng."
            }
          ]
        }
      },
      "freeQuestions": [
        {
          "id": "p06-q2",
          "qJp": "あなたは1年（ねん）に何回（なんかい）くらい旅行（りょこう）に行（い）きますか。",
          "qVi": "Một năm bạn đi du lịch khoảng mấy lần?",
          "targetGrammar": "Bài 9: Tần suất 1年に～回",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: 2 lần",
              "jp": "1年（ねん）に2回（かい）くらい行（い）きます。",
              "vi": "Khoảng 2 lần một năm."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đi cùng gia đình/bạn bè",
              "jp": "1年（ねん）に1回（かい）か2回（かい）行（い）きます。夏休（なつやす）みに友達（ともだち）と海（うみ）へ行（い）くのが好（す）きです。",
              "vi": "Khoảng 1 đến 2 lần một năm. Tôi thích đi biển cùng bạn bè vào kỳ nghỉ hè."
            },
            {
              "level": "alt",
              "label": "Cách 3: Bận rộn ít đi",
              "jp": "勉強（べんきょう）が忙（いそが）しいですから、あまり行（い）きません。でも、旅行（りょこう）に行（い）きたいです。",
              "vi": "Vì việc học bận rộn nên tôi ít đi. Nhưng tôi rất muốn đi du lịch."
            }
          ]
        },
        {
          "id": "p06-q3",
          "qJp": "授業（じゅぎょう）の途中（とちゅう）でトイレへ行（い）きたいとき、先生（せんせい）に何（なん）と言（い）いますか。",
          "qVi": "Trong giờ học khi muốn đi vệ sinh, bạn nói câu gì với thầy cô?",
          "targetGrammar": "Bài 10: Mẫu câu ～て来ます / Xin phép",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Câu xin phép ngắn",
              "jp": "「先生（せんせい）、トイレへ行（い）ってもいいですか。」",
              "vi": "\"Thưa thầy, em xin phép đi vệ sinh được không ạ?\""
            },
            {
              "level": "expanded",
              "label": "Cách 2: Mẫu V-て来ます chuẩn Bài 10",
              "jp": "「すみません、ちょっとトイレへ行（い）って来（き）てもいいですか。」",
              "vi": "\"Xin lỗi thầy, em xin phép đi vệ sinh một lát rồi quay lại được không ạ?\""
            },
            {
              "level": "alt",
              "label": "Cách 3: Lịch sự",
              "jp": "「先生（せんせい）、お手洗（てあら）いに行（い）って来（き）ます。」",
              "vi": "\"Thưa thầy/cô, em xin phép ra ngoài đi vệ sinh một lát ạ.\""
            }
          ]
        }
      ]
    }
  },
  {
    "id": "p07",
    "title": "Đề 07 (P07) · Sở thích thể thao của anh Tanaka",
    "shortTitle": "田中さんのスポーツの趣味",
    "focusGrammar": "Bài 09 · 趣味は～ことです, ～ことができます, ～たり～たり",
    "badge": "Đề P07 · Bài 09",
    "katakanaWords": [
      "スポーツ",
      "テニス",
      "プール",
      "ジョギング"
    ],
    "reading": {
      "title": "「田中（たなか）さんのスポーツの趣味（しゅみ）」",
      "passageJp": "田中（たなか）さんの趣味（しゅみ）はスポーツをすることです。子（こ）どものときから泳（およ）ぐことが好（す）きで、今（いま）もプールで500メートル泳（およ）ぐことができます。毎週（まいしゅう）土曜日（どようび）の朝（あさ）は公園（こうえん）で30分（ぷん）ジョギングをします。日曜日（にちようび）は会社（かいしゃ）の友達（ともだち）とテニスをしたり、自転車（じてんしゃ）に乗（の）ったりします。疲（つか）れたとき、温（あたた）かいお風呂（ふろ）に入（はい）ってから早（はや）く寝（ね）ています。",
      "passageVi": "Sở thích của anh Tanaka là chơi thể thao. Từ nhỏ anh đã thích bơi lội, và bây giờ vẫn có thể bơi 500 mét ở hồ bơi. Mỗi sáng thứ Bảy anh chạy bộ 30 phút ở công viên. Chủ nhật anh chơi tennis cùng bạn bè ở công ty, hoặc đạp xe đạp... Khi mệt mỏi, sau khi tắm bồn nước ấm anh đi ngủ sớm.",
      "underlines": [
        "趣味（しゅみ）はスポーツをすることです。",
        "泳（およ）ぐことができます。",
        "テニスをしたり、",
        "乗（の）ったりします。",
        "入（はい）ってから",
        "寝（ね）ています。"
      ],
      "vocabNotes": [
        {
          "word": "子（こ）どものとき",
          "reading": "こどものとき",
          "meaning": "Hồi còn nhỏ"
        },
        {
          "word": "お風呂（ふろ）",
          "reading": "おふろ",
          "meaning": "Bồn tắm nước nóng"
        }
      ],
      "questions": [
        {
          "id": "p07-rq1",
          "qJp": "田中（たなか）さんはプールで何（なん）メートル泳（およ）ぐことができますか。",
          "qVi": "Anh Tanaka có thể bơi bao nhiêu mét ở hồ bơi?",
          "targetGrammar": "Bài 09 · Lượng từ + ～ことができます",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "500メートル泳（およ）ぐことができます。",
              "vi": "Anh ấy có thể bơi 500 mét."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "子（こ）どものときから泳（およ）ぐことが好（す）きで、今（いま）も500メートル泳（およ）ぐことができます。",
              "vi": "Từ nhỏ đã thích bơi lội nên bây giờ vẫn có thể bơi 500 mét."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "プールで500メートルです。",
              "vi": "Là 500 mét ở hồ bơi."
            }
          ]
        },
        {
          "id": "p07-rq2",
          "qJp": "田中（たなか）さんは疲（つか）れたとき、どうしますか。",
          "qVi": "Anh Tanaka khi mệt mỏi thì làm gì?",
          "targetGrammar": "Bài 11 · ～とき, ～てから",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "お風呂（ふろ）に入（はい）ってから早（はや）く寝（ね）ています。",
              "vi": "Anh ấy tắm bồn nước nóng xong rồi đi ngủ sớm."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "疲（つか）れたとき、温（あたた）かいお風呂（ふろ）に入（はい）ってからゆっくり寝（ね）ます。",
              "vi": "Khi mệt mỏi, sau khi ngâm bồn nước ấm anh ấy ngủ một giấc thật ngon."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "温（あたた）かいお風呂（ふろ）に入（はい）ります。",
              "vi": "Anh ấy ngâm bồn tắm nước ấm."
            }
          ]
        }
      ]
    },
    "qa": {
      "picture": {
        "characterName": "アンさん",
        "scenarioTitle": "アンさんのアルバイトの一日",
        "timelineHint": "昨日（きのう）",
        "panels": [
          {
            "stepNumber": 1,
            "characterLabels": [
              "アン",
              "マネージャー"
            ],
            "actionDescJp": "カフェに着（つ）いて、制服（せいふく）に着替（きが）えました。",
            "actionDescVi": "Đến quán cà phê và thay đồng phục.",
            "sceneType": "clean",
            "location": "カフェの控室",
            "iconName": "Shirt",
            "detailHint": "Thay đồng phục quán"
          },
          {
            "stepNumber": 2,
            "characterLabels": [
              "アン",
              "お客さん"
            ],
            "actionDescJp": "お客（きゃく）さんにコーヒーを作（つく）って出（だ）しました。",
            "actionDescVi": "Pha cà phê và mang ra phục vụ khách hàng.",
            "sceneType": "cook",
            "location": "カウンター",
            "iconName": "Coffee",
            "detailHint": "Pha chế và phục vụ"
          },
          {
            "stepNumber": 3,
            "characterLabels": [
              "アン"
            ],
            "actionDescJp": "テーブルをきれいに拭（ふ）いて掃除（そうじ）しました。",
            "actionDescVi": "Lau dọn bàn ghế sạch sẽ.",
            "sceneType": "clean",
            "location": "客席",
            "iconName": "Sparkles",
            "detailHint": "Dọn dẹp bàn ghế"
          }
        ],
        "question": {
          "id": "p07-q1",
          "qJp": "アンさんは昨日（きのう）何（なに）をしましたか。",
          "qVi": "Hôm qua bạn An đã làm những gì?",
          "targetGrammar": "Bài 11: Nối câu thể て hoặc たり...たり",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thể て nối chuỗi",
              "jp": "制服（せいふく）に着替（きが）えて、コーヒーを出（だ）して、テーブルを掃除（そうじ）しました。",
              "vi": "Thay đồng phục, bưng cà phê ra cho khách, rồi lau dọn bàn ghế."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Thể たり...たり",
              "jp": "お客（きゃく）さんにコーヒーを出（だ）したり、テーブルを拭（ふ）いたりしました。",
              "vi": "Đã phục vụ cà phê cho khách, lau dọn bàn ghế..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Chi tiết điểm 10",
              "jp": "カフェでアルバイトをしました。コーヒーを作（つく）ってから、店内（てんない）をきれいに掃除（そうじ）しました。",
              "vi": "Bạn ấy đã làm thêm ở quán cà phê. Sau khi pha cà phê thì dọn dẹp sạch sẽ bên trong quán."
            }
          ]
        }
      },
      "freeQuestions": [
        {
          "id": "p07-q2",
          "qJp": "おなかがすいたとき、どうしますか。",
          "qVi": "Khi đói bụng, bạn làm gì?",
          "targetGrammar": "Bài 10/11: Mẫu câu ～とき / Trạng thái cơ thể",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Ăn cơm / Đi ăn",
              "jp": "ご飯（はん）を食（た）べます。",
              "vi": "Tôi ăn cơm."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Mua bánh hoặc tự nấu",
              "jp": "コンビニでおにぎりを買（か）ったり、自分（じぶん）で簡単（かんたん）な料理（りょうり）を作（つく）ったりします。",
              "vi": "Tôi mua cơm nắm ở cửa hàng tiện lợi hoặc tự nấu món đơn giản."
            },
            {
              "level": "alt",
              "label": "Cách 3: Đi ăn tiệm cùng bạn",
              "jp": "友達（ともだち）と一緒（いっしょ）に近（ちか）くのレストランへ食（た）べに行（い）きます。",
              "vi": "Tôi cùng bạn đi ra nhà hàng gần đó để ăn."
            }
          ]
        },
        {
          "id": "p07-q3",
          "qJp": "休（やす）みの日（ひ）はたいていどんなことをしますか。",
          "qVi": "Ngày nghỉ bạn thường làm những việc gì?",
          "targetGrammar": "Bài 11: Mẫu câu ～たり～たりします",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Đọc sách và ngủ",
              "jp": "本（ほん）を読（よ）んだり、寝（ね）たりします。",
              "vi": "Tôi đọc sách, ngủ..."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Dọn dẹp và xem phim",
              "jp": "部屋（へや）を掃除（そうじ）したり、Netflixでドラマを見（み）たりします。",
              "vi": "Tôi dọn dẹp phòng, xem phim dài tập trên Netflix..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Đi siêu thị và nấu ăn",
              "jp": "スーパーへ買（か）い物（もの）に行（い）ったり、おいしい料理（りょうり）を作（つく）ったりします。",
              "vi": "Tôi đi mua sắm ở siêu thị, nấu những món ăn ngon..."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "p08",
    "title": "Đề 08 (P08) · Công việc làm thêm của bạn Mai",
    "shortTitle": "マイさんのアルバイト",
    "focusGrammar": "Bài 11 · 働いています, たり～たり, ～てくれます",
    "badge": "Đề P08 · Bài 11",
    "katakanaWords": [
      "アルバイト",
      "レストラン",
      "メニュー",
      "コーヒー"
    ],
    "reading": {
      "title": "「マイさんのアルバイト」",
      "passageJp": "マイさんは今（いま）、駅（えき）の近（ちか）くのレストランでアルバイトをしています。1週間（しゅうかん）に3回（かい）、夕方（ゆうがた）5時（じ）から9時（じ）まで働（はたら）いています。店（みせ）でお客（きゃく）さんにメニューを渡（わた）したり、おいしいコーヒーを入（い）れたりします。店長（てんちょう）は親切（しんせつ）で、仕事（しごと）をいろいろ教（おし）えてくれます。忙（いそが）しいですが、日本語（にほんご）の会話（かいわ）が上手（じょうず）になりました。",
      "passageVi": "Mai hiện đang làm thêm tại một nhà hàng gần nhà ga. Một tuần bạn làm 3 buổi, từ 5 giờ chiều đến 9 giờ tối. Ở quán, bạn đưa thực đơn cho khách, pha cà phê ngon... Quản lý cửa hàng rất tốt bụng và chỉ dạy công việc tận tình. Dù bận rộn nhưng khả năng hội thoại tiếng Nhật của bạn đã trở nên tiến bộ.",
      "underlines": [
        "アルバイトをしています。",
        "働（はたら）いています。",
        "渡（わた）したり、",
        "入（い）れたりします。",
        "教（おし）えてくれます。",
        "上手（じょうず）になりました。"
      ],
      "vocabNotes": [
        {
          "word": "店長（てんちょう）",
          "reading": "てんちょう",
          "meaning": "Quản lý / Chủ cửa hàng"
        },
        {
          "word": "お客（きゃく）さん",
          "reading": "おきゃくさん",
          "meaning": "Khách hàng"
        }
      ],
      "questions": [
        {
          "id": "p08-rq1",
          "qJp": "マイさんは1週間（しゅうかん）に何回（なんかい）アルバイトをしていますか。",
          "qVi": "Bạn Mai một tuần làm thêm bao nhiêu lần?",
          "targetGrammar": "Bài 09 · Khoảng thời gian に Số lần",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "1週間（しゅうかん）に3回（かい）働（はたら）いています。",
              "vi": "Bạn ấy làm việc 3 lần một tuần."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "1週間（しゅうかん）に3回（かい）、夕方（ゆうがた）5時（じ）から9時（じ）まで働（はたら）いています。",
              "vi": "Một tuần bạn ấy làm 3 buổi, từ 5 giờ chiều đến 9 giờ tối."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "週（しゅう）に3回（かい）です。",
              "vi": "Là 3 lần một tuần."
            }
          ]
        },
        {
          "id": "p08-rq2",
          "qJp": "店長（てんちょう）はどんな人（ひと）ですか。",
          "qVi": "Người quản lý cửa hàng là người như thế nào?",
          "targetGrammar": "Bài 08 · Tính từ + で, ～てくれます",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "親切（しんせつ）な人（ひと）です。",
              "vi": "Là một người rất tốt bụng."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "親切（しんせつ）で、仕事（しごと）をいろいろ教（おし）えてくれる人（ひと）です。",
              "vi": "Là người rất tốt bụng và chỉ dạy công việc rất tận tình."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "とても優（やさ）しくて親切（しんせつ）です。",
              "vi": "Rất hiền và tốt bụng."
            }
          ]
        }
      ]
    },
    "qa": {
      "picture": {
        "characterName": "中村（なかむら）さん",
        "scenarioTitle": "中村さんの料理教室",
        "timelineHint": "昨日（きのう）",
        "panels": [
          {
            "stepNumber": 1,
            "characterLabels": [
              "なかむら"
            ],
            "actionDescJp": "市場（しじょう）で新鮮（しんせん）な魚（さかな）と野菜（やさい）を買（か）いました。",
            "actionDescVi": "Mua cá tươi và rau củ ở chợ.",
            "sceneType": "shop",
            "location": "市場（しじょう）",
            "iconName": "ShoppingBag",
            "detailHint": "Mua nguyên liệu tươi"
          },
          {
            "stepNumber": 2,
            "characterLabels": [
              "なかむら",
              "先生"
            ],
            "actionDescJp": "教室（きょうしつ）で先生（せんせい）に料理（りょうり）を習（なら）いました。",
            "actionDescVi": "Học nấu ăn cùng cô giáo tại lớp học.",
            "sceneType": "cook",
            "location": "キッチン",
            "iconName": "UtensilsCrossed",
            "detailHint": "Học cách chế biến"
          },
          {
            "stepNumber": 3,
            "characterLabels": [
              "なかむら",
              "友達"
            ],
            "actionDescJp": "みんなで一緒（いっしょ）においしく食（た）べました。",
            "actionDescVi": "Mọi người cùng nhau thưởng thức món ăn thơm ngon.",
            "sceneType": "eat",
            "location": "ダイニング",
            "iconName": "Heart",
            "detailHint": "Cùng nhau thưởng thức"
          }
        ],
        "question": {
          "id": "p08-q1",
          "qJp": "中村（なかむら）さんは昨日（きのう）何（なに）をしましたか。",
          "qVi": "Chị Nakamura đã làm gì vào ngày hôm qua?",
          "targetGrammar": "Bài 11: Nối câu thể て",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thể て",
              "jp": "魚（さかな）を買（か）って、料理（りょうり）を習（なら）って、みんなで食（た）べました。",
              "vi": "Đã mua cá, học nấu ăn, rồi cùng mọi người ăn ngon lành."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Thể たり...たり",
              "jp": "市場（しじょう）で野菜（やさい）を買（か）ったり、先生（せんせい）に料理（りょうり）を習（なら）ったりしました。",
              "vi": "Chị ấy đã mua rau ở chợ, học nấu ăn từ cô giáo..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Trình tự chi tiết",
              "jp": "まず材料（ざいりょう）を買（か）いました。それから教室（きょうしつ）で天（てん）ぷらを作（つく）って食（た）べました。とてもおいしかったです。",
              "vi": "Đầu tiên chị mua nguyên liệu. Sau đó đến lớp làm tempura rồi ăn thử. Rất là ngon."
            }
          ]
        }
      },
      "freeQuestions": [
        {
          "id": "p08-q2",
          "qJp": "あなたは料理（りょうり）を作（つく）ることができますか。どんな料理（りょうり）ができますか。",
          "qVi": "Bạn có biết nấu ăn không? Bạn có thể làm được món gì?",
          "targetGrammar": "Bài 9: Mẫu câu ～ができます / ～ことができます",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Nấu được món đơn giản",
              "jp": "はい、できます。卵焼（たまごや）きができます。",
              "vi": "Vâng, tôi làm được. Tôi làm được món trứng cuộn."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Nấu món ăn Việt Nam",
              "jp": "はい、ベトナム料理（りょうり）を作（つく）ることができます。フォーや春巻（はるま）きが上手（じょうず）です。",
              "vi": "Vâng, tôi nấu được món ăn Việt Nam. Tôi làm phở và nem cuốn rất ngon."
            },
            {
              "level": "alt",
              "label": "Cách 3: Không biết nấu ăn nhiều",
              "jp": "あまりできません。ラーメンや簡単（かんたん）なものだけ作（つく）ることができます。",
              "vi": "Tôi không rành lắm. Tôi chỉ nấu được mì ramen và các món đơn giản thôi."
            }
          ]
        },
        {
          "id": "p08-q3",
          "qJp": "誰（だれ）に日本語（にほんご）を教（おし）えてもらいましたか。",
          "qVi": "Bạn được ai dạy tiếng Nhật cho?",
          "targetGrammar": "Bài 8: Mẫu câu ～に～を教えてもらいました",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thầy cô trường FPT",
              "jp": "FPT大学（だいがく）の先生（せんせい）に教（おし）えてもらいました。",
              "vi": "Tôi được thầy cô trường Đại học FPT dạy cho."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Giáo viên người Nhật nhiệt tình",
              "jp": "日本人（にほんじん）の先生（せんせい）に教（おし）えてもらいました。とても親切（しんせつ）な先生（せんせい）です。",
              "vi": "Tôi được một thầy giáo người Nhật dạy cho. Thầy rất tận tình và tốt bụng."
            },
            {
              "level": "alt",
              "label": "Cách 3: Cả thầy cô và bạn bè",
              "jp": "学校（がっこう）の先生（せんせい）と、日本人の友達（ともだち）に教（おし）えてもらいました。",
              "vi": "Tôi được cả thầy cô ở trường và những người bạn Nhật Bản chỉ dạy cho."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "p09",
    "title": "Đề 09 (P09) · Ngày nghỉ cuối tuần của anh Suzuki",
    "shortTitle": "鈴木さんの休日",
    "focusGrammar": "Bài 11 · ～たり～たり, ～てから, 日記を書いています",
    "badge": "Đề P09 · Bài 11",
    "katakanaWords": [
      "テレビ",
      "パン",
      "コーヒー",
      "ゲーム"
    ],
    "reading": {
      "title": "「鈴木（すずき）さんの休日（きゅうじつ）」",
      "passageJp": "鈴木（すずき）さんは土曜日（どようび）、いつも朝（あさ）9時（じ）ごろ起（お）きます。パンを食（た）べて温（あたた）かいコーヒーを飲（の）んでから、部屋（へや）の掃除（そうじ）をします。午後（ごご）はテレビで映画（えいが）を見（み）たり、弟（おとうと）とゲームをしたりします。夕方（ゆうがた）はスーパーへ晩（ばん）ごはんの買（か）い物（もの）に行（い）きます。夜（よる）は家（いえ）でゆっくり音楽（おんがく）を聞（き）いて、日記（にっき）を書（か）いています。",
      "passageVi": "Anh Suzuki vào thứ Bảy luôn thức dậy vào khoảng 9 giờ sáng. Sau khi ăn bánh mì và uống cà phê ấm, anh dọn dẹp phòng. Buổi chiều anh xem phim trên tivi, chơi game cùng em trai... Chiều tối anh đi siêu thị mua sắm đồ ăn tối. Buổi tối ở nhà anh thong thả nghe nhạc và viết nhật ký.",
      "underlines": [
        "飲（の）んでから、",
        "掃除（そうじ）をします。",
        "見（み）たり、",
        "ゲームをしたりします。",
        "聞（き）いて、",
        "書（か）いています。"
      ],
      "vocabNotes": [
        {
          "word": "〜ごろ",
          "meaning": "Khoảng chừng (chỉ mốc thời gian)"
        },
        {
          "word": "日記（にっき）",
          "reading": "にっき",
          "meaning": "Nhật ký"
        }
      ],
      "questions": [
        {
          "id": "p09-rq1",
          "qJp": "鈴木（すずき）さんは朝（あさ）ごはんのあとで、何（なに）をしますか。",
          "qVi": "Anh Suzuki sau bữa ăn sáng thì làm gì?",
          "targetGrammar": "Bài 05 & 07 · ～てから, 掃除をします",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "部屋（へや）の掃除（そうじ）をします。",
              "vi": "Anh ấy dọn dẹp phòng."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "パンを食（た）べてコーヒーを飲（の）んでから、部屋（へや）の掃除（そうじ）をします。",
              "vi": "Sau khi ăn bánh mì và uống cà phê, anh ấy dọn dẹp phòng."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "アパートの掃除（そうじ）です。",
              "vi": "Là dọn dẹp căn hộ."
            }
          ]
        },
        {
          "id": "p09-rq2",
          "qJp": "鈴木（すずき）さんは午後（ごご）、どんなことをしますか。",
          "qVi": "Anh Suzuki vào buổi chiều làm những việc gì?",
          "targetGrammar": "Bài 11 · ～たり～たりします",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "テレビで映画（えいが）を見（み）たり、弟（おとうと）とゲームをしたりします。",
              "vi": "Anh ấy xem phim trên tivi, chơi game cùng em trai..."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "午後（ごご）はテレビを見（み）たりゲームをしたりして、夕方（ゆうがた）スーパーへ行（い）きます。",
              "vi": "Buổi chiều xem tivi, chơi game... rồi chiều tối đi siêu thị."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "映画（えいが）を見（み）て、ゲームをします。",
              "vi": "Anh ấy xem phim và chơi game."
            }
          ]
        }
      ]
    },
    "qa": {
      "picture": {
        "characterName": "マイさん",
        "scenarioTitle": "マイさんの引越しの日",
        "timelineHint": "先月（せんげつ）",
        "panels": [
          {
            "stepNumber": 1,
            "characterLabels": [
              "マイ",
              "ルームメイト"
            ],
            "actionDescJp": "寮（りょう）に着（つ）いて、荷物（にもつ）を運（はこ）びました。",
            "actionDescVi": "Đến ký túc xá và chuyển đồ đạc vào.",
            "sceneType": "pack",
            "location": "学生寮の入り口",
            "iconName": "Package",
            "detailHint": "Chuyển hành lý vào phòng"
          },
          {
            "stepNumber": 2,
            "characterLabels": [
              "マイ"
            ],
            "actionDescJp": "自分（じぶん）の部屋（へや）をきれいに片付（かたづ）けました。",
            "actionDescVi": "Dọn dẹp phòng riêng gọn gàng ngăn nắp.",
            "sceneType": "clean",
            "location": "寮の部屋",
            "iconName": "Sparkles",
            "detailHint": "Sắp xếp đồ đạc"
          },
          {
            "stepNumber": 3,
            "characterLabels": [
              "マイ",
              "ルームメイト"
            ],
            "actionDescJp": "ルームメイトと一緒（いっしょ）にラーメンを食（た）べに行（い）きました。",
            "actionDescVi": "Cùng bạn cùng phòng đi ăn mì ramen gần đó.",
            "sceneType": "eat",
            "location": "ラーメン屋",
            "iconName": "Utensils",
            "detailHint": "Đi ăn mì ramen"
          }
        ],
        "question": {
          "id": "p09-q1",
          "qJp": "マイさんは引越（ひっこ）しの日（ひ）に何（なに）をしましたか。",
          "qVi": "Bạn Mai đã làm những gì trong ngày chuyển nhà?",
          "targetGrammar": "Bài 11: Nối câu quá khứ thể て",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thể て nối chuỗi",
              "jp": "荷物（にもつ）を運（はこ）んで、部屋（へや）を片付（かたづ）けて、ラーメンを食（た）べに行（い）きました。",
              "vi": "Chuyển đồ đạc, dọn dẹp phòng, rồi đi ăn mì ramen."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Thể たり...たり",
              "jp": "部屋（へや）を掃除（そうじ）したり、友達（ともだち）とラーメンを食（た）べたりしました。",
              "vi": "Đã dọn dẹp phòng, đi ăn mì ramen cùng bạn bè..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Chi tiết điểm 10",
              "jp": "寮（りょう）へ荷物（にもつ）を運（はこ）んでから部屋（へや）を片付（かたづ）けました。それからルームメイトとご飯（はん）を食（た）べました。",
              "vi": "Sau khi chuyển hành lý đến ký túc xá thì dọn phòng. Sau đó đi ăn cơm cùng bạn cùng phòng."
            }
          ]
        }
      },
      "freeQuestions": [
        {
          "id": "p09-q2",
          "qJp": "寂（さび）しいとき、どうしますか。",
          "qVi": "Khi cảm thấy cô đơn/buồn, bạn làm gì?",
          "targetGrammar": "Bài 11: Mẫu câu ～とき、どうしますか",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Gọi cho gia đình",
              "jp": "家族（かぞく）に電話（でんわ）をかけます。",
              "vi": "Tôi gọi điện cho gia đình."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Nghe nhạc quê nhà hoặc đi chơi với bạn",
              "jp": "国の歌（うた）を聞（き）いたり、友達（ともだち）と遊（あそ）びに行（い）ったりします。",
              "vi": "Tôi nghe những bài hát quê hương hoặc rủ bạn bè đi chơi."
            },
            {
              "level": "alt",
              "label": "Cách 3: Tự nấu ăn và xem phim hài",
              "jp": "好（す）きなものを食（た）べて、おもしろいコメディ映画（えいが）を見（み）ます。",
              "vi": "Tôi ăn món mình thích rồi xem phim hài giải trí."
            }
          ]
        },
        {
          "id": "p09-q3",
          "qJp": "引越（ひっこ）しをするとき、誰（だれ）に手伝（てつだ）ってもらいましたか。",
          "qVi": "Khi chuyển nhà, bạn được ai giúp đỡ?",
          "targetGrammar": "Bài 8: Mẫu câu ～に手伝ってもらいました",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Bạn bè giúp",
              "jp": "友達（ともだち）に手伝（てつだ）ってもらいました。",
              "vi": "Tôi được bạn bè giúp đỡ."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Anh trai và bạn thân",
              "jp": "兄（あに）と大学（だいがく）の友達（ともだち）に手伝（てつだ）ってもらいました。とても助（たす）かりました。",
              "vi": "Tôi được anh trai và bạn đại học giúp đỡ. Đã đỡ vất vả rất nhiều."
            },
            {
              "level": "alt",
              "label": "Cách 3: Tự làm một mình",
              "jp": "荷物（にもつ）が少（すく）なかったですから、自分（じぶん）一人（ひとり）でしました。",
              "vi": "Vì hành lý ít nên tôi tự làm một mình."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "p10",
    "title": "Đề 10 (P10) · Gia đình của chị Sato",
    "shortTitle": "佐藤さんの家族",
    "focusGrammar": "Bài 08 · 家族, 住んでいます, 背が高い, あげました",
    "badge": "Đề P10 · Bài 08",
    "katakanaWords": [
      "ネクタイ",
      "シャツ",
      "テニス",
      "プレゼント"
    ],
    "reading": {
      "title": "「佐藤（さとう）さんの家族（かぞく）」",
      "passageJp": "佐藤（さとう）さんの家族（かぞく）は4人（にん）です。父（ちち）と母（はは）と兄（あに）がいます。父（ちち）は銀行（ぎんこう）で働（はたら）いていて、背（せ）が高（たか）いです。母（はは）は高校（こうこう）で英語（えいご）を教（おし）えています。兄（あに）は会社員（かいしゃいん）で、テニスが上手（じょうず）です。先月（せんげつ）は父（ちち）の誕生日（たんじょうび）でしたから、兄（あに）と一緒（いっしょ）にお金（かね）を出（だ）して、青（あお）いネクタイをあげました。父（ちち）はとても喜（よろこ）びました。",
      "passageVi": "Gia đình chị Sato có 4 người: bố, mẹ, anh trai và chị. Bố làm việc ở ngân hàng và dáng người cao ráo. Mẹ dạy tiếng Anh ở trường cấp ba. Anh trai là nhân viên công ty và chơi tennis rất giỏi. Tháng trước là sinh nhật của bố, chị cùng anh trai góp tiền mua tặng bố chiếc cà vạt màu xanh dương. Bố đã rất vui mừng.",
      "underlines": [
        "働（はたら）いていて、",
        "背（せ）が高（たか）いです。",
        "教（おし）えています。",
        "上手（じょうず）です。",
        "出（だ）して、",
        "あげました。"
      ],
      "vocabNotes": [
        {
          "word": "背（せ）が高（たか）い",
          "reading": "せがたかい",
          "meaning": "Dáng người cao"
        },
        {
          "word": "お金（かね）を出（だ）す",
          "reading": "おかねをだす",
          "meaning": "Bỏ tiền / Góp tiền"
        }
      ],
      "questions": [
        {
          "id": "p10-rq1",
          "qJp": "佐藤（さとう）さんのお父（とう）さんはどんな人（ひと）ですか。",
          "qVi": "Bố của chị Sato là người như thế nào?",
          "targetGrammar": "Bài 08 · Miêu tả ngoại hình & nghề nghiệp",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "銀行（ぎんこう）で働（はたら）いていて、背（せ）が高（たか）いです。",
              "vi": "Bác ấy làm việc ở ngân hàng và dáng người cao."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "銀行員（ぎんこういん）で、背（せ）が高（たか）くてかっこいい人（ひと）です。",
              "vi": "Là nhân viên ngân hàng, dáng người cao ráo và phong độ."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "背（せ）が高（たか）い銀行員（ぎんこういん）です。",
              "vi": "Là nhân viên ngân hàng cao ráo."
            }
          ]
        },
        {
          "id": "p10-rq2",
          "qJp": "先月（せんげつ）、佐藤（さとう）さんとお兄（にい）さんはお父（とう）さんに何（なに）をあげましたか。",
          "qVi": "Tháng trước, chị Sato và anh trai đã tặng gì cho bố?",
          "targetGrammar": "Bài 08 · [Người] に [Vật] をあげました",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "青（あお）いネクタイをあげました。",
              "vi": "Đã tặng chiếc cà vạt màu xanh dương."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "誕生日（たんじょうび）に、お兄（にい）さんと一緒（いっしょ）に青（あお）いネクタイを買（か）ってあげました。",
              "vi": "Vào ngày sinh nhật, chị ấy cùng anh trai đã mua tặng bố chiếc cà vạt xanh dương."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "ネクタイのプレゼントです。",
              "vi": "Là món quà cà vạt."
            }
          ]
        }
      ]
    },
    "qa": {
      "picture": {
        "characterName": "渡辺（わたなべ）さん",
        "scenarioTitle": "渡辺さんのコンサートの一日",
        "timelineHint": "先週（せんしゅう）",
        "panels": [
          {
            "stepNumber": 1,
            "characterLabels": [
              "わたなべ"
            ],
            "actionDescJp": "受付（うけつけ）でコンサートのチケットを買（か）いました。",
            "actionDescVi": "Mua vé buổi hòa nhạc ở quầy lễ tân.",
            "sceneType": "shop",
            "location": "ホール受付",
            "iconName": "Ticket",
            "detailHint": "Mua vé vào cửa"
          },
          {
            "stepNumber": 2,
            "characterLabels": [
              "わたなべ"
            ],
            "actionDescJp": "ホールの中でクラシック音楽（おんがく）を聞（き）きました。",
            "actionDescVi": "Lắng nghe âm nhạc cổ điển trong khán phòng.",
            "sceneType": "concert",
            "location": "音楽ホール",
            "iconName": "Music",
            "detailHint": "Thưởng thức âm nhạc"
          },
          {
            "stepNumber": 3,
            "characterLabels": [
              "わたなべ"
            ],
            "actionDescJp": "ショップで記念（きねん）のCDを買（か）いました。",
            "actionDescVi": "Mua đĩa CD kỷ niệm ở quầy lưu niệm.",
            "sceneType": "shop",
            "location": "売店",
            "iconName": "Disc",
            "detailHint": "Mua đĩa CD kỷ niệm"
          }
        ],
        "question": {
          "id": "p10-q1",
          "qJp": "渡辺（わたなべ）さんは先週（せんしゅう）何（なに）をしましたか。",
          "qVi": "Tuần trước chị Watanabe đã làm những gì?",
          "targetGrammar": "Bài 11: Nối câu thể て",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thể て nối chuỗi",
              "jp": "チケットを買（か）って、音楽（おんがく）を聞（き）いて、CDを買（か）いました。",
              "vi": "Đã mua vé, nghe hòa nhạc, rồi mua đĩa CD."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Thể たり...たり",
              "jp": "コンサートで音楽（おんがく）を聞（き）いたり、CDを買（か）ったりしました。",
              "vi": "Đã nghe nhạc ở buổi hòa nhạc, mua đĩa CD..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Chi tiết mở rộng",
              "jp": "ホールでクラシック音楽（おんがく）を聞（き）きました。とても感動（かんどう）しましたから、記念（きねん）にCDを買（か）いました。",
              "vi": "Đã nghe nhạc cổ điển ở khán phòng. Vì quá xúc động nên chị đã mua một đĩa CD làm kỷ niệm."
            }
          ]
        }
      },
      "freeQuestions": [
        {
          "id": "p10-q2",
          "qJp": "あなたはどんな音楽（おんがく）が好きですか。楽器（がっき）を弾（ひ）くことができますか。",
          "qVi": "Bạn thích thể loại âm nhạc nào? Bạn có biết chơi nhạc cụ nào không?",
          "targetGrammar": "Bài 9: ～が好き / ～ことができます",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thích nhạc Pop",
              "jp": "ポップスが好きです。ギターを少し弾（ひ）くことができます。",
              "vi": "Tôi thích nhạc Pop. Tôi có thể chơi ghita một chút."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Nhạc trẻ, không biết chơi nhạc cụ",
              "jp": "ベトナムの若（わか）い音楽（おんがく）が好きです。楽器（がっき）は全然（ぜんぜん）できません。",
              "vi": "Tôi thích nhạc trẻ Việt Nam. Về nhạc cụ thì tôi hoàn toàn không biết chơi."
            },
            {
              "level": "alt",
              "label": "Cách 3: Nhạc Nhật Bản",
              "jp": "日本のJ-POPが好きです。ピアノを弾（ひ）くことができます。",
              "vi": "Tôi thích nhạc J-POP của Nhật. Tôi biết chơi piano."
            }
          ]
        },
        {
          "id": "p10-q3",
          "qJp": "ストレスがあるとき、どうやって解消（かいしょう）しますか。（どうしますか）",
          "qVi": "Khi bị căng thẳng/stress, bạn giải tỏa bằng cách nào? (Bạn làm gì?)",
          "targetGrammar": "Bài 11: Mẫu câu ～とき、どうしますか",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Ngủ thật nhiều",
              "jp": "たくさん寝（ね）ます。",
              "vi": "Tôi ngủ thật nhiều."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Chơi thể thao hoặc nghe nhạc",
              "jp": "友達（ともだち）とサッカーをしたり、好（す）きな音楽（おんがく）を聞（き）いたりします。",
              "vi": "Tôi đi đá bóng cùng bạn bè hoặc nghe bản nhạc mình yêu thích."
            },
            {
              "level": "alt",
              "label": "Cách 3: Đi ăn món ngon",
              "jp": "おいしいものを食（た）べて、散歩（さんぽ）をします。気持ちが良（よ）くなります。",
              "vi": "Tôi ăn món ngon rồi đi dạo hóng mát. Tâm trạng sẽ thấy tốt hơn."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "p11",
    "title": "Đề 11 (P11) · Căn phòng mới của bạn An",
    "shortTitle": "アンさんの新しい部屋",
    "focusGrammar": "Bài 07 · あります, AくてAです, 前は～が今は～",
    "badge": "Đề P11 · Bài 07",
    "katakanaWords": [
      "アパート",
      "ベッド",
      "テーブル",
      "エアコン"
    ],
    "reading": {
      "title": "「アンさんの新（あたら）しい部屋（へや）」",
      "passageJp": "アンさんは先週（せんしゅう）、大学（だいがく）の近（ちか）くのアパートに引（ひ）っ越（こ）しました。新（あたら）しい部屋（へや）は2階（かい）にあって、明（あか）るくて静（しず）かです。部屋（へや）の中（なか）に新（あたら）しいベッドやテーブルがあります。スーパーまで歩（ある）いて5分（ふん）ですから、とても便利（べんり）です。前（まえ）の部屋（へや）は狭（せま）かったですが、今（いま）の部屋（へや）は広（ひろ）くて、とても気（き）に入（い）っています。",
      "passageVi": "Bạn An tuần trước đã chuyển đến căn hộ gần trường đại học. Căn phòng mới ở tầng 2, sáng sủa và yên tĩnh. Trong phòng có chiếc giường mới và chiếc bàn. Đi bộ ra siêu thị chỉ mất 5 phút nên rất tiện lợi. Căn phòng trước đây thì chật hẹp, nhưng căn phòng hiện tại rộng rãi và bạn rất ưng ý.",
      "underlines": [
        "引（ひ）っ越（こ）しました。",
        "2階（かい）にあって、",
        "明（あか）るくて静（しず）かです。",
        "テーブルがあります。",
        "狭（せま）かったですが、",
        "気（き）に入（い）っています。"
      ],
      "vocabNotes": [
        {
          "word": "気（き）に入（い）る",
          "reading": "きにいる",
          "meaning": "Ưng ý, thích thú"
        },
        {
          "word": "引（ひ）っ越（こ）し",
          "reading": "ひっこし",
          "meaning": "Chuyển nhà"
        }
      ],
      "questions": [
        {
          "id": "p11-rq1",
          "qJp": "アンさんの新（あたら）しい部屋（へや）はどんな部屋（へや）ですか。",
          "qVi": "Căn phòng mới của bạn An là căn phòng như thế nào?",
          "targetGrammar": "Bài 04 & 08 · AくてAです",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "2階（かい）にあって、明（あか）るくて静（しず）かな部屋（へや）です。",
              "vi": "Ở tầng 2, là căn phòng sáng sủa và yên tĩnh."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "明（あか）るくて静（しず）かで、スーパーまで歩（ある）いて5分（ふん）で便利（べんり）な部屋（へや）です。",
              "vi": "Sáng sủa, yên tĩnh, và đi bộ 5 phút đến siêu thị rất tiện lợi."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "広（ひろ）くてきれいで、静（しず）かな部屋（へや）です。",
              "vi": "Căn phòng rộng, đẹp và yên tĩnh."
            }
          ]
        },
        {
          "id": "p11-rq2",
          "qJp": "前（まえ）の部屋（へや）と今（いま）の部屋（へや）はどう違（ちが）いますか。",
          "qVi": "Phòng trước đây và phòng bây giờ khác nhau thế nào?",
          "targetGrammar": "Bài 11 · 前は～が、今は～",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "前（まえ）は狭（せま）かったですが、今（いま）は広（ひろ）いです。",
              "vi": "Trước đây chật, nhưng bây giờ thì rộng rãi."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "前（まえ）の部屋（へや）は狭（せま）かったですが、今（いま）の部屋（へや）は広（ひろ）くて気（き）に入（い）っています。",
              "vi": "Phòng trước chật hẹp, nhưng phòng hiện tại rộng rãi và rất ưng ý."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "今（いま）の部屋（へや）のほうが広（ひろ）くて便利（べんり）です。",
              "vi": "Phòng hiện tại rộng và tiện lợi hơn."
            }
          ]
        }
      ]
    },
    "qa": {
      "picture": {
        "characterName": "伊藤（いとう）さん",
        "scenarioTitle": "伊藤さんのジムでの一日",
        "timelineHint": "昨日（きのう）",
        "panels": [
          {
            "stepNumber": 1,
            "characterLabels": [
              "いとう"
            ],
            "actionDescJp": "スポーツジムへ行（い）って着替（きが）えました。",
            "actionDescVi": "Đến phòng gym và thay đồ tập.",
            "sceneType": "clean",
            "location": "ジム更衣室",
            "iconName": "Dumbbell",
            "detailHint": "Đến phòng tập"
          },
          {
            "stepNumber": 2,
            "characterLabels": [
              "いとう"
            ],
            "actionDescJp": "ランニングマシンで30分（ぷん）走（はし）りました。",
            "actionDescVi": "Chạy bộ 30 phút trên máy chạy.",
            "sceneType": "walk",
            "location": "トレーニングルーム",
            "iconName": "Activity",
            "detailHint": "Chạy bộ máy tập"
          },
          {
            "stepNumber": 3,
            "characterLabels": [
              "いとう"
            ],
            "actionDescJp": "シャワーを浴（あ）びて、冷（つめ）たい水（みず）を飲（の）みました。",
            "actionDescVi": "Tắm vòi sen và uống nước mát lạnh.",
            "sceneType": "bath",
            "location": "シャワールーム",
            "iconName": "Droplet",
            "detailHint": "Tắm và uống nước"
          }
        ],
        "question": {
          "id": "p11-q1",
          "qJp": "伊藤（いとう）さんは昨日（きのう）ジムで何（なに）をしましたか。",
          "qVi": "Hôm qua anh Ito đã làm những gì ở phòng tập gym?",
          "targetGrammar": "Bài 11: Nối câu thể て",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thể て nối câu",
              "jp": "服（ふく）を着替（きが）えて、マシンで走（はし）って、シャワーを浴（あ）びました。",
              "vi": "Thay đồ tập, chạy trên máy tập, rồi tắm vòi sen."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Thể たり...たり",
              "jp": "ジムで走（はし）ったり、シャワーを浴（あ）びたりしました。",
              "vi": "Đã chạy bộ ở phòng gym, tắm vòi sen..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Chi tiết điểm 10",
              "jp": "ジムで30分（ぷん）走（はし）って運動（うんどう）しました。それからシャワーを浴（あ）びて水（みず）を飲（の）みました。",
              "vi": "Đã tập chạy 30 phút ở gym. Sau đó tắm vòi sen và uống nước mát."
            }
          ]
        }
      },
      "freeQuestions": [
        {
          "id": "p11-q2",
          "qJp": "体（からだ）の調子（ちょうし）が悪いとき、どうしますか。",
          "qVi": "Khi tình trạng sức khỏe không tốt / thấy mệt trong người, bạn làm gì?",
          "targetGrammar": "Bài 10/11: ～とき / Sức khỏe",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Uống thuốc và ngủ",
              "jp": "薬（くすり）を飲（の）んで寝（ね）ます。",
              "vi": "Tôi uống thuốc rồi đi ngủ."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Nghỉ học và đi bệnh viện",
              "jp": "学校（がっこう）を休（やす）んで、病院（びょういん）へ行（い）きます。",
              "vi": "Tôi xin nghỉ học rồi đi đến bệnh viện khám."
            },
            {
              "level": "alt",
              "label": "Cách 3: Uống nước ấm và nghỉ ngơi",
              "jp": "温（あたた）かいお茶（ちゃ）を飲（の）んで、部屋（へや）でゆっくり休（やす）みます。",
              "vi": "Tôi uống trà ấm rồi nghỉ ngơi yên tĩnh trong phòng."
            }
          ]
        },
        {
          "id": "p11-q3",
          "qJp": "毎晩（まいばん）寝（ね）る前（まえ）に、何（なに）をしますか。",
          "qVi": "Mỗi tối trước khi đi ngủ, bạn làm gì?",
          "targetGrammar": "Bài 10/11: Mẫu câu V-る前に / Thói quen",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Đánh răng",
              "jp": "歯（は）を磨（みが）きます。",
              "vi": "Tôi đánh răng."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Xem điện thoại một lát",
              "jp": "ベッドでスマートフォンを見（み）たり、音楽（おんがく）を聞（き）いたりします。",
              "vi": "Tôi lướt điện thoại trên giường hoặc nghe nhạc..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Ôn bài tiếng Nhật",
              "jp": "今日（きょう）勉強（べんきょう）した日本語（にほんご）の単語（たんご）を復習（ふくしゅう）します。",
              "vi": "Tôi ôn lại các từ vựng tiếng Nhật đã học trong ngày."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "p12",
    "title": "Đề 12 (P12) · Thói quen sinh hoạt của anh Kobayashi",
    "shortTitle": "小林さんの健康生活",
    "focusGrammar": "Bài 11 · 前は～が今は～, ～たり～たり, ～ています",
    "badge": "Đề P12 · Bài 11",
    "katakanaWords": [
      "ジュース",
      "サラダ",
      "ジム",
      "スポーツ"
    ],
    "reading": {
      "title": "「小林（こばやし）さんの健康（けんこう）生活（せいかつ）」",
      "passageJp": "小林（こばやし）さんは毎朝（まいあさ）7時（じ）に起（お）きて、野菜（やさい）のジュースを飲（の）みます。前（まえ）は朝（あさ）ごはんをあまり食（た）べませんでしたが、今（いま）はパンやサラダをたくさん食（た）べています。会社（かいしゃ）の帰（かえ）りに1週間（しゅうかん）に2回（かい）ジムへ行（い）って、走（はし）ったり泳（およ）いだりします。夜（よる）は11時（じ）までに寝（ね）ています。体（からだ）の調子（ちょうし）がとても良（よ）くなりました。",
      "passageVi": "Anh Kobayashi mỗi sáng thức dậy lúc 7 giờ và uống nước ép rau củ. Trước đây anh ít khi ăn sáng, nhưng bây giờ anh ăn nhiều bánh mì và salad. Trên đường từ công ty về, mỗi tuần anh đi phòng tập gym 2 lần, chạy bộ và bơi lội... Buổi tối anh đi ngủ trước 11 giờ. Sức khỏe của anh đã trở nên rất tốt.",
      "underlines": [
        "食（た）べませんでしたが、",
        "食（た）べています。",
        "走（はし）ったり",
        "泳（およ）いだりします。",
        "寝（ね）ています。",
        "良（よ）くなりました。"
      ],
      "vocabNotes": [
        {
          "word": "体（からだ）の調子（ちょうし）",
          "reading": "からだのちょうし",
          "meaning": "Tình trạng sức khỏe"
        },
        {
          "word": "帰（かえ）りに",
          "reading": "かえりに",
          "meaning": "Trên đường về"
        }
      ],
      "questions": [
        {
          "id": "p12-rq1",
          "qJp": "小林（こばやし）さんは前（まえ）と今（いま）で、朝（あさ）ごはんがどう変（か）わりましたか。",
          "qVi": "Anh Kobayashi trước đây và bây giờ bữa sáng thay đổi như thế nào?",
          "targetGrammar": "Bài 11 · 前は～が、今は～",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "前（まえ）はあまり食（た）べませんでしたが、今（いま）はたくさん食（た）べています。",
              "vi": "Trước đây ít ăn, nhưng bây giờ ăn nhiều."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "前（まえ）は食（た）べませんでしたが、今（いま）は毎朝（まいあさ）パンやサラダをたくさん食（た）べています。",
              "vi": "Trước đây không ăn, nhưng bây giờ mỗi sáng ăn nhiều bánh mì và salad."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "今（いま）は毎朝（まいあさ）きちんと食（た）べています。",
              "vi": "Bây giờ mỗi sáng đều ăn uống đầy đủ."
            }
          ]
        },
        {
          "id": "p12-rq2",
          "qJp": "小林（こばやし）さんはジムでどんなことをしますか。",
          "qVi": "Anh Kobayashi ở phòng tập gym làm những việc gì?",
          "targetGrammar": "Bài 11 · ～たり～たりします",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "走（はし）ったり泳（およ）いだりします。",
              "vi": "Anh ấy chạy bộ, bơi lội..."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "会社（かいしゃ）の帰（かえ）りに1週間（しゅうかん）に2回（かい）ジムへ行（い）って、走（はし）ったり泳（およ）いだりします。",
              "vi": "Trên đường đi làm về, mỗi tuần 2 lần anh ấy đến phòng gym chạy bộ và bơi lội."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "運動（うんどう）をして汗（あせ）を流（なが）します。",
              "vi": "Anh ấy tập thể thao để rèn luyện."
            }
          ]
        }
      ]
    },
    "qa": {
      "picture": {
        "characterName": "キムさん",
        "scenarioTitle": "キムさんの買い物",
        "timelineHint": "昨日（きのう）",
        "panels": [
          {
            "stepNumber": 1,
            "characterLabels": [
              "キム"
            ],
            "actionDescJp": "エレベーターに乗（の）って4階（かい）へ行（い）きました。",
            "actionDescVi": "Đi thang máy lên tầng 4.",
            "sceneType": "walk",
            "location": "デパートのエレベーター",
            "iconName": "ArrowUpCircle",
            "detailHint": "Đi thang máy lên lầu"
          },
          {
            "stepNumber": 2,
            "characterLabels": [
              "キム",
              "店員"
            ],
            "actionDescJp": "店員（てんいん）さんと一緒（いっしょ）にネクタイを選（えら）びました。",
            "actionDescVi": "Cùng nhân viên chọn chiếc cà vạt đẹp.",
            "sceneType": "shop",
            "location": "紳士服売り場",
            "iconName": "ShoppingBag",
            "detailHint": "Chọn cà vạt"
          },
          {
            "stepNumber": 3,
            "characterLabels": [
              "キム",
              "店員"
            ],
            "actionDescJp": "きれいにプレゼントを包（つつ）んでもらいました。",
            "actionDescVi": "Nhờ nhân viên gói hộp quà thật đẹp.",
            "sceneType": "gift",
            "location": "レジカウンター",
            "iconName": "Gift",
            "detailHint": "Gói hộp quà tặng"
          }
        ],
        "question": {
          "id": "p12-q1",
          "qJp": "キムさんは昨日（きのう）デパートで何（なに）をしましたか。",
          "qVi": "Hôm qua bạn Kim đã làm những gì ở trung tâm thương mại?",
          "targetGrammar": "Bài 11: Nối câu thể て",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thể て nối câu",
              "jp": "エレベーターで4階（かい）へ行（い）って、ネクタイを選（えら）んで、プレゼントを買（か）いました。",
              "vi": "Đi thang máy lên tầng 4, chọn cà vạt, rồi mua món quà."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Thể たり...たり",
              "jp": "店員（てんいん）さんとネクタイを選（えら）んだり、プレゼントを包（つつ）んでもらったりしました。",
              "vi": "Đã cùng nhân viên chọn cà vạt, nhờ gói quà..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Chi tiết điểm 10",
              "jp": "父（ちち）の誕生日（たんじょうび）プレゼントを買（か）いました。ネクタイを選（えら）んでから、きれいにラッピングしてもらいました。",
              "vi": "Đã mua quà sinh nhật cho bố. Sau khi chọn cà vạt thì nhờ nhân viên gói thật đẹp."
            }
          ]
        }
      },
      "freeQuestions": [
        {
          "id": "p12-q2",
          "qJp": "父（ちち）の日（ひ）や誕生日（たんじょうび）に、お父（とう）さんに何（なに）をあげましたか。",
          "qVi": "Vào ngày của Cha hoặc sinh nhật bố, bạn đã tặng gì cho bố?",
          "targetGrammar": "Bài 8: Mẫu câu ～に～をあげました",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Áo sơ mi",
              "jp": "シャツをあげました。",
              "vi": "Tôi đã tặng áo sơ mi."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Cà vạt và lời chúc",
              "jp": "きれいなネクタイをあげました。父（ちち）はとても喜（よろこ）んでくれました。",
              "vi": "Tôi tặng một chiếc cà vạt đẹp. Bố tôi đã rất vui mừng."
            },
            {
              "level": "alt",
              "label": "Cách 3: Trà ngon và ví da",
              "jp": "おいしいお茶（ちゃ）と財布（さいふ）をあげました。",
              "vi": "Tôi tặng trà ngon và một chiếc ví."
            }
          ]
        },
        {
          "id": "p12-q3",
          "qJp": "道（みち）がわからないとき、どうしますか。",
          "qVi": "Khi không biết đường, bạn làm gì?",
          "targetGrammar": "Bài 10/11: ～とき / Phương hướng",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Tra bản đồ điện thoại",
              "jp": "Googleマップで調（しら）べます。",
              "vi": "Tôi tra bản đồ Google Maps."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Hỏi người qua đường hoặc cảnh sát",
              "jp": "交番（こうばん）の警察官（けいさつかん）や近（ちか）くの人（ひと）に道（みち）を聞（き）きます。",
              "vi": "Tôi hỏi đường cảnh sát ở bốt giao thông hoặc người gần đó."
            },
            {
              "level": "alt",
              "label": "Cách 3: Tra điện thoại và hỏi",
              "jp": "スマートフォンで調（しら）べたり、店（みせ）の人（ひと）に聞（き）いたりします。",
              "vi": "Tôi vừa tra bằng điện thoại vừa hỏi người trong cửa hàng."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "p13",
    "title": "Đề 13 (P13) · Chuyến đi vườn thú của anh Ito",
    "shortTitle": "伊藤さんの動物園ツアー",
    "focusGrammar": "Bài 10 · 見えます, ～ないでください, ～てから",
    "badge": "Đề P13 · Bài 10",
    "katakanaWords": [
      "バス",
      "チケット",
      "アイスクリーム",
      "カメラ"
    ],
    "reading": {
      "title": "「伊藤（いとう）さんの動物園（どうぶつえん）ツアー」",
      "passageJp": "伊藤（いとう）さんは日曜日（にちようび）、家族（かぞく）と一緒（いっしょ）に動物園（どうぶつえん）へ行（い）きました。駅（えき）からバスに乗（の）って、20分（ぷん）くらいで着（つ）きました。入口（いりぐち）でチケットを買（か）ってから、中（なか）に入（はい）りました。大（おお）きいゾウやかわいいパンダが見（み）えました。看板（かんばん）に「動物（どうぶつ）に食（た）べ物（もの）をやらないでください」と書（か）いてありました。帰（かえ）りにみんなでおいしいアイスクリームを食（た）べました。",
      "passageVi": "Anh Ito vào Chủ nhật đã cùng gia đình đi vườn thú. Từ ga lên xe buýt, mất khoảng 20 phút là đến nơi. Sau khi mua vé ở lối vào thì bước vào bên trong. Có thể nhìn thấy những chú voi to lớn và gấu trúc dễ thương. Trên biển báo có ghi 'Xin đừng cho động vật ăn'. Lúc về, mọi người cùng ăn kem rất ngon.",
      "underlines": [
        "乗（の）って、",
        "買（か）ってから、",
        "入（はい）りました。",
        "見（み）えました。",
        "やらないでください",
        "食（た）べました。"
      ],
      "vocabNotes": [
        {
          "word": "看板（かんばん）",
          "reading": "かんばん",
          "meaning": "Biển hiệu, biển báo"
        },
        {
          "word": "やる（やります）",
          "meaning": "Cho (động vật ăn, tưới cây)"
        }
      ],
      "questions": [
        {
          "id": "p13-rq1",
          "qJp": "伊藤（いとう）さんは動物園（どうぶつえん）でどんな動物（どうぶつ）を見（み）ましたか。",
          "qVi": "Anh Ito ở vườn thú đã nhìn thấy những con vật nào?",
          "targetGrammar": "Bài 10 · ～が見えました",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "大（おお）きいゾウやかわいいパンダを見（み）ました。",
              "vi": "Anh ấy thấy voi to và gấu trúc dễ thương."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "大（おお）きいゾウやかわいいパンダが見（み）えて、写真（しゃしん）を撮（と）りました。",
              "vi": "Anh ấy nhìn thấy voi to và gấu trúc dễ thương, rồi chụp ảnh."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "ゾウとパンダです。",
              "vi": "Là voi và gấu trúc."
            }
          ]
        },
        {
          "id": "p13-rq2",
          "qJp": "看板（かんばん）には何（なん）と書（か）いてありましたか。",
          "qVi": "Trên biển báo có ghi chữ gì?",
          "targetGrammar": "Bài 10 · ～ないでくださいと書いてありました",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "「動物（どうぶつ）に食（た）べ物（もの）をやらないでください」と書（か）いてありました。",
              "vi": "Có ghi: 'Xin đừng cho động vật ăn'."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "看板（かんばん）に「動物（どうぶつ）に食（た）べ物（もの）をやらないでください」と大（おお）きく書（か）いてありました。",
              "vi": "Trên biển báo có ghi chữ rất to: 'Xin đừng cho động vật ăn'."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "動物（どうぶつ）に餌（えさ）をあげないでくださいということです。",
              "vi": "Nghĩa là xin đừng cho động vật đồ ăn."
            }
          ]
        }
      ]
    },
    "qa": {
      "picture": {
        "characterName": "小林（こばやし）さん",
        "scenarioTitle": "小林さんの映画の日",
        "timelineHint": "先週（せんしゅう）の日曜日（にちようび）",
        "panels": [
          {
            "stepNumber": 1,
            "characterLabels": [
              "こばやし",
              "友達"
            ],
            "actionDescJp": "映画館（えいがかん）の前（まえ）で友達（ともだち）と会（あ）いました。",
            "actionDescVi": "Gặp gỡ bạn bè trước rạp chiếu phim.",
            "sceneType": "meet",
            "location": "映画館前",
            "iconName": "Users",
            "detailHint": "Gặp bạn trước rạp"
          },
          {
            "stepNumber": 2,
            "characterLabels": [
              "こばやし"
            ],
            "actionDescJp": "チケットとポップコーンを買（か）いました。",
            "actionDescVi": "Mua vé xem phim và bắp rang bơ.",
            "sceneType": "shop",
            "location": "売店",
            "iconName": "Film",
            "detailHint": "Mua vé và bắp rang"
          },
          {
            "stepNumber": 3,
            "characterLabels": [
              "こばやし",
              "友達"
            ],
            "actionDescJp": "大（おお）きなスクリーンで映画（えいが）を見（み）ました。",
            "actionDescVi": "Xem phim trên màn hình lớn cùng bạn bè.",
            "sceneType": "cinema",
            "location": "シアター",
            "iconName": "Tv",
            "detailHint": "Thưởng thức bộ phim"
          }
        ],
        "question": {
          "id": "p13-q1",
          "qJp": "小林（こばやし）さんは先週（せんしゅう）の日曜日（にちようび）に何（なに）をしましたか。",
          "qVi": "Chủ Nhật tuần trước anh Kobayashi đã làm những gì?",
          "targetGrammar": "Bài 11: Nối câu thể て",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thể て nối câu",
              "jp": "友達（ともだち）に会（あ）って、ポップコーンを買（か）って、映画（えいが）を見（み）ました。",
              "vi": "Gặp bạn bè, mua bắp rang bơ, rồi xem phim."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Thể たり...たり",
              "jp": "友達（ともだち）と映画（えいが）を見（み）たり、ポップコーンを食（た）べたりしました。",
              "vi": "Đã xem phim cùng bạn, ăn bắp rang bơ..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Trình tự chi tiết",
              "jp": "映画館（えいがかん）の前（まえ）で友達（ともだち）と待（ま）ち合（あ）わせしました。それからアクション映画（えいが）を見（み）て、とても楽（たの）しかったです。",
              "vi": "Đã hẹn gặp bạn trước rạp chiếu phim. Sau đó xem phim hành động, rất là vui."
            }
          ]
        }
      },
      "freeQuestions": [
        {
          "id": "p13-q2",
          "qJp": "あなたは映画館（えいがかん）へ映画（えいが）を見（み）に行（い）くことが好きですか。どんな映画（えいが）が好きですか。",
          "qVi": "Bạn có thích đến rạp xem phim không? Bạn thích thể loại phim nào?",
          "targetGrammar": "Bài 9: Mẫu câu ～ことが好き / Sở thích",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thích hoạt hình",
              "jp": "はい、好きです。日本のアニメ映画（えいが）が好きです。",
              "vi": "Vâng, tôi thích. Tôi thích phim hoạt hình anime của Nhật."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Thích phim hành động và hài",
              "jp": "はい、大好（だいす）きです。アクションやコメディ映画（えいが）をよく見（み）ます。",
              "vi": "Vâng, tôi rất thích. Tôi hay xem phim hành động hoặc hài hước."
            },
            {
              "level": "alt",
              "label": "Cách 3: Xem ở nhà hơn",
              "jp": "映画館（えいがかん）へあまり行（い）きません。家（いえ）でパソコンで見（み）るのが好きです。",
              "vi": "Tôi ít khi ra rạp. Tôi thích xem trên máy tính ở nhà hơn."
            }
          ]
        },
        {
          "id": "p13-q3",
          "qJp": "今度（こんど）の日曜日（にちようび）、何（なに）をする予定（よてい）ですか。（何（なに）をしますか）",
          "qVi": "Chủ Nhật tới bạn dự định làm gì? (Bạn sẽ làm gì?)",
          "targetGrammar": "Bài 11: Dự định / ～たり～たり",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Học bài ở nhà",
              "jp": "家（いえ）で日本語（にほんご）を勉強（べんきょう）します。",
              "vi": "Tôi học tiếng Nhật ở nhà."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đi chơi với bạn bè",
              "jp": "友達（ともだち）とカフェへ行（い）ったり、映画（えいが）を見（み）たりするつもりです。",
              "vi": "Tôi định đi cà phê cùng bạn hoặc đi xem phim..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Về quê thăm gia đình",
              "jp": "実家（じっか）へ帰（かえ）って、両親（りょうしん）に会（あ）います。",
              "vi": "Tôi về quê thăm bố mẹ."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "p14",
    "title": "Đề 14 (P14) · Việc học tiếng Nhật của bạn Maria",
    "shortTitle": "マリアさんの日本語の勉強",
    "focusGrammar": "Bài 09 · 趣味は～ことです, ～ことができます, ～たり～たり",
    "badge": "Đề P14 · Bài 09",
    "katakanaWords": [
      "アニメ",
      "クラスメイト",
      "ノート",
      "カラオケ"
    ],
    "reading": {
      "title": "「マリアさんの日本語（にほんご）の勉強（べんきょう）」",
      "passageJp": "マリアさんの趣味（しゅみ）は日本（にほん）のアニメを見（み）ることです。毎晩（まいばん）宿題（しゅくだい）をしてから、アニメを1時間（じかん）見（み）ています。わからない言葉（ことば）があるとき、辞書（じしょ）で調（しら）べたり、ノートに書（か）いたりします。今（いま）はひらがなとカタカナを全部（ぜんぶ）読（よ）むことができます。週末（しゅうまつ）はクラスメイトとカラオケへ行（い）って、日本語（にほんご）の歌（うた）を歌（うた）っています。",
      "passageVi": "Sở thích của Maria là xem phim hoạt hình Nhật Bản. Mỗi tối sau khi làm bài tập, bạn xem anime 1 tiếng. Khi có từ không hiểu, bạn tra từ điển hoặc viết vào vở ghi... Bây giờ bạn có thể đọc được toàn bộ chữ Hiragana và Katakana. Cuối tuần bạn đi hát karaoke cùng bạn cùng lớp và hát những bài hát tiếng Nhật.",
      "underlines": [
        "見（み）ることです。",
        "宿題（しゅくだい）をしてから、",
        "見（み）ています。",
        "あるとき、",
        "調（しら）べたり、",
        "書（か）いたりします。",
        "読（よ）むことができます。"
      ],
      "vocabNotes": [
        {
          "word": "言葉（ことば）",
          "reading": "ことば",
          "meaning": "Từ vựng, từ ngữ"
        },
        {
          "word": "調（しら）べます",
          "reading": "しらべます",
          "meaning": "Tra cứu, tìm kiếm"
        }
      ],
      "questions": [
        {
          "id": "p14-rq1",
          "qJp": "マリアさんはわからない言葉（ことば）があるとき、どうしますか。",
          "qVi": "Maria khi có từ không hiểu thì làm như thế nào?",
          "targetGrammar": "Bài 11 · ～とき, ～たり～たりします",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "辞書（じしょ）で調（しら）べたり、ノートに書（か）いたりします。",
              "vi": "Bạn ấy tra từ điển, ghi vào vở..."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "わからない言葉（ことば）があるとき、辞書（じしょ）で調（しら）べてノートにメモします。",
              "vi": "Khi có từ không hiểu, bạn ấy tra từ điển rồi ghi chú lại vào vở."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "辞書（じしょ）を使（つか）って調（しら）べます。",
              "vi": "Bạn ấy dùng từ điển để tra cứu."
            }
          ]
        },
        {
          "id": "p14-rq2",
          "qJp": "マリアさんは週末（しゅうまつ）、クラスメイトと何（なに）をしますか。",
          "qVi": "Maria vào cuối tuần làm gì cùng bạn cùng lớp?",
          "targetGrammar": "Bài 11 · ～ています",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "カラオケへ行（い）って、日本語（にほんご）の歌（うた）を歌（うた）っています。",
              "vi": "Bạn ấy đi hát karaoke và hát bài hát tiếng Nhật."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "週末（しゅうまつ）はクラスメイトと一緒（いっしょ）にカラオケへ行（い）って楽（たの）しく歌（うた）います。",
              "vi": "Cuối tuần bạn ấy cùng bạn cùng lớp đi karaoke và hát rất vui vẻ."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "カラオケで歌（うた）を歌（うた）います。",
              "vi": "Bạn ấy hát tại quán karaoke."
            }
          ]
        }
      ]
    },
    "qa": {
      "picture": {
        "characterName": "ナムさん",
        "scenarioTitle": "ナムさんの図書館での一日",
        "timelineHint": "昨日（きのう）",
        "panels": [
          {
            "stepNumber": 1,
            "characterLabels": [
              "ナム"
            ],
            "actionDescJp": "受付（うけつけ）でカードを作（つく）って入（はい）りました。",
            "actionDescVi": "Làm thủ tục thẻ tại quầy lễ tân rồi vào trong.",
            "sceneType": "study",
            "location": "図書館受付",
            "iconName": "CreditCard",
            "detailHint": "Xuất trình thẻ sinh viên"
          },
          {
            "stepNumber": 2,
            "characterLabels": [
              "ナム"
            ],
            "actionDescJp": "棚（たな）から本（ほん）を探（さが）して読（よ）みました。",
            "actionDescVi": "Tìm sách trên kệ và ngồi đọc.",
            "sceneType": "study",
            "location": "書架コーナー",
            "iconName": "BookOpen",
            "detailHint": "Tìm và đọc sách"
          },
          {
            "stepNumber": 3,
            "characterLabels": [
              "ナム"
            ],
            "actionDescJp": "コピー機（き）で資料（しりょう）をコピーしました。",
            "actionDescVi": "Photo tài liệu học tập bằng máy photocopy.",
            "sceneType": "study",
            "location": "コピーコーナー",
            "iconName": "Printer",
            "detailHint": "Photo tài liệu"
          }
        ],
        "question": {
          "id": "p14-q1",
          "qJp": "ナムさんは昨日（きのう）図書館（としょかん）で何（なに）をしましたか。",
          "qVi": "Hôm qua bạn Nam đã làm những gì ở thư viện?",
          "targetGrammar": "Bài 11: Nối câu thể て",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thể て",
              "jp": "受付（うけつけ）へ行（い）って、本（ほん）を読（よ）んで、コピーをしました。",
              "vi": "Đến quầy lễ tân, đọc sách, rồi photocopy."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Thể たり...たり",
              "jp": "図書館（としょかん）で本（ほん）を読（よ）んだり、資料（しりょう）をコピーしたりしました。",
              "vi": "Đã đọc sách ở thư viện, photo tài liệu..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Chi tiết điểm cao",
              "jp": "学生証（がくせいしょう）を見（み）せてから本（ほん）を探（さが）して読（よ）みました。それからコピー機（き）でコピーしました。",
              "vi": "Sau khi xuất trình thẻ sinh viên thì tìm đọc sách. Tiếp đó photo tài liệu bằng máy photo."
            }
          ]
        }
      },
      "freeQuestions": [
        {
          "id": "p14-q2",
          "qJp": "あなたは1か月（げつ）に何冊（なんさつ）くらい本（ほん）を読（よ）みますか。",
          "qVi": "Một tháng bạn đọc khoảng mấy cuốn sách?",
          "targetGrammar": "Bài 9: Tần suất 1か月に～冊",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: 1 hoặc 2 cuốn",
              "jp": "1冊（いっさつ）か2冊（にさつ）読（よ）みます。",
              "vi": "Tôi đọc 1 hoặc 2 cuốn."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đọc sách chuyên ngành hoặc tiểu thuyết",
              "jp": "1か月（げつ）に2冊（にさつ）くらい読（よ）みます。小説（しょうせつ）や技術（ぎじゅつ）の本（ほん）が好きです。",
              "vi": "Khoảng 2 cuốn một tháng. Tôi thích đọc tiểu thuyết và sách công nghệ."
            },
            {
              "level": "alt",
              "label": "Cách 3: Đọc truyện tranh trên điện thoại",
              "jp": "紙（かみ）の本（ほん）はあまり読（よ）みませんが、スマートフォンで漫画（まんが）をよく読（よ）みます。",
              "vi": "Sách giấy thì tôi ít đọc, nhưng tôi hay đọc truyện tranh trên điện thoại."
            }
          ]
        },
        {
          "id": "p14-q3",
          "qJp": "試験（しけん）の前（まえ）に、どうやって勉強（べんきょう）しますか。",
          "qVi": "Trước kỳ thi, bạn học bài bằng cách nào?",
          "targetGrammar": "Bài 9/11: どうやって / Phương pháp học",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Học từ vựng và ngữ pháp",
              "jp": "単語（たんご）と文法（ぶんぽう）を復習（ふくしゅう）します。",
              "vi": "Tôi ôn lại từ vựng và ngữ pháp."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Làm bài tập và hỏi bạn",
              "jp": "教科書（きょうかしょ）の問題（もんだい）をたくさん解（と）いたり、友達（ともだち）と一緒（いっしょ）に勉強（べんきょう）したりします。",
              "vi": "Tôi làm nhiều bài tập trong sách, cùng học nhóm với bạn bè..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Lên thư viện tự học",
              "jp": "静（しず）かな図書館（としょかん）へ行（い）って、過去問（かこもん）を練習（れんしゅう）します。",
              "vi": "Tôi lên thư viện yên tĩnh để luyện đề thi các năm trước."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "p15",
    "title": "Đề 15 (P15) · Chuyến mua sắm của chị Watanabe",
    "shortTitle": "渡辺さんのデパートでの買い物",
    "focusGrammar": "Bài 07 · ～てから, ～たり～たり, ～に入れます",
    "badge": "Đề P15 · Bài 07",
    "katakanaWords": [
      "デパート",
      "エレベーター",
      "レストラン",
      "シャツ"
    ],
    "reading": {
      "title": "「渡辺（わたなべ）さんのデパートでの買（か）い物（もの）」",
      "passageJp": "渡辺（わたなべ）さんは昨日（きのう）、友達（ともだち）と一緒（いっしょ）に大（おお）きいデパートへ行（い）きました。エレベーターで3階（かい）へ行（い）って、服（ふく）を見（み）ました。白（しろ）くてきれいなシャツを買（か）ってから、5階（かい）のレストランへ行（い）きました。レストランで天（てん）ぷらを食（た）べたり、お茶（ちゃ）を飲（の）んだりしました。店員（てんいん）さんはとても親切（しんせつ）でした。買（か）い物（もの）袋（ぶくろ）を車（くるま）に入（い）れて、夕方（ゆうがた）家（いえ）に帰（かえ）りました。",
      "passageVi": "Chị Watanabe hôm qua đã cùng bạn đi đến một trung tâm thương mại lớn. Đi thang máy lên tầng 3 và xem quần áo. Sau khi mua chiếc áo sơ mi trắng đẹp thì chị lên nhà hàng ở tầng 5. Ở nhà hàng, chị ăn món tempura, uống trà... Nhân viên bán hàng rất thân thiện. Chị để các túi đồ mua sắm vào xe rồi chiều tối trở về nhà.",
      "underlines": [
        "3階（かい）へ行（い）って、",
        "買（か）ってから、",
        "食（た）べたり、",
        "飲（の）んだりしました。",
        "車（くるま）に入（い）れて、",
        "帰（かえ）りました。"
      ],
      "vocabNotes": [
        {
          "word": "天（てん）ぷら",
          "reading": "てんぷら",
          "meaning": "Món tempura chiên giòn"
        },
        {
          "word": "店員（てんいん）",
          "reading": "てんいん",
          "meaning": "Nhân viên bán hàng"
        }
      ],
      "questions": [
        {
          "id": "p15-rq1",
          "qJp": "渡辺（わたなべ）さんは3階（かい）で何（なに）を買（か）いましたか。",
          "qVi": "Chị Watanabe đã mua gì ở tầng 3?",
          "targetGrammar": "Bài 04 & 08 · Tính từ + 名詞",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "白（しろ）くてきれいなシャツを買（か）いました。",
              "vi": "Chị ấy mua một chiếc áo sơ mi trắng đẹp."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "3階（かい）の服（ふく）売（う）り場（ば）で、白（しろ）くてきれいなシャツを買（か）いました。",
              "vi": "Ở quầy quần áo tầng 3, chị ấy đã mua chiếc sơ mi trắng đẹp."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "きれいな白いシャツです。",
              "vi": "Là chiếc áo sơ mi trắng đẹp."
            }
          ]
        },
        {
          "id": "p15-rq2",
          "qJp": "レストランでどんなことをしましたか。",
          "qVi": "Ở nhà hàng, chị Watanabe đã làm những việc gì?",
          "targetGrammar": "Bài 11 · ～たり～たりしました",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "天（てん）ぷらを食（た）べたり、お茶（ちゃ）を飲（の）んだりしました。",
              "vi": "Chị ấy ăn món tempura, uống trà..."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "5階（かい）のレストランで友達（ともだち）と天（てん）ぷらを食（た）べたりお茶（ちゃ）を飲（の）んだりしました。",
              "vi": "Ở nhà hàng tầng 5, chị ấy cùng bạn ăn tempura và uống trà."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "おいしい天（てん）ぷらを食（た）べました。",
              "vi": "Chị ấy đã ăn món tempura ngon."
            }
          ]
        }
      ]
    },
    "qa": {
      "picture": {
        "characterName": "加藤（かとう）さん",
        "scenarioTitle": "加藤さんのパーティー準備",
        "timelineHint": "昨日（きのう）",
        "panels": [
          {
            "stepNumber": 1,
            "characterLabels": [
              "かとう"
            ],
            "actionDescJp": "ケーキ屋（や）でバースデーケーキを買（か）いました。",
            "actionDescVi": "Mua bánh kem sinh nhật ở tiệm bánh.",
            "sceneType": "shop",
            "location": "ケーキ屋",
            "iconName": "Cake",
            "detailHint": "Mua bánh sinh nhật"
          },
          {
            "stepNumber": 2,
            "characterLabels": [
              "かとう",
              "友達"
            ],
            "actionDescJp": "部屋（へや）に風船（ふうせん）を飾（かざ）って準備（じゅんび）しました。",
            "actionDescVi": "Trang trí bóng bay trong phòng.",
            "sceneType": "party",
            "location": "パーティー会場",
            "iconName": "PartyPopper",
            "detailHint": "Trang trí phòng tiệc"
          },
          {
            "stepNumber": 3,
            "characterLabels": [
              "かとう",
              "主役の友達"
            ],
            "actionDescJp": "友達（ともだち）にプレゼントを渡（わた）してお祝（いわ）いしました。",
            "actionDescVi": "Tặng quà và chúc mừng sinh nhật bạn.",
            "sceneType": "gift",
            "location": "部屋",
            "iconName": "Gift",
            "detailHint": "Tặng quà chúc mừng"
          }
        ],
        "question": {
          "id": "p15-q1",
          "qJp": "加藤（かとう）さんは昨日（きのう）何（なに）をしましたか。",
          "qVi": "Hôm qua anh Kato đã làm những gì?",
          "targetGrammar": "Bài 11: Nối câu thể て",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thể て nối chuỗi",
              "jp": "ケーキを買（か）って、部屋（へや）を飾（かざ）って、プレゼントをあげました。",
              "vi": "Mua bánh kem, trang trí phòng, rồi tặng quà."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Thể たり...たり",
              "jp": "ケーキを買（か）ったり、部屋（へや）に風船（ふうせん）を飾（かざ）ったりしました。",
              "vi": "Đã mua bánh kem, trang trí bóng bay trong phòng..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Trình tự chi tiết",
              "jp": "友達（ともだち）の誕生日のためにケーキを買（か）いました。そして部屋（へや）を飾（かざ）って、みんなでお祝（いわ）いしました。",
              "vi": "Đã mua bánh kem cho sinh nhật bạn. Sau đó trang trí phòng và mọi người cùng chúc mừng."
            }
          ]
        }
      },
      "freeQuestions": [
        {
          "id": "p15-q2",
          "qJp": "友達（ともだち）の誕生日（たんじょうび）に、プレゼントをあげたことがありますか。何（なに）をあげましたか。",
          "qVi": "Bạn đã từng tặng quà sinh nhật cho bạn bè chưa? Bạn đã tặng gì?",
          "targetGrammar": "Bài 8: Mẫu câu ～をあげました",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Tặng sách",
              "jp": "はい、あります。本（ほん）をあげました。",
              "vi": "Vâng, có ạ. Tôi đã tặng một cuốn sách."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Tặng áo và thiệp viết tay",
              "jp": "はい、きれいな服（ふく）と手紙（てがみ）をあげました。とても喜（よろこ）んでくれました。",
              "vi": "Vâng, tôi tặng chiếc áo đẹp và thiệp viết tay. Bạn ấy đã rất vui."
            },
            {
              "level": "alt",
              "label": "Cách 3: Mời đi ăn lẩu",
              "jp": "物（もの）じゃなくて、一緒（いっしょ）においしい鍋（なべ）料理（りょうり）をごちそうしてあげました。",
              "vi": "Không phải hiện vật, mà tôi mời bạn ấy đi ăn một bữa lẩu thật ngon."
            }
          ]
        },
        {
          "id": "p15-q3",
          "qJp": "うれしいとき、誰（だれ）に一番（いちばん）最初（さいしょ）に話（はな）しますか。",
          "qVi": "Khi có chuyện vui, bạn chia sẻ với ai đầu tiên?",
          "targetGrammar": "Bài 8/11: ～とき / Gia đình, bạn bè",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Nói với mẹ",
              "jp": "母（はは）に話（はな）します。",
              "vi": "Tôi nói với mẹ."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Kể cho bạn thân",
              "jp": "一番（いちばん）仲（なか）がいい友達（ともだち）にすぐメッセージを送（おく）って話（はな）します。",
              "vi": "Tôi lập tức nhắn tin kể cho người bạn thân nhất."
            },
            {
              "level": "alt",
              "label": "Cách 3: Chia sẻ với gia đình",
              "jp": "家族（かぞく）のグループチャットで報告（ほうこく）します。",
              "vi": "Tôi thông báo trong nhóm chat chung của gia đình."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "p16",
    "title": "Đề 16 (P16) · Chuyến đi biển mùa hè của anh Nakamura",
    "shortTitle": "中村さんの夏の海旅行",
    "focusGrammar": "Bài 06 · So sánh より, ～たり～たり, ～ました",
    "badge": "Đề P16 · Bài 06",
    "katakanaWords": [
      "ホテル",
      "カメラ",
      "ジュース",
      "レストラン"
    ],
    "reading": {
      "title": "「中村（なかむら）さんの夏（なつ）の海（うみ）旅行（りょこう）」",
      "passageJp": "中村（なかむら）さんは先月（せんげつ）、友達（ともだち）と電車（でんしゃ）に乗（の）って海（うみ）へ行（い）きました。海（うみ）の近（ちか）くのホテルに泊（と）まりました。朝（あさ）は青（あお）い海（うみ）で泳（およ）いだり、写真（しゃしん）を撮（と）ったりしました。昼（ひる）ごはんは海（うみ）の近（ちか）くのレストランで新（あたら）しい魚（さかな）を食（た）べました。東京（とうきょう）より涼（すず）しくて、空気（くうき）がとてもきれいでした。新（あたら）しいカメラで写真（しゃしん）をたくさん撮（と）りました。",
      "passageVi": "Anh Nakamura tháng trước đã cùng bạn bè đi tàu điện về vùng biển. Họ trọ tại một khách sạn gần biển. Buổi sáng bơi ở biển xanh, chụp ảnh... Bữa trưa ăn cá tươi ở nhà hàng ven biển. Ở đó mát mẻ hơn Tokyo và không khí rất trong lành. Anh chụp rất nhiều ảnh bằng chiếc máy ảnh mới.",
      "underlines": [
        "乗（の）って、",
        "行（い）きました。",
        "泳（およ）いだり、",
        "撮（と）ったりしました。",
        "東京（とうきょう）より涼（すず）しくて、",
        "撮（と）りました。"
      ],
      "vocabNotes": [
        {
          "word": "泊（と）まります",
          "reading": "とまります",
          "meaning": "Trọ lại, nghỉ đêm"
        },
        {
          "word": "涼（すず）しい",
          "reading": "すずしい",
          "meaning": "Mát mẻ"
        }
      ],
      "questions": [
        {
          "id": "p16-rq1",
          "qJp": "中村（なかむら）さんは海（うみ）でどんなことをしましたか。",
          "qVi": "Anh Nakamura ở biển đã làm những việc gì?",
          "targetGrammar": "Bài 11 · ～たり～たりしました",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "海（うみ）で泳（およ）いだり、写真（しゃしん）を撮（と）ったりしました。",
              "vi": "Anh ấy bơi ở biển, chụp ảnh..."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "朝（あさ）は青（あお）い海（うみ）で泳（およ）いだり、新（あたら）しいカメラで写真（しゃしん）をたくさん撮（と）ったりしました。",
              "vi": "Buổi sáng anh ấy bơi ở biển xanh và chụp nhiều ảnh bằng chiếc máy ảnh mới."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "泳（およ）いで、おいしい魚（さかな）を食（た）べました。",
              "vi": "Anh ấy bơi lội và ăn cá ngon."
            }
          ]
        },
        {
          "id": "p16-rq2",
          "qJp": "海（うみ）の町（まち）は東京（とうきょう）と比（くら）べてどうでしたか。",
          "qVi": "Thị trấn ven biển so với Tokyo thì như thế nào?",
          "targetGrammar": "Bài 06 · So sánh AよりBのほうが",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "東京（とうきょう）より涼（すず）しくて、空気（くうき）がきれいです。",
              "vi": "Mát mẻ hơn Tokyo và không khí trong lành."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "東京（とうきょう）より涼（すず）しくて、空気（くうき）がとてもきれいでした。",
              "vi": "Nơi đó mát hơn Tokyo và không khí thì rất sạch sẽ trong lành."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "とても涼（すず）しかったです。",
              "vi": "Rất là mát mẻ."
            }
          ]
        }
      ]
    },
    "qa": {
      "picture": {
        "characterName": "吉田（よしだ）さん",
        "scenarioTitle": "吉田さんの一日",
        "timelineHint": "昨日（きのう）",
        "panels": [
          {
            "stepNumber": 1,
            "characterLabels": [
              "よしだ"
            ],
            "actionDescJp": "電車（でんしゃ）に乗（の）って会社（かいしゃ）へ行（い）きました。",
            "actionDescVi": "Đi tàu điện đến công ty.",
            "sceneType": "bus",
            "location": "駅のホーム",
            "iconName": "Train",
            "detailHint": "Đi tàu điện đi làm"
          },
          {
            "stepNumber": 2,
            "characterLabels": [
              "よしだ",
              "同僚"
            ],
            "actionDescJp": "会議室（かいぎしつ）でミーティングをしました。",
            "actionDescVi": "Họp bàn công việc trong phòng họp.",
            "sceneType": "study",
            "location": "会議室",
            "iconName": "Users",
            "detailHint": "Họp bàn công việc"
          },
          {
            "stepNumber": 3,
            "characterLabels": [
              "よしだ"
            ],
            "actionDescJp": "パソコンでプログラムを書（か）きました。",
            "actionDescVi": "Viết code trên máy tính.",
            "sceneType": "study",
            "location": "オフィスデスク",
            "iconName": "Monitor",
            "detailHint": "Lập trình máy tính"
          }
        ],
        "question": {
          "id": "p16-q1",
          "qJp": "吉田（よしだ）さんは昨日（きのう）何（なに）をしましたか。",
          "qVi": "Hôm qua anh Yoshida đã làm những gì?",
          "targetGrammar": "Bài 11: Nối câu thể て",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thể て nối câu",
              "jp": "会社（かいしゃ）へ行（い）って、ミーティングをして、プログラムを書（か）きました。",
              "vi": "Đến công ty, họp hành, rồi viết chương trình."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Thể たり...たり",
              "jp": "会社（かいしゃ）でミーティングをしたり、パソコンで仕事（しごと）をしたりしました。",
              "vi": "Đã họp ở công ty, làm việc trên máy tính..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Trình tự chi tiết",
              "jp": "電車（でんしゃ）で出勤（しゅっきん）しました。同僚（どうりょう）と打（う）ち合（あ）わせをしてから、一日中（いちにちじゅう）パソコンで開発（かいはつ）をしました。",
              "vi": "Đã đi tàu đi làm. Sau khi trao đổi với đồng nghiệp thì cả ngày lập trình trên máy tính."
            }
          ]
        }
      },
      "freeQuestions": [
        {
          "id": "p16-q2",
          "qJp": "仕事（しごと）や勉強（べんきょう）が終わってから、たいてい何をしますか。",
          "qVi": "Sau khi làm việc hoặc học xong, bạn thường làm gì?",
          "targetGrammar": "Bài 10/11: Mẫu câu ～てから",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Về nhà nghỉ ngơi",
              "jp": "家（いえ）へ帰（かえ）って休（やす）みます。",
              "vi": "Tôi về nhà nghỉ ngơi."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Nấu ăn và xem video",
              "jp": "家（いえ）へ帰（かえ）ってから、ご飯（はん）を作（つく）ってYouTubeを見（み）ます。",
              "vi": "Sau khi về nhà, tôi nấu cơm rồi xem YouTube."
            },
            {
              "level": "alt",
              "label": "Cách 3: Đi tập thể thao với bạn",
              "jp": "友達（ともだち）と一緒（いっしょ）にジムへ行（い）って運動（うんどう）します。",
              "vi": "Tôi cùng bạn đến phòng gym tập thể dục."
            }
          ]
        },
        {
          "id": "p16-q3",
          "qJp": "とても忙（いそが）しいとき、どうしますか。",
          "qVi": "Khi rất bận rộn, bạn làm gì?",
          "targetGrammar": "Bài 11: Mẫu câu ～とき、どうしますか",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Viết ghi chú lịch trình",
              "jp": "メモを書（か）いて順番（じゅんばん）にやります。",
              "vi": "Tôi viết ghi chú và làm theo thứ tự."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Cố gắng ngủ đủ giấc",
              "jp": "忙（いそが）しくても、毎日（まいにち）しっかり寝（ね）るようにします。",
              "vi": "Dù bận rộn tôi vẫn cố gắng ngủ đủ giấc mỗi ngày."
            },
            {
              "level": "alt",
              "label": "Cách 3: Nhờ bạn bè giúp đỡ",
              "jp": "友達（ともだち）や家族（かぞく）に少（すこ）し手伝（てつだ）ってもらいます。",
              "vi": "Tôi nhờ bạn bè hoặc gia đình phụ giúp một chút."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "p17",
    "title": "Đề 17 (P17) · Bữa tiệc ở nhà bạn của anh Kato",
    "shortTitle": "加藤さんの友達の家でのパーティー",
    "focusGrammar": "Bài 07 · ～てください, ～たり～たり, 弾いて",
    "badge": "Đề P17 · Bài 07",
    "katakanaWords": [
      "パーティー",
      "ピザ",
      "ケーキ",
      "ギター"
    ],
    "reading": {
      "title": "「加藤（かとう）さんの友達（ともだち）の家（いえ）でのパーティー」",
      "passageJp": "加藤（かとう）さんは先週（せんしゅう）の日曜日（にちようび）、友達（ともだち）の家（いえ）のパーティーに行（い）きました。手土産（てみやげ）においしいケーキを買（か）って持（も）って行（い）きました。友達（ともだち）の部屋（へや）でピザを食（た）べたり、ジュースを飲（の）んだりしました。友達（ともだち）は「どうぞたくさん食（た）べてください」と言（い）いました。食事（しょくじ）のあとで、友達（ともだち）がギターを弾（ひ）いて、みんなで楽（たの）しく歌（うた）を歌（うた）いました。",
      "passageVi": "Anh Kato vào Chủ nhật tuần trước đã đến dự bữa tiệc ở nhà một người bạn. Anh mua chiếc bánh kem ngon mang đến làm quà. Trong phòng của bạn, mọi người ăn bánh pizza, uống nước ngọt... Người bạn nói 'Xin mời các bạn ăn thật nhiều nhé'. Sau bữa ăn, người bạn chơi đàn ghi-ta và mọi người cùng nhau hát rất vui vẻ.",
      "underlines": [
        "買（か）って",
        "持（も）って行（い）きました。",
        "食（た）べたり、",
        "飲（の）んだりしました。",
        "食（た）べてください",
        "弾（ひ）いて、",
        "歌（うた）いました。"
      ],
      "vocabNotes": [
        {
          "word": "手土産（てみやげ）",
          "reading": "てみやげ",
          "meaning": "Quà mang theo khi đến thăm nhà"
        },
        {
          "word": "どうぞ",
          "meaning": "Xin mời"
        }
      ],
      "questions": [
        {
          "id": "p17-rq1",
          "qJp": "加藤（かとう）さんは友達（ともだち）の家（いえ）に何（なに）を持（も）って行（い）きましたか。",
          "qVi": "Anh Kato đã mang gì đến nhà người bạn?",
          "targetGrammar": "Bài 07 · ～を持って行きました",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "おいしいケーキを買（か）って持（も）って行（い）きました。",
              "vi": "Anh ấy mua bánh kem ngon mang đến."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "パーティーの手土産（てみやげ）においしいケーキを持（も）って行（い）きました。",
              "vi": "Anh ấy mang bánh kem ngon đến làm quà cho bữa tiệc."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "ケーキです。",
              "vi": "Là chiếc bánh kem."
            }
          ]
        },
        {
          "id": "p17-rq2",
          "qJp": "食事（しょくじ）のあとで、みんなで何（なに）をしましたか。",
          "qVi": "Sau bữa ăn, mọi người đã cùng nhau làm gì?",
          "targetGrammar": "Bài 07 & 09 · ギターを弾いて、歌を歌いました",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "友達（ともだち）がギターを弾（ひ）いて、みんなで歌（うた）を歌（うた）いました。",
              "vi": "Người bạn gảy đàn ghi-ta và mọi người cùng hát."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "食事（しょくじ）のあとで、友達（ともだち）のギターの音（おと）に合（あ）わせて楽（たの）しく歌（うた）いました。",
              "vi": "Sau bữa ăn, mọi người đã cùng nhau hát thật vui theo tiếng đàn ghi-ta của người bạn."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "みんなで歌（うた）を歌（うた）いました。",
              "vi": "Mọi người cùng nhau hát."
            }
          ]
        }
      ]
    },
    "qa": {
      "picture": {
        "characterName": "ハインさん",
        "scenarioTitle": "ハインさんの料理パーティー",
        "timelineHint": "先週（せんしゅう）",
        "panels": [
          {
            "stepNumber": 1,
            "characterLabels": [
              "ハイン"
            ],
            "actionDescJp": "スーパーで野菜（やさい）と牛肉（ぎゅうにく）を買（か）いました。",
            "actionDescVi": "Mua rau củ và thịt bò ở siêu thị.",
            "sceneType": "shop",
            "location": "スーパー",
            "iconName": "ShoppingBag",
            "detailHint": "Mua đồ ăn tươi"
          },
          {
            "stepNumber": 2,
            "characterLabels": [
              "ハイン",
              "日本の友達"
            ],
            "actionDescJp": "友達（ともだち）と一緒（いっしょ）に春巻（はるま）きを巻（ま）きました。",
            "actionDescVi": "Cùng bạn cuốn nem trong bếp.",
            "sceneType": "cook",
            "location": "キッチン",
            "iconName": "Utensils",
            "detailHint": "Cùng nhau cuốn nem"
          },
          {
            "stepNumber": 3,
            "characterLabels": [
              "ハイン",
              "日本の友達"
            ],
            "actionDescJp": "みんなでフォーを食（た）べて楽（たの）しく話（はな）しました。",
            "actionDescVi": "Cùng nhau ăn phở và trò chuyện rôm rả.",
            "sceneType": "eat",
            "location": "リビング",
            "iconName": "Smile",
            "detailHint": "Ăn uống trò chuyện"
          }
        ],
        "question": {
          "id": "p17-q1",
          "qJp": "ハインさんは先週（せんしゅう）何（なに）をしましたか。",
          "qVi": "Tuần trước bạn Hạnh đã làm những gì?",
          "targetGrammar": "Bài 11: Nối câu thể て",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thể て nối câu",
              "jp": "野菜（やさい）を買（か）って、春巻（はるま）きを作（つく）って、みんなでフォーを食（た）べました。",
              "vi": "Mua rau, làm nem cuốn, rồi cùng mọi người ăn phở."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Thể たり...たり",
              "jp": "友達（ともだち）と料理（りょうり）を作（つく）ったり、お酒（さけ）を飲（の）んだりしました。",
              "vi": "Đã nấu ăn cùng bạn bè, uống rượu bia vui vẻ..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Chi tiết điểm 10",
              "jp": "スーパーで材料（ざいりょう）を買（か）ってから料理（りょうり）を作（つく）りました。友達（ともだち）にベトナム料理（りょうり）をごちそうしました。",
              "vi": "Sau khi mua nguyên liệu ở siêu thị thì nấu ăn. Bạn ấy đã chiêu đãi các bạn món ăn Việt Nam."
            }
          ]
        }
      },
      "freeQuestions": [
        {
          "id": "p17-q2",
          "qJp": "外国人の友達（ともだち）にどんなベトナム料理（りょうり）を食（た）べてほしいですか。（紹介（しょうかい）したいですか）",
          "qVi": "Bạn muốn bạn bè người nước ngoài thưởng thức món ăn Việt Nam nào? (Muốn giới thiệu món gì?)",
          "targetGrammar": "Bài 8/9: Giới thiệu món ăn / Thể mong muốn",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Phở và bánh mì",
              "jp": "フォーやバインミーを食（た）べてほしいです。",
              "vi": "Tôi muốn bạn ấy ăn thử phở và bánh mì."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Bún chả và nem rán",
              "jp": "ハノイのブンチャーや揚（あ）げ春巻（はるま）きを食（た）べてほしいです。本当（ほんとう）においしいですから。",
              "vi": "Tôi muốn bạn ăn bún chả Hà Nội và nem rán. Vì thực sự rất là ngon."
            },
            {
              "level": "alt",
              "label": "Cách 3: Tự nấu món quê hương",
              "jp": "私（わたし）が自分（じぶん）で作（つく）った家庭（かてい）料理（りょうり）を食（た）べてほしいです。",
              "vi": "Tôi muốn bạn nếm thử các món cơm nhà do chính tay tôi nấu."
            }
          ]
        },
        {
          "id": "p17-q3",
          "qJp": "あなたは日本料理（にほんりょうり）の中（なか）で何（なに）が一番（いちばん）好きですか。納豆（なっとう）を食（た）べることができますか。",
          "qVi": "Trong các món ăn Nhật Bản bạn thích món nào nhất? Bạn có ăn được Natto không?",
          "targetGrammar": "Bài 9: Mẫu câu ～ことができます / Nhất ～一番",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thích Ramen, không ăn được Natto",
              "jp": "ラーメンが一番好きです。納豆（なっとう）は食（た）べることができません。",
              "vi": "Tôi thích ramen nhất. Natto thì tôi không ăn được."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Thích Sushi, ăn được Natto",
              "jp": "寿司（すし）が一番好きです。納豆（なっとう）も体（からだ）にいいですから食（た）べることができます。",
              "vi": "Tôi thích sushi nhất. Natto tốt cho sức khỏe nên tôi cũng ăn được."
            },
            {
              "level": "alt",
              "label": "Cách 3: Thích lẩu Sukiyaki",
              "jp": "すき焼（や）きが好きです。日本の牛肉（ぎゅうにく）はとてもおいしいです。",
              "vi": "Tôi thích lẩu Sukiyaki. Thịt bò của Nhật rất ngon."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "p18",
    "title": "Đề 18 (P18) · Một ngày làm việc của anh Yoshida",
    "shortTitle": "吉田さんの会社での一日",
    "focusGrammar": "Bài 03 & 11 · 働いています, ～てから, ～たり～たり, ～とき",
    "badge": "Đề P18 · Bài 03",
    "katakanaWords": [
      "パソコン",
      "メール",
      "コーヒー",
      "オフィス"
    ],
    "reading": {
      "title": "「吉田（よしだ）さんの会社（かいしゃ）での一日（いちにち）」",
      "passageJp": "吉田（よしだ）さんは東京（とうきょう）の会社（かいしゃ）で働（はたら）いています。毎朝（まいあさ）8時半（じはん）に会社（かいしゃ）に着（つ）いてから、まずパソコンでメールを読（よ）みます。午前（ごぜん）は会議（かいぎ）をしたり、書類（しょるい）を作（つく）ったりします。昼（ひる）休みは食堂（しょくどう）で定食（ていしょく）を食（た）べて、コーヒーを飲（の）みます。仕事（しごと）で疲（つか）れたとき、近（ちか）くの公園（こうえん）を少し歩（ある）いて休（やす）んでいます。",
      "passageVi": "Anh Yoshida làm việc tại một công ty ở Tokyo. Mỗi sáng sau khi đến công ty lúc 8 giờ rưỡi, trước tiên anh đọc email trên máy tính. Buổi sáng anh họp, lập giấy tờ tài liệu... Giờ nghỉ trưa anh ăn cơm suất ở nhà ăn và uống cà phê. Khi mệt mỏi vì công việc, anh đi dạo một chút ở công viên gần đó rồi nghỉ ngơi.",
      "underlines": [
        "働（はたら）いています。",
        "着（つ）いてから、",
        "会議（かいぎ）をしたり、",
        "作（つく）ったりします。",
        "疲（つか）れたとき、",
        "休（やす）んでいます。"
      ],
      "vocabNotes": [
        {
          "word": "定食（ていしょく）",
          "reading": "ていしょく",
          "meaning": "Cơm phần, cơm suất"
        },
        {
          "word": "書類（しょるい）",
          "reading": "しょるい",
          "meaning": "Hồ sơ, giấy tờ văn bản"
        }
      ],
      "questions": [
        {
          "id": "p18-rq1",
          "qJp": "吉田（よしだ）さんは会社（かいしゃ）に着（つ）いてから、まず何（なに）をしますか。",
          "qVi": "Anh Yoshida sau khi đến công ty thì trước tiên làm gì?",
          "targetGrammar": "Bài 07 & 11 · ～てから, まず",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "パソコンでメールを読（よ）みます。",
              "vi": "Anh ấy đọc email trên máy tính."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "8時半（じはん）に会社（かいしゃ）に着（つ）いてから、まずパソコンでメールをチェックします。",
              "vi": "Sau khi đến công ty lúc 8 giờ rưỡi, trước tiên anh ấy đọc email trên máy tính."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "メールの確認（かくにん）をします。",
              "vi": "Anh ấy kiểm tra email."
            }
          ]
        },
        {
          "id": "p18-rq2",
          "qJp": "吉田（よしだ）さんは仕事（しごと）で疲（つか）れたとき、どうしますか。",
          "qVi": "Anh Yoshida khi mệt mỏi vì công việc thì làm gì?",
          "targetGrammar": "Bài 11 · ～とき",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "近（ちか）くの公園（こうえん）を少し歩（ある）いて休（やす）んでいます。",
              "vi": "Anh ấy đi dạo một chút ở công viên gần đó rồi nghỉ ngơi."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "疲（つか）れたとき、公園（こうえん）を散歩（さんぽ）してリフレッシュします。",
              "vi": "Khi mệt, anh ấy đi dạo ở công viên để thư giãn lấy lại năng lượng."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "公園（こうえん）で少し休（やす）みます。",
              "vi": "Anh ấy nghỉ ngơi một chút ở công viên."
            }
          ]
        }
      ]
    },
    "qa": {
      "picture": {
        "characterName": "松本（まつもと）さん",
        "scenarioTitle": "松本さんの休日",
        "timelineHint": "先週（せんしゅう）の日曜日（にちようび）",
        "panels": [
          {
            "stepNumber": 1,
            "characterLabels": [
              "まつもと"
            ],
            "actionDescJp": "美術館（びじゅつかん）の受付（うけつけ）でチケットを買（か）いました。",
            "actionDescVi": "Mua vé vào cửa tại quầy lễ tân bảo tàng.",
            "sceneType": "shop",
            "location": "美術館入口",
            "iconName": "Ticket",
            "detailHint": "Mua vé tham quan"
          },
          {
            "stepNumber": 2,
            "characterLabels": [
              "まつもと"
            ],
            "actionDescJp": "静（しず）かな部屋（へや）でたくさんの絵（え）を見（み）ました。",
            "actionDescVi": "Ngắm nhìn nhiều bức tranh trong phòng yên tĩnh.",
            "sceneType": "museum",
            "location": "展示室",
            "iconName": "Palette",
            "detailHint": "Ngắm tranh triển lãm"
          },
          {
            "stepNumber": 3,
            "characterLabels": [
              "まつもと"
            ],
            "actionDescJp": "カフェでコーヒーを飲（の）んで休（やす）みました。",
            "actionDescVi": "Uống cà phê và nghỉ ngơi tại quán cà phê.",
            "sceneType": "eat",
            "location": "ミュージアムカフェ",
            "iconName": "Coffee",
            "detailHint": "Nghỉ ngơi uống cà phê"
          }
        ],
        "question": {
          "id": "p18-q1",
          "qJp": "松本（まつもと）さんは先週（せんしゅう）の日曜日（にちようび）に何（なに）をしましたか。",
          "qVi": "Chủ Nhật tuần trước anh Matsumoto đã làm những gì?",
          "targetGrammar": "Bài 11: Nối câu thể て",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thể て nối câu",
              "jp": "チケットを買（か）って、絵（え）を見（み）て、カフェでコーヒーを飲（の）みました。",
              "vi": "Mua vé, ngắm tranh, rồi uống cà phê ở quán cà phê."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Thể たり...たり",
              "jp": "美術館（びじゅつかん）で絵（え）を見（み）たり、カフェで休（やす）んだりしました。",
              "vi": "Đã ngắm tranh ở viện bảo tàng, nghỉ ngơi ở quán cà phê..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Trình tự chi tiết",
              "jp": "現代（げんだい）アートの美術館（びじゅつかん）へ行（い）きました。絵（え）を鑑賞（かんしょう）してから、カフェでゆっくり過（す）ごしました。",
              "vi": "Đã đến bảo tàng nghệ thuật đương đại. Sau khi thưởng thức tranh thì thư giãn ở quán cà phê."
            }
          ]
        }
      },
      "freeQuestions": [
        {
          "id": "p18-q2",
          "qJp": "あなたは絵（え）を描（か）くことができますか。写真（しゃしん）を撮（と）ることが好きですか。",
          "qVi": "Bạn có biết vẽ tranh không? Bạn có thích chụp ảnh không?",
          "targetGrammar": "Bài 9: ～ことができます / ～ことが好き",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Không biết vẽ, thích chụp ảnh",
              "jp": "絵（え）は下手（へた）ですが、写真（しゃしん）を撮（と）ることが大好（だいす）きです。",
              "vi": "Vẽ thì tôi dở, nhưng tôi rất thích chụp ảnh."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Chụp ảnh bằng điện thoại",
              "jp": "旅行（りょこう）のとき、スマートフォンで景色（けしき）の写真（しゃしん）をたくさん撮（と）ります。",
              "vi": "Khi đi du lịch, tôi chụp rất nhiều ảnh phong cảnh bằng điện thoại."
            },
            {
              "level": "alt",
              "label": "Cách 3: Vẽ tranh manga",
              "jp": "子どものころから漫画（まんが）の絵（え）を描（か）くことができます。",
              "vi": "Từ nhỏ tôi đã biết vẽ truyện tranh manga."
            }
          ]
        },
        {
          "id": "p18-q3",
          "qJp": "美術館（びじゅつかん）や図書館（としょかん）で、何（なに）をしてはいけませんか。",
          "qVi": "Ở viện bảo tàng hoặc thư viện, không được làm những việc gì?",
          "targetGrammar": "Bài 10: Mẫu câu ～ないでください",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Đừng gây ồn ào",
              "jp": "大（おお）きな声（こえ）で騒（さわ）がないでください。",
              "vi": "Xin đừng làm ồn lớn tiếng."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đừng chụp ảnh và sờ vào tranh",
              "jp": "フラッシュで写真（しゃしん）を撮（と）らないでください。そして絵（え）に触（さわ）らないでください。",
              "vi": "Xin đừng chụp ảnh dùng đèn flash. Và đừng chạm vào tranh."
            },
            {
              "level": "alt",
              "label": "Cách 3: Cấm ăn uống",
              "jp": "展示室（てんじしつ）で食（た）べ物（もの）を食（た）べたり、ジュースを飲（の）んだりしてはいけません。",
              "vi": "Không được ăn đồ ăn hay uống nước ngọt trong phòng trưng bày."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "p19",
    "title": "Đề 19 (P19) · Lớp học nấu ăn của chị Inoue",
    "shortTitle": "井上さんの料理教室",
    "focusGrammar": "Bài 09 · 趣味は～ことです, ～たり～たり, ～てください",
    "badge": "Đề P19 · Bài 09",
    "katakanaWords": [
      "エプロン",
      "メニュー",
      "スープ",
      "クラス"
    ],
    "reading": {
      "title": "「井上（いのうえ）さんの料理（りょうり）教室（きょうしつ）」",
      "passageJp": "井上（いのうえ）さんの趣味（しゅみ）は料理（りょうり）を作（つく）ることです。1か月（げつ）に2回（かい）、土曜日（どようび）に料理（りょうり）教室（きょうしつ）に通（かよ）っています。教室（きょうしつ）でエプロンをつけてから、先生（せんせい）の話（はなし）を聞（き）きます。野菜（やさい）を切（き）ったり、おいしいスープを作（つく）ったりします。先生（せんせい）は「包丁（ほうちょう）に気（き）をつけてください」と親切（しんせつ）に教（おし）えてくれます。作（つく）った料理（りょうり）をみんなで食（た）べて、とても楽（たの）しいです。",
      "passageVi": "Sở thích của chị Inoue là nấu ăn. Mỗi tháng 2 lần vào thứ Bảy, chị tham gia lớp học nấu ăn. Ở lớp, sau khi đeo tạp dề chị lắng nghe thầy cô giảng. Chị cắt rau củ, nấu món súp ngon... Thầy cô ân cần dặn 'Xin hãy cẩn thận với dao làm bếp'. Mọi người cùng thưởng thức những món đã nấu, rất vui vẻ.",
      "underlines": [
        "料理（りょうり）を作（つく）ることです。",
        "通（かよ）っています。",
        "つけてから、",
        "切（き）ったり、",
        "作（つく）ったりします。",
        "気（き）をつけてください",
        "教（おし）えてくれます。"
      ],
      "vocabNotes": [
        {
          "word": "包丁（ほうちょう）",
          "reading": "ほうちょう",
          "meaning": "Con dao làm bếp"
        },
        {
          "word": "気（き）をつける",
          "reading": "きをつける",
          "meaning": "Cẩn thận, chú ý"
        }
      ],
      "questions": [
        {
          "id": "p19-rq1",
          "qJp": "井上（いのうえ）さんは1か月（げつ）に何回（なんかい）料理教室（りょうりきょうしつ）に通（かよ）っていますか。",
          "qVi": "Chị Inoue một tháng đến lớp học nấu ăn bao nhiêu lần?",
          "targetGrammar": "Bài 09 · Khoảng thời gian に Số lần",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "1か月（げつ）に2回（かい）通（かよ）っています。",
              "vi": "Chị ấy đi học 2 lần một tháng."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "1か月（げつ）に2回（かい）、土曜日（どようび）に料理（りょうり）教室（きょうしつ）へ通（かよ）っています。",
              "vi": "Một tháng 2 lần, vào thứ Bảy chị ấy đến lớp học nấu ăn."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "月（つき）に2回（かい）です。",
              "vi": "Là 2 lần một tháng."
            }
          ]
        },
        {
          "id": "p19-rq2",
          "qJp": "先生（せんせい）は何（なん）と教（おし）えてくれますか。",
          "qVi": "Thầy cô giáo đã ân cần dặn dò điều gì?",
          "targetGrammar": "Bài 10 · ～てくださいと教えてくれます",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "「包丁（ほうちょう）に気（き）をつけてください」と教（おし）えてくれます。",
              "vi": "Thầy cô dặn: 'Xin hãy cẩn thận với dao làm bếp'."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "先生（せんせい）は「危（あぶ）ないですから包丁（ほうちょう）に気（き）をつけてください」と親切（しんせつ）に教（おし）えてくれます。",
              "vi": "Thầy cô ân cần dặn: 'Vì nguy hiểm nên xin hãy cẩn thận với dao làm bếp'."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "包丁（ほうちょう）の使い方（かた）に気（き）をつけてくださいと言（い）います。",
              "vi": "Thầy cô dặn hãy cẩn thận trong cách dùng dao."
            }
          ]
        }
      ]
    },
    "qa": {
      "picture": {
        "characterName": "井上（いのうえ）さん",
        "scenarioTitle": "井上さんの引っ越し",
        "timelineHint": "先週（せんしゅう）",
        "panels": [
          {
            "stepNumber": 1,
            "characterLabels": [
              "いのうえ"
            ],
            "actionDescJp": "ダンボールに荷物（にもつ）を詰（つ）めて準備（じゅんび）しました。",
            "actionDescVi": "Xếp đồ đạc vào các thùng các tông.",
            "sceneType": "pack",
            "location": "前の部屋",
            "iconName": "Package",
            "detailHint": "Đóng thùng đồ đạc"
          },
          {
            "stepNumber": 2,
            "characterLabels": [
              "いのうえ",
              "友達"
            ],
            "actionDescJp": "トラックに荷物（にもつ）を運（はこ）びました。",
            "actionDescVi": "Cùng bạn khiêng đồ chuyển lên xe tải.",
            "sceneType": "walk",
            "location": "トラックの前",
            "iconName": "Truck",
            "detailHint": "Bốc đồ lên xe tải"
          },
          {
            "stepNumber": 3,
            "characterLabels": [
              "いのうえ",
              "友達"
            ],
            "actionDescJp": "手伝（てつだ）ってくれた友達（ともだち）と焼肉（やきにく）を食（た）べました。",
            "actionDescVi": "Cùng bạn đi ăn thịt nướng để cảm ơn.",
            "sceneType": "eat",
            "location": "焼肉屋",
            "iconName": "Flame",
            "detailHint": "Ăn thịt nướng cảm ơn"
          }
        ],
        "question": {
          "id": "p19-q1",
          "qJp": "井上（いのうえ）さんは先週（せんしゅう）何（なに）をしましたか。",
          "qVi": "Tuần trước bạn Inoue đã làm những gì?",
          "targetGrammar": "Bài 11: Nối câu thể て",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thể て nối câu",
              "jp": "荷物（にもつ）をダンボールに入（い）れて、トラックで運（はこ）んで、焼肉（やきにく）を食（た）べました。",
              "vi": "Bỏ đồ vào thùng các tông, chở bằng xe tải, rồi đi ăn thịt nướng."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Thể たり...たり",
              "jp": "引（ひ）っ越（こ）しの荷物（にもつ）を運（はこ）んだり、友達（ともだち）とご飯（はん）を食（た）べたりしました。",
              "vi": "Đã khiêng đồ đạc chuyển nhà, đi ăn cơm cùng bạn bè..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Trình tự chi tiết",
              "jp": "友達（ともだち）に手伝（てつだ）ってもらって新（あたら）しい部屋（へや）へ引（ひ）っ越（こ）しました。それから感謝（かんしゃ）で焼肉（やきにく）をごちそうしました。",
              "vi": "Đã nhờ bạn bè giúp chuyển đến căn phòng mới. Sau đó khao thịt nướng để cảm ơn."
            }
          ]
        }
      },
      "freeQuestions": [
        {
          "id": "p19-q2",
          "qJp": "困（こま）ったとき、誰（だれ）に相談（そうだん）しますか。（誰（だれ）に助（たす）けてもらいますか）",
          "qVi": "Khi gặp khó khăn, bạn tâm sự/hỏi ý kiến ai? (Được ai giúp đỡ?)",
          "targetGrammar": "Bài 8/11: ～とき / ～に相談します",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Hỏi bố mẹ",
              "jp": "両親（りょうしん）に相談（そうだん）します。",
              "vi": "Tôi tâm sự hỏi ý kiến bố mẹ."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Nhờ thầy cô hoặc bạn thân",
              "jp": "学校（がっこう）の先生（せんせい）や親（した）しい友達（ともだち）に相談（そうだん）して助（たす）けてもらいます。",
              "vi": "Tôi hỏi ý kiến thầy cô ở trường hoặc bạn bè thân thiết để nhờ giúp đỡ."
            },
            {
              "level": "alt",
              "label": "Cách 3: Tự suy nghĩ trước",
              "jp": "まず自分（じぶん）でよく考（かんが）えます。どうしてもわからないとき、先輩（せんぱい）に聞（き）きます。",
              "vi": "Trước tiên tôi tự suy nghĩ kỹ. Khi thật sự không giải quyết được thì hỏi các anh chị tiền bối."
            }
          ]
        },
        {
          "id": "p19-q3",
          "qJp": "一人暮（ひとりぐ）らしをしたことがありますか。一人暮（ひとりぐ）らしはどうですか。（または家族（かぞく）と住（す）むのとどちらがいいですか）",
          "qVi": "Bạn đã từng sống một mình chưa? Cuộc sống tự lập như thế nào?",
          "targetGrammar": "Bài 8/11: Cuộc sống / So sánh",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Đang sống một mình",
              "jp": "はい、今一人暮（ひとりぐ）らしをしています。自由（じゆう）ですが、少し寂（さび）しいです。",
              "vi": "Vâng, hiện tôi đang sống một mình. Tự do nhưng hơi cô đơn một chút."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Sống cùng gia đình tốt hơn",
              "jp": "まだ一人暮（ひとりぐ）らしをしたことがありません。家族（かぞく）と一緒（いっしょ）に住（す）むほうが安心（あんしん）です。",
              "vi": "Tôi chưa từng sống một mình. Sống cùng gia đình thì thấy yên tâm hơn."
            },
            {
              "level": "alt",
              "label": "Cách 3: Tự lập giúp trưởng thành",
              "jp": "一人暮（ひとりぐ）らしをしてから、料理（りょうり）や洗濯（せんたく）が自分でできるようになりました。",
              "vi": "Kể từ khi sống một mình, tôi đã biết tự nấu ăn và giặt giũ quần áo."
            }
          ]
        }
      ]
    }
  },
  {
    "id": "p20",
    "title": "Đề 20 (P20) · Ngày hội thể thao của bạn John",
    "shortTitle": "ジョンさんの学校のスポーツの日",
    "focusGrammar": "Bài 11 · ～たり～たり, ～てから, 速い",
    "badge": "Đề P20 · Bài 11",
    "katakanaWords": [
      "サッカー",
      "テニス",
      "スポーツ",
      "シャワー"
    ],
    "reading": {
      "title": "「ジョンさんの学校（がっこう）のスポーツの日（ひ）」",
      "passageJp": "ジョンさんの大学（だいがく）で先週（せんしゅう）、「スポーツの日（ひ）」がありました。朝（あさ）9時（じ）に運動場（うんどうじょう）に集（あつ）まってから、みんなで体操（たいそう）をしました。午前（ごぜん）はサッカーの試合（しあい）に出（で）たり、友達（ともだち）の応援（おうえん）をしたりしました。走（はし）るのが速（はや）い友達（ともだち）がいて、とてもかっこよかったです。終（お）わったあと、シャワーを浴（あ）びてから、みんなで冷（つめ）たいジュースを飲（の）みました。",
      "passageVi": "Ở trường đại học của John tuần trước đã diễn ra 'Ngày hội thể thao'. Sau khi tập trung ở sân vận động lúc 9 giờ sáng, mọi người cùng tập thể dục. Buổi sáng bạn tham gia trận đấu bóng đá, cổ vũ cho bạn bè... Có người bạn chạy rất nhanh trông vô cùng ngầu. Sau khi kết thúc, sau khi tắm vòi sen thì mọi người cùng uống nước ngọt mát lạnh.",
      "underlines": [
        "集（あつ）まってから、",
        "体操（たいそう）をしました。",
        "出（で）たり、",
        "応援（おうえん）をしたりしました。",
        "走（はし）るのが速（はや）い",
        "浴（あ）びてから、",
        "飲（の）みました。"
      ],
      "vocabNotes": [
        {
          "word": "運動場（うんどうじょう）",
          "reading": "うんどうじょう",
          "meaning": "Sân vận động, sân thể thao"
        },
        {
          "word": "かっこいい",
          "meaning": "Ngầu, bảnh bao, phong độ"
        }
      ],
      "questions": [
        {
          "id": "p20-rq1",
          "qJp": "ジョンさんは午前中（ごぜんちゅう）、どんなことをしましたか。",
          "qVi": "Bạn John vào buổi sáng đã làm những việc gì?",
          "targetGrammar": "Bài 11 · ～たり～たりしました",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "サッカーの試合（しあい）に出（で）たり、友達（ともだち）の応援（おうえん）をしたりしました。",
              "vi": "Bạn ấy đá bóng, cổ vũ cho bạn bè..."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "午前（ごぜん）はサッカーの試合（しあい）に出（で）たり、走（はし）る友達（ともだち）を応援（おうえん）したりしました。",
              "vi": "Buổi sáng bạn ấy tham gia trận đá bóng và cổ vũ cho bạn bè đang chạy."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "サッカーの試合（しあい）をしました。",
              "vi": "Bạn ấy thi đấu bóng đá."
            }
          ]
        },
        {
          "id": "p20-rq2",
          "qJp": "運動（うんどう）が終（お）わったあとで、みんなで何（なに）をしましたか。",
          "qVi": "Sau khi buổi tập thể thao kết thúc, mọi người cùng nhau làm gì?",
          "targetGrammar": "Bài 07 & 11 · ～てから、～ました",
          "answers": [
            {
              "level": "basic",
              "label": "Cơ bản (Đủ ý)",
              "jp": "シャワーを浴（あ）びてから、冷（つめ）たいジュースを飲（の）みました。",
              "vi": "Sau khi tắm vòi sen, mọi người cùng uống nước ngọt mát lạnh."
            },
            {
              "level": "expanded",
              "label": "Mở rộng (Chuẩn thi)",
              "jp": "終（お）わったあと、シャワーを浴（あ）びてからみんなで一緒（いっしょ）に冷（つめ）たいジュースを飲（の）みました。",
              "vi": "Sau khi kết thúc, tắm vòi sen xong thì mọi người đã cùng nhau uống nước ngọt mát lạnh."
            },
            {
              "level": "alt",
              "label": "Cách trả lời khác",
              "jp": "冷（つめ）たいジュースを飲（の）んで休憩（きゅうけい）しました。",
              "vi": "Mọi người uống nước ngọt mát lạnh và nghỉ ngơi."
            }
          ]
        }
      ]
    },
    "qa": {
      "picture": {
        "characterName": "ジョンさん",
        "scenarioTitle": "ジョンさんの京都旅行",
        "timelineHint": "先月（せんげつ）",
        "panels": [
          {
            "stepNumber": 1,
            "characterLabels": [
              "ジョン"
            ],
            "actionDescJp": "新幹線（しんかんせん）に乗（の）って京都（きょうと）へ行（い）きました。",
            "actionDescVi": "Đi tàu cao tốc Shinkansen đến Kyoto.",
            "sceneType": "bus",
            "location": "新幹線ホーム",
            "iconName": "Train",
            "detailHint": "Đi tàu Shinkansen"
          },
          {
            "stepNumber": 2,
            "characterLabels": [
              "ジョン"
            ],
            "actionDescJp": "清水寺（きよみずでら）を見（み）て、写真（しゃしん）を撮（と）りました。",
            "actionDescVi": "Ngắm chùa Kiyomizudera và chụp ảnh kỷ niệm.",
            "sceneType": "camera",
            "location": "清水寺",
            "iconName": "Camera",
            "detailHint": "Chụp ảnh đền chùa"
          },
          {
            "stepNumber": 3,
            "characterLabels": [
              "ジョン"
            ],
            "actionDescJp": "おみやげ屋（や）で抹茶（まっちゃ）のお菓子（かし）を買（か）いました。",
            "actionDescVi": "Mua bánh kẹo trà xanh tại tiệm quà lưu niệm.",
            "sceneType": "shop",
            "location": "お土産物屋",
            "iconName": "ShoppingBag",
            "detailHint": "Mua quà lưu niệm"
          }
        ],
        "question": {
          "id": "p20-q1",
          "qJp": "ジョンさんは先月（せんげつ）京都（きょうと）で何（なに）をしましたか。",
          "qVi": "Tháng trước bạn John đã làm những gì ở Kyoto?",
          "targetGrammar": "Bài 11: Nối câu thể て",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Thể て nối câu",
              "jp": "新幹線（しんかんせん）で行（い）って、寺（てら）で写真（しゃしん）を撮（と）って、おみやげを買（か）いました。",
              "vi": "Đi bằng Shinkansen, chụp ảnh ở chùa, rồi mua quà lưu niệm."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Thể たり...たり",
              "jp": "京都（きょうと）のお寺（てら）を見学（けんがく）したり、抹茶（まっちゃ）のお菓子（かし）を買（か）ったりしました。",
              "vi": "Đã tham quan chùa chiền ở Kyoto, mua bánh kẹo trà xanh..."
            },
            {
              "level": "alt",
              "label": "Cách 3: Trình tự chi tiết",
              "jp": "新幹線（しんかんせん）で京都（きょうと）へ着（つ）いてから、清水寺（きよみずでら）を見（み）ました。それから友達（ともだち）のためにおみやげを買（か）いました。",
              "vi": "Sau khi đến Kyoto bằng Shinkansen thì đi ngắm chùa Kiyomizu. Tiếp đó mua quà lưu niệm cho bạn bè."
            }
          ]
        }
      },
      "freeQuestions": [
        {
          "id": "p20-q2",
          "qJp": "日本（にほん）へ行（い）ったら、どこへ一番（いちばん）行（い）きたいですか。そこで何（なに）をしたいですか。",
          "qVi": "Nếu đến Nhật Bản, bạn muốn đi đâu nhất? Bạn muốn làm gì ở đó?",
          "targetGrammar": "Bài 9/10: Điểm đến và mục đích",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Đi Tokyo ngắm tháp",
              "jp": "東京（とうきょう）へ行（い）きたいです。東京（とうきょう）タワーを見（み）たいです。",
              "vi": "Tôi muốn đi Tokyo. Tôi muốn ngắm tháp Tokyo."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đi Kyoto mặc Kimono chụp ảnh",
              "jp": "京都（きょうと）へ行（い）きたいです。古（ふる）いお寺（てら）を見（み）たり、着物（きもの）を着（き）て写真（しゃしん）を撮（と）ったりしたいです。",
              "vi": "Tôi muốn đến Kyoto. Tôi muốn ngắm những ngôi đền cổ và mặc kimono chụp ảnh."
            },
            {
              "level": "alt",
              "label": "Cách 3: Đi Hokkaido ngắm tuyết",
              "jp": "北海道（ほっかいどう）へ行（い）きたいです。雪（ゆき）を見（み）て、おいしい海鮮（かいせん）料理（りょうり）を食（た）べたいです。",
              "vi": "Tôi muốn đến Hokkaido để ngắm tuyết và ăn hải sản thơm ngon."
            }
          ]
        },
        {
          "id": "p20-q3",
          "qJp": "旅行（りょこう）へ行（い）くとき、何（なに）を一番（いちばん）大切（たいせつ）に持（も）って行（い）きますか。",
          "qVi": "Khi đi du lịch, bạn mang theo vật gì quan trọng nhất?",
          "targetGrammar": "Bài 11: Mẫu câu ～とき / Đồ đạc cần thiết",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Điện thoại và tiền",
              "jp": "スマートフォンとお金（かね）を持（も）って行（い）きます。",
              "vi": "Tôi mang theo điện thoại thông minh và tiền."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Hộ chiếu và thuốc cá nhân",
              "jp": "パスポートと必要（ひつよう）な薬（くすり）です。何（なに）かあったとき安心（あんしん）ですから。",
              "vi": "Là hộ chiếu và các loại thuốc men cần thiết. Để an tâm khi có chuyện phát sinh."
            },
            {
              "level": "alt",
              "label": "Cách 3: Máy ảnh để lưu giữ kỷ niệm",
              "jp": "写真（しゃしん）を撮（と）るためのカメラです。きれいな思い出（おもいで）を残（のこ）したいですから。",
              "vi": "Là máy ảnh để chụp hình. Vì tôi muốn lưu giữ những kỷ niệm đẹp."
            }
          ]
        }
      ]
    }
  }
]
