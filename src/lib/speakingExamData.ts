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
          "id": "p01-r1",
          "qJp": "山田（やまだ）さんは毎朝（まいあさ）何時（なんじ）に起（お）きますか。",
          "qVi": "Anh Yamada mỗi sáng thức dậy lúc mấy giờ?",
          "targetGrammar": "Bài 3/11: Hỏi thời gian thức dậy",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Ngắn gọn chuẩn format",
              "jp": "6時（じ）に起（お）きます。",
              "vi": "Thức dậy lúc 6 giờ."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ điểm cao",
              "jp": "山田（やまだ）さんは毎朝（まいあさ）6時（じ）に起（お）きて、牛乳（ぎゅうにゅう）を飲（の）みます。",
              "vi": "Anh Yamada mỗi sáng dậy lúc 6 giờ rồi uống sữa."
            }
          ]
        },
        {
          "id": "p01-r2",
          "qJp": "山田（やまだ）さんは夜（よる）、どんなことをしますか。",
          "qVi": "Buổi tối anh Yamada làm những việc gì?",
          "targetGrammar": "Bài 11: Liệt kê hành động ～たり～たりします",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Liệt kê chuẩn trong bài",
              "jp": "テレビを見（み）たり、本（ほん）を読（よ）んだりします。",
              "vi": "Xem tivi và đọc sách."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Bổ sung việc học ngoại ngữ",
              "jp": "テレビを見（み）たり本（ほん）を読（よ）んだりします。そして、フランス語（ご）を勉強（べんきょう）しています。",
              "vi": "Anh ấy xem tivi, đọc sách. Và còn đang học tiếng Pháp nữa."
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
          "qJp": "【Picture P01】田中（たなか）さんは昨日（きのう）何（なに）をしましたか。",
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
    "focusGrammar": "Bài 11 · ～たり～たり, ～てから, Thể た",
    "badge": "Đề P02 · Bài 11",
    "katakanaWords": [
      "アパート",
      "スーパーマーケット",
      "サンドイッチ",
      "エアコン"
    ],
    "reading": {
      "title": "「木村（きむら）さんの日曜日（にちようび）」",
      "passageJp": "木村（きむら）さんは日曜日（にちようび）の朝（あさ）、アパートの掃除（そうじ）をしてから、スーパーマーケットへ行（い）きます。スーパーで野菜（やさい）や果物（くだもの）を買（か）ったり、サンドイッチを買（か）ったりします。午後（ごご）は暑（あつ）いですから、部屋（へや）でエアコンをつけて、映画（えいが）のDVDを見（み）ます。夕方（ゆうがた）は近（ちか）くの公園（こうえん）を散歩（さんぽ）したり、写真（しゃしん）を撮（と）ったりします。日曜日（にちようび）はいつも自分（じぶん）の好（す）きなことをして、ゆっくり過（す）ごします。",
      "passageVi": "Chị Kimura vào sáng Chủ Nhật sau khi dọn dẹp căn hộ thì đi siêu thị. Ở siêu thị, chị ấy mua rau củ quả, mua bánh mì kẹp sandwich... Buổi chiều vì trời nóng nên chị bật máy lạnh trong phòng rồi xem DVD phim. Chiều tối chị đi dạo ở công viên gần nhà, chụp ảnh... Ngày Chủ Nhật chị luôn làm những việc mình thích và trải qua một cách thong thả.",
      "underlines": [
        "掃除（そうじ）をしてから、",
        "買（か）ったり、",
        "エアコンをつけて、",
        "散歩（さんぽ）したり、",
        "撮（と）ったりします。"
      ],
      "vocabNotes": [
        {
          "word": "エアコン",
          "reading": "エアコン",
          "meaning": "Máy điều hòa, máy lạnh"
        },
        {
          "word": "過（す）ごします",
          "reading": "すごします",
          "meaning": "Trải qua, dành thời gian"
        }
      ],
      "questions": [
        {
          "id": "p02-r1",
          "qJp": "木村（きむら）さんはスーパーへ行（い）く前（まえ）に何（なに）をしますか。",
          "qVi": "Chị Kimura làm gì trước khi đi siêu thị?",
          "targetGrammar": "Bài 10/11: Thể てから / 前に",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Ngắn gọn",
              "jp": "アパートの掃除（そうじ）をします。",
              "vi": "Dọn dẹp căn hộ."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "アパートの部屋（へや）を掃除（そうじ）してから、スーパーへ行（い）きます。",
              "vi": "Chị ấy dọn dẹp phòng trong căn hộ rồi mới đi siêu thị."
            }
          ]
        },
        {
          "id": "p02-r2",
          "qJp": "午後（ごご）はどうして部屋（へや）でエアコンをつけますか。",
          "qVi": "Tại sao buổi chiều chị ấy lại bật điều hòa trong phòng?",
          "targetGrammar": "Bài 8/10: Hỏi lý do ～から",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "暑（あつ）いですから。",
              "vi": "Vì trời nóng."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ ngữ cảnh",
              "jp": "午後（ごご）はとても暑（あつ）いですから、エアコンをつけます。",
              "vi": "Vì buổi chiều rất nóng nên chị ấy bật điều hòa."
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
          "qJp": "【Picture P02】鈴木（すずき）さんは先週（せんしゅう）の日曜日（にちようび）に何（なに）をしましたか。",
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
    "title": "Đề 03 (P03) · Hoạt động tình nguyện của anh Sato",
    "shortTitle": "佐藤さんのボランティア活動",
    "focusGrammar": "Bài 10/11 · ～ないでください, ～てから, ～ています",
    "badge": "Đề P03 · Bài 10",
    "katakanaWords": [
      "ボランティア",
      "リサイクル",
      "コミュニケーション",
      "グループ"
    ],
    "reading": {
      "title": "「佐藤（さとう）さんのボランティア活動（かつどう）」",
      "passageJp": "佐藤（さとう）さんは毎月（まいつき）1回（かい）、町（まち）のボランティア活動（かつどう）に参加（さんか）しています。朝（あさ）8時（じ）に公園（こうえん）に集合（しゅうごう）してから、グループの人（ひと）とごみを拾（ひろ）います。紙（かみ）やペットボトルを分（わ）けて、リサイクルの箱（はこ）に入（い）れます。「公園（こうえん）でたばこを吸（す）わないでください」というポスターも貼（は）ります。いろいろな国（くに）の人（ひと）がいますから、楽（たの）しくコミュニケーションができます。活動（かつどう）の終（お）わりにみんなで写真（しゃしん）を撮（と）ります。",
      "passageVi": "Anh Sato mỗi tháng một lần tham gia hoạt động tình nguyện của thị trấn. Sau khi tập trung ở công viên lúc 8 giờ sáng, anh nhặt rác cùng mọi người trong nhóm. Phân loại giấy và chai nhựa rồi bỏ vào thùng tái chế. Nhóm cũng dán các tấm áp phích ghi \"Xin đừng hút thuốc trong công viên\". Vì có người từ nhiều quốc gia nên có thể giao tiếp rất vui vẻ. Cuối buổi hoạt động, mọi người cùng nhau chụp ảnh kỷ niệm.",
      "underlines": [
        "参加（さんか）しています。",
        "集合（しゅうごう）してから、",
        "分（わ）けて、",
        "吸（す）わないでください",
        "コミュニケーションができます。"
      ],
      "vocabNotes": [
        {
          "word": "集合（しゅうごう）します",
          "reading": "しゅうごうします",
          "meaning": "Tập trung, tập hợp"
        },
        {
          "word": "リサイクル",
          "reading": "リサイクル",
          "meaning": "Tái chế"
        }
      ],
      "questions": [
        {
          "id": "p03-r1",
          "qJp": "佐藤（さとう）さんは何時（なんじ）にどこに集合（しゅうごう）しますか。",
          "qVi": "Anh Sato tập trung ở đâu lúc mấy giờ?",
          "targetGrammar": "Bài 3/10: Hỏi địa điểm và thời gian",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "朝（あさ）8時（じ）に公園（こうえん）に集合（しゅうごう）します。",
              "vi": "Tập trung ở công viên lúc 8 giờ sáng."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "朝（あさ）の8時（じ）に町（まち）の公園（こうえん）でグループの人（ひと）と集合（しゅうごう）します。",
              "vi": "Anh ấy tập trung cùng mọi người trong nhóm tại công viên thị trấn lúc 8 giờ sáng."
            }
          ]
        },
        {
          "id": "p03-r2",
          "qJp": "ポスターには何（なん）と書（か）いてありますか。",
          "qVi": "Trên áp phích viết điều gì?",
          "targetGrammar": "Bài 10: Mẫu câu ～ないでください",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Ngắn gọn trích dẫn",
              "jp": "公園（こうえん）でたばこを吸（す）わないでくださいと書（か）いてあります。",
              "vi": "Viết là: Xin đừng hút thuốc trong công viên."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Trả lời ý nhắc nhở",
              "jp": "「たばこを吸（す）わないでください」というポスターです。",
              "vi": "Đó là áp phích nhắc nhở \"Xin đừng hút thuốc\"."
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
          "qJp": "【Picture P03】山田（やまだ）さんは先週（せんしゅう）の土曜日（どようび）に何（なに）をしましたか。",
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
    "title": "Đề 04 (P04) · Giờ học tiếng Nhật của bạn Smith",
    "shortTitle": "スミスさんの日本語の授業",
    "focusGrammar": "Bài 9/11 · ～ことができます, ～たり～たり, ～とき",
    "badge": "Đề P04 · Bài 9",
    "katakanaWords": [
      "プロジェクト",
      "プレゼンテーション",
      "カフェテリア",
      "ノートパソコン"
    ],
    "reading": {
      "title": "「スミスさんの日本語（にほんご）の授業（じゅぎょう）」",
      "passageJp": "スミスさんは大学（だいがく）で日本語（にほんご）を勉強（べんきょう）しています。今日（きょう）の授業（じゅぎょう）では、グループのプロジェクトについてプレゼンテーションをしました。初（はじ）めは緊張（きんちょう）しましたが、ノートパソコンの資料（しりょう）を見（み）せながら上手に説明（せつめい）することができました。授業（じゅぎょう）のあとで、友達（ともだち）とカフェテリアへ行（い）って、コーヒーを飲（の）みました。スミスさんは漢字（かんじ）が難（むずか）しいとき、いつも先生（せんせい）や友達（ともだち）に質問（しつもん）しています。",
      "passageVi": "Bạn Smith đang học tiếng Nhật ở trường đại học. Trong tiết học hôm nay, bạn đã thuyết trình về dự án của nhóm. Ban đầu dù khá căng thẳng, nhưng vừa chiếu tài liệu từ máy tính xách tay vừa giải thích khéo léo nên bạn đã thuyết trình rất thành công. Sau giờ học, bạn cùng bạn bè đến căng tin uống cà phê. Khi chữ Hán khó, Smith luôn đặt câu hỏi nhờ thầy cô hoặc bạn bè giải đáp.",
      "underlines": [
        "プレゼンテーションをしました。",
        "ノートパソコン",
        "説明（せつめい）することができました。",
        "カフェテリアへ行（い）って、",
        "難（むずか）しいとき、",
        "質問（しつもん）しています。"
      ],
      "vocabNotes": [
        {
          "word": "緊張（きんちょう）します",
          "reading": "きんちょうします",
          "meaning": "Căng thẳng, hồi hộp"
        },
        {
          "word": "プレゼンテーション",
          "reading": "プレゼンテーション",
          "meaning": "Thuyết trình, bài báo cáo"
        }
      ],
      "questions": [
        {
          "id": "p04-r1",
          "qJp": "スミスさんは今日（きょう）の授業（じゅぎょう）で何（なに）をしましたか。",
          "qVi": "Bạn Smith đã làm gì trong giờ học hôm nay?",
          "targetGrammar": "Bài 9: Hỏi về nội dung hành động",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "プレゼンテーションをしました。",
              "vi": "Bạn ấy đã làm bài thuyết trình."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ chi tiết",
              "jp": "グループプロジェクトについてのプレゼンテーションをしました。",
              "vi": "Bạn ấy đã thuyết trình về dự án của nhóm."
            }
          ]
        },
        {
          "id": "p04-r2",
          "qJp": "漢字（かんじ）が難（むずか）しいとき、スミスさんはどうしますか。",
          "qVi": "Khi chữ Hán khó, bạn Smith làm gì?",
          "targetGrammar": "Bài 11: Mẫu câu ～とき、どうしますか",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Ngắn gọn",
              "jp": "先生（せんせい）や友達（ともだち）に質問（しつもん）します。",
              "vi": "Đặt câu hỏi nhờ thầy cô và bạn bè."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "わからない漢字（かんじ）があるとき、先生（せんせい）や友達（ともだち）に聞（き）いて質問（しつもん）します。",
              "vi": "Khi có chữ Hán không hiểu, bạn ấy hỏi thầy cô và bạn bè."
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
          "qJp": "【Picture P04】スミスさんは昨日（きのう）何（なに）をしましたか。",
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
    "title": "Đề 05 (P05) · Gia đình và món quà của bạn Linh",
    "shortTitle": "リンさんの家族とプレゼント",
    "focusGrammar": "Bài 8/11 · あげる, もらう, ～とき, ～ています",
    "badge": "Đề P05 · Bài 8",
    "katakanaWords": [
      "スマートフォン",
      "プレゼント",
      "チョコレート",
      "ビデオ通話（つうわ）"
    ],
    "reading": {
      "title": "「リンさんの家族（かぞく）とプレゼント」",
      "passageJp": "リンさんはベトナムから日本（にほん）へ留学（りゅうがく）に来（き）ています。先週（せんしゅう）、母（はは）の誕生日（たんじょうび）でしたから、デパートで日本のきれいなスカーフとおいしいチョコレートを買（か）いました。そして、郵便局（ゆうびんきょく）から母（はは）にプレゼントを送（おく）りました。夜（よる）、スマートフォンでビデオ通話（つうわ）をして、家族（かぞく）の顔（かお）を見（み）ながら楽（たの）しく話（はな）しました。母（はは）はとても喜（よろこ）んでくれました。リンさんは家族（かぞく）に会（あ）いたいとき、いつも写真（しゃしん）を見（み）ています。",
      "passageVi": "Bạn Linh từ Việt Nam sang Nhật du học. Tuần trước vì là sinh nhật mẹ, bạn đã mua một chiếc khăn quàng cổ Nhật Bản rất đẹp và sô-cô-la ngon ở trung tâm thương mại. Sau đó, bạn gửi quà cho mẹ qua bưu điện. Buổi tối, gọi video bằng điện thoại thông minh, vừa nhìn ngắm gương mặt gia đình vừa trò chuyện vui vẻ. Mẹ bạn đã rất vui. Khi nhớ và muốn gặp gia đình, Linh luôn ngắm nhìn những bức ảnh.",
      "underlines": [
        "買（か）いました。",
        "送（おく）りました。",
        "スマートフォン",
        "見（み）ながら",
        "喜（よろこ）んでくれました。",
        "会（あ）いたいとき、"
      ],
      "vocabNotes": [
        {
          "word": "喜（よろこ）びます",
          "reading": "よろこびます",
          "meaning": "Vui mừng, phấn khởi"
        },
        {
          "word": "ビデオ通話（つうわ）",
          "reading": "ビデオつうわ",
          "meaning": "Cuộc gọi video"
        }
      ],
      "questions": [
        {
          "id": "p05-r1",
          "qJp": "リンさんはお母（かあ）さんに何（なに）を送（おく）りましたか。",
          "qVi": "Bạn Linh đã gửi quà gì cho mẹ?",
          "targetGrammar": "Bài 8: Quà tặng あげます / 送ります",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "スカーフとチョコレートを送（おく）りました。",
              "vi": "Đã gửi khăn quàng cổ và sô-cô-la."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "デパートで買（か）った日本のスカーフとチョコレートを送（おく）りました。",
              "vi": "Bạn ấy đã gửi chiếc khăn quàng Nhật Bản và sô-cô-la mua ở trung tâm thương mại."
            }
          ]
        },
        {
          "id": "p05-r2",
          "qJp": "家族（かぞく）に会（あ）いたいとき、リンさんはどうしますか。",
          "qVi": "Khi muốn gặp gia đình, bạn Linh làm gì?",
          "targetGrammar": "Bài 11: Mẫu câu ～とき、どうしますか",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Ngắn gọn",
              "jp": "家族（かぞく）の写真（しゃしん）を見（み）ます。",
              "vi": "Ngắm ảnh của gia đình."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "家族（かぞく）に会（あ）いたいとき、いつも写真（しゃしん）を見（み）ています。",
              "vi": "Khi nhớ gia đình, bạn ấy luôn ngắm nhìn những bức ảnh chụp chung."
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
          "qJp": "【Picture P05】リンさんは先週（せんしゅう）何（なに）をしましたか。",
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
    "title": "Đề 06 (P06) · Chuyến du lịch bằng xe bus của anh Takahashi",
    "shortTitle": "高橋さんのバスツアー",
    "focusGrammar": "Bài 10/11 · ～てから, ～ないでください, ～て来ます",
    "badge": "Đề P06 · Bài 10",
    "katakanaWords": [
      "バスツアー",
      "ガイド",
      "チケット",
      "カメラ"
    ],
    "reading": {
      "title": "「高橋（たかはし）さんのバスツアー」",
      "passageJp": "高橋（たかはし）さんは先週（せんしゅう）の土曜日（どようび）、富士山（ふじさん）のバスツアーに参加（さんか）しました。朝（あさ）8時（じ）に東京駅（とうきょうえき）の前（まえ）でガイドさんにチケットを見（み）せてから、バスに乗（の）りました。ガイドさんは「バスの中（なか）でごみを捨（す）てないでください」と説明（せつめい）しました。昼（ひる）ごろ富士山（ふじさん）に着（つ）いて、新（あたら）しいカメラで写真（しゃしん）をたくさん撮（と）りました。山（やま）の上（うえ）は空気（くうき）がきれいで、景色（けしき）も素晴（すば）らしかったです。",
      "passageVi": "Anh Takahashi thứ Bảy tuần trước đã tham gia tour xe buýt ngắm núi Phú Sĩ. Lúc 8 giờ sáng, trước ga Tokyo sau khi cho hướng dẫn viên xem vé thì anh lên xe. Hướng dẫn viên giải thích: \"Xin đừng vứt rác trên xe buýt\". Khoảng buổi trưa đến núi Phú Sĩ, anh chụp rất nhiều ảnh bằng chiếc máy ảnh mới. Trên núi không khí trong lành, quang cảnh cũng vô cùng tuyệt vời.",
      "underlines": [
        "参加（さんか）しました。",
        "見（み）せてから、",
        "乗（の）りました。",
        "捨（す）てないでください",
        "撮（と）りました。"
      ],
      "vocabNotes": [
        {
          "word": "景色（けしき）",
          "reading": "けしき",
          "meaning": "Phong cảnh, quang cảnh"
        },
        {
          "word": "捨（す）てます",
          "reading": "すてます",
          "meaning": "Vứt, xả (rác)"
        }
      ],
      "questions": [
        {
          "id": "p06-r1",
          "qJp": "バスに乗（の）る前（まえ）に、高橋（たかはし）さんは誰（だれ）に何（なに）を見（み）せましたか。",
          "qVi": "Trước khi lên xe buýt, anh Takahashi đã đưa cái gì cho ai xem?",
          "targetGrammar": "Bài 10: Hành động trước sau / Danh từ に Danh từ を",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "ガイドさんにチケットを見（み）せました。",
              "vi": "Đã cho hướng dẫn viên xem vé."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "東京駅（とうきょうえき）の前（まえ）で、ツアーのガイドさんにチケットを見（み）せました。",
              "vi": "Trước ga Tokyo, anh ấy đã cho hướng dẫn viên của tour xem vé."
            }
          ]
        },
        {
          "id": "p06-r2",
          "qJp": "ガイドさんはバスの中（なか）で何（なに）をしないでくださいと言（い）いましたか。",
          "qVi": "Hướng dẫn viên đã nhắc nhở đừng làm gì trên xe buýt?",
          "targetGrammar": "Bài 10: Mẫu câu ～ないでください",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "ごみを捨（す）てないでくださいと言（い）いました。",
              "vi": "Bảo rằng xin đừng vứt rác."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "「バスの中（なか）でごみを捨（す）てないでください」と説明（せつめい）しました。",
              "vi": "Đã giải thích rằng \"Xin đừng vứt rác ở trên xe buýt\"."
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
          "qJp": "【Picture P06】高橋（たかはし）さんは先週（せんしゅう）の土曜日（どようび）に何（なに）をしましたか。",
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
    "title": "Đề 07 (P07) · Cuộc sống làm thêm của bạn An",
    "shortTitle": "アンさんのアルバイト生活",
    "focusGrammar": "Bài 10/11 · ～てから, ～たり～たり, ～くなります",
    "badge": "Đề P07 · Bài 11",
    "katakanaWords": [
      "アルバイト",
      "カフェ",
      "メニュー",
      "マネージャー"
    ],
    "reading": {
      "title": "「アンさんのアルバイト生活（せいかつ）」",
      "passageJp": "留学生（りゅうがくせい）のアンさんは、駅（えき）の近（ちか）くのカフェでアルバイトをしています。お店（みせ）に着（つ）いてから、まず制服（せいふく）に着替（きが）えてマネージャーに挨拶（あいさつ）をします。仕事（しごと）はコーヒーを入（い）れたり、お客（きゃく）さんにメニューを渡（わた）したりします。初（はじ）めは日本語（にほんご）での接客（せっきゃく）が難（むずか）しかったですが、だんだん慣（な）れて上手（じょうず）になりました。夜（よる）9時（じ）に仕事（しごと）が終（お）わって、おなかがすいたとき、カフェのサンドイッチを食（た）べます。",
      "passageVi": "Du học sinh An đang làm thêm tại một quán cà phê gần nhà ga. Sau khi đến quán, trước tiên bạn thay đồng phục rồi chào hỏi người quản lý. Công việc gồm pha cà phê, đưa thực đơn cho khách hàng... Ban đầu việc tiếp khách bằng tiếng Nhật rất khó khăn, nhưng dần dần bạn đã quen và trở nên thành thạo. 9 giờ tối khi công việc kết thúc và bụng đói, bạn ăn bánh sandwich của quán.",
      "underlines": [
        "アルバイトをしています。",
        "着替（きが）えて",
        "入（い）れたり、",
        "渡（わた）したりします。",
        "上手（じょうず）になりました。",
        "おなかがすいたとき、"
      ],
      "vocabNotes": [
        {
          "word": "着替（きが）えます",
          "reading": "きがえます",
          "meaning": "Thay quần áo, đổi đồ"
        },
        {
          "word": "接客（せっきゃく）",
          "reading": "せっきゃく",
          "meaning": "Tiếp khách, phục vụ khách"
        }
      ],
      "questions": [
        {
          "id": "p07-r1",
          "qJp": "アンさんはカフェでどんな仕事（しごと）をしますか。",
          "qVi": "Bạn An làm những công việc gì ở quán cà phê?",
          "targetGrammar": "Bài 11: Liệt kê ～たり～たり",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "コーヒーを入（い）れたり、メニューを渡（わた）したりします。",
              "vi": "Pha cà phê và đưa thực đơn cho khách."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "おいしいコーヒーを入（い）れたり、お客（きゃく）さんにメニューを渡（わた）したりします。",
              "vi": "Pha cà phê thơm ngon và đưa thực đơn cho khách hàng."
            }
          ]
        },
        {
          "id": "p07-r2",
          "qJp": "おなかがすいたとき、アンさんは何（なに）を食（た）べますか。",
          "qVi": "Khi bụng đói, bạn An ăn món gì?",
          "targetGrammar": "Bài 10/11: ～とき / Trạng thái cơ thể",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Ngắn gọn",
              "jp": "サンドイッチを食（た）べます。",
              "vi": "Ăn bánh mì kẹp sandwich."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "仕事（しごと）が終（お）わってから、カフェのサンドイッチを食（た）べます。",
              "vi": "Sau khi tan làm, bạn ấy ăn bánh mì sandwich của quán cà phê."
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
          "qJp": "【Picture P07】アンさんは昨日（きのう）何（なに）をしましたか。",
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
    "title": "Đề 08 (P08) · Lớp học nấu ăn của chị Nakamura",
    "shortTitle": "中村さんの料理教室",
    "focusGrammar": "Bài 8/9 · 教えてくれました, ～ことができます, 作る",
    "badge": "Đề P08 · Bài 9",
    "katakanaWords": [
      "クッキング",
      "エプロン",
      "キッチン",
      "デザート"
    ],
    "reading": {
      "title": "「中村（なかむら）さんの料理（りょうり）教室（きょうしつ）」",
      "passageJp": "中村（なかむら）さんは先月（せんげつ）から、週末（しゅうまつ）のクッキング教室（きょうしつ）に通（かよ）っています。広（ひろ）いキッチンでエプロンをつけて、先生（せんせい）に日本料理（にほんりょうり）の作（つく）り方を教（おし）えてもらいました。今日（きょう）は魚（さかな）の切（き）り方や天（てん）ぷらの揚（あ）げ方を練習（れんしゅう）して、上手（じょうず）に作（つく）ることができました。料理（りょうり）のあとで、甘（あま）いデザートを食（た）べながらみんなと楽（たの）しく話（はな）しました。家（いえ）でも家族（かぞく）のために作（つく）ってあげたいです。",
      "passageVi": "Chị Nakamura từ tháng trước đã tham gia lớp học nấu ăn vào cuối tuần. Đeo tạp dề trong gian bếp rộng rãi, chị được cô giáo chỉ dạy cách làm các món ăn Nhật Bản. Hôm nay chị tập cách cắt cá và rán món tempura, và đã làm được rất khéo léo. Sau khi nấu xong, vừa ăn món tráng miệng ngọt ngào vừa trò chuyện vui vẻ cùng mọi người. Về nhà chị cũng muốn nấu cho gia đình thưởng thức.",
      "underlines": [
        "クッキング教室（きょうしつ）",
        "教（おし）えてもらいました。",
        "作（つく）ることができました。",
        "食（た）べながら",
        "作（つく）ってあげたいです。"
      ],
      "vocabNotes": [
        {
          "word": "通（かよ）います",
          "reading": "かよいます",
          "meaning": "Đi lại thường xuyên (học/làm)"
        },
        {
          "word": "デザート",
          "reading": "デザート",
          "meaning": "Món tráng miệng"
        }
      ],
      "questions": [
        {
          "id": "p08-r1",
          "qJp": "中村（なかむら）さんは今日（きょう）の教室（きょうしつ）で何（なに）を作（つく）ることができましたか。",
          "qVi": "Chị Nakamura trong buổi học hôm nay đã có thể làm được món gì?",
          "targetGrammar": "Bài 9: Mẫu câu ～ことができます",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "天（てん）ぷらや魚（さかな）の料理（りょうり）を作（つく）ることができました。",
              "vi": "Đã có thể làm được món tempura và món cá."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "魚（さかな）を切（き）って、天（てん）ぷらを上手（じょうず）に作（つく）ることができました。",
              "vi": "Chị ấy đã cắt cá và làm món tempura rất khéo léo."
            }
          ]
        },
        {
          "id": "p08-r2",
          "qJp": "中村（なかむら）さんは家（いえ）に帰（かえ）ってから誰（だれ）のために料理（りょうり）を作（つく）りたいですか。",
          "qVi": "Sau khi về nhà, chị Nakamura muốn nấu ăn cho ai?",
          "targetGrammar": "Bài 8: Mẫu câu ～のために / 作ってあげます",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Ngắn gọn",
              "jp": "家族（かぞく）のために作（つく）りたいです。",
              "vi": "Muốn nấu cho gia đình."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "家（いえ）でも家族（かぞく）のために日本料理（にほんりょうり）を作（つく）ってあげたいです。",
              "vi": "Chị ấy muốn tự tay nấu món Nhật đãi gia đình tại nhà."
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
          "qJp": "【Picture P08】中村（なかむら）さんは昨日（きのう）何（なに）をしましたか。",
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
    "title": "Đề 09 (P09) · Cuộc sống mới của bạn Mai",
    "shortTitle": "マイさんの新しい生活",
    "focusGrammar": "Bài 11 · ～とき, だんだん慣れました, 一人暮らし",
    "badge": "Đề P09 · Bài 11",
    "katakanaWords": [
      "ルームメイト",
      "スケジュール",
      "インターネット",
      "シャンプー"
    ],
    "reading": {
      "title": "「マイさんの新（あたら）しい生活（せいかつ）」",
      "passageJp": "マイさんは先月（せんげつ）から、大学（だいがく）の寮（りょう）で一人暮（ひとりぐ）らしを始（はじ）めました。初（はじ）めは寂（さび）しくて生活（せいかつ）が大変（たいへん）でしたが、だんだん慣（な）れました。日本人のルームメイトが親切（しんせつ）にいろいろなことを教（おし）えてくれたからです。毎日（まいにち）のスケジュールを手帳（てちょう）に書（か）いて、計画的（けいかくてき）に生活（せいかつ）しています。夜（よる）、暇（ひま）なとき、インターネットで映画（えいが）を見（み）たり、ベトナムの家族（かぞく）と連絡（れんらく）したりします。",
      "passageVi": "Bạn Mai từ tháng trước đã bắt đầu cuộc sống tự lập tại ký túc xá của trường đại học. Ban đầu bạn thấy buồn và cuộc sống khá vất vả, nhưng dần dần đã quen. Đó là vì người bạn cùng phòng Nhật Bản đã nhiệt tình chỉ dẫn cho bạn rất nhiều điều. Bạn ghi lịch trình mỗi ngày vào sổ tay và sinh hoạt rất có kế hoạch. Buổi tối khi rảnh rỗi, bạn xem phim trên mạng Internet, liên lạc với gia đình ở Việt Nam...",
      "underlines": [
        "一人暮（ひとりぐ）らし",
        "だんだん慣（な）れました。",
        "教（おし）えてくれたからです。",
        "スケジュール",
        "暇（ひま）なとき、",
        "見（み）たり、",
        "連絡（れんらく）したりします。"
      ],
      "vocabNotes": [
        {
          "word": "計画的（けいかくてき）",
          "reading": "けいかくてき",
          "meaning": "Có kế hoạch, bài bản"
        },
        {
          "word": "手帳（てちょう）",
          "reading": "てちょう",
          "meaning": "Sổ tay bỏ túi"
        }
      ],
      "questions": [
        {
          "id": "p09-r1",
          "qJp": "マイさんはどうして日本（にほん）の生活（せいかつ）に慣（な）れましたか。",
          "qVi": "Tại sao bạn Mai lại dần quen với cuộc sống ở Nhật?",
          "targetGrammar": "Bài 8/11: Hỏi lý do ～から / ～てくれた",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "ルームメイトが親切（しんせつ）に教（おし）えてくれたからです。",
              "vi": "Vì người bạn cùng phòng đã tốt bụng chỉ bảo cho."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "日本人のルームメイトがいろいろなことを教（おし）えてくれたからです。",
              "vi": "Vì người bạn cùng phòng người Nhật đã nhiệt tình dạy cho bạn rất nhiều điều."
            }
          ]
        },
        {
          "id": "p09-r2",
          "qJp": "夜（よる）暇（ひま）なとき、マイさんは何（なに）をしますか。",
          "qVi": "Buổi tối khi rảnh rỗi, bạn Mai làm gì?",
          "targetGrammar": "Bài 11: Mẫu câu ～とき / ～たり～たり",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Ngắn gọn",
              "jp": "映画（えいが）を見（み）たり、家族（かぞく）と連絡（れんらく）したりします。",
              "vi": "Xem phim và liên lạc với gia đình."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "インターネットで映画（えいが）を見（み）たり、国の家族（かぞく）に電話（でんわ）したりします。",
              "vi": "Xem phim trên Internet và gọi điện cho gia đình ở quê nhà."
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
          "qJp": "【Picture P09】マイさんは引越（ひっこ）しの日（ひ）に何（なに）をしましたか。",
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
    "title": "Đề 10 (P10) · Sở thích âm nhạc của chị Watanabe",
    "shortTitle": "渡辺さんの音楽の趣味",
    "focusGrammar": "Bài 9/11 · 趣味は～こと, ～を聞きながら, コンサート",
    "badge": "Đề P10 · Bài 9",
    "katakanaWords": [
      "コンサート",
      "クラシック",
      "ピアノ",
      "チケット"
    ],
    "reading": {
      "title": "「渡辺（わたなべ）さんの音楽（おんがく）の趣味（しゅみ）」",
      "passageJp": "渡辺（わたなべ）さんの趣味（しゅみ）は、クラシック音楽（おんがく）を聞（き）くことです。子どものころからピアノを習（なら）っていて、今（いま）も家（いえ）でよく弾（ひ）いています。先週（せんしゅう）、有名（ゆうめい）なオーケストラのチケットを買（か）って、大（おお）きなホールへコンサートを見（み）に行（い）きました。素晴（すば）らしい演奏（えんそう）を聞（き）いて、とても感動（かんどう）しました。渡辺（わたなべ）さんは疲（つか）れたときやストレスがあるとき、いつもピアノを弾（ひ）いたり音楽（おんがく）を聞（き）いたりしてリラックスしています。",
      "passageVi": "Sở thích của chị Watanabe là nghe nhạc cổ điển. Từ nhỏ chị đã học đàn piano và hiện tại ở nhà vẫn thường xuyên chơi đàn. Tuần trước, sau khi mua vé của một dàn nhạc giao hưởng nổi tiếng, chị đã đến hội trường lớn để thưởng thức buổi hòa nhạc. Được lắng nghe màn trình diễn tuyệt vời, chị vô cùng xúc động. Khi mệt mỏi hay có căng thẳng, chị Watanabe luôn chơi piano, nghe nhạc để thư giãn đầu óc.",
      "underlines": [
        "聞（き）くことです。",
        "弾（ひ）いています。",
        "チケット",
        "コンサート",
        "感動（かんどう）しました。",
        "弾（ひ）いたり",
        "聞（き）いたりして"
      ],
      "vocabNotes": [
        {
          "word": "演奏（えんそう）",
          "reading": "えんそう",
          "meaning": "Biểu diễn, trình diễn nhạc cụ"
        },
        {
          "word": "感動（かんどう）します",
          "reading": "かんどうします",
          "meaning": "Cảm động, xúc động"
        }
      ],
      "questions": [
        {
          "id": "p10-r1",
          "qJp": "渡辺（わたなべ）さんの趣味（しゅみ）は何（なん）ですか。",
          "qVi": "Sở thích của chị Watanabe là gì?",
          "targetGrammar": "Bài 9: Mẫu câu 趣味は V-ることです",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "クラシック音楽（おんがく）を聞（き）くことです。",
              "vi": "Là nghe nhạc cổ điển."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "クラシック音楽（おんがく）を聞（き）くことと、ピアノを弾（ひ）くことです。",
              "vi": "Là nghe nhạc cổ điển và chơi đàn piano."
            }
          ]
        },
        {
          "id": "p10-r2",
          "qJp": "疲（つか）れたとき、渡辺（わたなべ）さんはどうしますか。",
          "qVi": "Khi mệt mỏi, chị Watanabe làm gì?",
          "targetGrammar": "Bài 11: Mẫu câu ～とき / ～たり～たり",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Ngắn gọn",
              "jp": "ピアノを弾（ひ）いたり、音楽（おんがく）を聞（き）いたりします。",
              "vi": "Chơi piano và nghe nhạc."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ mục đích",
              "jp": "ピアノを弾（ひ）いたり音楽（おんがく）を聞（き）いたりしてリラックスします。",
              "vi": "Chị ấy chơi piano hoặc nghe nhạc để thư giãn tâm hồn."
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
          "qJp": "【Picture P10】渡辺（わたなべ）さんは先週（せんしゅう）何（なに）をしましたか。",
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
    "title": "Đề 11 (P11) · Cuộc sống rèn luyện sức khỏe của anh Ito",
    "shortTitle": "伊藤さんの健康生活",
    "focusGrammar": "Bài 10/11 · ～てから, ～ないでください, ～くなります",
    "badge": "Đề P11 · Bài 10",
    "katakanaWords": [
      "スポーツジム",
      "トレーニング",
      "ランニングマシン",
      "プロテイン"
    ],
    "reading": {
      "title": "「伊藤（いとう）さんの健康（けんこう）生活（せいかつ）」",
      "passageJp": "伊藤（いとう）さんは体（からだ）を強（つよ）くするために、週（しゅう）に3回（かい）スポーツジムへ通（かよ）っています。ジムに着（つ）いてから、まず準備（じゅんび）体操（たいそう）をして、ランニングマシンで30分（ぷん）走（はし）ります。「走（はし）っているとき、スマートフォンを見（み）ないでください」とインストラクターに注意（ちゅうい）されました。汗（あせ）をたくさんかいてから、シャワーを浴（あ）びてプロテインを飲（の）みます。運動（うんどう）を始（はじ）めてから、体（からだ）が元気（げんき）になって毎日（まいにち）よく眠（ねむ）れます。",
      "passageVi": "Để nâng cao sức khỏe, anh Ito đi tập ở phòng gym mỗi tuần 3 lần. Sau khi đến phòng gym, trước tiên anh tập bài thể dục khởi động, rồi chạy 30 phút trên máy chạy bộ. Huấn luyện viên nhắc nhở: \"Khi đang chạy xin đừng nhìn vào điện thoại thông minh\". Sau khi ra nhiều mồ hôi, anh tắm vòi sen rồi uống bột protein. Kể từ khi bắt đầu vận động, cơ thể trở nên khỏe khoắn và mỗi ngày đều ngủ rất ngon giấc.",
      "underlines": [
        "通（かよ）っています。",
        "体操（たいそう）をして、",
        "見（み）ないでください",
        "浴（あ）びて",
        "元気（げんき）になって"
      ],
      "vocabNotes": [
        {
          "word": "体操（たいそう）",
          "reading": "たいそう",
          "meaning": "Bài tập thể dục"
        },
        {
          "word": "汗（あせ）をかきます",
          "reading": "あせをかきます",
          "meaning": "Ra mồ hôi, toát mồ hôi"
        }
      ],
      "questions": [
        {
          "id": "p11-r1",
          "qJp": "インストラクターは何（なに）をしないでくださいと注意（ちゅうい）しましたか。",
          "qVi": "Huấn luyện viên đã nhắc nhở đừng làm gì?",
          "targetGrammar": "Bài 10: Mẫu câu ～ないでください",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "走（はし）っているとき、スマートフォンを見（み）ないでくださいと注意（ちゅうい）しました。",
              "vi": "Nhắc rằng khi đang chạy xin đừng nhìn vào điện thoại thông minh."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Ngắn gọn",
              "jp": "走（はし）りながらスマートフォンを使（つか）わないでくださいと言（い）いました。",
              "vi": "Bảo rằng đừng vừa chạy vừa dùng điện thoại."
            }
          ]
        },
        {
          "id": "p11-r2",
          "qJp": "運動（うんどう）をしてから、伊藤（いとう）さんの体（からだ）はどうなりましたか。",
          "qVi": "Sau khi tập thể dục, cơ thể anh Ito đã thay đổi như thế nào?",
          "targetGrammar": "Bài 10: Biến đổi ～くなります / ～になります",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "元気（げんき）になりました。",
              "vi": "Đã trở nên khỏe khoắn hơn."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "体（からだ）が元気（げんき）になって、毎日（まいにち）よく眠（ねむ）れるようになりました。",
              "vi": "Cơ thể trở nên khỏe mạnh và mỗi ngày đều ngủ rất ngon."
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
          "qJp": "【Picture P11】伊藤（いとう）さんは昨日（きのう）ジムで何（なに）をしましたか。",
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
    "title": "Đề 12 (P12) · Chuyến mua sắm của bạn Kim tại khu thương mại",
    "shortTitle": "キムさんのデパートでの買い物",
    "focusGrammar": "Bài 8/10 · あげます, ～てから, エレベーター",
    "badge": "Đề P12 · Bài 8",
    "katakanaWords": [
      "デパート",
      "エレベーター",
      "インフォメーション",
      "ネクタイ"
    ],
    "reading": {
      "title": "「キムさんのデパートでの買（か）い物（もの）」",
      "passageJp": "キムさんは今週末（こんしゅうまつ）が父（ちち）の誕生日（たんじょうび）ですから、駅前（えきまえ）のデパートへ買（か）い物（もの）に行（い）きました。まず1階（かい）のインフォメーションで紳士服（しんしふく）の売（う）り場（ば）を聞（き）いてから、エレベーターで4階（かい）へ上（あ）がりました。店員（てんいん）さんに相談（そうだん）して、青（あお）いきれいなネクタイを選（えら）びました。店員（てんいん）さんは「きれいにラッピングしますから、少（すこ）し待（ま）ってください」と言（い）いました。キムさんは父（ちち）に渡（わた）す日（ひ）を楽（たの）しみにしています。",
      "passageVi": "Vì cuối tuần này là sinh nhật bố nên bạn Kim đã đến trung tâm thương mại trước ga để mua sắm. Trước tiên, sau khi hỏi quầy thông tin tầng 1 về khu vực bán đồ nam thì bạn đi thang máy lên tầng 4. Được nhân viên bán hàng tư vấn, bạn chọn một chiếc cà vạt màu xanh rất đẹp. Nhân viên nói: \"Chúng tôi sẽ gói quà thật đẹp, xin quý khách đợi một lát ạ\". Bạn Kim rất mong chờ đến ngày trao quà cho bố.",
      "underlines": [
        "買（か）い物（もの）に行（い）きました。",
        "インフォメーション",
        "聞（き）いてから、",
        "エレベーター",
        "少（すこ）し待（ま）ってください"
      ],
      "vocabNotes": [
        {
          "word": "ラッピングします",
          "reading": "ラッピングします",
          "meaning": "Gói quà"
        },
        {
          "word": "楽（たの）しみにします",
          "reading": "たのしみにします",
          "meaning": "Mong chờ, háo hức"
        }
      ],
      "questions": [
        {
          "id": "p12-r1",
          "qJp": "キムさんはお父（とう）さんのために何（なに）を買（か）いましたか。",
          "qVi": "Bạn Kim đã mua gì cho bố?",
          "targetGrammar": "Bài 8: Quà tặng あげます / 買いました",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "ネクタイを買（か）いました。",
              "vi": "Đã mua một chiếc cà vạt."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "青（あお）いきれいなネクタイを買（か）いました。",
              "vi": "Đã mua một chiếc cà vạt màu xanh rất đẹp."
            }
          ]
        },
        {
          "id": "p12-r2",
          "qJp": "4階（かい）へどうやって行（い）きましたか。",
          "qVi": "Bạn ấy đã lên tầng 4 bằng cách nào?",
          "targetGrammar": "Bài 9: Phương thức di chuyển どうやって",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "エレベーターで行（い）きました。",
              "vi": "Đi bằng thang máy."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "インフォメーションで聞（き）いてから、エレベーターで上（あ）がりました。",
              "vi": "Sau khi hỏi ở quầy thông tin thì bạn ấy đi lên bằng thang máy."
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
          "qJp": "【Picture P12】キムさんは昨日（きのう）デパートで何（なに）をしましたか。",
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
    "title": "Đề 13 (P13) · Buổi xem phim của anh Kobayashi",
    "shortTitle": "小林さんの映画鑑賞",
    "focusGrammar": "Bài 9/11 · 映画を見ることが好き, ～てから, アクション",
    "badge": "Đề P13 · Bài 9",
    "katakanaWords": [
      "シネマ",
      "アクション",
      "ポップコーン",
      "スクリーン"
    ],
    "reading": {
      "title": "「小林（こばやし）さんの映画（えいが）鑑賞（かんしょう）」",
      "passageJp": "小林（こばやし）さんは映画（えいが）を見（み）ることが大好（だいす）きです。先週（せんしゅう）の日曜日（にちようび）、新（あたら）しいシネマコンプレックスへ行（い）きました。受付（うけつけ）でチケットとポップコーンを買（か）ってから、大（おお）きなスクリーンの部屋（へや）に入（い）りました。見（み）た映画（えいが）はアメリカのアクション映画（えいが）で、音（おと）も映像（えいぞう）も迫力（はくりょく）がありました。映画（えいが）のあとで、カフェで友達（ともだち）と映画（えいが）の感想（かんそう）を話（はな）し合（あ）いました。",
      "passageVi": "Anh Kobayashi rất thích xem phim. Chủ Nhật tuần trước, anh đã đến một cụm rạp chiếu phim mới mở. Sau khi mua vé và bắp rang bơ tại quầy thì anh bước vào phòng chiếu màn hình lớn. Bộ phim anh xem là một phim hành động của Mỹ, cả âm thanh lẫn hình ảnh đều vô cùng sống động và kịch tính. Sau bộ phim, anh cùng bạn bè ngồi ở quán cà phê trao đổi cảm nhận về bộ phim.",
      "underlines": [
        "見（み）ることが大好（だいす）きです。",
        "ポップコーンを買（か）ってから、",
        "スクリーン",
        "アクション映画（えいが）",
        "話（はな）し合（あ）いました。"
      ],
      "vocabNotes": [
        {
          "word": "迫力（はくりょく）",
          "reading": "はくりょく",
          "meaning": "Sức lôi cuốn, kịch tính"
        },
        {
          "word": "感想（かんそう）",
          "reading": "かんそう",
          "meaning": "Cảm tưởng, nhận xét"
        }
      ],
      "questions": [
        {
          "id": "p13-r1",
          "qJp": "小林（こばやし）さんはどんな映画（えいが）を見（み）ましたか。",
          "qVi": "Anh Kobayashi đã xem bộ phim thể loại gì?",
          "targetGrammar": "Bài 9: Thể loại phim / Tính từ miêu tả",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "アメリカのアクション映画（えいが）を見（み）ました。",
              "vi": "Đã xem một bộ phim hành động của Mỹ."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "迫力（はくりょく）があるアメリカのアクション映画（えいが）を見（み）ました。",
              "vi": "Đã xem một bộ phim hành động Mỹ đầy kịch tính."
            }
          ]
        },
        {
          "id": "p13-r2",
          "qJp": "スクリーンがある部屋（へや）に入（はい）る前（まえ）に何（なに）を買（か）いましたか。",
          "qVi": "Trước khi vào phòng chiếu, anh ấy đã mua gì?",
          "targetGrammar": "Bài 10/11: Mẫu câu ～前に / ～てから",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "チケットとポップコーンを買（か）いました。",
              "vi": "Đã mua vé và bắp rang bơ."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "受付（うけつけ）で映画（えいが）のチケットとおいしいポップコーンを買（か）いました。",
              "vi": "Tại quầy tiếp tân, anh ấy đã mua vé xem phim và bắp rang bơ thơm ngon."
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
          "qJp": "【Picture P13】小林（こばやし）さんは先週（せんしゅう）の日曜日（にちようび）に何（なに）をしましたか。",
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
    "title": "Đề 14 (P14) · Giờ tự học ở thư viện của bạn Nam",
    "shortTitle": "ナムさんの図書館での勉強",
    "focusGrammar": "Bài 10/11 · ～ないでください, ～てから, 静かに",
    "badge": "Đề P14 · Bài 10",
    "katakanaWords": [
      "ライブラリー",
      "パソコン",
      "コピー機（き）",
      "エアコン"
    ],
    "reading": {
      "title": "「ナムさんの図書館（としょかん）での勉強（べんきょう）」",
      "passageJp": "ナムさんは試験（しけん）の前（まえ）に、よく大学（だいがく）のライブラリーで勉強（べんきょう）しています。図書館（としょかん）の中（なか）は静（しず）かでエアコンも涼（すず）しいですから、集中（しゅうちゅう）することができます。受付（うけつけ）で学生証（がくせいしょう）を見（み）せてから、パソコンの部屋（へや）でレポートを書（か）きます。「館内（かんない）で大（おお）きな声（こえ）で話（はな）さないでください。食（た）べ物（もの）を食（た）べないでください」という規則（きそく）があります。ナムさんは必要な資料（しりょう）をコピー機（き）でコピーしてから、本（ほん）を2冊（さつ）借（か）りて帰（かえ）りました。",
      "passageVi": "Trước kỳ thi, bạn Nam thường học bài ở thư viện trường đại học. Bên trong thư viện yên tĩnh và điều hòa mát mẻ nên bạn có thể rất tập trung. Sau khi xuất trình thẻ sinh viên ở quầy lễ tân, bạn vào phòng máy tính viết bài báo cáo. Ở đây có quy định: \"Xin đừng nói chuyện to tiếng trong thư viện. Xin đừng ăn đồ ăn\". Bạn Nam photo các tài liệu cần thiết bằng máy photocopy, sau đó mượn 2 cuốn sách rồi ra về.",
      "underlines": [
        "集中（しゅうちゅう）することができます。",
        "見（み）せてから、",
        "話（はな）さないでください。",
        "食（た）べないでください",
        "コピーしてから、"
      ],
      "vocabNotes": [
        {
          "word": "集中（しゅうちゅう）します",
          "reading": "しゅうちゅうします",
          "meaning": "Tập trung"
        },
        {
          "word": "規則（きそく）",
          "reading": "きそく",
          "meaning": "Quy tắc, nội quy"
        }
      ],
      "questions": [
        {
          "id": "p14-r1",
          "qJp": "図書館（としょかん）の中（なか）で何（なに）をしてはいけませんか。",
          "qVi": "Trong thư viện không được làm những việc gì?",
          "targetGrammar": "Bài 10: Mẫu câu ～ないでください",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "大（おお）きな声（こえ）で話（はな）したり、食（た）べ物（もの）を食（た）べたりしてはいけません。",
              "vi": "Không được nói chuyện to tiếng hoặc ăn đồ ăn."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Trích dẫn quy tắc",
              "jp": "大（おお）きな声（こえ）で話（はな）さないでください、食（た）べないでくださいと書（か）いてあります。",
              "vi": "Có quy định: xin đừng nói lớn tiếng và xin đừng ăn đồ ăn."
            }
          ]
        },
        {
          "id": "p14-r2",
          "qJp": "ナムさんは本（ほん）を何冊（なんさつ）借（か）りましたか。",
          "qVi": "Bạn Nam đã mượn mấy cuốn sách?",
          "targetGrammar": "Bài 9: Đếm số lượng ～冊",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "2冊（さつ）借（か）りました。",
              "vi": "Đã mượn 2 cuốn sách."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "必要（ひつよう）な本（ほん）を2冊（さつ）借（か）りて帰（かえ）りました。",
              "vi": "Bạn ấy đã mượn 2 cuốn sách cần thiết rồi ra về."
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
          "qJp": "【Picture P14】ナムさんは昨日（きのう）図書館（としょかん）で何（なに）をしましたか。",
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
    "title": "Đề 15 (P15) · Chuẩn bị tiệc sinh nhật của anh Kato",
    "shortTitle": "加藤さんのパーティー準備",
    "focusGrammar": "Bài 8/11 · あげました, ～たり～たり, サプライズ",
    "badge": "Đề P15 · Bài 8",
    "katakanaWords": [
      "サプライズ",
      "パーティー",
      "バースデーケーキ",
      "ジュース"
    ],
    "reading": {
      "title": "「加藤（かとう）さんのパーティー準備（じゅんび）」",
      "passageJp": "加藤（かとう）さんは昨日（きのう）、友達（ともだち）のためにサプライズの誕生日（たんじょうび）パーティーを計画（けいかく）しました。午後（ごご）ケーキ屋（や）へ行（い）って、大（おお）きなバースデーケーキを予約（よやく）してから、スーパーでジュースやお菓子（かし）を買（か）いました。夕方（ゆうがた）友達（ともだち）の部屋（へや）に集（あつ）まって、風船（ふうせん）を飾（かざ）ったり音楽（おんがく）を準備（じゅんび）したりしました。主役（しゅやく）の友達（ともだち）が入（はい）ってきたとき、みんなで「お誕生日（たんじょうび）おめでとう」と言（い）ってプレゼントをあげました。とても楽（たの）しい夜（よる）でした。",
      "passageVi": "Hôm qua anh Kato đã lên kế hoạch tổ chức một bữa tiệc sinh nhật bất ngờ cho bạn. Buổi chiều sau khi đến tiệm bánh đặt chiếc bánh sinh nhật lớn, anh đi siêu thị mua nước ngọt và bánh kẹo. Chiều tối mọi người tập trung ở phòng của bạn, trang trí bóng bay, chuẩn bị âm nhạc... Khi người bạn nhân vật chính bước vào phòng, mọi người đồng thanh hô \"Chúc mừng sinh nhật!\" và tặng quà. Đó là một buổi tối vô cùng vui vẻ.",
      "underlines": [
        "計画（けいかく）しました。",
        "予約（よやく）してから、",
        "風船（ふうせん）を飾（かざ）ったり",
        "入（はい）ってきたとき、",
        "プレゼントをあげました。"
      ],
      "vocabNotes": [
        {
          "word": "風船（ふうせん）",
          "reading": "ふうせん",
          "meaning": "Bóng bay"
        },
        {
          "word": "主役（しゅやく）",
          "reading": "しゅやく",
          "meaning": "Nhân vật chính"
        }
      ],
      "questions": [
        {
          "id": "p15-r1",
          "qJp": "加藤（かとう）さんはスーパーで何（なに）を買（か）いましたか。",
          "qVi": "Anh Kato đã mua gì ở siêu thị?",
          "targetGrammar": "Bài 2/8: Hỏi đồ vật đã mua",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "ジュースやお菓子（かし）を買（か）いました。",
              "vi": "Đã mua nước ngọt và bánh kẹo."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "パーティーのために、ジュースやお菓子（かし）を買（か）いました。",
              "vi": "Anh ấy đã mua nước ngọt và bánh kẹo để chuẩn bị cho bữa tiệc."
            }
          ]
        },
        {
          "id": "p15-r2",
          "qJp": "友達（ともだち）が部屋（へや）に入（はい）ってきたとき、みんなは何（なに）をしましたか。",
          "qVi": "Khi người bạn bước vào phòng, mọi người đã làm gì?",
          "targetGrammar": "Bài 11: Mẫu câu ～とき / ～あげました",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "「お誕生日（たんじょうび）おめでとう」と言（い）ってプレゼントをあげました。",
              "vi": "Nói chúc mừng sinh nhật rồi tặng quà."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "みんなで「おめでとう」と言（い）って、用意（ようい）したプレゼントをあげました。",
              "vi": "Mọi người cùng chúc mừng và trao món quà đã chuẩn bị sẵn."
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
          "qJp": "【Picture P15】加藤（かとう）さんは昨日（きのう）何（なに）をしましたか。",
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
    "title": "Đề 16 (P16) · Một ngày làm việc tại công ty của anh Yoshida",
    "shortTitle": "吉田さんの会社での一日",
    "focusGrammar": "Bài 10/11 · ～てから, ～たり～たり, ～ています",
    "badge": "Đề P16 · Bài 11",
    "katakanaWords": [
      "ミーティング",
      "ソフトウェア",
      "スケジュール",
      "コンピューター"
    ],
    "reading": {
      "title": "「吉田（よしだ）さんの会社（かいしゃ）での一日（いちにち）」",
      "passageJp": "吉田（よしだ）さんはIT企業（きぎょう）でソフトウェアの開発（かいはつ）をしています。毎朝（まいあさ）8時半（じはん）に出社（しゅっしゃ）してから、まずコンピューターでメールをチェックします。10時（じ）からチームのメンバーとオンラインでミーティングをして、今日（きょう）のスケジュールを確認（かくにん）します。午後（ごご）はプログラムを書（か）いたり、仕様書（しようしょ）を読（よ）んだりします。仕事（しごと）が忙（いそが）しくて疲（つか）れたとき、屋上（おくじょう）へ行（い）って遠（とお）くの景色（けしき）を見（み）ながら深呼吸（しんこきゅう）します。",
      "passageVi": "Anh Yoshida đang làm công việc phát triển phần mềm tại một doanh nghiệp CNTT. Mỗi sáng sau khi đến công ty lúc 8 giờ rưỡi, trước tiên anh kiểm tra email trên máy tính. Từ 10 giờ, anh họp trực tuyến với các thành viên trong nhóm để xác nhận lịch trình công việc hôm nay. Buổi chiều anh viết code lập trình, đọc tài liệu đặc tả... Khi công việc bận rộn và thấy mệt mỏi, anh lên tầng thượng vừa ngắm nhìn quang cảnh đằng xa vừa hít thở thật sâu.",
      "underlines": [
        "開発（かいはつ）をしています。",
        "出社（しゅっしゃ）してから、",
        "ミーティング",
        "書（か）いたり、",
        "読（よ）んだりします。",
        "疲（つか）れたとき、",
        "見（み）ながら"
      ],
      "vocabNotes": [
        {
          "word": "確認（かくにん）します",
          "reading": "かくにんします",
          "meaning": "Xác nhận, kiểm tra lại"
        },
        {
          "word": "深呼吸（しんこきゅう）",
          "reading": "しんこきゅう",
          "meaning": "Hít thở sâu"
        }
      ],
      "questions": [
        {
          "id": "p16-r1",
          "qJp": "吉田（よしだ）さんは10時（じ）から何（なに）をしますか。",
          "qVi": "Anh Yoshida làm gì từ lúc 10 giờ?",
          "targetGrammar": "Bài 3/11: Hỏi lịch trình thời gian",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "チームのミーティングをします。",
              "vi": "Họp với nhóm."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "メンバーとオンラインでミーティングをして、スケジュールを確認（かくにん）します。",
              "vi": "Họp online với các thành viên để kiểm tra lại lịch trình công việc."
            }
          ]
        },
        {
          "id": "p16-r2",
          "qJp": "疲（つか）れたとき、吉田（よしだ）さんはどうしますか。",
          "qVi": "Khi mệt mỏi, anh Yoshida làm gì?",
          "targetGrammar": "Bài 11: Mẫu câu ～とき、どうしますか",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Ngắn gọn",
              "jp": "屋上（おくじょう）へ行（い）って深呼吸（しんこきゅう）します。",
              "vi": "Lên sân thượng hít thở sâu."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "屋上（おくじょう）へ行（い）って、景色（けしき）を見（み）ながら深呼吸（しんこきゅう）します。",
              "vi": "Lên sân thượng, vừa ngắm phong cảnh vừa hít thở thật sâu."
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
          "qJp": "【Picture P16】吉田（よしだ）さんは昨日（きのう）何（なに）をしましたか。",
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
    "title": "Đề 17 (P17) · Bữa tiệc món ăn Việt Nam của bạn Hạnh",
    "shortTitle": "ハインさんのベトナム料理パーティー",
    "focusGrammar": "Bài 8/9 · 作ってあげました, ～ができます, パーティー",
    "badge": "Đề P17 · Bài 8",
    "katakanaWords": [
      "パーティー",
      "フォー",
      "スプリングロール",
      "ビール"
    ],
    "reading": {
      "title": "「ハインさんのベトナム料理（りょうり）パーティー」",
      "passageJp": "留学生（りゅうがくせい）のハインさんは先週（せんしゅう）、アパートでベトナム料理（りょうり）のパーティーを開（ひら）きました。前（まえ）の日にスーパーで新鮮（しんせん）な野菜（やさい）や牛肉（ぎゅうにく）を買（か）って、朝（あさ）からスープを準備（じゅんび）しました。日本人の友達（ともだち）が来（き）てから、一緒（いっしょ）にスプリングロールを巻（ま）いて、おいしいフォーを作（つく）ってあげました。友達（ともだち）は「箸（はし）を上手に使（つか）うことができますよ」と言（い）って、たくさん食（た）べてくれました。みんなでビールを飲（の）みながら夜（よる）遅（おそ）くまで楽（たの）しく歌（うた）いました。",
      "passageVi": "Du học sinh Hạnh tuần trước đã tổ chức một bữa tiệc ẩm thực Việt Nam tại căn hộ. Hôm trước, bạn đã mua rau tươi và thịt bò ở siêu thị, rồi chuẩn bị nước dùng từ sáng sớm. Sau khi những người bạn Nhật Bản đến, bạn cùng các bạn cuốn nem và tự tay nấu món phở thơm ngon chiêu đãi. Các bạn nói \"Tớ dùng đũa rất khéo đấy nhé\" và đã ăn rất nhiệt tình. Mọi người vừa uống bia vừa vui vẻ ca hát đến tận đêm muộn.",
      "underlines": [
        "開（ひら）きました。",
        "買（か）って、",
        "来（き）てから、",
        "作（つく）ってあげました。",
        "使（つか）うことができます",
        "飲（の）みながら"
      ],
      "vocabNotes": [
        {
          "word": "開（ひら）きます",
          "reading": "ひらきます",
          "meaning": "Mở, tổ chức (tiệc/hội)"
        },
        {
          "word": "巻（ま）きます",
          "reading": "まきます",
          "meaning": "Cuốn, cuộn"
        }
      ],
      "questions": [
        {
          "id": "p17-r1",
          "qJp": "ハインさんは日本人の友達（ともだち）に何（なに）を作（つく）ってあげましたか。",
          "qVi": "Bạn Hạnh đã nấu món gì chiêu đãi những người bạn Nhật?",
          "targetGrammar": "Bài 8: Mẫu câu ～てあげました",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "フォーとスプリングロールを作（つく）ってあげました。",
              "vi": "Đã nấu món phở và nem cuốn chiêu đãi."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "ベトナムの有名（ゆうめい）なフォーやスプリングロールを作（つく）ってあげました。",
              "vi": "Bạn ấy đã làm món phở và nem cuốn nổi tiếng của Việt Nam chiêu đãi bạn."
            }
          ]
        },
        {
          "id": "p17-r2",
          "qJp": "友達（ともだち）は何（なに）を上手に使（つか）うことができますか。",
          "qVi": "Người bạn có thể sử dụng thành thạo vật gì?",
          "targetGrammar": "Bài 9: Mẫu câu ～ことができます",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "箸（はし）を上手に使（つか）うことができます。",
              "vi": "Có thể dùng đũa rất thành thạo."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "ベトナムの料理（りょうり）を食（た）べるとき、箸（はし）を上手に使（つか）うことができます。",
              "vi": "Khi ăn món Việt Nam, bạn ấy có thể dùng đũa rất khéo léo."
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
          "qJp": "【Picture P17】ハインさんは先週（せんしゅう）何（なに）をしましたか。",
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
    "title": "Đề 18 (P18) · Chuyến tham quan bảo tàng mỹ thuật của anh Matsumoto",
    "shortTitle": "松本さんの美術館巡り",
    "focusGrammar": "Bài 10/11 · ～ないでください, ～てから, ミュージアム",
    "badge": "Đề P18 · Bài 10",
    "katakanaWords": [
      "ミュージアム",
      "パンフレット",
      "ポスター",
      "カフェ"
    ],
    "reading": {
      "title": "「松本（まつもと）さんの美術館（びじゅつかん）巡（めぐ）り」",
      "passageJp": "松本（まつもと）さんは休（やす）みの日に、新（あたら）しくできた現代（げんだい）アートのミュージアムへ行（い）きました。受付（うけつけ）でチケットを買（か）ってパンフレットをもらってから、展示室（てんじしつ）に入（はい）りました。入口（いりぐち）に「写真（しゃしん）を撮（と）らないでください。作品（さくひん）に触（さわ）らないでください」と大（おお）きく書（か）いてありました。静（しず）かな部屋（へや）で美（うつく）しい絵（え）を見（み）て、心（こころ）が穏（おだ）やかになりました。見学（けんがく）のあとで、ミュージアムカフェでコーヒーを飲（の）みながらポスターを買（か）いました。",
      "passageVi": "Anh Matsumoto vào ngày nghỉ đã đến một bảo tàng nghệ thuật đương đại mới xây. Sau khi mua vé và nhận tập tài liệu giới thiệu ở quầy lễ tân thì anh bước vào phòng triển lãm. Ở lối vào có ghi rất to: \"Xin đừng chụp ảnh. Xin đừng chạm vào hiện vật tác phẩm\". Ngắm nhìn những bức tranh tuyệt đẹp trong không gian yên tĩnh, tâm hồn anh trở nên thanh thản. Sau chuyến tham quan, vừa uống cà phê tại quán cà phê bảo tàng vừa mua một tấm áp phích kỷ niệm.",
      "underlines": [
        "もらってから、",
        "入（はい）りました。",
        "撮（と）らないでください。",
        "触（さわ）らないでください",
        "穏（おだ）やかになりました。",
        "飲（の）みながら"
      ],
      "vocabNotes": [
        {
          "word": "展示室（てんじしつ）",
          "reading": "てんじしつ",
          "meaning": "Phòng trưng bày, triển lãm"
        },
        {
          "word": "穏（おだ）やか",
          "reading": "おだやか",
          "meaning": "Thanh thản, bình yên"
        }
      ],
      "questions": [
        {
          "id": "p18-r1",
          "qJp": "美術館（びじゅつかん）の入口（いりぐち）に何（なに）と書（か）いてありましたか。",
          "qVi": "Ở lối vào bảo tàng mỹ thuật viết điều gì?",
          "targetGrammar": "Bài 10: Mẫu câu ～ないでください",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "写真（しゃしん）を撮（と）らないでください、触（さわ）らないでくださいと書（か）いてありました。",
              "vi": "Viết là: Xin đừng chụp ảnh, xin đừng sờ vào tác phẩm."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "「写真（しゃしん）を撮（と）らないでください。作品（さくひん）に触（さわ）らないでください」と注意（ちゅうい）が書（か）いてありました。",
              "vi": "Có bảng lưu ý: \"Xin đừng chụp ảnh. Xin đừng chạm tay vào tác phẩm\"."
            }
          ]
        },
        {
          "id": "p18-r2",
          "qJp": "松本（まつもと）さんは見学（けんがく）のあとでカフェで何（なに）をしましたか。",
          "qVi": "Sau khi tham quan, anh Matsumoto đã làm gì ở quán cà phê?",
          "targetGrammar": "Bài 11: Nối hành động / ～ながら",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "コーヒーを飲（の）んで、ポスターを買（か）いました。",
              "vi": "Uống cà phê và mua áp phích."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "コーヒーを飲（の）みながら記念（きねん）のポスターを買（か）いました。",
              "vi": "Vừa uống cà phê vừa chọn mua tấm áp phích làm kỷ niệm."
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
          "qJp": "【Picture P18】松本（まつもと）さんは先週（せんしゅう）の日曜日（にちようび）に何（なに）をしましたか。",
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
    "title": "Đề 19 (P19) · Chuyện chuyển nhà của bạn Inoue",
    "shortTitle": "井上さんの引っ越し",
    "focusGrammar": "Bài 8/11 · 手伝ってもらいました, ～てから, アパート",
    "badge": "Đề P19 · Bài 8",
    "katakanaWords": [
      "アパート",
      "トラック",
      "ダンボール",
      "ベッド"
    ],
    "reading": {
      "title": "「井上（いのうえ）さんの引（ひ）っ越（こ）し」",
      "passageJp": "井上（いのうえ）さんは先週末（せんしゅうまつ）、大学（だいがく）の近（ちか）くの新（あたら）しいアパートへ引（ひ）っ越（こ）しました。引（ひ）っ越（こ）す前（まえ）に本（ほん）や服（ふく）をダンボールに入（い）れて、きれいに荷造（にづく）りをしました。当日は車（くるま）を持（も）っている友達（ともだち）にトラックを運転（うんてん）してもらって、大（おお）きなベッドや机（つくえ）を運（はこ）びました。友達（ともだち）がたくさん手伝（てつだ）ってくれましたから、作業（さぎょう）が早（はや）く終（お）わりました。荷物（にもつ）を片付（かたづ）けてから、感謝（かんしゃ）の気持ちで友達（ともだち）に焼肉（やきにく）をごちそうしました。",
      "passageVi": "Bạn Inoue cuối tuần trước đã chuyển đến căn hộ mới gần trường đại học. Trước khi chuyển nhà, bạn xếp sách vở quần áo vào thùng các tông, đóng gói hành lý rất gọn gàng. Vào ngày chuyển, bạn nhờ một người bạn có xe lái xe tải giúp, vận chuyển chiếc giường lớn và bàn học. Vì bạn bè giúp đỡ rất nhiệt tình nên công việc đã hoàn thành nhanh chóng. Sau khi dọn dẹp xong đồ đạc, với lòng biết ơn bạn đã mời bạn bè một bữa thịt nướng Yakiniku.",
      "underlines": [
        "引（ひ）っ越（こ）しました。",
        "ダンボール",
        "運転（うんてん）してもらって、",
        "手伝（てつだ）ってくれましたから、",
        "片付（かたづ）けてから、",
        "ごちそうしました。"
      ],
      "vocabNotes": [
        {
          "word": "荷造（にづく）り",
          "reading": "にづくり",
          "meaning": "Đóng gói hành lý"
        },
        {
          "word": "ごちそうします",
          "reading": "ごちそうします",
          "meaning": "Khao, mời ăn uống"
        }
      ],
      "questions": [
        {
          "id": "p19-r1",
          "qJp": "友達（ともだち）は井上（いのうえ）さんに何（なに）をしてくれましたか。",
          "qVi": "Người bạn đã làm gì giúp bạn Inoue?",
          "targetGrammar": "Bài 8: Mẫu câu ～てくれました",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "トラックを運転（うんてん）して、荷物（にもつ）を運（はこ）んでくれました。",
              "vi": "Đã lái xe tải và khuân vác đồ đạc giúp."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "トラックを運転（うんてん）してベッドや机（つくえ）を運（はこ）ぶのを手伝（てつだ）ってくれました。",
              "vi": "Đã giúp lái xe tải và phụ khiêng giường cùng bàn học."
            }
          ]
        },
        {
          "id": "p19-r2",
          "qJp": "荷物（にもつ）を片付（かたづ）けてから、井上（いのうえ）さんは友達（ともだち）に何（なに）をごちそうしましたか。",
          "qVi": "Sau khi dọn đồ xong, bạn Inoue đã khao bạn món gì?",
          "targetGrammar": "Bài 8/10: ～てから / ごちそうしました",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "焼肉（やきにく）をごちそうしました。",
              "vi": "Đã khao bữa thịt nướng Yakiniku."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ lý do",
              "jp": "手伝（てつだ）ってくれた友達（ともだち）に、感謝（かんしゃ）でおいしい焼肉（やきにく）をごちそうしました。",
              "vi": "Với lòng biết ơn người bạn đã giúp đỡ, bạn ấy đã khao một bữa thịt nướng thật ngon."
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
          "qJp": "【Picture P19】井上（いのうえ）さんは先週（せんしゅう）何（なに）をしましたか。",
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
    "title": "Đề 20 (P20) · Kỷ niệm du lịch Kyoto của bạn John",
    "shortTitle": "ジョンさんの京都旅行の思い出",
    "focusGrammar": "Bài 10/11 · ～てから, ～たり～たり, ～とき",
    "badge": "Đề P20 · Bài 11",
    "katakanaWords": [
      "ホテル",
      "タクシー",
      "スマートカメラ",
      "おみやげ"
    ],
    "reading": {
      "title": "「ジョンさんの京都（きょうと）旅行（りょこう）の思い出（おもいで）」",
      "passageJp": "ジョンさんは先月（せんげつ）、新幹線（しんかんせん）に乗（の）って京都（きょうと）へ2泊（はく）3日（みっか）の旅行（りょこう）に行（い）きました。京都駅（きょうとえき）に着（つ）いてから、まずタクシーでホテルへ行（い）って荷物（にもつ）を預（あず）けました。それから有名（ゆうめい）な金閣寺（きんかくじ）や清水寺（きよみずでら）を見学（けんがく）して、新（あたら）しいスマートカメラで写真（しゃしん）をたくさん撮（と）りました。「寺（てら）の中（なか）では走（はし）らないでください」という注意（ちゅうい）を守（まも）って静（しず）かに歩（ある）きました。夕方（ゆうがた）おみやげ屋（や）で抹茶（まっちゃ）のお菓子（かし）を買（か）って、友達（ともだち）にあげました。",
      "passageVi": "Bạn John tháng trước đã đi tàu cao tốc Shinkansen đến Kyoto trong chuyến du lịch 3 ngày 2 đêm. Sau khi đến ga Kyoto, trước tiên bạn đi taxi về khách sạn gửi hành lý. Sau đó đi tham quan các ngôi chùa nổi tiếng như chùa Vàng Kinkakuji, chùa Kiyomizu, và chụp rất nhiều ảnh bằng chiếc máy ảnh thông minh mới. Bạn tuân thủ lời nhắc: \"Xin đừng chạy nhảy bên trong khuôn viên chùa\" và bước đi rất yên tĩnh. Buổi chiều tối ở tiệm đồ lưu niệm, bạn mua bánh kẹo trà xanh matcha về làm quà tặng bạn bè.",
      "underlines": [
        "乗（の）って",
        "行（い）きました。",
        "着（つ）いてから、",
        "写真（しゃしん）をたくさん撮（と）りました。",
        "走（はし）らないでください",
        "買（か）って、",
        "あげました。"
      ],
      "vocabNotes": [
        {
          "word": "預（あず）けます",
          "reading": "あずけます",
          "meaning": "Gửi (đồ đạc, hành lý)"
        },
        {
          "word": "守（まも）ります",
          "reading": "まもります",
          "meaning": "Tuân thủ, giữ gìn"
        }
      ],
      "questions": [
        {
          "id": "p20-r1",
          "qJp": "京都駅（きょうとえき）に着（つ）いてから、ジョンさんはまずどこへ行（い）きましたか。",
          "qVi": "Sau khi đến ga Kyoto, bạn John trước tiên đã đi đâu?",
          "targetGrammar": "Bài 10/11: Mẫu câu ～てから",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "タクシーでホテルへ行（い）きました。",
              "vi": "Đi taxi về khách sạn."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ mục đích",
              "jp": "荷物（にもつ）を預（あず）けるために、タクシーでホテルへ行（い）きました。",
              "vi": "Bạn ấy đã đi taxi đến khách sạn để gửi hành lý."
            }
          ]
        },
        {
          "id": "p20-r2",
          "qJp": "寺（てら）の中（なか）で何（なに）をしてはいけませんか。",
          "qVi": "Bên trong chùa không được làm gì?",
          "targetGrammar": "Bài 10: Mẫu câu ～ないでください",
          "answers": [
            {
              "level": "basic",
              "label": "Cách 1: Trực tiếp",
              "jp": "走（はし）ってはいけません。（走（はし）らないでください）",
              "vi": "Không được chạy."
            },
            {
              "level": "expanded",
              "label": "Cách 2: Đầy đủ",
              "jp": "「寺（てら）の中（なか）では走（はし）らないでください」と注意（ちゅうい）がありました。",
              "vi": "Có bảng nhắc nhở: \"Xin đừng chạy trong khuôn viên chùa\"."
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
          "qJp": "【Picture P20】ジョンさんは先月（せんげつ）京都（きょうと）で何（なに）をしましたか。",
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
