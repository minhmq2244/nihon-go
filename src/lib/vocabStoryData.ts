// src/lib/vocabStoryData.ts
// Curated single-passage contextual stories connecting unit vocabulary (matching ReadingTab layout)
import type { VocabItem } from '../types'

export interface VocabStoryLine {
  jp: string
  vn: string
  vocabIds: string[]
}

export interface VocabStory {
  unitId: string
  title: string
  titleVn: string
  genre: string
  lines: VocabStoryLine[]
  vocabCovered: string[]
}

export const CURATED_VOCAB_STORIES: Record<string, VocabStory> = {
  "b01": {
    "unitId": "b01",
    "title": "日本語学校（にほんごがっこう）の はじめまして",
    "titleVn": "Buổi gặp gỡ đầu tiên tại trường tiếng Nhật",
    "genre": "Đoạn văn Từ vựng · Tự giới thiệu & Làm quen",
    "lines": [
      {
        "jp": "はじめまして！ 私（わたし）の なまえは ナムです。ベトナム人（じん）です。",
        "vn": "Rất vui được gặp mọi người! Tên của tôi là Nam. Tôi là người Việt Nam.",
        "vocabIds": [
          "b01-v55",
          "b01-v1",
          "b01-v2",
          "b01-v15",
          "b01-v19"
        ]
      },
      {
        "jp": "前（まえ）は ベトナムで こうこうの 学生（がくせい）でした。",
        "vn": "Trước đây ở Việt Nam tôi là học sinh trường trung học phổ thông.",
        "vocabIds": [
          "b01-v22",
          "b01-v27"
        ]
      },
      {
        "jp": "今（いま）は 日本語学校（にほんごがっこう）の 学生（がくせい）です。そして、ベトナムの 大学（だいがく）の 大学生（だいがくせい）でも あります。",
        "vn": "Hiện tại tôi là học viên trường tiếng Nhật. Và tôi cũng là sinh viên của một trường đại học ở Việt Nam.",
        "vocabIds": [
          "b01-v24",
          "b01-v23",
          "b01-v28"
        ]
      },
      {
        "jp": "どうぞよろしく おねがいします。",
        "vn": "Rất mong nhận được sự giúp đỡ của thầy cô và các bạn.",
        "vocabIds": [
          "b01-v56"
        ]
      },
      {
        "jp": "「はじめまして、田中（たなか）です。ナムさん、こちらこそ よろしく おねがいします。」",
        "vn": "「Rất vui được gặp em, thầy là Tanaka. Nam này, chính thầy cũng mong được em giúp đỡ.」",
        "vocabIds": [
          "b01-v57",
          "b01-v33"
        ]
      },
      {
        "jp": "「田中（たなか）先生（せんせい）は 日本人（にほんじん）ですね。先生（せんせい）は 日本（にほん）の どちらから 来（き）ましたか。」",
        "vn": "「Thầy Tanaka là người Nhật nhỉ. Thầy đến từ nơi nào của nước Nhật ạ?」",
        "vocabIds": [
          "b01-v29",
          "b01-v6",
          "b01-v51"
        ]
      },
      {
        "jp": "「はい、私（わたし）は 東京（とうきょう）出身（しゅっしん）ですよ。この 日本語学校（にほんごがっこう）の きょうしです。」",
        "vn": "「Đúng vậy, thầy xuất thân từ Tokyo đấy. Thầy là giáo viên của trường tiếng Nhật này.」",
        "vocabIds": [
          "b01-v62",
          "b01-v30"
        ]
      },
      {
        "jp": "「ナムさん、お父（とう）さんの おしごとは 何（なん）ですか。」",
        "vn": "「Nam này, công việc của bố em là gì vậy?」",
        "vocabIds": [
          "b01-v26",
          "b01-v52"
        ]
      },
      {
        "jp": "「父（ちち）の しごとは 会社（かいしゃ）の しゃいんです。ベトナムの FPTの しゃいんです。」",
        "vn": "「Dạ công việc của bố em là nhân viên công ty. Bố là nhân viên của công ty FPT tại Việt Nam.」",
        "vocabIds": [
          "b01-v25",
          "b01-v32"
        ]
      },
      {
        "jp": "「そうですか。かいしゃいんですね。すばらしいですね。」",
        "vn": "「Thế à. Là nhân viên công ty nhỉ. Thật tuyệt vời.」",
        "vocabIds": [
          "b01-v61",
          "b01-v31"
        ]
      },
      {
        "jp": "教室（きょうしつ）には 世界中（せかいじゅう）から クラスメイトが 集（あつ）まって います。",
        "vn": "Trong lớp học có các bạn học sinh từ khắp nơi trên thế giới tụ hội về.",
        "vocabIds": []
      },
      {
        "jp": "「あのう、すみません。おなまえは 何（なん）ですか。」",
        "vn": "「À, xin lỗi cho tôi hỏi... Tên của bạn là gì vậy?」",
        "vocabIds": [
          "b01-v58",
          "b01-v59",
          "b01-v60",
          "b01-v3"
        ]
      },
      {
        "jp": "「マイクです。アメリカ人（じん）です。アメリカで えいごの 先生（せんせい）でした。」",
        "vn": "「Mình là Mike. Mình là người Mỹ. Trước đây mình là giáo viên tiếng Anh ở Mỹ.」",
        "vocabIds": [
          "b01-v7",
          "b01-v21"
        ]
      },
      {
        "jp": "「マイクさん、おくには どちらですか。」「くに（国）は アメリカです。あのう、すみません、みなさんの おくには どちらですか。」",
        "vn": "「Bạn Mike ơi, bạn là người nước nào vậy?」「Đất nước của mình là nước Mỹ. À, xin lỗi mọi người, đất nước của các bạn ở đâu vậy?」",
        "vocabIds": [
          "b01-v5",
          "b01-v53",
          "b01-v4"
        ]
      },
      {
        "jp": "「私（わたし）の くには イタリアです。イタリア人（じん）です。」「ぼくは オーストラリア人（じん）です。オーストラリアから 来（き）ました。」",
        "vn": "「Đất nước của tôi là nước Ý. Tôi là người Ý.」「Còn tôi là người Úc. Tôi đến từ nước Úc.」",
        "vocabIds": [
          "b01-v8",
          "b01-v9"
        ]
      },
      {
        "jp": "「私（わたし）は かんこく人（じん）です。かんこく語（ご）と 日本語（にほんご）を 話（はな）します。」「タイ人（じん）の レックです。タイ語（ご）が 母国語（ぼこくご）です。」",
        "vn": "「Tôi là người Hàn Quốc. Tôi nói tiếng Hàn và tiếng Nhật.」「Tôi là Lek người Thái Lan. Tiếng Thái là tiếng mẹ đẻ của tôi.」",
        "vocabIds": [
          "b01-v10",
          "b01-v11",
          "b01-v20"
        ]
      },
      {
        "jp": "「ちゅうごく人（じん）の ワンです。ちゅうごく語（ご）が 話（はな）せます。」「ロシア人（じん）の イワンです。ロシア語（ご）の 本（ほん）が 好（す）きです。」",
        "vn": "「Tôi là Wang người Trung Quốc. Tôi có thể nói tiếng Trung.」「Tôi là Ivan người Nga. Tôi thích sách tiếng Nga.」",
        "vocabIds": [
          "b01-v12",
          "b01-v13"
        ]
      },
      {
        "jp": "「ブラジル人（じん）の カルロスです。サンバが 大好（だいす）きです。」「ドイツ人（じん）の ハンスです。ドイツ語（ご）を 教（おし）えて います。」",
        "vn": "「Tôi là Carlos người Brazil. Tôi rất thích điệu Samba.」「Tôi là Hans người Đức. Tôi dạy tiếng Đức.」",
        "vocabIds": [
          "b01-v14",
          "b01-v16"
        ]
      },
      {
        "jp": "「フランス人（じん）の ピエールです。フランス料理（りょうり）が 得意（とくい）です。」「スイス人（じん）の エヴァです。スイスの 山（やま）は きれいです。」",
        "vn": "「Tôi là Pierre người Pháp. Tôi nấu món Pháp rất cừ.」「Tôi là Eva người Thụy Sĩ. Núi ở Thụy Sĩ rất đẹp.」",
        "vocabIds": [
          "b01-v17",
          "b01-v18"
        ]
      },
      {
        "jp": "「マイクさん、失礼（しつれい）ですが、おいくつですか。」「30才（さい）です。ナムさんは なんさいですか。」「私（わたし）は 20才（さい）です。」",
        "vn": "「Bạn Mike ơi, thất lễ cho mình hỏi, bạn bao nhiêu tuổi rồi?」「Mình 30 tuổi. Nam mấy tuổi rồi?」「Mình 20 tuổi.」",
        "vocabIds": [
          "b01-v39",
          "b01-v37",
          "b01-v38"
        ]
      },
      {
        "jp": "「ナムさん、誕生日（たんじょうび）は いつですか。」「誕生日（たんじょうび）は 8月（がつ） 15日（にち）です。」",
        "vn": "「Nam ơi, ngày sinh nhật của bạn là khi nào?」「Sinh nhật của mình là ngày 15 tháng 8.」",
        "vocabIds": [
          "b01-v34",
          "b01-v40",
          "b01-v35",
          "b01-v36"
        ]
      },
      {
        "jp": "「あ（っ）！ 私（わたし）も 8月（がつ） 15日（にち）です！ おなじですね！」「わあ、本当（ほんとう）ですか！ すごいですね！」",
        "vn": "「A! Mình cũng ngày 15 tháng 8! Thật là giống nhau quá đi!」「Oa, thật vậy sao! Tuyệt quá nhỉ!」",
        "vocabIds": [
          "b01-v64",
          "b01-v66",
          "b01-v65"
        ]
      },
      {
        "jp": "「ナムさんの しゅみは 何（なん）ですか。スポーツですか。」「いいえ、スポーツじゃ ありません。でも サッカーと テニスを 見（み）るのは 好（す）きです。すいえいも たまに します。」",
        "vn": "「Sở thích của Nam là gì? Thể thao phải không?」「Không, không phải thể thao. Nhưng mình thích xem bóng đá và tennis. Thỉnh thoảng mình cũng đi bơi nữa.」",
        "vocabIds": [
          "b01-v41",
          "b01-v43",
          "b01-v63",
          "b01-v45",
          "b01-v47",
          "b01-v49"
        ]
      },
      {
        "jp": "「えいがや おんがくはどうですか。」「はい、どくしょと りょこうが 好（す）きです。そして、私の しゅみは りょうりです。」",
        "vn": "「Thế còn xem phim hay nghe nhạc thì sao?」「Có chứ, mình thích đọc sách và du lịch. Và đặc biệt, sở thích của tôi là nấu ăn.」",
        "vocabIds": [
          "b01-v42",
          "b01-v44",
          "b01-v46",
          "b01-v48",
          "b01-v50",
          "b01-v54"
        ]
      }
    ],
    "vocabCovered": [
      "b01-v55",
      "b01-v1",
      "b01-v2",
      "b01-v15",
      "b01-v19",
      "b01-v22",
      "b01-v27",
      "b01-v24",
      "b01-v23",
      "b01-v28",
      "b01-v56",
      "b01-v57",
      "b01-v33",
      "b01-v29",
      "b01-v6",
      "b01-v51",
      "b01-v62",
      "b01-v30",
      "b01-v26",
      "b01-v52",
      "b01-v25",
      "b01-v32",
      "b01-v61",
      "b01-v31",
      "b01-v58",
      "b01-v59",
      "b01-v60",
      "b01-v3",
      "b01-v7",
      "b01-v21",
      "b01-v5",
      "b01-v53",
      "b01-v4",
      "b01-v8",
      "b01-v9",
      "b01-v10",
      "b01-v11",
      "b01-v20",
      "b01-v12",
      "b01-v13",
      "b01-v14",
      "b01-v16",
      "b01-v17",
      "b01-v18",
      "b01-v39",
      "b01-v37",
      "b01-v38",
      "b01-v34",
      "b01-v40",
      "b01-v35",
      "b01-v36",
      "b01-v64",
      "b01-v66",
      "b01-v65",
      "b01-v41",
      "b01-v43",
      "b01-v63",
      "b01-v45",
      "b01-v47",
      "b01-v49",
      "b01-v42",
      "b01-v44",
      "b01-v46",
      "b01-v48",
      "b01-v50",
      "b01-v54"
    ]
  },
  "b02": {
    "unitId": "b02",
    "title": "ショッピングモールと レストランで",
    "titleVn": "Đi mua sắm tại trung tâm thương mại và ăn uống ở nhà hàng",
    "genre": "Đoạn văn Từ vựng · Mua sắm & Ăn uống",
    "lines": [
      {
        "jp": "日曜日（にちようび）、私（わたし）は 新（あたら）しい ショッピングモールへ 行（い）きました。",
        "vn": "Chủ nhật, tôi đã đến một trung tâm thương mại mới mở.",
        "vocabIds": []
      },
      {
        "jp": "1階（かい）の インフォメーションで 店員（てんいん）に「すみません、100円（ひゃくえん）ショップと レストランは どこですか」と 聞（き）きました。",
        "vn": "Tại quầy thông tin ở tầng 1, tôi hỏi nhân viên bán hàng: 「Xin lỗi, cửa hàng 100 yên và nhà hàng ở đâu ạ?」",
        "vocabIds": [
          "b02-v1",
          "b02-v19",
          "b02-v6",
          "b02-v8",
          "b02-v17"
        ]
      },
      {
        "jp": "店員（てんいん）は「100円（ひゃくえん）ショップは 3階（がい）で、レストランは 4階（かい）です。ちかの スーパーも おすすめですよ」と 丁寧（ていねい）に 教（おし）えて くれました。",
        "vn": "Nhân viên lịch sự chỉ dẫn: 「Cửa hàng 100 yên ở tầng 3, còn nhà hàng ở tầng 4. Siêu thị dưới tầng hầm cũng rất được yêu thích đấy ạ.」",
        "vocabIds": [
          "b02-v15",
          "b02-v4"
        ]
      },
      {
        "jp": "まず、エスカレーターで ちかの スーパーへ 行（い）って、買い物（かいもの）を しました。",
        "vn": "Trước tiên, tôi đi thang cuốn xuống siêu thị dưới tầng hầm để mua sắm.",
        "vocabIds": [
          "b02-v5"
        ]
      },
      {
        "jp": "スーパーの うりばで、お米（こめ）と たまご、やさい、そして リンゴと イチゴを かごに 入（い）れました。",
        "vn": "Ở quầy siêu thị, tôi cho gạo, trứng, rau củ, cùng táo và dâu tây vào giỏ.",
        "vocabIds": [
          "b02-v38",
          "b02-v40",
          "b02-v56",
          "b02-v60",
          "b02-v58"
        ]
      },
      {
        "jp": "肉（にく）の コーナーには、ぎゅうにく、ぶたにく、とりにくが たくさん ならんで いました。",
        "vn": "Ở quầy thịt có rất nhiều thịt bò, thịt heo và thịt gà được bày bán.",
        "vocabIds": [
          "b02-v48",
          "b02-v50",
          "b02-v54",
          "b02-v52"
        ]
      },
      {
        "jp": "今日（きょう）の 夕飯（ゆうはん）の ために、あぶらと 新鮮（しんせん）な 魚（さかな）も 買（か）いました。",
        "vn": "Để chuẩn bị cho bữa cơm tối nay, tôi cũng mua thêm dầu ăn và cá tươi ngon.",
        "vocabIds": [
          "b02-v34",
          "b02-v46"
        ]
      },
      {
        "jp": "トイレットペーパーも 買（か）って、さいふから お金（かね）を 出（だ）して、レジで 払（はら）いました。",
        "vn": "Tôi cũng mua giấy vệ sinh, rồi lấy tiền từ trong ví ra thanh toán tại quầy thu ngân.",
        "vocabIds": [
          "b02-v21",
          "b02-v33",
          "b02-v13"
        ]
      },
      {
        "jp": "ATM（エーティーエム）で お金（かね）を おろしてから、エレベーターで 2階（かい）へ 行（い）きました。",
        "vn": "Sau khi rút tiền ở cây ATM, tôi đi thang máy lên tầng 2.",
        "vocabIds": [
          "b02-v3",
          "b02-v7"
        ]
      },
      {
        "jp": "本屋（ほんや）で 面白（おもしろ）い 本（ほん）と けしゴム、ペンを 見（み）ました。",
        "vn": "Ở hiệu sách, tôi xem những cuốn sách thú vị cùng cục tẩy và bút viết.",
        "vocabIds": [
          "b02-v18",
          "b02-v23",
          "b02-v30",
          "b02-v32"
        ]
      },
      {
        "jp": "電気（でんき）の 店（みせ）には、カメラや パソコン、けいたいでんわ、でんしじしょが ありました。",
        "vn": "Ở cửa hàng đồ điện tử có máy ảnh, máy tính xách tay, điện thoại di động và kim từ điển.",
        "vocabIds": [
          "b02-v20",
          "b02-v26",
          "b02-v22",
          "b02-v24"
        ]
      },
      {
        "jp": "ファッションの 店（みせ）には、かっこいい かばん、とけい、くつ、ズボン、Tシャツ（ティーシャツ）が 売（う）られて いました。",
        "vn": "Ở cửa hàng thời trang có bày bán túi xách đẹp mắt, đồng hồ, giày, quần dài và áo phông.",
        "vocabIds": [
          "b02-v25",
          "b02-v31",
          "b02-v28",
          "b02-v27",
          "b02-v29"
        ]
      },
      {
        "jp": "たくさん 歩（ある）いて おなかが すいたので、4階（かい）の レストランへ 行（い）きました。",
        "vn": "Đi bộ nhiều nên tôi thấy đói bụng, liền đi lên khu nhà hàng ở tầng 4.",
        "vocabIds": []
      },
      {
        "jp": "「いらっしゃいませ！ こちらへ どうぞ」と 店員（てんいん）が 明（あか）るく 案内（あんない）して、メニューを 渡（わた）して くれました。",
        "vn": "「Kính chào quý khách! Xin mời đi lối này ạ」, nhân viên niềm nở hướng dẫn và trao thực đơn cho tôi.",
        "vocabIds": [
          "b02-v74",
          "b02-v78",
          "b02-v61",
          "b02-v77"
        ]
      },
      {
        "jp": "私（わたし）は「すみません、ちゅうもんを おねがいします」と 言（い）いました。",
        "vn": "Tôi nói: 「Xin lỗi, cho tôi gọi món với ạ.」",
        "vocabIds": [
          "b02-v76"
        ]
      },
      {
        "jp": "「この カレーと ライスは いくらですか」「800円（えん）です」「じゃ、カレーを 一（ひと）つと スープを 一（ひと）つ、おねがいします。」",
        "vn": "「Món cà-ri và cơm đĩa này giá bao nhiêu tiền vậy?」「Dạ 800 yên.」「Thế thì cho tôi một suất cà-ri và một bát súp nhé.」",
        "vocabIds": [
          "b02-v35",
          "b02-v45",
          "b02-v68",
          "b02-v67",
          "b02-v73",
          "b02-v69",
          "b02-v37"
        ]
      },
      {
        "jp": "一緒（いっしょ）に 来（き）た 友達（ともだち）は、とんかつと ハンバーグを ちゅうもんしました。パンも 付（つ）いて います。",
        "vn": "Người bạn đi cùng tôi đã gọi món thịt heo chiên xù tonkatsu và thịt băm áp chảo hamburg. Có kèm cả bánh mì nữa.",
        "vocabIds": [
          "b02-v39",
          "b02-v41",
          "b02-v42"
        ]
      },
      {
        "jp": "「飲（の）み物（もの）は 水（みず）を 二（ふた）つ、ジュースと （お）茶（ちゃ）を おねがいします。あとで ビールと ワインも 飲（の）みたいですね。」",
        "vn": "「Đồ uống cho chúng tôi hai cốc nước lọc, một ly nước hoa quả và một tách trà xanh nhé. Lát nữa chúng tôi cũng muốn uống thử bia và rượu vang.」",
        "vocabIds": [
          "b02-v44",
          "b02-v47",
          "b02-v53",
          "b02-v55",
          "b02-v57"
        ]
      },
      {
        "jp": "店員（てんいん）は「かしこまりました。しょうしょう おまちください」と 言（い）って、厨房（ちゅうぼう）へ 戻（もど）りました。",
        "vn": "Nhân viên đáp: 「Tôi xin ghi nhận. Xin quý khách vui lòng đợi một chút」 rồi quay lại quầy bếp.",
        "vocabIds": [
          "b02-v79"
        ]
      },
      {
        "jp": "フロアの 奥（おく）には、カフェ、きっさてん、ファストフード、大衆（たいしゅう）しょくどう、そして 夜（よる）の いざかやが ならんで います。",
        "vn": "Ở phía trong của tầng có quán cà phê hiện đại, quán trà cổ điển, quán ăn nhanh, nhà ăn bình dân và cả quán nhậu izakaya buổi tối.",
        "vocabIds": [
          "b02-v14",
          "b02-v2",
          "b02-v16",
          "b02-v10",
          "b02-v12"
        ]
      },
      {
        "jp": "きつえんじょと トイレも 近（ちか）くに あって、とても 便利（べんり）です。",
        "vn": "Khu vực hút thuốc và nhà vệ sinh cũng ở gần đó, rất tiện lợi.",
        "vocabIds": [
          "b02-v9",
          "b02-v11"
        ]
      },
      {
        "jp": "運（はこ）ばれて 来（き）た 料理（りょうり）は 熱々（あつあつ）で、とても おいしいです！",
        "vn": "Món ăn được mang ra nóng hổi, thực sự rất ngon!",
        "vocabIds": [
          "b02-v59",
          "b02-v72"
        ]
      },
      {
        "jp": "食後（しょくご）に あまい ケーキを 食（た）べて、温（あたた）かい コーヒーと こうちゃを 飲（の）みました。",
        "vn": "Sau bữa ăn, chúng tôi thưởng thức bánh ngọt thơm ngon và nhâm nhi cà phê cùng hồng trà ấm nóng.",
        "vocabIds": [
          "b02-v36",
          "b02-v49",
          "b02-v51"
        ]
      },
      {
        "jp": "この レストランには、インド、ドイツ、フランスからの お客（きゃく）さんも 来（き）て いて、えいごで 話（はな）して いました。",
        "vn": "Tại nhà hàng này cũng có các vị khách đến từ Ấn Độ, Đức, Pháp đang trò chuyện bằng tiếng Anh.",
        "vocabIds": [
          "b02-v62",
          "b02-v63",
          "b02-v64",
          "b02-v65",
          "b02-v66"
        ]
      },
      {
        "jp": "「ごちそうさまでした。（どうも）ありがとうございます！」と 店員（てんいん）に 笑顔（えがお）で 伝（つた）えて、店（みせ）を 出（で）ました。",
        "vn": "「Cảm ơn vì bữa ăn ngon miệng. Xin cảm ơn rất nhiều!」, tôi tươi cười chào nhân viên rồi bước ra khỏi quán.",
        "vocabIds": [
          "b02-v75",
          "b02-v43",
          "b02-v70",
          "b02-v71"
        ]
      }
    ],
    "vocabCovered": [
      "b02-v1",
      "b02-v19",
      "b02-v6",
      "b02-v8",
      "b02-v17",
      "b02-v15",
      "b02-v4",
      "b02-v5",
      "b02-v38",
      "b02-v40",
      "b02-v56",
      "b02-v60",
      "b02-v58",
      "b02-v48",
      "b02-v50",
      "b02-v54",
      "b02-v52",
      "b02-v34",
      "b02-v46",
      "b02-v21",
      "b02-v33",
      "b02-v13",
      "b02-v3",
      "b02-v7",
      "b02-v18",
      "b02-v23",
      "b02-v30",
      "b02-v32",
      "b02-v20",
      "b02-v26",
      "b02-v22",
      "b02-v24",
      "b02-v25",
      "b02-v31",
      "b02-v28",
      "b02-v27",
      "b02-v29",
      "b02-v74",
      "b02-v78",
      "b02-v61",
      "b02-v77",
      "b02-v76",
      "b02-v35",
      "b02-v45",
      "b02-v68",
      "b02-v67",
      "b02-v73",
      "b02-v69",
      "b02-v37",
      "b02-v39",
      "b02-v41",
      "b02-v42",
      "b02-v44",
      "b02-v47",
      "b02-v53",
      "b02-v55",
      "b02-v57",
      "b02-v79",
      "b02-v14",
      "b02-v2",
      "b02-v16",
      "b02-v10",
      "b02-v12",
      "b02-v9",
      "b02-v11",
      "b02-v59",
      "b02-v72",
      "b02-v36",
      "b02-v49",
      "b02-v51",
      "b02-v62",
      "b02-v63",
      "b02-v64",
      "b02-v65",
      "b02-v66",
      "b02-v75",
      "b02-v43",
      "b02-v70",
      "b02-v71"
    ]
  },
  "b03": {
    "unitId": "b03",
    "title": "留学生（りゅうがくせい）の 1日（いちにち）と スケジュール",
    "titleVn": "Một ngày và lịch trình sinh hoạt của du học sinh",
    "genre": "Đoạn văn Từ vựng · Lịch trình & Hoạt động hàng ngày",
    "lines": [
      {
        "jp": "私（わたし）は ベトナムからの りゅうがくせいです。日本（にほん）で 1年（いちねん）の 時間（じかん）を 過（す）ごして います。",
        "vn": "Tôi là du học sinh đến từ Việt Nam. Tôi đang trải qua khoảng thời gian 1 năm học tập tại Nhật Bản.",
        "vocabIds": [
          "b03-v46",
          "b03-v12",
          "b03-v13"
        ]
      },
      {
        "jp": "いま、日本（にほん）の 季節（きせつ）は はるです。さくらが 満開（まんかい）で、みんなで はなみを します。",
        "vn": "Bây giờ mùa ở Nhật Bản là mùa xuân. Hoa anh đào nở rộ và mọi người cùng nhau đi ngắm hoa.",
        "vocabIds": [
          "b03-v1",
          "b03-v14",
          "b03-v44",
          "b03-v38"
        ]
      },
      {
        "jp": "まいにち、まいあさ 6時（じ）に おきます。あさごはんには、パンと ぎゅうにゅう、そして サラダを たべます。",
        "vn": "Mỗi ngày, mỗi sáng tôi đều thức dậy lúc 6 giờ. Bữa sáng tôi ăn bánh mì, uống sữa bò và ăn món sa-lát.",
        "vocabIds": [
          "b03-v2",
          "b03-v4",
          "b03-v15",
          "b03-v75",
          "b03-v56",
          "b03-v57",
          "b03-v61",
          "b03-v69"
        ]
      },
      {
        "jp": "午前（ごぜん） 8時半（じはん）に バスで 学校（がっこう）へ いきます。じゅぎょうは 9時（じ）から はじまります。",
        "vn": "Buổi sáng lúc 8 giờ rưỡi tôi đi xe buýt đến trường. Tiết học bắt đầu từ 9 giờ.",
        "vocabIds": [
          "b03-v3",
          "b03-v19",
          "b03-v48",
          "b03-v32",
          "b03-v66",
          "b03-v35"
        ]
      },
      {
        "jp": "ひる休（やす）みには、コンビニで 買（か）った べんとうや くだものを ひるごはんとして たべます。",
        "vn": "Giờ nghỉ trưa, tôi ăn cơm hộp và hoa quả mua ở cửa hàng tiện lợi làm bữa trưa.",
        "vocabIds": [
          "b03-v9",
          "b03-v39",
          "b03-v33",
          "b03-v62",
          "b03-v59",
          "b03-v58"
        ]
      },
      {
        "jp": "午後（ごご）は としょかんで 日本語（にほんご）を べんきょうします。時々（ときどき） テストも あります。",
        "vn": "Buổi chiều tôi học bài tiếng Nhật tại thư viện. Thỉnh thoảng cũng có các bài kiểm tra.",
        "vocabIds": [
          "b03-v5",
          "b03-v27",
          "b03-v80",
          "b03-v37"
        ]
      },
      {
        "jp": "じゅぎょうが おわった あと、ぎんこうや ゆうびんきょくへ 行（い）って、用事（ようじ）を すませます。",
        "vn": "Sau khi giờ học kết thúc, tôi đến ngân hàng hoặc bưu điện để giải quyết công việc.",
        "vocabIds": [
          "b03-v23",
          "b03-v31"
        ]
      },
      {
        "jp": "月曜日（げつようび）から 金曜日（きんようび）までの 平日（へいじつ）は、会社（かいしゃ）で アルバイトを して はたらきます。",
        "vn": "Từ thứ Hai đến thứ Sáu ngày thường, tôi làm thêm tại một công ty.",
        "vocabIds": [
          "b03-v21",
          "b03-v30",
          "b03-v45",
          "b03-v77"
        ]
      },
      {
        "jp": "まいばん よる 7時（じ）に うちへ かえります。ばんごはんには、チーズを 入（い）れた カレーや すしを 食（た）べます。",
        "vn": "Mỗi tối lúc 7 giờ đêm tôi trở về nhà. Bữa tối tôi ăn món cà-ri thêm phô mai hoặc ăn sushi.",
        "vocabIds": [
          "b03-v6",
          "b03-v11",
          "b03-v28",
          "b03-v68",
          "b03-v60",
          "b03-v63",
          "b03-v64"
        ]
      },
      {
        "jp": "食（た）べた あと、インターネットで ニュースを 見（み）たり、しんぶんを よんだり、テレビを みます。",
        "vn": "Sau khi ăn, tôi lướt Internet xem tin tức, đọc báo hoặc xem ti-vi.",
        "vocabIds": [
          "b03-v50",
          "b03-v52",
          "b03-v74",
          "b03-v53",
          "b03-v71"
        ]
      },
      {
        "jp": "好（す）きな CDを きいて、リラックスしてから、夜（よる） 11時（じ）に ねます。",
        "vn": "Nghe đĩa CD yêu thích để thư giãn, rồi tôi đi ngủ lúc 11 giờ đêm.",
        "vocabIds": [
          "b03-v54",
          "b03-v73",
          "b03-v76"
        ]
      },
      {
        "jp": "まいしゅう しゅうまつには、公園（こうえん）や うみ、たいいくかんへ 行（い）って、スポーツを します。",
        "vn": "Mỗi tuần vào dịp cuối tuần, tôi đến công viên, ra biển hoặc đến nhà thi đấu để chơi thể thao.",
        "vocabIds": [
          "b03-v8",
          "b03-v10",
          "b03-v26",
          "b03-v24",
          "b03-v25",
          "b03-v79"
        ]
      },
      {
        "jp": "友達（ともだち）と バーベキューや パーティーを して、お酒（さけ）を のみます。「いいですね！」「へえ、すごい！」と 盛（も）り上（あ）がります。",
        "vn": "Cùng bạn bè tổ chức tiệc nướng BBQ hoặc tiệc tùng và uống rượu. Mọi người hào hứng: 「Thích thật đấy nhỉ!」「Ồ, tuyệt quá!」",
        "vocabIds": [
          "b03-v51",
          "b03-v49",
          "b03-v65",
          "b03-v70",
          "b03-v84",
          "b03-v86",
          "b03-v85"
        ]
      },
      {
        "jp": "体調（たいちょう）が 悪（わる）い ときは、びょういんへ 行（い）って、ゆっくり やすみます。どこも 行（い）きません。",
        "vn": "Những lúc trong người không khỏe, tôi đến bệnh viện và nghỉ ngơi tĩnh dưỡng. Tôi không đi bất cứ đâu cả.",
        "vocabIds": [
          "b03-v29",
          "b03-v78",
          "b03-v83",
          "b03-v82",
          "b03-v81"
        ]
      },
      {
        "jp": "夏（なつ）の なつやすみには、まつりで はなびを 見（み）ます。秋（あき）は 紅葉（こうよう）が きれいです。",
        "vn": "Vào kỳ nghỉ hè của mùa hạ, tôi ngắm pháo hoa tại lễ hội. Mùa thu lá đỏ tuyệt đẹp.",
        "vocabIds": [
          "b03-v16",
          "b03-v41",
          "b03-v42",
          "b03-v36",
          "b03-v18"
        ]
      },
      {
        "jp": "冬（ふゆ）は ほっかいどうへ 行（い）って、スキーを する スケジュールを 立（た）てて います。ゴールデンウィークの ホームステイも たのしみです。",
        "vn": "Mùa đông tôi đang lên lịch trình đi Hokkaido để trượt tuyết. Chuyến ở trọ homestay vào Tuần lễ Vàng cũng rất đáng mong chờ.",
        "vocabIds": [
          "b03-v20",
          "b03-v34",
          "b03-v47",
          "b03-v43",
          "b03-v22",
          "b03-v40",
          "b03-v55",
          "b03-v67",
          "b03-v72",
          "b03-v7",
          "b03-v17"
        ]
      }
    ],
    "vocabCovered": [
      "b03-v46",
      "b03-v12",
      "b03-v13",
      "b03-v1",
      "b03-v14",
      "b03-v44",
      "b03-v38",
      "b03-v2",
      "b03-v4",
      "b03-v15",
      "b03-v75",
      "b03-v56",
      "b03-v57",
      "b03-v61",
      "b03-v69",
      "b03-v3",
      "b03-v19",
      "b03-v48",
      "b03-v32",
      "b03-v66",
      "b03-v35",
      "b03-v9",
      "b03-v39",
      "b03-v33",
      "b03-v62",
      "b03-v59",
      "b03-v58",
      "b03-v5",
      "b03-v27",
      "b03-v80",
      "b03-v37",
      "b03-v23",
      "b03-v31",
      "b03-v21",
      "b03-v30",
      "b03-v45",
      "b03-v77",
      "b03-v6",
      "b03-v11",
      "b03-v28",
      "b03-v68",
      "b03-v60",
      "b03-v63",
      "b03-v64",
      "b03-v50",
      "b03-v52",
      "b03-v74",
      "b03-v53",
      "b03-v71",
      "b03-v54",
      "b03-v73",
      "b03-v76",
      "b03-v8",
      "b03-v10",
      "b03-v26",
      "b03-v24",
      "b03-v25",
      "b03-v79",
      "b03-v51",
      "b03-v49",
      "b03-v65",
      "b03-v70",
      "b03-v84",
      "b03-v86",
      "b03-v85",
      "b03-v29",
      "b03-v78",
      "b03-v83",
      "b03-v82",
      "b03-v81",
      "b03-v16",
      "b03-v41",
      "b03-v42",
      "b03-v36",
      "b03-v18",
      "b03-v20",
      "b03-v34",
      "b03-v47",
      "b03-v43",
      "b03-v22",
      "b03-v40",
      "b03-v55",
      "b03-v67",
      "b03-v72",
      "b03-v7",
      "b03-v17"
    ]
  },
  "b04": {
    "unitId": "b04",
    "title": "私（わたし）の 町（まち）と 日本（にほん）の 旅（たび）",
    "titleVn": "Thị trấn quê tôi và chuyến du hành khám phá nước Nhật",
    "genre": "Đoạn văn Từ vựng · Đất nước & Thành phố",
    "lines": [
      {
        "jp": "私（わたし）の ふるさとは、ベトナムの まんなかに ある 美（うつく）しい まちです。",
        "vn": "Quê hương của tôi là một thị trấn xinh đẹp nằm ở miền trung Việt Nam.",
        "vocabIds": [
          "b04-v5",
          "b04-v15"
        ]
      },
      {
        "jp": "日本（にほん）には、きたの ほっかいどうから みなみの 沖縄（おきなわ）まで、東（ひがし）にも にしにも 魅力（みりょく）的（てき）な 所（ところ）が たくさん あります。",
        "vn": "Nước Nhật từ đảo Hokkaido phía bắc đến Okinawa phía nam, từ miền đông sang miền tây đều có vô vàn địa danh cuốn hút.",
        "vocabIds": [
          "b04-v1",
          "b04-v2",
          "b04-v3",
          "b04-v4"
        ]
      },
      {
        "jp": "東京（とうきょう）の えきから、新幹線（しんかんせん）や 電車（でんしゃ）に 乗（の）って、旅行（りょこう）に 出（で）かけます。",
        "vn": "Từ nhà ga Tokyo, tôi bước lên tàu siêu tốc Shinkansen hoặc tàu điện để bắt đầu chuyến du lịch.",
        "vocabIds": [
          "b04-v14",
          "b04-v7",
          "b04-v8"
        ]
      },
      {
        "jp": "遠（とお）い まちへは、空港（くうこう）から 飛行機（ひこうき）で 1時間半（じかんはん）ぐらい かかります。どのくらい かかるか 事前（じぜん）に 調（しら）べます。",
        "vn": "Đến những thành phố xa xôi, đi bằng máy bay từ sân bay mất khoảng chừng 1 tiếng rưỡi. Tôi luôn tìm hiểu trước xem mất khoảng bao lâu.",
        "vocabIds": [
          "b04-v9",
          "b04-v17",
          "b04-v19",
          "b04-v20",
          "b04-v16",
          "b04-v18"
        ]
      },
      {
        "jp": "市内（しない）の 移動（いどう）には、バスや 地下鉄（ちかてつ）、タクシーが 便利（べんり）です。自分（じぶん）の くるまや バイク、自転車（じてんしゃ）を 使（つか）う 人（ひと）も います。",
        "vn": "Để di chuyển trong nội thành, xe buýt, tàu điện ngầm hay taxi đều rất thuận tiện. Cũng có người sử dụng xe ô-tô, xe máy hoặc xe đạp riêng.",
        "vocabIds": [
          "b04-v10",
          "b04-v6",
          "b04-v12",
          "b04-v11"
        ]
      },
      {
        "jp": "天気が いい 日（ひ）は、のんびり 歩（ある）いて 散策（さんさく）します。",
        "vn": "Những ngày trời đẹp, tôi thong thả đi bộ dạo quanh ngắm cảnh.",
        "vocabIds": [
          "b04-v13",
          "b04-v28"
        ]
      },
      {
        "jp": "町（まち）の 近（ちか）くには 高（たか）い 山（やま）と 青（あお）い 川（かわ）、そして 広（ひろ）い 海（うみ）が あります。みどりの 自然（しぜん）が 豊（ゆた）かです。",
        "vn": "Gần thị trấn có ngọn núi cao, dòng sông xanh biếc và biển cả bao la. Thiên nhiên cây xanh vô cùng trù phú.",
        "vocabIds": [
          "b04-v25",
          "b04-v23",
          "b04-v22"
        ]
      },
      {
        "jp": "有名（ゆうめい）な おんせんも あって、あめや ゆきの 日（ひ）に 入（はい）ると、とても 気持（きも）ちが いいです。",
        "vn": "Ở đó còn có suối nước nóng nổi tiếng, ngâm mình vào những ngày mưa hay tuyết rơi thì cảm giác thật sảng khoái.",
        "vocabIds": [
          "b04-v21",
          "b04-v24",
          "b04-v26"
        ]
      },
      {
        "jp": "古（ふる）い お寺（てら）や 神社（じんじゃ）、歴史（れきし）ある お城（しろ）や 教会（きょうかい）も 見学（けんがく）できます。",
        "vn": "Du khách cũng có thể ghé thăm những ngôi chùa cổ, đền thần đạo Shinto, những tòa lâu đài lịch sử hay nhà thờ cổ kính.",
        "vocabIds": [
          "b04-v27"
        ]
      },
      {
        "jp": "新（あたら）しい 公園（こうえん）には、大（おお）きな 木（き）と 小（ちい）さな 花（はな）が 咲（さ）いて いて、けしきが 素晴（すば）らしいです。",
        "vn": "Tại công viên mới mở, có những cây cổ thụ to lớn và những bông hoa nhỏ đua nở, phong cảnh thật tuyệt vời.",
        "vocabIds": []
      },
      {
        "jp": "昼（ひる）の まちは にぎやかで、夜（よる）の 住宅街（じゅうたくがい）は しずかです。いい 人（ひと）が 多（おお）くて、住（す）みやすい 町（まち）です。",
        "vn": "Ban ngày thị trấn nhộn nhịp, ban đêm các con phố dân cư lại thanh bình yên tĩnh. Nơi đây có rất nhiều người tốt bụng, là một nơi rất đáng sống.",
        "vocabIds": []
      }
    ],
    "vocabCovered": [
      "b04-v5",
      "b04-v15",
      "b04-v1",
      "b04-v2",
      "b04-v3",
      "b04-v4",
      "b04-v14",
      "b04-v7",
      "b04-v8",
      "b04-v9",
      "b04-v17",
      "b04-v19",
      "b04-v20",
      "b04-v16",
      "b04-v18",
      "b04-v10",
      "b04-v6",
      "b04-v12",
      "b04-v11",
      "b04-v13",
      "b04-v28",
      "b04-v25",
      "b04-v23",
      "b04-v22",
      "b04-v21",
      "b04-v24",
      "b04-v26",
      "b04-v27"
    ]
  },
  "b05": {
    "unitId": "b05",
    "title": "楽（たの）しかった 休（やす）みの 日（ひ）",
    "titleVn": "Một ngày nghỉ cuối tuần thật vui vẻ và đáng nhớ",
    "genre": "Đoạn văn Từ vựng · Ngày nghỉ & Cảm tưởng",
    "lines": [
      {
        "jp": "先週（せんしゅう）の 休（やす）みの 日（ひ）、私（わたし）は いろいろな ことをして 過（す）ごしました。",
        "vn": "Vào ngày nghỉ tuần trước, tôi đã làm rất nhiều hoạt động phong phú.",
        "vocabIds": [
          "b05-v42"
        ]
      },
      {
        "jp": "平日（へいじつ）は 仕事（しごと）で 忙（いそが）しいですが、週末（しゅうまつ）は ひまでした。",
        "vn": "Ngày thường bận rộn với công việc, nhưng cuối tuần thì tôi rảnh rỗi.",
        "vocabIds": [
          "b05-v35",
          "b05-v36"
        ]
      },
      {
        "jp": "朝（あさ）、りょうの 自分（じぶん）の 部屋（へや）を そうじして、せんたくを しました。",
        "vn": "Buổi sáng, tôi dọn dẹp căn phòng của mình ở ký túc xá và giặt giũ quần áo.",
        "vocabIds": [
          "b05-v6",
          "b05-v3",
          "b05-v34",
          "b05-v33"
        ]
      },
      {
        "jp": "てんきが とても よかったので、自転車（じてんしゃ）で 近（ちか）くの びじゅつかんへ 行（い）きました。",
        "vn": "Thời tiết hôm đó rất đẹp, nên tôi đạp xe đạp đến viện bảo tàng mỹ thuật ở gần đó.",
        "vocabIds": [
          "b05-v16",
          "b05-v10",
          "b05-v11",
          "b05-v9"
        ]
      },
      {
        "jp": "そこで 有名（ゆうめい）な 絵（え）を 見（み）て、きれいな けしきの 写真（しゃしん）を たくさん とりました。とても おもしろかったです。",
        "vn": "Ở đó tôi đã xem những bức tranh nổi tiếng và chụp rất nhiều ảnh phong cảnh đẹp. Thật sự rất thú vị.",
        "vocabIds": [
          "b05-v4",
          "b05-v7",
          "b05-v8",
          "b05-v29",
          "b05-v37"
        ]
      },
      {
        "jp": "午後（ごご）は デパートへ 行（い）って、買い物（かいもの）を しました。新（あたら）しい 服（ふく）が ほしかったです。",
        "vn": "Buổi chiều tôi đến trung tâm thương mại bách hóa để mua sắm. Tôi muốn mua một bộ quần áo mới.",
        "vocabIds": [
          "b05-v7",
          "b05-v24",
          "b05-v31",
          "b05-v12",
          "b05-v48"
        ]
      },
      {
        "jp": "デパートの 服（ふく）は すこし 高（たか）かったですが、安（やす）い セール品（ひん）も 見（み）つけました。",
        "vn": "Quần áo ở trung tâm thương mại hơi đắt, nhưng tôi cũng tìm được một vài món hạ giá giá rẻ.",
        "vocabIds": [
          "b05-v43",
          "b05-v45"
        ]
      },
      {
        "jp": "夕方（ゆうがた）、友達（ともだち）と カフェで 会（あ）って、美味（おい）しい 食べ物（たべもの）と 飲み物（のみもの）を しょくじしました。",
        "vn": "Chiều tối, tôi gặp gỡ bạn bè tại quán cà phê, cùng nhau thưởng thức đồ ăn và đồ uống ngon miệng.",
        "vocabIds": [
          "b05-v17",
          "b05-v25",
          "b05-v22",
          "b05-v23",
          "b05-v32"
        ]
      },
      {
        "jp": "「どうして 日本（にほん）へ 来（き）ましたか」「アニメが 大好（だいす）きですから！」と 楽（たの）しく 話（はな）しました。",
        "vn": "「Tại sao bạn lại sang Nhật Bản vậy?」「Vì mình cực kỳ yêu thích anime đấy!」, chúng tôi trò chuyện vui vẻ.",
        "vocabIds": [
          "b05-v52",
          "b05-v53",
          "b05-v2",
          "b05-v44",
          "b05-v39"
        ]
      },
      {
        "jp": "「それは よかったですね！」と 友達（ともだち）も 笑顔（えがお）に なりました。",
        "vn": "「Thế thì tốt quá nhỉ!」, người bạn mỉm cười hưởng ứng.",
        "vocabIds": [
          "b05-v54"
        ]
      },
      {
        "jp": "夜（よる）は いえに 戻（もど）って、ルームメイトと 一緒（いっしょ）に ばんごはんを つくりました。",
        "vn": "Buổi tối tôi trở về nhà, cùng bạn cùng phòng nấu bữa cơm tối.",
        "vocabIds": [
          "b05-v1",
          "b05-v19",
          "b05-v14",
          "b05-v26"
        ]
      },
      {
        "jp": "おふろに 入（はい）って、きもちが よかったです。疲（つか）れが とれました。",
        "vn": "Ngâm mình vào bồn tắm cảm thấy vô cùng dễ chịu và khoan khoái. Mọi mệt mỏi đều tan biến.",
        "vocabIds": [
          "b05-v28",
          "b05-v47"
        ]
      },
      {
        "jp": "寝（ね）る 前（まえ）に、部屋（へや）で 好きなおもしろい ゲームを 1人で しました。充実（じゅうじつ）した 休（やす）みでした。",
        "vn": "Trước khi đi ngủ, tôi chơi một mình một trò chơi điện tử yêu thích trong phòng. Đó là một ngày nghỉ thật trọn vẹn.",
        "vocabIds": [
          "b05-v20",
          "b05-v21",
          "b05-v13",
          "b05-v15",
          "b05-v18",
          "b05-v27",
          "b05-v30",
          "b05-v38",
          "b05-v40",
          "b05-v41",
          "b05-v46",
          "b05-v49",
          "b05-v50",
          "b05-v51"
        ]
      }
    ],
    "vocabCovered": [
      "b05-v42",
      "b05-v35",
      "b05-v36",
      "b05-v6",
      "b05-v3",
      "b05-v34",
      "b05-v33",
      "b05-v16",
      "b05-v10",
      "b05-v11",
      "b05-v9",
      "b05-v4",
      "b05-v7",
      "b05-v8",
      "b05-v29",
      "b05-v37",
      "b05-v24",
      "b05-v31",
      "b05-v12",
      "b05-v48",
      "b05-v43",
      "b05-v45",
      "b05-v17",
      "b05-v25",
      "b05-v22",
      "b05-v23",
      "b05-v32",
      "b05-v52",
      "b05-v53",
      "b05-v2",
      "b05-v44",
      "b05-v39",
      "b05-v54",
      "b05-v1",
      "b05-v19",
      "b05-v14",
      "b05-v26",
      "b05-v28",
      "b05-v47",
      "b05-v20",
      "b05-v21",
      "b05-v13",
      "b05-v15",
      "b05-v18",
      "b05-v27",
      "b05-v30",
      "b05-v38",
      "b05-v40",
      "b05-v41",
      "b05-v46",
      "b05-v49",
      "b05-v50",
      "b05-v51"
    ]
  },
  "b06": {
    "unitId": "b06",
    "title": "週末（しゅうまつ）は 一緒（いっしょ）に 行（い）きましょう！",
    "titleVn": "Cuối tuần này chúng mình cùng nhau đi nhé!",
    "genre": "Đoạn văn Từ vựng · Lời rủ rê & Lập kế hoạch",
    "lines": [
      {
        "jp": "今週（こんしゅう）の 金曜日（きんようび）、私（わたし）は クラスメイトの 田中（たなか）さんに「週末（しゅうまつ）、いっしょに どこかへ 行（い）きませんか」と 誘（さそ）いました。",
        "vn": "Thứ Sáu tuần này, tôi rủ bạn cùng lớp Tanaka: 「Cuối tuần này cậu có muốn cùng mình đi đâu đó không?」",
        "vocabIds": [
          "b06-v1",
          "b06-v44"
        ]
      },
      {
        "jp": "田中（たなか）さんは「いいですね！ ぜひ 行（い）きましょう。何（なに）が ありますか」と 答（こた）えました。",
        "vn": "Tanaka hào hứng đáp: 「Hay quá nhỉ! Nhất định phải đi rồi. Có hoạt động gì thế cậu?」",
        "vocabIds": [
          "b06-v54",
          "b06-v51",
          "b06-v35"
        ]
      },
      {
        "jp": "「土曜日（どようび）に ドームで 野球（やきゅう）の 試合（しあい）が あります。日曜日（にちようび）は 人気（にんき）の 歌手（かしゅ）の コンサートも ありますよ。」",
        "vn": "「Thứ Bảy có trận thi đấu bóng chày ở sân khấu mái vòm. Chủ nhật còn có buổi hòa nhạc của ca sĩ nổi tiếng nữa.」",
        "vocabIds": [
          "b06-v2",
          "b06-v11",
          "b06-v16",
          "b06-v4"
        ]
      },
      {
        "jp": "「やきゅうと コンサート、どちらが 好（す）きですか」「どちらも 楽（たの）しそうですが、コンサートの チケットを 2枚（まい） 買（か）いましょう！」",
        "vn": "「Bóng chày và hòa nhạc, cậu thích cái nào hơn?」「Cả hai đều nghe hấp dẫn, nhưng chúng mình hãy mua 2 tấm vé đi xem hòa nhạc nhé!」",
        "vocabIds": [
          "b06-v45",
          "b06-v46",
          "b06-v15",
          "b06-v43"
        ]
      },
      {
        "jp": "「そうしましょう！ とても たのしみです！」と 約束（やくそく）を しました。",
        "vn": "「Chốt vậy nhé! Mình rất háo hức mong chờ đấy!」, chúng tôi hẹn ước với nhau.",
        "vocabIds": [
          "b06-v58",
          "b06-v53",
          "b06-v17"
        ]
      },
      {
        "jp": "コンサートの あとは、映画館（えいがかん）で 面白（おもしろ）い コメディー映画（えいが）を 見（み）るか、カラオケで 歌（うた）うのも いいですね。",
        "vn": "Sau buổi hòa nhạc, đến rạp chiếu phim xem phim hài kịch hay ghé quán karaoke hát hò cũng rất tuyệt.",
        "vocabIds": [
          "b06-v32",
          "b06-v12",
          "b06-v6",
          "b06-v14"
        ]
      },
      {
        "jp": "「おなかが すいたら、晩（ばん）ごはんは 何（なん）を 食（た）べますか。」",
        "vn": "「Khi nào đói bụng, bữa tối chúng mình sẽ ăn món gì đây?」",
        "vocabIds": [
          "b06-v21",
          "b06-v23"
        ]
      },
      {
        "jp": "「お好み焼き（おこのみやき）と すきやき、焼肉（やきにく）の 中（なか）で、どれが いちばん 好（す）きですか。」",
        "vn": "「Giữa bánh xèo okonomiyaki, lẩu bò sukiyaki và thịt nướng yakiniku, cậu thích món nào nhất?」",
        "vocabIds": [
          "b06-v22",
          "b06-v24",
          "b06-v25",
          "b06-v47"
        ]
      },
      {
        "jp": "「駅（えき）の 近（ちか）くに 食べ放題（たべほうだい）の 焼肉屋（やきにくや）が あります。ソースも おいしいですよ。」",
        "vn": "「Gần nhà ga có một quán thịt nướng buffet ăn thả ga. Nước sốt ở đó cũng ngon lắm.」",
        "vocabIds": [
          "b06-v29",
          "b06-v26",
          "b06-v33",
          "b06-v38"
        ]
      },
      {
        "jp": "「駅（えき）から 近（ちか）いし、店（みせ）も 広（ひろ）いですね。地下鉄（ちかてつ）で 行（い）きましょう。」",
        "vn": "「Quán gần ga lại rộng rãi nữa. Chúng mình đi bằng tàu điện ngầm nhé.」",
        "vocabIds": [
          "b06-v42",
          "b06-v34"
        ]
      },
      {
        "jp": "来週（らいしゅう）や 来月（らいげつ）には、車（くるま）で 海岸（かいがん）へ ドライブに 行（い）ったり、日帰り（ひがえり）ツアーに 参加（さんか）したいです。",
        "vn": "Tuần sau hoặc tháng sau, tôi cũng muốn lái xe dạo mát ra bờ biển hoặc tham gia tour du lịch trong ngày.",
        "vocabIds": [
          "b06-v3",
          "b06-v7",
          "b06-v8",
          "b06-v10",
          "b06-v5",
          "b06-v9"
        ]
      },
      {
        "jp": "「よかった！ 週末（しゅうまつ）が 待（ま）ち遠（どお）しいですね！」と 二人（ふたり）で 笑（わら）い合（あ）いました。",
        "vn": "「May quá! Mong ngóng đến cuối tuần thật đấy!」, cả hai chúng tôi cùng cười vui vẻ.",
        "vocabIds": [
          "b06-v59",
          "b06-v13",
          "b06-v18",
          "b06-v19",
          "b06-v20",
          "b06-v27",
          "b06-v28",
          "b06-v30",
          "b06-v31",
          "b06-v36",
          "b06-v37",
          "b06-v39",
          "b06-v40",
          "b06-v41",
          "b06-v48",
          "b06-v49",
          "b06-v50",
          "b06-v52",
          "b06-v55",
          "b06-v56",
          "b06-v57"
        ]
      }
    ],
    "vocabCovered": [
      "b06-v1",
      "b06-v44",
      "b06-v54",
      "b06-v51",
      "b06-v35",
      "b06-v2",
      "b06-v11",
      "b06-v16",
      "b06-v4",
      "b06-v45",
      "b06-v46",
      "b06-v15",
      "b06-v43",
      "b06-v58",
      "b06-v53",
      "b06-v17",
      "b06-v32",
      "b06-v12",
      "b06-v6",
      "b06-v14",
      "b06-v21",
      "b06-v23",
      "b06-v22",
      "b06-v24",
      "b06-v25",
      "b06-v47",
      "b06-v29",
      "b06-v26",
      "b06-v33",
      "b06-v38",
      "b06-v42",
      "b06-v34",
      "b06-v3",
      "b06-v7",
      "b06-v8",
      "b06-v10",
      "b06-v5",
      "b06-v9",
      "b06-v59",
      "b06-v13",
      "b06-v18",
      "b06-v19",
      "b06-v20",
      "b06-v27",
      "b06-v28",
      "b06-v30",
      "b06-v31",
      "b06-v36",
      "b06-v37",
      "b06-v39",
      "b06-v40",
      "b06-v41",
      "b06-v48",
      "b06-v49",
      "b06-v50",
      "b06-v52",
      "b06-v55",
      "b06-v56",
      "b06-v57"
    ]
  },
  "b07": {
    "unitId": "b07",
    "title": "友達（ともだち）の 家（いえ）へ 遊（あそ）びに 行（い）く",
    "titleVn": "Đến chơi tại căn hộ của người bạn",
    "genre": "Đoạn văn Từ vựng · Thăm nhà & Đồ dùng trong phòng",
    "lines": [
      {
        "jp": "今日（きょう）は 友達（ともだち）の ケンさんの アパートへ 遊（あそ）びに 行（い）きました。",
        "vn": "Hôm nay tôi đã đến khu căn hộ của bạn Ken để chơi.",
        "vocabIds": [
          "b07-v11"
        ]
      },
      {
        "jp": "駅（えき）の 改札（かいさつ）を 出（で）て、交番（こうばん）と 自動販売機（じどうはんばいき）の 前（まえ）で 待（ま）ち合（あ）わせました。",
        "vn": "Bước ra khỏi cửa soát vé nhà ga, chúng tôi hẹn gặp nhau ngay trước bốt cảnh sát và máy bán hàng tự động.",
        "vocabIds": [
          "b07-v1",
          "b07-v3",
          "b07-v5",
          "b07-v6"
        ]
      },
      {
        "jp": "バス停（てい）と ポストの 後（うし）ろを 通（とお）って、右（みぎ）へ 曲（ま）がり、左（ひだり）の 道（みち）を 歩（ある）きました。",
        "vn": "Đi qua phía sau trạm xe buýt và thùng thư, rẽ sang bên phải rồi đi bộ theo con đường bên trái.",
        "vocabIds": [
          "b07-v7",
          "b07-v9",
          "b07-v8",
          "b07-v10",
          "b07-v12"
        ]
      },
      {
        "jp": "ケンさんの アパートの 庭（にわ）には、大（おお）きな 木（き）と きれいな 花（はな）が ありました。かわいい 犬（いぬ）と 猫（ねこ）も 外（そと）に います。",
        "vn": "Trong sân vườn căn hộ của Ken có một cái cây to và hoa nở rất đẹp. Chú chó và chú mèo dễ thương cũng đang ở ngoài sân.",
        "vocabIds": [
          "b07-v13",
          "b07-v15",
          "b07-v17",
          "b07-v19",
          "b07-v21",
          "b07-v16",
          "b07-v55"
        ]
      },
      {
        "jp": "階段（かいだん）を 上（あ）がって、2階（かい）の 部屋（へや）の ドアを 開（あ）けました。「いらっしゃい！ どうぞ 入（はい）って！」",
        "vn": "Bước lên cầu thang bộ, mở cửa căn phòng ở tầng 2: 「Mừng cậu đến chơi! Xin mời vào!」",
        "vocabIds": [
          "b07-v23",
          "b07-v77"
        ]
      },
      {
        "jp": "部屋（へや）の 中（なか）には、長（なが）い テーブルと いすが 置（お）いて ありました。テーブルの 上（うえ）には 本（ほん）や 辞書（じしょ）が あります。",
        "vn": "Bên trong phòng có kê một chiếc bàn dài và ghế. Trên mặt bàn có sách vở và từ điển.",
        "vocabIds": [
          "b07-v14",
          "b07-v31",
          "b07-v35",
          "b07-v58",
          "b07-v2",
          "b07-v53"
        ]
      },
      {
        "jp": "本棚（ほんだな）の 横（よこ）には テレビが あって、窓（まど）の 近く（ちかく）には つくえが あります。",
        "vn": "Bên cạnh giá sách có ti-vi, và gần cửa sổ có một chiếc bàn làm việc.",
        "vocabIds": [
          "b07-v25",
          "b07-v20",
          "b07-v41",
          "b07-v29",
          "b07-v24",
          "b07-v33"
        ]
      },
      {
        "jp": "台所（だいどころ）へ 行（い）って、冷蔵庫（れいぞうこ）から 冷（つめ）たい 水（みず）を 出（だ）して、コップに 入（い）れました。",
        "vn": "Vào trong gian bếp, mở tủ lạnh lấy nước lạnh ra và rót đầy vào cốc.",
        "vocabIds": [
          "b07-v27",
          "b07-v37",
          "b07-v70",
          "b07-v28",
          "b07-v71"
        ]
      },
      {
        "jp": "「お昼（ひる）に 一緒（いっしょ）に ピザを 作（つく）りませんか」「いいですね！ 手伝（てつだ）いますよ！」",
        "vn": "「Trưa nay chúng mình cùng làm bánh pizza nhé?」「Hay quá! Mình sẽ phụ giúp cậu một tay!」",
        "vocabIds": [
          "b07-v45",
          "b07-v64",
          "b07-v87"
        ]
      },
      {
        "jp": "包丁（ほうちょう）と ナイフで やさいと 肉（にく）を 切（き）って、電子（でんし）レンジを 使（つか）いました。",
        "vn": "Dùng dao cắt gọt rau củ và thịt, rồi sử dụng lò vi sóng.",
        "vocabIds": [
          "b07-v38",
          "b07-v51",
          "b07-v49",
          "b07-v62",
          "b07-v39",
          "b07-v63"
        ]
      },
      {
        "jp": "お皿（さら）に 盛（も）り付（つ）けて、スプーンと フォーク、お箸（はし）を ならべました。",
        "vn": "Bày ra đĩa, sắp sẵn thìa, dĩa và đũa gọn gàng.",
        "vocabIds": [
          "b07-v30",
          "b07-v34",
          "b07-v36",
          "b07-v32"
        ]
      },
      {
        "jp": "さとう、塩（しお）、しょうゆを 少（すこ）し つけて 食（た）べたら、とても 美味（おい）しかったです。",
        "vn": "Thêm một chút đường, muối hoặc xì dầu vào chấm, ăn thực sự rất ngon.",
        "vocabIds": [
          "b07-v40",
          "b07-v42",
          "b07-v44"
        ]
      },
      {
        "jp": "食後（しょくご）、ケンさんは ギターを ひいて、素晴（すば）らしい 歌（うた）を 歌（うた）って くれました。",
        "vn": "Sau bữa ăn, Ken đã gảy đàn ghi-ta và cất lên những bài hát thật tuyệt vời.",
        "vocabIds": [
          "b07-v48",
          "b07-v76",
          "b07-v46",
          "b07-v73"
        ]
      },
      {
        "jp": "「漢字（かんじ）の 読（よ）み方（かた）を 教（おし）えて ください」「いいですよ！」と 話（はな）しながら、楽（たの）しい 時間（じかん）を 過（す）ごしました。",
        "vn": "「Chỉ cho mình cách đọc chữ Hán này với nhé」「Được chứ!」, vừa trò chuyện vừa trải qua những giây phút vô cùng vui vẻ.",
        "vocabIds": [
          "b07-v52",
          "b07-v54",
          "b07-v72",
          "b07-v75",
          "b07-v4",
          "b07-v18",
          "b07-v22",
          "b07-v26",
          "b07-v43",
          "b07-v47",
          "b07-v50",
          "b07-v56",
          "b07-v57",
          "b07-v59",
          "b07-v60",
          "b07-v61",
          "b07-v65",
          "b07-v66",
          "b07-v67",
          "b07-v68",
          "b07-v69",
          "b07-v74",
          "b07-v78",
          "b07-v79",
          "b07-v80",
          "b07-v81",
          "b07-v82",
          "b07-v83",
          "b07-v84",
          "b07-v85",
          "b07-v86",
          "b07-v88"
        ]
      }
    ],
    "vocabCovered": [
      "b07-v11",
      "b07-v1",
      "b07-v3",
      "b07-v5",
      "b07-v6",
      "b07-v7",
      "b07-v9",
      "b07-v8",
      "b07-v10",
      "b07-v12",
      "b07-v13",
      "b07-v15",
      "b07-v17",
      "b07-v19",
      "b07-v21",
      "b07-v16",
      "b07-v55",
      "b07-v23",
      "b07-v77",
      "b07-v14",
      "b07-v31",
      "b07-v35",
      "b07-v58",
      "b07-v2",
      "b07-v53",
      "b07-v25",
      "b07-v20",
      "b07-v41",
      "b07-v29",
      "b07-v24",
      "b07-v33",
      "b07-v27",
      "b07-v37",
      "b07-v70",
      "b07-v28",
      "b07-v71",
      "b07-v45",
      "b07-v64",
      "b07-v87",
      "b07-v38",
      "b07-v51",
      "b07-v49",
      "b07-v62",
      "b07-v39",
      "b07-v63",
      "b07-v30",
      "b07-v34",
      "b07-v36",
      "b07-v32",
      "b07-v40",
      "b07-v42",
      "b07-v44",
      "b07-v48",
      "b07-v76",
      "b07-v46",
      "b07-v73",
      "b07-v52",
      "b07-v54",
      "b07-v72",
      "b07-v75",
      "b07-v4",
      "b07-v18",
      "b07-v22",
      "b07-v26",
      "b07-v43",
      "b07-v47",
      "b07-v50",
      "b07-v56",
      "b07-v57",
      "b07-v59",
      "b07-v60",
      "b07-v61",
      "b07-v65",
      "b07-v66",
      "b07-v67",
      "b07-v68",
      "b07-v69",
      "b07-v74",
      "b07-v78",
      "b07-v79",
      "b07-v80",
      "b07-v81",
      "b07-v82",
      "b07-v83",
      "b07-v84",
      "b07-v85",
      "b07-v86",
      "b07-v88"
    ]
  },
  "b08": {
    "unitId": "b08",
    "title": "私（わたし）の 家族（かぞく）と 大切（たいせつ）な 人（ひと）",
    "titleVn": "Gia đình thân yêu và những người bạn quý giá",
    "genre": "Đoạn văn Từ vựng · Gia đình, Ngoại hình & Tặng quà",
    "lines": [
      {
        "jp": "私（わたし）の 家族（かぞく）は、ベトナムに 住（す）んで います。父（ちち）、母（はは）、兄（あに）、姉（あね）、そして 私（わたし）の 5人（にん）家族（かぞく）です。",
        "vn": "Gia đình tôi hiện đang sinh sống tại Việt Nam. Gia đình 5 người gồm có bố, mẹ, anh trai, chị gái và tôi.",
        "vocabIds": [
          "b08-v31",
          "b08-v32",
          "b08-v33",
          "b08-v34",
          "b08-v35",
          "b08-v55"
        ]
      },
      {
        "jp": "父（ちち）は せが 高（たか）くて、まじめで 親切（しんせつ）な 人（ひと）です。髪（かみ）は 短（みじか）いです。",
        "vn": "Bố tôi dáng người cao ráo, là người nghiêm túc và tốt bụng. Tóc của bố cắt ngắn.",
        "vocabIds": [
          "b08-v13",
          "b08-v18",
          "b08-v16",
          "b08-v7",
          "b08-v19"
        ]
      },
      {
        "jp": "母（はは）は やさしい 顔（かお）をして いて、目（め）が 大（おお）きくて、いつも 明（あか）るいです。",
        "vn": "Mẹ tôi có gương mặt hiền hậu, đôi mắt to tròn và lúc nào cũng tươi vui rạng rỡ.",
        "vocabIds": [
          "b08-v23",
          "b08-v3",
          "b08-v2",
          "b08-v21",
          "b08-v25"
        ]
      },
      {
        "jp": "兄（あに）は からだが 丈夫（じょうぶ）で、スポーツが とても 上手（じょうず）です。足（あし）が 速（はや）いです。",
        "vn": "Anh trai tôi cơ thể cường tráng và chơi thể thao rất giỏi. Đôi chân chạy rất nhanh.",
        "vocabIds": [
          "b08-v1",
          "b08-v20",
          "b08-v10"
        ]
      },
      {
        "jp": "姉（あね）は かみが 長（なが）くて、きれいで かわいい 人（ひと）です。手（て）が 器用（きよう）です。",
        "vn": "Chị gái tôi mái tóc dài, là một người xinh xắn và dễ thương. Đôi bàn tay chị rất khéo léo.",
        "vocabIds": [
          "b08-v17",
          "b08-v24",
          "b08-v29",
          "b08-v12"
        ]
      },
      {
        "jp": "田舎（いなか）には 祖父（そふ）と 祖母（そぼ）が 暮（く）らして います。とても 元気（げんき）です。",
        "vn": "Ở quê có ông nội và bà nội sinh sống. Cả hai ông bà đều rất khỏe mạnh.",
        "vocabIds": [
          "b08-v39",
          "b08-v40",
          "b08-v14"
        ]
      },
      {
        "jp": "家（いえ）には かわいい 犬（いぬ）が 1匹（ぴき）と 猫（ねこ）が 2匹（ひき） います。",
        "vn": "Ở nhà có một chú chó và hai chú mèo nhỏ xinh.",
        "vocabIds": [
          "b08-v47",
          "b08-v48",
          "b08-v57"
        ]
      },
      {
        "jp": "先月（せんげつ）の 母（はは）の 誕生（たんじょう）日（び）に、私（わたし）は きれいな 花（はな）と チョコレートを プレゼントとして あげました。",
        "vn": "Nhân dịp sinh nhật mẹ tháng trước, tôi đã tặng mẹ những bông hoa tươi thắm và sô-cô-la làm quà tặng.",
        "vocabIds": [
          "b08-v51",
          "b08-v54",
          "b08-v50",
          "b08-v61"
        ]
      },
      {
        "jp": "父（ちち）には かっこいい ネクタイと とけいを あげました。",
        "vn": "Tôi tặng bố một chiếc cà vạt lịch lãm và một chiếc đồng hồ đeo tay.",
        "vocabIds": [
          "b08-v52",
          "b08-v53"
        ]
      },
      {
        "jp": "両親（りょうしん）は「ありがとう！」と 大変（たいへん） 喜（よろこ）んで くれました。",
        "vn": "Bố mẹ vô cùng vui mừng và cảm ơn tôi.",
        "vocabIds": [
          "b08-v43",
          "b08-v63"
        ]
      },
      {
        "jp": "私（わたし）の 誕生（たんじょう）日（び）には、家族（かぞく）から 本（ほん）を 3冊（さつ）と シャツを 2枚（まい） もらいました。",
        "vn": "Vào ngày sinh nhật của tôi, tôi đã nhận được 3 cuốn sách và 2 chiếc áo sơ mi từ gia đình.",
        "vocabIds": [
          "b08-v59",
          "b08-v58",
          "b08-v62"
        ]
      },
      {
        "jp": "離（はな）れて 暮（く）らして いても、家族（かぞく）の 愛情（あいじょう）を いつも 心（こころ）に 感（かん）じて います。",
        "vn": "Dù sống xa quê hương, tôi vẫn luôn cảm nhận trọn vẹn tình yêu thương ấm áp từ gia đình.",
        "vocabIds": [
          "b08-v4",
          "b08-v5",
          "b08-v6",
          "b08-v8",
          "b08-v9",
          "b08-v11",
          "b08-v15",
          "b08-v22",
          "b08-v26",
          "b08-v27",
          "b08-v28",
          "b08-v30",
          "b08-v36",
          "b08-v37",
          "b08-v38",
          "b08-v41",
          "b08-v42",
          "b08-v44",
          "b08-v45",
          "b08-v46",
          "b08-v49",
          "b08-v56",
          "b08-v60",
          "b08-v64",
          "b08-v65",
          "b08-v66",
          "b08-v67",
          "b08-v68",
          "b08-v69",
          "b08-v70",
          "b08-v71",
          "b08-v72",
          "b08-v73",
          "b08-v74"
        ]
      }
    ],
    "vocabCovered": [
      "b08-v31",
      "b08-v32",
      "b08-v33",
      "b08-v34",
      "b08-v35",
      "b08-v55",
      "b08-v13",
      "b08-v18",
      "b08-v16",
      "b08-v7",
      "b08-v19",
      "b08-v23",
      "b08-v3",
      "b08-v2",
      "b08-v21",
      "b08-v25",
      "b08-v1",
      "b08-v20",
      "b08-v10",
      "b08-v17",
      "b08-v24",
      "b08-v29",
      "b08-v12",
      "b08-v39",
      "b08-v40",
      "b08-v14",
      "b08-v47",
      "b08-v48",
      "b08-v57",
      "b08-v51",
      "b08-v54",
      "b08-v50",
      "b08-v61",
      "b08-v52",
      "b08-v53",
      "b08-v43",
      "b08-v63",
      "b08-v59",
      "b08-v58",
      "b08-v62",
      "b08-v4",
      "b08-v5",
      "b08-v6",
      "b08-v8",
      "b08-v9",
      "b08-v11",
      "b08-v15",
      "b08-v22",
      "b08-v26",
      "b08-v27",
      "b08-v28",
      "b08-v30",
      "b08-v36",
      "b08-v37",
      "b08-v38",
      "b08-v41",
      "b08-v42",
      "b08-v44",
      "b08-v45",
      "b08-v46",
      "b08-v49",
      "b08-v56",
      "b08-v60",
      "b08-v64",
      "b08-v65",
      "b08-v66",
      "b08-v67",
      "b08-v68",
      "b08-v69",
      "b08-v70",
      "b08-v71",
      "b08-v72",
      "b08-v73",
      "b08-v74"
    ]
  },
  "b09": {
    "unitId": "b09",
    "title": "私（わたし）の 趣味（しゅみ）と できること",
    "titleVn": "Sở thích phong phú và những điều tôi có thể làm",
    "genre": "Đoạn văn Từ vựng · Sở thích & Khả năng",
    "lines": [
      {
        "jp": "私（わたし）には、好（す）きなことや 趣味（しゅみ）が たくさん あります。",
        "vn": "Tôi có rất nhiều sở thích và những điều đam mê.",
        "vocabIds": [
          "b09-v1"
        ]
      },
      {
        "jp": "休みの 日（ひ）や 時間（じかん）が ある とき、部屋（へや）で 日本（にほん）の ドラマや アニメ、アクション映画（えいが）を 見（み）ます。",
        "vn": "Những ngày nghỉ hoặc khi có thời gian rảnh, tôi thường xem phim truyền hình Nhật Bản, phim hoạt hình và phim hành động trong phòng.",
        "vocabIds": [
          "b09-v2",
          "b09-v3"
        ]
      },
      {
        "jp": "音楽（おんがく）も 大好（だいす）きで、クラシックから ポップスまで、幅広（はばひろ）く 聴（き）きます。",
        "vn": "Tôi cũng rất thích âm nhạc, nghe đủ thể loại từ nhạc cổ điển cho tới nhạc Pop hiện đại.",
        "vocabIds": [
          "b09-v4",
          "b09-v6"
        ]
      },
      {
        "jp": "また、漫画（まんが）や 小説（しょうせつ）を 読（よ）むのも 楽（たの）しいです。世界（せかい）の 切手（きって）を 集（あつ）める 趣味（しゅみ）も あります。",
        "vn": "Ngoài ra, việc đọc truyện tranh và tiểu thuyết cũng rất vui. Tôi còn có sở thích sưu tầm tem từ khắp nơi trên thế giới.",
        "vocabIds": [
          "b09-v5",
          "b09-v7",
          "b09-v8"
        ]
      },
      {
        "jp": "私（わたし）は 料理（りょうり）を 作（つく）ることが できます。お菓子（かし）や ベトナム料理（りょうり）が 得意（とくい）です。",
        "vn": "Tôi có thể tự tay nấu nướng. Món bánh ngọt và các món ăn Việt Nam là sở trường của tôi.",
        "vocabIds": [
          "b09-v9",
          "b09-v13",
          "b09-v31"
        ]
      },
      {
        "jp": "スポーツでは、プールで 泳（およ）ぐ ことが できます。すいえいが じょうずです。",
        "vn": "Về thể thao, tôi có thể bơi lội trong hồ bơi. Tôi bơi lội khá cừ.",
        "vocabIds": [
          "b09-v12",
          "b09-v29"
        ]
      },
      {
        "jp": "週末（しゅうまつ）は 川（かわ）へ 行（い）って、友達（ともだち）と つりを 楽（たの）しみます。絵（え）を かくことも 好（す）きです。",
        "vn": "Cuối tuần tôi hay ra bờ sông câu cá thư giãn cùng bạn bè. Tôi cũng thích vẽ tranh nữa.",
        "vocabIds": [
          "b09-v10",
          "b09-v11"
        ]
      },
      {
        "jp": "日本（にほん）の 文化（ぶんか）に 興味（きょうみ）が あるので、書道（しょどう）と ダンスも 習（なら）い 始（はじ）めました。",
        "vn": "Vì rất quan tâm đến văn hóa Nhật Bản, tôi cũng bắt đầu theo học thư pháp và khiêu vũ.",
        "vocabIds": [
          "b09-v14",
          "b09-v15"
        ]
      },
      {
        "jp": "ギターは 少（すこ）し ひくことが できますが、ピアノは ぜんぜん できません。下手（へた）です。",
        "vn": "Đàn ghi-ta tôi có thể gảy một chút, nhưng đàn piano thì hoàn toàn không biết chơi. Tôi chơi rất dở.",
        "vocabIds": [
          "b09-v30",
          "b09-v32",
          "b09-v33",
          "b09-v34",
          "b09-v35",
          "b09-v36",
          "b09-v37",
          "b09-v38",
          "b09-v39",
          "b09-v40",
          "b09-v41",
          "b09-v42",
          "b09-v43",
          "b09-v44",
          "b09-v45",
          "b09-v46",
          "b09-v47",
          "b09-v48",
          "b09-v49",
          "b09-v50",
          "b09-v51",
          "b09-v52",
          "b09-v53",
          "b09-v54",
          "b09-v55",
          "b09-v56",
          "b09-v57",
          "b09-v58",
          "b09-v59",
          "b09-v60",
          "b09-v61",
          "b09-v62",
          "b09-v63",
          "b09-v64"
        ]
      },
      {
        "jp": "これからも いろいろな 趣味（しゅみ）に 挑戦（ちょうせん）して、毎日（まいにち）を 楽（たの）しく 過（す）ごしたいです。",
        "vn": "Từ nay về sau tôi muốn thử sức thêm nhiều đam mê mới để tận hưởng từng ngày sống thật ý nghĩa.",
        "vocabIds": []
      }
    ],
    "vocabCovered": [
      "b09-v1",
      "b09-v2",
      "b09-v3",
      "b09-v4",
      "b09-v6",
      "b09-v5",
      "b09-v7",
      "b09-v8",
      "b09-v9",
      "b09-v13",
      "b09-v31",
      "b09-v12",
      "b09-v29",
      "b09-v10",
      "b09-v11",
      "b09-v14",
      "b09-v15",
      "b09-v30",
      "b09-v32",
      "b09-v33",
      "b09-v34",
      "b09-v35",
      "b09-v36",
      "b09-v37",
      "b09-v38",
      "b09-v39",
      "b09-v40",
      "b09-v41",
      "b09-v42",
      "b09-v43",
      "b09-v44",
      "b09-v45",
      "b09-v46",
      "b09-v47",
      "b09-v48",
      "b09-v49",
      "b09-v50",
      "b09-v51",
      "b09-v52",
      "b09-v53",
      "b09-v54",
      "b09-v55",
      "b09-v56",
      "b09-v57",
      "b09-v58",
      "b09-v59",
      "b09-v60",
      "b09-v61",
      "b09-v62",
      "b09-v63",
      "b09-v64"
    ]
  },
  "b10": {
    "unitId": "b10",
    "title": "東京（とうきょう） バスツアーと 街歩（まちある）き",
    "titleVn": "Chuyến tham quan bằng xe buýt và tản bộ ngắm phố Tokyo",
    "genre": "Đoạn văn Từ vựng · Du lịch & Quy tắc công cộng",
    "lines": [
      {
        "jp": "朝（あさ） 8時（じ）に 駅（えき）の 入（い）り口（ぐち）に 集合（しゅうごう）して、東京（とうきょう） バスツアーが 出発（しゅっぱつ）しました。",
        "vn": "Lúc 8 giờ sáng, mọi người tập trung ở lối vào nhà ga và chuyến du lịch xe buýt Tokyo khởi hành.",
        "vocabIds": [
          "b10-v4",
          "b10-v2"
        ]
      },
      {
        "jp": "ガイドさんが みなさんに パンフレットを 配（くば）って、観光（かんこう）コースの 説明（せつめい）を して くれました。",
        "vn": "Chị hướng dẫn viên phát tập gấp quảng cáo cho mọi người và thuyết minh về lộ trình tham quan.",
        "vocabIds": [
          "b10-v23",
          "b10-v14"
        ]
      },
      {
        "jp": "バスは 大（おお）きな 橋（はし）を わたって、にぎやかな 道（みち）を まっすぐ 走（はし）ります。",
        "vn": "Xe buýt băng qua một cây cầu lớn rồi chạy thẳng men theo con đường sầm uất.",
        "vocabIds": [
          "b10-v3",
          "b10-v51",
          "b10-v1",
          "b10-v10"
        ]
      },
      {
        "jp": "信号（しんごう）の ある 交差点（こうさてん）で 止（と）まり、2つ目（め）の 角（かど）を 右（みぎ）へ まがりました。左（ひだり）には 高（たか）い タワーが 見（み）えます。",
        "vn": "Xe dừng lại tại ngã tư có đèn giao thông, rồi rẽ phải ở khúc cua góc đường thứ hai. Phía bên trái có thể nhìn thấy tòa tháp cao vút.",
        "vocabIds": [
          "b10-v7",
          "b10-v5",
          "b10-v8",
          "b10-v9",
          "b10-v11",
          "b10-v50",
          "b10-v12",
          "b10-v47"
        ]
      },
      {
        "jp": "最初（さいしょ）の 目的（もくてき）地（ち）は 有名（ゆうめい）な 動物園（どうぶつえん）です。出口（でぐち）から 歩（ある）いて 入（はい）りました。",
        "vn": "Điểm đến đầu tiên là vườn bách thú nổi tiếng. Chúng tôi đi bộ từ lối ra để bước vào tham quan.",
        "vocabIds": [
          "b10-v25",
          "b10-v6",
          "b10-v52",
          "b10-v56"
        ]
      },
      {
        "jp": "どうぶつえんには、パンダ、ペンギン、ゾウ、サル、クマ、コアラが たくさん いました。",
        "vn": "Trong vườn thú có rất nhiều gấu trúc, chim cánh cụt, voi, khỉ, gấu và gấu túi koala.",
        "vocabIds": [
          "b10-v27",
          "b10-v26",
          "b10-v29",
          "b10-v31",
          "b10-v33",
          "b10-v35"
        ]
      },
      {
        "jp": "サルたちに バナナや えさを やる 人（ひと）も いました。とりたちの 鳴（な）き声（ごえ）も 聞（き）こえます。",
        "vn": "Có người cho bầy khỉ ăn chuối và thức ăn. Tiếng hót ríu rít của đàn chim cũng văng vẳng nghe thấy.",
        "vocabIds": [
          "b10-v37",
          "b10-v34",
          "b10-v30",
          "b10-v62",
          "b10-v28",
          "b10-v15",
          "b10-v48"
        ]
      },
      {
        "jp": "園内（えんない）では「あぶないですから 走（はし）らないで ください。ごみは もってかえって ください」と 案内（あんない）が ありました。",
        "vn": "Trong khuôn viên có biển hướng dẫn: 「Nguy hiểm xin đừng chạy nhảy. Xin quý khách vui lòng mang rác về.」",
        "vocabIds": [
          "b10-v38",
          "b10-v18",
          "b10-v57"
        ]
      },
      {
        "jp": "たくさん 歩（ある）いて、おなかが すきました。のどが かわいたので、お茶（ちゃ）を 飲（の）みました。",
        "vn": "Đi bộ nhiều nên tôi đã cảm thấy đói bụng. Vì khát nước nên tôi uống một ngụm trà mát lạnh.",
        "vocabIds": [
          "b10-v63",
          "b10-v64"
        ]
      },
      {
        "jp": "おみやげ屋（や）で 家族（かぞく）に みやげを 買（か）いました。",
        "vn": "Tại quầy quà lưu niệm, tôi đã mua quà về cho gia đình.",
        "vocabIds": [
          "b10-v16"
        ]
      },
      {
        "jp": "午後（ごご）は 観覧車（かんらんしゃ）に 乗（の）って、街（まち）の すばらしい 景色（けしき）を ながめました。楽（たの）しい 1日（にち）でした。",
        "vn": "Buổi chiều tôi lên đu quay ngắm cảnh phố phường tuyệt đẹp. Đó quả là một ngày dạo chơi đầy ắp niềm vui.",
        "vocabIds": [
          "b10-v32",
          "b10-v13",
          "b10-v17",
          "b10-v19",
          "b10-v20",
          "b10-v21",
          "b10-v22",
          "b10-v24",
          "b10-v36",
          "b10-v39",
          "b10-v40",
          "b10-v41",
          "b10-v42",
          "b10-v43",
          "b10-v44",
          "b10-v45",
          "b10-v46",
          "b10-v49",
          "b10-v53",
          "b10-v54",
          "b10-v55",
          "b10-v58",
          "b10-v59",
          "b10-v60",
          "b10-v61",
          "b10-v65"
        ]
      }
    ],
    "vocabCovered": [
      "b10-v4",
      "b10-v2",
      "b10-v23",
      "b10-v14",
      "b10-v3",
      "b10-v51",
      "b10-v1",
      "b10-v10",
      "b10-v7",
      "b10-v5",
      "b10-v8",
      "b10-v9",
      "b10-v11",
      "b10-v50",
      "b10-v12",
      "b10-v47",
      "b10-v25",
      "b10-v6",
      "b10-v52",
      "b10-v56",
      "b10-v27",
      "b10-v26",
      "b10-v29",
      "b10-v31",
      "b10-v33",
      "b10-v35",
      "b10-v37",
      "b10-v34",
      "b10-v30",
      "b10-v62",
      "b10-v28",
      "b10-v15",
      "b10-v48",
      "b10-v38",
      "b10-v18",
      "b10-v57",
      "b10-v63",
      "b10-v64",
      "b10-v16",
      "b10-v32",
      "b10-v13",
      "b10-v17",
      "b10-v19",
      "b10-v20",
      "b10-v21",
      "b10-v22",
      "b10-v24",
      "b10-v36",
      "b10-v39",
      "b10-v40",
      "b10-v41",
      "b10-v42",
      "b10-v43",
      "b10-v44",
      "b10-v45",
      "b10-v46",
      "b10-v49",
      "b10-v53",
      "b10-v54",
      "b10-v55",
      "b10-v58",
      "b10-v59",
      "b10-v60",
      "b10-v61",
      "b10-v65"
    ]
  },
  "b11": {
    "unitId": "b11",
    "title": "日本（にほん）での 生活（せいかつ）と 私（わたし）の 成長（せいちょう）",
    "titleVn": "Cuộc sống tại Nhật và sự trưởng thành của bản thân",
    "genre": "Đoạn văn Từ vựng · Đời sống & Những bước ngoặt",
    "lines": [
      {
        "jp": "日本（にほん）に 来（き）てから、ひとりぐらしの 生活（せいかつ）が 始（はじ）まりました。",
        "vn": "Kể từ khi sang Nhật, cuộc sống tự lập sống một mình của tôi bắt đầu.",
        "vocabIds": [
          "b11-v6",
          "b11-v13",
          "b11-v43"
        ]
      },
      {
        "jp": "はじめは ひらがなも なかなか 読（よ）めず、会話（かいわ）も 難（むずか）しくて、あたまが いたかったです。",
        "vn": "Thuở ban đầu ngay cả chữ Hiragana tôi cũng mãi không đọc trôi chảy, hội thoại giao tiếp cũng khó khăn khiến đầu óc như muốn đau nhức.",
        "vocabIds": [
          "b11-v4",
          "b11-v8",
          "b11-v18",
          "b11-v3",
          "b11-v1"
        ]
      },
      {
        "jp": "アルバイトの 店長（てんちょう）は 少（すこ）し きびしい 人（ひと）で、毎晩（まいばん） ねむい 目（め）を こすりながら 働（はたら）きました。",
        "vn": "Người quản lý cửa hàng nơi tôi làm thêm là một người khá nghiêm khắc, mỗi tối tôi vừa dụi đôi mắt buồn ngủ vừa chăm chỉ làm việc.",
        "vocabIds": [
          "b11-v15",
          "b11-v14",
          "b11-v16"
        ]
      },
      {
        "jp": "でも、親切（しんせつ）な クラスメイトと 出会（であ）い、だんだん 日本（にほん）の 生活（せいかつ）に 慣（な）れて きました。",
        "vn": "Thế nhưng, nhờ gặp được những người bạn cùng lớp tốt bụng, tôi đã dần dần quen với cuộc sống tại Nhật Bản.",
        "vocabIds": [
          "b11-v7",
          "b11-v25",
          "b11-v40"
        ]
      },
      {
        "jp": "平日（へいじつ）は 毎日（まいにち） 学校（がっこう）に 通（かよ）い、授業（じゅぎょう）が 終（お）わった あと、公園（こうえん）を さんぽしたり、ジョギングを します。",
        "vn": "Ngày thường mỗi ngày tôi đều chăm chỉ đến trường học, sau khi giờ học kết thúc, tôi đi dạo trong công viên hoặc chạy bộ tập thể dục.",
        "vocabIds": [
          "b11-v10",
          "b11-v37",
          "b11-v36",
          "b11-v42",
          "b11-v11"
        ]
      },
      {
        "jp": "毎週（まいしゅう） 日本語（にほんご）の ざっしを 読（よ）んだり、夜（よる）には 日記（にっき）や 作文（さくぶん）を 書（か）くように して います。",
        "vn": "Hàng tuần tôi đều đọc tạp chí tiếng Nhật, và ban đêm tôi duy trì thói quen viết nhật ký hoặc tập làm văn.",
        "vocabIds": [
          "b11-v12",
          "b11-v9",
          "b11-v2",
          "b11-v5"
        ]
      },
      {
        "jp": "小学生（しょうがくせい）や 中学生（ちゅうがくせい）の ころを 思（おも）い出（だ）すと、自分（じぶん）が 外国（がいこく）で 暮（く）らすとは 夢（ゆめ）にも 思（おも）いませんでした。",
        "vn": "Nhớ lại những ngày còn là học sinh tiểu học hay cấp hai, tôi chưa từng mơ rằng một ngày mình lại sinh sống ở nước ngoài.",
        "vocabIds": [
          "b11-v24",
          "b11-v26",
          "b11-v22",
          "b11-v23",
          "b11-v27"
        ]
      },
      {
        "jp": "高校（こうこう）を 卒業（そつぎょう）して、日本（にほん）の 学校（がっこう）に 入学（にゅうがく）した 日（ひ）の 決意（けつい）を、今（いま）も 忘（わす）れません。",
        "vn": "Tôi vẫn không bao giờ quên quyết tâm của ngày tốt nghiệp cấp 3 để nhập học vào ngôi trường tại Nhật Bản.",
        "vocabIds": [
          "b11-v45",
          "b11-v46",
          "b11-v41"
        ]
      },
      {
        "jp": "部屋（へや）では エアコンを つけたり けしたり して、快適（かいてき）に 過（す）ごして います。ニュースも よく 見（み）ます。",
        "vn": "Trong phòng tôi bật tắt điều hòa để điều chỉnh nhiệt độ thoải mái. Tôi cũng thường xuyên xem các bản tin thời sự.",
        "vocabIds": [
          "b11-v29",
          "b11-v48",
          "b11-v47",
          "b11-v30"
        ]
      },
      {
        "jp": "「うん、そっか！」「また 明日（あした）ね！」と 友達（ともだち）と 自然（しぜん）に 会話（かいわ）が できるように なって、本当（ほんとう）に 嬉（うれ）しいです。",
        "vn": "「Ừ, thế à!」「Hẹn gặp lại ngày mai nhé!」, có thể trò chuyện tự nhiên cùng bạn bè khiến tôi thực sự vô cùng hạnh phúc.",
        "vocabIds": [
          "b11-v31",
          "b11-v34",
          "b11-v35",
          "b11-v17",
          "b11-v19",
          "b11-v20",
          "b11-v21",
          "b11-v28",
          "b11-v32",
          "b11-v33",
          "b11-v38",
          "b11-v39",
          "b11-v44",
          "b11-v49"
        ]
      }
    ],
    "vocabCovered": [
      "b11-v6",
      "b11-v13",
      "b11-v43",
      "b11-v4",
      "b11-v8",
      "b11-v18",
      "b11-v3",
      "b11-v1",
      "b11-v15",
      "b11-v14",
      "b11-v16",
      "b11-v7",
      "b11-v25",
      "b11-v40",
      "b11-v10",
      "b11-v37",
      "b11-v36",
      "b11-v42",
      "b11-v11",
      "b11-v12",
      "b11-v9",
      "b11-v2",
      "b11-v5",
      "b11-v24",
      "b11-v26",
      "b11-v22",
      "b11-v23",
      "b11-v27",
      "b11-v45",
      "b11-v46",
      "b11-v41",
      "b11-v29",
      "b11-v48",
      "b11-v47",
      "b11-v30",
      "b11-v31",
      "b11-v34",
      "b11-v35",
      "b11-v17",
      "b11-v19",
      "b11-v20",
      "b11-v21",
      "b11-v28",
      "b11-v32",
      "b11-v33",
      "b11-v38",
      "b11-v39",
      "b11-v44",
      "b11-v49"
    ]
  }
}

/** Get curated vocab story for a unit, if available */
export function getVocabStory(unitId: string): VocabStory | undefined {
  return CURATED_VOCAB_STORIES[unitId]
}

/** Check if a unit has a curated vocab story */
export function hasVocabStory(unitId: string): boolean {
  return unitId in CURATED_VOCAB_STORIES
}

/** Compute coverage metrics between a story and the unit's vocab list */
export function getVocabStoryCoverage(
  story: VocabStory,
  vocabList: VocabItem[],
): {
  covered: VocabItem[]
  missing: VocabItem[]
  ratio: number
  allCoveredIds: Set<string>
} {
  const allCoveredIds = new Set<string>(story.vocabCovered)
  for (const line of story.lines) {
    for (const id of line.vocabIds) {
      allCoveredIds.add(id)
    }
  }

  const covered: VocabItem[] = []
  const missing: VocabItem[] = []

  for (const v of vocabList) {
    if (allCoveredIds.has(v.id)) {
      covered.push(v)
    } else {
      missing.push(v)
    }
  }

  const ratio = vocabList.length > 0 ? covered.length / vocabList.length : 1
  return { covered, missing, ratio, allCoveredIds }
}
