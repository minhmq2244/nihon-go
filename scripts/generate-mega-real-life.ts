// scripts/generate-mega-real-life.ts
// Generates the Mega Real-Life Practical Scenarios for Lessons 1–11 (N5 synthesis)
// Updates src/lib/passiveListeningData.ts and content/generated/kaiwa/cd00.md

import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const campusLines = [
  {
    speaker: "健太",
    jp: "おはよう！ここ、隣（となり）の 席（せき） 空（あ）いてる？",
    vn: "Chào buổi sáng! Chỗ bên cạnh này còn trống không?"
  },
  {
    speaker: "あなた",
    jp: "おはようございます。ええ、空（あ）いて いますよ。どうぞ！",
    vn: "Chào buổi sáng. Vâng, còn trống đấy. Mời cậu ngồi!"
  },
  {
    speaker: "健太",
    jp: "ありがとう。俺（おれ）、佐藤（さとう）健太（けんた）。健太（けんた）って 呼（よ）んでね。よろしく！",
    vn: "Cảm ơn nhé. Mình là Sato Kenta. Cứ gọi mình là Kenta nhé. Rất vui được làm quen!"
  },
  {
    speaker: "あなた",
    jp: "私（わたし）は グエン・ミンです。ミンと 呼（よ）んで ください。こちらこそ、よろしく お願（ねが）いします。",
    vn: "Mình là Nguyễn Minh. Cứ gọi mình là Minh nhé. Rất vui được làm quen với Kenta."
  },
  {
    speaker: "健太",
    jp: "ミンくんは ベトナム出身（しゅっしん）？ 日本（にほん）に 来（き）て どれくらい？",
    vn: "Minh là người Việt Nam à? Cậu sang Nhật được bao lâu rồi?"
  },
  {
    speaker: "あなた",
    jp: "はい、ベトナムの ハノイから 来（き）ました。今年（ことし）の 4月（しがつ）に 来（き）たので、今（いま） ちょうど 6か月（ろっかげつ）です。",
    vn: "Đúng rồi, mình đến từ Hà Nội, Việt Nam. Mình sang từ tháng 4 năm nay nên giờ vừa tròn 6 tháng."
  },
  {
    speaker: "健太",
    jp: "へえ、そうなんだ！ 何歳（なんさい）なの？",
    vn: "Thế à! Năm nay cậu bao nhiêu tuổi rồi?"
  },
  {
    speaker: "あなた",
    jp: "20歳（はたち）です。健太（けんた）くんは？",
    vn: "Mình 20 tuổi. Còn Kenta?"
  },
  {
    speaker: "健太",
    jp: "俺（おれ）も 20歳（はたち）！ 同（おな）じ年（とし）じゃん。敬語（けいご）じゃなくて タメ口（ぐち）で いいよ！",
    vn: "Mình cũng 20 tuổi! Bằng tuổi nhau rồi. Không cần dùng kính ngữ đâu, nói chuyện tự nhiên thoải mái đi!"
  },
  {
    speaker: "あなた",
    jp: "あ、本当（ほんとう）？ じゃ、よろしくね、健太（けんた）。あ、すみません……あ、いや、ちょっと 頼（たの）んでも いい？",
    vn: "Thật à? Vậy nhờ cậu nhé, Kenta. À quên... ý mình là, nhờ cậu chút được không?"
  },
  {
    speaker: "健太",
    jp: "うん、何（なに）？ どうしたの？",
    vn: "Ừ, chuyện gì thế?"
  },
  {
    speaker: "あなた",
    jp: "ペンを 忘（わす）れて しまったんだけど、予備（よび）の ボールペン、ある？",
    vn: "Mình quên mang bút mất rồi, cậu có bút bi dự phòng ở đó không?"
  },
  {
    speaker: "健太",
    jp: "あるよ！ 赤（あか）と 黒（くろ）が あるけど、どっちが いい？",
    vn: "Có chứ! Có màu đỏ với màu đen, cậu lấy màu nào?"
  },
  {
    speaker: "あなた",
    jp: "黒（くろ）を 1本（いっぽん） 貸（か）して くれる？",
    vn: "Cho mình mượn 1 chiếc màu đen nhé?"
  },
  {
    speaker: "健太",
    jp: "はい、どうぞ。あ、あと 今日の 教科書（きょうかしょ）って、これだよね？",
    vn: "Đây, cầm lấy. À này, sách giáo khoa hôm nay là cuốn này đúng không?"
  },
  {
    speaker: "あなた",
    jp: "うん、そう。その 青（あお）い 本（ほん）だよ。机（つくえ）の 上（うえ）に 置（お）いて おこう。",
    vn: "Ừ, đúng rồi. Cuốn màu xanh đó đấy. Để sẵn lên bàn đi."
  },
  {
    speaker: "健太",
    jp: "よし。……あ、チャイム 鳴（な）った！ 先生（せんせい）が 来（く）るよ。",
    vn: "Xong. ...A, chuông reo rồi kìa! Thầy giáo đến đấy."
  },
  {
    speaker: "あなた",
    jp: "1時間目（いちじかんめ）は 山田（やまだ）先生（せんせい）の 授業（じゅぎょう）だね。",
    vn: "Tiết 1 là giờ của thầy Yamada nhỉ."
  },
  {
    speaker: "健太",
    jp: "（授業後）ふう〜、やっと 1時間目（いちじかんめ）が 終（お）わった！ 休憩（きゅうけい）だ！",
    vn: "(Sau giờ học) Phù~ cuối cùng cũng xong tiết 1 rồi! Giờ giải lao rồi!"
  },
  {
    speaker: "あなた",
    jp: "山田（やまだ）先生（せんせい）、少（すこ）し 厳（きび）しいけど、教（おし）え方（かた）が とても 分（わ）かりやすいね。",
    vn: "Thầy Yamada hơi nghiêm một chút nhưng cách giảng bài dễ hiểu thật nhỉ."
  },
  {
    speaker: "健太",
    jp: "うん、熱心（ねっしん）で いい 先生（せんせい）だよ。ねえ、喉（のど） 渇（かわ）かない？ 自販機（じはんき） 行（い）かない？",
    vn: "Ừ, thầy tâm huyết và tốt bụng lắm. Này, có khát nước không? Ra máy bán nước tự động đi!"
  },
  {
    speaker: "あなた",
    jp: "いいね、行（い）こう！ 自販機（じはんき）は どこに あるの？",
    vn: "Hay đấy, đi thôi! Máy bán nước ở đâu thế?"
  },
  {
    speaker: "健太",
    jp: "階段（かいだん）の 横（よこ）、トイレの すぐ 前（まえ）に あるよ。",
    vn: "Ở ngay cạnh cầu thang, phía trước nhà vệ sinh đấy."
  },
  {
    speaker: "あなた",
    jp: "あ、本当（ほんとう）だ。種類（しゅるい）が たくさん あるね。健太（けんた）は 何（なに）に する？",
    vn: "A, thấy rồi. Nhiều loại ghê. Kenta uống gì?"
  },
  {
    speaker: "健太",
    jp: "俺（おれ）は 冷（つめ）たい お茶（ちゃ）。ミンくんは？",
    vn: "Mình lấy trà xanh lạnh. Còn Minh?"
  },
  {
    speaker: "あなた",
    jp: "私（わたし）は この 缶（かん）コーヒーに する。130円（ひゃくさんじゅうえん）ね。",
    vn: "Mình chọn lon cà phê này. 130 yên nhỉ."
  },
  {
    speaker: "健太",
    jp: "（お茶を飲みながら）そういえば、ミンくんの 趣味（しゅみ）って 何（なに）？",
    vn: "(Vừa uống trà vừa hỏi) À mà này, sở thích của Minh là gì thế?"
  },
  {
    speaker: "あなた",
    jp: "私（わたし）の 趣味（しゅみ）は 映画（えいが）を 見（み）る ことと、サッカーだよ。健太（けんた）は？",
    vn: "Sở thích của mình là xem phim và đá bóng. Còn Kenta?"
  },
  {
    speaker: "健太",
    jp: "マジで？ 俺（おれ）も サッカー 大好（だいす）きだよ！ 日本（にほん）の アニメとかは 見（み）る？",
    vn: "Thật á? Mình cũng cực kỳ mê bóng đá đấy! Cậu có xem anime Nhật Bản không?"
  },
  {
    speaker: "あなた",
    jp: "もちろん！『鬼滅の刃』や『ONE PIECE』が 大好（だいす）きで、ベトナムでも よく 見（み）て いたよ。",
    vn: "Tất nhiên rồi! Mình rất thích Kimetsu no Yaiba với One Piece, hồi ở Việt Nam cũng xem suốt."
  },
  {
    speaker: "健太",
    jp: "すげえ！ ミンくん、日本語（にほんご） めっちゃ 上手（じょうず）じゃん！",
    vn: "Đỉnh thật! Minh nói tiếng Nhật siêu mượt luôn đấy!"
  },
  {
    speaker: "あなた",
    jp: "いやいや、まだまだ 下手（へた）だよ。日常（にちじょう）会話（かいわ）は まだ 分（わ）からない 言葉（ことば）も 多いし。",
    vn: "Đâu có, còn kém lắm. Giao tiếp hàng ngày mình còn nhiều từ chưa hiểu lắm."
  },
  {
    speaker: "健太",
    jp: "十分（じゅうぶん） 通（つう）じてるよ！ あ、今日の 授業（じゅぎょう）は 何時（なんじ）までだっけ？",
    vn: "Nói thế là người ta hiểu hết rồi! À, giờ học hôm nay đến mấy giờ ấy nhỉ?"
  },
  {
    speaker: "あなた",
    jp: "午後（ごご） 3時（さんじ）半（はん）までだよ。その あと、アルバイトが あるの？",
    vn: "Đến 3 giờ rưỡi chiều. Sau đó cậu có đi làm thêm không?"
  },
  {
    speaker: "健太",
    jp: "今日（きょう）は バイト ないよ。週（しゅう）に 3回（さんかい）だけ、居酒屋（いざかや）で 働（はたら）いてるんだ。",
    vn: "Hôm nay mình không làm thêm. Một tuần mình chỉ làm 3 buổi ở quán nhậu thôi."
  },
  {
    speaker: "あなた",
    jp: "そうなんだ。じゃ、放課後（ほうかご） 図書館（としょかん）で 一緒（いっしょ）に 宿題（しゅくだい） しない？",
    vn: "Thế à. Vậy tan học cùng nhau vào thư viện làm bài tập không?"
  },
  {
    speaker: "健太",
    jp: "いいね！ LINE やってる？ 連絡先（れんらくさき）、交換（こうかん）しようよ！",
    vn: "Hay đấy! Cậu có dùng LINE không? Đổi liên lạc đi!"
  },
  {
    speaker: "あなた",
    jp: "うん、やってるよ！ QRコード 見（み）せるね。これからも よろしくね！",
    vn: "Có chứ! Mình mở mã QR cho cậu quét nhé. Từ giờ giúp đỡ nhau nha!"
  }
]

const konbiniLines = [
  {
    speaker: "あなた",
    jp: "さくらさん、お腹（なか） 空（す）いたね。駅前（えきまえ）の コンビニに 寄（よ）って 行（い）かない？",
    vn: "Sakura ơi, đói bụng quá nhỉ. Ghé vào cửa hàng tiện lợi trước ga một lát không?"
  },
  {
    speaker: "さくら",
    jp: "うん、行（い）こう！ あそこの セブンイレブン、お弁当（べんとう）の 種類（しゅるい）が 多いんだよね。",
    vn: "Ừ, đi thôi! Cửa hàng 7-Eleven đằng kia nhiều loại cơm hộp lắm đấy."
  },
  {
    speaker: "あなた",
    jp: "（入店）いらっしゃいませの 声（こえ）が 元気（げんき）だね。お弁当（べんとう）コーナーは どこかな？",
    vn: "(Vào quán) Tiếng chào khách của nhân viên nghe tràn đầy năng lượng nhỉ. Quầy cơm hộp ở đâu ta?"
  },
  {
    speaker: "さくら",
    jp: "入（はい）って 右側（みぎがわ）の 奥（おく）だよ。おにぎりと サンドイッチも その 隣（となり）に あるよ。",
    vn: "Ở góc bên phải phía trong đấy. Cơm nắm và bánh mì kẹp cũng nằm ngay bên cạnh luôn."
  },
  {
    speaker: "あなた",
    jp: "あ、本当（ほんとう）だ！ わあ、唐揚（からあ）げ 弁当（べんとう）と ハンバーグ 弁当（べんとう）が ある。どっちが おいしいかな？",
    vn: "A, đúng rồi! Oa, có cả cơm hộp gà rán và cơm hộp thịt băm chiên Hamburg. Cái nào ngon hơn nhỉ?"
  },
  {
    speaker: "さくら",
    jp: "この 唐揚（からあ）げ 弁当（べんとう）、520円（ごひゃくにじゅうえん）で ボリューム あるし おすすめだよ！",
    vn: "Hộp cơm gà rán này 520 yên, đầy đặn lắm mà ăn ngon, mình highly recommend đấy!"
  },
  {
    speaker: "あなた",
    jp: "じゃ、これに しよう！ あと、冷（つめ）たい お茶（ちゃ）も 1本（いっぽん） 取（と）ってくるね。",
    vn: "Vậy mình chọn hộp này! À, mình qua lấy thêm một chai trà xanh lạnh nữa nhé."
  },
  {
    speaker: "さくら",
    jp: "うん。私（わたし）は 明太子（めんたいこ）の おにぎりと サラダに する。一緒（いっしょ）に レジ 並（なら）ぼう！",
    vn: "Ừ. Mình lấy một nắm cơm cá tuyết cay mentaiko và một hộp salad. Cùng ra quầy xếp hàng tính tiền nào!"
  },
  {
    speaker: "店員",
    jp: "いらっしゃいませ！ 次（つぎ）の お客様（きゃくさま）、どうぞ！",
    vn: "Kính chào quý khách! Xin mời quý khách tiếp theo ạ!"
  },
  {
    speaker: "あなた",
    jp: "お願（ねが）いします。これと これです。",
    vn: "Làm phiền tính giúp tôi ạ. Món này và món này."
  },
  {
    speaker: "店員",
    jp: "はい。お弁当（べんとう）、温（あたた）めますか？",
    vn: "Vâng. Cơm hộp có hâm nóng không ạ?"
  },
  {
    speaker: "あなた",
    jp: "はい、温（あたた）めて ください。",
    vn: "Có ạ, phiền anh hâm nóng giúp tôi."
  },
  {
    speaker: "店員",
    jp: "かしこまりました。少々（しょうしょう） お待（ま）ち ください。……お箸（はし）は 1膳（いちぜん）で よろしいですか？",
    vn: "Tôi hiểu rồi ạ, xin quý khách đợi một chút. ...Đũa lấy một đôi là được đúng không ạ?"
  },
  {
    speaker: "あなた",
    jp: "はい、1膳（いちぜん）で 大丈夫（だいじょうぶ）です。",
    vn: "Vâng, một đôi là được rồi ạ."
  },
  {
    speaker: "店員",
    jp: "レジ袋（ぶくろ）は ご利用（りよう）ですか？ 有料（ゆうりょう）で 3円（さんえん）に なります。",
    vn: "Quý khách có dùng túi nilon không ạ? Túi có tính phí 3 yên ạ."
  },
  {
    speaker: "あなた",
    jp: "いいえ、袋（ふくろ）は 結構（けっこう）です。マイバッグを 持（も）って います。",
    vn: "Dạ không cần đâu ạ. Tôi có mang sẵn túi cá nhân rồi."
  },
  {
    speaker: "店員",
    jp: "ありがとうございます。ポイントカードは お持（も）ちですか？",
    vn: "Cảm ơn quý khách. Quý khách có thẻ tích điểm không ạ?"
  },
  {
    speaker: "あなた",
    jp: "いいえ、持（も）って いないです。……あ、すみません！",
    vn: "Không, tôi không có thẻ ạ. ...A, xin lỗi anh!"
  },
  {
    speaker: "店員",
    jp: "はい、何（なに）でしょうか？",
    vn: "Vâng, quý khách cần gì thêm ạ?"
  },
  {
    speaker: "あなた",
    jp: "ホットスナックの コーナーから、ななチキを 1つ ください！",
    vn: "Ở quầy đồ nóng trong tủ kính, cho tôi lấy thêm 1 miếng gà Nana-chiki nữa nhé!"
  },
  {
    speaker: "店員",
    jp: "ななチキ 1つですね！ かしこまりました。ただいま お取（と）りします。",
    vn: "1 miếng gà Nana-chiki đúng không ạ! Tôi lấy ngay cho quý khách đây ạ."
  },
  {
    speaker: "さくら",
    jp: "（小声で）ミンくん、あの チキン めっちゃ おいしいよね！ ナイス チョイス！",
    vn: "(Nói nhỏ) Minh ơi, gà chiên ở quầy đó ngon đỉnh luôn á! Chọn chuẩn bài đấy!"
  },
  {
    speaker: "あなた",
    jp: "（小声で）うん、前（まえ）に 食（た）べて すごく おいしかったんだ。",
    vn: "(Nói nhỏ) Ừ, bữa trước mình ăn thử thấy ngon xuất sắc luôn."
  },
  {
    speaker: "店員",
    jp: "お待（ま）たせ いたしました。お弁当（べんとう）も 温（あたた）まりました。",
    vn: "Xin lỗi đã để quý khách đợi lâu. Cơm hộp cũng đã được hâm nóng xong rồi ạ."
  },
  {
    speaker: "あなた",
    jp: "ありがとうございます。",
    vn: "Cảm ơn anh nhiều."
  },
  {
    speaker: "店員",
    jp: "お会計（かいけい）は、全部（ぜんぶ）で 980円（きゅうひゃくはちじゅうえん）に なります。",
    vn: "Tổng số tiền thanh toán của quý khách là 980 yên ạ."
  },
  {
    speaker: "あなた",
    jp: "PayPayで 払（はら）えますか？",
    vn: "Tôi thanh toán bằng mã ví PayPay được không ạ?"
  },
  {
    speaker: "店員",
    jp: "はい、ご利用（りよう）いただけます。画面（がめん）の バーコードを リーダーに かざして ください。",
    vn: "Vâng, được ạ. Xin quý khách giơ mã vạch trên màn hình vào đầu đọc quét mã ạ."
  },
  {
    speaker: "あなた",
    jp: "（ピッ♪）はい、できました。",
    vn: "(Tít♪) Dạ xong rồi ạ."
  },
  {
    speaker: "店員",
    jp: "ありがとう ございます。レシートの お渡（わた）しです。お弁当（べんとう）、大変（たいへん） 熱（あつ）くなって おりますので お気（き）を つけて お持（も）ち ください。",
    vn: "Cảm ơn quý khách ạ. Xin gửi lại quý khách hóa đơn. Cơm hộp đang rất nóng nên xin quý khách cẩn thận khi cầm ạ."
  },
  {
    speaker: "あなた",
    jp: "はい、どうも ありがとう ございました！",
    vn: "Vâng, cảm ơn anh nhiều nhé!"
  },
  {
    speaker: "さくら",
    jp: "（外に出て）買（か）えたね！ コンビニの 前（まえ）の ベンチで 食（た）べようか。",
    vn: "(Bước ra ngoài) Mua xong xuôi rồi nhé! Ra ghế băng phía trước cửa hàng ngồi ăn luôn nha."
  },
  {
    speaker: "あなた",
    jp: "うん、天気（てんき）も いいし、ちょうど いいね。",
    vn: "Ừ, thời tiết đẹp thế này ngồi ngoài trời là chuẩn nhất."
  },
  {
    speaker: "さくら",
    jp: "いただきまーす！ ん〜、この おにぎり、やっぱり おいしい！",
    vn: "Mời cả nhà cùng xơi! Uầy, cơm nắm này ăn lúc nào cũng ngon tuyệt cú mèo!"
  },
  {
    speaker: "あなた",
    jp: "唐揚（からあ）げも できたてで アツアツだよ。安（やす）くて おいしいのは 本当（ほんとう）に 助（たす）かるね。",
    vn: "Thịt gà rán cũng vừa mới chiên nóng hổi giòn rụm luôn nè. Vừa rẻ vừa ngon đúng là cứu tinh của sinh viên."
  },
  {
    speaker: "さくら",
    jp: "だよね！ 日本（にほん）の コンビニって、何（なん）でも そろってて 便利（べんり）でしょ？",
    vn: "Chuẩn luôn! Konbini ở Nhật cái gì cũng có, tiện lợi dã man đúng không?"
  },
  {
    speaker: "あなた",
    jp: "本当（ほんとう）に そう思（おも）うよ。生活（せいかつ）に なくては ならない 存在（そんざい）だね。",
    vn: "Mình hoàn toàn công nhận luôn. Đúng là không thể thiếu trong cuộc sống hàng ngày."
  },
  {
    speaker: "さくら",
    jp: "ふふ、また 一緒（いっしょ）に 買（か）い物（もの） 来（こ）ようね！",
    vn: "Haha, bữa sau lại cùng nhau đi mua đồ ăn nữa nhé!"
  }
]

const routineLines = [
  {
    speaker: "リン",
    jp: "ミンくん、お疲（つか）れ様（さま）！ 今日（きょう）は これから どこか 行（い）くの？",
    vn: "Minh ơi, vất vả rồi nhé! Hôm nay tan học cậu có đi đâu nữa không?"
  },
  {
    speaker: "あなた",
    jp: "リンさん、お疲（つか）れ様（さま）！ 今日（きょう）は まっすぐ アパートに 帰（かえ）るよ。",
    vn: "Chào Linh, vất vả rồi! Hôm nay mình về thẳng phòng trọ thôi."
  },
  {
    speaker: "リン",
    jp: "そうなんだ。ミンくんって、普段（ふだん）の 1日（いちにち）の スケジュールって どんな 感じ（かんじ）なの？",
    vn: "Thế à. Bình thường lịch trình một ngày của Minh diễn ra như thế nào vậy?"
  },
  {
    speaker: "あなた",
    jp: "毎朝（まいあさ） 6時（ろくじ）半（はん）に 起（お）きて、朝（あさ）ご飯（はん）を 作（つく）って 食（た）べるよ。7時（しちじ）45分（よんじゅうごふん）に 家（いえ）を 出（で）るんだ。",
    vn: "Mỗi sáng mình dậy lúc 6 giờ rưỡi, tự nấu đồ ăn sáng rồi ăn. 7 giờ 45 là mình bước ra khỏi nhà."
  },
  {
    speaker: "リン",
    jp: "へえ、早（はや）いね！ 家（いえ）から 学校（がっこう）までは どうやって 来（く）るの？",
    vn: "Uầy, dậy sớm ghê! Từ nhà đến trường cậu đi bằng phương tiện gì?"
  },
  {
    speaker: "あなた",
    jp: "最寄（もよ）り駅（えき）から 電車（でんしゃ）で 来（く）るよ。JRの 中央線（ちゅうおうせん）に 乗（の）って、だいたい 30分（さんじゅっぷん）くらい かかるかな。",
    vn: "Mình đi bằng tàu điện từ ga gần nhà. Bắt tuyến JR Chuo Line, mất khoảng chừng 30 phút gì đấy."
  },
  {
    speaker: "リン",
    jp: "30分（さんじゅっぷん）なら 結構（けっこう） 近（ちか）くて いいね！ 定期券（ていきけん）は 買（か）ってるの？",
    vn: "30 phút thì khá gần và tiện đấy nhỉ! Cậu có mua vé tháng (teikiken) không?"
  },
  {
    speaker: "あなた",
    jp: "うん、通学（つうがく）定期（ていき）を 買（か）ったよ。学生（がくせい）割引（わりびき）が あるから、すごく 安（やす）く なったよ。",
    vn: "Có chứ, mình mua vé tháng học sinh sinh viên. Vì có giảm giá sinh viên nên rẻ đi được bao nhiêu luôn."
  },
  {
    speaker: "リン",
    jp: "よかったね！ 放課後（ほうかご）は いつも 何（なに）を してるの？",
    vn: "Tốt quá rồi! Thế tan học buổi chiều cậu thường làm gì?"
  },
  {
    speaker: "あなた",
    jp: "月曜日（げつようび）と 水曜日（すいようび）と 金曜日（きんようび）の 週（しゅう）に 3日（みっか）、夕方（ゆうがた） 5時（ごじ）から 9時（くじ）まで レストランで バイトしてるよ。",
    vn: "Thứ Hai, thứ Tư với thứ Sáu, tuần 3 buổi, mình đi làm thêm ở nhà hàng từ 5 giờ chiều đến 9 giờ tối."
  },
  {
    speaker: "リン",
    jp: "えらいね！ 勉強（べんきょう）と バイトの 両立（りょうりつ）、大変（たいへん）じゃない？",
    vn: "Chăm chỉ thật đấy! Vừa học vừa đi làm thêm không thấy vất vả à?"
  },
  {
    speaker: "あなた",
    jp: "少（すこ）し 疲（つか）れるけど、職場（しょくば）の 人（ひと）たちが 親切（しんせつ）だし、日本語（にほんご）の 練習（れんしゅう）に なるから 楽（たの）しいよ。",
    vn: "Hơi mệt một tẹo nhưng mọi người ở chỗ làm tốt bụng lắm, lại còn được luyện tiếng Nhật giao tiếp nữa nên thấy vui."
  },
  {
    speaker: "リン",
    jp: "前向き（まえむき）で すごいなあ。夜（よる）は 何時（なんじ）ごろ 寝（ね）るの？",
    vn: "Tích cực như vậy là đỉnh lắm nha. Tối thì khoảng mấy giờ cậu đi ngủ?"
  },
  {
    speaker: "あなた",
    jp: "だいたい 夜（よる）の 11時（じゅういちじ）半（はん）か 12時（じゅうにじ）ごろに 寝（ね）るよ。リンさんは 週末（しゅうまつ） 何（なに）か 予定（よてい） ある？",
    vn: "Tầm 11 giờ rưỡi đêm hoặc 12 giờ là mình ngủ. Linh ơi, cuối tuần này cậu có kế hoạch gì chưa?"
  },
  {
    speaker: "リン",
    jp: "今週（こんしゅう）の 日曜日（にちようび）は まだ 何（なに）も 予定（よてい） ないよ。暇（ひま）だよ！",
    vn: "Chủ nhật tuần này mình chưa có kế hoạch gì hết. Đang rảnh rỗi nè!"
  },
  {
    speaker: "あなた",
    jp: "じゃ、一緒（いっしょ）に 秋葉原（あきはばら）に 行（い）かない？ 新（あたら）しい ヘッドホンを 見（み）たいんだ。",
    vn: "Thế thì cùng đi Akihabara không? Mình đang muốn tìm xem một cái tai nghe mới."
  },
  {
    speaker: "リン",
    jp: "あ、いいね！ 私（わたし）も アニメグッズの お店（みせ）に 行（い）きたかったんだ！",
    vn: "A, duyệt luôn! Mình cũng đang muốn ghé mấy cửa hàng bán đồ anime ở đó!"
  },
  {
    speaker: "あなた",
    jp: "じゃ、秋葉原（あきはばら）で 有名（ゆうめい）な ラーメン屋（や）も あるから、お昼（ひる）ご飯（はん）は そこで 食（た）べよう！",
    vn: "Vậy ở Akiba có quán mì ramen nổi tiếng lắm, trưa tụi mình ghé đó ăn luôn nhé!"
  },
  {
    speaker: "リン",
    jp: "賛成（さんせい）！ 何時（なんじ）に どこで 待（ま）ち合（あ）わせする？",
    vn: "Nhất trí 100%! Mấy giờ gặp và hẹn ở đâu được nhỉ?"
  },
  {
    speaker: "あなた",
    jp: "日曜日（にちようび）の 午前（ごぜん） 10時（じゅうじ）に、秋葉原（あきはばら）駅（えき）の 電気街口（でんきがいぐち）の 改札（かいさつ）前（まえ）は どう？",
    vn: "10 giờ sáng Chủ nhật, ở ngay trước cửa soát vé cổng Điện Tử (Denki-gai-guchi) ga Akihabara được không?"
  },
  {
    speaker: "リン",
    jp: "バッチリ！ 分（わ）かりやすいね。10時（じゅうじ）ちょっと 前（まえ）に 行（い）くね。あ、電車（でんしゃ）は 何線（なにせん）で 来（く）るの？",
    vn: "Chuẩn bài! Chỗ đó dễ tìm ghê. Mình sẽ đến trước 10 giờ một tẹo nhé. À, cậu đi bằng tuyến tàu nào tới?"
  },
  {
    speaker: "あなた",
    jp: "中央線（ちゅうおうせん）で 新宿（しんじゅく）まで 行（い）って、山手線（やまのてせん）に 乗（の）り換（か）えるよ。",
    vn: "Mình đi tuyến Chuo đến ga Shinjuku rồi đổi sang tuyến vòng tròn Yamanote."
  },
  {
    speaker: "リン",
    jp: "新宿（しんじゅく）駅（えき）は 人（ひと）が 多（おお）いし 迷（まよ）いやすいから、気（き）を つけてね！ ホームの 案内板（あんないばん）を よく 見（み）てね。",
    vn: "Ga Shinjuku đông người với dễ lạc lắm đấy, cẩn thận nhé! Nhớ nhìn kỹ bảng chỉ dẫn ở sân ga."
  },
  {
    speaker: "あなた",
    jp: "うん、ありがとう。あ、お昼（ひる）の ラーメンなんだけど、食券（しょっけん）を 先（さき）に 買（か）う お店（みせ）だよ。",
    vn: "Ừ, cảm ơn cậu. À, quán mì ramen trưa là kiểu mua vé ăn tự động trước đấy."
  },
  {
    speaker: "リン",
    jp: "券売機（けんばいき）で 買（か）うんだね。いくらぐらい？",
    vn: "Mua ở máy bán vé tự động nhỉ. Khoảng bao nhiêu tiền một bát?"
  },
  {
    speaker: "あなた",
    jp: "一番（いちばん） 人気（にんき）の 醤油（しょうゆ）ラーメンは 850円（はっぴゃくごじゅうえん）だよ。大盛（おおも）りも 無料（むりょう）だよ！",
    vn: "Bát mì ramen nước tương shoyu đắt khách nhất giá 850 yên. Còn được nâng lên bát to miễn phí nữa cơ!"
  },
  {
    speaker: "リン",
    jp: "最高（さいこう）じゃん！ めっちゃ 楽（たの）しみ！",
    vn: "Đỉnh chóp luôn! Nghe là thấy thèm và mong đến Chủ nhật rồi đấy!"
  },
  {
    speaker: "あなた",
    jp: "うん。もし 電車（でんしゃ）が 遅（おく）れたり 道（みち）に 迷（まよ）ったり したら、すぐ LINE してね。",
    vn: "Ừ. Nếu lỡ tàu bị trễ hay lạc đường thì nhắn tin LINE cho mình ngay nhé."
  },
  {
    speaker: "リン",
    jp: "了解（りょうかい）！ じゃ、日曜日（にちようび） 楽（たの）しみにしてるね。また 明日（あした） 学校（がっこう）で！",
    vn: "Rõ rồi! Vậy Chủ nhật gặp nhé. Hẹn mai gặp lại ở trường!"
  },
  {
    speaker: "あなた",
    jp: "うん、また 明日（あした）ね！ 今日（きょう）は 暖（あたた）かくして ゆっくり 休（やす）んでね。おやすみ！",
    vn: "Ừ, mai gặp nhé! Hôm nay giữ ấm và nghỉ ngơi cho khỏe nha. Ngủ ngon!"
  },
  {
    speaker: "リン",
    jp: "おやすみー！",
    vn: "Ngủ ngon nha!"
  }
]

const dormLines = [
  {
    speaker: "大輔",
    jp: "（ピンポーン♪）ミンくん、大輔（だいすけ）だけど、今（いま） 大丈夫（だいじょうぶ）？",
    vn: "(Bính boong♪) Minh ơi, Daisuke đây, giờ cậu có rảnh không?"
  },
  {
    speaker: "あなた",
    jp: "（ドアを開けて）あ、大輔（だいすけ）くん！ どうぞ、入（はい）って！",
    vn: "(Mở cửa) A, Daisuke! Mời vào, vào nhà đi cậu!"
  },
  {
    speaker: "大輔",
    jp: "お邪魔（じゃま）します！ うわあ、引（ひ）っ越（こ）したばかりなのに、部屋（へや） めっちゃ キレイにしてるね！",
    vn: "Làm phiền cậu nhé! Uầy, mới chuyển nhà đến mà phòng ốc dọn dẹp sạch đẹp gọn gàng thế!"
  },
  {
    speaker: "あなた",
    jp: "ありがとう。昨日（きのう） やっと 荷物（にもつ）の 片付（かたづ）けが 終（お）わったところなんだ。",
    vn: "Cảm ơn cậu nhé. Hôm qua mình mới vừa dọn dẹp xong đống đồ đạc đấy."
  },
  {
    speaker: "大輔",
    jp: "日当（ひあ）たりも いいし、広（ひろ）くて 居心地（いごこち） 良（よ）さそうな 部屋（へや）じゃん！",
    vn: "Phòng đón nắng tốt, lại rộng rãi thế này ở thích mê luôn còn gì!"
  },
  {
    speaker: "あなた",
    jp: "うん、家賃（やちん）は 1か月（いっかげつ） 4万（よんまん）5千円（ごせんえん）で、水道代（すいどうだい）も 含（ふく）まれてるから 気（き）に 入（い）ってるよ。",
    vn: "Ừ, tiền nhà 1 tháng 45.000 yên, đã bao gồm cả tiền nước rồi nên mình ưng ý lắm."
  },
  {
    speaker: "大輔",
    jp: "東京（とうきょう）で その 値段（ねだん）は かなり 安（やす）いよ！ 当（あ）たり 物件（ぶっけん）だね。",
    vn: "Ở Tokyo mà giá đó là quá rẻ luôn đấy! Đúng là vớ được căn trọ hời."
  },
  {
    speaker: "あなた",
    jp: "あ、そうだ。ベトナムの お土産（みやげ）なんだけど、これ、ベトナムの コーヒー。どうぞ！",
    vn: "A, đúng rồi. Mình có chút quà mang từ Việt Nam sang, đây là cà phê Việt Nam. Tặng cậu nè!"
  },
  {
    speaker: "大輔",
    jp: "えっ、本当（ほんとう）に？ ありがとう！ ベトナムコーヒー、飲（の）んで みたかったんだよね！",
    vn: "Ủa, thật á? Cảm ơn cậu nhiều nhé! Mình đã muốn uống thử cà phê Việt Nam từ lâu rồi đấy!"
  },
  {
    speaker: "あなた",
    jp: "コンデンスミルクを 入（い）れて 飲（の）むと、すごく 甘（あま）くて おいしいよ。",
    vn: "Cho thêm chút sữa đặc vào khuấy đều uống ngọt thơm béo ngậy ngon lắm."
  },
  {
    speaker: "大輔",
    jp: "絶対（ぜったい） 試（ため）してみるよ！ あ、そういえば 段ボール（ダンボール） 開（あ）ける ハサミか カッター、持（も）ってる？",
    vn: "Nhất định mình sẽ thử! À mà này, cậu có kéo hay dao rọc giấy để khui thùng carton không?"
  },
  {
    speaker: "あなた",
    jp: "あるよ！ 机（つくえ）の 引き出し（ひきだし）の 中（なか）に ハサミが あるから、使（つか）って。",
    vn: "Có chứ! Trong ngăn kéo bàn học có chiếc kéo đấy, cậu cứ lấy dùng tự nhiên."
  },
  {
    speaker: "大輔",
    jp: "助（たす）かる！ ……あ、あと Wi-Fiの 設定（せってい）は もう できた？",
    vn: "Cứu tinh đây rồi! ...A, thế cài đặt mạng Wi-Fi cậu làm được chưa?"
  },
  {
    speaker: "あなた",
    jp: "実は パスワードを 入（い）れたんだけど、まだ うまく つながらなくて 困（こま）ってるんだ。",
    vn: "Thực ra mình nhập mật khẩu rồi mà nó cứ báo lỗi chưa kết nối được, đang loay hoay mãi."
  },
  {
    speaker: "大輔",
    jp: "どれどれ、ちょっと ルーター 見（み）せて。……あ、この ボタンを 5秒（ごびょう） 長押（ながお）しするんだよ。",
    vn: "Đâu đâu, đưa router mình xem thử nào. ...A, cái nút này cậu phải bấm giữ 5 giây cơ."
  },
  {
    speaker: "あなた",
    jp: "あ、ランプが 緑（みどり）に 変（か）わった！ つながったよ！ すごい！",
    vn: "A, đèn đổi sang màu xanh lá rồi kìa! Bắt được mạng rồi! Đỉnh thật đấy!"
  },
  {
    speaker: "大輔",
    jp: "よかった！ これで ネットも 動画（どうが）も 見放題（みほうだい）だね。あ、ごみの 分別（ぶんべつ）ルールは もう 分（わ）かる？",
    vn: "Tốt quá rồi! Tha hồ lướt web cày phim nhé. À, quy định phân loại rác ở khu này cậu đã rõ chưa?"
  },
  {
    speaker: "あなた",
    jp: "実は まだ よく 分（わ）からなくて……。ペットボトルや 缶（かん）は どう すれば いいの？",
    vn: "Thật ra mình cũng chưa nắm rõ lắm... Chai nhựa với vỏ lon thì xử lý thế nào vậy cậu?"
  },
  {
    speaker: "大輔",
    jp: "燃（も）える ごみは 火曜日（かようび）と 金曜日（きんようび）の 朝（あさ）8時（はちじ）まで。ペットボトルは ラベルと キャップを 取（と）って、水曜日（すいようび）に 出（だ）すんだよ。",
    vn: "Rác cháy được thì vứt trước 8 giờ sáng thứ Ba và thứ Sáu. Còn chai nhựa thì nhớ bóc nhãn tháo nắp ra rồi vứt vào thứ Tư nhé."
  },
  {
    speaker: "あなた",
    jp: "なるほど！ 日本（にほん）は 分別（ぶんべつ）が 細（こま）かいね。カレンダーに メモして おくよ。",
    vn: "Ra là vậy! Ở Nhật phân loại rác chi tiết thật đấy. Mình phải note ngay vào lịch mới được."
  },
  {
    speaker: "大輔",
    jp: "慣（な）れれば 簡単（かんたん）だよ。あと、近所（きんじょ）の スーパーは 夜（よる） 7時（しちじ）過（す）ぎに 行（い）くと 半額（はんがく）シールが 貼（は）られるから おすすめ！",
    vn: "Quen rồi thì thấy đơn giản thôi. À, siêu thị gần đây sau 7 giờ tối hay dán tem giảm giá nửa giá (50%) lắm đấy, tha hồ tiết kiệm!"
  },
  {
    speaker: "あなた",
    jp: "本当（ほんとう）！？ それは すごく ありがたい 情報（じょうほう）だよ！",
    vn: "Thật á!? Thông tin này đáng giá nghìn vàng luôn đấy cậu!"
  },
  {
    speaker: "大輔",
    jp: "留学生（りゅうがくせい）の 節約（せつやく）の 必殺技（ひっさつわざ）だからね（笑）。",
    vn: "Tuyệt chiêu tiết kiệm sinh tồn của du học sinh tụi mình mà (cười)."
  },
  {
    speaker: "あなた",
    jp: "あはは！ 本当（ほんとう）に ありがとう、大輔（だいすけ）くん。お礼（れい）に、今（いま）から 簡単（かんたん）な ベトナム料理（りょうり） 作（つく）るから、一緒（いっしょ）に 食（た）べて いかない？",
    vn: "Haha! Thật sự cảm ơn Daisuke nhiều lắm. Để cảm ơn, giờ mình nấu món Việt Nam đơn giản mời cậu ăn cùng nhé?"
  },
  {
    speaker: "大輔",
    jp: "えっ、いいの！？ ミンくんの 手料理（てりょうり）、めっちゃ 食（た）べてみたい！ ごちそうに なるよ！",
    vn: "Hả, được thế thì còn gì bằng!? Mình tò mò muốn ăn đồ Minh tự nấu lắm! Cho mình xin một chân ăn chực nha!"
  },
  {
    speaker: "あなた",
    jp: "よし、じゃあ 一緒（いっしょ）に 作（つく）ろう！ 冷蔵庫（れいぞうこ）から お肉（にく）と 卵（たまご）と 野菜（やさい） 出（だ）すね！",
    vn: "Ok, vậy tụi mình cùng bắt tay vào làm nào! Để mình lấy thịt, trứng với rau trong tủ lạnh ra nhé!"
  },
  {
    speaker: "大輔",
    jp: "手伝（てつだ）うよ！ 野菜（やさい） 切（き）ろうか？",
    vn: "Mình phụ một tay cho! Cần mình thái rau không?"
  },
  {
    speaker: "あなた",
    jp: "じゃ、玉（たま）ねぎを 切（き）って くれる？ 醤油（しょうゆ）と 砂糖（さとう）で 味付（あじつ）けしよう！",
    vn: "Vậy cậu thái giúp mình củ hành tây nhé? Nêm chút xì dầu với đường là thơm nức mũi luôn!"
  },
  {
    speaker: "大輔",
    jp: "任（まか）せて！ うわあ、いい 匂（にお）いが してきた！ いただきまーす！",
    vn: "Cứ để mình lo! Uầy, mùi thơm bốc lên nức mũi rồi nè! Mời cả nhà cùng xơi!"
  },
  {
    speaker: "あなた",
    jp: "どうぞ！ 召（め）し上（あ）がれ！",
    vn: "Mời cậu ăn tự nhiên!"
  },
  {
    speaker: "大輔",
    jp: "うまっ！ めっちゃ おいしい！ ミンくん、料理（りょうり） 上手（じょうず）だね！",
    vn: "Ngon đỉnh! Ngon dã man luôn á! Minh nấu ăn siêu thật đấy!"
  },
  {
    speaker: "あなた",
    jp: "口（くち）に 合（あ）って よかった！ また いつでも 遊（あそ）びに 来（き）てね！",
    vn: "Cậu thấy vừa miệng là mình vui rồi! Bữa nào rảnh lại cứ ghé qua phòng mình chơi nha!"
  }
]

// Now build the mega playlist structure
const megaPlaylist = {
  id: "mega-b01-b11",
  title: "MEGA MIX · 実践生活会話（じっせんせいかつかいわ）",
  titleVn: "MEGA MIX · Đại Tổng Ôn Thực Chiến Đời Thường (Bài 1 – 11)",
  description: "Trường đoạn nghe thụ động dài hơn 40 phút liên tục, chuyển hóa trọn vẹn ngữ pháp, từ vựng và phản xạ của Bài 1 đến Bài 11 thành 4 siêu kịch bản chân thực ngoài đời: Trường học, Konbini, Tàu điện nhịp sống & Nhà trọ.",
  category: "topic",
  badge: "⭐ ĐẠI TỔNG ÔN ĐỜI THƯỜNG (BÀI 1–11)",
  accentColor: "from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-600",
  tracks: [
    {
      id: "track-mega-campus",
      title: "学校（がっこう）の 1日（いちにち）と 新（あたら）しい 友達（ともだち）",
      titleVn: "Trường học, Giờ giải lao & Làm quen bạn mới (Bài 1, 2, 3, 5, 8, 9, 10)",
      category: "topic",
      tag: "Siêu Kịch Bản 1 · Đời sống học đường",
      lines: campusLines
    },
    {
      id: "track-mega-konbini",
      title: "戦神（せんしん）コンビニと 街（まち）の 買（か）い物（もの）",
      titleVn: "Chiến thần Konbini & Ăn uống đường phố (Bài 2, 6, 10, 11)",
      category: "topic",
      tag: "Siêu Kịch Bản 2 · Mua sắm & Ăn uống",
      lines: konbiniLines
    },
    {
      id: "track-mega-routine",
      title: "毎日の生活（せいかつ）リズムと 週末（しゅうまつ）の 約束（やくそく）",
      titleVn: "Nhịp sống hàng ngày, Tàu điện & Hẹn cuối tuần (Bài 3, 4, 5, 6, 11)",
      category: "topic",
      tag: "Siêu Kịch Bản 3 · Lịch trình & Đi lại",
      lines: routineLines
    },
    {
      id: "track-mega-dorm",
      title: "アパートの 暮（く）らしと 助（たす）け合（あ）い",
      titleVn: "Nhà trọ, Mượn đồ & Sinh hoạt tự lập (Bài 7, 8, 10, 11)",
      category: "topic",
      tag: "Siêu Kịch Bản 4 · Phòng ốc & Tự lập",
      lines: dormLines
    }
  ]
}

// 1. Update passiveListeningData.ts cleanly
const pldPath = join(process.cwd(), 'src', 'lib', 'passiveListeningData.ts')
let pldContent = readFileSync(pldPath, 'utf8')

// If mega-b01-b11 exists, replace the whole array start or replace its block
const jsonStr = JSON.stringify(megaPlaylist, null, 2)
if (pldContent.includes('"id": "mega-b01-b11"')) {
  // Replace existing block up to mega-b08-b11
  const markerStart = 'export const PASSIVE_PLAYLISTS: PassivePlaylist[] = ['
  const markerEnd = '    "id": "mega-b08-b11",'
  const idxStart = pldContent.indexOf(markerStart)
  const idxEnd = pldContent.indexOf(markerEnd)
  if (idxStart !== -1 && idxEnd !== -1) {
    pldContent = pldContent.slice(0, idxStart + markerStart.length) + '\n  ' + jsonStr + ',\n  {\n' + pldContent.slice(idxEnd)
  }
} else {
  const insertMarker = 'export const PASSIVE_PLAYLISTS: PassivePlaylist[] = ['
  pldContent = pldContent.replace(insertMarker, `${insertMarker}\n  ${jsonStr},`)
}

if (!pldContent.includes('getMegaRealLifePlaylist')) {
  const bottomCode = `
export function getMegaRealLifePlaylist(): PassivePlaylist {
  return PASSIVE_PLAYLISTS.find((p) => p.id === 'mega-b01-b11') || PASSIVE_PLAYLISTS[0]!
}
`
  pldContent += bottomCode
}

writeFileSync(pldPath, pldContent, 'utf8')
console.log('Updated src/lib/passiveListeningData.ts with expanded mega-b01-b11')

// 2. Generate cd00.md content with these 4 rich dialogues
function formatDialogue(title: string, code: string, scene: string, roles: string, lines: Array<{speaker: string, jp: string, vn: string}>) {
  let md = `## DIALOGUE ${code} · ${title}\n`
  md += `@scene: ${scene}\n`
  md += `@roles: ${roles}\n`
  for (const l of lines) {
    const spKey = l.speaker === 'あなた' ? 'B[あなた]' : `A[${l.speaker}]`
    md += `${spKey}: ${l.jp} || ${l.vn}\n`
  }
  md += '\n'
  return md
}

const cd00Path = join(process.cwd(), 'content', 'generated', 'kaiwa', 'cd00.md')
const cd00Header = `# kaiwa cd00 · 基礎のまとめ — Kaiwa nền tảng thực chiến đời thường

## CHUNKS
- おはようございます。ここ、空（あ）いて いますか。 || Chào buổi sáng. Chỗ này còn trống không ạ? >> Mở đầu làm quen.
- ベトナムの ハノイから 来（き）ました。 || Tôi đến từ Hà Nội, Việt Nam. >> Tự giới thiệu quê quán.
- タメ口（ぐち）で いいよ！ || Nói chuyện thân mật thoải mái đi! >> Rút ngắn khoảng cách bạn bè.
- お弁当（べんとう）、温（あたた）めますか。 || [NV Konbini] Cơm hộp có hâm nóng không ạ? >> Câu hỏi quen thuộc ở Konbini.
- レジ袋（ぶくろ）は ご利用（りよう）ですか。 || [NV Konbini] Quý khách có dùng túi nilon không ạ? >> Câu hỏi tính phí túi.
- PayPayで 払（はら）えますか。 || Trả bằng PayPay được không ạ? >> Hỏi phương thức thanh toán.
- 家（いえ）から 学校（がっこう）まで 電車（でんしゃ）で 30分（さんじゅっぷん）です。 || Từ nhà đến trường đi tàu điện mất 30 phút. >> Lộ trình và thời gian.
- 一緒（いっしょ）に 秋葉原（あきはばら）に 行（い）かない？ || Cùng đi Akihabara không? >> Rủ rê bạn bè tự nhiên.
- 10時（じゅうじ）ちょっと 前（まえ）に 改札（かいさつ）前（まえ）で 会（あ）おう。 || Gặp nhau trước cửa soát vé trước 10 giờ một chút nhé. >> Hẹn giờ địa điểm.
- お邪魔（じゃま）します！ 部屋（へや） キレイにしてるね！ || Xin phép vào nhà! Phòng sạch đẹp gọn gàng ghê! >> Lời chào khi vào nhà người khác.
- ベトナムの お土産（みやげ）なんだけど、これ、どうぞ！ || Quà từ Việt Nam này, tặng cậu nhé! >> Tặng quà chào hỏi thân mật.
- Wi-Fiの 設定（せってい）、手伝（てつだ）って くれる？ || Giúp mình cài đặt Wi-Fi được không? >> Nhờ vả bạn bè.

## FRAMES
- ［場所／学校］まで ［Phương tiện］で ［Thời gian］くらい かかります。 || Đi đến [đâu] bằng [gì] mất khoảng [bao lâu].
- ［Thời gian］、一緒に ［Địa điểm／Hoạt động］に ［行かない？／しない？］。 || Rủ bạn bè bằng thể ngắn tự nhiên.
- ［Đồ vật］の ［使い方が 分かりません／設定］を ［手伝って くれる？］。 || Nhờ bạn giúp đỡ đồ dùng trong nhà.
- すみません、［ホットスナック］を ［Số lượng］ ください。 || Mua thêm đồ nóng tại quầy thu ngân Konbini.

`

const d1 = formatDialogue(
  'Trường học, Giờ giải lao & Làm quen bạn mới',
  'K01',
  'Buổi sáng đầu giờ tại trường tiếng Nhật, bạn ngồi cạnh Kenta, làm quen, mượn đồ, cùng ra máy bán nước tự động uống trà và hẹn nhau học bài.',
  'A=健太; B=Bạn',
  campusLines
)

const d2 = formatDialogue(
  'Chiến thần Konbini & Mua sắm đời sống',
  'K02',
  'Sau giờ học, bạn cùng Sakura ghé vào cửa hàng tiện lợi 7-Eleven mua cơm hộp, đồ uống, thanh toán tại quầy thu ngân và ngồi ăn ngoài công viên.',
  'A=店員・さくら; B=Bạn',
  konbiniLines
)

const d3 = formatDialogue(
  'Nhịp sống hàng ngày, Tàu điện & Hẹn cuối tuần',
  'K03',
  'Tan học, bạn cùng Linh tán gẫu về lịch trình sinh hoạt hàng ngày, cách đi tàu điện, công việc làm thêm và lên kế hoạch đi chơi Akihabara cuối tuần.',
  'A=リン; B=Bạn',
  routineLines
)

const d4 = formatDialogue(
  'Nhà trọ, Mượn đồ & Sinh hoạt tự lập',
  'K04',
  'Daisuke sang thăm căn phòng trọ mới thuê của bạn, mượn kéo mở thùng đồ, được tặng cà phê Việt Nam, hỗ trợ cài đặt Wi-Fi và cùng nhau nấu ăn.',
  'A=大輔; B=Bạn',
  dormLines
)

writeFileSync(cd00Path, cd00Header + d1 + d2 + d3 + d4, 'utf8')
console.log('Updated content/generated/kaiwa/cd00.md with 4 Mega Real-Life Dialogues')
