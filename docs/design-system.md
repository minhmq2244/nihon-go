# TÀI LIỆU THIẾT KẾ HỆ THỐNG GIAO DIỆN (DESIGN SYSTEM & UI/UX SPEC)
## Dự án: Nihon-App — Tiếng Nhật Thực Chiến & Học Thuật Du Học Sinh (N5+ -> N4+)

- **Giai đoạn:** Ca 2 (UI / UX)
- **Ngày lập:** 23/11/2026
- **Trạng thái:** Chờ User duyệt (Chốt chặn 2)
- **Cơ sở kỹ thuật:** Tailwind CSS v4, React 19, Lucide Icons, Web Speech API

---

## 1. Triết Lý Thiết Kế (Design Philosophy)
- **Modern Clean & Interactive:** Giao diện thoáng đãng, sắc nét, tối giản nhưng đậm tính tương tác cao. Loại bỏ hoàn toàn sự khô khan của sách giáo khoa truyền thống.
- **Context-First (Ngữ cảnh là trên hết):** Ngôn ngữ được học trong một kịch bản đời sống sống động (Trường học, Cửa hàng tiện lợi, Siêu thị). Mọi từ vựng, ngữ pháp và chữ Hán đều phục vụ cho tình huống cụ thể của du học sinh.
- **Dual Tone Clarity (Rõ ràng hai văn phong):** Phân định rạch ròi bằng màu sắc và huy hiệu giữa **Khẩu ngữ thân mật (Tameguchi)** và **Lịch sự chuẩn mực (Desu/Masu/Keigo)** để người học biết chính xác khi nào dùng với ai.

---

## 2. Hệ Thống Màu Sắc & Semantic Tokens

### 2.1 Bảng Màu Cốt Lõi (Theme Tokens)
Hệ thống màu tuân thủ CSS Variables có sẵn trong `src/index.css`, bổ sung các token chuyên biệt cho Khẩu ngữ và Văn phong:

| Token | Light Mode | Dark Mode | Ý nghĩa sử dụng |
|---|---|---|---|
| `--c-bg` | `#f4f6fb` | `#11141b` | Nền canvas ứng dụng |
| `--c-surface` | `#ffffff` | `#1a1e28` | Thẻ card, khung hội thoại, modal |
| `--c-line` | `#e3e8f2` | `#2e3444` | Đường phân cách, viền card |
| `--c-ink` | `#1d2433` | `#e8ebf2` | Chữ chính (Tiêu đề, Kanji, văn bản) |
| `--c-sub` | `#5b6475` | `#9aa3b5` | Chữ phụ, nghĩa tiếng Việt, chú thích |
| `--c-accent` | `#3b5bdb` | `#7c9cff` | Màu thương hiệu chính, nút tương tác |
| `--c-nuance` *(Mới)* | `#f59e0b` (Amber) | `#fbbf24` | **Gắn nhãn khẩu ngữ đời thường (sokka, maji...)** |
| `--c-casual` *(Mới)* | `#0b7a5c` (Emerald) | `#4fd1a5` | **Huy hiệu văn phong thân mật (Tameguchi)** |
| `--c-polite` *(Mới)* | `#5f3dc4` (Violet) | `#b197fc` | **Huy hiệu văn phong lịch sự (Desu/Masu/Keigo)** |
| `--c-ok` | `#0b7a5c` | `#4fd1a5` | Trạng thái đúng, hoàn thành, thẻ ghi nhớ |
| `--c-bad` | `#c92a2a` | `#ff8787` | Trạng thái sai, cần ôn lại |

---

## 3. Hệ Thống Typography & Hiển Thị Tiếng Nhật

### 3.1 Font Families
- **Chữ Latin / Tiếng Việt:** `Be Vietnam Pro`, `system-ui`, `sans-serif` (đảm bảo dấu tiếng Việt sắc nét, hiện đại).
- **Chữ Tiếng Nhật (Kanji & Kana):** `Noto Sans JP`, `Yu Gothic UI`, `Meiryo` (nét chữ cân đối, hiển thị rõ ràng từng nét Hán tự).

### 3.2 Quy Chuẩn Hiển Thị Furigana (`<ruby>` & `<rt>`)
- Kích thước thẻ `<rt>`: Cố định ở mức `0.55em` so với kích thước chữ Kanji cha.
- Vị trí: Luôn nằm phía trên (`ruby-position: over`), căn giữa trọng tâm chữ (`ruby-align: center`).
- Màu sắc: Sử dụng màu `--c-sub` (nhạt hơn chữ Kanji 1 tone) để người học đọc lướt Kanji tự nhiên, chỉ nhìn Furigana khi cần tra cứu.
- Trạng thái Toggle: Khi tắt Furigana, thẻ `<rt>` chuyển `opacity: 0` (giữ nguyên layout không bị nhảy chiều cao dòng) hoặc ẩn hoàn toàn theo cấu hình người dùng.

---

## 4. Đặc Tả Giao Diện & Wireframes Chi Tiết

### 4.1 Trang Chủ Mới (`Home.tsx`)

#### Bố cục 3 tầng:
1. **Tầng 1: Welcome & Thống kê cá nhân**
   - Lời chào cá nhân hóa + Icon linh vật.
   - Thẻ Streak học tập (Số ngày liên tiếp).
   - Vòng tròn mục tiêu ngày: Số câu hội thoại / từ vựng đã nạp trong ngày.
2. **Tầng 2: Resume Banner — Học tiếp bài đang dở**
   - Card nổi bật: Module học gần nhất, số lượt thoại đã qua, nút bấm "Tiếp tục ngay ➔".
3. **Tầng 3: Bản đồ 14 Modules Lộ trình Thực chiến**
   - Phân nhóm rõ ràng:
     - **Nhóm 1: Bứt phá sinh hoạt thực tế (Modules 01 - 04):** Đặt huy hiệu `[ƯU TIÊN DU HỌC SINH]`. Làm nổi bật:
       - *Module 01: Trường học & Kết bạn* (Màu xanh Emerald)
       - *Module 02: Chiến thần Konbini* (Màu cam Sunset)
       - *Module 03: Siêu thị & Mua sắm đời sống* (Màu xanh Indigo)
     - **Nhóm 2: Hoàn tất N5 & Bứt phá N4+ (Modules 05 - 14):** Nền tảng học thuật kết hợp giao tiếp chuyên sâu.
   - Mỗi card module hiển thị: Mã số, Tên tiếng Nhật + Việt, Badge số lượng (Từ vựng, Ngữ pháp, Hội thoại, Kanji), Thanh tiến độ hoàn thành.

---

### 4.2 Component Hội Thoại Dài Chuyên Sâu (`LongDialogueViewer.tsx`)

Đây là trung tâm của trải nghiệm học thực chiến mới:

```
+-------------------------------------------------------------------------------+
| [Toolbar]  Phong cách: (o) Thân mật [Tameguchi]  ( ) Lịch sự [Polite]         |
|            Toggles: [x] Furigana  |  [x] Dịch nghĩa  |  [x] Khẩu ngữ Nuance   |
+-------------------------------------------------------------------------------+
|                                                                               |
| (Ảnh Ken)   Ken (Bạn học cùng lớp):                                           |
| +---------------------------------------------------------------------------+ |
| |  あ、そこ 空（あ）いてる？ 隣（となり）座（すわ）ってもいい？        [Loa] | |
| |  (A, chỗ đó còn trống không? Tớ ngồi cạnh được chứ?)                      | |
| |                                                                           | |
| |  [💡 Nuance]: 「あいてる」 là cách nói thân mật của 「あいています」.       | |
| +---------------------------------------------------------------------------+ |
|                                                                               |
|                                       Bạn (Du học sinh):       (Ảnh Bạn)      |
|         +-------------------------------------------------------------------+ |
|         | [Loa]  うん、どうぞ！ あ、ベトナムの 留学生（りゅうがくせい）だよ。 | |
|         |        (Ừ, mời bạn! À, tớ là du học sinh Việt Nam đấy.)            | |
|         |                                                                   | |
|         |  [💡 Nuance]: 「うん」 dùng thay cho 「はい」 khi nói với bạn bè.   | |
|         +-------------------------------------------------------------------+ |
|                                                                               |
| (Ảnh Ken)   Ken:                                                              |
| +---------------------------------------------------------------------------+ |
| |  へえ、そうなんだ！ まじで？ 日本語（にほんご） めっちゃ 上手（じょうず）じゃん！| |
| |  (Hả, ra vậy à! Thật luôn á? Tiếng Nhật của cậu đỉnh chóp vãi chưởng!)     | |
| |                                                                           | |
| |  [💡 Nuance]:                                                             | |
| |  - 「そうなんだ」: Ra thế à (thán từ đồng cảm siêu phổ biến)               | |
| |  - 「まじで？」: Thật á? (cực kỳ thông dụng trong đời thường)             | |
| |  - 「めっちゃ」 = 「とても」 (rất, cực kỳ)                                 | |
| |  - 「〜じゃん」 = Chẳng phải là ... sao!                                   | |
| +---------------------------------------------------------------------------+ |
+-------------------------------------------------------------------------------+
```

#### Các thành phần chính trong Bubble câu thoại:
1. **Avatar & Danh xưng:** Tên nhân vật, vai vế (Bạn học / Nhân viên quầy / Giáo viên).
2. **Khối tiếng Nhật (Kanji + Furigana):**
   - Từ vựng cốt lõi hoặc Kanji được gạch chân chấm nhẹ (`border-b border-dashed border-accent/40`).
   - Click/tap vào từ này sẽ mở ngay **Quick Lookup Modal**.
3. **Nút phát âm chuyên dụng (`SpeakButton`):** Bấm để nghe câu thoại với ngữ điệu tự nhiên.
4. **Bản dịch tiếng Việt:** Nằm gọn dưới câu thoại, có thể ẩn/hiện bằng toggle.
5. **Thẻ Chú Giải Khẩu Ngữ (Nuance Box):**
   - Nền màu vàng hổ phách nhạt (`bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200`).
   - Giải thích cặn kẽ: Từ lóng đó nghĩa là gì, người Nhật dùng trong cảm xúc nào, và dạng lịch sự tương đương là gì.

---

### 4.3 Modal Tra Cứu Nhanh (`WordQuickLookupModal.tsx`)

Khi người học đang đọc hội thoại và bấm vào một từ/chữ Hán bất kỳ:
- **Desktop:** Popover / Modal gọn gàng ngay tại vị trí từ hoặc giữa màn hình.
- **Mobile:** Bottom Sheet trượt mượt mà từ đáy màn hình lên.
- **Nội dung hiển thị:**
  1. Từ khóa: Chữ Hán to rõ ràng + Cách đọc Hiragana + Âm Hán Việt in hoa (VD: `隣: LÂN - となり`).
  2. Nghĩa tiếng Việt ngắn gọn, xúc tích.
  3. Phân loại từ: Danh từ, Động từ nhóm 1/2/3, Khẩu ngữ, hay Thán từ.
  4. Câu ví dụ thực tế trong đời sống.
  5. Nút nghe phát âm từ vựng.
  6. Nút "Đã hiểu" để đóng lại và tiếp tục mạch hội thoại mà không bị ngắt quãng.

---

### 4.4 Cấu Trúc Trang Chi Tiết Module (`ModuleDetailPage.tsx`)

Trang chi tiết được tổ chức lại thành **4 Tab chuyên biệt**, giúp người học tập trung từng kỹ năng:

```
[ Tab 1: 💬 Hội Thoại Thực Chiến ] 
  --> Trình phát kịch bản Long Dialogue với đầy đủ Toggles & Nuances.

[ Tab 2: 📚 Từ Vựng & Khẩu Ngữ ] 
  --> Danh sách toàn bộ từ vựng của bài, có filter: [Tất cả] | [Khẩu ngữ đời thường] | [Từ vựng N5/N4].
  --> Xem được ví dụ thực tế và nghe phát âm từng từ.

[ Tab 3: ⚖️ Ngữ Pháp & Văn Phong ] 
  --> Công thức ngữ pháp học thuật chuẩn JLPT.
  --> Bảng đối chiếu song hành: "Nói với Giáo viên/Người lớn" vs "Nói với Bạn bè thân mật".
  --> Mẹo giao tiếp thực tế (Spoken Tip).

[ Tab 4: ⚡ Luyện Phản Xạ & Kanji ] 
  --> Flashcard lật mặt thông minh (SRS: Biết rồi / Chưa nhớ).
  --> Quiz trắc nghiệm phản xạ tình huống đời sống (Situational Mini-Quiz).
  --> Bảng phân tích Kanji trọng tâm trong bài (Hán tự, Bộ thủ, Số nét, Từ ghép thực tế).
```

---

## 5. Tiêu Chuẩn Trải Nghiệm Tương Tác & Responsive

### 5.1 Mobile-First Checklist
- Chiều cao vùng chạm ngón tay (Touch Target): Tối thiểu `44px` x `44px` cho mọi nút toggle, nút loa và chip.
- Không phát sinh hiện tượng tràn màn hình ngang (`overflow-x: hidden`).
- Khung hội thoại tự động cuộn đến câu đang nghe phát âm.

### 5.2 Phím Tắt Tiện Ích (Keyboard Shortcuts trên Desktop)
- `Space`: Phát âm câu thoại tiếp theo trong kịch bản.
- `F`: Bật / tắt hiển thị Furigana toàn bộ bài.
- `T`: Bật / tắt hiển thị bản dịch tiếng Việt.
- `Esc`: Đóng popup tra từ nhanh.

---

## 6. Kế Hoạch Chuyển Giao Cho Ca 3 (Dev)
Ngay sau khi tài liệu Design System này được User **DUYỆT**:
1. Đội ngũ Dev sẽ triển khai Component `LongDialogueViewer.tsx` và `WordQuickLookupModal.tsx`.
2. Bổ sung kịch bản hội thoại dài sống động, giàu khẩu ngữ cho 3 Module ưu tiên (Trường học, Konbini, Mua sắm).
3. Tái cấu trúc lại `Home.tsx` và `ModuleDetailPage.tsx` theo đúng layout 4 tab và wireframe ở trên.
