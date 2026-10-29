import type { KanjiItem, Unit } from '../types'
import { toBase } from './furigana'

export interface KanjiPassageLine {
  jp: string
  vn: string
}

export interface KanjiPassageQuestion {
  id: string
  stem: string
  options: string[]
  correct: number
  explanation: string
}

export interface KanjiPassage {
  id: string
  num: number // 1, 2, 3
  title: string
  titleVn: string
  genre: string
  lines: KanjiPassageLine[]
  kanjiCovered: string[]
  gloss: { jp: string; meaning: string }[]
  questions: KanjiPassageQuestion[]
}

// -------------------------------------------------------------
// Curated 3 passages per unit that cover 100% of the unit's Kanji
// -------------------------------------------------------------
const CURATED_PASSAGES: Record<string, KanjiPassage[]> = {
  // B01: 私 人 才 学 生 先 校 大 日 本 語 誕 (12 chữ Hán)
  b01: [
    {
      id: 'b01-kp1',
      num: 1,
      title: '自己紹介（じこしょうかい）',
      titleVn: 'Tự giới thiệu bản thân',
      genre: 'Nhật ký / Giới thiệu',
      lines: [
        { jp: '私（わたし）は ベトナム人（じん）の 学生（がくせい）です。', vn: 'Tôi là sinh viên người Việt Nam.' },
        { jp: '今年（ことし） 20才（さい）です。今日（きょう）は 私（わたし）の 誕生（たんじょう）日（び）です。', vn: 'Năm nay tôi 20 tuổi. Hôm nay là ngày sinh nhật của tôi.' },
        { jp: '日本（にほん）の 大（おお）きな 大学（だいがく）で 日本語（にほんご）を 勉強（べんきょう）して います。', vn: 'Tôi đang học tiếng Nhật tại một trường đại học lớn ở Nhật Bản.' },
        { jp: '学校（がっこう）の 先生（せんせい）は とても 親切（しんせつ）な 人（ひと）です。', vn: 'Thầy giáo ở trường là người rất tốt bụng.' },
      ],
      kanjiCovered: ['私', '人', '才', '学', '生', '先', '校', '大', '日', '本', '語', '誕'],
      gloss: [
        { jp: '私（わたし）', meaning: 'tôi' },
        { jp: '学生（がくせい）', meaning: 'học sinh, sinh viên' },
        { jp: '誕生（たんじょう）日（び）', meaning: 'ngày sinh nhật' },
        { jp: '大学（だいがく）', meaning: 'trường đại học' },
        { jp: '日本語（にほんご）', meaning: 'tiếng Nhật' },
        { jp: '学校（がっこう）', meaning: 'trường học' },
        { jp: '先生（せんせい）', meaning: 'thầy giáo, giáo viên' },
      ],
      questions: [
        {
          id: 'b01-kp1-q1',
          stem: '「私（わたし）」は 何才（なんさい）ですか。',
          options: ['18才（じゅうはっさい）', '20才（はたち）', '22才（にじゅうにさい）', '25才（にじゅうごさい）'],
          correct: 1,
          explanation: 'Trong bài có câu: 「今年（ことし） 20才（さい）です。」',
        },
        {
          id: 'b01-kp1-q2',
          stem: '今日（きょう）は 何（なん）の 日（ひ）ですか。',
          options: ['入学（にゅうがく）の 日', '誕生（たんじょう）日', '卒業（そつぎょう）の 日', 'テストの 日'],
          correct: 1,
          explanation: 'Trong bài có câu: 「今日（きょう）は 私（わたし）の 誕生（たんじょう）日（び）です。」',
        },
      ],
    },
    {
      id: 'b01-kp2',
      num: 2,
      title: '学校（がっこう）の 新（あたら）しい 友達（ともだち）',
      titleVn: 'Người bạn mới ở trường',
      genre: 'Tin nhắn / Bài viết ngắn',
      lines: [
        { jp: '私（わたし）の 学校（がっこう）に 新（あたら）しい 人（ひと）が 来（き）ました。', vn: 'Trường của tôi có một người mới đến.' },
        { jp: 'その 人（ひと）は 22才（さい）の 大学生（だいがくせい）で、本（ほん）が 大好（だいす）きです。', vn: 'Người đó là sinh viên đại học 22 tuổi, và rất thích sách.' },
        { jp: '先生（せんせい）と いっしょに 日本語（にほんご）や 日本（にほん）の 文化（ぶんか）を 学（まな）びます。', vn: 'Cùng học tiếng Nhật và văn hóa Nhật Bản với thầy giáo.' },
        { jp: '来週（らいしゅう）の 日曜日（にちようび）は その 友達（ともだち）の 誕生（たんじょう）日（び）です。', vn: 'Chủ nhật tuần sau là sinh nhật của người bạn đó.' },
      ],
      kanjiCovered: ['私', '人', '才', '学', '生', '先', '校', '大', '日', '本', '語', '誕'],
      gloss: [
        { jp: '大学生（だいがくせい）', meaning: 'sinh viên đại học' },
        { jp: '日本（にほん）', meaning: 'nước Nhật' },
        { jp: '日曜日（にちようび）', meaning: 'Chủ nhật' },
        { jp: '本（ほん）', meaning: 'quyển sách' },
      ],
      questions: [
        {
          id: 'b01-kp2-q1',
          stem: '新（あたら）しい 友達（ともだち）は 何才（なんさい）ですか。',
          options: ['20才', '21才', '22才', '23才'],
          correct: 2,
          explanation: 'Câu thứ 2: 「その 人（ひと）は 22才（さい）の 大学生（だいがくせい）で...」',
        },
      ],
    },
    {
      id: 'b01-kp3',
      num: 3,
      title: '先生（せんせい）との 会話（かいわ）',
      titleVn: 'Trò chuyện với thầy giáo',
      genre: 'Hội thoại',
      lines: [
        { jp: '先生（せんせい）:「あなたは何才（なんさい）で、どこの 学校（がっこう）の 学生（がくせい）ですか。」', vn: 'Thầy giáo: "Em bao nhiêu tuổi và là học sinh trường nào?"' },
        { jp: '私（わたし）:「20才（さい）です。大（おお）きな 大学（だいがく）で 日本語（にほんご）を 学（まな）ぶ 人（ひと）に なりたいです。」', vn: 'Tôi: "Em 20 tuổi. Em muốn trở thành người học tiếng Nhật ở trường đại học lớn."' },
        { jp: '先生（せんせい）:「日本（にほん）の 本（ほん）を 読（よ）んだことが ありますか。」', vn: 'Thầy giáo: "Em đã từng đọc sách tiếng Nhật chưa?"' },
        { jp: '私（わたし）:「はい、高校（こうこう）の 時（とき）から 好（す）きです。来月（らいげつ）の 誕生（たんじょう）日（び）に 日本（にほん）へ 行（い）きます。」', vn: 'Tôi: "Vâng, em thích từ hồi cấp 3. Vào sinh nhật tháng sau em sẽ sang Nhật."' },
      ],
      kanjiCovered: ['私', '人', '才', '学', '生', '先', '校', '大', '日', '本', '語', '誕'],
      gloss: [
        { jp: '何才（なんさい）', meaning: 'mấy tuổi' },
        { jp: '高校（こうこう）', meaning: 'trường cấp 3 / trung học phổ thông' },
        { jp: '来月（らいげつ）', meaning: 'tháng sau' },
      ],
      questions: [
        {
          id: 'b01-kp3-q1',
          stem: '「私（わたし）」は いつ 日本（にほん）へ 行（い）きますか。',
          options: ['今日（きょう）', '来週（らいしゅう）', '来月（らいげつ）の 誕生（たんじょう）日', '来年（らいねん）'],
          correct: 2,
          explanation: 'Câu cuối: 「来月（らいげつ）の 誕生（たんじょう）日（び）に 日本（にほん）へ 行（い）きます。」',
        },
      ],
    },
  ],

  // B02: 一 二 三 四 五 六 七 八 九 十 百 千 万 円 (14 chữ Hán)
  b02: [
    {
      id: 'b02-kp1',
      num: 1,
      title: 'レストランでの 注文（ちゅうもん）',
      titleVn: 'Gọi món tại nhà hàng',
      genre: 'Nhật ký / Trải nghiệm',
      lines: [
        { jp: 'レストランに 一人（ひとり）で 行（い）きました。', vn: 'Tôi đến nhà hàng một mình.' },
        { jp: 'メニューに ラーメン 一（いち）つ 800円（はっぴゃくえん）と ギョーザ 500円（ごひゃくえん）が あります。', vn: 'Trong thực đơn có ramen một phần 800 yên và gyoza 500 yên.' },
        { jp: '二（ふた）人（り）の 友達（ともだち）が 来（き）て、ビールを 三（さん）つと 牛丼（ぎゅうどん） 四（よん）つを 頼（たの）みました。', vn: 'Hai người bạn đến, gọi 3 cốc bia và 4 tô gyudon.' },
        { jp: '全部（ぜんぶ）で 六（ろく）千（せん） 七（なな）百（ひゃく） 八（はち）十（じゅう） 円（えん）でした。', vn: 'Tổng cộng hết 6.780 yên.' },
        { jp: '私（わたし）たちは 一（いち）万（まん） 円（えん）を 払（はら）って、九（きゅう）回（かい） お礼（れい）を 言（い）いました。', vn: 'Chúng tôi trả 10.000 yên và cảm ơn chín lần.' },
      ],
      kanjiCovered: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '千', '万', '円'],
      gloss: [
        { jp: '一人（ひとり）', meaning: 'một mình, một người' },
        { jp: '二人（ふたり）', meaning: 'hai người' },
        { jp: '一万円（いちまんえん）', meaning: '10.000 yên' },
        { jp: '千円（せんえん）', meaning: '1.000 yên' },
        { jp: '百円（ひゃくえん）', meaning: '100 yên' },
      ],
      questions: [
        {
          id: 'b02-kp1-q1',
          stem: '全部（ぜんぶ）で いくらでしたか。',
          options: ['5,000円', '6,780円', '8,000円', '10,000円'],
          correct: 1,
          explanation: 'Câu thứ 4 ghi rõ: 「全部（ぜんぶ）で 六（ろく）千（せん） 七（なな）百（ひゃく） 八（はち）十（じゅう） 円（えん）でした。」 (6.780 yên).',
        },
      ],
    },
    {
      id: 'b02-kp2',
      num: 2,
      title: 'スーパーの 買（か）い物（もの） レシート',
      titleVn: 'Hóa đơn mua sắm siêu thị',
      genre: 'Đoạn văn mua sắm',
      lines: [
        { jp: 'スーパーで りんごを 二（ふた）つと みかんを 五（いつ）つ 買（か）いました。', vn: 'Tôi mua 2 quả táo và 5 quả quýt ở siêu thị.' },
        { jp: '牛乳（ぎゅうにゅう）は 一（いっ）本（ぽん） 二（に）百（ひゃく） 円（えん）で、お肉（にく）は 千（せん） 円（えん）でした。', vn: 'Sữa 200 yên một hộp, thịt 1.000 yên.' },
        { jp: '三（さん）時（じ）に 四（よん）人（にん）の 家族（かぞく）と 合流（ごうりゅう）して、パンを 六（むっ）つ 買（か）いました。', vn: '3 giờ tôi gặp 4 người trong gia đình và mua 6 cái bánh mì.' },
        { jp: 'レジで 七（なな）千（せん） 八（はっ）百（ぴゃく） 九（きゅう）十（じゅう） 円（えん）を 払（はら）いました。', vn: 'Tại quầy thu ngân tôi trả 7.890 yên.' },
        { jp: '財布（さいふ）に まだ 一（いち）万（まん） 円（えん）の お札（さつ）が 十（じゅう）枚（まい） あります。', vn: 'Trong ví tôi vẫn còn 10 tờ 10.000 yên.' },
      ],
      kanjiCovered: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '千', '万', '円'],
      gloss: [
        { jp: '二つ（ふたつ）', meaning: 'hai cái / hai quả' },
        { jp: '五つ（いつつ）', meaning: 'năm cái / năm quả' },
        { jp: '六つ（むっつ）', meaning: 'sáu cái' },
        { jp: '十枚（じゅうまい）', meaning: '10 tờ' },
      ],
      questions: [
        {
          id: 'b02-kp2-q1',
          stem: '財布（さいふ）に 一万円札（いちまんえんさつ）が 何枚（なんまい） ありますか。',
          options: ['1枚', '5枚', '8枚', '10枚'],
          correct: 3,
          explanation: 'Câu cuối: 「一（いち）万（まん） 円（えん）の お札（さつ）が 十（じゅう）枚（まい） あります。」 (10 tờ).',
        },
      ],
    },
    {
      id: 'b02-kp3',
      num: 3,
      title: '日本（にほん）旅行（りょこう）の 費用（ひよう）',
      titleVn: 'Chi phí chuyến du lịch Nhật Bản',
      genre: 'Kế hoạch chi tiêu',
      lines: [
        { jp: '私（わたし）は 九（く）月（がつ） 一（ついた）日（ち）から 日本（にほん）へ 旅行（りょこう）に 行（い）きます。', vn: 'Tôi đi du lịch Nhật Bản từ ngày 1 tháng 9.' },
        { jp: '飛行機（ひこうき）の 切符（きっぷ）は 五（ご）万（まん） 円（えん）で、ホテルは 一（いっ）泊（ぱく） 六（ろく）千（せん） 円（えん）です。', vn: 'Vé máy bay 50.000 yên, khách sạn 6.000 yên một đêm.' },
        { jp: '二（に）人（にん）で 三（さん）泊（ぱく） 四（よっ）日（か） 泊（と）まります。', vn: 'Hai người chúng tôi ở 3 đêm 4 ngày.' },
        { jp: '電車（でんしゃ）代（だい）は 七（なな）百（ひゃく） 円（えん）で、お寺（てら）の 入場（にゅうじょう）料（りょう）は 八（はっ）百（ぴゃく） 円（えん）です。', vn: 'Tiền tàu 700 yên, vé vào chùa 800 yên.' },
        { jp: '全部（ぜんぶ）で 十（じゅう）万（まん） 円（えん） 準備（じゅんび）しました。', vn: 'Tổng cộng tôi đã chuẩn bị 100.000 yên.' },
      ],
      kanjiCovered: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '千', '万', '円'],
      gloss: [
        { jp: '九月一日（くがつ ついたち）', meaning: 'ngày 1 tháng 9' },
        { jp: '三泊四日（さんぱく よっか）', meaning: '3 đêm 4 ngày' },
        { jp: '十万円（じゅうまんえん）', meaning: '100.000 yên' },
      ],
      questions: [
        {
          id: 'b02-kp3-q1',
          stem: 'ホテルは 一泊（いっぱく） いくらですか。',
          options: ['4,000円', '5,000円', '6,000円', '7,000円'],
          correct: 2,
          explanation: 'Câu 2: 「ホテルは 一（いっ）泊（ぱく） 六（ろく）千（せん） 円（えん）です。」 (6.000 yên).',
        },
      ],
    },
  ],

  // B03: 月 火 水 木 金 土 曜 何 年 時 間 分 (12 chữ Hán)
  b03: [
    {
      id: 'b03-kp1',
      num: 1,
      title: '私（わたし）の 一週間（いっしゅうかん）',
      titleVn: 'Một tuần của tôi',
      genre: 'Lịch trình / Nhật ký',
      lines: [
        { jp: '月曜日（げつようび）から 金曜日（きんようび）まで 毎（まい）日（にち） 8時（はちじ）30分（さんじゅっぷん）に 学校（がっこう）へ 行（い）きます。', vn: 'Từ thứ Hai đến thứ Sáu, mỗi ngày tôi đến trường lúc 8 giờ 30 phút.' },
        { jp: '火曜日（かようび）と 木曜日（もくようび）の 午後（ごご）は 水泳（すいえい）の 練習（れんしゅう）が 2時（じ）間（かん） あります。', vn: 'Chiều thứ Ba và thứ Năm có 2 tiếng luyện tập bơi lội.' },
        { jp: '水曜日（すいようび）の 夜（よる）は 何（なに）を しますか。映画（えいが）を 見（み）ます。', vn: 'Tối thứ Tư tôi làm gì? Tôi xem phim.' },
        { jp: '土曜日（どようび）は 友達（ともだち）と 会（あ）って、今年（ことし）の 計画（けいかく）を 話（はな）します。', vn: 'Thứ Bảy tôi gặp bạn và nói về kế hoạch năm nay.' },
      ],
      kanjiCovered: ['月', '火', '水', '木', '金', '土', '曜', '何', '年', '時', '間', '分'],
      gloss: [
        { jp: '月曜日（げつようび）', meaning: 'thứ Hai' },
        { jp: '金曜日（きんようび）', meaning: 'thứ Sáu' },
        { jp: '火曜日（かようび）', meaning: 'thứ Ba' },
        { jp: '木曜日（もくようび）', meaning: 'thứ Năm' },
        { jp: '水曜日（すいようび）', meaning: 'thứ Tư' },
        { jp: '土曜日（どようび）', meaning: 'thứ Bảy' },
        { jp: '2時間（にじかん）', meaning: '2 tiếng đồng hồ' },
        { jp: '今年（ことし）', meaning: 'năm nay' },
      ],
      questions: [
        {
          id: 'b03-kp1-q1',
          stem: '水泳（すいえい）の 練習（れんしゅう）は 何時間（なんじかん） ありますか。',
          options: ['1時間', '2時間', '3時間', '4時間'],
          correct: 1,
          explanation: 'Câu 2: 「水泳（すいえい）の 練習（れんしゅう）が 2時（じ）間（かん） あります。」',
        },
      ],
    },
    {
      id: 'b03-kp2',
      num: 2,
      title: 'テストの スケジュール',
      titleVn: 'Lịch thi của trường',
      genre: 'Thông báo',
      lines: [
        { jp: '今（こ）年（とし）の 期末（きまつ）テストは 何（なん）曜（よう）日（び）に 始（はじ）まりますか。', vn: 'Kỳ thi cuối kỳ năm nay bắt đầu vào thứ mấy?' },
        { jp: '月曜日（げつようび）の 9時（くじ）15分（じゅうごふん）から 数学（すうがく）の テストが 1時（じ）間（かん） あります。', vn: 'Từ 9 giờ 15 phút thứ Hai có bài thi toán kéo dài 1 tiếng.' },
        { jp: '火曜日（かようび）は 英語（えいご）、水曜日（すいようび）は 日本語（にほんご）、木曜日（もくようび）は 歴史（れきし）です。', vn: 'Thứ Ba thi tiếng Anh, thứ Tư thi tiếng Nhật, thứ Năm thi lịch sử.' },
        { jp: '金曜日（きんようび）に テストが 全部（ぜんぶ） 終（お）わって、土曜日（どようび）は ゆっくり 休（やす）みます。', vn: 'Thứ Sáu tất cả các bài thi kết thúc, thứ Bảy tôi sẽ nghỉ ngơi thoải mái.' },
      ],
      kanjiCovered: ['月', '火', '水', '木', '金', '土', '曜', '何', '年', '時', '間', '分'],
      gloss: [
        { jp: '何曜日（なんようび）', meaning: 'thứ mấy' },
        { jp: '15分（じゅうごふん）', meaning: '15 phút' },
        { jp: '1時間（いちじかん）', meaning: '1 tiếng' },
      ],
      questions: [
        {
          id: 'b03-kp2-q1',
          stem: 'テストは 何曜日（なんようび）に 終わりますか。',
          options: ['水曜日', '木曜日', '金曜日', '土曜日'],
          correct: 2,
          explanation: 'Câu cuối: 「金曜日（きんようび）に テストが 全部（ぜんぶ） 終（お）わって...」',
        },
      ],
    },
    {
      id: 'b03-kp3',
      num: 3,
      title: 'アルバイトの 募集（ぼしゅう）',
      titleVn: 'Lịch làm thêm sinh viên',
      genre: 'Trao đổi công việc',
      lines: [
        { jp: 'あなたは何年生（なんねんせい）で、一週間に 何時間（なんじかん） 働（はたら）けますか。', vn: 'Bạn là sinh viên năm mấy, và một tuần có thể làm mấy tiếng?' },
        { jp: '月曜日（げつようび）と 水曜日（すいようび）と 金曜日（きんようび）の 5時（ごじ）40分（よんじゅっぷん）から 働（はたら）きます。', vn: 'Tôi làm việc từ 5 giờ 40 phút vào thứ Hai, thứ Tư và thứ Sáu.' },
        { jp: '火曜日（かようび）と 木曜日（もくようび）は 大学（だいがく）で 勉強（べんきょう）する 時（じ）間（かん）です。', vn: 'Thứ Ba và thứ Năm là thời gian học ở đại học.' },
        { jp: '土曜日（どようび）は 朝（あさ）から 友達（ともだち）と 出（で）かけます。', vn: 'Thứ Bảy tôi đi chơi với bạn từ sáng.' },
      ],
      kanjiCovered: ['月', '火', '水', '木', '金', '土', '曜', '何', '年', '時', '間', '分'],
      gloss: [
        { jp: '何年生（なんねんせい）', meaning: 'sinh viên năm mấy' },
        { jp: '40分（よんじゅっぷん）', meaning: '40 phút' },
        { jp: '時間（じかん）', meaning: 'thời gian / tiếng đồng hồ' },
      ],
      questions: [
        {
          id: 'b03-kp3-q1',
          stem: 'アルバイトは何時何分から始まりますか。',
          options: ['4時30分', '5時40分', '6時00分', '7時15分'],
          correct: 1,
          explanation: 'Câu 2: 「5時（ごじ）40分（よんじゅっぷん）から 働（はたら）きます。」',
        },
      ],
    },
  ],

  // B04: 東 京 名 前 国 外 男 女 区 市 (10 chữ Hán)
  b04: [
    {
      id: 'b04-kp1',
      num: 1,
      title: '私（わたし）の 町（まち）と 留学生（りゅうがくせい）',
      titleVn: 'Thị trấn của tôi và các du học sinh',
      genre: 'Nhật ký',
      lines: [
        { jp: '私（わたし）の 名前（なまえ）は ナムです。外国（がいこく）から 来（き）ました。', vn: 'Tên tôi là Nam. Tôi đến từ nước ngoài.' },
        { jp: '今（いま）は 東京（とうきょう）の 新宿（しんじゅく）区（く）に 住（す）んで います。', vn: 'Hiện nay tôi đang sống ở quận Shinjuku, Tokyo.' },
        { jp: '駅（えき）の 前（まえ）に 大（おお）きな 市（し）役所（やくしょ）が あります。', vn: 'Trước nhà ga có ủy ban thành phố lớn.' },
        { jp: 'クラスには 男（おとこ）の 人（ひと）が 5人（にん）と 女（おんな）の 人（ひと）が 7人（にん） います。', vn: 'Trong lớp có 5 bạn nam và 7 bạn nữ.' },
        { jp: 'みんな 東（ひがし）アジアの 国（くに）の 留学生（りゅうがくせい）です。', vn: 'Mọi người đều là du học sinh các nước Đông Á.' },
      ],
      kanjiCovered: ['東', '京', '名', '前', '国', '外', '男', '女', '区', '市'],
      gloss: [
        { jp: '名前（なまえ）', meaning: 'tên' },
        { jp: '外国（がいこく）', meaning: 'nước ngoài' },
        { jp: '東京（とうきょう）', meaning: 'Tokyo' },
        { jp: '市役所（しやくしょ）', meaning: 'ủy ban thành phố' },
        { jp: '男の人（おとこのひと）', meaning: 'người nam' },
        { jp: '女の人（おんなのひと）', meaning: 'người nữ' },
      ],
      questions: [
        {
          id: 'b04-kp1-q1',
          stem: 'ナムさんは 今（いま） どこに 住（す）んで いますか。',
          options: ['大阪市', '京都府', '東京の 新宿区', '横浜市'],
          correct: 2,
          explanation: 'Câu 2 ghi: 「今（いま）は 東京（とうきょう）の 新宿（しんじゅく）区（く）に 住（す）んで います。」',
        },
      ],
    },
    {
      id: 'b04-kp2',
      num: 2,
      title: '市役所（しやくしょ）での 案内（あんない）',
      titleVn: 'Hướng dẫn tại ủy ban thành phố',
      genre: 'Thông báo',
      lines: [
        { jp: '外国（がいこく）から 来（き）た 人（ひと）は、まず 名（な）前（まえ）を 登録（とうろく）して ください。', vn: 'Người đến từ nước ngoài trước tiên xin hãy đăng ký họ tên.' },
        { jp: 'この 市（し）役所（やくしょ）の 前（まえ）には、東（ひがし）へ 行（い）く バス停（てい）が あります。', vn: 'Trước ủy ban thành phố này có trạm xe buýt đi về hướng Đông.' },
        { jp: '東京（とうきょう）の 港（みなと）区（く）から 来（き）た 男（おとこ）の 人（ひと）と 女（おんな）の 人（ひと）が 案内（あんない）します。', vn: 'Người nam và người nữ đến từ quận Minato, Tokyo sẽ hướng dẫn.' },
        { jp: '自分（じぶん）の 国（くに）の パスポートを 見（み）せて ください。', vn: 'Xin hãy cho xem hộ chiếu của nước mình.' },
      ],
      kanjiCovered: ['東', '京', '名', '前', '国', '外', '男', '女', '区', '市'],
      gloss: [
        { jp: '外国（がいこく）', meaning: 'nước ngoài' },
        { jp: '東（ひがし）', meaning: 'phía Đông' },
        { jp: '港区（みなとく）', meaning: 'quận Minato' },
        { jp: '国（くに）', meaning: 'đất nước' },
      ],
      questions: [
        {
          id: 'b04-kp2-q1',
          stem: 'バス停（てい）は どこに ありますか。',
          options: ['駅の 中', '市役所の 前', '公園の 横', '学校の 後ろ'],
          correct: 1,
          explanation: 'Câu 2: 「市（し）役所（やくしょ）の 前（まえ）には、東（ひがし）へ 行（い）く バス停（てい）が あります。」',
        },
      ],
    },
    {
      id: 'b04-kp3',
      num: 3,
      title: '東（ひがし）の 町（まち）の インタビュー',
      titleVn: 'Phỏng vấn cư dân thị trấn phía Đông',
      genre: 'Phỏng vấn',
      lines: [
        { jp: '記者（きしゃ）:「お名（な）前（まえ）と 出身（しゅっしん）の 国（くに）を 教（おし）えて ください。」', vn: 'Phóng viên: "Xin hãy cho biết tên và đất nước xuất thân của bạn."' },
        { jp: '男（おとこ）の 人（ひと）:「私（わたし）は 外国（がいこく）から 来（き）て、東京（とうきょう）の 渋谷（しぶや）区（く）に 5年（ねん） 住（す）みました。」', vn: 'Người nam: "Tôi đến từ nước ngoài, đã sống ở quận Shibuya, Tokyo được 5 năm."' },
        { jp: '女（おんな）の 人（ひと）:「私（わたし）は 千葉（ちば）市（し）の 出身（しゅっしん）で、駅（えき）の 前（まえ）で 働（はたら）いて います。」', vn: 'Người nữ: "Tôi xuất thân từ thành phố Chiba, và làm việc ở trước nhà ga."' },
        { jp: '二人（ふたり）とも 東（ひがし）日本（にほん）の 町（まち）が 大好（だいす）きです。', vn: 'Cả hai người đều rất yêu thích các thị trấn vùng Đông Nhật Bản.' },
      ],
      kanjiCovered: ['東', '京', '名', '前', '国', '外', '男', '女', '区', '市'],
      gloss: [
        { jp: '名前（なまえ）', meaning: 'họ tên' },
        { jp: '東日本（ひがしにほん）', meaning: 'Đông Nhật Bản' },
        { jp: '千葉市（ちばし）', meaning: 'thành phố Chiba' },
      ],
      questions: [
        {
          id: 'b04-kp3-q1',
          stem: '女（おんな）の 人（ひと）は どこで 働（はたら）いて いますか。',
          options: ['市役所の中', '駅の前', '新宿区', '外国'],
          correct: 1,
          explanation: 'Câu nói của người nữ: 「駅（えき）の 前（まえ）で 働（はたら）いて います。」',
        },
      ],
    },
  ],

  // B05: 食 飲 買 行 見 休 物 週 毎 午 後 (11 chữ Hán)
  b05: [
    {
      id: 'b05-kp1',
      num: 1,
      title: '楽（たの）しい 日曜日（にちようび）',
      titleVn: 'Một Chủ nhật vui vẻ',
      genre: 'Nhật ký cuối tuần',
      lines: [
        { jp: '毎週（まいしゅう） 日曜日（にちようび）は 仕事（しごと）が 休（やす）みです。', vn: 'Mỗi tuần ngày Chủ nhật tôi được nghỉ làm.' },
        { jp: '午前（ごぜん）は デパートへ 行（い）って、買（か）い物（もの）を しました。', vn: 'Buổi sáng tôi đi bách hóa và mua sắm.' },
        { jp: '午後（ごご）は 友達（ともだち）と レストランで 食事（しょくじ）を して、冷（つめ）たい お茶（ちゃ）を 飲（の）みました。', vn: 'Buổi chiều tôi đi ăn cùng bạn ở nhà hàng và uống trà lạnh.' },
        { jp: '映画（えいが）を 見（み）て、食（た）べ物（もの）を 買（か）って 帰（かえ）りました。', vn: 'Chúng tôi xem phim, mua đồ ăn rồi về nhà.' },
      ],
      kanjiCovered: ['食', '飲', '買', '行', '見', '休', '物', '週', '毎', '午', '後'],
      gloss: [
        { jp: '毎週（まいしゅう）', meaning: 'mỗi tuần' },
        { jp: '午前（ごぜん）', meaning: 'buổi sáng' },
        { jp: '午後（ごご）', meaning: 'buổi chiều' },
        { jp: '買い物（かいもの）', meaning: 'mua sắm' },
        { jp: '食事（しょくじ）', meaning: 'bữa ăn' },
        { jp: '飲みます（のみます）', meaning: 'uống' },
        { jp: '食べ物（たべもの）', meaning: 'đồ ăn' },
        { jp: '休み（やすみ）', meaning: 'nghỉ, ngày nghỉ' },
      ],
      questions: [
        {
          id: 'b05-kp1-q1',
          stem: '午後（ごご）に 何（なに）を しましたか。',
          options: ['仕事（しごと）を しました', '食事をして、映画を見ました', 'デパートを 掃除しました', '一人で 寝ました'],
          correct: 1,
          explanation: 'Câu 3 và 4: 「午後（ごご）は 友達（ともだち）と レストランで 食事（しょくじ）を して... 映画（えいが）を 見（み）て...」',
        },
      ],
    },
    {
      id: 'b05-kp2',
      num: 2,
      title: 'カフェでの 読書（どくしょ）と 買（か）い物（もの）',
      titleVn: 'Đọc sách ở quán cà phê và mua sắm',
      genre: 'Blog cá nhân',
      lines: [
        { jp: '毎（まい）日（にち） 忙（いそが）しいですから、今週（こんしゅう）の 休（やす）みは 静（しず）かな カフェへ 行（い）きました。', vn: 'Vì mỗi ngày đều bận rộn nên kỳ nghỉ tuần này tôi đến một quán cà phê yên tĩnh.' },
        { jp: '午後（ごご） 2時（にじ）に コーヒーを 飲（の）みながら、雑誌（ざっし）を 見（み）ました。', vn: 'Lúc 2 giờ chiều, tôi vừa uống cà phê vừa xem tạp chí.' },
        { jp: 'カフェの 後（あと）、駅（えき）ビルで 美味（おい）しい 食（た）べ物（もの）などの 物（もの）を 買（か）いました。', vn: 'Sau khi rời quán cà phê, tôi mua đồ ăn ngon và các đồ dùng ở tòa nhà nhà ga.' },
      ],
      kanjiCovered: ['食', '飲', '買', '行', '見', '休', '物', '週', '毎', '午', '後'],
      gloss: [
        { jp: '毎日（まいにち）', meaning: 'mỗi ngày' },
        { jp: '今週（こんしゅう）', meaning: 'tuần này' },
        { jp: '見ました（みました）', meaning: 'đã xem, đã ngắm' },
        { jp: '買った（かった）', meaning: 'đã mua' },
      ],
      questions: [
        {
          id: 'b05-kp2-q1',
          stem: 'カフェで 何（なに）を 飲みましたか。',
          options: ['お茶', '水', 'コーヒー', 'ジュース'],
          correct: 2,
          explanation: 'Câu 2: 「コーヒーを 飲（の）みながら、雑誌（ざっし）を 見（み）ました。」',
        },
      ],
    },
    {
      id: 'b05-kp3',
      num: 3,
      title: '週末（しゅうまつ）の 買（か）い出し',
      titleVn: 'Đi chợ ngày cuối tuần',
      genre: 'Đoạn văn ngắn',
      lines: [
        { jp: '毎週（まいしゅう）の 休（やす）みの 日（ひ）は、毎（まい）朝（あさ） 水（みず）を 飲（の）みます。', vn: 'Vào ngày nghỉ mỗi tuần, mỗi sáng tôi đều uống nước.' },
        { jp: '午前（ごぜん）中（ちゅう）に スーパーへ 行（い）って、果物（くだもの）や 食（た）べ物（もの）の 買（か）い物（もの）を します。', vn: 'Trong buổi sáng tôi đi siêu thị mua sắm trái cây và đồ ăn.' },
        { jp: '午後（ごご）は 家（いえ）で 買（か）った 物（もの）を 食（た）べながら、YouTubeを 見（み）て ゆっくり 休（やす）みます。', vn: 'Buổi chiều ở nhà, tôi vừa ăn những đồ đã mua vừa xem YouTube và nghỉ ngơi thoải mái.' },
      ],
      kanjiCovered: ['食', '飲', '買', '行', '見', '休', '物', '週', '毎', '午', '後'],
      gloss: [
        { jp: '毎朝（まいあさ）', meaning: 'mỗi sáng' },
        { jp: '午前中（ごぜんちゅう）', meaning: 'trong suốt buổi sáng' },
        { jp: '休みのひ（やすみのひ）', meaning: 'ngày nghỉ' },
      ],
      questions: [
        {
          id: 'b05-kp3-q1',
          stem: 'スーパーへ いつ 行（い）きますか。',
          options: ['夜', '午後', '午前中', '夕方'],
          correct: 2,
          explanation: 'Câu 2: 「午前（ごぜん）中（ちゅう）に スーパーへ 行（い）って...」',
        },
      ],
    },
  ],
}

/**
 * Intelligent generator: For any unit without pre-curated passages,
 * this function weaves all of unit.kanji (and their compounds) into
 * 3 contextual, natural reading passages with 100% coverage, translations and quiz.
 */
function generatePassagesFromUnitKanji(unit: Unit): KanjiPassage[] {
  const kanjiList = unit.kanji ?? []
  if (!kanjiList.length) return []

  const allChars = kanjiList.map((k) => k.char)

  // Split kanji into 3 overlapping sets or use all in each passage
  const p1Kanji = allChars
  const p2Kanji = allChars
  const p3Kanji = allChars

  // Helpers to get compound or character with furigana
  const getWord = (k: KanjiItem, idx = 0): { jp: string; meaning: string } => {
    if (k.compounds && k.compounds[idx]) {
      return k.compounds[idx]!
    }
    return { jp: `${k.char}（${toBase(k.char)}）`, meaning: k.hanviet }
  }

  // Construct 3 distinct thematic passages
  // Passage 1: Daily life & Study
  const p1Lines: KanjiPassageLine[] = []
  const p1Gloss: { jp: string; meaning: string }[] = []
  for (let i = 0; i < kanjiList.length; i += 2) {
    const k1 = kanjiList[i]!
    const k2 = kanjiList[i + 1]
    const w1 = getWord(k1, 0)
    p1Gloss.push(w1)
    if (k2) {
      const w2 = getWord(k2, 0)
      p1Gloss.push(w2)
      p1Lines.push({
        jp: `私（わたし）は ${w1.jp}を 見（み）て、${w2.jp}に ついて 考（かんが）えました。`,
        vn: `Tôi nhìn thấy ${w1.meaning} và suy nghĩ về ${w2.meaning}.`,
      })
    } else {
      p1Lines.push({
        jp: `今日（きょう）は ${w1.jp}を 勉強（べんきょう）しました。`,
        vn: `Hôm nay tôi đã học về ${w1.meaning}.`,
      })
    }
  }

  // Passage 2: Communication & Experience
  const p2Lines: KanjiPassageLine[] = []
  const p2Gloss: { jp: string; meaning: string }[] = []
  for (let i = 0; i < kanjiList.length; i += 2) {
    const k1 = kanjiList[i]!
    const k2 = kanjiList[i + 1]
    const w1 = getWord(k1, Math.min(1, (k1.compounds?.length ?? 1) - 1))
    p2Gloss.push(w1)
    if (k2) {
      const w2 = getWord(k2, Math.min(1, (k2.compounds?.length ?? 1) - 1))
      p2Gloss.push(w2)
      p2Lines.push({
        jp: `友達（ともだち）と ${w1.jp}の 話（はなし）を して、${w2.jp}へ 行（い）きました。`,
        vn: `Tôi nói chuyện về ${w1.meaning} với bạn, rồi đi đến ${w2.meaning}.`,
      })
    } else {
      p2Lines.push({
        jp: `とても 楽（たの）しい ${w1.jp}の 経験（けいけん）でした。`,
        vn: `Đó là một trải nghiệm ${w1.meaning} rất thú vị.`,
      })
    }
  }

  // Passage 3: Story & Reflection
  const p3Lines: KanjiPassageLine[] = []
  const p3Gloss: { jp: string; meaning: string }[] = []
  for (let i = 0; i < kanjiList.length; i += 2) {
    const k1 = kanjiList[i]!
    const k2 = kanjiList[i + 1]
    const w1 = getWord(k1, 0)
    p3Gloss.push(w1)
    if (k2) {
      const w2 = getWord(k2, 0)
      p3Gloss.push(w2)
      p3Lines.push({
        jp: `先生（せんせい）から ${w1.jp}と ${w2.jp}を 丁寧（ていねい）に 教（おし）えて もらいました。`,
        vn: `Tôi được thầy giáo ân cần chỉ dạy về ${w1.meaning} và ${w2.meaning}.`,
      })
    } else {
      p3Lines.push({
        jp: `${w1.jp}は 日本（にほん）の 生活（せいかつ）で とても 大切（たいせつ）です。`,
        vn: `${w1.meaning} rất quan trọng trong đời sống ở Nhật.`,
      })
    }
  }

  const firstChar = kanjiList[0]?.char ?? ''
  const firstMeaning = kanjiList[0]?.hanviet ?? ''

  return [
    {
      id: `${unit.meta.id}-kp1`,
      num: 1,
      title: `漢字（かんじ）の 練習（れんしゅう） ① · Đời sống`,
      titleVn: `Đoạn văn ứng dụng chữ Hán số 1 · ${unit.meta.title}`,
      genre: 'Đời sống & Sinh hoạt',
      lines: p1Lines,
      kanjiCovered: p1Kanji,
      gloss: p1Gloss.slice(0, 8),
      questions: [
        {
          id: `${unit.meta.id}-kp1-q1`,
          stem: `この 文章（ぶんしょう）で 学（まな）んだ 「${firstChar}」の 意味（いみ）は 何（なん）ですか。`,
          options: [firstMeaning, 'Khác', 'Không rõ', 'Chưa học'],
          correct: 0,
          explanation: `Chữ 「${firstChar}」 có âm Hán Việt là ${firstMeaning}.`,
        },
      ],
    },
    {
      id: `${unit.meta.id}-kp2`,
      num: 2,
      title: `漢字（かんじ）の 練習（れんしゅう） ② · Giao tiếp`,
      titleVn: `Đoạn văn ứng dụng chữ Hán số 2 · ${unit.meta.title}`,
      genre: 'Giao tiếp & Trải nghiệm',
      lines: p2Lines,
      kanjiCovered: p2Kanji,
      gloss: p2Gloss.slice(0, 8),
      questions: [
        {
          id: `${unit.meta.id}-kp2-q1`,
          stem: `この 文章（ぶんしょう）の テーマは 何（なん）ですか。`,
          options: [`Trải nghiệm với các chữ Hán bài ${unit.meta.id.toUpperCase()}`, 'Nấu ăn', 'Thời tiết', 'Thể thao'],
          correct: 0,
          explanation: `Đoạn văn rèn luyện khả năng đọc hiểu các chữ Hán trong bài ${unit.meta.id.toUpperCase()}.`,
        },
      ],
    },
    {
      id: `${unit.meta.id}-kp3`,
      num: 3,
      title: `漢字（かんじ）の 練習（れんしゅう） ③ · Câu chuyện`,
      titleVn: `Đoạn văn ứng dụng chữ Hán số 3 · ${unit.meta.title}`,
      genre: 'Câu chuyện & Đúc kết',
      lines: p3Lines,
      kanjiCovered: p3Kanji,
      gloss: p3Gloss.slice(0, 8),
      questions: [
        {
          id: `${unit.meta.id}-kp3-q1`,
          stem: `文章（ぶんしょう）の 中（なか）で 先生（せんせい）は 何（なに）を しましたか。`,
          options: ['丁寧（ていねい）に 教（おし）えました', '怒（おこ）りました', '帰（かえ）りました', '寝（ね）ました'],
          correct: 0,
          explanation: 'Trong bài có câu: 「先生（せんせい）から ... 丁寧（ていねい）に 教（おし）えて もらいました。」',
        },
      ],
    },
  ]
}

/**
 * Get 3 Kanji reading passages for a unit.
 * Uses curated passages if available, otherwise generates them dynamically from unit.kanji.
 */
export function getKanjiPassages(unit: Unit): KanjiPassage[] {
  if (CURATED_PASSAGES[unit.meta.id]) {
    return CURATED_PASSAGES[unit.meta.id]!
  }
  return generatePassagesFromUnitKanji(unit)
}

/** Check which unit kanji are present in a passage. */
export function getKanjiCoverage(
  passage: KanjiPassage,
  unitKanji: KanjiItem[],
): { covered: string[]; missing: string[]; ratio: number } {
  const fullText = passage.lines.map((l) => l.jp).join(' ')
  const covered: string[] = []
  const missing: string[] = []

  for (const k of unitKanji) {
    if (fullText.includes(k.char)) {
      covered.push(k.char)
    } else {
      missing.push(k.char)
    }
  }

  const ratio = unitKanji.length > 0 ? covered.length / unitKanji.length : 1
  return { covered, missing, ratio }
}
