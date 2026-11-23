# TÀI LIỆU ĐẶC TẢ NGHIỆP VỤ (PROJECT BRIEF)
## Dự án: Nihon-App — Nền Tảng Tiếng Nhật Thực Chiến & Học Thuật Du Học Sinh (N5+ -> N4+)

- **Mã dự án:** NIHON-APP-2026
- **Giai đoạn:** Ca 1 (BA / PM)
- **Ngày lập:** 23/11/2026
- **Người thực hiện:** Antigravity (BA/PM Role)
- **Trạng thái:** Chờ User duyệt (Chốt chặn 1)

---

### 1. Bối cảnh & Vấn đề Cần Giải Quyết (Problem Statement)
- **Thực trạng người học:** Người học đã hoàn thành kiến thức nền tảng tương đương Bài 1 đến Bài 11 (Tập 1 - 3 của giáo trình Dekiru Nihongo / Minna no Nihongo), đang cần học nốt phần còn lại của N5 và bứt phá lên N4+.
- **Nỗi đau (Pain Points):**
  1. *Giáo trình truyền thống quá cứng nhắc:* Hầu như chỉ dạy thể lịch sự `〜ます / 〜です` và cấu trúc sách vở. Khi sang Nhật hoặc giao tiếp thực tế với bạn bè, sinh viên bị "sốc ngôn ngữ" vì không hiểu các khẩu ngữ đời thường như `そっか (sokka)`, `そうなんだ (sonanda)`, `まじで (majide)`, cách ngắt câu `〜じゃん`, cách nói tắt thân mật (Tameguchi).
  2. *Học bồi thiếu gốc rễ học thuật:* Nếu chỉ học tiếng lóng bồi thì không có gốc ngữ pháp, thiếu Kanji, không thể đọc hiểu văn bản, không thể thi đỗ JLPT N5/N4 và không biết cách nói kính ngữ lịch sự khi gặp thầy cô, cơ quan hành chính hay đi làm thêm (Baito).
  3. *Giao diện & Trải nghiệm chưa tối ưu:* Hệ thống hiện tại có nhiều mục nhưng chưa có luồng học tập trực quan, thiếu tính gắn kết giữa Từ vựng - Ngữ pháp - Kanji trong một ngữ cảnh hội thoại cụ thể.

---

### 2. Tầm Nhìn & Mục Tiêu Sản Phẩm (Product Vision & Goals)
Xây dựng một nền tảng học tập tiếng Nhật du học sinh hiện đại, thực chiến và chuẩn học thuật:
1. **Thực chiến (Practical Daily Life):** Tái hiện sống động môi trường giao tiếp của du học sinh Nhật Bản (Học đường, Konbini, Mua sắm, Tàu điện, Nhà trọ...).
2. **Gắn kết ngữ cảnh (Contextual Mastery):** Mỗi bài học được neo chặt vào các đoạn **Hội thoại dài (Long Dialogue)**, nơi từ vựng mới, ngữ pháp N5/N4 và Kanji được phối hợp nhuần nhuyễn.
3. **Song song 2 phong cách (Dual-Style Fluency):** Cung cấp đối chiếu trực quan giữa **Khẩu ngữ thân mật (Casual / Tameguchi)** và **Lịch sự chuẩn mực (Polite / Desu-Masu / Keigo)**.
4. **Trực quan & Hiện đại (Modern UX):** Giao diện sạch sẽ, logic, hỗ trợ tương tác tức thì (bấm tra từ popup, bật/tắt furigana, âm thanh phát âm từng câu).

---

### 3. Đối Tượng Người Dùng (Target Audience)
- Du học sinh, thực tập sinh, kỹ sư chuẩn bị sang Nhật hoặc mới sang Nhật.
- Người đã có nền tảng N5 cơ bản (Bài 1 - 11) muốn hoàn thành nốt N5 và bứt phá lên N4+ với khả năng giao tiếp tự nhiên.

---

### 4. Phạm Vi Chức Năng (Functional Scope)

#### 4.1. Cấu trúc Lộ trình Modules Thực Chiến (Information Architecture)
Lấy hệ thống 14 Modules theo chủ đề đời sống làm xương sống, tích hợp toàn bộ kiến thức N5 còn lại và N4+:
- **Đợt 1 (Ưu tiên cốt lõi theo yêu cầu của User):**
  - **Module 01: Trường học & Kết bạn mới (Giao tiếp học đường)** — Làm quen bạn cùng lớp, mượn đồ dùng, hỏi thời khóa biểu, rủ rê sau giờ học, xưng hô thân mật vs với giáo viên.
  - **Module 02: Chiến thần Konbini & Đồ ăn nhanh** — Các câu cửa miệng khi thanh toán, hâm nóng cơm bento, xin túi nilon, thanh toán hóa đơn tiện ích, khẩu ngữ khi đi cùng bạn bè.
  - **Module 03: Siêu thị & Mua sắm đời sống du học** — Hỏi vị trí mặt hàng, cân đo, đồ giảm giá (nửa giá 半額), đổi trả hàng, hỏi cách sử dụng.
- **Đợt 2 (Kế thừa và mở rộng N5+ -> N4):**
  - Module 04: Nhà trọ & Sinh hoạt tự lập
  - Module 05 - 14: Hệ thống chuyên đề CD00 - CD09 (Tàu điện, Bệnh viện, Baito & Phỏng vấn, Bạn bè & Cảm xúc, Kế hoạch tương lai, Kính ngữ & Nhờ vả).

#### 4.2. Tính Năng Hội Thoại Dài Chuyên Sâu (Long Dialogue Engine)
Mỗi module sở hữu 1-2 kịch bản hội thoại dài từ 15 - 30 lượt thoại thực tế:
- **Hiển thị kịch bản dạng tin nhắn/phân cảnh:** Phân vai rõ ràng (ảnh đại diện, tên, quan hệ nhân vật: Bạn thân vs Nhân viên quán vs Giáo viên).
- **Bộ công cụ chuyển đổi tương tác (Action Toggles):**
  - *Toggle Furigana:* Bật/tắt phiên âm chữ Hán để tự thử thách đọc Kanji.
  - *Toggle Dịch Việt:* Ẩn/hiện nghĩa tiếng Việt của từng câu thoại.
  - *Toggle Nuance / Phân tích khẩu ngữ:* Hiển thị thẻ chú thích riêng cho các cụm từ đời sống (`そっか`, `そうなんだ`, `まじで`, `〜じゃん`, `〜ちゃった`, v.v.).
- **Âm thanh giọng đọc câu thoại:** Nút phát âm (Web Speech Synthesis / audio) cho từng câu thoại riêng biệt.
- **Đối chiếu phong cách (Dual Tone):** Xem câu thoại ở dạng thân mật (Tameguchi) và bấm nút xem "Nếu nói với người lạ / bề trên sẽ nói thế nào?".

#### 4.3. Tương Tác Tra Cứu Tức Thì (In-Dialogue Quick Lookup Popup)
- Người học có thể chạm / click trực tiếp vào bất kỳ từ vựng hoặc Kanji nào trong câu thoại để mở Bottom Sheet / Popup:
  - Xem cách đọc Furigana, âm Hán Việt.
  - Nghĩa chi tiết, từ loại, ví dụ đi kèm.
  - Nút "Thêm vào sổ tay cần nhớ" / "Luyện tập".

#### 4.4. Hệ Thống Ôn Tập & Đánh Giá (Practice & Retention)
- **Flashcard SRS (Spaced Repetition):** Ôn tập từ vựng, kanji và các mẫu câu phản xạ của bài học.
- **Quiz phản xạ tình huống (Situational Mini-Quiz):** Đặt người học vào tình huống thực tế của bài (VD: Đang ở quầy thanh toán Konbini, nhân viên hỏi túi nilon thì phản xạ chọn câu nào?).

---

### 5. Phạm Vi Ngoài Dự Án Đợt Này (Out of Scope / Non-goals)
- Không tích hợp Chatbot AI tự do gây ảo giác ngôn ngữ sai lệch; toàn bộ kịch bản được biên soạn chuẩn xác và kiểm định học thuật.
- Không xây dựng tính năng gọi video / phòng voice chat nhiều người.

---

### 6. Tiêu Chuẩn Nghiệm Thu Tổng Thể (Acceptance Criteria)
1. **AC-01:** Hoàn thiện dữ liệu đầy đủ cho 3 Modules ưu tiên (01, 02, 03) với kịch bản hội thoại dài sống động, có đầy đủ từ vựng đời thường, kanji và ngữ pháp.
2. **AC-02:** Giao diện xem hội thoại hỗ trợ đầy đủ các toggle: Furigana, Dịch nghĩa, Phân tích Khẩu ngữ Nuance và âm thanh.
3. **AC-03:** Click/tap vào từ trong hội thoại hiển thị popup thông tin từ vựng/kanji chính xác.
4. **AC-04:** Giao diện trang chủ và trang module mới được cấu trúc theo Design System hiện đại, trực quan, hỗ trợ responsive hoàn hảo trên Mobile và Desktop.
5. **AC-05:** Toàn bộ test suites, linting và build chạy thành công 100% không phát sinh lỗi.
