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
