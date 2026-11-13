// src/lib/passiveListeningData.ts
// Comprehensive Passive Listening Playlists: Exam Station (b08-b11) & Life Topic Hub (cd00-cd09)

export interface PassiveLine {
  speaker?: string
  jp: string
  vn: string
}

export interface PassiveTrack {
  id: string
  title: string
  titleVn: string
  category: 'exam' | 'topic'
  unitId?: string
  topicId?: string
  tag: string
  lines: PassiveLine[]
}

export interface PassivePlaylist {
  id: string
  title: string
  titleVn: string
  description: string
  category: 'exam' | 'topic'
  badge: string
  accentColor: string
  tracks: PassiveTrack[]
}

export const PASSIVE_PLAYLISTS: PassivePlaylist[] = [
  {
    "id": "mega-b08-b11",
    "title": "MEGA MIX · 試験対策（しけんたいさく）",
    "titleVn": "MEGA MIX · Ôn thi liên hoàn Bài 8 đến Bài 11",
    "description": "Dòng nghe thụ động dài hơn 40 phút liên tục, kết hợp trọn vẹn ngữ cảnh từ vựng, hội thoại mẫu và phản xạ thi cử của cả 4 bài thi sắp tới.",
    "category": "exam",
    "badge": "🔥 CẤP TỐC ÔN THI",
    "accentColor": "from-amber-500/20 to-orange-500/10 border-amber-500/40 text-amber-600",
    "tracks": [
      {
        "id": "track-b08-vocab",
        "title": "私（わたし）の 家族（かぞく）と 大切（たいせつ）な 人（ひと）",
        "titleVn": "Gia đình thân yêu và những người bạn quý giá",
        "category": "exam",
        "unitId": "b08",
        "tag": "Bài 8 · Ngữ cảnh từ vựng",
        "lines": [
          {
            "jp": "私（わたし）の 家族（かぞく）は、ベトナムに 住（す）んで います。父（ちち）、母（はは）、兄（あに）、姉（あね）、そして 私（わたし）の 5人（にん）家族（かぞく）です。",
            "vn": "Gia đình tôi hiện đang sinh sống tại Việt Nam. Gia đình 5 người gồm có bố, mẹ, anh trai, chị gái và tôi."
          },
          {
            "jp": "父（ちち）は せが 高（たか）くて、まじめで 親切（しんせつ）な 人（ひと）です。髪（かみ）は 短（みじか）いです。",
            "vn": "Bố tôi dáng người cao ráo, là người nghiêm túc và tốt bụng. Tóc của bố cắt ngắn."
          },
          {
            "jp": "母（はは）は やさしい 顔（かお）をして いて、目（め）が 大（おお）きくて、いつも 明（あか）るいです。",
            "vn": "Mẹ tôi có gương mặt hiền hậu, đôi mắt to tròn và lúc nào cũng tươi vui rạng rỡ."
          },
          {
            "jp": "兄（あに）は からだが 丈夫（じょうぶ）で、スポーツが とても 上手（じょうず）です。足（あし）が 速（はや）いです。",
            "vn": "Anh trai tôi cơ thể cường tráng và chơi thể thao rất giỏi. Đôi chân chạy rất nhanh."
          },
          {
            "jp": "姉（あね）は かみが 長（なが）くて、きれいで かわいい 人（ひと）です。手（て）が 器用（きよう）です。",
            "vn": "Chị gái tôi mái tóc dài, là một người xinh xắn và dễ thương. Đôi bàn tay chị rất khéo léo."
          },
          {
            "jp": "田舎（いなか）には 祖父（そふ）と 祖母（そぼ）が 暮（く）らして います。とても 元気（げんき）です。",
            "vn": "Ở quê có ông nội và bà nội sinh sống. Cả hai ông bà đều rất khỏe mạnh."
          },
          {
            "jp": "家（いえ）には かわいい 犬（いぬ）が 1匹（ぴき）と 猫（ねこ）が 2匹（ひき） います。",
            "vn": "Ở nhà có một chú chó và hai chú mèo nhỏ xinh."
          },
          {
            "jp": "先月（せんげつ）の 母（はは）の 誕生（たんじょう）日（び）に、私（わたし）は きれいな 花（はな）と チョコレートを プレゼントとして あげました。",
            "vn": "Nhân dịp sinh nhật mẹ tháng trước, tôi đã tặng mẹ những bông hoa tươi thắm và sô-cô-la làm quà tặng."
          },
          {
            "jp": "父（ちち）には かっこいい ネクタイと とけいを あげました。",
            "vn": "Tôi tặng bố một chiếc cà vạt lịch lãm và một chiếc đồng hồ đeo tay."
          },
          {
            "jp": "両親（りょうしん）は「ありがとう！」と 大変（たいへん） 喜（よろこ）んで くれました。",
            "vn": "Bố mẹ vô cùng vui mừng và cảm ơn tôi."
          },
          {
            "jp": "私（わたし）の 誕生（たんじょう）日（び）には、家族（かぞく）から 本（ほん）を 3冊（さつ）と シャツを 2枚（まい） もらいました。",
            "vn": "Vào ngày sinh nhật của tôi, tôi đã nhận được 3 cuốn sách và 2 chiếc áo sơ mi từ gia đình."
          },
          {
            "jp": "離（はな）れて 暮（く）らして いても、家族（かぞく）の 愛情（あいじょう）を いつも 心（こころ）に 感（かん）じて います。",
            "vn": "Dù sống xa quê hương, tôi vẫn luôn cảm nhận trọn vẹn tình yêu thương ấm áp từ gia đình."
          }
        ]
      },
      {
        "id": "track-b08-l1",
        "title": "Ai là chị gái?",
        "titleVn": "Ai là chị gái?",
        "category": "exam",
        "unitId": "b08",
        "tag": "Bài 8 · Hội thoại 1",
        "lines": [
          {
            "speaker": "リン",
            "jp": "キムさん、この 写真（しゃしん）の 人（ひと）は 誰（だれ）ですか。",
            "vn": "Kim ơi, người trong ảnh này là ai?"
          },
          {
            "speaker": "キム",
            "jp": "私（わたし）の 姉（あね）です。",
            "vn": "Là chị gái mình."
          },
          {
            "speaker": "リン",
            "jp": "どの 人（ひと）ですか。この 髪（かみ）が 長（なが）い 人（ひと）ですか。",
            "vn": "Người nào? Người tóc dài này à?"
          },
          {
            "speaker": "キム",
            "jp": "いいえ、その 隣（となり）の 髪（かみ）が 短（みじか）くて、眼鏡（めがね）を かけて いる 人（ひと）です。",
            "vn": "Không, người bên cạnh tóc ngắn và đeo kính."
          }
        ]
      },
      {
        "id": "track-b08-l2",
        "title": "Quà tặng cho ai?",
        "titleVn": "Quà tặng cho ai?",
        "category": "exam",
        "unitId": "b08",
        "tag": "Bài 8 · Hội thoại 2",
        "lines": [
          {
            "speaker": "ナム",
            "jp": "リンさん、その 傘（かさ）、きれいですね。",
            "vn": "Linh ơi, cái ô đó đẹp nhỉ."
          },
          {
            "speaker": "リン",
            "jp": "ありがとう。誕生日（たんじょうび）に 母（はは）が くれました。",
            "vn": "Cảm ơn. Mẹ tặng mình vào sinh nhật."
          },
          {
            "speaker": "ナム",
            "jp": "その 時計（とけい）も 新（あたら）しいですね。",
            "vn": "Đồng hồ đó cũng mới nhỉ."
          },
          {
            "speaker": "リン",
            "jp": "これは 先輩（せんぱい）に もらいました。",
            "vn": "Cái này mình nhận từ đàn anh."
          }
        ]
      },
      {
        "id": "track-b08-l8",
        "title": "Có bao nhiêu?",
        "titleVn": "Có bao nhiêu?",
        "category": "exam",
        "unitId": "b08",
        "tag": "Bài 8 · Đếm đồ vật/con vật",
        "lines": [
          {
            "speaker": "A",
            "jp": "私（わたし）の 家（いえ）は 大家族（だいかぞく）です。",
            "vn": "Nhà tôi là đại gia đình."
          },
          {
            "speaker": "A",
            "jp": "兄弟（きょうだい）が 4人（よにん） います。",
            "vn": "Tôi có 4 anh chị em."
          },
          {
            "speaker": "A",
            "jp": "犬（いぬ）が 3匹（さんびき）と 猫（ねこ）が 1匹（いっぴき） います。",
            "vn": "Có 3 con chó và 1 con mèo."
          },
          {
            "speaker": "A",
            "jp": "祖父母（そふぼ）も 一緒（いっしょ）に 住（す）んで いますから、家族（かぞく）は 全部（ぜんぶ）で 8人（はちにん）です。",
            "vn": "Ông bà cũng sống cùng nên gia đình tổng cộng 8 người."
          }
        ]
      },
      {
        "id": "track-b09-vocab",
        "title": "私（わたし）の 趣味（しゅみ）と できること",
        "titleVn": "Sở thích phong phú và những điều tôi có thể làm",
        "category": "exam",
        "unitId": "b09",
        "tag": "Bài 9 · Ngữ cảnh từ vựng",
        "lines": [
          {
            "jp": "私（わたし）には、好（す）きなことや 趣味（しゅみ）が たくさん あります。",
            "vn": "Tôi có rất nhiều sở thích và những điều đam mê."
          },
          {
            "jp": "休みの 日（ひ）や 時間（じかん）が ある とき、部屋（へや）で 日本（にほん）の ドラマや アニメ、アクション映画（えいが）を 見（み）ます。",
            "vn": "Những ngày nghỉ hoặc khi có thời gian rảnh, tôi thường xem phim truyền hình Nhật Bản, phim hoạt hình và phim hành động trong phòng."
          },
          {
            "jp": "音楽（おんがく）も 大好（だいす）きで、クラシックから ポップスまで、幅広（はばひろ）く 聴（き）きます。",
            "vn": "Tôi cũng rất thích âm nhạc, nghe đủ thể loại từ nhạc cổ điển cho tới nhạc Pop hiện đại."
          },
          {
            "jp": "また、漫画（まんが）や 小説（しょうせつ）を 読（よ）むのも 楽（たの）しいです。世界（せかい）の 切手（きって）を 集（あつ）める 趣味（しゅみ）も あります。",
            "vn": "Ngoài ra, việc đọc truyện tranh và tiểu thuyết cũng rất vui. Tôi còn có sở thích sưu tầm tem từ khắp nơi trên thế giới."
          },
          {
            "jp": "私（わたし）は 料理（りょうり）を 作（つく）ることが できます。お菓子（かし）や ベトナム料理（りょうり）が 得意（とくい）です。",
            "vn": "Tôi có thể tự tay nấu nướng. Món bánh ngọt và các món ăn Việt Nam là sở trường của tôi."
          },
          {
            "jp": "スポーツでは、プールで 泳（およ）ぐ ことが できます。すいえいが じょうずです。",
            "vn": "Về thể thao, tôi có thể bơi lội trong hồ bơi. Tôi bơi lội khá cừ."
          },
          {
            "jp": "週末（しゅうまつ）は 川（かわ）へ 行（い）って、友達（ともだち）と つりを 楽（たの）しみます。絵（え）を かくことも 好（す）きです。",
            "vn": "Cuối tuần tôi hay ra bờ sông câu cá thư giãn cùng bạn bè. Tôi cũng thích vẽ tranh nữa."
          },
          {
            "jp": "日本（にほん）の 文化（ぶんか）に 興味（きょうみ）が あるので、書道（しょどう）と ダンスも 習（なら）い 始（はじ）めました。",
            "vn": "Vì rất quan tâm đến văn hóa Nhật Bản, tôi cũng bắt đầu theo học thư pháp và khiêu vũ."
          },
          {
            "jp": "ギターは 少（すこ）し ひくことが できますが、ピアノは ぜんぜん できません。下手（へた）です。",
            "vn": "Đàn ghi-ta tôi có thể gảy một chút, nhưng đàn piano thì hoàn toàn không biết chơi. Tôi chơi rất dở."
          },
          {
            "jp": "これからも いろいろな 趣味（しゅみ）に 挑戦（ちょうせん）して、毎日（まいにち）を 楽（たの）しく 過（す）ごしたいです。",
            "vn": "Từ nay về sau tôi muốn thử sức thêm nhiều đam mê mới để tận hưởng từng ngày sống thật ý nghĩa."
          }
        ]
      },
      {
        "id": "track-b09-l1",
        "title": "Sở thích là gì?",
        "titleVn": "Sở thích là gì?",
        "category": "exam",
        "unitId": "b09",
        "tag": "Bài 9 · Sở thích là gì?",
        "lines": [
          {
            "speaker": "ナム",
            "jp": "サラさんの 趣味（しゅみ）は 何（なん）ですか。",
            "vn": "Sở thích của Sarah là gì?"
          },
          {
            "speaker": "サラ",
            "jp": "映画（えいが）を 見（み）る ことも 好（す）きですが……いちばんは 絵（え）を 描（か）く ことです。",
            "vn": "Mình cũng thích xem phim, nhưng... nhất là vẽ tranh."
          },
          {
            "speaker": "ナム",
            "jp": "へえ、どんな 絵（え）ですか。",
            "vn": "Ồ, tranh gì vậy?"
          },
          {
            "speaker": "サラ",
            "jp": "漫画（まんが）の 絵（え）です。",
            "vn": "Tranh manga."
          }
        ]
      },
      {
        "id": "track-b09-l3",
        "title": "Hỏi khả năng",
        "titleVn": "Hỏi khả năng",
        "category": "exam",
        "unitId": "b09",
        "tag": "Bài 9 · Khả năng làm gì",
        "lines": [
          {
            "speaker": "A",
            "jp": "自転車（じてんしゃ）に 乗（の）る ことが できますか。",
            "vn": "Bạn đi xe đạp được không?"
          }
        ]
      },
      {
        "id": "track-b09-l12",
        "title": "Cuối tuần làm gì?",
        "titleVn": "Cuối tuần làm gì?",
        "category": "exam",
        "unitId": "b09",
        "tag": "Bài 9 · Cuối tuần làm gì?",
        "lines": [
          {
            "speaker": "リン",
            "jp": "ナムさん、日曜日（にちようび）は 何（なに）を しましたか。",
            "vn": "Nam ơi, Chủ nhật bạn làm gì?"
          },
          {
            "speaker": "ナム",
            "jp": "朝（あさ）、プールで 泳（およ）いで、それから 図書館（としょかん）で 本（ほん）を 借（か）りました。",
            "vn": "Buổi sáng mình bơi ở bể, sau đó mượn sách ở thư viện."
          },
          {
            "speaker": "ナム",
            "jp": "夜（よる）は 友達（ともだち）と カラオケへ 行（い）きました。",
            "vn": "Tối đi karaoke với bạn."
          },
          {
            "speaker": "リン",
            "jp": "忙（いそが）しかったですね。",
            "vn": "Bận nhỉ."
          }
        ]
      },
      {
        "id": "track-b10-vocab",
        "title": "東京（とうきょう） バスツアーと 街歩（まちある）き",
        "titleVn": "Chuyến tham quan bằng xe buýt và tản bộ ngắm phố Tokyo",
        "category": "exam",
        "unitId": "b10",
        "tag": "Bài 10 · Ngữ cảnh từ vựng",
        "lines": [
          {
            "jp": "朝（あさ） 8時（じ）に 駅（えき）の 入（い）り口（ぐち）に 集合（しゅうごう）して、東京（とうきょう） バスツアーが 出発（しゅっぱつ）しました。",
            "vn": "Lúc 8 giờ sáng, mọi người tập trung ở lối vào nhà ga và chuyến du lịch xe buýt Tokyo khởi hành."
          },
          {
            "jp": "ガイドさんが みなさんに パンフレットを 配（くば）って、観光（かんこう）コースの 説明（せつめい）を して くれました。",
            "vn": "Chị hướng dẫn viên phát tập gấp quảng cáo cho mọi người và thuyết minh về lộ trình tham quan."
          },
          {
            "jp": "バスは 大（おお）きな 橋（はし）を わたって、にぎやかな 道（みち）を まっすぐ 走（はし）ります。",
            "vn": "Xe buýt băng qua một cây cầu lớn rồi chạy thẳng men theo con đường sầm uất."
          },
          {
            "jp": "信号（しんごう）の ある 交差点（こうさてん）で 止（と）まり、2つ目（め）の 角（かど）を 右（みぎ）へ まがりました。左（ひだり）には 高（たか）い タワーが 見（み）えます。",
            "vn": "Xe dừng lại tại ngã tư có đèn giao thông, rồi rẽ phải ở khúc cua góc đường thứ hai. Phía bên trái có thể nhìn thấy tòa tháp cao vút."
          },
          {
            "jp": "最初（さいしょ）の 目的（もくてき）地（ち）は 有名（ゆうめい）な 動物園（どうぶつえん）です。出口（でぐち）から 歩（ある）いて 入（はい）りました。",
            "vn": "Điểm đến đầu tiên là vườn bách thú nổi tiếng. Chúng tôi đi bộ từ lối ra để bước vào tham quan."
          },
          {
            "jp": "どうぶつえんには、パンダ、ペンギン、ゾウ、サル、クマ、コアラが たくさん いました。",
            "vn": "Trong vườn thú có rất nhiều gấu trúc, chim cánh cụt, voi, khỉ, gấu và gấu túi koala."
          },
          {
            "jp": "サルたちに バナナや えさを やる 人（ひと）も いました。とりたちの 鳴（な）き声（ごえ）も 聞（き）こえます。",
            "vn": "Có người cho bầy khỉ ăn chuối và thức ăn. Tiếng hót ríu rít của đàn chim cũng văng vẳng nghe thấy."
          },
          {
            "jp": "園内（えんない）では「あぶないですから 走（はし）らないで ください。ごみは もってかえって ください」と 案内（あんない）が ありました。",
            "vn": "Trong khuôn viên có biển hướng dẫn: 「Nguy hiểm xin đừng chạy nhảy. Xin quý khách vui lòng mang rác về.」"
          },
          {
            "jp": "たくさん 歩（ある）いて、おなかが すきました。のどが かわいたので、お茶（ちゃ）を 飲（の）みました。",
            "vn": "Đi bộ nhiều nên tôi đã cảm thấy đói bụng. Vì khát nước nên tôi uống một ngụm trà mát lạnh."
          },
          {
            "jp": "おみやげ屋（や）で 家族（かぞく）に みやげを 買（か）いました。",
            "vn": "Tại quầy quà lưu niệm, tôi đã mua quà về cho gia đình."
          },
          {
            "jp": "午後（ごご）は 観覧車（かんらんしゃ）に 乗（の）って、街（まち）の すばらしい 景色（けしき）を ながめました。楽（たの）しい 1日（にち）でした。",
            "vn": "Buổi chiều tôi lên đu quay ngắm cảnh phố phường tuyệt đẹp. Đó quả là một ngày dạo chơi đầy ắp niềm vui."
          }
        ]
      },
      {
        "id": "track-b10-l1",
        "title": "Không được làm gì?",
        "titleVn": "Không được làm gì?",
        "category": "exam",
        "unitId": "b10",
        "tag": "Bài 10 · Lưu ý cấm đoán",
        "lines": [
          {
            "speaker": "ガイド",
            "jp": "皆（みな）さん、これから 美術館（びじゅつかん）に 入（はい）ります。",
            "vn": "Mọi người, giờ chúng ta vào bảo tàng."
          },
          {
            "speaker": "ガイド",
            "jp": "中（なか）で 写真（しゃしん）を 撮（と）らないで ください。",
            "vn": "Bên trong đừng chụp ảnh."
          },
          {
            "speaker": "ガイド",
            "jp": "でも、話（はな）しても いいですよ。小（ちい）さい 声（こえ）で お願（ねが）いします。",
            "vn": "Nhưng nói chuyện thì được. Xin nói nhỏ."
          },
          {
            "speaker": "ガイド",
            "jp": "水（みず）は 飲（の）んでも いいです。",
            "vn": "Uống nước thì được."
          }
        ]
      },
      {
        "id": "track-b10-l2",
        "title": "Đường đến bưu điện",
        "titleVn": "Đường đến bưu điện",
        "category": "exam",
        "unitId": "b10",
        "tag": "Bài 10 · Đường đến bưu điện",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "すみません、郵便局（ゆうびんきょく）は どこですか。",
            "vn": "Xin lỗi, bưu điện ở đâu ạ?"
          },
          {
            "speaker": "男の人",
            "jp": "この 道（みち）を まっすぐ 行（い）って、2つ目（ふたつめ）の 角（かど）を 右（みぎ）へ 曲（ま）がって ください。",
            "vn": "Đi thẳng đường này, rẽ phải ở góc thứ hai."
          },
          {
            "speaker": "男の人",
            "jp": "橋（はし）を 渡（わた）って、左（ひだり）に あります。",
            "vn": "Qua cầu, nó ở bên trái."
          },
          {
            "speaker": "男の人",
            "jp": "1つ目（ひとつめ）の 角（かど）じゃ ありませんよ。",
            "vn": "Không phải góc thứ nhất đâu nhé."
          }
        ]
      },
      {
        "id": "track-b10-l7",
        "title": "Đúng hay sai: ở sở thú",
        "titleVn": "Đúng hay sai: ở sở thú",
        "category": "exam",
        "unitId": "b10",
        "tag": "Bài 10 · Ở vườn thú",
        "lines": [
          {
            "speaker": "リン",
            "jp": "あ、見（み）て！ ペンギンが 泳（およ）いで いますよ。",
            "vn": "A, nhìn kìa! Chim cánh cụt đang bơi."
          },
          {
            "speaker": "キム",
            "jp": "本当（ほんとう）だ。かわいいですね。写真（しゃしん）を 撮（と）りましょう。",
            "vn": "Thật nhỉ. Dễ thương quá. Chụp ảnh đi."
          },
          {
            "speaker": "リン",
            "jp": "キムさん、フラッシュは 使（つか）わないで くださいね。",
            "vn": "Kim ơi, đừng dùng flash nhé."
          },
          {
            "speaker": "キム",
            "jp": "あ、そうですね。……ちょっと のどが かわきました。ジュースを 買（か）って 来（き）ます。",
            "vn": "À đúng rồi. ... Mình hơi khát. Mình đi mua nước rồi quay lại."
          },
          {
            "speaker": "リン",
            "jp": "じゃ、ここで 待（ま）って いますね。",
            "vn": "Vậy mình đợi ở đây nhé."
          }
        ]
      },
      {
        "id": "track-b11-vocab",
        "title": "日本（にほん）での 生活（せいかつ）と 私（わたし）の 成長（せいちょう）",
        "titleVn": "Cuộc sống tại Nhật và sự trưởng thành của bản thân",
        "category": "exam",
        "unitId": "b11",
        "tag": "Bài 11 · Ngữ cảnh từ vựng",
        "lines": [
          {
            "jp": "日本（にほん）に 来（き）てから、ひとりぐらしの 生活（せいかつ）が 始（はじ）まりました。",
            "vn": "Kể từ khi sang Nhật, cuộc sống tự lập sống một mình của tôi bắt đầu."
          },
          {
            "jp": "はじめは ひらがなも なかなか 読（よ）めず、会話（かいわ）も 難（むずか）しくて、あたまが いたかったです。",
            "vn": "Thuở ban đầu ngay cả chữ Hiragana tôi cũng mãi không đọc trôi chảy, hội thoại giao tiếp cũng khó khăn khiến đầu óc như muốn đau nhức."
          },
          {
            "jp": "アルバイトの 店長（てんちょう）は 少（すこ）し きびしい 人（ひと）で、毎晩（まいばん） ねむい 目（め）を こすりながら 働（はたら）きました。",
            "vn": "Người quản lý cửa hàng nơi tôi làm thêm là một người khá nghiêm khắc, mỗi tối tôi vừa dụi đôi mắt buồn ngủ vừa chăm chỉ làm việc."
          },
          {
            "jp": "でも、親切（しんせつ）な クラスメイトと 出会（であ）い、だんだん 日本（にほん）の 生活（せいかつ）に 慣（な）れて きました。",
            "vn": "Thế nhưng, nhờ gặp được những người bạn cùng lớp tốt bụng, tôi đã dần dần quen với cuộc sống tại Nhật Bản."
          },
          {
            "jp": "平日（へいじつ）は 毎日（まいにち） 学校（がっこう）に 通（かよ）い、授業（じゅぎょう）が 終（お）わった あと、公園（こうえん）を さんぽしたり、ジョギングを します。",
            "vn": "Ngày thường mỗi ngày tôi đều chăm chỉ đến trường học, sau khi giờ học kết thúc, tôi đi dạo trong công viên hoặc chạy bộ tập thể dục."
          },
          {
            "jp": "毎週（まいしゅう） 日本語（にほんご）の ざっしを 読（よ）んだり、夜（よる）には 日記（にっき）や 作文（さくぶん）を 書（か）くように して います。",
            "vn": "Hàng tuần tôi đều đọc tạp chí tiếng Nhật, và ban đêm tôi duy trì thói quen viết nhật ký hoặc tập làm văn."
          },
          {
            "jp": "小学生（しょうがくせい）や 中学生（ちゅうがくせい）の ころを 思（おも）い出（だ）すと、自分（じぶん）が 外国（がいこく）で 暮（く）らすとは 夢（ゆめ）にも 思（おも）いませんでした。",
            "vn": "Nhớ lại những ngày còn là học sinh tiểu học hay cấp hai, tôi chưa từng mơ rằng một ngày mình lại sinh sống ở nước ngoài."
          },
          {
            "jp": "高校（こうこう）を 卒業（そつぎょう）して、日本（にほん）の 学校（がっこう）に 入学（にゅうがく）した 日（ひ）の 決意（けつい）を、今（いま）も 忘（わす）れません。",
            "vn": "Tôi vẫn không bao giờ quên quyết tâm của ngày tốt nghiệp cấp 3 để nhập học vào ngôi trường tại Nhật Bản."
          },
          {
            "jp": "部屋（へや）では エアコンを つけたり けしたり して、快適（かいてき）に 過（す）ごして います。ニュースも よく 見（み）ます。",
            "vn": "Trong phòng tôi bật tắt điều hòa để điều chỉnh nhiệt độ thoải mái. Tôi cũng thường xuyên xem các bản tin thời sự."
          },
          {
            "jp": "「うん、そっか！」「また 明日（あした）ね！」と 友達（ともだち）と 自然（しぜん）に 会話（かいわ）が できるように なって、本当（ほんとう）に 嬉（うれ）しいです。",
            "vn": "「Ừ, thế à!」「Hẹn gặp lại ngày mai nhé!」, có thể trò chuyện tự nhiên cùng bạn bè khiến tôi thực sự vô cùng hạnh phúc."
          }
        ]
      },
      {
        "id": "track-b11-l1",
        "title": "Dạo này làm gì?",
        "titleVn": "Dạo này làm gì?",
        "category": "exam",
        "unitId": "b11",
        "tag": "Bài 11 · Dạo này làm gì?",
        "lines": [
          {
            "speaker": "ナム",
            "jp": "リン、最近（さいきん） 元気（げんき）そうだね。",
            "vn": "Linh, dạo này trông cậu khỏe nhỉ."
          },
          {
            "speaker": "リン",
            "jp": "うん。最近（さいきん）、毎朝（まいあさ） ヨガを して る。",
            "vn": "Ừ. Dạo này sáng nào mình cũng tập yoga."
          },
          {
            "speaker": "ナム",
            "jp": "ジョギングじゃ ないの？",
            "vn": "Không phải chạy bộ à?"
          },
          {
            "speaker": "リン",
            "jp": "ジョギングは 前（まえ） して た けど、今（いま）は ヨガ。",
            "vn": "Chạy bộ là trước kia, giờ là yoga."
          }
        ]
      },
      {
        "id": "track-b11-l3",
        "title": "Câu hỏi thân mật",
        "titleVn": "Câu hỏi thân mật",
        "category": "exam",
        "unitId": "b11",
        "tag": "Bài 11 · Hội thoại thân mật",
        "lines": [
          {
            "speaker": "A",
            "jp": "今晩（こんばん）、暇（ひま）？",
            "vn": "Tối nay rảnh không?"
          }
        ]
      },
      {
        "id": "track-b11-l11",
        "title": "Hẹn đi chơi (thân mật)",
        "titleVn": "Hẹn đi chơi (thân mật)",
        "category": "exam",
        "unitId": "b11",
        "tag": "Bài 11 · Rủ đi chơi thân mật",
        "lines": [
          {
            "speaker": "キム",
            "jp": "ねえ、明日（あした） 映画（えいが） 行（い）かない？",
            "vn": "Này, mai đi xem phim không?"
          },
          {
            "speaker": "マイ",
            "jp": "明日（あした）は ちょっと……。土曜日（どようび）は？",
            "vn": "Mai thì hơi... Thứ Bảy thì sao?"
          },
          {
            "speaker": "キム",
            "jp": "うん、いいよ。何時（なんじ）に する？",
            "vn": "Ừ, được. Mấy giờ?"
          },
          {
            "speaker": "マイ",
            "jp": "3時（さんじ）に 駅（えき）の 改札（かいさつ）は？",
            "vn": "3 giờ ở cửa soát vé ga nhé?"
          },
          {
            "speaker": "キム",
            "jp": "OK。じゃ、土曜日（どようび）ね。",
            "vn": "OK. Vậy thứ Bảy nhé."
          }
        ]
      }
    ]
  },
  {
    "id": "pl-b08",
    "title": "第8課（だいはちか） · 家族（かぞく）・人（ひと）・プレゼント",
    "titleVn": "Bài 8 · Gia đình, Ngoại hình & Tặng quà",
    "description": "Từ vựng ngoại hình (cao/thấp, mắt, tóc), xưng hô gia đình, bộ số đếm đồ vật/con vật và cấu trúc cho nhận (あげます・もらいます).",
    "category": "exam",
    "badge": "🎯 TRỌNG TÂM THI",
    "accentColor": "from-blue-500/20 to-indigo-500/10 border-blue-500/40 text-blue-600",
    "tracks": [
      {
        "id": "track-b08-vocab",
        "title": "私（わたし）の 家族（かぞく）と 大切（たいせつ）な 人（ひと）",
        "titleVn": "Gia đình thân yêu và những người bạn quý giá",
        "category": "exam",
        "unitId": "b08",
        "tag": "Bài 8 · Ngữ cảnh từ vựng",
        "lines": [
          {
            "jp": "私（わたし）の 家族（かぞく）は、ベトナムに 住（す）んで います。父（ちち）、母（はは）、兄（あに）、姉（あね）、そして 私（わたし）の 5人（にん）家族（かぞく）です。",
            "vn": "Gia đình tôi hiện đang sinh sống tại Việt Nam. Gia đình 5 người gồm có bố, mẹ, anh trai, chị gái và tôi."
          },
          {
            "jp": "父（ちち）は せが 高（たか）くて、まじめで 親切（しんせつ）な 人（ひと）です。髪（かみ）は 短（みじか）いです。",
            "vn": "Bố tôi dáng người cao ráo, là người nghiêm túc và tốt bụng. Tóc của bố cắt ngắn."
          },
          {
            "jp": "母（はは）は やさしい 顔（かお）をして いて、目（め）が 大（おお）きくて、いつも 明（あか）るいです。",
            "vn": "Mẹ tôi có gương mặt hiền hậu, đôi mắt to tròn và lúc nào cũng tươi vui rạng rỡ."
          },
          {
            "jp": "兄（あに）は からだが 丈夫（じょうぶ）で、スポーツが とても 上手（じょうず）です。足（あし）が 速（はや）いです。",
            "vn": "Anh trai tôi cơ thể cường tráng và chơi thể thao rất giỏi. Đôi chân chạy rất nhanh."
          },
          {
            "jp": "姉（あね）は かみが 長（なが）くて、きれいで かわいい 人（ひと）です。手（て）が 器用（きよう）です。",
            "vn": "Chị gái tôi mái tóc dài, là một người xinh xắn và dễ thương. Đôi bàn tay chị rất khéo léo."
          },
          {
            "jp": "田舎（いなか）には 祖父（そふ）と 祖母（そぼ）が 暮（く）らして います。とても 元気（げんき）です。",
            "vn": "Ở quê có ông nội và bà nội sinh sống. Cả hai ông bà đều rất khỏe mạnh."
          },
          {
            "jp": "家（いえ）には かわいい 犬（いぬ）が 1匹（ぴき）と 猫（ねこ）が 2匹（ひき） います。",
            "vn": "Ở nhà có một chú chó và hai chú mèo nhỏ xinh."
          },
          {
            "jp": "先月（せんげつ）の 母（はは）の 誕生（たんじょう）日（び）に、私（わたし）は きれいな 花（はな）と チョコレートを プレゼントとして あげました。",
            "vn": "Nhân dịp sinh nhật mẹ tháng trước, tôi đã tặng mẹ những bông hoa tươi thắm và sô-cô-la làm quà tặng."
          },
          {
            "jp": "父（ちち）には かっこいい ネクタイと とけいを あげました。",
            "vn": "Tôi tặng bố một chiếc cà vạt lịch lãm và một chiếc đồng hồ đeo tay."
          },
          {
            "jp": "両親（りょうしん）は「ありがとう！」と 大変（たいへん） 喜（よろこ）んで くれました。",
            "vn": "Bố mẹ vô cùng vui mừng và cảm ơn tôi."
          },
          {
            "jp": "私（わたし）の 誕生（たんじょう）日（び）には、家族（かぞく）から 本（ほん）を 3冊（さつ）と シャツを 2枚（まい） もらいました。",
            "vn": "Vào ngày sinh nhật của tôi, tôi đã nhận được 3 cuốn sách và 2 chiếc áo sơ mi từ gia đình."
          },
          {
            "jp": "離（はな）れて 暮（く）らして いても、家族（かぞく）の 愛情（あいじょう）を いつも 心（こころ）に 感（かん）じて います。",
            "vn": "Dù sống xa quê hương, tôi vẫn luôn cảm nhận trọn vẹn tình yêu thương ấm áp từ gia đình."
          }
        ]
      },
      {
        "id": "track-b08-l1",
        "title": "Ai là chị gái?",
        "titleVn": "Ai là chị gái?",
        "category": "exam",
        "unitId": "b08",
        "tag": "Bài 8 · Hội thoại 1",
        "lines": [
          {
            "speaker": "リン",
            "jp": "キムさん、この 写真（しゃしん）の 人（ひと）は 誰（だれ）ですか。",
            "vn": "Kim ơi, người trong ảnh này là ai?"
          },
          {
            "speaker": "キム",
            "jp": "私（わたし）の 姉（あね）です。",
            "vn": "Là chị gái mình."
          },
          {
            "speaker": "リン",
            "jp": "どの 人（ひと）ですか。この 髪（かみ）が 長（なが）い 人（ひと）ですか。",
            "vn": "Người nào? Người tóc dài này à?"
          },
          {
            "speaker": "キム",
            "jp": "いいえ、その 隣（となり）の 髪（かみ）が 短（みじか）くて、眼鏡（めがね）を かけて いる 人（ひと）です。",
            "vn": "Không, người bên cạnh tóc ngắn và đeo kính."
          }
        ]
      },
      {
        "id": "track-b08-l2",
        "title": "Quà tặng cho ai?",
        "titleVn": "Quà tặng cho ai?",
        "category": "exam",
        "unitId": "b08",
        "tag": "Bài 8 · Hội thoại 2",
        "lines": [
          {
            "speaker": "ナム",
            "jp": "リンさん、その 傘（かさ）、きれいですね。",
            "vn": "Linh ơi, cái ô đó đẹp nhỉ."
          },
          {
            "speaker": "リン",
            "jp": "ありがとう。誕生日（たんじょうび）に 母（はは）が くれました。",
            "vn": "Cảm ơn. Mẹ tặng mình vào sinh nhật."
          },
          {
            "speaker": "ナム",
            "jp": "その 時計（とけい）も 新（あたら）しいですね。",
            "vn": "Đồng hồ đó cũng mới nhỉ."
          },
          {
            "speaker": "リン",
            "jp": "これは 先輩（せんぱい）に もらいました。",
            "vn": "Cái này mình nhận từ đàn anh."
          }
        ]
      },
      {
        "id": "track-b08-l8",
        "title": "Có bao nhiêu?",
        "titleVn": "Có bao nhiêu?",
        "category": "exam",
        "unitId": "b08",
        "tag": "Bài 8 · Đếm đồ vật/con vật",
        "lines": [
          {
            "speaker": "A",
            "jp": "私（わたし）の 家（いえ）は 大家族（だいかぞく）です。",
            "vn": "Nhà tôi là đại gia đình."
          },
          {
            "speaker": "A",
            "jp": "兄弟（きょうだい）が 4人（よにん） います。",
            "vn": "Tôi có 4 anh chị em."
          },
          {
            "speaker": "A",
            "jp": "犬（いぬ）が 3匹（さんびき）と 猫（ねこ）が 1匹（いっぴき） います。",
            "vn": "Có 3 con chó và 1 con mèo."
          },
          {
            "speaker": "A",
            "jp": "祖父母（そふぼ）も 一緒（いっしょ）に 住（す）んで いますから、家族（かぞく）は 全部（ぜんぶ）で 8人（はちにん）です。",
            "vn": "Ông bà cũng sống cùng nên gia đình tổng cộng 8 người."
          }
        ]
      },
      {
        "id": "track-b08-l11",
        "title": "Đi mua quà",
        "titleVn": "Đi mua quà",
        "category": "exam",
        "unitId": "b08",
        "tag": "Bài 8 · Đi mua quà",
        "lines": [
          {
            "speaker": "キム",
            "jp": "先輩（せんぱい）の 結婚式（けっこんしき）の プレゼント、何（なに）が いいでしょうか。",
            "vn": "Quà cưới cho đàn anh thì cái gì tốt nhỉ?"
          },
          {
            "speaker": "ナム",
            "jp": "時計（とけい）は 高（たか）いですから、ペアの コップは どうですか。",
            "vn": "Đồng hồ đắt nên cốc đôi thì sao?"
          },
          {
            "speaker": "キム",
            "jp": "いいですね。2人（ふたり）で 1万円（いちまんえん）ぐらいに しましょう。",
            "vn": "Hay đấy. Hai mình góp khoảng 1 vạn yên nhé."
          },
          {
            "speaker": "ナム",
            "jp": "じゃ、1人（ひとり） 5,000円（ごせんえん）ですね。",
            "vn": "Vậy mỗi người 5.000 yên nhỉ."
          }
        ]
      },
      {
        "id": "track-b08-reflex",
        "title": "Phản xạ hỏi đáp thi cử · Bài 8",
        "titleVn": "Luyện phản xạ các câu hỏi ngữ pháp Bài 8",
        "category": "exam",
        "unitId": "b08",
        "tag": "Bài 8 · Phản xạ thi",
        "lines": [
          {
            "speaker": "Q (Hỏi)",
            "jp": "どこに 住（す）んで いますか。",
            "vn": "Bạn đang sống ở đâu?"
          },
          {
            "speaker": "A (Đáp)",
            "jp": "ハノイに 住（す）んで います。",
            "vn": "Tôi sống ở Hà Nội."
          },
          {
            "speaker": "Q (Hỏi)",
            "jp": "ご家族（かぞく）は 何人（なんにん）ですか。",
            "vn": "Gia đình bạn có mấy người?"
          },
          {
            "speaker": "A (Đáp)",
            "jp": "4人（にん）です。",
            "vn": "Có 4 người."
          },
          {
            "speaker": "Q (Hỏi)",
            "jp": "誕生日（たんじょうび）に 誰（だれ）から プレゼントを もらいましたか。",
            "vn": "Sinh nhật bạn đã nhận quà từ ai?"
          },
          {
            "speaker": "A (Đáp)",
            "jp": "友達（ともだち）から もらいました。",
            "vn": "Tôi nhận từ bạn bè."
          },
          {
            "speaker": "Q (Hỏi)",
            "jp": "一人（ひとり）で 住（す）んで いますか。",
            "vn": "Bạn sống một mình à?"
          },
          {
            "speaker": "A (Đáp)",
            "jp": "はい、一人（ひとり）で 住（す）んで います。",
            "vn": "Vâng, tôi sống một mình."
          },
          {
            "speaker": "Q (Hỏi)",
            "jp": "家（いえ）に 犬（いぬ）や 猫（ねこ）が 何匹（なんびき） いますか。",
            "vn": "Nhà bạn có mấy con chó mèo?"
          },
          {
            "speaker": "A (Đáp)",
            "jp": "猫（ねこ）が 2匹（にひき） います。",
            "vn": "Nhà tôi có 2 con mèo."
          }
        ]
      }
    ]
  },
  {
    "id": "pl-b09",
    "title": "第9課（だいきゅうか） · 好（す）きなこと・できること",
    "titleVn": "Bài 9 · Sở thích & Khả năng",
    "description": "Từ vựng sở thích đa dạng (âm nhạc, phim ảnh, sách báo), cấu trúc khả năng (〜ことができる) và phản xạ giao tiếp cuối tuần.",
    "category": "exam",
    "badge": "🎯 TRỌNG TÂM THI",
    "accentColor": "from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-600",
    "tracks": [
      {
        "id": "track-b09-vocab",
        "title": "私（わたし）の 趣味（しゅみ）と できること",
        "titleVn": "Sở thích phong phú và những điều tôi có thể làm",
        "category": "exam",
        "unitId": "b09",
        "tag": "Bài 9 · Ngữ cảnh từ vựng",
        "lines": [
          {
            "jp": "私（わたし）には、好（す）きなことや 趣味（しゅみ）が たくさん あります。",
            "vn": "Tôi có rất nhiều sở thích và những điều đam mê."
          },
          {
            "jp": "休みの 日（ひ）や 時間（じかん）が ある とき、部屋（へや）で 日本（にほん）の ドラマや アニメ、アクション映画（えいが）を 見（み）ます。",
            "vn": "Những ngày nghỉ hoặc khi có thời gian rảnh, tôi thường xem phim truyền hình Nhật Bản, phim hoạt hình và phim hành động trong phòng."
          },
          {
            "jp": "音楽（おんがく）も 大好（だいす）きで、クラシックから ポップスまで、幅広（はばひろ）く 聴（き）きます。",
            "vn": "Tôi cũng rất thích âm nhạc, nghe đủ thể loại từ nhạc cổ điển cho tới nhạc Pop hiện đại."
          },
          {
            "jp": "また、漫画（まんが）や 小説（しょうせつ）を 読（よ）むのも 楽（たの）しいです。世界（せかい）の 切手（きって）を 集（あつ）める 趣味（しゅみ）も あります。",
            "vn": "Ngoài ra, việc đọc truyện tranh và tiểu thuyết cũng rất vui. Tôi còn có sở thích sưu tầm tem từ khắp nơi trên thế giới."
          },
          {
            "jp": "私（わたし）は 料理（りょうり）を 作（つく）ることが できます。お菓子（かし）や ベトナム料理（りょうり）が 得意（とくい）です。",
            "vn": "Tôi có thể tự tay nấu nướng. Món bánh ngọt và các món ăn Việt Nam là sở trường của tôi."
          },
          {
            "jp": "スポーツでは、プールで 泳（およ）ぐ ことが できます。すいえいが じょうずです。",
            "vn": "Về thể thao, tôi có thể bơi lội trong hồ bơi. Tôi bơi lội khá cừ."
          },
          {
            "jp": "週末（しゅうまつ）は 川（かわ）へ 行（い）って、友達（ともだち）と つりを 楽（たの）しみます。絵（え）を かくことも 好（す）きです。",
            "vn": "Cuối tuần tôi hay ra bờ sông câu cá thư giãn cùng bạn bè. Tôi cũng thích vẽ tranh nữa."
          },
          {
            "jp": "日本（にほん）の 文化（ぶんか）に 興味（きょうみ）が あるので、書道（しょどう）と ダンスも 習（なら）い 始（はじ）めました。",
            "vn": "Vì rất quan tâm đến văn hóa Nhật Bản, tôi cũng bắt đầu theo học thư pháp và khiêu vũ."
          },
          {
            "jp": "ギターは 少（すこ）し ひくことが できますが、ピアノは ぜんぜん できません。下手（へた）です。",
            "vn": "Đàn ghi-ta tôi có thể gảy một chút, nhưng đàn piano thì hoàn toàn không biết chơi. Tôi chơi rất dở."
          },
          {
            "jp": "これからも いろいろな 趣味（しゅみ）に 挑戦（ちょうせん）して、毎日（まいにち）を 楽（たの）しく 過（す）ごしたいです。",
            "vn": "Từ nay về sau tôi muốn thử sức thêm nhiều đam mê mới để tận hưởng từng ngày sống thật ý nghĩa."
          }
        ]
      },
      {
        "id": "track-b09-l1",
        "title": "Sở thích là gì?",
        "titleVn": "Sở thích là gì?",
        "category": "exam",
        "unitId": "b09",
        "tag": "Bài 9 · Sở thích là gì?",
        "lines": [
          {
            "speaker": "ナム",
            "jp": "サラさんの 趣味（しゅみ）は 何（なん）ですか。",
            "vn": "Sở thích của Sarah là gì?"
          },
          {
            "speaker": "サラ",
            "jp": "映画（えいが）を 見（み）る ことも 好（す）きですが……いちばんは 絵（え）を 描（か）く ことです。",
            "vn": "Mình cũng thích xem phim, nhưng... nhất là vẽ tranh."
          },
          {
            "speaker": "ナム",
            "jp": "へえ、どんな 絵（え）ですか。",
            "vn": "Ồ, tranh gì vậy?"
          },
          {
            "speaker": "サラ",
            "jp": "漫画（まんが）の 絵（え）です。",
            "vn": "Tranh manga."
          }
        ]
      },
      {
        "id": "track-b09-l3",
        "title": "Hỏi khả năng",
        "titleVn": "Hỏi khả năng",
        "category": "exam",
        "unitId": "b09",
        "tag": "Bài 9 · Khả năng làm gì",
        "lines": [
          {
            "speaker": "A",
            "jp": "自転車（じてんしゃ）に 乗（の）る ことが できますか。",
            "vn": "Bạn đi xe đạp được không?"
          }
        ]
      },
      {
        "id": "track-b09-l12",
        "title": "Cuối tuần làm gì?",
        "titleVn": "Cuối tuần làm gì?",
        "category": "exam",
        "unitId": "b09",
        "tag": "Bài 9 · Cuối tuần làm gì?",
        "lines": [
          {
            "speaker": "リン",
            "jp": "ナムさん、日曜日（にちようび）は 何（なに）を しましたか。",
            "vn": "Nam ơi, Chủ nhật bạn làm gì?"
          },
          {
            "speaker": "ナム",
            "jp": "朝（あさ）、プールで 泳（およ）いで、それから 図書館（としょかん）で 本（ほん）を 借（か）りました。",
            "vn": "Buổi sáng mình bơi ở bể, sau đó mượn sách ở thư viện."
          },
          {
            "speaker": "ナム",
            "jp": "夜（よる）は 友達（ともだち）と カラオケへ 行（い）きました。",
            "vn": "Tối đi karaoke với bạn."
          },
          {
            "speaker": "リン",
            "jp": "忙（いそが）しかったですね。",
            "vn": "Bận nhỉ."
          }
        ]
      },
      {
        "id": "track-b09-l13",
        "title": "Sở thích của mọi người",
        "titleVn": "Sở thích của mọi người",
        "category": "exam",
        "unitId": "b09",
        "tag": "Bài 9 · Sở thích mọi người",
        "lines": [
          {
            "speaker": "先生",
            "jp": "皆（みな）さんの 趣味（しゅみ）は 何（なん）ですか。",
            "vn": "Sở thích của mọi người là gì?"
          },
          {
            "speaker": "マイ",
            "jp": "私（わたし）の 趣味（しゅみ）は 切手（きって）を 集（あつ）める ことです。もう 10年（じゅうねん） 集（あつ）めて います。",
            "vn": "Sở thích của em là sưu tầm tem. Em đã sưu tầm 10 năm rồi."
          },
          {
            "speaker": "トム",
            "jp": "僕（ぼく）の 趣味（しゅみ）は 釣（つ）りです。週末（しゅうまつ）は いつも 海（うみ）へ 行（い）きます。",
            "vn": "Sở thích của em là câu cá. Cuối tuần em luôn ra biển."
          },
          {
            "speaker": "トム",
            "jp": "車（くるま）を 運転（うんてん）して 行（い）きます。",
            "vn": "Em lái ô tô đi."
          },
          {
            "speaker": "キム",
            "jp": "私（わたし）は 最近（さいきん）、書道（しょどう）教室（きょうしつ）に 通（かよ）って います。でも、まだ あまり 上手（じょうず）じゃ ありません。",
            "vn": "Gần đây em đi học lớp thư pháp. Nhưng vẫn chưa giỏi lắm."
          },
          {
            "speaker": "ナム",
            "jp": "僕（ぼく）は ダイビングが 上手（じょうず）に できます。",
            "vn": "Em lặn giỏi."
          },
          {
            "speaker": "リン",
            "jp": "音楽（おんがく）を 聞（き）く ことです。クラシックも ポップスも 聞（き）きます。",
            "vn": "Em là nghe nhạc. Cả nhạc cổ điển lẫn nhạc pop em đều nghe."
          },
          {
            "speaker": "リン",
            "jp": "ときどき ドラマと アクション映画（えいが）も 見（み）ます。小説（しょうせつ）も 読（よ）みます。",
            "vn": "Thỉnh thoảng em cũng xem phim truyền hình và phim hành động. Em cũng đọc tiểu thuyết."
          },
          {
            "speaker": "先生",
            "jp": "すごいですね。",
            "vn": "Giỏi quá nhỉ."
          },
          {
            "speaker": "マイ",
            "jp": "特（とく）に 古（ふる）い 切手（きって）が 好（す）きです。",
            "vn": "Em đặc biệt thích tem cũ."
          }
        ]
      },
      {
        "id": "track-b09-reflex",
        "title": "Phản xạ hỏi đáp thi cử · Bài 9",
        "titleVn": "Luyện phản xạ các câu hỏi ngữ pháp Bài 9",
        "category": "exam",
        "unitId": "b09",
        "tag": "Bài 9 · Phản xạ thi",
        "lines": [
          {
            "speaker": "Q (Hỏi)",
            "jp": "あなたの 趣味（しゅみ）は 何（なん）ですか。",
            "vn": "Sở thích của bạn là gì?"
          },
          {
            "speaker": "A (Đáp)",
            "jp": "音楽（おんがく）を 聴（き）く ことです。",
            "vn": "Là nghe nhạc."
          },
          {
            "speaker": "Q (Hỏi)",
            "jp": "泳（およ）ぐ ことが できますか。",
            "vn": "Bạn có biết bơi không?"
          },
          {
            "speaker": "A (Đáp)",
            "jp": "はい、泳（およ）ぐ ことが できます。",
            "vn": "Có, tôi biết bơi."
          },
          {
            "speaker": "Q (Hỏi)",
            "jp": "1週間（しゅうかん）に 何回（なんかい） スポーツを しますか。",
            "vn": "Một tuần bạn chơi thể thao mấy lần?"
          },
          {
            "speaker": "A (Đáp)",
            "jp": "1週間（しゅうかん）に 2回（かい） します。",
            "vn": "Một tuần tôi chơi 2 lần."
          },
          {
            "speaker": "Q (Hỏi)",
            "jp": "学校（がっこう）まで どうやって 行（い）きますか。",
            "vn": "Đến trường bạn đi như thế nào?"
          },
          {
            "speaker": "A (Đáp)",
            "jp": "自転車（じてんしゃ）に 乗（の）って 行（い）きます。",
            "vn": "Đi xe đạp."
          }
        ]
      }
    ]
  },
  {
    "id": "pl-b10",
    "title": "第10課（だいじゅっか） · バスツアー・道案内（みちあんない）",
    "titleVn": "Bài 10 · Chỉ đường, Nơi công cộng & Vườn thú",
    "description": "Từ vựng tour du lịch, biển báo công cộng, mẫu câu chỉ dẫn đường đi (ngã tư, rẽ trái/phải, đi thẳng) và cấu trúc xin phép / cấm đoán.",
    "category": "exam",
    "badge": "🎯 TRỌNG TÂM THI",
    "accentColor": "from-purple-500/20 to-violet-500/10 border-purple-500/40 text-purple-600",
    "tracks": [
      {
        "id": "track-b10-vocab",
        "title": "東京（とうきょう） バスツアーと 街歩（まちある）き",
        "titleVn": "Chuyến tham quan bằng xe buýt và tản bộ ngắm phố Tokyo",
        "category": "exam",
        "unitId": "b10",
        "tag": "Bài 10 · Ngữ cảnh từ vựng",
        "lines": [
          {
            "jp": "朝（あさ） 8時（じ）に 駅（えき）の 入（い）り口（ぐち）に 集合（しゅうごう）して、東京（とうきょう） バスツアーが 出発（しゅっぱつ）しました。",
            "vn": "Lúc 8 giờ sáng, mọi người tập trung ở lối vào nhà ga và chuyến du lịch xe buýt Tokyo khởi hành."
          },
          {
            "jp": "ガイドさんが みなさんに パンフレットを 配（くば）って、観光（かんこう）コースの 説明（せつめい）を して くれました。",
            "vn": "Chị hướng dẫn viên phát tập gấp quảng cáo cho mọi người và thuyết minh về lộ trình tham quan."
          },
          {
            "jp": "バスは 大（おお）きな 橋（はし）を わたって、にぎやかな 道（みち）を まっすぐ 走（はし）ります。",
            "vn": "Xe buýt băng qua một cây cầu lớn rồi chạy thẳng men theo con đường sầm uất."
          },
          {
            "jp": "信号（しんごう）の ある 交差点（こうさてん）で 止（と）まり、2つ目（め）の 角（かど）を 右（みぎ）へ まがりました。左（ひだり）には 高（たか）い タワーが 見（み）えます。",
            "vn": "Xe dừng lại tại ngã tư có đèn giao thông, rồi rẽ phải ở khúc cua góc đường thứ hai. Phía bên trái có thể nhìn thấy tòa tháp cao vút."
          },
          {
            "jp": "最初（さいしょ）の 目的（もくてき）地（ち）は 有名（ゆうめい）な 動物園（どうぶつえん）です。出口（でぐち）から 歩（ある）いて 入（はい）りました。",
            "vn": "Điểm đến đầu tiên là vườn bách thú nổi tiếng. Chúng tôi đi bộ từ lối ra để bước vào tham quan."
          },
          {
            "jp": "どうぶつえんには、パンダ、ペンギン、ゾウ、サル、クマ、コアラが たくさん いました。",
            "vn": "Trong vườn thú có rất nhiều gấu trúc, chim cánh cụt, voi, khỉ, gấu và gấu túi koala."
          },
          {
            "jp": "サルたちに バナナや えさを やる 人（ひと）も いました。とりたちの 鳴（な）き声（ごえ）も 聞（き）こえます。",
            "vn": "Có người cho bầy khỉ ăn chuối và thức ăn. Tiếng hót ríu rít của đàn chim cũng văng vẳng nghe thấy."
          },
          {
            "jp": "園内（えんない）では「あぶないですから 走（はし）らないで ください。ごみは もってかえって ください」と 案内（あんない）が ありました。",
            "vn": "Trong khuôn viên có biển hướng dẫn: 「Nguy hiểm xin đừng chạy nhảy. Xin quý khách vui lòng mang rác về.」"
          },
          {
            "jp": "たくさん 歩（ある）いて、おなかが すきました。のどが かわいたので、お茶（ちゃ）を 飲（の）みました。",
            "vn": "Đi bộ nhiều nên tôi đã cảm thấy đói bụng. Vì khát nước nên tôi uống một ngụm trà mát lạnh."
          },
          {
            "jp": "おみやげ屋（や）で 家族（かぞく）に みやげを 買（か）いました。",
            "vn": "Tại quầy quà lưu niệm, tôi đã mua quà về cho gia đình."
          },
          {
            "jp": "午後（ごご）は 観覧車（かんらんしゃ）に 乗（の）って、街（まち）の すばらしい 景色（けしき）を ながめました。楽（たの）しい 1日（にち）でした。",
            "vn": "Buổi chiều tôi lên đu quay ngắm cảnh phố phường tuyệt đẹp. Đó quả là một ngày dạo chơi đầy ắp niềm vui."
          }
        ]
      },
      {
        "id": "track-b10-l1",
        "title": "Không được làm gì?",
        "titleVn": "Không được làm gì?",
        "category": "exam",
        "unitId": "b10",
        "tag": "Bài 10 · Lưu ý cấm đoán",
        "lines": [
          {
            "speaker": "ガイド",
            "jp": "皆（みな）さん、これから 美術館（びじゅつかん）に 入（はい）ります。",
            "vn": "Mọi người, giờ chúng ta vào bảo tàng."
          },
          {
            "speaker": "ガイド",
            "jp": "中（なか）で 写真（しゃしん）を 撮（と）らないで ください。",
            "vn": "Bên trong đừng chụp ảnh."
          },
          {
            "speaker": "ガイド",
            "jp": "でも、話（はな）しても いいですよ。小（ちい）さい 声（こえ）で お願（ねが）いします。",
            "vn": "Nhưng nói chuyện thì được. Xin nói nhỏ."
          },
          {
            "speaker": "ガイド",
            "jp": "水（みず）は 飲（の）んでも いいです。",
            "vn": "Uống nước thì được."
          }
        ]
      },
      {
        "id": "track-b10-l2",
        "title": "Đường đến bưu điện",
        "titleVn": "Đường đến bưu điện",
        "category": "exam",
        "unitId": "b10",
        "tag": "Bài 10 · Đường đến bưu điện",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "すみません、郵便局（ゆうびんきょく）は どこですか。",
            "vn": "Xin lỗi, bưu điện ở đâu ạ?"
          },
          {
            "speaker": "男の人",
            "jp": "この 道（みち）を まっすぐ 行（い）って、2つ目（ふたつめ）の 角（かど）を 右（みぎ）へ 曲（ま）がって ください。",
            "vn": "Đi thẳng đường này, rẽ phải ở góc thứ hai."
          },
          {
            "speaker": "男の人",
            "jp": "橋（はし）を 渡（わた）って、左（ひだり）に あります。",
            "vn": "Qua cầu, nó ở bên trái."
          },
          {
            "speaker": "男の人",
            "jp": "1つ目（ひとつめ）の 角（かど）じゃ ありませんよ。",
            "vn": "Không phải góc thứ nhất đâu nhé."
          }
        ]
      },
      {
        "id": "track-b10-l7",
        "title": "Đúng hay sai: ở sở thú",
        "titleVn": "Đúng hay sai: ở sở thú",
        "category": "exam",
        "unitId": "b10",
        "tag": "Bài 10 · Ở vườn thú",
        "lines": [
          {
            "speaker": "リン",
            "jp": "あ、見（み）て！ ペンギンが 泳（およ）いで いますよ。",
            "vn": "A, nhìn kìa! Chim cánh cụt đang bơi."
          },
          {
            "speaker": "キム",
            "jp": "本当（ほんとう）だ。かわいいですね。写真（しゃしん）を 撮（と）りましょう。",
            "vn": "Thật nhỉ. Dễ thương quá. Chụp ảnh đi."
          },
          {
            "speaker": "リン",
            "jp": "キムさん、フラッシュは 使（つか）わないで くださいね。",
            "vn": "Kim ơi, đừng dùng flash nhé."
          },
          {
            "speaker": "キム",
            "jp": "あ、そうですね。……ちょっと のどが かわきました。ジュースを 買（か）って 来（き）ます。",
            "vn": "À đúng rồi. ... Mình hơi khát. Mình đi mua nước rồi quay lại."
          },
          {
            "speaker": "リン",
            "jp": "じゃ、ここで 待（ま）って いますね。",
            "vn": "Vậy mình đợi ở đây nhé."
          }
        ]
      },
      {
        "id": "track-b10-l14",
        "title": "Chỉ đường đến khách sạn",
        "titleVn": "Chỉ đường đến khách sạn",
        "category": "exam",
        "unitId": "b10",
        "tag": "Bài 10 · Chỉ đường khách sạn",
        "lines": [
          {
            "speaker": "客",
            "jp": "すみません、さくらホテルは どこですか。",
            "vn": "Xin lỗi, khách sạn Sakura ở đâu?"
          },
          {
            "speaker": "駅員",
            "jp": "お客（きゃく）さん、この 道（みち）を まっすぐ 歩（ある）いて ください。",
            "vn": "Quý khách hãy đi bộ thẳng con đường này."
          },
          {
            "speaker": "駅員",
            "jp": "2つ目（ふたつめ）の 交差点（こうさてん）を 右（みぎ）へ 曲（ま）がります。",
            "vn": "Rẽ phải ở ngã tư thứ hai."
          },
          {
            "speaker": "駅員",
            "jp": "ホテルの 入（い）り口（ぐち）に 鳥（とり）の 絵（え）が あります。鳥（とり）が 飛（と）んで いる 絵（え）です。",
            "vn": "Ở cổng vào khách sạn có bức tranh con chim. Tranh con chim đang bay."
          },
          {
            "speaker": "客",
            "jp": "荷物（にもつ）が 多（おお）いですから、タクシーで 行（い）っても いいですか。",
            "vn": "Hành lý nhiều nên tôi đi taxi được không?"
          },
          {
            "speaker": "駅員",
            "jp": "いいですよ。でも、今（いま）は 道（みち）が 混（こ）んで いますから、遅（おく）れますよ。",
            "vn": "Được ạ. Nhưng bây giờ đường đông nên sẽ bị muộn đấy."
          },
          {
            "speaker": "客",
            "jp": "そうですか。じゃ、歩（ある）いて 行（い）きます。",
            "vn": "Vậy à. Vậy tôi đi bộ."
          }
        ]
      },
      {
        "id": "track-b10-reflex",
        "title": "Phản xạ hỏi đáp thi cử · Bài 10",
        "titleVn": "Luyện phản xạ các câu hỏi ngữ pháp Bài 10",
        "category": "exam",
        "unitId": "b10",
        "tag": "Bài 10 · Phản xạ thi",
        "lines": [
          {
            "speaker": "Q (Hỏi)",
            "jp": "ここで たばこを 吸（す）っても いいですか。",
            "vn": "Tôi hút thuốc ở đây được không?"
          },
          {
            "speaker": "A (Đáp)",
            "jp": "いいえ、吸（す）わないで ください。禁煙（きんえん）ですから。",
            "vn": "Không, xin đừng hút. Vì ở đây cấm hút thuốc."
          },
          {
            "speaker": "Q (Hỏi)",
            "jp": "窓（まど）から 何（なに）が 見（み）えますか。",
            "vn": "Nhìn thấy gì từ cửa sổ?"
          },
          {
            "speaker": "A (Đáp)",
            "jp": "富士山（ふじさん）が 見（み）えます。",
            "vn": "Nhìn thấy núi Phú Sĩ."
          },
          {
            "speaker": "Q (Hỏi)",
            "jp": "将来（しょうらい）、何（なに）に なりたいですか。",
            "vn": "Tương lai bạn muốn làm nghề gì?"
          },
          {
            "speaker": "A (Đáp)",
            "jp": "ITエンジニアに なりたいです。",
            "vn": "Tôi muốn trở thành kỹ sư IT."
          },
          {
            "speaker": "Q (Hỏi)",
            "jp": "コンビニへ 行（い）って 来（き）ます。",
            "vn": "Tôi đi cửa hàng tiện lợi rồi về nhé."
          },
          {
            "speaker": "A (Đáp)",
            "jp": "いってらっしゃい。",
            "vn": "Bạn đi nhé."
          }
        ]
      }
    ]
  },
  {
    "id": "pl-b11",
    "title": "第11課（だいじゅういっか） · 私（わたし）の生活（せいかつ）・成長（せいちょう）",
    "titleVn": "Bài 11 · Cuộc sống, Biến chuyển & Trò chuyện thân mật",
    "description": "Tổng kết N5, cuộc sống tự lập, so sánh trước đây và bây giờ, thể thông thường (thể ngắn) trong giao tiếp bạn bè hàng ngày.",
    "category": "exam",
    "badge": "🎯 TRỌNG TÂM THI",
    "accentColor": "from-rose-500/20 to-pink-500/10 border-rose-500/40 text-rose-600",
    "tracks": [
      {
        "id": "track-b11-vocab",
        "title": "日本（にほん）での 生活（せいかつ）と 私（わたし）の 成長（せいちょう）",
        "titleVn": "Cuộc sống tại Nhật và sự trưởng thành của bản thân",
        "category": "exam",
        "unitId": "b11",
        "tag": "Bài 11 · Ngữ cảnh từ vựng",
        "lines": [
          {
            "jp": "日本（にほん）に 来（き）てから、ひとりぐらしの 生活（せいかつ）が 始（はじ）まりました。",
            "vn": "Kể từ khi sang Nhật, cuộc sống tự lập sống một mình của tôi bắt đầu."
          },
          {
            "jp": "はじめは ひらがなも なかなか 読（よ）めず、会話（かいわ）も 難（むずか）しくて、あたまが いたかったです。",
            "vn": "Thuở ban đầu ngay cả chữ Hiragana tôi cũng mãi không đọc trôi chảy, hội thoại giao tiếp cũng khó khăn khiến đầu óc như muốn đau nhức."
          },
          {
            "jp": "アルバイトの 店長（てんちょう）は 少（すこ）し きびしい 人（ひと）で、毎晩（まいばん） ねむい 目（め）を こすりながら 働（はたら）きました。",
            "vn": "Người quản lý cửa hàng nơi tôi làm thêm là một người khá nghiêm khắc, mỗi tối tôi vừa dụi đôi mắt buồn ngủ vừa chăm chỉ làm việc."
          },
          {
            "jp": "でも、親切（しんせつ）な クラスメイトと 出会（であ）い、だんだん 日本（にほん）の 生活（せいかつ）に 慣（な）れて きました。",
            "vn": "Thế nhưng, nhờ gặp được những người bạn cùng lớp tốt bụng, tôi đã dần dần quen với cuộc sống tại Nhật Bản."
          },
          {
            "jp": "平日（へいじつ）は 毎日（まいにち） 学校（がっこう）に 通（かよ）い、授業（じゅぎょう）が 終（お）わった あと、公園（こうえん）を さんぽしたり、ジョギングを します。",
            "vn": "Ngày thường mỗi ngày tôi đều chăm chỉ đến trường học, sau khi giờ học kết thúc, tôi đi dạo trong công viên hoặc chạy bộ tập thể dục."
          },
          {
            "jp": "毎週（まいしゅう） 日本語（にほんご）の ざっしを 読（よ）んだり、夜（よる）には 日記（にっき）や 作文（さくぶん）を 書（か）くように して います。",
            "vn": "Hàng tuần tôi đều đọc tạp chí tiếng Nhật, và ban đêm tôi duy trì thói quen viết nhật ký hoặc tập làm văn."
          },
          {
            "jp": "小学生（しょうがくせい）や 中学生（ちゅうがくせい）の ころを 思（おも）い出（だ）すと、自分（じぶん）が 外国（がいこく）で 暮（く）らすとは 夢（ゆめ）にも 思（おも）いませんでした。",
            "vn": "Nhớ lại những ngày còn là học sinh tiểu học hay cấp hai, tôi chưa từng mơ rằng một ngày mình lại sinh sống ở nước ngoài."
          },
          {
            "jp": "高校（こうこう）を 卒業（そつぎょう）して、日本（にほん）の 学校（がっこう）に 入学（にゅうがく）した 日（ひ）の 決意（けつい）を、今（いま）も 忘（わす）れません。",
            "vn": "Tôi vẫn không bao giờ quên quyết tâm của ngày tốt nghiệp cấp 3 để nhập học vào ngôi trường tại Nhật Bản."
          },
          {
            "jp": "部屋（へや）では エアコンを つけたり けしたり して、快適（かいてき）に 過（す）ごして います。ニュースも よく 見（み）ます。",
            "vn": "Trong phòng tôi bật tắt điều hòa để điều chỉnh nhiệt độ thoải mái. Tôi cũng thường xuyên xem các bản tin thời sự."
          },
          {
            "jp": "「うん、そっか！」「また 明日（あした）ね！」と 友達（ともだち）と 自然（しぜん）に 会話（かいわ）が できるように なって、本当（ほんとう）に 嬉（うれ）しいです。",
            "vn": "「Ừ, thế à!」「Hẹn gặp lại ngày mai nhé!」, có thể trò chuyện tự nhiên cùng bạn bè khiến tôi thực sự vô cùng hạnh phúc."
          }
        ]
      },
      {
        "id": "track-b11-l1",
        "title": "Dạo này làm gì?",
        "titleVn": "Dạo này làm gì?",
        "category": "exam",
        "unitId": "b11",
        "tag": "Bài 11 · Dạo này làm gì?",
        "lines": [
          {
            "speaker": "ナム",
            "jp": "リン、最近（さいきん） 元気（げんき）そうだね。",
            "vn": "Linh, dạo này trông cậu khỏe nhỉ."
          },
          {
            "speaker": "リン",
            "jp": "うん。最近（さいきん）、毎朝（まいあさ） ヨガを して る。",
            "vn": "Ừ. Dạo này sáng nào mình cũng tập yoga."
          },
          {
            "speaker": "ナム",
            "jp": "ジョギングじゃ ないの？",
            "vn": "Không phải chạy bộ à?"
          },
          {
            "speaker": "リン",
            "jp": "ジョギングは 前（まえ） して た けど、今（いま）は ヨガ。",
            "vn": "Chạy bộ là trước kia, giờ là yoga."
          }
        ]
      },
      {
        "id": "track-b11-l3",
        "title": "Câu hỏi thân mật",
        "titleVn": "Câu hỏi thân mật",
        "category": "exam",
        "unitId": "b11",
        "tag": "Bài 11 · Hội thoại thân mật",
        "lines": [
          {
            "speaker": "A",
            "jp": "今晩（こんばん）、暇（ひま）？",
            "vn": "Tối nay rảnh không?"
          }
        ]
      },
      {
        "id": "track-b11-l11",
        "title": "Hẹn đi chơi (thân mật)",
        "titleVn": "Hẹn đi chơi (thân mật)",
        "category": "exam",
        "unitId": "b11",
        "tag": "Bài 11 · Rủ đi chơi thân mật",
        "lines": [
          {
            "speaker": "キム",
            "jp": "ねえ、明日（あした） 映画（えいが） 行（い）かない？",
            "vn": "Này, mai đi xem phim không?"
          },
          {
            "speaker": "マイ",
            "jp": "明日（あした）は ちょっと……。土曜日（どようび）は？",
            "vn": "Mai thì hơi... Thứ Bảy thì sao?"
          },
          {
            "speaker": "キム",
            "jp": "うん、いいよ。何時（なんじ）に する？",
            "vn": "Ừ, được. Mấy giờ?"
          },
          {
            "speaker": "マイ",
            "jp": "3時（さんじ）に 駅（えき）の 改札（かいさつ）は？",
            "vn": "3 giờ ở cửa soát vé ga nhé?"
          },
          {
            "speaker": "キム",
            "jp": "OK。じゃ、土曜日（どようび）ね。",
            "vn": "OK. Vậy thứ Bảy nhé."
          }
        ]
      },
      {
        "id": "track-b11-l13",
        "title": "Cuộc sống ở Nhật của Minh",
        "titleVn": "Cuộc sống ở Nhật của Minh",
        "category": "exam",
        "unitId": "b11",
        "tag": "Bài 11 · Cuộc sống ở Nhật",
        "lines": [
          {
            "speaker": "クラスメイト",
            "jp": "ミンさん、日本（にほん）の 生活（せいかつ）は どう？",
            "vn": "Minh ơi, cuộc sống ở Nhật thế nào?"
          },
          {
            "speaker": "ミン",
            "jp": "日本（にほん）は 初（はじ）めてだったから、初（はじ）めは 大変（たいへん）だった。でも、今（いま）は 楽（たの）しいよ。",
            "vn": "Lần đầu đến Nhật nên ban đầu vất vả. Nhưng giờ vui lắm."
          },
          {
            "speaker": "ミン",
            "jp": "平日（へいじつ）は たいてい 学校（がっこう）と アルバイト。",
            "vn": "Ngày thường mình thường đi học và đi làm thêm."
          },
          {
            "speaker": "ミン",
            "jp": "アルバイトの 店長（てんちょう）は 厳（きび）しい けど、親切（しんせつ）だよ。",
            "vn": "Quản lý ở chỗ làm thêm nghiêm khắc nhưng tốt bụng."
          },
          {
            "speaker": "クラスメイト",
            "jp": "日本語（にほんご）の 勉強（べんきょう）は？",
            "vn": "Còn học tiếng Nhật?"
          },
          {
            "speaker": "ミン",
            "jp": "毎晩（まいばん） 日記（にっき）を 書（か）いて る。それで、作文（さくぶん）が 上手（じょうず）に なった。",
            "vn": "Tối nào mình cũng viết nhật ký. Nhờ vậy mà viết văn giỏi lên."
          },
          {
            "speaker": "ミン",
            "jp": "会話（かいわ）は まだ 難（むずか）しい。ひらがなは もう 大丈夫（だいじょうぶ）。",
            "vn": "Hội thoại thì vẫn khó. Hiragana thì ổn rồi."
          },
          {
            "speaker": "クラスメイト",
            "jp": "週末（しゅうまつ）は？",
            "vn": "Cuối tuần thì sao?"
          },
          {
            "speaker": "ミン",
            "jp": "公園（こうえん）を 散歩（さんぽ）したり、ニュースを 見（み）たり して る。",
            "vn": "Mình đi dạo công viên, xem tin tức..."
          },
          {
            "speaker": "ミン",
            "jp": "ときどき クラスメイトの 家（いえ）へ ギターを ひきに 行（い）く。",
            "vn": "Thỉnh thoảng mình đến nhà bạn cùng lớp chơi ghi-ta."
          }
        ]
      },
      {
        "id": "track-b11-l14",
        "title": "Bạn bè lâu ngày gặp lại (thân mật)",
        "titleVn": "Bạn bè lâu ngày gặp lại (thân mật)",
        "category": "exam",
        "unitId": "b11",
        "tag": "Bài 11 · Bạn bè gặp lại",
        "lines": [
          {
            "speaker": "キム",
            "jp": "あ、ユキ！ 久（ひさ）しぶり。元気（げんき）？",
            "vn": "A, Yuki! Lâu rồi không gặp. Khỏe không?"
          },
          {
            "speaker": "ユキ",
            "jp": "ええ、元気（げんき）。でも、先週（せんしゅう） 風邪（かぜ）を ひいた。頭（あたま）が 痛（いた）かった。",
            "vn": "Ừ, khỏe. Nhưng tuần trước bị cảm. Đau đầu lắm."
          },
          {
            "speaker": "キム",
            "jp": "大丈夫（だいじょうぶ）？ 寝（ね）る とき、エアコンを つけない ほうが いいよ。",
            "vn": "Ổn không? Lúc ngủ đừng bật điều hòa thì hơn đấy."
          },
          {
            "speaker": "ユキ",
            "jp": "うん。キムは 最近（さいきん） どう？",
            "vn": "Ừ. Kim dạo này thế nào?"
          },
          {
            "speaker": "キム",
            "jp": "来月（らいげつ）、引越（ひっこ）しする。それから、来年（らいねん） 大学（だいがく）に 入学（にゅうがく）する。",
            "vn": "Tháng sau mình chuyển nhà. Rồi năm sau mình vào đại học."
          },
          {
            "speaker": "ユキ",
            "jp": "すごい！ 私（わたし）は 3月（さんがつ）に 卒業（そつぎょう）する。",
            "vn": "Giỏi quá! Mình thì tháng 3 tốt nghiệp."
          },
          {
            "speaker": "キム",
            "jp": "ユキは 前（まえ） 外国（がいこく）へ 行（い）きたかった よね。",
            "vn": "Trước đây Yuki muốn đi nước ngoài nhỉ."
          },
          {
            "speaker": "ユキ",
            "jp": "ううん、今（いま）は 行（い）きたく ない。祖父（そふ）が 一人（ひとり）だから。",
            "vn": "Không, giờ thì không muốn nữa. Vì ông mình ở một mình."
          },
          {
            "speaker": "キム",
            "jp": "そっか。夏（なつ）の オリンピック、一緒（いっしょ）に 見（み）よう。",
            "vn": "Thế à. Thế vận hội mùa hè, cùng xem nhé."
          },
          {
            "speaker": "ユキ",
            "jp": "うん。電話（でんわ）番号（ばんごう）、忘（わす）れないで ね。",
            "vn": "Ừ. Đừng quên số điện thoại đấy."
          },
          {
            "speaker": "キム",
            "jp": "うん。じゃ、また ね。",
            "vn": "Ừ. Vậy gặp lại nhé."
          },
          {
            "speaker": "ユキ",
            "jp": "駅（えき）で 別（わか）れる とき、いつも 寂（さび）しいね。ギター、まだ ひいて る？",
            "vn": "Lúc chia tay ở ga lúc nào cũng buồn nhỉ. Cậu vẫn chơi ghi-ta chứ?"
          },
          {
            "speaker": "キム",
            "jp": "寝（ね）る とき、エアコンを 消（け）して ね。",
            "vn": "Lúc ngủ thì tắt điều hòa nhé."
          }
        ]
      },
      {
        "id": "track-b11-reflex",
        "title": "Phản xạ hỏi đáp thi cử · Bài 11",
        "titleVn": "Luyện phản xạ các câu hỏi ngữ pháp Bài 11",
        "category": "exam",
        "unitId": "b11",
        "tag": "Bài 11 · Phản xạ thi",
        "lines": [
          {
            "speaker": "Q (Hỏi)",
            "jp": "最近（さいきん）、毎朝（まいあさ） 何（なに）を して いますか。",
            "vn": "Dạo này sáng nào bạn cũng làm gì?"
          },
          {
            "speaker": "A (Đáp)",
            "jp": "毎朝（まいあさ） 公園（こうえん）を 走（はし）って います。",
            "vn": "Sáng nào tôi cũng chạy bộ ở công viên."
          },
          {
            "speaker": "Q (Hỏi)",
            "jp": "今（いま）、どこに 住（す）んで いますか。",
            "vn": "Bây giờ bạn đang sống ở đâu?"
          },
          {
            "speaker": "A (Đáp)",
            "jp": "学校（がっこう）の 近（ちか）くの アパートに 住（す）んで います。",
            "vn": "Tôi sống ở căn hộ gần trường."
          },
          {
            "speaker": "Q (Hỏi)",
            "jp": "1週間（しゅうかん）に 何回（なんかい） 料理（りょうり）を して いますか。",
            "vn": "Một tuần bạn nấu ăn mấy lần?"
          },
          {
            "speaker": "A (Đáp)",
            "jp": "1週間（しゅうかん）に 4回（かい）ぐらい 料理（りょうり）を して います。",
            "vn": "Một tuần tôi nấu khoảng 4 lần."
          },
          {
            "speaker": "Q (Hỏi)",
            "jp": "毎晩（まいばん）、寝（ね）る 前（まえ）に 何（なに）を して いますか。",
            "vn": "Tối nào trước khi ngủ bạn cũng làm gì?"
          },
          {
            "speaker": "A (Đáp)",
            "jp": "毎晩（まいばん）、寝（ね）る 前（まえ）に 本（ほん）を 読（よ）んで います。",
            "vn": "Tối nào trước khi ngủ tôi cũng đọc sách."
          },
          {
            "speaker": "Q (Hỏi)",
            "jp": "毎日（まいにち）、どのぐらい 日本語（にほんご）を 勉強（べんきょう）して いますか。",
            "vn": "Mỗi ngày bạn học tiếng Nhật bao lâu?"
          },
          {
            "speaker": "A (Đáp)",
            "jp": "毎日（まいにち） 2時間（じかん）ぐらい 勉強（べんきょう）して います。",
            "vn": "Mỗi ngày tôi học khoảng 2 tiếng."
          },
          {
            "speaker": "Q (Hỏi)",
            "jp": "最近（さいきん）、どんな 本（ほん）を 読（よ）んで いますか。",
            "vn": "Dạo này bạn đang đọc sách gì?"
          },
          {
            "speaker": "A (Đáp)",
            "jp": "最近（さいきん）、日本（にほん）の 漫画（まんが）を 読（よ）んで います。",
            "vn": "Dạo này tôi đọc truyện tranh Nhật."
          },
          {
            "speaker": "Q (Hỏi)",
            "jp": "休（やす）みの 日（ひ）は たいてい 何（なに）を して いますか。",
            "vn": "Ngày nghỉ bạn thường làm gì?"
          },
          {
            "speaker": "A (Đáp)",
            "jp": "たいてい 掃除（そうじ）したり、洗濯（せんたく）したり して います。",
            "vn": "Tôi thường dọn dẹp, giặt giũ."
          },
          {
            "speaker": "Q (Hỏi)",
            "jp": "昨日（きのう）の 夜（よる）、何（なに）を しましたか。",
            "vn": "Tối qua bạn đã làm gì?"
          },
          {
            "speaker": "A (Đáp)",
            "jp": "宿題（しゅくだい）を したり、本（ほん）を 読（よ）んだり しました。",
            "vn": "Tôi làm bài tập, đọc sách."
          },
          {
            "speaker": "Q (Hỏi)",
            "jp": "日本（にほん）で どんな ことを したいですか。",
            "vn": "Ở Nhật bạn muốn làm những gì?"
          },
          {
            "speaker": "A (Đáp)",
            "jp": "富士山（ふじさん）に 登（のぼ）ったり、温泉（おんせん）に 入（はい）ったり したいです。",
            "vn": "Tôi muốn leo núi Phú Sĩ, tắm suối nước nóng."
          },
          {
            "speaker": "Q (Hỏi)",
            "jp": "夏休（なつやす）みは 何（なに）を しましたか。",
            "vn": "Nghỉ hè bạn đã làm gì?"
          },
          {
            "speaker": "A (Đáp)",
            "jp": "国（くに）へ 帰（かえ）ったり、海（うみ）で 泳（およ）いだり しました。",
            "vn": "Tôi về nước, bơi ở biển."
          }
        ]
      }
    ]
  },
  {
    "id": "pl-cd02",
    "title": "コンビニ・お店（みせ）・買い物（かいもの）",
    "titleVn": "Cửa hàng tiện lợi & Mua sắm · Nghe hiểu Kính ngữ nhân viên, Hỏi hàng, Đổi trả và Thanh toán",
    "description": "Trọn bộ 10 kịch bản đối thoại nhập vai thực tế trong tình huống: Cửa hàng tiện lợi & Mua sắm · Nghe hiểu Kính ngữ nhân viên, Hỏi hàng, Đổi trả và Thanh toán.",
    "category": "topic",
    "badge": "🏪 TIỆM & SIÊU THỊ",
    "accentColor": "from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-600",
    "tracks": [
      {
        "id": "track-cd02-d1",
        "title": "Konbini: thanh toán trọn vẹn ở quầy",
        "titleVn": "Konbini: thanh toán trọn vẹn ở quầy",
        "category": "topic",
        "topicId": "cd02",
        "tag": "コンビニ・お店・買い物 · Kịch bản 1",
        "lines": [
          {
            "speaker": "店員",
            "jp": "いらっしゃいませ。",
            "vn": "Kính chào quý khách."
          },
          {
            "speaker": "あなた",
            "jp": "［これ、お願（ねが）いします］。",
            "vn": "Tính cái này giúp tôi."
          },
          {
            "speaker": "店員",
            "jp": "お弁当（べんとう）は 温（あたた）めますか。",
            "vn": "Cơm hộp có hâm nóng không ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、お願（ねが）いします］。",
            "vn": "Vâng, nhờ anh."
          },
          {
            "speaker": "店員",
            "jp": "お飲（の）み物（もの）は 別（べつ）の 袋（ふくろ）に しますか。",
            "vn": "Đồ uống để túi riêng không ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［いいえ、袋（ふくろ）は 大丈夫（だいじょうぶ）です。エコバッグが あります］。",
            "vn": "Không, không cần túi. Tôi có túi vải."
          },
          {
            "speaker": "店員",
            "jp": "かしこまりました。お箸（はし）は お付（つ）けしますか。",
            "vn": "Vâng ạ. Có kèm đũa không ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、1膳（いちぜん） お願（ねが）いします］。",
            "vn": "Có, cho tôi 1 đôi."
          },
          {
            "speaker": "店員",
            "jp": "ポイントカードは お持（も）ちですか。",
            "vn": "Quý khách có thẻ tích điểm không ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［いいえ、持（も）って いません］。あと、［あの 肉（にく）まんを 1つ ください］。",
            "vn": "Không, tôi không có. À, cho tôi thêm 1 cái bánh bao thịt kia."
          },
          {
            "speaker": "店員",
            "jp": "肉（にく）まん 1つですね。全部（ぜんぶ）で 820円（はっぴゃくにじゅうえん）です。",
            "vn": "1 bánh bao nhỉ. Tổng cộng 820 yên."
          },
          {
            "speaker": "あなた",
            "jp": "［PayPayで 払（はら）えますか］。",
            "vn": "Trả bằng PayPay được không?"
          },
          {
            "speaker": "店員",
            "jp": "はい。こちらの コードを 読（よ）み取（と）って ください。",
            "vn": "Vâng. Hãy quét mã này."
          },
          {
            "speaker": "あなた",
            "jp": "［はい……。払（はら）いました］。",
            "vn": "Vâng... Tôi trả rồi."
          },
          {
            "speaker": "店員",
            "jp": "ありがとうございます。レシートは ご利用（りよう）ですか。",
            "vn": "Cảm ơn quý khách. Có lấy hóa đơn không ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［いいえ、要（い）りません］。",
            "vn": "Không, tôi không cần."
          },
          {
            "speaker": "店員",
            "jp": "お弁当（べんとう）、熱（あつ）いので お気（き）を つけて ください。",
            "vn": "Cơm hộp nóng, xin cẩn thận."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます］。",
            "vn": "Cảm ơn."
          },
          {
            "speaker": "店員",
            "jp": "ありがとうございました。またお越（こ）しくださいませ。",
            "vn": "Cảm ơn quý khách. Hẹn gặp lại."
          }
        ]
      },
      {
        "id": "track-cd02-d2",
        "title": "Konbini: gửi bưu kiện về quê",
        "titleVn": "Konbini: gửi bưu kiện về quê",
        "category": "topic",
        "topicId": "cd02",
        "tag": "コンビニ・お店・買い物 · Kịch bản 2",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、この 荷物（にもつ）を 送（おく）りたいんですが］。",
            "vn": "Xin lỗi, tôi muốn gửi kiện hàng này."
          },
          {
            "speaker": "店員",
            "jp": "宅配便（たくはいびん）ですね。国内（こくない）ですか。",
            "vn": "Chuyển phát nhỉ. Trong nước ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、大阪（おおさか）の 友達（ともだち）に 送（おく）ります］。",
            "vn": "Vâng, gửi cho bạn ở Osaka."
          },
          {
            "speaker": "店員",
            "jp": "では、この 送（おく）り状（じょう）に 書（か）いて ください。",
            "vn": "Vậy hãy điền vào phiếu gửi này."
          },
          {
            "speaker": "あなた",
            "jp": "［届（とど）け先（さき）は どこに 書（か）けば いいですか］。",
            "vn": "Địa chỉ nhận ghi ở đâu ạ?"
          },
          {
            "speaker": "店員",
            "jp": "上（うえ）が お届（とど）け先（さき）、下（した）が ご依頼主（いらいぬし）、お客様（きゃくさま）の 住所（じゅうしょ）です。",
            "vn": "Ô trên là người nhận, ô dưới là người gửi, tức địa chỉ của quý khách."
          },
          {
            "speaker": "あなた",
            "jp": "わかりました。［これで いいですか］。",
            "vn": "Tôi hiểu. (Viết xong) Thế này được chưa?"
          },
          {
            "speaker": "店員",
            "jp": "はい、大丈夫（だいじょうぶ）です。中身（なかみ）は 何（なん）ですか。",
            "vn": "Vâng, được rồi. Bên trong là gì ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［本（ほん）と 服（ふく）です。それから、コップが 1つ 入（はい）って います］。",
            "vn": "Sách và quần áo. Ngoài ra có 1 cái cốc."
          },
          {
            "speaker": "店員",
            "jp": "コップは 割（わ）れ物（もの）ですね。「割（わ）れ物（もの）注意（ちゅうい）」の シールを 貼（は）って おきます。",
            "vn": "Cốc là đồ dễ vỡ nhỉ. Tôi dán tem \"Cẩn thận dễ vỡ\"."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。明後日（あさって）までに 届（とど）きますか］。",
            "vn": "Cảm ơn. Có đến trước ngày kia không ạ?"
          },
          {
            "speaker": "店員",
            "jp": "大阪（おおさか）なら 明日（あした） 届（とど）きますよ。時間（じかん）も 指定（してい）できます。",
            "vn": "Osaka thì mai đến. Có thể chọn cả giờ."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、明日（あした）の 夜（よる） 7時（しちじ）から 9時（くじ）で お願（ねが）いします］。",
            "vn": "Vậy cho tôi 7–9 giờ tối mai."
          },
          {
            "speaker": "店員",
            "jp": "かしこまりました。お支払（しはら）いは 元払（もとばら）いで よろしいですか。",
            "vn": "Vâng ạ. Quý khách trả phí luôn được không ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、今（いま） 払（はら）います。いくらですか］。",
            "vn": "Vâng, tôi trả bây giờ. Bao nhiêu ạ?"
          },
          {
            "speaker": "店員",
            "jp": "1,350円（せんさんびゃくごじゅうえん）です。こちらが 控（ひか）えです。",
            "vn": "1.350 yên. Đây là liên lưu."
          },
          {
            "speaker": "あなた",
            "jp": "［この 番号（ばんごう）で 荷物（にもつ）が どこに あるか 調（しら）べられますか］。",
            "vn": "Với số này tôi tra được kiện hàng đang ở đâu không?"
          },
          {
            "speaker": "店員",
            "jp": "はい、ホームページで 確認（かくにん）できますよ。",
            "vn": "Vâng, có thể kiểm tra trên trang web."
          }
        ]
      },
      {
        "id": "track-cd02-d3",
        "title": "Konbini: trả hóa đơn và in tài liệu",
        "titleVn": "Konbini: trả hóa đơn và in tài liệu",
        "category": "topic",
        "topicId": "cd02",
        "tag": "コンビニ・お店・買い物 · Kịch bản 3",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、電気代（でんきだい）は ここで 払（はら）えますか］。",
            "vn": "Xin lỗi, tiền điện trả ở đây được không ạ?"
          },
          {
            "speaker": "店員",
            "jp": "はい。払込票（はらいこみひょう）を お願（ねが）いします。",
            "vn": "Vâng. Xin phiếu thanh toán."
          },
          {
            "speaker": "あなた",
            "jp": "［これです。期限（きげん）は 昨日（きのう）でしたが、大丈夫（だいじょうぶ）ですか］。",
            "vn": "Đây ạ. Hạn là hôm qua, có sao không ạ?"
          },
          {
            "speaker": "店員",
            "jp": "確認（かくにん）します……。はい、まだ お支払（しはら）い できます。5,240円（ごせんにひゃくよんじゅうえん）です。",
            "vn": "Để tôi kiểm tra... Vâng, vẫn thanh toán được. 5.240 yên."
          },
          {
            "speaker": "あなた",
            "jp": "［カードで 払（はら）えますか］。",
            "vn": "Trả thẻ được không?"
          },
          {
            "speaker": "店員",
            "jp": "申（もう）し訳（わけ）ございません。公共（こうきょう）料金（りょうきん）は 現金（げんきん）だけです。",
            "vn": "Xin lỗi. Phí dịch vụ công chỉ nhận tiền mặt."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。じゃ、現金（げんきん）で。1万円（いちまんえん）で お願（ねが）いします］。",
            "vn": "Tôi hiểu. Vậy tiền mặt. Tôi đưa tờ 1 vạn."
          },
          {
            "speaker": "店員",
            "jp": "4,760円（よんせんななひゃくろくじゅうえん）の お返（かえ）しです。こちら 領収書（りょうしゅうしょ）です。",
            "vn": "Thối lại 4.760 yên. Đây là biên lai."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。それから、コピー機（き）で スマホの ファイルを 印刷（いんさつ）したいんですが］。",
            "vn": "Cảm ơn. Ngoài ra, tôi muốn in file trong điện thoại bằng máy photocopy."
          },
          {
            "speaker": "店員",
            "jp": "アプリを 使（つか）えば できますよ。",
            "vn": "Dùng ứng dụng là được."
          },
          {
            "speaker": "あなた",
            "jp": "［使（つか）い方（かた）を 教（おし）えて いただけませんか］。",
            "vn": "Chỉ giúp tôi cách dùng được không ạ?"
          },
          {
            "speaker": "店員",
            "jp": "まず アプリに ファイルを 登録（とうろく）して、番号（ばんごう）を もらって ください。",
            "vn": "Trước tiên đăng ký file trên app và lấy mã số."
          },
          {
            "speaker": "あなた",
            "jp": "［番号（ばんごう）を もらいました。次（つぎ）は どう したら いいですか］。",
            "vn": "Có mã rồi. Tiếp theo làm thế nào ạ?"
          },
          {
            "speaker": "店員",
            "jp": "機械（きかい）の 画面（がめん）で 「プリント」を 押（お）して、番号（ばんごう）を 入（い）れて ください。",
            "vn": "Trên màn hình máy bấm \"In\" rồi nhập mã số."
          },
          {
            "speaker": "あなた",
            "jp": "［白黒（しろくろ）だと 1枚（いちまい） いくらですか］。",
            "vn": "In đen trắng 1 tờ bao nhiêu?"
          },
          {
            "speaker": "店員",
            "jp": "白黒（しろくろ）は 10円（じゅうえん）、カラーは 50円（ごじゅうえん）です。",
            "vn": "Đen trắng 10 yên, màu 50 yên."
          },
          {
            "speaker": "あなた",
            "jp": "［10枚（じゅうまい）なので、100円（ひゃくえん）ですね。小銭（こぜに）が あるので 大丈夫（だいじょうぶ）です。助（たす）かりました］。",
            "vn": "10 tờ nên 100 yên nhỉ. Tôi có tiền lẻ nên không sao. Cảm ơn đã giúp."
          }
        ]
      },
      {
        "id": "track-cd02-d4",
        "title": "Drugstore: tìm hàng và hỏi tồn kho",
        "titleVn": "Drugstore: tìm hàng và hỏi tồn kho",
        "category": "topic",
        "topicId": "cd02",
        "tag": "コンビニ・お店・買い物 · Kịch bản 4",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、目薬（めぐすり）は どこに ありますか］。",
            "vn": "Xin lỗi, thuốc nhỏ mắt ở đâu ạ?"
          },
          {
            "speaker": "店員",
            "jp": "目薬（めぐすり）なら、2番（にばん）の 通路（つうろ）の 奥（おく）です。ご案内（あんない）します。",
            "vn": "Thuốc nhỏ mắt thì ở cuối lối số 2. Để tôi dẫn."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。目（め）が 疲（つか）れた 時（とき）の 目薬（めぐすり）を 探（さが）して いるんですが］。",
            "vn": "Cảm ơn. Tôi đang tìm thuốc nhỏ cho mắt mỏi."
          },
          {
            "speaker": "店員",
            "jp": "パソコンを よく 使（つか）いますか。",
            "vn": "Quý khách hay dùng máy tính à?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、毎日（まいにち） 8時間（はちじかん）ぐらい 使（つか）います］。",
            "vn": "Vâng, mỗi ngày khoảng 8 tiếng."
          },
          {
            "speaker": "店員",
            "jp": "それなら、こちらが おすすめです。冷（つめ）たい 感（かん）じが 少（すく）ないので、初（はじ）めての 方（かた）でも 使（つか）いやすいですよ。",
            "vn": "Vậy loại này được khuyên dùng. Ít mát lạnh nên người dùng lần đầu cũng dễ dùng."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、これに します。それから、日焼（ひや）け止（ど）めも 探（さが）して います］。",
            "vn": "Vậy tôi lấy cái này. Ngoài ra tôi cũng tìm kem chống nắng."
          },
          {
            "speaker": "店員",
            "jp": "日焼（ひや）け止（ど）めは 入口（いりぐち）の 近（ちか）くです。",
            "vn": "Kem chống nắng ở gần cửa vào."
          },
          {
            "speaker": "あなた",
            "jp": "［この 青（あお）い 日焼（ひや）け止（ど）めは まだ ありますか。棚（たな）に ありませんでした］。",
            "vn": "Kem chống nắng màu xanh này còn không ạ? Trên kệ không thấy."
          },
          {
            "speaker": "店員",
            "jp": "少々（しょうしょう） お待（ま）ち ください。在庫（ざいこ）を 確認（かくにん）します。",
            "vn": "Xin chờ chút. Tôi kiểm tra kho."
          },
          {
            "speaker": "店員",
            "jp": "お待（ま）たせ しました。申（もう）し訳（わけ）ございません、今（いま） 売（う）り切（き）れです。",
            "vn": "Xin lỗi đã để chờ. Thành thật xin lỗi, hiện đang hết hàng."
          },
          {
            "speaker": "あなた",
            "jp": "［いつ 入荷（にゅうか）しますか］。",
            "vn": "Khi nào hàng về ạ?"
          },
          {
            "speaker": "店員",
            "jp": "来週（らいしゅう）の 火曜日（かようび）の 予定（よてい）です。お取（と）り置（お）き しましょうか。",
            "vn": "Dự kiến thứ Ba tuần sau. Tôi giữ hàng cho quý khách nhé?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、お願（ねが）いします。入荷（にゅうか）したら 連絡（れんらく）して いただけますか］。",
            "vn": "Vâng, nhờ chị. Khi hàng về báo giúp tôi được không?"
          },
          {
            "speaker": "店員",
            "jp": "はい。お名前（なまえ）と お電話番号（でんわばんごう）を こちらに お願（ねが）いします。",
            "vn": "Vâng. Xin ghi tên và số điện thoại vào đây."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。今日（きょう）は 目薬（めぐすり）だけ 買（か）います］。",
            "vn": "Vâng. Hôm nay tôi chỉ mua thuốc nhỏ mắt."
          }
        ]
      },
      {
        "id": "track-cd02-d5",
        "title": "Cửa hàng quần áo: thử và đổi size",
        "titleVn": "Cửa hàng quần áo: thử và đổi size",
        "category": "topic",
        "topicId": "cd02",
        "tag": "コンビニ・お店・買い物 · Kịch bản 5",
        "lines": [
          {
            "speaker": "店員",
            "jp": "いらっしゃいませ。何（なに）か お探（さが）しですか。",
            "vn": "Kính chào. Quý khách đang tìm gì ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［冬（ふゆ）の コートを 探（さが）して います］。",
            "vn": "Tôi đang tìm áo khoác mùa đông."
          },
          {
            "speaker": "店員",
            "jp": "こちらの コートは 軽（かる）くて 暖（あたた）かいので、人気（にんき）ですよ。",
            "vn": "Áo này nhẹ và ấm nên được ưa chuộng."
          },
          {
            "speaker": "あなた",
            "jp": "［すてきですね。これを 着（き）て みても いいでしょうか］。",
            "vn": "Đẹp nhỉ. Tôi mặc thử được không ạ?"
          },
          {
            "speaker": "店員",
            "jp": "はい、どうぞ。試着室（しちゃくしつ）は あちらです。サイズは？",
            "vn": "Vâng, mời. Phòng thử ở đằng kia. Size nào ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［Mサイズを お願（ねが）いします］。",
            "vn": "Cho tôi size M."
          },
          {
            "speaker": "店員",
            "jp": "いかがですか。",
            "vn": "Thế nào ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［ちょっと きついです。肩（かた）が 小（ちい）さすぎます］。",
            "vn": "Hơi chật. Vai nhỏ quá."
          },
          {
            "speaker": "店員",
            "jp": "では、Lサイズを お持（も）ち しますね。",
            "vn": "Vậy tôi mang size L ạ."
          },
          {
            "speaker": "あなた",
            "jp": "［Lは ちょうど いいです。でも、袖（そで）が 少（すこ）し 長（なが）いです］。",
            "vn": "(Mặc thử) Size L vừa. Nhưng tay hơi dài."
          },
          {
            "speaker": "店員",
            "jp": "袖（そで）は 直（なお）せますよ。2センチぐらい 短（みじか）く しましょうか。",
            "vn": "Tay áo sửa được. Làm ngắn khoảng 2 cm nhé?"
          },
          {
            "speaker": "あなた",
            "jp": "［お願（ねが）いします。直（なお）すのに 何日（なんにち） かかりますか］。",
            "vn": "Nhờ chị. Sửa mất mấy ngày ạ?"
          },
          {
            "speaker": "店員",
            "jp": "3日（みっか）ぐらいです。無料（むりょう）で できます。",
            "vn": "Khoảng 3 ngày. Miễn phí."
          },
          {
            "speaker": "あなた",
            "jp": "［この 色（いろ）の ほかに、色違（いろちが）いは ありますか］。",
            "vn": "Ngoài màu này có màu khác không ạ?"
          },
          {
            "speaker": "店員",
            "jp": "黒（くろ）と 紺（こん）と ベージュが あります。お客様（きゃくさま）には 紺（こん）が 似合（にあ）うと 思（おも）いますよ。",
            "vn": "Có đen, xanh navy và be. Tôi nghĩ màu navy hợp với quý khách."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、紺（こん）の Lサイズに します。いくらですか］。",
            "vn": "Vậy tôi lấy navy size L. Bao nhiêu ạ?"
          },
          {
            "speaker": "店員",
            "jp": "12,000円（いちまんにせんえん）ですが、今週（こんしゅう）は 2割引（にわりびき）で 9,600円（きゅうせんろっぴゃくえん）です。",
            "vn": "12.000 yên nhưng tuần này giảm 20% còn 9.600 yên."
          },
          {
            "speaker": "あなた",
            "jp": "［安（やす）く なって よかったです。カードで お願（ねが）いします］。",
            "vn": "May quá được rẻ. Trả bằng thẻ nhé."
          }
        ]
      },
      {
        "id": "track-cd02-d6",
        "title": "Mua giày thể thao",
        "titleVn": "Mua giày thể thao",
        "category": "topic",
        "topicId": "cd02",
        "tag": "コンビニ・お店・買い物 · Kịch bản 6",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、歩（ある）きやすい スニーカーを 探（さが）して いるんですが］。",
            "vn": "Xin lỗi, tôi đang tìm giày thể thao dễ đi."
          },
          {
            "speaker": "店員",
            "jp": "どんな ところを 歩（ある）きますか。",
            "vn": "Quý khách đi ở những đâu ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［来月（らいげつ） 京都（きょうと）へ 旅行（りょこう）に 行（い）くので、お寺（てら）や 山道（やまみち）を たくさん 歩（ある）きます］。",
            "vn": "Tháng sau đi Kyoto nên sẽ đi bộ nhiều ở chùa và đường núi."
          },
          {
            "speaker": "店員",
            "jp": "それなら、こちらは いかがですか。滑（すべ）りにくいし、防水（ぼうすい）です。",
            "vn": "Vậy đôi này thì sao? Khó trơn lại chống nước."
          },
          {
            "speaker": "あなた",
            "jp": "［いいですね。履（は）いて みても いいですか］。",
            "vn": "Được đấy. Tôi đi thử được không?"
          },
          {
            "speaker": "店員",
            "jp": "どうぞ。サイズは 何（なん）センチですか。",
            "vn": "Mời. Cỡ bao nhiêu cm ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［26（にじゅうろく）センチです］。",
            "vn": "26 cm."
          },
          {
            "speaker": "店員",
            "jp": "どうぞ。少（すこ）し 歩（ある）いて みて ください。",
            "vn": "Mời. Thử đi vài bước."
          },
          {
            "speaker": "あなた",
            "jp": "［軽（かる）いし、柔（やわ）らかいし、とても 歩（ある）きやすいです］。",
            "vn": "Vừa nhẹ vừa mềm, rất dễ đi."
          },
          {
            "speaker": "店員",
            "jp": "長（なが）く 歩（ある）く なら、少（すこ）し 大（おお）きい ほうが 疲（つか）れにくいですよ。",
            "vn": "Nếu đi lâu thì cỡ hơi to một chút sẽ ít mệt hơn."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、26.5（にじゅうろくてんご）センチも 履（は）いて みます］。",
            "vn": "Vậy tôi thử cả 26,5 cm."
          },
          {
            "speaker": "店員",
            "jp": "いかがですか。",
            "vn": "Thế nào ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［こちらの ほうが 指（ゆび）が 痛（いた）くないです。これに します］。",
            "vn": "Đôi này ngón chân không đau. Tôi lấy đôi này."
          },
          {
            "speaker": "店員",
            "jp": "ありがとうございます。今（いま） セールで 3割引（さんわりびき）に なって おります。",
            "vn": "Cảm ơn quý khách. Hiện đang sale giảm 30%."
          },
          {
            "speaker": "あなた",
            "jp": "［本当（ほんとう）ですか。何円（なんえん）に なりますか］。",
            "vn": "Thật à? Thành bao nhiêu yên?"
          },
          {
            "speaker": "店員",
            "jp": "9,800円（きゅうせんはっぴゃくえん）が 6,860円（ろくせんはっぴゃくろくじゅうえん）です。",
            "vn": "Từ 9.800 yên còn 6.860 yên."
          },
          {
            "speaker": "あなた",
            "jp": "［お得（とく）ですね。サイズが 合（あ）わなかったら、交換（こうかん）できますか］。",
            "vn": "Hời nhỉ. Nếu không vừa thì đổi được không?"
          },
          {
            "speaker": "店員",
            "jp": "外（そと）で 履（は）かなければ、1週間（いっしゅうかん） 以内（いない）なら 交換（こうかん）できます。",
            "vn": "Nếu chưa đi ngoài đường, trong 1 tuần thì đổi được."
          }
        ]
      },
      {
        "id": "track-cd02-d7",
        "title": "Siêu thị: giờ giảm giá và quầy tự thanh toán",
        "titleVn": "Siêu thị: giờ giảm giá và quầy tự thanh toán",
        "category": "topic",
        "topicId": "cd02",
        "tag": "コンビニ・お店・買い物 · Kịch bản 7",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［リン、もう 8時（はちじ）だね。スーパーへ 晩（ばん）ご飯（はん）を 買（か）いに 行（い）かない］？",
            "vn": "Linh, 8 giờ rồi nhỉ. Đi siêu thị mua bữa tối không?"
          },
          {
            "speaker": "リン",
            "jp": "いいね！ 8時（はちじ）から お弁当（べんとう）が 半額（はんがく）に なるから。",
            "vn": "Hay! Vì từ 8 giờ cơm hộp nửa giá."
          },
          {
            "speaker": "あなた",
            "jp": "［見（み）て、この とんかつ弁当（べんとう）、半額（はんがく）の シールが 貼（は）って ある］。",
            "vn": "Nhìn này, hộp cơm tonkatsu dán tem nửa giá rồi."
          },
          {
            "speaker": "リン",
            "jp": "600円（ろっぴゃくえん）が 300円（さんびゃくえん）！ 安（やす）い！",
            "vn": "600 yên còn 300! Rẻ quá!"
          },
          {
            "speaker": "あなた",
            "jp": "［賞味期限（しょうみきげん）は 今日（きょう）までだから、今晩（こんばん） 食（た）べないと いけないね］。",
            "vn": "Hạn đến hôm nay nên tối nay phải ăn nhỉ."
          },
          {
            "speaker": "リン",
            "jp": "うん。私（わたし）は お寿司（すし）に しよう。",
            "vn": "Ừ. Mình chọn sushi."
          },
          {
            "speaker": "あなた",
            "jp": "［私（わたし）は お惣菜（そうざい）の サラダも 買（か）う。野菜（やさい）も 食（た）べないと］。",
            "vn": "Mình mua thêm salad làm sẵn. Phải ăn cả rau nữa."
          },
          {
            "speaker": "リン",
            "jp": "えらい！ 明日（あした）の 朝（あさ）ご飯（はん）は？",
            "vn": "Giỏi! Bữa sáng mai thì sao?"
          },
          {
            "speaker": "あなた",
            "jp": "［パンと 牛乳（ぎゅうにゅう）を 買（か）って おく］。",
            "vn": "Mình mua sẵn bánh mì và sữa."
          },
          {
            "speaker": "リン",
            "jp": "じゃ、セルフレジで 払（はら）おう。空（あ）いて いるよ。",
            "vn": "Vậy trả ở quầy tự thanh toán đi. Đang trống kìa."
          },
          {
            "speaker": "あなた",
            "jp": "［セルフレジ、使（つか）った ことが ないんだ。使（つか）い方（かた）、教（おし）えて］。",
            "vn": "Mình chưa dùng quầy tự thanh toán bao giờ. Chỉ mình cách dùng với."
          },
          {
            "speaker": "リン",
            "jp": "まず バーコードを ここに かざして。ピッて 鳴（な）ったら OK。",
            "vn": "Trước tiên giơ mã vạch vào đây. Kêu \"pít\" là OK."
          },
          {
            "speaker": "あなた",
            "jp": "［全部（ぜんぶ） 読（よ）み取（と）ったら、次（つぎ）は］？",
            "vn": "Quét hết rồi thì tiếp theo?"
          },
          {
            "speaker": "リン",
            "jp": "「お会計（かいけい）」を 押（お）して、支払（しはら）い方法（ほうほう）を 選（えら）ぶの。",
            "vn": "Bấm \"Thanh toán\" rồi chọn cách trả."
          },
          {
            "speaker": "あなた",
            "jp": "［現金（げんきん）に する。……あ、おつりが 出（で）た］。",
            "vn": "Mình chọn tiền mặt... À, tiền thối ra rồi."
          },
          {
            "speaker": "リン",
            "jp": "レシートも 忘（わす）れないで。",
            "vn": "Đừng quên hóa đơn."
          },
          {
            "speaker": "あなた",
            "jp": "［うん。簡単（かんたん）だね。次（つぎ）から 一人（ひとり）で できる］。",
            "vn": "Ừ. Dễ nhỉ. Lần sau mình tự làm được."
          }
        ]
      },
      {
        "id": "track-cd02-d8",
        "title": "Đổi túi bị bẩn",
        "titleVn": "Đổi túi bị bẩn",
        "category": "topic",
        "topicId": "cd02",
        "tag": "コンビニ・お店・買い物 · Kịch bản 8",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、昨日（きのう） ここで この かばんを 買（か）ったんですが］。",
            "vn": "Xin lỗi, hôm qua tôi mua túi này ở đây."
          },
          {
            "speaker": "店員",
            "jp": "はい。どう されましたか。",
            "vn": "Vâng. Có vấn đề gì ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［家（いえ）で 見（み）たら、ここに 黒（くろ）い 汚（よご）れが あったんです］。",
            "vn": "Về nhà xem thì thấy chỗ này có vết bẩn đen."
          },
          {
            "speaker": "店員",
            "jp": "大変（たいへん） 申（もう）し訳（わけ）ございません。拝見（はいけん）します。",
            "vn": "Thành thật xin lỗi. Cho tôi xem."
          },
          {
            "speaker": "あなた",
            "jp": "［使（つか）って いません。袋（ふくろ）から 出（だ）しただけです］。",
            "vn": "Tôi chưa dùng. Chỉ lấy ra khỏi túi thôi."
          },
          {
            "speaker": "店員",
            "jp": "確（たし）かに 汚（よご）れて いますね。レシートは お持（も）ちですか。",
            "vn": "Đúng là bị bẩn. Quý khách có hóa đơn không ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、これです。新（あたら）しい 物（もの）と 交換（こうかん）して いただけませんか］。",
            "vn": "Vâng, đây. Đổi giúp tôi cái mới được không ạ?"
          },
          {
            "speaker": "店員",
            "jp": "同（おな）じ 色（いろ）の 在庫（ざいこ）が あるか どうか、確認（かくにん）して まいります。",
            "vn": "Tôi đi kiểm tra xem còn hàng cùng màu không."
          },
          {
            "speaker": "店員",
            "jp": "お待（ま）たせ しました。同（おな）じ 白（しろ）が 1つ ございました。",
            "vn": "Xin lỗi đã để chờ. Còn 1 cái màu trắng ạ."
          },
          {
            "speaker": "あなた",
            "jp": "［よかった。今（いま） 確認（かくにん）しても いいですか］。",
            "vn": "May quá. Tôi kiểm tra bây giờ được không?"
          },
          {
            "speaker": "店員",
            "jp": "はい、どうぞ ご確認（かくにん）ください。",
            "vn": "Vâng, xin mời kiểm tra."
          },
          {
            "speaker": "あなた",
            "jp": "［大丈夫（だいじょうぶ）です。汚（よご）れも 傷（きず）も ありません］。",
            "vn": "...Ổn rồi. Không bẩn cũng không xước."
          },
          {
            "speaker": "店員",
            "jp": "ご迷惑（めいわく）を おかけしました。こちら、お詫（わ）びの 小（ちい）さな ハンカチです。",
            "vn": "Xin lỗi đã gây phiền. Đây là chiếc khăn tay nhỏ để xin lỗi."
          },
          {
            "speaker": "あなた",
            "jp": "［えっ、いいんですか。ありがとうございます］。",
            "vn": "Hả, được ạ? Cảm ơn."
          },
          {
            "speaker": "店員",
            "jp": "もし また 何（なに）か あったら、お知（し）らせください。",
            "vn": "Nếu có gì nữa xin báo chúng tôi."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。丁寧（ていねい）に 対応（たいおう）して くださって、ありがとうございました］。",
            "vn": "Vâng. Cảm ơn đã xử lý chu đáo."
          }
        ]
      },
      {
        "id": "track-cd02-d9",
        "title": "Trả hàng hỏng và hoàn tiền",
        "titleVn": "Trả hàng hỏng và hoàn tiền",
        "category": "topic",
        "topicId": "cd02",
        "tag": "コンビニ・お店・買い物 · Kịch bản 9",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、おととい 買（か）った この 電子辞書（でんしじしょ）なんですが］。",
            "vn": "Xin lỗi, về chiếc kim từ điển tôi mua hôm kia."
          },
          {
            "speaker": "店員",
            "jp": "はい、どう されましたか。",
            "vn": "Vâng, có vấn đề gì ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［ボタンが 壊（こわ）れて いて、使（つか）えないんです］。",
            "vn": "Nút bị hỏng nên không dùng được."
          },
          {
            "speaker": "店員",
            "jp": "恐（おそ）れ入（い）ります。少（すこ）し 見（み）せて いただけますか。",
            "vn": "Xin lỗi quý khách. Cho tôi xem một chút được không ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、この 「決定（けってい）」ボタンが 押（お）しても 反応（はんのう）しません］。",
            "vn": "Vâng, nút \"Quyết định\" này bấm cũng không phản hồi."
          },
          {
            "speaker": "店員",
            "jp": "確（たし）かに 故障（こしょう）ですね。新（あたら）しい 物（もの）と 交換（こうかん）したいんですが、同（おな）じ 商品（しょうひん）が 今（いま） 売（う）り切（き）れて おります。",
            "vn": "Đúng là hỏng. Muốn đổi cái mới nhưng sản phẩm cùng loại đang hết hàng."
          },
          {
            "speaker": "あなた",
            "jp": "［そうですか。いつ 入（はい）りますか］。",
            "vn": "Vậy à. Khi nào có hàng ạ?"
          },
          {
            "speaker": "店員",
            "jp": "取（と）り寄（よ）せに 2週間（にしゅうかん）ぐらい かかります。",
            "vn": "Đặt hàng về mất khoảng 2 tuần."
          },
          {
            "speaker": "あなた",
            "jp": "［来週（らいしゅう） 試験（しけん）が あるので、待（ま）てないんです］。",
            "vn": "Tuần sau tôi có thi nên không đợi được."
          },
          {
            "speaker": "店員",
            "jp": "そうですか。では、返品（へんぴん）に しますか、それとも 別（べつ）の 機種（きしゅ）と 交換（こうかん）しますか。",
            "vn": "Vậy ạ. Vậy quý khách trả hàng, hay đổi sang mẫu khác?"
          },
          {
            "speaker": "あなた",
            "jp": "［別（べつ）の 機種（きしゅ）は いくらですか］。",
            "vn": "Mẫu khác giá bao nhiêu?"
          },
          {
            "speaker": "店員",
            "jp": "こちらは 3,000円（さんぜんえん） 高（たか）いです。",
            "vn": "Mẫu này đắt hơn 3.000 yên."
          },
          {
            "speaker": "あなた",
            "jp": "［ちょっと 高（たか）いですね。じゃ、返品（へんぴん）して、お金（かね）を 返（かえ）して もらう ことは できますか］。",
            "vn": "Hơi đắt nhỉ. Vậy tôi trả hàng và nhận lại tiền được không?"
          },
          {
            "speaker": "店員",
            "jp": "はい、できます。お支払（しはら）いは カードでしたか。",
            "vn": "Vâng, được ạ. Lúc trước quý khách trả bằng thẻ phải không?"
          },
          {
            "speaker": "あなた",
            "jp": "［いいえ、現金（げんきん）でした。現金（げんきん）で 返（かえ）して いただけますか］。",
            "vn": "Không, tiền mặt. Hoàn lại tiền mặt được không ạ?"
          },
          {
            "speaker": "店員",
            "jp": "はい。こちら、24,800円（にまんよんせんはっぴゃくえん）の ご返金（へんきん）です。ご確認（かくにん）ください。",
            "vn": "Vâng. Đây là 24.800 yên hoàn lại. Xin kiểm tra."
          },
          {
            "speaker": "あなた",
            "jp": "［確（たし）かに。ありがとうございました］。",
            "vn": "Đúng rồi. Cảm ơn."
          }
        ]
      },
      {
        "id": "track-cd02-d10",
        "title": "Mua quà lưu niệm và gói quà",
        "titleVn": "Mua quà lưu niệm và gói quà",
        "category": "topic",
        "topicId": "cd02",
        "tag": "コンビニ・お店・買い物 · Kịch bản 10",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、ベトナムの 家族（かぞく）に お土産（みやげ）を 買（か）いたいんですが、何（なに）が いいでしょうか］。",
            "vn": "Xin lỗi, tôi muốn mua quà cho gia đình ở VN, cái gì hay ạ?"
          },
          {
            "speaker": "店員",
            "jp": "外国（がいこく）の 方（かた）への お土産（みやげ）なら、抹茶（まっちゃ）の お菓子（かし）が 人気（にんき）ですよ。",
            "vn": "Quà cho người nước ngoài thì bánh trà xanh được ưa chuộng."
          },
          {
            "speaker": "あなた",
            "jp": "［母（はは）は 甘（あま）い 物（もの）が 苦手（にがて）なんですが、甘（あま）すぎませんか］。",
            "vn": "Mẹ tôi không thích đồ ngọt, có ngọt quá không ạ?"
          },
          {
            "speaker": "店員",
            "jp": "こちらの 抹茶（まっちゃ）チョコは 少（すこ）し 苦（にが）くて、甘（あま）すぎませんよ。試食（ししょく）も できます。",
            "vn": "Socola trà xanh này hơi đắng, không ngọt quá. Có thể ăn thử."
          },
          {
            "speaker": "あなた",
            "jp": "［おいしいです。これなら 母（はは）も 好（す）きだと 思（おも）います］。",
            "vn": "(Ăn thử) Ngon. Loại này chắc mẹ tôi cũng thích."
          },
          {
            "speaker": "店員",
            "jp": "飛行機（ひこうき）で 持（も）って 帰（かえ）りますか。",
            "vn": "Quý khách mang về bằng máy bay ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい。来週（らいしゅう） 帰（かえ）るので、日持（ひも）ちする 物（もの）が いいです］。",
            "vn": "Vâng. Tuần sau tôi về nên muốn đồ để được lâu."
          },
          {
            "speaker": "店員",
            "jp": "こちらは 2か月（にかげつ） 大丈夫（だいじょうぶ）です。個包装（こほうそう）なので、配（くば）りやすいですよ。",
            "vn": "Loại này để được 2 tháng. Gói từng cái nên dễ chia."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、これを 3箱（さんはこ） ください。それから、父（ちち）には 扇子（せんす）を 買（か）いたいです］。",
            "vn": "Vậy cho tôi 3 hộp. Ngoài ra tôi muốn mua quạt giấy cho bố."
          },
          {
            "speaker": "店員",
            "jp": "扇子（せんす）は こちらです。男性（だんせい）用（よう）は 少（すこ）し 大（おお）きいです。",
            "vn": "Quạt ở đây. Loại cho nam hơi lớn hơn."
          },
          {
            "speaker": "あなた",
            "jp": "［この 紺色（こんいろ）の 扇子（せんす）に します］。",
            "vn": "Tôi lấy chiếc quạt màu navy này."
          },
          {
            "speaker": "店員",
            "jp": "プレゼント用（よう）に お包（つつ）み しますか。",
            "vn": "Có gói làm quà không ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい。お菓子（かし）と 扇子（せんす）を 別々（べつべつ）に 包（つつ）んで いただけますか］。",
            "vn": "Có. Gói riêng bánh và quạt giúp tôi được không?"
          },
          {
            "speaker": "店員",
            "jp": "かしこまりました。合計（ごうけい）で 6,200円（ろくせんにひゃくえん）ですので、免税（めんぜい）も できますが。",
            "vn": "Vâng ạ. Tổng 6.200 yên nên cũng có thể miễn thuế."
          },
          {
            "speaker": "あなた",
            "jp": "［私（わたし）は 留学生（りゅうがくせい）で、日本（にほん）に 住（す）んで いるので、免税（めんぜい）は できないと 思（おも）います］。",
            "vn": "Tôi là du học sinh sống ở Nhật nên chắc không được miễn thuế."
          },
          {
            "speaker": "店員",
            "jp": "そうですね。在留（ざいりゅう）カードを お持（も）ちの 方（かた）は 対象外（たいしょうがい）です。",
            "vn": "Đúng vậy. Người có thẻ cư trú không thuộc diện."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。カードで お願（ねが）いします］。",
            "vn": "Tôi hiểu. Trả bằng thẻ nhé."
          }
        ]
      }
    ]
  },
  {
    "id": "pl-cd01",
    "title": "学校（がっこう）・先生（せんせい）との連絡（れんらく）",
    "titleVn": "Trường học & Giao tiếp với thầy cô (Ưu tiên 1)",
    "description": "Trọn bộ 10 kịch bản đối thoại nhập vai thực tế trong tình huống: Trường học & Giao tiếp với thầy cô (Ưu tiên 1).",
    "category": "topic",
    "badge": "🏫 TRƯỜNG HỌC",
    "accentColor": "from-blue-500/20 to-cyan-500/10 border-blue-500/40 text-blue-600",
    "tracks": [
      {
        "id": "track-cd01-d1",
        "title": "Đến phòng giáo viên xin tư vấn",
        "titleVn": "Đến phòng giáo viên xin tư vấn",
        "category": "topic",
        "topicId": "cd01",
        "tag": "学校・先生との連絡 · Kịch bản 1",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［失礼（しつれい）いたします。1年（いちねん）Aクラスの グエン・ミンと 申（もう）します］。",
            "vn": "Em xin phép ạ. Em là Nguyễn Minh lớp 1A."
          },
          {
            "speaker": "山田先生",
            "jp": "はい、どうぞ。",
            "vn": "Ừ, mời em."
          },
          {
            "speaker": "あなた",
            "jp": "［山田（やまだ）先生（せんせい）は いらっしゃいますか］。",
            "vn": "Thầy Yamada có ở đây không ạ?"
          },
          {
            "speaker": "山田先生",
            "jp": "私（わたし）ですよ。どう しましたか。",
            "vn": "Thầy đây. Có chuyện gì thế?"
          },
          {
            "speaker": "あなた",
            "jp": "［お忙（いそが）しいところ すみません。今（いま）、少（すこ）し お時間（じかん） よろしいでしょうか］。",
            "vn": "Xin lỗi lúc thầy bận. Bây giờ thầy có chút thời gian không ạ?"
          },
          {
            "speaker": "山田先生",
            "jp": "ええ、10分（じゅっぷん）ぐらいなら 大丈夫（だいじょうぶ）ですよ。",
            "vn": "Ừ, khoảng 10 phút thì được."
          },
          {
            "speaker": "あなた",
            "jp": "［実（じつ）は、大学（だいがく）への 進学（しんがく）について 相談（そうだん）したいんですが］。",
            "vn": "Thật ra em muốn xin ý kiến về việc học lên đại học."
          },
          {
            "speaker": "山田先生",
            "jp": "いいですね。志望校（しぼうこう）は もう 決（き）まって いますか。",
            "vn": "Tốt quá. Trường nguyện vọng đã quyết chưa?"
          },
          {
            "speaker": "あなた",
            "jp": "［まだ 決（き）まって いません。経済（けいざい）を 勉強（べんきょう）したいんですが、どの 大学（だいがく）が いいか わかりません］。",
            "vn": "Chưa ạ. Em muốn học kinh tế nhưng không biết trường nào tốt."
          },
          {
            "speaker": "山田先生",
            "jp": "そうですか。日本語（にほんご）能力（のうりょく）試験（しけん）は 何級（なんきゅう）を 持（も）って いますか。",
            "vn": "Vậy à. Em có chứng chỉ năng lực tiếng Nhật cấp mấy?"
          },
          {
            "speaker": "あなた",
            "jp": "［今（いま）は N4です。12月（じゅうにがつ）に N3を 受（う）ける 予定（よてい）です］。",
            "vn": "Hiện là N4. Tháng 12 em dự kiến thi N3."
          },
          {
            "speaker": "山田先生",
            "jp": "なるほど。じゃ、N3で 受（う）けられる 大学（だいがく）の リストを 作（つく）って おきますね。",
            "vn": "Ra vậy. Vậy thầy làm sẵn danh sách trường nhận N3 nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。願書（がんしょ）の 締（し）め切（き）りは いつごろですか］。",
            "vn": "Cảm ơn thầy. Hạn nộp hồ sơ khoảng khi nào ạ?"
          },
          {
            "speaker": "山田先生",
            "jp": "大学（だいがく）に よって 違（ちが）いますが、だいたい 10月（じゅうがつ）から 1月（いちがつ）です。",
            "vn": "Tùy trường, nhưng thường từ tháng 10 đến tháng 1."
          },
          {
            "speaker": "あなた",
            "jp": "［奨学金（しょうがくきん）が もらえるか どうかも 知（し）りたいんですが］。",
            "vn": "Em cũng muốn biết có nhận được học bổng hay không."
          },
          {
            "speaker": "山田先生",
            "jp": "成績（せいせき）が よければ、もらえる 可能性（かのうせい）が ありますよ。来週（らいしゅう） また 来（き）て ください。",
            "vn": "Nếu thành tích tốt thì có khả năng nhận được. Tuần sau lại đến nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、来週（らいしゅう） また 伺（うかが）います。ありがとうございました。失礼（しつれい）いたします］。",
            "vn": "Vâng, tuần sau em lại đến. Cảm ơn thầy. Em xin phép."
          }
        ]
      },
      {
        "id": "track-cd01-d2",
        "title": "Gọi điện xin nghỉ học vì sốt",
        "titleVn": "Gọi điện xin nghỉ học vì sốt",
        "category": "topic",
        "topicId": "cd01",
        "tag": "学校・先生との連絡 · Kịch bản 2",
        "lines": [
          {
            "speaker": "事務・先生",
            "jp": "はい、さくら日本語学校（にほんごがっこう）です。",
            "vn": "Vâng, trường tiếng Nhật Sakura xin nghe."
          },
          {
            "speaker": "あなた",
            "jp": "［朝（あさ） 早（はや）く すみません。1年（いちねん）Aクラスの グエン・ミンと 申（もう）します］。",
            "vn": "Xin lỗi gọi sớm ạ. Em là Nguyễn Minh lớp 1A."
          },
          {
            "speaker": "事務・先生",
            "jp": "ああ、ミンさん。山田（やまだ）です。どう しましたか。",
            "vn": "À, Minh à. Thầy Yamada đây. Có chuyện gì thế?"
          },
          {
            "speaker": "あなた",
            "jp": "［実（じつ）は 昨夜（ゆうべ）から 熱（ねつ）が あるんです］。",
            "vn": "Thật ra từ tối qua em bị sốt."
          },
          {
            "speaker": "事務・先生",
            "jp": "それは 大変（たいへん）ですね。何度（なんど）ありますか。",
            "vn": "Vất vả quá. Sốt bao nhiêu độ?"
          },
          {
            "speaker": "あなた",
            "jp": "［38度（さんじゅうはちど） 5分（ごぶ）です。頭（あたま）も 痛（いた）くて、咳（せき）も 出（で）ます］。",
            "vn": "38,5 độ. Em cũng đau đầu và ho."
          },
          {
            "speaker": "事務・先生",
            "jp": "病院（びょういん）へは 行（い）きましたか。",
            "vn": "Em đi bệnh viện chưa?"
          },
          {
            "speaker": "あなた",
            "jp": "［これから 行（い）く つもりです。今日（きょう）の 授業（じゅぎょう）を 休（やす）ませて いただけませんか］。",
            "vn": "Em định đi bây giờ. Cho em nghỉ buổi học hôm nay được không ạ?"
          },
          {
            "speaker": "事務・先生",
            "jp": "わかりました。欠席（けっせき）に しておきますね。",
            "vn": "Thầy hiểu. Thầy sẽ ghi vắng mặt."
          },
          {
            "speaker": "あなた",
            "jp": "［診断書（しんだんしょ）を 出（だ）さなければ なりませんか］。",
            "vn": "Em có phải nộp giấy chẩn đoán không ạ?"
          },
          {
            "speaker": "事務・先生",
            "jp": "3日（みっか）以上（いじょう） 休（やす）む 時（とき）は 必要（ひつよう）です。今日（きょう）だけなら 要（い）りません。",
            "vn": "Nghỉ từ 3 ngày trở lên thì cần. Chỉ hôm nay thì không cần."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。今日（きょう）の 宿題（しゅくだい）は 何（なん）か、後（あと）で 教（おし）えて いただけませんか］。",
            "vn": "Em hiểu. Bài tập hôm nay là gì, lát thầy cho em biết được không ạ?"
          },
          {
            "speaker": "事務・先生",
            "jp": "授業（じゅぎょう）の 後（あと）で メールしますね。",
            "vn": "Sau giờ học thầy sẽ email."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。助（たす）かります］。",
            "vn": "Cảm ơn thầy. Giúp em nhiều quá."
          },
          {
            "speaker": "事務・先生",
            "jp": "インフルエンザかも しれないから、検査（けんさ）した ほうが いいですよ。",
            "vn": "Có thể là cúm nên em nên xét nghiệm."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、病院（びょういん）で 聞（き）いて みます。結果（けっか）が わかったら、連絡（れんらく）します］。",
            "vn": "Vâng, em sẽ hỏi ở bệnh viện. Biết kết quả em sẽ báo."
          },
          {
            "speaker": "事務・先生",
            "jp": "お願（ねが）いします。お大事（だいじ）に。",
            "vn": "Nhờ em. Mau khỏe nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。失礼（しつれい）します］。",
            "vn": "Cảm ơn thầy. Em xin phép cúp máy."
          }
        ]
      },
      {
        "id": "track-cd01-d3",
        "title": "Đến lớp muộn vì tàu trễ",
        "titleVn": "Đến lớp muộn vì tàu trễ",
        "category": "topic",
        "topicId": "cd01",
        "tag": "学校・先生との連絡 · Kịch bản 3",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［失礼（しつれい）いたします。遅（おく）れて、申（もう）し訳（わけ）ありません］。",
            "vn": "Em xin phép. Em xin lỗi vì đến muộn."
          },
          {
            "speaker": "佐藤先生",
            "jp": "ミンさん、どう しましたか。もう 9時（くじ）20分（にじゅっぷん）ですよ。",
            "vn": "Minh, sao vậy? Đã 9 giờ 20 rồi."
          },
          {
            "speaker": "あなた",
            "jp": "［電車（でんしゃ）が 人身事故（じんしんじこ）で 止（と）まって しまったんです］。",
            "vn": "Tàu bị dừng do tai nạn người ạ."
          },
          {
            "speaker": "佐藤先生",
            "jp": "そうですか。大変（たいへん）でしたね。",
            "vn": "Vậy à. Vất vả nhỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［20分（にじゅっぷん）ぐらい 電車（でんしゃ）の 中（なか）で 待（ま）って いました］。",
            "vn": "Em đã đợi trong tàu khoảng 20 phút."
          },
          {
            "speaker": "佐藤先生",
            "jp": "遅延証明書（ちえんしょうめいしょ）は もらいましたか。",
            "vn": "Em lấy giấy chứng nhận tàu trễ chưa?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、駅（えき）で もらいました。どこに 出（だ）せば いいですか］。",
            "vn": "Rồi ạ, em lấy ở ga. Nộp ở đâu thì được ạ?"
          },
          {
            "speaker": "佐藤先生",
            "jp": "授業（じゅぎょう）の 後（あと）で、1階（いっかい）の 事務室（じむしつ）に 出（だ）して ください。",
            "vn": "Sau giờ học nộp ở văn phòng tầng 1."
          },
          {
            "speaker": "あなた",
            "jp": "［遅刻（ちこく）に なりますか］。",
            "vn": "Có bị tính là đi muộn không ạ?"
          },
          {
            "speaker": "佐藤先生",
            "jp": "証明書（しょうめいしょ）が あれば、遅刻（ちこく）に なりません。出席（しゅっせき）に なりますよ。",
            "vn": "Có giấy chứng nhận thì không tính muộn. Được tính có mặt."
          },
          {
            "speaker": "あなた",
            "jp": "［よかったです。今（いま）、教科書（きょうかしょ）の 何（なん）ページですか］。",
            "vn": "May quá. Bây giờ đang ở trang mấy sách ạ?"
          },
          {
            "speaker": "佐藤先生",
            "jp": "45ページです。隣（となり）の キムさんに 見（み）せて もらって ください。",
            "vn": "Trang 45. Nhờ Kim bên cạnh cho xem."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。キムさん、すみません。今（いま） 何（なに）を して いますか］。",
            "vn": "Vâng. Kim, xin lỗi. Giờ đang làm gì vậy?"
          },
          {
            "speaker": "キム",
            "jp": "練習（れんしゅう）問題（もんだい）の 3番（さんばん）だよ。",
            "vn": "Bài luyện tập số 3 đấy."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとう。後（あと）で 最初（さいしょ）の 説明（せつめい）を 教（おし）えて もらえる］？",
            "vn": "Cảm ơn. Lát chỉ mình phần giải thích đầu giờ được không?"
          },
          {
            "speaker": "キム",
            "jp": "いいよ。",
            "vn": "Được."
          },
          {
            "speaker": "あなた",
            "jp": "［先生（せんせい）、次（つぎ）から もっと 早（はや）く 家（いえ）を 出（で）ます］。",
            "vn": "Thưa cô, từ lần sau em sẽ ra khỏi nhà sớm hơn."
          }
        ]
      },
      {
        "id": "track-cd01-d4",
        "title": "Nhờ thầy sửa bài văn học bổng",
        "titleVn": "Nhờ thầy sửa bài văn học bổng",
        "category": "topic",
        "topicId": "cd01",
        "tag": "学校・先生との連絡 · Kịch bản 4",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［田中（たなか）先生（せんせい）、お忙（いそが）しいところ すみません］。",
            "vn": "Thầy Tanaka, xin lỗi lúc thầy bận."
          },
          {
            "speaker": "田中先生",
            "jp": "いいえ。どう しましたか。",
            "vn": "Không sao. Có chuyện gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［来月（らいげつ）、奨学金（しょうがくきん）に 応募（おうぼ）したいんですが、作文（さくぶん）を 見（み）て いただけませんか］。",
            "vn": "Tháng sau em muốn ứng tuyển học bổng, thầy xem giúp bài văn được không ạ?"
          },
          {
            "speaker": "田中先生",
            "jp": "いいですよ。拝見（はいけん）しましょう。どんな 奨学金（しょうがくきん）ですか。",
            "vn": "Được. Để thầy xem. Học bổng gì vậy?"
          },
          {
            "speaker": "あなた",
            "jp": "［留学生（りゅうがくせい）の ための 奨学金（しょうがくきん）で、毎月（まいつき） 5万円（ごまんえん） もらえます］。",
            "vn": "Học bổng cho du học sinh, mỗi tháng nhận 5 vạn yên."
          },
          {
            "speaker": "田中先生",
            "jp": "それは いいですね。締（し）め切（き）りは いつですか。",
            "vn": "Tốt quá. Hạn là khi nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［来週（らいしゅう）の 金曜日（きんようび）です］。",
            "vn": "Thứ Sáu tuần sau ạ."
          },
          {
            "speaker": "田中先生",
            "jp": "じゃ、水曜日（すいようび）までに 直（なお）して おきます。",
            "vn": "Vậy thầy sửa xong trước thứ Tư."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。木曜日（もくようび）に また 伺（うかが）っても よろしいでしょうか］。",
            "vn": "Cảm ơn thầy. Thứ Năm em đến lại được không ạ?"
          },
          {
            "speaker": "田中先生",
            "jp": "木曜日（もくようび）の 2時（にじ）なら 研究室（けんきゅうしつ）に いますよ。",
            "vn": "2 giờ thứ Năm thầy ở phòng nghiên cứu."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。2時（にじ）に 伺（うかが）います］。",
            "vn": "Em hiểu. 2 giờ em sẽ đến."
          },
          {
            "speaker": "田中先生",
            "jp": "ミンさん、読（よ）みましたよ。内容（ないよう）は いいですが、文法（ぶんぽう）の 間違（まちが）いが 少（すこ）し あります。",
            "vn": "(Thứ Năm) Minh, thầy đọc rồi. Nội dung tốt nhưng có vài lỗi ngữ pháp."
          },
          {
            "speaker": "あなた",
            "jp": "［どこが 間違（まちが）って いるか、教（おし）えて いただけませんか］。",
            "vn": "Thầy chỉ giúp em chỗ nào sai được không ạ?"
          },
          {
            "speaker": "田中先生",
            "jp": "赤（あか）で 書（か）いて おきました。それから、もっと 具体的（ぐたいてき）に 書（か）くと いいですよ。",
            "vn": "Thầy đã ghi màu đỏ. Ngoài ra viết cụ thể hơn thì tốt."
          },
          {
            "speaker": "あなた",
            "jp": "［具体的（ぐたいてき）に、ですね。例（たと）えば、どんな ことを 書（か）けば いいですか］。",
            "vn": "Cụ thể hơn nhỉ. Ví dụ em nên viết những gì ạ?"
          },
          {
            "speaker": "田中先生",
            "jp": "日本（にほん）で 何（なに）を 勉強（べんきょう）して、将来（しょうらい） 何（なに）を したいか、書（か）いて ください。",
            "vn": "Hãy viết em học gì ở Nhật và tương lai muốn làm gì."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。今晩（こんばん） 書（か）き直（なお）します。本当（ほんとう）に ありがとうございました］。",
            "vn": "Em hiểu. Tối nay em viết lại. Em thật sự cảm ơn thầy."
          }
        ]
      },
      {
        "id": "track-cd01-d5",
        "title": "Quên bài tập, xin nộp muộn",
        "titleVn": "Quên bài tập, xin nộp muộn",
        "category": "topic",
        "topicId": "cd01",
        "tag": "学校・先生との連絡 · Kịch bản 5",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［佐藤（さとう）先生（せんせい）、誠（まこと）に すみません］。",
            "vn": "Thưa cô Sato, em thực sự xin lỗi."
          },
          {
            "speaker": "佐藤先生",
            "jp": "どう しましたか。",
            "vn": "Có chuyện gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［今日（きょう） 提出（ていしゅつ）の 漢字（かんじ）の 宿題（しゅくだい）を 家（いえ）に 忘（わす）れて しまいました］。",
            "vn": "Em lỡ để quên bài tập chữ Hán phải nộp hôm nay ở nhà."
          },
          {
            "speaker": "佐藤先生",
            "jp": "あら。もう 全部（ぜんぶ） やって ありますか。",
            "vn": "Ồ. Em làm hết rồi chứ?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、昨日（きのう）の 夜（よる） 全部（ぜんぶ） 書（か）きました］。",
            "vn": "Vâng, tối qua em viết hết rồi."
          },
          {
            "speaker": "佐藤先生",
            "jp": "じゃ、どう しますか。",
            "vn": "Vậy em định thế nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［明日（あした）の 朝（あさ） 9時（くじ）までに 提出（ていしゅつ）させて いただけませんか］。",
            "vn": "Cho em nộp trước 9 giờ sáng mai được không ạ?"
          },
          {
            "speaker": "佐藤先生",
            "jp": "そうですね……。今日（きょう）が 締（し）め切（き）りですから、少（すこ）し 減点（げんてん）に なりますよ。",
            "vn": "Ừm... Hôm nay là hạn nên sẽ bị trừ chút điểm đấy."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、わかって います。写真（しゃしん）を 撮（と）って、今日（きょう） メールで 送（おく）っても いいですか］。",
            "vn": "Vâng, em hiểu. Em chụp ảnh gửi email hôm nay được không ạ?"
          },
          {
            "speaker": "佐藤先生",
            "jp": "いい 考（かんが）えですね。今日（きょう）中（じゅう）に 写真（しゃしん）を 送（おく）ったら、減点（げんてん）は しません。",
            "vn": "Ý hay đấy. Nếu gửi ảnh trong hôm nay thì cô không trừ điểm."
          },
          {
            "speaker": "あなた",
            "jp": "［本当（ほんとう）ですか。ありがとうございます！ 帰（かえ）ったら すぐ 送（おく）ります］。",
            "vn": "Thật ạ? Em cảm ơn cô! Về nhà em gửi ngay."
          },
          {
            "speaker": "佐藤先生",
            "jp": "ノートは 明日（あした） 持（も）って 来（き）て くださいね。",
            "vn": "Vở thì mai mang đến nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。明日（あした）の 朝（あさ）、職員室（しょくいんしつ）に 持（も）って 行（い）きます］。",
            "vn": "Vâng. Sáng mai em mang đến phòng giáo viên."
          },
          {
            "speaker": "佐藤先生",
            "jp": "これから 気（き）を つけて くださいね。",
            "vn": "Từ giờ cẩn thận nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。前（まえ）の 日（ひ）の 夜（よる）に かばんに 入（い）れる ように します］。",
            "vn": "Vâng. Em sẽ cố bỏ vào cặp từ tối hôm trước."
          },
          {
            "speaker": "佐藤先生",
            "jp": "いい 習慣（しゅうかん）ですね。じゃ、メール 待（ま）って います。",
            "vn": "Thói quen tốt đấy. Vậy cô đợi email."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。失礼（しつれい）します］。",
            "vn": "Vâng. Em xin phép."
          }
        ]
      },
      {
        "id": "track-cd01-d6",
        "title": "Hỏi lại ngữ pháp sau giờ học",
        "titleVn": "Hỏi lại ngữ pháp sau giờ học",
        "category": "topic",
        "topicId": "cd01",
        "tag": "学校・先生との連絡 · Kịch bản 6",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［先生（せんせい）、ちょっと 質問（しつもん）しても いいですか］。",
            "vn": "Thưa thầy, em hỏi chút được không ạ?"
          },
          {
            "speaker": "山田先生",
            "jp": "どうぞ。",
            "vn": "Mời em."
          },
          {
            "speaker": "あなた",
            "jp": "［さっきの 授業（じゅぎょう）の 文法（ぶんぽう）が よく わからないんですが］。",
            "vn": "Ngữ pháp tiết vừa rồi em chưa hiểu rõ ạ."
          },
          {
            "speaker": "山田先生",
            "jp": "尊敬語（そんけいご）と 謙譲語（けんじょうご）ですね。どこが わかりませんか。",
            "vn": "Tôn kính ngữ và khiêm nhường ngữ nhỉ. Em không hiểu chỗ nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［いつ 「いらっしゃいます」を 使（つか）って、いつ 「参（まい）ります」を 使（つか）うか、わかりません］。",
            "vn": "Em không biết khi nào dùng \"irasshaimasu\", khi nào dùng \"mairimasu\"."
          },
          {
            "speaker": "山田先生",
            "jp": "相手（あいて）の 行動（こうどう）には 「いらっしゃいます」、自分（じぶん）の 行動（こうどう）には 「参（まい）ります」を 使（つか）います。",
            "vn": "Hành động của người kia dùng \"irasshaimasu\", của mình dùng \"mairimasu\"."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、「先生（せんせい）は 明日（あした） 大阪（おおさか）へ いらっしゃいます」は 正（ただ）しいですか］。",
            "vn": "Vậy câu \"Thầy mai đi Osaka (irasshaimasu)\" đúng không ạ?"
          },
          {
            "speaker": "山田先生",
            "jp": "はい、正（ただ）しいです。自分（じぶん）の 場合（ばあい）は？",
            "vn": "Đúng. Còn trường hợp của mình?"
          },
          {
            "speaker": "あなた",
            "jp": "［「私（わたし）は 明日（あした） 大阪（おおさか）へ 参（まい）ります」ですね］。",
            "vn": "\"Em mai đi Osaka (mairimasu)\" nhỉ."
          },
          {
            "speaker": "山田先生",
            "jp": "その とおりです。よく できました。",
            "vn": "Đúng vậy. Giỏi lắm."
          },
          {
            "speaker": "あなた",
            "jp": "［自分（じぶん）の 家族（かぞく）の 時（とき）は どう しますか］。",
            "vn": "Khi nói về gia đình mình thì sao ạ?"
          },
          {
            "speaker": "山田先生",
            "jp": "いい 質問（しつもん）ですね。外（そと）の 人（ひと）に 話（はな）す 時（とき）は、家族（かぞく）も 「自分（じぶん）側（がわ）」ですから、謙譲語（けんじょうご）を 使（つか）います。",
            "vn": "Câu hỏi hay. Khi nói với người ngoài, gia đình là \"phía mình\" nên dùng khiêm nhường ngữ."
          },
          {
            "speaker": "あなた",
            "jp": "［なるほど。会社（かいしゃ）の 人（ひと）も 同（おな）じですか］。",
            "vn": "Ra vậy. Người trong công ty cũng vậy ạ?"
          },
          {
            "speaker": "山田先生",
            "jp": "はい。お客様（きゃくさま）に 話（はな）す 時（とき）は、自分（じぶん）の 会社（かいしゃ）の 社長（しゃちょう）にも 謙譲語（けんじょうご）を 使（つか）いますよ。",
            "vn": "Ừ. Khi nói với khách, dùng khiêm nhường ngữ cả với giám đốc công ty mình."
          },
          {
            "speaker": "あなた",
            "jp": "［難（むずか）しいですね。練習（れんしゅう）問題（もんだい）は ありますか］。",
            "vn": "Khó nhỉ. Có bài luyện tập không ạ?"
          },
          {
            "speaker": "山田先生",
            "jp": "教科書（きょうかしょ）の 88ページを やって みて ください。",
            "vn": "Em thử làm trang 88 sách giáo khoa."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、やって みます。ありがとうございました］。",
            "vn": "Vâng, em sẽ làm thử. Em cảm ơn thầy."
          }
        ]
      },
      {
        "id": "track-cd01-d7",
        "title": "Mượn sách chuyên ngành của giáo sư",
        "titleVn": "Mượn sách chuyên ngành của giáo sư",
        "category": "topic",
        "topicId": "cd01",
        "tag": "学校・先生との連絡 · Kịch bản 7",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［先生（せんせい）、少（すこ）し お願（ねが）いが あるんですが］。",
            "vn": "Thưa thầy, em có chút việc muốn nhờ."
          },
          {
            "speaker": "田中先生",
            "jp": "何（なん）ですか。",
            "vn": "Gì vậy?"
          },
          {
            "speaker": "あなた",
            "jp": "［レポートで 日本（にほん）経済（けいざい）の 本（ほん）が 必要（ひつよう）なんですが、図書館（としょかん）に ありませんでした］。",
            "vn": "Em cần sách kinh tế Nhật để làm báo cáo nhưng thư viện không có."
          },
          {
            "speaker": "田中先生",
            "jp": "どの 本（ほん）ですか。",
            "vn": "Sách nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［先生（せんせい）の 授業（じゅぎょう）で 紹介（しょうかい）された 『日本（にほん）経済（けいざい）入門（にゅうもん）』です。貸出（かしだし）中（ちゅう）でした］。",
            "vn": "Cuốn \"Nhập môn kinh tế Nhật\" thầy giới thiệu trong giờ học. Đang có người mượn ạ."
          },
          {
            "speaker": "田中先生",
            "jp": "ああ、その 本（ほん）なら 私（わたし）が 持（も）って いますよ。",
            "vn": "À, cuốn đó thầy có."
          },
          {
            "speaker": "あなた",
            "jp": "［来週（らいしゅう）まで 貸（か）して いただけませんか］。",
            "vn": "Thầy cho em mượn đến tuần sau được không ạ?"
          },
          {
            "speaker": "田中先生",
            "jp": "ええ、構（かま）いませんよ。でも、水曜日（すいようび）の ゼミで 使（つか）うので、火曜日（かようび）までに 返（かえ）して ください。",
            "vn": "Ừ, không sao. Nhưng thứ Tư thầy dùng ở seminar nên trả trước thứ Ba."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。必要（ひつよう）な ページを コピーさせて いただいても いいですか］。",
            "vn": "Em hiểu. Em photo những trang cần thiết được không ạ?"
          },
          {
            "speaker": "田中先生",
            "jp": "いいですよ。全部（ぜんぶ） コピーするのは だめですよ。",
            "vn": "Được. Nhưng photo toàn bộ thì không được."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、2章（にしょう）と 3章（さんしょう）だけ コピーします］。",
            "vn": "Vâng, em chỉ photo chương 2 và 3."
          },
          {
            "speaker": "田中先生",
            "jp": "レポートの テーマは 何（なん）ですか。",
            "vn": "Đề tài báo cáo là gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［日本（にほん）の コンビニの 発展（はってん）について 書（か）こうと 思（おも）って います］。",
            "vn": "Em định viết về sự phát triển của konbini Nhật."
          },
          {
            "speaker": "田中先生",
            "jp": "おもしろい テーマですね。この 本（ほん）の 5章（ごしょう）も 役（やく）に 立（た）つと 思（おも）いますよ。",
            "vn": "Đề tài thú vị. Thầy nghĩ chương 5 cuốn này cũng có ích."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。5章（ごしょう）も 読（よ）んで みます］。",
            "vn": "Cảm ơn thầy. Em sẽ đọc thử cả chương 5."
          },
          {
            "speaker": "田中先生",
            "jp": "はい、頑張（がんば）って ください。",
            "vn": "Ừ, cố gắng nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［火曜日（かようび）の 朝（あさ）、研究室（けんきゅうしつ）に お返（かえ）しします。失礼（しつれい）します］。",
            "vn": "Sáng thứ Ba em sẽ mang trả ở phòng nghiên cứu. Em xin phép."
          }
        ]
      },
      {
        "id": "track-cd01-d8",
        "title": "Xin giấy chứng nhận ở văn phòng trường",
        "titleVn": "Xin giấy chứng nhận ở văn phòng trường",
        "category": "topic",
        "topicId": "cd01",
        "tag": "学校・先生との連絡 · Kịch bản 8",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、在学証明書（ざいがくしょうめいしょ）が 必要（ひつよう）なんですが］。",
            "vn": "Xin lỗi, tôi cần giấy chứng nhận đang học."
          },
          {
            "speaker": "事務の人",
            "jp": "はい。何（なに）に 使（つか）いますか。",
            "vn": "Vâng. Dùng vào việc gì ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［アルバイトの 面接（めんせつ）で 出（だ）さなければ なりません］。",
            "vn": "Tôi phải nộp khi phỏng vấn làm thêm."
          },
          {
            "speaker": "事務の人",
            "jp": "わかりました。何通（なんつう） 要（い）りますか。",
            "vn": "Hiểu rồi. Cần mấy bản?"
          },
          {
            "speaker": "あなた",
            "jp": "［1通（いっつう）です。どう やって 申（もう）し込（こ）みますか］。",
            "vn": "1 bản. Đăng ký thế nào ạ?"
          },
          {
            "speaker": "事務の人",
            "jp": "あちらの 機械（きかい）で 300円（さんびゃくえん）の 券（けん）を 買（か）って、この 申請書（しんせいしょ）と 一緒（いっしょ）に 出（だ）して ください。",
            "vn": "Mua vé 300 yên ở máy kia rồi nộp cùng đơn này."
          },
          {
            "speaker": "あなた",
            "jp": "［申請書（しんせいしょ）には 何（なに）を 書（か）けば いいですか］。",
            "vn": "Trong đơn thì ghi gì ạ?"
          },
          {
            "speaker": "事務の人",
            "jp": "名前（なまえ）と 学籍番号（がくせきばんごう）と 使（つか）う 目的（もくてき）を 書（か）いて ください。",
            "vn": "Ghi tên, mã số học viên và mục đích sử dụng."
          },
          {
            "speaker": "あなた",
            "jp": "［学籍番号（がくせきばんごう）は 学生証（がくせいしょう）に 書（か）いて ある 番号（ばんごう）ですか］。",
            "vn": "Mã số học viên là số ghi trên thẻ học viên ạ?"
          },
          {
            "speaker": "事務の人",
            "jp": "はい、そうです。",
            "vn": "Vâng, đúng vậy."
          },
          {
            "speaker": "あなた",
            "jp": "これで いいですか。［今日（きょう） すぐ もらえるか どうか、教（おし）えて いただけませんか］。",
            "vn": "(Viết xong) Thế này được chưa ạ? Cho tôi biết hôm nay có nhận ngay được không ạ?"
          },
          {
            "speaker": "事務の人",
            "jp": "はい、大丈夫（だいじょうぶ）です。10分（じゅっぷん）ぐらいで 発行（はっこう）できます。",
            "vn": "Vâng, được rồi. Khoảng 10 phút là cấp được."
          },
          {
            "speaker": "あなた",
            "jp": "［成績証明書（せいせきしょうめいしょ）も 同（おな）じ 方法（ほうほう）ですか］。",
            "vn": "Bảng điểm cũng làm theo cách tương tự ạ?"
          },
          {
            "speaker": "事務の人",
            "jp": "成績証明書（せいせきしょうめいしょ）は 3日（みっか） かかります。手数料（てすうりょう）は 500円（ごひゃくえん）です。",
            "vn": "Bảng điểm mất 3 ngày. Lệ phí 500 yên."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。今日（きょう）は 在学証明書（ざいがくしょうめいしょ）だけで 大丈夫（だいじょうぶ）です］。",
            "vn": "Tôi hiểu. Hôm nay chỉ cần giấy chứng nhận đang học thôi."
          },
          {
            "speaker": "事務の人",
            "jp": "では、あちらで お待（ま）ち ください。",
            "vn": "Vậy xin chờ ở đằng kia."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、ありがとうございます］。",
            "vn": "Vâng, cảm ơn ạ."
          }
        ]
      },
      {
        "id": "track-cd01-d9",
        "title": "Truyền lời nhắn của cô cho bạn nghỉ ốm",
        "titleVn": "Truyền lời nhắn của cô cho bạn nghỉ ốm",
        "category": "topic",
        "topicId": "cd01",
        "tag": "学校・先生との連絡 · Kịch bản 9",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［もしもし、キムさん？ 熱（ねつ）は 下（さ）がった］？",
            "vn": "Alo, Kim à? Hạ sốt chưa?"
          },
          {
            "speaker": "キム",
            "jp": "うん、だいぶ よく なったよ。ありがとう。",
            "vn": "Ừ, đỡ nhiều rồi. Cảm ơn."
          },
          {
            "speaker": "あなた",
            "jp": "［よかった。今日（きょう） 佐藤（さとう）先生（せんせい）が おっしゃった ことを 伝（つた）えるね］。",
            "vn": "Tốt quá. Mình báo lại những gì cô Sato nói hôm nay nhé."
          },
          {
            "speaker": "キム",
            "jp": "助（たす）かる！ 何（なに）か 大事（だいじ）な こと あった？",
            "vn": "Đỡ quá! Có gì quan trọng không?"
          },
          {
            "speaker": "あなた",
            "jp": "［来週（らいしゅう）の 月曜日（げつようび）に 漢字（かんじ）の テストが あるって］。",
            "vn": "Nghe nói thứ Hai tuần sau có kiểm tra chữ Hán."
          },
          {
            "speaker": "キム",
            "jp": "えっ、本当（ほんとう）？ 範囲（はんい）は？",
            "vn": "Hả, thật à? Phạm vi đến đâu?"
          },
          {
            "speaker": "あなた",
            "jp": "［第（だい）8課（はっか）から 第（だい）10課（じゅっか）までだよ］。",
            "vn": "Từ bài 8 đến bài 10."
          },
          {
            "speaker": "キム",
            "jp": "辞書（じしょ）は 使（つか）っても いいの？",
            "vn": "Được dùng từ điển không?"
          },
          {
            "speaker": "あなた",
            "jp": "［ううん、辞書（じしょ）は 使（つか）わないように って］。",
            "vn": "Không, cô dặn đừng dùng từ điển."
          },
          {
            "speaker": "キム",
            "jp": "そっか。ほかに 何（なに）か ある？",
            "vn": "Thế à. Còn gì khác không?"
          },
          {
            "speaker": "あなた",
            "jp": "［作文（さくぶん）の 宿題（しゅくだい）も 出（で）たよ。テーマは 「私（わたし）の 町（まち）」で、金曜日（きんようび）までに 出（だ）すように って］。",
            "vn": "Có cả bài tập viết văn. Đề tài \"Thị trấn của tôi\", cô dặn nộp trước thứ Sáu."
          },
          {
            "speaker": "キム",
            "jp": "金曜日（きんようび）ね。今日（きょう）の プリント、もらえる？",
            "vn": "Thứ Sáu nhỉ. Tài liệu hôm nay cậu cho mình được không?"
          },
          {
            "speaker": "あなた",
            "jp": "［うん、キムさんの 分（ぶん）も もらって おいたよ。明日（あした） 持（も）って 行（い）くね］。",
            "vn": "Ừ, mình lấy sẵn phần của Kim rồi. Mai mình mang đến nhé."
          },
          {
            "speaker": "キム",
            "jp": "本当（ほんとう）に ありがとう。明日（あした）は 学校（がっこう）に 行（い）けると 思（おも）う。",
            "vn": "Thật sự cảm ơn. Mai chắc mình đi học được."
          },
          {
            "speaker": "あなた",
            "jp": "［よかった。でも、無理（むり）しないでね］。",
            "vn": "Tốt quá. Nhưng đừng cố quá nhé."
          },
          {
            "speaker": "キム",
            "jp": "うん。テストの 前（まえ）に 一緒（いっしょ）に 復習（ふくしゅう）しない？",
            "vn": "Ừ. Trước kiểm tra cùng ôn không?"
          },
          {
            "speaker": "あなた",
            "jp": "［いいよ。日曜日（にちようび）、図書館（としょかん）で 勉強（べんきょう）しよう。じゃ、お大事（だいじ）に］。",
            "vn": "Được. Chủ nhật học ở thư viện nhé. Vậy mau khỏe nhé."
          }
        ]
      },
      {
        "id": "track-cd01-d10",
        "title": "Hỏi về kỳ thi cuối kỳ",
        "titleVn": "Hỏi về kỳ thi cuối kỳ",
        "category": "topic",
        "topicId": "cd01",
        "tag": "学校・先生との連絡 · Kịch bản 10",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［先生（せんせい）、期末（きまつ）試験（しけん）について 質問（しつもん）が あるんですが］。",
            "vn": "Thưa thầy, em có câu hỏi về thi cuối kỳ."
          },
          {
            "speaker": "山田先生",
            "jp": "どうぞ。",
            "vn": "Mời em."
          },
          {
            "speaker": "あなた",
            "jp": "［試験（しけん）は いつか 教（おし）えて いただけませんか］。",
            "vn": "Thầy cho em biết khi nào thi được không ạ?"
          },
          {
            "speaker": "山田先生",
            "jp": "7月（しちがつ）20日（はつか）の 月曜日（げつようび）です。筆記（ひっき）と 聴解（ちょうかい）が 午前（ごぜん）で、会話（かいわ）試験（しけん）は 午後（ごご）です。",
            "vn": "Thứ Hai 20/7. Viết và nghe buổi sáng, thi nói buổi chiều."
          },
          {
            "speaker": "あなた",
            "jp": "［会話（かいわ）試験（しけん）は どんな 試験（しけん）ですか］。",
            "vn": "Thi nói là thi như thế nào ạ?"
          },
          {
            "speaker": "山田先生",
            "jp": "先生（せんせい）と 2人（ふたり）で、5分（ごふん）ぐらい 話（はな）します。ロールプレイも あります。",
            "vn": "Nói với giáo viên khoảng 5 phút. Có cả đóng vai."
          },
          {
            "speaker": "あなた",
            "jp": "［ロールプレイの テーマは もう 決（き）まって いますか］。",
            "vn": "Chủ đề đóng vai đã quyết chưa ạ?"
          },
          {
            "speaker": "山田先生",
            "jp": "授業（じゅぎょう）で 練習（れんしゅう）した 場面（ばめん）から 出（で）ます。",
            "vn": "Ra từ các tình huống đã luyện trong giờ."
          },
          {
            "speaker": "あなた",
            "jp": "［試験（しけん）の 時（とき）、何（なに）を 持（も）って 来（こ）なければ なりませんか］。",
            "vn": "Khi thi em phải mang gì ạ?"
          },
          {
            "speaker": "山田先生",
            "jp": "受験票（じゅけんひょう）と 鉛筆（えんぴつ）と 消（け）しゴムです。スマホは かばんに 入（い）れて ください。",
            "vn": "Phiếu dự thi, bút chì, tẩy. Điện thoại cất vào cặp."
          },
          {
            "speaker": "あなた",
            "jp": "［合格点（ごうかくてん）は 何点（なんてん）ですか］。",
            "vn": "Điểm đỗ là bao nhiêu ạ?"
          },
          {
            "speaker": "山田先生",
            "jp": "60点（ろくじってん）以上（いじょう）です。",
            "vn": "Từ 60 điểm trở lên."
          },
          {
            "speaker": "あなた",
            "jp": "［もし 合格（ごうかく）できなかったら、どう なりますか］。",
            "vn": "Nếu em không đỗ thì sẽ thế nào ạ?"
          },
          {
            "speaker": "山田先生",
            "jp": "8月（はちがつ）に 追試（ついし）が あります。でも、ミンさんなら 大丈夫（だいじょうぶ）ですよ。",
            "vn": "Tháng 8 có thi lại. Nhưng Minh thì không sao đâu."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。会話（かいわ）が 苦手（にがて）なんですが、何（なに）を すれば いいですか］。",
            "vn": "Em cảm ơn thầy. Em kém phần nói, nên làm gì ạ?"
          },
          {
            "speaker": "山田先生",
            "jp": "毎日（まいにち） 声（こえ）に 出（だ）して 練習（れんしゅう）する ことです。この アプリの カイワも 使（つか）って みて ください。",
            "vn": "Hãy luyện đọc thành tiếng mỗi ngày. Thử dùng cả phần Kaiwa của app này."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、毎日（まいにち） 練習（れんしゅう）します。頑張（がんば）ります］。",
            "vn": "Vâng, em sẽ luyện mỗi ngày. Em sẽ cố gắng."
          }
        ]
      }
    ]
  },
  {
    "id": "pl-cd03",
    "title": "電車（でんしゃ）・バス・道（みち）・トラブル",
    "titleVn": "Tàu điện, Đường đi & Sự cố giao thông",
    "description": "Trọn bộ 10 kịch bản đối thoại nhập vai thực tế trong tình huống: Tàu điện, Đường đi & Sự cố giao thông.",
    "category": "topic",
    "badge": "🚃 TÀU ĐIỆN & ĐƯỜNG",
    "accentColor": "from-amber-500/20 to-yellow-500/10 border-amber-500/40 text-amber-600",
    "tracks": [
      {
        "id": "track-cd03-d1",
        "title": "Hỏi đường đến ga",
        "titleVn": "Hỏi đường đến ga",
        "category": "topic",
        "topicId": "cd03",
        "tag": "電車・バス・道・トラブル · Kịch bản 1",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、ちょっと お聞（き）きしても いいですか］。",
            "vn": "Xin lỗi, cho tôi hỏi chút được không ạ?"
          },
          {
            "speaker": "おばあさん",
            "jp": "はい、何（なん）でしょう。",
            "vn": "Vâng, gì vậy cháu?"
          },
          {
            "speaker": "あなた",
            "jp": "［みどり駅（えき）まで どう 行（い）けば いいですか］。",
            "vn": "Đến ga Midori đi thế nào ạ?"
          },
          {
            "speaker": "おばあさん",
            "jp": "みどり駅（えき）ね。この 道（みち）を まっすぐ 行（い）って、2つ目（ふたつめ）の 信号（しんごう）を 右（みぎ）に 曲（ま）がって。",
            "vn": "Ga Midori à. Đi thẳng đường này, rẽ phải ở đèn thứ 2."
          },
          {
            "speaker": "あなた",
            "jp": "［2つ目（ふたつめ）の 信号（しんごう）を 右（みぎ）ですね］。",
            "vn": "Rẽ phải ở đèn thứ 2 nhỉ."
          },
          {
            "speaker": "おばあさん",
            "jp": "そう。曲（ま）がると、すぐ 踏切（ふみきり）が あるから、それを 渡（わた）って。",
            "vn": "Đúng. Rẽ xong có chắn tàu ngay, băng qua đó."
          },
          {
            "speaker": "あなた",
            "jp": "［踏切（ふみきり）を 渡（わた）って、それから］？",
            "vn": "Băng qua chắn tàu, rồi sau đó ạ?"
          },
          {
            "speaker": "おばあさん",
            "jp": "渡（わた）ると、左側（ひだりがわ）に 大（おお）きい スーパーが 見（み）えるの。駅（えき）は その 向（む）かいよ。",
            "vn": "Qua rồi sẽ thấy siêu thị lớn bên trái. Ga ở đối diện đó."
          },
          {
            "speaker": "あなた",
            "jp": "［スーパーの 向（む）かいですね。何（なに）か 目印（めじるし）は ありますか］。",
            "vn": "Đối diện siêu thị nhỉ. Có mốc gì dễ nhận không ạ?"
          },
          {
            "speaker": "おばあさん",
            "jp": "駅（えき）の 前（まえ）に 大（おお）きな 時計（とけい）が あるから、すぐ わかるわ。",
            "vn": "Trước ga có đồng hồ lớn nên dễ nhận ra lắm."
          },
          {
            "speaker": "あなた",
            "jp": "［ここから 歩（ある）いて 何分（なんぷん）ぐらいですか］。",
            "vn": "Từ đây đi bộ khoảng mấy phút ạ?"
          },
          {
            "speaker": "おばあさん",
            "jp": "10分（じゅっぷん）ぐらいかしら。バスも あるけど、歩（ある）いた ほうが 早（はや）いわよ。",
            "vn": "Khoảng 10 phút. Cũng có xe buýt nhưng đi bộ nhanh hơn."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。自転車（じてんしゃ）を 止（と）める 所（ところ）は ありますか］。",
            "vn": "Tôi hiểu. Có chỗ đỗ xe đạp không ạ?"
          },
          {
            "speaker": "おばあさん",
            "jp": "駅（えき）の 裏（うら）に 駐輪場（ちゅうりんじょう）が あるわよ。駅前（えきまえ）に 止（と）めると、持（も）って 行（い）かれるから 気（き）を つけて。",
            "vn": "Sau ga có bãi đỗ xe đạp. Đỗ trước ga sẽ bị mang đi đấy, cẩn thận."
          },
          {
            "speaker": "あなた",
            "jp": "［そうなんですか。教（おし）えて くださって、ありがとうございます］。",
            "vn": "Vậy ạ. Cảm ơn bà đã chỉ cho."
          },
          {
            "speaker": "おばあさん",
            "jp": "いいえ。この 辺（へん）に 引越（ひっこ）して 来（き）たの？",
            "vn": "Không có gì. Cháu mới chuyển đến đây à?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、先週（せんしゅう） 来（き）ました。また 会（あ）ったら、よろしく お願（ねが）いします］。",
            "vn": "Vâng, tuần trước ạ. Gặp lại mong bà giúp đỡ."
          }
        ]
      },
      {
        "id": "track-cd03-d2",
        "title": "Mua thẻ IC và nạp tiền lần đầu",
        "titleVn": "Mua thẻ IC và nạp tiền lần đầu",
        "category": "topic",
        "topicId": "cd03",
        "tag": "電車・バス・道・トラブル · Kịch bản 2",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、ICカードを 作（つく）りたいんですが］。",
            "vn": "Xin lỗi, tôi muốn làm thẻ IC."
          },
          {
            "speaker": "駅員",
            "jp": "はい。あちらの 券売機（けんばいき）で 作（つく）れますよ。",
            "vn": "Vâng. Làm được ở máy bán vé đằng kia."
          },
          {
            "speaker": "あなた",
            "jp": "［初（はじ）めてなので、作（つく）り方（かた）を 教（おし）えて いただけませんか］。",
            "vn": "Lần đầu nên chỉ giúp tôi cách làm được không ạ?"
          },
          {
            "speaker": "駅員",
            "jp": "いいですよ。まず 画面（がめん）の 「ICカード購入（こうにゅう）」を 押（お）して ください。",
            "vn": "Được. Trước tiên bấm \"Mua thẻ IC\" trên màn hình."
          },
          {
            "speaker": "あなた",
            "jp": "［押（お）しました。次（つぎ）は］？",
            "vn": "Bấm rồi. Tiếp theo ạ?"
          },
          {
            "speaker": "駅員",
            "jp": "金額（きんがく）を 選（えら）びます。1,000円（せんえん）から 1万円（いちまんえん）まで あります。",
            "vn": "Chọn số tiền. Có từ 1.000 đến 1 vạn yên."
          },
          {
            "speaker": "あなた",
            "jp": "［2,000円（にせんえん）に すると、全部（ぜんぶ） 使（つか）えますか］。",
            "vn": "Nếu chọn 2.000 yên thì dùng được hết không ạ?"
          },
          {
            "speaker": "駅員",
            "jp": "いいえ。500円（ごひゃくえん）は デポジットなので、使（つか）えるのは 1,500円（せんごひゃくえん）です。",
            "vn": "Không. 500 yên là tiền cọc nên dùng được 1.500 yên."
          },
          {
            "speaker": "あなた",
            "jp": "［デポジットは 返（かえ）して もらえますか］。",
            "vn": "Tiền cọc có được trả lại không ạ?"
          },
          {
            "speaker": "駅員",
            "jp": "はい、カードを 返（かえ）す 時（とき）に 戻（もど）って きます。",
            "vn": "Có, khi trả thẻ sẽ được hoàn."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。チャージは どこで できますか］。",
            "vn": "Tôi hiểu. Nạp tiền ở đâu được ạ?"
          },
          {
            "speaker": "駅員",
            "jp": "券売機（けんばいき）でも、コンビニでも できますよ。",
            "vn": "Ở máy bán vé hay konbini đều được."
          },
          {
            "speaker": "あなた",
            "jp": "［毎日（まいにち） 学校（がっこう）に 通（かよ）うんですが、定期券（ていきけん）と ICカードと、どちらが 安（やす）いですか］。",
            "vn": "Ngày nào tôi cũng đi học, vé tháng với thẻ IC cái nào rẻ hơn?"
          },
          {
            "speaker": "駅員",
            "jp": "毎日（まいにち） 乗（の）るなら、通学（つうがく）定期（ていき）の ほうが ずっと 安（やす）いですよ。",
            "vn": "Nếu đi hàng ngày thì vé tháng học sinh rẻ hơn nhiều."
          },
          {
            "speaker": "あなた",
            "jp": "［通学（つうがく）定期（ていき）を 買（か）うには 何（なに）が 要（い）りますか］。",
            "vn": "Để mua vé tháng học sinh cần gì ạ?"
          },
          {
            "speaker": "駅員",
            "jp": "学校（がっこう）の 通学（つうがく）証明書（しょうめいしょ）と 学生証（がくせいしょう）です。みどりの 窓口（まどぐち）で 買（か）えます。",
            "vn": "Giấy chứng nhận đi học của trường và thẻ sinh viên. Mua ở quầy xanh."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、今日（きょう）は ICカードを 作（つく）って、明日（あした） 証明書（しょうめいしょ）を 持（も）って 来（き）ます］。",
            "vn": "Vậy hôm nay tôi làm thẻ IC, mai mang giấy chứng nhận đến."
          }
        ]
      },
      {
        "id": "track-cd03-d3",
        "title": "Hỏi tàu ra sân bay và đổi tàu",
        "titleVn": "Hỏi tàu ra sân bay và đổi tàu",
        "category": "topic",
        "topicId": "cd03",
        "tag": "電車・バス・道・トラブル · Kịch bản 3",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、羽田（はねだ）空港（くうこう）へ 行（い）きたいんですが、どこで 乗（の）り換（か）えれば いいですか］。",
            "vn": "Xin lỗi, tôi muốn đi sân bay Haneda, đổi tàu ở đâu ạ?"
          },
          {
            "speaker": "駅員",
            "jp": "品川（しながわ）で 京急線（けいきゅうせん）に 乗（の）り換（か）えて ください。",
            "vn": "Đổi sang tuyến Keikyu ở Shinagawa."
          },
          {
            "speaker": "あなた",
            "jp": "［品川（しながわ）までは 何番線（なんばんせん）から 乗（の）りますか］。",
            "vn": "Đến Shinagawa thì lên ở đường số mấy?"
          },
          {
            "speaker": "駅員",
            "jp": "4番線（よんばんせん）の 東京（とうきょう）方面（ほうめん）です。",
            "vn": "Đường số 4 hướng Tokyo."
          },
          {
            "speaker": "あなた",
            "jp": "［快速（かいそく）は 品川（しながわ）に 止（と）まりますか］。",
            "vn": "Tàu nhanh có dừng ở Shinagawa không?"
          },
          {
            "speaker": "駅員",
            "jp": "はい、止（と）まります。快速（かいそく）の ほうが 10分（じゅっぷん） 早（はや）いですよ。",
            "vn": "Có dừng. Tàu nhanh nhanh hơn 10 phút."
          },
          {
            "speaker": "あなた",
            "jp": "［飛行機（ひこうき）が 3時（さんじ）に 着（つ）くんですが、今（いま） 出（で）たら 間（ま）に合（あ）いますか］。",
            "vn": "Máy bay hạ cánh lúc 3 giờ, đi bây giờ có kịp không ạ?"
          },
          {
            "speaker": "駅員",
            "jp": "今（いま） 2時（にじ）ですから、50分（ごじゅっぷん）ぐらいで 着（つ）きますよ。大丈夫（だいじょうぶ）です。",
            "vn": "Giờ là 2 giờ, khoảng 50 phút là đến. Kịp."
          },
          {
            "speaker": "あなた",
            "jp": "［京急線（けいきゅうせん）の 乗（の）り場（ば）は わかりやすいですか］。",
            "vn": "Chỗ lên tuyến Keikyu có dễ tìm không ạ?"
          },
          {
            "speaker": "駅員",
            "jp": "品川（しながわ）で 降（お）りたら、赤（あか）い 看板（かんばん）に 「京急線（けいきゅうせん）」と 書（か）いて ありますから、それに 従（したが）って ください。",
            "vn": "Xuống Shinagawa có biển đỏ ghi \"Keikyu\", đi theo đó."
          },
          {
            "speaker": "あなた",
            "jp": "［京急線（けいきゅうせん）は 「羽田（はねだ）空港（くうこう）行（ゆ）き」に 乗（の）れば いいですね］。",
            "vn": "Tuyến Keikyu thì lên tàu \"đi sân bay Haneda\" là được nhỉ."
          },
          {
            "speaker": "駅員",
            "jp": "はい。でも、「横浜（よこはま）方面（ほうめん）」の 電車（でんしゃ）も あるので、気（き）を つけて ください。",
            "vn": "Vâng. Nhưng có cả tàu \"hướng Yokohama\" nên cẩn thận."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。運賃（うんちん）は ICカードで 払（はら）えますか］。",
            "vn": "Tôi hiểu. Tiền vé trả bằng thẻ IC được không?"
          },
          {
            "speaker": "駅員",
            "jp": "はい、そのまま 乗（の）れますよ。",
            "vn": "Vâng, cứ thế lên tàu được."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。急（いそ）いで 行（い）きます］。",
            "vn": "Cảm ơn ạ. Tôi đi vội đây."
          },
          {
            "speaker": "駅員",
            "jp": "お気（き）を つけて。",
            "vn": "Đi cẩn thận."
          }
        ]
      },
      {
        "id": "track-cd03-d4",
        "title": "Ngủ quên, đi quá ga",
        "titleVn": "Ngủ quên, đi quá ga",
        "category": "topic",
        "topicId": "cd03",
        "tag": "電車・バス・道・トラブル · Kịch bản 4",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、寝過（ねす）ごして、乗（の）り過（す）ごして しまいました］。",
            "vn": "Xin lỗi, tôi ngủ quên và lỡ đi quá ga."
          },
          {
            "speaker": "駅員",
            "jp": "そうですか。どちらで 降（お）りる 予定（よてい）でしたか。",
            "vn": "Vậy à. Bạn định xuống ga nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［さくら駅（えき）です。ここは どこですか］。",
            "vn": "Ga Sakura. Đây là đâu ạ?"
          },
          {
            "speaker": "駅員",
            "jp": "ここは あおば駅（えき）です。さくら駅（えき）から 3つ 先（さき）ですね。",
            "vn": "Đây là ga Aoba. Cách ga Sakura 3 ga."
          },
          {
            "speaker": "あなた",
            "jp": "［さくら駅（えき）に 戻（もど）るには、どう したら いいですか］。",
            "vn": "Để quay về ga Sakura thì làm sao ạ?"
          },
          {
            "speaker": "駅員",
            "jp": "向（む）かいの 2番線（にばんせん）から 反対（はんたい）方向（ほうこう）の 電車（でんしゃ）に 乗（の）って ください。",
            "vn": "Lên tàu chiều ngược lại ở đường số 2 đối diện."
          },
          {
            "speaker": "あなた",
            "jp": "［改札（かいさつ）を 出（で）なければ なりませんか］。",
            "vn": "Tôi có phải ra khỏi cửa soát vé không ạ?"
          },
          {
            "speaker": "駅員",
            "jp": "いいえ、出（で）なくても いいです。階段（かいだん）を 上（あ）がって、向（む）こう側（がわ）へ 行（い）けば 大丈夫（だいじょうぶ）です。",
            "vn": "Không, không cần ra. Lên cầu thang sang phía bên kia là được."
          },
          {
            "speaker": "あなた",
            "jp": "［運賃（うんちん）は どう なりますか。余計（よけい）に 乗（の）った 分（ぶん）を 払（はら）いますか］。",
            "vn": "Tiền vé thì sao ạ? Tôi có trả phần đi thừa không?"
          },
          {
            "speaker": "駅員",
            "jp": "ICカードなら、さくら駅（えき）で 出（で）る 時（とき）に 自動（じどう）で 計算（けいさん）されます。",
            "vn": "Nếu thẻ IC thì khi ra ở ga Sakura sẽ tự động tính."
          },
          {
            "speaker": "あなた",
            "jp": "［足（た）りない 時（とき）は どう しますか］。",
            "vn": "Nếu thiếu tiền thì làm sao ạ?"
          },
          {
            "speaker": "駅員",
            "jp": "改札（かいさつ）の 横（よこ）の 精算機（せいさんき）で チャージして ください。",
            "vn": "Nạp tiền ở máy bù tiền cạnh cửa soát vé."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。次（つぎ）の 電車（でんしゃ）は 何分（なんぷん）ですか］。",
            "vn": "Tôi hiểu. Chuyến tiếp theo lúc mấy phút ạ?"
          },
          {
            "speaker": "駅員",
            "jp": "5分後（ごふんご）、10時（じゅうじ）12分（じゅうにふん）です。",
            "vn": "5 phút nữa, 10 giờ 12."
          },
          {
            "speaker": "あなた",
            "jp": "［助（たす）かりました。今度（こんど）は 寝（ね）ないように します］。",
            "vn": "Cảm ơn đã giúp. Lần này tôi sẽ cố không ngủ."
          },
          {
            "speaker": "駅員",
            "jp": "アラームを かけると いいですよ。",
            "vn": "Đặt báo thức thì tốt đấy."
          },
          {
            "speaker": "あなた",
            "jp": "［そう します。ありがとうございました］。",
            "vn": "Tôi sẽ làm vậy. Cảm ơn."
          }
        ]
      },
      {
        "id": "track-cd03-d5",
        "title": "Tàu dừng do tai nạn",
        "titleVn": "Tàu dừng do tai nạn",
        "category": "topic",
        "topicId": "cd03",
        "tag": "電車・バス・道・トラブル · Kịch bản 5",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、電車（でんしゃ）は いつ 動（うご）くか わかりますか］。",
            "vn": "Xin lỗi, có biết khi nào tàu chạy lại không ạ?"
          },
          {
            "speaker": "駅員",
            "jp": "人身事故（じんしんじこ）で 運転（うんてん）を 見合（みあ）わせて おります。再開（さいかい）は 1時間後（いちじかんご）の 見込（みこ）みです。",
            "vn": "Đang tạm ngừng do tai nạn người. Dự kiến chạy lại sau 1 tiếng."
          },
          {
            "speaker": "あなた",
            "jp": "［1時間（いちじかん）も……。別（べつ）の 路線（ろせん）で 行（い）った ほうが いいですか］。",
            "vn": "Những 1 tiếng... Có nên đi tuyến khác không ạ?"
          },
          {
            "speaker": "駅員",
            "jp": "どちらまで ですか。",
            "vn": "Bạn đi đến đâu?"
          },
          {
            "speaker": "あなた",
            "jp": "［中央（ちゅうおう）駅（えき）です。9時（くじ）から 授業（じゅぎょう）が あるんです］。",
            "vn": "Ga Trung tâm. 9 giờ tôi có giờ học."
          },
          {
            "speaker": "駅員",
            "jp": "それなら、バスで みどり駅（えき）へ 行（い）って、地下鉄（ちかてつ）に 乗（の）れば 行（い）けます。振替（ふりかえ）輸送（ゆそう）を して いるので、追加（ついか）の お金（かね）は かかりません。",
            "vn": "Vậy đi xe buýt đến ga Midori rồi đi tàu điện ngầm. Đang có chuyển tuyến miễn phí nên không mất thêm tiền."
          },
          {
            "speaker": "あなた",
            "jp": "［ICカードでも 振替（ふりかえ）輸送（ゆそう）が 使（つか）えますか］。",
            "vn": "Thẻ IC cũng dùng được chuyển tuyến miễn phí không?"
          },
          {
            "speaker": "駅員",
            "jp": "申（もう）し訳（わけ）ありません。ICカードは 使（つか）えないので、こちらの 振替（ふりかえ）乗車票（じょうしゃひょう）を お持（も）ち ください。",
            "vn": "Xin lỗi. Thẻ IC không dùng được nên hãy cầm phiếu chuyển tuyến này."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。それから、遅延証明書（ちえんしょうめいしょ）を いただけますか］。",
            "vn": "Cảm ơn. Ngoài ra cho tôi xin giấy chứng nhận tàu trễ được không?"
          },
          {
            "speaker": "駅員",
            "jp": "はい、どうぞ。",
            "vn": "Vâng, đây ạ."
          },
          {
            "speaker": "あなた",
            "jp": "もしもし、［1年（いちねん）Aクラスの ミンです。電車（でんしゃ）が 止（と）まって いて、遅（おく）れそうです］。",
            "vn": "(Gọi điện) Alo, em là Minh lớp 1A. Tàu đang dừng nên em có vẻ đến muộn."
          },
          {
            "speaker": "先生",
            "jp": "わかりました。何時（なんじ）ごろ 着（つ）きそうですか。",
            "vn": "(Thầy giáo) Thầy hiểu. Khoảng mấy giờ em đến?"
          },
          {
            "speaker": "あなた",
            "jp": "［振替（ふりかえ）輸送（ゆそう）で 行（い）くので、9時（くじ）半（はん）ごろに なると 思（おも）います］。",
            "vn": "Em đi bằng chuyển tuyến nên chắc khoảng 9 giờ rưỡi."
          },
          {
            "speaker": "先生",
            "jp": "遅延証明書（ちえんしょうめいしょ）を 忘（わす）れないで ください。",
            "vn": "(Thầy) Đừng quên giấy chứng nhận tàu trễ."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、もう もらいました。着（つ）いたら すぐ 教室（きょうしつ）に 行（い）きます］。",
            "vn": "Vâng, em lấy rồi. Đến nơi em vào lớp ngay."
          },
          {
            "speaker": "先生",
            "jp": "気（き）を つけて 来（き）て ください。",
            "vn": "(Thầy) Đến cẩn thận nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。失礼（しつれい）します］。",
            "vn": "Vâng. Em xin phép."
          }
        ]
      },
      {
        "id": "track-cd03-d6",
        "title": "Quên đồ trên tàu",
        "titleVn": "Quên đồ trên tàu",
        "category": "topic",
        "topicId": "cd03",
        "tag": "電車・バス・道・トラブル · Kịch bản 6",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、電車（でんしゃ）に リュックを 忘（わす）れて しまったんですが］。",
            "vn": "Xin lỗi, tôi lỡ để quên ba lô trên tàu."
          },
          {
            "speaker": "係員",
            "jp": "いつ、どの 電車（でんしゃ）ですか。",
            "vn": "Khi nào, tàu nào ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［今日（きょう）の 朝（あさ） 8時（はちじ）ごろ、さくら駅（えき）から 中央（ちゅうおう）駅（えき）まで 乗（の）りました］。",
            "vn": "Khoảng 8 giờ sáng nay, đi từ ga Sakura đến ga Trung tâm."
          },
          {
            "speaker": "係員",
            "jp": "何両目（なんりょうめ）に 乗（の）って いたか 覚（おぼ）えて いますか。",
            "vn": "Bạn có nhớ đi toa thứ mấy không?"
          },
          {
            "speaker": "あなた",
            "jp": "［たぶん 前（まえ）から 3両目（さんりょうめ）です。網棚（あみだな）の 上（うえ）に 置（お）きました］。",
            "vn": "Có lẽ toa thứ 3 từ đầu. Tôi để trên giá hành lý."
          },
          {
            "speaker": "係員",
            "jp": "どんな リュックですか。",
            "vn": "Ba lô như thế nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［黒（くろ）い リュックで、白（しろ）い ロゴが 付（つ）いて います］。",
            "vn": "Ba lô đen, có logo trắng."
          },
          {
            "speaker": "係員",
            "jp": "中（なか）に 何（なに）が 入（はい）って いますか。",
            "vn": "Bên trong có gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［ノートパソコンと 教科書（きょうかしょ）が 2冊（にさつ）、それから 青（あお）い 筆箱（ふでばこ）です］。",
            "vn": "Máy tính xách tay, 2 sách giáo khoa và hộp bút xanh."
          },
          {
            "speaker": "係員",
            "jp": "少々（しょうしょう） お待（ま）ち ください。……終点（しゅうてん）の あおば駅（えき）で 見（み）つかって います。",
            "vn": "Xin chờ chút... Đã tìm thấy ở ga cuối Aoba."
          },
          {
            "speaker": "あなた",
            "jp": "［本当（ほんとう）ですか！ よかった。ここまで 送（おく）って いただく ことは できますか］。",
            "vn": "Thật ạ! May quá. Có thể gửi đến đây cho tôi không?"
          },
          {
            "speaker": "係員",
            "jp": "パソコンなど 高（たか）い 物（もの）は、ご本人（ほんにん）が 取（と）りに 行（い）かなければ なりません。",
            "vn": "Đồ đắt như máy tính thì chính chủ phải đến lấy."
          },
          {
            "speaker": "あなた",
            "jp": "［何（なに）を 持（も）って 行（い）けば いいですか］。",
            "vn": "Tôi cần mang gì ạ?"
          },
          {
            "speaker": "係員",
            "jp": "在留（ざいりゅう）カードか 学生証（がくせいしょう）を お持（も）ち ください。",
            "vn": "Hãy mang thẻ cư trú hoặc thẻ sinh viên."
          },
          {
            "speaker": "あなた",
            "jp": "［何時（なんじ）まで 開（あ）いて いますか］。",
            "vn": "Mở đến mấy giờ ạ?"
          },
          {
            "speaker": "係員",
            "jp": "夜（よる） 8時（はちじ）までです。1週間（いっしゅうかん） 経（た）つと 警察（けいさつ）に 送（おく）られるので、早（はや）めに どうぞ。",
            "vn": "Đến 8 giờ tối. Qua 1 tuần sẽ chuyển sang cảnh sát nên hãy đi sớm."
          },
          {
            "speaker": "あなた",
            "jp": "［今日（きょう）の 授業（じゅぎょう）の 後（あと）で 行（い）きます。ありがとうございました］。",
            "vn": "Sau giờ học hôm nay tôi sẽ đi. Cảm ơn."
          }
        ]
      },
      {
        "id": "track-cd03-d7",
        "title": "Đi xe buýt lần đầu",
        "titleVn": "Đi xe buýt lần đầu",
        "category": "topic",
        "topicId": "cd03",
        "tag": "電車・バス・道・トラブル · Kịch bản 7",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、この バスは 市民（しみん）病院（びょういん）へ 行（い）きますか］。",
            "vn": "Xin lỗi, xe này có đi bệnh viện thành phố không ạ?"
          },
          {
            "speaker": "運転手",
            "jp": "はい、行（い）きますよ。",
            "vn": "Có, đi đấy."
          },
          {
            "speaker": "あなた",
            "jp": "［初（はじ）めて 乗（の）るんですが、お金（かね）は いつ 払（はら）いますか］。",
            "vn": "Lần đầu tôi đi, tiền trả lúc nào ạ?"
          },
          {
            "speaker": "運転手",
            "jp": "降（お）りる 時（とき）に 払（はら）います。乗（の）る 時（とき）に 整理券（せいりけん）を 取（と）って ください。",
            "vn": "Trả khi xuống. Khi lên hãy lấy phiếu số."
          },
          {
            "speaker": "あなた",
            "jp": "［ICカードの 場合（ばあい）も 整理券（せいりけん）が 要（い）りますか］。",
            "vn": "Trường hợp thẻ IC cũng cần phiếu số ạ?"
          },
          {
            "speaker": "運転手",
            "jp": "いいえ、ICカードなら、乗（の）る 時（とき）と 降（お）りる 時（とき）に タッチするだけです。",
            "vn": "Không, thẻ IC thì chỉ chạm lúc lên và lúc xuống."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。病院（びょういん）まで いくらですか］。",
            "vn": "Tôi hiểu. Đến bệnh viện bao nhiêu ạ?"
          },
          {
            "speaker": "運転手",
            "jp": "230円（にひゃくさんじゅうえん）です。前（まえ）の 運賃（うんちん）表（ひょう）を 見（み）て ください。",
            "vn": "230 yên. Xem bảng giá phía trước."
          },
          {
            "speaker": "あなた",
            "jp": "［病院（びょういん）に 着（つ）いたら、教（おし）えて いただけますか］。",
            "vn": "Đến bệnh viện báo giúp tôi được không ạ?"
          },
          {
            "speaker": "運転手",
            "jp": "いいですよ。アナウンスも ありますから。",
            "vn": "Được. Có cả thông báo nữa."
          },
          {
            "speaker": "乗客",
            "jp": "市民（しみん）病院（びょういん）は 6つ目（むっつめ）の バス停（てい）ですよ。",
            "vn": "(Hành khách) Bệnh viện thành phố là trạm thứ 6 đấy."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。降（お）りる 時（とき）は この ボタンを 押（お）せば いいですか］。",
            "vn": "Cảm ơn. Khi xuống bấm nút này là được ạ?"
          },
          {
            "speaker": "乗客",
            "jp": "ええ。アナウンスで 「次（つぎ）は 市民（しみん）病院（びょういん）」と 聞（き）こえたら、押（お）して ください。",
            "vn": "(Hành khách) Ừ. Nghe thông báo \"Trạm tiếp theo bệnh viện thành phố\" thì bấm."
          },
          {
            "speaker": "あなた",
            "jp": "［ボタンを 押（お）しました］。",
            "vn": "(Sau thông báo) Tôi bấm nút rồi."
          },
          {
            "speaker": "運転手",
            "jp": "市民（しみん）病院（びょういん）前（まえ）です。お降（お）りの 方（かた）は どうぞ。",
            "vn": "Trạm trước bệnh viện thành phố. Ai xuống xin mời."
          },
          {
            "speaker": "あなた",
            "jp": "［1,000円札（せんえんさつ）しか ないんですが、両替（りょうがえ）できますか］。",
            "vn": "Tôi chỉ có tờ 1.000 yên, đổi tiền lẻ được không ạ?"
          },
          {
            "speaker": "運転手",
            "jp": "はい、運賃箱（うんちんばこ）の ここに 入（い）れて ください。",
            "vn": "Được, cho vào chỗ này của hộp tiền."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございました］。",
            "vn": "Cảm ơn."
          }
        ]
      },
      {
        "id": "track-cd03-d8",
        "title": "Lạc đường, hỏi ở đồn cảnh sát",
        "titleVn": "Lạc đường, hỏi ở đồn cảnh sát",
        "category": "topic",
        "topicId": "cd03",
        "tag": "電車・バス・道・トラブル · Kịch bản 8",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、道（みち）に 迷（まよ）って しまったんですが］。",
            "vn": "Xin lỗi, tôi bị lạc đường."
          },
          {
            "speaker": "警察官",
            "jp": "どちらへ 行（い）きたいんですか。",
            "vn": "Bạn muốn đi đâu?"
          },
          {
            "speaker": "あなた",
            "jp": "［友達（ともだち）の 家（いえ）です。この 住所（じゅうしょ）へ 行（い）きたいんですが］。",
            "vn": "Nhà bạn tôi. Tôi muốn đến địa chỉ này."
          },
          {
            "speaker": "警察官",
            "jp": "さくら町（ちょう） 3丁目（さんちょうめ） 5番（ごばん）ですね。地図（ちず）で 見（み）ましょう。",
            "vn": "Sakura-chō khu 3, số 5 nhỉ. Xem bản đồ nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［スマホの 地図（ちず）を 見（み）たんですが、よく わかりませんでした］。",
            "vn": "Tôi xem bản đồ điện thoại nhưng không hiểu rõ lắm."
          },
          {
            "speaker": "警察官",
            "jp": "ここが 今（いま） いる 所（ところ）です。3丁目（さんちょうめ）は 川（かわ）の 向（む）こうですよ。",
            "vn": "Đây là chỗ bạn đang đứng. Khu 3 ở bên kia sông."
          },
          {
            "speaker": "あなた",
            "jp": "［川（かわ）を 渡（わた）らなければ ならないんですね］。",
            "vn": "Vậy phải qua sông nhỉ."
          },
          {
            "speaker": "警察官",
            "jp": "そうです。この 道（みち）を まっすぐ 行（い）くと、橋（はし）が あります。橋（はし）を 渡（わた）って、すぐ 左（ひだり）です。",
            "vn": "Đúng. Đi thẳng đường này có cây cầu. Qua cầu rẽ trái ngay."
          },
          {
            "speaker": "あなた",
            "jp": "［橋（はし）の 先（さき）を 左（ひだり）ですね。それから］？",
            "vn": "Qua cầu rẽ trái nhỉ. Sau đó ạ?"
          },
          {
            "speaker": "警察官",
            "jp": "郵便局（ゆうびんきょく）の 手前（てまえ）の 白（しろ）い マンションが 5番（ごばん）です。",
            "vn": "Tòa chung cư trắng trước bưu điện là số 5."
          },
          {
            "speaker": "あなた",
            "jp": "［郵便局（ゆうびんきょく）の 手前（てまえ）ですね。ここから 遠（とお）いですか］。",
            "vn": "Trước bưu điện nhỉ. Từ đây có xa không ạ?"
          },
          {
            "speaker": "警察官",
            "jp": "歩（ある）いて 15分（じゅうごふん）ぐらいです。友達（ともだち）に 電話（でんわ）して みては どうですか。",
            "vn": "Đi bộ khoảng 15 phút. Thử gọi điện cho bạn xem?"
          },
          {
            "speaker": "あなた",
            "jp": "［そうですね。電話（でんわ）して、迎（むか）えに 来（き）て もらえるか 聞（き）いて みます］。",
            "vn": "Đúng vậy. Tôi sẽ gọi thử hỏi bạn có đến đón được không."
          },
          {
            "speaker": "警察官",
            "jp": "それが いいですね。この 地図（ちず）を あげますよ。",
            "vn": "Thế thì tốt. Tôi đưa bạn bản đồ này."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。とても 助（たす）かりました］。",
            "vn": "Cảm ơn ạ. Giúp tôi nhiều lắm."
          },
          {
            "speaker": "警察官",
            "jp": "暗（くら）く なるから、気（き）を つけて。",
            "vn": "Trời sắp tối, cẩn thận nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、気（き）を つけます。失礼（しつれい）します］。",
            "vn": "Vâng, tôi sẽ cẩn thận. Tôi xin phép."
          }
        ]
      },
      {
        "id": "track-cd03-d9",
        "title": "Đi taxi đến bệnh viện",
        "titleVn": "Đi taxi đến bệnh viện",
        "category": "topic",
        "topicId": "cd03",
        "tag": "電車・バス・道・トラブル · Kịch bản 9",
        "lines": [
          {
            "speaker": "運転手",
            "jp": "どちらまで ですか。",
            "vn": "Quý khách đi đâu ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［市民（しみん）病院（びょういん）の 救急（きゅうきゅう）外来（がいらい）まで お願（ねが）いします］。",
            "vn": "Đến khoa cấp cứu bệnh viện thành phố giúp tôi."
          },
          {
            "speaker": "運転手",
            "jp": "かしこまりました。大丈夫（だいじょうぶ）ですか。",
            "vn": "Vâng ạ. Có sao không?"
          },
          {
            "speaker": "あなた",
            "jp": "［友達（ともだち）が 急（きゅう）に おなかが 痛（いた）く なったんです。できるだけ 急（いそ）いで いただけますか］。",
            "vn": "Bạn tôi đột nhiên đau bụng. Đi nhanh nhất có thể được không ạ?"
          },
          {
            "speaker": "運転手",
            "jp": "わかりました。この 時間（じかん）は 渋滞（じゅうたい）して いるので、近道（ちかみち）を 行（い）きますね。",
            "vn": "Hiểu rồi. Giờ này tắc đường nên tôi đi đường tắt nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［お願（ねが）いします。何分（なんぷん）ぐらい かかりますか］。",
            "vn": "Nhờ anh. Mất khoảng mấy phút ạ?"
          },
          {
            "speaker": "運転手",
            "jp": "15分（じゅうごふん）ぐらいです。",
            "vn": "Khoảng 15 phút."
          },
          {
            "speaker": "あなた",
            "jp": "［大丈夫（だいじょうぶ）？ もう すぐ 着（つ）くからね］。",
            "vn": "(Với bạn) Ổn không? Sắp đến rồi nhé."
          },
          {
            "speaker": "運転手",
            "jp": "窓（まど）を 少（すこ）し 開（あ）けましょうか。",
            "vn": "Tôi mở cửa sổ chút nhé?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、お願（ねが）いします。ありがとうございます］。",
            "vn": "Vâng, nhờ anh. Cảm ơn."
          },
          {
            "speaker": "運転手",
            "jp": "着（つ）きましたよ。救急（きゅうきゅう）の 入口（いりぐち）は こちらです。",
            "vn": "Đến rồi. Cửa cấp cứu ở đây."
          },
          {
            "speaker": "あなた",
            "jp": "［入口（いりぐち）の 前（まえ）で 止（と）めて ください。カードで 払（はら）えますか］。",
            "vn": "Dừng ở trước cửa giúp tôi. Trả thẻ được không?"
          },
          {
            "speaker": "運転手",
            "jp": "はい、使（つか）えます。2,860円（にせんはっぴゃくろくじゅうえん）です。",
            "vn": "Vâng, dùng được. 2.860 yên."
          },
          {
            "speaker": "あなた",
            "jp": "［領収書（りょうしゅうしょ）を ください］。",
            "vn": "Cho tôi biên lai."
          },
          {
            "speaker": "運転手",
            "jp": "はい、どうぞ。お大事（だいじ）に。",
            "vn": "Vâng, đây. Chúc bạn mau khỏe."
          },
          {
            "speaker": "あなた",
            "jp": "［急（いそ）いで くださって、本当（ほんとう）に ありがとうございました］。",
            "vn": "Cảm ơn anh rất nhiều vì đã đi nhanh giúp."
          },
          {
            "speaker": "運転手",
            "jp": "忘（わす）れ物（もの）は ありませんか。",
            "vn": "Có quên gì không ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［大丈夫（だいじょうぶ）です。失礼（しつれい）します］。",
            "vn": "Không ạ. Tôi xin phép."
          }
        ]
      },
      {
        "id": "track-cd03-d10",
        "title": "Xe đạp bị chuyển đi do đỗ sai chỗ",
        "titleVn": "Xe đạp bị chuyển đi do đỗ sai chỗ",
        "category": "topic",
        "topicId": "cd03",
        "tag": "電車・バス・道・トラブル · Kịch bản 10",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、ここに 止（と）めた 自転車（じてんしゃ）が なく なったんですが］。",
            "vn": "Xin lỗi, xe đạp tôi đỗ ở đây biến mất rồi."
          },
          {
            "speaker": "係員",
            "jp": "ここは 駐輪（ちゅうりん）禁止（きんし）なので、撤去（てっきょ）されたと 思（おも）います。",
            "vn": "Đây là chỗ cấm đỗ nên chắc xe bị dời đi rồi."
          },
          {
            "speaker": "あなた",
            "jp": "［え、盗（ぬす）まれたんじゃ ないんですか］。",
            "vn": "Hả, không phải bị trộm sao?"
          },
          {
            "speaker": "係員",
            "jp": "この 紙（かみ）を 見（み）て ください。「放置（ほうち）自転車（じてんしゃ）を 保管所（ほかんじょ）に 移（うつ）しました」と 書（か）いて あります。",
            "vn": "Xem tờ giấy này. Ghi \"Xe đạp bỏ không đã được chuyển đến bãi giữ\"."
          },
          {
            "speaker": "あなた",
            "jp": "［本当（ほんとう）だ……。気（き）が つきませんでした。保管所（ほかんじょ）は どこですか］。",
            "vn": "Đúng thật... Tôi không để ý. Bãi giữ ở đâu ạ?"
          },
          {
            "speaker": "係員",
            "jp": "駅（えき）の 南口（みなみぐち）を 出（で）て、5分（ごふん）ぐらいです。",
            "vn": "Ra cửa Nam ga khoảng 5 phút."
          },
          {
            "speaker": "あなた",
            "jp": "［取（と）りに 行（い）くには 何（なに）が 必要（ひつよう）ですか］。",
            "vn": "Đi lấy về thì cần gì ạ?"
          },
          {
            "speaker": "係員",
            "jp": "自転車（じてんしゃ）の 鍵（かぎ）と、身分証明書（みぶんしょうめいしょ）と、手数料（てすうりょう）の 2,000円（にせんえん）です。",
            "vn": "Chìa khóa xe, giấy tờ tùy thân và phí 2.000 yên."
          },
          {
            "speaker": "あなた",
            "jp": "［2,000円（にせんえん）も かかるんですか］。",
            "vn": "Mất những 2.000 yên ạ?"
          },
          {
            "speaker": "係員",
            "jp": "はい。決（き）まりですので。",
            "vn": "Vâng. Đó là quy định."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。自転車（じてんしゃ）は どこに 止（と）めれば よかったんですか］。",
            "vn": "Tôi hiểu. Đáng lẽ tôi nên đỗ xe ở đâu ạ?"
          },
          {
            "speaker": "係員",
            "jp": "駅（えき）の 東（ひがし）に 有料（ゆうりょう）の 駐輪場（ちゅうりんじょう）が あります。1日（いちにち） 100円（ひゃくえん）です。",
            "vn": "Phía Đông ga có bãi đỗ xe đạp có phí. 100 yên/ngày."
          },
          {
            "speaker": "あなた",
            "jp": "［毎日（まいにち） 使（つか）うので、月（つき） 単位（たんい）で 借（か）りられますか］。",
            "vn": "Tôi dùng hàng ngày, thuê theo tháng được không?"
          },
          {
            "speaker": "係員",
            "jp": "はい、定期（ていき）利用（りよう）なら 月（つき） 1,800円（せんはっぴゃくえん）です。市役所（しやくしょ）の ホームページから 申（もう）し込（こ）めますよ。",
            "vn": "Có, đăng ký định kỳ 1.800 yên/tháng. Đăng ký qua trang web tòa thị chính."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。今日（きょう） 申（もう）し込（こ）みます。これから 止（と）めないように 気（き）を つけます］。",
            "vn": "Cảm ơn. Hôm nay tôi sẽ đăng ký. Từ nay tôi sẽ chú ý không đỗ ở đây."
          },
          {
            "speaker": "係員",
            "jp": "そうして ください。保管所（ほかんじょ）は 夕方（ゆうがた） 6時（ろくじ）までですよ。",
            "vn": "Hãy làm vậy. Bãi giữ mở đến 6 giờ chiều đấy."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、今（いま）から すぐ 行（い）きます。教（おし）えて くださって、ありがとうございました］。",
            "vn": "Vậy tôi đi ngay bây giờ. Cảm ơn anh đã chỉ."
          }
        ]
      }
    ]
  },
  {
    "id": "pl-cd04",
    "title": "アパート・市役所（しやくしょ）・ごみ・ルール",
    "titleVn": "Nhà trọ, Tòa thị chính, Phân loại rác & Nội quy sinh hoạt",
    "description": "Trọn bộ 10 kịch bản đối thoại nhập vai thực tế trong tình huống: Nhà trọ, Tòa thị chính, Phân loại rác & Nội quy sinh hoạt.",
    "category": "topic",
    "badge": "🏠 NHÀ TRỌ & THỦ TỤC",
    "accentColor": "from-orange-500/20 to-red-500/10 border-orange-500/40 text-orange-600",
    "tracks": [
      {
        "id": "track-cd04-d1",
        "title": "Tìm phòng ở văn phòng bất động sản",
        "titleVn": "Tìm phòng ở văn phòng bất động sản",
        "category": "topic",
        "topicId": "cd04",
        "tag": "アパート・市役所・ごみ・ルール · Kịch bản 1",
        "lines": [
          {
            "speaker": "不動産屋",
            "jp": "いらっしゃいませ。どんな お部屋（へや）を お探（さが）しですか。",
            "vn": "Kính chào. Quý khách tìm phòng như thế nào ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［一人（ひとり）暮（ぐ）らし用（よう）の 部屋（へや）を 探（さが）して います］。",
            "vn": "Tôi đang tìm phòng cho người ở một mình."
          },
          {
            "speaker": "不動産屋",
            "jp": "ご希望（きぼう）の 場所（ばしょ）は ありますか。",
            "vn": "Quý khách muốn khu vực nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［みどり駅（えき）の 近（ちか）くが いいです。学校（がっこう）に 通（かよ）いやすいので］。",
            "vn": "Gần ga Midori thì tốt. Vì dễ đi học."
          },
          {
            "speaker": "不動産屋",
            "jp": "家賃（やちん）の ご予算（よさん）は？",
            "vn": "Ngân sách tiền thuê thế nào ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［駅（えき）から 徒歩（とほ） 10分（じゅっぷん）以内（いない）で、5万円（ごまんえん）ぐらいの 部屋（へや）は ありませんか］。",
            "vn": "Có phòng đi bộ trong 10 phút từ ga, khoảng 5 vạn yên không?"
          },
          {
            "speaker": "不動産屋",
            "jp": "こちらは いかがですか。徒歩（とほ） 7分（ななふん）、家賃（やちん） 4万8千円（よんまんはっせんえん）、築（ちく） 15年（じゅうごねん）です。",
            "vn": "Phòng này thì sao? Đi bộ 7 phút, 4 vạn 8 nghìn, xây 15 năm."
          },
          {
            "speaker": "あなた",
            "jp": "［管理費（かんりひ）は 家賃（やちん）に 含（ふく）まれて いますか］。",
            "vn": "Phí quản lý có bao gồm trong tiền thuê không ạ?"
          },
          {
            "speaker": "不動産屋",
            "jp": "いいえ、別（べつ）に 3,000円（さんぜんえん）です。",
            "vn": "Không, riêng 3.000 yên."
          },
          {
            "speaker": "あなた",
            "jp": "［敷金（しききん）と 礼金（れいきん）は 要（い）りますか］。",
            "vn": "Có cần tiền cọc và tiền lễ không ạ?"
          },
          {
            "speaker": "不動産屋",
            "jp": "敷金（しききん）が 1か月（いっかげつ）、礼金（れいきん）は ありません。",
            "vn": "Cọc 1 tháng, không có tiền lễ."
          },
          {
            "speaker": "あなた",
            "jp": "［最初（さいしょ）に 全部（ぜんぶ）で いくら かかりますか］。",
            "vn": "Ban đầu tổng cộng mất bao nhiêu ạ?"
          },
          {
            "speaker": "不動産屋",
            "jp": "敷金（しききん）と 最初（さいしょ）の 家賃（やちん）、仲介（ちゅうかい）手数料（てすうりょう）、保険（ほけん）で、だいたい 17万円（じゅうななまんえん）です。",
            "vn": "Cọc, tiền thuê tháng đầu, phí môi giới, bảo hiểm, khoảng 17 vạn yên."
          },
          {
            "speaker": "あなた",
            "jp": "［けっこう かかりますね。もう 少（すこ）し 安（やす）い 部屋（へや）は ありますか］。",
            "vn": "Khá tốn nhỉ. Có phòng rẻ hơn chút không?"
          },
          {
            "speaker": "不動産屋",
            "jp": "駅（えき）から 15分（じゅうごふん）なら、4万円（よんまんえん）の 部屋（へや）も あります。",
            "vn": "Cách ga 15 phút thì có phòng 4 vạn."
          },
          {
            "speaker": "あなた",
            "jp": "［自転車（じてんしゃ）が あるので、15分（じゅうごふん）でも 大丈夫（だいじょうぶ）です。両方（りょうほう） 見（み）せて いただけますか］。",
            "vn": "Tôi có xe đạp nên 15 phút cũng được. Cho tôi xem cả hai được không?"
          },
          {
            "speaker": "不動産屋",
            "jp": "はい、今日（きょう）の 午後（ごご）なら ご案内（あんない）できます。",
            "vn": "Vâng, chiều nay có thể dẫn đi."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、3時（さんじ）に お願（ねが）いします］。",
            "vn": "Vậy 3 giờ nhé."
          }
        ]
      },
      {
        "id": "track-cd04-d2",
        "title": "Xem phòng và hỏi trước khi ký hợp đồng",
        "titleVn": "Xem phòng và hỏi trước khi ký hợp đồng",
        "category": "topic",
        "topicId": "cd04",
        "tag": "アパート・市役所・ごみ・ルール · Kịch bản 2",
        "lines": [
          {
            "speaker": "不動産屋",
            "jp": "こちらが お部屋（へや）です。南向（みなみむ）きなので、日当（ひあ）たりが いいですよ。",
            "vn": "Đây là phòng. Hướng nam nên nhiều nắng."
          },
          {
            "speaker": "あなた",
            "jp": "［明（あか）るいですね。エアコンは 付（つ）いて いますか］。",
            "vn": "Sáng sủa nhỉ. Có điều hòa không ạ?"
          },
          {
            "speaker": "不動産屋",
            "jp": "はい、付（つ）いて います。",
            "vn": "Có ạ."
          },
          {
            "speaker": "あなた",
            "jp": "［インターネットは 使（つか）えますか］。",
            "vn": "Có dùng Internet được không?"
          },
          {
            "speaker": "不動産屋",
            "jp": "無料（むりょう）の Wi-Fiが あります。",
            "vn": "Có Wi-Fi miễn phí."
          },
          {
            "speaker": "あなた",
            "jp": "［隣（となり）の 部屋（へや）の 音（おと）は 聞（き）こえますか］。",
            "vn": "Có nghe tiếng phòng bên không ạ?"
          },
          {
            "speaker": "不動産屋",
            "jp": "鉄筋（てっきん）コンクリートなので、あまり 聞（き）こえませんよ。",
            "vn": "Bê tông cốt thép nên không nghe nhiều."
          },
          {
            "speaker": "あなた",
            "jp": "［料理（りょうり）を よく するんですが、ガスですか、IHですか］。",
            "vn": "Tôi hay nấu ăn, bếp gas hay bếp từ ạ?"
          },
          {
            "speaker": "不動産屋",
            "jp": "ガスです。2口（ふたくち）コンロですよ。",
            "vn": "Gas. Bếp 2 họng."
          },
          {
            "speaker": "あなた",
            "jp": "［外国人（がいこくじん）でも 契約（けいやく）できるか どうか、教（おし）えて いただけますか］。",
            "vn": "Cho tôi biết người nước ngoài có ký hợp đồng được không ạ?"
          },
          {
            "speaker": "不動産屋",
            "jp": "大丈夫（だいじょうぶ）です。保証会社（ほしょうがいしゃ）を 使（つか）えば、保証人（ほしょうにん）は 要（い）りません。",
            "vn": "Được ạ. Dùng công ty bảo lãnh thì không cần người bảo lãnh."
          },
          {
            "speaker": "あなた",
            "jp": "［保証会社（ほしょうがいしゃ）の 料金（りょうきん）は いくらですか］。",
            "vn": "Phí công ty bảo lãnh bao nhiêu?"
          },
          {
            "speaker": "不動産屋",
            "jp": "家賃（やちん）の 半分（はんぶん）ぐらいです。",
            "vn": "Khoảng một nửa tiền thuê."
          },
          {
            "speaker": "あなた",
            "jp": "［契約（けいやく）は 何年（なんねん）ですか。途中（とちゅう）で 出（で）る 時（とき）は どう なりますか］。",
            "vn": "Hợp đồng mấy năm? Giữa chừng chuyển đi thì sao ạ?"
          },
          {
            "speaker": "不動産屋",
            "jp": "2年（にねん）契約（けいやく）です。出（で）る 1か月前（いっかげつまえ）に 連絡（れんらく）すれば 大丈夫（だいじょうぶ）です。",
            "vn": "Hợp đồng 2 năm. Báo trước 1 tháng là được."
          },
          {
            "speaker": "あなた",
            "jp": "［いつから 入居（にゅうきょ）できますか］。",
            "vn": "Từ khi nào dọn vào được ạ?"
          },
          {
            "speaker": "不動産屋",
            "jp": "審査（しんさ）に 1週間（いっしゅうかん）ぐらい かかるので、来月（らいげつ）の 1日（ついたち）からです。",
            "vn": "Thẩm định mất khoảng 1 tuần nên từ ngày 1 tháng sau."
          },
          {
            "speaker": "あなた",
            "jp": "［この 部屋（へや）に します。申込書（もうしこみしょ）を いただけますか］。",
            "vn": "Tôi chọn phòng này. Cho tôi đơn đăng ký được không?"
          }
        ]
      },
      {
        "id": "track-cd04-d3",
        "title": "Đăng ký chuyển đến ở tòa thị chính",
        "titleVn": "Đăng ký chuyển đến ở tòa thị chính",
        "category": "topic",
        "topicId": "cd04",
        "tag": "アパート・市役所・ごみ・ルール · Kịch bản 3",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、引越（ひっこ）して 来（き）たので、転入届（てんにゅうとどけ）を 出（だ）したいんですが］。",
            "vn": "Xin lỗi, tôi mới chuyển đến nên muốn nộp đăng ký chuyển đến."
          },
          {
            "speaker": "職員",
            "jp": "はい。どちらから 引越（ひっこ）して 来（き）ましたか。",
            "vn": "Vâng. Chuyển đến từ đâu ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［同（おな）じ 東京（とうきょう）の さくら区（く）からです］。",
            "vn": "Từ quận Sakura cũng ở Tokyo."
          },
          {
            "speaker": "職員",
            "jp": "転出（てんしゅつ）証明書（しょうめいしょ）は お持（も）ちですか。",
            "vn": "Bạn có giấy chuyển đi không?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、前（まえ）の 区役所（くやくしょ）で もらいました。これです］。",
            "vn": "Có, tôi lấy ở văn phòng quận cũ. Đây ạ."
          },
          {
            "speaker": "職員",
            "jp": "ありがとうございます。在留（ざいりゅう）カードも お願（ねが）いします。",
            "vn": "Cảm ơn. Xin cả thẻ cư trú."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。どの 窓口（まどぐち）に 行（い）けば いいですか］。",
            "vn": "Vâng. Tôi đến quầy nào thì được ạ?"
          },
          {
            "speaker": "職員",
            "jp": "この 番号札（ばんごうふだ）を 取（と）って、3番（さんばん）の 窓口（まどぐち）で お待（ま）ち ください。その 前（まえ）に、この 用紙（ようし）に 記入（きにゅう）して ください。",
            "vn": "Lấy phiếu số này rồi chờ ở quầy số 3. Trước đó điền vào mẫu này."
          },
          {
            "speaker": "あなた",
            "jp": "［新（あたら）しい 住所（じゅうしょ）は 漢字（かんじ）で 書（か）かなければ なりませんか］。",
            "vn": "Địa chỉ mới có phải viết bằng kanji không ạ?"
          },
          {
            "speaker": "職員",
            "jp": "はい、住所（じゅうしょ）は 漢字（かんじ）で お願（ねが）いします。名前（なまえ）は 在留（ざいりゅう）カードと 同（おな）じ ローマ字（じ）で 大丈夫（だいじょうぶ）です。",
            "vn": "Vâng, địa chỉ viết kanji. Tên thì Romaji giống thẻ cư trú là được."
          },
          {
            "speaker": "あなた",
            "jp": "［「世帯主（せたいぬし）」と いうのは 何（なん）ですか］。",
            "vn": "\"Setainushi\" là gì ạ?"
          },
          {
            "speaker": "職員",
            "jp": "家族（かぞく）の 代表（だいひょう）です。一人（ひとり）暮（ぐ）らしなら、ご自分（じぶん）の 名前（なまえ）を 書（か）いて ください。",
            "vn": "Là người đại diện hộ. Sống một mình thì ghi tên mình."
          },
          {
            "speaker": "あなた",
            "jp": "わかりました。［これで いいですか］。",
            "vn": "Tôi hiểu. (Viết xong) Thế này được chưa ạ?"
          },
          {
            "speaker": "職員",
            "jp": "はい、大丈夫（だいじょうぶ）です。在留（ざいりゅう）カードの 裏（うら）に 新（あたら）しい 住所（じゅうしょ）を 書（か）きますね。",
            "vn": "Vâng, được rồi. Tôi sẽ ghi địa chỉ mới ở mặt sau thẻ cư trú."
          },
          {
            "speaker": "あなた",
            "jp": "［マイナンバーカードの 住所（じゅうしょ）も 変（か）えなければ なりませんか］。",
            "vn": "Địa chỉ thẻ My Number cũng phải đổi ạ?"
          },
          {
            "speaker": "職員",
            "jp": "はい、一緒（いっしょ）に できますよ。暗証番号（あんしょうばんごう）を 入（い）れて いただきます。",
            "vn": "Vâng, làm cùng luôn được. Bạn sẽ nhập mật mã."
          },
          {
            "speaker": "あなた",
            "jp": "［助（たす）かります。全部（ぜんぶ）で どのぐらい かかりますか］。",
            "vn": "Tốt quá. Tổng mất khoảng bao lâu?"
          },
          {
            "speaker": "職員",
            "jp": "30分（さんじゅっぷん）ぐらいです。呼（よ）ばれるまで お待（ま）ち ください。",
            "vn": "Khoảng 30 phút. Xin chờ đến khi được gọi."
          }
        ]
      },
      {
        "id": "track-cd04-d4",
        "title": "Đăng ký bảo hiểm y tế và lương hưu",
        "titleVn": "Đăng ký bảo hiểm y tế và lương hưu",
        "category": "topic",
        "topicId": "cd04",
        "tag": "アパート・市役所・ごみ・ルール · Kịch bản 4",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、国民健康保険（こくみんけんこうほけん）に 入（はい）りたいんですが］。",
            "vn": "Xin lỗi, tôi muốn tham gia bảo hiểm y tế quốc dân."
          },
          {
            "speaker": "職員",
            "jp": "はい。留学生（りゅうがくせい）の 方（かた）ですか。",
            "vn": "Vâng. Bạn là du học sinh à?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、日本語（にほんご）学校（がっこう）の 学生（がくせい）です］。",
            "vn": "Vâng, học viên trường tiếng Nhật."
          },
          {
            "speaker": "職員",
            "jp": "在留（ざいりゅう）カードと 学生証（がくせいしょう）を お願（ねが）いします。",
            "vn": "Xin thẻ cư trú và thẻ học viên."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、どうぞ。保険料（ほけんりょう）は 毎月（まいつき） いくらぐらいですか］。",
            "vn": "Vâng, đây ạ. Phí bảo hiểm mỗi tháng khoảng bao nhiêu?"
          },
          {
            "speaker": "職員",
            "jp": "去年（きょねん）の 所得（しょとく）が 少（すく）ない 方（かた）は 減額（げんがく）されるので、月（つき） 2,000円（にせんえん）ぐらいです。",
            "vn": "Người thu nhập năm ngoái thấp được giảm nên khoảng 2.000 yên/tháng."
          },
          {
            "speaker": "あなた",
            "jp": "［保険（ほけん）に 入（はい）ると、病院（びょういん）で いくら 払（はら）いますか］。",
            "vn": "Tham gia bảo hiểm rồi thì ở bệnh viện trả bao nhiêu?"
          },
          {
            "speaker": "職員",
            "jp": "医療費（いりょうひ）の 3割（さんわり）です。7割（ななわり）は 保険（ほけん）が 払（はら）います。",
            "vn": "30% chi phí y tế. 70% bảo hiểm chi trả."
          },
          {
            "speaker": "あなた",
            "jp": "［保険証（ほけんしょう）は いつ もらえますか］。",
            "vn": "Khi nào nhận được thẻ bảo hiểm?"
          },
          {
            "speaker": "職員",
            "jp": "1週間（いっしゅうかん）ぐらいで 郵便（ゆうびん）で 届（とど）きます。",
            "vn": "Khoảng 1 tuần sẽ gửi qua bưu điện."
          },
          {
            "speaker": "あなた",
            "jp": "［それから、年金（ねんきん）の 手紙（てがみ）が 来（き）たんですが、学生（がくせい）も 払（はら）わなければ なりませんか］。",
            "vn": "Ngoài ra, tôi nhận thư về lương hưu, sinh viên cũng phải đóng ạ?"
          },
          {
            "speaker": "職員",
            "jp": "20歳（はたち）以上（いじょう）の 方（かた）は 入（はい）らなければ なりません。でも、学生（がくせい）なら 「学生（がくせい）納付（のうふ）特例（とくれい）」が 申請（しんせい）できます。",
            "vn": "Từ 20 tuổi phải tham gia. Nhưng là sinh viên thì có thể xin \"hoãn đóng cho sinh viên\"."
          },
          {
            "speaker": "あなた",
            "jp": "［「学生（がくせい）納付（のうふ）特例（とくれい）」と いうのは 何（なん）ですか］。",
            "vn": "\"Gakusei nōfu tokurei\" là gì ạ?"
          },
          {
            "speaker": "職員",
            "jp": "学生（がくせい）の 間（あいだ）は、年金（ねんきん）を 払（はら）わなくても いい 制度（せいど）です。",
            "vn": "Là chế độ trong thời gian là sinh viên không cần đóng lương hưu."
          },
          {
            "speaker": "あなた",
            "jp": "［それは 助（たす）かります。申請（しんせい）するために、何（なに）が 必要（ひつよう）ですか］。",
            "vn": "Thế thì đỡ quá. Để xin cần gì ạ?"
          },
          {
            "speaker": "職員",
            "jp": "この 申請書（しんせいしょ）と 学生証（がくせいしょう）の コピーです。年金（ねんきん）の 窓口（まどぐち）は 隣（となり）の 5番（ごばん）です。",
            "vn": "Đơn này và bản sao thẻ học viên. Quầy lương hưu là số 5 bên cạnh."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。この 後（あと）、5番（ごばん）に 行（い）きます。ありがとうございました］。",
            "vn": "Tôi hiểu. Sau đây tôi qua quầy 5. Cảm ơn."
          }
        ]
      },
      {
        "id": "track-cd04-d5",
        "title": "Hỏi hàng xóm cách phân loại rác",
        "titleVn": "Hỏi hàng xóm cách phân loại rác",
        "category": "topic",
        "topicId": "cd04",
        "tag": "アパート・市役所・ごみ・ルール · Kịch bản 5",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［おはようございます。先週（せんしゅう） 203号室（にまるさんごうしつ）に 引越（ひっこ）して 来（き）た ミンです］。",
            "vn": "Chào buổi sáng. Tôi là Minh mới chuyển đến phòng 203 tuần trước."
          },
          {
            "speaker": "隣の人",
            "jp": "あら、よろしくね。私（わたし）は 201の 鈴木（すずき）です。",
            "vn": "Ồ, mong được giúp đỡ. Tôi là Suzuki phòng 201."
          },
          {
            "speaker": "あなた",
            "jp": "［よろしく お願（ねが）いします。あの、ごみの 出（だ）し方（かた）が よく わからないんですが］。",
            "vn": "Mong được giúp đỡ. À, tôi chưa hiểu rõ cách bỏ rác."
          },
          {
            "speaker": "隣の人",
            "jp": "この 町（まち）は 分別（ぶんべつ）が 厳（きび）しいのよ。",
            "vn": "Thành phố này phân loại nghiêm lắm."
          },
          {
            "speaker": "あなた",
            "jp": "［燃（も）える ごみは 何曜日（なんようび）ですか］。",
            "vn": "Rác cháy được bỏ thứ mấy?"
          },
          {
            "speaker": "隣の人",
            "jp": "月曜日（げつようび）と 木曜日（もくようび）。朝（あさ） 8時（はちじ）までに 出（だ）して ね。",
            "vn": "Thứ Hai và thứ Năm. Bỏ trước 8 giờ sáng nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［ペットボトルは どう やって 捨（す）てれば いいですか］。",
            "vn": "Chai nhựa vứt thế nào ạ?"
          },
          {
            "speaker": "隣の人",
            "jp": "キャップと ラベルを 取（と）って、中（なか）を 洗（あら）って から、水曜日（すいようび）に 出（だ）して。",
            "vn": "Bỏ nắp và nhãn, rửa bên trong rồi bỏ vào thứ Tư."
          },
          {
            "speaker": "あなた",
            "jp": "［キャップは 何（なに）ごみですか］。",
            "vn": "Nắp là loại rác gì ạ?"
          },
          {
            "speaker": "隣の人",
            "jp": "キャップと ラベルは プラスチックだから、金曜日（きんようび）の プラごみよ。",
            "vn": "Nắp và nhãn là nhựa nên bỏ rác nhựa thứ Sáu."
          },
          {
            "speaker": "あなた",
            "jp": "［複雑（ふくざつ）ですね。缶（かん）と 瓶（びん）は］？",
            "vn": "Phức tạp nhỉ. Lon và chai thủy tinh thì sao ạ?"
          },
          {
            "speaker": "隣の人",
            "jp": "缶（かん）と 瓶（びん）も 水曜日（すいようび）。でも、別々（べつべつ）の かごに 入（い）れてね。",
            "vn": "Lon và chai cũng thứ Tư. Nhưng bỏ vào giỏ riêng."
          },
          {
            "speaker": "あなた",
            "jp": "［決（き）まりを 守（まも）らないと、どう なりますか］。",
            "vn": "Nếu không giữ quy tắc thì sao ạ?"
          },
          {
            "speaker": "隣の人",
            "jp": "「収集（しゅうしゅう）できません」って シールを 貼（は）られて、持（も）って 行（い）って もらえないの。",
            "vn": "Bị dán tem \"Không thu gom được\" và không được mang đi."
          },
          {
            "speaker": "あなた",
            "jp": "［それは 困（こま）りますね。ごみの カレンダーは どこで もらえますか］。",
            "vn": "Thế thì khổ. Lịch rác lấy ở đâu ạ?"
          },
          {
            "speaker": "隣の人",
            "jp": "市役所（しやくしょ）で もらえるけど、市（し）の アプリも 便利（べんり）よ。外国語（がいこくご）も あるわ。",
            "vn": "Lấy ở tòa thị chính được, nhưng app của thành phố cũng tiện. Có cả ngoại ngữ."
          },
          {
            "speaker": "あなた",
            "jp": "［アプリ、入（い）れて みます。親切（しんせつ）に 教（おし）えて くださって、ありがとうございます］。",
            "vn": "Tôi sẽ cài thử app. Cảm ơn bác đã chỉ tận tình."
          }
        ]
      },
      {
        "id": "track-cd04-d6",
        "title": "Bị nhắc vì đổ rác sai",
        "titleVn": "Bị nhắc vì đổ rác sai",
        "category": "topic",
        "topicId": "cd04",
        "tag": "アパート・市役所・ごみ・ルール · Kịch bản 6",
        "lines": [
          {
            "speaker": "管理人",
            "jp": "すみません、203の 方（かた）ですか。",
            "vn": "Xin lỗi, bạn ở phòng 203 phải không?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、そうです。何（なに）か ありましたか］。",
            "vn": "Vâng, đúng vậy. Có chuyện gì ạ?"
          },
          {
            "speaker": "管理人",
            "jp": "昨日（きのう）、燃（も）えない ごみを 出（だ）しましたか。この 袋（ふくろ）なんですが。",
            "vn": "Hôm qua bạn có bỏ rác không cháy không? Túi này đây."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、私（わたし）の です。何（なに）か 問題（もんだい）が ありましたか］。",
            "vn": "Vâng, của tôi. Có vấn đề gì ạ?"
          },
          {
            "speaker": "管理人",
            "jp": "燃（も）えない ごみは 第（だい）2水曜日（にすいようび）だけなんですよ。昨日（きのう）は 回収（かいしゅう）されませんでした。",
            "vn": "Rác không cháy chỉ thứ Tư tuần thứ 2 thôi. Hôm qua không được thu."
          },
          {
            "speaker": "あなた",
            "jp": "［すみません、知（し）りませんでした。間違（まちが）えて しまいました］。",
            "vn": "Xin lỗi, tôi không biết. Tôi lỡ nhầm."
          },
          {
            "speaker": "管理人",
            "jp": "それから、生（なま）ごみが 入（はい）って いる 袋（ふくろ）は ネットの 中（なか）に 入（い）れて ください。カラスが 散（ち）らかすので。",
            "vn": "Ngoài ra túi có rác thải nhà bếp hãy bỏ vào trong lưới. Quạ hay bới."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。ネットを かけるのを 忘（わす）れて いました］。",
            "vn": "Tôi hiểu. Tôi quên phủ lưới."
          },
          {
            "speaker": "管理人",
            "jp": "最初（さいしょ）は みんな 間違（まちが）えますよ。",
            "vn": "Lúc đầu ai cũng nhầm thôi."
          },
          {
            "speaker": "あなた",
            "jp": "［この 袋（ふくろ）は すぐ 部屋（へや）に 戻（もど）します。次（つぎ）の 第（だい）2水曜日（にすいようび）に 出（だ）します］。",
            "vn": "Túi này tôi mang về phòng ngay. Thứ Tư tuần 2 tới tôi sẽ bỏ."
          },
          {
            "speaker": "管理人",
            "jp": "お願（ねが）いします。",
            "vn": "Nhờ bạn."
          },
          {
            "speaker": "あなた",
            "jp": "［ごみの 分別表（ぶんべつひょう）を いただけますか。部屋（へや）に 貼（は）って おきたいので］。",
            "vn": "Cho tôi xin bảng phân loại rác được không ạ? Tôi muốn dán sẵn trong phòng."
          },
          {
            "speaker": "管理人",
            "jp": "はい、どうぞ。ベトナム語（ご）の も ありますよ。",
            "vn": "Vâng, đây. Có cả bản tiếng Việt."
          },
          {
            "speaker": "あなた",
            "jp": "［本当（ほんとう）ですか。ベトナム語（ご）の を ください］。",
            "vn": "Thật ạ? Cho tôi bản tiếng Việt."
          },
          {
            "speaker": "管理人",
            "jp": "何（なに）か わからない ことが あったら、管理人室（かんりにんしつ）に 来（き）て くださいね。",
            "vn": "Có gì không hiểu thì đến phòng quản lý nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。ご迷惑（めいわく）を おかけしました］。",
            "vn": "Cảm ơn. Xin lỗi đã gây phiền."
          },
          {
            "speaker": "管理人",
            "jp": "いえいえ。これから よろしくね。",
            "vn": "Không sao. Từ giờ mong được giúp đỡ nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、これから 気（き）を つけます。よろしく お願（ねが）いします］。",
            "vn": "Vâng, từ giờ tôi sẽ cẩn thận. Mong được giúp đỡ."
          }
        ]
      },
      {
        "id": "track-cd04-d7",
        "title": "Hàng xóm phàn nàn tiếng ồn",
        "titleVn": "Hàng xóm phàn nàn tiếng ồn",
        "category": "topic",
        "topicId": "cd04",
        "tag": "アパート・市役所・ごみ・ルール · Kịch bản 7",
        "lines": [
          {
            "speaker": "下の階の人",
            "jp": "すみません、1階（いっかい）の 田村（たむら）ですが……。",
            "vn": "Xin lỗi, tôi là Tamura tầng 1..."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。どう されましたか］。",
            "vn": "Vâng. Có chuyện gì ạ?"
          },
          {
            "speaker": "下の階の人",
            "jp": "昨日（きのう）の 夜（よる）、12時（じゅうにじ）ごろまで 音（おと）が 大（おお）きかったんですが……。",
            "vn": "Tối qua đến khoảng 12 giờ tiếng hơi to..."
          },
          {
            "speaker": "あなた",
            "jp": "［うるさくして、すみませんでした。友達（ともだち）が 遊（あそ）びに 来（き）て いたんです］。",
            "vn": "Xin lỗi đã làm ồn. Bạn tôi đến chơi."
          },
          {
            "speaker": "下の階の人",
            "jp": "そうですか。笑（わら）い声（ごえ）と 足音（あしおと）が かなり 響（ひび）いて、眠（ねむ）れなかったんです。",
            "vn": "Vậy à. Tiếng cười và bước chân vang nhiều, tôi không ngủ được."
          },
          {
            "speaker": "あなた",
            "jp": "［そんなに 響（ひび）くとは 知（し）りませんでした。本当（ほんとう）に 申（もう）し訳（わけ）ありません］。",
            "vn": "Tôi không biết là vang đến thế. Thật sự xin lỗi."
          },
          {
            "speaker": "下の階の人",
            "jp": "古（ふる）い 建物（たてもの）なので、音（おと）が 下（した）に 聞（き）こえやすいんですよ。",
            "vn": "Tòa nhà cũ nên tiếng dễ vọng xuống dưới."
          },
          {
            "speaker": "あなた",
            "jp": "［これから 夜（よる） 10時（じゅうじ）以降（いこう）は 静（しず）かに する ように します］。",
            "vn": "Từ giờ sau 10 giờ tối tôi sẽ cố giữ yên lặng."
          },
          {
            "speaker": "下の階の人",
            "jp": "助（たす）かります。",
            "vn": "Thế thì tốt quá."
          },
          {
            "speaker": "あなた",
            "jp": "［足音（あしおと）が 響（ひび）かないように、床（ゆか）に ラグを 敷（し）こうと 思（おも）います］。",
            "vn": "Tôi định trải thảm sàn để bước chân không vang."
          },
          {
            "speaker": "下の階の人",
            "jp": "それは いいですね。ありがとうございます。",
            "vn": "Hay đấy. Cảm ơn."
          },
          {
            "speaker": "あなた",
            "jp": "［もし また うるさかったら、遠慮（えんりょ）しないで 教（おし）えて ください］。",
            "vn": "Nếu lại ồn xin đừng ngại báo tôi."
          },
          {
            "speaker": "下の階の人",
            "jp": "わかりました。わざわざ ありがとう。",
            "vn": "Tôi hiểu. Cảm ơn bạn."
          },
          {
            "speaker": "あなた",
            "jp": "［こちらこそ、直接（ちょくせつ） 言（い）って くださって ありがとうございました］。",
            "vn": "Tôi mới phải cảm ơn vì anh đã nói trực tiếp."
          },
          {
            "speaker": "下の階の人",
            "jp": "何（なに）か 困（こま）った ことが あったら、言（い）って くださいね。",
            "vn": "Có gì khó khăn cứ nói nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。これから よろしく お願（ねが）いします］。",
            "vn": "Vâng. Mong được giúp đỡ."
          }
        ]
      },
      {
        "id": "track-cd04-d8",
        "title": "Báo hỏng nước nóng với công ty quản lý",
        "titleVn": "Báo hỏng nước nóng với công ty quản lý",
        "category": "topic",
        "topicId": "cd04",
        "tag": "アパート・市役所・ごみ・ルール · Kịch bản 8",
        "lines": [
          {
            "speaker": "管理会社",
            "jp": "はい、さくら管理（かんり）です。",
            "vn": "Vâng, công ty quản lý Sakura xin nghe."
          },
          {
            "speaker": "あなた",
            "jp": "［もしもし、さくらハイツ 203号室（にまるさんごうしつ）の ミンですが］。",
            "vn": "Alo, tôi là Minh phòng 203 Sakura Heights."
          },
          {
            "speaker": "管理会社",
            "jp": "いつも お世話（せわ）に なって おります。どう されましたか。",
            "vn": "Cảm ơn quý khách. Có chuyện gì ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［今朝（けさ）から お湯（ゆ）が 出（で）ないんです］。",
            "vn": "Từ sáng nay nước nóng không ra."
          },
          {
            "speaker": "管理会社",
            "jp": "給湯器（きゅうとうき）の リモコンに 何（なに）か 表示（ひょうじ）が 出（で）て いますか。",
            "vn": "Điều khiển bình nóng lạnh có hiện gì không ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［「E-111」と 出（で）て います］。",
            "vn": "Hiện \"E-111\"."
          },
          {
            "speaker": "管理会社",
            "jp": "一度（いちど） 電源（でんげん）を 切（き）って、もう 一度（いちど） 入（い）れて みて いただけますか。",
            "vn": "Bạn thử tắt nguồn rồi bật lại một lần được không?"
          },
          {
            "speaker": "あなた",
            "jp": "［やって みましたが、まだ 出（で）ません］。",
            "vn": "...Tôi làm thử rồi nhưng vẫn không ra."
          },
          {
            "speaker": "管理会社",
            "jp": "わかりました。修理（しゅうり）業者（ぎょうしゃ）を 手配（てはい）します。",
            "vn": "Hiểu rồi. Tôi sẽ sắp xếp thợ sửa."
          },
          {
            "speaker": "あなた",
            "jp": "［いつ 来（き）て いただけますか。シャワーが 使（つか）えないので、困（こま）って いるんです］。",
            "vn": "Khi nào thợ đến được ạ? Không dùng được vòi sen nên tôi khổ lắm."
          },
          {
            "speaker": "管理会社",
            "jp": "今日（きょう）の 夕方（ゆうがた） 5時（ごじ）ごろは いかがですか。",
            "vn": "Khoảng 5 giờ chiều nay được không ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［私（わたし）が 部屋（へや）に いなければ なりませんか］。",
            "vn": "Tôi có phải ở nhà không ạ?"
          },
          {
            "speaker": "管理会社",
            "jp": "はい、立（た）ち会（あ）いを お願（ねが）いします。",
            "vn": "Vâng, xin có mặt."
          },
          {
            "speaker": "あなた",
            "jp": "［授業（じゅぎょう）が 4時（よじ）半（はん）に 終（お）わるので、5時（ごじ）半（はん）なら 大丈夫（だいじょうぶ）です］。",
            "vn": "Giờ học kết thúc 4 giờ rưỡi nên 5 giờ rưỡi thì được."
          },
          {
            "speaker": "管理会社",
            "jp": "では、5時（ごじ）半（はん）で 手配（てはい）します。",
            "vn": "Vậy tôi sắp xếp 5 giờ rưỡi."
          },
          {
            "speaker": "あなた",
            "jp": "［修理（しゅうり）の 費用（ひよう）は 私（わたし）が 払（はら）いますか］。",
            "vn": "Chi phí sửa tôi có phải trả không ạ?"
          },
          {
            "speaker": "管理会社",
            "jp": "設備（せつび）の 故障（こしょう）なので、費用（ひよう）は かかりません。",
            "vn": "Hỏng thiết bị nên không mất phí."
          },
          {
            "speaker": "あなた",
            "jp": "［よかったです。よろしく お願（ねが）いします］。",
            "vn": "May quá. Nhờ anh."
          }
        ]
      },
      {
        "id": "track-cd04-d9",
        "title": "Vứt rác cỡ lớn",
        "titleVn": "Vứt rác cỡ lớn",
        "category": "topic",
        "topicId": "cd04",
        "tag": "アパート・市役所・ごみ・ルール · Kịch bản 9",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［もしもし、古（ふる）い 机（つくえ）と 椅子（いす）を 捨（す）てたいんですが、どう すれば いいですか］。",
            "vn": "Alo, tôi muốn vứt bàn và ghế cũ, phải làm thế nào ạ?"
          },
          {
            "speaker": "受付センター",
            "jp": "粗大（そだい）ごみの お申（もう）し込（こ）みですね。お名前（なまえ）と ご住所（じゅうしょ）を お願（ねが）いします。",
            "vn": "Đăng ký rác cỡ lớn nhỉ. Xin tên và địa chỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［グエン・ミンです。住所（じゅうしょ）は みどり市（し） さくら町（ちょう） 2の 5の 3、203号室（にまるさんごうしつ）です］。",
            "vn": "Nguyễn Minh. Địa chỉ Midori, Sakura-chō 2-5-3, phòng 203."
          },
          {
            "speaker": "受付センター",
            "jp": "机（つくえ）の 大（おお）きさは どのぐらいですか。",
            "vn": "Bàn cỡ khoảng bao nhiêu?"
          },
          {
            "speaker": "あなた",
            "jp": "［幅（はば）が 1メートルぐらいです。椅子（いす）は 普通（ふつう）の 大（おお）きさです］。",
            "vn": "Rộng khoảng 1 mét. Ghế cỡ bình thường."
          },
          {
            "speaker": "受付センター",
            "jp": "机（つくえ）が 400円（よんひゃくえん）、椅子（いす）が 200円（にひゃくえん）で、合計（ごうけい） 600円（ろっぴゃくえん）です。",
            "vn": "Bàn 400 yên, ghế 200 yên, tổng 600 yên."
          },
          {
            "speaker": "あなた",
            "jp": "［お金（かね）は どう やって 払（はら）いますか］。",
            "vn": "Trả tiền thế nào ạ?"
          },
          {
            "speaker": "受付センター",
            "jp": "コンビニで 粗大（そだい）ごみ処理券（しょりけん）を 買（か）って ください。",
            "vn": "Hãy mua tem xử lý rác cỡ lớn ở konbini."
          },
          {
            "speaker": "あなた",
            "jp": "［どの コンビニでも 買（か）えますか］。",
            "vn": "Konbini nào cũng mua được ạ?"
          },
          {
            "speaker": "受付センター",
            "jp": "市内（しない）の コンビニなら どこでも 大丈夫（だいじょうぶ）です。",
            "vn": "Konbini trong thành phố thì đâu cũng được."
          },
          {
            "speaker": "あなた",
            "jp": "［買（か）った 後（あと）は どう しますか］。",
            "vn": "Mua xong thì làm sao ạ?"
          },
          {
            "speaker": "受付センター",
            "jp": "処理券（しょりけん）に 申込番号（もうしこみばんごう）を 書（か）いて、机（つくえ）と 椅子（いす）に 貼（は）って おいて ください。",
            "vn": "Ghi số đăng ký lên tem và dán sẵn vào bàn và ghế."
          },
          {
            "speaker": "あなた",
            "jp": "［いつ 出（だ）せば いいですか］。",
            "vn": "Bỏ ra khi nào ạ?"
          },
          {
            "speaker": "受付センター",
            "jp": "来週（らいしゅう）の 火曜日（かようび）です。朝（あさ） 8時（はちじ）までに 建物（たてもの）の 前（まえ）に 出（だ）して ください。申込番号（もうしこみばんごう）は 4521です。",
            "vn": "Thứ Ba tuần sau. Bỏ ra trước tòa nhà trước 8 giờ sáng. Số đăng ký là 4521."
          },
          {
            "speaker": "あなた",
            "jp": "［4521ですね。メモしました。ありがとうございました］。",
            "vn": "4521 nhỉ. Tôi ghi lại rồi. Cảm ơn."
          },
          {
            "speaker": "受付センター",
            "jp": "当日（とうじつ）は 立（た）ち会（あ）わなくても 大丈夫（だいじょうぶ）です。雨（あめ）の 日（ひ）も 回収（かいしゅう）します。",
            "vn": "Hôm đó không cần có mặt. Ngày mưa cũng thu gom."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。火曜日（かようび）の 朝（あさ）、忘（わす）れないように 出（だ）します］。",
            "vn": "Tôi hiểu. Sáng thứ Ba tôi sẽ bỏ ra, không quên."
          }
        ]
      },
      {
        "id": "track-cd04-d10",
        "title": "Báo chuyển đi và trả phòng",
        "titleVn": "Báo chuyển đi và trả phòng",
        "category": "topic",
        "topicId": "cd04",
        "tag": "アパート・市役所・ごみ・ルール · Kịch bản 10",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［大家（おおや）さん、お話（はなし）が あるんですが、今（いま） よろしいですか］。",
            "vn": "Thưa chủ nhà, tôi có chuyện muốn nói, bây giờ được không ạ?"
          },
          {
            "speaker": "大家",
            "jp": "ええ、どうぞ。",
            "vn": "Ừ, mời cháu."
          },
          {
            "speaker": "あなた",
            "jp": "［実（じつ）は、大阪（おおさか）の 大学（だいがく）に 合格（ごうかく）して、3月（さんがつ）末（まつ）に 引越（ひっこ）す ことに なりました］。",
            "vn": "Thật ra tôi đỗ đại học ở Osaka nên cuối tháng 3 sẽ chuyển đi."
          },
          {
            "speaker": "大家",
            "jp": "まあ、おめでとう！ 寂（さび）しく なるわね。",
            "vn": "Ồ, chúc mừng! Sẽ buồn lắm đây."
          },
          {
            "speaker": "あなた",
            "jp": "［2年間（にねんかん） 本当（ほんとう）に お世話（せわ）に なりました］。",
            "vn": "2 năm qua thật sự cảm ơn bác đã giúp đỡ."
          },
          {
            "speaker": "大家",
            "jp": "こちらこそ。解約（かいやく）の 書類（しょるい）を 書（か）いて もらわないと いけないわね。",
            "vn": "Bác mới phải cảm ơn. Cháu phải viết giấy hủy hợp đồng nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［いつまでに 出（だ）せば いいですか］。",
            "vn": "Nộp trước khi nào ạ?"
          },
          {
            "speaker": "大家",
            "jp": "1か月前（いっかげつまえ）だから、2月（にがつ）末（まつ）までに お願（ねが）いね。",
            "vn": "Trước 1 tháng nên trước cuối tháng 2 nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。部屋（へや）の 掃除（そうじ）は どこまで すれば いいですか］。",
            "vn": "Tôi hiểu. Dọn phòng đến mức nào thì được ạ?"
          },
          {
            "speaker": "大家",
            "jp": "普通（ふつう）に きれいに して くれれば 大丈夫（だいじょうぶ）よ。壁（かべ）に 穴（あな）とか ある？",
            "vn": "Dọn sạch bình thường là được. Tường có lỗ gì không?"
          },
          {
            "speaker": "あなた",
            "jp": "［ポスターを 貼（は）った 跡（あと）が 少（すこ）し あります。直（なお）さなければ なりませんか］。",
            "vn": "Có chút vết dán áp phích. Tôi có phải sửa không ạ?"
          },
          {
            "speaker": "大家",
            "jp": "それぐらいなら 大丈夫（だいじょうぶ）。普通（ふつう）に 使（つか）った 跡（あと）だからね。",
            "vn": "Cỡ đó thì không sao. Là dấu vết dùng bình thường."
          },
          {
            "speaker": "あなた",
            "jp": "［敷金（しききん）は 返（かえ）して いただけますか］。",
            "vn": "Tiền cọc có được trả lại không ạ?"
          },
          {
            "speaker": "大家",
            "jp": "掃除（そうじ）の 費用（ひよう）を 引（ひ）いて、残（のこ）りを 振（ふ）り込（こ）むわ。退去（たいきょ）の 日（ひ）に 一緒（いっしょ）に 部屋（へや）を 確認（かくにん）しましょう。",
            "vn": "Trừ phí dọn dẹp rồi chuyển khoản phần còn lại. Ngày trả phòng cùng kiểm tra phòng nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。鍵（かぎ）は その 日（ひ）に お返（かえ）しします］。",
            "vn": "Vâng. Chìa khóa tôi sẽ trả hôm đó."
          },
          {
            "speaker": "大家",
            "jp": "大阪（おおさか）でも 頑張（がんば）ってね。",
            "vn": "Ở Osaka cũng cố lên nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。大阪（おおさか）に 遊（あそ）びに 来（き）たら、案内（あんない）しますね］。",
            "vn": "Cảm ơn bác. Nếu bác đến Osaka chơi tôi sẽ dẫn đi."
          }
        ]
      }
    ]
  },
  {
    "id": "pl-cd05",
    "title": "病院（びょういん）・健康（けんこう）・薬局（やっきょく）",
    "titleVn": "Phòng khám, Sức khỏe & Hiệu thuốc · Khai báo triệu chứng, Nghe lời khuyên bác sĩ, Suy đoán và Thay đổi thói quen",
    "description": "Trọn bộ 10 kịch bản đối thoại nhập vai thực tế trong tình huống: Phòng khám, Sức khỏe & Hiệu thuốc · Khai báo triệu chứng, Nghe lời khuyên bác sĩ, Suy đoán và Thay đổi thói quen.",
    "category": "topic",
    "badge": "🩺 Y TẾ & THUỐC",
    "accentColor": "from-rose-500/20 to-pink-500/10 border-rose-500/40 text-rose-600",
    "tracks": [
      {
        "id": "track-cd05-d1",
        "title": "Đăng ký khám lần đầu ở quầy tiếp tân",
        "titleVn": "Đăng ký khám lần đầu ở quầy tiếp tân",
        "category": "topic",
        "topicId": "cd05",
        "tag": "病院・健康・薬局 · Kịch bản 1",
        "lines": [
          {
            "speaker": "受付",
            "jp": "こんにちは。今日（きょう）は どう されましたか。",
            "vn": "Xin chào. Hôm nay bạn bị sao ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［初診（しょしん）なんですが、昨日（きのう）から 熱（ねつ）が あって、のどが 痛（いた）いんです］。",
            "vn": "Tôi khám lần đầu, từ hôm qua sốt và đau họng."
          },
          {
            "speaker": "受付",
            "jp": "保険証（ほけんしょう）を お持（も）ちですか。",
            "vn": "Bạn có thẻ bảo hiểm không ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、これです］。",
            "vn": "Có, đây ạ."
          },
          {
            "speaker": "受付",
            "jp": "ありがとうございます。この 問診票（もんしんひょう）に 記入（きにゅう）して ください。",
            "vn": "Cảm ơn. Hãy điền vào phiếu khai bệnh này."
          },
          {
            "speaker": "あなた",
            "jp": "［日本語（にほんご）が わからない ところが あったら、聞（き）いても いいですか］。",
            "vn": "Nếu có chỗ tiếng Nhật không hiểu, tôi hỏi được không?"
          },
          {
            "speaker": "受付",
            "jp": "もちろんです。英語（えいご）の 問診票（もんしんひょう）も ありますよ。",
            "vn": "Tất nhiên. Có cả phiếu tiếng Anh."
          },
          {
            "speaker": "あなた",
            "jp": "［日本語（にほんご）で 書（か）いて みます。「既往歴（きおうれき）」と いうのは 何（なん）ですか］。",
            "vn": "Tôi thử viết bằng tiếng Nhật. \"Kiōreki\" là gì ạ?"
          },
          {
            "speaker": "受付",
            "jp": "今（いま）までに かかった 大（おお）きい 病気（びょうき）の ことです。",
            "vn": "Là những bệnh lớn từng mắc từ trước đến nay."
          },
          {
            "speaker": "あなた",
            "jp": "［特（とく）に ありません。アレルギーの ところも 書（か）けば いいですか］。",
            "vn": "Không có gì đặc biệt. Phần dị ứng cũng ghi vào ạ?"
          },
          {
            "speaker": "受付",
            "jp": "はい、薬（くすり）や 食（た）べ物（もの）の アレルギーが あったら 書（か）いて ください。それから、熱（ねつ）を 測（はか）って ください。",
            "vn": "Vâng, nếu dị ứng thuốc hay đồ ăn thì ghi vào. Rồi đo nhiệt độ."
          },
          {
            "speaker": "あなた",
            "jp": "［38度（さんじゅうはちど） 2分（にぶ）でした］。",
            "vn": "(Đo xong) 38,2 độ ạ."
          },
          {
            "speaker": "受付",
            "jp": "わかりました。待合室（まちあいしつ）で お待（ま）ち ください。",
            "vn": "Hiểu rồi. Xin chờ ở phòng chờ."
          },
          {
            "speaker": "あなた",
            "jp": "［どのぐらい 待（ま）ちますか］。",
            "vn": "Chờ khoảng bao lâu ạ?"
          },
          {
            "speaker": "受付",
            "jp": "今日（きょう）は 混（こ）んで いるので、30分（さんじゅっぷん）ぐらいです。",
            "vn": "Hôm nay đông nên khoảng 30 phút."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。お手洗（てあら）いは どこですか］。",
            "vn": "Tôi hiểu. Nhà vệ sinh ở đâu ạ?"
          },
          {
            "speaker": "受付",
            "jp": "廊下（ろうか）の 奥（おく）です。お名前（なまえ）を お呼（よ）び しますね。",
            "vn": "Cuối hành lang. Chúng tôi sẽ gọi tên bạn."
          }
        ]
      },
      {
        "id": "track-cd05-d2",
        "title": "Khai triệu chứng với bác sĩ",
        "titleVn": "Khai triệu chứng với bác sĩ",
        "category": "topic",
        "topicId": "cd05",
        "tag": "病院・健康・薬局 · Kịch bản 2",
        "lines": [
          {
            "speaker": "医者",
            "jp": "グエンさん、どう しましたか。",
            "vn": "Anh Nguyễn, bạn bị sao?"
          },
          {
            "speaker": "あなた",
            "jp": "［おとといの 夜（よる）から のどが 痛（いた）くて、昨日（きのう）から 熱（ねつ）も あります］。",
            "vn": "Từ tối hôm kia đau họng, từ hôm qua sốt nữa."
          },
          {
            "speaker": "医者",
            "jp": "咳（せき）は 出（で）ますか。",
            "vn": "Có ho không?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、夜（よる）に なると、咳（せき）が ひどく なります］。",
            "vn": "Có, đến tối ho nặng hơn."
          },
          {
            "speaker": "医者",
            "jp": "鼻水（はなみず）は？",
            "vn": "Nước mũi thì sao?"
          },
          {
            "speaker": "あなた",
            "jp": "［少（すこ）し 出（で）ます。それから、体（からだ）が だるくて、寒気（さむけ）も します］。",
            "vn": "Có chút. Ngoài ra người uể oải, còn ớn lạnh."
          },
          {
            "speaker": "医者",
            "jp": "食事（しょくじ）は できて いますか。",
            "vn": "Ăn uống được không?"
          },
          {
            "speaker": "あなた",
            "jp": "［のどが 痛（いた）くて、あまり 食（た）べられません。おかゆだけ 食（た）べました］。",
            "vn": "Đau họng nên không ăn được nhiều. Chỉ ăn cháo."
          },
          {
            "speaker": "医者",
            "jp": "では、口（くち）を 大（おお）きく 開（あ）けて ください。……のどが かなり 腫（は）れて いますね。",
            "vn": "Vậy há miệng to ra... Họng sưng khá nhiều."
          },
          {
            "speaker": "あなた",
            "jp": "［インフルエンザでしょうか］。",
            "vn": "Có phải cúm không ạ?"
          },
          {
            "speaker": "医者",
            "jp": "念（ねん）の ため、検査（けんさ）を しましょう。鼻（はな）に 綿棒（めんぼう）を 入（い）れますよ。",
            "vn": "Để chắc chắn, xét nghiệm nhé. Tôi cho que bông vào mũi."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、お願（ねが）いします］。",
            "vn": "Vâng, nhờ bác sĩ."
          },
          {
            "speaker": "医者",
            "jp": "検査（けんさ）の 結果（けっか）、インフルエンザでは ありませんでした。風邪（かぜ）だと 思（おも）います。",
            "vn": "(10 phút sau) Không phải cúm. Tôi nghĩ là cảm."
          },
          {
            "speaker": "あなた",
            "jp": "［よかったです。学校（がっこう）には いつから 行（い）けますか］。",
            "vn": "May quá. Khi nào tôi đi học được ạ?"
          },
          {
            "speaker": "医者",
            "jp": "熱（ねつ）が 下（さ）がってから、1日（いちにち） 休（やす）んで ください。",
            "vn": "Sau khi hạ sốt, nghỉ thêm 1 ngày."
          },
          {
            "speaker": "あなた",
            "jp": "［お風呂（ふろ）に 入（はい）っても いいですか］。",
            "vn": "Tôi tắm được không ạ?"
          },
          {
            "speaker": "医者",
            "jp": "熱（ねつ）が ある 間（あいだ）は、シャワーだけに して ください。",
            "vn": "Trong lúc còn sốt thì chỉ tắm vòi sen thôi."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。ありがとうございました］。",
            "vn": "Tôi hiểu. Cảm ơn bác sĩ."
          }
        ]
      },
      {
        "id": "track-cd05-d3",
        "title": "Báo dị ứng và nghe lời khuyên",
        "titleVn": "Báo dị ứng và nghe lời khuyên",
        "category": "topic",
        "topicId": "cd05",
        "tag": "病院・健康・薬局 · Kịch bản 3",
        "lines": [
          {
            "speaker": "医者",
            "jp": "風邪（かぜ）薬（ぐすり）と、のどの 薬（くすり）を 出（だ）しますね。",
            "vn": "Tôi kê thuốc cảm và thuốc họng nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［すみません、私（わたし）は 薬（くすり）の アレルギーが あるんですが］。",
            "vn": "Xin lỗi, tôi bị dị ứng thuốc."
          },
          {
            "speaker": "医者",
            "jp": "何（なん）の 薬（くすり）ですか。",
            "vn": "Thuốc gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［ペニシリンです。前（まえ）に 飲（の）んだ 時（とき）、体（からだ）中（じゅう）に 発疹（ほっしん）が 出（で）た ことが あります］。",
            "vn": "Penicillin. Trước đây uống thì nổi ban khắp người."
          },
          {
            "speaker": "医者",
            "jp": "わかりました。ペニシリンは 使（つか）いません。ほかに アレルギーは ありますか。",
            "vn": "Hiểu rồi. Không dùng penicillin. Còn dị ứng gì khác không?"
          },
          {
            "speaker": "あなた",
            "jp": "［食（た）べ物（もの）は エビが だめです］。",
            "vn": "Đồ ăn thì không ăn được tôm."
          },
          {
            "speaker": "医者",
            "jp": "エビですね。カルテに 書（か）いて おきます。",
            "vn": "Tôm nhỉ. Tôi ghi vào bệnh án."
          },
          {
            "speaker": "あなた",
            "jp": "［家（いえ）で 何（なに）に 気（き）を つけた ほうが いいですか］。",
            "vn": "Ở nhà tôi nên chú ý gì ạ?"
          },
          {
            "speaker": "医者",
            "jp": "水分（すいぶん）を たくさん 取（と）って、ゆっくり 寝（ね）た ほうが いいですね。",
            "vn": "Nên uống nhiều nước và ngủ nghỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［アルバイトは 休（やす）んだ ほうが いいですか］。",
            "vn": "Tôi có nên nghỉ làm thêm không ạ?"
          },
          {
            "speaker": "医者",
            "jp": "はい。人（ひと）に うつるので、熱（ねつ）が ある 間（あいだ）は 休（やす）んで ください。",
            "vn": "Có. Lây cho người khác nên trong lúc sốt hãy nghỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［お酒（さけ）は 飲（の）まない ほうが いいですよね］。",
            "vn": "Không nên uống rượu nhỉ."
          },
          {
            "speaker": "医者",
            "jp": "そうですね。薬（くすり）を 飲（の）んで いる 間（あいだ）は、飲（の）まないで ください。",
            "vn": "Đúng. Trong thời gian uống thuốc đừng uống."
          },
          {
            "speaker": "あなた",
            "jp": "［熱（ねつ）が 下（さ）がらなかったら、また 来（き）た ほうが いいですか］。",
            "vn": "Nếu không hạ sốt có nên quay lại không ạ?"
          },
          {
            "speaker": "医者",
            "jp": "3日（みっか） 経（た）っても 下（さ）がらなかったら、もう 一度（いちど） 来（き）て ください。",
            "vn": "Nếu qua 3 ngày không hạ thì đến lại."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。早（はや）く 寝（ね）る ように します］。",
            "vn": "Tôi hiểu. Tôi sẽ cố ngủ sớm."
          },
          {
            "speaker": "医者",
            "jp": "お大事（だいじ）に。",
            "vn": "Mau khỏe nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございました］。",
            "vn": "Cảm ơn bác sĩ."
          }
        ]
      },
      {
        "id": "track-cd05-d4",
        "title": "Nhận thuốc ở hiệu thuốc",
        "titleVn": "Nhận thuốc ở hiệu thuốc",
        "category": "topic",
        "topicId": "cd05",
        "tag": "病院・健康・薬局 · Kịch bản 4",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、処方箋（しょほうせん）を お願（ねが）いします］。",
            "vn": "Xin lỗi, đây là đơn thuốc."
          },
          {
            "speaker": "薬剤師",
            "jp": "はい。お薬手帳（くすりてちょう）は お持（も）ちですか。",
            "vn": "Vâng. Bạn có sổ thuốc không?"
          },
          {
            "speaker": "あなた",
            "jp": "［いいえ、持（も）って いません。作（つく）った ほうが いいですか］。",
            "vn": "Không, tôi không có. Có nên làm không ạ?"
          },
          {
            "speaker": "薬剤師",
            "jp": "あると 便利（べんり）ですよ。どの 薬（くすり）を 飲（の）んだか、医者（いしゃ）が すぐ わかりますから。",
            "vn": "Có thì tiện. Bác sĩ biết ngay bạn đã uống thuốc gì."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、作（つく）って ください］。",
            "vn": "Vậy làm giúp tôi."
          },
          {
            "speaker": "薬剤師",
            "jp": "ジェネリック医薬品（いやくひん）でも よろしいですか。少（すこ）し 安（やす）く なります。",
            "vn": "Thuốc generic có được không? Rẻ hơn một chút."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、それで お願（ねが）いします。この 薬（くすり）は 1日（いちにち） 何回（なんかい） 飲（の）みますか］。",
            "vn": "Vâng, nhờ chị. Thuốc này 1 ngày uống mấy lần?"
          },
          {
            "speaker": "薬剤師",
            "jp": "白（しろ）い 薬（くすり）は 1日（いちにち） 3回（さんかい）、食後（しょくご）に 2錠（にじょう）ずつ 飲（の）んで ください。",
            "vn": "Thuốc trắng 1 ngày 3 lần, sau ăn mỗi lần 2 viên."
          },
          {
            "speaker": "あなた",
            "jp": "［ピンクの 薬（くすり）は］？",
            "vn": "Còn thuốc hồng ạ?"
          },
          {
            "speaker": "薬剤師",
            "jp": "これは 咳止（せきど）めです。寝（ね）る 前（まえ）に 1錠（いちじょう）です。少（すこ）し 眠（ねむ）く なる ことが あります。",
            "vn": "Đây là thuốc ho. Trước khi ngủ 1 viên. Có thể hơi buồn ngủ."
          },
          {
            "speaker": "あなた",
            "jp": "［朝（あさ）ご飯（はん）を 食（た）べない 時（とき）は どう しますか］。",
            "vn": "Khi không ăn sáng thì sao ạ?"
          },
          {
            "speaker": "薬剤師",
            "jp": "パンや ヨーグルトなど、少（すこ）しでも 何（なに）か 食（た）べてから 飲（の）んで ください。",
            "vn": "Hãy ăn chút gì như bánh mì, sữa chua rồi mới uống."
          },
          {
            "speaker": "あなた",
            "jp": "［飲（の）むのを 忘（わす）れた 時（とき）は、2回分（にかいぶん） 飲（の）んでも いいですか］。",
            "vn": "Khi quên uống thì uống 2 liều được không ạ?"
          },
          {
            "speaker": "薬剤師",
            "jp": "いいえ、2回分（にかいぶん）は 飲（の）まないで ください。次（つぎ）の 時間（じかん）から 1回分（いっかいぶん） 飲（の）んで ください。",
            "vn": "Không, đừng uống 2 liều. Từ lần sau uống 1 liều."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。市販（しはん）の ビタミン剤（ざい）と 一緒（いっしょ）に 飲（の）んでも 大丈夫（だいじょうぶ）ですか］。",
            "vn": "Tôi hiểu. Uống cùng vitamin mua ngoài được không ạ?"
          },
          {
            "speaker": "薬剤師",
            "jp": "ビタミンなら 大丈夫（だいじょうぶ）です。全部（ぜんぶ）で 5日分（いつかぶん）です。お会計（かいけい）は 820円（はっぴゃくにじゅうえん）です。",
            "vn": "Vitamin thì không sao. Tổng 5 ngày thuốc. Thanh toán 820 yên."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。丁寧（ていねい）に 説明（せつめい）して くださって、ありがとうございます］。",
            "vn": "Vâng. Cảm ơn chị giải thích tận tình."
          }
        ]
      },
      {
        "id": "track-cd05-d5",
        "title": "Gọi cấp cứu 119",
        "titleVn": "Gọi cấp cứu 119",
        "category": "topic",
        "topicId": "cd05",
        "tag": "病院・健康・薬局 · Kịch bản 5",
        "lines": [
          {
            "speaker": "消防",
            "jp": "119番（ひゃくじゅうきゅうばん）消防（しょうぼう）です。火事（かじ）ですか、救急（きゅうきゅう）ですか。",
            "vn": "Đây là cứu hỏa 119. Cháy hay cấp cứu?"
          },
          {
            "speaker": "あなた",
            "jp": "［救急（きゅうきゅう）です］。",
            "vn": "Cấp cứu."
          },
          {
            "speaker": "消防",
            "jp": "住所（じゅうしょ）を 教（おし）えて ください。",
            "vn": "Cho biết địa chỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［みどり市（し） さくら町（ちょう） 2の 5の 3、さくらハイツ 203号室（にまるさんごうしつ）です］。",
            "vn": "Midori, Sakura-chō 2-5-3, Sakura Heights phòng 203."
          },
          {
            "speaker": "消防",
            "jp": "どう しましたか。",
            "vn": "Có chuyện gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［友達（ともだち）が 急（きゅう）に 倒（たお）れて、意識（いしき）が ありません］。",
            "vn": "Bạn tôi đột nhiên ngã và bất tỉnh."
          },
          {
            "speaker": "消防",
            "jp": "息（いき）は して いますか。",
            "vn": "Có thở không?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、息（いき）は して います］。",
            "vn": "Có, vẫn thở."
          },
          {
            "speaker": "消防",
            "jp": "その 方（かた）は 何歳（なんさい）ですか。持病（じびょう）は ありますか。",
            "vn": "Người đó bao nhiêu tuổi? Có bệnh mãn tính không?"
          },
          {
            "speaker": "あなた",
            "jp": "［22歳（にじゅうにさい）です。持病（じびょう）が あるか どうか、わかりません］。",
            "vn": "22 tuổi. Tôi không biết có bệnh mãn tính không."
          },
          {
            "speaker": "消防",
            "jp": "わかりました。救急車（きゅうきゅうしゃ）が すぐ 向（む）かいます。あなたの お名前（なまえ）と 電話番号（でんわばんごう）は？",
            "vn": "Hiểu rồi. Xe cấp cứu đang đến ngay. Tên và số điện thoại của bạn?"
          },
          {
            "speaker": "あなた",
            "jp": "［グエン・ミンです。電話番号（でんわばんごう）は 090-1234-5678です］。",
            "vn": "Nguyễn Minh. Số 090-1234-5678."
          },
          {
            "speaker": "消防",
            "jp": "近（ちか）くに 目印（めじるし）は ありますか。",
            "vn": "Gần đó có mốc gì không?"
          },
          {
            "speaker": "あなた",
            "jp": "［コンビニの 向（む）かいの 白（しろ）い マンションです］。",
            "vn": "Chung cư trắng đối diện konbini."
          },
          {
            "speaker": "消防",
            "jp": "救急車（きゅうきゅうしゃ）が 着（つ）くまで、その 方（かた）の そばに いて ください。横（よこ）に 寝（ね）かせて ください。",
            "vn": "Đến khi xe cấp cứu tới, hãy ở bên cạnh người đó. Cho nằm nghiêng."
          },
          {
            "speaker": "あなた",
            "jp": "［横（よこ）に 寝（ね）かせました。何（なに）か ほかに する ことは ありますか］。",
            "vn": "Tôi đã cho nằm nghiêng. Còn việc gì khác không ạ?"
          },
          {
            "speaker": "消防",
            "jp": "保険証（ほけんしょう）と 在留（ざいりゅう）カードを 準備（じゅんび）して おいて ください。",
            "vn": "Hãy chuẩn bị sẵn thẻ bảo hiểm và thẻ cư trú."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。救急車（きゅうきゅうしゃ）が 来（き）たら、外（そと）で 待（ま）って います］。",
            "vn": "Tôi hiểu. Xe đến thì tôi sẽ đợi ở ngoài."
          }
        ]
      },
      {
        "id": "track-cd05-d6",
        "title": "Đặt lịch và khám nha khoa",
        "titleVn": "Đặt lịch và khám nha khoa",
        "category": "topic",
        "topicId": "cd05",
        "tag": "病院・健康・薬局 · Kịch bản 6",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［もしもし、奥歯（おくば）が 痛（いた）いので、予約（よやく）を したいんですが］。",
            "vn": "Alo, tôi đau răng hàm nên muốn đặt lịch."
          },
          {
            "speaker": "歯医者・受付",
            "jp": "初（はじ）めての 方（かた）ですか。いつが よろしいですか。",
            "vn": "Bạn lần đầu đến à? Khi nào thì tiện?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、初（はじ）めてです。明日（あした）の 夕方（ゆうがた）は 空（あ）いて いますか］。",
            "vn": "Vâng, lần đầu. Chiều tối mai còn trống không?"
          },
          {
            "speaker": "歯医者・受付",
            "jp": "明日（あした）の 6時（ろくじ）なら 空（あ）いて います。",
            "vn": "6 giờ mai thì trống."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、6時（ろくじ）で お願（ねが）いします］。",
            "vn": "Vậy cho tôi 6 giờ."
          },
          {
            "speaker": "歯医者・受付",
            "jp": "では、どこが 痛（いた）いですか。",
            "vn": "(Hôm sau) Vậy đau chỗ nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［右（みぎ）の 下（した）の 奥歯（おくば）です。冷（つめ）たい 物（もの）を 飲（の）むと、しみます］。",
            "vn": "Răng hàm dưới bên phải. Uống đồ lạnh thì buốt."
          },
          {
            "speaker": "歯医者・受付",
            "jp": "いつからですか。",
            "vn": "Từ khi nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［1週間（いっしゅうかん）ぐらい 前（まえ）からです。昨日（きのう）の 夜（よる）は 痛（いた）くて 眠（ねむ）れませんでした］。",
            "vn": "Khoảng 1 tuần trước. Tối qua đau không ngủ được."
          },
          {
            "speaker": "歯医者・受付",
            "jp": "見（み）て みましょう。……虫歯（むしば）ですね。少（すこ）し 深（ふか）いです。",
            "vn": "Xem nhé... Sâu răng rồi. Hơi sâu."
          },
          {
            "speaker": "あなた",
            "jp": "［治療（ちりょう）は 痛（いた）いですか］。",
            "vn": "Chữa có đau không ạ?"
          },
          {
            "speaker": "歯医者・受付",
            "jp": "麻酔（ますい）を するので、大丈夫（だいじょうぶ）ですよ。痛（いた）かったら、左手（ひだりて）を 上（あ）げて ください。",
            "vn": "Có gây tê nên không sao. Nếu đau thì giơ tay trái."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。何回（なんかい）ぐらい 通（かよ）わなければ なりませんか］。",
            "vn": "Tôi hiểu. Phải đi khoảng mấy lần ạ?"
          },
          {
            "speaker": "歯医者・受付",
            "jp": "3回（さんかい）ぐらいです。今日（きょう）は 悪（わる）い ところを 取（と）って、次（つぎ）に 詰（つ）め物（もの）を します。",
            "vn": "Khoảng 3 lần. Hôm nay lấy phần hỏng, lần sau trám."
          },
          {
            "speaker": "あなた",
            "jp": "［ついでに 歯石（しせき）も 取（と）って いただけますか］。",
            "vn": "Tiện thể lấy cả cao răng giúp tôi được không?"
          },
          {
            "speaker": "歯医者・受付",
            "jp": "いいですよ。最後（さいご）の 日（ひ）に しましょう。今日（きょう）は 2時間（にじかん） 何（なに）も 食（た）べないで くださいね。",
            "vn": "Được. Để buổi cuối nhé. Hôm nay 2 tiếng đừng ăn gì nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［2時間（にじかん）ですね。わかりました。次（つぎ）の 予約（よやく）も 取（と）って いいですか］。",
            "vn": "2 tiếng nhỉ. Tôi hiểu. Đặt luôn lịch lần sau được không?"
          }
        ]
      },
      {
        "id": "track-cd05-d7",
        "title": "Khám sức khỏe và lời khuyên thay đổi thói quen",
        "titleVn": "Khám sức khỏe và lời khuyên thay đổi thói quen",
        "category": "topic",
        "topicId": "cd05",
        "tag": "病院・健康・薬局 · Kịch bản 7",
        "lines": [
          {
            "speaker": "医者",
            "jp": "健康診断（けんこうしんだん）の 結果（けっか）ですが、体重（たいじゅう）が 去年（きょねん）より 5キロ 増（ふ）えて いますね。",
            "vn": "Kết quả khám sức khỏe: cân nặng tăng 5 kg so với năm ngoái."
          },
          {
            "speaker": "あなた",
            "jp": "［はい……。最近（さいきん）、コンビニの お弁当（べんとう）ばかり 食（た）べて いるんです］。",
            "vn": "Vâng... Dạo này tôi toàn ăn cơm hộp konbini."
          },
          {
            "speaker": "医者",
            "jp": "睡眠（すいみん）は どのぐらい 取（と）って いますか。",
            "vn": "Bạn ngủ khoảng bao lâu?"
          },
          {
            "speaker": "あなた",
            "jp": "［アルバイトが 夜（よる） 遅（おそ）いので、5時間（ごじかん）ぐらいです］。",
            "vn": "Làm thêm muộn nên khoảng 5 tiếng."
          },
          {
            "speaker": "医者",
            "jp": "それは 少（すく）なすぎますね。少（すく）なくとも 6時間（ろくじかん）は 寝（ね）る ように して ください。",
            "vn": "Ít quá. Hãy cố ngủ ít nhất 6 tiếng."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。シフトを 少（すこ）し 減（へ）らす ように します］。",
            "vn": "Tôi hiểu. Tôi sẽ cố giảm ca một chút."
          },
          {
            "speaker": "医者",
            "jp": "運動（うんどう）は して いますか。",
            "vn": "Bạn có vận động không?"
          },
          {
            "speaker": "あなた",
            "jp": "［ほとんど して いません。何（なに）が いいですか］。",
            "vn": "Hầu như không. Nên làm gì ạ?"
          },
          {
            "speaker": "医者",
            "jp": "まずは 毎日（まいにち） 30分（さんじゅっぷん） 歩（ある）く ことから 始（はじ）めましょう。駅（えき） 1つ 分（ぶん） 歩（ある）くのも いいですよ。",
            "vn": "Trước hết bắt đầu từ đi bộ 30 phút mỗi ngày. Đi bộ 1 ga cũng tốt."
          },
          {
            "speaker": "あなた",
            "jp": "［それなら できそうです。食事（しょくじ）は どう すれば いいですか］。",
            "vn": "Vậy thì có vẻ làm được. Ăn uống thì sao ạ?"
          },
          {
            "speaker": "医者",
            "jp": "野菜（やさい）を もっと 食（た）べて、揚（あ）げ物（もの）を 減（へ）らして ください。甘（あま）い 飲（の）み物（もの）も 飲（の）みすぎないように。",
            "vn": "Ăn thêm rau, giảm đồ chiên. Đừng uống quá nhiều đồ ngọt."
          },
          {
            "speaker": "あなた",
            "jp": "［毎日（まいにち） ジュースを 2本（にほん）ぐらい 飲（の）んで いました］。",
            "vn": "Ngày nào tôi cũng uống khoảng 2 chai nước ngọt."
          },
          {
            "speaker": "医者",
            "jp": "お茶（ちゃ）か 水（みず）に 変（か）えると いいですね。続（つづ）ければ 続（つづ）けるほど、体（からだ）が 楽（らく）に なりますよ。",
            "vn": "Đổi sang trà hoặc nước thì tốt. Càng duy trì người càng nhẹ nhõm."
          },
          {
            "speaker": "あなた",
            "jp": "［自分（じぶん）で お弁当（べんとう）を 作（つく）る ように して みます］。",
            "vn": "Tôi sẽ thử tự làm cơm hộp."
          },
          {
            "speaker": "医者",
            "jp": "いいですね。3か月後（さんかげつご）に もう 一度（いちど） 体重（たいじゅう）を 測（はか）りましょう。",
            "vn": "Tốt. 3 tháng sau cân lại nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。頑張（がんば）ります］。",
            "vn": "Vâng. Tôi sẽ cố."
          },
          {
            "speaker": "医者",
            "jp": "ほかの 結果（けっか）は 問題（もんだい）ありませんでした。",
            "vn": "Các kết quả khác không có vấn đề."
          },
          {
            "speaker": "あなた",
            "jp": "［安心（あんしん）しました。ありがとうございました］。",
            "vn": "Tôi yên tâm rồi. Cảm ơn bác sĩ."
          }
        ]
      },
      {
        "id": "track-cd05-d8",
        "title": "Chấn thương khi chơi thể thao",
        "titleVn": "Chấn thương khi chơi thể thao",
        "category": "topic",
        "topicId": "cd05",
        "tag": "病院・健康・薬局 · Kịch bản 8",
        "lines": [
          {
            "speaker": "医者",
            "jp": "どう しましたか。",
            "vn": "Bạn bị sao?"
          },
          {
            "speaker": "あなた",
            "jp": "［サッカーを して いて、右（みぎ）の 足首（あしくび）を ひねって しまいました］。",
            "vn": "Đang đá bóng thì tôi lỡ trẹo cổ chân phải."
          },
          {
            "speaker": "医者",
            "jp": "いつですか。",
            "vn": "Khi nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［昨日（きのう）の 夕方（ゆうがた）です。夜（よる）に なって、腫（は）れて きました］。",
            "vn": "Chiều tối qua. Đến tối thì sưng lên."
          },
          {
            "speaker": "医者",
            "jp": "歩（ある）けますか。",
            "vn": "Có đi được không?"
          },
          {
            "speaker": "あなた",
            "jp": "［歩（ある）けますが、体重（たいじゅう）を かけると 痛（いた）いです］。",
            "vn": "Đi được nhưng dồn trọng lượng thì đau."
          },
          {
            "speaker": "医者",
            "jp": "念（ねん）の ため、レントゲンを 撮（と）りましょう。",
            "vn": "Để chắc chắn chụp X-quang nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［骨（ほね）が 折（お）れて いるかも しれませんか］。",
            "vn": "Có thể bị gãy xương không ạ?"
          },
          {
            "speaker": "医者",
            "jp": "レントゲンを 見（み）ました。骨（ほね）は 大丈夫（だいじょうぶ）です。捻挫（ねんざ）ですね。",
            "vn": "(Sau X-quang) Xương không sao. Bong gân thôi."
          },
          {
            "speaker": "あなた",
            "jp": "［よかった。どのぐらいで 治（なお）りますか］。",
            "vn": "May quá. Khoảng bao lâu thì khỏi?"
          },
          {
            "speaker": "医者",
            "jp": "2週間（にしゅうかん）ぐらいです。湿布（しっぷ）を 出（だ）しますから、1日（いちにち） 2回（にかい） 貼（は）り替（か）えて ください。",
            "vn": "Khoảng 2 tuần. Tôi kê miếng dán, ngày thay 2 lần."
          },
          {
            "speaker": "あなた",
            "jp": "［お風呂（ふろ）は 入（はい）っても いいですか］。",
            "vn": "Tắm bồn được không ạ?"
          },
          {
            "speaker": "医者",
            "jp": "腫（は）れが 引（ひ）くまで、温（あたた）めないで ください。シャワーに して ください。",
            "vn": "Đến khi hết sưng đừng làm nóng. Tắm vòi sen thôi."
          },
          {
            "speaker": "あなた",
            "jp": "［来週（らいしゅう） 試合（しあい）が あるんですが、出（で）られますか］。",
            "vn": "Tuần sau có trận đấu, tôi thi đấu được không?"
          },
          {
            "speaker": "医者",
            "jp": "残念（ざんねん）ですが、来週（らいしゅう）は 無理（むり）です。治（なお）るまで 走（はし）らないで ください。",
            "vn": "Tiếc là tuần sau không được. Đến khi khỏi đừng chạy."
          },
          {
            "speaker": "あなた",
            "jp": "［そうですか……。いつごろから 練習（れんしゅう）しても いいですか］。",
            "vn": "Vậy à... Khoảng khi nào tôi tập được ạ?"
          },
          {
            "speaker": "医者",
            "jp": "2週間後（にしゅうかんご）に もう 一度（いちど） 見（み）せて ください。その 時（とき）に 決（き）めましょう。",
            "vn": "2 tuần sau cho tôi xem lại. Lúc đó quyết định."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。無理（むり）を しないように します］。",
            "vn": "Tôi hiểu. Tôi sẽ không cố quá."
          }
        ]
      },
      {
        "id": "track-cd05-d9",
        "title": "Hỏi dược sĩ mua thuốc cảm ở drugstore",
        "titleVn": "Hỏi dược sĩ mua thuốc cảm ở drugstore",
        "category": "topic",
        "topicId": "cd05",
        "tag": "病院・健康・薬局 · Kịch bản 9",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、鼻水（はなみず）に 効（き）く 薬（くすり）は ありますか］。",
            "vn": "Xin lỗi, có thuốc trị sổ mũi không ạ?"
          },
          {
            "speaker": "薬剤師",
            "jp": "ほかに 症状（しょうじょう）は ありますか。熱（ねつ）や のどの 痛（いた）みは？",
            "vn": "Có triệu chứng khác không? Sốt hay đau họng?"
          },
          {
            "speaker": "あなた",
            "jp": "［熱（ねつ）は ありません。くしゃみが たくさん 出（で）て、目（め）も かゆいです］。",
            "vn": "Không sốt. Hắt hơi nhiều và mắt cũng ngứa."
          },
          {
            "speaker": "薬剤師",
            "jp": "いつからですか。",
            "vn": "Từ khi nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［先週（せんしゅう）からです。外（そと）に 出（で）ると、ひどく なります］。",
            "vn": "Từ tuần trước. Ra ngoài thì nặng hơn."
          },
          {
            "speaker": "薬剤師",
            "jp": "それは 花粉症（かふんしょう）かも しれませんね。今（いま）は 花粉（かふん）が 多（おお）い 時期（じき）ですから。",
            "vn": "Có thể là dị ứng phấn hoa. Giờ đang mùa nhiều phấn hoa."
          },
          {
            "speaker": "あなた",
            "jp": "［花粉症（かふんしょう）ですか。初（はじ）めてです。風邪（かぜ）薬（ぐすり）と 花粉症（かふんしょう）の 薬（くすり）と、どちらが いいですか］。",
            "vn": "Dị ứng phấn hoa ạ? Lần đầu bị. Thuốc cảm và thuốc dị ứng phấn hoa loại nào tốt hơn?"
          },
          {
            "speaker": "薬剤師",
            "jp": "花粉症（かふんしょう）の 薬（くすり）が いいと 思（おも）います。こちらは 眠（ねむ）く なりにくい タイプです。",
            "vn": "Tôi nghĩ thuốc dị ứng tốt hơn. Loại này khó gây buồn ngủ."
          },
          {
            "speaker": "あなた",
            "jp": "［学校（がっこう）で 寝（ね）たら 困（こま）るので、それに します］。",
            "vn": "Ngủ gật ở trường thì khổ nên tôi lấy loại đó."
          },
          {
            "speaker": "薬剤師",
            "jp": "1日（いちにち） 1回（いっかい）、夜（よる） 飲（の）んで ください。目薬（めぐすり）も ありますよ。",
            "vn": "1 ngày 1 lần, uống buổi tối. Có cả thuốc nhỏ mắt."
          },
          {
            "speaker": "あなた",
            "jp": "［目薬（めぐすり）も ください。ほかに 何（なに）か 気（き）を つける ことは ありますか］。",
            "vn": "Cho tôi cả thuốc nhỏ mắt. Còn điều gì cần chú ý không ạ?"
          },
          {
            "speaker": "薬剤師",
            "jp": "外（そと）では マスクを して、帰（かえ）ったら 服（ふく）の 花粉（かふん）を はらって ください。",
            "vn": "Ra ngoài đeo khẩu trang, về nhà phủi phấn hoa trên quần áo."
          },
          {
            "speaker": "あなた",
            "jp": "［洗濯物（せんたくもの）は 外（そと）に 干（ほ）さないで、部屋（へや）の 中（なか）に 干（ほ）しても いいですか］。",
            "vn": "Quần áo không phơi ngoài mà phơi trong phòng được không ạ?"
          },
          {
            "speaker": "薬剤師",
            "jp": "はい、その ほうが いいですよ。",
            "vn": "Vâng, như vậy tốt hơn."
          },
          {
            "speaker": "あなた",
            "jp": "［薬（くすり）を 飲（の）んでも 治（なお）らなかったら、病院（びょういん）へ 行（い）った ほうが いいですか］。",
            "vn": "Uống thuốc mà không khỏi thì nên đi bệnh viện ạ?"
          },
          {
            "speaker": "薬剤師",
            "jp": "そうですね。耳鼻科（じびか）で 診（み）て もらって ください。",
            "vn": "Đúng vậy. Hãy đi khám tai mũi họng."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。ありがとうございます］。",
            "vn": "Tôi hiểu. Cảm ơn."
          }
        ]
      },
      {
        "id": "track-cd05-d10",
        "title": "Đưa bạn đi khám và phiên dịch giúp",
        "titleVn": "Đưa bạn đi khám và phiên dịch giúp",
        "category": "topic",
        "topicId": "cd05",
        "tag": "病院・健康・薬局 · Kịch bản 10",
        "lines": [
          {
            "speaker": "医者",
            "jp": "今日（きょう）は どう されましたか。",
            "vn": "Hôm nay bạn bị sao?"
          },
          {
            "speaker": "あなた",
            "jp": "［友達（ともだち）は 日本語（にほんご）が あまり 話（はな）せないので、私（わたし）が 代（か）わりに 説明（せつめい）しても いいですか］。",
            "vn": "Bạn tôi không nói được nhiều tiếng Nhật, tôi giải thích thay được không ạ?"
          },
          {
            "speaker": "医者",
            "jp": "もちろんです。助（たす）かります。",
            "vn": "Tất nhiên. Giúp nhiều lắm."
          },
          {
            "speaker": "あなた",
            "jp": "［2週間（にしゅうかん）ぐらい 前（まえ）から、毎日（まいにち） 頭（あたま）が 痛（いた）いと 言（い）って います］。",
            "vn": "Bạn ấy nói khoảng 2 tuần nay ngày nào cũng đau đầu."
          },
          {
            "speaker": "医者",
            "jp": "どんな 痛（いた）みですか。ずきずきですか、重（おも）い 感（かん）じですか。",
            "vn": "Đau như thế nào? Đau nhói hay nặng đầu?"
          },
          {
            "speaker": "あなた",
            "jp": "［頭（あたま）の 後（うし）ろが 重（おも）い 感（かん）じだそうです］。",
            "vn": "(Hỏi bạn xong) Nghe nói cảm giác nặng ở sau đầu."
          },
          {
            "speaker": "医者",
            "jp": "めまいや 吐（は）き気（け）は ありますか。",
            "vn": "Có chóng mặt hay buồn nôn không?"
          },
          {
            "speaker": "あなた",
            "jp": "［めまいは 時々（ときどき） ありますが、吐（は）き気（け）は ないそうです］。",
            "vn": "Thỉnh thoảng chóng mặt nhưng không buồn nôn ạ."
          },
          {
            "speaker": "医者",
            "jp": "最近（さいきん）、睡眠（すいみん）や 仕事（しごと）は どうですか。",
            "vn": "Gần đây ngủ nghỉ và công việc thế nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［試験（しけん）の 勉強（べんきょう）で、毎日（まいにち） 夜中（よなか） 2時（にじ）まで 起（お）きて いると 言（い）って います］。",
            "vn": "Bạn ấy nói vì ôn thi nên ngày nào cũng thức đến 2 giờ sáng."
          },
          {
            "speaker": "医者",
            "jp": "検査（けんさ）を しましたが、大（おお）きな 問題（もんだい）は ありません。ストレスと 睡眠（すいみん）不足（ぶそく）だと 思（おも）います。",
            "vn": "Đã xét nghiệm, không có vấn đề lớn. Tôi nghĩ do căng thẳng và thiếu ngủ."
          },
          {
            "speaker": "あなた",
            "jp": "［よかった。友達（ともだち）に 伝（つた）えます。何（なに）を すれば いいですか］。",
            "vn": "May quá. Tôi sẽ nói lại với bạn. Nên làm gì ạ?"
          },
          {
            "speaker": "医者",
            "jp": "12時（じゅうにじ）前（まえ）に 寝（ね）て、1時間（いちじかん）に 1回（いっかい）は 休憩（きゅうけい）して ください。痛（いた）み止（ど）めも 出（だ）しますね。",
            "vn": "Ngủ trước 12 giờ, mỗi giờ nghỉ 1 lần. Tôi kê cả thuốc giảm đau."
          },
          {
            "speaker": "あなた",
            "jp": "［痛（いた）み止（ど）めは 毎日（まいにち） 飲（の）んでも いいですか］。",
            "vn": "Thuốc giảm đau uống hằng ngày được không ạ?"
          },
          {
            "speaker": "医者",
            "jp": "いいえ、痛（いた）い 時（とき）だけに して ください。1日（いちにち） 2回（にかい）までです。",
            "vn": "Không, chỉ khi đau. Tối đa 2 lần/ngày."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。私（わたし）が 友達（ともだち）に ベトナム語（ご）で 説明（せつめい）して あげます］。",
            "vn": "Tôi hiểu. Tôi sẽ giải thích lại cho bạn bằng tiếng Việt."
          },
          {
            "speaker": "医者",
            "jp": "ありがとうございます。いい お友達（ともだち）ですね。",
            "vn": "Cảm ơn. Bạn là người bạn tốt nhỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［いいえ。ありがとうございました。お世話（せわ）に なりました］。",
            "vn": "Không có gì. Cảm ơn bác sĩ đã giúp."
          }
        ]
      }
    ]
  },
  {
    "id": "pl-cd06",
    "title": "アルバイト・面接（めんせつ）・職場（しょくば）",
    "titleVn": "Làm thêm, Phỏng vấn & Nơi làm việc",
    "description": "Trọn bộ 10 kịch bản đối thoại nhập vai thực tế trong tình huống: Làm thêm, Phỏng vấn & Nơi làm việc.",
    "category": "topic",
    "badge": "💼 LÀM THÊM (BAITO)",
    "accentColor": "from-indigo-500/20 to-blue-500/10 border-indigo-500/40 text-indigo-600",
    "tracks": [
      {
        "id": "track-cd06-d1",
        "title": "Gọi điện ứng tuyển làm thêm",
        "titleVn": "Gọi điện ứng tuyển làm thêm",
        "category": "topic",
        "topicId": "cd06",
        "tag": "アルバイト・面接・職場 · Kịch bản 1",
        "lines": [
          {
            "speaker": "店長",
            "jp": "お電話（でんわ） ありがとうございます。カフェ・さくらです。",
            "vn": "Cảm ơn quý khách đã gọi. Café Sakura xin nghe."
          },
          {
            "speaker": "あなた",
            "jp": "［もしもし、アルバイトの 募集（ぼしゅう）を 見（み）て、お電話（でんわ）しました］。",
            "vn": "Alo, tôi thấy tin tuyển làm thêm nên gọi điện."
          },
          {
            "speaker": "店長",
            "jp": "ありがとうございます。少々（しょうしょう） お待（ま）ち ください。",
            "vn": "Cảm ơn. Xin chờ chút."
          },
          {
            "speaker": "店長",
            "jp": "お電話（でんわ） 代（か）わりました。店長（てんちょう）の 山本（やまもと）です。",
            "vn": "Tôi nghe máy đây. Tôi là quản lý Yamamoto."
          },
          {
            "speaker": "あなた",
            "jp": "［グエン・ミンと 申（もう）します。ホールスタッフの 面接（めんせつ）を 受（う）けたいんですが］。",
            "vn": "Tôi là Nguyễn Minh. Tôi muốn phỏng vấn vị trí phục vụ."
          },
          {
            "speaker": "店長",
            "jp": "留学生（りゅうがくせい）の 方（かた）ですか。",
            "vn": "Bạn là du học sinh à?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、日本語（にほんご）学校（がっこう）の 学生（がくせい）です。資格外（しかくがい）活動（かつどう）許可（きょか）も 持（も）って います］。",
            "vn": "Vâng, học viên trường tiếng Nhật. Tôi cũng có giấy phép làm thêm."
          },
          {
            "speaker": "店長",
            "jp": "それなら 大丈夫（だいじょうぶ）です。週（しゅう）に 何日（なんにち）ぐらい 入（はい）れますか。",
            "vn": "Vậy thì được. Một tuần vào được khoảng mấy ngày?"
          },
          {
            "speaker": "あなた",
            "jp": "［平日（へいじつ）の 夕方（ゆうがた）と 土曜日（どようび）、週（しゅう） 3日（みっか）ぐらい 入（はい）れます］。",
            "vn": "Chiều ngày thường và thứ Bảy, khoảng 3 ngày/tuần."
          },
          {
            "speaker": "店長",
            "jp": "わかりました。では、明日（あした）の 4時（よじ）に 面接（めんせつ）に 来（こ）られますか。",
            "vn": "Hiểu rồi. Vậy 4 giờ mai đến phỏng vấn được không?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、大丈夫（だいじょうぶ）です。何（なに）を 持（も）って 行（い）けば いいですか］。",
            "vn": "Vâng, được ạ. Tôi cần mang gì?"
          },
          {
            "speaker": "店長",
            "jp": "写真（しゃしん）を 貼（は）った 履歴書（りれきしょ）と 在留（ざいりゅう）カードを 持（も）って 来（き）て ください。",
            "vn": "Mang sơ yếu lý lịch dán ảnh và thẻ cư trú."
          },
          {
            "speaker": "あなた",
            "jp": "［履歴書（りれきしょ）は 手書（てが）きの ほうが いいですか］。",
            "vn": "Lý lịch viết tay thì tốt hơn ạ?"
          },
          {
            "speaker": "店長",
            "jp": "パソコンでも 大丈夫（だいじょうぶ）ですよ。",
            "vn": "Đánh máy cũng được."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。お店（みせ）の 場所（ばしょ）は 駅（えき）の 東口（ひがしぐち）ですね］。",
            "vn": "Tôi hiểu. Quán ở cửa Đông ga nhỉ."
          },
          {
            "speaker": "店長",
            "jp": "そうです。裏（うら）の 入口（いりぐち）から 入（はい）って ください。",
            "vn": "Đúng. Vào bằng cửa sau nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。明日（あした） 4時（よじ）に 伺（うかが）います。よろしく お願（ねが）いいたします］。",
            "vn": "Vâng. 4 giờ mai tôi đến. Mong được giúp đỡ."
          },
          {
            "speaker": "店長",
            "jp": "お待（ま）ち して います。",
            "vn": "Chúng tôi chờ bạn."
          }
        ]
      },
      {
        "id": "track-cd06-d2",
        "title": "Buổi phỏng vấn",
        "titleVn": "Buổi phỏng vấn",
        "category": "topic",
        "topicId": "cd06",
        "tag": "アルバイト・面接・職場 · Kịch bản 2",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［失礼（しつれい）します。本日（ほんじつ） 面接（めんせつ）を お願（ねが）いした グエン・ミンです］。",
            "vn": "Tôi xin phép. Tôi là Nguyễn Minh có hẹn phỏng vấn hôm nay."
          },
          {
            "speaker": "店長",
            "jp": "どうぞ、座（すわ）って ください。では、簡単（かんたん）に 自己紹介（じこしょうかい）を お願（ねが）いします。",
            "vn": "Mời ngồi. Vậy mời bạn tự giới thiệu ngắn."
          },
          {
            "speaker": "あなた",
            "jp": "［ベトナムから 来（き）ました。今（いま） さくら日本語（にほんご）学校（がっこう）で 勉強（べんきょう）して います。来年（らいねん） 大学（だいがく）に 進学（しんがく）する 予定（よてい）です］。",
            "vn": "Tôi đến từ VN. Hiện học trường tiếng Sakura. Năm sau dự kiến vào đại học."
          },
          {
            "speaker": "店長",
            "jp": "どうして この 店（みせ）で 働（はたら）きたいと 思（おも）いましたか。",
            "vn": "Vì sao bạn muốn làm ở quán này?"
          },
          {
            "speaker": "あなた",
            "jp": "［日本人（にほんじん）の お客様（きゃくさま）と 話（はな）して、日本語（にほんご）が 上手（じょうず）に なりたいからです。それに、コーヒーが 大好（だいす）きです］。",
            "vn": "Vì tôi muốn nói chuyện với khách Nhật để giỏi tiếng Nhật hơn. Hơn nữa tôi rất thích cà phê."
          },
          {
            "speaker": "店長",
            "jp": "接客（せっきゃく）の 経験（けいけん）は ありますか。",
            "vn": "Bạn có kinh nghiệm phục vụ không?"
          },
          {
            "speaker": "あなた",
            "jp": "［国（くに）で 1年間（いちねんかん）、レストランで ホールの 仕事（しごと）を して いました］。",
            "vn": "Ở quê tôi làm phục vụ nhà hàng 1 năm."
          },
          {
            "speaker": "店長",
            "jp": "いいですね。あなたの 長所（ちょうしょ）は 何（なん）ですか。",
            "vn": "Tốt đấy. Điểm mạnh của bạn là gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［いつも 笑顔（えがお）で、体力（たいりょく）が ある ことです］。",
            "vn": "Luôn tươi cười và có sức khỏe."
          },
          {
            "speaker": "店長",
            "jp": "短所（ちょうしょ）は？",
            "vn": "Điểm yếu thì sao?"
          },
          {
            "speaker": "あなた",
            "jp": "［敬語（けいご）が まだ 上手（じょうず）じゃ ありません。でも、毎日（まいにち） 練習（れんしゅう）して います］。",
            "vn": "Kính ngữ tôi chưa giỏi. Nhưng tôi luyện mỗi ngày."
          },
          {
            "speaker": "店長",
            "jp": "正直（しょうじき）で いいですね。土日（どにち）も 入（はい）れますか。",
            "vn": "Thật thà, tốt đấy. Thứ Bảy Chủ nhật vào làm được không?"
          },
          {
            "speaker": "あなた",
            "jp": "［土曜日（どようび）は 大丈夫（だいじょうぶ）ですが、日曜日（にちようび）は 教会（きょうかい）に 行（い）くので、難（むずか）しいです］。",
            "vn": "Thứ Bảy được nhưng Chủ nhật tôi đi nhà thờ nên khó ạ."
          },
          {
            "speaker": "店長",
            "jp": "わかりました。最初（さいしょ）の 1週間（いっしゅうかん）は 研修（けんしゅう）ですが、大丈夫（だいじょうぶ）ですか。",
            "vn": "Hiểu rồi. Tuần đầu là đào tạo, được không?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい。早（はや）く 仕事（しごと）を 覚（おぼ）えられるように 頑張（がんば）ります］。",
            "vn": "Vâng. Tôi sẽ cố gắng để sớm thuộc việc."
          },
          {
            "speaker": "店長",
            "jp": "何（なに）か 質問（しつもん）は ありますか。",
            "vn": "Bạn có câu hỏi gì không?"
          },
          {
            "speaker": "あなた",
            "jp": "［制服（せいふく）は お店（みせ）で 借（か）りられますか］。",
            "vn": "Đồng phục có mượn ở quán được không ạ?"
          },
          {
            "speaker": "店長",
            "jp": "はい、貸（か）しますよ。結果（けっか）は 3日（みっか）以内（いない）に 電話（でんわ）します。",
            "vn": "Có, quán cho mượn. Kết quả tôi sẽ gọi trong 3 ngày."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。本日（ほんじつ）は ありがとうございました。失礼（しつれい）します］。",
            "vn": "Tôi hiểu. Cảm ơn anh hôm nay. Tôi xin phép."
          }
        ]
      },
      {
        "id": "track-cd06-d3",
        "title": "Ngày đầu đi làm: học việc",
        "titleVn": "Ngày đầu đi làm: học việc",
        "category": "topic",
        "topicId": "cd06",
        "tag": "アルバイト・面接・職場 · Kịch bản 3",
        "lines": [
          {
            "speaker": "先輩",
            "jp": "今日（きょう）から よろしくね。田中（たなか）です。",
            "vn": "Từ hôm nay mong được giúp đỡ nhé. Tôi là Tanaka."
          },
          {
            "speaker": "あなた",
            "jp": "［ミンです。よろしく お願（ねが）いします。わからない ことが たくさん あると 思（おも）いますが、教（おし）えて ください］。",
            "vn": "Tôi là Minh. Mong chị giúp đỡ. Chắc sẽ có nhiều điều tôi không biết, chị chỉ giúp nhé."
          },
          {
            "speaker": "先輩",
            "jp": "まず、この ハンディの 使（つか）い方（かた）から。注文（ちゅうもん）を 受（う）けたら、ここに 入力（にゅうりょく）して。",
            "vn": "Đầu tiên là cách dùng máy order. Nhận order xong nhập vào đây."
          },
          {
            "speaker": "あなた",
            "jp": "［すみません、メモを 取（と）っても いいですか］。",
            "vn": "Xin lỗi, tôi ghi chép được không ạ?"
          },
          {
            "speaker": "先輩",
            "jp": "もちろん。まず テーブル番号（ばんごう）を 押（お）して、次（つぎ）に メニューを 選（えら）んで、最後（さいご）に 送信（そうしん）。",
            "vn": "Tất nhiên. Trước bấm số bàn, tiếp chọn món, cuối cùng gửi đi."
          },
          {
            "speaker": "あなた",
            "jp": "［すみません、もう 一度（いちど） ゆっくり 教（おし）えて いただけませんか］。",
            "vn": "Xin lỗi, chị chỉ lại chậm một lần nữa được không ạ?"
          },
          {
            "speaker": "先輩",
            "jp": "いいよ。テーブル番号（ばんごう）、メニュー、送信（そうしん）。この 3つ。",
            "vn": "Được. Số bàn, món, gửi. 3 bước này."
          },
          {
            "speaker": "あなた",
            "jp": "［テーブル番号（ばんごう）を 押（お）して から、メニューを 選（えら）ぶんですね］。",
            "vn": "Bấm số bàn rồi mới chọn món nhỉ."
          },
          {
            "speaker": "先輩",
            "jp": "そう。じゃ、やって みて。5番（ごばん） テーブル、カフェラテ 2つ。",
            "vn": "Đúng. Thử làm đi. Bàn 5, 2 cà phê latte."
          },
          {
            "speaker": "あなた",
            "jp": "［5番（ごばん）、カフェラテ、2つ、送信（そうしん）。これで 合（あ）って いますか］。",
            "vn": "...Bàn 5, latte, 2, gửi. Thế này đúng chưa ạ?"
          },
          {
            "speaker": "先輩",
            "jp": "完璧（かんぺき）！ 次（つぎ）は テーブルの 片付（かたづ）け。お客様（きゃくさま）が 帰（かえ）ったら、すぐ 片付（かたづ）けてね。",
            "vn": "Hoàn hảo! Tiếp là dọn bàn. Khách về thì dọn ngay nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［お皿（さら）を 下（さ）げて から、テーブルを 拭（ふ）けば いいんですね］。",
            "vn": "Dọn đĩa rồi lau bàn là được nhỉ."
          },
          {
            "speaker": "先輩",
            "jp": "そう。布巾（ふきん）は 2種類（にしゅるい） あって、青（あお）が テーブル用（よう）、赤（あか）が 椅子（いす）用（よう）。",
            "vn": "Đúng. Khăn có 2 loại, xanh cho bàn, đỏ cho ghế."
          },
          {
            "speaker": "あなた",
            "jp": "［青（あお）が テーブルで、赤（あか）が 椅子（いす）ですね。覚（おぼ）えました］。",
            "vn": "Xanh cho bàn, đỏ cho ghế nhỉ. Tôi nhớ rồi."
          },
          {
            "speaker": "先輩",
            "jp": "忙（いそが）しい 時（とき）は、わからなくても 一人（ひとり）で 決（き）めないで、必（かなら）ず 聞（き）いてね。",
            "vn": "Lúc bận, dù không biết cũng đừng tự quyết, nhất định phải hỏi nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、わからない 時（とき）は すぐ 聞（き）きます］。",
            "vn": "Vâng, khi không biết tôi sẽ hỏi ngay."
          },
          {
            "speaker": "先輩",
            "jp": "1時間（いちじかん）経（た）ったら 休憩（きゅうけい）だよ。",
            "vn": "Sau 1 tiếng là nghỉ giải lao."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。ありがとうございます、田中（たなか）さん］。",
            "vn": "Tôi hiểu. Cảm ơn chị Tanaka."
          }
        ]
      },
      {
        "id": "track-cd06-d4",
        "title": "Phục vụ khách vào quán và nhận order",
        "titleVn": "Phục vụ khách vào quán và nhận order",
        "category": "topic",
        "topicId": "cd06",
        "tag": "アルバイト・面接・職場 · Kịch bản 4",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［いらっしゃいませ。何名様（なんめいさま）ですか］。",
            "vn": "Kính chào. Mấy vị ạ?"
          },
          {
            "speaker": "客",
            "jp": "3人（さんにん）です。",
            "vn": "3 người."
          },
          {
            "speaker": "あなた",
            "jp": "［3名様（さんめいさま）ですね。お煙草（たばこ）は お吸（す）いに なりますか］。",
            "vn": "3 vị nhỉ. Quý khách có hút thuốc không ạ?"
          },
          {
            "speaker": "客",
            "jp": "いいえ、吸（す）いません。",
            "vn": "Không."
          },
          {
            "speaker": "あなた",
            "jp": "［では、こちらの お席（せき）へ どうぞ。メニューで ございます］。",
            "vn": "Vậy mời quý khách ngồi đây. Đây là thực đơn."
          },
          {
            "speaker": "客",
            "jp": "ありがとう。おすすめは 何（なん）ですか。",
            "vn": "Cảm ơn. Món gợi ý là gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［本日（ほんじつ）の おすすめは きのこの パスタで ございます］。",
            "vn": "Món gợi ý hôm nay là mì Ý nấm ạ."
          },
          {
            "speaker": "客",
            "jp": "じゃ、それを 2つと、ハンバーグセットを 1つ。",
            "vn": "Vậy 2 phần đó và 1 set hamburger."
          },
          {
            "speaker": "あなた",
            "jp": "［ハンバーグセットの ソースは デミグラスと 和風（わふう）、どちらに なさいますか］。",
            "vn": "Sốt hamburger có demi-glace và kiểu Nhật, quý khách chọn loại nào ạ?"
          },
          {
            "speaker": "客",
            "jp": "和風（わふう）で。",
            "vn": "Kiểu Nhật."
          },
          {
            "speaker": "あなた",
            "jp": "［お飲（の）み物（もの）は いかがですか］。",
            "vn": "Quý khách dùng đồ uống gì ạ?"
          },
          {
            "speaker": "客",
            "jp": "アイスコーヒーを 3つ。食後（しょくご）で お願（ねが）いします。",
            "vn": "3 cà phê đá. Mang sau bữa."
          },
          {
            "speaker": "あなた",
            "jp": "［かしこまりました。ご注文（ちゅうもん）を 繰（く）り返（かえ）します。きのこの パスタ 2つ、ハンバーグセット 和風（わふう） 1つ、食後（しょくご）に アイスコーヒー 3つ。以上（いじょう）で よろしいですか］。",
            "vn": "Vâng ạ. Xin nhắc lại order. 2 mì Ý nấm, 1 set hamburger kiểu Nhật, sau bữa 3 cà phê đá. Vậy là đủ chưa ạ?"
          },
          {
            "speaker": "客",
            "jp": "はい。あ、お水（みず） もらえますか。",
            "vn": "Vâng. À, cho xin nước được không?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、すぐ お持（も）ち します］。",
            "vn": "Vâng, tôi mang đến ngay."
          },
          {
            "speaker": "客",
            "jp": "すみません、パスタの 量（りょう）は 多（おお）いですか。",
            "vn": "(Một lúc sau) Xin lỗi, mì Ý lượng có nhiều không?"
          },
          {
            "speaker": "あなた",
            "jp": "［普通（ふつう）の 量（りょう）で ございますが、大盛（おおも）りにも できます。100円（ひゃくえん）プラスに なります］。",
            "vn": "Lượng bình thường ạ, nhưng có thể làm phần lớn. Thêm 100 yên."
          },
          {
            "speaker": "客",
            "jp": "じゃ、1つ 大盛（おおも）りに して ください。",
            "vn": "Vậy làm 1 phần lớn."
          },
          {
            "speaker": "あなた",
            "jp": "［かしこまりました。少々（しょうしょう） お待（ま）ち ください］。",
            "vn": "Vâng ạ. Xin chờ chút."
          }
        ]
      },
      {
        "id": "track-cd06-d5",
        "title": "Khách phàn nàn",
        "titleVn": "Khách phàn nàn",
        "category": "topic",
        "topicId": "cd06",
        "tag": "アルバイト・面接・職場 · Kịch bản 5",
        "lines": [
          {
            "speaker": "客",
            "jp": "すみません！ 注文（ちゅうもん）して から 30分（さんじゅっぷん）も 待（ま）って いるんですけど。",
            "vn": "Xin lỗi! Gọi món rồi mà đợi những 30 phút."
          },
          {
            "speaker": "あなた",
            "jp": "［大変（たいへん） 申（もう）し訳（わけ）ございません。ただいま 確認（かくにん）いたします］。",
            "vn": "Thành thật xin lỗi. Tôi kiểm tra ngay."
          },
          {
            "speaker": "客",
            "jp": "お願（ねが）いします。午後（ごご）から 会議（かいぎ）なので。",
            "vn": "Nhờ bạn. Chiều tôi có họp."
          },
          {
            "speaker": "あなた",
            "jp": "［お客様（きゃくさま）、大変（たいへん） お待（ま）たせ いたしました。あと 5分（ごふん）で お持（も）ち できます］。",
            "vn": "Thưa quý khách, xin lỗi đã để chờ lâu. Khoảng 5 phút nữa sẽ mang ra."
          },
          {
            "speaker": "客",
            "jp": "5分（ごふん）ね。わかりました。",
            "vn": "5 phút nhỉ. Được."
          },
          {
            "speaker": "あなた",
            "jp": "［お待（ま）たせ いたしました。カレーライスで ございます］。",
            "vn": "Xin lỗi đã để chờ. Đây là cơm cà ri ạ."
          },
          {
            "speaker": "客",
            "jp": "あれ？ 私（わたし）が 頼（たの）んだのは ハヤシライスですよ。",
            "vn": "Ơ? Tôi gọi cơm hayashi mà."
          },
          {
            "speaker": "あなた",
            "jp": "［えっ、申（もう）し訳（わけ）ございません。注文（ちゅうもん）を 間違（まちが）えて しまいました］。",
            "vn": "Ôi, thành thật xin lỗi. Tôi đã nhầm order."
          },
          {
            "speaker": "客",
            "jp": "もう 時間（じかん）が ないのに……。",
            "vn": "Đã hết thời gian rồi mà..."
          },
          {
            "speaker": "あなた",
            "jp": "［すぐ 作（つく）り直（なお）させて いただきます。お急（いそ）ぎの ようでしたら、先（さき）に お飲（の）み物（もの）を お持（も）ち しましょうか］。",
            "vn": "Tôi xin làm lại ngay. Nếu quý khách vội, tôi mang đồ uống trước nhé?"
          },
          {
            "speaker": "客",
            "jp": "じゃ、コーヒーを 先（さき）に ください。",
            "vn": "Vậy cho tôi cà phê trước."
          },
          {
            "speaker": "あなた",
            "jp": "［かしこまりました。お詫（わ）びに、コーヒーは サービスさせて いただきます］。",
            "vn": "Vâng ạ. Để xin lỗi, cà phê xin được tặng miễn phí."
          },
          {
            "speaker": "客",
            "jp": "そうですか。ありがとう。",
            "vn": "Vậy à. Cảm ơn."
          },
          {
            "speaker": "あなた",
            "jp": "［店長（てんちょう）、5番（ごばん）の お客様（きゃくさま）、私（わたし）が 注文（ちゅうもん）を 間違（まちが）えて しまいました］。",
            "vn": "(Với quản lý) Quản lý, khách bàn 5, em đã nhầm order."
          },
          {
            "speaker": "店長",
            "jp": "わかった。ハヤシライス、最優先（さいゆうせん）で 作（つく）るよ。",
            "vn": "(Quản lý) Hiểu rồi. Cơm hayashi làm ưu tiên nhất."
          },
          {
            "speaker": "あなた",
            "jp": "［お待（ま）たせ いたしました。ハヤシライスで ございます。本当（ほんとう）に 申（もう）し訳（わけ）ございませんでした］。",
            "vn": "Xin lỗi đã để chờ. Cơm hayashi đây ạ. Thật sự xin lỗi."
          },
          {
            "speaker": "客",
            "jp": "いいですよ。次（つぎ）は 気（き）を つけてね。",
            "vn": "Không sao. Lần sau cẩn thận nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。ごゆっくり どうぞ］。",
            "vn": "Vâng. Chúc quý khách ngon miệng."
          }
        ]
      },
      {
        "id": "track-cd06-d6",
        "title": "Bị nhắc vì mắc lỗi",
        "titleVn": "Bị nhắc vì mắc lỗi",
        "category": "topic",
        "topicId": "cd06",
        "tag": "アルバイト・面接・職場 · Kịch bản 6",
        "lines": [
          {
            "speaker": "店長",
            "jp": "ミンさん、ちょっと いい？",
            "vn": "Minh, nói chút được không?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、何（なん）でしょうか］。",
            "vn": "Vâng, có chuyện gì ạ?"
          },
          {
            "speaker": "店長",
            "jp": "今日（きょう）、5番（ごばん） テーブルの 注文（ちゅうもん）を 間違（まちが）えたよね。",
            "vn": "Hôm nay em nhầm order bàn 5 nhỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。ご迷惑（めいわく）を おかけして、申（もう）し訳（わけ）ありませんでした］。",
            "vn": "Vâng. Em xin lỗi đã gây phiền."
          },
          {
            "speaker": "店長",
            "jp": "何（なに）が 原因（げんいん）だと 思（おも）う？",
            "vn": "Em nghĩ nguyên nhân là gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［忙（いそが）しくて、伝票（でんぴょう）を 確認（かくにん）しないで 料理（りょうり）を 運（はこ）んで しまいました］。",
            "vn": "Vì bận, em mang món mà không kiểm tra phiếu."
          },
          {
            "speaker": "店長",
            "jp": "そうだね。運（はこ）ぶ 前（まえ）に、伝票（でんぴょう）と 料理（りょうり）を 必（かなら）ず 確認（かくにん）して。",
            "vn": "Đúng vậy. Trước khi mang nhất định kiểm tra phiếu và món."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。これからは 伝票（でんぴょう）を 確認（かくにん）して から 運（はこ）ぶ ように します］。",
            "vn": "Vâng. Từ giờ em sẽ kiểm tra phiếu rồi mới mang."
          },
          {
            "speaker": "店長",
            "jp": "それから、今日（きょう） 10分（じゅっぷん） 遅刻（ちこく）したね。",
            "vn": "Ngoài ra hôm nay em đến muộn 10 phút nhỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［はい……。バスが 遅（おく）れて しまったんです］。",
            "vn": "Vâng... Xe buýt bị trễ ạ."
          },
          {
            "speaker": "店長",
            "jp": "理由（りゆう）は わかるけど、遅（おく）れる 時（とき）は、出勤（しゅっきん）時間（じかん）の 前（まえ）に 連絡（れんらく）して ほしいんだ。",
            "vn": "Hiểu lý do, nhưng khi muộn tôi muốn em báo trước giờ vào ca."
          },
          {
            "speaker": "あなた",
            "jp": "［連絡（れんらく）するべきでした。申（もう）し訳（わけ）ありません］。",
            "vn": "Lẽ ra em nên báo. Em xin lỗi."
          },
          {
            "speaker": "店長",
            "jp": "お店（みせ）の 電話番号（でんわばんごう）、知（し）って る？",
            "vn": "Em biết số điện thoại quán không?"
          },
          {
            "speaker": "あなた",
            "jp": "［いいえ……。今（いま） 登録（とうろく）しても いいですか］。",
            "vn": "Không ạ... Bây giờ em lưu được không ạ?"
          },
          {
            "speaker": "店長",
            "jp": "うん、これだよ。それと、バスが よく 遅（おく）れるなら、1本（いっぽん） 早（はや）い バスに 乗（の）って ね。",
            "vn": "Ừ, số này. Và nếu xe buýt hay trễ thì đi sớm một chuyến nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、明日（あした）から 1本（いっぽん） 早（はや）い バスに します。以後（いご） 気（き）を つけます］。",
            "vn": "Vâng, từ mai em đi sớm một chuyến. Từ nay em sẽ chú ý."
          },
          {
            "speaker": "店長",
            "jp": "期待（きたい）して いるから、頑張（がんば）ってね。",
            "vn": "Tôi kỳ vọng ở em, cố lên nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。頑張（がんば）ります。お疲（つか）れ様（さま）でした］。",
            "vn": "Cảm ơn anh. Em sẽ cố. Anh vất vả rồi."
          }
        ]
      },
      {
        "id": "track-cd06-d7",
        "title": "Nhờ đồng nghiệp đổi ca",
        "titleVn": "Nhờ đồng nghiệp đổi ca",
        "category": "topic",
        "topicId": "cd06",
        "tag": "アルバイト・面接・職場 · Kịch bản 7",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［田中（たなか）さん、今（いま） ちょっと いいですか］。",
            "vn": "Chị Tanaka, bây giờ nói chút được không ạ?"
          },
          {
            "speaker": "田中",
            "jp": "うん、どうしたの？",
            "vn": "Ừ, sao thế?"
          },
          {
            "speaker": "あなた",
            "jp": "［来週（らいしゅう）の 土曜日（どようび）の シフトなんですが、日本語（にほんご）能力（のうりょく）試験（しけん）が あるので、替（か）わって いただけませんか］。",
            "vn": "Về ca thứ Bảy tuần sau, em có kỳ thi năng lực tiếng Nhật nên chị đổi giúp được không ạ?"
          },
          {
            "speaker": "田中",
            "jp": "土曜日（どようび）か。何時（なんじ）から？",
            "vn": "Thứ Bảy à. Từ mấy giờ?"
          },
          {
            "speaker": "あなた",
            "jp": "［朝（あさ） 10時（じゅうじ）から 午後（ごご） 3時（さんじ）までです］。",
            "vn": "Từ 10 giờ sáng đến 3 giờ chiều."
          },
          {
            "speaker": "田中",
            "jp": "うーん、午前（ごぜん）は 用事（ようじ）が あるけど、12時（じゅうにじ）からなら 入（はい）れるよ。",
            "vn": "Ừm, buổi sáng chị bận, từ 12 giờ thì vào được."
          },
          {
            "speaker": "あなた",
            "jp": "［本当（ほんとう）ですか。じゃ、10時（じゅうじ）から 12時（じゅうにじ）は ほかの 人（ひと）に 聞（き）いて みます］。",
            "vn": "Thật ạ? Vậy 10–12 giờ em sẽ hỏi thử người khác."
          },
          {
            "speaker": "田中",
            "jp": "鈴木（すずき）くんが 午前（ごぜん） 空（あ）いて いるって 言（い）って いたよ。",
            "vn": "Suzuki có nói buổi sáng rảnh đấy."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。代（か）わりに、田中（たなか）さんの 日曜日（にちようび）の シフトに 私（わたし）が 入（はい）りましょうか］。",
            "vn": "Cảm ơn chị. Đổi lại, em vào ca Chủ nhật của chị nhé?"
          },
          {
            "speaker": "田中",
            "jp": "いいの？ 助（たす）かる！ 日曜日（にちようび）、友達（ともだち）の 結婚式（けっこんしき）なんだ。",
            "vn": "Được à? Đỡ quá! Chủ nhật chị đi đám cưới bạn."
          },
          {
            "speaker": "あなた",
            "jp": "［ちょうど よかったです。日曜日（にちようび）は 何時（なんじ）からですか］。",
            "vn": "Vừa hay ạ. Chủ nhật từ mấy giờ?"
          },
          {
            "speaker": "田中",
            "jp": "11時（じゅういちじ）から 5時（ごじ）。",
            "vn": "11 giờ đến 5 giờ."
          },
          {
            "speaker": "あなた",
            "jp": "［大丈夫（だいじょうぶ）です。店長（てんちょう）にも 私（わたし）から 伝（つた）えて おきます］。",
            "vn": "Được ạ. Em sẽ báo cả quản lý."
          },
          {
            "speaker": "田中",
            "jp": "ありがとう。シフト表（ひょう）も 直（なお）して おいてね。",
            "vn": "Cảm ơn. Sửa luôn bảng ca nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、直（なお）して おきます。試験（しけん）、頑張（がんば）ります］。",
            "vn": "Vâng, em sẽ sửa. Em sẽ cố thi tốt."
          },
          {
            "speaker": "田中",
            "jp": "うん、頑張（がんば）って！ 合格（ごうかく）したら 教（おし）えてね。",
            "vn": "Ừ, cố lên! Đỗ thì báo chị nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、必（かなら）ず 報告（ほうこく）します］。",
            "vn": "Vâng, nhất định em sẽ báo."
          }
        ]
      },
      {
        "id": "track-cd06-d8",
        "title": "Báo nghỉ ốm đột xuất",
        "titleVn": "Báo nghỉ ốm đột xuất",
        "category": "topic",
        "topicId": "cd06",
        "tag": "アルバイト・面接・職場 · Kịch bản 8",
        "lines": [
          {
            "speaker": "店長",
            "jp": "はい、カフェ・さくら、山本（やまもと）です。",
            "vn": "Vâng, Café Sakura, Yamamoto đây."
          },
          {
            "speaker": "あなた",
            "jp": "［お疲（つか）れ様（さま）です。ミンです。朝（あさ） 早（はや）く すみません］。",
            "vn": "Chào anh. Em Minh đây. Xin lỗi gọi sớm."
          },
          {
            "speaker": "店長",
            "jp": "ああ、ミンさん。どうしたの？",
            "vn": "À, Minh. Sao thế?"
          },
          {
            "speaker": "あなた",
            "jp": "［実（じつ）は、昨日（きのう）の 夜（よる）から 熱（ねつ）が 出（で）て、今日（きょう）は 出勤（しゅっきん）できそうに ありません］。",
            "vn": "Thật ra từ tối qua em sốt, hôm nay có vẻ không đi làm được."
          },
          {
            "speaker": "店長",
            "jp": "熱（ねつ）は 何度（なんど）？",
            "vn": "Sốt bao nhiêu độ?"
          },
          {
            "speaker": "あなた",
            "jp": "［38度（さんじゅうはちど） 5分（ごぶ）です。今日（きょう） 休（やす）ませて いただけませんか］。",
            "vn": "38,5 độ. Cho em nghỉ hôm nay được không ạ?"
          },
          {
            "speaker": "店長",
            "jp": "わかった。それは 無理（むり）だね。代（か）わりの 人（ひと）を 探（さが）すよ。",
            "vn": "Hiểu rồi. Thế thì không được. Anh sẽ tìm người thay."
          },
          {
            "speaker": "あなた",
            "jp": "［急（きゅう）に すみません。田中（たなか）さんが 今日（きょう） 空（あ）いて いると 言（い）って いました］。",
            "vn": "Xin lỗi vì đột ngột. Chị Tanaka có nói hôm nay rảnh ạ."
          },
          {
            "speaker": "店長",
            "jp": "そうなんだ。聞（き）いて みるね。病院（びょういん）には 行（い）く？",
            "vn": "Vậy à. Anh hỏi thử. Em đi bệnh viện chứ?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、9時（くじ）に 病院（びょういん）が 開（あ）いたら、すぐ 行（い）きます］。",
            "vn": "Vâng, 9 giờ bệnh viện mở thì em đi ngay."
          },
          {
            "speaker": "店長",
            "jp": "インフルエンザだったら、教（おし）えてね。",
            "vn": "Nếu là cúm thì báo anh nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、結果（けっか）が わかったら、すぐ 連絡（れんらく）します］。",
            "vn": "Vâng, có kết quả em báo ngay."
          },
          {
            "speaker": "店長",
            "jp": "明日（あした）の シフトは どう する？",
            "vn": "Ca ngày mai thì sao?"
          },
          {
            "speaker": "あなた",
            "jp": "［明日（あした）の ことは、今日（きょう）の 夕方（ゆうがた）までに 決（き）めて 連絡（れんらく）しても いいですか］。",
            "vn": "Chuyện ngày mai em quyết định rồi báo trước chiều nay được không ạ?"
          },
          {
            "speaker": "店長",
            "jp": "いいよ。無理（むり）しないでね。",
            "vn": "Được. Đừng cố quá nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。ご迷惑（めいわく）を おかけします］。",
            "vn": "Cảm ơn anh. Em xin lỗi đã gây phiền."
          },
          {
            "speaker": "店長",
            "jp": "お大事（だいじ）に。",
            "vn": "Mau khỏe nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［失礼（しつれい）します］。",
            "vn": "Em xin phép."
          }
        ]
      },
      {
        "id": "track-cd06-d9",
        "title": "Hỏi về lương và bảng lương",
        "titleVn": "Hỏi về lương và bảng lương",
        "category": "topic",
        "topicId": "cd06",
        "tag": "アルバイト・面接・職場 · Kịch bản 9",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［店長（てんちょう）、給料（きゅうりょう）の ことで 質問（しつもん）しても いいですか］。",
            "vn": "Quản lý, em hỏi về lương được không ạ?"
          },
          {
            "speaker": "店長",
            "jp": "いいよ。何（なに）？",
            "vn": "Được. Gì vậy?"
          },
          {
            "speaker": "あなた",
            "jp": "［給料（きゅうりょう）は 毎月（まいつき） 何日（なんにち）に もらえますか］。",
            "vn": "Lương nhận vào ngày mấy hàng tháng ạ?"
          },
          {
            "speaker": "店長",
            "jp": "毎月（まいつき） 25日（にじゅうごにち）に 銀行（ぎんこう）に 振（ふ）り込（こ）むよ。15日（じゅうごにち）締（じ）めだよ。",
            "vn": "Ngày 25 hằng tháng chuyển khoản. Chốt ngày 15."
          },
          {
            "speaker": "あなた",
            "jp": "［「15日（じゅうごにち）締（じ）め」と いうのは どういう 意味（いみ）ですか］。",
            "vn": "\"Chốt ngày 15\" nghĩa là gì ạ?"
          },
          {
            "speaker": "店長",
            "jp": "先月（せんげつ）の 16日（じゅうろくにち）から 今月（こんげつ）の 15日（じゅうごにち）まで 働（はたら）いた 分（ぶん）が、25日（にじゅうごにち）に 入（はい）るって こと。",
            "vn": "Nghĩa là phần làm từ 16 tháng trước đến 15 tháng này sẽ vào ngày 25."
          },
          {
            "speaker": "あなた",
            "jp": "［なるほど。交通費（こうつうひ）も 出（で）ますか］。",
            "vn": "Ra vậy. Có trả phí đi lại không ạ?"
          },
          {
            "speaker": "店長",
            "jp": "1日（いちにち） 500円（ごひゃくえん）まで 出（で）るよ。",
            "vn": "Tối đa 500 yên/ngày."
          },
          {
            "speaker": "あなた",
            "jp": "［給与明細（きゅうよめいさい）に 「所得税（しょとくぜい）」と 書（か）いて ありますが、どうして 引（ひ）かれて いるんですか］。",
            "vn": "Bảng lương có ghi \"thuế thu nhập\", vì sao bị trừ ạ?"
          },
          {
            "speaker": "店長",
            "jp": "収入（しゅうにゅう）が ある 人（ひと）は 税金（ぜいきん）を 払（はら）うんだ。でも、1年（いちねん）の 収入（しゅうにゅう）が 少（すく）なければ、後（あと）で 戻（もど）って くる ことも あるよ。",
            "vn": "Ai có thu nhập thì phải đóng thuế. Nhưng nếu thu nhập cả năm ít, sau đó có thể được hoàn lại."
          },
          {
            "speaker": "あなた",
            "jp": "［そうなんですか。どう すれば 戻（もど）って きますか］。",
            "vn": "Vậy ạ. Làm sao để được hoàn ạ?"
          },
          {
            "speaker": "店長",
            "jp": "年末（ねんまつ）に 書類（しょるい）を 出（だ）せば 大丈夫（だいじょうぶ）。その 時（とき） また 説明（せつめい）するね。",
            "vn": "Cuối năm nộp giấy tờ là được. Lúc đó anh giải thích lại."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。それから、夜（よる） 10時（じゅうじ）以降（いこう）は 時給（じきゅう）が 上（あ）がりますか］。",
            "vn": "Cảm ơn anh. Ngoài ra sau 10 giờ tối lương giờ có tăng không ạ?"
          },
          {
            "speaker": "店長",
            "jp": "うん、深夜（しんや）手当（てあて）で 25%（にじゅうごパーセント） 上（あ）がるよ。でも、留学生（りゅうがくせい）は 週（しゅう） 28時間（にじゅうはちじかん）までだから 気（き）を つけてね。",
            "vn": "Có, phụ cấp đêm tăng 25%. Nhưng du học sinh chỉ tối đa 28 giờ/tuần nên cẩn thận."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、28時間（にじゅうはちじかん）を 超（こ）えないように します］。",
            "vn": "Vâng, em sẽ không vượt 28 giờ."
          },
          {
            "speaker": "店長",
            "jp": "ほかに わからない ことは ある？",
            "vn": "Còn gì không hiểu không?"
          },
          {
            "speaker": "あなた",
            "jp": "［大丈夫（だいじょうぶ）です。詳（くわ）しく 教（おし）えて くださって、ありがとうございました］。",
            "vn": "Không ạ. Cảm ơn anh đã chỉ chi tiết."
          }
        ]
      },
      {
        "id": "track-cd06-d10",
        "title": "Ca làm ở konbini (bạn là nhân viên)",
        "titleVn": "Ca làm ở konbini (bạn là nhân viên)",
        "category": "topic",
        "topicId": "cd06",
        "tag": "アルバイト・面接・職場 · Kịch bản 10",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［いらっしゃいませ。次（つぎ）で お待（ま）ちの お客様（きゃくさま）、どうぞ］。",
            "vn": "Kính chào. Quý khách tiếp theo, mời."
          },
          {
            "speaker": "客",
            "jp": "これ、お願（ねが）いします。それから、ビールも。",
            "vn": "Tính cái này. Và cả bia nữa."
          },
          {
            "speaker": "あなた",
            "jp": "［お酒（さけ）ですので、恐（おそ）れ入（い）りますが、画面（がめん）の 確認（かくにん）ボタンを お押（お）し ください］。",
            "vn": "Vì là rượu bia, xin lỗi quý khách, xin bấm nút xác nhận trên màn hình."
          },
          {
            "speaker": "客",
            "jp": "はい。",
            "vn": "Vâng."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。お弁当（べんとう）は 温（あたた）めますか］。",
            "vn": "Cảm ơn quý khách. Cơm hộp có hâm không ạ?"
          },
          {
            "speaker": "客",
            "jp": "お願（ねが）いします。あと、この 荷物（にもつ）を 送（おく）りたいんだけど。",
            "vn": "Nhờ bạn. À, tôi muốn gửi kiện hàng này."
          },
          {
            "speaker": "あなた",
            "jp": "［宅配便（たくはいびん）ですね。送（おく）り状（じょう）は もう お書（か）きですか］。",
            "vn": "Chuyển phát nhỉ. Quý khách đã viết phiếu gửi chưa ạ?"
          },
          {
            "speaker": "客",
            "jp": "いや、まだ。どれに 書（か）けば いいの？",
            "vn": "Chưa. Viết vào cái nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［こちらの 用紙（ようし）に お届（とど）け先（さき）と ご依頼主（いらいぬし）を ご記入（きにゅう） ください］。",
            "vn": "Xin ghi người nhận và người gửi vào mẫu này."
          },
          {
            "speaker": "客",
            "jp": "目（め）が 悪（わる）くて、小（ちい）さい 字（じ）が 見（み）えないんだよ。",
            "vn": "Mắt tôi kém, không thấy chữ nhỏ."
          },
          {
            "speaker": "あなた",
            "jp": "［では、私（わたし）が 代（か）わりに お書（か）き しましょうか］。",
            "vn": "Vậy để tôi viết thay quý khách nhé?"
          },
          {
            "speaker": "客",
            "jp": "助（たす）かるよ。住所（じゅうしょ）は ここに 書（か）いて ある。",
            "vn": "Đỡ quá. Địa chỉ ghi ở đây."
          },
          {
            "speaker": "あなた",
            "jp": "［書（か）きました。お届（とど）け先（さき）は 北海道（ほっかいどう）の 札幌市（さっぽろし）で よろしいでしょうか］。",
            "vn": "...Viết xong rồi. Người nhận ở Sapporo, Hokkaido đúng không ạ?"
          },
          {
            "speaker": "客",
            "jp": "そう、娘（むすめ）の 家（いえ）だよ。",
            "vn": "Đúng, nhà con gái tôi."
          },
          {
            "speaker": "あなた",
            "jp": "［お弁当（べんとう）と ビールと 宅配便（たくはいびん）で、合計（ごうけい） 2,480円（にせんよんひゃくはちじゅうえん）で ございます］。",
            "vn": "Cơm hộp, bia và chuyển phát, tổng 2.480 yên ạ."
          },
          {
            "speaker": "客",
            "jp": "じゃ、3,000円（さんぜんえん）。",
            "vn": "Vậy 3.000 yên."
          },
          {
            "speaker": "あなた",
            "jp": "［3,000円（さんぜんえん） お預（あず）かり します。520円（ごひゃくにじゅうえん）の お返（かえ）しです。こちら 控（ひか）えで ございます］。",
            "vn": "Nhận của quý khách 3.000 yên. Thối lại 520 yên. Đây là liên lưu ạ."
          },
          {
            "speaker": "客",
            "jp": "ありがとう。親切（しんせつ）だね。",
            "vn": "Cảm ơn. Cháu tử tế thật."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございました。またの お越（こ）しを お待（ま）ち して おります］。",
            "vn": "Cảm ơn quý khách. Hẹn gặp lại quý khách."
          }
        ]
      }
    ]
  },
  {
    "id": "pl-cd07",
    "title": "友達（ともだち）・トラブル・感情（かんじょう）",
    "titleVn": "Bạn bè, Sự cố & Cảm xúc",
    "description": "Trọn bộ 10 kịch bản đối thoại nhập vai thực tế trong tình huống: Bạn bè, Sự cố & Cảm xúc.",
    "category": "topic",
    "badge": "👥 BẠN BÈ & TÌNH CẢM",
    "accentColor": "from-pink-500/20 to-rose-500/10 border-pink-500/40 text-pink-600",
    "tracks": [
      {
        "id": "track-cd07-d1",
        "title": "An ủi bạn thi trượt",
        "titleVn": "An ủi bạn thi trượt",
        "category": "topic",
        "topicId": "cd07",
        "tag": "友達・トラブル・感情 · Kịch bản 1",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［リン、どうしたの？ 元気（げんき）ない ね］。",
            "vn": "Linh, sao vậy? Trông buồn nhỉ."
          },
          {
            "speaker": "リン",
            "jp": "うん……。N3の 結果（けっか）が 来（き）たんだけど、落（お）ちちゃった。",
            "vn": "Ừ... Kết quả N3 về rồi, mình trượt."
          },
          {
            "speaker": "あなた",
            "jp": "［そうなんだ……。あんなに 毎日（まいにち） 勉強（べんきょう）して いたのに］。",
            "vn": "Vậy à... Cậu đã học mỗi ngày thế mà."
          },
          {
            "speaker": "リン",
            "jp": "点数（てんすう）が 5点（ごてん）だけ 足（た）りなかったの。",
            "vn": "Chỉ thiếu 5 điểm thôi."
          },
          {
            "speaker": "あなた",
            "jp": "［5点（ごてん）だけ？ それは 悔（くや）しいね］。",
            "vn": "Chỉ 5 điểm? Thế thì tiếc thật."
          },
          {
            "speaker": "リン",
            "jp": "聴解（ちょうかい）が 全然（ぜんぜん） できなかった。緊張（きんちょう）して、何（なに）も 頭（あたま）に 入（はい）らなかったの。",
            "vn": "Phần nghe mình làm không được. Căng thẳng quá chẳng vào đầu gì."
          },
          {
            "speaker": "あなた",
            "jp": "［わかるよ。私（わたし）も 前（まえ）の 試験（しけん）で 緊張（きんちょう）して、手（て）が 震（ふる）えたよ］。",
            "vn": "Mình hiểu. Kỳ thi trước mình cũng căng thẳng đến run tay."
          },
          {
            "speaker": "リン",
            "jp": "ミンも？ 意外（いがい）。",
            "vn": "Minh cũng vậy à? Bất ngờ đấy."
          },
          {
            "speaker": "あなた",
            "jp": "［うん。でも、次（つぎ）の 試験（しけん）は 12月（じゅうにがつ）だから、まだ 時間（じかん）が あるよ］。",
            "vn": "Ừ. Nhưng kỳ sau là tháng 12 nên vẫn còn thời gian."
          },
          {
            "speaker": "リン",
            "jp": "そうだけど……もう 一回（いっかい） 頑張（がんば）れるかな。",
            "vn": "Đúng vậy, nhưng... mình còn cố được nữa không nhỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［リンなら 絶対（ぜったい） 大丈夫（だいじょうぶ）。聴解（ちょうかい）、一緒（いっしょ）に 練習（れんしゅう）しよう］。",
            "vn": "Linh thì chắc chắn được. Cùng luyện nghe nhé."
          },
          {
            "speaker": "リン",
            "jp": "本当（ほんとう）に？ ありがとう。",
            "vn": "Thật à? Cảm ơn."
          },
          {
            "speaker": "あなた",
            "jp": "［毎朝（まいあさ） 15分（じゅうごふん）、日本語（にほんご）の ニュースを 一緒（いっしょ）に 聞（き）かない］？",
            "vn": "Mỗi sáng 15 phút cùng nghe tin tức tiếng Nhật không?"
          },
          {
            "speaker": "リン",
            "jp": "いいね。少（すこ）し 元気（げんき）が 出（で）た。",
            "vn": "Hay đấy. Mình thấy có chút năng lượng rồi."
          },
          {
            "speaker": "あなた",
            "jp": "［よかった。今日（きょう）は 気分（きぶん）転換（てんかん）に、甘（あま）い もの 食（た）べに 行（い）こう］！",
            "vn": "Tốt quá. Hôm nay đổi gió, đi ăn đồ ngọt đi!"
          },
          {
            "speaker": "リン",
            "jp": "行（い）く！ 駅前（えきまえ）の パンケーキ屋（や）が いいな。",
            "vn": "Đi! Quán pancake trước ga được đấy."
          },
          {
            "speaker": "あなた",
            "jp": "［うん、今日（きょう）は 私（わたし）が おごるね］。",
            "vn": "Ừ, hôm nay mình đãi nhé."
          }
        ]
      },
      {
        "id": "track-cd07-d2",
        "title": "Kể chuyện bị trộm xe đạp",
        "titleVn": "Kể chuyện bị trộm xe đạp",
        "category": "topic",
        "topicId": "cd07",
        "tag": "友達・トラブル・感情 · Kịch bản 2",
        "lines": [
          {
            "speaker": "ナム",
            "jp": "今日（きょう）、歩（ある）いて 来（き）たの？ 自転車（じてんしゃ）は？",
            "vn": "Hôm nay đi bộ đến à? Xe đạp đâu?"
          },
          {
            "speaker": "あなた",
            "jp": "［昨日（きのう）、駅前（えきまえ）で 自転車（じてんしゃ）を 盗（ぬす）まれたんだ］。",
            "vn": "Hôm qua mình bị trộm xe đạp ở trước ga."
          },
          {
            "speaker": "ナム",
            "jp": "えっ、ひどい！ 鍵（かぎ）は かけて いた？",
            "vn": "Hả, tệ quá! Cậu có khóa không?"
          },
          {
            "speaker": "あなた",
            "jp": "［かけて いたのに、鍵（かぎ）を 壊（こわ）されて いたの］。",
            "vn": "Có khóa vậy mà bị phá khóa."
          },
          {
            "speaker": "ナム",
            "jp": "何時（なんじ）ごろ？",
            "vn": "Khoảng mấy giờ?"
          },
          {
            "speaker": "あなた",
            "jp": "［夕方（ゆうがた） 6時（ろくじ）から 8時（はちじ）の 間（あいだ）だと 思（おも）う。買（か）い物（もの）して 戻（もど）ったら、なかったんだ］。",
            "vn": "Mình nghĩ trong khoảng 6–8 giờ tối. Mua sắm xong quay lại thì không thấy."
          },
          {
            "speaker": "ナム",
            "jp": "交番（こうばん）には 行（い）った？",
            "vn": "Cậu đến đồn chưa?"
          },
          {
            "speaker": "あなた",
            "jp": "［うん、行（い）って 被害届（ひがいとどけ）を 出（だ）したよ。防犯（ぼうはん）登録（とうろく）の 番号（ばんごう）を 聞（き）かれた］。",
            "vn": "Rồi, mình đến nộp đơn trình báo. Bị hỏi số đăng ký chống trộm."
          },
          {
            "speaker": "ナム",
            "jp": "番号（ばんごう）、わかった？",
            "vn": "Cậu biết số không?"
          },
          {
            "speaker": "あなた",
            "jp": "［レシートを 写真（しゃしん）に 撮（と）って おいたから、大丈夫（だいじょうぶ）だった］。",
            "vn": "Mình chụp sẵn hóa đơn nên ổn."
          },
          {
            "speaker": "ナム",
            "jp": "よかった。見（み）つかると いいね。",
            "vn": "May quá. Mong tìm được nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［うん。でも、買（か）った ばかりだったから、本当（ほんとう）に ショックで……］。",
            "vn": "Ừ. Nhưng mới mua nên thật sự sốc..."
          },
          {
            "speaker": "ナム",
            "jp": "いくらだったの？",
            "vn": "Bao nhiêu tiền vậy?"
          },
          {
            "speaker": "あなた",
            "jp": "［2万円（にまんえん）。アルバイト 1週間（いっしゅうかん）分（ぶん）だよ。鍵（かぎ）を 2つ かければ よかった］。",
            "vn": "2 vạn yên. Bằng 1 tuần làm thêm. Giá mà khóa 2 ổ."
          },
          {
            "speaker": "ナム",
            "jp": "見（み）つかるまで、僕（ぼく）の 古（ふる）い 自転車（じてんしゃ）、使（つか）う？",
            "vn": "Đến khi tìm được, dùng xe đạp cũ của mình không?"
          },
          {
            "speaker": "あなた",
            "jp": "［本当（ほんとう）？ 助（たす）かる！ いいの］？",
            "vn": "Thật à? Đỡ quá! Được không?"
          },
          {
            "speaker": "ナム",
            "jp": "うん、今（いま） 使（つか）って ないから。でも、ちょっと ボロボロだよ。",
            "vn": "Ừ, giờ mình không dùng. Nhưng hơi cũ nát."
          },
          {
            "speaker": "あなた",
            "jp": "［全然（ぜんぜん） いいよ。ありがとう、ナム。今度（こんど） ご飯（はん） おごるね］。",
            "vn": "Không sao đâu. Cảm ơn Nam. Lần tới mình khao cơm nhé."
          }
        ]
      },
      {
        "id": "track-cd07-d3",
        "title": "Xin lỗi và làm lành sau khi cãi nhau",
        "titleVn": "Xin lỗi và làm lành sau khi cãi nhau",
        "category": "topic",
        "topicId": "cd07",
        "tag": "友達・トラブル・感情 · Kịch bản 3",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［マイ、ちょっと 話（はな）せる］？",
            "vn": "Mai, nói chuyện chút được không?"
          },
          {
            "speaker": "マイ",
            "jp": "……何（なに）？",
            "vn": "...Gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［昨日（きのう）は 言（い）い過（す）ぎて、ごめんね］。",
            "vn": "Hôm qua mình nói quá lời, xin lỗi nhé."
          },
          {
            "speaker": "マイ",
            "jp": "……私（わたし）も 怒（おこ）りすぎた。",
            "vn": "...Mình cũng giận quá."
          },
          {
            "speaker": "あなた",
            "jp": "［マイを 傷（きず）つける つもりじゃ なかったんだ］。",
            "vn": "Mình không có ý làm Mai tổn thương."
          },
          {
            "speaker": "マイ",
            "jp": "約束（やくそく）の 時間（じかん）に 30分（さんじゅっぷん）も 遅（おく）れたのに、ミンが 謝（あやま）らなかったから……。",
            "vn": "Đến hẹn muộn những 30 phút vậy mà Minh không xin lỗi nên..."
          },
          {
            "speaker": "あなた",
            "jp": "［本当（ほんとう）だね。最初（さいしょ）に ちゃんと 謝（あやま）るべきだった］。",
            "vn": "Đúng thật. Lẽ ra mình phải xin lỗi đàng hoàng ngay."
          },
          {
            "speaker": "マイ",
            "jp": "何（なん）で 遅（おく）れたの？",
            "vn": "Sao cậu đến muộn?"
          },
          {
            "speaker": "あなた",
            "jp": "［実（じつ）は、アルバイトが 急（きゅう）に 延長（えんちょう）に なって……。でも、連絡（れんらく）しなかったのは 私（わたし）が 悪（わる）い］。",
            "vn": "Thật ra ca làm thêm bị kéo dài đột xuất... Nhưng không báo là lỗi của mình."
          },
          {
            "speaker": "マイ",
            "jp": "そうだったんだ。言（い）って くれれば よかったのに。",
            "vn": "Hóa ra vậy. Giá cậu nói thì tốt rồi."
          },
          {
            "speaker": "あなた",
            "jp": "［うん。これからは 遅（おく）れそうな 時（とき）、必（かなら）ず 連絡（れんらく）する］。",
            "vn": "Ừ. Từ giờ khi có vẻ muộn mình nhất định báo."
          },
          {
            "speaker": "マイ",
            "jp": "私（わたし）も ひどい ことを 言（い）って ごめん。「もう 友達（ともだち）じゃ ない」なんて。",
            "vn": "Mình cũng xin lỗi đã nói câu tệ. Kiểu \"Không còn là bạn nữa\"."
          },
          {
            "speaker": "あなた",
            "jp": "［あれは ちょっと 悲（かな）しかった。でも、マイの 気持（きも）ちも わかるよ］。",
            "vn": "Câu đó mình hơi buồn. Nhưng mình hiểu cảm giác của Mai."
          },
          {
            "speaker": "マイ",
            "jp": "じゃ、仲直（なかなお）り しよう。",
            "vn": "Vậy làm lành nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［うん、仲直（なかなお）り！ お詫（わ）びに、今日（きょう） 昼（ひる）ご飯（はん） おごらせて］。",
            "vn": "Ừ, làm lành! Để xin lỗi, hôm nay cho mình đãi bữa trưa."
          },
          {
            "speaker": "マイ",
            "jp": "じゃ、遠慮（えんりょ）なく。カレーが いいな。",
            "vn": "Vậy mình không khách sáo. Cà ri được đấy."
          },
          {
            "speaker": "あなた",
            "jp": "［了解（りょうかい）。マイと けんかしたままは、やっぱり 嫌（いや）だったよ］。",
            "vn": "OK. Cứ giận nhau với Mai thì đúng là mình không chịu nổi."
          }
        ]
      },
      {
        "id": "track-cd07-d4",
        "title": "Phàn nàn vì bạn kể bí mật",
        "titleVn": "Phàn nàn vì bạn kể bí mật",
        "category": "topic",
        "topicId": "cd07",
        "tag": "友達・トラブル・感情 · Kịch bản 4",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［キム、ちょっと いい］？",
            "vn": "Kim, nói chút được không?"
          },
          {
            "speaker": "キム",
            "jp": "うん、どうしたの？ 怖（こわ）い 顔（かお）して。",
            "vn": "Ừ, sao vậy? Mặt đáng sợ thế."
          },
          {
            "speaker": "あなた",
            "jp": "［私（わたし）が 田中（たなか）くんを 好（す）きだって こと、誰（だれ）かに 話（はな）した］？",
            "vn": "Chuyện mình thích Tanaka, cậu có kể với ai không?"
          },
          {
            "speaker": "キム",
            "jp": "え……ナムに だけ 話（はな）したけど。",
            "vn": "Ơ... Mình chỉ kể với Nam thôi."
          },
          {
            "speaker": "あなた",
            "jp": "［秘密（ひみつ）だって 言（い）ったのに、どうして 話（はな）したの］？",
            "vn": "Mình đã bảo là bí mật vậy mà sao cậu kể?"
          },
          {
            "speaker": "キム",
            "jp": "ごめん……。ナムなら 大丈夫（だいじょうぶ）だと 思（おも）って。",
            "vn": "Xin lỗi... Mình nghĩ Nam thì không sao."
          },
          {
            "speaker": "あなた",
            "jp": "［今日（きょう）、クラスの みんなに 「田中（たなか）くんが 好（す）きなんでしょ」って 聞（き）かれて、本当（ほんとう）に 恥（は）ずかしかった］。",
            "vn": "Hôm nay bị cả lớp hỏi \"Cậu thích Tanaka đúng không\", mình xấu hổ lắm."
          },
          {
            "speaker": "キム",
            "jp": "えっ、みんな 知（し）って いるの？ ナムが 話（はな）したんだ……。",
            "vn": "Hả, mọi người đều biết à? Là Nam kể..."
          },
          {
            "speaker": "あなた",
            "jp": "［キムを 信（しん）じて いたから、誰（だれ）にも 話（はな）して ほしくなかった］。",
            "vn": "Vì mình tin Kim nên mình không muốn cậu kể với ai."
          },
          {
            "speaker": "キム",
            "jp": "本当（ほんとう）に ごめんなさい。うっかりして いた。",
            "vn": "Thật sự xin lỗi. Mình đã sơ ý."
          },
          {
            "speaker": "あなた",
            "jp": "［田中（たなか）くんにも 知（し）られたかな］。",
            "vn": "...Tanaka cũng biết rồi nhỉ."
          },
          {
            "speaker": "キム",
            "jp": "ナムに 聞（き）いて みる。もし 知（し）って いたら、私（わたし）から 説明（せつめい）する。",
            "vn": "Mình sẽ hỏi Nam. Nếu biết rồi mình sẽ giải thích."
          },
          {
            "speaker": "あなた",
            "jp": "［ううん、それは いい。もっと 恥（は）ずかしく なるから］。",
            "vn": "Không, thôi khỏi. Như thế càng xấu hổ hơn."
          },
          {
            "speaker": "キム",
            "jp": "わかった。もう 二度（にど）と 人（ひと）の 秘密（ひみつ）は 話（はな）さない。約束（やくそく）する。",
            "vn": "Hiểu rồi. Mình sẽ không bao giờ kể bí mật của người khác nữa. Mình hứa."
          },
          {
            "speaker": "あなた",
            "jp": "［うん。もう 誰（だれ）にも 言（い）わないでね］。",
            "vn": "Ừ. Đừng nói với ai nữa nhé."
          },
          {
            "speaker": "キム",
            "jp": "許（ゆる）して くれる？",
            "vn": "Cậu tha thứ cho mình chứ?"
          },
          {
            "speaker": "あなた",
            "jp": "［今回（こんかい）だけね。キムは 大切（たいせつ）な 友達（ともだち）だから］。",
            "vn": "...Chỉ lần này thôi nhé. Vì Kim là bạn quan trọng."
          }
        ]
      },
      {
        "id": "track-cd07-d5",
        "title": "An ủi bạn thất tình",
        "titleVn": "An ủi bạn thất tình",
        "category": "topic",
        "topicId": "cd07",
        "tag": "友達・トラブル・感情 · Kịch bản 5",
        "lines": [
          {
            "speaker": "リン",
            "jp": "もしもし、ミン？ 今（いま） 話（はな）せる？",
            "vn": "Alo, Minh? Giờ nói chuyện được không?"
          },
          {
            "speaker": "あなた",
            "jp": "［うん、大丈夫（だいじょうぶ）だよ。声（こえ）が 元気（げんき）ないけど、どうしたの］？",
            "vn": "Ừ, được. Giọng cậu buồn thế, sao vậy?"
          },
          {
            "speaker": "リン",
            "jp": "彼（かれ）に 「別（わか）れよう」って 言（い）われちゃった。",
            "vn": "Mình bị anh ấy nói \"Chia tay đi\"."
          },
          {
            "speaker": "あなた",
            "jp": "［え……。いつ］？",
            "vn": "Hả... Khi nào?"
          },
          {
            "speaker": "リン",
            "jp": "さっき。ほかに 好（す）きな 人（ひと）が できたって。",
            "vn": "Lúc nãy. Anh ấy bảo đã có người khác."
          },
          {
            "speaker": "あなた",
            "jp": "［そうなんだ……。つらかったね］。",
            "vn": "Vậy à... Khổ nhỉ."
          },
          {
            "speaker": "リン",
            "jp": "2年（にねん）も 付（つ）き合（あ）って いたのに……。",
            "vn": "Đã yêu nhau những 2 năm vậy mà..."
          },
          {
            "speaker": "あなた",
            "jp": "［泣（な）きたい 時（とき）は 泣（な）いて いいよ。話（はなし）、全部（ぜんぶ） 聞（き）くから］。",
            "vn": "Muốn khóc thì cứ khóc. Mình nghe hết."
          },
          {
            "speaker": "リン",
            "jp": "ありがとう……。私（わたし）が 悪（わる）かったのかな。",
            "vn": "Cảm ơn... Có phải lỗi của mình không nhỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［リンは 悪（わる）くないよ。リンは いつも 彼（かれ）の ことを 一番（いちばん）に 考（かんが）えて いたじゃ ない］。",
            "vn": "Linh không có lỗi. Linh lúc nào cũng nghĩ cho anh ấy trước tiên mà."
          },
          {
            "speaker": "リン",
            "jp": "でも、もう 誰（だれ）も 信（しん）じられない 気（き）が する。",
            "vn": "Nhưng mình cảm thấy không thể tin ai nữa."
          },
          {
            "speaker": "あなた",
            "jp": "［今（いま）は そう 思（おも）っても 仕方（しかた）ないよ。少（すこ）しずつ 立（た）ち直（なお）れば いいんだから］。",
            "vn": "Giờ nghĩ vậy cũng là điều đương nhiên. Cứ từ từ vượt qua là được."
          },
          {
            "speaker": "リン",
            "jp": "今夜（こんや）は 一人（ひとり）で いたくないな。",
            "vn": "Tối nay mình không muốn ở một mình."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、今（いま）から そっちに 行（い）こうか。アイス 買（か）って 行（い）くよ］。",
            "vn": "Vậy giờ mình qua đó nhé. Mình mua kem mang đến."
          },
          {
            "speaker": "リン",
            "jp": "本当（ほんとう）？ うれしい。",
            "vn": "Thật à? Vui quá."
          },
          {
            "speaker": "あなた",
            "jp": "［うん。週末（しゅうまつ）は 気分（きぶん）転換（てんかん）に、どこか 遠（とお）くへ 出（で）かけよう］。",
            "vn": "Ừ. Cuối tuần đổi gió, đi đâu xa xa đi."
          },
          {
            "speaker": "リン",
            "jp": "ミンが 友達（ともだち）で よかった。",
            "vn": "May mà Minh là bạn mình."
          },
          {
            "speaker": "あなた",
            "jp": "［つらい 時（とき）は いつでも 電話（でんわ）して。じゃ、20分（にじゅっぷん）で 着（つ）くね］。",
            "vn": "Lúc khổ cứ gọi bất cứ khi nào. Vậy 20 phút nữa mình đến nhé."
          }
        ]
      },
      {
        "id": "track-cd07-d6",
        "title": "Tin vui: bạn sắp cưới",
        "titleVn": "Tin vui: bạn sắp cưới",
        "category": "topic",
        "topicId": "cd07",
        "tag": "友達・トラブル・感情 · Kịch bản 6",
        "lines": [
          {
            "speaker": "サラ",
            "jp": "ミン、報告（ほうこく）が あるの。",
            "vn": "Minh, mình có tin muốn báo."
          },
          {
            "speaker": "あなた",
            "jp": "［何（なに）？ うれしそうな 顔（かお）して］。",
            "vn": "Gì vậy? Trông vui thế."
          },
          {
            "speaker": "サラ",
            "jp": "実（じつ）は、来年（らいねん）の 春（はる）、健太（けんた）と 結婚（けっこん）する ことに なったの！",
            "vn": "Thật ra mùa xuân năm sau mình sẽ cưới Kenta!"
          },
          {
            "speaker": "あなた",
            "jp": "［えっ、本当（ほんとう）！？ びっくりした！ おめでとう］！",
            "vn": "Hả, thật à!? Giật cả mình! Chúc mừng!"
          },
          {
            "speaker": "サラ",
            "jp": "ありがとう！ 先週（せんしゅう） プロポーズされたの。",
            "vn": "Cảm ơn! Tuần trước mình được cầu hôn."
          },
          {
            "speaker": "あなた",
            "jp": "［どこで プロポーズされたの］？",
            "vn": "Được cầu hôn ở đâu vậy?"
          },
          {
            "speaker": "サラ",
            "jp": "初（はじ）めて デートした 公園（こうえん）で。指輪（ゆびわ）を 見（み）た 時（とき）、泣（な）いちゃった。",
            "vn": "Ở công viên hẹn hò lần đầu. Lúc thấy nhẫn mình đã khóc."
          },
          {
            "speaker": "あなた",
            "jp": "［ロマンチックだね。聞（き）いて いる 私（わたし）も 泣（な）きそうに なった］。",
            "vn": "Lãng mạn quá. Nghe thôi mình cũng muốn khóc."
          },
          {
            "speaker": "サラ",
            "jp": "それでね、ミンに 結婚式（けっこんしき）に 来（き）て ほしいの。",
            "vn": "Vì vậy, mình muốn Minh đến dự đám cưới."
          },
          {
            "speaker": "あなた",
            "jp": "［もちろん 行（い）くよ！ 招待（しょうたい）されて、すごく うれしい］。",
            "vn": "Tất nhiên đi chứ! Được mời mình vui lắm."
          },
          {
            "speaker": "サラ",
            "jp": "それから、友達（ともだち）代表（だいひょう）の スピーチも お願（ねが）いしたいんだけど……。",
            "vn": "Ngoài ra, mình muốn nhờ cậu phát biểu đại diện bạn bè..."
          },
          {
            "speaker": "あなた",
            "jp": "［え、私（わたし）が？ 日本語（にほんご）で スピーチなんて、できるかな］。",
            "vn": "Hả, mình á? Phát biểu bằng tiếng Nhật, mình làm được không nhỉ."
          },
          {
            "speaker": "サラ",
            "jp": "ミンなら 大丈夫（だいじょうぶ）。短（みじか）くて いいから。",
            "vn": "Minh thì được. Ngắn thôi cũng được."
          },
          {
            "speaker": "あなた",
            "jp": "［わかった。頑張（がんば）って 書（か）いて みる。書（か）いたら、チェックして くれる］？",
            "vn": "Được. Mình sẽ cố viết thử. Viết xong cậu kiểm tra giúp nhé?"
          },
          {
            "speaker": "サラ",
            "jp": "もちろん！",
            "vn": "Tất nhiên!"
          },
          {
            "speaker": "あなた",
            "jp": "［結婚式（けっこんしき）って、何（なに）を 着（き）て 行（い）けば いいの？ 日本（にほん）の ルールが わからなくて］。",
            "vn": "Đám cưới thì mặc gì đi được? Mình không biết quy tắc Nhật."
          },
          {
            "speaker": "サラ",
            "jp": "白（しろ）い 服（ふく）だけは 避（さ）けてね。花嫁（はなよめ）の 色（いろ）だから。",
            "vn": "Chỉ tránh mặc trắng thôi. Vì là màu của cô dâu."
          },
          {
            "speaker": "あなた",
            "jp": "［白（しろ）以外（いがい）ね。じゃ、アオザイを 着（き）て 行（い）こうかな］。",
            "vn": "Trừ màu trắng nhỉ. Vậy mình mặc áo dài đi nhỉ."
          },
          {
            "speaker": "サラ",
            "jp": "それ、いい！ みんな 喜（よろこ）ぶと 思（おも）う。",
            "vn": "Hay đấy! Mình nghĩ mọi người sẽ thích."
          }
        ]
      },
      {
        "id": "track-cd07-d7",
        "title": "Bị hàng xóm làm ồn, bàn cách giải quyết",
        "titleVn": "Bị hàng xóm làm ồn, bàn cách giải quyết",
        "category": "topic",
        "topicId": "cd07",
        "tag": "友達・トラブル・感情 · Kịch bản 7",
        "lines": [
          {
            "speaker": "パク",
            "jp": "ミン、最近（さいきん） 眠（ねむ）そうだね。",
            "vn": "Minh, dạo này trông buồn ngủ nhỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［隣（となり）の 人（ひと）に 毎晩（まいばん） 騒（さわ）がれて、全然（ぜんぜん） 眠（ねむ）れないの］。",
            "vn": "Tối nào cũng bị hàng xóm làm ồn, mình không ngủ được gì."
          },
          {
            "speaker": "パク",
            "jp": "どんな 音（おと）？",
            "vn": "Tiếng gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［友達（ともだち）を 呼（よ）んで、夜中（よなか） 2時（にじ）ごろまで 大声（おおごえ）で 話（はな）したり、音楽（おんがく）を かけたり して いるの］。",
            "vn": "Gọi bạn đến, nói to và mở nhạc đến khoảng 2 giờ sáng."
          },
          {
            "speaker": "パク",
            "jp": "ひどいね。管理会社（かんりがいしゃ）に 言（い）った？",
            "vn": "Tệ nhỉ. Báo công ty quản lý chưa?"
          },
          {
            "speaker": "あなた",
            "jp": "［うん、先週（せんしゅう） 言（い）ったのに、まだ 静（しず）かに ならないんだ］。",
            "vn": "Rồi, tuần trước báo rồi vậy mà vẫn chưa yên."
          },
          {
            "speaker": "パク",
            "jp": "直接（ちょくせつ） 話（はな）して みたら どう？",
            "vn": "Thử nói trực tiếp xem sao?"
          },
          {
            "speaker": "あなた",
            "jp": "［怖（こわ）い 人（ひと）だったら、どう しよう。トラブルに なりたくないし］。",
            "vn": "Nếu là người đáng sợ thì sao. Mình cũng không muốn rắc rối."
          },
          {
            "speaker": "パク",
            "jp": "じゃ、手紙（てがみ）を ドアに 入（い）れるのは？ 直接（ちょくせつ）より 気（き）が 楽（らく）だよ。",
            "vn": "Vậy bỏ thư vào cửa thì sao? Đỡ ngại hơn nói trực tiếp."
          },
          {
            "speaker": "あなた",
            "jp": "［それ、いいね。でも、日本語（にほんご）で 丁寧（ていねい）に 書（か）けるかな］。",
            "vn": "Hay đấy. Nhưng mình viết lịch sự bằng tiếng Nhật được không nhỉ."
          },
          {
            "speaker": "パク",
            "jp": "一緒（いっしょ）に 考（かんが）えよう。「夜（よる） 11時（じゅういちじ）以降（いこう）は 静（しず）かに して いただけると 助（たす）かります」とか。",
            "vn": "Cùng nghĩ nhé. Kiểu \"Sau 11 giờ tối nếu giữ yên lặng giúp thì tôi rất cảm kích\"."
          },
          {
            "speaker": "あなた",
            "jp": "［「明日（あした） 朝（あさ） 早（はや）い ので」も 書（か）いた ほうが いいかな］。",
            "vn": "Có nên viết thêm \"Vì sáng mai tôi phải dậy sớm\" không nhỉ?"
          },
          {
            "speaker": "パク",
            "jp": "うん、理由（りゆう）が ある ほうが わかって もらいやすいと 思（おも）う。",
            "vn": "Ừ, có lý do thì mình nghĩ dễ được thông cảm hơn."
          },
          {
            "speaker": "あなた",
            "jp": "［我慢（がまん）するより、伝（つた）えた ほうが いいよね］。",
            "vn": "Nói ra vẫn tốt hơn là chịu đựng nhỉ."
          },
          {
            "speaker": "パク",
            "jp": "そうだよ。それでも だめだったら、また 管理会社（かんりがいしゃ）に 言（い）おう。",
            "vn": "Đúng vậy. Vẫn không được thì lại báo công ty quản lý."
          },
          {
            "speaker": "あなた",
            "jp": "［うん。今夜（こんや） 書（か）いて みる。手伝（てつだ）って くれて ありがとう］。",
            "vn": "Ừ. Tối nay mình viết thử. Cảm ơn cậu giúp mình."
          },
          {
            "speaker": "パク",
            "jp": "静（しず）かに なると いいね。",
            "vn": "Mong là yên tĩnh lại nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［うん。久（ひさ）しぶりに ぐっすり 寝（ね）たいよ］。",
            "vn": "Ừ. Lâu rồi mình muốn ngủ một giấc ngon."
          }
        ]
      },
      {
        "id": "track-cd07-d8",
        "title": "Bạn đến muộn hẹn",
        "titleVn": "Bạn đến muộn hẹn",
        "category": "topic",
        "topicId": "cd07",
        "tag": "友達・トラブル・感情 · Kịch bản 8",
        "lines": [
          {
            "speaker": "キム",
            "jp": "ごめん！ 本当（ほんとう）に ごめん！",
            "vn": "Xin lỗi! Thật sự xin lỗi!"
          },
          {
            "speaker": "あなた",
            "jp": "［40分（よんじゅっぷん）も 待（ま）ったよ。映画（えいが）、もう 始（はじ）まっちゃった］。",
            "vn": "Mình đợi những 40 phút đấy. Phim bắt đầu mất rồi."
          },
          {
            "speaker": "キム",
            "jp": "寝坊（ねぼう）しちゃったの……。",
            "vn": "Mình ngủ quên..."
          },
          {
            "speaker": "あなた",
            "jp": "［どうして 連絡（れんらく）して くれなかったの？ 何回（なんかい）も 電話（でんわ）したのに］。",
            "vn": "Sao cậu không báo mình? Mình gọi bao nhiêu lần vậy mà."
          },
          {
            "speaker": "キム",
            "jp": "スマホの 電池（でんち）が 切（き）れて いて……。",
            "vn": "Điện thoại mình hết pin..."
          },
          {
            "speaker": "あなた",
            "jp": "［そうだったんだ。事故（じこ）か 何（なに）かだと 思（おも）って、心配（しんぱい）したよ］。",
            "vn": "Hóa ra vậy. Mình tưởng tai nạn gì đó, lo lắm."
          },
          {
            "speaker": "キム",
            "jp": "本当（ほんとう）に ごめんね。チケット代（だい）、私（わたし）が 払（はら）う。",
            "vn": "Thật sự xin lỗi. Tiền vé để mình trả."
          },
          {
            "speaker": "あなた",
            "jp": "［次（つぎ）の 回（かい）は 何時（なんじ）か、調（しら）べて みよう］。",
            "vn": "Thử tra suất sau mấy giờ đi."
          },
          {
            "speaker": "キム",
            "jp": "えっと……4時（よじ）20分（にじゅっぷん）からが ある！",
            "vn": "Ờm... Có suất 4 giờ 20!"
          },
          {
            "speaker": "あなた",
            "jp": "［あと 1時間半（いちじかんはん）か。チケットを 替（か）えて もらえるか、聞（き）いて みる］。",
            "vn": "Còn 1 tiếng rưỡi nhỉ. Mình hỏi thử có đổi vé được không."
          },
          {
            "speaker": "キム",
            "jp": "お願（ねが）い。待（ま）って いる 間（あいだ）、お茶（ちゃ） しない？ 私（わたし）が おごる。",
            "vn": "Nhờ cậu. Trong lúc chờ uống trà không? Mình khao."
          },
          {
            "speaker": "あなた",
            "jp": "［まあ、いいよ。でも、次（つぎ）から 遅（おく）れる 時（とき）は、誰（だれ）かの スマホを 借（か）りても 連絡（れんらく）して ね］。",
            "vn": "Thôi được rồi. Nhưng lần sau muộn thì mượn điện thoại ai cũng được, báo mình nhé."
          },
          {
            "speaker": "キム",
            "jp": "うん、約束（やくそく）する。モバイルバッテリーも 買（か）う。",
            "vn": "Ừ, mình hứa. Mình sẽ mua cả sạc dự phòng."
          },
          {
            "speaker": "あなた",
            "jp": "［それが いいよ。チケット、替（か）えて もらえたよ］！",
            "vn": "Thế là tốt. Đổi vé được rồi!"
          },
          {
            "speaker": "キム",
            "jp": "よかった！ ミン、優（やさ）しいね。",
            "vn": "Tốt quá! Minh tốt bụng nhỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［その 代（か）わり、ポップコーンも おごってね］。",
            "vn": "Đổi lại, khao cả bỏng ngô nhé."
          },
          {
            "speaker": "キム",
            "jp": "もちろん！ 大（おお）きい サイズで！",
            "vn": "Tất nhiên! Cỡ lớn luôn!"
          }
        ]
      },
      {
        "id": "track-cd07-d9",
        "title": "Làm hỏng đồ mượn của bạn",
        "titleVn": "Làm hỏng đồ mượn của bạn",
        "category": "topic",
        "topicId": "cd07",
        "tag": "友達・トラブル・感情 · Kịch bản 9",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［ナム、本当（ほんとう）に ごめん。大事（だいじ）な 話（はなし）が あるんだ］。",
            "vn": "Nam, thật sự xin lỗi. Mình có chuyện quan trọng."
          },
          {
            "speaker": "ナム",
            "jp": "どうしたの？ そんな 顔（かお）して。",
            "vn": "Sao vậy? Mặt cậu thế kia."
          },
          {
            "speaker": "あなた",
            "jp": "［借（か）りた カメラを 落（お）として、壊（こわ）して しまった］。",
            "vn": "Mình làm rơi máy ảnh mượn của cậu và làm hỏng mất rồi."
          },
          {
            "speaker": "ナム",
            "jp": "えっ……あの カメラ？",
            "vn": "Hả... Cái máy ảnh đó à?"
          },
          {
            "speaker": "あなた",
            "jp": "［うん。旅行（りょこう）で 写真（しゃしん）を 撮（と）って いる 時（とき）、手（て）が 滑（すべ）って……。レンズに ひびが 入（はい）って しまったの］。",
            "vn": "Ừ. Lúc chụp ảnh khi đi du lịch tay mình trượt... Ống kính bị nứt mất."
          },
          {
            "speaker": "ナム",
            "jp": "……あれ、父（ちち）に もらった ものなのに。",
            "vn": "...Đó là cái bố cho mình vậy mà."
          },
          {
            "speaker": "あなた",
            "jp": "［本当（ほんとう）に ごめん。修理代（しゅうりだい）は 私（わたし）に 払（はら）わせて ほしい］。",
            "vn": "Thật sự xin lỗi. Cho mình trả tiền sửa nhé."
          },
          {
            "speaker": "ナム",
            "jp": "直（なお）るか どうか、わからないよ。",
            "vn": "Không biết có sửa được không nữa."
          },
          {
            "speaker": "あなた",
            "jp": "［明日（あした）、一緒（いっしょ）に カメラ屋（や）に 行（い）って 聞（き）いて みない］？",
            "vn": "Mai cùng đến tiệm máy ảnh hỏi thử không?"
          },
          {
            "speaker": "ナム",
            "jp": "……うん。それしか ないね。",
            "vn": "...Ừ. Chỉ có cách đó thôi."
          },
          {
            "speaker": "あなた",
            "jp": "［もし 直（なお）らなかったら、同（おな）じ カメラを 探（さが）して 弁償（べんしょう）する］。",
            "vn": "Nếu không sửa được, mình sẽ tìm cái máy y hệt để đền."
          },
          {
            "speaker": "ナム",
            "jp": "古（ふる）い モデルだから、もう 売（う）って いないかも。",
            "vn": "Mẫu cũ nên có khi không còn bán nữa."
          },
          {
            "speaker": "あなた",
            "jp": "［中古（ちゅうこ）の 店（みせ）も 全部（ぜんぶ） 探（さが）して みるよ］。",
            "vn": "Mình sẽ tìm hết cả cửa hàng đồ cũ."
          },
          {
            "speaker": "ナム",
            "jp": "……正直（しょうじき）に 言（い）って くれて ありがとう。黙（だま）って いる 人（ひと）も いるから。",
            "vn": "...Cảm ơn đã nói thật. Có người im lặng không nói."
          },
          {
            "speaker": "あなた",
            "jp": "［ナムの 大切（たいせつ）な ものだから、隠（かく）せないよ］。",
            "vn": "Vì là đồ quan trọng của Nam nên mình không thể giấu."
          },
          {
            "speaker": "ナム",
            "jp": "わかった。明日（あした）、授業（じゅぎょう）の 後（あと）で 行（い）こう。",
            "vn": "Hiểu rồi. Mai sau giờ học đi nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［うん。本当（ほんとう）に ごめんね］。",
            "vn": "Ừ. Thật sự xin lỗi nhé."
          }
        ]
      },
      {
        "id": "track-cd07-d10",
        "title": "Xin lời khuyên tỏ tình",
        "titleVn": "Xin lời khuyên tỏ tình",
        "category": "topic",
        "topicId": "cd07",
        "tag": "友達・トラブル・感情 · Kịch bản 10",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［マイ、ちょっと 相談（そうだん）したい ことが あるんだけど］。",
            "vn": "Mai, mình có chuyện muốn tâm sự."
          },
          {
            "speaker": "マイ",
            "jp": "いいよ。何（なに）？",
            "vn": "Được. Gì vậy?"
          },
          {
            "speaker": "あなた",
            "jp": "［実（じつ）は、サークルの 健太（けんた）くんが 気（き）に なって いるの］。",
            "vn": "Thật ra mình để ý Kenta ở câu lạc bộ."
          },
          {
            "speaker": "マイ",
            "jp": "えー！ いつから？",
            "vn": "Ơ! Từ khi nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［先月（せんげつ）の 合宿（がっしゅく）から。私（わたし）が 道（みち）に 迷（まよ）った 時（とき）、探（さが）しに 来（き）て くれたんだ］。",
            "vn": "Từ chuyến ở trọ tháng trước. Lúc mình lạc đường, cậu ấy đã đi tìm mình."
          },
          {
            "speaker": "マイ",
            "jp": "優（やさ）しいね。告白（こくはく）しないの？",
            "vn": "Tốt bụng nhỉ. Cậu không tỏ tình à?"
          },
          {
            "speaker": "あなた",
            "jp": "［告白（こくはく）した ほうが いいかな。でも、断（ことわ）られたら どう しよう］。",
            "vn": "Có nên tỏ tình không nhỉ. Nhưng nếu bị từ chối thì làm sao."
          },
          {
            "speaker": "マイ",
            "jp": "健太（けんた）くんも ミンと よく 話（はな）して いるじゃ ない。脈（みゃく）が あると 思（おも）うよ。",
            "vn": "Kenta cũng hay nói chuyện với Minh mà. Mình nghĩ có hy vọng đấy."
          },
          {
            "speaker": "あなた",
            "jp": "［そう かな……。でも、今（いま）の 関係（かんけい）が 壊（こわ）れたら 嫌（いや）だし］。",
            "vn": "Vậy sao... Nhưng nếu quan hệ hiện tại tan vỡ thì mình không muốn."
          },
          {
            "speaker": "マイ",
            "jp": "何（なに）も しないで 後悔（こうかい）するより、言（い）った ほうが いいよ。",
            "vn": "Còn hơn không làm gì rồi hối hận, nói ra thì tốt hơn."
          },
          {
            "speaker": "あなた",
            "jp": "［マイは 告白（こくはく）した ことが ある］？",
            "vn": "Mai từng tỏ tình chưa?"
          },
          {
            "speaker": "マイ",
            "jp": "あるよ。断（ことわ）られたけど、言（い）えて すっきりした。",
            "vn": "Có. Bị từ chối nhưng nói được rồi thấy nhẹ lòng."
          },
          {
            "speaker": "あなた",
            "jp": "［そうなんだ。急（きゅう）に 告白（こくはく）するのは 恥（は）ずかしいから、まず 2人（ふたり）で ご飯（はん）に 誘（さそ）って みようかな］。",
            "vn": "Ra vậy. Tỏ tình đột ngột thì ngại, trước tiên thử rủ đi ăn riêng nhỉ."
          },
          {
            "speaker": "マイ",
            "jp": "いい 考（かんが）え！ 何（なん）て 誘（さそ）う？",
            "vn": "Ý hay! Rủ thế nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［「この 前（まえ）の お礼（れい）に、ご飯（はん） おごらせて」って 言（い）うのは どう］？",
            "vn": "Nói \"Để cảm ơn hôm trước, cho mình đãi bữa cơm\" thì sao?"
          },
          {
            "speaker": "マイ",
            "jp": "自然（しぜん）で いいと 思（おも）う！ 頑張（がんば）って！",
            "vn": "Mình nghĩ tự nhiên, hay đấy! Cố lên!"
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとう。勇気（ゆうき）を 出（だ）して、明日（あした） 言（い）って みる。結果（けっか）、報告（ほうこく）するね］。",
            "vn": "Cảm ơn. Mình sẽ lấy can đảm nói thử vào mai. Sẽ báo kết quả nhé."
          }
        ]
      }
    ]
  },
  {
    "id": "pl-cd08",
    "title": "計画（けいかく）・旅行（りょこう）・将来（しょうらい）の夢（ゆめ）",
    "titleVn": "Kế hoạch, Du lịch & Ước mơ tương lai · Đặt phòng, Bàn lịch trình, Mục đích và So sánh nâng cao",
    "description": "Trọn bộ 10 kịch bản đối thoại nhập vai thực tế trong tình huống: Kế hoạch, Du lịch & Ước mơ tương lai · Đặt phòng, Bàn lịch trình, Mục đích và So sánh nâng cao.",
    "category": "topic",
    "badge": "✈️ KẾ HOẠCH & DU LỊCH",
    "accentColor": "from-purple-500/20 to-indigo-500/10 border-purple-500/40 text-purple-600",
    "tracks": [
      {
        "id": "track-cd08-d1",
        "title": "Rủ đi du lịch và chọn điểm đến",
        "titleVn": "Rủ đi du lịch và chọn điểm đến",
        "category": "topic",
        "topicId": "cd08",
        "tag": "計画・旅行・将来の夢 · Kịch bản 1",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［ナム、ゴールデンウィーク、どこか 旅行（りょこう）に 行（い）こうよ］。",
            "vn": "Nam, Tuần lễ vàng đi du lịch đâu đó đi."
          },
          {
            "speaker": "ナム",
            "jp": "いいね！ どこに 行（い）きたい？",
            "vn": "Hay! Cậu muốn đi đâu?"
          },
          {
            "speaker": "あなた",
            "jp": "［京都（きょうと）か 広島（ひろしま）が いいと 思（おも）って いるんだけど］。",
            "vn": "Mình đang nghĩ Kyoto hoặc Hiroshima."
          },
          {
            "speaker": "ナム",
            "jp": "京都（きょうと）は ゴールデンウィーク、すごく 混（こ）むよ。",
            "vn": "Kyoto dịp Tuần lễ vàng đông lắm."
          },
          {
            "speaker": "あなた",
            "jp": "［広島（ひろしま）は 京都（きょうと）ほど 混（こ）まないかな］。",
            "vn": "Hiroshima không đông bằng Kyoto nhỉ?"
          },
          {
            "speaker": "ナム",
            "jp": "たぶんね。宮島（みやじま）も 行（い）けるし、お好（この）み焼（や）きも おいしいよ。",
            "vn": "Chắc vậy. Đi được cả Miyajima, okonomiyaki lại ngon."
          },
          {
            "speaker": "あなた",
            "jp": "［いいね。予算（よさん）は 1人（ひとり） いくらぐらいに する］？",
            "vn": "Hay đấy. Ngân sách mỗi người khoảng bao nhiêu?"
          },
          {
            "speaker": "ナム",
            "jp": "4万円（よんまんえん）ぐらいかな。新幹線（しんかんせん）は 高（たか）いから。",
            "vn": "Chắc khoảng 4 vạn. Vì Shinkansen đắt."
          },
          {
            "speaker": "あなた",
            "jp": "［夜行（やこう）バスなら 安（やす）いよ。片道（かたみち） 8,000円（はっせんえん）ぐらい］。",
            "vn": "Xe buýt đêm thì rẻ. Một chiều khoảng 8.000 yên."
          },
          {
            "speaker": "ナム",
            "jp": "でも、バスで 12時間（じゅうにじかん）は 疲（つか）れるよね。",
            "vn": "Nhưng xe buýt 12 tiếng thì mệt nhỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、行（い）きは バス、帰（かえ）りは 新幹線（しんかんせん）は どう］？",
            "vn": "Vậy lượt đi xe buýt, lượt về Shinkansen thì sao?"
          },
          {
            "speaker": "ナム",
            "jp": "いい アイデア！ 何泊（なんぱく） する？",
            "vn": "Ý hay! Ở mấy đêm?"
          },
          {
            "speaker": "あなた",
            "jp": "［2泊（にはく）は どう？ ホテルは 早（はや）く 予約（よやく）すれば するほど 安（やす）いから、今週（こんしゅう） 決（き）めよう］。",
            "vn": "2 đêm thì sao? Khách sạn càng đặt sớm càng rẻ nên tuần này quyết đi."
          },
          {
            "speaker": "ナム",
            "jp": "賛成（さんせい）。じゃ、広島（ひろしま）に しよう！",
            "vn": "Tán thành. Vậy chọn Hiroshima!"
          },
          {
            "speaker": "あなた",
            "jp": "［決（き）まりだね。私（わたし）が バスを 調（しら）べて おくから、ナムは ホテルを お願（ねが）い］。",
            "vn": "Quyết rồi nhé. Mình tìm xe buýt, Nam lo khách sạn nhé."
          },
          {
            "speaker": "ナム",
            "jp": "OK。楽（たの）しみ だね。",
            "vn": "OK. Háo hức quá."
          },
          {
            "speaker": "あなた",
            "jp": "［うん。旅行（りょこう）の ために、今月（こんげつ）は 節約（せつやく）しなくちゃ］。",
            "vn": "Ừ. Vì chuyến đi, tháng này phải tiết kiệm thôi."
          }
        ]
      },
      {
        "id": "track-cd08-d2",
        "title": "Đặt phòng lữ quán qua điện thoại",
        "titleVn": "Đặt phòng lữ quán qua điện thoại",
        "category": "topic",
        "topicId": "cd08",
        "tag": "計画・旅行・将来の夢 · Kịch bản 2",
        "lines": [
          {
            "speaker": "旅館",
            "jp": "お電話（でんわ） ありがとうございます。さくら旅館（りょかん）で ございます。",
            "vn": "Cảm ơn quý khách đã gọi. Lữ quán Sakura xin nghe."
          },
          {
            "speaker": "あなた",
            "jp": "［もしもし、5月（ごがつ）3日（みっか）から 2泊（にはく）、2人（ふたり）で 予約（よやく）したいんですが］。",
            "vn": "Alo, tôi muốn đặt từ ngày 3/5, 2 đêm, 2 người."
          },
          {
            "speaker": "旅館",
            "jp": "ありがとうございます。少々（しょうしょう） お待（ま）ち ください。3日（みっか）と 4日（よっか）、和室（わしつ）が 空（あ）いて おります。",
            "vn": "Cảm ơn ạ. Xin chờ chút... Đêm 3 và 4 còn phòng kiểu Nhật."
          },
          {
            "speaker": "あなた",
            "jp": "［よかった。2食付（にしょくつ）きで、1人（ひとり） いくらですか］。",
            "vn": "May quá. Kèm 2 bữa, mỗi người bao nhiêu ạ?"
          },
          {
            "speaker": "旅館",
            "jp": "お1人様（ひとりさま） 1泊（いっぱく） 14,000円（いちまんよんせんえん）で ございます。",
            "vn": "14.000 yên/người/đêm ạ."
          },
          {
            "speaker": "あなた",
            "jp": "［学生（がくせい） 割引（わりびき）は ありますか］。",
            "vn": "Có giảm giá sinh viên không ạ?"
          },
          {
            "speaker": "旅館",
            "jp": "学生証（がくせいしょう）を お見（み）せ いただければ、10%（じゅっパーセント） 割引（わりびき）に なります。",
            "vn": "Nếu xuất trình thẻ sinh viên được giảm 10%."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、それで お願（ねが）いします。露天風呂（ろてんぶろ）は ありますか］。",
            "vn": "Vậy nhờ chị. Có bồn tắm ngoài trời không ạ?"
          },
          {
            "speaker": "旅館",
            "jp": "はい、夜（よる） 11時（じゅういちじ）まで ご利用（りよう） いただけます。",
            "vn": "Có, dùng được đến 11 giờ tối."
          },
          {
            "speaker": "あなた",
            "jp": "［私（わたし）たちは 外国人（がいこくじん）なんですが、入（はい）り方（かた）の 説明（せつめい）は ありますか］。",
            "vn": "Chúng tôi là người nước ngoài, có hướng dẫn cách tắm không ạ?"
          },
          {
            "speaker": "旅館",
            "jp": "お部屋（へや）に 英語（えいご）と ベトナム語（ご）の 説明書（せつめいしょ）が ございます。",
            "vn": "Trong phòng có hướng dẫn tiếng Anh và tiếng Việt."
          },
          {
            "speaker": "あなた",
            "jp": "［助（たす）かります。駅（えき）から 旅館（りょかん）までは どう 行（い）けば いいですか］。",
            "vn": "Tốt quá. Từ ga đến lữ quán đi thế nào ạ?"
          },
          {
            "speaker": "旅館",
            "jp": "駅（えき）から 無料（むりょう）の 送迎（そうげい）バスが ございます。何時（なんじ）ごろ お着（つ）きの 予定（よてい）ですか。",
            "vn": "Từ ga có xe đưa đón miễn phí. Quý khách dự kiến đến khoảng mấy giờ?"
          },
          {
            "speaker": "あなた",
            "jp": "［3時（さんじ）ごろ 駅（えき）に 着（つ）く 予定（よてい）です］。",
            "vn": "Dự kiến khoảng 3 giờ đến ga."
          },
          {
            "speaker": "旅館",
            "jp": "では、3時（さんじ）半（はん）の バスを ご利用（りよう） ください。キャンセルは 3日前（みっかまえ）までなら 無料（むりょう）です。",
            "vn": "Vậy xin đi xe 3 giờ rưỡi. Hủy trước 3 ngày thì miễn phí."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。名前（なまえ）は グエン・ミンです。電話番号（でんわばんごう）は 090-1234-5678です］。",
            "vn": "Tôi hiểu. Tên tôi là Nguyễn Minh. Số điện thoại 090-1234-5678."
          },
          {
            "speaker": "旅館",
            "jp": "かしこまりました。お待（ま）ち して おります。",
            "vn": "Vâng ạ. Chúng tôi chờ đón quý khách."
          }
        ]
      },
      {
        "id": "track-cd08-d3",
        "title": "Nhận phòng khách sạn và hỏi dịch vụ",
        "titleVn": "Nhận phòng khách sạn và hỏi dịch vụ",
        "category": "topic",
        "topicId": "cd08",
        "tag": "計画・旅行・将来の夢 · Kịch bản 3",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、グエン・ミンの 名前（なまえ）で 予約（よやく）して いる 者（もの）ですが］。",
            "vn": "Xin lỗi, tôi là người đã đặt phòng tên Nguyễn Minh."
          },
          {
            "speaker": "フロント",
            "jp": "いらっしゃいませ。グエン様（さま）ですね。2泊（にはく）の ご予約（よやく）を いただいて おります。",
            "vn": "Kính chào. Ngài Nguyễn nhỉ. Có đặt 2 đêm ạ."
          },
          {
            "speaker": "あなた",
            "jp": "［チェックインは 何時（なんじ）からですか］。",
            "vn": "Nhận phòng từ mấy giờ ạ?"
          },
          {
            "speaker": "フロント",
            "jp": "3時（さんじ）からで ございます。まだ 1時（いちじ）ですので……。",
            "vn": "Từ 3 giờ ạ. Giờ mới 1 giờ nên..."
          },
          {
            "speaker": "あなた",
            "jp": "［それまで 荷物（にもつ）を 預（あず）かって いただけますか。観光（かんこう）して 来（き）たいので］。",
            "vn": "Giữ hành lý giúp tôi đến lúc đó được không ạ? Tôi muốn đi tham quan."
          },
          {
            "speaker": "フロント",
            "jp": "はい、お預（あず）かり いたします。こちらが 番号札（ばんごうふだ）です。",
            "vn": "Vâng, chúng tôi giữ ạ. Đây là phiếu số."
          },
          {
            "speaker": "あなた",
            "jp": "［朝食（ちょうしょく）は 何時（なんじ）から 何時（なんじ）までですか］。",
            "vn": "Bữa sáng từ mấy giờ đến mấy giờ?"
          },
          {
            "speaker": "フロント",
            "jp": "7時（しちじ）から 9時（くじ）半（はん）まで、2階（にかい）の レストランで ございます。",
            "vn": "Từ 7 đến 9 giờ rưỡi ở nhà hàng tầng 2."
          },
          {
            "speaker": "あなた",
            "jp": "［Wi-Fiは 部屋（へや）でも 使（つか）えますか］。",
            "vn": "Wi-Fi dùng được trong phòng không?"
          },
          {
            "speaker": "フロント",
            "jp": "はい、パスワードは この カードに 書（か）いて ございます。",
            "vn": "Có, mật khẩu ghi trên thẻ này."
          },
          {
            "speaker": "あなた",
            "jp": "［この 近（ちか）くに、おいしい ラーメン屋（や）は ありますか］。",
            "vn": "Gần đây có quán ramen ngon không ạ?"
          },
          {
            "speaker": "フロント",
            "jp": "駅（えき）の 方（ほう）へ 5分（ごふん） 歩（ある）くと、地元（じもと）で 人気（にんき）の 店（みせ）が ございますよ。",
            "vn": "Đi bộ 5 phút về phía ga có quán được dân địa phương ưa chuộng."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。チェックアウトは 何時（なんじ）までですか］。",
            "vn": "Cảm ơn. Trả phòng trước mấy giờ ạ?"
          },
          {
            "speaker": "フロント",
            "jp": "11時（じゅういちじ）まででございます。",
            "vn": "Đến 11 giờ ạ."
          },
          {
            "speaker": "あなた",
            "jp": "［最終日（さいしゅうび）、12時（じゅうにじ）まで 延長（えんちょう）しても いいですか］。",
            "vn": "Ngày cuối tôi gia hạn đến 12 giờ được không?"
          },
          {
            "speaker": "フロント",
            "jp": "1時間（いちじかん） 1,000円（せんえん）で 延長（えんちょう）できます。",
            "vn": "Gia hạn được, 1.000 yên/giờ."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、その 時（とき）に 決（き）めます。では、3時（さんじ）ごろ 戻（もど）ります］。",
            "vn": "Vậy lúc đó tôi quyết. Khoảng 3 giờ tôi quay lại."
          }
        ]
      },
      {
        "id": "track-cd08-d4",
        "title": "Quầy thông tin du lịch",
        "titleVn": "Quầy thông tin du lịch",
        "category": "topic",
        "topicId": "cd08",
        "tag": "計画・旅行・将来の夢 · Kịch bản 4",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、この 辺（へん）の 見所（みどころ）を 教（おし）えて いただけますか］。",
            "vn": "Xin lỗi, chỉ giúp tôi những điểm đáng xem quanh đây được không?"
          },
          {
            "speaker": "案内所",
            "jp": "はい。お時間（じかん）は どのぐらい ありますか。",
            "vn": "Vâng. Quý khách có khoảng bao nhiêu thời gian?"
          },
          {
            "speaker": "あなた",
            "jp": "［半日（はんにち）しか ないんですが、お寺（てら）と 自然（しぜん）を 見（み）たいです］。",
            "vn": "Tôi chỉ có nửa ngày, muốn xem chùa và thiên nhiên."
          },
          {
            "speaker": "案内所",
            "jp": "それなら、さくら寺（でら）と みどり湖（こ）が おすすめです。",
            "vn": "Vậy chùa Sakura và hồ Midori là gợi ý tốt."
          },
          {
            "speaker": "あなた",
            "jp": "［両方（りょうほう） 回（まわ）るのに、どのぐらい かかりますか］。",
            "vn": "Đi cả hai mất bao lâu ạ?"
          },
          {
            "speaker": "案内所",
            "jp": "バスだと 4時間（よじかん）ぐらいですが、自転車（じてんしゃ）の ほうが 早（はや）いですよ。",
            "vn": "Xe buýt khoảng 4 tiếng, xe đạp thì nhanh hơn."
          },
          {
            "speaker": "あなた",
            "jp": "［自転車（じてんしゃ）は どこで 借（か）りられますか］。",
            "vn": "Thuê xe đạp ở đâu được?"
          },
          {
            "speaker": "案内所",
            "jp": "ここで 借（か）りられます。1日（いちにち） 1,000円（せんえん）、電動（でんどう）自転車（じてんしゃ）は 1,500円（せんごひゃくえん）です。",
            "vn": "Thuê ngay ở đây. 1 ngày 1.000 yên, xe điện 1.500 yên."
          },
          {
            "speaker": "あなた",
            "jp": "［坂（さか）は 多（おお）いですか］。",
            "vn": "Có nhiều dốc không ạ?"
          },
          {
            "speaker": "案内所",
            "jp": "お寺（てら）の 前（まえ）に 急（きゅう）な 坂（さか）が あります。電動（でんどう）の ほうが 楽（らく）ですよ。",
            "vn": "Trước chùa có dốc gắt. Xe điện thì nhẹ hơn."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、電動（でんどう）自転車（じてんしゃ）を 2台（にだい） お願（ねが）いします］。",
            "vn": "Vậy cho tôi thuê 2 xe đạp điện."
          },
          {
            "speaker": "案内所",
            "jp": "身分証明書（みぶんしょうめいしょ）を お願（ねが）いします。返（かえ）すのは 夕方（ゆうがた） 5時（ごじ）までです。",
            "vn": "Xin giấy tờ tùy thân. Trả xe trước 5 giờ chiều."
          },
          {
            "speaker": "あなた",
            "jp": "［お寺（てら）で 何（なに）か 体験（たいけん）できますか］。",
            "vn": "Ở chùa có trải nghiệm gì không ạ?"
          },
          {
            "speaker": "案内所",
            "jp": "座禅（ざぜん）体験（たいけん）が あります。30分（さんじゅっぷん） 500円（ごひゃくえん）です。",
            "vn": "Có trải nghiệm thiền. 30 phút 500 yên."
          },
          {
            "speaker": "あなた",
            "jp": "［座禅（ざぜん）、やって みたいです！ 予約（よやく）は 要（い）りますか］。",
            "vn": "Thiền, tôi muốn thử! Có cần đặt trước không ạ?"
          },
          {
            "speaker": "案内所",
            "jp": "当日（とうじつ） 受付（うけつけ）で 大丈夫（だいじょうぶ）です。この 地図（ちず）を どうぞ。",
            "vn": "Đăng ký trong ngày là được. Mời cầm bản đồ này."
          },
          {
            "speaker": "あなた",
            "jp": "［ご親切（しんせつ）に ありがとうございました］。",
            "vn": "Cảm ơn chị tận tình."
          }
        ]
      },
      {
        "id": "track-cd08-d5",
        "title": "Mua vé Shinkansen ở quầy",
        "titleVn": "Mua vé Shinkansen ở quầy",
        "category": "topic",
        "topicId": "cd08",
        "tag": "計画・旅行・将来の夢 · Kịch bản 5",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、新大阪（しんおおさか）まで 大人（おとな） 2枚（にまい） お願（ねが）いします］。",
            "vn": "Xin lỗi, cho tôi 2 vé người lớn đến Shin-Osaka."
          },
          {
            "speaker": "駅員",
            "jp": "片道（かたみち）ですか、往復（おうふく）ですか。",
            "vn": "Một chiều hay khứ hồi?"
          },
          {
            "speaker": "あなた",
            "jp": "［往復（おうふく）で お願（ねが）いします。行（い）きは 5月（ごがつ）3日（みっか）、帰（かえ）りは 5日（いつか）です］。",
            "vn": "Khứ hồi ạ. Đi ngày 3/5, về ngày 5."
          },
          {
            "speaker": "駅員",
            "jp": "指定席（していせき）に しますか、自由席（じゆうせき）に しますか。",
            "vn": "Ghế chỉ định hay ghế tự do?"
          },
          {
            "speaker": "あなた",
            "jp": "［指定席（していせき）と 自由席（じゆうせき）は、どのぐらい 値段（ねだん）が 違（ちが）いますか］。",
            "vn": "Ghế chỉ định và tự do giá chênh bao nhiêu ạ?"
          },
          {
            "speaker": "駅員",
            "jp": "片道（かたみち）で 500円（ごひゃくえん）ぐらいです。連休（れんきゅう）は 自由席（じゆうせき）が とても 混（こ）みますよ。",
            "vn": "Một chiều khoảng 500 yên. Kỳ nghỉ dài ghế tự do rất đông."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、指定席（していせき）に します。何時（なんじ）の のぞみが ありますか］。",
            "vn": "Vậy chọn ghế chỉ định. Có tàu Nozomi mấy giờ ạ?"
          },
          {
            "speaker": "駅員",
            "jp": "9時（くじ）、9時（くじ）半（はん）、10時（じゅうじ）が ございます。",
            "vn": "Có 9 giờ, 9 giờ rưỡi, 10 giờ."
          },
          {
            "speaker": "あなた",
            "jp": "［新大阪（しんおおさか）に 12時（じゅうにじ）までに 着（つ）きたいんですが、9時（くじ）半（はん）で 間（ま）に合（あ）いますか］。",
            "vn": "Tôi muốn đến Shin-Osaka trước 12 giờ, chuyến 9 rưỡi có kịp không?"
          },
          {
            "speaker": "駅員",
            "jp": "9時（くじ）半（はん）の のぞみは 11時（じゅういちじ）58分（ごじゅうはっぷん） 着（ちゃく）です。少（すこ）し ぎりぎりですね。",
            "vn": "Nozomi 9 rưỡi đến 11 giờ 58. Hơi sát giờ."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、9時（くじ）の に します。2人（ふたり） 並（なら）んだ 席（せき）を お願（ねが）いします］。",
            "vn": "Vậy chọn chuyến 9 giờ. Cho 2 ghế cạnh nhau."
          },
          {
            "speaker": "駅員",
            "jp": "窓側（まどがわ）と 通路側（つうろがわ）で よろしいですか。",
            "vn": "Một ghế cửa sổ một ghế lối đi được không?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい。富士山（ふじさん）が 見（み）えるのは、どちら側（がわ）ですか］。",
            "vn": "Vâng. Phía nào thì thấy núi Phú Sĩ ạ?"
          },
          {
            "speaker": "駅員",
            "jp": "東京（とうきょう）から 大阪（おおさか）へ 行（い）く 時（とき）は、E席（イーせき）、右側（みぎがわ）です。",
            "vn": "Đi từ Tokyo đến Osaka thì ghế E, bên phải."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、行（い）きは E席（イーせき）を お願（ねが）いします］。",
            "vn": "Vậy lượt đi cho tôi ghế E."
          },
          {
            "speaker": "駅員",
            "jp": "かしこまりました。往復（おうふく） 2名様（にめいさま）で 58,000円（ごまんはっせんえん）です。",
            "vn": "Vâng ạ. Khứ hồi 2 người là 58.000 yên."
          },
          {
            "speaker": "あなた",
            "jp": "［カードで 払（はら）います。予定（よてい）が 変（か）わったら、変更（へんこう）できますか］。",
            "vn": "Tôi trả thẻ. Nếu lịch thay đổi thì đổi vé được không ạ?"
          },
          {
            "speaker": "駅員",
            "jp": "出発（しゅっぱつ） 前（まえ）なら、1回（いっかい）だけ 無料（むりょう）で 変更（へんこう）できます。",
            "vn": "Trước khi khởi hành, đổi miễn phí được 1 lần."
          }
        ]
      },
      {
        "id": "track-cd08-d6",
        "title": "Hủy và đổi đặt phòng",
        "titleVn": "Hủy và đổi đặt phòng",
        "category": "topic",
        "topicId": "cd08",
        "tag": "計画・旅行・将来の夢 · Kịch bản 6",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［もしもし、予約（よやく）を 変更（へんこう）したいんですが］。",
            "vn": "Alo, tôi muốn đổi đặt phòng."
          },
          {
            "speaker": "ホテル",
            "jp": "かしこまりました。お名前（なまえ）と 予約番号（よやくばんごう）を お願（ねが）いします。",
            "vn": "Vâng ạ. Xin tên và mã đặt phòng."
          },
          {
            "speaker": "あなた",
            "jp": "［グエン・ミンです。予約番号（よやくばんごう）は 3825です］。",
            "vn": "Nguyễn Minh. Mã đặt phòng 3825."
          },
          {
            "speaker": "ホテル",
            "jp": "5月（ごがつ）3日（みっか）から 2泊（にはく）、ツイン 2名様（にめいさま）ですね。",
            "vn": "Từ 3/5, 2 đêm, phòng đôi 2 người nhỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。友達（ともだち）が 病気（びょうき）で 行（い）けなく なったので、1人（ひとり）に したいんです］。",
            "vn": "Vâng. Bạn tôi bị ốm không đi được nên tôi muốn đổi thành 1 người."
          },
          {
            "speaker": "ホテル",
            "jp": "それは 大変（たいへん）ですね。では、シングルに 変更（へんこう）しましょうか。",
            "vn": "Thật tiếc. Vậy đổi sang phòng đơn nhé?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、シングルに して いただけますか。それから、2泊（にはく）を 1泊（いっぱく）に 減（へ）らしたいです］。",
            "vn": "Vâng, đổi sang phòng đơn giúp tôi được không? Và tôi muốn giảm 2 đêm còn 1 đêm."
          },
          {
            "speaker": "ホテル",
            "jp": "3日（みっか）の 1泊（いっぱく）だけですね。",
            "vn": "Chỉ đêm 3 thôi nhỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。キャンセル料（りょう）は かかりますか］。",
            "vn": "Vâng. Có mất phí hủy không ạ?"
          },
          {
            "speaker": "ホテル",
            "jp": "1週間前（いっしゅうかんまえ）ですので、キャンセル料（りょう）は かかりません。",
            "vn": "Vì trước 1 tuần nên không mất phí hủy."
          },
          {
            "speaker": "あなた",
            "jp": "［よかったです。シングルの 料金（りょうきん）は いくらに なりますか］。",
            "vn": "May quá. Phòng đơn giá bao nhiêu ạ?"
          },
          {
            "speaker": "ホテル",
            "jp": "1泊（いっぱく） 7,500円（ななせんごひゃくえん）で ございます。朝食（ちょうしょく）付（つ）きです。",
            "vn": "7.500 yên/đêm, kèm bữa sáng."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。到着（とうちゃく）は 夜（よる） 9時（くじ）ごろに なると 思（おも）いますが、大丈夫（だいじょうぶ）ですか］。",
            "vn": "Tôi hiểu. Tôi nghĩ khoảng 9 giờ tối mới đến, có sao không ạ?"
          },
          {
            "speaker": "ホテル",
            "jp": "はい、フロントは 24時間（にじゅうよじかん） 開（あ）いて おります。",
            "vn": "Vâng, lễ tân mở 24 giờ."
          },
          {
            "speaker": "あなた",
            "jp": "［変更（へんこう）の 確認（かくにん）メールを 送（おく）って いただけますか］。",
            "vn": "Gửi giúp tôi email xác nhận thay đổi được không ạ?"
          },
          {
            "speaker": "ホテル",
            "jp": "かしこまりました。10分（じゅっぷん）以内（いない）に お送（おく）り します。",
            "vn": "Vâng ạ. Chúng tôi gửi trong 10 phút."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございました。よろしく お願（ねが）いします］。",
            "vn": "Cảm ơn. Nhờ chị."
          }
        ]
      },
      {
        "id": "track-cd08-d7",
        "title": "Nói về dự định nghỉ hè với thầy",
        "titleVn": "Nói về dự định nghỉ hè với thầy",
        "category": "topic",
        "topicId": "cd08",
        "tag": "計画・旅行・将来の夢 · Kịch bản 7",
        "lines": [
          {
            "speaker": "先生",
            "jp": "ミンさん、夏休（なつやす）みは 国（くに）へ 帰（かえ）る つもりですか。",
            "vn": "Minh, nghỉ hè em có định về nước không?"
          },
          {
            "speaker": "あなた",
            "jp": "［いいえ、今年（ことし）は 帰（かえ）らない つもりです］。",
            "vn": "Không, năm nay em định không về."
          },
          {
            "speaker": "先生",
            "jp": "そうですか。何（なに）を する 予定（よてい）ですか。",
            "vn": "Vậy à. Em dự kiến làm gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［国（くに）へ 帰（かえ）らないで、アルバイトを しようと 思（おも）って います］。",
            "vn": "Em không về nước mà định làm thêm."
          },
          {
            "speaker": "先生",
            "jp": "何（なん）の ために アルバイトを するんですか。",
            "vn": "Em làm thêm để làm gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［大学（だいがく）の 入学金（にゅうがくきん）を 貯（た）める ためです。30万円（さんじゅうまんえん） 必要（ひつよう）なんです］。",
            "vn": "Để tích tiền nhập học đại học. Em cần 30 vạn yên."
          },
          {
            "speaker": "先生",
            "jp": "大変（たいへん）ですね。勉強（べんきょう）は どう しますか。",
            "vn": "Vất vả nhỉ. Còn việc học thì sao?"
          },
          {
            "speaker": "あなた",
            "jp": "［学校（がっこう）の 集中（しゅうちゅう）講座（こうざ）にも 申（もう）し込（こ）む つもりです。午前（ごぜん）は 勉強（べんきょう）、午後（ごご）は アルバイトです］。",
            "vn": "Em định đăng ký cả khóa cấp tốc của trường. Sáng học, chiều làm thêm."
          },
          {
            "speaker": "先生",
            "jp": "いい 計画（けいかく）ですね。留学生（りゅうがくせい）は 夏休（なつやす）み 中（ちゅう）、1日（いちにち） 8時間（はちじかん）まで 働（はたら）けますよ。",
            "vn": "Kế hoạch tốt đấy. Du học sinh trong kỳ nghỉ hè được làm tối đa 8 giờ/ngày."
          },
          {
            "speaker": "あなた",
            "jp": "［そうなんですか。知（し）りませんでした。でも、勉強（べんきょう）の ために、5時間（ごじかん）ぐらいに しようと 思（おも）います］。",
            "vn": "Vậy ạ? Em không biết. Nhưng vì việc học em định làm khoảng 5 tiếng thôi."
          },
          {
            "speaker": "先生",
            "jp": "それが いいと 思（おも）います。休（やす）みの 日（ひ）は ありますか。",
            "vn": "Thầy nghĩ vậy là tốt. Có ngày nghỉ không?"
          },
          {
            "speaker": "あなた",
            "jp": "［8月（はちがつ）の お盆（ぼん）に、友達（ともだち）と 3日間（みっかかん） 北海道（ほっかいどう）へ 行（い）く 予定（よてい）です］。",
            "vn": "Dịp Obon tháng 8 em dự kiến đi Hokkaido 3 ngày với bạn."
          },
          {
            "speaker": "先生",
            "jp": "いいですね。北海道（ほっかいどう）は 夏（なつ）でも 東京（とうきょう）ほど 暑（あつ）くないですよ。",
            "vn": "Hay đấy. Hokkaido mùa hè cũng không nóng bằng Tokyo."
          },
          {
            "speaker": "あなた",
            "jp": "［だから 選（えら）んだんです。暑（あつ）さが 苦手（にがて）なので］。",
            "vn": "Vì vậy em chọn ạ. Em chịu nóng kém."
          },
          {
            "speaker": "先生",
            "jp": "夏休（なつやす）みの 目標（もくひょう）は 何（なん）ですか。",
            "vn": "Mục tiêu nghỉ hè của em là gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［漢字（かんじ）を 300字（さんびゃくじ） 覚（おぼ）える ことです。毎日（まいにち） 10字（じゅうじ）ずつ 覚（おぼ）えようと 思（おも）います］。",
            "vn": "Là nhớ 300 chữ Hán. Em định mỗi ngày nhớ 10 chữ."
          },
          {
            "speaker": "先生",
            "jp": "頑張（がんば）って ください。9月（くがつ）に テストしますよ。",
            "vn": "Cố lên nhé. Tháng 9 thầy sẽ kiểm tra đấy (cười)."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、頑張（がんば）ります！ 楽（たの）しい 夏休（なつやす）みに したいです］。",
            "vn": "Vâng, em sẽ cố! Em muốn có kỳ nghỉ hè vui."
          }
        ]
      },
      {
        "id": "track-cd08-d8",
        "title": "Nói về ước mơ tương lai",
        "titleVn": "Nói về ước mơ tương lai",
        "category": "topic",
        "topicId": "cd08",
        "tag": "計画・旅行・将来の夢 · Kịch bản 8",
        "lines": [
          {
            "speaker": "健太",
            "jp": "ミンさんの 将来（しょうらい）の 夢（ゆめ）は 何（なん）ですか。",
            "vn": "Ước mơ tương lai của Minh là gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［将来（しょうらい）は、日本（にほん）と ベトナムを つなぐ 通訳（つうやく）に なりたいです］。",
            "vn": "Tương lai tôi muốn làm phiên dịch nối Nhật và Việt."
          },
          {
            "speaker": "健太",
            "jp": "すてきですね。どうして そう 思（おも）ったんですか。",
            "vn": "Tuyệt nhỉ. Vì sao bạn nghĩ vậy?"
          },
          {
            "speaker": "あなた",
            "jp": "［父（ちち）が 日本（にほん）の 会社（かいしゃ）の 工場（こうじょう）で 働（はたら）いて いて、言葉（ことば）で 困（こま）って いたのが きっかけです］。",
            "vn": "Bố tôi làm ở nhà máy của công ty Nhật và gặp khó về ngôn ngữ, đó là lý do."
          },
          {
            "speaker": "健太",
            "jp": "そうなんですね。夢（ゆめ）の ために、何（なに）を して いますか。",
            "vn": "Ra vậy. Vì ước mơ, bạn đang làm gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［通訳（つうやく）に なる ために、毎日（まいにち） 日本（にほん）の ニュースを 聞（き）いて、ベトナム語（ご）に 訳（やく）す 練習（れんしゅう）を して います］。",
            "vn": "Để làm phiên dịch, mỗi ngày tôi nghe tin tức Nhật và luyện dịch sang tiếng Việt."
          },
          {
            "speaker": "健太",
            "jp": "すごい！ 難（むずか）しく ないですか。",
            "vn": "Giỏi! Không khó à?"
          },
          {
            "speaker": "あなた",
            "jp": "［難（むずか）しいです。でも、練習（れんしゅう）すれば するほど、速（はや）く 訳（やく）せる ように なりました］。",
            "vn": "Khó ạ. Nhưng càng luyện càng dịch nhanh hơn."
          },
          {
            "speaker": "健太",
            "jp": "卒業（そつぎょう）したら、すぐ 通訳（つうやく）の 仕事（しごと）を するんですか。",
            "vn": "Tốt nghiệp xong bạn làm phiên dịch ngay à?"
          },
          {
            "speaker": "あなた",
            "jp": "［いいえ、まず 日本（にほん）の 貿易（ぼうえき）会社（がいしゃ）に 就職（しゅうしょく）して、経験（けいけん）を 積（つ）む つもりです］。",
            "vn": "Không, trước tiên tôi định vào công ty thương mại Nhật để tích lũy kinh nghiệm."
          },
          {
            "speaker": "健太",
            "jp": "どのぐらい 日本（にほん）に いる 予定（よてい）ですか。",
            "vn": "Bạn dự kiến ở Nhật bao lâu?"
          },
          {
            "speaker": "あなた",
            "jp": "［5年（ごねん）ぐらい 働（はたら）いて から、ベトナムへ 帰（かえ）ろうと 思（おも）って います］。",
            "vn": "Tôi định làm khoảng 5 năm rồi về VN."
          },
          {
            "speaker": "健太",
            "jp": "僕（ぼく）の 夢（ゆめ）は、海外（かいがい）で 働（はたら）く ことなんです。ベトナムも 興味（きょうみ）が あります。",
            "vn": "Ước mơ của tôi là làm việc ở nước ngoài. Tôi cũng quan tâm đến Việt Nam."
          },
          {
            "speaker": "あなた",
            "jp": "［本当（ほんとう）ですか。じゃ、私（わたし）が ベトナム語（ご）を 教（おし）えましょうか］。",
            "vn": "Thật à? Vậy để tôi dạy tiếng Việt nhé?"
          },
          {
            "speaker": "健太",
            "jp": "ぜひ！ 代（か）わりに 日本語（にほんご）の 通訳（つうやく）の 練習（れんしゅう）に 付（つ）き合（あ）いますよ。",
            "vn": "Nhất định! Đổi lại tôi sẽ cùng bạn luyện phiên dịch tiếng Nhật."
          },
          {
            "speaker": "あなた",
            "jp": "［うれしいです。お互（たが）いの 夢（ゆめ）を かなえる ために、頑張（がんば）りましょう］！",
            "vn": "Vui quá. Cùng cố gắng để thực hiện ước mơ của nhau nhé!"
          },
          {
            "speaker": "健太",
            "jp": "はい！ 来週（らいしゅう）から 始（はじ）めましょう。",
            "vn": "Vâng! Bắt đầu từ tuần sau nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［毎週（まいしゅう） 金曜日（きんようび）は どうですか］。",
            "vn": "Thứ Sáu hằng tuần thì sao?"
          }
        ]
      },
      {
        "id": "track-cd08-d9",
        "title": "Xin lời khuyên về việc học lên",
        "titleVn": "Xin lời khuyên về việc học lên",
        "category": "topic",
        "topicId": "cd08",
        "tag": "計画・旅行・将来の夢 · Kịch bản 9",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［先輩（せんぱい）、進路（しんろ）の ことで 相談（そうだん）しても いいですか］。",
            "vn": "Anh ơi, em xin ý kiến về hướng đi được không ạ?"
          },
          {
            "speaker": "先輩",
            "jp": "いいよ。どうしたの？",
            "vn": "Được. Sao thế?"
          },
          {
            "speaker": "あなた",
            "jp": "［大学（だいがく）に 行（い）くか、専門学校（せんもんがっこう）に 行（い）くか、迷（まよ）って いるんです］。",
            "vn": "Em đang phân vân vào đại học hay trường chuyên môn."
          },
          {
            "speaker": "先輩",
            "jp": "将来（しょうらい） 何（なに）を したいの？",
            "vn": "Tương lai em muốn làm gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［ゲームを 作（つく）る 仕事（しごと）が したいです］。",
            "vn": "Em muốn làm công việc tạo game."
          },
          {
            "speaker": "先輩",
            "jp": "それなら、専門学校（せんもんがっこう）は 2年（にねん）で 実際（じっさい）の 技術（ぎじゅつ）が 学（まな）べるよ。",
            "vn": "Vậy thì trường chuyên môn 2 năm học được kỹ thuật thực tế."
          },
          {
            "speaker": "あなた",
            "jp": "［大学（だいがく）は 卒業（そつぎょう）するのに 4年（よねん） かかりますよね。学費（がくひ）も 高（たか）いし……］。",
            "vn": "Đại học thì mất 4 năm mới tốt nghiệp nhỉ. Học phí lại đắt..."
          },
          {
            "speaker": "先輩",
            "jp": "でも、大学（だいがく）の ほうが 選（えら）べる 仕事（しごと）が 多（おお）いし、ビザも 取（と）りやすいよ。",
            "vn": "Nhưng đại học thì lựa chọn công việc nhiều hơn, visa cũng dễ xin hơn."
          },
          {
            "speaker": "あなた",
            "jp": "［そうなんですか。ビザの ことは 知（し）りませんでした］。",
            "vn": "Vậy ạ? Chuyện visa em không biết."
          },
          {
            "speaker": "先輩",
            "jp": "僕（ぼく）は 大学（だいがく）に 行（い）ったけど、基礎（きそ）から ちゃんと 学（まな）べて よかったと 思（おも）う。",
            "vn": "Anh vào đại học, và nghĩ là may vì học được nền tảng đàng hoàng."
          },
          {
            "speaker": "あなた",
            "jp": "［学費（がくひ）は どう しましたか］。",
            "vn": "Học phí anh xoay xở thế nào ạ?"
          },
          {
            "speaker": "先輩",
            "jp": "奨学金（しょうがくきん）を もらったよ。成績（せいせき）が よければ よいほど、もらいやすく なるよ。",
            "vn": "Anh nhận học bổng. Thành tích càng tốt càng dễ nhận."
          },
          {
            "speaker": "あなた",
            "jp": "［私（わたし）も 申（もう）し込（こ）んで みたいです。いつ 申（もう）し込（こ）めば いいですか］。",
            "vn": "Em cũng muốn thử đăng ký. Đăng ký khi nào thì được ạ?"
          },
          {
            "speaker": "先輩",
            "jp": "入学（にゅうがく）前（まえ）に 申（もう）し込（こ）める ものも あるから、早（はや）めに 調（しら）べた ほうが いい。",
            "vn": "Có loại đăng ký trước khi nhập học nên tìm hiểu sớm thì tốt."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。両方（りょうほう）の オープンキャンパスに 行（い）って、比（くら）べて みます］。",
            "vn": "Em hiểu. Em sẽ đi ngày hội mở cửa của cả hai rồi so sánh."
          },
          {
            "speaker": "先輩",
            "jp": "それが いちばん いいよ。実際（じっさい）に 見（み）ると、全然（ぜんぜん） 違（ちが）うから。",
            "vn": "Thế là tốt nhất. Xem thực tế thì khác hẳn."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。決（き）まったら、報告（ほうこく）しますね］。",
            "vn": "Cảm ơn anh. Quyết xong em sẽ báo anh."
          }
        ]
      },
      {
        "id": "track-cd08-d10",
        "title": "Kể lại chuyến đi với thầy",
        "titleVn": "Kể lại chuyến đi với thầy",
        "category": "topic",
        "topicId": "cd08",
        "tag": "計画・旅行・将来の夢 · Kịch bản 10",
        "lines": [
          {
            "speaker": "先生",
            "jp": "ミンさん、ゴールデンウィークは どうでしたか。",
            "vn": "Minh, Tuần lễ vàng thế nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［広島（ひろしま）へ 行（い）きました。とても いい 旅行（りょこう）でした］。",
            "vn": "Em đi Hiroshima. Là chuyến đi rất tuyệt."
          },
          {
            "speaker": "先生",
            "jp": "どこを 見（み）ましたか。",
            "vn": "Em xem những đâu?"
          },
          {
            "speaker": "あなた",
            "jp": "［まず、平和（へいわ）記念（きねん）公園（こうえん）と 資料館（しりょうかん）へ 行（い）きました］。",
            "vn": "Đầu tiên em đến công viên Tưởng niệm Hòa bình và nhà tư liệu."
          },
          {
            "speaker": "先生",
            "jp": "資料館（しりょうかん）は どうでしたか。",
            "vn": "Nhà tư liệu thế nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［見（み）れば 見（み）るほど 胸（むね）が 痛（いた）く なって、途中（とちゅう）で 泣（な）いて しまいました］。",
            "vn": "Càng xem càng đau lòng, giữa chừng em đã khóc."
          },
          {
            "speaker": "先生",
            "jp": "そうですか。平和（へいわ）の 大切（たいせつ）さを 感（かん）じましたね。",
            "vn": "Vậy à. Em cảm nhận được tầm quan trọng của hòa bình nhỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。それから、フェリーで 宮島（みやじま）へ 渡（わた）りました］。",
            "vn": "Vâng. Sau đó em đi phà sang Miyajima."
          },
          {
            "speaker": "先生",
            "jp": "海（うみ）の 中（なか）の 鳥居（とりい）を 見（み）ましたか。",
            "vn": "Em có thấy cổng torii giữa biển không?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい。写真（しゃしん）で 見（み）た ほど 小（ちい）さくなくて、すごい 迫力（はくりょく）でした］。",
            "vn": "Có ạ. Không nhỏ như trong ảnh, rất hùng vĩ."
          },
          {
            "speaker": "先生",
            "jp": "鹿（しか）も たくさん いたでしょう。",
            "vn": "Chắc có nhiều hươu nhỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。鹿（しか）に 地図（ちず）を 食（た）べられて しまいました］。",
            "vn": "Vâng. Em bị hươu ăn mất bản đồ (cười)."
          },
          {
            "speaker": "先生",
            "jp": "あはは、よく ありますね。食（た）べ物（もの）は どうでしたか。",
            "vn": "Haha, chuyện thường gặp. Đồ ăn thế nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［お好（この）み焼（や）きが 大阪（おおさか）の と 全然（ぜんぜん） 違（ちが）って、びっくりする くらい おいしかったです］。",
            "vn": "Okonomiyaki khác hẳn kiểu Osaka, ngon đến mức bất ngờ."
          },
          {
            "speaker": "先生",
            "jp": "夜行（やこう）バスは 疲（つか）れませんでしたか。",
            "vn": "Xe buýt đêm có mệt không?"
          },
          {
            "speaker": "あなた",
            "jp": "［思（おも）って いた ほど 疲（つか）れませんでした。よく 眠（ねむ）れました］。",
            "vn": "Không mệt như em nghĩ. Em ngủ ngon."
          },
          {
            "speaker": "先生",
            "jp": "また 行（い）きたいですか。",
            "vn": "Em có muốn đi lại không?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい。次（つぎ）は 家族（かぞく）を 連（つ）れて 行（い）きたいと 思（おも）って います］。",
            "vn": "Có ạ. Lần sau em muốn dẫn gia đình đi."
          },
          {
            "speaker": "先生",
            "jp": "いいですね。旅行（りょこう）の 作文（さくぶん）、書（か）いて みませんか。",
            "vn": "Hay đấy. Em thử viết bài văn về chuyến đi không?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、書（か）いて みます。来週（らいしゅう） 見（み）て いただけますか］。",
            "vn": "Vâng, em sẽ viết thử. Tuần sau thầy xem giúp được không ạ?"
          }
        ]
      }
    ]
  },
  {
    "id": "pl-cd09",
    "title": "お願（ねが）い・お礼（れい）・人間関係（にんげんかんけい）",
    "titleVn": "Nhờ vả, Giúp đỡ & Tri ân · Hệ thống Cho – Nhận hành động, Kính ngữ tri ân, Định danh và Viết thư cảm ơn",
    "description": "Trọn bộ 10 kịch bản đối thoại nhập vai thực tế trong tình huống: Nhờ vả, Giúp đỡ & Tri ân · Hệ thống Cho – Nhận hành động, Kính ngữ tri ân, Định danh và Viết thư cảm ơn.",
    "category": "topic",
    "badge": "🤝 NHỜ VẢ & TRI ÂN",
    "accentColor": "from-teal-500/20 to-emerald-500/10 border-teal-500/40 text-teal-600",
    "tracks": [
      {
        "id": "track-cd09-d1",
        "title": "Nhờ đàn anh xem tài liệu thuyết trình",
        "titleVn": "Nhờ đàn anh xem tài liệu thuyết trình",
        "category": "topic",
        "topicId": "cd09",
        "tag": "お願い・お礼・人間関係 · Kịch bản 1",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［先輩（せんぱい）、今（いま） ちょっと よろしいですか］。",
            "vn": "Anh ơi, bây giờ anh rảnh chút không ạ?"
          },
          {
            "speaker": "先輩",
            "jp": "うん、いいよ。どうしたの？",
            "vn": "Ừ, được. Sao thế?"
          },
          {
            "speaker": "あなた",
            "jp": "［実（じつ）は、ちょっと お願（ねが）いが あるんですが……］。",
            "vn": "Thật ra em có chút việc muốn nhờ..."
          },
          {
            "speaker": "先輩",
            "jp": "何（なに）？ 遠慮（えんりょ）しないで 言（い）って。",
            "vn": "Gì vậy? Đừng ngại cứ nói."
          },
          {
            "speaker": "あなた",
            "jp": "［来週（らいしゅう）、ゼミで 発表（はっぴょう）が あるんです。資料（しりょう）の 日本語（にほんご）が 自然（しぜん）か どうか、心配（しんぱい）で］。",
            "vn": "Tuần sau em thuyết trình ở seminar. Em lo không biết tiếng Nhật trong tài liệu có tự nhiên không."
          },
          {
            "speaker": "先輩",
            "jp": "そうなんだ。",
            "vn": "Ra vậy."
          },
          {
            "speaker": "あなた",
            "jp": "［お忙（いそが）しいところ 申（もう）し訳（わけ）ないんですが、一度（いちど） 見（み）て いただけませんか］。",
            "vn": "Xin lỗi lúc anh bận nhưng anh xem giúp em một lần được không ạ?"
          },
          {
            "speaker": "先輩",
            "jp": "いいよ。何（なん）ページぐらい？",
            "vn": "Được. Khoảng mấy trang?"
          },
          {
            "speaker": "あなた",
            "jp": "［15ページです。テーマは 日本（にほん）の コンビニの 歴史（れきし）です］。",
            "vn": "15 trang ạ. Chủ đề là lịch sử konbini Nhật."
          },
          {
            "speaker": "先輩",
            "jp": "今日（きょう）は バイトだから、明日（あした）の 夜（よる）まででも いい？",
            "vn": "Hôm nay anh làm thêm, đến tối mai được không?"
          },
          {
            "speaker": "あなた",
            "jp": "［もちろんです。発表（はっぴょう）は 金曜日（きんようび）なので、木曜日（もくようび）までに 見（み）て いただければ 大丈夫（だいじょうぶ）です］。",
            "vn": "Tất nhiên ạ. Thuyết trình thứ Sáu nên anh xem trước thứ Năm là được."
          },
          {
            "speaker": "先輩",
            "jp": "わかった。メールで 送（おく）って くれる？",
            "vn": "Hiểu rồi. Gửi mail cho anh nhé?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、すぐ 送（おく）ります。直（なお）した ほうが いい ところに 印（しるし）を 付（つ）けて いただけると、助（たす）かります］。",
            "vn": "Vâng, em gửi ngay. Anh đánh dấu chỗ nên sửa thì giúp em nhiều lắm."
          },
          {
            "speaker": "先輩",
            "jp": "OK。赤（あか）で 書（か）いて おくね。",
            "vn": "OK. Anh ghi màu đỏ nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［本当（ほんとう）に ありがとうございます。何（なに）か お礼（れい）を させて ください］。",
            "vn": "Thật sự cảm ơn anh. Cho em đáp lễ gì đó nhé."
          },
          {
            "speaker": "先輩",
            "jp": "いいって。僕（ぼく）も 1年生（いちねんせい）の 時（とき）、先輩（せんぱい）に たくさん 助（たす）けて もらったから。",
            "vn": "Không cần. Hồi năm 1 anh cũng được đàn anh giúp nhiều."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、来年（らいねん） 後輩（こうはい）が できたら、私（わたし）も 手伝（てつだ）って あげます］。",
            "vn": "Vậy năm sau có đàn em, em cũng sẽ giúp."
          },
          {
            "speaker": "先輩",
            "jp": "うん、そう して くれると うれしいな。",
            "vn": "Ừ, em làm vậy anh vui lắm."
          }
        ]
      },
      {
        "id": "track-cd09-d2",
        "title": "Cảm ơn và mời đáp lễ",
        "titleVn": "Cảm ơn và mời đáp lễ",
        "category": "topic",
        "topicId": "cd09",
        "tag": "お願い・お礼・人間関係 · Kịch bản 2",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［先輩（せんぱい）！ 発表（はっぴょう）、うまく いきました］！",
            "vn": "Anh ơi! Thuyết trình suôn sẻ rồi!"
          },
          {
            "speaker": "先輩",
            "jp": "よかったね！ どうだった？",
            "vn": "Tốt quá! Thế nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［先生（せんせい）に 「わかりやすかった」と 褒（ほ）めて いただきました］。",
            "vn": "Em được thầy khen \"Dễ hiểu lắm\"."
          },
          {
            "speaker": "先輩",
            "jp": "すごいじゃない。頑張（がんば）ったからだよ。",
            "vn": "Giỏi quá. Vì em cố gắng đấy."
          },
          {
            "speaker": "あなた",
            "jp": "［いえ、先輩（せんぱい）の おかげです。資料（しりょう）を 直（なお）して くださって、本当（ほんとう）に ありがとうございました］。",
            "vn": "Không ạ, nhờ anh. Cảm ơn anh rất nhiều vì đã sửa tài liệu."
          },
          {
            "speaker": "先輩",
            "jp": "大（たい）した ことは して いないよ。",
            "vn": "Anh có làm gì nhiều đâu."
          },
          {
            "speaker": "あなた",
            "jp": "［お礼（れい）に、今度（こんど） お昼（ひる）を ごちそうさせて ください］。",
            "vn": "Để cảm ơn, lần tới cho em mời anh bữa trưa."
          },
          {
            "speaker": "先輩",
            "jp": "え、いいの？ 気（き）を 遣（つか）わなくて いいのに。",
            "vn": "Hả, được à? Không cần bận tâm thế đâu."
          },
          {
            "speaker": "あなた",
            "jp": "［ぜひ させて ください。先輩（せんぱい）の 好（す）きな 物（もの）は 何（なん）ですか］。",
            "vn": "Nhất định cho em mời ạ. Anh thích món gì?"
          },
          {
            "speaker": "先輩",
            "jp": "じゃ、お言葉（ことば）に 甘（あま）えて。学食（がくしょく）の カレーで いいよ。",
            "vn": "Vậy anh xin nhận lời. Cà ri nhà ăn trường là được."
          },
          {
            "speaker": "あなた",
            "jp": "［もっと いい 物（もの）を ごちそうしたいです。駅前（えきまえ）の お寿司屋（すしや）さんは どうですか］。",
            "vn": "Em muốn mời món ngon hơn. Quán sushi trước ga thì sao?"
          },
          {
            "speaker": "先輩",
            "jp": "お寿司（すし）は 高（たか）いよ。無理（むり）しないで。",
            "vn": "Sushi đắt lắm. Đừng cố."
          },
          {
            "speaker": "あなた",
            "jp": "［大丈夫（だいじょうぶ）です。アルバイトの 給料（きゅうりょう）が 入（はい）ったので］。",
            "vn": "Không sao ạ. Lương làm thêm về rồi."
          },
          {
            "speaker": "先輩",
            "jp": "そこまで 言（い）うなら……ありがとう。いつが いい？",
            "vn": "Em nói đến thế thì... cảm ơn. Khi nào tiện?"
          },
          {
            "speaker": "あなた",
            "jp": "［来週（らいしゅう）の 水曜日（すいようび）の お昼（ひる）は いかがですか］。",
            "vn": "Trưa thứ Tư tuần sau thì thế nào ạ?"
          },
          {
            "speaker": "先輩",
            "jp": "水曜日（すいようび）、空（あ）いて いるよ。楽（たの）しみに して いるね。",
            "vn": "Thứ Tư anh rảnh. Anh mong lắm."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、私（わたし）も 楽（たの）しみです。予約（よやく）して おきます］。",
            "vn": "Vâng, em cũng mong. Em sẽ đặt bàn sẵn."
          }
        ]
      },
      {
        "id": "track-cd09-d3",
        "title": "Nhờ bạn cùng phòng giúp khi về nước",
        "titleVn": "Nhờ bạn cùng phòng giúp khi về nước",
        "category": "topic",
        "topicId": "cd09",
        "tag": "お願い・お礼・人間関係 · Kịch bản 3",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［ねえ、ちょっと お願（ねが）いが あるんだけど、いい］？",
            "vn": "Này, mình có chút việc muốn nhờ, được không?"
          },
          {
            "speaker": "ルームメイト",
            "jp": "いいよ。何（なに）？",
            "vn": "Được. Gì vậy?"
          },
          {
            "speaker": "あなた",
            "jp": "［来週（らいしゅう）から 2週間（にしゅうかん）、国（くに）へ 帰（かえ）るの。その 間（あいだ）、植木（うえき）に 水（みず）を やって もらえないかな］。",
            "vn": "Từ tuần sau mình về nước 2 tuần. Trong thời gian đó cậu tưới cây giúp mình được không?"
          },
          {
            "speaker": "ルームメイト",
            "jp": "いいよ。どのぐらい やれば いい？",
            "vn": "Được. Tưới bao nhiêu thì được?"
          },
          {
            "speaker": "あなた",
            "jp": "［3日（みっか）に 1回（いっかい）で 大丈夫（だいじょうぶ）。この コップ 1杯（いっぱい）ぐらい］。",
            "vn": "3 ngày 1 lần là được. Khoảng 1 cốc này."
          },
          {
            "speaker": "ルームメイト",
            "jp": "わかった。ほかに 何（なに）か ある？",
            "vn": "Hiểu rồi. Còn gì khác không?"
          },
          {
            "speaker": "あなた",
            "jp": "［実（じつ）は、来週（らいしゅう） 大学（だいがく）から 大事（だいじ）な 書類（しょるい）が 届（とど）く 予定（よてい）なの。受（う）け取（と）って くれると 助（たす）かる］。",
            "vn": "Thật ra tuần sau có giấy tờ quan trọng từ đại học dự kiến gửi đến. Cậu nhận giúp thì đỡ quá."
          },
          {
            "speaker": "ルームメイト",
            "jp": "書留（かきとめ）？ 私（わたし）が 受（う）け取（と）っても いいの？",
            "vn": "Thư bảo đảm à? Mình nhận thay được không?"
          },
          {
            "speaker": "あなた",
            "jp": "［同（おな）じ 住所（じゅうしょ）だから、大丈夫（だいじょうぶ）だと 思（おも）う。もし 不在票（ふざいひょう）が 入（い）って いたら、再配達（さいはいたつ）を お願（ねが）いして おいて］。",
            "vn": "Cùng địa chỉ nên chắc không sao. Nếu có giấy báo vắng nhà, cậu đăng ký giao lại giúp mình."
          },
          {
            "speaker": "ルームメイト",
            "jp": "OK。届（とど）いたら、写真（しゃしん）を 撮（と）って 送（おく）ろうか。",
            "vn": "OK. Đến nơi mình chụp ảnh gửi nhé?"
          },
          {
            "speaker": "あなた",
            "jp": "［そう して くれると、すごく うれしい！ 中（なか）は 開（あ）けないで ね］。",
            "vn": "Cậu làm vậy thì mình vui lắm! Đừng mở bên trong nhé."
          },
          {
            "speaker": "ルームメイト",
            "jp": "もちろん。冷蔵庫（れいぞうこ）の 物（もの）は どう する？",
            "vn": "Tất nhiên. Đồ trong tủ lạnh thì sao?"
          },
          {
            "speaker": "あなた",
            "jp": "［悪（わる）く なる 前（まえ）に、全部（ぜんぶ） 食（た）べて いいよ］。",
            "vn": "Trước khi hỏng cậu cứ ăn hết đi."
          },
          {
            "speaker": "ルームメイト",
            "jp": "やった。じゃ、遠慮（えんりょ）なく。",
            "vn": "Tuyệt. Vậy mình không khách sáo."
          },
          {
            "speaker": "あなた",
            "jp": "［いろいろ 頼（たの）んで ごめんね。ベトナムの お土産（みやげ）、何（なに）が いい］？",
            "vn": "Xin lỗi nhờ cậu nhiều thứ nhé. Quà Việt Nam cậu thích gì?"
          },
          {
            "speaker": "ルームメイト",
            "jp": "コーヒーが いいな！",
            "vn": "Cà phê thì tốt!"
          },
          {
            "speaker": "あなた",
            "jp": "［了解（りょうかい）！ いちばん おいしい のを 買（か）って くるね］。",
            "vn": "OK! Mình mua loại ngon nhất về nhé."
          }
        ]
      },
      {
        "id": "track-cd09-d4",
        "title": "Biếu quà thầy giáo",
        "titleVn": "Biếu quà thầy giáo",
        "category": "topic",
        "topicId": "cd09",
        "tag": "お願い・お礼・人間関係 · Kịch bản 4",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［先生（せんせい）、ただいま 戻（もど）りました］。",
            "vn": "Thưa thầy, em đã về ạ."
          },
          {
            "speaker": "先生",
            "jp": "おかえりなさい。国（くに）は どうでしたか。",
            "vn": "Chào mừng em về. Ở quê thế nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［家族（かぞく）に 会（あ）えて、とても 楽（たの）しかったです］。",
            "vn": "Gặp được gia đình em rất vui."
          },
          {
            "speaker": "先生",
            "jp": "それは よかったですね。",
            "vn": "Thế thì tốt quá."
          },
          {
            "speaker": "あなた",
            "jp": "［これ、国（くに）の お土産（みやげ）です。心（こころ）ばかりですが、どうぞ］。",
            "vn": "Đây là quà quê em. Chút lòng thành, xin thầy nhận."
          },
          {
            "speaker": "先生",
            "jp": "わあ、ありがとう。気（き）を 遣（つか）わなくて よかったのに。",
            "vn": "Ồ, cảm ơn em. Không cần bận tâm thế đâu."
          },
          {
            "speaker": "あなた",
            "jp": "［ベトナムの コーヒーです。先生（せんせい）が コーヒーが お好（す）きだと 伺（うかが）ったので］。",
            "vn": "Cà phê Việt Nam ạ. Em nghe nói thầy thích cà phê."
          },
          {
            "speaker": "先生",
            "jp": "よく 覚（おぼ）えて いましたね。うれしいです。",
            "vn": "Em nhớ kỹ nhỉ. Thầy vui lắm."
          },
          {
            "speaker": "あなた",
            "jp": "［少（すこ）し 苦（にが）いので、練乳（れんにゅう）を 入（い）れて 召（め）し上（あ）がって みて ください］。",
            "vn": "Hơi đắng nên thầy thử pha sữa đặc rồi dùng ạ."
          },
          {
            "speaker": "先生",
            "jp": "練乳（れんにゅう）ですか。ベトナム式（しき）ですね。",
            "vn": "Sữa đặc à. Kiểu Việt Nam nhỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。この フィルターを 使（つか）うと、ベトナムの 味（あじ）に なります］。",
            "vn": "Vâng. Dùng phin này sẽ ra vị Việt Nam."
          },
          {
            "speaker": "先生",
            "jp": "面白（おもしろ）いですね。使（つか）い方（かた）を 教（おし）えて くれますか。",
            "vn": "Thú vị nhỉ. Em chỉ thầy cách dùng được không?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、喜（よろこ）んで。粉（こな）を 入（い）れて、お湯（ゆ）を 少（すこ）しずつ 注（そそ）ぐだけです］。",
            "vn": "Vâng, rất sẵn lòng. Chỉ cần cho bột vào rồi rót nước nóng từ từ."
          },
          {
            "speaker": "先生",
            "jp": "簡単（かんたん）ですね。明日（あした）の 朝（あさ） さっそく 飲（の）んで みます。",
            "vn": "Dễ nhỉ. Sáng mai thầy thử ngay."
          },
          {
            "speaker": "あなた",
            "jp": "［感想（かんそう）を 伺（うかが）えたら うれしいです］。",
            "vn": "Nếu được nghe cảm nhận của thầy thì em vui lắm."
          },
          {
            "speaker": "先生",
            "jp": "もちろん、教（おし）えますよ。ありがとう、ミンさん。",
            "vn": "Tất nhiên thầy sẽ kể. Cảm ơn Minh."
          },
          {
            "speaker": "あなた",
            "jp": "［いいえ。いつも お世話（せわ）に なって いますから］。",
            "vn": "Không có gì ạ. Vì thầy luôn giúp đỡ em."
          }
        ]
      },
      {
        "id": "track-cd09-d5",
        "title": "Nhận quà từ cấp trên ở chỗ làm",
        "titleVn": "Nhận quà từ cấp trên ở chỗ làm",
        "category": "topic",
        "topicId": "cd09",
        "tag": "お願い・お礼・人間関係 · Kịch bản 5",
        "lines": [
          {
            "speaker": "主任",
            "jp": "お疲（つか）れ様（さま）。これ、北海道（ほっかいどう）の お土産（みやげ）。みんなで 食（た）べて。",
            "vn": "Vất vả rồi. Đây là quà Hokkaido. Mọi người cùng ăn nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［わあ、ありがとうございます。いただきます］。",
            "vn": "Ồ, cảm ơn anh. Em xin nhận."
          },
          {
            "speaker": "主任",
            "jp": "白（しろ）い 恋人（こいびと）って いう お菓子（かし）だよ。北海道（ほっかいどう）の 名物（めいぶつ）なんだ。",
            "vn": "Là bánh tên Shiroi Koibito. Đặc sản Hokkaido đấy."
          },
          {
            "speaker": "あなた",
            "jp": "［聞（き）いた ことが あります！ 食（た）べて みたかったんです］。",
            "vn": "Em từng nghe! Em đã muốn ăn thử."
          },
          {
            "speaker": "主任",
            "jp": "よかった。出張（しゅっちょう）は 寒（さむ）くて 大変（たいへん）だったよ。",
            "vn": "Tốt quá. Công tác lạnh nên vất vả lắm."
          },
          {
            "speaker": "あなた",
            "jp": "［お疲（つか）れ様（さま）でした。北海道（ほっかいどう）は もう 雪（ゆき）が 降（ふ）って いましたか］。",
            "vn": "Anh vất vả rồi. Hokkaido đã có tuyết chưa ạ?"
          },
          {
            "speaker": "主任",
            "jp": "うん、もう 真（ま）っ白（しろ）だったよ。",
            "vn": "Ừ, trắng xóa rồi."
          },
          {
            "speaker": "あなた",
            "jp": "［いいですね。いつか 行（い）って みたいです］。",
            "vn": "Thích nhỉ. Một ngày em muốn đi thử."
          },
          {
            "speaker": "主任",
            "jp": "今日（きょう）、休（やす）みの 人（ひと）の 分（ぶん）も あるから、配（くば）って おいて くれる？",
            "vn": "Có cả phần người nghỉ hôm nay, em chia sẵn giúp anh được không?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、配（くば）って おきます。休憩室（きゅうけいしつ）に 置（お）いて、メモを 書（か）いて おきますね］。",
            "vn": "Vâng, em sẽ chia. Em để ở phòng nghỉ và ghi sẵn giấy nhắn."
          },
          {
            "speaker": "主任",
            "jp": "助（たす）かるよ。",
            "vn": "Đỡ quá."
          },
          {
            "speaker": "あなた",
            "jp": "［メモには 「主任（しゅにん）から いただきました」と 書（か）きますね］。",
            "vn": "Trên giấy em sẽ ghi \"Nhận từ trưởng ca\" nhé."
          },
          {
            "speaker": "主任",
            "jp": "そんなに 丁寧（ていねい）じゃ なくて いいよ。",
            "vn": "Không cần trang trọng thế đâu."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、「主任（しゅにん）の 北海道（ほっかいどう）の お土産（みやげ）です。どうぞ」に します］。",
            "vn": "Vậy em ghi \"Quà Hokkaido của trưởng ca. Mời mọi người\" nhé."
          },
          {
            "speaker": "主任",
            "jp": "うん、それで いい。",
            "vn": "Ừ, vậy được."
          },
          {
            "speaker": "あなた",
            "jp": "［田中（たなか）さん、主任（しゅにん）が 北海道（ほっかいどう）の お菓子（かし）を くださいましたよ］。",
            "vn": "(Với Tanaka) Chị Tanaka, trưởng ca cho bánh Hokkaido đấy."
          },
          {
            "speaker": "田中",
            "jp": "わあ、ありがとうございます！ ごちそうさまです。",
            "vn": "(Tanaka) Ồ, cảm ơn anh! Cảm ơn bữa ngon."
          },
          {
            "speaker": "あなた",
            "jp": "［休憩（きゅうけい）の 時（とき）に 一緒（いっしょ）に 食（た）べましょう］。",
            "vn": "Giờ nghỉ cùng ăn nhé."
          }
        ]
      },
      {
        "id": "track-cd09-d6",
        "title": "Nhờ đàn chị giới thiệu việc làm",
        "titleVn": "Nhờ đàn chị giới thiệu việc làm",
        "category": "topic",
        "topicId": "cd09",
        "tag": "お願い・お礼・人間関係 · Kịch bản 6",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［先輩（せんぱい）、ちょっと ご相談（そうだん）が あるんですが］。",
            "vn": "Chị ơi, em có chuyện muốn xin ý kiến."
          },
          {
            "speaker": "先輩",
            "jp": "どうしたの？",
            "vn": "Sao vậy?"
          },
          {
            "speaker": "あなた",
            "jp": "［今（いま）の アルバイト先（さき）が 来月（らいげつ） 閉店（へいてん）する ことに なって、新（あたら）しい アルバイトを 探（さが）して いるんです］。",
            "vn": "Chỗ làm thêm hiện tại tháng sau đóng cửa nên em đang tìm việc mới."
          },
          {
            "speaker": "先輩",
            "jp": "そうなんだ。大変（たいへん）だね。",
            "vn": "Vậy à. Vất vả nhỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［どこか いい ところを 紹介（しょうかい）して いただけませんか］。",
            "vn": "Chị giới thiệu giúp em chỗ nào tốt được không ạ?"
          },
          {
            "speaker": "先輩",
            "jp": "私（わたし）の バイト先（さき）の 本屋（ほんや）、人手（ひとで）不足（ぶそく）で 人（ひと）を 探（さが）して いるよ。",
            "vn": "Hiệu sách chỗ chị làm đang thiếu người, đang tìm đấy."
          },
          {
            "speaker": "あなた",
            "jp": "［本屋（ほんや）ですか！ 本（ほん）が 好（す）きなので、ぜひ 働（はたら）きたいです］。",
            "vn": "Hiệu sách ạ! Em thích sách nên rất muốn làm."
          },
          {
            "speaker": "先輩",
            "jp": "時給（じきゅう）は 1,150円（せんひゃくごじゅうえん）で、職場（しょくば）の 雰囲気（ふんいき）も いいよ。",
            "vn": "Lương giờ 1.150 yên, không khí làm việc cũng tốt."
          },
          {
            "speaker": "あなた",
            "jp": "［留学生（りゅうがくせい）でも 大丈夫（だいじょうぶ）か どうか、聞（き）いて いただけますか］。",
            "vn": "Chị hỏi giúp em du học sinh có được không ạ?"
          },
          {
            "speaker": "先輩",
            "jp": "前（まえ）に 留学生（りゅうがくせい）も いたから、大丈夫（だいじょうぶ）だと 思（おも）う。店長（てんちょう）に 話（はな）して みるね。",
            "vn": "Trước có du học sinh nên chắc được. Chị sẽ nói thử với quản lý."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。店長（てんちょう）さんに 話（はな）して いただけると、本当（ほんとう）に うれしいです］。",
            "vn": "Cảm ơn chị. Chị nói giúp với quản lý thì em vui lắm."
          },
          {
            "speaker": "先輩",
            "jp": "履歴書（りれきしょ）、準備（じゅんび）して おいてね。",
            "vn": "Chuẩn bị sẵn sơ yếu lý lịch nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。紹介（しょうかい）して くださった 先輩（せんぱい）に 迷惑（めいわく）を かけない ように、頑張（がんば）ります］。",
            "vn": "Vâng. Em sẽ cố để không làm phiền chị, người đã giới thiệu em."
          },
          {
            "speaker": "先輩",
            "jp": "気（き）に しすぎないで。でも、遅刻（ちこく）は しないでね。",
            "vn": "Đừng bận tâm quá. Nhưng đừng đi muộn nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、気（き）を つけます。結果（けっか）が わかったら、教（おし）えて ください］。",
            "vn": "Vâng, em sẽ chú ý. Có kết quả chị báo em nhé."
          },
          {
            "speaker": "先輩",
            "jp": "うん、明日（あした） 連絡（れんらく）するね。",
            "vn": "Ừ, mai chị liên lạc."
          },
          {
            "speaker": "あなた",
            "jp": "［よろしく お願（ねが）いします］。",
            "vn": "Nhờ chị ạ."
          }
        ]
      },
      {
        "id": "track-cd09-d7",
        "title": "Từ chối lời nhờ khéo léo",
        "titleVn": "Từ chối lời nhờ khéo léo",
        "category": "topic",
        "topicId": "cd09",
        "tag": "お願い・お礼・人間関係 · Kịch bản 7",
        "lines": [
          {
            "speaker": "同僚",
            "jp": "ミンさん、お願（ねが）いが あるんだけど……。",
            "vn": "Minh, mình có việc muốn nhờ..."
          },
          {
            "speaker": "あなた",
            "jp": "［うん、どうしたの］？",
            "vn": "Ừ, sao vậy?"
          },
          {
            "speaker": "同僚",
            "jp": "金曜日（きんようび）の 夜（よる）の シフト、代（か）わって もらえない？ 急（きゅう）に 用事（ようじ）が できちゃって。",
            "vn": "Ca tối thứ Sáu, cậu thay mình được không? Mình đột nhiên có việc."
          },
          {
            "speaker": "あなた",
            "jp": "［金曜日（きんようび）の 夜（よる）は ちょっと……］。",
            "vn": "Tối thứ Sáu thì hơi..."
          },
          {
            "speaker": "同僚",
            "jp": "何（なに）か ある？",
            "vn": "Có việc gì à?"
          },
          {
            "speaker": "あなた",
            "jp": "［土曜日（どようび）の 朝（あさ）に 大事（だいじ）な 試験（しけん）が あって、前（まえ）の 日（ひ）は 早（はや）く 寝（ね）たいんだ］。",
            "vn": "Sáng thứ Bảy mình có kỳ thi quan trọng nên hôm trước muốn ngủ sớm."
          },
          {
            "speaker": "同僚",
            "jp": "そっか……。困（こま）ったな。",
            "vn": "Vậy à... Khó nhỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［力（ちから）に なれなくて、ごめんね］。",
            "vn": "Xin lỗi vì không giúp được."
          },
          {
            "speaker": "同僚",
            "jp": "ううん、試験（しけん）なら 仕方（しかた）ないよ。",
            "vn": "Không, thi thì đành vậy."
          },
          {
            "speaker": "あなた",
            "jp": "［9時（くじ）までなら 入（はい）れるけど、それじゃ 足（た）りない］？",
            "vn": "Đến 9 giờ thì mình vào được, thế có đủ không?"
          },
          {
            "speaker": "同僚",
            "jp": "本当（ほんとう）？ シフトは 6時（ろくじ）から 11時（じゅういちじ）なんだ。",
            "vn": "Thật à? Ca từ 6 đến 11 giờ."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、6時（ろくじ）から 9時（くじ）は 私（わたし）が 入（はい）って、9時（くじ）から 11時（じゅういちじ）は ほかの 人（ひと）に 頼（たの）むのは どう］？",
            "vn": "Vậy 6–9 giờ mình vào, 9–11 giờ nhờ người khác thì sao?"
          },
          {
            "speaker": "同僚",
            "jp": "いいね！ 鈴木（すずき）さんに 聞（き）いて みる。",
            "vn": "Hay! Mình sẽ hỏi thử Suzuki."
          },
          {
            "speaker": "あなた",
            "jp": "［鈴木（すずき）さんが だめだったら、店長（てんちょう）に 相談（そうだん）しよう。私（わたし）からも 話（はな）して みるよ］。",
            "vn": "Nếu Suzuki không được thì bàn với quản lý. Mình cũng sẽ nói thử."
          },
          {
            "speaker": "同僚",
            "jp": "ありがとう。試験（しけん）が ある のに、ごめんね。",
            "vn": "Cảm ơn. Cậu có thi vậy mà xin lỗi nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［全然（ぜんぜん）。困（こま）った 時（とき）は お互（たが）いさまだよ］。",
            "vn": "Không sao. Lúc khó khăn thì giúp nhau thôi."
          },
          {
            "speaker": "同僚",
            "jp": "試験（しけん）、頑張（がんば）ってね！",
            "vn": "Thi cố lên nhé!"
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとう。じゃ、金曜日（きんようび） 6時（ろくじ）に 入（はい）るね］。",
            "vn": "Cảm ơn. Vậy thứ Sáu 6 giờ mình vào nhé."
          }
        ]
      },
      {
        "id": "track-cd09-d8",
        "title": "Nhờ người lạ giúp ở máy bán vé",
        "titleVn": "Nhờ người lạ giúp ở máy bán vé",
        "category": "topic",
        "topicId": "cd09",
        "tag": "お願い・お礼・人間関係 · Kịch bản 8",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［すみません、ちょっと 手伝（てつだ）って いただけませんか］。",
            "vn": "Xin lỗi, giúp tôi chút được không ạ?"
          },
          {
            "speaker": "男の人",
            "jp": "はい、どう しましたか。",
            "vn": "Vâng, có chuyện gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［この 機械（きかい）の 使（つか）い方（かた）が わからないんですが］。",
            "vn": "Tôi không biết cách dùng máy này."
          },
          {
            "speaker": "男の人",
            "jp": "どこまで 行（い）きますか。",
            "vn": "Bạn đi đến đâu?"
          },
          {
            "speaker": "あなた",
            "jp": "［あおば駅（えき）までです。料金（りょうきん）が わからなくて……］。",
            "vn": "Đến ga Aoba. Tôi không biết giá vé..."
          },
          {
            "speaker": "男の人",
            "jp": "上（うえ）の 料金（りょうきん）表（ひょう）を 見（み）て ください。あおば駅（えき）は 320円（さんびゃくにじゅうえん）ですね。",
            "vn": "Xem bảng giá phía trên. Ga Aoba là... 320 yên."
          },
          {
            "speaker": "あなた",
            "jp": "［320円（さんびゃくにじゅうえん）ですね。次（つぎ）は どこを 押（お）せば いいんですか］。",
            "vn": "320 yên nhỉ. Tiếp theo bấm chỗ nào thì được ạ?"
          },
          {
            "speaker": "男の人",
            "jp": "先（さき）に お金（かね）を 入（い）れて、それから 「320円（さんびゃくにじゅうえん）」の ボタンを 押（お）します。",
            "vn": "Cho tiền vào trước, rồi bấm nút \"320 yên\"."
          },
          {
            "speaker": "あなた",
            "jp": "［1,000円札（せんえんさつ）でも 大丈夫（だいじょうぶ）ですか］。",
            "vn": "Tờ 1.000 yên cũng được ạ?"
          },
          {
            "speaker": "男の人",
            "jp": "はい、おつりが 出（で）ますよ。",
            "vn": "Được, sẽ có tiền thối."
          },
          {
            "speaker": "あなた",
            "jp": "［あ、出（で）ました］！",
            "vn": "(Cho tiền và bấm) À, ra rồi!"
          },
          {
            "speaker": "男の人",
            "jp": "おつりも 忘（わす）れないで ください。",
            "vn": "Đừng quên tiền thối nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。あおば駅（えき）は 何番線（なんばんせん）か、わかりますか］。",
            "vn": "Cảm ơn ạ. Anh có biết ga Aoba ở đường số mấy không?"
          },
          {
            "speaker": "男の人",
            "jp": "2番線（にばんせん）です。私（わたし）も 同（おな）じ 方向（ほうこう）なので、一緒（いっしょ）に 行（い）きましょうか。",
            "vn": "Đường số 2. Tôi cũng đi cùng hướng, đi cùng nhé?"
          },
          {
            "speaker": "あなた",
            "jp": "［本当（ほんとう）ですか。助（たす）かります］！",
            "vn": "Thật ạ? Đỡ quá!"
          },
          {
            "speaker": "男の人",
            "jp": "日本（にほん）は 初（はじ）めてですか。",
            "vn": "Bạn lần đầu ở Nhật à?"
          },
          {
            "speaker": "あなた",
            "jp": "［先月（せんげつ） 来（き）た ばかりです。まだ わからない ことが たくさん あります］。",
            "vn": "Tôi mới đến tháng trước. Vẫn còn nhiều điều chưa biết."
          },
          {
            "speaker": "男の人",
            "jp": "困（こま）ったら、いつでも 周（まわ）りの 人（ひと）に 聞（き）いて くださいね。",
            "vn": "Khó khăn thì cứ hỏi người xung quanh nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［ご親切（しんせつ）に、ありがとうございました］。",
            "vn": "Cảm ơn anh rất tử tế."
          }
        ]
      },
      {
        "id": "track-cd09-d9",
        "title": "Cảm ơn gia đình homestay ngày chia tay",
        "titleVn": "Cảm ơn gia đình homestay ngày chia tay",
        "category": "topic",
        "topicId": "cd09",
        "tag": "お願い・お礼・人間関係 · Kịch bản 9",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "［お母（かあ）さん、1か月間（いっかげつかん）、本当（ほんとう）に お世話（せわ）に なりました］。",
            "vn": "Mẹ ơi, 1 tháng qua thật sự cảm ơn mẹ đã chăm sóc con."
          },
          {
            "speaker": "お母さん",
            "jp": "こちらこそ。もう 帰（かえ）っちゃうなんて、寂（さび）しいわ。",
            "vn": "Mẹ mới phải cảm ơn. Con về rồi, buồn quá."
          },
          {
            "speaker": "あなた",
            "jp": "［私（わたし）も 寂（さび）しいです。日本（にほん）の 家族（かぞく）が できた みたいでした］。",
            "vn": "Con cũng buồn. Như có thêm gia đình ở Nhật vậy."
          },
          {
            "speaker": "お母さん",
            "jp": "いつでも 帰（かえ）って きて いいのよ。",
            "vn": "Lúc nào cũng có thể về đây nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［毎日（まいにち） おいしい 料理（りょうり）を 作（つく）って くださった ことは、絶対（ぜったい）に 忘（わす）れません］。",
            "vn": "Con sẽ không bao giờ quên việc mẹ nấu món ngon mỗi ngày."
          },
          {
            "speaker": "お母さん",
            "jp": "肉（にく）じゃが、上手（じょうず）に 作（つく）れる ように なったわね。",
            "vn": "Con đã nấu nikujaga giỏi rồi nhỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［お母（かあ）さんに 教（おし）えて いただいた おかげです。国（くに）で 家族（かぞく）に 作（つく）って あげます］。",
            "vn": "Nhờ mẹ dạy con đấy. Về nước con sẽ nấu cho gia đình."
          },
          {
            "speaker": "お母さん",
            "jp": "きっと 喜（よろこ）ぶわよ。",
            "vn": "Chắc chắn mọi người sẽ vui."
          },
          {
            "speaker": "あなた",
            "jp": "［それから、健太（けんた）くんにも よろしく 伝（つた）えて ください。学校（がっこう）で 会（あ）えなくて 残念（ざんねん）です］。",
            "vn": "Ngoài ra, cho con gửi lời hỏi thăm Kenta. Tiếc là không gặp được vì em ấy đi học."
          },
          {
            "speaker": "お母さん",
            "jp": "伝（つた）えるわ。健太（けんた）から 手紙（てがみ）を 預（あず）かって いるの。はい。",
            "vn": "Mẹ sẽ nói. Mẹ có giữ thư của Kenta. Đây."
          },
          {
            "speaker": "あなた",
            "jp": "［わあ、うれしい。飛行機（ひこうき）の 中（なか）で 読（よ）みます］。",
            "vn": "Ôi, vui quá. Con sẽ đọc trên máy bay."
          },
          {
            "speaker": "お母さん",
            "jp": "着（つ）いたら、連絡（れんらく）してね。",
            "vn": "Đến nơi nhớ báo mẹ nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、着（つ）いたら すぐ メッセージを 送（おく）ります］。",
            "vn": "Vâng, đến nơi con nhắn ngay."
          },
          {
            "speaker": "お母さん",
            "jp": "体（からだ）に 気（き）を つけてね。",
            "vn": "Giữ gìn sức khỏe nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［お母（かあ）さんも。いつか 皆（みな）さんに ベトナムへ 来（き）て ほしいです］。",
            "vn": "Mẹ cũng vậy. Con mong một ngày cả nhà sang Việt Nam."
          },
          {
            "speaker": "お母さん",
            "jp": "ぜひ 行（い）きたいわ。",
            "vn": "Mẹ rất muốn đi."
          },
          {
            "speaker": "あなた",
            "jp": "［その 時（とき）は、私（わたし）が ハノイを 案内（あんない）して さしあげたいです。本当（ほんとう）に ありがとうございました］。",
            "vn": "Lúc đó con muốn dẫn mọi người đi tham quan Hà Nội. Thật sự cảm ơn mẹ."
          }
        ]
      },
      {
        "id": "track-cd09-d10",
        "title": "Truyền tiếp lòng tốt: giúp du học sinh mới",
        "titleVn": "Truyền tiếp lòng tốt: giúp du học sinh mới",
        "category": "topic",
        "topicId": "cd09",
        "tag": "お願い・お礼・人間関係 · Kịch bản 10",
        "lines": [
          {
            "speaker": "新入生",
            "jp": "すみません、先輩（せんぱい）ですか。先週（せんしゅう） ベトナムから 来（き）た アンです。",
            "vn": "Xin lỗi, anh là đàn anh phải không? Em là An mới từ Việt Nam sang tuần trước."
          },
          {
            "speaker": "あなた",
            "jp": "［うん、ミンだよ。よろしく。何（なに）か 困（こま）って いる］？",
            "vn": "Ừ, anh là Minh. Chào em. Em đang gặp khó khăn gì à?"
          },
          {
            "speaker": "新入生",
            "jp": "市役所（しやくしょ）の 手続（てつづ）きが よく わからなくて……。",
            "vn": "Em không rõ thủ tục ở tòa thị chính..."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、明日（あした） 授業（じゅぎょう）の 後（あと）、一緒（いっしょ）に 行（い）って あげようか］？",
            "vn": "Vậy mai sau giờ học anh đi cùng em nhé?"
          },
          {
            "speaker": "新入生",
            "jp": "本当（ほんとう）ですか！ 助（たす）かります。",
            "vn": "Thật ạ! Đỡ quá."
          },
          {
            "speaker": "あなた",
            "jp": "［在留（ざいりゅう）カードと パスポートを 忘（わす）れないでね］。",
            "vn": "Đừng quên thẻ cư trú và hộ chiếu nhé."
          },
          {
            "speaker": "新入生",
            "jp": "はい。あと、ごみの 出（だ）し方（かた）も わからないんです。",
            "vn": "Vâng. Còn nữa, em cũng không biết cách bỏ rác."
          },
          {
            "speaker": "あなた",
            "jp": "［ベトナム語（ご）の ごみの 表（ひょう）を 持（も）って いるから、コピーして あげるよ］。",
            "vn": "Anh có bảng phân loại rác tiếng Việt, anh photo cho em."
          },
          {
            "speaker": "新入生",
            "jp": "ありがとうございます。どう やって お礼（れい）を すれば いいですか。",
            "vn": "Cảm ơn anh. Em phải cảm ơn anh thế nào ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［お礼（れい）は いいよ。私（わたし）も 来（き）た ばかりの 時（とき）、先輩（せんぱい）に たくさん 助（たす）けて もらったから］。",
            "vn": "Không cần cảm ơn đâu. Hồi mới sang anh cũng được đàn anh giúp nhiều."
          },
          {
            "speaker": "新入生",
            "jp": "でも、何（なに）か したいです。",
            "vn": "Nhưng em muốn làm gì đó."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、いつか 困（こま）って いる 後輩（こうはい）が いたら、助（たす）けて あげて。それが 「恩送（おんおく）り」だよ］。",
            "vn": "Vậy một ngày nào đó có đàn em khó khăn thì giúp họ nhé. Đó là \"onokuri\"."
          },
          {
            "speaker": "新入生",
            "jp": "「恩送（おんおく）り」と いうのは 何（なん）ですか。",
            "vn": "\"Onokuri\" là gì ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［誰（だれ）かに して もらった 親切（しんせつ）を、別（べつ）の 人（ひと）に 返（かえ）す ことだよ］。",
            "vn": "Là việc trả lại lòng tốt mình được nhận cho một người khác."
          },
          {
            "speaker": "新入生",
            "jp": "すてきな 言葉（ことば）ですね。私（わたし）も そう したいです。",
            "vn": "Từ đẹp quá. Em cũng muốn làm như vậy."
          },
          {
            "speaker": "あなた",
            "jp": "［うん。困（こま）った 時（とき）は お互（たが）いさまだからね］。",
            "vn": "Ừ. Lúc khó khăn thì giúp nhau thôi mà."
          },
          {
            "speaker": "新入生",
            "jp": "明日（あした） 何時（なんじ）に 会（あ）いましょうか。",
            "vn": "Mai mình gặp lúc mấy giờ ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［3時（さんじ）に 学校（がっこう）の 門（もん）の 前（まえ）で 待（ま）って いるね。連絡先（れんらくさき）も 交換（こうかん）しよう］。",
            "vn": "3 giờ anh đợi ở trước cổng trường nhé. Trao đổi liên lạc luôn đi."
          }
        ]
      }
    ]
  },
  {
    "id": "pl-cd00",
    "title": "基礎（きそ）のまとめ",
    "titleVn": "Nền tảng & Hoàn tất N5 (Bài 12 – Bài 15 『できる日本語 初級』)",
    "description": "Trọn bộ 10 kịch bản đối thoại nhập vai thực tế trong tình huống: Nền tảng & Hoàn tất N5 (Bài 12 – Bài 15 『できる日本語 初級』).",
    "category": "topic",
    "badge": "☕ NỀN TẢNG N5",
    "accentColor": "from-slate-500/20 to-gray-500/10 border-slate-500/40 text-slate-600 dark:text-slate-300",
    "tracks": [
      {
        "id": "track-cd00-d1",
        "title": "Làm quen với bạn mới ở ký túc xá",
        "titleVn": "Làm quen với bạn mới ở ký túc xá",
        "category": "topic",
        "topicId": "cd00",
        "tag": "基礎のまとめ · Kịch bản 1",
        "lines": [
          {
            "speaker": "さくら",
            "jp": "こんにちは。新（あたら）しく 来（き）た 方（かた）ですか。",
            "vn": "Xin chào. Bạn là người mới đến à?"
          },
          {
            "speaker": "あなた",
            "jp": "はい、［今日（きょう） 来（き）ました。グエン・ミンです］。",
            "vn": "Vâng, hôm nay tôi mới đến. Tôi là Nguyễn Minh."
          },
          {
            "speaker": "さくら",
            "jp": "私（わたし）は 田中（たなか）さくらです。隣（となり）の 部屋（へや）ですよ。",
            "vn": "Tôi là Tanaka Sakura. Ở phòng bên cạnh đấy."
          },
          {
            "speaker": "あなた",
            "jp": "［そうですか。よろしく お願（ねが）いします］。",
            "vn": "Vậy à. Mong được giúp đỡ."
          },
          {
            "speaker": "さくら",
            "jp": "ミンさんは どちらから 来（き）ましたか。",
            "vn": "Minh đến từ đâu?"
          },
          {
            "speaker": "あなた",
            "jp": "［ベトナムの ハノイから 来（き）ました］。さくらさんは？",
            "vn": "Tôi đến từ Hà Nội, Việt Nam. Còn Sakura?"
          },
          {
            "speaker": "さくら",
            "jp": "私（わたし）は 北海道（ほっかいどう）出身（しゅっしん）です。大学（だいがく）の 専攻（せんこう）は 何（なん）ですか。",
            "vn": "Tôi quê Hokkaido. Chuyên ngành đại học của bạn là gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［今（いま）は 日本語（にほんご）学校（がっこう）の 学生（がくせい）です。来年（らいねん） 大学（だいがく）で 経済（けいざい）を 勉強（べんきょう）したいです］。",
            "vn": "Giờ tôi học trường tiếng Nhật. Năm sau muốn học kinh tế ở đại học."
          },
          {
            "speaker": "さくら",
            "jp": "そうなんですね。私（わたし）は 経済学部（けいざいがくぶ）の 2年生（にねんせい）ですよ。",
            "vn": "Ra vậy. Tôi là sinh viên năm 2 khoa kinh tế đấy."
          },
          {
            "speaker": "あなた",
            "jp": "［本当（ほんとう）ですか。じゃ、いろいろ 教（おし）えて ください］。",
            "vn": "Thật à? Vậy chỉ cho tôi nhiều điều nhé."
          },
          {
            "speaker": "さくら",
            "jp": "もちろん。寮（りょう）の 中（なか）は もう 見（み）ましたか。",
            "vn": "Tất nhiên. Bạn đã xem bên trong ký túc xá chưa?"
          },
          {
            "speaker": "あなた",
            "jp": "［いいえ、まだです。台所（だいどころ）と 洗濯機（せんたくき）は どこですか］。",
            "vn": "Chưa. Bếp và máy giặt ở đâu?"
          },
          {
            "speaker": "さくら",
            "jp": "1階（いっかい）です。今（いま） 時間（じかん）が あったら、案内（あんない）しましょうか。",
            "vn": "Ở tầng 1. Nếu giờ rảnh, tôi dẫn đi xem nhé?"
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。お願（ねが）いします］。",
            "vn": "Cảm ơn. Nhờ bạn."
          },
          {
            "speaker": "さくら",
            "jp": "じゃ、行（い）きましょう。あ、ごみの 日（ひ）も 教（おし）えますね。",
            "vn": "Vậy đi thôi. À, tôi chỉ luôn ngày đổ rác nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［助（たす）かります。後（あと）で メモします］。",
            "vn": "Giúp tôi nhiều quá. Lát nữa tôi ghi lại."
          }
        ]
      },
      {
        "id": "track-cd00-d2",
        "title": "Rủ đi xem phim và hẹn giờ",
        "titleVn": "Rủ đi xem phim và hẹn giờ",
        "category": "topic",
        "topicId": "cd00",
        "tag": "基礎のまとめ · Kịch bản 2",
        "lines": [
          {
            "speaker": "あなた",
            "jp": "リンさん、［今週（こんしゅう）の 土曜日（どようび）、暇（ひま）ですか］。",
            "vn": "Linh, thứ Bảy tuần này bạn rảnh không?"
          },
          {
            "speaker": "リン",
            "jp": "土曜日（どようび）ですか。午後（ごご）なら 暇（ひま）ですよ。",
            "vn": "Thứ Bảy à? Buổi chiều thì rảnh."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、一緒（いっしょ）に 映画（えいが）を 見（み）に 行（い）きませんか］。",
            "vn": "Vậy cùng đi xem phim không?"
          },
          {
            "speaker": "リン",
            "jp": "いいですね！ 何（なん）の 映画（えいが）ですか。",
            "vn": "Hay đấy! Phim gì vậy?"
          },
          {
            "speaker": "あなた",
            "jp": "［新（あたら）しい アニメ映画（えいが）です。とても 人気（にんき）が ありますよ］。",
            "vn": "Phim hoạt hình mới. Rất được yêu thích đấy."
          },
          {
            "speaker": "リン",
            "jp": "見（み）たいです！ 何時（なんじ）の 回（かい）が ありますか。",
            "vn": "Muốn xem! Có suất mấy giờ?"
          },
          {
            "speaker": "あなた",
            "jp": "［1時（いちじ）半（はん）と 4時（よじ）15分（じゅうごふん）の 回（かい）が あります］。",
            "vn": "Có suất 1 giờ rưỡi và 4 giờ 15."
          },
          {
            "speaker": "リン",
            "jp": "じゃ、1時（いちじ）半（はん）が いいです。その 後（あと）で お茶（ちゃ）も しましょう。",
            "vn": "Vậy 1 giờ rưỡi đi. Sau đó uống trà luôn nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［いいですね。チケットは 私（わたし）が インターネットで 予約（よやく）しますね］。",
            "vn": "Được đấy. Vé để mình đặt qua mạng nhé."
          },
          {
            "speaker": "リン",
            "jp": "ありがとう。どこで 待（ま）ち合（あ）わせしますか。",
            "vn": "Cảm ơn. Hẹn gặp ở đâu?"
          },
          {
            "speaker": "あなた",
            "jp": "［駅（えき）の 改札（かいさつ）の 前（まえ）で 会（あ）いましょう］。",
            "vn": "Gặp ở trước cửa soát vé nhà ga nhé."
          },
          {
            "speaker": "リン",
            "jp": "何時（なんじ）に 会（あ）いますか。",
            "vn": "Gặp lúc mấy giờ?"
          },
          {
            "speaker": "あなた",
            "jp": "［1時（いちじ）の 15分（じゅうごふん）前（まえ）、12時（じゅうにじ）45分（よんじゅうごふん）に しましょう］。",
            "vn": "12 giờ 45, trước 1 giờ 15 phút nhé."
          },
          {
            "speaker": "リン",
            "jp": "わかりました。遅（おく）れたら 連絡（れんらく）しますね。",
            "vn": "Được. Nếu trễ mình sẽ báo nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、私（わたし）も 連絡（れんらく）します。楽（たの）しみですね］。",
            "vn": "Ừ, mình cũng sẽ báo. Mong quá nhỉ."
          },
          {
            "speaker": "リン",
            "jp": "うん、楽（たの）しみ！ じゃ、また 土曜日（どようび）に。",
            "vn": "Ừ, mong lắm! Hẹn thứ Bảy nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、また 土曜日（どようび）に］。",
            "vn": "Ừ, hẹn thứ Bảy."
          }
        ]
      },
      {
        "id": "track-cd00-d3",
        "title": "Gọi món ở nhà hàng",
        "titleVn": "Gọi món ở nhà hàng",
        "category": "topic",
        "topicId": "cd00",
        "tag": "基礎のまとめ · Kịch bản 3",
        "lines": [
          {
            "speaker": "店員",
            "jp": "いらっしゃいませ。何名様（なんめいさま）ですか。",
            "vn": "Kính chào. Mấy vị ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［2人（ふたり）です］。",
            "vn": "2 người."
          },
          {
            "speaker": "店員",
            "jp": "こちらへ どうぞ。メニューです。お決（き）まりに なったら、呼（よ）んで ください。",
            "vn": "Mời lối này. Đây là thực đơn. Chọn xong thì gọi tôi."
          },
          {
            "speaker": "あなた",
            "jp": "［すみません、お冷（ひや）を ください］。",
            "vn": "Xin lỗi, cho tôi nước lọc."
          },
          {
            "speaker": "店員",
            "jp": "はい、どうぞ。ご注文（ちゅうもん）は お決（き）まりですか。",
            "vn": "Vâng, mời. Đã chọn món chưa ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［この 唐揚（からあ）げ定食（ていしょく）は 辛（から）いですか］。",
            "vn": "Suất cơm gà rán này có cay không?"
          },
          {
            "speaker": "店員",
            "jp": "いいえ、辛（から）くないですよ。人気（にんき）の メニューです。",
            "vn": "Không, không cay ạ. Là món được ưa chuộng."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、唐揚（からあ）げ定食（ていしょく）に します。ご飯（はん）は 大盛（おおも）りに できますか］。",
            "vn": "Vậy tôi chọn suất gà rán. Cơm làm phần lớn được không?"
          },
          {
            "speaker": "店員",
            "jp": "はい、無料（むりょう）で できます。お連（つ）れ様（さま）は？",
            "vn": "Vâng, miễn phí ạ. Còn người đi cùng?"
          },
          {
            "speaker": "あなた",
            "jp": "［友達（ともだち）は 焼（や）き魚（ざかな）定食（ていしょく）です。飲（の）み物（もの）は 温（あたた）かい お茶（ちゃ）を 2つ ください］。",
            "vn": "Bạn tôi lấy suất cá nướng. Đồ uống cho 2 trà nóng."
          },
          {
            "speaker": "店員",
            "jp": "かしこまりました。少々（しょうしょう） お待（ま）ち ください。",
            "vn": "Vâng ạ. Xin chờ chút."
          },
          {
            "speaker": "あなた",
            "jp": "［すみません、トイレは どこですか］。",
            "vn": "Xin lỗi, nhà vệ sinh ở đâu?"
          },
          {
            "speaker": "店員",
            "jp": "あちらの 奥（おく）です。",
            "vn": "Ở phía trong đằng kia ạ."
          },
          {
            "speaker": "あなた",
            "jp": "すみません、［お会計（かいけい）を お願（ねが）いします］。",
            "vn": "(Ăn xong) Xin lỗi, cho tôi thanh toán."
          },
          {
            "speaker": "店員",
            "jp": "はい。ご一緒（いっしょ）で よろしいですか。",
            "vn": "Vâng. Tính chung được không ạ?"
          },
          {
            "speaker": "あなた",
            "jp": "［いいえ、別々（べつべつ）で お願（ねが）いします］。",
            "vn": "Không, tính riêng giúp tôi."
          },
          {
            "speaker": "店員",
            "jp": "唐揚（からあ）げ定食（ていしょく）は 850円（はっぴゃくごじゅうえん）です。",
            "vn": "Suất gà rán 850 yên ạ."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。ごちそうさまでした。おいしかったです］。",
            "vn": "Vâng. Cảm ơn bữa ăn. Ngon lắm."
          }
        ]
      },
      {
        "id": "track-cd00-d4",
        "title": "Kể về gia đình và quê hương",
        "titleVn": "Kể về gia đình và quê hương",
        "category": "topic",
        "topicId": "cd00",
        "tag": "基礎のまとめ · Kịch bản 4",
        "lines": [
          {
            "speaker": "先生",
            "jp": "ミンさん、ご家族（かぞく）は 何人（なんにん）ですか。",
            "vn": "Minh, gia đình em mấy người?"
          },
          {
            "speaker": "あなた",
            "jp": "［5人（ごにん）です。両親（りょうしん）と 兄（あに）と 妹（いもうと）と 私（わたし）です］。",
            "vn": "5 người. Bố mẹ, anh trai, em gái và em."
          },
          {
            "speaker": "先生",
            "jp": "ご両親（りょうしん）は 何（なに）を して いますか。",
            "vn": "Bố mẹ em làm gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［父（ちち）は 農家（のうか）で、母（はは）は 小学校（しょうがっこう）の 先生（せんせい）を して います］。",
            "vn": "Bố em làm nông, mẹ là giáo viên tiểu học."
          },
          {
            "speaker": "先生",
            "jp": "そうですか。お兄（にい）さんは？",
            "vn": "Vậy à. Còn anh trai?"
          },
          {
            "speaker": "あなた",
            "jp": "［兄（あに）は ホーチミンの 会社（かいしゃ）で 働（はたら）いて います］。",
            "vn": "Anh em làm ở một công ty tại TP.HCM."
          },
          {
            "speaker": "先生",
            "jp": "ミンさんの 町（まち）は どんな 所（ところ）ですか。",
            "vn": "Thị trấn của em là nơi như thế nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［田舎（いなか）ですが、静（しず）かだし、空気（くうき）も きれいだし、いい 所（ところ）です］。",
            "vn": "Là vùng quê nhưng vừa yên tĩnh, không khí lại trong lành, là nơi tốt."
          },
          {
            "speaker": "先生",
            "jp": "名物（めいぶつ）は 何（なん）ですか。",
            "vn": "Đặc sản là gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［フォーが 有名（ゆうめい）です。それに、果物（くだもの）が とても おいしいです］。",
            "vn": "Phở nổi tiếng. Hơn nữa hoa quả rất ngon."
          },
          {
            "speaker": "先生",
            "jp": "いいですね。家族（かぞく）に 会（あ）えなくて、寂（さび）しくないですか。",
            "vn": "Hay quá. Không gặp gia đình em có buồn không?"
          },
          {
            "speaker": "あなた",
            "jp": "［時々（ときどき） 寂（さび）しいです。でも、毎週（まいしゅう） ビデオ電話（でんわ）を して います］。",
            "vn": "Thỉnh thoảng buồn ạ. Nhưng tuần nào em cũng gọi video."
          },
          {
            "speaker": "先生",
            "jp": "それは いいですね。ご家族（かぞく）も 安心（あんしん）しますね。",
            "vn": "Thế thì tốt. Gia đình em cũng yên tâm."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。妹（いもうと）も 日本語（にほんご）を 勉強（べんきょう）したいと 言（い）って います］。",
            "vn": "Vâng. Em gái em cũng nói muốn học tiếng Nhật."
          },
          {
            "speaker": "先生",
            "jp": "そうですか。いつか 日本（にほん）に 来（く）るかも しれませんね。",
            "vn": "Vậy à. Biết đâu một ngày em ấy sẽ sang Nhật."
          },
          {
            "speaker": "あなた",
            "jp": "［そう 思（おも）います。その 時（とき）は 先生（せんせい）に 紹介（しょうかい）します］。",
            "vn": "Em cũng nghĩ vậy. Lúc đó em sẽ giới thiệu với cô."
          }
        ]
      },
      {
        "id": "track-cd00-d5",
        "title": "Chuẩn bị sinh nhật cho bạn",
        "titleVn": "Chuẩn bị sinh nhật cho bạn",
        "category": "topic",
        "topicId": "cd00",
        "tag": "基礎のまとめ · Kịch bản 5",
        "lines": [
          {
            "speaker": "ナム",
            "jp": "来週（らいしゅう）の 金曜日（きんようび）は キムさんの 誕生日（たんじょうび）ですよ。",
            "vn": "Thứ Sáu tuần sau là sinh nhật Kim đấy."
          },
          {
            "speaker": "あなた",
            "jp": "［え、そうですか。何（なに）か プレゼントを あげましょう］。",
            "vn": "Ơ, vậy à. Tặng quà gì đó đi."
          },
          {
            "speaker": "ナム",
            "jp": "いいですね。何（なに）が いいと 思（おも）いますか。",
            "vn": "Hay đấy. Bạn nghĩ cái gì thì được?"
          },
          {
            "speaker": "あなた",
            "jp": "［キムさんは 音楽（おんがく）が 好（す）きだと 思（おも）います。ヘッドホンは どうですか］。",
            "vn": "Mình nghĩ Kim thích âm nhạc. Tai nghe thì sao?"
          },
          {
            "speaker": "ナム",
            "jp": "ヘッドホンは ちょっと 高（たか）いですね。",
            "vn": "Tai nghe hơi đắt nhỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、クラスの みんなで 一人（ひとり） 500円（ごひゃくえん）ずつ 出（だ）しませんか］。",
            "vn": "Vậy cả lớp mỗi người góp 500 yên không?"
          },
          {
            "speaker": "ナム",
            "jp": "それなら 大丈夫（だいじょうぶ）ですね。10人（じゅうにん）だから 5,000円（ごせんえん）です。",
            "vn": "Thế thì được. 10 người nên 5.000 yên."
          },
          {
            "speaker": "あなた",
            "jp": "［ケーキも 買（か）いたいですね。駅前（えきまえ）の ケーキ屋（や）は おいしいですよ］。",
            "vn": "Mua cả bánh kem nữa nhé. Tiệm bánh trước ga ngon lắm."
          },
          {
            "speaker": "ナム",
            "jp": "じゃ、ケーキは 僕（ぼく）が 予約（よやく）します。ミンさんは プレゼントを お願（ねが）いします。",
            "vn": "Vậy bánh để mình đặt. Minh lo quà nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。週末（しゅうまつ）に 買（か）って おきます］。",
            "vn": "OK. Cuối tuần mình mua sẵn."
          },
          {
            "speaker": "ナム",
            "jp": "パーティーは どこで しますか。",
            "vn": "Tiệc tổ chức ở đâu?"
          },
          {
            "speaker": "あなた",
            "jp": "［授業（じゅぎょう）の 後（あと）、教室（きょうしつ）で しましょう。先生（せんせい）に 聞（き）いて みます］。",
            "vn": "Sau giờ học làm ở lớp đi. Mình sẽ hỏi thử cô."
          },
          {
            "speaker": "ナム",
            "jp": "いいですね。でも、キムさんには 言（い）わないで くださいね。",
            "vn": "Hay. Nhưng đừng nói với Kim nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［もちろんです。サプライズですから］。",
            "vn": "Tất nhiên. Vì là bất ngờ mà."
          },
          {
            "speaker": "ナム",
            "jp": "キムさん、喜（よろこ）ぶと 思（おも）いますよ。",
            "vn": "Mình nghĩ Kim sẽ vui đấy."
          },
          {
            "speaker": "あなた",
            "jp": "［私（わたし）も そう 思（おも）います。楽（たの）しみです］。",
            "vn": "Mình cũng nghĩ thế. Háo hức quá."
          }
        ]
      },
      {
        "id": "track-cd00-d6",
        "title": "Kể về chuyến đi cuối tuần",
        "titleVn": "Kể về chuyến đi cuối tuần",
        "category": "topic",
        "topicId": "cd00",
        "tag": "基礎のまとめ · Kịch bản 6",
        "lines": [
          {
            "speaker": "田中",
            "jp": "週末（しゅうまつ）は 何（なに）を しましたか。",
            "vn": "Cuối tuần bạn làm gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［友達（ともだち）と 鎌倉（かまくら）へ 行（い）きました］。",
            "vn": "Mình đi Kamakura với bạn."
          },
          {
            "speaker": "田中",
            "jp": "いいですね。鎌倉（かまくら）で 何（なに）を しましたか。",
            "vn": "Hay nhỉ. Ở Kamakura làm gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［大仏（だいぶつ）を 見（み）たり、海（うみ）を 散歩（さんぽ）したり しました］。",
            "vn": "Nào xem tượng Phật lớn, nào đi dạo biển."
          },
          {
            "speaker": "田中",
            "jp": "大仏（だいぶつ）は どうでしたか。",
            "vn": "Tượng Phật thế nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［とても 大（おお）きくて、びっくりしました］。",
            "vn": "Rất to, mình giật mình luôn."
          },
          {
            "speaker": "田中",
            "jp": "天気（てんき）は よかったですか。",
            "vn": "Thời tiết có đẹp không?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、晴（は）れて いて、暑（あつ）かったです。でも、人（ひと）が 多（おお）くて、混（こ）んで いました］。",
            "vn": "Có, trời nắng và nóng. Nhưng đông người, chật chội lắm."
          },
          {
            "speaker": "田中",
            "jp": "週末（しゅうまつ）の 鎌倉（かまくら）は いつも 混（こ）んで いますね。何（なに）か 食（た）べましたか。",
            "vn": "Kamakura cuối tuần lúc nào cũng đông. Có ăn gì không?"
          },
          {
            "speaker": "あなた",
            "jp": "［しらす丼（どん）を 食（た）べました。初（はじ）めて 食（た）べましたけど、おいしかったです］。",
            "vn": "Mình ăn cơm cá con. Lần đầu ăn nhưng ngon lắm."
          },
          {
            "speaker": "田中",
            "jp": "私（わたし）も 好（す）きです。お土産（みやげ）は 買（か）いましたか。",
            "vn": "Mình cũng thích. Có mua quà không?"
          },
          {
            "speaker": "あなた",
            "jp": "［はい、鳩（はと）サブレを 買（か）いました。田中（たなか）さんに 1つ どうぞ］。",
            "vn": "Có, mình mua bánh quy chim bồ câu. Tặng Tanaka 1 cái."
          },
          {
            "speaker": "田中",
            "jp": "わあ、ありがとうございます！ 私（わたし）も 鎌倉（かまくら）が 大好（だいす）きなんです。",
            "vn": "Ồ, cảm ơn! Mình cũng rất thích Kamakura."
          },
          {
            "speaker": "あなた",
            "jp": "［あ、田中（たなか）さんは 鎌倉（かまくら）に 行（い）った ことが ありますか］。",
            "vn": "À, Tanaka từng đi Kamakura chưa?"
          },
          {
            "speaker": "田中",
            "jp": "何回（なんかい）も ありますよ。今度（こんど） 江（え）ノ島（しま）も 行（い）って みて ください。",
            "vn": "Nhiều lần rồi. Lần sau thử đi cả Enoshima nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［江（え）ノ島（しま）ですね。次（つぎ）は 一緒（いっしょ）に 行（い）きませんか］。",
            "vn": "Enoshima nhỉ. Lần sau đi cùng không?"
          },
          {
            "speaker": "田中",
            "jp": "いいですよ。夏（なつ）に 行（い）きましょう。",
            "vn": "Được thôi. Mùa hè đi nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、ぜひ。疲（つか）れましたけど、楽（たの）しい 週末（しゅうまつ）でした］。",
            "vn": "Vâng, nhất định. Mệt nhưng là cuối tuần vui."
          }
        ]
      },
      {
        "id": "track-cd00-d7",
        "title": "Xin phép ở nhà gia đình Nhật",
        "titleVn": "Xin phép ở nhà gia đình Nhật",
        "category": "topic",
        "topicId": "cd00",
        "tag": "基礎のまとめ · Kịch bản 7",
        "lines": [
          {
            "speaker": "お母さん",
            "jp": "疲（つか）れたでしょう。ゆっくり して くださいね。",
            "vn": "Chắc mệt rồi. Cứ nghỉ ngơi nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。あの、お風呂（ふろ）に 入（はい）っても いいですか］。",
            "vn": "Cảm ơn ạ. À, con tắm được không ạ?"
          },
          {
            "speaker": "お母さん",
            "jp": "もちろん。お湯（ゆ）は 家族（かぞく）みんなで 使（つか）うから、お湯（ゆ）を 捨（す）てないでね。",
            "vn": "Tất nhiên. Nước bồn cả nhà dùng chung nên đừng xả nước nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。体（からだ）を 洗（あら）ってから 入（はい）りますね］。",
            "vn": "Con hiểu. Con tắm rửa người xong rồi mới vào bồn."
          },
          {
            "speaker": "お母さん",
            "jp": "そう そう。よく 知（し）って いますね。",
            "vn": "Đúng rồi. Con biết rõ nhỉ."
          },
          {
            "speaker": "あなた",
            "jp": "［洗濯（せんたく）は いつ しても いいですか］。",
            "vn": "Giặt đồ lúc nào thì được ạ?"
          },
          {
            "speaker": "お母さん",
            "jp": "朝（あさ）なら いつでも いいですよ。夜（よる） 10時（じゅうじ）以降（いこう）は うるさいから、やめてね。",
            "vn": "Buổi sáng lúc nào cũng được. Sau 10 giờ tối ồn nên đừng giặt nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。夜（よる）は 何時（なんじ）までに 帰（かえ）らなければ なりませんか］。",
            "vn": "Vâng. Buổi tối con phải về trước mấy giờ ạ?"
          },
          {
            "speaker": "お母さん",
            "jp": "11時（じゅういちじ）までに 帰（かえ）って ね。遅（おそ）く なる 時（とき）は 連絡（れんらく）して ください。",
            "vn": "Về trước 11 giờ nhé. Khi về muộn thì báo mẹ."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。鍵（かぎ）は どう しますか］。",
            "vn": "Con hiểu. Chìa khóa thì sao ạ?"
          },
          {
            "speaker": "お母さん",
            "jp": "これが あなたの 鍵（かぎ）です。なくさないでね。",
            "vn": "Đây là chìa của con. Đừng làm mất nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい、気（き）を つけます。それから、台所（だいどころ）の 冷蔵庫（れいぞうこ）を 使（つか）っても いいですか］。",
            "vn": "Vâng, con sẽ cẩn thận. Ngoài ra con dùng tủ lạnh trong bếp được không ạ?"
          },
          {
            "speaker": "お母さん",
            "jp": "いいですよ。下（した）の 段（だん）を 使（つか）って ね。遠慮（えんりょ）しないでね。",
            "vn": "Được. Dùng ngăn dưới nhé. Đừng ngại."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとうございます。夕食（ゆうしょく）は 何時（なんじ）ですか］。",
            "vn": "Cảm ơn ạ. Bữa tối mấy giờ ạ?"
          },
          {
            "speaker": "お母さん",
            "jp": "7時（しちじ）ごろです。食（た）べられない 物（もの）は ありますか。",
            "vn": "Khoảng 7 giờ. Có món gì con không ăn được không?"
          },
          {
            "speaker": "あなた",
            "jp": "［特（とく）に ありません。何（なん）でも 食（た）べられます］。",
            "vn": "Không có gì đặc biệt. Con ăn được mọi thứ."
          },
          {
            "speaker": "お母さん",
            "jp": "よかった。じゃ、7時（しちじ）に 呼（よ）びますね。",
            "vn": "Tốt quá. Vậy 7 giờ mẹ gọi nhé."
          }
        ]
      },
      {
        "id": "track-cd00-d8",
        "title": "Đi chợ nấu ăn chung",
        "titleVn": "Đi chợ nấu ăn chung",
        "category": "topic",
        "topicId": "cd00",
        "tag": "基礎のまとめ · Kịch bản 8",
        "lines": [
          {
            "speaker": "マイ",
            "jp": "今晩（こんばん）、何（なに）を 作（つく）りましょうか。",
            "vn": "Tối nay nấu gì nhỉ?"
          },
          {
            "speaker": "あなた",
            "jp": "［寒（さむ）いですから、鍋（なべ）に しましょう］。",
            "vn": "Trời lạnh nên làm lẩu đi."
          },
          {
            "speaker": "マイ",
            "jp": "いいですね！ 何（なに）が 要（い）りますか。",
            "vn": "Hay! Cần gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［白菜（はくさい）と 豆腐（とうふ）と 豚肉（ぶたにく）が 要（い）ります］。",
            "vn": "Cần cải thảo, đậu phụ và thịt lợn."
          },
          {
            "speaker": "マイ",
            "jp": "きのこも 入（い）れたいです。",
            "vn": "Mình muốn bỏ thêm nấm."
          },
          {
            "speaker": "あなた",
            "jp": "［いいですね。じゃ、かごを 持（も）って きます］。",
            "vn": "Được đấy. Vậy mình lấy giỏ."
          },
          {
            "speaker": "マイ",
            "jp": "豚肉（ぶたにく）は どれが いいですか。",
            "vn": "Thịt lợn thì loại nào được?"
          },
          {
            "speaker": "あなた",
            "jp": "［こちらは 300グラムで 400円（よんひゃくえん）、あちらは 500グラムで 600円（ろっぴゃくえん）です。どちらが 安（やす）いですか］。",
            "vn": "Loại này 300g 400 yên, loại kia 500g 600 yên. Loại nào rẻ hơn?"
          },
          {
            "speaker": "マイ",
            "jp": "500グラムの ほうが お得（とく）ですね。2人（ふたり）だから、ちょうど いいです。",
            "vn": "Loại 500g lợi hơn. 2 người nên vừa đủ."
          },
          {
            "speaker": "あなた",
            "jp": "［あ、見（み）て ください。豆腐（とうふ）が 半額（はんがく）に なって います］。",
            "vn": "À, nhìn kìa. Đậu phụ đang nửa giá."
          },
          {
            "speaker": "マイ",
            "jp": "ラッキー！ 2つ 買（か）いましょう。",
            "vn": "May quá! Mua 2 hộp đi."
          },
          {
            "speaker": "あなた",
            "jp": "［鍋（なべ）の スープも 要（い）りますね。醤油（しょうゆ）味（あじ）と 味噌（みそ）味（あじ）、どちらが 好（す）きですか］。",
            "vn": "Cần cả nước lẩu nhỉ. Vị nước tương và vị miso, bạn thích loại nào?"
          },
          {
            "speaker": "マイ",
            "jp": "味噌（みそ）が いいです。ご飯（はん）は 家（いえ）に ありますか。",
            "vn": "Miso đi. Cơm ở nhà có không?"
          },
          {
            "speaker": "あなた",
            "jp": "［ご飯（はん）は ありますけど、卵（たまご）が 足（た）りません。卵（たまご）も 買（か）いましょうか］。",
            "vn": "Cơm có nhưng thiếu trứng. Mua trứng luôn nhé?"
          },
          {
            "speaker": "マイ",
            "jp": "そうですね。全部（ぜんぶ）で いくらぐらいですか。",
            "vn": "Đúng rồi. Tổng cộng khoảng bao nhiêu?"
          },
          {
            "speaker": "あなた",
            "jp": "［たぶん 2,000円（にせんえん）ぐらいです。半分（はんぶん）ずつ 払（はら）いましょう］。",
            "vn": "Chắc khoảng 2.000 yên. Mỗi người trả một nửa nhé."
          },
          {
            "speaker": "マイ",
            "jp": "OK！ レジに 行（い）きましょう。",
            "vn": "OK! Ra quầy thu ngân thôi."
          },
          {
            "speaker": "あなた",
            "jp": "［はい。エコバッグを 持（も）って 来（き）ましたから、袋（ふくろ）は 要（い）りませんね］。",
            "vn": "Ừ. Mình có mang túi vải nên không cần túi nilon nhỉ."
          }
        ]
      },
      {
        "id": "track-cd00-d9",
        "title": "Nói về sở thích và rủ chơi thể thao",
        "titleVn": "Nói về sở thích và rủ chơi thể thao",
        "category": "topic",
        "topicId": "cd00",
        "tag": "基礎のまとめ · Kịch bản 9",
        "lines": [
          {
            "speaker": "健太",
            "jp": "ミンさんの 趣味（しゅみ）は 何（なん）ですか。",
            "vn": "Sở thích của Minh là gì?"
          },
          {
            "speaker": "あなた",
            "jp": "［趣味（しゅみ）は 写真（しゃしん）を 撮（と）る ことです］。健太（けんた）さんは？",
            "vn": "Sở thích của mình là chụp ảnh. Còn Kenta?"
          },
          {
            "speaker": "健太",
            "jp": "僕（ぼく）は スポーツが 好（す）きです。特（とく）に バドミントン。",
            "vn": "Mình thích thể thao. Đặc biệt cầu lông."
          },
          {
            "speaker": "あなた",
            "jp": "［本当（ほんとう）ですか。私（わたし）も バドミントンを するのが 好（す）きです］。",
            "vn": "Thật à? Mình cũng thích chơi cầu lông."
          },
          {
            "speaker": "健太",
            "jp": "へえ！ どのぐらい しますか。",
            "vn": "Ồ! Chơi khoảng bao nhiêu?"
          },
          {
            "speaker": "あなた",
            "jp": "［国（くに）では 週（しゅう）に 2回（にかい） して いました。でも、日本（にほん）に 来（き）てから、全然（ぜんぜん） して いません］。",
            "vn": "Ở quê mình chơi tuần 2 lần. Nhưng từ khi sang Nhật chẳng chơi gì cả."
          },
          {
            "speaker": "健太",
            "jp": "じゃ、うちの サークルに 来（き）ませんか。毎週（まいしゅう） 水曜日（すいようび）に 練習（れんしゅう）して います。",
            "vn": "Vậy đến câu lạc bộ của mình không? Thứ Tư hằng tuần tập."
          },
          {
            "speaker": "あなた",
            "jp": "［行（い）きたいです！ どこで 練習（れんしゅう）して いますか］。",
            "vn": "Muốn đi! Tập ở đâu?"
          },
          {
            "speaker": "健太",
            "jp": "大学（だいがく）の 体育館（たいいくかん）です。6時（ろくじ）からです。",
            "vn": "Nhà thi đấu của trường. Từ 6 giờ."
          },
          {
            "speaker": "あなた",
            "jp": "［私（わたし）は 大学生（だいがくせい）じゃ ありませんが、参加（さんか）する ことが できますか］。",
            "vn": "Mình không phải sinh viên đại học, có tham gia được không?"
          },
          {
            "speaker": "健太",
            "jp": "大丈夫（だいじょうぶ）ですよ。留学生（りゅうがくせい）も 何人（なんにん）か います。",
            "vn": "Không sao đâu. Có mấy du học sinh nữa."
          },
          {
            "speaker": "あなた",
            "jp": "［よかった。ラケットが ないんですが、借（か）りる ことが できますか］。",
            "vn": "May quá. Mình không có vợt, mượn được không?"
          },
          {
            "speaker": "健太",
            "jp": "僕（ぼく）の を 貸（か）しますよ。上手（じょうず）ですか。",
            "vn": "Mình cho mượn vợt của mình. Bạn có giỏi không?"
          },
          {
            "speaker": "あなた",
            "jp": "［あまり 上手（じょうず）じゃ ありません。でも、練習（れんしゅう）したら、上手（じょうず）に なると 思（おも）います］。",
            "vn": "Không giỏi lắm. Nhưng nếu luyện tập thì mình nghĩ sẽ giỏi lên."
          },
          {
            "speaker": "健太",
            "jp": "いいですね。じゃ、来週（らいしゅう）の 水曜日（すいようび）、一緒（いっしょ）に 行（い）きましょう。",
            "vn": "Tốt. Vậy thứ Tư tuần sau cùng đi nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［はい！ 5時半（ごじはん）に 大学（だいがく）の 門（もん）の 前（まえ）で 待（ま）って います］。",
            "vn": "Ừ! Mình đợi ở trước cổng trường lúc 5 giờ rưỡi."
          },
          {
            "speaker": "健太",
            "jp": "わかりました。運動（うんどう）できる 服（ふく）と 靴（くつ）を 持（も）って 来（き）て ください。",
            "vn": "OK. Mang quần áo và giày thể thao nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［わかりました。楽（たの）しみに して います］。",
            "vn": "Hiểu rồi. Mình rất mong chờ."
          }
        ]
      },
      {
        "id": "track-cd00-d10",
        "title": "Gọi điện đổi lịch hẹn",
        "titleVn": "Gọi điện đổi lịch hẹn",
        "category": "topic",
        "topicId": "cd00",
        "tag": "基礎のまとめ · Kịch bản 10",
        "lines": [
          {
            "speaker": "リン",
            "jp": "もしもし、ミンさん？",
            "vn": "Alo, Minh à?"
          },
          {
            "speaker": "あなた",
            "jp": "［もしもし、リンさん。今（いま）、ちょっと いいですか］。",
            "vn": "Alo Linh. Bây giờ nói chút được không?"
          },
          {
            "speaker": "リン",
            "jp": "うん、大丈夫（だいじょうぶ）。どうしたの？",
            "vn": "Ừ, được. Sao vậy?"
          },
          {
            "speaker": "あなた",
            "jp": "［実（じつ）は、明日（あした） 急（きゅう）に アルバイトが 入（はい）ったので、行（い）けなく なりました］。",
            "vn": "Thật ra mai đột nhiên có ca làm thêm nên mình không đi được nữa."
          },
          {
            "speaker": "リン",
            "jp": "えー、そうなんだ。残念（ざんねん）。",
            "vn": "Ôi, vậy à. Tiếc quá."
          },
          {
            "speaker": "あなた",
            "jp": "［本当（ほんとう）に すみません。前（まえ）から 約束（やくそく）して いたのに］。",
            "vn": "Thật sự xin lỗi. Đã hẹn từ trước rồi vậy mà."
          },
          {
            "speaker": "リン",
            "jp": "仕方（しかた）ないよ。じゃ、いつに する？",
            "vn": "Đành vậy thôi. Vậy đổi sang hôm nào?"
          },
          {
            "speaker": "あなた",
            "jp": "［リンさんの 都合（つごう）は どうですか。私（わたし）は 土曜日（どようび）が 空（あ）いて います］。",
            "vn": "Lịch của Linh thế nào? Mình rảnh thứ Bảy."
          },
          {
            "speaker": "リン",
            "jp": "土曜日（どようび）は 午前（ごぜん）だけ 授業（じゅぎょう）が ある。午後（ごご）なら いいよ。",
            "vn": "Thứ Bảy mình chỉ có giờ học buổi sáng. Buổi chiều thì được."
          },
          {
            "speaker": "あなた",
            "jp": "［じゃ、土曜日（どようび）の 午後（ごご）に しましょう。お昼（ひる）ご飯（はん）の 代（か）わりに、晩（ばん）ご飯（はん）は どうですか］。",
            "vn": "Vậy chiều thứ Bảy nhé. Thay vì ăn trưa, ăn tối thì sao?"
          },
          {
            "speaker": "リン",
            "jp": "いいね。お店（みせ）の 予約（よやく）は どう する？",
            "vn": "Được đấy. Đặt quán thì sao?"
          },
          {
            "speaker": "あなた",
            "jp": "［私（わたし）が 電話（でんわ）して、予約（よやく）を 変（か）えて おきます］。",
            "vn": "Mình sẽ gọi điện đổi đặt chỗ sẵn."
          },
          {
            "speaker": "リン",
            "jp": "ありがとう。何時（なんじ）に する？",
            "vn": "Cảm ơn. Mấy giờ?"
          },
          {
            "speaker": "あなた",
            "jp": "［6時（ろくじ）は どうですか。駅（えき）で 5時（ごじ）50分（ごじゅっぷん）に 会（あ）いましょう］。",
            "vn": "6 giờ được không? Gặp ở ga lúc 5 giờ 50 nhé."
          },
          {
            "speaker": "リン",
            "jp": "うん、わかった。アルバイト、頑張（がんば）ってね。",
            "vn": "Ừ, hiểu rồi. Làm thêm cố lên nhé."
          },
          {
            "speaker": "あなた",
            "jp": "［ありがとう。急（きゅう）に 変（か）えて、ごめんね］。",
            "vn": "Cảm ơn. Xin lỗi vì đổi đột ngột nhé."
          },
          {
            "speaker": "リン",
            "jp": "気（き）に しないで。じゃ、土曜日（どようび）に。",
            "vn": "Đừng bận tâm. Hẹn thứ Bảy."
          },
          {
            "speaker": "あなた",
            "jp": "［うん、また 土曜日（どようび）に。おやすみ］。",
            "vn": "Ừ, hẹn thứ Bảy. Ngủ ngon."
          }
        ]
      }
    ]
  }
]

export function getExamPlaylists(): PassivePlaylist[] {
  return PASSIVE_PLAYLISTS.filter((p) => p.category === 'exam')
}

export function getTopicPlaylists(): PassivePlaylist[] {
  return PASSIVE_PLAYLISTS.filter((p) => p.category === 'topic')
}

export function getPlaylistById(id: string): PassivePlaylist | undefined {
  return PASSIVE_PLAYLISTS.find((p) => p.id === id)
}

export function getMegaMixPlaylist(): PassivePlaylist {
  return PASSIVE_PLAYLISTS.find((p) => p.id === 'mega-b08-b11') || PASSIVE_PLAYLISTS[0]!
}
