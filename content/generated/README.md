# Định dạng nội dung luyện tập (content/generated)

Mỗi đơn vị có 1 file: `b01.md` … `b11.md`, `cd00.md` … `cd09.md`.
Kaiwa theo chủ đề nằm trong `kaiwa/cd00.md` … `kaiwa/cd09.md`.
Sửa file → web tự cập nhật (khi chạy `npm run dev`).

Cách đọc chữ Hán viết như giáo trình: `漢字（かんじ）`.

## Dòng bài tập

```
- CÂU [{lựa chọn}] [=> đáp án｜đáp án khác] [|| gợi ý tiếng Việt] [>> giải thích]
```

| Loại (`### LOẠI · MÃ · Tên`) | Cách viết câu |
|---|---|
| `FILL` điền khuyết | Chỗ trống ghi trong `［đáp án｜cách khác］`: `私（わたし）は 学生（がくせい）［です］。 \|\| Tôi là sinh viên.` |
| `MC` trắc nghiệm | Lựa chọn trong `{}`; đáp án đúng có `*`: `私（　）学生です。 {*は｜を｜に｜で}` |
| `ORDER` sắp xếp câu | Các mảnh theo đúng thứ tự, cách nhau bằng ` / ` |
| `FIX` sửa lỗi sai | `câu sai => câu đúng` |
| `TRANS` dịch / viết | `câu tiếng Việt hoặc gợi ý => câu tiếng Nhật` |
| `STAR` câu ★ | 4 mảnh `〔…〕` liền nhau theo đúng thứ tự, cuối câu `★N` (N = vị trí ngôi sao 1–4) |
| `TF` đúng / sai | `câu nhận định => đúng` hoặc `=> sai` |
| `SHORT` trả lời ngắn | `câu hỏi => đáp án` |

## Các phần trong file đơn vị

```
## VOCAB                      (### FILL · V4 · …)
## KANJI                      (### MC · K3 · …, ### TRANS · K4 · …)
## GRAMMAR 5.1 · Tên mẫu      (### FILL · G1 · …, ### FILL · G2, ### ORDER · G3, ### MC · G4, ### FIX · G5, ### TRANS · G6, ### STAR · G7)
## WRITING                    (### TRANS · W1 · …)
## READING R01 · Thể loại · Tiêu đề tiếng Nhật · Tiêu đề tiếng Việt
> câu tiếng Nhật || bản dịch
@gloss: từ（よみ）= nghĩa; từ = nghĩa
### MC / ### TF / ### SHORT / ### ORDER
## LISTENING L01 · loại · Tiêu đề
@intro: tình huống
A: câu || bản dịch
### MC …
## DIALOGUE D01 · Tiêu đề
@scene: bối cảnh
@roles: A=Nhân viên; B=Bạn
@vocab: 語（ご）= nghĩa; …          (tuỳ chọn — từ mới ngoài Bài 1–11, hiện trước khi nghe)
@grammar: 〜ても いいですか = xin phép; …   (tuỳ chọn — cấu trúc dùng trong bài)
@more: gợi ý tìm hiểu thêm 1; gợi ý 2   (tuỳ chọn — hiện sau hội thoại)
A: câu || dịch
B: câu có ［cụm che］ || dịch >> giải thích cụm ~~ cách nói khác｜cách khác ## nhiệm vụ nói (tiếng Việt)
```

Loại bài nghe: `task` (nhiệm vụ), `point` (điểm chính), `response` (phản hồi nhanh), `expression` (chọn câu nói),
`dictation` (chính tả — mỗi câu là 1 câu chép), `cloze` (điền khuyết — chỗ trống ghi `［…］` trong câu), `numbers` (số/giờ/giá), `tf` (đúng/sai).

## Sổ tay động từ (`verbs/*.md`)

Mỗi động từ một mục; web chèn phần giải thích ngay dưới dòng động từ trong bảng từ vựng (tab Lý thuyết) ở mọi bài có động từ đó.

```
## 通（かよ）う · 通（かよ）います
@type: Nhóm I · Tự động từ
@particle: に — [Nơi] に 通う; で — [Phương tiện] で 通う; KHÔNG dùng を
@meaning: nghĩa đầy đủ, khi nào dùng
@pattern: mẫu 1; mẫu 2
@nuance: sắc thái, lưu ý (tuỳ chọn)
@compare: phân biệt với từ dễ nhầm
@mistake: ✗ câu sai → ✓ câu đúng
@alias: cách viết khác trong bảng từ vựng (tuỳ chọn), ví dụ 試験に合格します
- ví dụ 1 || dịch
- ví dụ 2 || dịch
- ví dụ 3 || dịch
```

## Luyện nói (`speaking/<bài>.md`)

Mỗi bài có một file. Hai phần dùng cho tab **③ Luyện nói** (4 nấc):

- Nấc 1–2 (nhại lại, tự nói từ tiếng Việt) lấy tự động từ các câu `TRANS` của phần ngữ pháp, không cần viết thêm.
- Nấc 3 (trả lời) lấy 5 câu đầu của mỗi `## QA <mã mẫu>`.
- Nấc 4 (kéo dài câu) lấy các `## BUILD <mã mẫu>` và đúng 2 `## BUILD MIX` (ghép nhiều mẫu của bài).

Tab **② Luyện nghe** (3 nấc) tự lấy từ vựng của bài, các câu có chứa từ của bài (từ bài đọc, bài nghe, hội thoại, câu dịch) và 6 bài nghe có nhiều từ của bài nhất.
Các phần còn lại (`REFLEX`, `CHAIN`, `DIALOGUE`, `TALK`) hiện ở **Bài tập thêm → Phản xạ nói**.

```
## BUILD 5.1 · Tên chuỗi              (mỗi bước dài hơn bước trước đúng một cụm; ≥ 3 bước)
- câu ngắn nhất || dịch
- câu dài hơn || dịch >> cụm vừa thêm
- câu dài hơn nữa || dịch >> cụm vừa thêm

## BUILD MIX · Tên chuỗi             (nối nhiều mẫu ngữ pháp của bài thành câu / đoạn dài)
```

```
## REFLEX · Hỏi đơn                 (Phản xạ hỏi đáp — chỉ một phần, ~30 câu; app đọc câu hỏi, ẩn chữ)
- câu hỏi || dịch
  ? gợi ý ý trả lời + mẫu cần dùng
  = câu trả lời mẫu || dịch          (1–2 dòng)

## CHAIN C01 · Tên đoạn hội thoại    (Phản xạ hội thoại — 5–6 đoạn, mỗi đoạn 4–6 câu hỏi nối tiếp, hỏi theo thứ tự)
@scene: bối cảnh
- câu hỏi || dịch
  ? gợi ý
  = câu trả lời mẫu || dịch

## QA 5.1 · Tên mẫu ngữ pháp
@tip: nhắc cách trả lời (tuỳ chọn)
- câu hỏi || dịch
  ? gợi ý ý trả lời (tuỳ chọn)
  = câu trả lời mẫu 1 || dịch
  = câu trả lời mẫu 2 || dịch        (ít nhất 1 dòng "=")
  + câu hỏi nối tiếp || dịch         (tuỳ chọn)

## DIALOGUE D01 · Tên hội thoại
@scene: bối cảnh
@roles: A=Tên vai A; B=Bạn
A[名前]: câu || dịch
B[あなた]: ＊câu nói theo ý bạn || dịch     (＊ ở đầu = lượt tự do, câu chỉ là mẫu)

## TALK T1 · Tên đề nói tự do
@prompt: yêu cầu của đề
@must: mẫu bắt buộc 1; mẫu 2
> câu của bài nói mẫu || dịch
```

## Câu hỏi tự luận cho bài đọc (`reading-qa/<bài>.md`)

Mỗi bài đọc có **đúng 12 câu** (web ra 4 câu một lần, có nút đổi câu). Câu hỏi viết ở thể lịch sự như cô giáo hỏi;
câu trả lời mẫu là câu đầy đủ lấy ý từ bài đọc. Bạn trả lời bằng miệng (đọc câu hỏi hoặc nghe câu hỏi) rồi mới xem đáp án.

```
## R01
- câu hỏi || dịch
  = câu trả lời mẫu || dịch
  = cách trả lời khác || dịch   (tuỳ chọn)
```
