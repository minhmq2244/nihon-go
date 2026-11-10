# Prompt bàn giao: Kanji trong bài đọc Bài 8–11 và độ phủ ngữ pháp của Luyện nói

> Dán toàn bộ nội dung dưới đây cho agent. Prompt tự đủ: không cần lịch sử chat nào khác.
> Số liệu được đo trên commit `854d560` (nhánh `main`).

---

## 0. Vai trò và cách làm việc

Bạn là agent lập trình làm việc trực tiếp trong repo **Nihon-App** (`D:\02_Code\personalProject\Nihon-App`, GitHub `minhmq2244/nihon-go`, nhánh `main`). Người dùng là người Việt đang tự học tiếng Nhật N5→N4; app chỉ dùng cá nhân, chạy local.

- Trả lời và viết tài liệu **bằng tiếng Việt**. Code, tên biến và commit message bằng tiếng Anh như code hiện có.
- Đọc code trước khi sửa. Giữ đúng phong cách code và định dạng nội dung hiện có. Chỉ sửa những gì nhiệm vụ cần.
- Làm trọn cả hai phần rồi mới báo cáo. Chỉ hỏi lại khi gặp quyết định thật sự không suy ra được từ prompt này.
- **Không commit, không push** trừ khi người dùng bảo. Khi được bảo commit: **không thêm dòng `Co-Authored-By` hay bất kỳ ghi chú tác giả AI nào**. Commit message theo kiểu `feat(scope): …` có thân bài ngắn. Thư mục `.claude/` không được đưa vào git.
- Làm **Phần A (Luyện nói) trước**, rồi **Phần B (bài đọc)**.

## 1. Bối cảnh app (đủ để bắt đầu)

- Stack: React 19 + TypeScript + Vite 8 + Tailwind 4 + Zustand, Node ≥ 24, Windows. Router là `HashRouter` (URL dạng `http://localhost:5173/#/u/b11/luyen-noi`).
- 21 đơn vị: `b01`…`b11` (Bài 1–11; Tập 1 = Bài 1–3, Tập 2 = Bài 4–7, Tập 3 = Bài 8–11) và `cd00`…`cd09` (Chủ đề 0–9, Tập 4).
- Nội dung là Markdown, build ra JSON:
  - Giáo trình: `content/source/tap1.md`…`tap4.md` (đọc bằng `splitVolume` + `parseTheory` trong `scripts/content/source.ts`; `parseTheory(...).kanji` là danh sách kanji của từng bài).
  - Nội dung luyện tập tự soạn: `content/generated/<unit>.md` (đọc bằng `parseGenerated` trong `scripts/content/generated.ts`), `content/generated/speaking/<unit>.md` (đọc bằng `parseSpeaking` trong `scripts/content/speaking.ts`). Định dạng mô tả trong `content/generated/README.md`.
  - `scripts/build-content.ts` ghép tất cả thành `public/data/unit/<unit>.json` (thư mục `public/data` bị gitignore). Lỗi định dạng in ra dạng `  ✗ …`, cảnh báo nội dung in ra dạng `  ⚠ …`.
- Cách viết tiếng Nhật trong mọi file nội dung: kanji kèm cách đọc ngay sau, kiểu giáo trình `漢字（かんじ）`; các cụm cách nhau bằng dấu cách như file hiện có; bản dịch tiếng Việt đứng sau ` || `.
- Trang mỗi bài có 5 bước: ① Học → ② Luyện nghe → ③ Luyện nói → ④ Hội thoại → ⑤ Đọc hiểu, cộng mục "Bài tập thêm".
- **Luyện nói** (`src/features/SpeakPracticeTab.tsx`) có 4 nấc cho mọi mẫu ngữ pháp: ① nhại lại → ② tự nói từ tiếng Việt → **③ trả lời câu hỏi** → ④ kéo dài câu. Người học tự đánh giá "trôi rồi / chưa trôi", không chấm điểm, không trắc nghiệm. Dữ liệu nấc 3 được lắp lúc build trong `scripts/content/practice.ts` (`buildPractice` → `practice.speak.points[i].ask`).
- Lệnh:
  - `npx tsx scripts/build-content.ts`: build nội dung, in lỗi `✗` / cảnh báo `⚠`.
  - `npm test` (vitest), `npm run lint` (oxlint), `npm run build` (build nội dung + `tsc -b` + vite build). CI chạy `npm ci`, `lint`, `test`, `build`. Lưu ý: `npm test` chạy **trước** build trong CI, nên test **không được đọc `public/data`**. Test phải tự parse file nguồn như các test hiện có (ví dụ `scripts/content/speaking-ladder.test.ts`).
  - `npm run dev` để xem app (cổng 5173).

---

## 2. Phần A: Luyện nói nấc 3 phải phủ đủ mọi cấu trúc con

### 2.1 Yêu cầu của người dùng

Ở **nấc 3 (Trả lời)**, với **mỗi bài** (cả 21 đơn vị), **mỗi cấu trúc con** nằm trong tên một mẫu ngữ pháp phải có **ít nhất 2 câu hỏi** mà câu trả lời mẫu dùng đúng cấu trúc đó. Ví dụ Bài 11 có 〜たり〜たり します thì phải có câu hỏi như 「休（やす）みの 日（ひ）は 何（なに）を しますか」 với câu trả lời mẫu dùng 〜たり〜たり.

Mỗi thẻ câu hỏi phải **hiện rõ cấu trúc cần dùng** (ví dụ chip "Dùng: 〜たり〜たり します") **trước khi** người học trả lời.

### 2.2 Hiện trạng và lỗi đã tìm thấy

- Mỗi mẫu ngữ pháp có một phần `## QA <mã mẫu> · <tên>` trong `content/generated/speaking/<unit>.md`.
  - `b11.md` có 22–25 câu mỗi mẫu.
  - 20 file còn lại có đúng 4 câu mỗi mẫu.
- `scripts/content/practice.ts` chỉ lấy **5 câu đầu** (`ASK_PER_POINT = 5`, `.slice(0, ASK_PER_POINT)`). Hệ quả:
  - Bài 11 mẫu 5.3 (`前（まえ）は 〜が、今（いま）は 〜 · なかなか · だんだん · それで`) có 12 câu dùng それで trong file, nhưng **không câu nào lọt vào 5 câu đầu**, nên người học không bao giờ luyện それで.
  - Các mẫu gộp nhiều cấu trúc mà chỉ có 4 câu (ví dụ Bài 6 mẫu 5.3: どちらが · のほうが · どちらも · より) gần như chắc chắn thiếu cấu trúc.
- Gợi ý hiện có (`? …` sau câu hỏi) chỉ có ở một số câu, và thường là ý trả lời ("chạy bộ ∕ đi dạo"), **không** nêu cấu trúc.
- `src/features/SpeakPracticeTab.tsx`, hàm `AskCard`: hiện có dòng `Gợi ý: {a.q.hint}` (chỉ hiện trước khi xem đáp án).

### 2.3 Cách làm (đã chốt với người dùng, hãy làm theo)

**(1) Khai báo cấu trúc con trong nội dung.** Thêm một dòng `@cover:` vào **mọi** phần `## QA` của cả 21 file `speaking/*.md`:

```
## QA 5.3 · 前（まえ）は 〜が、今（いま）は 〜 · なかなか · だんだん · それで
@tip: …(giữ nguyên nếu có)
@cover: 前は〜が、今は〜 = 前は+今は; なかなか 〜ません = なかなか; だんだん = だんだん; それで = それで
```

- Cú pháp: các mục cách nhau bằng `;`. Mỗi mục có dạng `nhãn hiển thị = bộ so khớp`.
- Bộ so khớp:
  - `|` nghĩa là "hoặc".
  - Trong mỗi nhánh, `+` nghĩa là "phải có đủ các mảnh".
  - So khớp kiểu "chuỗi con" trên **câu trả lời mẫu** (mọi dòng `=` của câu hỏi), sau khi chuẩn hoá: bỏ cách đọc `（…）`, bỏ dấu cách, bỏ `［］`.
  - Mảnh bắt đầu bằng `?` thì so trên **câu hỏi** thay vì câu trả lời. Dùng cho cấu trúc người học nghe trong câu hỏi rồi trả lời, ví dụ `どんな N ですか = ?どんな`, `どう すれば いいですか = ?どうすれば`.
- Ví dụ quy ước, viết tương tự cho mọi mẫu:
  - `〜たり〜たり します = たり|だり`
  - `V-て います (thói quen) = ています|でいます`
  - `N1 の ほうが = ほうが`; `どちらも = どちらも`; `N1 は N2 より = より`
  - `〜とき = とき`
  - Mẫu bảng chia thể て (`b08` mẫu 5.0): `thể て = って|んで|いで|いて|して|きて|て`
- **Nhãn** viết ngắn, đúng như cách giáo trình gọi cấu trúc. Nhãn được hiển thị cho người học.
- Tách cấu trúc con dựa vào **tên mẫu** (danh sách đầy đủ ở Phụ lục 1) và nội dung lý thuyết của mẫu (`grammarPoints` trong `parseTheory`). Tên mẫu thường ngăn các cấu trúc bằng `·`, `・`, `／`, `và`, `,`. Cấu trúc nào chỉ là biến thể khẳng định/phủ định của cùng một mẫu (です／じゃ ありません) thì có thể gộp làm một mục, nếu bộ so khớp nhận được cả hai.

**(2) Parser.** Trong `scripts/content/speaking.ts`, khi gặp `kind === 'QA'`:
- Đọc `@cover` (dùng `attr(sec.body, 'cover')`) thành `cover: { label: string; match: string[][] }[]`.
  - Mảng ngoài là các nhánh `|`, mảng trong là các mảnh `+`.
  - Giữ dấu `?` ở đầu mảnh, hoặc tách thành cờ riêng, tuỳ bạn.
- Lỗi cú pháp thì ném `DslError` với thông báo tiếng Việt như các lỗi khác.
- Thêm kiểu dữ liệu vào `src/types.ts`:
  - `SpeakSet.cover?`
  - `SpeakQuestion.uses?: string[]`: các nhãn mà câu đó dùng.

**(3) Chọn câu cho nấc 3.** Trong `scripts/content/practice.ts`, thay `.slice(0, ASK_PER_POINT)` bằng thuật toán:
1. Với mỗi câu hỏi của mẫu, tính `uses` là các nhãn mà câu đó khớp.
2. Với từng nhãn, theo thứ tự trong `@cover`: lấy tối đa 2 câu khớp nhãn đó, ưu tiên câu chưa được chọn, theo thứ tự trong file.
3. Nếu tổng số câu đã chọn < 5: thêm các câu còn lại **có `uses` khác rỗng**, theo thứ tự file, cho đến đủ 5 (hoặc hết câu).
4. Giữ thứ tự xuất hiện trong file. Gắn `uses` vào từng câu trong `practice.speak.points[i].ask`.
5. Nếu mẫu không có `@cover`: giữ hành vi cũ (5 câu đầu). Nhưng test ở bước (6) sẽ bắt buộc mọi mẫu phải có `@cover`.

Key tiến độ của nấc 3 là `<unit>:luyen-noi:3:<id câu hỏi>`. Id câu hỏi không đổi, nên tiến độ cũ không bị mất.

**(4) Giao diện.** Trong `AskCard` (`src/features/SpeakPracticeTab.tsx`):
- Ngay dưới tag tên mẫu, **trước khi xem đáp án**, hiện chip nổi bật `Dùng: <nhãn>` cho mỗi nhãn trong `a.q.uses`. Hiển thị bằng component `Jp`, dùng màu theo token có sẵn (`bg-accent-soft text-accent` hoặc `bg-violet-soft text-violet`).
- Chip vẫn hiện sau khi xem đáp án.
- Gợi ý cũ (`a.q.hint`) giữ lại nhưng đổi nhãn thành `Ý trả lời:`.
- Không đổi phần khác của tab.

**(5) Viết thêm câu hỏi.** Sau khi khai báo `@cover` cho cả 21 file, cấu trúc nào có **< 2 câu** khớp thì viết thêm câu hỏi vào đúng phần `## QA` đó, đúng định dạng:

```
- câu hỏi || dịch
  ? ý trả lời gợi ý (tuỳ chọn)
  = câu trả lời mẫu dùng đúng cấu trúc || dịch
  = cách trả lời khác (tuỳ chọn) || dịch
```

Yêu cầu nội dung:
- Câu hỏi tự nhiên, kiểu cô giáo hỏi học viên, thể lịch sự. Riêng mẫu thể thân mật thì hỏi thân mật: `b11` 5.5 (友達言葉), `cd00` 5.1 (普通形), `cd08` 5.1 (意向形).
- Câu trả lời mẫu **bắt buộc** chứa cấu trúc đang luyện.
- Từ vựng và ngữ pháp **chỉ dùng những gì đã học tới bài đó**: Bài N dùng Bài 1…N; Chủ đề dùng toàn bộ Bài 1–11 và các Chủ đề trước nó. Không dùng cấu trúc của bài sau (ví dụ không dùng 〜て 形 trước Bài 7, 〜とき trước Bài 11, 〜たら trước Chủ đề 3).
- Mọi kanji có cách đọc `（…）`. Bản dịch tiếng Việt đầy đủ, tự nhiên.
- Không sửa hay xoá câu hỏi hiện có, trừ khi sai rõ ràng.

**(6) Test.** Thêm test mới, ví dụ `scripts/content/speaking-cover.test.ts`, đọc trực tiếp các file nguồn:
- Mọi mẫu ngữ pháp của mỗi đơn vị (id lấy từ `parseGenerated(content/generated/<unit>.md).grammar`) có phần `## QA` cùng mã, và phần đó có `@cover` với ≥ 1 mục.
- Mọi nhãn trong `@cover` khớp với **≥ 2** câu hỏi của phần đó.
- Mọi câu được `buildPractice` chọn cho nấc 3 có `uses` khác rỗng. Có thể gọi `buildPractice([], generated, speaking)`.
- Mọi nhãn của mỗi mẫu xuất hiện trong `uses` của ít nhất một câu được chọn.
- Test cũ `scripts/content/speaking-ladder.test.ts` phải vẫn qua.

**(7) Tài liệu.** Cập nhật mục "Luyện nói" trong `content/generated/README.md`: cú pháp `@cover`, quy tắc so khớp, cách nấc 3 chọn câu.

### 2.4 Xong Phần A khi

- Cả 21 file có `@cover` cho mọi `## QA`. Mọi nhãn có ≥ 2 câu khớp.
- Mở `#/u/b11/luyen-noi`, chọn nấc **Trả lời**: các thẻ của mẫu 5.3 có câu dùng それで, và mỗi thẻ hiện chip `Dùng: …` trước khi xem đáp án.
- Test mới và test cũ đều qua.

---

## 3. Phần B: Bài đọc (tab ⑤ Đọc hiểu) của Bài 8–11 phải dùng đủ kanji Tập 1–2

### 3.1 Yêu cầu của người dùng

Với **mỗi bài 8, 9, 10, 11**: tính trên **toàn bộ 11 bài đọc** của bài đó (các phần `## READING Rxx` trong `content/generated/b08.md`…`b11.md`), phải xuất hiện **đủ cả 79 kanji của Tập 1–2** (kanji của Bài 1–7). Mục đích là ôn lại kanji cũ khi đọc.

- **Giữ nguyên** mọi kanji chưa học (có cách đọc), **không** đổi sang hiragana. App đã có nút bật/tắt furigana, người dùng tự điều chỉnh.
- Chỉ áp dụng cho tab Đọc hiểu, tức phần `## READING`. **Không** áp dụng cho phần "Luyện đọc Kanji" trong tab Lý thuyết.

### 3.2 79 kanji Tập 1–2 (lấy từ `parseTheory(...).kanji` của từng bài)

| Bài | Kanji |
|---|---|
| b01 | 私人才学生先校大日本語誕 |
| b02 | 一二三四五六七八九十百千万円 |
| b03 | 月火水木金土曜何年時間分 |
| b04 | 東京名前国外男女区市 |
| b05 | 食飲買行見休物週毎午後 |
| b06 | 来帰会社聞読書話言寺貝力門田 |
| b07 | 肉料理野半小 |

Hãy tính lại từ code, không chép cứng bảng này vào test.

### 3.3 Hiện trạng: chữ còn thiếu trong bài đọc (đo trên văn bản đã bỏ `（…）`)

| Bài | Thiếu | Các chữ thiếu |
|---|---|---|
| b08 | 21 | 二 三 四 五 六 七 八 九 十 百 千 外 区 買 午 寺 貝 力 門 肉 半 |
| b09 | 22 | 誕 二 三 四 五 六 七 八 九 十 百 千 東 京 男 区 社 寺 貝 力 肉 野 |
| b10 | 25 | 才 誕 二 三 四 五 六 七 八 九 十 百 千 万 東 京 区 寺 貝 力 門 田 肉 料 野 |
| b11 | 24 | 才 誕 二 三 四 五 六 七 八 九 十 百 千 万 円 火 男 女 区 寺 貝 力 門 肉 |

Nguyên nhân chính: bài đọc viết số bằng chữ số Ả Rập, ví dụ `6人（ろくにん）`, `82才（はちじゅうにさい）`.

### 3.4 Cách làm

**(1) Kiểm tra tự động trước.**
- Thêm test, ví dụ `scripts/content/reading-kanji.test.ts`:
  - Đọc `content/source/tap1.md` và `tap2.md` bằng `splitVolume` + `parseTheory` để lấy tập kanji Bài 1–7.
  - Đọc `content/generated/b08.md`…`b11.md` bằng `parseGenerated`.
  - Ghép mọi `readings[].lines[].jp` của từng bài, bỏ `（…）`.
  - Khẳng định **không thiếu chữ nào**. Thông báo lỗi liệt kê các chữ thiếu.
- Thêm cảnh báo tương tự vào `scripts/build-content.ts`: đẩy vào mảng `gaps` như kiểm tra từ vựng hiện có, để `⚠` hiện khi build.

**(2) Sửa nội dung bài đọc** trong `content/generated/b08.md`…`b11.md`. Chỉ sửa dòng `> câu || dịch` trong các phần `## READING`:
- **Chữ số:** đổi một số chỗ tự nhiên sang kanji, giữ nguyên cách đọc. Ví dụ `6人（ろくにん）` → `六人（ろくにん）`, `3時（さんじ）` → `三時（さんじ）`, `200円（にひゃくえん）` → `二百円（にひゃくえん）`, `1万円（いちまんえん）` → `一万円（いちまんえん）`, `30分（さんじゅっぷん）` → `三十分（さんじゅっぷん）`. Cố gắng phủ đủ 二 三 四 五 六 七 八 九 十 百 千 万 trong mỗi bài.
- **Chữ còn lại:** sửa câu hoặc **thêm câu mới vào cuối đoạn** của một bài đọc phù hợp chủ đề, có bản dịch. Ví dụ:
  - 外（そと）, 買（か）います, 午後（ごご）, 寺（てら）／お寺（てら）, 貝（かい）, 力（ちから）, 門（もん）, 肉（にく）, 半（はん）
  - 区（く）: 新宿区（しんじゅくく）
  - 東京（とうきょう）, 男（おとこ）の 人（ひと）, 女（おんな）の 人（ひと）, 会社（かいしゃ）, 野菜（やさい）, 田中（たなか）さん／田（た）んぼ, 料理（りょうり）, 才（さい）, 誕生日（たんじょうび）, 円（えん）, 火曜日（かようび）
- Câu sửa hoặc thêm phải đúng ngữ pháp, tự nhiên, hợp nội dung đoạn văn, và chỉ dùng ngữ pháp đã học tới bài đó. Bản dịch tiếng Việt cập nhật theo.
- **Không làm hỏng câu hỏi của bài đọc.** Ngay sau mỗi bài đọc có các phần `### MC`, `### TF`, `### SHORT`, `### ORDER`. `b11` còn có `content/generated/reading-qa/b11.md` với câu trả lời mẫu trích từ bài đọc.
  - Nếu sửa một câu mà đáp án câu hỏi dựa vào, phải giữ đáp án vẫn đúng.
  - Đổi số Ả Rập ↔ kanji không làm sai nghĩa, nên đáp án dạng `6人（ろくにん）` vẫn chấp nhận được.
  - **Không** thêm thông tin mâu thuẫn với câu hỏi đúng/sai.
- Không đổi số lượng bài đọc, tiêu đề, `@gloss` (trừ khi thêm từ mới cần giải nghĩa).

### 3.5 Xong Phần B khi

- Test kanji qua cho cả b08, b09, b10, b11.
- `npx tsx scripts/build-content.ts` không có `✗` và không có cảnh báo kanji mới.
- Mở `#/u/b08/doc`…`#/u/b11/doc` thấy bài đọc hiển thị bình thường, câu hỏi vẫn đúng.

---

## 4. Ngoài phạm vi (không làm)

- Không sửa bài đọc của Bài 1–7 và Chủ đề 0–9. Không sửa phần "Luyện đọc Kanji" trong tab Lý thuyết.
- Không đổi kanji chưa học sang hiragana. Không đổi cơ chế furigana.
- Không sửa câu hỏi đọc hiểu (MC/TF/SHORT/ORDER) hay phần "Cô giáo hỏi" (`reading-qa`), trừ khi cần để giữ đáp án đúng sau khi sửa câu.
- Không động vào nấc 1, 2, 4 của Luyện nói, tab Luyện nghe, nhận dạng giọng nói hay chấm điểm phát âm.
- Không thêm tab hay mục mới vào trang bài học. Không thêm streak, điểm thưởng. Không đổi giao diện ngoài chip "Dùng: …".

## 5. Kiểm tra cuối cùng và báo cáo

1. Chạy `npx tsx scripts/build-content.ts`, `npm test`, `npm run lint`, `npm run build`. Tất cả phải qua.
2. Mở app (`npm run dev`) và tự xem:
   - `#/u/b11/luyen-noi` → nấc Trả lời.
   - `#/u/b06/luyen-noi` → nấc Trả lời (mẫu 5.3 có đủ どちらが・ほうが・どちらも・より).
   - `#/u/b08/doc`.
3. Báo cáo bằng tiếng Việt, ngắn gọn:
   - Phần A: số câu hỏi đã viết thêm theo từng đơn vị, và các mẫu đã tách thành những cấu trúc con nào nếu có điều đáng lưu ý.
   - Phần B: các chữ đã thêm vào từng bài 8–11, ví dụ vài câu đã sửa.
   - Kết quả các lệnh kiểm tra.
   - Những gì chưa làm được hoặc chưa kiểm chứng được.

---

## Phụ lục 1. Mẫu ngữ pháp của từng đơn vị và số câu hỏi `## QA` hiện có

Mã mẫu (`5.1`, `5.2`, …) trùng với mã trong `## QA <mã>`. Hãy tách cấu trúc con từ tên mẫu.

**b01**

- 5.1 | Câu danh từ N1 は N2 です／じゃ ありません／ですか | QA trong file: 4
- 5.2 | Trợ từ の và お国は どちらですか | QA trong file: 4
- 5.3 | Trợ từ も và 同じですね | QA trong file: 4
- 5.4 | Trợ từ と và 趣味は N です | QA trong file: 4
- 5.5 | Câu hỏi có từ để hỏi và câu hỏi rút gọn N は？ | QA trong file: 4
- 5.6 | Tuổi và ngày tháng sinh nhật | QA trong file: 4

**b02**

- 5.1 | Chỉ từ vị trí ここ・そこ・あそこ・どこ / こちら・そちら・あちら・どちら | QA trong file: 4
- 5.2 | これ・それ・あれ・どれ và この・その・あの・どの + N | QA trong file: 4
- 5.3 | 何の・どこの・誰の và「A」は 〜語で 何ですか | QA trong file: 4
- 5.4 | Hỏi và nói giá tiền N は いくらですか | QA trong file: 4
- 5.5 | Mua hàng và gọi món: N を（〜つ）ください · N に します | QA trong file: 4

**b03**

- 5.1 | Giờ giấc, thứ ngày: 今 〜時〜分です · N は 〜から 〜までです | QA trong file: 4
- 5.2 | Động từ V-ます / V-ません | QA trong file: 4
- 5.3 | Trợ từ thời điểm に và 〜から〜まで V-ます | QA trong file: 4
- 5.4 | Trợ từ hướng へ và nơi hành động で | QA trong file: 4
- 5.5 | Trợ từ を, liệt kê N1 や N2 và と (cùng ai) | QA trong file: 4
- 5.6 | Phủ định hoàn toàn 何も V-ません · どこも V-ません | QA trong file: 4

**b04**

- 5.1 | Vị trí địa lý: N1 は N2 の 北／南／東／西／真ん中 です | QA trong file: 4
- 5.2 | Phương tiện và thời gian: ［Phương tiện］で 行きます · A から B まで 〜時間くらいです | QA trong file: 4
- 5.3 | Câu tính từ い／な, phó từ とても・少し・あまり và どうですか | QA trong file: 4
- 5.4 | Tính từ bổ nghĩa cho danh từ và どんな N ですか | QA trong file: 4
- 5.5 | ［Địa điểm］に N が あります và N が 多いです／少ないです | QA trong file: 4
- 5.6 | そして, 〜が、〜 và trợ từ ね | QA trong file: 4

**b05**

- 5.1 | Động từ quá khứ V-ました / V-ませんでした, どこかへ, それから | QA trong file: 4
- 5.2 | Tính từ và danh từ quá khứ 〜かったです・〜でした và どうでしたか | QA trong file: 4
- 5.3 | Lý do S1 から、S2 · どうして 〜か | QA trong file: 4
- 5.4 | N が 好きです／嫌いです · N が ほしいです | QA trong file: 4
- 5.5 | Mong muốn hành động V(bỏ ます)たいです／たくないです | QA trong file: 4
- 5.6 | Mục đích di chuyển ［Nơi］へ ［V(bỏ ます)／N］に 行きます | QA trong file: 4

**b06**

- 5.1 | Rủ rê V-ませんか · V-ましょう · 〜は ちょっと… | QA trong file: 4
- 5.2 | ［Nơi］で ［Sự kiện］が あります, 用事が あります, vị trí của lượng từ | QA trong file: 4
- 5.3 | So sánh N1 と N2 と どちらが 〜 · N1 のほうが · どちらも · N1 は N2 より | QA trong file: 4
- 5.4 | So sánh nhất ［Phạm vi］で N が いちばん Adj です | QA trong file: 4
- 5.5 | もう V-ましたか → はい、もう V-ました ／ いいえ、まだです | QA trong file: 4
- 5.6 | Hẹn giờ và nơi gặp: 何時に どこで 会いましょうか · trợ từ ね・よ | QA trong file: 4

**b07**

- 5.1 | Vị trí chi tiết: N1 の ［Vị trí］に N2 が います／あります | QA trong file: 4
- 5.2 | 〜に 入れます · 〜から 出します · dụng cụ で · V-方 | QA trong file: 4
- 5.3 | Yêu cầu V-て ください và trình tự V1-てから、V2 | QA trong file: 4
- 5.4 | Xin phép V-ても いいですか và cách đáp | QA trong file: 4
- 5.5 | Đang diễn ra V-て います | QA trong file: 4
- 5.6 | Đề nghị giúp V-ましょうか · まだ V-ますか ／ もう V-ません | QA trong file: 4

**b08**

- 5.0 | Bảng chia thể て | QA trong file: 4
- 5.1 | 〜に 住んで います | QA trong file: 4
- 5.2 | 〜で 働いて います | QA trong file: 4
- 5.3 | N1 は N2 が A です | QA trong file: 4
- 5.4 | A1くて／で、A2 です (nối tính từ) | QA trong file: 4
- 5.5 | Đối lập 〜は KĐ が、〜は PĐ | QA trong file: 4
- 5.6 | Cho nhận あげます・もらいます・くれます | QA trong file: 4
- 5.7 | N が［số lượng］います | QA trong file: 4
- 5.8 | ［người］と［tổng số］で V | QA trong file: 4

**b09**

- 5.1 | 趣味は V（辞書形）ことです | QA trong file: 4
- 5.2 | N が できます・V（辞書形）ことが できます | QA trong file: 4
- 5.3 | ［Khoảng thời gian］に［Số lần / Số lượng］・Phó từ tần suất | QA trong file: 4
- 5.4 | どうやって V-ますか・V1-て、V2-て、V3 | QA trong file: 4
- 5.5 | でも・だけ | QA trong file: 4

**b10**

- 5.1 | V-ないで ください・V-ても いいですか | QA trong file: 4
- 5.2 | N が 見えます／聞こえます・N が V-て います | QA trong file: 4
- 5.3 | ［Đường / Cầu / Góc］を 歩きます・渡ります・曲がります | QA trong file: 4
- 5.4 | まだ V-て いません・V-て 来ます | QA trong file: 4
- 5.5 | ［Địa điểm］で V-ることが できます・N は（nhấn mạnh） | QA trong file: 4
- 5.6 | 〜く／に なります | QA trong file: 4

**b11**

- 5.1 | V-て います（Thói quen hiện tại） | QA trong file: 25
- 5.2 | V1-たり、V2-たり します | QA trong file: 22
- 5.3 | 前は 〜が、今は 〜・なかなか・だんだん・それで | QA trong file: 22
- 5.4 | 〜とき・〜とき、どう しますか | QA trong file: 25
- 5.5 | 友達言葉／普通形 | QA trong file: 25

**cd00**

- 5.1 | Thể thông thường (普通形) ・ 知って います／知りません | QA trong file: 4
- 5.2 | V-なければ なりません・V-なくても いいです | QA trong file: 4
- 5.3 | V-る／N の 前に・V-た／N の 後で | QA trong file: 4
- 5.4 | ［普通形］＋ でしょう | QA trong file: 4
- 5.5 | ［普通形］＋ と 思います | QA trong file: 4
- 5.6 | 〜と 言います・〜と 書いて あります | QA trong file: 4
- 5.7 | ［Mệnh đề 普通形］＋ Danh từ | QA trong file: 4
- 5.8 | So sánh hai hành động（V1-るのと V2-るのと） | QA trong file: 4

**cd01**

- 5.1 | Kính ngữ（尊敬語） | QA trong file: 4
- 5.2 | Khiêm nhường ngữ（謙譲語）・Lịch sự ngữ（丁寧語） | QA trong file: 4
- 5.3 | V（使役形）-て ください・-て いただけませんか | QA trong file: 4
- 5.4 | ［普通形（な-Adj / N ＋ な）］＋ ので | QA trong file: 4
- 5.5 | ［普通形（な-Adj / N ＋ な）］＋ んです・んですが | QA trong file: 4
- 5.6 | V-て いただけませんか・V-て くださいませんか | QA trong file: 4
- 5.7 | ［普通形］か どうか・［Từ để hỏi ＋ 普通形］か | QA trong file: 4
- 5.8 | 〜と 言って いました・V-るように／V-ないように 言います | QA trong file: 4

**cd02**

- 5.1 | Động từ khả năng（可能形） | QA trong file: 4
- 5.2 | Kính ngữ của nhân viên cửa hàng（店員の敬語） | QA trong file: 4
- 5.3 | 〜でしょうか（hỏi lịch sự） | QA trong file: 4
- 5.4 | 〜すぎます・V-やすいです／にくいです | QA trong file: 4
- 5.5 | V-て みます | QA trong file: 4
- 5.6 | N なら、〜・［普通形］し、［普通形］し | QA trong file: 4

**cd03**

- 5.1 | V1（辞書形／ない形）と、V2 | QA trong file: 4
- 5.2 | 〜ば（仮定形）・どう すれば いいですか | QA trong file: 4
- 5.3 | 〜たら（V-たら / Adj-かったら / N だったら） | QA trong file: 4
- 5.4 | 〜ても・［Từ để hỏi］＋ V-ても | QA trong file: 4
- 5.5 | V（辞書形）／V-ている／V-た ＋ ところです | QA trong file: 4
- 5.6 | V-た ＋ ばかりです | QA trong file: 4
- 5.7 | ［普通形（な-Adj ＋ な ／ N ＋ の）］＋ はずです | QA trong file: 4

**cd04**

- 5.1 | N が V（自動詞）-て います vs N が V（他動詞）-て あります | QA trong file: 4
- 5.2 | V-て おきます（〜とく／〜どく） | QA trong file: 4
- 5.3 | V-て しまいます（〜ちゃう／〜じゃう） | QA trong file: 4
- 5.4 | 命令形・禁止形（V-るな）・V（bỏ ます）＋ なさい | QA trong file: 4
- 5.5 | V（辞書形）／V-ない ＋ ことに します | QA trong file: 4
- 5.6 | V（辞書形）／V-ない ＋ ことに なります | QA trong file: 4
- 5.7 | V（可能形／自動詞／ない形）＋ ように、〜 | QA trong file: 4
- 5.8 | N は …に 分けられて います | QA trong file: 4

**cd05**

- 5.1 | V（bỏ ます）／い-Adj（bỏ い）／な-Adj ＋ そうです（vẻ bề ngoài） | QA trong file: 4
- 5.2 | ［普通形］＋ そうです（truyền đạt thông tin） | QA trong file: 4
- 5.3 | ［普通形（な-Adj ＋ な ／ N ＋ の）］＋ ようです ／ みたいです | QA trong file: 4
- 5.4 | らしいです・かも しれません | QA trong file: 4
- 5.5 | V-た ／ V-ない ＋ ほうが いいです | QA trong file: 4
- 5.6 | V-る／V-ない ように します・ように なります | QA trong file: 4

**cd06**

- 5.1 | V-た ことが あります ／ ありません | QA trong file: 4
- 5.2 | V1（bỏ ます）＋ ながら、V2 | QA trong file: 4
- 5.3 | Thể sai khiến（使役形） | QA trong file: 4
- 5.4 | Thể sai khiến bị động（使役受身形） | QA trong file: 4
- 5.5 | V-た／い-Adj／な-Adj ＋ な／N の ＋ まま | QA trong file: 4
- 5.6 | V1-ないで、V2 ／ V1-ずに、V2 | QA trong file: 4
- 5.7 | V-て ばかり います ／ N ばかり V-ます | QA trong file: 4

**cd07**

- 5.1 | Bị động trực tiếp：［Người nhận］は［Người làm］に V-れます | QA trong file: 4
- 5.2 | Bị động chịu thiệt hại（迷惑の受身） | QA trong file: 4
- 5.3 | ［普通形（な-Adj / N ＋ な）］＋ のに | QA trong file: 4
- 5.4 | Danh từ hóa bằng の・phân biệt の / こと | QA trong file: 4
- 5.5 | 〜て／〜で、（感情）— nguyên nhân cảm xúc | QA trong file: 4
- 5.6 | 〜かな・〜ても かまいません・V-たがって います | QA trong file: 4

**cd08**

- 5.1 | Thể ý chí（意向形）V-(よ)う | QA trong file: 4
- 5.2 | Dự định：V（意向形）と 思います／と 思って います | QA trong file: 4
- 5.3 | V（辞書形）／ V-ない ＋ つもりです | QA trong file: 4
- 5.4 | V（辞書形）／ N の ＋ 予定です | QA trong file: 4
- 5.5 | V（辞書形）／ N の ＋ ために | QA trong file: 4
- 5.6 | V（辞書形）のに／N に ＋ 使う・いい・便利・必要・かかる | QA trong file: 4
- 5.7 | 〜ば 〜ほど（càng ~ càng ~） | QA trong file: 4
- 5.8 | N ほど 〜ない ／ 〜くらい・ぐらい（mức độ） | QA trong file: 4

**cd09**

- 5.1 | V-て あげます・V-て やります・V-て さしあげます | QA trong file: 4
- 5.2 | V-て くれます・V-て くださいます | QA trong file: 4
- 5.3 | V-て もらいます・V-て いただきます | QA trong file: 4
- 5.4 | Cho – nhận đồ vật kính ngữ：さしあげます・くださいます・いただきます | QA trong file: 4
- 5.5 | N に V-て ほしいです／V-ないで ほしいです | QA trong file: 4
- 5.6 | 〜と いう N ／ 〜と いうのは …の ことです | QA trong file: 4
- 5.7 | Danh từ hóa tính từ：〜さ・〜み | QA trong file: 4
