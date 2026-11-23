// src/lib/modulesData.ts
// Comprehensive Data for the Real-Life Practical Modules (Modules 01 - 04)
// Standardized commercial-grade curriculum synthesizing N5 into real-life themes,
// seamlessly bridging into Modules 05 - 14 (CD00 - CD09 for N5+ -> N4).

import type { Line } from '../types'

export interface ModuleVocab {
  id: string
  jp: string
  romaji: string
  vn: string
  category: string
  example?: { jp: string; vn: string }
}

export interface ModuleGrammar {
  id: string
  title: string
  formula: string
  meaning: string
  usageNote: string
  spokenTip: string
  examples: { jp: string; vn: string }[]
}

export interface ModuleKanji {
  char: string
  hanviet: string
  strokes: number
  onkun: string
  meaning: string
  compounds: { jp: string; vn: string }[]
}

export interface ModuleListeningQA {
  id: string
  questionJp: string
  questionVn: string
  audioText: string
  context: string
  options: { jp: string; vn: string; isCorrect: boolean }[]
  explanation: string
}

export interface ModuleQuiz {
  id: string
  stem: string
  options: string[]
  correct: number
  explain: string
}

export interface ModuleDetail {
  id: string
  num: number
  code: string
  titleJp: string
  titleVn: string
  subtitle: string
  badge: string
  accentColor: string
  estimatedHours: string
  stats: { vocab: number; grammar: number; kanji: number; dialogues: number }
  vocab: ModuleVocab[]
  grammar: ModuleGrammar[]
  kanji: ModuleKanji[]
  listening: ModuleListeningQA[]
  quiz: ModuleQuiz[]
  dialogue: {
    title: string
    scene: string
    roles: Record<string, string>
    lines: Line[]
  }
}

// ----------------------------------------------------
// MODULE 01: Giao Tiếp Học Đường & Kết Bạn
// ----------------------------------------------------
export const MODULE_01: ModuleDetail = {
  id: 'mod-01',
  num: 1,
  code: 'MOD-01',
  titleJp: '学校（がっこう）の 1日（いちにち）と 新（あたら）しい 友達（ともだち）',
  titleVn: 'Giao Tiếp Học Đường & Kết Bạn Mới',
  subtitle: 'Làm quen, chào hỏi, chia sẻ sở thích, hỏi giờ giấc và mở rộng mối quan hệ trong trường lớp.',
  badge: 'MODULE 01 · ĐỜI SỐNG HỌC ĐƯỜNG',
  accentColor: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-600',
  estimatedHours: '4-6 giờ học',
  stats: { vocab: 28, grammar: 5, kanji: 12, dialogues: 38 },
  vocab: [
    { id: 'v01-01', jp: 'となり の 席（せき）', romaji: 'tonari no seki', vn: 'Chỗ ngồi bên cạnh', category: 'Lớp học' },
    { id: 'v01-02', jp: 'あいてる', romaji: 'aiteru', vn: 'Còn trống / đang rảnh (văn nói)', category: 'Lớp học' },
    { id: 'v01-03', jp: 'ため口（ぐち）', romaji: 'tameguchi', vn: 'Cách nói chuyện ngang hàng, thân mật', category: 'Giao tiếp' },
    { id: 'v01-04', jp: 'けいご', romaji: 'keigo', vn: 'Kính ngữ, cách nói lịch sự trang trọng', category: 'Giao tiếp' },
    { id: 'v01-05', jp: '同（おな）じ年（とし）', romaji: 'onaji toshi', vn: 'Bằng tuổi nhau', category: 'Giao tiếp' },
    { id: 'v01-06', jp: 'よびの ボールペン', romaji: 'yobi no boorupen', vn: 'Bút bi dự phòng', category: 'Đồ dùng' },
    { id: 'v01-07', jp: '1本（いっぽん） 貸（か）す', romaji: 'ippon kasu', vn: 'Cho mượn một chiếc bút', category: 'Hành động' },
    { id: 'v01-08', jp: '教科書（きょうかしょ）', romaji: 'kyoukasho', vn: 'Sách giáo khoa', category: 'Đồ dùng' },
    { id: 'v01-09', jp: 'チャイムが なる', romaji: 'chaimu ga naru', vn: 'Chuông reo (báo giờ học/hết giờ)', category: 'Lớp học' },
    { id: 'v01-10', jp: '1時間目（いちじかんめ）', romaji: 'ichijikanme', vn: 'Tiết học thứ nhất', category: 'Thời gian' },
    { id: 'v01-11', jp: '休（やす）み 時間（じかん）', romaji: 'yasumi jikan', vn: 'Giờ giải lao', category: 'Thời gian' },
    { id: 'v01-12', jp: 'きびしい', romaji: 'kibishii', vn: 'Nghiêm khắc, khó tính', category: 'Tính từ' },
    { id: 'v01-13', jp: '熱心（ねっしん）な', romaji: 'nesshin na', vn: 'Nhiệt tình, tâm huyết', category: 'Tính từ' },
    { id: 'v01-14', jp: '教（おし）え方（かた）', romaji: 'oshiekata', vn: 'Cách dạy, phương pháp giảng', category: 'Lớp học' },
    { id: 'v01-15', jp: 'のどが かわく', romaji: 'nodo ga kawaku', vn: 'Khát nước', category: 'Cảm giác' },
    { id: 'v01-16', jp: 'じはんき', romaji: 'jihanki', vn: 'Máy bán nước tự động (viết tắt)', category: 'Địa điểm' },
    { id: 'v01-17', jp: '缶（かん）コーヒー', romaji: 'kan koohii', vn: 'Cà phê lon', category: 'Đồ uống' },
    { id: 'v01-18', jp: '趣味（しゅみ）', romaji: 'shumi', vn: 'Sở thích', category: 'Đời sống' },
    { id: 'v01-19', jp: '映画（えいが）を 見（み）ること', romaji: 'eiga o miru koto', vn: 'Xem phim', category: 'Sở thích' },
    { id: 'v01-20', jp: '毎日の 会話（かいわ）', romaji: 'mainichi no kaiwa', vn: 'Giao tiếp hàng ngày', category: 'Giao tiếp' },
    { id: 'v01-21', jp: '授業（じゅぎょう）の 後（あと）', romaji: 'jugyou no ato', vn: 'Sau giờ học, tan trường', category: 'Thời gian' },
    { id: 'v01-22', jp: '図書館（としょかん）', romaji: 'toshokan', vn: 'Thư viện', category: 'Địa điểm' },
    { id: 'v01-23', jp: '宿題（しゅくだい）をする', romaji: 'shukudai o suru', vn: 'Làm bài tập về nhà', category: 'Học tập' },
    { id: 'v01-24', jp: 'いざかや', romaji: 'izakaya', vn: 'Quán nhậu phong cách Nhật', category: 'Địa điểm' },
    { id: 'v01-25', jp: '連絡先（れんらくさき）', romaji: 'renrakusaki', vn: 'Thông tin liên lạc (SĐT/LINE)', category: 'Giao tiếp' },
    { id: 'v01-26', jp: 'こうかんする', romaji: 'koukan suru', vn: 'Trao đổi (thông tin, quà)', category: 'Hành động' },
    { id: 'v01-27', jp: 'マジで？', romaji: 'maji de', vn: 'Thật á? (thán từ đời thường)', category: 'Khẩu ngữ' },
    { id: 'v01-28', jp: '〜じゃん', romaji: 'jan', vn: 'Chẳng phải sao / ...còn gì! (khẩu ngữ)', category: 'Khẩu ngữ' }
  ],
  grammar: [
    {
      id: 'g01-01',
      title: 'Tự Giới Thiệu & Danh Từ: N1 は N2 です／じゃありません',
      formula: '私（わたし）は ［Tên／Quốc tịch／Nghề］ です。',
      meaning: 'Tôi là... / Tôi không phải là...',
      usageNote: 'Khi giới thiệu tên mình, tuyệt đối KHÔNG thêm さん vào sau tên mình. Trong văn nói thân mật giữa bạn bè, です thường được rút ngắn thành だ hoặc bỏ hẳn.',
      spokenTip: 'Nói với bạn bè: 「俺、佐藤健太。健太って呼んでね！」 (Tớ là Sato Kenta, cứ gọi Kenta nhé).',
      examples: [
        { jp: '私（わたし）は ベトナムの ハノイから 来（き）ました。', vn: 'Tôi đến từ Hà Nội, Việt Nam.' },
        { jp: '私（わたし）は 先生（せんせい）じゃ ありません。学生（がくせい）です。', vn: 'Tôi không phải giáo viên, tôi là học sinh.' }
      ]
    },
    {
      id: 'g01-02',
      title: 'Hỏi Rút Gọn & Điểm Chung: N は？ và も／同（おな）じですね',
      formula: 'A: ［Câu hỏi/Thông tin］。 B: ［Câu trả lời］。 Aさんは？',
      meaning: 'Còn bạn thì sao? / Tôi cũng vậy / Giống nhau nhỉ!',
      usageNote: 'Khi người Nhật nói xong một câu, họ rất hay dùng 「〜さんは？」 để hỏi ngược lại mà không cần lặp lại cả câu dài.',
      spokenTip: 'Dùng 「同じですね！」 khi phát hiện bạn bè có cùng tuổi, cùng sở thích hay cùng tháng sinh.',
      examples: [
        { jp: 'A: 何歳（なんさい）なの？ B: 20歳（はたち）です。健太（けんた）くんは？', vn: 'A: Bao nhiêu tuổi rồi? B: Mình 20 tuổi. Còn Kenta?' },
        { jp: '俺（おれ）も 20歳（はたち）！ 同（おな）じ年（とし）じゃん！', vn: 'Tớ cũng 20 tuổi! Bằng tuổi nhau rồi này!' }
      ]
    },
    {
      id: 'g01-03',
      title: 'Tính Từ Đánh Giá Con Người & Sự Vật: い-Adj / な-Adj',
      formula: 'N は ［Tính từ đuôi い / な］ です。',
      meaning: 'Miêu tả tính chất (nghiêm khắc, dễ hiểu, nhiệt tình, thú vị...)',
      usageNote: 'Tính từ đuôi い giữ nguyên い + です. Tính từ đuôi な bỏ な + です (khi đứng cuối câu).',
      spokenTip: 'Thêm thán từ 「ね」 ở cuối câu để tìm sự đồng cảm: 「教え方が 分かりやすいね！」 (Cách giảng dễ hiểu ghê nhỉ).',
      examples: [
        { jp: '山田（やまだ）先生（せんせい）は 厳（きび）しいですが、熱心（ねっしん）です。', vn: 'Thầy Yamada nghiêm khắc nhưng rất nhiệt tình.' },
        { jp: '日本語（にほんご）の 勉強（べんきょう）は 面白（おもしろ）いです。', vn: 'Việc học tiếng Nhật rất thú vị.' }
      ]
    },
    {
      id: 'g01-04',
      title: 'Nói Về Sở Thích & Khả Năng: N が 好（す）き／上手（じょうず）／分（わ）かる',
      formula: 'N が ［好（す）き／上手（じょうず）／下手（へた）／分（わ）かります］',
      meaning: 'Thích N / Giỏi N / Kém N / Hiểu N (Luôn đi với trợ từ が)',
      usageNote: 'Người Nhật rất khiêm tốn: Khi được khen 「上手ですね」, nên trả lời 「まだまだ 下手です」 (Mình vẫn còn kém lắm).',
      spokenTip: 'Trong văn nói đời thường: 「アニメめっちゃ好き！」 (Cực kỳ thích anime luôn!).',
      examples: [
        { jp: '私（わたし）は サッカーと 映画（えいが）が 大好（だいす）きです。', vn: 'Tôi rất thích bóng đá và phim ảnh.' },
        { jp: '日常（にちじょう）会話（かいわ）が まだ よく 分（わ）かりません。', vn: 'Tôi vẫn chưa hiểu rõ hội thoại giao tiếp hàng ngày.' }
      ]
    },
    {
      id: 'g01-05',
      title: 'Rủ Rê Bạn Bè Tự Nhiên: 〜ませんか／〜ない？',
      formula: 'Lịch sự: V-ませんか ／ Thân mật: V-ない？',
      meaning: 'Cùng làm gì không? / Làm cái này với mình nhé?',
      usageNote: 'Khi đã thống nhất nói chuyện thân mật (タメ口), hãy chuyển từ 「行きませんか」 sang 「行かない？」 để nghe tự nhiên như người bản xứ.',
      spokenTip: '「喉渇かない？ 自販機行かない？」 (Không khát nước à? Ra máy bán nước không?)',
      examples: [
        { jp: '一緒（いっしょ）に 図書館（としょかん）で 宿題（しゅくだい）を しない？', vn: 'Cùng vào thư viện làm bài tập không?' },
        { jp: '放課後（ほうかご）、お茶（ちゃ）でも 飲（の）みませんか。', vn: 'Tan học đi uống chén trà không bạn?' }
      ]
    }
  ],
  kanji: [
    { char: '私', hanviet: 'TƯ', strokes: 7, onkun: 'シ · わたし, わたくし', meaning: 'Tôi, riêng tư', compounds: [{ jp: '私（わたし）', vn: 'Tôi' }, { jp: '私立（しりつ）大学（だいがく）', vn: 'Đại học dân lập' }] },
    { char: '学', hanviet: 'HỌC', strokes: 8, onkun: 'ガク · まな-ぶ', meaning: 'Học tập, trường học', compounds: [{ jp: '学校（がっこう）', vn: 'Trường học' }, { jp: '学生（がくせい）', vn: 'Học sinh, sinh viên' }, { jp: '大学（だいがく）', vn: 'Đại học' }] },
    { char: '校', hanviet: 'HIỆU', strokes: 10, onkun: 'コウ', meaning: 'Trường học', compounds: [{ jp: '高校（こうこう）', vn: 'Trường cấp 3' }, { jp: '中学校（ちゅうがっこう）', vn: 'Trường cấp 2' }] },
    { char: '先', hanviet: 'TIÊN', strokes: 6, onkun: 'セン · さき', meaning: 'Trước, đi trước', compounds: [{ jp: '先生（せんせい）', vn: 'Thầy cô giáo' }, { jp: '先週（せんしゅう）', vn: 'Tuần trước' }] },
    { char: '生', hanviet: 'SINH', strokes: 5, onkun: 'セイ, ショウ · い-きる, う-まれる', meaning: 'Sống, sinh ra, học sinh', compounds: [{ jp: '生活（せいかつ）', vn: 'Cuộc sống' }, { jp: '留学生（りゅうがくせい）', vn: 'Du học sinh' }, { jp: '誕生日（たんじょうび）', vn: 'Sinh nhật' }] },
    { char: '友', hanviet: 'HỮU', strokes: 4, onkun: 'ユウ · とも', meaning: 'Bạn bè', compounds: [{ jp: '友達（ともだち）', vn: 'Bạn bè' }, { jp: '友人（ゆうじん）', vn: 'Người bạn (lịch sự)' }] },
    { char: '本', hanviet: 'BẢN', strokes: 5, onkun: 'ホン · もと', meaning: 'Sách, gốc rễ, cái (đơn vị)', compounds: [{ jp: '本（ほん）', vn: 'Quyển sách' }, { jp: '日本語（にほんご）', vn: 'Tiếng Nhật' }, { jp: '1本（いっぽん）', vn: '1 chiếc (bút/chai)' }] },
    { char: '語', hanviet: 'NGỮ', strokes: 14, onkun: 'ゴ · かた-る', meaning: 'Ngôn ngữ, tiếng', compounds: [{ jp: '英語（えいご）', vn: 'Tiếng Anh' }, { jp: '単語（たんご）', vn: 'Từ vựng' }] },
    { char: '何', hanviet: 'HÀ', strokes: 7, onkun: 'カ · なに, なん', meaning: 'Cái gì, bao nhiêu', compounds: [{ jp: '何（なに）', vn: 'Cái gì' }, { jp: '何歳（なんさい）', vn: 'Mấy tuổi' }, { jp: '何時（なんじ）', vn: 'Mấy giờ' }] },
    { char: '好', hanviet: 'HẢO', strokes: 6, onkun: 'コウ · す-き, この-む', meaning: 'Thích, tốt đẹp', compounds: [{ jp: '好（す）きな', vn: 'Thích' }, { jp: '大好（だいす）き', vn: 'Rất thích' }] },
    { char: '分', hanviet: 'PHÂN', strokes: 4, onkun: 'ブン, フン · わ-かる, わ-ける', meaning: 'Phút, hiểu, phân chia', compounds: [{ jp: '分（わ）かる', vn: 'Hiểu, nắm được' }, { jp: '10分（じゅっぷん）', vn: '10 phút' }, { jp: '十分（じゅうぶん）', vn: 'Đầy đủ' }] },
    { char: '間', hanviet: 'GIAN', strokes: 12, onkun: 'カン, ケン · あいだ, ま', meaning: 'Khoảng thời gian, ở giữa', compounds: [{ jp: '時間（じかん）', vn: 'Thời gian, tiếng đồng hồ' }, { jp: '1時間目（いちじかんめ）', vn: 'Tiết học thứ nhất' }] }
  ],
  listening: [
    {
      id: 'l01-01',
      questionJp: 'A: 「おはよう！ ここ、空（あ）いてる？」 — B sẽ đáp lại thế nào tự nhiên nhất?',
      questionVn: 'A hỏi chỗ ngồi bên cạnh còn trống không, bạn trả lời thế nào?',
      audioText: 'おはよう！ここ、あいてる？',
      context: 'Đầu giờ sáng trong lớp học',
      options: [
        { jp: 'ええ、空（あ）いて いますよ。どうぞ！', vn: 'Vâng, còn trống đấy, mời cậu!', isCorrect: true },
        { jp: 'いいえ、空（あ）いて います。', vn: 'Không, còn trống (sai logic).', isCorrect: false },
        { jp: 'はじめまして、さようなら。', vn: 'Chào lần đầu, tạm biệt (lạc đề).', isCorrect: false }
      ],
      explanation: 'Khi chỗ còn trống, trả lời xác nhận và mời bạn ngồi: 「ええ、空いていますよ。どうぞ！」.'
    },
    {
      id: 'l01-02',
      questionJp: 'A: 「俺（おれ）も 20歳（はたち）！ タメ口（ぐち）で いいよ！」 nghĩa là gì?',
      questionVn: 'Bạn hiểu ý của câu nói trên là gì?',
      audioText: 'おれもはたち！ためぐちでいいよ！',
      context: 'Khi biết hai người bằng tuổi nhau',
      options: [
        { jp: 'Bảo bạn nói chuyện thân mật, không cần dùng kính ngữ nữa.', vn: 'Đề nghị nói chuyện thân mật.', isCorrect: true },
        { jp: 'Bảo bạn phải dùng kính ngữ thật nghiêm túc.', vn: 'Bảo phải dùng kính ngữ.', isCorrect: false },
        { jp: 'Nói rằng bạn ấy không muốn nói chuyện.', vn: 'Không muốn nói chuyện.', isCorrect: false }
      ],
      explanation: '「タメ口でいいよ」 là câu cửa miệng của giới trẻ Nhật khi phát hiện bằng tuổi, muốn bỏ bớt rào cản xã giao để làm bạn bè thân thiết.'
    },
    {
      id: 'l01-03',
      questionJp: 'Nghe câu rủ rê: 「放課後（ほうかご）、図書館（としょかん）で 一緒（いっしょ）に 宿題（しゅくだい） しない？」',
      questionVn: 'Người nói đang rủ bạn làm việc gì?',
      audioText: 'ほうかご、としょかんでいっしょにしゅくだいしない？',
      context: 'Cuối giờ học',
      options: [
        { jp: 'Cùng vào thư viện làm bài tập sau giờ học.', vn: 'Cùng làm bài tập ở thư viện sau giờ học.', isCorrect: true },
        { jp: 'Cùng đi quán nhậu uống rượu.', vn: 'Đi quán nhậu.', isCorrect: false },
        { jp: 'Cùng đi mua sắm ở siêu thị.', vn: 'Đi siêu thị.', isCorrect: false }
      ],
      explanation: '「放課後」 là sau giờ học, 「図書館」 là thư viện, 「宿題しない？」 là rủ làm bài tập.'
    }
  ],
  quiz: [
    {
      id: 'q01-01',
      stem: 'Khi người Nhật nói: 「私（わたし）は ベトナム出身（しゅっしん）です。ミンさんは？」, từ 「ミンさんは？」 dùng để làm gì?',
      options: ['Hỏi ngược lại quê quán của Minh mà không cần lặp cả câu', 'Yêu cầu Minh đọc lại tên', 'Chào tạm biệt Minh', 'Khen Minh giỏi tiếng Nhật'],
      correct: 0,
      explain: '「〜さんは？」 là cách hỏi rút gọn cực kỳ phổ biến trong giao tiếp hàng ngày để chuyển hướng câu hỏi về phía người đối diện.'
    },
    {
      id: 'q01-02',
      stem: 'Điền từ thích hợp: 私（わたし）は アニメ（　）大好（だいす）きです。',
      options: ['が', 'を', 'に', 'で'],
      correct: 0,
      explain: 'Các tính từ/động từ chỉ cảm xúc và sở thích như 好き, 嫌い, 上手, 下手 luôn đi với trợ từ 「が」.'
    },
    {
      id: 'q01-03',
      stem: 'Để mượn một cây bút bi từ bạn ngồi cạnh một cách tự nhiên, bạn nên nói câu nào?',
      options: [
        'ボールペン、1本（いっぽん） 貸（か）して くれる？',
        'ボールペンを 買（か）います。',
        'ボールペンを あげます。',
        'ボールペンが 嫌（きら）いです。'
      ],
      correct: 0,
      explain: '「〜貸してくれる？」 (Cho mình mượn ~ được không?) là mẫu câu mượn đồ rất gần gũi giữa bạn bè.'
    },
    {
      id: 'q01-04',
      stem: 'Khi chuông hết tiết reo, từ nào diễn tả cảm giác "Giờ giải lao rồi!"?',
      options: ['休憩（きゅうけい）だ！', '試験（しけん）だ！', '宿題（しゅくだい）だ！', '授業（じゅぎょう）だ！'],
      correct: 0,
      explain: '「休憩」 nghĩa là nghỉ ngơi, giải lao. 「休憩だ！」 = Được giải lao rồi!'
    }
  ],
  dialogue: {
    title: 'Trường học, Giờ giải lao & Làm quen bạn mới',
    scene: 'Buổi sáng đầu giờ tại trường tiếng Nhật, bạn ngồi cạnh Kenta, làm quen, mượn đồ, cùng ra máy bán nước tự động uống trà và trao đổi tài khoản LINE.',
    roles: { A: '健太 (Kenta · Bạn cùng lớp)', B: 'Bạn (ミン · Du học sinh)' },
    lines: [
      {
        speaker: 'A',
        name: '健太',
        role: 'Bạn cùng lớp',
        jp: 'おはよう！ここ、隣（となり）の 席（せき） 空（あ）いてる？',
        politeJp: 'おはようございます。すみません、隣の席は空いていますか？',
        vn: 'Chào buổi sáng! Chỗ bên cạnh này còn trống không?',
        nuances: [
          {
            phrase: '空（あ）いてる？ (Aiteru?)',
            meaning: 'Còn trống không? / Đang rảnh không?',
            tip: 'Dạng thân mật của 空いていますか. Dùng rất nhiều khi hỏi chỗ ngồi trên tàu, lớp học, quán ăn.',
          },
        ],
        keywords: [
          { word: '隣（となり）', hanviet: 'LÂN', meaning: 'Bên cạnh, kế bên', type: 'Danh từ', example: '隣の部屋（へや）に 住んでいます。' },
          { word: '席（せき）', hanviet: 'TỊCH', meaning: 'Chỗ ngồi', type: 'Danh từ', example: '席を 立ちます。' },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'おはようございます。ええ、空（あ）いて いますよ。どうぞ！',
        politeJp: 'おはようございます。はい、空いております。どうぞお座りください。',
        vn: 'Chào buổi sáng. Vâng, còn trống đấy. Mời cậu ngồi!',
        note: 'Đáp lời mở đầu lịch sự, nhã nhặn',
      },
      {
        speaker: 'A',
        name: '健太',
        role: 'Bạn cùng lớp',
        jp: 'ありがとう。俺（おれ）、佐藤（さとう）健太（けんた）。健太（けんた）って 呼（よ）んでね。よろしく！',
        politeJp: 'ありがとうございます。私は佐藤健太と申します。健太と呼んでください。よろしくお願いいたします。',
        vn: 'Cảm ơn nhé. Mình là Sato Kenta. Cứ gọi mình là Kenta nhé. Rất vui được làm quen!',
        nuances: [
          {
            phrase: '俺（おれ） (Ore)',
            meaning: 'Đại từ xưng hô "tôi/mình/tớ" của nam giới',
            tip: 'Chỉ dùng giữa bạn bè nam hoặc người thân thiết, tuyệt đối không dùng với thầy cô hoặc phỏng vấn xin việc.',
          },
          {
            phrase: '〜って 呼（よ）んでね',
            meaning: 'Cứ gọi mình là ~ nhé',
            tip: 'Cách xưng tên ngắn gọn, xóa bỏ khoảng cách xã giao ngay từ phút đầu gặp mặt.',
          },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: '私（わたし）は グエン・ミンです。ミンと 呼（よ）んで ください。こちらこそ、よろしく お願（ねが）いします。',
        politeJp: 'グエン・ミンと申します。こちらこそ、どうぞよろしくお願いいたします。',
        vn: 'Mình là Nguyễn Minh. Cứ gọi mình là Minh nhé. Rất vui được làm quen với Kenta.',
        keywords: [
          { word: 'こちらこそ', meaning: 'Chính tôi mới là người phải nói câu đó', type: 'Cụm giao tiếp', example: 'こちらこそ、よろしくお願いします。' },
        ],
      },
      {
        speaker: 'A',
        name: '健太',
        role: 'Bạn cùng lớp',
        jp: 'ミンくんは ベトナム出身（しゅっしん）？ 日本（にほん）に 来（き）て どれくらい？',
        politeJp: 'ミンさんはベトナムのご出身ですか？ 日本にいらっしゃってどのくらいになりますか？',
        vn: 'Minh là người Việt Nam à? Cậu sang Nhật được bao lâu rồi?',
        keywords: [
          { word: '出身（しゅっしん）', hanviet: 'XUẤT THÂN', meaning: 'Quê quán, xuất thân từ đâu', type: 'Danh từ', example: 'ハノイの 出身です。' },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'はい、ベトナムの ハノイから 来（き）ました。今年（ことし）の 4月（しがつ）に 来（き）たので、今（いま） ちょうど 6か月（ろっかげつ）です。',
        vn: 'Đúng rồi, mình đến từ Hà Nội, Việt Nam. Mình sang từ tháng 4 năm nay nên giờ vừa tròn 6 tháng.',
        keywords: [
          { word: 'ちょうど', meaning: 'Vừa đúng, vừa tròn (thời gian/số lượng)', type: 'Phó từ', example: '今 ちょうど 12時です。' },
        ],
      },
      {
        speaker: 'A',
        name: '健太',
        role: 'Bạn cùng lớp',
        jp: 'へえ、そうなんだ！ 何歳（なんさい）なの？',
        politeJp: 'そうですか！ おいくつでいらっしゃいますか？',
        vn: 'Thế à! Năm nay cậu bao nhiêu tuổi rồi?',
        nuances: [
          {
            phrase: 'そうなんだ (Sou nan da)',
            meaning: 'Ra là vậy à! / Thế á!',
            tip: 'Thán từ đồng cảm kinh điển trong đời thường. Thể lịch sự tương ứng là 「そうですか」.',
          },
          {
            phrase: '〜なの？ (na no?)',
            meaning: 'Đuôi câu hỏi thân mật cho danh từ/tính từ na',
            tip: 'Thay vì hỏi 何歳ですか, dùng 何歳なの？ tạo cảm giác gần gũi như bạn bè quen từ lâu.',
          },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: '20歳（はたち）です。健太（けんた）くんは？',
        politeJp: '20歳です。健太さんはおいくつですか？',
        vn: 'Mình 20 tuổi. Còn Kenta?',
        keywords: [
          { word: '20歳（はたち）', hanviet: 'NHỊ THẬP TUẾ', meaning: '20 tuổi (cách đọc đặc biệt)', type: 'Độ tuổi', example: '今年 20歳に なりました。' },
        ],
      },
      {
        speaker: 'A',
        name: '健太',
        role: 'Bạn cùng lớp',
        jp: '俺（おれ）も 20歳（はたち）！ 同（おな）じ年（とし）じゃん。敬語（けいご）じゃなくて タメ口（ぐち）で いいよ！',
        politeJp: '私も20歳です！同い年ですね。敬語ではなく親しくお話ししましょう。',
        vn: 'Mình cũng 20 tuổi! Bằng tuổi nhau rồi. Không cần dùng kính ngữ đâu, nói chuyện tự nhiên thoải mái đi!',
        nuances: [
          {
            phrase: '〜じゃん (jan)',
            meaning: 'Chẳng phải là ... sao! / ... còn gì!',
            tip: 'Khẩu ngữ khẳng định thân mật đặc trưng của vùng Kanto/Tokyo. Người trẻ dùng rất nhiều.',
          },
          {
            phrase: 'タメ口（ぐち） (Tameguchi)',
            meaning: 'Cách nói chuyện ngang hàng, không kính ngữ',
            tip: 'Khi người Nhật bảo 「タメ口でいいよ」, bạn có thể tự tin bỏ です/ます để trò chuyện gần gũi.',
          },
        ],
        keywords: [
          { word: 'タメ口（ぐち）', meaning: 'Cách nói chuyện thân mật, ngang hàng', type: 'Khẩu ngữ', example: '友達とは タメ口で 話します。' },
          { word: '敬語（けいご）', hanviet: 'KÍNH NGỮ', meaning: 'Kính ngữ trang trọng', type: 'Danh từ', example: '目上の人には 敬語を 使います。' },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'あ、本当（ほんとう）？ じゃ、よろしくね、健太（けんた）。あ、ちょっと 頼（たの）んでも いい？',
        politeJp: '本当ですか？ では、よろしくお願いいたします。あの、少しお願いしてもよろしいでしょうか？',
        vn: 'Thật à? Vậy nhờ cậu nhé, Kenta. À này, nhờ cậu chút được không?',
        nuances: [
          {
            phrase: 'ちょっと 頼（たの）んでも いい？',
            meaning: 'Nhờ chút được không?',
            tip: 'Mẫu câu mở lời nhờ vả nhẹ nhàng, tránh gây áp lực cho người nghe.',
          },
        ],
      },
      {
        speaker: 'A',
        name: '健太',
        role: 'Bạn cùng lớp',
        jp: 'うん、何（なに）？ どうしたの？',
        politeJp: 'はい、何でしょうか？ どうなさいましたか？',
        vn: 'Ừ, chuyện gì thế?',
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'ペンを 忘（わす）れて しまったんだけど、予備（よび）の ボールペン、ある？',
        politeJp: 'ペンを忘れてしまったのですが、予備のボールペンはお持ちでしょうか？',
        vn: 'Mình quên mang bút mất rồi, cậu có bút bi dự phòng ở đó không?',
        nuances: [
          {
            phrase: '〜て しまったんだけど',
            meaning: 'Lỡ làm mất rồi, nhưng mà... (tiếc nuối)',
            tip: 'Dùng 〜てしまう để nói về sự cố ngoài ý muốn, đuôi 〜んだけど để dẫn vào lời nhờ.',
          },
        ],
        keywords: [
          { word: '予備（よび）', hanviet: 'DỰ BỊ', meaning: 'Dự phòng, đồ sơ cua', type: 'Danh từ', example: '予備の 鍵を 作ります。' },
        ],
      },
      {
        speaker: 'A',
        name: '健太',
        role: 'Bạn cùng lớp',
        jp: 'あるよ！ 赤（あか）と 黒（くろ）が あるけど、どっちが いい？',
        politeJp: 'ございますよ。赤と黒がございますが、どちらがよろしいですか？',
        vn: 'Có chứ! Có màu đỏ với màu đen, cậu lấy màu nào?',
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: '黒（くろ）を 1本（いっぽん） 貸（か）して くれる？',
        politeJp: '黒を1本貸していただけますでしょうか？',
        vn: 'Cho mình mượn 1 chiếc màu đen nhé?',
        nuances: [
          {
            phrase: '〜貸（か）して くれる？',
            meaning: 'Cho mình mượn ~ được không?',
            tip: 'Cách mượn đồ thân mật giữa bạn bè. Trong bối cảnh lịch sự dùng 貸していただけますか.',
          },
        ],
        keywords: [
          { word: '貸（か）す', hanviet: 'THẢI', meaning: 'Cho mượn (đối phương cho mình mượn)', type: 'Động từ', example: '本を 貸します。' },
        ],
      },
      {
        speaker: 'A',
        name: '健太',
        role: 'Bạn cùng lớp',
        jp: 'はい、どうぞ。あ、あと 今日の 教科書（きょうかしょ）って、これだよね？',
        vn: 'Đây, cầm lấy. À này, sách giáo khoa hôm nay là cuốn này đúng không?',
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'うん、そう。その 青（あお）い 本（ほん）だよ。机（つくえ）の 上（うえ）に 置（お）いて おこう。',
        vn: 'Ừ, đúng rồi. Cuốn màu xanh đó đấy. Để sẵn lên bàn đi.',
      },
      {
        speaker: 'A',
        name: '健太',
        role: 'Bạn cùng lớp',
        jp: 'よし。……あ、チャイム 鳴（な）った！ 先生（せんせい）が 来（く）るよ。',
        vn: 'Xong. ...A, chuông reo rồi kìa! Thầy giáo đến đấy.',
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: '1時間目（いちじかんめ）は 山田（やまだ）先生（せんせい）の 授業（じゅぎょう）だね。',
        vn: 'Tiết 1 là giờ của thầy Yamada nhỉ.',
      },
      {
        speaker: 'A',
        name: '健太',
        role: 'Bạn cùng lớp',
        jp: '（授業後）ふう〜、やっと 1時間目（いちじかんめ）が 終（お）わった！ 休憩（きゅうけい）だ！',
        vn: '(Sau giờ học) Phù~ cuối cùng cũng xong tiết 1 rồi! Giờ giải lao rồi!',
        nuances: [
          {
            phrase: '休憩（きゅうけい）だ！',
            meaning: 'Nghỉ giải lao rồi!',
            tip: 'Thán từ reo lên khi hết giờ học căng thẳng.',
          },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: '山田（やまだ）先生（せんせい）、少（すこ）し 厳（きび）しいけど、教（おし）え方（かた）が とても 分（わ）かりやすいね。',
        vn: 'Thầy Yamada hơi nghiêm một chút nhưng cách giảng bài dễ hiểu thật nhỉ.',
        keywords: [
          { word: '厳（きび）しい', hanviet: 'NGHIÊM', meaning: 'Nghiêm khắc, khó tính', type: 'Tính từ đuôi i', example: '規則が 厳しいです。' },
          { word: '教（おし）え方（かた）', hanviet: 'GIÁO PHƯƠNG', meaning: 'Cách dạy, phương pháp giảng', type: 'Danh từ', example: '先生の 教え方が 上手です。' },
        ],
      },
      {
        speaker: 'A',
        name: '健太',
        role: 'Bạn cùng lớp',
        jp: 'うん、熱心（ねっしん）で いい 先生（せんせい）だよ。ねえ、喉（のど） 渇（かわ）かない？ 自販機（じはんき） 行（い）かない？',
        politeJp: 'はい、熱心で素晴らしい先生です。喉が渇きませんか？ 自販機に行きませんか？',
        vn: 'Ừ, thầy tâm huyết và tốt bụng lắm. Này, có khát nước không? Ra máy bán nước tự động đi!',
        nuances: [
          {
            phrase: '自販機（じはんき） (Jihanki)',
            meaning: 'Máy bán nước tự động (viết tắt)',
            tip: 'Khẩu ngữ nói tắt của 自動販売機 (jidou hanbaiki). Ở Nhật ai cũng gọi tắt là 自販機.',
          },
        ],
        keywords: [
          { word: '自販機（じはんき）', hanviet: 'TỰ PHIẾN CƠ', meaning: 'Máy bán hàng tự động', type: 'Danh từ', example: '自販機で ジュースを 買います。' },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'いいね、行（い）こう！ 自販機（じはんき）は どこに あるの？',
        vn: 'Hay đấy, đi thôi! Máy bán nước ở đâu thế?',
      },
      {
        speaker: 'A',
        name: '健太',
        role: 'Bạn cùng lớp',
        jp: '階段（かいだん）の 横（よこ）、トイレの すぐ 前（まえ）に あるよ。',
        vn: 'Ở ngay cạnh cầu thang, phía trước nhà vệ sinh đấy.',
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'あ、本当（ほんとう）だ。種類（しゅるい）が たくさん あるね。健太（けんた）は 何（なに）に する？',
        vn: 'A, thấy rồi. Nhiều loại ghê. Kenta uống gì?',
      },
      {
        speaker: 'A',
        name: '健太',
        role: 'Bạn cùng lớp',
        jp: '俺（おれ）は 冷（つめ）たい お茶（ちゃ）。ミンくんは？',
        vn: 'Mình lấy trà xanh lạnh. Còn Minh?',
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: '私（わたし）は この 缶（かん）コーヒーに する。130円（ひゃくさんじゅうえん）ね。',
        vn: 'Mình chọn lon cà phê này. 130 yên nhỉ.',
      },
      {
        speaker: 'A',
        name: '健太',
        role: 'Bạn cùng lớp',
        jp: '（お茶を飲みながら）そういえば、ミンくんの 趣味（しゅみ）って 何（なに）？',
        vn: '(Vừa uống trà vừa hỏi) À mà này, sở thích của Minh là gì thế?',
        nuances: [
          {
            phrase: 'そういえば (Sou ieba)',
            meaning: 'Nhắc mới nhớ / Nhân tiện đây / À mà này',
            tip: 'Từ chuyển tiếp hội thoại cực kỳ tự nhiên khi chợt nhớ ra chủ đề muốn hỏi.',
          },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: '私（わたし）の 趣味（しゅみ）は 映画（えいが）を 見（み）る ことと、サッカーだよ。健太（けんた）は？',
        vn: 'Sở thích của mình là xem phim và đá bóng. Còn Kenta?',
      },
      {
        speaker: 'A',
        name: '健太',
        role: 'Bạn cùng lớp',
        jp: 'マジで？ 俺（おれ）も サッカー 大好（だいす）きだよ！ 日本（にほん）の アニメとかは 見（み）る？',
        politeJp: '本当ですか？ 私もサッカーが大好きですよ！ 日本のアニメなどはご覧になりますか？',
        vn: 'Thật á? Mình cũng cực kỳ mê bóng đá đấy! Cậu có xem anime Nhật Bản không?',
        nuances: [
          {
            phrase: 'マジで？ (Maji de?)',
            meaning: 'Thật á?! / Không đùa chứ?!',
            tip: 'Thán từ ngạc nhiên đời thường quen thuộc nhất của người Nhật. Bản lịch sự là 本当ですか.',
          },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'もちろん！『鬼滅の刃』や『ONE PIECE』が 大好（だいす）きで、ベトナムでも よく 見（み）て いたよ。',
        vn: 'Tất nhiên rồi! Mình rất thích Kimetsu no Yaiba với One Piece, hồi ở Việt Nam cũng xem suốt.',
      },
      {
        speaker: 'A',
        name: '健太',
        role: 'Bạn cùng lớp',
        jp: 'すげえ！ ミンくん、日本語（にほんご） めっちゃ 上手（じょうず）じゃん！',
        politeJp: 'すごいですね！ ミンさん、日本語がとてもお上手ですね！',
        vn: 'Đỉnh thật! Minh nói tiếng Nhật siêu mượt luôn đấy!',
        nuances: [
          {
            phrase: 'すげえ (Sugee)',
            meaning: 'Đỉnh ghê / Siêu thế (biến âm すごい)',
            tip: 'Biến âm kéo dài âm e đặc trưng của văn nói nam giới trẻ tuổi.',
          },
          {
            phrase: 'めっちゃ (Meccha)',
            meaning: 'Rất, cực kỳ (= とても)',
            tip: 'Từ tăng cường mức độ thông dụng nhất trong giới trẻ và đời sống.',
          },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'いやいや、まだまだ 下手（へた）だよ。日常（にちじょう）会話（かいわ）は まだ 分（わ）からない 言葉（ことば）も 多いし。',
        vn: 'Đâu có, còn kém lắm. Giao tiếp hàng ngày mình còn nhiều từ chưa hiểu lắm.',
        nuances: [
          {
            phrase: 'いやいや (Iya iya)',
            meaning: 'Đâu có đâu mà / Không dám đâu',
            tip: 'Cách từ chối lời khen khiêm tốn chuẩn văn hóa Nhật Bản.',
          },
        ],
      },
      {
        speaker: 'A',
        name: '健太',
        role: 'Bạn cùng lớp',
        jp: '十分（じゅうぶん） 通（つう）じてるよ！ あ、今日の 授業（じゅぎょう）は 何時（なんじ）までだっけ？',
        vn: 'Nói thế là người ta hiểu hết rồi! À, giờ học hôm nay đến mấy giờ ấy nhỉ?',
        nuances: [
          {
            phrase: '〜だっけ？ (dakke?)',
            meaning: '...ấy nhỉ? (hỏi để xác nhận lại điều mình quên)',
            tip: 'Dùng khi muốn người đối diện nhắc lại thông tin mình lỡ quên.',
          },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: '午後（ごご） 3時（さんじ）半（はん）までだよ。その あと、アルバイトが あるの？',
        vn: 'Đến 3 giờ rưỡi chiều. Sau đó cậu có đi làm thêm không?',
      },
      {
        speaker: 'A',
        name: '健太',
        role: 'Bạn cùng lớp',
        jp: '今日（きょう）は バイト ないよ。週（しゅう）に 3回（さんかい）だけ、居酒屋（いざかや）で 働（はたら）いてるんだ。',
        vn: 'Hôm nay mình không làm thêm. Một tuần mình chỉ làm 3 buổi ở quán nhậu thôi.',
        keywords: [
          { word: '居酒屋（いざかや）', hanviet: 'CƯ TỬU ỐC', meaning: 'Quán nhậu kiểu Nhật', type: 'Địa điểm', example: '居酒屋で アルバイトを します。' },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'そうなんだ。じゃ、放課後（ほうかご） 図書館（としょかん）で 一緒（いっしょ）に 宿題（しゅくだい） しない？',
        politeJp: 'そうですか。では、放課後図書館で一緒に宿題をしませんか？',
        vn: 'Thế à. Vậy tan học cùng nhau vào thư viện làm bài tập không?',
        nuances: [
          {
            phrase: '〜しない？ (shinai?)',
            meaning: 'Cùng làm ~ không?',
            tip: 'Mẫu câu rủ rê bạn bè thân mật. Thể lịch sự là 〜しませんか.',
          },
        ],
      },
      {
        speaker: 'A',
        name: '健太',
        role: 'Bạn cùng lớp',
        jp: 'いいね！ LINE やってる？ 連絡先（れんらくさき）、交換（こうかん）しようよ！',
        politeJp: 'いいですね！ LINEを使っていますか？ 連絡先を交換しましょう！',
        vn: 'Hay đấy! Cậu có dùng LINE không? Đổi liên lạc đi!',
        nuances: [
          {
            phrase: 'LINE やってる？',
            meaning: 'Có dùng LINE không?',
            tip: 'Người Nhật dùng động từ やる để hỏi về việc có dùng mạng xã hội/app nào không.',
          },
          {
            phrase: '〜しようよ',
            meaning: 'Cùng làm ~ đi!',
            tip: 'Thể ý chí thân mật, tạo sự hào hứng gắn kết.',
          },
        ],
        keywords: [
          { word: '連絡先（れんらくさき）', hanviet: 'LIÊN LẠC TIÊN', meaning: 'Thông tin liên lạc (SĐT, ID)', type: 'Danh từ', example: '連絡先を 交換します。' },
          { word: '交換（こうかん）', hanviet: 'GIAO HOÁN', meaning: 'Trao đổi', type: 'Danh từ / Động từ nhóm 3', example: '名刺を 交換します。' },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'うん、やってるよ！ QRコード 見（み）せるね。これからも よろしくね！',
        politeJp: 'はい、使っています！ QRコードをお見せしますね。今後ともどうぞよろしくお願いいたします！',
        vn: 'Có chứ! Mình mở mã QR cho cậu quét nhé. Từ giờ giúp đỡ nhau nha!',
      },
    ],
  },
}

// ----------------------------------------------------
// MODULE 02: Chiến Thần Konbini & Mua Sắm Ẩm Thực
// ----------------------------------------------------
export const MODULE_02: ModuleDetail = {
  id: 'mod-02',
  num: 2,
  code: 'MOD-02',
  titleJp: '戦神（せんしん）コンビニと 街（まち）の 買（か）い物（もの）',
  titleVn: 'Chiến Thần Konbini & Mua Sắm Ẩm Thực',
  subtitle: 'Làm chủ 100% câu đối đáp ở quầy thu ngân Konbini, chọn món, thanh toán ví điện tử và ăn uống đường phố.',
  badge: 'MODULE 02 · MUA SẮM & ẨM THỰC',
  accentColor: 'from-amber-500/20 to-orange-500/10 border-amber-500/40 text-amber-600',
  estimatedHours: '4-6 giờ học',
  stats: { vocab: 28, grammar: 5, kanji: 12, dialogues: 38 },
  vocab: [
    { id: 'v02-01', jp: 'お弁当（べんとう）コーナー', romaji: 'obentou koonaa', vn: 'Quầy cơm hộp', category: 'Cửa hàng' },
    { id: 'v02-02', jp: '温（あたた）める', romaji: 'atatameru', vn: 'Hâm nóng (quay lò vi sóng)', category: 'Hành động' },
    { id: 'v02-03', jp: 'おはし', romaji: 'ohashi', vn: 'Đôi đũa (kèm tiền tố lịch sự お)', category: 'Đồ dùng' },
    { id: 'v02-04', jp: '1ぜん', romaji: 'ichizen', vn: '1 đôi đũa (đơn vị đếm 膳)', category: 'Số đếm' },
    { id: 'v02-05', jp: 'レジ袋（ぶくろ）', romaji: 'rejibukuro', vn: 'Túi nilon tính tiền ở quầy', category: 'Cửa hàng' },
    { id: 'v02-06', jp: '有料（ゆうりょう）', romaji: 'yuuryou', vn: 'Có tính phí, phải trả tiền', category: 'Mua bán' },
    { id: 'v02-07', jp: '無料（むりょう）', romaji: 'muryou', vn: 'Miễn phí', category: 'Mua bán' },
    { id: 'v02-08', jp: 'マイバッグ', romaji: 'maibaggu', vn: 'Túi vải cá nhân (tự mang theo)', category: 'Đồ dùng' },
    { id: 'v02-09', jp: '結構（けっこう）です', romaji: 'kekkou desu', vn: 'Được rồi, tôi không cần (từ chối lịch sự)', category: 'Giao tiếp' },
    { id: 'v02-10', jp: 'ポイントカード', romaji: 'pointo kaado', vn: 'Thẻ tích điểm khách hàng', category: 'Cửa hàng' },
    { id: 'v02-11', jp: 'ホットスナック', romaji: 'hotto sunakku', vn: 'Quầy đồ ăn vặt nóng trong tủ kính', category: 'Cửa hàng' },
    { id: 'v02-12', jp: 'ななチキ / からあげクン', romaji: 'nanachiki', vn: 'Gà rán đặc trưng của 7-Eleven / Lawson', category: 'Món ăn' },
    { id: 'v02-13', jp: '肉（にく）まん', romaji: 'nikuman', vn: 'Bánh bao nhân thịt hấp nóng', category: 'Món ăn' },
    { id: 'v02-14', jp: 'おにぎり', romaji: 'onigiri', vn: 'Cơm nắm tam giác rong biển', category: 'Món ăn' },
    { id: 'v02-15', jp: 'めんたいこ', romaji: 'mentaiko', vn: 'Trứng cá tuyết ướp cay', category: 'Món ăn' },
    { id: 'v02-16', jp: 'サンドイッチ', romaji: 'sandoitchi', vn: 'Bánh mì sandwich', category: 'Món ăn' },
    { id: 'v02-17', jp: 'おかいけい', romaji: 'okaikei', vn: 'Thanh toán tiền, tính tiền', category: 'Mua bán' },
    { id: 'v02-18', jp: 'バーコード', romaji: 'baakoodo', vn: 'Mã vạch thanh toán', category: 'Công nghệ' },
    { id: 'v02-19', jp: 'かざす', romaji: 'kamazu', vn: 'Giơ lên, đặt lên đầu đọc quét mã', category: 'Hành động' },
    { id: 'v02-20', jp: 'レシート', romaji: 'reshiito', vn: 'Hóa đơn mua hàng', category: 'Cửa hàng' },
    { id: 'v02-21', jp: '少（すこ）し お待（ま）ちください', romaji: 'sukoshi omachi kudasai', vn: 'Xin quý khách vui lòng đợi một chút', category: 'Cửa hàng' },
    { id: 'v02-22', jp: 'アツアツ', romaji: 'atsuatsu', vn: 'Nóng hổi, vừa thổi vừa ăn', category: 'Cảm giác' },
    { id: 'v02-23', jp: 'ボリュームがある', romaji: 'boryuumu ga aru', vn: 'Đầy đặn, suất to no nê', category: 'Tính từ' },
    { id: 'v02-24', jp: 'ベンチ', romaji: 'benchi', vn: 'Ghế băng dài ở công viên/vỉa hè', category: 'Địa điểm' },
    { id: 'v02-25', jp: 'いただきます', romaji: 'itadakimasu', vn: 'Lời mời ăn trước khi dùng bữa', category: 'Đời sống' },
    { id: 'v02-26', jp: 'そろっている', romaji: 'sorotte iru', vn: 'Đầy đủ, có sẵn mọi thứ', category: 'Cửa hàng' },
    { id: 'v02-27', jp: 'なくてはならない', romaji: 'nakute wa naranai', vn: 'Không thể thiếu được', category: 'Thành ngữ' },
    { id: 'v02-28', jp: 'ナイスチョイス！', romaji: 'naisu choisu', vn: 'Lựa chọn chuẩn đấy! / Quá hợp lý!', category: 'Khẩu ngữ' }
  ],
  grammar: [
    {
      id: 'g02-01',
      title: 'Gọi Món & Mua Thêm: 〜を ［Số lượng］ ください／〜にします',
      formula: '［Món đồ］を ［Số lượng］ ください。 ／ ［Món đồ］に します。',
      meaning: 'Cho tôi [Số lượng] [Món đồ] / Tôi chọn lấy món này.',
      usageNote: 'Khi gọi đồ nóng trong quầy kính: 「あのチキンを 1つ ください」. Khi phân vân giữa 2 món và chốt chọn: 「これに します」.',
      spokenTip: 'Tại quầy Konbini: 「これ、温めお願いします」 (Món này hâm nóng giúp tôi).',
      examples: [
        { jp: 'ホットスナックから、ななチキを 1つ ください。', vn: 'Ở quầy đồ nóng, cho tôi lấy 1 miếng gà Nana-chiki.' },
        { jp: '唐揚（からあ）げ 弁当（べんとう）に します。', vn: 'Tôi chốt chọn hộp cơm gà rán này.' }
      ]
    },
    {
      id: 'g02-02',
      title: 'Hỏi Phương Thức Thanh Toán: 〜で 払（はら）えますか',
      formula: '［Tiền mặt / Thẻ / Tên ví Pay］で 払（はら）えますか。',
      meaning: 'Có thể trả bằng [phương thức] được không?',
      usageNote: 'Dùng trợ từ 「で」 để chỉ phương tiện thanh toán: 現金で (tiền mặt), カードで (thẻ), PayPayで (bằng PayPay).',
      spokenTip: 'Có thể hỏi ngắn gọn: 「PayPay いけますか？」 hoặc 「カード使えますか？」.',
      examples: [
        { jp: 'PayPayで 払（はら）えますか。', vn: 'Trả bằng PayPay được không ạ?' },
        { jp: 'クレジットカードで お願（ねが）いします。', vn: 'Cho tôi trả bằng thẻ tín dụng ạ.' }
      ]
    },
    {
      id: 'g02-03',
      title: 'Từ Chối Lịch Sự: 〜は 結構（けっこう）です／大丈夫（だいじょうぶ）です',
      formula: '［Đồ vật］は 結構（けっこう）です。 ／ 大丈夫（だいじょうぶ）です。',
      meaning: '[Thứ đó] thì tôi không cần ạ / Tôi ổn rồi.',
      usageNote: 'Khi nhân viên hỏi có lấy túi nilon hay hóa đơn không, KHÔNG nên nói cộc lốc 「いらない」 (không cần). Hãy nói 「袋は大丈夫です」 hoặc 「結構です」.',
      spokenTip: 'Vừa xua nhẹ tay vừa nói: 「あ、大丈夫です、マイバッグあります」 (À mình không cần túi, mình có túi vải rồi).',
      examples: [
        { jp: 'レジ袋（ぶくろ）は 結構（けっこう）です。', vn: 'Túi nilon thì tôi không cần ạ.' },
        { jp: 'レシートは 大丈夫（だいじょうぶ）です。', vn: 'Hóa đơn thì thôi không cần ạ.' }
      ]
    },
    {
      id: 'g02-04',
      title: 'Nghe Hiểu Kính Ngữ Nhân Viên: 〜は ご利用（りよう）ですか／お持（も）ちですか',
      formula: '［Đồ vật］は ご利用（りよう）ですか。 ／ お持（も）ちですか。',
      meaning: 'Quý khách có dùng [túi/dịch vụ] không ạ? / Quý khách có mang theo [thẻ] không ạ?',
      usageNote: 'Đây là câu cửa miệng 100% nhân viên Konbini sẽ nói. Nhận biết để phản xạ trả lời: Có thì 「お願いします / 持ってます」, Không thì 「大丈夫です / ないです」.',
      spokenTip: '「ポイントカードはお持ちですか？」 $\\rightarrow$ Trả lời nhanh: 「ないです」 (không có) hoặc giơ màn hình ứng dụng tích điểm.',
      examples: [
        { jp: 'レジ袋（ぶくろ）は ご利用（りよう）ですか。', vn: 'Quý khách có dùng túi nilon không ạ?' },
        { jp: 'ポイントカードは お持（も）ちですか。', vn: 'Quý khách có thẻ tích điểm không ạ?' }
      ]
    },
    {
      id: 'g02-05',
      title: 'Khen Đồ Ăn & Lợi Ích: 〜し、〜し（Liệt kê lý do）',
      formula: '［Mệnh đề 1］し、［Mệnh đề 2］し、〜',
      meaning: 'Vừa [thế này], lại vừa [thế kia], nên...',
      usageNote: 'Dùng 「し」 để đưa ra nhiều ưu điểm cùng lúc: 「安（やす）いし、おいしいし、ボリュームもある」 (Vừa rẻ, vừa ngon lại vừa đầy đặn).',
      spokenTip: '「この弁当、520円だし ボリュームあるし おすすめだよ！」',
      examples: [
        { jp: '安（やす）くて おいしいのは 本当（ほんとう）に 助（たす）かります。', vn: 'Vừa rẻ vừa ngon đúng là đỡ cho mình biết bao nhiêu.' },
        { jp: '近（ちか）いし 便利（べんり）だから、よく 行（い）きます。', vn: 'Vừa gần lại vừa tiện nên tôi hay ghé.' }
      ]
    }
  ],
  kanji: [
    { char: '買', hanviet: 'MÃI', strokes: 12, onkun: 'バイ · か-う', meaning: 'Mua sắm', compounds: [{ jp: '買（か）い物（もの）', vn: 'Mua sắm' }, { jp: '買（か）う', vn: 'Mua' }] },
    { char: '物', hanviet: 'VẬT', strokes: 8, onkun: 'ブツ, モツ · もの', meaning: 'Đồ vật, sự vật', compounds: [{ jp: '食（た）べ物（もの）', vn: 'Đồ ăn' }, { jp: '飲（の）み物（もの）', vn: 'Đồ uống' }, { jp: '荷物（にもつ）', vn: 'Hành lý, kiện hàng' }] },
    { char: '店', hanviet: 'ĐIẾM', strokes: 8, onkun: 'テン · みせ', meaning: 'Cửa hàng, tiệm', compounds: [{ jp: '店員（てんいん）', vn: 'Nhân viên cửa hàng' }, { jp: '喫茶店（きっさてん）', vn: 'Quán cà phê' }, { jp: '売店（ばいてん）', vn: 'Quầy bán đồ' }] },
    { char: '食', hanviet: 'THỰC', strokes: 9, onkun: 'ショク, ジキ · た-べる', meaning: 'Ăn, ẩm thực', compounds: [{ jp: '食事（しょくじ）', vn: 'Bữa ăn' }, { jp: '食堂（しょくどう）', vn: 'Nhà ăn, căng tin' }, { jp: '定食（ていしょく）', vn: 'Suất cơm phần' }] },
    { char: '飲', hanviet: 'ẨM', strokes: 12, onkun: 'イン · の-む', meaning: 'Uống', compounds: [{ jp: '飲（の）み物（もの）', vn: 'Đồ uống' }, { jp: '飲（の）む', vn: 'Uống' }] },
    { char: '肉', hanviet: 'NHỤC', strokes: 6, onkun: 'ニク', meaning: 'Thịt', compounds: [{ jp: '肉（にく）まん', vn: 'Bánh bao thịt' }, { jp: '牛肉（ぎゅうにく）', vn: 'Thịt bò' }, { jp: '豚肉（ぶたにく）', vn: 'Thịt lợn' }] },
    { char: '茶', hanviet: 'TRÀ', strokes: 9, onkun: 'チャ, サ', meaning: 'Trà, chè', compounds: [{ jp: 'お茶（ちゃ）', vn: 'Trà xanh' }, { jp: '紅茶（こうちゃ）', vn: 'Hồng trà' }, { jp: '茶色（ちゃいろ）', vn: 'Màu nâu' }] },
    { char: '円', hanviet: 'VIÊN', strokes: 4, onkun: 'エン · まる-い', meaning: 'Đồng Yên, tròn', compounds: [{ jp: '100円（ひゃくえん）', vn: '100 yên' }, { jp: '千円（せんえん）', vn: '1.000 yên' }] },
    { char: '百', hanviet: 'BÁCH', strokes: 6, onkun: 'ヒャク', meaning: 'Trăm', compounds: [{ jp: '500円（ごひゃくえん）', vn: '500 yên' }, { jp: '三百（さんびゃく）', vn: '300 (biến âm)' }] },
    { char: '千', hanviet: 'THIÊN', strokes: 3, onkun: 'セン · ち', meaning: 'Nghìn', compounds: [{ jp: '1000円（せんえん）', vn: '1.000 yên' }, { jp: '三千（さんぜん）', vn: '3.000 (biến âm)' }] },
    { char: '万', hanviet: 'VẠN', strokes: 3, onkun: 'マン, バン', meaning: 'Mười nghìn (vạn)', compounds: [{ jp: '1万円（いちまんえん）', vn: '10.000 yên' }, { jp: '万（まん）', vn: 'Mười nghìn (vạn)' }] },
    { char: '安', hanviet: 'AN', strokes: 6, onkun: 'アン · やす-い', meaning: 'Rẻ, an toàn', compounds: [{ jp: '安（やす）い', vn: 'Rẻ' }, { jp: '安心（あんしん）', vn: 'Yên tâm' }, { jp: '安全（あんぜん）', vn: 'An toàn' }] }
  ],
  listening: [
    {
      id: 'l02-01',
      questionJp: 'Nhân viên hỏi: 「お弁当（べんとう）、温（あたた）めますか？」 — Bạn muốn hâm nóng, nói gì?',
      questionVn: 'Bạn muốn nhân viên hâm nóng cơm hộp, bạn nói thế nào?',
      audioText: 'おべんとう、あたためますか？',
      context: 'Tại quầy thu ngân Konbini',
      options: [
        { jp: 'はい、温（あたた）めて ください。', vn: 'Có, phiền anh hâm nóng giúp.', isCorrect: true },
        { jp: 'いいえ、食（た）べません。', vn: 'Không, không ăn (sai logic).', isCorrect: false },
        { jp: '袋（ふくろ）は 3円（さんえん）です。', vn: 'Túi 3 yên (nhầm lời thoại NV).', isCorrect: false }
      ],
      explanation: 'Khi đồng ý hâm nóng: 「はい、温めてください」 hoặc 「温めお願いします」.'
    },
    {
      id: 'l02-02',
      questionJp: 'Nhân viên hỏi: 「レジ袋（ぶくろ）は ご利用（りよう）ですか？」 — Bạn không cần túi vì có túi vải, nói gì?',
      questionVn: 'Bạn từ chối lấy túi nilon vì có túi cá nhân:',
      audioText: 'レジぶくろはごりようですか？',
      context: 'Tại quầy thanh toán',
      options: [
        { jp: 'いいえ、結構（けっこう）です。マイバッグが あります。', vn: 'Dạ không cần, tôi có túi riêng rồi.', isCorrect: true },
        { jp: 'はい、マイバッグを 買（か）います。', vn: 'Có, mua túi vải.', isCorrect: false },
        { jp: 'お箸（はし）を ください。', vn: 'Cho tôi đôi đũa.', isCorrect: false }
      ],
      explanation: 'Từ chối túi lịch sự: 「結構です」 hoặc 「大丈夫です」 kèm giải thích 「マイバッグがあります」.'
    },
    {
      id: 'l02-03',
      questionJp: 'Khách hỏi: 「PayPayで 払（はら）えますか？」 — Nhân viên đáp lại:',
      questionVn: 'Khách hỏi có trả bằng PayPay được không, nhân viên đáp:',
      audioText: 'ペイペイではらえますか？',
      context: 'Thanh toán ví điện tử',
      options: [
        { jp: 'はい、バーコードを かざして ください。', vn: 'Vâng, xin quét mã vạch trên màn hình.', isCorrect: true },
        { jp: 'いいえ、お弁当（べんとう）は 熱（あつ）いです。', vn: 'Không, cơm nóng lắm.', isCorrect: false },
        { jp: 'お箸（はし）は 1膳（いちぜん）です。', vn: 'Đũa 1 đôi.', isCorrect: false }
      ],
      explanation: 'Khi thanh toán bằng mã ví: nhân viên sẽ hướng dẫn giơ mã vào đầu đọc: 「バーコードを かざしてください」.'
    }
  ],
  quiz: [
    {
      id: 'q02-01',
      stem: 'Khi muốn mua thêm 1 chiếc bánh bao thịt ở quầy nóng của Konbini, bạn nói:',
      options: ['肉（にく）まんを 1つ ください。', '肉（にく）まんを 1本（いっぽん） ください。', '肉（にく）まんを 1枚（いちまい） ください。', '肉（にく）まんを 1膳（いちぜん） ください。'],
      correct: 0,
      explain: 'Bánh bao đếm bằng đơn vị 「つ」: 1つ (hitotsu), 2つ (futatsu).'
    },
    {
      id: 'q02-02',
      stem: 'Đơn vị đếm đũa trong tiếng Nhật là gì? (Ví dụ: Cho tôi 1 đôi đũa)',
      options: ['膳（ぜん） - 1膳（いちぜん）', '本（ほん） - 1本（いっぽん）', '個（こ） - 1個（いっこ）', '枚（まい） - 1枚（いちまい）'],
      correct: 0,
      explain: 'Đũa đếm theo đôi bằng đơn vị 「膳（ぜん）」: 1 đôi là 1膳 (ichizen).'
    },
    {
      id: 'q02-03',
      stem: 'Từ nào có nghĩa là "Món ăn nóng trong tủ kính cạnh quầy thu ngân"?',
      options: ['ホットスナック', 'マイバッグ', 'ポイントカード', 'レジ袋'],
      correct: 0,
      explain: 'Hot Snack (ホットスナック) là từ gọi chung các món gà rán, xúc xích, bánh bao nóng ở quầy Konbini.'
    },
    {
      id: 'q02-04',
      stem: 'Câu nào thể hiện sự lịch sự khi từ chối nhận hóa đơn mua hàng?',
      options: ['レシートは 大丈夫（だいじょうぶ）です。', 'レシートは 嫌（きら）いです。', 'レシートは ダメです。', 'レシートは 悪（わる）いです。'],
      correct: 0,
      explain: 'Trong văn nói dịch vụ Nhật, 「大丈夫です」 hoặc 「要りません」 mang hàm ý từ chối nhẹ nhàng, không gây thô lỗ.'
    }
  ],
  dialogue: {
    title: 'Chiến Thần Konbini & Mua Sắm Đời Sống',
    scene: 'Sau giờ học, bạn cùng Sakura ghé vào cửa hàng tiện lợi 7-Eleven mua cơm hộp, đồ uống, gọi gà rán nóng tại quầy và ngồi ăn ở công viên ngoài cửa.',
    roles: { A: '店員 / さくら (Nhân viên / Bạn cùng lớp)', B: 'Bạn (ミン · Du học sinh)' },
    lines: [
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'さくらさん、お腹（なか） 空（す）いたね。駅前（えきまえ）の コンビニに 寄（よ）って 行（い）かない？',
        politeJp: 'さくらさん、お腹が空きましたね。駅前のコンビニに寄って行きませんか？',
        vn: 'Sakura ơi, đói bụng quá nhỉ. Ghé vào cửa hàng tiện lợi trước ga một lát không?',
        nuances: [
          {
            phrase: '〜に 寄（よ）って 行（い）かない？',
            meaning: 'Ghé vào ~ một lát không?',
            tip: 'Động từ 立ち寄る (tạt qua, ghé qua). Dùng khi muốn tạt qua cửa hàng tiện lợi hay quán cà phê trên đường về.',
          },
        ],
        keywords: [
          { word: '駅前（えきまえ）', hanviet: 'DỊCH TIỀN', meaning: 'Khu vực trước cửa nhà ga', type: 'Danh từ', example: '駅前の カフェで 待ち合わせします。' },
          { word: '寄（よ）る', hanviet: 'KÝ', meaning: 'Ghé qua, tạt vào', type: 'Động từ', example: '帰りに スーパーに 寄ります。' },
        ],
      },
      {
        speaker: 'A',
        name: 'さくら',
        role: 'Bạn cùng lớp',
        jp: 'うん、行（い）こう！ あそこの セブンイレブン、お弁当（べんとう）の 種類（しゅるい）が 多いんだよね。',
        vn: 'Ừ, đi thôi! Cửa hàng 7-Eleven đằng kia nhiều loại cơm hộp lắm đấy.',
        keywords: [
          { word: '種類（しゅるい）', hanviet: 'CHỦNG LOẠI', meaning: 'Chủng loại, các loại mặt hàng', type: 'Danh từ', example: 'パンの 種類が 豊富です。' },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: '（入店）いらっしゃいませの 声（こえ）が 元気（げんき）だね。お弁当（べんとう）コーナーは どこかな？',
        vn: '(Vào quán) Tiếng chào khách của nhân viên nghe tràn đầy năng lượng nhỉ. Quầy cơm hộp ở đâu ta?',
      },
      {
        speaker: 'A',
        name: 'さくら',
        role: 'Bạn cùng lớp',
        jp: '入（はい）って 右側（みぎがわ）の 奥（おく）だよ。おにぎりと サンドイッチも その 隣（となり）に あるよ。',
        vn: 'Ở góc bên phải phía trong đấy. Cơm nắm và bánh mì kẹp cũng nằm ngay bên cạnh luôn.',
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'あ、本当（ほんとう）だ！ わあ、唐揚（からあ）げ 弁当（べんとう）と ハンバーグ 弁当（べんとう）が ある。どっちが おいしいかな？',
        vn: 'A, đúng rồi! Oa, có cả cơm hộp gà rán và cơm hộp thịt băm chiên Hamburg. Cái nào ngon hơn nhỉ?',
      },
      {
        speaker: 'A',
        name: 'さくら',
        role: 'Bạn cùng lớp',
        jp: 'この 唐揚（からあ）げ 弁当（べんとう）、520円（ごひゃくにじゅうえん）で ボリューム あるし おすすめだよ！',
        vn: 'Hộp cơm gà rán này 520 yên, đầy đặn lắm mà ăn ngon, mình highly recommend đấy!',
        nuances: [
          {
            phrase: 'ボリュームが ある',
            meaning: 'Đầy đặn, no nê, suất to',
            tip: 'Từ mượn tiếng Anh "volume" dùng chỉ khẩu phần ăn đầy ắp, rất hợp túi tiền sinh viên.',
          },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'じゃ、これに しよう！ あと、冷（つめ）たい お茶（ちゃ）も 1本（いっぽん） 取（と）ってくるね。',
        vn: 'Vậy mình chọn hộp này! À, mình qua lấy thêm một chai trà xanh lạnh nữa nhé.',
      },
      {
        speaker: 'A',
        name: 'さくら',
        role: 'Bạn cùng lớp',
        jp: 'うん。私（わたし）は 明太子（めんたいこ）の おにぎりと サラダに する。一緒（いっしょ）に レジ 並（なら）ぼう！',
        vn: 'Ừ. Mình lấy một nắm cơm cá tuyết cay mentaiko và một hộp salad. Cùng ra quầy xếp hàng tính tiền nào!',
      },
      {
        speaker: 'A',
        name: '店員',
        role: 'Nhân viên quầy thu ngân',
        jp: 'いらっしゃいませ！ 次（つぎ）の お客様（きゃくさま）、どうぞ！',
        vn: 'Kính chào quý khách! Xin mời quý khách tiếp theo ạ!',
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'お願（ねが）いします。これと これです。',
        vn: 'Làm phiền tính giúp tôi ạ. Món này và món này.',
      },
      {
        speaker: 'A',
        name: '店員',
        role: 'Nhân viên quầy thu ngân',
        jp: 'はい。お弁当（べんとう）、温（あたた）めますか？',
        vn: 'Vâng. Cơm hộp có hâm nóng không ạ?',
        nuances: [
          {
            phrase: '温（あたた）めますか？ (Atatamemasu ka?)',
            meaning: 'Có hâm nóng không ạ?',
            tip: 'Câu hỏi kinh điển số 1 ở mọi quầy thu ngân Konbini. Trả lời: 「はい、お願いします」(Có hâm nóng) hoặc 「大丈夫です」(Không cần).',
          },
        ],
        keywords: [
          { word: '温（あたた）める', hanviet: 'ÔN', meaning: 'Hâm nóng (bằng lò vi sóng)', type: 'Động từ', example: 'お弁当を レンジで 温めます。' },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'はい、温（あたた）めて ください。',
        vn: 'Có ạ, phiền anh hâm nóng giúp tôi.',
      },
      {
        speaker: 'A',
        name: '店員',
        role: 'Nhân viên quầy thu ngân',
        jp: 'かしこまりました。少々（しょうしょう） お待（ま）ち ください。……お箸（はし）は 1膳（いちぜん）で よろしいですか？',
        vn: 'Tôi hiểu rồi ạ, xin quý khách đợi một chút. ...Đũa lấy một đôi là được đúng không ạ?',
        nuances: [
          {
            phrase: '1膳（いちぜん）で よろしいですか？',
            meaning: '1 đôi đũa là được rồi đúng không ạ?',
            tip: 'Đơn vị đếm đũa là 膳 (ぜん). 「よろしいですか」 là thể kính ngữ trang trọng của 「いいですか」.',
          },
        ],
        keywords: [
          { word: '1膳（いちぜん）', hanviet: 'THIỆN', meaning: '1 đôi đũa', type: 'Lượng từ', example: 'お箸を 1膳 ください。' },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'はい、1膳（いちぜん）で 大丈夫（だいじょうぶ）です。',
        vn: 'Vâng, một đôi là được rồi ạ.',
      },
      {
        speaker: 'A',
        name: '店員',
        role: 'Nhân viên quầy thu ngân',
        jp: 'レジ袋（ぶくろ）は ご利用（りよう）ですか？ 有料（ゆうりょう）で 3円（さんえん）に なります。',
        vn: 'Quý khách có dùng túi nilon không ạ? Túi có tính phí 3 yên ạ.',
        nuances: [
          {
            phrase: 'レジ袋（ぶくろ）は ご利用（りよう）ですか？',
            meaning: 'Quý khách có dùng túi nilon không?',
            tip: 'Tại Nhật túi nilon tính phí từ 3-5 yên. Trả lời: 「袋は結構です」(Không cần) hoặc 「1枚お願いします」(Cho tôi 1 túi).',
          },
        ],
        keywords: [
          { word: '有料（ゆうりょう）', hanviet: 'HỮU LIỆU', meaning: 'Có tính phí, phải trả tiền', type: 'Danh từ', example: 'レジ袋は 有料です。' },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'いいえ、袋（ふくろ）は 結構（けっこう）です。マイバッグを 持（も）って います。',
        vn: 'Dạ không cần đâu ạ. Tôi có mang sẵn túi cá nhân rồi.',
        nuances: [
          {
            phrase: '袋（ふくろ）は 結構（けっこう）です',
            meaning: 'Túi thì không cần đâu ạ',
            tip: 'Cách từ chối chuẩn mực, thanh lịch nhất. Tránh dùng 要りません hay 嫌です.',
          },
        ],
        keywords: [
          { word: '結構（けっこう）です', meaning: 'Được rồi, tôi không cần', type: 'Cụm từ chối lịch sự', example: 'レシートは 結構です。' },
          { word: 'マイバッグ', meaning: 'Túi vải cá nhân tự mang theo', type: 'Đồ dùng', example: 'マイバッグを カバンに 入れています。' },
        ],
      },
      {
        speaker: 'A',
        name: '店員',
        role: 'Nhân viên quầy thu ngân',
        jp: 'ありがとうございます。ポイントカードは お持（も）ちですか？',
        vn: 'Cảm ơn quý khách. Quý khách có thẻ tích điểm không ạ?',
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'いいえ、持（も）って いないです。……あ、すみません！',
        vn: 'Không, tôi không có thẻ ạ. ...A, xin lỗi anh!',
      },
      {
        speaker: 'A',
        name: '店員',
        role: 'Nhân viên quầy thu ngân',
        jp: 'はい、何（なに）でしょうか？',
        vn: 'Vâng, quý khách cần gì thêm ạ?',
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'ホットスナックの コーナーから、ななチキを 1つ ください！',
        vn: 'Ở quầy đồ nóng trong tủ kính, cho tôi lấy thêm 1 miếng gà Nana-chiki nữa nhé!',
        nuances: [
          {
            phrase: 'ホットスナック (Hot snack)',
            meaning: 'Đồ ăn nóng trong tủ kính cạnh quầy thu ngân',
            tip: 'Bao gồm gà rán chiên giòn, bánh bao hấp, xúc xích. Khi gọi chỉ cần nói: 「［Tên món］を 1つ ください」.',
          },
        ],
      },
      {
        speaker: 'A',
        name: '店員',
        role: 'Nhân viên quầy thu ngân',
        jp: 'ななチキ 1つですね！ かしこまりました。ただいま お取（と）りします。',
        vn: '1 miếng gà Nana-chiki đúng không ạ! Tôi lấy ngay cho quý khách đây ạ.',
      },
      {
        speaker: 'A',
        name: 'さくら',
        role: 'Bạn cùng lớp',
        jp: '（小声で）ミンくん、あの チキン めっちゃ おいしいよね！ ナイス チョイス！',
        vn: '(Nói nhỏ) Minh ơi, gà chiên ở quầy đó ngon đỉnh luôn á! Chọn chuẩn bài đấy!',
        nuances: [
          {
            phrase: 'ナイス チョイス！ (Nice choice)',
            meaning: 'Chọn chuẩn bài đấy! / Chuẩn không cần chỉnh!',
            tip: 'Khẩu ngữ khen bạn bè khi gọi món hoặc mua đồ hợp lý.',
          },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: '（小声で）うん、前（まえ）に 食（た）べて すごく おいしかったんだ。',
        vn: '(Nói nhỏ) Ừ, bữa trước mình ăn thử thấy ngon xuất sắc luôn.',
      },
      {
        speaker: 'A',
        name: '店員',
        role: 'Nhân viên quầy thu ngân',
        jp: 'お待（ま）たせ いたしました。お弁当（べんとう）も 温（あたた）まりました。',
        vn: 'Xin lỗi đã để quý khách đợi lâu. Cơm hộp cũng đã được hâm nóng xong rồi ạ.',
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'ありがとうございます。',
        vn: 'Cảm ơn anh nhiều.',
      },
      {
        speaker: 'A',
        name: '店員',
        role: 'Nhân viên quầy thu ngân',
        jp: 'お会計（かいけい）は、全部（ぜんぶ）で 980円（きゅうひゃくはちじゅうえん）に なります。',
        vn: 'Tổng số tiền thanh toán của quý khách là 980 yên ạ.',
        keywords: [
          { word: 'お会計（かいけい）', hanviet: 'HỘI KẾ', meaning: 'Tính tiền, thanh toán', type: 'Danh từ', example: 'お会計は レジで 行います。' },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'PayPayで 払（はら）えますか？',
        vn: 'Tôi thanh toán bằng mã ví PayPay được không ạ?',
        nuances: [
          {
            phrase: '〜で 払（はら）えますか？',
            meaning: 'Có thanh toán bằng [phương thức] được không?',
            tip: 'Áp dụng cho mọi phương thức: Suicaで、Pasmoで、クレジットカードで (bằng thẻ tín dụng).',
          },
        ],
      },
      {
        speaker: 'A',
        name: '店員',
        role: 'Nhân viên quầy thu ngân',
        jp: 'はい、ご利用（りよう）いただけます。画面（がめん）の バーコードを リーダーに かざして ください。',
        vn: 'Vâng, được ạ. Xin quý khách giơ mã vạch trên màn hình vào đầu đọc quét mã ạ.',
        nuances: [
          {
            phrase: 'かざして ください',
            meaning: 'Xin hãy giơ lên / quẹt qua mắt đọc',
            tip: 'Động từ chuyên dụng かざす khi quét mã vạch điện thoại hoặc quẹt thẻ từ Suica/Pasmo.',
          },
        ],
        keywords: [
          { word: 'かざす', meaning: 'Giơ lên, đặt lướt qua mắt đọc quét mã', type: 'Động từ', example: 'スマホの画面を リーダーに かざします。' },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: '（ピッ♪）はい、できました。',
        vn: '(Tít♪) Dạ xong rồi ạ.',
      },
      {
        speaker: 'A',
        name: '店員',
        role: 'Nhân viên quầy thu ngân',
        jp: 'ありがとう ございます。レシートの お渡（わた）しです。お弁当（べんとう）、大変（たいへん） 熱（あつ）くなって おりますので お気（き）を つけて お持（も）ち ください。',
        vn: 'Cảm ơn quý khách ạ. Xin gửi lại quý khách hóa đơn. Cơm hộp đang rất nóng nên xin quý khách cẩn thận khi cầm ạ.',
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'はい、どうも ありがとう ございました！',
        vn: 'Vâng, cảm ơn anh nhiều nhé!',
      },
      {
        speaker: 'A',
        name: 'さくら',
        role: 'Bạn cùng lớp',
        jp: '（外に出て）買（か）えたね！ コンビニの 前（まえ）の ベンチで 食（た）べようか。',
        vn: '(Bước ra ngoài) Mua xong xuôi rồi nhé! Ra ghế băng phía trước cửa hàng ngồi ăn luôn nha.',
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'うん、天気（てんき）も いいし、ちょうど いいね。',
        vn: 'Ừ, thời tiết đẹp thế này ngồi ngoài trời là chuẩn nhất.',
      },
      {
        speaker: 'A',
        name: 'さくら',
        role: 'Bạn cùng lớp',
        jp: 'いただきまーす！ ん〜、この おにぎり、やっぱり おいしい！',
        vn: 'Mời cả nhà cùng xơi! Uầy, cơm nắm này ăn lúc nào cũng ngon tuyệt cú mèo!',
        nuances: [
          {
            phrase: 'やっぱり (Yappari)',
            meaning: 'Đúng như dự đoán / quả nhiên là...',
            tip: 'Khẩu ngữ biểu lộ sự khẳng định lại cảm giác thích thú trước đó.',
          },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: '唐揚（からあ）げも できたてで アツアツだよ。安（やす）くて おいしいのは 本当（ほんとう）に 助（たす）かるね。',
        vn: 'Thịt gà rán cũng vừa mới chiên nóng hổi giòn rụm luôn nè. Vừa rẻ vừa ngon đúng là cứu tinh của sinh viên.',
        nuances: [
          {
            phrase: 'アツアツ (Atsuatsu)',
            meaning: 'Nóng hổi, vừa thổi vừa ăn',
            tip: 'Từ tượng hình mô tả món ăn nóng sốt thơm lừng.',
          },
          {
            phrase: '助（たす）かる (Tasukaru)',
            meaning: 'Được cứu nguy / May quá / Đỡ biết bao nhiêu',
            tip: 'Cực kỳ hay dùng khi một điều gì đó mang lại sự tiện lợi, tiết kiệm cho cuộc sống du học.',
          },
        ],
      },
      {
        speaker: 'A',
        name: 'さくら',
        role: 'Bạn cùng lớp',
        jp: 'だよね！ 日本（にほん）の コンビニって、何（なん）でも そろってて 便利（べんり）でしょ？',
        vn: 'Chuẩn luôn! Konbini ở Nhật cái gì cũng có, tiện lợi dã man đúng không?',
        nuances: [
          {
            phrase: 'だよね！ (Da yo ne!)',
            meaning: 'Chuẩn luôn! / Đúng thế còn gì!',
            tip: 'Thán từ đồng cảm mạnh mẽ giữa bạn bè khi người kia nói trúng phóc ý mình.',
          },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: '本当（ほんとう）に そう思（おも）うよ。生活（せいかつ）に なくては ならない 存在（そんざい）だね。',
        vn: 'Mình hoàn toàn công nhận luôn. Đúng là không thể thiếu trong cuộc sống hàng ngày.',
        keywords: [
          { word: 'なくてはならない', meaning: 'Không thể thiếu được', type: 'Cụm thành ngữ', example: '水は 生活に なくてはならない。' },
        ],
      },
      {
        speaker: 'A',
        name: 'さくら',
        role: 'Bạn cùng lớp',
        jp: 'ふふ、また 一緒（いっしょ）に 買（か）い物（もの） 来（こ）ようね！',
        vn: 'Haha, bữa sau lại cùng nhau đi mua đồ ăn nữa nhé!',
      },
    ],
  },
}

// ----------------------------------------------------
// MODULE 03: Siêu Thị, Mua Sắm Du Học & Nhịp Sống Đô Thị
// ----------------------------------------------------
export const MODULE_03: ModuleDetail = {
  id: 'mod-03',
  num: 3,
  code: 'MOD-03',
  titleJp: 'スーパーの 買（か）い物（もの）と 街（まち）の 生活（せいかつ）',
  titleVn: 'Siêu Thị, Mua Sắm Du Học & Nhịp Sống Đô Thị',
  subtitle: 'Săn đồ giảm giá nửa giá (半額 hangaku), mua sắm siêu thị, quầy tự thanh toán, đi tàu điện và hẹn hò cuối tuần.',
  badge: 'MODULE 03 · SIÊU THỊ & MUA SẮM DU HỌC',
  accentColor: 'from-sky-500/20 to-blue-500/10 border-sky-500/40 text-sky-600',
  estimatedHours: '4-6 giờ học',
  stats: { vocab: 31, grammar: 5, kanji: 12, dialogues: 35 },
  vocab: [
    { id: 'v03-01', jp: '最寄（もよ）り駅（えき）', romaji: 'moyorieki', vn: 'Ga gần nhà nhất', category: 'Giao thông' },
    { id: 'v03-02', jp: 'JR中央線（ちゅうおうせん）', romaji: 'chuuousen', vn: 'Tuyến tàu JR Chuo Line (màu cam)', category: 'Giao thông' },
    { id: 'v03-03', jp: '山手線（やまのてせん）', romaji: 'yamanotesen', vn: 'Tuyến tàu vòng tròn Yamanote (màu xanh lá)', category: 'Giao thông' },
    { id: 'v03-04', jp: '乗（の）り換（か）える', romaji: 'norikaeru', vn: 'Đổi tàu, chuyển tuyến', category: 'Hành động' },
    { id: 'v03-05', jp: '通学（つうがく）定期券（ていきけん）', romaji: 'tsuugaku teikiken', vn: 'Vé tháng sinh viên đi học', category: 'Giao thông' },
    { id: 'v03-06', jp: '学生（がくせい）割引（わりびき）', romaji: 'gakusei waribiki', vn: 'Giảm giá dành cho học sinh, sinh viên (Gakuwari)', category: 'Mua bán' },
    { id: 'v03-07', jp: 'スーパー', romaji: 'suupaa', vn: 'Siêu thị thực phẩm', category: 'Mua bán' },
    { id: 'v03-08', jp: '半額（はんがく）シール', romaji: 'hangaku shiiru', vn: 'Tem giảm giá 50% (nửa giá)', category: 'Mua bán' },
    { id: 'v03-09', jp: 'セルフレジ', romaji: 'serufureji', vn: 'Quầy tự quét mã vạch và thanh toán', category: 'Cửa hàng' },
    { id: 'v03-10', jp: 'お惣菜（そうざい）', romaji: 'osouzai', vn: 'Đồ ăn chế biến sẵn trong ngày', category: 'Ăn uống' },
    { id: 'v03-11', jp: '秋葉原（あきはばら）', romaji: 'akihabara', vn: 'Phố điện tử & anime Akihabara nổi tiếng', category: 'Địa danh' },
    { id: 'v03-12', jp: 'ヘッドホン', romaji: 'heddohon', vn: 'Tai nghe chụp tai', category: 'Đồ dùng' },
    { id: 'v03-13', jp: 'アニメグッズ', romaji: 'anime guzzu', vn: 'Đồ lưu niệm, phụ kiện anime', category: 'Sở thích' },
    { id: 'v03-14', jp: 'ラーメン屋（や）', romaji: 'raamenya', vn: 'Quán mì Ramen', category: 'Địa điểm' },
    { id: 'v03-15', jp: 'しょっけん', romaji: 'shokken', vn: 'Phiếu ăn (vé mua từ máy tự động)', category: 'Ăn uống' },
    { id: 'v03-16', jp: 'きっぷの きかい', romaji: 'kippu no kikai', vn: 'Máy bán vé tự động', category: 'Cửa hàng' },
    { id: 'v03-17', jp: '大盛（おおも）り 無料（むりょう）', romaji: 'oomori muryou', vn: 'Nâng lên bát to miễn phí', category: 'Ăn uống' },
    { id: 'v03-18', jp: '電気街口（でんきがいぐち）', romaji: 'denkigaiguchi', vn: 'Cửa ra Phố Điện Tử (ở ga Akihabara)', category: 'Địa danh' },
    { id: 'v03-19', jp: 'かいさつ口', romaji: 'kaisatsuguchi', vn: 'Cửa soát vé ga tàu', category: 'Giao thông' },
    { id: 'v03-20', jp: '待（ま）ち合（あ）わせ', romaji: 'machiawase', vn: 'Hẹn gặp nhau ở địa điểm', category: 'Giao tiếp' },
    { id: 'v03-21', jp: 'ホーム', romaji: 'hoomu', vn: 'Sân ga chờ tàu (Platform)', category: 'Giao thông' },
    { id: 'v03-22', jp: '案内板（あんないばん）', romaji: 'annaiban', vn: 'Bảng thông tin chỉ dẫn ở ga', category: 'Giao thông' },
    { id: 'v03-23', jp: '遅（おく）れる', romaji: 'okureru', vn: 'Đến muộn, trễ giờ', category: 'Hành động' },
    { id: 'v03-24', jp: '道（みち）に 迷（まよ）う', romaji: 'michi ni mayou', vn: 'Lạc đường', category: 'Hành động' },
    { id: 'v03-25', jp: '了解（りょうかい）！', romaji: 'ryoukai', vn: 'Rõ rồi! / OK nhận lệnh!', category: 'Khẩu ngữ' },
    { id: 'v03-26', jp: 'バッチリ！', romaji: 'bacchiri', vn: 'Chuẩn bài! Hoàn hảo!', category: 'Khẩu ngữ' },
    { id: 'v03-27', jp: '値引（ねび）き', romaji: 'nebiki', vn: 'Giảm giá, bớt tiền', category: 'Mua bán' },
    { id: 'v03-28', jp: '賞味期限（しょうみきげん）', romaji: 'shoumikigen', vn: 'Hạn sử dụng tốt nhất (chất lượng ngon nhất)', category: 'Cửa hàng' },
    { id: 'v03-29', jp: '両立（りょうりつ）する', romaji: 'ryouritsu suru', vn: 'Cân bằng cả hai việc (vừa học vừa làm)', category: 'Đời sống' },
    { id: 'v03-30', jp: '前向（まえむ）きな', romaji: 'maemuki na', vn: 'Tích cực, lạc quan', category: 'Tính từ' },
    { id: 'v03-31', jp: '週末（しゅうまつ）', romaji: 'shuumatsu', vn: 'Cuối tuần (thứ Bảy, Chủ nhật)', category: 'Thời gian' }
  ],
  grammar: [
    {
      id: 'g03-01',
      title: 'Lộ Trình & Thời Gian Di Chuyển: 〜から 〜まで ［Phương tiện］で ［Thời gian］かかる',
      formula: '［Nơi đi］から ［Nơi đến］まで ［Phương tiện］で ［Thời gian］ かかります。',
      meaning: 'Từ đâu đến đâu bằng phương tiện gì mất bao lâu.',
      usageNote: 'Dùng trợ từ 「から」 (từ), 「まで」 (đến), 「で」 (bằng phương tiện gì). Động từ かかる dùng cho thời gian hoặc tiền bạc.',
      spokenTip: '「家から学校まで中央線で30分くらいかな」 (Từ nhà đến trường đi tuyến Chuo chắc tầm 30 phút).',
      examples: [
        { jp: '家（いえ）から 駅（えき）まで 歩（ある）いて 10分（じゅっぷん） かかります。', vn: 'Từ nhà đến ga đi bộ mất 10 phút.' },
        { jp: '新宿（しんじゅく）から 秋葉原（あきはばら）まで 電車（でんしゃ）で 15分（じゅうごふん）です。', vn: 'Từ Shinjuku đến Akihabara đi tàu điện mất 15 phút.' }
      ]
    },
    {
      id: 'g03-02',
      title: 'Hỏi & Hẹn Giờ Giấc Chính Xác: 〜時に／〜ちょっと前に 会いましょう',
      formula: '［Thời gian］に ［Địa điểm］の 前で 会いましょう。',
      meaning: 'Hãy gặp nhau lúc [giờ] ở trước [địa điểm].',
      usageNote: 'Người Nhật luôn đúng giờ: Hẹn 10 giờ nghĩa là nên đến trước 5-10 phút (「10時ちょっと前」).',
      spokenTip: '「10時ちょっと前に改札前ね！」 (Trước 10 giờ một tẹo ở trước cửa soát vé nhé!)',
      examples: [
        { jp: '日曜（にちよう）の 午前（ごぜん） 10時（じゅうじ）に 会（あ）いましょう。', vn: 'Gặp nhau lúc 10 giờ sáng Chủ nhật nhé.' },
        { jp: '駅（えき）の 改札（かいさつ）前（まえ）で 待（ま）ち合（あ）わせしましょう。', vn: 'Hẹn gặp nhau ở trước cửa soát vé nhà ga nhé.' }
      ]
    },
    {
      id: 'g03-03',
      title: 'Nói Về Tần Suất & Thói Quen: ［Khoảng thời gian］に ［Số lần］',
      formula: '週（しゅう）に ［Số lần］回 ／ 1日（いちにち）に ［Số giờ］時間',
      meaning: 'Một tuần mấy lần / Một ngày mấy tiếng.',
      usageNote: 'Dùng trợ từ 「に」 đi sau khoảng thời gian để chỉ tần suất: 週に3回 (1 tuần 3 buổi), 1か月に1回 (1 tháng 1 lần).',
      spokenTip: '「週に3日、居酒屋でバイトしてるよ」 (Tuần 3 buổi mình làm ở quán nhậu).',
      examples: [
        { jp: '週（しゅう）に 3日（みっか）、夕方（ゆうがた）から 働（はたら）いています。', vn: 'Một tuần tôi đi làm thêm 3 buổi từ chiều tối.' },
        { jp: '毎日（まいにち） 6時間（ろくじかん） 日本語（にほんご）を 勉強（べんきょう）します。', vn: 'Mỗi ngày tôi học tiếng Nhật 6 tiếng.' }
      ]
    },
    {
      id: 'g03-04',
      title: 'Đổi Tàu & Chuyển Tuyến: 〜に 乗り換（か）える',
      formula: '［Tuyến tàu/Ga］で ［Tuyến tàu mới］に 乗（の）り換（か）えます。',
      meaning: 'Chuyển sang tuyến tàu khác tại ga...',
      usageNote: 'Tuyến tàu mới được đánh dấu bằng trợ từ 「に」, ga chuyển tàu đánh dấu bằng trợ từ 「で」.',
      spokenTip: '「新宿で山手線に乗り換えてね！」 (Đến Shinjuku nhớ đổi sang tuyến Yamanote nhé!).',
      examples: [
        { jp: '中央線（ちゅうおうせん）から 山手線（やまのてせん）に 乗（の）り換（か）えます。', vn: 'Đổi từ tuyến Chuo sang tuyến Yamanote.' },
        { jp: 'どこで 乗（の）り換（か）えれば いいですか。', vn: 'Tôi nên đổi tàu ở đâu thì được ạ?' }
      ]
    },
    {
      id: 'g03-05',
      title: 'Xử Lý Tình Huống Giả Định: もし 〜たら、LINEしてね',
      formula: 'もし ［V-たら／Điều kiện］、［Hành động］。',
      meaning: 'Nếu lỡ như [tình huống] thì hãy [làm gì] nhé.',
      usageNote: 'Văn nói bạn bè rất hay dùng 「もし〜たら、LINEして」 để dặn dò trước khi đi chơi.',
      spokenTip: '「遅れたり道に迷ったりしたらすぐ連絡してね！」 (Nếu trễ hay lạc thì nhắn ngay nhé!)',
      examples: [
        { jp: '電車（でんしゃ）が 遅（おく）れたら、すぐ 連絡（れんらく）します。', vn: 'Nếu tàu trễ, tôi sẽ lập tức liên lạc.' },
        { jp: '分（わ）からなかったら、聞（き）いて ください。', vn: 'Nếu không hiểu thì hãy hỏi nhé.' }
      ]
    }
  ],
  kanji: [
    { char: '時', hanviet: 'THỜI', strokes: 10, onkun: 'ジ · とき', meaning: 'Thời gian, giờ', compounds: [{ jp: '時間（じかん）', vn: 'Thời gian, tiếng' }, { jp: '10時（じゅうじ）', vn: '10 giờ' }, { jp: '時計（とけい）', vn: 'Đồng hồ' }] },
    { char: '分', hanviet: 'PHÂN', strokes: 4, onkun: 'フン, ブン · わ-かる', meaning: 'Phút', compounds: [{ jp: '30分（さんじゅっぷん）', vn: '30 phút' }, { jp: '半分（はんぶん）', vn: 'Một nửa' }] },
    { char: '半', hanviet: 'BÁN', strokes: 5, onkun: 'ハン · なか-ば', meaning: 'Rưỡi, một nửa', compounds: [{ jp: '6時半（ろくじはん）', vn: '6 giờ rưỡi' }, { jp: '半額（はんがく）', vn: 'Nửa giá (50%)' }] },
    { char: '毎', hanviet: 'MỖI', strokes: 6, onkun: 'マイ', meaning: 'Mỗi, hàng (ngày/tháng)', compounds: [{ jp: '毎朝（まいあさ）', vn: 'Mỗi sáng' }, { jp: '毎日（まいにち）', vn: 'Mỗi ngày' }, { jp: '毎週（まいしゅう）', vn: 'Mỗi tuần' }] },
    { char: '日', hanviet: 'NHẬT', strokes: 4, onkun: 'ニチ, ジツ · ひ, か', meaning: 'Ngày, mặt trời, Nhật Bản', compounds: [{ jp: '日曜日（にちようび）', vn: 'Chủ nhật' }, { jp: '休日（きゅうじつ）', vn: 'Ngày nghỉ' }] },
    { char: '行', hanviet: 'HÀNH', strokes: 6, onkun: 'コウ, ギョウ · い-く, おこな-う', meaning: 'Đi, tiến hành', compounds: [{ jp: '行（い）く', vn: 'Đi' }, { jp: '旅行（りょこう）', vn: 'Du lịch' }, { jp: '行動（こうどう）', vn: 'Hành động' }] },
    { char: '来', hanviet: 'LAI', strokes: 7, onkun: 'ライ · く-る, きた-る', meaning: 'Đến, tới', compounds: [{ jp: '来（く）る', vn: 'Đến' }, { jp: '来週（らいしゅう）', vn: 'Tuần sau' }, { jp: '来年（らいねん）', vn: 'Năm sau' }] },
    { char: '帰', hanviet: 'QUY', strokes: 10, onkun: 'キ · かえ-る', meaning: 'Về (nhà/nước)', compounds: [{ jp: '帰（かえ）る', vn: 'Về nhà' }, { jp: '帰国（きこく）', vn: 'Về nước' }] },
    { char: '車', hanviet: 'XA', strokes: 7, onkun: 'シャ · くるま', meaning: 'Xe cộ', compounds: [{ jp: '電車（でんしゃ）', vn: 'Tàu điện' }, { jp: '車（くるま）', vn: 'Ô tô' }, { jp: '自転車（じてんしゃ）', vn: 'Xe đạp' }] },
    { char: '電', hanviet: 'ĐIỆN', strokes: 13, onkun: 'デン', meaning: 'Điện khí', compounds: [{ jp: '電話（でんわ）', vn: 'Điện thoại' }, { jp: '電気（でんき）', vn: 'Điện, đèn điện' }] },
    { char: '駅', hanviet: 'DỊCH', strokes: 14, onkun: 'エキ', meaning: 'Nhà ga', compounds: [{ jp: '駅前（えきまえ）', vn: 'Trước ga' }, { jp: '駅員（えきいん）', vn: 'Nhân viên nhà ga' }] },
    { char: '週', hanviet: 'CHU', strokes: 11, onkun: 'シュウ', meaning: 'Tuần lễ', compounds: [{ jp: '週末（しゅうまつ）', vn: 'Cuối tuần' }, { jp: '今週（こんしゅう）', vn: 'Tuần này' }, { jp: '週（しゅう）に3回（さんかい）', vn: 'Tuần 3 lần' }] }
  ],
  listening: [
    {
      id: 'l03-01',
      questionJp: 'A: 「家（いえ）から 学校（がっこう）までは どうやって 来（く）るの？」 — B trả lời phương tiện:',
      questionVn: 'A hỏi bạn đến trường bằng cách nào:',
      audioText: 'いえからがっこうまではどうやってくるの？',
      context: 'Hỏi han phương tiện đi lại',
      options: [
        { jp: '最寄（もよ）り駅（えき）から 電車（でんしゃ）で 来（く）るよ。30分（さんじゅっぷん）くらい。', vn: 'Đi tàu điện từ ga gần nhà, mất chừng 30 phút.', isCorrect: true },
        { jp: 'はい、学校（がっこう）が 大好（だいす）きです。', vn: 'Vâng, tôi rất thích trường.', isCorrect: false },
        { jp: '定期券（ていきけん）は 嫌（きら）いです。', vn: 'Tôi ghét vé tháng.', isCorrect: false }
      ],
      explanation: 'Hỏi 「どうやって来るの？」 là hỏi phương thức đi lại: trả lời bằng phương tiện + で + thời gian + かかる.'
    },
    {
      id: 'l03-02',
      questionJp: 'Hẹn giờ gặp: 「10時（じゅうじ）ちょっと 前（まえ）に 改札（かいさつ）口（ぐち）で 会（あ）おう！」',
      questionVn: 'Bạn nên có mặt ở ga lúc mấy giờ?',
      audioText: 'じゅうじちょっとまえにかいさつぐちであおう！',
      context: 'Hẹn đi chơi cuối tuần',
      options: [
        { jp: 'Khoảng 9:50 đến 9:55 sáng (trước 10 giờ một ít).', vn: 'Trước 10 giờ một chút.', isCorrect: true },
        { jp: 'Đúng 10:30 sáng.', vn: '10:30 sáng.', isCorrect: false },
        { jp: 'Sau 11:00 trưa.', vn: 'Sau 11 giờ.', isCorrect: false }
      ],
      explanation: '「10時ちょっと前」 nghĩa là tầm 5–10 phút trước 10:00.'
    }
  ],
  quiz: [
    {
      id: 'q03-01',
      stem: 'Vé tháng giảm giá dành cho học sinh, sinh viên trong tiếng Nhật gọi là gì?',
      options: ['通学（つうがく）定期券（ていきけん）', 'ホットスナック', '食券（しょっけん）', '案内板（あんないばん）'],
      correct: 0,
      explain: '通学定期券 (vé tháng đi học) có mức giá ưu đãi lớn (gakuwari) so với vé thường.'
    },
    {
      id: 'q03-02',
      stem: 'Khi vào quán mì Ramen có máy bán vé tự động, hành động đầu tiên cần làm là gì?',
      options: ['Mua vé ăn tại máy bán vé (券売機で食券を買う)', 'Gọi nhân viên xin thực đơn', 'Tự vào bếp nấu mì', 'Rửa bát đĩa'],
      correct: 0,
      explain: 'Hầu hết các quán ramen truyền thống ở Nhật đều yêu cầu khách bấm mua 食券 tại 券売機 trước khi vào ghế ngồi.'
    },
    {
      id: 'q03-03',
      stem: 'Điền trợ từ: 中央線（ちゅうおうせん）（　）乗（の）って、新宿（しんじゅく）（　）降（お）ります。',
      options: ['に ／ で', 'を ／ に', 'で ／ を', 'が ／ へ'],
      correct: 0,
      explain: 'Lên phương tiện đi với trợ từ 「に」: 電車に乗る. Xuống tại địa điểm đi với trợ từ 「で」: 新宿で降りる.'
    }
  ],
  dialogue: {
    title: 'Siêu Thị Săn Hàng Nửa Giá (半額) & Hẹn Hò Cuối Tuần',
    scene: 'Tan học, bạn cùng Linh chia sẻ bí kíp săn đồ giảm giá nửa giá ở siêu thị thực phẩm, đi lại bằng tàu điện và lên kế hoạch đi Akihabara cuối tuần.',
    roles: { A: 'リン (Linh · Bạn cùng lớp)', B: 'Bạn (ミン · Du học sinh)' },
    lines: [
      {
        speaker: 'A',
        name: 'リン',
        role: 'Bạn cùng lớp',
        jp: 'ミンくん、お疲（つか）れ様（さま）！ 今日（きょう）は これから どこか 行（い）くの？',
        politeJp: 'ミンさん、お疲れ様です！ 今日はこれからどちらかへ行かれますか？',
        vn: 'Minh ơi, vất vả rồi nhé! Hôm nay tan học cậu có đi đâu nữa không?',
        nuances: [
          {
            phrase: 'お疲（つか）れ様（さま）！',
            meaning: 'Vất vả rồi nhé! / Tan học vui vẻ nha!',
            tip: 'Lời chào cửa miệng không thể thiếu sau mỗi buổi học hoặc ca làm thêm tại Nhật.',
          },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'リンさん、お疲（つか）れ様（さま）！ 今日（きょう）は アパートの 近（ちか）くの スーパーに 寄（よ）って、食材（しょくざい）を 買（か）うよ。',
        politeJp: 'リンさん、お疲れ様です！ 今日はアパートの近くのスーパーに寄って、食材を買います。',
        vn: 'Chào Linh, vất vả rồi! Hôm nay mình ghé siêu thị gần phòng trọ mua nguyên liệu nấu ăn.',
        keywords: [
          { word: 'スーパー', meaning: 'Siêu thị thực phẩm', type: 'Danh từ', example: 'スーパーで 野菜を 買います。' },
          { word: '食材（しょくざい）', hanviet: 'THỰC TÀI', meaning: 'Nguyên liệu thực phẩm nấu ăn', type: 'Danh từ', example: '新鮮な 食材を 選びます。' },
        ],
      },
      {
        speaker: 'A',
        name: 'リン',
        role: 'Bạn cùng lớp',
        jp: 'いいね！ 夜（よる） 7時（しちじ）過（す）ぎなら、ちょうど お惣菜（そうざい）やお肉（にく）に 半額（はんがく）シールが 貼（は）られる 時間（じかん）じゃん！',
        politeJp: 'いいですね！ 夜7時過ぎでしたら、ちょうどお惣菜やお肉に半額シールが貼られる時間ですね！',
        vn: 'Hay đấy! Sau 7 giờ tối là đúng khung giờ người ta dán tem giảm giá nửa giá cho đồ ăn với thịt cá còn gì!',
        nuances: [
          {
            phrase: '半額（はんがく）シール (Hangaku shiiru)',
            meaning: 'Tem dán giảm giá một nửa (50%)',
            tip: 'Bí kíp sinh tồn số 1 của du học sinh Nhật. Thường dán từ 19:00 - 20:30 tối mỗi ngày.',
          },
          {
            phrase: '〜じゃん',
            meaning: '... còn gì nữa! / ... chẳng phải sao!',
            tip: 'Đuôi câu khẩu ngữ khẳng định thân mật.',
          },
        ],
        keywords: [
          { word: '半額（はんがく）', hanviet: 'BÁN NGẠCH', meaning: 'Nửa giá, giảm 50%', type: 'Danh từ', example: '半額の お弁当を 買いました。' },
          { word: 'お惣菜（そうざい）', hanviet: 'TỔNG THÁI', meaning: 'Đồ ăn chế biến sẵn trong ngày', type: 'Danh từ', example: 'スーパーの お惣菜は 美味しいです。' },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'そうなんだよ！ 半額（はんがく）は 本当（ほんとう）に 助（たす）かるよ。セルフレジも 慣（な）れて、バーコードを スキャンするのも 楽（たの）しいよ。',
        politeJp: 'そうなんですよ！ 半額は本当に助かります。セルフレジも慣れて、スキャンするのも楽しいです。',
        vn: 'Chuẩn luôn! Săn được đồ nửa giá tiết kiệm được bao nhiêu tiền ăn. Quầy tự thanh toán giờ mình cũng quen tay rồi, tự quét mã vạch vui ghê.',
        nuances: [
          {
            phrase: 'セルフレジ (Self-regi)',
            meaning: 'Quầy tự thanh toán',
            tip: 'Hầu hết các siêu thị lớn ở Nhật (Aeon, Life, Seiyu) đều có quầy khách tự scan và thanh toán thẻ/tiền mặt.',
          },
        ],
        keywords: [
          { word: 'セルフレジ', meaning: 'Quầy tự tính tiền', type: 'Cửa hàng', example: 'セルフレジで 支払います。' },
        ],
      },
      {
        speaker: 'A',
        name: 'リン',
        role: 'Bạn cùng lớp',
        jp: 'さすが ミンくん！ 自炊（じすい）してて えらいね。家（いえ）から 学校（がっこう）までは どうやって 来（く）てるんだっけ？',
        vn: 'Đúng là Minh có khác! Tự nấu ăn chăm chỉ thật đấy. Mà từ nhà đến trường cậu đi bằng phương tiện gì ấy nhỉ?',
        keywords: [
          { word: '自炊（じすい）', hanviet: 'TỰ XUY', meaning: 'Tự nấu ăn tại nhà', type: 'Danh từ / Động từ nhóm 3', example: '毎日 自炊しています。' },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: '最寄（もよ）り駅（えき）から 電車（でんしゃ）で 来（く）るよ。JRの 中央線（ちゅうおうせん）に 乗（の）って、だいたい 30分（さんじゅっぷん）くらい かかるかな。',
        vn: 'Mình đi bằng tàu điện từ ga gần nhà. Bắt tuyến JR Chuo Line, mất khoảng chừng 30 phút gì đấy.',
        keywords: [
          { word: '最寄（もよ）り駅（えき）', hanviet: 'TỐI KÝ DỊCH', meaning: 'Ga gần nhà nhất', type: 'Giao thông', example: '最寄り駅まで 徒歩5分です。' },
        ],
      },
      {
        speaker: 'A',
        name: 'リン',
        role: 'Bạn cùng lớp',
        jp: '30分（さんじゅっぷん）なら 結構（けっこう） 近（ちか）くて いいね！ 定期券（ていきけん）は 買（か）ってるの？',
        vn: '30 phút thì khá gần và tiện đấy nhỉ! Cậu có mua vé tháng (teikiken) không?',
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'うん、通学（つうがく）定期（ていき）を 買（か）ったよ。学生（がくせい）割引（わりびき）が あるから、すごく 安（やす）く なったよ。',
        vn: 'Có chứ, mình mua vé tháng học sinh sinh viên. Vì có giảm giá sinh viên nên rẻ đi được bao nhiêu luôn.',
        keywords: [
          { word: '定期券（ていきけん）', hanviet: 'ĐỊNH KỲ KHOÁN', meaning: 'Vé tháng tàu điện/xe buýt', type: 'Giao thông', example: '6か月定期を 買います。' },
          { word: '学生割引（がくせいわりびき）', hanviet: 'HỌC SINH CÁT DẪN', meaning: 'Giảm giá cho học sinh/sinh viên (Gakuwari)', type: 'Mua bán', example: '学割が 使えます。' },
        ],
      },
      {
        speaker: 'A',
        name: 'リン',
        role: 'Bạn cùng lớp',
        jp: 'よかったね！ リンさんは 週末（しゅうまつ） 何（なに）か 予定（よてい） ある？',
        vn: 'Tốt quá rồi! Linh ơi, cuối tuần này cậu có kế hoạch gì chưa?',
      },
      {
        speaker: 'A',
        name: 'リン',
        role: 'Bạn cùng lớp',
        jp: '今週（こんしゅう）の 日曜日（にちようび）は まだ 何（なに）も 予定（よてい） ないよ。暇（ひま）だよ！',
        vn: 'Chủ nhật tuần này mình chưa có kế hoạch gì hết. Đang rảnh rỗi nè!',
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'じゃ、一緒（いっしょ）に 秋葉原（あきはばら）に 行（い）かない？ 新（あたら）しい ヘッドホンを 見（み）たいんだ。',
        politeJp: 'では、一緒に秋葉原に行きませんか？ 新しいヘッドホンを見たいんです。',
        vn: 'Thế thì cùng đi Akihabara không? Mình đang muốn tìm xem một cái tai nghe mới.',
        nuances: [
          {
            phrase: '〜行（い）かない？',
            meaning: 'Cùng đi ~ không?',
            tip: 'Cách rủ rê bạn bè thân mật. Thể lịch sự là 〜行きませんか.',
          },
        ],
      },
      {
        speaker: 'A',
        name: 'リン',
        role: 'Bạn cùng lớp',
        jp: 'あ、いいね！ 私（わたし）も アニメグッズの お店（みせ）に 行（い）きたかったんだ！',
        vn: 'A, duyệt luôn! Mình cũng đang muốn ghé mấy cửa hàng bán đồ anime ở đó!',
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'じゃ、秋葉原（あきはばら）で 有名（ゆうめい）な ラーメン屋（や）も あるから、お昼（ひる）ご飯（はん）は そこで 食（た）べよう！',
        vn: 'Vậy ở Akiba có quán mì ramen nổi tiếng lắm, trưa tụi mình ghé đó ăn luôn nhé!',
      },
      {
        speaker: 'A',
        name: 'リン',
        role: 'Bạn cùng lớp',
        jp: '賛成（さんせい）！ 何時（なんじ）に どこで 待（ま）ち合（あ）わせする？',
        vn: 'Nhất trí 100%! Mấy giờ gặp và hẹn ở đâu được nhỉ?',
        keywords: [
          { word: '待ち合わせ（まちあわせ）', hanviet: 'ĐÃI HỢP', meaning: 'Hẹn gặp nhau tại địa điểm', type: 'Danh từ', example: 'ハチ公前で 待ち合わせします。' },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: '日曜日（にちようび）の 午前（ごぜん） 10時（じゅうじ）に、秋葉原（あきはばら）駅（えき）の 電気街口（でんきがいぐち）の 改札（かいさつ）前（まえ）は どう？',
        vn: '10 giờ sáng Chủ nhật, ở ngay trước cửa soát vé cổng Điện Tử (Denki-gai-guchi) ga Akihabara được không?',
      },
      {
        speaker: 'A',
        name: 'リン',
        role: 'Bạn cùng lớp',
        jp: 'バッチリ！ 分（わ）かりやすいね。10時（じゅうじ）ちょっと 前（まえ）に 行（い）くね。あ、電車（でんしゃ）は 何線（なにせん）で 来（く）るの？',
        vn: 'Chuẩn bài! Chỗ đó dễ tìm ghê. Mình sẽ đến trước 10 giờ một tẹo nhé. À, cậu đi bằng tuyến tàu nào tới?',
        nuances: [
          {
            phrase: 'バッチリ！ (Bacchiri!)',
            meaning: 'Chuẩn bài! / Hoàn hảo không tì vết!',
            tip: 'Khẩu ngữ khen sự sắp xếp, kế hoạch chuẩn xác.',
          },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: '中央線（ちゅうおうせん）で 新宿（しんじゅく）まで 行（い）って、山手線（やまのてせん）に 乗（の）り換（か）えるよ。',
        vn: 'Mình đi tuyến Chuo đến ga Shinjuku rồi đổi sang tuyến vòng tròn Yamanote.',
        keywords: [
          { word: '乗り換える（のりかえる）', hanviet: 'THỪA HOÁN', meaning: 'Chuyển tuyến, đổi tàu', type: 'Động từ', example: '地下鉄に 乗り換えます。' },
        ],
      },
      {
        speaker: 'A',
        name: 'リン',
        role: 'Bạn cùng lớp',
        jp: '新宿（しんじゅく）駅（えき）は 人（ひと）が 多（おお）いし 迷（まよ）いやすいから、気（き）を つけてね！ ホームの 案内板（あんないばん）を よく 見（み）てね。',
        vn: 'Ga Shinjuku đông người với dễ lạc lắm đấy, cẩn thận nhé! Nhớ nhìn kỹ bảng chỉ dẫn ở sân ga.',
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'うん、ありがとう。あ、お昼（ひる）の ラーメンなんだけど、食券（しょっけん）を 先（さき）に 買（か）う お店（みせ）だよ。',
        vn: 'Ừ, cảm ơn cậu. À, quán mì ramen trưa là kiểu mua vé ăn tự động trước đấy.',
        keywords: [
          { word: '食券（しょっけん）', hanviet: 'THỰC KHOÁN', meaning: 'Phiếu ăn (vé mua từ máy)', type: 'Cửa hàng', example: '券売機で 食券を 買います。' },
        ],
      },
      {
        speaker: 'A',
        name: 'リン',
        role: 'Bạn cùng lớp',
        jp: '券売機（けんばいき）で 買（か）うんだね。いくらぐらい？',
        vn: 'Mua ở máy bán vé tự động nhỉ. Khoảng bao nhiêu tiền một bát?',
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: '一番（いちばん） 人気（にんき）の 醤油（しょうゆ）ラーメンは 850円（はっぴゃくごじゅうえん）だよ。大盛（おおも）りも 無料（むりょう）だよ！',
        vn: 'Bát mì ramen nước tương shoyu đắt khách nhất giá 850 yên. Còn được nâng lên bát to miễn phí nữa cơ!',
      },
      {
        speaker: 'A',
        name: 'リン',
        role: 'Bạn cùng lớp',
        jp: '最高（さいこう）じゃん！ めっちゃ 楽（たの）しみ！',
        vn: 'Đỉnh chóp luôn! Nghe là thấy thèm và mong đến Chủ nhật rồi đấy!',
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'うん。もし 電車（でんしゃ）が 遅（おく）れたり 道（みち）に 迷（まよ）ったり したら、すぐ LINE してね。',
        vn: 'Ừ. Nếu lỡ tàu bị trễ hay lạc đường thì nhắn tin LINE cho mình ngay nhé.',
      },
      {
        speaker: 'A',
        name: 'リン',
        role: 'Bạn cùng lớp',
        jp: 'そういえば、スーパーの 調味料（ちょうみりょう）コーナーで 何（なに）か おすすめの 醤油（しょうゆ）って ある？',
        vn: 'Nhắc mới nhớ, ở quầy gia vị siêu thị có loại xì dầu nào ngon recommend không?',
        keywords: [
          { word: '調味料（ちょうみりょう）', hanviet: 'ĐIỀU VỊ LIỆU', meaning: 'Gia vị nấu ăn', type: 'Danh từ', example: '日本の 調味料を 揃えます。' },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'キッコーマンの 丸大豆（まるでいず）醤油（しょうゆ）が おすすめだよ！ 煮物（にもの）にも 刺身（さしみ）にも 合（あ）うんだ。',
        vn: 'Loại xì dầu Marudaizu của Kikkoman ngon lắm! Nấu món kho hay chấm sashimi đều hợp.',
      },
      {
        speaker: 'A',
        name: 'リン',
        role: 'Bạn cùng lớp',
        jp: 'メモした！ 今度（こんど） 買（か）ってみるね。買い物（かいもの）上手（じょうず）で 頼（たの）もしいな。',
        vn: 'Ghi lại rồi nhé! Bữa tới mình sẽ mua thử. Đi chợ tháo vát thế này đáng tin cậy ghê.',
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'ふふ、留学生（りゅうがくせい）の 生活（せいかつ）の 知恵（ちえ）だよ。自炊（じすい）すると 節約（せつやく）できるしね。',
        vn: 'Haha, mẹo sinh tồn của du học sinh tụi mình mà. Tự nấu ăn tiết kiệm được bao nhiêu.',
        keywords: [
          { word: '節約（せつやく）', hanviet: 'TIẾT ƯỚC', meaning: 'Tiết kiệm (chi tiêu, tiền bạc)', type: 'Danh từ / Động từ nhóm 3', example: '生活費を 節約します。' },
        ],
      },
      {
        speaker: 'A',
        name: 'リン',
        role: 'Bạn cùng lớp',
        jp: '本当（ほんとう）に その通（とお）りだね！ 私（わたし）も 見習（みなら）わなきゃ。',
        vn: 'Hoàn toàn chuẩn xác! Mình cũng phải học tập Minh mới được.',
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'いつでも 教（おし）えるよ！ じゃ、日曜日（にちようび）は 遅刻（ちこく）しないように 気（き）を つけようね。',
        vn: 'Bất cứ lúc nào mình cũng sẵn sàng chia sẻ! Vậy Chủ nhật nhớ đừng để bị trễ giờ nha.',
        keywords: [
          { word: '遅刻（ちこく）', hanviet: 'TRÌ KHẮC', meaning: 'Đến muộn, trễ giờ', type: 'Danh từ / Động từ nhóm 3', example: '授業に 遅刻しては いけません。' },
        ],
      },
      {
        speaker: 'A',
        name: 'リン',
        role: 'Bạn cùng lớp',
        jp: '了解（りょうかい）！ じゃ、日曜日（にちようび） 楽（たの）しみにしてるね。また 明日（あした） 学校（がっこう）で！',
        vn: 'Rõ rồi! Vậy Chủ nhật gặp nhé. Hẹn mai gặp lại ở trường!',
        nuances: [
          {
            phrase: '了解（りょうかい）！ (Ryoukai!)',
            meaning: 'Rõ rồi! / OK nhận lệnh!',
            tip: 'Khẩu ngữ tiếp nhận thông báo cực kỳ phổ biến trong tin nhắn LINE và đời thường.',
          },
        ],
      },
      {
        speaker: 'B',
        name: 'あなた',
        role: 'Du học sinh',
        jp: 'うん、また 明日（あした）ね！ 今日（きょう）は 暖（あたた）かくして ゆっくり 休（やす）んでね。おやすみ！',
        vn: 'Ừ, mai gặp nhé! Hôm nay giữ ấm và nghỉ ngơi cho khỏe nha. Ngủ ngon!',
      },
      {
        speaker: 'A',
        name: 'リン',
        role: 'Bạn cùng lớp',
        jp: 'おやすみー！',
        vn: 'Ngủ ngon nha!',
      },
    ],
  },
}

// ----------------------------------------------------
// MODULE 04: Nhà Trọ, Phòng Ốc & Sinh Hoạt Tự Lập
// ----------------------------------------------------
export const MODULE_04: ModuleDetail = {
  id: 'mod-04',
  num: 4,
  code: 'MOD-04',
  titleJp: 'アパートの 暮（く）らしと 助（たす）け合（あ）い',
  titleVn: 'Nhà Trọ, Phòng Ốc & Sinh Hoạt Tự Lập',
  subtitle: 'Thuê phòng trọ, mượn dụng cụ, quà chào hỏi, cài đặt Wi-Fi, quy tắc phân loại rác và bí quyết tiết kiệm.',
  badge: 'MODULE 04 · NHÀ TRỌ & TỰ LẬP',
  accentColor: 'from-purple-500/20 to-pink-500/10 border-purple-500/40 text-purple-600',
  estimatedHours: '4-6 giờ học',
  stats: { vocab: 26, grammar: 5, kanji: 12, dialogues: 32 },
  vocab: [
    { id: 'v04-01', jp: 'おじゃまします', romaji: 'ojamashimasu', vn: 'Xin phép làm phiền khi bước vào nhà người khác', category: 'Chào hỏi' },
    { id: 'v04-02', jp: 'ひっこし', romaji: 'hikkoshi', vn: 'Chuyển nhà, dọn đến chỗ mới', category: 'Nhà ở' },
    { id: 'v04-03', jp: 'かたづけ', romaji: 'kataduke', vn: 'Dọn dẹp, sắp xếp đồ đạc gọn gàng', category: 'Hành động' },
    { id: 'v04-04', jp: 'ひあたりが いい', romaji: 'hiatari ga ii', vn: 'Phòng đón nắng tốt, sáng sủa', category: 'Nhà ở' },
    { id: 'v04-05', jp: 'いごこちが いい', romaji: 'igokochi ga ii', vn: 'Ở thoải mái, dễ chịu', category: 'Tính từ' },
    { id: 'v04-06', jp: '家賃（やちん）', romaji: 'yachin', vn: 'Tiền thuê nhà hàng tháng', category: 'Tiền bạc' },
    { id: 'v04-07', jp: '水道代（すいどうだい）', romaji: 'suidoudai', vn: 'Tiền nước sinh hoạt', category: 'Tiền bạc' },
    { id: 'v04-08', jp: '含（ふく）まれる', romaji: 'fukumareru', vn: 'Đã bao gồm trong giá', category: 'Hành động' },
    { id: 'v04-09', jp: 'あたり アパート', romaji: 'atari apaato', vn: 'Căn phòng trọ hời, ngon bổ rẻ', category: 'Khẩu ngữ' },
    { id: 'v04-10', jp: 'おみやげ', romaji: 'omiyage', vn: 'Quà lưu niệm, quà đặc sản', category: 'Đời sống' },
    { id: 'v04-11', jp: 'コンデンスミルク', romaji: 'kondensumiruku', vn: 'Sữa đặc có đường', category: 'Ẩm thực' },
    { id: 'v04-12', jp: 'ダンボール', romaji: 'danbooru', vn: 'Thùng bìa carton dọn nhà', category: 'Đồ dùng' },
    { id: 'v04-13', jp: 'ハサミ / カッター', romaji: 'hasami / kattaa', vn: 'Cây kéo / Dao rọc giấy', category: 'Đồ dùng' },
    { id: 'v04-14', jp: 'ひきだし', romaji: 'hikidashi', vn: 'Ngăn kéo bàn', category: 'Nội thất' },
    { id: 'v04-15', jp: 'ルーター', romaji: 'ruutaa', vn: 'Cục phát Wi-Fi (Router)', category: 'Thiết bị' },
    { id: 'v04-16', jp: 'ながおしする', romaji: 'nagaoshi suru', vn: 'Bấm giữ nút trong vài giây', category: 'Hành động' },
    { id: 'v04-17', jp: 'みほうだい', romaji: 'mihoudai', vn: 'Xem tẹt ga không giới hạn', category: 'Đời sống' },
    { id: 'v04-18', jp: 'ごみの わけかた', romaji: 'gomi no wakekata', vn: 'Phân loại rác theo quy định', category: 'Đời sống' },
    { id: 'v04-19', jp: 'もえる ごみ', romaji: 'moeru gomi', vn: 'Rác cháy được (thực phẩm, giấy...)', category: 'Rác' },
    { id: 'v04-20', jp: 'ペットボトル', romaji: 'pettobotoru', vn: 'Chai nhựa đựng nước', category: 'Rác' },
    { id: 'v04-21', jp: '半額（はんがく）シール', romaji: 'hangaku shiiru', vn: 'Tem dán giảm giá nửa giá (50%) ở siêu thị', category: 'Mua bán' },
    { id: 'v04-22', jp: 'せつやく', romaji: 'setsuyaku', vn: 'Tiết kiệm chi tiêu', category: 'Đời sống' },
    { id: 'v04-23', jp: 'べんりな やりかた', romaji: 'benri na yarikata', vn: 'Tuyệt chiêu, bí kíp sinh tồn', category: 'Khẩu ngữ' },
    { id: 'v04-24', jp: '手料理（てりょうり）', romaji: 'teryouri', vn: 'Món ăn tự tay mình nấu', category: 'Ẩm thực' },
    { id: 'v04-25', jp: 'たまねぎ', romaji: 'tamanegi', vn: 'Củ hành tây', category: 'Thực phẩm' },
    { id: 'v04-26', jp: '口（くち）に 合（あ）う', romaji: 'kuchi ni au', vn: 'Hợp khẩu vị, vừa miệng', category: 'Thành ngữ' }
  ],
  grammar: [
    {
      id: 'g04-01',
      title: 'Tồn Tại Vật Dụng & Vị Trí: 〜に 〜が あります',
      formula: '［Nơi chốn / Vị trí］に ［Đồ vật］が あります。',
      meaning: 'Ở [đâu] có [vật gì].',
      usageNote: 'Dùng trợ từ 「に」 chỉ nơi tồn tại của đồ vật và 「が」 chỉ vật thể: 「机の引き出しの中にハサミがあります」 (Trong ngăn kéo bàn có cây kéo).',
      spokenTip: 'Khi chỉ đồ trong phòng: 「あそこにエアコンがあるよ」 (Đằng kia có điều hòa đấy).',
      examples: [
        { jp: '部屋（へや）に 大（おお）きい 冷蔵庫（れいぞうこ）が あります。', vn: 'Trong phòng có một chiếc tủ lạnh to.' },
        { jp: '机（つくえ）の 上（うえ）に パソコンが あります。', vn: 'Trên bàn có chiếc máy tính xách tay.' }
      ]
    },
    {
      id: 'g04-02',
      title: 'Tặng Quà & Mượn Đồ Thân Mật: 〜を 貸（か）して くれる？／〜を どうぞ',
      formula: '［Đồ vật］を 貸（か）して くれる？ ／ ［Quà］、どうぞ！',
      meaning: 'Cậu cho mình mượn [đồ] được không? / Tặng cậu món quà này nè!',
      usageNote: 'Khi đưa quà lưu niệm hoặc đồ ăn cho bạn: 「これ、ベトナムのコーヒー。どうぞ！」 (Đây là cà phê Việt Nam, mời cậu lấy!).',
      spokenTip: 'Hỏi mượn đồ rất tự nhiên: 「カッター持ってる？ちょっと貸してくれる？」',
      examples: [
        { jp: 'ハサミを 貸（か）して くれる？', vn: 'Cho mình mượn cây kéo được không?' },
        { jp: 'これ、ベトナムの お土産（みやげ）です。どうぞ！', vn: 'Đây là quà lưu niệm từ Việt Nam. Xin mời bạn!' }
      ]
    },
    {
      id: 'g04-03',
      title: 'Nhờ Giúp Đỡ & Hướng Dẫn: 〜を 手伝（てつだ）って くれる？',
      formula: '［Việc làm］を 手伝（てつだ）って くれる？',
      meaning: 'Giúp mình một tay với [việc gì] được không?',
      usageNote: 'Dùng thể thân mật 「〜てくれる？」 khi nhờ vả bạn bè đồng trang lứa. Với người trên thì dùng 「〜ていただけませんか」.',
      spokenTip: '「Wi-Fiの設定、ちょっと見てくれる？」 (Xem hộ tớ cài đặt Wi-Fi một tẹo được không?)',
      examples: [
        { jp: '荷物（にもつ）の 片付（かたづ）けを 手伝（てつだ）って くれる？', vn: 'Giúp mình dọn dẹp đống đồ đạc được không?' },
        { jp: 'ルーターの 設定（せってい）を 教（おし）えて ください。', vn: 'Xin hãy chỉ cho tôi cách cài đặt router.' }
      ]
    },
    {
      id: 'g04-04',
      title: 'Quy Định & Lịch Sinh Hoạt: ［Thứ / Thời gian］に ［Hành động］',
      formula: '［Thứ trong tuần］に ［Hành động vứt rác / dọn dẹp］。',
      meaning: 'Vào [thứ mấy/mấy giờ] thì làm việc gì.',
      usageNote: 'Tại Nhật Bản, rác phải được phân loại và vứt đúng ngày, đúng giờ quy định của từng khu phố.',
      spokenTip: '「燃えるゴミは火曜日と金曜日の朝8時までだよ」 (Rác cháy được trước 8h sáng thứ Ba và thứ Sáu nhé).',
      examples: [
        { jp: 'ペットボトルは 水曜日（すいようび）に 出（だ）します。', vn: 'Chai nhựa thì vứt vào ngày thứ Tư.' },
        { jp: '夜（よる） 7時（しちじ）過（す）ぎに スーパーに 行（い）きます。', vn: 'Sau 7 giờ tối tôi đi siêu thị.' }
      ]
    },
    {
      id: 'g04-05',
      title: 'Rủ Ăn Uống & Cảm Ơn: 一緒（いっしょ）に 食（た）べて いかない？／ごちそうになるよ',
      formula: '一緒（いっしょ）に ［Món ăn］を 作（つく）って 食（た）べて いかない？',
      meaning: 'Ở lại cùng nấu ăn chung với mình không?',
      usageNote: 'Khi ai đó mời ăn uống, câu đáp lại lịch sự của người Nhật là 「ごちそうになります！」 (Tôi xin phép được nhận bữa ăn này!).',
      spokenTip: '「ミンくんの手料理めっちゃ食べてみたい！ ごちそうになるよ！」',
      examples: [
        { jp: '晩（ばん）ご飯（はん）、一緒（いっしょ）に 食（た）べて いかない？', vn: 'Ở lại ăn tối chung với mình không?' },
        { jp: '口（くち）に 合（あ）って よかったです。', vn: 'Thật mừng vì cậu thấy hợp khẩu vị.' }
      ]
    }
  ],
  kanji: [
    { char: '家', hanviet: 'GIA', strokes: 10, onkun: 'カ, ケ · いえ, や', meaning: 'Nhà cửa, gia đình', compounds: [{ jp: '家（いえ）', vn: 'Ngôi nhà' }, { jp: '家賃（やちん）', vn: 'Tiền thuê nhà' }, { jp: '家族（かぞく）', vn: 'Gia đình' }] },
    { char: '屋', hanviet: 'ỐC', strokes: 9, onkun: 'オク · や', meaning: 'Phòng, tiệm, cửa hàng', compounds: [{ jp: '部屋（へや）', vn: 'Căn phòng' }, { jp: '本屋（ほんや）', vn: 'Tiệm sách' }] },
    { char: '室', hanviet: 'THẤT', strokes: 9, onkun: 'シツ · むろ', meaning: 'Phòng ốc', compounds: [{ jp: '教室（きょうしつ）', vn: 'Phòng học' }, { jp: '研究室（けんきゅうしつ）', vn: 'Phòng nghiên cứu' }] },
    { char: '手', hanviet: 'THỦ', strokes: 4, onkun: 'シュ · て, た', meaning: 'Bàn tay, khéo léo', compounds: [{ jp: '手（て）', vn: 'Bàn tay' }, { jp: '上手（じょうず）', vn: 'Giỏi' }, { jp: '手伝（てつだ）う', vn: 'Giúp đỡ' }] },
    { char: '紙', hanviet: 'CHỈ', strokes: 10, onkun: 'シ · かみ', meaning: 'Giấy', compounds: [{ jp: '手紙（てがみ）', vn: 'Bức thư' }, { jp: '折り紙（おりがみ）', vn: 'Nghệ thuật xếp giấy' }] },
    { char: '荷', hanviet: 'HÀ', strokes: 10, onkun: 'カ · に', meaning: 'Hành lý, đồ đạc', compounds: [{ jp: '荷物（にもつ）', vn: 'Hành lý, đồ đạc' }, { jp: '手荷物（てにもつ）', vn: 'Hành lý xách tay' }] },
    { char: '物', hanviet: 'VẬT', strokes: 8, onkun: 'ブツ, モツ · もの', meaning: 'Đồ vật, vật thể', compounds: [{ jp: '品物（しなもの）', vn: 'Hàng hóa, đồ dùng' }, { jp: '食（た）べ物（もの）', vn: 'Thức ăn' }] },
    { char: '切', hanviet: 'THIẾT', strokes: 4, onkun: 'セツ, サイ · き-る, き-れる', meaning: 'Cắt, quan trọng', compounds: [{ jp: '切（き）る', vn: 'Cắt (thịt/rau)' }, { jp: '大切（たいせつ）な', vn: 'Quan trọng' }] },
    { char: '作', hanviet: 'TÁC', strokes: 7, onkun: 'サク, サ · つく-る', meaning: 'Làm ra, chế tạo, nấu', compounds: [{ jp: '作（つく）る', vn: 'Nấu, làm ra' }, { jp: '作文（さくぶん）', vn: 'Bài văn' }] },
    { char: '多', hanviet: 'ĐA', strokes: 6, onkun: 'タ · おお-い', meaning: 'Nhiều', compounds: [{ jp: '多（おお）い', vn: 'Nhiều' }, { jp: '多分（たぶん）', vn: 'Có lẽ' }] },
    { char: '少', hanviet: 'THIỂU', strokes: 4, onkun: 'ショウ · すく-ない, すこ-し', meaning: 'Ít, một chút', compounds: [{ jp: '少（すこ）し', vn: 'Một chút, một tẹo' }, { jp: '少（すく）ない', vn: 'Ít ỏi' }] },
    { char: '新', hanviet: 'TÂN', strokes: 13, onkun: 'シン · あたら-しい', meaning: 'Mới mẻ', compounds: [{ jp: '新（あたら）しい', vn: 'Mới' }, { jp: '新聞（しんぶん）', vn: 'Tờ báo' }, { jp: '新宿（しんじゅく）', vn: 'Ga Shinjuku' }] }
  ],
  listening: [
    {
      id: 'l04-01',
      questionJp: 'Khách đến nhà bấm chuông, bước vào cửa nói: 「お邪魔（じゃま）します！」 — Nghĩa là gì?',
      questionVn: 'Khách bước vào nhà và chào câu trên có ý nghĩa gì?',
      audioText: 'おじゃまします！',
      context: 'Đến chơi phòng trọ bạn bè',
      options: [
        { jp: 'Xin phép làm phiền khi bước vào nhà người khác.', vn: 'Lời chào xin phép vào nhà.', isCorrect: true },
        { jp: 'Tôi muốn về nhà ngay bây giờ.', vn: 'Muốn về nhà.', isCorrect: false },
        { jp: 'Phòng này bẩn quá.', vn: 'Chê phòng bẩn.', isCorrect: false }
      ],
      explanation: '「お邪魔します」 là lời chào chuẩn mực lịch sự của văn hóa Nhật Bản mỗi khi bước vào nhà, phòng trọ hay văn phòng của ai đó.'
    },
    {
      id: 'l04-02',
      questionJp: 'Bạn chỉ mẹo đi siêu thị: 「近所（きんじょ）の スーパーは 夜（よる） 7時（しちじ）過（す）ぎに 行（い）くと 半額（はんがく）シールが 貼（は）られるよ！」',
      questionVn: 'Nội dung mẹo tiết kiệm trên là gì?',
      audioText: 'きんじょのスーパーはよるしちじすぎにいくとはんがくシールがはられるよ！',
      context: 'Chia sẻ kinh nghiệm mua sắm',
      options: [
        { jp: 'Sau 7 giờ tối siêu thị sẽ dán tem giảm giá 50% (nửa giá) đồ ăn.', vn: 'Tem giảm giá 50% sau 7h tối.', isCorrect: true },
        { jp: 'Siêu thị đóng cửa lúc 7 giờ tối.', vn: 'Đóng cửa lúc 7h.', isCorrect: false },
        { jp: 'Sau 7 giờ tối đồ ăn đắt gấp đôi.', vn: 'Đắt gấp đôi.', isCorrect: false }
      ],
      explanation: '「半額シール」 là tem giảm giá 50% (nửa giá) cực kỳ quen thuộc với du học sinh và người sống ở Nhật để săn thực phẩm tươi ngon giá hời.'
    }
  ],
  quiz: [
    {
      id: 'q04-01',
      stem: 'Khi người Nhật dán tem "半額" lên hộp cơm vào buổi tối, hộp cơm 600 yên sẽ còn lại bao nhiêu tiền?',
      options: ['300 yên (giảm 50%)', '500 yên', '100 yên', 'Miễn phí'],
      correct: 0,
      explain: '半額 (hangaku) nghĩa là "nửa giá" (giảm 50%), nên 600 yên sẽ chỉ còn 300 yên.'
    },
    {
      id: 'q04-02',
      stem: 'Quy tắc phân loại rác quan trọng đối với chai nhựa (ペットボトル) ở Nhật là gì?',
      options: [
        'Bóc màng nhãn và tháo nắp chai nhựa ra trước khi vứt',
        'Vứt nguyên cả chai đầy nước vào thùng rác cháy được',
        'Đập nát chai và đốt',
        'Vứt chung với rác thức ăn thừa'
      ],
      correct: 0,
      explain: 'Chai nhựa ở Nhật được tái chế riêng: người dùng phải tráng sạch nước, bóc nhãn nylon (vứt vào rác nhựa mềm) và tháo nắp chai.'
    },
    {
      id: 'q04-03',
      stem: 'Đáp lại lời mời ăn cơm thân mật của bạn 「一緒に食べていかない？」, câu đáp tự nhiên là:',
      options: ['ごちそうに なるよ！', 'ごめんなさい。', 'いただきますは ダメです。', 'お腹が いっぱいです。'],
      correct: 0,
      explain: '「ごちそうになるよ！」 (Vậy tớ xin một chân ăn chực nha / Cảm ơn bữa ăn nhé!) là câu nhận lời ăn uống rất tự nhiên giữa bạn bè.'
    }
  ],
  dialogue: {
    title: 'Nhà Trọ, Mượn Đồ & Sinh Hoạt Tự Lập',
    scene: 'Daisuke sang thăm căn phòng trọ mới thuê của bạn, mượn kéo mở thùng đồ, được tặng cà phê Việt Nam, hỗ trợ cài đặt Wi-Fi và cùng nhau nấu ăn.',
    roles: { A: '大輔 (Daisuke)', B: 'Bạn (ミン)' },
    lines: [
      { speaker: 'A', name: '大輔', jp: '（ピンポーン♪）ミンくん、大輔（だいすけ）だけど、今（いま） 大丈夫（だいじょうぶ）？', vn: '(Bính boong♪) Minh ơi, Daisuke đây, giờ cậu có rảnh không?' },
      { speaker: 'B', name: 'あなた', jp: '（ドアを開けて）あ、大輔（だいすけ）くん！ どうぞ、入（はい）って！', vn: '(Mở cửa) A, Daisuke! Mời vào, vào nhà đi cậu!' },
      { speaker: 'A', name: '大輔', jp: 'お邪魔（じゃま）します！ うわあ、引（ひ）っ越（こ）したばかりなのに、部屋（へや） めっちゃ キレイにしてるね！', vn: 'Làm phiền cậu nhé! Uầy, mới chuyển nhà đến mà phòng ốc dọn dẹp sạch đẹp gọn gàng thế!' },
      { speaker: 'B', name: 'あなた', jp: 'ありがとう。昨日（きのう） やっと 荷物（にもつ）の 片付（かたづ）けが 終（お）わったところなんだ。', vn: 'Cảm ơn cậu nhé. Hôm qua mình mới vừa dọn dẹp xong đống đồ đạc đấy.' },
      { speaker: 'A', name: '大輔', jp: '日当（ひあ）たりも いいし、広（ひろ）くて 居心地（いごこち） 良（よ）さそうな 部屋（へや）じゃん！', vn: 'Phòng đón nắng tốt, lại rộng rãi thế này ở thích mê luôn còn gì!' },
      { speaker: 'B', name: 'あなた', jp: 'うん、家賃（やちん）は 1か月（いっかげつ） 4万（よんまん）5千円（ごせんえん）で、水道代（すいどうだい）も 含（ふく）まれてるから 気（き）に 入（い）ってるよ。', vn: 'Ừ, tiền nhà 1 tháng 45.000 yên, đã bao gồm cả tiền nước rồi nên mình ưng ý lắm.' },
      { speaker: 'A', name: '大輔', jp: '東京（とうきょう）で その 値段（ねだん）は かなり 安（やす）いよ！ 当（あ）たり 物件（ぶっけん）だね。', vn: 'Ở Tokyo mà giá đó là quá rẻ luôn đấy! Đúng là vớ được căn trọ hời.' },
      { speaker: 'B', name: 'あなた', jp: 'あ、そうだ。ベトナムの お土産（みやげ）なんだけど、これ、ベトナムの コーヒー。どうぞ！', vn: 'A, đúng rồi. Mình có chút quà mang từ Việt Nam sang, đây là cà phê Việt Nam. Tặng cậu nè!' },
      { speaker: 'A', name: '大輔', jp: 'えっ、本当（ほんとう）に？ ありがとう！ ベトナムコーヒー、飲（の）んで みたかったんだよね！', vn: 'Ủa, thật á? Cảm ơn cậu nhiều nhé! Mình đã muốn uống thử cà phê Việt Nam từ lâu rồi đấy!' },
      { speaker: 'B', name: 'あなた', jp: 'コンデンスミルクを 入（い）れて 飲（の）むと、すごく 甘（あま）くて おいしいよ。', vn: 'Cho thêm chút sữa đặc vào khuấy đều uống ngọt thơm béo ngậy ngon lắm.' },
      { speaker: 'A', name: '大輔', jp: '絶対（ぜったい） 試（ため）してみるよ！ あ、そういえば 段ボール（ダンボール） 開（あ）ける ハサミか カッター、持（も）ってる？', vn: 'Nhất định mình sẽ thử! À mà này, cậu có kéo hay dao rọc giấy để khui thùng carton không?' },
      { speaker: 'B', name: 'あなた', jp: 'あるよ！ 机（つくえ）の 引き出し（ひきだし）の 中（なか）に ハサミが あるから、使（つか）って。', vn: 'Có chứ! Trong ngăn kéo bàn học có chiếc kéo đấy, cậu cứ lấy dùng tự nhiên.' },
      { speaker: 'A', name: '大輔', jp: '助（たす）かる！ ……あ、あと Wi-Fiの 設定（せってい）は もう できた？', vn: 'Cứu tinh đây rồi! ...A, thế cài đặt mạng Wi-Fi cậu làm được chưa?' },
      { speaker: 'B', name: 'あなた', jp: '実は パスワードを 入（い）れたんだけど、まだ うまく つながらなくて 困（こま）ってるんだ。', vn: 'Thực ra mình nhập mật khẩu rồi mà nó cứ báo lỗi chưa kết nối được, đang loay hoay mãi.' },
      { speaker: 'A', name: '大輔', jp: 'どれどれ、ちょっと ルーター 見（み）せて。……あ、この ボタンを 5秒（ごびょう） 長押（ながお）しするんだよ。', vn: 'Đâu đâu, đưa router mình xem thử nào. ...A, cái nút này cậu phải bấm giữ 5 giây cơ.' },
      { speaker: 'B', name: 'あなた', jp: 'あ、ランプが 緑（みどり）に 変（か）わった！ つながったよ！ すごい！', vn: 'A, đèn đổi sang màu xanh lá rồi kìa! Bắt được mạng rồi! Đỉnh thật đấy!' },
      { speaker: 'A', name: '大輔', jp: 'よかった！ これで ネットも 動画（どうが）も 見放題（みほうだい）だね。あ、ごみの 分別（ぶんべつ）ルールは もう 分（わ）かる？', vn: 'Tốt quá rồi! Tha hồ lướt web cày phim nhé. À, quy định phân loại rác ở khu này cậu đã rõ chưa?' },
      { speaker: 'B', name: 'あなた', jp: '実は まだ よく 分（わ）からなくて……。ペットボトルや 缶（かん）は どう すれば いいの？', vn: 'Thật ra mình cũng chưa nắm rõ lắm... Chai nhựa với vỏ lon thì xử lý thế nào vậy cậu?' },
      { speaker: 'A', name: '大輔', jp: '燃（も）える ごみは 火曜日（かようび）と 金曜日（きんようび）の 朝（あさ）8時（はちじ）まで。ペットボトルは ラベルと キャップを 取（と）って、水曜日（すいようび）に 出（だ）すんだよ。', vn: 'Rác cháy được thì vứt trước 8 giờ sáng thứ Ba và thứ Sáu. Còn chai nhựa thì nhớ bóc nhãn tháo nắp ra rồi vứt vào thứ Tư nhé.' },
      { speaker: 'B', name: 'あなた', jp: 'なるほど！ 日本（にほん）は 分別（ぶんべつ）が 細（こま）かいね。カレンダーに メモして おくよ。', vn: 'Ra là vậy! Ở Nhật phân loại rác chi tiết thật đấy. Mình phải note ngay vào lịch mới được.' },
      { speaker: 'A', name: '大輔', jp: '慣（な）れれば 簡単（かんたん）だよ。あと、近所（きんじょ）の スーパーは 夜（よる） 7時（しちじ）過（す）ぎに 行（い）くと 半額（はんがく）シールが 貼（は）られるから おすすめ！', vn: 'Quen rồi thì thấy đơn giản thôi. À, siêu thị gần đây sau 7 giờ tối hay dán tem giảm giá nửa giá (50%) lắm đấy, tha hồ tiết kiệm!' },
      { speaker: 'B', name: 'あなた', jp: '本当（ほんとう）！？ それは すごく ありがたい 情報（じょうほう）だよ！', vn: 'Thật á!? Thông tin này đáng giá nghìn vàng luôn đấy cậu!' },
      { speaker: 'A', name: '大輔', jp: '留学生（りゅうがくせい）の 節約（せつやく）の 必殺技（ひっさつわざ）だからね（笑）。', vn: 'Tuyệt chiêu tiết kiệm sinh tồn của du học sinh tụi mình mà (cười).' },
      { speaker: 'B', name: 'あなた', jp: 'あはは！ 本当（ほんとう）に ありがとう、大輔（だいすけ）くん。お礼（れい）に、今（いま）から 簡単（かんたん）な ベトナム料理（りょうり） 作（つく）るから、一緒（いっしょ）に 食（た）べて いかない？', vn: 'Haha! Thật sự cảm ơn Daisuke nhiều lắm. Để cảm ơn, giờ mình nấu món Việt Nam đơn giản mời cậu ăn cùng nhé?' },
      { speaker: 'A', name: '大輔', jp: 'えっ、いいの！？ ミンくんの 手料理（てりょうり）、めっちゃ 食（た）べてみたい！ ごちそうに なるよ！', vn: 'Hả, được thế thì còn gì bằng!? Mình tò mò muốn ăn đồ Minh tự nấu lắm! Cho mình xin một chân ăn chực nha!' },
      { speaker: 'B', name: 'あなた', jp: 'よし、じゃあ 一緒（いっしょ）に 作（つく）ろう！ 冷蔵庫（れいぞうこ）から お肉（にく）と 卵（たまご）と 野菜（やさい） 出（だ）すね！', vn: 'Ok, vậy tụi mình cùng bắt tay vào làm nào! Để mình lấy thịt, trứng với rau trong tủ lạnh ra nhé!' },
      { speaker: 'A', name: '大輔', jp: '手伝（てつだ）うよ！ 野菜（やさい） 切（き）ろうか？', vn: 'Mình phụ một tay cho! Cần mình thái rau không?' },
      { speaker: 'B', name: 'あなた', jp: 'じゃ、玉（たま）ねぎを 切（き）って くれる？ 醤油（しょうゆ）と 砂糖（さとう）で 味付（あじつ）けしよう！', vn: 'Vậy cậu thái giúp mình củ hành tây nhé? Nêm chút xì dầu với đường là thơm nức mũi luôn!' },
      { speaker: 'A', name: '大輔', jp: '任（まか）せて！ うわあ、いい 匂（にお）いが してきた！ いただきまーす！', vn: 'Cứ để mình lo! Uầy, mùi thơm bốc lên nức mũi rồi nè! Mời cả nhà cùng xơi!' },
      { speaker: 'B', name: 'あなた', jp: 'どうぞ！ 召（め）し上（あ）がれ！', vn: 'Mời cậu ăn tự nhiên!' },
      { speaker: 'A', name: '大輔', jp: 'うまっ！ めっちゃ おいしい！ ミンくん、料理（りょうり） 上手（じょうず）だね！', vn: 'Ngon đỉnh! Ngon dã man luôn á! Minh nấu ăn siêu thật đấy!' },
      { speaker: 'B', name: 'あなた', jp: '口（くち）に 合（あ）って よかった！ また いつでも 遊（あそ）びに 来（き）てね！', vn: 'Cậu thấy vừa miệng là mình vui rồi! Bữa nào rảnh lại cứ ghé qua phòng mình chơi nha!' }
    ]
  }
}

export const REAL_LIFE_MODULES: ModuleDetail[] = [
  MODULE_01,
  MODULE_02,
  MODULE_03,
  MODULE_04,
]

export function getModuleById(id: string): ModuleDetail | undefined {
  return REAL_LIFE_MODULES.find((m) => m.id === id)
}

export interface StandardModuleNav {
  num: number
  code: string
  moduleId: string
  targetUrl: string
  titleJp: string
  titleVn: string
  shortTitle: string
  phase: 1 | 2
  level: string
  tag: string
}

export const ALL_14_MODULES_NAV: StandardModuleNav[] = [
  {
    num: 1,
    code: 'M01',
    moduleId: 'mod-01',
    targetUrl: '/module/mod-01',
    titleJp: '学校（がっこう）の 1日（いちにち）と 新（あたら）しい 友達（ともだち）',
    titleVn: 'Giao Tiếp Học Đường & Kết Bạn Mới',
    shortTitle: 'Học đường & Bạn bè',
    phase: 1,
    level: 'N5',
    tag: 'Lớp học & Kết bạn',
  },
  {
    num: 2,
    code: 'M02',
    moduleId: 'mod-02',
    targetUrl: '/module/mod-02',
    titleJp: '戦神（せんしん）コンビニと 街（まち）の 買（か）い物（もの）',
    titleVn: 'Chiến Thần Konbini & Mua Sắm Đời Sống',
    shortTitle: 'Konbini & Mua sắm',
    phase: 1,
    level: 'N5',
    tag: 'Konbini & Siêu thị',
  },
  {
    num: 3,
    code: 'M03',
    moduleId: 'mod-03',
    targetUrl: '/module/mod-03',
    titleJp: 'スーパーの 買（か）い物（もの）と 街（まち）の 生活（せいかつ）',
    titleVn: 'Siêu Thị, Mua Sắm Du Học & Nhịp Sống Đô Thị',
    shortTitle: 'Siêu thị & Đô thị',
    phase: 1,
    level: 'N5',
    tag: 'Siêu thị & Mua sắm',
  },
  {
    num: 4,
    code: 'M04',
    moduleId: 'mod-04',
    targetUrl: '/module/mod-04',
    titleJp: 'アパートの 暮（く）らしと 助（たす）け合（あ）い',
    titleVn: 'Nhà Trọ, Sinh Hoạt Tự Lập & Bạn Bè',
    shortTitle: 'Nhà trọ & Tự lập',
    phase: 1,
    level: 'N5',
    tag: 'Phòng trọ & Mẹo sống',
  },
  {
    num: 5,
    code: 'M05',
    moduleId: 'cd00',
    targetUrl: '/u/cd00',
    titleJp: '基礎（きそ）のまとめ',
    titleVn: 'Nền Tảng Ngữ Pháp & Hoàn Tất N5',
    shortTitle: 'Nền tảng N5',
    phase: 2,
    level: 'N5+',
    tag: 'Thể thông thường',
  },
  {
    num: 6,
    code: 'M06',
    moduleId: 'cd01',
    targetUrl: '/u/cd01',
    titleJp: '学校（がっこう）・先生（せんせい）との連絡（れんらく）',
    titleVn: 'Trường Học & Giao Tiếp Lịch Sự Với Thầy Cô',
    shortTitle: 'Thầy cô & Lớp học',
    phase: 2,
    level: 'N4',
    tag: 'Kính ngữ & Xin phép',
  },
  {
    num: 7,
    code: 'M07',
    moduleId: 'cd02',
    targetUrl: '/u/cd02',
    titleJp: 'コンビニ・お店（みせ）・買い物（かいもの）',
    titleVn: 'Cửa Hàng Dịch Vụ, Mua Sắm & Nghe Hiểu Keigo',
    shortTitle: 'Dịch vụ & Mua sắm',
    phase: 2,
    level: 'N4',
    tag: 'Khả năng & Keigo quầy',
  },
  {
    num: 8,
    code: 'M08',
    moduleId: 'cd03',
    targetUrl: '/u/cd03',
    titleJp: '電車（でんしゃ）・バス・道（みち）・トラブル',
    titleVn: 'Tàu Điện, Đường Đi & Xử Lý Sự Cố Giao Thông',
    shortTitle: 'Giao thông & Tàu điện',
    phase: 2,
    level: 'N4',
    tag: 'Câu điều kiện & Trễ tàu',
  },
  {
    num: 9,
    code: 'M09',
    moduleId: 'cd04',
    targetUrl: '/u/cd04',
    titleJp: 'アパート・市役所（しやくしょ）・ごみ・ルール',
    titleVn: 'Nhà Trọ, Hành Chính, Rác & Nội Quy Sinh Hoạt',
    shortTitle: 'Hành chính & Nhà trọ',
    phase: 2,
    level: 'N4',
    tag: 'Chuẩn bị & Nội quy',
  },
  {
    num: 10,
    code: 'M10',
    moduleId: 'cd05',
    targetUrl: '/u/cd05',
    titleJp: '病院（びょういん）・健康（けんこう）・薬局（やっきょく）',
    titleVn: 'Phòng Khám, Sức Khỏe & Hiệu Thuốc',
    shortTitle: 'Bệnh viện & Sức khỏe',
    phase: 2,
    level: 'N4',
    tag: 'Khám bệnh & Phán đoán',
  },
  {
    num: 11,
    code: 'M11',
    moduleId: 'cd06',
    targetUrl: '/u/cd06',
    titleJp: 'アルバイト・面接（めんせつ）・職場（しょくば）',
    titleVn: 'Làm Thêm (Baito), Phỏng Vấn & Nơi Làm Việc',
    shortTitle: 'Baito & Công sở',
    phase: 2,
    level: 'N4',
    tag: 'Sai khiến & Phỏng vấn',
  },
  {
    num: 12,
    code: 'M12',
    moduleId: 'cd07',
    targetUrl: '/u/cd07',
    titleJp: '友達（ともだち）・トラブル・感情（かんじょう）',
    titleVn: 'Bạn Bè, Cảm Xúc & Giải Quyết Hiểu Lầm',
    shortTitle: 'Bạn bè & Cảm xúc',
    phase: 2,
    level: 'N4',
    tag: 'Bị động & Tâm sự',
  },
  {
    num: 13,
    code: 'M13',
    moduleId: 'cd08',
    targetUrl: '/u/cd08',
    titleJp: '計画（けいかく）・旅行（りょこう）・将来（しょうらい）の夢（ゆめ）',
    titleVn: 'Kế Hoạch, Du Lịch & Ước Mơ Tương Lai',
    shortTitle: 'Du lịch & Kế hoạch',
    phase: 2,
    level: 'N4',
    tag: 'Ý chí & Đặt phòng',
  },
  {
    num: 14,
    code: 'M14',
    moduleId: 'cd09',
    targetUrl: '/u/cd09',
    titleJp: 'お願（ねが）い・お礼（れい）・人間関係（にんげんかんけい）',
    titleVn: 'Nhờ Vả, Giúp Đỡ & Bứt Phá N4+ Toàn Diện',
    shortTitle: 'Tri ân & Bứt phá N4+',
    phase: 2,
    level: 'N4+',
    tag: 'Cho nhận & Kính ngữ',
  },
]
