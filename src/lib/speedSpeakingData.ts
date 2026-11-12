export interface SpeedSpeakingQuestion {
  id: string
  q: string
  qVn: string
  hint: string
  aJp: string
  aVn: string
}

export interface SpeedSpeakingTopic {
  id: string
  title: string
  shortTitle: string
  badge: string
  description: string
  category: 'comprehension' | 'grammar'
  passage?: {
    jp: string
    vn: string
  }
  questions: SpeedSpeakingQuestion[]
}

/** 11 chủ đề câu hỏi đọc hiểu / nghe hiểu theo bài đọc (Bài 11 - R01..R11) */
export const READING_COMPREHENSION_TOPICS: SpeedSpeakingTopic[] = [
  {
    "id": "b11-r01",
    "title": "R01: Cuộc sống ở Nhật (日本の生活)",
    "shortTitle": "Cuộc sống ở Nhật",
    "badge": "Bài 11 · R01",
    "description": "Nghe hiểu câu chuyện du học sinh kể về những ngày đầu sang Nhật, đi siêu thị, phân loại rác và làm thêm.",
    "category": "comprehension",
    "passage": {
      "jp": "私は 1年前に 日本へ 来ました。 日本へ 来た とき、日本語が ほとんど わかりませんでした。 初めは 生活が 本当に 大変でした。 スーパーで 買い物を する とき、何が 何だか わかりませんでした。 塩と 砂糖を 間違えて 買った ことも あります。 ごみの 出し方も 難しかったです。 日本では ごみを 分けて、決まった 日に 出します。 前は ベトナムで 家族と 住んで いましたが、今は 一人暮らしです。 料理も 洗濯も 自分で します。 夜、一人で ご飯を 食べる とき、とても 寂しかったです。 寂しい とき、家族に 電話したり、国の 歌を 聞いたり しました。 でも、だんだん 日本の 生活に 慣れました。 クラスメイトや 先生が とても 親切でしたから。 今は 毎日 自転車で 学校に 通って います。 授業は 九時に 始まって、三時に 終わります。 授業の 後、図書館で 勉強したり、アルバイトに 行ったり します。 アルバイトは レストランで して います。 肉や 魚や 貝の 料理を 作ります。 重い 荷物を 運ぶ とき、力が 要ります。 店長は 厳しいですが、仕事を よく 教えて くれます。 初めは お客さんの 日本語が なかなか 聞き取れませんでした。 でも、今は 簡単な 会話が できます。 前は 納豆が 嫌いでしたが、今は 毎朝 食べて います。 体に いいですから。 毎晩、寝る 前に 日本語で 日記を 書いて います。 日記を 書く とき、わからない 言葉は 辞書で 調べます。 それで、言葉を たくさん 覚えました。 休みの 日は、友達と 出かけたり、部屋で ゆっくり したり します。 先月、初めて 日本人の 友達の 家に 行きました。 友達の お母さんが 手作りの 料理を ごちそうして くれました。 日本の 生活は 大変な ことも ありますが、今は 毎日 楽しいです。 来年は 大学に 入学したいです。 そして、もっと 日本語が 上手に なりたいです。",
      "vn": "Tôi đến Nhật 1 năm trước. Khi đến Nhật, tôi hầu như không hiểu tiếng Nhật. Ban đầu cuộc sống thật sự vất vả. Khi mua sắm ở siêu thị, tôi không biết cái gì là cái gì. Tôi còn từng mua nhầm muối và đường. Cách đổ rác cũng khó. Ở Nhật phải phân loại rác và đổ vào ngày quy định. Trước đây tôi sống với gia đình ở Việt Nam, giờ sống một mình. Nấu ăn và giặt giũ đều tự làm. Tối ăn cơm một mình, tôi rất buồn. Khi buồn, tôi gọi điện cho gia đình, nghe nhạc quê nhà... Nhưng dần dần tôi đã quen cuộc sống ở Nhật. Vì bạn cùng lớp và thầy cô rất tốt bụng. Bây giờ ngày nào tôi cũng đi xe đạp đến trường. Giờ học bắt đầu lúc 9 giờ, kết thúc lúc 3 giờ. Sau giờ học tôi học ở thư viện, đi làm thêm... Tôi làm thêm ở nhà hàng. Tôi nấu các món thịt, cá, sò ốc. Khi bê vác hành lý nặng, cần có sức lực. Quản lý nghiêm khắc nhưng chỉ việc rất tận tình. Ban đầu tôi mãi không nghe ra tiếng Nhật của khách. Nhưng giờ tôi nói chuyện đơn giản được. Trước tôi ghét natto, giờ sáng nào cũng ăn. Vì tốt cho sức khỏe. Tối nào trước khi ngủ tôi cũng viết nhật ký tiếng Nhật. Khi viết nhật ký, từ không biết tôi tra từ điển. Nhờ vậy tôi đã nhớ được nhiều từ. Ngày nghỉ tôi đi chơi với bạn, thư giãn trong phòng... Tháng trước lần đầu tôi đến nhà một người bạn Nhật. Mẹ bạn ấy mời tôi ăn món tự nấu. Cuộc sống ở Nhật có lúc vất vả nhưng giờ ngày nào cũng vui. Năm sau tôi muốn vào đại học. Và tôi muốn giỏi tiếng Nhật hơn nữa."
    },
    "questions": [
      {
        "id": "b11-r01-q1",
        "q": "この 人は いつ 日本へ 来ましたか。",
        "qVn": "Người này đến Nhật khi nào?",
        "hint": "Đến 1 năm trước.",
        "aJp": "1年前に 来ました。",
        "aVn": "Đến 1 năm trước."
      },
      {
        "id": "b11-r01-q2",
        "q": "日本へ 来た とき、日本語が わかりましたか。",
        "qVn": "Khi đến Nhật, người này có hiểu tiếng Nhật không?",
        "hint": "Không, hầu như không hiểu.",
        "aJp": "いいえ、ほとんど わかりませんでした。",
        "aVn": "Không, hầu như không hiểu."
      },
      {
        "id": "b11-r01-q3",
        "q": "スーパーで 何を 間違えて 買いましたか。",
        "qVn": "Người này đã mua nhầm gì ở siêu thị?",
        "hint": "Mua nhầm muối và đường.",
        "aJp": "塩と 砂糖を 間違えて 買いました。",
        "aVn": "Mua nhầm muối và đường."
      },
      {
        "id": "b11-r01-q4",
        "q": "日本では ごみを どう やって 出しますか。",
        "qVn": "Ở Nhật đổ rác như thế nào?",
        "hint": "Phân loại rác rồi đổ vào ngày quy định.",
        "aJp": "ごみを 分けて、決まった 日に 出します。",
        "aVn": "Phân loại rác rồi đổ vào ngày quy định."
      },
      {
        "id": "b11-r01-q5",
        "q": "前は 誰と 住んで いましたか。今は どうですか。",
        "qVn": "Trước đây sống với ai? Bây giờ thì sao?",
        "hint": "Trước sống với gia đình ở Việt Nam, giờ sống một mình.",
        "aJp": "前は ベトナムで 家族と 住んで いましたが、今は 一人暮らしです。",
        "aVn": "Trước sống với gia đình ở Việt Nam, giờ sống một mình."
      },
      {
        "id": "b11-r01-q6",
        "q": "寂しい とき、何を しましたか。",
        "qVn": "Khi buồn, người này đã làm gì?",
        "hint": "Gọi điện cho gia đình, nghe nhạc quê nhà...",
        "aJp": "家族に 電話したり、国の 歌を 聞いたり しました。",
        "aVn": "Gọi điện cho gia đình, nghe nhạc quê nhà..."
      },
      {
        "id": "b11-r01-q7",
        "q": "どうして だんだん 日本の 生活に 慣れましたか。",
        "qVn": "Vì sao dần dần quen được cuộc sống ở Nhật?",
        "hint": "Vì bạn cùng lớp và thầy cô rất tốt bụng.",
        "aJp": "クラスメイトや 先生が とても 親切でしたから。",
        "aVn": "Vì bạn cùng lớp và thầy cô rất tốt bụng."
      },
      {
        "id": "b11-r01-q8",
        "q": "毎日 何で 学校に 通って いますか。",
        "qVn": "Hằng ngày đi học bằng gì?",
        "hint": "Đi bằng xe đạp.",
        "aJp": "自転車で 通って います。",
        "aVn": "Đi bằng xe đạp."
      },
      {
        "id": "b11-r01-q9",
        "q": "授業は 何時から 何時までですか。",
        "qVn": "Giờ học từ mấy giờ đến mấy giờ?",
        "hint": "Từ 9 giờ đến 3 giờ.",
        "aJp": "9時から 3時までです。",
        "aVn": "Từ 9 giờ đến 3 giờ."
      },
      {
        "id": "b11-r01-q10",
        "q": "アルバイトの 店長は どんな 人ですか。",
        "qVn": "Quản lý chỗ làm thêm là người thế nào?",
        "hint": "Nghiêm khắc nhưng chỉ việc rất tận tình.",
        "aJp": "厳しいですが、仕事を よく 教えて くれます。",
        "aVn": "Nghiêm khắc nhưng chỉ việc rất tận tình."
      },
      {
        "id": "b11-r01-q11",
        "q": "前は 納豆が 好きでしたか。今は どうですか。",
        "qVn": "Trước có thích natto không? Giờ thì sao?",
        "hint": "Không, trước ghét, nhưng giờ sáng nào cũng ăn.",
        "aJp": "いいえ、前は 嫌いでしたが、今は 毎朝 食べて います。",
        "aVn": "Không, trước ghét, nhưng giờ sáng nào cũng ăn."
      },
      {
        "id": "b11-r01-q12",
        "q": "来年、何を したいですか。",
        "qVn": "Năm sau người này muốn làm gì?",
        "hint": "Muốn vào đại học.",
        "aJp": "大学に 入学したいです。",
        "aVn": "Muốn vào đại học."
      }
    ]
  },
  {
    "id": "b11-r02",
    "title": "R02: Cuối tuần làm gì? (週末 どう する？)",
    "shortTitle": "Cuối tuần làm gì?",
    "badge": "Bài 11 · R02",
    "description": "Đoạn tin nhắn rủ nhau đi cà phê Sakura trước ga, sự cố muộn tàu và kế hoạch hẹn gặp.",
    "category": "comprehension",
    "passage": {
      "jp": "キム:「リン、今週の 土曜日、暇？」 リン:「うん、暇。どうして？」 キム:「駅前に 新しい カフェが できたよ。一緒に 行かない？」 リン:「いいね！ 行く行く。何時に する？」 キム:「十一時は どう？ 昼ご飯も そこで 食べよう。」 リン:「OK。あ、ナムも 誘う？」 キム:「うん、誘おう。私が メッセージ 送る。」 キム:「ナム、土曜日 十一時に リンと カフェ 行くけど、来る？」 ナム:「ごめん、土曜日は アルバイト。」 キム:「そっか。日曜日は？」 ナム:「日曜日は 大丈夫。でも、午前は 洗濯したり、掃除したり する。」 キム:「じゃ、日曜日の 午後は？ 二時ごろ。」 ナム:「うん、いいよ。」 キム:「リン、ナムは 土曜日 だめだって。日曜日の 二時は どう？」 リン:「日曜日か……。午前は ジョギング する けど、午後は 暇だよ。」 キム:「よかった！ じゃ、日曜日の 二時に 駅の 北口で。」 リン:「了解。カフェの 名前は？」 キム:「『さくらカフェ』。ケーキが すごく おいしいって。」 リン:「楽しみ！ 写真、たくさん 撮ろう。」 の 1時半） ナム:「ごめん！ 電車が 遅れて、十五分ぐらい 遅れる。」 キム:「大丈夫。先に カフェに 入って 待って る ね。」 ナム:「ありがとう。すぐ 行く！」 ） リン:「今日は 楽しかった！ ケーキ、本当に おいしかったね。」 ナム:「うん。また 三人で 行こう。」 キム:「次は ナムが 店を 選んでね。」 ナム:「わかった。考えて おく。」 リン:「じゃ、また 明日、学校で！」",
      "vn": "Kim: \"Linh ơi, thứ Bảy tuần này rảnh không?\" Linh: \"Ừ, rảnh. Sao thế?\" Kim: \"Trước ga mới mở quán cà-phê. Đi cùng không?\" Linh: \"Hay đấy! Đi đi. Mấy giờ?\" Kim: \"11 giờ thì sao? Ăn trưa ở đó luôn.\" Linh: \"OK. À, rủ cả Nam không?\" Kim: \"Ừ, rủ đi. Để mình nhắn.\" (Kim và Nam) Kim: \"Nam ơi, thứ Bảy 11 giờ mình với Linh đi cà-phê, đến không?\" Nam: \"Xin lỗi, thứ Bảy mình đi làm thêm.\" Kim: \"Thế à. Chủ nhật thì sao?\" Nam: \"Chủ nhật thì được. Nhưng buổi sáng mình giặt giũ, dọn dẹp.\" Kim: \"Vậy chiều Chủ nhật? Khoảng 2 giờ.\" Nam: \"Ừ, được.\" (Kim và Linh) Kim: \"Linh ơi, Nam nói thứ Bảy không được. Chủ nhật 2 giờ thì sao?\" Linh: \"Chủ nhật à... Buổi sáng mình chạy bộ, nhưng chiều thì rảnh.\" Kim: \"Tốt quá! Vậy 2 giờ Chủ nhật ở cửa Bắc ga nhé.\" Linh: \"OK. Tên quán là gì?\" Kim: \"'Sakura Café'. Nghe nói bánh ngon lắm.\" Linh: \"Háo hức quá! Chụp nhiều ảnh nhé.\" (1 rưỡi Chủ nhật) Nam: \"Xin lỗi! Tàu trễ, mình đến muộn khoảng 15 phút.\" Kim: \"Không sao. Bọn mình vào quán trước đợi nhé.\" Nam: \"Cảm ơn. Mình đến ngay!\" (Buổi tối) Linh: \"Hôm nay vui quá! Bánh ngon thật nhỉ.\" Nam: \"Ừ. Lại đi 3 đứa nhé.\" Kim: \"Lần sau Nam chọn quán nhé.\" Nam: \"Biết rồi. Để mình nghĩ.\" Linh: \"Vậy mai gặp ở trường nhé!\""
    },
    "questions": [
      {
        "id": "b11-r02-q1",
        "q": "キムさんは リンさんを どこへ 誘いましたか。",
        "qVn": "Kim rủ Linh đi đâu?",
        "hint": "Rủ đến quán cà-phê mới trước ga.",
        "aJp": "駅前の 新しい カフェへ 誘いました。",
        "aVn": "Rủ đến quán cà-phê mới trước ga."
      },
      {
        "id": "b11-r02-q2",
        "q": "初めは 何曜日の 何時に 行く 予定でしたか。",
        "qVn": "Ban đầu định đi thứ mấy, mấy giờ?",
        "hint": "Định đi lúc 11 giờ thứ Bảy.",
        "aJp": "土曜日の 11時に 行く 予定でした。",
        "aVn": "Định đi lúc 11 giờ thứ Bảy."
      },
      {
        "id": "b11-r02-q3",
        "q": "ナムさんは どうして 土曜日は だめでしたか。",
        "qVn": "Vì sao thứ Bảy Nam không được?",
        "hint": "Vì có ca làm thêm.",
        "aJp": "アルバイトが ありましたから。",
        "aVn": "Vì có ca làm thêm."
      },
      {
        "id": "b11-r02-q4",
        "q": "ナムさんは 日曜日の 午前、何を しますか。",
        "qVn": "Sáng Chủ nhật Nam làm gì?",
        "hint": "Giặt giũ, dọn dẹp...",
        "aJp": "洗濯したり、掃除したり します。",
        "aVn": "Giặt giũ, dọn dẹp..."
      },
      {
        "id": "b11-r02-q5",
        "q": "リンさんは 日曜日の 午前、何を しますか。",
        "qVn": "Sáng Chủ nhật Linh làm gì?",
        "hint": "Chạy bộ.",
        "aJp": "ジョギングを します。",
        "aVn": "Chạy bộ."
      },
      {
        "id": "b11-r02-q6",
        "q": "3人は いつ、どこで 会う ことに しましたか。",
        "qVn": "Ba người hẹn gặp khi nào, ở đâu?",
        "hint": "Hẹn 2 giờ Chủ nhật ở cửa Bắc ga.",
        "aJp": "日曜日の 2時に 駅の 北口で 会う ことに しました。",
        "aVn": "Hẹn 2 giờ Chủ nhật ở cửa Bắc ga."
      },
      {
        "id": "b11-r02-q7",
        "q": "カフェの 名前は 何ですか。",
        "qVn": "Tên quán cà-phê là gì?",
        "hint": "Là \"Sakura Café\".",
        "aJp": "「さくらカフェ」です。",
        "aVn": "Là \"Sakura Café\"."
      },
      {
        "id": "b11-r02-q8",
        "q": "その カフェは 何が おいしいですか。",
        "qVn": "Quán đó món gì ngon?",
        "hint": "Bánh ngọt rất ngon.",
        "aJp": "ケーキが すごく おいしいです。",
        "aVn": "Bánh ngọt rất ngon."
      },
      {
        "id": "b11-r02-q9",
        "q": "ナムさんは どうして 遅れましたか。",
        "qVn": "Vì sao Nam đến muộn?",
        "hint": "Vì tàu điện bị trễ.",
        "aJp": "電車が 遅れましたから。",
        "aVn": "Vì tàu điện bị trễ."
      },
      {
        "id": "b11-r02-q10",
        "q": "ナムさんは 何分ぐらい 遅れましたか。",
        "qVn": "Nam muộn khoảng bao nhiêu phút?",
        "hint": "Muộn khoảng 15 phút.",
        "aJp": "15分ぐらい 遅れました。",
        "aVn": "Muộn khoảng 15 phút."
      },
      {
        "id": "b11-r02-q11",
        "q": "ナムさんが 遅れた とき、キムさんたちは どう しましたか。",
        "qVn": "Khi Nam đến muộn, nhóm Kim đã làm gì?",
        "hint": "Vào quán trước và đợi.",
        "aJp": "先に カフェに 入って 待って いました。",
        "aVn": "Vào quán trước và đợi."
      },
      {
        "id": "b11-r02-q12",
        "q": "次は 誰が 店を 選びますか。",
        "qVn": "Lần sau ai chọn quán?",
        "hint": "Nam chọn.",
        "aJp": "ナムさんが 選びます。",
        "aVn": "Nam chọn."
      }
    ]
  },
  {
    "id": "b11-r03",
    "title": "R03: Ước mơ thuở nhỏ (子どものときの夢)",
    "shortTitle": "Ước mơ thuở nhỏ",
    "badge": "Bài 11 · R03",
    "description": "Phỏng vấn các thầy cô giáo về ước mơ thời thơ ấu và cơ duyên trở thành nhà giáo.",
    "category": "comprehension",
    "passage": {
      "jp": "学校の 新聞で、先生たちに「子どもの ときの 夢」を 聞きました。 【山田先生）】 「小学生の とき、野球の 選手に なりたかったです。」 「毎日 学校の 後、友達と 公園で 練習しました。」 「でも、中学生の とき、足を けがしました。それで、野球を やめました。」 「けがの とき、毎日 本を 読んだり、日記を 書いたり しました。」 「だんだん 言葉が 好きに なって、日本語の 先生に なりました。」 【鈴木先生）】 「子どもの とき、パン屋さんに なりたかったです。」 「祖母が パン屋を して いました。」 「休みの 日は いつも 祖母の 店で パンを 作ったり、お客さんと 話したり しました。」 「パンを 作る とき、材料を 正確に 量ります。」 「それで、数字が 好きに なりました。」 「今も 週末に よく パンを 焼いて います。」 【ブラウン先生）】 「私は オーストラリアで 生まれました。」 「子どもの とき、宇宙飛行士に なりたかったです。」 「夜、よく 星を 見ました。」 「高校生の とき、初めて 日本の アニメを 見ました。」 「宇宙の アニメでした。とても おもしろかったです。」 「それで、日本語の 勉強を 始めました。」 「初めは 漢字が なかなか 覚えられませんでした。」 「でも、毎日 少しずつ 練習して、だんだん わかるように なりました。」 「宇宙飛行士には なりませんでしたが、日本で 先生に なりました。」 「今は 毎晩 日本の 星を 見て います。」 3人の 先生の 夢は かないませんでした。 でも、子どもの ときの 経験が 今の 仕事に つながって います。 皆さんの 子どもの ときの 夢は 何でしたか。 今の 夢は 何ですか。 新聞部に 教えて ください。",
      "vn": "Báo trường đã hỏi các thầy cô về \"ước mơ thuở nhỏ\". [Thầy Yamada (tiếng Nhật)] \"Hồi tiểu học tôi muốn trở thành cầu thủ bóng chày.\" \"Ngày nào sau giờ học cũng tập với bạn ở công viên.\" \"Nhưng hồi cấp 2 tôi bị thương ở chân. Vì thế tôi bỏ bóng chày.\" \"Lúc bị thương, ngày nào tôi cũng đọc sách, viết nhật ký.\" \"Dần dần tôi thích ngôn ngữ và trở thành giáo viên tiếng Nhật.\" [Cô Suzuki (toán)] \"Hồi nhỏ tôi muốn làm thợ làm bánh mì.\" \"Bà tôi mở tiệm bánh mì.\" \"Ngày nghỉ tôi luôn ở tiệm bà làm bánh, nói chuyện với khách.\" \"Khi làm bánh phải cân nguyên liệu chính xác.\" \"Vì thế tôi thích những con số.\" \"Bây giờ cuối tuần tôi vẫn hay nướng bánh.\" [Thầy Brown (tiếng Anh)] \"Tôi sinh ra ở Úc.\" \"Hồi nhỏ tôi muốn làm phi hành gia.\" \"Buổi tối tôi hay ngắm sao.\" \"Hồi cấp 3, lần đầu tôi xem anime Nhật.\" \"Là anime về vũ trụ. Rất hay.\" \"Vì thế tôi bắt đầu học tiếng Nhật.\" \"Ban đầu mãi mà không nhớ được Kanji.\" \"Nhưng luyện từng chút mỗi ngày, dần dần tôi hiểu được.\" \"Tôi không thành phi hành gia nhưng đã trở thành giáo viên ở Nhật.\" \"Bây giờ tối nào tôi cũng ngắm sao Nhật Bản.\" Ước mơ của 3 thầy cô đều không thành hiện thực. Nhưng trải nghiệm thời thơ ấu đã kết nối với công việc hiện tại. Ước mơ thuở nhỏ của các bạn là gì? Ước mơ bây giờ là gì? Hãy cho ban báo chí biết nhé."
    },
    "questions": [
      {
        "id": "b11-r03-q1",
        "q": "学校の 新聞は 先生たちに 何を 聞きましたか。",
        "qVn": "Báo trường hỏi các thầy cô điều gì?",
        "hint": "Hỏi về \"ước mơ thuở nhỏ\".",
        "aJp": "「子どもの ときの 夢」を 聞きました。",
        "aVn": "Hỏi về \"ước mơ thuở nhỏ\"."
      },
      {
        "id": "b11-r03-q2",
        "q": "山田先生は 小学生の とき、何に なりたかったですか。",
        "qVn": "Hồi tiểu học thầy Yamada muốn trở thành gì?",
        "hint": "Muốn làm cầu thủ bóng chày.",
        "aJp": "野球の 選手に なりたかったです。",
        "aVn": "Muốn làm cầu thủ bóng chày."
      },
      {
        "id": "b11-r03-q3",
        "q": "山田先生は どうして 野球を やめましたか。",
        "qVn": "Vì sao thầy Yamada bỏ bóng chày?",
        "hint": "Vì hồi cấp 2 bị thương ở chân.",
        "aJp": "中学生の とき、足を けがしましたから。",
        "aVn": "Vì hồi cấp 2 bị thương ở chân."
      },
      {
        "id": "b11-r03-q4",
        "q": "けがの とき、山田先生は 何を しましたか。",
        "qVn": "Lúc bị thương thầy Yamada đã làm gì?",
        "hint": "Ngày nào cũng đọc sách, viết nhật ký...",
        "aJp": "毎日 本を 読んだり、日記を 書いたり しました。",
        "aVn": "Ngày nào cũng đọc sách, viết nhật ký..."
      },
      {
        "id": "b11-r03-q5",
        "q": "鈴木先生は 何の 先生ですか。",
        "qVn": "Cô Suzuki dạy môn gì?",
        "hint": "Dạy toán.",
        "aJp": "数学の 先生です。",
        "aVn": "Dạy toán."
      },
      {
        "id": "b11-r03-q6",
        "q": "鈴木先生は 子どもの とき、何に なりたかったですか。",
        "qVn": "Hồi nhỏ cô Suzuki muốn làm gì?",
        "hint": "Muốn làm thợ làm bánh mì.",
        "aJp": "パン屋さんに なりたかったです。",
        "aVn": "Muốn làm thợ làm bánh mì."
      },
      {
        "id": "b11-r03-q7",
        "q": "鈴木先生の おばあさんは 何を して いましたか。",
        "qVn": "Bà của cô Suzuki làm nghề gì?",
        "hint": "Mở tiệm bánh mì.",
        "aJp": "パン屋を して いました。",
        "aVn": "Mở tiệm bánh mì."
      },
      {
        "id": "b11-r03-q8",
        "q": "鈴木先生は どうして 数字が 好きに なりましたか。",
        "qVn": "Vì sao cô Suzuki thích những con số?",
        "hint": "Vì khi làm bánh phải cân nguyên liệu chính xác.",
        "aJp": "パンを 作る とき、材料を 正確に 量りますから。",
        "aVn": "Vì khi làm bánh phải cân nguyên liệu chính xác."
      },
      {
        "id": "b11-r03-q9",
        "q": "ブラウン先生は どこで 生まれましたか。",
        "qVn": "Thầy Brown sinh ra ở đâu?",
        "hint": "Sinh ra ở Úc.",
        "aJp": "オーストラリアで 生まれました。",
        "aVn": "Sinh ra ở Úc."
      },
      {
        "id": "b11-r03-q10",
        "q": "ブラウン先生は 子どもの とき、何に なりたかったですか。",
        "qVn": "Hồi nhỏ thầy Brown muốn làm gì?",
        "hint": "Muốn làm phi hành gia.",
        "aJp": "宇宙飛行士に なりたかったです。",
        "aVn": "Muốn làm phi hành gia."
      },
      {
        "id": "b11-r03-q11",
        "q": "ブラウン先生は どうして 日本語の 勉強を 始めましたか。",
        "qVn": "Vì sao thầy Brown bắt đầu học tiếng Nhật?",
        "hint": "Vì hồi cấp 3 xem anime vũ trụ và thấy rất hay.",
        "aJp": "高校生の とき、宇宙の アニメを 見て、とても おもしろかったですから。",
        "aVn": "Vì hồi cấp 3 xem anime vũ trụ và thấy rất hay."
      },
      {
        "id": "b11-r03-q12",
        "q": "3人の 先生の 夢は かないましたか。",
        "qVn": "Ước mơ của 3 thầy cô có thành hiện thực không?",
        "hint": "Không. Nhưng trải nghiệm thuở nhỏ gắn với công việc bây giờ.",
        "aJp": "いいえ、かないませんでした。でも、子どもの ときの 経験が 今の 仕事に つながって います。",
        "aVn": "Không. Nhưng trải nghiệm thuở nhỏ gắn với công việc bây giờ."
      }
    ]
  },
  {
    "id": "b11-r04",
    "title": "R04: Ngày chuyển nhà (引越しの日)",
    "shortTitle": "Ngày chuyển nhà",
    "badge": "Bài 11 · R04",
    "description": "Nhật ký ngày dọn sang nhà mới, nhờ bạn bè giúp đỡ và cảm xúc trong căn phòng mới.",
    "category": "comprehension",
    "passage": {
      "jp": "三月二十五日） 今日、寮から 新しい アパートに 引越ししました。 寮には 1年 住んで いました。 寮の 生活は 楽しかったです。 毎晩 友達と 一緒に 料理を 作ったり、話したり しました。 でも、部屋が 狭くて、ルームメイトと 2人でしたから、ゆっくり 勉強する ことが できませんでした。 それで、一人暮らしを 始めました。 朝 八時に 起きて、荷物を 箱に 入れました。 荷物は 箱 10個でした。 1年前 日本へ 来た とき、荷物は スーツケース 1つ だけでした。 1年で 物が たくさん 増えました。 10時に ナムさんと パクさんが 手伝いに 来て くれました。 パクさんが お兄さんの 車を 借りて 来ました。 3人で 荷物を 車に 乗せて、アパートへ 運びました。 アパートは 駅から 歩いて 七分です。 二階の 部屋で、窓から 小さい 公園が 見えます。 家賃は 一か月 四万五千円です。 部屋は 寮より 広くて、明るいです。 荷物を 運んだ 後、3人で 部屋を 掃除したり、家具を 並べたり しました。 2時ごろ、おなかが すきました。 近くの ラーメン屋で 昼ご飯を 食べました。 手伝って くれた お礼に、私が ごちそうしました。 午後は 市役所へ 行って、住所の 変更を しました。 引越しした とき、14日以内に 市役所に 行かなければ なりません。 夜、一人で 新しい 部屋に いる とき、少し 寂しく なりました。 寮は いつも にぎやかでしたから。 でも、静かで、勉強しやすいです。 明日から ここで 新しい 生活が 始まります。 毎朝 公園を ジョギングしたいです。 来週、ナムさんと パクさんを 呼んで、パーティーを します。 ベトナム料理を 作ります。",
      "vn": "Ngày 25 tháng 3 (Thứ Bảy) Hôm nay tôi chuyển từ ký túc xá sang căn hộ mới. Tôi đã sống ở ký túc xá 1 năm. Cuộc sống ký túc xá rất vui. Tối nào tôi cũng nấu ăn, trò chuyện với bạn bè. Nhưng phòng hẹp, ở 2 người nên không học yên được. Vì thế tôi bắt đầu sống một mình. 8 giờ sáng dậy, cho đồ vào thùng. Đồ đạc là 10 thùng. 1 năm trước khi đến Nhật, đồ đạc chỉ có 1 va-li. Trong 1 năm đồ đạc đã tăng lên nhiều. 10 giờ Nam và Park đến giúp tôi. Park mượn xe của anh trai đến. Ba người chất đồ lên xe rồi chở đến căn hộ. Căn hộ cách ga 7 phút đi bộ. Phòng ở tầng 2, từ cửa sổ nhìn thấy công viên nhỏ. Tiền thuê nhà một tháng là 45.000 yên. Phòng rộng và sáng hơn ký túc xá. Chuyển đồ xong, ba người dọn phòng, sắp xếp đồ nội thất... Khoảng 2 giờ thì đói bụng. Chúng tôi ăn trưa ở quán ramen gần đó. Để cảm ơn đã giúp, tôi khao. Buổi chiều tôi đến tòa thị chính làm thủ tục đổi địa chỉ. Khi chuyển nhà phải đến tòa thị chính trong vòng 14 ngày. Buổi tối ở một mình trong phòng mới, tôi thấy hơi buồn. Vì ký túc xá lúc nào cũng nhộn nhịp. Nhưng yên tĩnh, dễ học. Từ mai cuộc sống mới bắt đầu ở đây. Tôi muốn sáng nào cũng chạy bộ ở công viên. Tuần sau tôi sẽ mời Nam và Park đến làm tiệc. Tôi sẽ nấu món Việt."
    },
    "questions": [
      {
        "id": "b11-r04-q1",
        "q": "この 人は どこから どこへ 引越ししましたか。",
        "qVn": "Người này chuyển từ đâu đến đâu?",
        "hint": "Từ ký túc xá sang căn hộ mới.",
        "aJp": "寮から 新しい アパートへ 引越ししました。",
        "aVn": "Từ ký túc xá sang căn hộ mới."
      },
      {
        "id": "b11-r04-q2",
        "q": "寮には どのくらい 住んで いましたか。",
        "qVn": "Đã sống ở ký túc xá bao lâu?",
        "hint": "Sống 1 năm.",
        "aJp": "1年 住んで いました。",
        "aVn": "Sống 1 năm."
      },
      {
        "id": "b11-r04-q3",
        "q": "寮で 毎晩 何を しましたか。",
        "qVn": "Ở ký túc xá tối nào cũng làm gì?",
        "hint": "Nấu ăn, trò chuyện với bạn bè.",
        "aJp": "友達と 一緒に 料理を 作ったり、話したり しました。",
        "aVn": "Nấu ăn, trò chuyện với bạn bè."
      },
      {
        "id": "b11-r04-q4",
        "q": "どうして 一人暮らしを 始めましたか。",
        "qVn": "Vì sao bắt đầu sống một mình?",
        "hint": "Vì phòng ký túc xá hẹp, không học yên được.",
        "aJp": "寮は 部屋が 狭くて、ゆっくり 勉強する ことが できませんでしたから。",
        "aVn": "Vì phòng ký túc xá hẹp, không học yên được."
      },
      {
        "id": "b11-r04-q5",
        "q": "荷物は 箱 いくつでしたか。",
        "qVn": "Đồ đạc có mấy thùng?",
        "hint": "10 thùng.",
        "aJp": "10個でした。",
        "aVn": "10 thùng."
      },
      {
        "id": "b11-r04-q6",
        "q": "日本へ 来た とき、荷物は 何が ありましたか。",
        "qVn": "Khi đến Nhật, đồ đạc có gì?",
        "hint": "Chỉ có 1 va-li.",
        "aJp": "スーツケース 1つ だけでした。",
        "aVn": "Chỉ có 1 va-li."
      },
      {
        "id": "b11-r04-q7",
        "q": "誰が 引越しを 手伝いに 来ましたか。",
        "qVn": "Ai đến giúp chuyển nhà?",
        "hint": "Nam và Park đến.",
        "aJp": "ナムさんと パクさんが 来ました。",
        "aVn": "Nam và Park đến."
      },
      {
        "id": "b11-r04-q8",
        "q": "パクさんは 誰の 車を 借りましたか。",
        "qVn": "Park mượn xe của ai?",
        "hint": "Mượn xe của anh trai.",
        "aJp": "お兄さんの 車を 借りました。",
        "aVn": "Mượn xe của anh trai."
      },
      {
        "id": "b11-r04-q9",
        "q": "アパートは 駅から どのくらいですか。",
        "qVn": "Căn hộ cách ga bao xa?",
        "hint": "Đi bộ 7 phút từ ga.",
        "aJp": "駅から 歩いて 7分です。",
        "aVn": "Đi bộ 7 phút từ ga."
      },
      {
        "id": "b11-r04-q10",
        "q": "新しい 部屋は 寮と 比べて どうですか。",
        "qVn": "Phòng mới so với ký túc xá thế nào?",
        "hint": "Rộng và sáng hơn ký túc xá.",
        "aJp": "寮より 広くて、明るいです。",
        "aVn": "Rộng và sáng hơn ký túc xá."
      },
      {
        "id": "b11-r04-q11",
        "q": "昼ご飯は どこで 食べましたか。誰が 払いましたか。",
        "qVn": "Ăn trưa ở đâu? Ai trả tiền?",
        "hint": "Ăn ở quán ramen gần đó. Người này khao.",
        "aJp": "近くの ラーメン屋で 食べました。この 人が ごちそうしました。",
        "aVn": "Ăn ở quán ramen gần đó. Người này khao."
      },
      {
        "id": "b11-r04-q12",
        "q": "午後、市役所で 何を しましたか。",
        "qVn": "Buổi chiều làm gì ở tòa thị chính?",
        "hint": "Làm thủ tục đổi địa chỉ.",
        "aJp": "住所の 変更を しました。",
        "aVn": "Làm thủ tục đổi địa chỉ."
      }
    ]
  },
  {
    "id": "b11-r05",
    "title": "R05: Ngày thường và cuối tuần (平日と週末)",
    "shortTitle": "Ngày thường và cuối tuần",
    "badge": "Bài 11 · R05",
    "description": "So sánh nhịp sống giữa những ngày đi học/làm thêm và những ngày nghỉ xả hơi cuối tuần.",
    "category": "comprehension",
    "passage": {
      "jp": "私は 会社員で、東京の IT会社で 働いて います。 平日の 生活は 毎日 だいたい 同じです。 毎週 火曜日の 午後は 大きい 会議が あります。 朝 六時半に 起きます。 起きた とき、まず 窓を 開けて、空気を 入れます。 最近、毎朝 20分 ジョギングして います。 前は 朝 早く 起きる ことが できませんでしたが、今は 慣れました。 7時半に 家を 出て、電車に 乗ります。 電車の 中で ニュースを 読んだり、日本語の 単語を 覚えたり します。 会社は 9時に 始まって、6時に 終わります。 でも、忙しい とき、8時や 9時まで 働きます。 昼休みは 12時から 1時までです。 たいてい 会社の 近くの 食堂で 同僚と 食べます。 晩ご飯は 家で 自分で 作ります。 疲れた ときは、コンビニの お弁当を 買います。 夜 寝る とき、スマホを 見ないように して います。 前は 毎晩 遅くまで スマホを 見て、朝 眠かったですから。 週末は 平日と 全然 違います。 土曜日の 午前は 洗濯したり、部屋を 掃除したり します。 午後は 1週間分の 食べ物を 買いに 行きます。 夜は たいてい 友達と 飲みに 行ったり、カラオケへ 行ったり します。 日曜日は 趣味の 日です。 最近、写真を 習って います。 毎週 日曜日の 午前、写真教室に 通って います。 初めは カメラの 使い方が なかなか わかりませんでした。 でも、だんだん きれいな 写真が 撮れるように なりました。 午後は 教室の 人たちと 町を 歩いたり、写真を 撮ったり します。 平日は 忙しいですが、週末が ありますから、頑張る ことが できます。 来月、教室の 写真展が あります。 私の 写真も 2枚 出します。 今から とても 楽しみです。",
      "vn": "Tôi là nhân viên công ty, làm ở một công ty IT tại Tokyo. Cuộc sống ngày thường hầu như ngày nào cũng giống nhau. Chiều thứ Ba hằng tuần có cuộc họp lớn. Sáng 6 rưỡi tôi dậy. Khi dậy, trước tiên tôi mở cửa sổ cho không khí vào. Dạo này sáng nào tôi cũng chạy bộ 20 phút. Trước tôi không dậy sớm được nhưng giờ đã quen. 7 rưỡi ra khỏi nhà, lên tàu. Trên tàu tôi đọc tin tức, học từ vựng tiếng Nhật... Công ty bắt đầu 9 giờ, kết thúc 6 giờ. Nhưng lúc bận tôi làm đến 8, 9 giờ. Nghỉ trưa từ 12 đến 1 giờ. Thường tôi ăn với đồng nghiệp ở quán gần công ty. Bữa tối tôi tự nấu ở nhà. Lúc mệt tôi mua cơm hộp ở cửa hàng tiện lợi. Khi ngủ tôi cố gắng không xem điện thoại. Vì trước đây tối nào cũng xem điện thoại khuya nên sáng buồn ngủ. Cuối tuần hoàn toàn khác ngày thường. Sáng thứ Bảy tôi giặt giũ, dọn phòng... Buổi chiều tôi đi mua đồ ăn cho cả tuần. Buổi tối thường tôi đi nhậu, đi karaoke với bạn... Chủ nhật là ngày của sở thích. Dạo này tôi đang học nhiếp ảnh. Sáng Chủ nhật hằng tuần tôi đến lớp nhiếp ảnh. Ban đầu mãi không hiểu cách dùng máy ảnh. Nhưng dần dần đã chụp được ảnh đẹp. Buổi chiều tôi cùng mọi người ở lớp đi dạo phố, chụp ảnh... Ngày thường bận nhưng vì có cuối tuần nên có thể cố gắng. Tháng sau có triển lãm ảnh của lớp. Tôi cũng gửi 2 tấm ảnh. Từ giờ đã thấy rất háo hức."
    },
    "questions": [
      {
        "id": "b11-r05-q1",
        "q": "この 人は どこで 働いて いますか。",
        "qVn": "Người này làm việc ở đâu?",
        "hint": "Làm ở một công ty IT tại Tokyo.",
        "aJp": "東京の IT会社で 働いて います。",
        "aVn": "Làm ở một công ty IT tại Tokyo."
      },
      {
        "id": "b11-r05-q2",
        "q": "朝 起きた とき、まず 何を しますか。",
        "qVn": "Khi dậy buổi sáng, việc đầu tiên làm gì?",
        "hint": "Mở cửa sổ cho không khí vào.",
        "aJp": "窓を 開けて、空気を 入れます。",
        "aVn": "Mở cửa sổ cho không khí vào."
      },
      {
        "id": "b11-r05-q3",
        "q": "最近、毎朝 何を して いますか。",
        "qVn": "Dạo này sáng nào cũng làm gì?",
        "hint": "Chạy bộ 20 phút.",
        "aJp": "20分 ジョギングして います。",
        "aVn": "Chạy bộ 20 phút."
      },
      {
        "id": "b11-r05-q4",
        "q": "電車の 中で 何を しますか。",
        "qVn": "Trên tàu làm gì?",
        "hint": "Đọc tin tức, học từ vựng tiếng Nhật...",
        "aJp": "ニュースを 読んだり、日本語の 単語を 覚えたり します。",
        "aVn": "Đọc tin tức, học từ vựng tiếng Nhật..."
      },
      {
        "id": "b11-r05-q5",
        "q": "会社は 何時から 何時までですか。",
        "qVn": "Công ty làm từ mấy giờ đến mấy giờ?",
        "hint": "Từ 9 đến 6 giờ. Nhưng lúc bận làm đến 8, 9 giờ.",
        "aJp": "9時から 6時までです。でも、忙しい とき、8時や 9時まで 働きます。",
        "aVn": "Từ 9 đến 6 giờ. Nhưng lúc bận làm đến 8, 9 giờ."
      },
      {
        "id": "b11-r05-q6",
        "q": "昼ご飯は どこで 誰と 食べますか。",
        "qVn": "Ăn trưa ở đâu, với ai?",
        "hint": "Thường ăn với đồng nghiệp ở quán gần công ty.",
        "aJp": "たいてい 会社の 近くの 食堂で 同僚と 食べます。",
        "aVn": "Thường ăn với đồng nghiệp ở quán gần công ty."
      },
      {
        "id": "b11-r05-q7",
        "q": "疲れた とき、晩ご飯は どう しますか。",
        "qVn": "Lúc mệt thì bữa tối thế nào?",
        "hint": "Mua cơm hộp ở cửa hàng tiện lợi.",
        "aJp": "コンビニの お弁当を 買います。",
        "aVn": "Mua cơm hộp ở cửa hàng tiện lợi."
      },
      {
        "id": "b11-r05-q8",
        "q": "どうして 寝る とき、スマホを 見ないように して いますか。",
        "qVn": "Vì sao khi ngủ cố không xem điện thoại?",
        "hint": "Vì trước xem điện thoại khuya nên sáng buồn ngủ.",
        "aJp": "前は 遅くまで スマホを 見て、朝 眠かったですから。",
        "aVn": "Vì trước xem điện thoại khuya nên sáng buồn ngủ."
      },
      {
        "id": "b11-r05-q9",
        "q": "土曜日の 午前は 何を しますか。",
        "qVn": "Sáng thứ Bảy làm gì?",
        "hint": "Giặt giũ, dọn phòng...",
        "aJp": "洗濯したり、部屋を 掃除したり します。",
        "aVn": "Giặt giũ, dọn phòng..."
      },
      {
        "id": "b11-r05-q10",
        "q": "日曜日の 午前は どこに 通って いますか。",
        "qVn": "Sáng Chủ nhật đi học ở đâu?",
        "hint": "Đi lớp nhiếp ảnh.",
        "aJp": "写真教室に 通って います。",
        "aVn": "Đi lớp nhiếp ảnh."
      },
      {
        "id": "b11-r05-q11",
        "q": "初めは 何が なかなか わかりませんでしたか。",
        "qVn": "Ban đầu mãi không hiểu được gì?",
        "hint": "Mãi không hiểu cách dùng máy ảnh.",
        "aJp": "カメラの 使い方が なかなか わかりませんでした。",
        "aVn": "Mãi không hiểu cách dùng máy ảnh."
      },
      {
        "id": "b11-r05-q12",
        "q": "来月、何が ありますか。",
        "qVn": "Tháng sau có gì?",
        "hint": "Có triển lãm ảnh của lớp. Người này cũng gửi 2 tấm.",
        "aJp": "教室の 写真展が あります。この 人も 写真を 2枚 出します。",
        "aVn": "Có triển lãm ảnh của lớp. Người này cũng gửi 2 tấm."
      }
    ]
  },
  {
    "id": "b11-r06",
    "title": "R06: Khi gặp khó khăn (困ったとき)",
    "shortTitle": "Khi gặp khó khăn",
    "badge": "Bài 11 · R06",
    "description": "Tình huống gặp rắc rối ở nơi đất khách và sự giúp đỡ ấm áp từ những người xung quanh.",
    "category": "comprehension",
    "passage": {
      "jp": "日本で 生活して いる と、困る ことが いろいろ あります。 クラスメイトの 男の 人や 女の 人に「困った とき、どう しますか」と 聞きました。 まず、言葉が わからない とき。 マリアさんは「スマホの 辞書で 調べます」と 言いました。 パクさんは「わからない とき、すぐ 日本人に 聞きます。それが いちばん 早いです」と 言いました。 次に、病気の とき。 一人暮らしの 人は、病気の とき、本当に 大変です。 ナムさんは「去年 風邪を ひいた とき、病院が わかりませんでした」と 話しました。 「それで、学校の 先生に 電話しました。先生が 近くの 病院を 教えて くれました」 今、ナムさんは 病院の 電話番号を 冷蔵庫に 貼って います。 それから、寂しい とき。 キムさんは「寂しい とき、母の 料理を 作ります」と 言いました。 「韓国の スープを 作って、食べる とき、母の ことを 思い出します」 リンさんは「寂しい とき、外に 出ます。公園を 散歩したり、カフェで 本を 読んだり します」と 話しました。 最後に、お金が ない とき。 みんな 笑いました。 パクさんは「お金が ない とき、ずっと 寮で ご飯と 卵だけ 食べます」と 言いました。 マリアさんは「図書館へ 行きます。お金が 要りませんから」と 言いました。 私は どうでしょうか。 私は 困った とき、まず 日記を 書きます。 書いて いる とき、問題が だんだん はっきり わかります。 それから、友達や 先生に 相談します。 前は 一人で 全部 頑張りましたが、今は 人に 相談する ことが できます。 日本へ 来て、それを 学びました。 困った ときは、一人で 悩まないで ください。 周りに 助けて くれる 人が います。 皆さんは 困った とき、どう しますか。 次の 授業で 話しましょう。 私たちは 同じ 留学生です。 一緒に 頑張りましょう。",
      "vn": "Sống ở Nhật, có nhiều lúc gặp khó khăn. Tôi đã hỏi các bạn nam và nữ trong lớp \"Khi gặp khó khăn bạn làm gì?\" Đầu tiên là khi không hiểu từ. Maria nói \"Tôi tra từ điển trên điện thoại.\" Park nói \"Khi không hiểu tôi hỏi ngay người Nhật. Đó là cách nhanh nhất.\" Tiếp theo là khi bị ốm. Người sống một mình khi ốm thật sự rất vất vả. Nam kể \"Năm ngoái khi bị cảm tôi không biết bệnh viện ở đâu.\" \"Vì thế tôi gọi điện cho thầy. Thầy chỉ cho bệnh viện gần đó.\" Bây giờ Nam dán số điện thoại bệnh viện lên tủ lạnh. Rồi khi buồn. Kim nói \"Khi buồn tôi nấu món mẹ hay làm.\" \"Nấu canh Hàn, khi ăn tôi nhớ về mẹ.\" Linh kể \"Khi buồn tôi ra ngoài. Đi dạo công viên, đọc sách ở quán cà-phê...\" Cuối cùng là khi hết tiền. Mọi người đều cười. Park nói \"Khi hết tiền tôi ở ký túc xá chỉ ăn cơm với trứng.\" Maria nói \"Tôi đến thư viện. Vì không mất tiền.\" Còn tôi thì sao? Khi gặp khó khăn, tôi viết nhật ký trước tiên. Trong lúc viết, vấn đề dần trở nên rõ ràng. Sau đó tôi trao đổi với bạn bè hoặc thầy cô. Trước đây tôi tự mình cố gắng hết, nhưng giờ có thể nhờ người khác. Đến Nhật tôi đã học được điều đó. Khi gặp khó khăn, đừng một mình phiền muộn. Xung quanh có người giúp đỡ mình. Các bạn làm gì khi gặp khó khăn? Hãy cùng nói trong giờ học tới. Chúng ta đều là du học sinh. Cùng cố gắng nhé."
    },
    "questions": [
      {
        "id": "b11-r06-q1",
        "q": "この 人は クラスメイトに 何を 聞きましたか。",
        "qVn": "Người viết đã hỏi bạn cùng lớp điều gì?",
        "hint": "Hỏi \"Khi gặp khó khăn bạn làm gì?\"",
        "aJp": "「困った とき、どう しますか」と 聞きました。",
        "aVn": "Hỏi \"Khi gặp khó khăn bạn làm gì?\""
      },
      {
        "id": "b11-r06-q2",
        "q": "言葉が わからない とき、マリアさんは どう しますか。",
        "qVn": "Khi không hiểu từ, Maria làm gì?",
        "hint": "Tra từ điển trên điện thoại.",
        "aJp": "スマホの 辞書で 調べます。",
        "aVn": "Tra từ điển trên điện thoại."
      },
      {
        "id": "b11-r06-q3",
        "q": "パクさんは 言葉が わからない とき、どう しますか。どうしてですか。",
        "qVn": "Park làm gì khi không hiểu từ? Vì sao?",
        "hint": "Hỏi ngay người Nhật. Vì đó là cách nhanh nhất.",
        "aJp": "すぐ 日本人に 聞きます。それが いちばん 早いですから。",
        "aVn": "Hỏi ngay người Nhật. Vì đó là cách nhanh nhất."
      },
      {
        "id": "b11-r06-q4",
        "q": "ナムさんは 去年 風邪を ひいた とき、何に 困りましたか。",
        "qVn": "Năm ngoái khi bị cảm, Nam gặp khó khăn gì?",
        "hint": "Không biết bệnh viện ở đâu.",
        "aJp": "病院が わかりませんでした。",
        "aVn": "Không biết bệnh viện ở đâu."
      },
      {
        "id": "b11-r06-q5",
        "q": "その とき、ナムさんは 誰に 電話しましたか。",
        "qVn": "Lúc đó Nam gọi điện cho ai?",
        "hint": "Gọi cho thầy ở trường.",
        "aJp": "学校の 先生に 電話しました。",
        "aVn": "Gọi cho thầy ở trường."
      },
      {
        "id": "b11-r06-q6",
        "q": "今、ナムさんは 病院の 電話番号を どこに 貼って いますか。",
        "qVn": "Giờ Nam dán số điện thoại bệnh viện ở đâu?",
        "hint": "Dán trên tủ lạnh.",
        "aJp": "冷蔵庫に 貼って います。",
        "aVn": "Dán trên tủ lạnh."
      },
      {
        "id": "b11-r06-q7",
        "q": "キムさんは 寂しい とき、何を 作りますか。",
        "qVn": "Khi buồn Kim nấu gì?",
        "hint": "Nấu món của mẹ, canh Hàn Quốc.",
        "aJp": "母の 料理、韓国の スープを 作ります。",
        "aVn": "Nấu món của mẹ, canh Hàn Quốc."
      },
      {
        "id": "b11-r06-q8",
        "q": "リンさんは 寂しい とき、何を しますか。",
        "qVn": "Khi buồn Linh làm gì?",
        "hint": "Ra ngoài, đi dạo công viên, đọc sách ở quán cà-phê...",
        "aJp": "外に 出て、公園を 散歩したり、カフェで 本を 読んだり します。",
        "aVn": "Ra ngoài, đi dạo công viên, đọc sách ở quán cà-phê..."
      },
      {
        "id": "b11-r06-q9",
        "q": "お金が ない とき、パクさんは 何を 食べますか。",
        "qVn": "Khi hết tiền Park ăn gì?",
        "hint": "Chỉ ăn cơm với trứng.",
        "aJp": "ご飯と 卵だけ 食べます。",
        "aVn": "Chỉ ăn cơm với trứng."
      },
      {
        "id": "b11-r06-q10",
        "q": "マリアさんは どうして お金が ない とき、図書館へ 行きますか。",
        "qVn": "Vì sao khi hết tiền Maria đến thư viện?",
        "hint": "Vì không mất tiền.",
        "aJp": "お金が 要りませんから。",
        "aVn": "Vì không mất tiền."
      },
      {
        "id": "b11-r06-q11",
        "q": "この 人は 困った とき、まず 何を しますか。",
        "qVn": "Khi gặp khó khăn, người viết làm gì trước tiên?",
        "hint": "Viết nhật ký trước tiên.",
        "aJp": "まず 日記を 書きます。",
        "aVn": "Viết nhật ký trước tiên."
      },
      {
        "id": "b11-r06-q12",
        "q": "この 人は 日本へ 来て、何を 学びましたか。",
        "qVn": "Đến Nhật, người viết học được điều gì?",
        "hint": "Học được cách nhờ người khác. Trước tự mình cố gắng hết.",
        "aJp": "人に 相談する ことを 学びました。前は 一人で 全部 頑張りました。",
        "aVn": "Học được cách nhờ người khác. Trước tự mình cố gắng hết."
      }
    ]
  },
  {
    "id": "b11-r07",
    "title": "R07: Thư gửi thầy giáo (高校の先生へ)",
    "shortTitle": "Thư gửi thầy giáo",
    "badge": "Bài 11 · R07",
    "description": "Lá thư tri ân gửi thầy giáo cũ, báo cáo tình hình học tập và cuộc sống hiện tại.",
    "category": "comprehension",
    "passage": {
      "jp": "タン先生へ 先生、お元気ですか。ホアです。 日本に 来て、もう 1年に なりました。 高校を 卒業した とき、先生は 私に「頑張って」と 言って、日本語の 本を くれました。 その 本は 今も 机の 上に あります。 今、私は 大阪の 日本語学校に 通って います。 来年 大学に 入学したいですから、毎日 一生懸命 勉強して います。 初めは 大阪の 言葉が なかなか わかりませんでした。 教科書の 日本語と 少し 違いますから。 例えば、「ありがとう」は「おおきに」です。 でも、だんだん 慣れて、今は 少し 大阪弁を 話す ことが できます。 平日は 午前 学校で 勉強して、午後は お好み焼き屋で アルバイトを して います。 お好み焼きを 作る ことが できるように なりました。 ベトナムへ 帰った とき、先生に 作って あげたいです。 店長は 厳しいですが、とても 優しい 人です。 私が 病気の とき、店長の 奥さんが おかゆを 持って 来て くれました。 休みの 日は、友達と 京都や 奈良へ 行ったり、図書館で 勉強したり します。 京都の 有名な お寺へ 行きました。大きい 門が ありました。 奈良では 鹿に せんべいを あげました。 鹿が たくさん 来て、少し 怖かったです。 高校生の とき、私は あまり 勉強が 好きじゃ ありませんでした。 先生の 授業で よく 寝て いましたね。すみませんでした。 でも、先生は いつも「ホアは できる」と 言って くれました。 それで、私は 日本へ 来る ことに しました。 先月は 私の 二十才の 誕生日でした。 大阪市の 北区に 住んで います。 今は 勉強が 好きに なりました。 先生の おかげです。 8月に 1週間 ベトナムへ 帰ります。 その とき、学校へ 会いに 行っても いいですか。 寒く なりましたから、お体に 気を つけて ください。 ホア P.S. 先生の 好きな ベトナムの コーヒーを 送ります。",
      "vn": "Gửi thầy Tân, Thầy có khỏe không ạ? Em là Hoa. Em sang Nhật đã được 1 năm rồi. Khi em tốt nghiệp cấp 3, thầy nói \"Cố gắng nhé\" và tặng em sách tiếng Nhật. Cuốn sách đó giờ vẫn ở trên bàn em. Bây giờ em đang học ở trường tiếng Nhật ở Osaka. Năm sau em muốn vào đại học nên ngày nào cũng học chăm chỉ. Ban đầu em mãi không hiểu tiếng địa phương Osaka. Vì hơi khác tiếng Nhật trong sách giáo khoa. Ví dụ \"cảm ơn\" là \"ōkini\". Nhưng dần dần em quen, giờ nói được chút giọng Osaka. Ngày thường buổi sáng em học ở trường, buổi chiều làm thêm ở quán okonomiyaki. Em đã biết làm okonomiyaki. Khi về Việt Nam em muốn làm cho thầy ăn. Quản lý nghiêm khắc nhưng rất tốt bụng. Khi em ốm, vợ quản lý mang cháo đến cho em. Ngày nghỉ em đi Kyoto, Nara với bạn, học ở thư viện... Em đã đến ngôi chùa nổi tiếng ở Kyoto. Có cánh cổng lớn. Ở Nara em cho hươu ăn bánh senbei. Hươu đến rất nhiều, hơi sợ. Hồi cấp 3 em không thích học lắm. Em hay ngủ trong giờ của thầy nhỉ. Em xin lỗi. Nhưng thầy luôn nói \"Hoa làm được.\" Vì thế em đã quyết định sang Nhật. Tháng trước là sinh nhật 20 tuổi của em. Em đang sống ở quận Kita, thành phố Osaka. Bây giờ em đã thích học. Đó là nhờ thầy. Tháng 8 em về Việt Nam 1 tuần. Lúc đó em đến trường gặp thầy được không ạ? Trời đã lạnh, thầy giữ gìn sức khỏe nhé. Hoa T.B. Em gửi thầy cà-phê Việt Nam thầy thích."
    },
    "questions": [
      {
        "id": "b11-r07-q1",
        "q": "ホアさんは 誰に 手紙を 書きましたか。",
        "qVn": "Hoa viết thư cho ai?",
        "hint": "Viết cho thầy Tân hồi cấp 3.",
        "aJp": "高校の タン先生に 書きました。",
        "aVn": "Viết cho thầy Tân hồi cấp 3."
      },
      {
        "id": "b11-r07-q2",
        "q": "ホアさんは 日本に 来て、どのくらいに なりましたか。",
        "qVn": "Hoa sang Nhật được bao lâu rồi?",
        "hint": "Đã được 1 năm.",
        "aJp": "もう 1年に なりました。",
        "aVn": "Đã được 1 năm."
      },
      {
        "id": "b11-r07-q3",
        "q": "高校を 卒業した とき、先生は 何を くれましたか。",
        "qVn": "Khi tốt nghiệp cấp 3, thầy tặng gì?",
        "hint": "Tặng sách tiếng Nhật.",
        "aJp": "日本語の 本を くれました。",
        "aVn": "Tặng sách tiếng Nhật."
      },
      {
        "id": "b11-r07-q4",
        "q": "今、ホアさんは どこの 学校に 通って いますか。",
        "qVn": "Giờ Hoa học ở trường nào?",
        "hint": "Học ở trường tiếng Nhật ở Osaka.",
        "aJp": "大阪の 日本語学校に 通って います。",
        "aVn": "Học ở trường tiếng Nhật ở Osaka."
      },
      {
        "id": "b11-r07-q5",
        "q": "どうして 毎日 一生懸命 勉強して いますか。",
        "qVn": "Vì sao ngày nào cũng học chăm chỉ?",
        "hint": "Vì năm sau muốn vào đại học.",
        "aJp": "来年 大学に 入学したいですから。",
        "aVn": "Vì năm sau muốn vào đại học."
      },
      {
        "id": "b11-r07-q6",
        "q": "初めは 何が なかなか わかりませんでしたか。どうしてですか。",
        "qVn": "Ban đầu mãi không hiểu được gì? Vì sao?",
        "hint": "Không hiểu tiếng Osaka. Vì hơi khác tiếng Nhật trong sách.",
        "aJp": "大阪の 言葉が わかりませんでした。教科書の 日本語と 少し 違いますから。",
        "aVn": "Không hiểu tiếng Osaka. Vì hơi khác tiếng Nhật trong sách."
      },
      {
        "id": "b11-r07-q7",
        "q": "ホアさんは どこで アルバイトを して いますか。",
        "qVn": "Hoa làm thêm ở đâu?",
        "hint": "Làm ở quán okonomiyaki.",
        "aJp": "お好み焼き屋で して います。",
        "aVn": "Làm ở quán okonomiyaki."
      },
      {
        "id": "b11-r07-q8",
        "q": "ホアさんが 病気の とき、誰が 何を 持って 来て くれましたか。",
        "qVn": "Khi Hoa ốm, ai mang gì đến?",
        "hint": "Vợ quản lý mang cháo đến.",
        "aJp": "店長の 奥さんが おかゆを 持って 来て くれました。",
        "aVn": "Vợ quản lý mang cháo đến."
      },
      {
        "id": "b11-r07-q9",
        "q": "奈良で 何を しましたか。どうでしたか。",
        "qVn": "Ở Nara đã làm gì? Thế nào?",
        "hint": "Cho hươu ăn senbei. Hươu đến nhiều nên hơi sợ.",
        "aJp": "鹿に せんべいを あげました。鹿が たくさん 来て、少し 怖かったです。",
        "aVn": "Cho hươu ăn senbei. Hươu đến nhiều nên hơi sợ."
      },
      {
        "id": "b11-r07-q10",
        "q": "高校生の とき、ホアさんは 勉強が 好きでしたか。",
        "qVn": "Hồi cấp 3 Hoa có thích học không?",
        "hint": "Không thích lắm. Hay ngủ trong giờ của thầy.",
        "aJp": "いいえ、あまり 好きじゃ ありませんでした。先生の 授業で よく 寝て いました。",
        "aVn": "Không thích lắm. Hay ngủ trong giờ của thầy."
      },
      {
        "id": "b11-r07-q11",
        "q": "ホアさんは どうして 日本へ 来る ことに しましたか。",
        "qVn": "Vì sao Hoa quyết định sang Nhật?",
        "hint": "Vì thầy luôn nói \"Hoa làm được.\"",
        "aJp": "先生が いつも「ホアは できる」と 言って くれましたから。",
        "aVn": "Vì thầy luôn nói \"Hoa làm được.\""
      },
      {
        "id": "b11-r07-q12",
        "q": "ホアさんは 8月に 何を しますか。",
        "qVn": "Tháng 8 Hoa sẽ làm gì?",
        "hint": "Về Việt Nam 1 tuần và muốn đến trường gặp thầy.",
        "aJp": "1週間 ベトナムへ 帰って、学校へ 先生に 会いに 行きたいです。",
        "aVn": "Về Việt Nam 1 tuần và muốn đến trường gặp thầy."
      }
    ]
  },
  {
    "id": "b11-r08",
    "title": "R08: Lâu rồi không gặp! (久しぶり！)",
    "shortTitle": "Lâu rồi không gặp!",
    "badge": "Bài 11 · R08",
    "description": "Cuộc trò chuyện giữa hai người bạn cũ tình cờ gặp lại sau nhiều năm xa cách.",
    "category": "comprehension",
    "passage": {
      "jp": "ミン:「あれ？ ユキ？ 久しぶり！」 ユキ:「ミン！ 本当に 久しぶり。元気？」 ミン:「うん、元気。ユキは？ 今 何 して る？」 ユキ:「大学を 卒業して、今は 銀行で 働いて る。」 ミン:「へえ、すごい！ 忙しい？」 ユキ:「うん、毎日 忙しい。でも、だんだん 慣れた。ミンは？」 ミン:「僕は まだ 大学院で 勉強して る。」 ユキ:「そっか。何を 研究して る の？」 ミン:「環境の こと。川の 水を きれいに する 研究。」 ユキ:「難しそう！ 前は 理科が 嫌いだったよね？」 ミン:「うん、高校の とき、全然 好きじゃ なかった。」 ミン:「でも、大学で いい 先生に 会った。それで、好きに なった。」 ユキ:「いいね。ねえ、まだ ギター 弾いて る？」 ミン:「ううん、最近 全然 弾いて ない。時間が ない。」 ミン:「ユキは？ まだ テニス して る？」 ユキ:「うん、毎週 土曜日に 会社の 人と して る。」 ユキ:「ねえ、今 時間 ある？ お茶 飲まない？」 ミン:「ごめん、今日は これから アルバイト。」 ユキ:「そっか。じゃ、来週の 日曜日は？ 暇？」 ミン:「うん、暇。」 ユキ:「じゃ、高校の 友達も 誘って、みんなで ご飯 食べよう。」 ミン:「いいね！ タカシや アヤも 呼ぼう。」 ユキ:「タカシ、去年 結婚したよ。知って た？」 ミン:「えっ、知らなかった！ 本当？」 ユキ:「うん。奥さんも 連れて 来て もらおう。」 ミン:「楽しみ！ じゃ、後で メッセージ 送る ね。」 ユキ:「うん、待って る。じゃ、また ね！」 ミン:「うん、また ね！ アルバイト、行って 来る！」 後、レストランで） タカシ:「ミン、久しぶり！ 全然 変わって ないね。」",
      "vn": "Minh: \"Ơ? Yuki? Lâu rồi không gặp!\" Yuki: \"Minh! Lâu quá rồi. Khỏe không?\" Minh: \"Ừ, khỏe. Còn Yuki? Giờ đang làm gì?\" Yuki: \"Tốt nghiệp đại học rồi, giờ làm ở ngân hàng.\" Minh: \"Ồ, giỏi quá! Bận không?\" Yuki: \"Ừ, ngày nào cũng bận. Nhưng dần quen rồi. Còn Minh?\" Minh: \"Mình vẫn đang học cao học.\" Yuki: \"Thế à. Nghiên cứu gì vậy?\" Minh: \"Về môi trường. Nghiên cứu làm sạch nước sông.\" Yuki: \"Nghe khó quá! Trước cậu ghét môn khoa học mà nhỉ?\" Minh: \"Ừ, hồi cấp 3 hoàn toàn không thích.\" Minh: \"Nhưng ở đại học mình gặp được thầy giỏi. Vì thế đã thích.\" Yuki: \"Hay nhỉ. Này, cậu vẫn chơi guitar chứ?\" Minh: \"Không, dạo này hoàn toàn không chơi. Không có thời gian.\" Minh: \"Còn Yuki? Vẫn chơi tennis chứ?\" Yuki: \"Ừ, thứ Bảy hằng tuần chơi với người công ty.\" Yuki: \"Này, giờ có thời gian không? Uống trà không?\" Minh: \"Xin lỗi, hôm nay giờ mình phải đi làm thêm.\" Yuki: \"Thế à. Vậy Chủ nhật tuần sau? Rảnh không?\" Minh: \"Ừ, rảnh.\" Yuki: \"Vậy rủ cả bạn cấp 3, mọi người cùng ăn cơm nhé.\" Minh: \"Hay đấy! Gọi cả Takashi và Aya nữa.\" Yuki: \"Takashi năm ngoái cưới rồi đấy. Cậu biết chưa?\" Minh: \"Hả, không biết! Thật à?\" Yuki: \"Ừ. Nhờ cậu ấy dẫn vợ theo luôn.\" Minh: \"Háo hức quá! Vậy lát mình nhắn tin nhé.\" Yuki: \"Ừ, mình đợi. Gặp lại nhé!\" Minh: \"Ừ, gặp lại! Mình đi làm đây!\" (1 tuần sau, ở nhà hàng) Takashi: \"Minh, lâu quá! Cậu chẳng thay đổi gì nhỉ.\""
    },
    "questions": [
      {
        "id": "b11-r08-q1",
        "q": "ミンさんと ユキさんは 久しぶりに 会いましたか。",
        "qVn": "Minh và Yuki lâu rồi mới gặp nhau phải không?",
        "hint": "Vâng, lâu lắm rồi mới gặp.",
        "aJp": "はい、本当に 久しぶりに 会いました。",
        "aVn": "Vâng, lâu lắm rồi mới gặp."
      },
      {
        "id": "b11-r08-q2",
        "q": "ユキさんは 今 何を して いますか。",
        "qVn": "Giờ Yuki đang làm gì?",
        "hint": "Tốt nghiệp đại học, làm ở ngân hàng.",
        "aJp": "大学を 卒業して、銀行で 働いて います。",
        "aVn": "Tốt nghiệp đại học, làm ở ngân hàng."
      },
      {
        "id": "b11-r08-q3",
        "q": "ミンさんは 今 何を して いますか。",
        "qVn": "Giờ Minh đang làm gì?",
        "hint": "Đang học cao học.",
        "aJp": "大学院で 勉強して います。",
        "aVn": "Đang học cao học."
      },
      {
        "id": "b11-r08-q4",
        "q": "ミンさんは 何を 研究して いますか。",
        "qVn": "Minh nghiên cứu gì?",
        "hint": "Về môi trường, nghiên cứu làm sạch nước sông.",
        "aJp": "環境の こと、川の 水を きれいに する 研究を して います。",
        "aVn": "Về môi trường, nghiên cứu làm sạch nước sông."
      },
      {
        "id": "b11-r08-q5",
        "q": "高校の とき、ミンさんは 理科が 好きでしたか。",
        "qVn": "Hồi cấp 3 Minh có thích môn khoa học không?",
        "hint": "Không, hoàn toàn không thích.",
        "aJp": "いいえ、全然 好きじゃ ありませんでした。",
        "aVn": "Không, hoàn toàn không thích."
      },
      {
        "id": "b11-r08-q6",
        "q": "ミンさんは どうして 理科が 好きに なりましたか。",
        "qVn": "Vì sao Minh lại thích môn khoa học?",
        "hint": "Vì ở đại học gặp được thầy giỏi.",
        "aJp": "大学で いい 先生に 会いましたから。",
        "aVn": "Vì ở đại học gặp được thầy giỏi."
      },
      {
        "id": "b11-r08-q7",
        "q": "ミンさんは 最近 ギターを 弾いて いますか。",
        "qVn": "Dạo này Minh có chơi guitar không?",
        "hint": "Không, hoàn toàn không chơi. Vì không có thời gian.",
        "aJp": "いいえ、全然 弾いて いません。時間が ありませんから。",
        "aVn": "Không, hoàn toàn không chơi. Vì không có thời gian."
      },
      {
        "id": "b11-r08-q8",
        "q": "ユキさんは いつ、誰と テニスを して いますか。",
        "qVn": "Yuki chơi tennis khi nào, với ai?",
        "hint": "Thứ Bảy hằng tuần chơi với người công ty.",
        "aJp": "毎週 土曜日に 会社の 人と して います。",
        "aVn": "Thứ Bảy hằng tuần chơi với người công ty."
      },
      {
        "id": "b11-r08-q9",
        "q": "ユキさんが お茶に 誘った とき、ミンさんは どうして 行きませんでしたか。",
        "qVn": "Khi Yuki rủ uống trà, vì sao Minh không đi?",
        "hint": "Vì sắp phải đi làm thêm.",
        "aJp": "これから アルバイトが ありましたから。",
        "aVn": "Vì sắp phải đi làm thêm."
      },
      {
        "id": "b11-r08-q10",
        "q": "二人は いつ 会う ことに しましたか。",
        "qVn": "Hai người hẹn gặp khi nào?",
        "hint": "Hẹn Chủ nhật tuần sau.",
        "aJp": "来週の 日曜日に 会う ことに しました。",
        "aVn": "Hẹn Chủ nhật tuần sau."
      },
      {
        "id": "b11-r08-q11",
        "q": "来週、誰を 呼びますか。",
        "qVn": "Tuần sau sẽ gọi những ai?",
        "hint": "Gọi bạn cấp 3, Takashi và Aya.",
        "aJp": "高校の 友達、タカシさんや アヤさんを 呼びます。",
        "aVn": "Gọi bạn cấp 3, Takashi và Aya."
      },
      {
        "id": "b11-r08-q12",
        "q": "タカシさんに ついて、ミンさんが 知らなかった ことは 何ですか。",
        "qVn": "Điều gì về Takashi mà Minh không biết?",
        "hint": "Việc Takashi đã cưới năm ngoái.",
        "aJp": "タカシさんが 去年 結婚した ことです。",
        "aVn": "Việc Takashi đã cưới năm ngoái."
      }
    ]
  },
  {
    "id": "b11-r09",
    "title": "R09: Tôi trước đây và bây giờ (前の私と今の私)",
    "shortTitle": "Tôi trước đây và bây giờ",
    "badge": "Bài 11 · R09",
    "description": "Sự thay đổi của bản thân sau một thời gian học tập và trưởng thành tại Nhật Bản.",
    "category": "comprehension",
    "passage": {
      "jp": "日本へ 来て 2年に なりました。 2年で 私は いろいろ 変わりました。 まず、朝の 生活です。 前は 朝 起きる ことが 大嫌いでした。 ベトナムに いた とき、毎朝 母が 私を 起こしました。 でも、日本では 一人暮らしですから、誰も 起こして くれません。 初めは よく 授業に 遅れました。 それで、目覚まし時計を 3つ 買いました。 今は 毎朝 6時に 自分で 起きて います。 次に、食べ物です。 前は 魚が 嫌いでした。特に 生の 魚は 全然 食べませんでした。 日本へ 来た とき、友達が すし屋に 連れて 行って くれました。 初めは なかなか 食べる ことが できませんでした。 でも、1つ 食べて みました。 意外に おいしかったです！ 今は 1か月に 2回ぐらい すしを 食べに 行きます。 それから、性格も 変わりました。 前は 恥ずかしがりやで、知らない 人と 話す ことが できませんでした。 でも、アルバイトで 毎日 お客さんと 話して、だんだん 平気に なりました。 今は 自分から 話しかける ことも できます。 先月は 学校の スピーチコンテストに 出ました。 前の 私は 考えられませんでした。 変わらない ことも あります。 家族が 大好きな ことです。 寂しい とき、家族の 写真を 見ます。 毎週 日曜日の 夜、家族と ビデオ通話を して います。 母は いつも「ちゃんと 起きて いる？」と 聞きます。 私は「うん、毎朝 6時だよ」と 答えます。 母は 信じて いませんが、本当です。 来年 帰った とき、新しい 私を 家族に 見せたいです。",
      "vn": "Tôi đến Nhật được 2 năm. Trong 2 năm tôi đã thay đổi nhiều. Đầu tiên là cuộc sống buổi sáng. Trước đây tôi cực ghét dậy sớm. Khi ở Việt Nam, sáng nào mẹ cũng gọi tôi dậy. Nhưng ở Nhật sống một mình nên không ai gọi. Ban đầu tôi hay trễ giờ học. Vì thế tôi mua 3 cái đồng hồ báo thức. Bây giờ sáng nào tôi cũng tự dậy lúc 6 giờ. Tiếp theo là đồ ăn. Trước tôi ghét cá. Đặc biệt cá sống hoàn toàn không ăn. Khi đến Nhật, bạn dẫn tôi đi quán sushi. Ban đầu mãi mà tôi không ăn được. Nhưng tôi thử ăn một miếng. Bất ngờ là ngon! Bây giờ tháng nào tôi cũng đi ăn sushi khoảng 2 lần. Ngoài ra tính cách cũng thay đổi. Trước tôi nhút nhát, không nói chuyện được với người lạ. Nhưng làm thêm ngày nào cũng nói chuyện với khách nên dần thấy bình thường. Bây giờ tôi có thể tự bắt chuyện. Tháng trước tôi tham gia cuộc thi hùng biện của trường. Tôi của trước đây không thể tưởng tượng được. Cũng có điều không thay đổi. Đó là việc tôi rất yêu gia đình. Khi buồn tôi xem ảnh gia đình. Tối Chủ nhật hằng tuần tôi gọi video với gia đình. Mẹ luôn hỏi \"Con có dậy đúng giờ không?\" Tôi trả lời \"Dạ, sáng nào cũng 6 giờ ạ.\" Mẹ không tin nhưng là thật đấy. Năm sau khi về, tôi muốn cho gia đình thấy con người mới của tôi."
    },
    "questions": [
      {
        "id": "b11-r09-q1",
        "q": "この 人は 日本へ 来て 何年に なりましたか。",
        "qVn": "Người này sang Nhật được mấy năm?",
        "hint": "Được 2 năm.",
        "aJp": "2年に なりました。",
        "aVn": "Được 2 năm."
      },
      {
        "id": "b11-r09-q2",
        "q": "ベトナムに いた とき、毎朝 誰が この 人を 起こしましたか。",
        "qVn": "Khi ở Việt Nam, sáng nào ai gọi người này dậy?",
        "hint": "Mẹ gọi dậy.",
        "aJp": "母が 起こしました。",
        "aVn": "Mẹ gọi dậy."
      },
      {
        "id": "b11-r09-q3",
        "q": "日本で 初めは どうして よく 授業に 遅れましたか。",
        "qVn": "Ở Nhật, ban đầu vì sao hay trễ giờ học?",
        "hint": "Vì sống một mình, không ai gọi dậy.",
        "aJp": "一人暮らしで、誰も 起こして くれませんでしたから。",
        "aVn": "Vì sống một mình, không ai gọi dậy."
      },
      {
        "id": "b11-r09-q4",
        "q": "遅れない ために、何を 買いましたか。",
        "qVn": "Để không bị trễ, người này đã mua gì?",
        "hint": "Mua 3 cái đồng hồ báo thức.",
        "aJp": "目覚まし時計を 3つ 買いました。",
        "aVn": "Mua 3 cái đồng hồ báo thức."
      },
      {
        "id": "b11-r09-q5",
        "q": "今は 毎朝 何時に 起きて いますか。",
        "qVn": "Giờ sáng nào dậy lúc mấy giờ?",
        "hint": "Sáng nào cũng tự dậy lúc 6 giờ.",
        "aJp": "毎朝 6時に 自分で 起きて います。",
        "aVn": "Sáng nào cũng tự dậy lúc 6 giờ."
      },
      {
        "id": "b11-r09-q6",
        "q": "前は 魚が 好きでしたか。",
        "qVn": "Trước đây có thích cá không?",
        "hint": "Không, ghét. Đặc biệt cá sống hoàn toàn không ăn.",
        "aJp": "いいえ、嫌いでした。特に 生の 魚は 全然 食べませんでした。",
        "aVn": "Không, ghét. Đặc biệt cá sống hoàn toàn không ăn."
      },
      {
        "id": "b11-r09-q7",
        "q": "すしを 初めて 食べた とき、どうでしたか。",
        "qVn": "Lần đầu ăn sushi thấy thế nào?",
        "hint": "Bất ngờ là ngon.",
        "aJp": "意外に おいしかったです。",
        "aVn": "Bất ngờ là ngon."
      },
      {
        "id": "b11-r09-q8",
        "q": "今は どのくらい すしを 食べに 行きますか。",
        "qVn": "Giờ đi ăn sushi bao nhiêu lần?",
        "hint": "Khoảng 2 lần một tháng.",
        "aJp": "1か月に 2回ぐらい 行きます。",
        "aVn": "Khoảng 2 lần một tháng."
      },
      {
        "id": "b11-r09-q9",
        "q": "前は どんな 性格でしたか。",
        "qVn": "Trước đây tính cách thế nào?",
        "hint": "Nhút nhát, không nói chuyện được với người lạ.",
        "aJp": "恥ずかしがりやで、知らない 人と 話す ことが できませんでした。",
        "aVn": "Nhút nhát, không nói chuyện được với người lạ."
      },
      {
        "id": "b11-r09-q10",
        "q": "どうして 知らない 人と 話すのが 平気に なりましたか。",
        "qVn": "Vì sao đã thấy bình thường khi nói chuyện với người lạ?",
        "hint": "Vì làm thêm ngày nào cũng nói chuyện với khách.",
        "aJp": "アルバイトで 毎日 お客さんと 話しましたから。",
        "aVn": "Vì làm thêm ngày nào cũng nói chuyện với khách."
      },
      {
        "id": "b11-r09-q11",
        "q": "変わらない ことは 何ですか。",
        "qVn": "Điều không thay đổi là gì?",
        "hint": "Việc rất yêu gia đình.",
        "aJp": "家族が 大好きな ことです。",
        "aVn": "Việc rất yêu gia đình."
      },
      {
        "id": "b11-r09-q12",
        "q": "毎週 日曜日の 夜、何を して いますか。",
        "qVn": "Tối Chủ nhật hằng tuần làm gì?",
        "hint": "Gọi video với gia đình.",
        "aJp": "家族と ビデオ通話を して います。",
        "aVn": "Gọi video với gia đình."
      }
    ]
  },
  {
    "id": "b11-r10",
    "title": "R10: Cuộc sống sống một mình (一人暮らしの生活)",
    "shortTitle": "Cuộc sống sống một mình",
    "badge": "Bài 11 · R10",
    "description": "Khảo sát về những thuận lợi, khó khăn và chi tiêu của sinh viên sống tự lập.",
    "category": "comprehension",
    "passage": {
      "jp": "一人暮らしを して いる 大学生 二百人に 生活に ついて 聞きました。 質問1：朝ご飯を 食べて いますか。 「毎日 食べて いる」は 四十五パーセント、「ときどき 食べる」は 30%、「全然 食べない」は 25%でした。 食べない 理由は「時間が ない」が いちばん 多かったです。 「朝 眠い とき、ご飯より 寝る ほうが 大切です」と いう 答えも ありました。 質問2：料理を 作って いますか。 「1週間に 5回以上」は 35%でした。 「前は 全然 作る ことが できませんでしたが、一人暮らしを 始めて、だんだん 上手に なりました」と いう 学生が 多かったです。 質問3：休みの 日は 何を して いますか。 1位は「洗濯したり、掃除したり する」でした。 2位は「アルバイト」、3位は「友達と 遊ぶ」でした。 質問4：一人暮らしで 困った ことは 何ですか。 1位は「病気の とき」でした。 「熱が ある とき、薬を 買いに 行く ことも できませんでした」 2位は「寂しい」でした。 「初めは 夜 部屋が 静かで、なかなか 寝る ことが できませんでした」 3位は「お金」でした。 「電気代や ガス代が 思ったより 高いです。それで、夏も あまり エアコンを つけません」 質問5：一人暮らしを 始めて、よかった ことは 何ですか。 「自由な 時間が 増えた」が 1位でした。 「家族の 大切さが わかった」が 2位でした。 「前は 母の 料理に 文句を 言って いましたが、今は 本当に ありがたいと 思います」 3位は「自分で 何でも できるように なった」でした。 最後に、これから 一人暮らしを 始める 人への アドバイスを 聞きました。 「困った とき、一人で 頑張らないで、友達や 家族に 相談して ください」 「近所の 人に 挨拶して ください。困った とき 助けて くれます」 「病院の 場所と 電話番号を 調べて おいて ください」 一人暮らしは 大変ですが、人を 大きく 成長させます。 皆さんも 頑張って ください。 この アンケートの 結果は 大学の ホームページでも 見る ことが できます。",
      "vn": "Chúng tôi đã hỏi 200 sinh viên sống một mình về cuộc sống. Câu 1: Bạn có ăn sáng không? \"Ăn mỗi ngày\" 45%, \"thỉnh thoảng ăn\" 30%, \"hoàn toàn không ăn\" 25%. Lý do không ăn nhiều nhất là \"không có thời gian\". Cũng có câu trả lời \"Lúc buồn ngủ buổi sáng, ngủ quan trọng hơn ăn\". Câu 2: Bạn có nấu ăn không? \"Từ 5 lần/tuần trở lên\" là 35%. Nhiều sinh viên nói \"Trước hoàn toàn không biết nấu, nhưng sống một mình rồi dần giỏi lên\". Câu 3: Ngày nghỉ bạn làm gì? Hạng 1 là \"giặt giũ, dọn dẹp\". Hạng 2 \"làm thêm\", hạng 3 \"đi chơi với bạn\". Câu 4: Điều khó khăn khi sống một mình là gì? Hạng 1 là \"khi bị ốm\". \"Khi sốt, tôi không đi mua thuốc được.\" Hạng 2 là \"buồn\". \"Ban đầu buổi tối phòng yên tĩnh quá, mãi không ngủ được.\" Hạng 3 là \"tiền\". \"Tiền điện, tiền ga đắt hơn tôi nghĩ. Vì thế mùa hè cũng ít bật điều hòa.\" Câu 5: Bắt đầu sống một mình, điều tốt là gì? \"Thời gian tự do tăng lên\" là hạng 1. \"Hiểu được giá trị của gia đình\" là hạng 2. \"Trước tôi hay phàn nàn về đồ ăn mẹ nấu, giờ thấy thật biết ơn.\" Hạng 3 là \"đã có thể tự làm mọi thứ\". Cuối cùng, chúng tôi hỏi lời khuyên cho người sắp bắt đầu sống một mình. \"Khi khó khăn đừng một mình cố gắng, hãy trao đổi với bạn bè và gia đình.\" \"Hãy chào hỏi hàng xóm. Khi khó khăn họ sẽ giúp.\" \"Hãy tìm sẵn địa chỉ và số điện thoại bệnh viện.\" Sống một mình vất vả nhưng giúp con người trưởng thành. Các bạn cũng cố lên nhé. Kết quả khảo sát này cũng có thể xem trên trang web của trường."
    },
    "questions": [
      {
        "id": "b11-r10-q1",
        "q": "この アンケートでは 誰に 話を 聞きましたか。",
        "qVn": "Khảo sát này hỏi ai?",
        "hint": "Hỏi 200 sinh viên đại học sống một mình.",
        "aJp": "一人暮らしを して いる 大学生 200人に 聞きました。",
        "aVn": "Hỏi 200 sinh viên đại học sống một mình."
      },
      {
        "id": "b11-r10-q2",
        "q": "朝ご飯を 毎日 食べて いる 学生は 何パーセントですか。",
        "qVn": "Sinh viên ăn sáng mỗi ngày là bao nhiêu phần trăm?",
        "hint": "45%.",
        "aJp": "45%です。",
        "aVn": "45%."
      },
      {
        "id": "b11-r10-q3",
        "q": "朝ご飯を 食べない 理由で いちばん 多かったのは 何ですか。",
        "qVn": "Lý do không ăn sáng nhiều nhất là gì?",
        "hint": "\"Không có thời gian\".",
        "aJp": "「時間が ない」です。",
        "aVn": "\"Không có thời gian\"."
      },
      {
        "id": "b11-r10-q4",
        "q": "料理を 1週間に 5回以上 作る 学生は 何パーセントですか。",
        "qVn": "Sinh viên nấu ăn từ 5 lần/tuần trở lên là bao nhiêu phần trăm?",
        "hint": "35%.",
        "aJp": "35%です。",
        "aVn": "35%."
      },
      {
        "id": "b11-r10-q5",
        "q": "休みの 日に する ことの 1位は 何ですか。",
        "qVn": "Việc làm ngày nghỉ đứng hạng 1 là gì?",
        "hint": "Giặt giũ, dọn dẹp.",
        "aJp": "洗濯したり、掃除したり する ことです。",
        "aVn": "Giặt giũ, dọn dẹp."
      },
      {
        "id": "b11-r10-q6",
        "q": "一人暮らしで 困った ことの 1位は 何ですか。",
        "qVn": "Khó khăn hạng 1 khi sống một mình là gì?",
        "hint": "Khi bị ốm.",
        "aJp": "病気の ときです。",
        "aVn": "Khi bị ốm."
      },
      {
        "id": "b11-r10-q7",
        "q": "熱が ある とき、何が できませんでしたか。",
        "qVn": "Khi bị sốt, sinh viên đó không làm được gì?",
        "hint": "Không đi mua thuốc được.",
        "aJp": "薬を 買いに 行く ことも できませんでした。",
        "aVn": "Không đi mua thuốc được."
      },
      {
        "id": "b11-r10-q8",
        "q": "初めは どうして 夜 なかなか 寝る ことが できませんでしたか。",
        "qVn": "Ban đầu vì sao buổi tối mãi không ngủ được?",
        "hint": "Vì phòng quá yên tĩnh.",
        "aJp": "部屋が 静かでしたから。",
        "aVn": "Vì phòng quá yên tĩnh."
      },
      {
        "id": "b11-r10-q9",
        "q": "どうして 夏も あまり エアコンを つけませんか。",
        "qVn": "Vì sao mùa hè cũng ít bật điều hòa?",
        "hint": "Vì tiền điện, tiền ga đắt hơn nghĩ.",
        "aJp": "電気代や ガス代が 思ったより 高いですから。",
        "aVn": "Vì tiền điện, tiền ga đắt hơn nghĩ."
      },
      {
        "id": "b11-r10-q10",
        "q": "一人暮らしを 始めて、よかった ことの 1位は 何ですか。",
        "qVn": "Điều tốt hạng 1 khi sống một mình là gì?",
        "hint": "Thời gian tự do tăng lên.",
        "aJp": "自由な 時間が 増えた ことです。",
        "aVn": "Thời gian tự do tăng lên."
      },
      {
        "id": "b11-r10-q11",
        "q": "母の 料理に ついて、学生の 気持ちは どう 変わりましたか。",
        "qVn": "Cảm nghĩ của sinh viên về đồ ăn mẹ nấu thay đổi thế nào?",
        "hint": "Trước hay phàn nàn, giờ thấy thật biết ơn.",
        "aJp": "前は 文句を 言って いましたが、今は 本当に ありがたいと 思って います。",
        "aVn": "Trước hay phàn nàn, giờ thấy thật biết ơn."
      },
      {
        "id": "b11-r10-q12",
        "q": "近所の 人に ついて、どんな アドバイスが ありましたか。",
        "qVn": "Có lời khuyên gì về hàng xóm?",
        "hint": "Hãy chào hỏi hàng xóm. Khi khó khăn họ sẽ giúp.",
        "aJp": "近所の 人に 挨拶して ください。困った とき 助けて くれます。",
        "aVn": "Hãy chào hỏi hàng xóm. Khi khó khăn họ sẽ giúp."
      }
    ]
  },
  {
    "id": "b11-r11",
    "title": "R11: Ông và tôi (祖父と私)",
    "shortTitle": "Ông và tôi",
    "badge": "Bài 11 · R11",
    "description": "Ký ức cảm động về người ông hiền hậu, những bài học và kỷ niệm gắn bó tuổi thơ.",
    "category": "comprehension",
    "passage": {
      "jp": "私の 祖父は 80歳です。 祖父は 若い とき、外国で 働いて いました。 前は 日本語が 全然 わかりませんでしたが、今は ひらがなが 読めます。 祖父は 頭が いいです。毎日 新聞や 雑誌を 読んで います。 祖父は 昔 ギターを ひきました。今も ときどき ひきます。 でも、最近 よく 物を 忘れます。 去年の オリンピックの とき、祖父と 一緒に テレビを 見ました。 日本へ 来る とき、空港で 祖父と 別れました。 祖父は 「元気で ね」と 言いました。私は 「ええ、また 会おうね」と 言いました。 今日、学校で 祖父の 作文を 書きました。 祖父は 寝る 前に、いつも 電気を 消します。",
      "vn": "Ông tôi 80 tuổi. Hồi trẻ ông làm việc ở nước ngoài. Trước kia ông hoàn toàn không biết tiếng Nhật, nhưng bây giờ đọc được hiragana. Ông rất thông minh. Ngày nào ông cũng đọc báo, tạp chí. Ngày xưa ông chơi ghi-ta. Bây giờ thỉnh thoảng vẫn chơi. Nhưng gần đây ông hay quên đồ. Hồi Thế vận hội năm ngoái, tôi xem tivi cùng ông. Khi sang Nhật, tôi chia tay ông ở sân bay. Ông nói \"Giữ sức khỏe nhé\". Tôi nói \"Vâng, gặp lại ông sau nhé.\" Hôm nay ở trường tôi viết bài văn về ông. Ông lúc nào trước khi ngủ cũng tắt đèn."
    },
    "questions": [
      {
        "id": "b11-r11-q1",
        "q": "この 人の おじいさんは 何歳ですか。",
        "qVn": "Ông của người này bao nhiêu tuổi?",
        "hint": "80 tuổi.",
        "aJp": "80歳です。",
        "aVn": "80 tuổi."
      },
      {
        "id": "b11-r11-q2",
        "q": "おじいさんは 若い とき、どこで 働いて いましたか。",
        "qVn": "Hồi trẻ ông làm việc ở đâu?",
        "hint": "Làm việc ở nước ngoài.",
        "aJp": "外国で 働いて いました。",
        "aVn": "Làm việc ở nước ngoài."
      },
      {
        "id": "b11-r11-q3",
        "q": "おじいさんは 前は 日本語が わかりましたか。",
        "qVn": "Trước kia ông có biết tiếng Nhật không?",
        "hint": "Không, hoàn toàn không biết.",
        "aJp": "いいえ、全然 わかりませんでした。",
        "aVn": "Không, hoàn toàn không biết."
      },
      {
        "id": "b11-r11-q4",
        "q": "今、おじいさんは 日本語が どのくらい できますか。",
        "qVn": "Giờ ông biết tiếng Nhật đến mức nào?",
        "hint": "Đọc được hiragana.",
        "aJp": "ひらがなが 読めます。",
        "aVn": "Đọc được hiragana."
      },
      {
        "id": "b11-r11-q5",
        "q": "おじいさんは 毎日 何を 読んで いますか。",
        "qVn": "Ngày nào ông cũng đọc gì?",
        "hint": "Đọc báo, tạp chí.",
        "aJp": "新聞や 雑誌を 読んで います。",
        "aVn": "Đọc báo, tạp chí."
      },
      {
        "id": "b11-r11-q6",
        "q": "おじいさんは 昔 何を ひきましたか。今は どうですか。",
        "qVn": "Ngày xưa ông chơi nhạc cụ gì? Giờ thì sao?",
        "hint": "Chơi guitar. Giờ thỉnh thoảng vẫn chơi.",
        "aJp": "ギターを ひきました。今も ときどき ひきます。",
        "aVn": "Chơi guitar. Giờ thỉnh thoảng vẫn chơi."
      },
      {
        "id": "b11-r11-q7",
        "q": "最近、おじいさんは どう なりましたか。",
        "qVn": "Gần đây ông thế nào?",
        "hint": "Hay quên đồ.",
        "aJp": "よく 物を 忘れます。",
        "aVn": "Hay quên đồ."
      },
      {
        "id": "b11-r11-q8",
        "q": "去年の オリンピックの とき、何を しましたか。",
        "qVn": "Hồi Thế vận hội năm ngoái đã làm gì?",
        "hint": "Xem tivi cùng ông.",
        "aJp": "おじいさんと 一緒に テレビを 見ました。",
        "aVn": "Xem tivi cùng ông."
      },
      {
        "id": "b11-r11-q9",
        "q": "この 人は どこで おじいさんと 別れましたか。",
        "qVn": "Người này chia tay ông ở đâu?",
        "hint": "Chia tay ở sân bay.",
        "aJp": "空港で 別れました。",
        "aVn": "Chia tay ở sân bay."
      },
      {
        "id": "b11-r11-q10",
        "q": "別れる とき、おじいさんは 何と 言いましたか。",
        "qVn": "Lúc chia tay ông nói gì?",
        "hint": "Ông nói \"Giữ sức khỏe nhé\".",
        "aJp": "「元気で ね」と 言いました。",
        "aVn": "Ông nói \"Giữ sức khỏe nhé\"."
      },
      {
        "id": "b11-r11-q11",
        "q": "今日、学校で 何を 書きましたか。",
        "qVn": "Hôm nay ở trường người này viết gì?",
        "hint": "Viết bài văn về ông.",
        "aJp": "おじいさんの 作文を 書きました。",
        "aVn": "Viết bài văn về ông."
      },
      {
        "id": "b11-r11-q12",
        "q": "おじいさんは 寝る 前に、いつも 何を しますか。",
        "qVn": "Trước khi ngủ ông luôn làm gì?",
        "hint": "Tắt đèn.",
        "aJp": "電気を 消します。",
        "aVn": "Tắt đèn."
      }
    ]
  }
]

/** 9 chủ đề phản xạ theo mẫu câu ngữ pháp N5 → N4 */
export const GRAMMAR_SPEAKING_TOPICS: SpeedSpeakingTopic[] = [
  {
    "id": "tari-tari",
    "title": "Câu hỏi liệt kê hành động（〜たり、〜たり）",
    "shortTitle": "Liệt kê たり、たり",
    "badge": "〜たり、〜たり",
    "description": "Diễn tả liệt kê một vài hành động tiêu biểu trong số nhiều hành động trong ngày nghỉ hoặc dịp đặc biệt.",
    "questions": [
      {
        "id": "tari-1",
        "q": "～さんは日曜日、なにをしますか。",
        "qVn": "Bạn chủ nhật làm gì?",
        "hint": "Ngắm hoa, làm tiệc thịt nướng với gia đình",
        "aJp": "家族とお花見をしたり、バーベキューをしたりします。",
        "aVn": "Tôi ngắm hoa, làm tiệc nướng cùng với gia đình."
      },
      {
        "id": "tari-2",
        "q": "～さんは週末、なにをしますか。",
        "qVn": "Bạn cuối tuần làm gì?",
        "hint": "Ngắm pháo bông, xem lễ hội với người yêu",
        "aJp": "恋人と花火を見たり、お祭りを見たりします。",
        "aVn": "Tôi ngắm pháo hoa và xem lễ hội cùng người yêu."
      },
      {
        "id": "tari-3",
        "q": "～さんは夏休み、なにをしたいですか。",
        "qVn": "Nghỉ hè bạn muốn làm gì?",
        "hint": "Đi núi, đi biển",
        "aJp": "山に登ったり、海に行ったりしたいです。",
        "aVn": "Tôi muốn leo núi và đi biển."
      },
      {
        "id": "tari-4",
        "q": "～さんは休みの日、なにをしますか。",
        "qVn": "Ngày nghỉ bạn làm gì?",
        "hint": "Ăn, ngủ ở nhà",
        "aJp": "うちで食べたり、寝たりします。",
        "aVn": "Tôi ăn và ngủ ở nhà."
      }
    ],
    "category": "grammar"
  },
  {
    "id": "narimasu",
    "title": "Biến đổi trạng thái（〜くなります／〜になります）",
    "shortTitle": "Biến đổi なります",
    "badge": "〜なります",
    "description": "Diễn tả sự thay đổi về thời tiết, tuổi tác, trạng thái theo thời gian.",
    "questions": [
      {
        "id": "naru-1",
        "q": "北海道の天気はどうなりますか。",
        "qVn": "Thời tiết ở Hokkaido sẽ trở nên như thế nào?",
        "hint": "Lạnh",
        "aJp": "寒くなります。",
        "aVn": "Trời sẽ trở nên lạnh."
      },
      {
        "id": "naru-2",
        "q": "東京は火曜日に雨になりますか。",
        "qVn": "Tokyo vào thứ ba sẽ chuyển mưa phải không?",
        "hint": "Không mưa",
        "aJp": "いいえ、雨になりません。",
        "aVn": "Không, trời không mưa."
      },
      {
        "id": "naru-3",
        "q": "来年は何才になりますか。",
        "qVn": "Sang năm bạn sẽ bao nhiêu tuổi?",
        "hint": "20 tuổi",
        "aJp": "来年は20才になります。",
        "aVn": "Sang năm tôi sẽ 20 tuổi."
      },
      {
        "id": "naru-4",
        "q": "ベトナムは最近、暑くなりましたか。",
        "qVn": "Gần đây ở Việt Nam trời đã nóng lên phải không?",
        "hint": "Có nóng",
        "aJp": "はい、暑くなりました。",
        "aVn": "Vâng, trời đã trở nên nóng."
      }
    ],
    "category": "grammar"
  },
  {
    "id": "kanou-base",
    "title": "Khả năng cơ bản（〜ことができる · Nhóm chung）",
    "shortTitle": "Khả năng cơ bản",
    "badge": "〜ことができる",
    "description": "Luyện câu hỏi và trả lời về năng lực, khả năng thực hiện hành động với ngôi chung.",
    "questions": [
      {
        "id": "kb-1",
        "q": "妹さんは何才から話すことができましたか。",
        "qVn": "Em gái bạn đã có thể nói chuyện từ mấy tuổi?",
        "hint": "Từ 2 tuổi",
        "aJp": "2才から話すことができました。",
        "aVn": "Em gái tôi đã có thể nói chuyện từ năm 2 tuổi."
      },
      {
        "id": "kb-2",
        "q": "～さんの大学の図書館で雑誌を読むことができますか。",
        "qVn": "Ở thư viện trường đại học của bạn có thể đọc tạp chí không?",
        "hint": "Có thể đọc",
        "aJp": "はい、読むことができます。",
        "aVn": "Vâng, có thể đọc được."
      },
      {
        "id": "kb-3",
        "q": "弟さんは何才から歩くことができましたか。",
        "qVn": "Em trai bạn đã có thể đi bộ từ mấy tuổi?",
        "hint": "Từ 1 tuổi",
        "aJp": "1才から歩くことができました。",
        "aVn": "Em trai tôi đã có thể đi bộ từ 1 tuổi."
      },
      {
        "id": "kb-4",
        "q": "～さんの大学でパソコンを使うことができますか。",
        "qVn": "Ở trường đại học của bạn có thể dùng máy tính không?",
        "hint": "Có thể dùng",
        "aJp": "はい、使うことができます。",
        "aVn": "Vâng, có thể sử dụng được."
      },
      {
        "id": "kb-5",
        "q": "近くのコンビニでカードで食べ物を払うことができますか。",
        "qVn": "Ở cửa hàng tiện lợi gần đây có thể trả tiền đồ ăn bằng thẻ không?",
        "hint": "Có thể thanh toán",
        "aJp": "はい、払うことができます。",
        "aVn": "Vâng, có thể thanh toán bằng thẻ được."
      },
      {
        "id": "kb-6",
        "q": "～さんは何才から日本語を話すことができましたか。",
        "qVn": "Bạn đã có thể nói tiếng Nhật từ mấy tuổi?",
        "hint": "Từ 18 tuổi",
        "aJp": "18才から話すことができました。",
        "aVn": "Tôi đã có thể nói tiếng Nhật từ năm 18 tuổi."
      },
      {
        "id": "kb-7",
        "q": "～さんはケーキを作ることができますか。",
        "qVn": "Bạn có thể làm bánh ngọt không?",
        "hint": "Có thể làm bánh",
        "aJp": "はい、作ることができます。",
        "aVn": "Vâng, tôi có thể làm được."
      },
      {
        "id": "kb-8",
        "q": "～さんは車を運転することができますか。",
        "qVn": "Bạn có thể lái ô tô không?",
        "hint": "Có thể lái xe",
        "aJp": "はい、運転することができます。",
        "aVn": "Vâng, tôi có thể lái xe được."
      },
      {
        "id": "kb-9",
        "q": "～さんはバイクに乗ることができますか。",
        "qVn": "Bạn có thể đi xe máy không?",
        "hint": "Có thể đi xe máy",
        "aJp": "はい、乗ることができます。",
        "aVn": "Vâng, tôi có thể đi được."
      },
      {
        "id": "kb-10",
        "q": "～さんは一才から歩くことができましたか。",
        "qVn": "Bạn đã có thể đi bộ từ 1 tuổi phải không?",
        "hint": "Có, từ 1 tuổi đã biết đi",
        "aJp": "はい、一才から歩くことができました。",
        "aVn": "Vâng, tôi đã có thể đi bộ từ 1 tuổi."
      }
    ],
    "category": "grammar"
  },
  {
    "id": "kanou-char",
    "title": "Khả năng theo vai（Hùng, Anna, Park · Nhóm 2）",
    "shortTitle": "Khả năng theo vai",
    "badge": "フン・アンナ・パク",
    "description": "Luyện phản xạ giao tiếp xưng hô tên người và đại từ gia đình khiêm nhường (いもうと, おとうと).",
    "questions": [
      {
        "id": "kc-1",
        "q": "フンさん、妹さんは何才から話すことができましたか。",
        "qVn": "Bạn Hùng ơi, em gái bạn đã có thể nói chuyện từ mấy tuổi?",
        "hint": "Em gái biết nói từ 1 tuổi",
        "aJp": "妹は一才から話すことができました。",
        "aVn": "Em gái tôi đã có thể nói chuyện từ 1 tuổi."
      },
      {
        "id": "kc-2",
        "q": "アンナさんの大学の図書館で雑誌を読むことができますか。",
        "qVn": "Ở thư viện trường đại học của Anna có thể đọc tạp chí không?",
        "hint": "Có thể đọc",
        "aJp": "はい、読むことができます。",
        "aVn": "Vâng, có thể đọc được."
      },
      {
        "id": "kc-3",
        "q": "パクさん、弟さんは何才から歩くことができましたか。",
        "qVn": "Bạn Park ơi, em trai bạn đã có thể đi bộ từ mấy tuổi?",
        "hint": "Em trai biết đi từ 1 tuổi",
        "aJp": "弟は一才から歩くことができました。",
        "aVn": "Em trai tôi đã có thể đi bộ từ 1 tuổi."
      },
      {
        "id": "kc-4",
        "q": "フンさんの大学でパソコンを使うことができますか。",
        "qVn": "Ở trường đại học của bạn Hùng có thể dùng máy tính không?",
        "hint": "Có thể dùng",
        "aJp": "はい、使うことができます。",
        "aVn": "Vâng, có thể dùng được."
      },
      {
        "id": "kc-5",
        "q": "アンナさん、近くのコンビニでカードで食べ物を払うことができますか。",
        "qVn": "Bạn Anna ơi, ở cửa hàng tiện lợi gần đây có thể trả tiền đồ ăn bằng thẻ không?",
        "hint": "Có thể thanh toán",
        "aJp": "はい、払うことができます。",
        "aVn": "Vâng, có thể trả tiền được."
      },
      {
        "id": "kc-6",
        "q": "パクさんは何才から日本語を話すことができましたか。",
        "qVn": "Bạn Park đã có thể nói tiếng Nhật từ mấy tuổi?",
        "hint": "Từ 19 tuổi",
        "aJp": "19才から日本語を話すことができました。",
        "aVn": "Tôi đã có thể nói tiếng Nhật từ năm 19 tuổi."
      },
      {
        "id": "kc-7",
        "q": "フンさんはケーキを作ることができますか。",
        "qVn": "Bạn Hùng có thể làm bánh ngọt không?",
        "hint": "Có thể làm bánh",
        "aJp": "はい、作ることができます。",
        "aVn": "Vâng, tôi có thể làm được."
      },
      {
        "id": "kc-8",
        "q": "アンナさんは車を運転することができますか。",
        "qVn": "Bạn Anna có thể lái ô tô không?",
        "hint": "Có thể lái xe",
        "aJp": "はい、運転することができます。",
        "aVn": "Vâng, tôi có thể lái xe được."
      },
      {
        "id": "kc-9",
        "q": "パクさんはバイクに乗ることができますか。",
        "qVn": "Bạn Park có thể đi xe máy không?",
        "hint": "Có thể đi xe máy",
        "aJp": "はい、乗ることができます。",
        "aVn": "Vâng, tôi có thể đi được."
      },
      {
        "id": "kc-10",
        "q": "フンさんは一才から歩くことができましたか。",
        "qVn": "Bạn Hùng đã có thể đi bộ từ 1 tuổi phải không?",
        "hint": "Không thể (từ 1 tuổi chưa biết đi)",
        "aJp": "いいえ、一才からは歩くことができませんでした。",
        "aVn": "Không, từ 1 tuổi tôi chưa thể đi bộ được."
      }
    ],
    "category": "grammar"
  },
  {
    "id": "ryouto",
    "title": "Câu hỏi lượng từ & Tần suất（〜時間／〜回／〜冊／〜匹／〜人）",
    "shortTitle": "Lượng từ & Tần suất",
    "badge": "Lượng từ số đếm",
    "description": "Hỏi và trả lời nhanh về thời gian, tần suất, số con vật, số quyển sách và số lượng người thân.",
    "questions": [
      {
        "id": "rt-1",
        "q": "～さんは1日に何時間くらい寝ますか。",
        "qVn": "Một ngày bạn ngủ khoảng mấy tiếng?",
        "hint": "9 tiếng",
        "aJp": "9時間寝ます。",
        "aVn": "Tôi ngủ 9 tiếng."
      },
      {
        "id": "rt-2",
        "q": "～さんは1日に何時間日本語を勉強していますか。",
        "qVn": "Một ngày bạn học tiếng Nhật mấy tiếng?",
        "hint": "2 tiếng",
        "aJp": "2時間勉強しています。",
        "aVn": "Tôi học tiếng Nhật 2 tiếng."
      },
      {
        "id": "rt-3",
        "q": "うさぎが何匹いますか。",
        "qVn": "Có mấy con thỏ?",
        "hint": "3 con thỏ",
        "aJp": "3匹います。",
        "aVn": "Có 3 con thỏ."
      },
      {
        "id": "rt-4",
        "q": "コアラが何匹いますか。",
        "qVn": "Có mấy con gấu koala?",
        "hint": "6 con koala",
        "aJp": "6匹います。",
        "aVn": "Có 6 con koala."
      },
      {
        "id": "rt-5",
        "q": "～さんは1日に8時間寝ていますか。",
        "qVn": "Bạn có ngủ 8 tiếng một ngày không?",
        "hint": "Không, không ngủ 8 tiếng",
        "aJp": "いいえ、寝ていません。",
        "aVn": "Không, tôi không ngủ 8 tiếng."
      },
      {
        "id": "rt-6",
        "q": "～さんは1か月に何回映画館へ行きますか。",
        "qVn": "Một tháng bạn đi rạp chiếu phim mấy lần?",
        "hint": "1 lần",
        "aJp": "1回行きます。",
        "aVn": "Tôi đi 1 lần."
      },
      {
        "id": "rt-7",
        "q": "～さんは1週間に何回体育館へ行きますか。",
        "qVn": "Một tuần bạn đi nhà tập thể dục mấy lần?",
        "hint": "4 lần",
        "aJp": "4回行きます。",
        "aVn": "Tôi đi 4 lần."
      },
      {
        "id": "rt-8",
        "q": "～さんは1週間に本を何冊読みますか。",
        "qVn": "Một tuần bạn đọc mấy cuốn sách?",
        "hint": "1 cuốn",
        "aJp": "1冊読みます。",
        "aVn": "Tôi đọc 1 cuốn."
      },
      {
        "id": "rt-9",
        "q": "～さんは兄弟が何人いますか。",
        "qVn": "Bạn có mấy anh chị em?",
        "hint": "1 anh trai",
        "aJp": "兄が1人います。",
        "aVn": "Tôi có 1 người anh trai."
      },
      {
        "id": "rt-10",
        "q": "～さんは姉妹が何人いますか。",
        "qVn": "Bạn có mấy chị em gái?",
        "hint": "2 chị gái",
        "aJp": "姉が2人います。",
        "aVn": "Tôi có 2 người chị gái."
      }
    ],
    "category": "grammar"
  },
  {
    "id": "toki",
    "title": "Câu hỏi theo thời điểm（〜とき）",
    "shortTitle": "Thời điểm 〜とき",
    "badge": "〜とき",
    "description": "Hỏi và phản xạ trả lời về hành động xảy ra vào các thời điểm, hoàn cảnh khác nhau.",
    "questions": [
      {
        "id": "tk-1",
        "q": "～さんは暇なとき、よくインターネットをしますか。",
        "qVn": "Khi rảnh rỗi bạn có thường lướt internet không?",
        "hint": "Có, thường lướt internet",
        "aJp": "はい、よくインターネットをします。",
        "aVn": "Vâng, tôi thường lướt internet."
      },
      {
        "id": "tk-2",
        "q": "～さんは部屋を出るとき、電気をつけますか。",
        "qVn": "Khi rời khỏi phòng bạn có bật đèn không?",
        "hint": "Không, không bật điện",
        "aJp": "いいえ、電気をつけません。",
        "aVn": "Không, tôi không bật đèn."
      },
      {
        "id": "tk-3",
        "q": "～さんは高校生の時、アルバイトをしましたか。",
        "qVn": "Hồi còn là học sinh cấp 3, bạn có làm thêm không?",
        "hint": "Có, đã làm thêm",
        "aJp": "はい、アルバイトをしました。",
        "aVn": "Vâng, tôi đã từng làm thêm."
      },
      {
        "id": "tk-4",
        "q": "～さんは暇なとき、よくドラマを見ていますか。",
        "qVn": "Khi rảnh rỗi bạn có hay xem phim truyền hình không?",
        "hint": "Có, thường xem phim",
        "aJp": "はい、よくドラマを見ています。",
        "aVn": "Vâng, tôi thường xem phim."
      },
      {
        "id": "tk-5",
        "q": "～さんは大学に入ったとき、両親になにをもらいましたか。",
        "qVn": "Khi đỗ vào trường đại học, bạn đã nhận được quà gì từ bố mẹ?",
        "hint": "Nhận được tiền từ bố mẹ",
        "aJp": "両親にお金をもらいました。",
        "aVn": "Tôi đã nhận được tiền từ bố mẹ."
      },
      {
        "id": "tk-6",
        "q": "～さんは目が痛いとき、どうしますか。",
        "qVn": "Khi bị đau mắt bạn sẽ làm gì?",
        "hint": "Đi bệnh viện",
        "aJp": "病院へ行きます。",
        "aVn": "Tôi đi đến bệnh viện."
      },
      {
        "id": "tk-7",
        "q": "～さんは頭が痛いとき、どうしますか。",
        "qVn": "Khi bị đau đầu bạn sẽ làm gì?",
        "hint": "Đi bệnh viện",
        "aJp": "病院へ行きます。",
        "aVn": "Tôi đi đến bệnh viện."
      },
      {
        "id": "tk-8",
        "q": "～さんは日本へ行ったとき、だれに会いますか。",
        "qVn": "Khi sang Nhật Bản bạn sẽ gặp ai?",
        "hint": "Gặp Sakura-san",
        "aJp": "さくらさんに会います。",
        "aVn": "Tôi sẽ gặp bạn Sakura."
      }
    ],
    "category": "grammar"
  },
  {
    "id": "te-iru",
    "title": "Hành động đang diễn ra（〜ています）",
    "shortTitle": "Đang làm 〜ています",
    "badge": "〜ています",
    "description": "Hỏi và miêu tả hành động đang tiếp diễn của con người và loài vật.",
    "questions": [
      {
        "id": "ti-1",
        "q": "～さんはなにを勉強していますか。",
        "qVn": "Bạn đang học cái gì?",
        "hint": "Học tiếng Nhật",
        "aJp": "私は日本語を勉強しています。",
        "aVn": "Tôi đang học tiếng Nhật."
      },
      {
        "id": "ti-2",
        "q": "～さんは今だれとどこに住んでいますか。",
        "qVn": "Hiện nay bạn đang sống cùng ai và ở đâu?",
        "hint": "Với bố mẹ ở TP. Hồ Chí Minh",
        "aJp": "私は今、両親とホーチミン市に住んでいます。",
        "aVn": "Hiện tại tôi đang sống cùng bố mẹ tại TP. Hồ Chí Minh."
      },
      {
        "id": "ti-3",
        "q": "ペンギンがなにをしていますか。",
        "qVn": "Chim cánh cụt đang làm gì?",
        "hint": "Đang bơi",
        "aJp": "ペンギンがおよいでいます。",
        "aVn": "Chim cánh cụt đang bơi."
      },
      {
        "id": "ti-4",
        "q": "サルはなにをしていますか。",
        "qVn": "Con khỉ đang làm gì?",
        "hint": "Đang ăn chuối",
        "aJp": "サルはバナナを食べています。",
        "aVn": "Con khỉ đang ăn chuối."
      },
      {
        "id": "ti-5",
        "q": "クマがなにをしていますか。",
        "qVn": "Con gấu đang làm gì?",
        "hint": "Đang đi bộ",
        "aJp": "クマが歩いています。",
        "aVn": "Con gấu đang đi bộ."
      },
      {
        "id": "ti-6",
        "q": "ゾウはなにをしていますか。",
        "qVn": "Con voi đang làm gì?",
        "hint": "Đang uống nước",
        "aJp": "ゾウが水を飲んでいます。",
        "aVn": "Con voi đang uống nước."
      }
    ],
    "category": "grammar"
  },
  {
    "id": "shumi-kikou",
    "title": "Sở thích & Nghe thấy / Nhìn thấy（趣味／〜ができる／聞こえる／見える）",
    "shortTitle": "Sở thích & Giác quan",
    "badge": "趣味・聞こえる・見える",
    "description": "Nói về sở thích cá nhân, khả năng và tri giác tự nhiên (nghe thấy, nhìn thấy).",
    "questions": [
      {
        "id": "sk-1",
        "q": "趣味は本を読むことですか。",
        "qVn": "Sở thích của bạn có phải là đọc sách không?",
        "hint": "Đúng vậy",
        "aJp": "はい、そうです。",
        "aVn": "Vâng, đúng vậy."
      },
      {
        "id": "sk-2",
        "q": "趣味はなんですか。",
        "qVn": "Sở thích của bạn là gì?",
        "hint": "Đọc sách",
        "aJp": "趣味は本を読むことです。",
        "aVn": "Sở thích của tôi là đọc sách."
      },
      {
        "id": "sk-3",
        "q": "～さんはなにができますか。",
        "qVn": "Bạn có thể làm được cái gì?",
        "hint": "Nói tiếng Nhật",
        "aJp": "私は日本語を話すことができます。",
        "aVn": "Tôi có thể nói tiếng Nhật."
      },
      {
        "id": "sk-4",
        "q": "～さんはピアノを弾くことができますか。",
        "qVn": "Bạn có thể chơi đàn piano không?",
        "hint": "Không thể",
        "aJp": "いいえ、できません。",
        "aVn": "Không, tôi không thể."
      },
      {
        "id": "sk-5",
        "q": "～さんの部屋からなにが聞こえますか。",
        "qVn": "Từ phòng của bạn nghe thấy âm thanh gì?",
        "hint": "Nghe thấy tiếng nhạc",
        "aJp": "音楽が聞こえます。",
        "aVn": "Nghe thấy tiếng nhạc."
      },
      {
        "id": "sk-6",
        "q": "～さんのクラスから音楽が聞こえますか。",
        "qVn": "Từ lớp học của bạn có nghe thấy tiếng nhạc không?",
        "hint": "Có, nghe thấy",
        "aJp": "はい、聞こえます。",
        "aVn": "Vâng, tôi nghe thấy."
      },
      {
        "id": "sk-7",
        "q": "ここから隣の部屋の音が聞こえますか。",
        "qVn": "Từ đây có nghe thấy âm thanh của phòng bên cạnh không?",
        "hint": "Không nghe thấy",
        "aJp": "いいえ、聞こえません。",
        "aVn": "Không, không nghe thấy."
      },
      {
        "id": "sk-8",
        "q": "ここから海が見えますか。",
        "qVn": "Từ đây có nhìn thấy biển không?",
        "hint": "Không nhìn thấy",
        "aJp": "いいえ、見えません。",
        "aVn": "Không, không nhìn thấy."
      }
    ],
    "category": "grammar"
  },
  {
    "id": "cho-nhan",
    "title": "Câu hỏi Cho - Nhận（あげます／もらいます／くれます）",
    "shortTitle": "Cho & Nhận",
    "badge": "Cho - Nhận",
    "description": "Hỏi và trả lời về hành động tặng quà, nhận quà, gửi thư cho người khác.",
    "questions": [
      {
        "id": "cn-1",
        "q": "お父さんがなにをくれましたか。",
        "qVn": "Bố đã cho/tặng bạn cái gì?",
        "hint": "Tất (vớ) và cái ô (dù)",
        "aJp": "お父さんが私に靴下と傘をくれました。",
        "aVn": "Bố đã cho tôi đôi tất và chiếc ô."
      },
      {
        "id": "cn-2",
        "q": "友達になにをあげましたか。",
        "qVn": "Bạn đã tặng bạn bè cái gì?",
        "hint": "Dây chuyền và kim từ điển",
        "aJp": "私は友達にネックレスと電子辞書をあげました。",
        "aVn": "Tôi đã tặng bạn bè chiếc dây chuyền và kim từ điển."
      },
      {
        "id": "cn-3",
        "q": "メアリーさんになにをもらいましたか。",
        "qVn": "Bạn đã nhận được gì từ Mary?",
        "hint": "Quà và thiệp Giáng sinh",
        "aJp": "メアリーさんにプレゼントとクリスマスカードをもらいました。",
        "aVn": "Tôi đã nhận được món quà và thiệp Giáng sinh từ bạn Mary."
      },
      {
        "id": "cn-4",
        "q": "マルコさんになにを送りましたか。",
        "qVn": "Bạn đã gửi gì cho Marco?",
        "hint": "Thư và thiệp Giáng sinh",
        "aJp": "マルコさんに手紙とクリスマスカードを送りました。",
        "aVn": "Tôi đã gửi lá thư và thiệp Giáng sinh cho bạn Marco."
      },
      {
        "id": "cn-5",
        "q": "ランさんになにを書きましたか。",
        "qVn": "Bạn đã viết gì cho Lan?",
        "hint": "Viết thư",
        "aJp": "ランさんに手紙を書きました。",
        "aVn": "Tôi đã viết thư cho Lan."
      },
      {
        "id": "cn-6",
        "q": "～さんはバレンタインデーに恋人にチョコレートをあげますか。",
        "qVn": "Bạn vào ngày Valentine có tặng sô-cô-la cho người yêu không?",
        "hint": "Có, tặng sô-cô-la",
        "aJp": "はい、あげます。",
        "aVn": "Vâng, tôi có tặng."
      }
    ],
    "category": "grammar"
  },
  {
    "id": "te-kara",
    "title": "Chuỗi hành động và Trình tự thời gian（〜て、〜／〜てから）",
    "shortTitle": "Trình tự hành động て・てから",
    "badge": "〜て、〜／〜てから",
    "description": "Luyện phản xạ nghe hiểu các câu hỏi đưa ra hành động làm tiền đề và hỏi hành động tiếp theo.",
    "category": "grammar",
    "questions": [
      {
        "id": "tekara-1",
        "q": "～さんは映画を見て、なにをしますか。",
        "qVn": "Bạn xem phim xong thì làm gì?",
        "hint": "Đi ăn cơm với bạn ở nhà hàng",
        "aJp": "友達とレストランへ行って、ご飯を食べます。",
        "aVn": "Tôi đi đến nhà hàng với bạn rồi ăn cơm."
      },
      {
        "id": "tekara-2",
        "q": "～さんは授業が終わってから、どこへ行きますか。",
        "qVn": "Sau khi hết giờ học bạn đi đâu?",
        "hint": "Về nhà rồi nấu ăn",
        "aJp": "うちへ帰ってから、料理を作ります。",
        "aVn": "Sau khi về nhà thì tôi nấu ăn."
      },
      {
        "id": "tekara-3",
        "q": "～さんは朝起きてから、なにをしますか。",
        "qVn": "Buổi sáng thức dậy xong bạn làm gì?",
        "hint": "Chạy bộ rồi tắm",
        "aJp": "ジョギングをしてから、シャワーを浴びます。",
        "aVn": "Chạy bộ xong rồi tôi đi tắm."
      },
      {
        "id": "tekara-4",
        "q": "～さんは映画を見てから、すぐうちに帰りますか。",
        "qVn": "Xem phim xong bạn có về nhà ngay không?",
        "hint": "Không, đi uống cà phê với bạn",
        "aJp": "いいえ、友達とお茶を飲んでから帰ります。",
        "aVn": "Không, tôi uống trà với bạn xong rồi mới về."
      },
      {
        "id": "tekara-5",
        "q": "～さんはスーパーで買い物をして、なにをしますか。",
        "qVn": "Đi siêu thị mua sắm xong bạn làm gì?",
        "hint": "Về nhà cất đồ vào tủ lạnh",
        "aJp": "うちへ帰って、冷蔵庫に入れます。",
        "aVn": "Tôi về nhà rồi cất vào tủ lạnh."
      },
      {
        "id": "tekara-6",
        "q": "～さんは国へ帰ってから、なにをしたいですか。",
        "qVn": "Sau khi về nước bạn muốn làm gì?",
        "hint": "Làm việc ở công ty Nhật",
        "aJp": "日本の会社で働きたいです。",
        "aVn": "Tôi muốn làm việc ở công ty Nhật."
      }
    ]
  }
]

/** Tổng hợp tất cả các chủ đề luyện nói cấp tốc */
export const SPEED_SPEAKING_TOPICS: SpeedSpeakingTopic[] = [
  ...READING_COMPREHENSION_TOPICS,
  ...GRAMMAR_SPEAKING_TOPICS,
]

/**
 * Xóa toàn bộ furigana trong ngoặc vuông, ngoặc đơn để lấy chữ Hán thuần túy.
 */
export function cleanJapaneseText(text: string): string {
  return text
    .replace(/\[[^\]]*\]/g, '')
    .replace(/（[^）]*）/g, '')
    .replace(/\([^)]*\)/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Returns question text formatted for speech synthesis.
 * Replaces `～さん` or `~さん` with the learner's name or natural Japanese equivalent.
 */
export function formatQuestionSpeech(text: string, learnerName?: string): string {
  const clean = cleanJapaneseText(text)
  const name = learnerName?.trim()
  if (!name || name === 'Bạn' || name === 'bạn' || name === 'あなた') {
    return clean.replace(/[～~]さん/g, 'あなた')
  }
  return clean.replace(/[～~]さん/g, `${name}さん`)
}

/**
 * Returns question text formatted for display.
 */
export function formatQuestionDisplay(text: string, learnerName?: string): string {
  const clean = cleanJapaneseText(text)
  const name = learnerName?.trim()
  if (!name || name === 'Bạn' || name === 'bạn' || name === 'あなた') {
    return clean.replace(/[～~]さん/g, '～さん')
  }
  return clean.replace(/[～~]さん/g, `${name}さん`)
}
