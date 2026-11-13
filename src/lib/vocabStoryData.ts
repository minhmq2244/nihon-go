import type { VocabItem } from '../types'

export interface VocabStoryLine {
  speaker?: string
  speakerVn?: string
  jp: string
  vn: string
  vocabIds: string[]
}

export interface VocabStoryPart {
  id: string
  num: number
  title: string
  titleVn: string
  scene: string
  lines: VocabStoryLine[]
  vocabCovered: string[]
}

export interface VocabStory {
  unitId: string
  title: string
  titleVn: string
  subtitle: string
  parts: VocabStoryPart[]
}

export const CURATED_VOCAB_STORIES: Record<string, VocabStory> = {
  b01: {
    unitId: 'b01',
    title: '日本語学校（にほんごがっこう）の はじめまして',
    titleVn: 'Buổi gặp gỡ đầu tiên tại trường tiếng Nhật',
    subtitle: 'Câu chuyện tự nhiên kết nối toàn bộ 66 từ mới của Bài 1 qua 4 cảnh sinh động',
    parts: [
      {
        id: 'b01-s1',
        num: 1,
        title: '自己紹介（じこしょうかい）',
        titleVn: 'Buổi tự giới thiệu trước lớp',
        scene: 'Ngày đầu tiên nhập học, bạn Nam bước lên bục tự giới thiệu bản thân trước thầy giáo và cả lớp.',
        vocabCovered: [
          'b01-v55', // はじめまして
          'b01-v1',  // 私（わたし）
          'b01-v2',  // なまえ
          'b01-v15', // ベトナム
          'b01-v19', // 〜人（じん）
          'b01-v22', // こうこう
          'b01-v27', // 学生（がくせい）
          'b01-v24', // 日本語学校（にほんごがっこう）
          'b01-v23', // 大学（だいがく）
          'b01-v28', // 大学生（だいがくせい）
          'b01-v56', // （どうぞ）よろしく おねがいします
          'b01-v57', // こちらこそ
          'b01-v33', // 〜さん
        ],
        lines: [
          {
            speaker: 'ナム',
            speakerVn: 'Nam',
            jp: 'はじめまして！ 私（わたし）の なまえは ナムです。ベトナム人（じん）です。',
            vn: 'Rất vui được gặp mọi người! Tên của tôi là Nam. Tôi là người Việt Nam.',
            vocabIds: ['b01-v55', 'b01-v1', 'b01-v2', 'b01-v15', 'b01-v19'],
          },
          {
            speaker: 'ナム',
            speakerVn: 'Nam',
            jp: '前（まえ）は ベトナムで こうこうの 学生（がくせい）でした。今（いま）は 日本語学校（にほんごがっこう）の 学生（がくせい）です。そして、ベトナムの 大学（だいがく）の 大学生（だいがくせい）でも あります。',
            vn: 'Trước đây ở Việt Nam tôi là học sinh cấp 3. Hiện tại tôi là học viên trường tiếng Nhật. Và tôi cũng là sinh viên của một trường đại học ở Việt Nam.',
            vocabIds: ['b01-v22', 'b01-v27', 'b01-v24', 'b01-v23', 'b01-v28'],
          },
          {
            speaker: 'ナム',
            speakerVn: 'Nam',
            jp: 'どうぞよろしく おねがいします。',
            vn: 'Rất mong nhận được sự giúp đỡ của thầy cô và các bạn.',
            vocabIds: ['b01-v56'],
          },
          {
            speaker: '田中先生',
            speakerVn: 'Thầy Tanaka',
            jp: 'はじめまして、田中（たなか）です。ナムさん、こちらこそ よろしく おねがいします。',
            vn: 'Rất vui được gặp em, thầy là Tanaka. Nam này, chính thầy cũng mong được em giúp đỡ.',
            vocabIds: ['b01-v57', 'b01-v33'],
          },
        ],
      },
      {
        id: 'b01-s2',
        num: 2,
        title: '先生（せんせい）とお仕事（しごと）',
        titleVn: 'Hỏi thăm thầy giáo và nghề nghiệp',
        scene: 'Giờ giải lao, thầy Tanaka trò chuyện thân mật với Nam về quê quán và nghề nghiệp của gia đình.',
        vocabCovered: [
          'b01-v29', // 先生（せんせい）
          'b01-v6',  // 日本（にほん）
          'b01-v51', // どちら
          'b01-v62', // はい
          'b01-v30', // きょうし
          'b01-v26', // おしごと
          'b01-v52', // なん
          'b01-v25', // しごと
          'b01-v32', // しゃいん
          'b01-v61', // そうですか
          'b01-v31', // かいしゃいん
        ],
        lines: [
          {
            speaker: 'ナム',
            speakerVn: 'Nam',
            jp: '田中（たなか）先生（せんせい）は 日本人（にほんじん）ですね。先生（せんせい）は 日本（にほん）の どちらから 来（き）ましたか。',
            vn: 'Thầy Tanaka là người Nhật nhỉ. Thầy đến từ nơi nào của nước Nhật ạ?',
            vocabIds: ['b01-v29', 'b01-v6', 'b01-v51'],
          },
          {
            speaker: '田中先生',
            speakerVn: 'Thầy Tanaka',
            jp: 'はい、私（わたし）は 東京（とうきょう）出身（しゅっしん）ですよ。この 日本語学校（にほんごがっこう）の きょうしです。',
            vn: 'Đúng vậy, thầy xuất thân từ Tokyo đấy. Thầy là giáo viên của trường tiếng Nhật này.',
            vocabIds: ['b01-v62', 'b01-v30'],
          },
          {
            speaker: '田中先生',
            speakerVn: 'Thầy Tanaka',
            jp: 'ナムさん、お父（とう）さんの おしごとは 何（なん）ですか。',
            vn: 'Nam này, công việc của bố em là gì vậy?',
            vocabIds: ['b01-v26', 'b01-v52'],
          },
          {
            speaker: 'ナム',
            speakerVn: 'Nam',
            jp: '父（ちち）の しごとは 会社（かいしゃ）の しゃいんです。ベトナムの FPTの しゃいんです。',
            vn: 'Dạ công việc của bố em là nhân viên công ty. Bố là nhân viên của công ty FPT tại Việt Nam.',
            vocabIds: ['b01-v25', 'b01-v32'],
          },
          {
            speaker: '田中先生',
            speakerVn: 'Thầy Tanaka',
            jp: 'そうですか。かいしゃいんですね。すばらしいですね。',
            vn: 'Thế à. Là nhân viên công ty nhỉ. Thật tuyệt vời.',
            vocabIds: ['b01-v61', 'b01-v31'],
          },
        ],
      },
      {
        id: 'b01-s3',
        num: 3,
        title: '世界（せかい）からの クラスメイト',
        titleVn: 'Bạn học đến từ khắp năm châu',
        scene: 'Nam và các bạn học quốc tế làm quen với nhau, giới thiệu tên, quê hương và các ngôn ngữ trên thế giới.',
        vocabCovered: [
          'b01-v58', // あのう
          'b01-v59', // すみません
          'b01-v60', // あのう、すみません。
          'b01-v3',  // おなまえ
          'b01-v7',  // アメリカ
          'b01-v21', // えいご
          'b01-v5',  // おくに
          'b01-v53', // おくには どちらですか。
          'b01-v4',  // くに
          'b01-v8',  // イタリア
          'b01-v9',  // オーストラリア
          'b01-v10', // かんこく
          'b01-v11', // タイ
          'b01-v20', // 〜語（ご）
          'b01-v12', // ちゅうごく
          'b01-v13', // ロシア
          'b01-v14', // ブラジル
          'b01-v16', // ドイツ
          'b01-v17', // フランス
          'b01-v18', // スイス
        ],
        lines: [
          {
            speaker: 'ナム',
            speakerVn: 'Nam',
            jp: 'あのう、すみません。おなまえは 何（なん）ですか。',
            vn: 'À, xin lỗi cho tôi hỏi... Tên của bạn là gì vậy?',
            vocabIds: ['b01-v58', 'b01-v59', 'b01-v60', 'b01-v3'],
          },
          {
            speaker: 'マイク',
            speakerVn: 'Mike',
            jp: 'マイクです。アメリカ人（じん）です。アメリカで えいごの 先生（せんせい）でした。',
            vn: 'Mình là Mike. Mình là người Mỹ. Trước đây mình là giáo viên tiếng Anh ở Mỹ.',
            vocabIds: ['b01-v7', 'b01-v21'],
          },
          {
            speaker: 'ナム',
            speakerVn: 'Nam',
            jp: 'マイクさん、おくには どちらですか。',
            vn: 'Bạn Mike ơi, bạn là người nước nào vậy?',
            vocabIds: ['b01-v5', 'b01-v53'],
          },
          {
            speaker: 'マイク',
            speakerVn: 'Mike',
            jp: 'くに（国）は アメリカです。あのう、すみません、みなさんの おくには どちらですか。',
            vn: 'Đất nước của mình là nước Mỹ. À, xin lỗi mọi người, đất nước của các bạn ở đâu vậy?',
            vocabIds: ['b01-v4'],
          },
          {
            speaker: 'マルコ & ジョン',
            speakerVn: 'Marco & John',
            jp: '私（わたし）の くには イタリアです。イタリア人（じん）です。／ ぼくは オーストラリア人（じん）です。オーストラリアから 来（き）ました。',
            vn: 'Đất nước của tôi là nước Ý. Tôi là người Ý. / Còn tôi là người Úc. Tôi đến từ nước Úc.',
            vocabIds: ['b01-v8', 'b01-v9'],
          },
          {
            speaker: 'キム & レック',
            speakerVn: 'Kim & Lek',
            jp: '私（わたし）は かんこく人（じん）です。かんこく語（ご）と 日本語（にほんご）を 話（はな）します。／ タイ人（じん）の レックです。タイ語（ご）が 母国語（ぼこくご）です。',
            vn: 'Tôi là người Hàn Quốc. Tôi nói tiếng Hàn và tiếng Nhật. / Tôi là Lek người Thái Lan. Tiếng Thái là tiếng mẹ đẻ của tôi.',
            vocabIds: ['b01-v10', 'b01-v11', 'b01-v20'],
          },
          {
            speaker: 'ワン & イワン',
            speakerVn: 'Wang & Ivan',
            jp: 'ちゅうごく人（じん）の ワンです。ちゅうごく語（ご）が 話（はな）せます。／ ロシア人（じん）の イワンです。ロシア語（ご）の 本（ほん）が 好（す）きです。',
            vn: 'Tôi là Wang người Trung Quốc. Tôi có thể nói tiếng Trung. / Tôi là Ivan người Nga. Tôi thích sách tiếng Nga.',
            vocabIds: ['b01-v12', 'b01-v13'],
          },
          {
            speaker: 'カルロス & ハンス',
            speakerVn: 'Carlos & Hans',
            jp: 'ブラジル人（じん）の カルロスです。サンバが 大好（だいす）きです。／ ドイツ人（じん）の ハンスです。ドイツ語（ご）を 教（おし）えて います。',
            vn: 'Tôi là Carlos người Brazil. Tôi rất thích điệu nhảy Samba. / Tôi là Hans người Đức. Tôi dạy tiếng Đức.',
            vocabIds: ['b01-v14', 'b01-v16'],
          },
          {
            speaker: 'ピエール & エヴァ',
            speakerVn: 'Pierre & Eva',
            jp: 'フランス人（じん）の ピエールです。フランス料理（りょうり）が 得意（とくい）です。／ スイス人（じん）の エヴァです。スイスの 山（やま）は きれいです。',
            vn: 'Tôi là Pierre người Pháp. Tôi nấu món Pháp rất cừ. / Tôi là Eva người Thụy Sĩ. Núi ở Thụy Sĩ rất đẹp.',
            vocabIds: ['b01-v17', 'b01-v18'],
          },
        ],
      },
      {
        id: 'b01-s4',
        num: 4,
        title: '年齢（ねんれい）・誕生日（たんじょうび）・趣味（しゅみ）',
        titleVn: 'Tuổi tác, sinh nhật và các sở thích cá nhân',
        scene: 'Nam và Mike cùng chia sẻ về tuổi tác, bất ngờ phát hiện ngày sinh trùng khớp và trò chuyện say sưa về các sở thích.',
        vocabCovered: [
          'b01-v39', // おいくつ
          'b01-v37', // 〜さい／〜才（さい）
          'b01-v38', // なんさい
          'b01-v34', // 誕生日（たんじょうび）
          'b01-v40', // いつ
          'b01-v35', // 〜がつ
          'b01-v36', // 〜日（にち／か）
          'b01-v64', // あ（っ）
          'b01-v66', // おなじですね
          'b01-v65', // わあ
          'b01-v41', // しゅみ
          'b01-v43', // スポーツ
          'b01-v63', // いいえ
          'b01-v45', // サッカー
          'b01-v47', // テニス
          'b01-v49', // すいえい
          'b01-v42', // えいが
          'b01-v44', // おんがく
          'b01-v46', // どくしょ
          'b01-v48', // りょこう
          'b01-v50', // りょうり
          'b01-v54', // 私の しゅみは りょうりです。
        ],
        lines: [
          {
            speaker: 'ナム',
            speakerVn: 'Nam',
            jp: 'マイクさん、失礼（しつれい）ですが、おいくつですか。',
            vn: 'Bạn Mike ơi, thất lễ cho mình hỏi, bạn bao nhiêu tuổi rồi?',
            vocabIds: ['b01-v39'],
          },
          {
            speaker: 'マイク',
            speakerVn: 'Mike',
            jp: '30才（さい）です。ナムさんは なんさいですか。',
            vn: 'Mình 30 tuổi. Nam mấy tuổi rồi?',
            vocabIds: ['b01-v37', 'b01-v38'],
          },
          {
            speaker: 'ナム',
            speakerVn: 'Nam',
            jp: '私（わたし）は 20才（さい）です。',
            vn: 'Mình 20 tuổi.',
            vocabIds: [],
          },
          {
            speaker: 'マイク',
            speakerVn: 'Mike',
            jp: 'ナムさん、誕生日（たんじょうび）は いつですか。',
            vn: 'Nam ơi, ngày sinh nhật của bạn là khi nào?',
            vocabIds: ['b01-v34', 'b01-v40'],
          },
          {
            speaker: 'ナム',
            speakerVn: 'Nam',
            jp: '誕生日（たんじょうび）は 8月（がつ） 15日（にち）です。',
            vn: 'Sinh nhật của mình là ngày 15 tháng 8.',
            vocabIds: ['b01-v35', 'b01-v36'],
          },
          {
            speaker: 'マイク',
            speakerVn: 'Mike',
            jp: 'あ（っ）！ 私（わたし）も 8月（がつ） 15日（にち）です！ おなじですね！',
            vn: 'A! Mình cũng ngày 15 tháng 8! Thật là giống nhau quá đi!',
            vocabIds: ['b01-v64', 'b01-v66'],
          },
          {
            speaker: 'ナム',
            speakerVn: 'Nam',
            jp: 'わあ、本当（ほんとう）ですか！ すごいですね！',
            vn: 'Oa, thật vậy sao! Tuyệt quá nhỉ!',
            vocabIds: ['b01-v65'],
          },
          {
            speaker: 'マイク',
            speakerVn: 'Mike',
            jp: 'ナムさんの しゅみは 何（なん）ですか。スポーツですか。',
            vn: 'Sở thích của Nam là gì? Thể thao phải không?',
            vocabIds: ['b01-v41', 'b01-v43'],
          },
          {
            speaker: 'ナム',
            speakerVn: 'Nam',
            jp: 'いいえ、スポーツじゃ ありません。でも サッカーと テニスを 見（み）るのは 好（す）きです。すいえいも たまに します。',
            vn: 'Không, không phải thể thao. Nhưng mình thích xem bóng đá và quần vợt tennis. Thỉnh thoảng mình cũng đi bơi nữa.',
            vocabIds: ['b01-v63', 'b01-v45', 'b01-v47', 'b01-v49'],
          },
          {
            speaker: 'マイク',
            speakerVn: 'Mike',
            jp: 'えいがや おんがくはどうですか。',
            vn: 'Thế còn xem phim hay nghe âm nhạc thì sao?',
            vocabIds: ['b01-v42', 'b01-v44'],
          },
          {
            speaker: 'ナム',
            speakerVn: 'Nam',
            jp: 'はい、どくしょと りょこうが 好（す）きです。そして、私の しゅみは りょうりです。',
            vn: 'Có chứ, mình thích đọc sách và du lịch. Và đặc biệt, sở thích của tôi là nấu ăn.',
            vocabIds: ['b01-v46', 'b01-v48', 'b01-v50', 'b01-v54'],
          },
        ],
      },
    ],
  },
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
  const allCoveredIds = new Set<string>()
  for (const part of story.parts) {
    for (const id of part.vocabCovered) {
      allCoveredIds.add(id)
    }
    for (const line of part.lines) {
      for (const id of line.vocabIds) {
        allCoveredIds.add(id)
      }
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
