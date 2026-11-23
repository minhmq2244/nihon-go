# KẾ HOẠCH TRIỂN KHAI CHI TIẾT (IMPLEMENTATION PLAN)
## Dự án: Tái Cấu Trúc Nihon-App — Tiếng Nhật Thực Chiến & Học Thuật Du Học Sinh

> **Kỷ luật dự án:** Tuân thủ quy trình 4 ca phòng ban (BA/PM -> UI/UX -> Dev -> QA/QC).
> Chốt chặn nghiêm ngặt: Tuyệt đối không viết code chức năng trước khi có chữ **"DUYỆT"** từ User tại Chốt 1 và Chốt 2.

- **Mục tiêu:** Xây dựng lại giao diện hiện đại, logic và triển khai trải nghiệm học tập thực chiến qua Hội thoại dài (Long Dialogue) với 3 chủ đề ưu tiên (Trường học, Konbini, Mua sắm du học), tích hợp N5 còn lại & N4+.
- **Tài liệu tham chiếu:** `docs/brief.md`
- **Công nghệ chính:** React 19, TypeScript, Tailwind CSS, Vite, Lucide React, Zustand, Wanakana, Web Speech API.

---

## 1. Bản Đồ 4 Ca Làm Việc

```
[ Ca 1: BA / PM ]  -->  [ CHỐT 1: DUYỆT brief.md & plan.md ]
        |
[ Ca 2: UI / UX ]  -->  [ CHỐT 2: DUYỆT design-system.md ]
        |
[ Ca 3: Dev ]      -->  [ Hiện thực hóa mã nguồn các Task ]
        |
[ Ca 4: QA / QC ]  -->  [ Kiểm thử, Báo cáo & Bàn giao ]
```

---

## 2. Chi Tiết Các Hạng Mục Triển Khai

### CA 1: BA / PM (Phân Tích & Kế Hoạch) — [ĐANG XỬ LÝ / CHỜ DUYỆT]
- [x] Phỏng vấn làm rõ yêu cầu nghiệp vụ qua 6 câu hỏi cốt lõi.
- [x] Hoàn thiện tài liệu đặc tả nghiệp vụ `docs/brief.md`.
- [x] Lập kế hoạch triển khai chi tiết `docs/plan.md`.
- [x] Cập nhật dashboard 3D `docs/status.json` sang trạng thái `waiting_approval`.
- **Chốt chặn 1:** Yêu cầu User kiểm tra tài liệu và gửi chữ **"DUYỆT"** để chuyển sang Ca 2.

---

### CA 2: UI / UX (Thiết Kế Hệ Thống & Trải Nghiệm Giao Diện)
*Điều kiện bắt đầu: Đã có chữ "DUYỆT" Chốt 1.*
- [ ] **Task 2.1:** Thiết kế Design System & Theme Tokens (`docs/design-system.md`):
  - Bảng màu Modern Clean (Primary Ink, Modern Indigo/Emerald, Warm Sand Background, Nuance Amber).
  - Hệ thống Typography (Inter/Plus Jakarta Sans cho Latin + Noto Sans JP cho Furigana/Kanji).
  - Quy chuẩn Spacing, Border Radius, Shadow và Glassmorphism nhẹ.
- [ ] **Task 2.2:** Thiết kế cấu trúc Component & Giao diện trang:
  - Wireframe trang Chủ (`Home.tsx`): Lộ trình học Modules trực quan, thanh tiến độ, streak, mục tiêu ngày.
  - Wireframe Component Hội thoại dài (`LongDialogue`): Khung chat đa vai, bảng điều khiển Toggles (Furigana, Dịch, Nuance), thẻ phân tích khẩu ngữ, popup tra từ nhanh.
  - Wireframe Ôn tập: Giao diện Flashcard và Trắc nghiệm phản xạ tình huống.
- **Chốt chặn 2:** Hoàn thiện `docs/design-system.md`, cập nhật `docs/status.json` và yêu cầu User gửi chữ **"DUYỆT"** trước khi Dev chạm vào code.

---

### CA 3: DEV (Hiện Thực Hóa Mã Nguồn & Tính Năng)
*Điều kiện bắt đầu: Đã có chữ "DUYỆT" Chốt 2.*

#### Giai đoạn 3.1: Dữ Liệu & Types (Core Data Layer)
- [ ] **Task 3.1.1:** Cập nhật Types trong `src/types.ts`:
  - Mở rộng kiểu dữ liệu `DialogueMessage`: Thêm trường `role`, `characterName`, `avatar`, `casualText`, `politeText`, `audioText`, `nuanceNotes` (giải thích sokka, sonanda, v.v.), `keyVocabIds`, `keyKanjiChars`.
- [ ] **Task 3.1.2:** Làm giàu nội dung dữ liệu cho 3 Module ưu tiên trong `src/lib/modulesData.ts`:
  - **Module 01 (Trường học & Kết bạn):** Kịch bản hội thoại dài 20+ câu giữa Du học sinh và bạn cùng lớp (Ken & Yui), phân tích chi tiết khẩu ngữ kết bạn, ngữ pháp N5/N4.
  - **Module 02 (Chiến thần Konbini):** Kịch bản hội thoại thực tế tại cửa hàng tiện lợi 7-Eleven/Lawson: thanh toán, hâm nóng cơm, mua đồ ăn nóng quầy Oden/Karaage, thẻ tích điểm.
  - **Module 03 (Siêu thị & Mua sắm đời sống):** Kịch bản đi siêu thị mua sắm thực phẩm du học sinh: hỏi quầy gia vị, tem giảm giá nửa giá (半額), hỏi thanh toán tự động.

#### Giai đoạn 3.2: Thành Phần Giao Diện Mới (Components Layer)
- [ ] **Task 3.2.1:** Xây dựng Component `LongDialogueViewer.tsx`:
  - Hàng nút Toggles: Bật/Tắt Furigana, Bật/Tắt Bản Dịch, Bật/Tắt Khẩu Ngữ & Nuance.
  - Chuyển đổi qua lại giữa Văn Thân Mật (Tameguchi) và Văn Lịch Sự (Polite).
  - Tích hợp Speech Synthesis phát âm từng câu thoại mượt mà.
- [ ] **Task 3.2.2:** Xây dựng Component `WordQuickLookupModal.tsx`:
  - Popup hiển thị khi người học click vào bất kỳ từ vựng / kanji nào trong câu thoại.
  - Hiển thị âm Hán Việt, cách đọc, nghĩa và nút nghe phát âm.
- [ ] **Task 3.2.3:** Tái cấu trúc giao diện `src/pages/ModuleDetailPage.tsx`:
  - Bố cục 4 tab hiện đại, tinh gọn:
    1. 💬 **Hội thoại thực chiến (Long Dialogue):** Trọng tâm chính.
    2. 📚 **Từ vựng & Khẩu ngữ:** Bảng từ vựng kết hợp tiếng lóng / thán từ đời thường.
    3. ⚖️ **Ngữ pháp & Đối chiếu văn phong:** Phân tích công thức ngữ pháp kèm mẹo giao tiếp.
    4. ⚡ **Luyện tập phản xạ & Kanji:** Mini Quiz tình huống và Flashcard ôn tập.

#### Giai đoạn 3.3: Nâng Cấp Trang Chủ & Điều Hướng (Navigation & Dashboard)
- [ ] **Task 3.3.1:** Cải tiến `src/pages/Home.tsx`:
  - Hiển thị lộ trình Modules dạng Cards trực quan, nổi bật 3 module ưu tiên (Học đường, Konbini, Mua sắm).
  - Huy hiệu tiến độ học tập, số câu thoại đã hoàn thành.

---

### CA 4: QA / QC (Kiểm Thử & Đảm Bảo Chất Lượng)
*Điều kiện bắt đầu: Hoàn thành Ca 3.*
- [ ] **Task 4.1 (Static Analysis):** Chạy `npm run lint` kiểm tra toàn bộ mã nguồn, đảm bảo 0 lỗi linting.
- [ ] **Task 4.2 (Unit & Component Tests):** Chạy `npm run test` (Vitest), viết thêm unit test cho parser hội thoại và quick-lookup logic nếu cần.
- [ ] **Task 4.3 (Build Check):** Chạy `npm run build` để xác nhận TypeScript build và Vite bundling thành công 100%.
- [ ] **Task 4.4 (Functional Testing):**
  - Kiểm thử tương tác toggles: Furigana, Dịch, Nuance.
  - Kiểm thử âm thanh phát âm trên trình duyệt.
  - Kiểm thử tra cứu popup từ vựng/kanji.
  - Kiểm thử độ tương thích responsive trên Mobile (375px), Tablet (768px), Desktop (1280px).
- [ ] **Task 4.5 (Final Verification & Status Sync):**
  - Cập nhật `docs/status.json` sang `qa` và kết luận báo cáo.

---

## 3. Quản Lý Rủi Ro & Biện Pháp Kiểm Soát
| Rủi ro tiềm ẩn | Biện pháp xử lý |
|---|---|
| Dữ liệu hội thoại quá dài gây rối mắt trên màn hình điện thoại | Thiết kế layout dạng tin nhắn cuộn mượt mà, hỗ trợ chế độ thu gọn câu thoại |
| Trình duyệt không hỗ trợ Web Speech tiếng Nhật | Có fallback thông báo nhẹ nhàng và hỗ trợ audio text chuẩn |
| Toggles tương tác làm giật lag giao diện | Sử dụng React state cục bộ tối ưu, tránh re-render toàn bộ danh sách |
| Xung đột với các trang Units bài 1..11 cũ | Giữ nguyên vẹn các file bài học cũ trong `content/generated/`, lộ trình modules mới đóng vai trò nâng cấp giao diện chính |
