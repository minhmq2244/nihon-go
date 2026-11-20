import type { SSGExamMeta, SSGQuestion } from './ssgTypes'

export const SSG_EXAMS: SSGExamMeta[] = [
  { id: 'de1', title: 'Đề số 01', questionCount: 25 },
  { id: 'de2', title: 'Đề số 02', questionCount: 25 },
  { id: 'de3', title: 'Đề số 03', questionCount: 25 },
  { id: 'de4', title: 'Đề số 04', questionCount: 25 },
  { id: 'de5', title: 'Đề số 05', questionCount: 25 },
  { id: 'de6', title: 'Đề số 06', questionCount: 25 },
  { id: 'de7', title: 'Đề số 07', questionCount: 25 },
  { id: 'de8', title: 'Đề số 08', questionCount: 25 },
  { id: 'de9', title: 'Đề số 09', questionCount: 25 },
  { id: 'de10', title: 'Đề số 10', questionCount: 25 },
]

export const SSG_QUESTIONS: Record<string, SSGQuestion[]> = {
  "de1": [
    {
      "id": "de1_q1",
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "What does the Self-Evaluation Maintenance (SEM) Model show?",
      "options": [
        {
          "letter": "A",
          "text": "Managers may prefer sub-optimal candidates who aren't likely to challenge their standing in the organization."
        },
        {
          "letter": "B",
          "text": "Managers will not accept bad applications."
        },
        {
          "letter": "C",
          "text": "Managers accept all applications."
        },
        {
          "letter": "D",
          "text": "It is not relevant to social comparison theory."
        }
      ],
      "answer": "A",
      "explanation": "Theo SEM Model (Tesser), khi một ứng viên có năng lực vượt trội trong lĩnh vực ảnh hưởng đến lòng tự trọng (self-evaluation), người quản lý có xu hướng chọn người dưới chuẩn để tránh bị đe dọa vị trí.",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 1,
      "imgFile": "de1_q1.jpg"
    },
    {
      "id": "de1_q2",
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "What kind of information should we discuss in the Background section of a business proposal?",
      "options": [
        {
          "letter": "A",
          "text": "Current products in the marketplace, including competing products or services."
        },
        {
          "letter": "B",
          "text": "The creative ideas of your project."
        },
        {
          "letter": "C",
          "text": "The history of your product, service, and/or company and the relationship between you and the potential buyer and/or similar companies."
        },
        {
          "letter": "D",
          "text": "The graphic design of your documents."
        }
      ],
      "answer": "C",
      "explanation": "Phần Background trong Business Proposal giới thiệu lịch sử sản phẩm/dịch vụ/công ty và mối quan hệ với khách hàng tiềm năng hoặc các công ty tương tự.",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 2,
      "imgFile": "de1_q2.jpg"
    },
    {
      "id": "de1_q3",
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "What is NOT TRUE about the effect of upward comparison?",
      "options": [
        {
          "letter": "A",
          "text": "Dissatisfaction"
        },
        {
          "letter": "B",
          "text": "Inspiration"
        },
        {
          "letter": "C",
          "text": "Gratitude"
        },
        {
          "letter": "D",
          "text": "Envy"
        }
      ],
      "answer": "C",
      "explanation": "So sánh hướng lên (Upward comparison) tạo ra cảm giác ghen tị (Envy), không hài lòng (Dissatisfaction) hoặc truyền cảm hứng (Inspiration). Lòng biết ơn (Gratitude) là kết quả của so sánh hướng xuống (Downward comparison).",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 3,
      "imgFile": "de1_q3.jpg"
    },
    {
      "id": "de1_q4",
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "What is the difference between Hierarchical structure and Matrix team?",
      "options": [
        {
          "letter": "A",
          "text": "While the Matrix team provides a stable backbone to the organization, the Hierarchical structure does not."
        },
        {
          "letter": "B",
          "text": "Matrix teams are more common in small organizations, while Hierarchical structure is typical for large ones."
        },
        {
          "letter": "C",
          "text": "Hierarchical structure provides more flexible management for an organization than Matrix team."
        },
        {
          "letter": "D",
          "text": "In Hierarchical structure, staff report to a single supervisor, while in Matrix team, staff report to different managers for different aspects of their work."
        }
      ],
      "answer": "D",
      "explanation": "Trong cấu trúc phân cấp (Hierarchical), nhân viên báo cáo cho 1 quản lý trực tiếp; còn trong nhóm ma trận (Matrix), nhân viên có thể báo cáo cho nhiều quản lý (quản lý chức năng và quản lý dự án).",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 4,
      "imgFile": "de1_q4.jpg"
    },
    {
      "id": "de1_q5",
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "Who will judge the success of a project in a contract team?",
      "options": [
        {
          "letter": "A",
          "text": "Junior managers"
        },
        {
          "letter": "B",
          "text": "Department heads"
        },
        {
          "letter": "C",
          "text": "Senior managers"
        },
        {
          "letter": "D",
          "text": "Clients"
        }
      ],
      "answer": "D",
      "explanation": "Nhóm hợp đồng (Contract team) được thuê từ bên ngoài để thực hiện dự án cụ thể, do đó người đánh giá sự thành công của dự án chính là Khách hàng (Clients).",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 5,
      "imgFile": "de1_q5.jpg"
    },
    {
      "id": "de1_q6",
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Which is TRUE about minutes for a meeting?",
      "options": [
        {
          "letter": "A",
          "text": "Minutes are a written document that serves to record the interaction and summarize the major points raised, decisions taken, and actions assigned."
        },
        {
          "letter": "B",
          "text": "The main purpose of minutes is to get buy-in from decision-makers."
        },
        {
          "letter": "C",
          "text": "Minutes are normally used for communicating policies, procedures, or official business within an organization."
        },
        {
          "letter": "D",
          "text": "Minutes are brief messages sent to recipients that are often outside the organization."
        }
      ],
      "answer": "A",
      "explanation": "Biên bản cuộc họp (Meeting minutes) là tài liệu văn bản ghi lại diễn biến, các điểm chính, quyết định được thông qua và các đầu việc được giao.",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 6,
      "imgFile": "de1_q6.jpg"
    },
    {
      "id": "de1_q7",
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Which of the following labels does NOT represent how member behavior can disrupt a meeting?",
      "options": [
        {
          "letter": "A",
          "text": "Loudmouth"
        },
        {
          "letter": "B",
          "text": "Whisperer"
        },
        {
          "letter": "C",
          "text": "Latecomer"
        },
        {
          "letter": "D",
          "text": "Summarizer"
        }
      ],
      "answer": "D",
      "explanation": "Loudmouth (nói to/lấn át), Whisperer (thì thầm riêng), Latecomer (đi muộn) là các hành vi gây gián đoạn cuộc họp. Summarizer (người tóm tắt ý kiến) là vai trò đóng góp tích cực.",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 7,
      "imgFile": "de1_q7.jpg"
    },
    {
      "id": "de1_q8",
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Which of the following is BAD advice for a group meeting?",
      "options": [
        {
          "letter": "A",
          "text": "The group extends meeting time until they have the final decision satisfying all members."
        },
        {
          "letter": "B",
          "text": "The group accepts the will of the majority even though some members do not like that decision."
        },
        {
          "letter": "C",
          "text": "The group follows an approved agenda that promotes orderly business."
        },
        {
          "letter": "D",
          "text": "The group protects the rights of all members by guaranteeing everyone the right to speak."
        }
      ],
      "answer": "A",
      "explanation": "Kéo dài cuộc họp vô tận để làm hài lòng 100% thành viên là lời khuyên tồi, gây lãng phí thời gian và mệt mỏi; nguyên tắc là tuân thủ agenda và thời gian đã định.",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 8,
      "imgFile": "de1_q8.jpg"
    },
    {
      "id": "de1_q9",
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Which of the following is the best example of constructive feedback?",
      "options": [
        {
          "letter": "A",
          "text": "Not giving full attention to a customer gives the image that we don't think he or she is important."
        },
        {
          "letter": "B",
          "text": "I believe that using mobile phone for personal purpose is not allowed, but you don't care."
        },
        {
          "letter": "C",
          "text": "You are not paying attention to the customer when you are having a conversation with someone else."
        },
        {
          "letter": "D",
          "text": "You were rude to the customer today."
        }
      ],
      "answer": "A",
      "explanation": "Phản hồi mang tính xây dựng (Constructive feedback) tập trung vào hành vi và hệ quả khách quan thay vì công kích cá nhân trực tiếp.",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 9,
      "imgFile": "de1_q9.jpg"
    },
    {
      "id": "de1_q10",
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "You may maintain less eye contact with audience members who are:",
      "options": [
        {
          "letter": "A",
          "text": "Very interested in your presentation."
        },
        {
          "letter": "B",
          "text": "Not showing interest in your presentation."
        },
        {
          "letter": "C",
          "text": "Wanting to ask questions."
        },
        {
          "letter": "D",
          "text": "New to your team."
        }
      ],
      "answer": "B",
      "explanation": "Trong khi thuyết trình, tập trung ánh mắt vào người ủng hộ để lấy tự tin, giảm bớt nhìn vào người tỏ ra thờ ơ/không quan tâm để tránh bị phân tâm.",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 10,
      "imgFile": "de1_q10.jpg"
    },
    {
      "id": "de1_q11",
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Which of the following domains of learning skills means 'What you should care about'?",
      "options": [
        {
          "letter": "A",
          "text": "Cognitive domain"
        },
        {
          "letter": "B",
          "text": "Affective domain"
        },
        {
          "letter": "C",
          "text": "Psychomotor domain"
        },
        {
          "letter": "D",
          "text": "Reflective domain"
        }
      ],
      "answer": "B",
      "explanation": "Trong thang phân loại Bloom: Cognitive là 'Know' (kiến thức), Psychomotor là 'Do' (thực hành), còn Affective là 'Care/Feel' (thái độ, cảm xúc, giá trị).",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 11,
      "imgFile": "de1_q11.jpg"
    },
    {
      "id": "de1_q12",
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Which questions do we tend to ask in the process of creative thinking? (Choose 3 options)",
      "options": [
        {
          "letter": "A",
          "text": "Can I combine perspectives/solutions?"
        },
        {
          "letter": "B",
          "text": "What else is out there?"
        },
        {
          "letter": "C",
          "text": "Why not?"
        },
        {
          "letter": "D",
          "text": "What is wrong with this?"
        }
      ],
      "answer": "A",
      "explanation": "Tư duy sáng tạo đặt các câu hỏi mở: 'Tôi có thể kết hợp không?' (Combine), 'Còn điều gì ngoài kia?' (What else), 'Tại sao không?' (Why not).",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 12,
      "imgFile": "de1_q12.jpg"
    },
    {
      "id": "de1_q13",
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "A supervisor threatens to dismiss any member of the sales team who does not meet the sales quota by the end of the quarter. What type of power is this leader using?",
      "options": [
        {
          "letter": "A",
          "text": "Referent power"
        },
        {
          "letter": "B",
          "text": "Coercive power"
        },
        {
          "letter": "C",
          "text": "Expert power"
        },
        {
          "letter": "D",
          "text": "Legitimate power"
        }
      ],
      "answer": "B",
      "explanation": "Quyền lực cưỡng chế (Coercive power - French & Raven) dựa trên việc đe dọa trừng phạt, sa thải hoặc khiển trách để ép buộc người khác làm theo.",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 13,
      "imgFile": "de1_q13.jpg"
    },
    {
      "id": "de1_q14",
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "How can you develop your creative thinking skill through 'Drawing'?",
      "options": [
        {
          "letter": "A",
          "text": "Develop ideas and expand their possibilities."
        },
        {
          "letter": "B",
          "text": "Use mind-mapping to capture and visualize ideas."
        },
        {
          "letter": "C",
          "text": "Explain how your ideas move beyond the status quo."
        },
        {
          "letter": "D",
          "text": "Take notes."
        }
      ],
      "answer": "B",
      "explanation": "Vẽ (Drawing) trong tư duy sáng tạo chủ yếu là áp dụng sơ đồ tư duy (mind-mapping) để phác thảo và liên kết các ý tưởng trong tâm trí.",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 14,
      "imgFile": "de1_q14.jpg"
    },
    {
      "id": "de1_q15",
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Which technology can help students establish a sense of community with their class and engage in ongoing threaded conversations on assigned readings highlighting diverse points of view?",
      "options": [
        {
          "letter": "A",
          "text": "Interactive whiteboards"
        },
        {
          "letter": "B",
          "text": "Discussion boards"
        },
        {
          "letter": "C",
          "text": "Student-response systems"
        },
        {
          "letter": "D",
          "text": "Digital camcorders"
        }
      ],
      "answer": "B",
      "explanation": "Diễn đàn thảo luận (Discussion boards / threaded conversations) cho phép người học trao đổi liên tục theo luồng và chia sẻ các góc nhìn đa dạng.",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 15,
      "imgFile": "de1_q15.jpg"
    },
    {
      "id": "de1_q16",
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "For new college graduates with limited experience, the preferred number of pages for a résumé is:",
      "options": [
        {
          "letter": "A",
          "text": "One."
        },
        {
          "letter": "B",
          "text": "Two."
        },
        {
          "letter": "C",
          "text": "Three."
        },
        {
          "letter": "D",
          "text": "Four."
        }
      ],
      "answer": "A",
      "explanation": "Sinh viên mới tốt nghiệp hoặc có ít kinh nghiệm chuẩn mực viết CV (résumé) là đúng 1 trang giấy A4 súc tích.",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 16,
      "imgFile": "de1_q16.jpg"
    },
    {
      "id": "de1_q17",
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "What is the first thing to do before we come to a job interview?",
      "options": [
        {
          "letter": "A",
          "text": "Dress appropriately."
        },
        {
          "letter": "B",
          "text": "Practice body language."
        },
        {
          "letter": "C",
          "text": "Read the job description carefully and research the company."
        },
        {
          "letter": "D",
          "text": "Follow up the interview result."
        }
      ],
      "answer": "C",
      "explanation": "Bước đầu tiên quan trọng nhất là đọc kỹ mô tả công việc (Job Description) và tìm hiểu kỹ về công ty để chuẩn bị nội dung phỏng vấn.",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 17,
      "imgFile": "de1_q17.jpg"
    },
    {
      "id": "de1_q18",
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "Hung, who is 25 years old, recently took an aptitude test and a self-reported personality assessment to gain understanding of his strengths. Which career development stage will Hung enter next?",
      "options": [
        {
          "letter": "A",
          "text": "Exploring"
        },
        {
          "letter": "B",
          "text": "Establishing"
        },
        {
          "letter": "C",
          "text": "Maintaining"
        },
        {
          "letter": "D",
          "text": "Reinventing"
        }
      ],
      "answer": "A",
      "explanation": "Theo Super's Career Development: Sau khi tự đánh giá bản thân (Self-assessment), bước tiếp theo là Giai đoạn Khám phá (Exploring - tìm kiếm cơ hội và định hướng nghề nghiệp).",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 18,
      "imgFile": "de1_q18.jpg"
    },
    {
      "id": "de1_q19",
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "What is an Action Plan?",
      "options": [
        {
          "letter": "A",
          "text": "A list of specific steps needed to be done to reach a goal."
        },
        {
          "letter": "B",
          "text": "An exercise program to increase your strength."
        },
        {
          "letter": "C",
          "text": "A list of goals that need to be reached to obtain a vision."
        },
        {
          "letter": "D",
          "text": "The result of a self-assessment."
        }
      ],
      "answer": "A",
      "explanation": "Kế hoạch hành động (Action Plan) là danh sách chi tiết các bước cụ thể cần thực hiện theo lộ trình để đạt được mục tiêu đã đề ra.",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 19,
      "imgFile": "de1_q19.jpg"
    },
    {
      "id": "de1_q20",
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "In a job interview, which of the following answers is most appropriate to answer the question 'Are you planning a family in the near future?'",
      "options": [
        {
          "letter": "A",
          "text": "I suppose everyone has a family plan in their own way. What will be will be."
        },
        {
          "letter": "B",
          "text": "May I not answer this over-personal question?"
        },
        {
          "letter": "C",
          "text": "As an active young person, I am working hard to support my parents first and get high status."
        },
        {
          "letter": "D",
          "text": "Currently I am focused on my career. Although having a family is always a possibility, it is not a priority at the moment."
        }
      ],
      "answer": "D",
      "explanation": "Câu trả lời chuyên nghiệp nhất là tái khẳng định sự tập trung vào sự nghiệp và cống hiến cho công việc tại thời điểm hiện tại.",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 20,
      "imgFile": "de1_q20.jpg"
    },
    {
      "id": "de1_q21",
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Which conflict-handling mode can be used when an issue is trivial or when more important issues are pressing?",
      "options": [
        {
          "letter": "A",
          "text": "Avoiding"
        },
        {
          "letter": "B",
          "text": "Competing"
        },
        {
          "letter": "C",
          "text": "Compromising"
        },
        {
          "letter": "D",
          "text": "Accommodating"
        }
      ],
      "answer": "A",
      "explanation": "Theo Thomas-Kilmann Conflict Mode Instrument (TKI): Né tránh (Avoiding) phù hợp nhất khi vấn đề quá nhỏ nhặt (trivial) hoặc có các ưu tiên cấp bách hơn.",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 21,
      "imgFile": "de1_q21.jpg"
    },
    {
      "id": "de1_q22",
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Person A obtains Referent Power when:",
      "options": [
        {
          "letter": "A",
          "text": "Others look up to or admire A because of A's personal qualities, characteristics or reputation."
        },
        {
          "letter": "B",
          "text": "A has credibility in a particular area as a result of experience and expertise."
        },
        {
          "letter": "C",
          "text": "A has a right to exert power in a certain domain."
        },
        {
          "letter": "D",
          "text": "A has power over B because A controls rewards that B wants."
        }
      ],
      "answer": "A",
      "explanation": "Quyền lực tham chiếu (Referent power) xuất phát từ sự kính trọng, ngưỡng mộ phẩm chất cá nhân, uy tín hoặc tính cách của một người.",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 22,
      "imgFile": "de1_q22.jpg"
    },
    {
      "id": "de1_q23",
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Reward Power exists when:",
      "options": [
        {
          "letter": "A",
          "text": "Person A has power over person B because A can administer some form of punishment to B."
        },
        {
          "letter": "B",
          "text": "Person A gains power because A has knowledge or expertise relevant to B."
        },
        {
          "letter": "C",
          "text": "When person B submits to person A because B feels that A has a right to exert power."
        },
        {
          "letter": "D",
          "text": "When person A has power over person B because A controls rewards that B wants."
        }
      ],
      "answer": "D",
      "explanation": "Quyền lực khen thưởng (Reward power) tồn tại khi người A nắm giữ và kiểm soát các phần thưởng (lương, thưởng, cơ hội thăng tiến) mà người B mong muốn.",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 23,
      "imgFile": "de1_q23.jpg"
    },
    {
      "id": "de1_q24",
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "In your group, you can freely express your thoughts and needs, and are assigned with tasks which match your personal capacities. Which type of power does this describe?",
      "options": [
        {
          "letter": "A",
          "text": "Independent power"
        },
        {
          "letter": "B",
          "text": "Power-from-within"
        },
        {
          "letter": "C",
          "text": "Expert power"
        },
        {
          "letter": "D",
          "text": "Power-with"
        }
      ],
      "answer": "B",
      "explanation": "Power-from-within (năng lực nội tại) liên quan đến sự tự tin, tự khẳng định bản thân và khả năng phát huy tiềm năng cá nhân trong công việc.",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 24,
      "imgFile": "de1_q24.jpg"
    },
    {
      "id": "de1_q25",
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "When one language dominates in a multicultural group, what could happen to the person who cannot speak it fluently?",
      "options": [
        {
          "letter": "A",
          "text": "Feel less competent in the group."
        },
        {
          "letter": "B",
          "text": "Feel left out."
        },
        {
          "letter": "C",
          "text": "Be seen as contributing less."
        },
        {
          "letter": "D",
          "text": "All are correct."
        }
      ],
      "answer": "D",
      "explanation": "Trong nhóm đa văn hóa, rào cản ngôn ngữ khiến thành viên không thông thạo cảm thấy bị cô lập (left out), tự ti và bị người khác đánh giá thấp đóng góp.",
      "examId": "de1",
      "examTitle": "Đề số 01",
      "qIndex": 25,
      "imgFile": "de1_q25.jpg"
    }
  ],
  "de2": [
    {
      "id": "de2_q1",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 1,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "Which of the following is NOT an execution outcome of Groupthink in problem solving?",
      "options": [
        {
          "letter": "A",
          "text": "Not evaluating alternatives"
        },
        {
          "letter": "B",
          "text": "No contingency plans"
        },
        {
          "letter": "C",
          "text": "Not realizing project culture"
        },
        {
          "letter": "D",
          "text": "Relying on a single, untested expert idea"
        }
      ],
      "answer": "D",
      "explanation": "Groupthink làm giảm khả năng đánh giá các phương án thay thế, thiếu kế hoạch dự phòng và bỏ qua các rủi ro văn hóa dự án. D là triệu chứng phụ thuộc.",
      "imgFile": "de2_q1.jpg"
    },
    {
      "id": "de2_q2",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 2,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "Four group-level factors that combine to cause groupthink are:",
      "options": [
        {
          "letter": "A",
          "text": "Cohesion, isolation, biased leadership, decisional stress"
        },
        {
          "letter": "B",
          "text": "Cohesion, isolation, shared agreement, biased leadership"
        },
        {
          "letter": "C",
          "text": "Cohesion, isolation, decisional stress, aggressiveness"
        },
        {
          "letter": "D",
          "text": "Isolation, biased leadership, aggressiveness, decisional stress"
        }
      ],
      "answer": "A",
      "explanation": "Theo mô hình Janis: 4 yếu tố gây ra tư duy nhóm (Groupthink) gồm: Tính gắn kết cao (cohesion), sự cô lập với bên ngoài (isolation), lãnh đạo thiên vị/định hướng trước (biased leadership), và áp lực ra quyết định cao (decisional stress).",
      "imgFile": "de2_q2.jpg"
    },
    {
      "id": "de2_q3",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 3,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "Which age group is considered to have tentative choices and support a desire for autonomy?",
      "options": [
        {
          "letter": "A",
          "text": "12 - 17"
        },
        {
          "letter": "B",
          "text": "18 - 25"
        },
        {
          "letter": "C",
          "text": "25 - 34"
        },
        {
          "letter": "D",
          "text": "35 - 45"
        }
      ],
      "answer": "B",
      "explanation": "Theo Super's Career Stages: Độ tuổi 18-25 thuộc giai đoạn Exploration (khám phá), đặc trưng bởi các lựa chọn thử nghiệm (tentative choices) và mong muốn tự chủ (autonomy).",
      "imgFile": "de2_q3.jpg"
    },
    {
      "id": "de2_q4",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 4,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "A team is called a contract team if:",
      "options": [
        {
          "letter": "A",
          "text": "Team members have other duties to perform in their normal functional units"
        },
        {
          "letter": "B",
          "text": "Team retains firm responsibility for both their daily work and project work"
        },
        {
          "letter": "C",
          "text": "Team members report to different managers"
        },
        {
          "letter": "D",
          "text": "Team is brought in from outside in order to do project work"
        }
      ],
      "answer": "D",
      "explanation": "Contract team (nhóm hợp đồng) là nhóm chuyên gia hoặc đơn vị được thuê từ bên ngoài tổ chức để hoàn thành dự án cụ thể.",
      "imgFile": "de2_q4.jpg"
    },
    {
      "id": "de2_q5",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 5,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "What is NOT TRUE about social comparison?",
      "options": [
        {
          "letter": "A",
          "text": "Social comparison is a natural psychological tendency and can have both positive and negative effects on people."
        },
        {
          "letter": "B",
          "text": "Downward comparison can make people feel better about themselves."
        },
        {
          "letter": "C",
          "text": "The purpose of social comparison is to validate who you are and help you understand your place in the world."
        },
        {
          "letter": "D",
          "text": "Social comparison and its effects on self-evaluation will not depend on personality and individual differences."
        }
      ],
      "answer": "D",
      "explanation": "Hiệu ứng của so sánh xã hội lên lòng tự trọng phụ thuộc rất lớn vào tính cách cá nhân (personality) và mức độ tự tôn (self-esteem).",
      "imgFile": "de2_q5.jpg"
    },
    {
      "id": "de2_q6",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 6,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "The study of body movements, a key to understanding nonverbal communication, is called:",
      "options": [
        {
          "letter": "A",
          "text": "Kinesics"
        },
        {
          "letter": "B",
          "text": "Chronemics"
        },
        {
          "letter": "C",
          "text": "Proxemics"
        },
        {
          "letter": "D",
          "text": "Haptics"
        }
      ],
      "answer": "A",
      "explanation": "Kinesics là môn nghiên cứu về chuyển động cơ thể và cử chỉ; Proxemics nghiên cứu khoảng cách; Haptics nghiên cứu xúc giác; Chronemics nghiên cứu về thời gian.",
      "imgFile": "de2_q6.jpg"
    },
    {
      "id": "de2_q7",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 7,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Which of the following is the best example for an attachment/appendix in a report?",
      "options": [
        {
          "letter": "A",
          "text": "The 'Love yourself' project detailed activity sheets, surveys, raw student data and psychological references."
        },
        {
          "letter": "B",
          "text": "The 'Love yourself' project is implemented by students of FPT Can Tho University."
        },
        {
          "letter": "C",
          "text": "The 'Love yourself' project will be implemented within 8 weeks."
        },
        {
          "letter": "D",
          "text": "The 'Love yourself' project has 5 anticipated results."
        }
      ],
      "answer": "A",
      "explanation": "Phụ lục báo cáo (Attachment/Appendix) chứa dữ liệu chi tiết, biểu mẫu điều tra, số liệu thô và tài liệu tham khảo bổ trợ.",
      "imgFile": "de2_q7.jpg"
    },
    {
      "id": "de2_q8",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 8,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "'Circular argument' is a type of fallacy in which:",
      "options": [
        {
          "letter": "A",
          "text": "A weak argument is made to be easily refuted, distracting attention from stronger arguments."
        },
        {
          "letter": "B",
          "text": "The proposition is used to prove itself, assuming the very thing it aims to prove."
        },
        {
          "letter": "C",
          "text": "Appeals to a common belief of some people, also called the Bandwagon Fallacy."
        },
        {
          "letter": "D",
          "text": "We attack the person making the argument rather than the argument itself."
        }
      ],
      "answer": "B",
      "explanation": "Ngụy biện vòng quanh (Circular argument / Begging the question) dùng chính tiền đề để chứng minh cho kết luận.",
      "imgFile": "de2_q8.jpg"
    },
    {
      "id": "de2_q9",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 9,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Which of the following reasons is a sound justification for scheduling an afternoon group meeting?",
      "options": [
        {
          "letter": "A",
          "text": "You hate to write reports and memos."
        },
        {
          "letter": "B",
          "text": "You prefer not to do the research yourself."
        },
        {
          "letter": "C",
          "text": "You feel that yellow is obnoxious."
        },
        {
          "letter": "D",
          "text": "Group input and interaction are critical."
        }
      ],
      "answer": "D",
      "explanation": "Một cuộc họp chỉ thực sự cần thiết khi cần ý kiến đóng góp, thảo luận và tương tác trực tiếp của cả nhóm (Group input and interaction are critical).",
      "imgFile": "de2_q9.jpg"
    },
    {
      "id": "de2_q10",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 10,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "At the end of a meeting, you should:",
      "options": [
        {
          "letter": "A",
          "text": "Ask a lot of questions to test the team members' understanding of the discussion."
        },
        {
          "letter": "B",
          "text": "Be brief and recap/sum the main points, agreed decisions, and next action steps."
        },
        {
          "letter": "C",
          "text": "Be the first to leave the meeting room."
        },
        {
          "letter": "D",
          "text": "Take a group photo and share on social media."
        }
      ],
      "answer": "B",
      "explanation": "Kết thúc cuộc họp cần ngắn gọn, tóm tắt lại các điểm mấu chốt, phân công nhiệm vụ và thời hạn (Next steps).",
      "imgFile": "de2_q10.jpg"
    },
    {
      "id": "de2_q11",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 11,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "How do critical thinking and creative thinking complement each other in a university team project?",
      "options": [
        {
          "letter": "A",
          "text": "They compete for dominance, hindering the team's progress."
        },
        {
          "letter": "B",
          "text": "Critical thinking encompasses creative thinking by providing fresh perspectives."
        },
        {
          "letter": "C",
          "text": "Creative thinking fosters idea generation, while critical thinking analyzes and organizes them."
        },
        {
          "letter": "D",
          "text": "Critical and creative thinking are separate and don't interact with each other."
        }
      ],
      "answer": "C",
      "explanation": "Tư duy sáng tạo mở đường tạo ra ý tưởng mới (Idea generation), tư duy phản biện phân tích, đánh giá và cấu trúc ý tưởng thành giải pháp thực tế.",
      "imgFile": "de2_q11.jpg"
    },
    {
      "id": "de2_q12",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 12,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Which is the highest learning level of Bloom's Taxonomy?",
      "options": [
        {
          "letter": "A",
          "text": "Remember"
        },
        {
          "letter": "B",
          "text": "Understand"
        },
        {
          "letter": "C",
          "text": "Analyze"
        },
        {
          "letter": "D",
          "text": "Create"
        }
      ],
      "answer": "D",
      "explanation": "Trong Thang tư duy Bloom (phiên bản sửa đổi của Anderson & Krathwohl), cấp độ cao nhất là Sáng tạo (Create).",
      "imgFile": "de2_q12.jpg"
    },
    {
      "id": "de2_q13",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 13,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Strategies to stimulate your creative thinking include:",
      "options": [
        {
          "letter": "A",
          "text": "Sleep on it (allow subconscious processing)."
        },
        {
          "letter": "B",
          "text": "Put yourself in diverse situations to fire up your brain."
        },
        {
          "letter": "C",
          "text": "Keep a notebook with you so you always have a way to record fleeting thoughts."
        },
        {
          "letter": "D",
          "text": "All of these are correct."
        }
      ],
      "answer": "D",
      "explanation": "Tất cả các phương pháp trên (ngủ đủ giấc để não ủ ý tưởng, ghi chép sổ tay, trải nghiệm môi trường mới) đều kích thích sáng tạo.",
      "imgFile": "de2_q13.jpg"
    },
    {
      "id": "de2_q14",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 14,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "What do we do when we use logic? (Choose 2 options)",
      "options": [
        {
          "letter": "A",
          "text": "We evaluate the strength of arguments."
        },
        {
          "letter": "B",
          "text": "We distinguish between true and false information."
        },
        {
          "letter": "C",
          "text": "We reduce complicated issues to primitive feelings."
        },
        {
          "letter": "D",
          "text": "We establish truth solely by intuition."
        }
      ],
      "answer": "A",
      "explanation": "Khi sử dụng logic, chúng ta đánh giá độ mạnh của luận điểm (evaluate strength of arguments) và phân biệt đúng sai (distinguish true/false).",
      "imgFile": "de2_q14.jpg"
    },
    {
      "id": "de2_q15",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 15,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "All of the followings are ways to use critical thinking to evaluate alternatives, EXCEPT:",
      "options": [
        {
          "letter": "A",
          "text": "Being receptive to having your opinions changed."
        },
        {
          "letter": "B",
          "text": "Relying on gut feeling if lost."
        },
        {
          "letter": "C",
          "text": "Accepting researching before deciding for evidence."
        },
        {
          "letter": "D",
          "text": "Evaluating your emotional response."
        }
      ],
      "answer": "B",
      "explanation": "Tư duy phản biện đòi hỏi bằng chứng và suy luận khách quan, không dựa vào trực giác/cảm tính mơ hồ (gut feeling).",
      "imgFile": "de2_q15.jpg"
    },
    {
      "id": "de2_q16",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 16,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "When analyzing your qualifications and job preferences, you will look into your most positive attributes including:",
      "options": [
        {
          "letter": "A",
          "text": "Total achievements, intelligence, soft skills, professional references"
        },
        {
          "letter": "B",
          "text": "Your strengths, weaknesses, interests, skills"
        },
        {
          "letter": "C",
          "text": "Your accomplishments, education, experience, and honours team"
        },
        {
          "letter": "D",
          "text": "Your awards, education, qualifications, hobbies"
        }
      ],
      "answer": "B",
      "explanation": "Tự đánh giá bản thân (Self-assessment) bao gồm việc phân tích điểm mạnh (strengths), điểm yếu (weaknesses), sở thích (interests) và kỹ năng (skills).",
      "imgFile": "de2_q16.jpg"
    },
    {
      "id": "de2_q17",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 17,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "Which of the following actions is NOT a step in preparing for a face-to-face interview?",
      "options": [
        {
          "letter": "A",
          "text": "Research the company"
        },
        {
          "letter": "B",
          "text": "Research other companies in the same industry"
        },
        {
          "letter": "C",
          "text": "Practice answering questions about the job"
        },
        {
          "letter": "D",
          "text": "Practice other questions about personal private life"
        }
      ],
      "answer": "D",
      "explanation": "Phỏng vấn xin việc tập trung vào năng lực chuyên môn và sự phù hợp công việc, không tập trung vào đời sống riêng tư.",
      "imgFile": "de2_q17.jpg"
    },
    {
      "id": "de2_q18",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 18,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "Which of the following is INCORRECT about a résumé?",
      "options": [
        {
          "letter": "A",
          "text": "A résumé is a 'selfie' for business purposes."
        },
        {
          "letter": "B",
          "text": "It is a marketing flyer promoting who you are as an ideal candidate."
        },
        {
          "letter": "C",
          "text": "It provides a concise overview of your qualifications."
        },
        {
          "letter": "D",
          "text": "The main purpose is to show your family what you do for a living."
        }
      ],
      "answer": "D",
      "explanation": "Mục đích của CV là tiếp thị năng lực bản thân tới nhà tuyển dụng, không phải để cho gia đình xem.",
      "imgFile": "de2_q18.jpg"
    },
    {
      "id": "de2_q19",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 19,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "In a job interview, how should you best respond to interview questions?",
      "options": [
        {
          "letter": "A",
          "text": "Be enthusiastic, honest, sincere, and state your accomplishments in a specific and positive manner."
        },
        {
          "letter": "B",
          "text": "Embellish your achievements to make sure the employer remembers them."
        },
        {
          "letter": "C",
          "text": "Say that your achievements are slender and not much."
        },
        {
          "letter": "D",
          "text": "Use caution and speak ambiguously so you don't appear boastful."
        }
      ],
      "answer": "A",
      "explanation": "Phản hồi tích cực, trung thực, nhiệt tình và nêu dẫn chứng thành tích cụ thể (STAR method).",
      "imgFile": "de2_q19.jpg"
    },
    {
      "id": "de2_q20",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 20,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "When developing an application letter, which of the following should NOT be in the opening paragraph?",
      "options": [
        {
          "letter": "A",
          "text": "The name of your referee who introduced the job to you"
        },
        {
          "letter": "B",
          "text": "The exact title of the position you are applying for"
        },
        {
          "letter": "C",
          "text": "How you learned about the job opening"
        },
        {
          "letter": "D",
          "text": "Detailed description of all your personal projects and creative gifts"
        }
      ],
      "answer": "D",
      "explanation": "Phần mở đầu thư ứng tuyển (Cover letter) chỉ nên nêu vị trí ứng tuyển và nguồn tin; phần chi tiết thành tích thuộc phần thân thư (Body).",
      "imgFile": "de2_q20.jpg"
    },
    {
      "id": "de2_q21",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 21,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Which of the following intervention techniques in multicultural teams should be used as a last resort?",
      "options": [
        {
          "letter": "A",
          "text": "Adaptation"
        },
        {
          "letter": "B",
          "text": "Structural intervention"
        },
        {
          "letter": "C",
          "text": "Managerial intervention"
        },
        {
          "letter": "D",
          "text": "Exit (Voluntary or involuntary removal)"
        }
      ],
      "answer": "D",
      "explanation": "Theo Brett, Behfar & Kern: Các chiến lược giải quyết xung đột đa văn hóa gồm Adaptation -> Structural -> Managerial -> Exit. Việc cho rời nhóm (Exit/removal) là giải pháp cuối cùng (last resort).",
      "imgFile": "de2_q21.jpg"
    },
    {
      "id": "de2_q22",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 22,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Which of the four cross-cultural differences could be considered offensive by some cultures?",
      "options": [
        {
          "letter": "A",
          "text": "Direct versus indirect communication"
        },
        {
          "letter": "B",
          "text": "Accents and fluency"
        },
        {
          "letter": "C",
          "text": "Differing attitudes toward hierarchy"
        },
        {
          "letter": "D",
          "text": "Conflicting decision-making norms"
        }
      ],
      "answer": "A",
      "explanation": "Giao tiếp trực tiếp (Direct) có thể bị các nền văn hóa gián tiếp (Indirect) coi là thô lỗ, thiếu tôn trọng hoặc xúc phạm.",
      "imgFile": "de2_q22.jpg"
    },
    {
      "id": "de2_q23",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 23,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "What is the primary behavioral response or consequence of Legitimate Power?",
      "options": [
        {
          "letter": "A",
          "text": "Commitment"
        },
        {
          "letter": "B",
          "text": "Compliance"
        },
        {
          "letter": "C",
          "text": "Resistance"
        },
        {
          "letter": "D",
          "text": "Avoidance"
        }
      ],
      "answer": "B",
      "explanation": "Theo French & Raven và Yukl: Quyền lực pháp lý (Legitimate power) dẫn đến sự tuân thủ (Compliance - làm theo vì nghĩa vụ/quy định).",
      "imgFile": "de2_q23.jpg"
    },
    {
      "id": "de2_q24",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 24,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "When a leader has power to create vision, coordinating activities to create change with the acceptance of members, which describes which type of power?",
      "options": [
        {
          "letter": "A",
          "text": "Power-from-within"
        },
        {
          "letter": "B",
          "text": "Power-with"
        },
        {
          "letter": "C",
          "text": "Power-over"
        },
        {
          "letter": "D",
          "text": "Coercive power"
        }
      ],
      "answer": "B",
      "explanation": "Power-with (sức mạnh cộng tác) là quyền lực dựa trên sự đồng lòng, chia sẻ tầm nhìn và cùng nhau tạo ra sự thay đổi.",
      "imgFile": "de2_q24.jpg"
    },
    {
      "id": "de2_q25",
      "examId": "de2",
      "examTitle": "Đề số 02",
      "qIndex": 25,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Which mode of resolving conflict should be considered when potential disruption outweighs the benefits of resolution?",
      "options": [
        {
          "letter": "A",
          "text": "Collaborating"
        },
        {
          "letter": "B",
          "text": "Compromising"
        },
        {
          "letter": "C",
          "text": "Avoiding"
        },
        {
          "letter": "D",
          "text": "Accommodating"
        }
      ],
      "answer": "C",
      "explanation": "Theo Thomas-Kilmann: Khi chi phí/hậu quả đổ vỡ của việc đối đầu lớn hơn lợi ích giải quyết vấn đề, Né tránh (Avoiding) là lựa chọn hợp lý.",
      "imgFile": "de2_q25.jpg"
    }
  ],
  "de3": [
    {
      "id": "de3_q1",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 1,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "A and B are friends. A gives B gas money for B's motorbike because B drives A to school daily, even though A will have less money. According to SVO, A is demonstrating:",
      "options": [
        {
          "letter": "A",
          "text": "Individualistic orientation"
        },
        {
          "letter": "B",
          "text": "Cooperation orientation"
        },
        {
          "letter": "C",
          "text": "Competition orientation"
        },
        {
          "letter": "D",
          "text": "Accommodating orientation"
        }
      ],
      "answer": "B",
      "explanation": "Theo Social Value Orientation (SVO), chia sẻ chi phí để đôi bên cùng có lợi thể hiện định hướng hợp tác (Cooperation orientation).",
      "imgFile": "de3_q1.jpg"
    },
    {
      "id": "de3_q2",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 2,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "Which of the following is NOT a negative outcome of Groupthink occurring?",
      "options": [
        {
          "letter": "A",
          "text": "Not examining alternatives"
        },
        {
          "letter": "B",
          "text": "No contingency plans"
        },
        {
          "letter": "C",
          "text": "Not seeking expert opinion"
        },
        {
          "letter": "D",
          "text": "Needing to seek outside expertise"
        }
      ],
      "answer": "D",
      "explanation": "Nhóm bị Groupthink thường cô lập và từ chối tham vấn chuyên gia ngoài; do đó 'Needing to seek outside expertise' không phải hệ quả tiêu cực của Groupthink.",
      "imgFile": "de3_q2.jpg"
    },
    {
      "id": "de3_q3",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 3,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "Jane avoids disputes, arrives late, skips meetings to avoid work, but wants to share the team's credit. Economists call this:",
      "options": [
        {
          "letter": "A",
          "text": "Pretending"
        },
        {
          "letter": "B",
          "text": "Untrustworthy"
        },
        {
          "letter": "C",
          "text": "Dishonest"
        },
        {
          "letter": "D",
          "text": "Free-rider problem"
        }
      ],
      "answer": "D",
      "explanation": "Kẻ hưởng không (Free-rider problem) là người không đóng góp công sức nhưng vẫn muốn hưởng thành quả chung của nhóm.",
      "imgFile": "de3_q3.jpg"
    },
    {
      "id": "de3_q4",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 4,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "Important factors that determine whether people will engage in social comparison with peers are:",
      "options": [
        {
          "letter": "A",
          "text": "Relevance"
        },
        {
          "letter": "B",
          "text": "Similarity"
        },
        {
          "letter": "C",
          "text": "Interest"
        },
        {
          "letter": "D",
          "text": "All of the answers are correct"
        }
      ],
      "answer": "D",
      "explanation": "Theo Festinger: Tính tương đồng (Similarity) và tính liên quan (Relevance) là hai yếu tố cốt lõi quyết định việc so sánh xã hội.",
      "imgFile": "de3_q4.jpg"
    },
    {
      "id": "de3_q5",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 5,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "What team consists of a group of people who come together as a distinct organizational unit to implement projects?",
      "options": [
        {
          "letter": "A",
          "text": "Project team"
        },
        {
          "letter": "B",
          "text": "Functional team"
        },
        {
          "letter": "C",
          "text": "Matrix team"
        },
        {
          "letter": "D",
          "text": "Modern Theory"
        }
      ],
      "answer": "A",
      "explanation": "Project team (nhóm dự án) tập hợp nhân sự chuyên trách để triển khai một dự án cụ thể.",
      "imgFile": "de3_q5.jpg"
    },
    {
      "id": "de3_q6",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 6,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Which is NOT a part of a standard business email?",
      "options": [
        {
          "letter": "A",
          "text": "Subject lines"
        },
        {
          "letter": "B",
          "text": "Sign-off"
        },
        {
          "letter": "C",
          "text": "Signature block"
        },
        {
          "letter": "D",
          "text": "Topic heading"
        }
      ],
      "answer": "D",
      "explanation": "Email công vụ có Subject line, Salutation, Body, Sign-off và Signature, không dùng 'Topic heading'.",
      "imgFile": "de3_q6.jpg"
    },
    {
      "id": "de3_q7",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 7,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Why is it important to use a good format for effective business e-mails in a professional setting?",
      "options": [
        {
          "letter": "A",
          "text": "Create competent impressions"
        },
        {
          "letter": "B",
          "text": "Support communicating effectively"
        },
        {
          "letter": "C",
          "text": "Reflect professionalism and follow the rules of netiquette"
        },
        {
          "letter": "D",
          "text": "All of the answers are correct"
        }
      ],
      "answer": "D",
      "explanation": "Định dạng email chuẩn tạo ấn tượng chuyên nghiệp, đảm bảo văn hóa mạng (netiquette) và truyền tải thông điệp rõ ràng.",
      "imgFile": "de3_q7.jpg"
    },
    {
      "id": "de3_q8",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 8,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Why is it important to close a professional email with a signature block containing status and contact info?",
      "options": [
        {
          "letter": "A",
          "text": "To fill space at the bottom of the email"
        },
        {
          "letter": "B",
          "text": "To make the email appear longer"
        },
        {
          "letter": "C",
          "text": "To provide recipients with your identity and contact details for easy follow-up"
        },
        {
          "letter": "D",
          "text": "To comply with legal requirements"
        }
      ],
      "answer": "C",
      "explanation": "Khối chữ ký (Signature block) cung cấp thông tin liên hệ và chức danh giúp người nhận dễ dàng phản hồi và theo dõi công việc.",
      "imgFile": "de3_q8.jpg"
    },
    {
      "id": "de3_q9",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 9,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "What type of report is used to provide project status updates to management?",
      "options": [
        {
          "letter": "A",
          "text": "Progress Report"
        },
        {
          "letter": "B",
          "text": "Recommendation Report"
        },
        {
          "letter": "C",
          "text": "Summary Report"
        },
        {
          "letter": "D",
          "text": "Financial Report"
        }
      ],
      "answer": "A",
      "explanation": "Progress Report (báo cáo tiến độ) cập nhật tình trạng công việc định kỳ cho ban quản lý.",
      "imgFile": "de3_q9.jpg"
    },
    {
      "id": "de3_q10",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 10,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "What is a Straw Man fallacy?",
      "options": [
        {
          "letter": "A",
          "text": "A weak argument set up to be easily refuted, distracting attention from stronger arguments."
        },
        {
          "letter": "B",
          "text": "Stating that something is the case without providing evidence."
        },
        {
          "letter": "C",
          "text": "Working together toward a common goal."
        },
        {
          "letter": "D",
          "text": "Arguing in a circle."
        }
      ],
      "answer": "A",
      "explanation": "Ngụy biện người rơm (Straw man) bóp méo hoặc đơn giản hóa luận điểm của đối phương để dễ dàng công kích.",
      "imgFile": "de3_q10.jpg"
    },
    {
      "id": "de3_q11",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 11,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "In which way does 'Wikis' contribute to our ability to be critical and creative thinkers?",
      "options": [
        {
          "letter": "A",
          "text": "Wikis help students coordinate, compile, and synthesize group projects."
        },
        {
          "letter": "B",
          "text": "Wikis help students build and share group resources and knowledge."
        },
        {
          "letter": "C",
          "text": "Wikis help students provide peer review, feedback, and critiques."
        },
        {
          "letter": "D",
          "text": "All of these are correct."
        }
      ],
      "answer": "D",
      "explanation": "Wiki là công cụ cộng tác trực tuyến hỗ trợ tổng hợp kiến thức, chia sẻ tài nguyên và đánh giá đồng đẳng (peer review).",
      "imgFile": "de3_q11.jpg"
    },
    {
      "id": "de3_q12",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 12,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Which of the following is NOT a characteristic of critical thinkers?",
      "options": [
        {
          "letter": "A",
          "text": "Uncovering biases"
        },
        {
          "letter": "B",
          "text": "Examining assumptions"
        },
        {
          "letter": "C",
          "text": "Blind acceptance of authority"
        },
        {
          "letter": "D",
          "text": "Skepticism"
        }
      ],
      "answer": "C",
      "explanation": "Người có tư duy phản biện luôn hoài nghi lành mạnh và kiểm tra giả định, không bao giờ mù quáng chấp nhận thẩm quyền (Blind acceptance).",
      "imgFile": "de3_q12.jpg"
    },
    {
      "id": "de3_q13",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 13,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "To write an effective proposal, which rhetorical elements does the writer have to combine?",
      "options": [
        {
          "letter": "A",
          "text": "Ethos, Pathos and Logos"
        },
        {
          "letter": "B",
          "text": "Ethos, Pathos and Logic"
        },
        {
          "letter": "C",
          "text": "Ethics, Pathos and Logos"
        },
        {
          "letter": "D",
          "text": "Ethos, Participation and Logic"
        }
      ],
      "answer": "A",
      "explanation": "Tam giác thuyết phục của Aristotle: Ethos (uy tín), Pathos (cảm xúc), và Logos (lý lẽ/logic).",
      "imgFile": "de3_q13.jpg"
    },
    {
      "id": "de3_q14",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 14,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "What is the requirement of thinking at the level of college? (Choose 2 options)",
      "options": [
        {
          "letter": "A",
          "text": "Apply understanding learnt during lectures correctly to solve problems."
        },
        {
          "letter": "B",
          "text": "Recognize or recall knowledge already gained."
        },
        {
          "letter": "C",
          "text": "Relate abstract ideas to practical situations."
        },
        {
          "letter": "D",
          "text": "Break down parts of material into components to understand structure (Analysis)."
        }
      ],
      "answer": "A",
      "explanation": "Tư duy bậc đại học đòi hỏi các bậc tư duy bậc cao của Bloom: Áp dụng (Application) và Phân tích (Analysis).",
      "imgFile": "de3_q14.jpg"
    },
    {
      "id": "de3_q15",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 15,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Power-over can be seen in which of the following situations?",
      "options": [
        {
          "letter": "A",
          "text": "A leader empowering a group through cooperation"
        },
        {
          "letter": "B",
          "text": "A member dominating conversation and controlling group resources"
        },
        {
          "letter": "C",
          "text": "A group respecting each other's opinions"
        },
        {
          "letter": "D",
          "text": "A leader suggests ideas without imposing them"
        }
      ],
      "answer": "B",
      "explanation": "Power-over (quyền lực áp đặt) là việc kiểm soát, chi phối và chiếm hữu tài nguyên để lấn át người khác.",
      "imgFile": "de3_q15.jpg"
    },
    {
      "id": "de3_q16",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 16,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "What is good advice to communicate effectively in a job interview?",
      "options": [
        {
          "letter": "A",
          "text": "Using excessive jargon"
        },
        {
          "letter": "B",
          "text": "Rambling"
        },
        {
          "letter": "C",
          "text": "Keep eye contact"
        },
        {
          "letter": "D",
          "text": "Over-dressing"
        }
      ],
      "answer": "C",
      "explanation": "Duy trì giao tiếp bằng mắt (eye contact) thể hiện sự tự tin, chân thành và tôn trọng người phỏng vấn.",
      "imgFile": "de3_q16.jpg"
    },
    {
      "id": "de3_q17",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 17,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "You don't have a paid job yet. What should you write in the work experience section?",
      "options": [
        {
          "letter": "A",
          "text": "Make up something fake."
        },
        {
          "letter": "B",
          "text": "I helped my mom with housework."
        },
        {
          "letter": "C",
          "text": "I volunteered for three months at SOS Children's Village to help children."
        },
        {
          "letter": "D",
          "text": "Leave it completely blank."
        }
      ],
      "answer": "C",
      "explanation": "Kinh nghiệm tình nguyện, hoạt động dự án xã hội hoặc câu lạc bộ là minh chứng xuất sắc cho kỹ năng làm việc thực tế.",
      "imgFile": "de3_q17.jpg"
    },
    {
      "id": "de3_q18",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 18,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "Which of the following interview questions is a behavioral question?",
      "options": [
        {
          "letter": "A",
          "text": "Where do you want to be in the next five years?"
        },
        {
          "letter": "B",
          "text": "What type of work environment is your most productive?"
        },
        {
          "letter": "C",
          "text": "Are you younger than most people you supervise?"
        },
        {
          "letter": "D",
          "text": "Tell me about a time when you faced a major problem in a group project, and how you dealt with it."
        }
      ],
      "answer": "D",
      "explanation": "Câu hỏi hành vi (Behavioral question) yêu cầu ứng viên kể lại tình huống thực tế trong quá khứ theo cấu trúc STAR.",
      "imgFile": "de3_q18.jpg"
    },
    {
      "id": "de3_q19",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 19,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "When writing your cover letter, you should:",
      "options": [
        {
          "letter": "A",
          "text": "Simply copy and paste the same letter over and over."
        },
        {
          "letter": "B",
          "text": "Create an original letter tailored for each job application."
        },
        {
          "letter": "C",
          "text": "Copy the template from the internet without changing."
        },
        {
          "letter": "D",
          "text": "List all your relatives' jobs."
        }
      ],
      "answer": "B",
      "explanation": "Cover letter cần được cá nhân hóa và viết riêng phù hợp với từng vị trí và văn hóa công ty ứng tuyển.",
      "imgFile": "de3_q19.jpg"
    },
    {
      "id": "de3_q20",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 20,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "Which interview format is especially for weeding out unqualified candidates early?",
      "options": [
        {
          "letter": "A",
          "text": "Web-Conference interview"
        },
        {
          "letter": "B",
          "text": "Screening interview"
        },
        {
          "letter": "C",
          "text": "Group interview"
        },
        {
          "letter": "D",
          "text": "One-on-one final interview"
        }
      ],
      "answer": "B",
      "explanation": "Vòng phỏng vấn sàng lọc (Screening interview - qua điện thoại/video ngắn) được thiết kế để loại bớt các hồ sơ không phù hợp trước vòng phỏng vấn sâu.",
      "imgFile": "de3_q20.jpg"
    },
    {
      "id": "de3_q21",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 21,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Which solutions below can help managing stress? (Choose 3 answers)",
      "options": [
        {
          "letter": "A",
          "text": "Manage your time."
        },
        {
          "letter": "B",
          "text": "Use alcohol when stress is high."
        },
        {
          "letter": "C",
          "text": "Find social support."
        },
        {
          "letter": "D",
          "text": "Slow down and cut out distractions."
        }
      ],
      "answer": "A",
      "explanation": "Quản lý thời gian, tìm kiếm sự hỗ trợ xã hội và giảm bớt xao nhãng là 3 biện pháp lành mạnh để giảm stress.",
      "imgFile": "de3_q21.jpg"
    },
    {
      "id": "de3_q22",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 22,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Your manager displays a high level of integrity. Which two traits best represent the manager?",
      "options": [
        {
          "letter": "A",
          "text": "Articulate and self-confident"
        },
        {
          "letter": "B",
          "text": "Dependable and diligent"
        },
        {
          "letter": "C",
          "text": "Trustworthy and honest"
        },
        {
          "letter": "D",
          "text": "Empathetic and ambitious"
        }
      ],
      "answer": "C",
      "explanation": "Chính trực (Integrity) được thể hiện cốt lõi qua sự đáng tin cậy (Trustworthy) và trung thực (Honest).",
      "imgFile": "de3_q22.jpg"
    },
    {
      "id": "de3_q23",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 23,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Which of the following countries represents individualistic cultures?",
      "options": [
        {
          "letter": "A",
          "text": "Japan"
        },
        {
          "letter": "B",
          "text": "Cuba"
        },
        {
          "letter": "C",
          "text": "Vietnam"
        },
        {
          "letter": "D",
          "text": "The United States"
        }
      ],
      "answer": "D",
      "explanation": "Theo Hofstede: Hoa Kỳ là quốc gia có điểm số chủ nghĩa cá nhân (Individualism) cao hàng đầu thế giới.",
      "imgFile": "de3_q23.jpg"
    },
    {
      "id": "de3_q24",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 24,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "When do the conflicts of deeply-held differences arise?",
      "options": [
        {
          "letter": "A",
          "text": "Reinforcing each other's impact"
        },
        {
          "letter": "B",
          "text": "Interpreting actions erroneously"
        },
        {
          "letter": "C",
          "text": "Differ over how to reach short-term goals"
        },
        {
          "letter": "D",
          "text": "Hold vastly different values, or rank values in a significantly different order"
        }
      ],
      "answer": "D",
      "explanation": "Xung đột về giá trị sâu sắc xuất hiện khi các bên có hệ giá trị trái ngược hoặc sắp xếp thứ tự ưu tiên giá trị khác nhau.",
      "imgFile": "de3_q24.jpg"
    },
    {
      "id": "de3_q25",
      "examId": "de3",
      "examTitle": "Đề số 03",
      "qIndex": 25,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Which of the following behavioral responses is most likely to be used when coercive power is applied?",
      "options": [
        {
          "letter": "A",
          "text": "Tolerance"
        },
        {
          "letter": "B",
          "text": "Enthusiasm"
        },
        {
          "letter": "C",
          "text": "Commitment"
        },
        {
          "letter": "D",
          "text": "Resistance"
        }
      ],
      "answer": "D",
      "explanation": "Theo French & Raven: Quyền lực cưỡng chế (ép buộc) hầu như luôn dẫn đến sự phản kháng ngấm ngầm hoặc công khai (Resistance).",
      "imgFile": "de3_q25.jpg"
    }
  ],
  "de4": [
    {
      "id": "de4_q1",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 1,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "What is the negative effect of downward comparison?",
      "options": [
        {
          "letter": "A",
          "text": "Envy"
        },
        {
          "letter": "B",
          "text": "Dissatisfaction"
        },
        {
          "letter": "C",
          "text": "Scorn"
        },
        {
          "letter": "D",
          "text": "Pessimism"
        }
      ],
      "answer": "C",
      "explanation": "So sánh hướng xuống (Downward comparison) có thể gây ra cảm giác khinh thường (Scorn/Contempt) đối với người kém hơn.",
      "imgFile": "de4_q1.jpg"
    },
    {
      "id": "de4_q2",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 2,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "Four group-level factors that combine to cause groupthink are:",
      "options": [
        {
          "letter": "A",
          "text": "Cohesion, isolation, biased leadership, decisional stress"
        },
        {
          "letter": "B",
          "text": "Cohesion, isolation, discouragement, biased leadership"
        },
        {
          "letter": "C",
          "text": "Cohesion, isolation, decisional stress, aggressiveness"
        },
        {
          "letter": "D",
          "text": "Isolation, biased leadership, aggressiveness, decisional stress"
        }
      ],
      "answer": "A",
      "explanation": "Janis: Gắn kết, cô lập, lãnh đạo thiên vị, áp lực ra quyết định là 4 tiền đề của Groupthink.",
      "imgFile": "de4_q2.jpg"
    },
    {
      "id": "de4_q3",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 3,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "You organize a charity sale. The leader talks too long without solving anything. You remind the leader to stay on track. At first the leader resisted, but now agrees on this rule. What stage of Tuckman is this?",
      "options": [
        {
          "letter": "A",
          "text": "Forming"
        },
        {
          "letter": "B",
          "text": "Storming"
        },
        {
          "letter": "C",
          "text": "Norming"
        },
        {
          "letter": "D",
          "text": "Performing"
        }
      ],
      "answer": "C",
      "explanation": "Giai đoạn Chuẩn hóa (Norming) giải quyết xong các bất đồng của Storming và thiết lập các quy tắc, chuẩn mực làm việc chung.",
      "imgFile": "de4_q3.jpg"
    },
    {
      "id": "de4_q4",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 4,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "Who do staffs report to in a matrix team?",
      "options": [
        {
          "letter": "A",
          "text": "Single manager"
        },
        {
          "letter": "B",
          "text": "Different managers"
        },
        {
          "letter": "C",
          "text": "General manager only"
        },
        {
          "letter": "D",
          "text": "CEO only"
        }
      ],
      "answer": "B",
      "explanation": "Trong cấu trúc ma trận (Matrix), nhân viên có 2 tuyến báo cáo: Quản lý chức năng và Quản lý dự án.",
      "imgFile": "de4_q4.jpg"
    },
    {
      "id": "de4_q5",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 5,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "David's group achieves more than individuals acting alone by pooling talents. What need is this related to?",
      "options": [
        {
          "letter": "A",
          "text": "Security"
        },
        {
          "letter": "B",
          "text": "Self-esteem"
        },
        {
          "letter": "C",
          "text": "Goal achievement"
        },
        {
          "letter": "D",
          "text": "Power and control"
        }
      ],
      "answer": "C",
      "explanation": "Hợp lực để hoàn thành những công việc vượt quá khả năng cá nhân là động lực Đạt mục tiêu (Goal achievement).",
      "imgFile": "de4_q5.jpg"
    },
    {
      "id": "de4_q6",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 6,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Which words below show emphasis?",
      "options": [
        {
          "letter": "A",
          "text": "Significantly, primarily, especially"
        },
        {
          "letter": "B",
          "text": "But, however, by contrast"
        },
        {
          "letter": "C",
          "text": "For example, to illustrate, like"
        },
        {
          "letter": "D",
          "text": "First, second, last"
        }
      ],
      "answer": "A",
      "explanation": "Significantly (đáng kể), primarily (chủ yếu), especially (đặc biệt) là các từ nối nhấn mạnh (Emphasis).",
      "imgFile": "de4_q6.jpg"
    },
    {
      "id": "de4_q7",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 7,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "What is an elevator speech?",
      "options": [
        {
          "letter": "A",
          "text": "The expression of ability to articulate thoughts in sounds."
        },
        {
          "letter": "B",
          "text": "Presentation with irrelevant data."
        },
        {
          "letter": "C",
          "text": "A formal lecture to change lives."
        },
        {
          "letter": "D",
          "text": "A presentation that persuades the listener in less than thirty seconds, or around a hundred words."
        }
      ],
      "answer": "D",
      "explanation": "Elevator pitch/speech là bài giới thiệu bản thân hoặc ý tưởng cực kỳ cô đọng trong dưới 30 giây (khoảng 100 từ).",
      "imgFile": "de4_q7.jpg"
    },
    {
      "id": "de4_q8",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 8,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Meetings give members _____ that boosts their motivation to implement group ideas and actions.",
      "options": [
        {
          "letter": "A",
          "text": "Opportunity to participate in the group decision-making process"
        },
        {
          "letter": "B",
          "text": "Chance to argue"
        },
        {
          "letter": "C",
          "text": "Time to relax"
        },
        {
          "letter": "D",
          "text": "Dare to chat"
        }
      ],
      "answer": "A",
      "explanation": "Được tham gia vào quá trình ra quyết định tập thể giúp tăng động lực cam kết thực thi hành động.",
      "imgFile": "de4_q8.jpg"
    },
    {
      "id": "de4_q9",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 9,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Ms. Kelli prepares a report to review the activity of her department in the last 3 months. Which type of report is that?",
      "options": [
        {
          "letter": "A",
          "text": "Progress Report"
        },
        {
          "letter": "B",
          "text": "Proposal"
        },
        {
          "letter": "C",
          "text": "Feasibility Report"
        },
        {
          "letter": "D",
          "text": "Needs assessment"
        }
      ],
      "answer": "A",
      "explanation": "Báo cáo rà soát hoạt động định kỳ theo mốc thời gian là Báo cáo tiến độ (Progress report).",
      "imgFile": "de4_q9.jpg"
    },
    {
      "id": "de4_q10",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 10,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "At what point in a business meeting should group members approve the agenda and minutes?",
      "options": [
        {
          "letter": "A",
          "text": "Right after the call to order"
        },
        {
          "letter": "B",
          "text": "Right after routine reports are shared"
        },
        {
          "letter": "C",
          "text": "Before the discussion of new business"
        },
        {
          "letter": "D",
          "text": "Right before final announcements"
        }
      ],
      "answer": "A",
      "explanation": "Ngay sau khi chủ tọa tuyên bố khai mạc (Call to order), bước đầu tiên là thông qua chương trình họp (Agenda) và biên bản cuộc họp trước.",
      "imgFile": "de4_q10.jpg"
    },
    {
      "id": "de4_q11",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 11,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "According to Bloom's Taxonomy, _____ is 'the ability to judge, check, and even critique the value of material for a given purpose'.",
      "options": [
        {
          "letter": "A",
          "text": "Applying"
        },
        {
          "letter": "B",
          "text": "Evaluating"
        },
        {
          "letter": "C",
          "text": "Analyzing"
        },
        {
          "letter": "D",
          "text": "Creating"
        }
      ],
      "answer": "B",
      "explanation": "Đánh giá (Evaluating) là cấp độ phán đoán, thẩm định và phê bình giá trị của tài liệu dựa trên các tiêu chí.",
      "imgFile": "de4_q11.jpg"
    },
    {
      "id": "de4_q12",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 12,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "According to Bloom's Taxonomy, _____ is 'the ability to put parts together to form a coherent or unique new whole'.",
      "options": [
        {
          "letter": "A",
          "text": "Applying"
        },
        {
          "letter": "B",
          "text": "Analyzing"
        },
        {
          "letter": "C",
          "text": "Evaluating"
        },
        {
          "letter": "D",
          "text": "Creating"
        }
      ],
      "answer": "D",
      "explanation": "Sáng tạo (Creating) là năng lực lắp ghép các mảnh ghép để tạo thành một tổng thể mạch lạc và mới mẻ.",
      "imgFile": "de4_q12.jpg"
    },
    {
      "id": "de4_q13",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 13,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "What is Critical Thinking?",
      "options": [
        {
          "letter": "A",
          "text": "Clear, reasonable, reflective thinking focused on deciding what to believe or do."
        },
        {
          "letter": "B",
          "text": "A way of thinking to criticize what other people say."
        },
        {
          "letter": "C",
          "text": "Reflective thinking focused on proving other people wrong."
        },
        {
          "letter": "D",
          "text": "Simple thinking that blindly accepts what you hear."
        }
      ],
      "answer": "A",
      "explanation": "Định nghĩa của Robert Ennis: Tư duy phản biện là tư duy sáng suốt, có lý lẽ và phản tỉnh hướng tới việc quyết định tin vào đâu hay làm gì.",
      "imgFile": "de4_q13.jpg"
    },
    {
      "id": "de4_q14",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 14,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "What is thinking?",
      "options": [
        {
          "letter": "A",
          "text": "The mental process you use to form associations and models of the world."
        },
        {
          "letter": "B",
          "text": "The mark of an educated mind to entertain a thought without accepting it."
        },
        {
          "letter": "C",
          "text": "The act that produces ideas, images, sounds, or emotions."
        },
        {
          "letter": "D",
          "text": "All of these are correct."
        }
      ],
      "answer": "D",
      "explanation": "Tất cả các định nghĩa trên đều mô tả các khía cạnh phong phú của tư duy (Thinking).",
      "imgFile": "de4_q14.jpg"
    },
    {
      "id": "de4_q15",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 15,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "The 'Applying' skill of Bloom's Taxonomy is:",
      "options": [
        {
          "letter": "A",
          "text": "Ability to recognize or recall gained knowledge."
        },
        {
          "letter": "B",
          "text": "Ability to use learned material in new and concrete situations."
        },
        {
          "letter": "C",
          "text": "Ability to judge, check, and critique the value of material."
        },
        {
          "letter": "D",
          "text": "Ability to construct meaning from messages."
        }
      ],
      "answer": "B",
      "explanation": "Vận dụng (Applying) là khả năng sử dụng kiến thức lý thuyết đã học vào các tình huống thực tiễn mới.",
      "imgFile": "de4_q15.jpg"
    },
    {
      "id": "de4_q16",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 16,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "When evaluating your career plan, what should you do first?",
      "options": [
        {
          "letter": "A",
          "text": "Looking for a career"
        },
        {
          "letter": "B",
          "text": "Perform a self-assessment"
        },
        {
          "letter": "C",
          "text": "Always review and revise your plan"
        },
        {
          "letter": "D",
          "text": "Focus on developing goals"
        }
      ],
      "answer": "B",
      "explanation": "Bước 1 của mọi quy trình lập kế hoạch sự nghiệp là Tự đánh giá bản thân (Self-assessment).",
      "imgFile": "de4_q16.jpg"
    },
    {
      "id": "de4_q17",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 17,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "What is the best way to dress to impress employers in an interview?",
      "options": [
        {
          "letter": "A",
          "text": "No matter what you wear"
        },
        {
          "letter": "B",
          "text": "Be trendy with casual street wear"
        },
        {
          "letter": "C",
          "text": "Wear a formal suit"
        },
        {
          "letter": "D",
          "text": "Wear a jogging suit"
        }
      ],
      "answer": "C",
      "explanation": "Trang phục công sở lịch sự (formal business suit) tạo ấn tượng chuyên nghiệp và tôn trọng buổi phỏng vấn.",
      "imgFile": "de4_q17.jpg"
    },
    {
      "id": "de4_q18",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 18,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "Which of the following should take place before you interview for a job?",
      "options": [
        {
          "letter": "A",
          "text": "Practice answering common questions"
        },
        {
          "letter": "B",
          "text": "Research the company or organization"
        },
        {
          "letter": "C",
          "text": "Review the Job Description"
        },
        {
          "letter": "D",
          "text": "All of the answers are correct"
        }
      ],
      "answer": "D",
      "explanation": "Luyện trả lời câu hỏi, tìm hiểu công ty và rà soát kỹ JD đều là các bước chuẩn bị trước phỏng vấn.",
      "imgFile": "de4_q18.jpg"
    },
    {
      "id": "de4_q19",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 19,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "What can a student put in his or her cover letter?",
      "options": [
        {
          "letter": "A",
          "text": "GPA and academic honors"
        },
        {
          "letter": "B",
          "text": "Relevant soft skills"
        },
        {
          "letter": "C",
          "text": "Volunteer work and leadership experiences"
        },
        {
          "letter": "D",
          "text": "All are correct"
        }
      ],
      "answer": "D",
      "explanation": "Sinh viên có thể nêu điểm học tập, kỹ năng mềm và các hoạt động ngoại khóa/tình nguyện nổi bật.",
      "imgFile": "de4_q19.jpg"
    },
    {
      "id": "de4_q20",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 20,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "Which of the following is NOT a characteristic of a cover letter:",
      "options": [
        {
          "letter": "A",
          "text": "It describes the position you are interested in."
        },
        {
          "letter": "B",
          "text": "It shows how you found out about the position."
        },
        {
          "letter": "C",
          "text": "It sets you apart from competitors."
        },
        {
          "letter": "D",
          "text": "It explains why you are not satisfied with your current performance."
        }
      ],
      "answer": "D",
      "explanation": "Cover letter nhằm nêu bật điểm mạnh và sự phù hợp, không giải thích lý do bất mãn với bản thân.",
      "imgFile": "de4_q20.jpg"
    },
    {
      "id": "de4_q21",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 21,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "'Issues from our sense of connection, our bonding with other human beings, and with the environment' describes which type of power?",
      "options": [
        {
          "letter": "A",
          "text": "Power-from-within"
        },
        {
          "letter": "B",
          "text": "Power-with"
        },
        {
          "letter": "C",
          "text": "Power-over"
        },
        {
          "letter": "D",
          "text": "None of these answers"
        }
      ],
      "answer": "B",
      "explanation": "Power-with đại diện cho sức mạnh kết nối, cộng tác và gắn kết giữa con người với nhau.",
      "imgFile": "de4_q21.jpg"
    },
    {
      "id": "de4_q22",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 22,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "What is the final best practice for fostering multicultural skills?",
      "options": [
        {
          "letter": "A",
          "text": "Developing cultural intelligence (CQ)"
        },
        {
          "letter": "B",
          "text": "Developing cognitive complexity"
        },
        {
          "letter": "C",
          "text": "Developing cultural competence"
        },
        {
          "letter": "D",
          "text": "Developing basic cross-cultural skills"
        }
      ],
      "answer": "A",
      "explanation": "Đỉnh cao của phát triển kỹ năng đa văn hóa là Trí tuệ văn hóa (Cultural Intelligence - CQ).",
      "imgFile": "de4_q22.jpg"
    },
    {
      "id": "de4_q23",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 23,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Which of the following intervention techniques in multicultural conflicts should be used sparingly?",
      "options": [
        {
          "letter": "A",
          "text": "Adaptation"
        },
        {
          "letter": "B",
          "text": "Structural intervention"
        },
        {
          "letter": "C",
          "text": "Managerial intervention"
        },
        {
          "letter": "D",
          "text": "Exit"
        }
      ],
      "answer": "C",
      "explanation": "Theo Brett, Behfar & Kern: Managerial intervention (quản lý can thiệp phán xử) chỉ nên dùng dè xẻn (sparingly) vì làm nhóm mất tính tự chủ.",
      "imgFile": "de4_q23.jpg"
    },
    {
      "id": "de4_q24",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 24,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Which is TRUE about long-term orientation culture?",
      "options": [
        {
          "letter": "A",
          "text": "United States has a more long-term approach to life."
        },
        {
          "letter": "B",
          "text": "Places less emphasis on persistent efforts."
        },
        {
          "letter": "C",
          "text": "Long-term orientation is often marked by persistence, thrift and frugality."
        },
        {
          "letter": "D",
          "text": "It focuses on short-term quarterly profits."
        }
      ],
      "answer": "C",
      "explanation": "Theo Hofstede: Văn hóa định hướng dài hạn đặc trưng bởi sự kiên trì (persistence) và tính tiết kiệm (thrift/frugality).",
      "imgFile": "de4_q24.jpg"
    },
    {
      "id": "de4_q25",
      "examId": "de4",
      "examTitle": "Đề số 04",
      "qIndex": 25,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Which type of power can be generated by controlling resources such as money, reward, and information?",
      "options": [
        {
          "letter": "A",
          "text": "Power-over"
        },
        {
          "letter": "B",
          "text": "Power-with"
        },
        {
          "letter": "C",
          "text": "Power-from-within"
        },
        {
          "letter": "D",
          "text": "Referent power"
        }
      ],
      "answer": "A",
      "explanation": "Power-over (quyền lực chi phối/áp đặt) hình thành nhờ việc nắm giữ độc quyền các nguồn lực thiết yếu như tiền bạc, thông tin.",
      "imgFile": "de4_q25.jpg"
    }
  ],
  "de5": [
    {
      "id": "de5_q1",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 1,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "What is the difference between Hierarchical structure and Matrix team?",
      "options": [
        {
          "letter": "A",
          "text": "While Matrix provides stable backbone, Hierarchical does not."
        },
        {
          "letter": "B",
          "text": "Matrix is common in small firms, Hierarchical in large ones."
        },
        {
          "letter": "C",
          "text": "Hierarchical provides more flexible management."
        },
        {
          "letter": "D",
          "text": "In Hierarchical, reporting is mainly 1-way to single supervisor; in Matrix, staff report to different managers for different aspects."
        }
      ],
      "answer": "D",
      "explanation": "Cấu trúc ma trận cho phép nhân viên có nhiều tuyến báo cáo theo dự án và chuyên môn, khác với tuyến 1-1 của phân cấp.",
      "imgFile": "de5_q1.jpg"
    },
    {
      "id": "de5_q2",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 2,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "Social comparison can lead to:",
      "options": [
        {
          "letter": "A",
          "text": "Impacts on self-esteem, remorse, humble feelings."
        },
        {
          "letter": "B",
          "text": "Impacts on self-esteem, feelings of envy, or feelings of regret."
        },
        {
          "letter": "C",
          "text": "Feeling of using to peers."
        },
        {
          "letter": "D",
          "text": "Self-satisfaction and boasting."
        }
      ],
      "answer": "B",
      "explanation": "So sánh xã hội ảnh hưởng sâu sắc đến tự trọng (self-esteem), có thể tạo ra cảm giác ghen tị (envy) hoặc hối tiếc (regret).",
      "imgFile": "de5_q2.jpg"
    },
    {
      "id": "de5_q3",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 3,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "In which stage of group development do members express information about themselves in polite but tentative conversation?",
      "options": [
        {
          "letter": "A",
          "text": "Forming"
        },
        {
          "letter": "B",
          "text": "Storming"
        },
        {
          "letter": "C",
          "text": "Norming"
        },
        {
          "letter": "D",
          "text": "Performing"
        },
        {
          "letter": "E",
          "text": "Adjourning"
        }
      ],
      "answer": "A",
      "explanation": "Giao tiếp lịch thiệp nhưng thận trọng (polite but tentative) là đặc trưng của giai đoạn Hình thành (Forming - Tuckman).",
      "imgFile": "de5_q3.jpg"
    },
    {
      "id": "de5_q4",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 4,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "Which stage is suitable for: 'Members implement plans and achieve goals'?",
      "options": [
        {
          "letter": "A",
          "text": "Performing"
        },
        {
          "letter": "B",
          "text": "Storming"
        },
        {
          "letter": "C",
          "text": "Adjourning"
        },
        {
          "letter": "D",
          "text": "Norming"
        },
        {
          "letter": "E",
          "text": "Forming"
        }
      ],
      "answer": "A",
      "explanation": "Thực hiện kế hoạch và hoàn thành mục tiêu là giai đoạn Hoạt động hiệu quả (Performing).",
      "imgFile": "de5_q4.jpg"
    },
    {
      "id": "de5_q5",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 5,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "Which is the final stage of Tuckman's Stages of Group Development?",
      "options": [
        {
          "letter": "A",
          "text": "Forming"
        },
        {
          "letter": "B",
          "text": "Storming"
        },
        {
          "letter": "C",
          "text": "Adjourning"
        },
        {
          "letter": "D",
          "text": "Norming"
        },
        {
          "letter": "E",
          "text": "Performing"
        }
      ],
      "answer": "C",
      "explanation": "Giai đoạn cuối cùng của mô hình Tuckman là Tan rã / Kết thúc (Adjourning).",
      "imgFile": "de5_q5.jpg"
    },
    {
      "id": "de5_q6",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 6,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "One disadvantage of written messages is that they:",
      "options": [
        {
          "letter": "A",
          "text": "Don't have legal value."
        },
        {
          "letter": "B",
          "text": "Cannot be edited or revised."
        },
        {
          "letter": "C",
          "text": "Are not acceptable in businesses."
        },
        {
          "letter": "D",
          "text": "Can be viewed as being overly formal, in part because they are permanent."
        }
      ],
      "answer": "D",
      "explanation": "Văn bản lưu lại lâu dài và dễ bị coi là cứng nhắc/quá trang trọng (overly formal).",
      "imgFile": "de5_q6.jpg"
    },
    {
      "id": "de5_q7",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 7,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Raw data from research processes is presented in the report as part of the:",
      "options": [
        {
          "letter": "A",
          "text": "Appendix"
        },
        {
          "letter": "B",
          "text": "Conclusion"
        },
        {
          "letter": "C",
          "text": "Recommendation"
        },
        {
          "letter": "D",
          "text": "Findings"
        }
      ],
      "answer": "A",
      "explanation": "Số liệu thô, bảng khảo sát và phụ lục kỹ thuật được đặt ở phần Phụ lục (Appendix).",
      "imgFile": "de5_q7.jpg"
    },
    {
      "id": "de5_q8",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 8,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "What is nonverbal communication?",
      "options": [
        {
          "letter": "A",
          "text": "The process of conveying a message with the use of words."
        },
        {
          "letter": "B",
          "text": "Conveying a message with only eye contact."
        },
        {
          "letter": "C",
          "text": "The process of conveying a message without the use of words."
        },
        {
          "letter": "D",
          "text": "Conveying a message with only body gestures."
        }
      ],
      "answer": "C",
      "explanation": "Giao tiếp phi ngôn ngữ là quá trình truyền tải thông điệp không dùng lời nói (without the use of words).",
      "imgFile": "de5_q8.jpg"
    },
    {
      "id": "de5_q9",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 9,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Which statements below are TRUE about nonverbal communication? (Choose 2 options)",
      "options": [
        {
          "letter": "A",
          "text": "Nonverbal communication is reversible."
        },
        {
          "letter": "B",
          "text": "Nonverbal communication is the process of conveying a message without words."
        },
        {
          "letter": "C",
          "text": "Nonverbal cues are always 100% definite and clear."
        },
        {
          "letter": "D",
          "text": "Most people tend to believe nonverbal messages over verbal ones when they contradict."
        }
      ],
      "answer": "B",
      "explanation": "Giao tiếp phi ngôn ngữ không dùng từ ngữ và thường đáng tin cậy hơn lời nói khi có sự mâu thuẫn.",
      "imgFile": "de5_q9.jpg"
    },
    {
      "id": "de5_q10",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 10,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Why is it important to use a good format for effective business e-mails?",
      "options": [
        {
          "letter": "A",
          "text": "Create competent impressions."
        },
        {
          "letter": "B",
          "text": "Support communicating effectively."
        },
        {
          "letter": "C",
          "text": "Reflect professionalism and follow rules of netiquette."
        },
        {
          "letter": "D",
          "text": "All above."
        }
      ],
      "answer": "D",
      "explanation": "Định dạng email chuẩn thể hiện tính chuyên nghiệp và văn hóa mạng (netiquette).",
      "imgFile": "de5_q10.jpg"
    },
    {
      "id": "de5_q11",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 11,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Among the tips for creative thinking, what does 'Drawing' mean?",
      "options": [
        {
          "letter": "A",
          "text": "Be a good observer of people around you."
        },
        {
          "letter": "B",
          "text": "Be empathetic with other people."
        },
        {
          "letter": "C",
          "text": "Have reflective learning."
        },
        {
          "letter": "D",
          "text": "Be used to visualize ideas from your mind (e.g. mind mapping)."
        }
      ],
      "answer": "D",
      "explanation": "Vẽ giúp hình ảnh hóa và liên kết các ý tưởng trong tư duy.",
      "imgFile": "de5_q11.jpg"
    },
    {
      "id": "de5_q12",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 12,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Which of the following statements is NOT correct about Logic?",
      "options": [
        {
          "letter": "A",
          "text": "The word 'Logic' comes from the classical Greek 'logos'."
        },
        {
          "letter": "B",
          "text": "'Logic' refers to the science or art of reasoning."
        },
        {
          "letter": "C",
          "text": "'Logic' refers to correct or reliable inference."
        },
        {
          "letter": "D",
          "text": "'Logic' cannot help to distinguish good and bad reasoning."
        }
      ],
      "answer": "D",
      "explanation": "Mục tiêu cơ bản nhất của Logic là phân biệt suy luận đúng (good reasoning) với suy luận ngụy biện (bad reasoning).",
      "imgFile": "de5_q12.jpg"
    },
    {
      "id": "de5_q13",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 13,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "_____ is 'the ability to grasp or construct meaning from oral, written, and graphic messages'.",
      "options": [
        {
          "letter": "A",
          "text": "Remembering"
        },
        {
          "letter": "B",
          "text": "Understanding"
        },
        {
          "letter": "C",
          "text": "Analyzing"
        },
        {
          "letter": "D",
          "text": "Applying"
        }
      ],
      "answer": "B",
      "explanation": "Thấu hiểu (Understanding) là khả năng nắm bắt ý nghĩa của thông điệp.",
      "imgFile": "de5_q13.jpg"
    },
    {
      "id": "de5_q14",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 14,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Why are creative thinking skills a form of problem solving? (Choose 2 options)",
      "options": [
        {
          "letter": "A",
          "text": "Alternative ideas could also be generated."
        },
        {
          "letter": "B",
          "text": "Different assumptions are under scrutiny."
        },
        {
          "letter": "C",
          "text": "One needs to use sound reasoning."
        },
        {
          "letter": "D",
          "text": "It involves using strategies to focus creative thoughts and translate them into solving problems."
        }
      ],
      "answer": "A",
      "explanation": "Sáng tạo là một dạng giải quyết vấn đề vì tạo ra các ý tưởng thay thế và áp dụng vào thực tiễn.",
      "imgFile": "de5_q14.jpg"
    },
    {
      "id": "de5_q15",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 15,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Which statement is NOT true about creativity?",
      "options": [
        {
          "letter": "A",
          "text": "Only artists are creative persons."
        },
        {
          "letter": "B",
          "text": "As a creative thinker, you are curious, optimistic, and imaginative."
        },
        {
          "letter": "C",
          "text": "Creativity is needed when there is a problem to solve."
        },
        {
          "letter": "D",
          "text": "Genius is deliberately creative."
        }
      ],
      "answer": "A",
      "explanation": "Mọi người đều có khả năng sáng tạo, sáng tạo không dành riêng cho nghệ sĩ.",
      "imgFile": "de5_q15.jpg"
    },
    {
      "id": "de5_q16",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 16,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "Which of the following interview questions is a behavioral question?",
      "options": [
        {
          "letter": "A",
          "text": "Where do you want to be in the next five years?"
        },
        {
          "letter": "B",
          "text": "What type of work environment is your most productive?"
        },
        {
          "letter": "C",
          "text": "Do you prefer individual or team tasks?"
        },
        {
          "letter": "D",
          "text": "Tell me about a time when you faced a major problem in group projects, and how you dealt with it."
        }
      ],
      "answer": "D",
      "explanation": "Hỏi về hành vi trong tình huống thực tế đã trải qua là câu hỏi hành vi (Behavioral interview question).",
      "imgFile": "de5_q16.jpg"
    },
    {
      "id": "de5_q17",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 17,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "What is the best way to dress to impress employers in an interview?",
      "options": [
        {
          "letter": "A",
          "text": "No matter what you wear"
        },
        {
          "letter": "B",
          "text": "Be trendy with streetwear"
        },
        {
          "letter": "C",
          "text": "Wear a formal business suit"
        },
        {
          "letter": "D",
          "text": "Wear a jogging suit"
        }
      ],
      "answer": "C",
      "explanation": "Trang phục công sở lịch sự (formal suit) luôn là chuẩn mực an toàn và chuyên nghiệp.",
      "imgFile": "de5_q17.jpg"
    },
    {
      "id": "de5_q18",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 18,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "Which date format is best for a formal cover letter?",
      "options": [
        {
          "letter": "A",
          "text": "October 6, 2023"
        },
        {
          "letter": "B",
          "text": "10/16/23"
        },
        {
          "letter": "C",
          "text": "6-10-2023"
        },
        {
          "letter": "D",
          "text": "06 October 23"
        }
      ],
      "answer": "A",
      "explanation": "Định dạng ngày tháng chuẩn mực trong văn thư tiếng Anh là viết đầy đủ tên tháng: Month Day, Year.",
      "imgFile": "de5_q18.jpg"
    },
    {
      "id": "de5_q19",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 19,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "The résumé opening should include:",
      "options": [
        {
          "letter": "A",
          "text": "Heading, job or career objective, and a summary of your qualifications"
        },
        {
          "letter": "B",
          "text": "Section with contact information of your references"
        },
        {
          "letter": "C",
          "text": "Summary of education only"
        },
        {
          "letter": "D",
          "text": "List of special skills and hobbies"
        }
      ],
      "answer": "A",
      "explanation": "Phần đầu CV gồm Tiêu đề (tên/thông tin liên hệ), Mục tiêu nghề nghiệp (Objective) và Tóm tắt năng lực (Summary of qualifications).",
      "imgFile": "de5_q19.jpg"
    },
    {
      "id": "de5_q20",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 20,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "In which stage of career development do individuals often experience stability and may begin to mentor new people?",
      "options": [
        {
          "letter": "A",
          "text": "Growth"
        },
        {
          "letter": "B",
          "text": "Exploration"
        },
        {
          "letter": "C",
          "text": "Establishment"
        },
        {
          "letter": "D",
          "text": "Maintenance"
        }
      ],
      "answer": "D",
      "explanation": "Giai đoạn Duy trì (Maintenance - Super, độ tuổi 45-64) đạt đến sự ổn định sự nghiệp và thường đóng vai trò cố vấn/hướng dẫn người mới.",
      "imgFile": "de5_q20.jpg"
    },
    {
      "id": "de5_q21",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 21,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "What role does emotional communication and resolution play in reducing conflicts within a team?",
      "options": [
        {
          "letter": "A",
          "text": "It tends to escalate conflicts."
        },
        {
          "letter": "B",
          "text": "It is irrelevant to conflict resolution."
        },
        {
          "letter": "C",
          "text": "It is a tool for expressing frustration."
        },
        {
          "letter": "D",
          "text": "It fosters empathy to help people de-escalate situations and resolve conflict without aggression."
        }
      ],
      "answer": "D",
      "explanation": "Giao tiếp thấu hiểu cảm xúc giúp hạ nhiệt tình huống và tìm giải pháp hòa bình.",
      "imgFile": "de5_q21.jpg"
    },
    {
      "id": "de5_q22",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 22,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Which is TRUE about long-term orientation culture?",
      "options": [
        {
          "letter": "A",
          "text": "United States has a more long-term approach to life."
        },
        {
          "letter": "B",
          "text": "Emphasizes quick returns on investments."
        },
        {
          "letter": "C",
          "text": "Long-term orientation is often marked by persistence, thrift and frugality."
        },
        {
          "letter": "D",
          "text": "All of these."
        }
      ],
      "answer": "C",
      "explanation": "Định hướng dài hạn (Hofstede) đặc trưng bởi tính kiên nhẫn, tiết kiệm và đầu tư bền vững.",
      "imgFile": "de5_q22.jpg"
    },
    {
      "id": "de5_q23",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 23,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "'An expressed struggle between interdependent parties over incompatible goals' is the definition of:",
      "options": [
        {
          "letter": "A",
          "text": "Negotiation"
        },
        {
          "letter": "B",
          "text": "Conflict"
        },
        {
          "letter": "C",
          "text": "Frustration"
        },
        {
          "letter": "D",
          "text": "Bargaining"
        }
      ],
      "answer": "B",
      "explanation": "Định nghĩa kinh điển của Xung đột (Conflict) theo Hocker & Wilmot.",
      "imgFile": "de5_q23.jpg"
    },
    {
      "id": "de5_q24",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 24,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "_____ cultures focus on the needs of the nation, community, team, or group of workers.",
      "options": [
        {
          "letter": "A",
          "text": "Collectivist"
        },
        {
          "letter": "B",
          "text": "Individualistic"
        },
        {
          "letter": "C",
          "text": "Low-Power Distance"
        },
        {
          "letter": "D",
          "text": "High-Power Distance"
        }
      ],
      "answer": "A",
      "explanation": "Văn hóa tập thể (Collectivist) đặt lợi ích của tập thể, cộng đồng lên trên lợi ích cá nhân.",
      "imgFile": "de5_q24.jpg"
    },
    {
      "id": "de5_q25",
      "examId": "de5",
      "examTitle": "Đề số 05",
      "qIndex": 25,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "What is the last stage in the Conflict Process?",
      "options": [
        {
          "letter": "A",
          "text": "Frustration"
        },
        {
          "letter": "B",
          "text": "Conceptualization"
        },
        {
          "letter": "C",
          "text": "Behavior"
        },
        {
          "letter": "D",
          "text": "Outcome"
        }
      ],
      "answer": "D",
      "explanation": "Tiến trình xung đột gồm: Frustration -> Conceptualization -> Behavior -> Outcome (Hệ quả sau xung đột).",
      "imgFile": "de5_q25.jpg"
    }
  ],
  "de6": [
    {
      "id": "de6_q1",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 1,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "M and Q are friends from school. M gives Q gas money for Q's motorbike because Q drives M to school every day, even though M will have less spending money for this semester. According to Social Value Orientation (SVO), in this situation, M is demonstrating:",
      "options": [
        {
          "letter": "A",
          "text": "Individualistic orientation"
        },
        {
          "letter": "B",
          "text": "Cooperative orientation"
        },
        {
          "letter": "C",
          "text": "Competitive orientation"
        },
        {
          "letter": "D",
          "text": "Accommodating orientation"
        }
      ],
      "answer": "B",
      "explanation": "Theo SVO, định hướng hợp tác (Cooperative orientation) hướng tới tối đa hóa lợi ích chung và cân bằng sự công bằng cho cả hai bên.",
      "imgFile": "de6_q1.jpg"
    },
    {
      "id": "de6_q2",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 2,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "One of the key findings in the Dunning-Kruger effect experiments is unskilled people are:",
      "options": [
        {
          "letter": "A",
          "text": "always satisfied with results"
        },
        {
          "letter": "B",
          "text": "often jealous with others"
        },
        {
          "letter": "C",
          "text": "unaware and confident"
        },
        {
          "letter": "D",
          "text": "unaccomplished with results"
        }
      ],
      "answer": "C",
      "explanation": "Hiệu ứng Dunning-Kruger chỉ ra rằng những người có năng lực kém thường thiếu nhận thức về sự thiếu sót của mình nhưng lại quá tự tin (unaware and confident).",
      "imgFile": "de6_q2.jpg"
    },
    {
      "id": "de6_q3",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 3,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "Fill the following gaps with appropriate phrases: People are... by social comparison when the comparison is...",
      "options": [
        {
          "letter": "A",
          "text": "more influenced / more localized"
        },
        {
          "letter": "B",
          "text": "more influenced / less localized"
        },
        {
          "letter": "C",
          "text": "more influenced / broad and general"
        },
        {
          "letter": "D",
          "text": "less influenced / more localized"
        }
      ],
      "answer": "A",
      "explanation": "Hiệu ứng Local Dominance Effect: Con người bị ảnh hưởng nhiều hơn (more influenced) khi sự so sánh mang tính cục bộ, gần gũi (more localized).",
      "imgFile": "de6_q3.jpg"
    },
    {
      "id": "de6_q4",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 4,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "What implication does Self-Evaluation Maintenance (SEM) Model suggest?",
      "options": [
        {
          "letter": "A",
          "text": "People are more likely to compare with friends or co-workers than they are to industry or national averages."
        },
        {
          "letter": "B",
          "text": "Average students have a higher academic self-concept when attending a below-average school."
        },
        {
          "letter": "C",
          "text": "Managers may prefer sub-optimal candidates who aren't likely to challenge their standing in the organization."
        },
        {
          "letter": "D",
          "text": "Unskilled people often think they are on par or superior to their peers in tasks."
        }
      ],
      "answer": "C",
      "explanation": "Theo SEM Model (Tesser), người quản lý có xu hướng chọn ứng viên dưới chuẩn để tránh đe dọa lòng tự trọng và vị trí của bản thân.",
      "imgFile": "de6_q4.jpg"
    },
    {
      "id": "de6_q5",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 5,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "What are the two main factors in social comparison?",
      "options": [
        {
          "letter": "A",
          "text": "Similarity and relatedness"
        },
        {
          "letter": "B",
          "text": "Openness and independence"
        },
        {
          "letter": "C",
          "text": "Relevance and similarity"
        },
        {
          "letter": "D",
          "text": "Relatedness and humanity"
        }
      ],
      "answer": "C",
      "explanation": "Hai yếu tố cốt lõi quyết định sự so sánh xã hội theo Festinger & Tesser là: Sự tương đồng (Similarity) và Mức độ liên quan của lĩnh vực so sánh (Relevance).",
      "imgFile": "de6_q5.jpg"
    },
    {
      "id": "de6_q6",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 6,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Who is the non-stop contributor that dominates discussions and interrupts others?",
      "options": [
        {
          "letter": "A",
          "text": "Loudmouth"
        },
        {
          "letter": "B",
          "text": "Whisperer"
        },
        {
          "letter": "C",
          "text": "Latecomer"
        },
        {
          "letter": "D",
          "text": "Resistor"
        }
      ],
      "answer": "A",
      "explanation": "Loudmouth là kiểu thành viên nói liên tục, lấn át ý kiến của người khác và làm gián đoạn tiến trình cuộc họp.",
      "imgFile": "de6_q6.jpg"
    },
    {
      "id": "de6_q7",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 7,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Which words should you use to show you want to give contradictions or contrasting points?",
      "options": [
        {
          "letter": "A",
          "text": "Significantly, primarily, especially"
        },
        {
          "letter": "B",
          "text": "Nevertheless, however, by contrast"
        },
        {
          "letter": "C",
          "text": "For example, to illustrate, like"
        },
        {
          "letter": "D",
          "text": "First, second, last"
        }
      ],
      "answer": "B",
      "explanation": "Các từ nối chỉ sự tương phản / mâu thuẫn gồm: Nevertheless, however, by contrast, on the other hand.",
      "imgFile": "de6_q7.jpg"
    },
    {
      "id": "de6_q8",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 8,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Who may NOT be invited to a meeting?",
      "options": [
        {
          "letter": "A",
          "text": "Individuals who will be affected directly by the outcome"
        },
        {
          "letter": "B",
          "text": "Individuals who disagree or represent minority viewpoints"
        },
        {
          "letter": "C",
          "text": "Individuals who have the power to implement decisions"
        },
        {
          "letter": "D",
          "text": "Individuals who are unattached to the issues for discussion"
        }
      ],
      "answer": "D",
      "explanation": "Không nên mời những người không liên quan hoặc không có đóng góp gì vào các chủ đề thảo luận của cuộc họp để tránh lãng phí thời gian.",
      "imgFile": "de6_q8.jpg"
    },
    {
      "id": "de6_q9",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 9,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "The checklist for ensuring that a report fulfills its goals includes:",
      "options": [
        {
          "letter": "A",
          "text": "Information is accurate, complete, and documented"
        },
        {
          "letter": "B",
          "text": "Figures, tables, and art are clear and correctly labeled"
        },
        {
          "letter": "C",
          "text": "A report presents as much progress as possible, even if not all goals were achieved"
        },
        {
          "letter": "D",
          "text": "A report represents your best effort"
        }
      ],
      "answer": "A",
      "explanation": "Tiêu chuẩn quan trọng hàng đầu của một báo cáo chuyên nghiệp là thông tin chính xác, đầy đủ và có tài liệu dẫn chứng rõ ràng.",
      "imgFile": "de6_q9.jpg"
    },
    {
      "id": "de6_q10",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 10,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "Which of Maslow's Hierarchy of Needs is primarily met when a neighborhood watch group forms to deter crime in the community?",
      "options": [
        {
          "letter": "A",
          "text": "Physiological"
        },
        {
          "letter": "B",
          "text": "Esteem"
        },
        {
          "letter": "C",
          "text": "Love and belonging"
        },
        {
          "letter": "D",
          "text": "Safety"
        }
      ],
      "answer": "D",
      "explanation": "Nhóm tuần tra phòng chống tội phạm đáp ứng nhu cầu an toàn, an ninh (Safety needs) trong tháp nhu cầu Maslow.",
      "imgFile": "de6_q10.jpg"
    },
    {
      "id": "de6_q11",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 11,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Which action relates to the step 'Identify possible solutions' in problem solving?",
      "options": [
        {
          "letter": "A",
          "text": "Identify the problem"
        },
        {
          "letter": "B",
          "text": "Organize the information logically"
        },
        {
          "letter": "C",
          "text": "Brainstorm and compare possible solutions"
        },
        {
          "letter": "D",
          "text": "Define an ideal solution"
        }
      ],
      "answer": "C",
      "explanation": "Bước 'Identify possible solutions' bao gồm việc động não (brainstorming) và so sánh các giải pháp khả thi.",
      "imgFile": "de6_q11.jpg"
    },
    {
      "id": "de6_q12",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 12,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Which of the following domains of learning shifts means: 'What you should care about' (emotions, attitudes, values)?",
      "options": [
        {
          "letter": "A",
          "text": "Cognitive domain"
        },
        {
          "letter": "B",
          "text": "Affective domain"
        },
        {
          "letter": "C",
          "text": "Psychomotor domain"
        },
        {
          "letter": "D",
          "text": "Reflective domain"
        }
      ],
      "answer": "B",
      "explanation": "Affective domain (miền cảm xúc/thái độ) liên quan đến cảm xúc, thái độ và giá trị quan tâm của người học.",
      "imgFile": "de6_q12.jpg"
    },
    {
      "id": "de6_q13",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 13,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "In what way does 'Wikis' contribute to the ability to be critical and creative thinkers?",
      "options": [
        {
          "letter": "A",
          "text": "Wikis can help students coordinate, compare, synthesize, and present individual or group projects or research."
        },
        {
          "letter": "B",
          "text": "Wikis can help students build and share group resources and knowledge."
        },
        {
          "letter": "C",
          "text": "Wikis can help students provide peer review, feedback, and critique."
        },
        {
          "letter": "D",
          "text": "All of these are correct."
        }
      ],
      "answer": "D",
      "explanation": "Wikis hỗ trợ toàn diện: tổng hợp kiến thức, chia sẻ tài nguyên nhóm và thúc đẩy bình duyệt, phản hồi ngang hàng (peer review).",
      "imgFile": "de6_q13.jpg"
    },
    {
      "id": "de6_q14",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 14,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Strategies to develop yourself as a critical thinker include:",
      "options": [
        {
          "letter": "A",
          "text": "Question the way you see things"
        },
        {
          "letter": "B",
          "text": "Reflect and practice"
        },
        {
          "letter": "C",
          "text": "Forgive yourself for past cognitive biases"
        },
        {
          "letter": "D",
          "text": "All are correct"
        }
      ],
      "answer": "D",
      "explanation": "Phát triển tư duy phản biện đòi hỏi tự vấn góc nhìn, thường xuyên phản tư rèn luyện và chấp nhận các thiếu sót để tiến bộ.",
      "imgFile": "de6_q14.jpg"
    },
    {
      "id": "de6_q15",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 15,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "The purpose of a business proposal is to...",
      "options": [
        {
          "letter": "A",
          "text": "solve an internal department problem"
        },
        {
          "letter": "B",
          "text": "reflect on past work done"
        },
        {
          "letter": "C",
          "text": "express personal opinions"
        },
        {
          "letter": "D",
          "text": "persuade an external organization to do business with you or approve a project"
        }
      ],
      "answer": "D",
      "explanation": "Mục tiêu chính của đề xuất kinh doanh (Business proposal) là thuyết phục khách hàng/đối tác đồng ý hợp tác hoặc phê duyệt dự án.",
      "imgFile": "de6_q15.jpg"
    },
    {
      "id": "de6_q16",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 16,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "What is the primary purpose of a cover letter?",
      "options": [
        {
          "letter": "A",
          "text": "To summarize experiences"
        },
        {
          "letter": "B",
          "text": "To provide an exhaustive list of qualifications"
        },
        {
          "letter": "C",
          "text": "To demonstrate personal lifestyle"
        },
        {
          "letter": "D",
          "text": "To introduce yourself and explain why you're suited for the position"
        }
      ],
      "answer": "D",
      "explanation": "Mục đích chính của Cover letter là giới thiệu bản thân và giải thích lý do bạn phù hợp nhất với vị trí ứng tuyển.",
      "imgFile": "de6_q16.jpg"
    },
    {
      "id": "de6_q17",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 17,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "An overview of your education, work experience, job-related skills, accomplishments, volunteer history, and certifications is a:",
      "options": [
        {
          "letter": "A",
          "text": "Cover letter"
        },
        {
          "letter": "B",
          "text": "Proposal"
        },
        {
          "letter": "C",
          "text": "Résumé"
        },
        {
          "letter": "D",
          "text": "Outline"
        }
      ],
      "answer": "C",
      "explanation": "Résumé (sơ yếu lý lịch) là tài liệu tóm tắt học vấn, kinh nghiệm làm việc, kỹ năng chuyên môn và chứng chỉ.",
      "imgFile": "de6_q17.jpg"
    },
    {
      "id": "de6_q18",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 18,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "In order to resolve burnout and pressure, positive coping practices (calmness, optimism, confidence) include:",
      "options": [
        {
          "letter": "A",
          "text": "regret, worry, rumor"
        },
        {
          "letter": "B",
          "text": "isolation, overtime, panic"
        },
        {
          "letter": "C",
          "text": "smoking, junk food, procrastination"
        },
        {
          "letter": "D",
          "text": "talking with others, cheerfulness, appreciation and exercise"
        }
      ],
      "answer": "D",
      "explanation": "Đối phó tích cực với căng thẳng và kiệt sức bao gồm giao tiếp chia sẻ, giữ tinh thần lạc quan, biết ơn và tập luyện.",
      "imgFile": "de6_q18.jpg"
    },
    {
      "id": "de6_q19",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 19,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "Which of the following is useless and should NOT be included on a professional resume?",
      "options": [
        {
          "letter": "A",
          "text": "Work experience"
        },
        {
          "letter": "B",
          "text": "Education background"
        },
        {
          "letter": "C",
          "text": "Job-related technical skills"
        },
        {
          "letter": "D",
          "text": "Irrelevant personal hobbies & habits (e.g., sleeping, playing video games)"
        }
      ],
      "answer": "D",
      "explanation": "Sở thích cá nhân không liên quan đến công việc không mang lại giá trị cho nhà tuyển dụng và chiếm chỗ quý giá trên CV.",
      "imgFile": "de6_q19.jpg"
    },
    {
      "id": "de6_q20",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 20,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "What does a career roadmap primarily aim to provide?",
      "options": [
        {
          "letter": "A",
          "text": "A detailed plan for retirement"
        },
        {
          "letter": "B",
          "text": "A step-by-step guide for acquiring skills and advancing in your career paths"
        },
        {
          "letter": "C",
          "text": "A list of potential job vacancies this month"
        },
        {
          "letter": "D",
          "text": "A summary of past work experiences"
        }
      ],
      "answer": "B",
      "explanation": "Lộ trình nghề nghiệp (Career roadmap) là hướng dẫn từng bước để phát triển năng lực và thăng tiến trong sự nghiệp.",
      "imgFile": "de6_q20.jpg"
    },
    {
      "id": "de6_q21",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 21,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Your manager displays a high level of seniority and responsibility. Which key traits best represent this manager?",
      "options": [
        {
          "letter": "A",
          "text": "Ambitious and self-confident"
        },
        {
          "letter": "B",
          "text": "Dependable and diligent"
        },
        {
          "letter": "C",
          "text": "Spontaneous and relaxed"
        },
        {
          "letter": "D",
          "text": "Self-sufficient and empathetic"
        }
      ],
      "answer": "B",
      "explanation": "Sự mẫu mực của người quản lý cấp cao thể hiện ở tính đáng tin cậy (dependable) và sự siêng năng, chu toàn (diligent).",
      "imgFile": "de6_q21.jpg"
    },
    {
      "id": "de6_q22",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 22,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Which of the following strategies CAN NOT support your efforts to develop or improve your cultural intelligence?",
      "options": [
        {
          "letter": "A",
          "text": "Reading books written by authors from diverse cultural backgrounds"
        },
        {
          "letter": "B",
          "text": "Participating in multicultural workshops, seminars, festivals, and events"
        },
        {
          "letter": "C",
          "text": "Traveling abroad or joining exchange learning programs"
        },
        {
          "letter": "D",
          "text": "Only working and interacting with people who share your exact same background and views"
        }
      ],
      "answer": "D",
      "explanation": "Chỉ tiếp xúc với những người cùng nền tảng và quan điểm sẽ thu hẹp tầm nhìn và cản trở việc phát triển trí tuệ văn hóa (CQ).",
      "imgFile": "de6_q22.jpg"
    },
    {
      "id": "de6_q23",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 23,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Why is being socially connected an important way of dealing with stress?",
      "options": [
        {
          "letter": "A",
          "text": "Because it prevents isolation and provides emotional support and fresh perspectives when stressed"
        },
        {
          "letter": "B",
          "text": "Because it forces you to spend money"
        },
        {
          "letter": "C",
          "text": "Because people will always take over your work"
        },
        {
          "letter": "D",
          "text": "Because it allows you to blame others"
        }
      ],
      "answer": "A",
      "explanation": "Kết nối xã hội giúp ngăn chặn sự cô lập, mang lại sự nâng đỡ về tinh thần và giảm bớt tác động tiêu cực của căng thẳng.",
      "imgFile": "de6_q23.jpg"
    },
    {
      "id": "de6_q24",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 24,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "What is the quickest and easiest way/mode to reduce acute conflict?",
      "options": [
        {
          "letter": "A",
          "text": "Physical separation"
        },
        {
          "letter": "B",
          "text": "Use of rules and regulations"
        },
        {
          "letter": "C",
          "text": "Third-party consultation"
        },
        {
          "letter": "D",
          "text": "Confrontation and negotiation"
        }
      ],
      "answer": "A",
      "explanation": "Tách biệt về mặt thể chất/vật lý (Physical separation) là biện pháp nhanh nhất và dễ thực hiện nhất để hạ nhiệt xung đột tức thời.",
      "imgFile": "de6_q24.jpg"
    },
    {
      "id": "de6_q25",
      "examId": "de6",
      "examTitle": "Đề số 06",
      "qIndex": 25,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Which of the following are the five modes for conflict resolution developed by Kenneth Thomas and Ralph Kilmann (TKI)?",
      "options": [
        {
          "letter": "A",
          "text": "Competing, Collaborating, Compromising, Avoiding, Accommodating"
        },
        {
          "letter": "B",
          "text": "Competing, Coordination, Aggravating, Avoidance, Ignore"
        },
        {
          "letter": "C",
          "text": "Competing, Commission, Compromising, Avoiding, Accommodating"
        },
        {
          "letter": "D",
          "text": "Combating, Collaborating, Appreciating, Reasonable, Ignore"
        }
      ],
      "answer": "A",
      "explanation": "5 phong cách quản lý xung đột Thomas-Kilmann gồm: Competing (Cạnh tranh), Collaborating (Hợp tác), Compromising (Thỏa hiệp), Avoiding (Né tránh), Accommodating (Nhượng bộ).",
      "imgFile": "de6_q25.jpg"
    }
  ],
  "de7": [
    {
      "id": "de7_q1",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 1,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "Which component is a key factor/situational influence that fosters cooperation within a group?",
      "options": [
        {
          "letter": "A",
          "text": "World-watching"
        },
        {
          "letter": "B",
          "text": "Group identification"
        },
        {
          "letter": "C",
          "text": "Open mind"
        },
        {
          "letter": "D",
          "text": "Generosity"
        }
      ],
      "answer": "B",
      "explanation": "Nhận diện nhóm (Group identification) là yếu tố tâm lý thúc đẩy các thành viên coi mình là một phần của tập thể và gia tăng sự hợp tác.",
      "imgFile": "de7_q1.jpg"
    },
    {
      "id": "de7_q2",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 2,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "What is the condition described where members need the help of one another to accomplish the purpose for which they joined the group?",
      "options": [
        {
          "letter": "A",
          "text": "Shared ability"
        },
        {
          "letter": "B",
          "text": "Interdependence"
        },
        {
          "letter": "C",
          "text": "Cooperation"
        },
        {
          "letter": "D",
          "text": "Unity"
        }
      ],
      "answer": "B",
      "explanation": "Tính tương thuộc (Interdependence) là trạng thái mà sự thành công của mỗi thành viên phụ thuộc mật thiết vào sự đóng góp của các thành viên khác.",
      "imgFile": "de7_q2.jpg"
    },
    {
      "id": "de7_q3",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 3,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "What is an over-boasted effect of having high self-concept?",
      "options": [
        {
          "letter": "A",
          "text": "Overestimating their abilities"
        },
        {
          "letter": "B",
          "text": "Rating themselves below average"
        },
        {
          "letter": "C",
          "text": "Seeking approval constantly"
        },
        {
          "letter": "D",
          "text": "Reluctance to take risks"
        }
      ],
      "answer": "A",
      "explanation": "Tự đánh giá quá cao (Overestimating abilities) hoặc hiệu ứng tốt hơn mức trung bình (better-than-average effect) là biểu hiện của tự tôn bị thổi phồng.",
      "imgFile": "de7_q3.jpg"
    },
    {
      "id": "de7_q4",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 4,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "What is NOT TRUE about the effect of upward comparison?",
      "options": [
        {
          "letter": "A",
          "text": "Dissatisfaction"
        },
        {
          "letter": "B",
          "text": "Inspiration"
        },
        {
          "letter": "C",
          "text": "Gratitude"
        },
        {
          "letter": "D",
          "text": "Envy"
        }
      ],
      "answer": "C",
      "explanation": "So sánh hướng lên (Upward comparison) tạo ra bất mãn, cảm hứng hoặc đố kỵ. Lòng biết ơn (Gratitude) sinh ra từ so sánh hướng xuống (Downward comparison).",
      "imgFile": "de7_q4.jpg"
    },
    {
      "id": "de7_q5",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 5,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "When should an organization decide to build teams?",
      "options": [
        {
          "letter": "A",
          "text": "When a broad range of competences and different skills are required"
        },
        {
          "letter": "B",
          "text": "When minimum discretion and routine simple tasks are required"
        },
        {
          "letter": "C",
          "text": "When individual tasks are completely independent"
        },
        {
          "letter": "D",
          "text": "When an organization rewards individuals for isolated results"
        }
      ],
      "answer": "A",
      "explanation": "Cần xây dựng nhóm khi công việc phức tạp đòi hỏi nhiều kỹ năng, năng lực chuyên môn đa dạng kết hợp lại.",
      "imgFile": "de7_q5.jpg"
    },
    {
      "id": "de7_q6",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 6,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "At the end of a meeting, the chairperson should:",
      "options": [
        {
          "letter": "A",
          "text": "Ask several exam questions to test the team members"
        },
        {
          "letter": "B",
          "text": "Be brief and summarize/recapture the key points and action items"
        },
        {
          "letter": "C",
          "text": "Be the first person to leave the meeting room"
        },
        {
          "letter": "D",
          "text": "Take group photos and upload to social media"
        }
      ],
      "answer": "B",
      "explanation": "Kết thúc cuộc họp cần ngắn gọn, tóm tắt các điểm thống nhất chính và phân công nhiệm vụ cụ thể.",
      "imgFile": "de7_q6.jpg"
    },
    {
      "id": "de7_q7",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 7,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "The person in charge of conducting and managing a meeting is the:",
      "options": [
        {
          "letter": "A",
          "text": "Group leader"
        },
        {
          "letter": "B",
          "text": "Host/sponsor"
        },
        {
          "letter": "C",
          "text": "Chairperson"
        },
        {
          "letter": "D",
          "text": "Recorder"
        }
      ],
      "answer": "C",
      "explanation": "Chairperson (chủ tọa) chịu trách nhiệm điều hành cuộc họp theo đúng chương trình nghị sự và kiểm soát tiến độ.",
      "imgFile": "de7_q7.jpg"
    },
    {
      "id": "de7_q8",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 8,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "In a communication transaction, feedback represents:",
      "options": [
        {
          "letter": "A",
          "text": "a person's physical and psychological environment"
        },
        {
          "letter": "B",
          "text": "anything that interferes with or inhibits effective communication"
        },
        {
          "letter": "C",
          "text": "the channel through which a message travels"
        },
        {
          "letter": "D",
          "text": "the response of the receiver to the message"
        }
      ],
      "answer": "D",
      "explanation": "Phản hồi (Feedback) là tín hiệu/phản ứng của người nhận gửi lại cho người phát sau khi tiếp nhận thông điệp.",
      "imgFile": "de7_q8.jpg"
    },
    {
      "id": "de7_q9",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 9,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Which type of feedback in Carl Rogers' model conveys positive sympathy, reassurance, and empathy for the source of the message?",
      "options": [
        {
          "letter": "A",
          "text": "Evaluative"
        },
        {
          "letter": "B",
          "text": "Interpretive"
        },
        {
          "letter": "C",
          "text": "Supportive"
        },
        {
          "letter": "D",
          "text": "Understanding"
        }
      ],
      "answer": "C",
      "explanation": "Supportive feedback (phản hồi hỗ trợ) thể hiện sự đồng cảm, khích lệ và tạo cảm giác an tâm cho người nói.",
      "imgFile": "de7_q9.jpg"
    },
    {
      "id": "de7_q10",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 10,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "What type of report is used to provide project status updates to management?",
      "options": [
        {
          "letter": "A",
          "text": "Progress Report"
        },
        {
          "letter": "B",
          "text": "Recommendation Report"
        },
        {
          "letter": "C",
          "text": "Summary Report"
        },
        {
          "letter": "D",
          "text": "Financial Report"
        }
      ],
      "answer": "A",
      "explanation": "Progress Report (báo cáo tiến độ) cập nhật tình hình thực hiện công việc, tiến độ hoàn thành so với kế hoạch ban đầu.",
      "imgFile": "de7_q10.jpg"
    },
    {
      "id": "de7_q11",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 11,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Which of the following is NOT one of Bloom's cognitive skill levels?",
      "options": [
        {
          "letter": "A",
          "text": "Evaluating"
        },
        {
          "letter": "B",
          "text": "Guiding"
        },
        {
          "letter": "C",
          "text": "Remembering"
        },
        {
          "letter": "D",
          "text": "Applying"
        }
      ],
      "answer": "B",
      "explanation": "6 cấp độ nhận thức của Bloom gồm: Remembering, Understanding, Applying, Analyzing, Evaluating, Creating. 'Guiding' không thuộc thang này.",
      "imgFile": "de7_q11.jpg"
    },
    {
      "id": "de7_q12",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 12,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "What do we do when we use logic? (Choose the primary function)",
      "options": [
        {
          "letter": "A",
          "text": "We evaluate the strength of arguments and distinguish valid from invalid reasoning"
        },
        {
          "letter": "B",
          "text": "We accept ideas unconditionally based on authority"
        },
        {
          "letter": "C",
          "text": "We gather emotional appeals to persuade"
        },
        {
          "letter": "D",
          "text": "We avoid questioning established facts"
        }
      ],
      "answer": "A",
      "explanation": "Logic là nghệ thuật và khoa học đánh giá sức mạnh của các lập luận, phân định chân lý và ngụy biện.",
      "imgFile": "de7_q12.jpg"
    },
    {
      "id": "de7_q13",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 13,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "In order to 'Define the problem' effectively, which actions should we take?",
      "options": [
        {
          "letter": "A",
          "text": "Identify the problem, Identify facts, Provide examples, Organize the information logically"
        },
        {
          "letter": "B",
          "text": "Identify your most important personal emotions"
        },
        {
          "letter": "C",
          "text": "Jump immediately to selecting the fastest solution"
        },
        {
          "letter": "D",
          "text": "Wait for external directives without gathering data"
        }
      ],
      "answer": "A",
      "explanation": "Xác định vấn đề đòi hỏi nhận diện đúng vấn đề, thu thập sự thật khách quan, đưa ví dụ và cấu trúc thông tin mạch lạc.",
      "imgFile": "de7_q13.jpg"
    },
    {
      "id": "de7_q14",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 14,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "What is the requirement of learning at the level of 'Analyze' in Bloom's taxonomy?",
      "options": [
        {
          "letter": "A",
          "text": "You need to memorize and repeat facts verbatim"
        },
        {
          "letter": "B",
          "text": "It is simply recognizing knowledge already gained"
        },
        {
          "letter": "C",
          "text": "You need to judge value based on criteria"
        },
        {
          "letter": "D",
          "text": "You need the ability to break down material into its constituent parts so that its organizational structure may be understood"
        }
      ],
      "answer": "D",
      "explanation": "Phân tích (Analyze) đòi hỏi khả năng chia nhỏ thông tin thành các thành phần cấu thành và hiểu rõ mối quan hệ giữa chúng.",
      "imgFile": "de7_q14.jpg"
    },
    {
      "id": "de7_q15",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 15,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Which technology tool helps students establish a sense of community with their class and engage in ongoing deep-thought discussions as opposed to typical synchronous classroom discussions?",
      "options": [
        {
          "letter": "A",
          "text": "Interactive whiteboards"
        },
        {
          "letter": "B",
          "text": "Discussion boards"
        },
        {
          "letter": "C",
          "text": "Student response clickers"
        },
        {
          "letter": "D",
          "text": "Digital camcorders"
        }
      ],
      "answer": "B",
      "explanation": "Discussion boards (diễn đàn thảo luận không đồng bộ) cho phép người học suy nghĩ thấu đáo và phản hồi sâu sắc hơn thảo luận trực tiếp.",
      "imgFile": "de7_q15.jpg"
    },
    {
      "id": "de7_q16",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 16,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "You are committed to a career change. What should you do right after analyzing your qualifications and job preferences?",
      "options": [
        {
          "letter": "A",
          "text": "Attend an interview immediately without research"
        },
        {
          "letter": "B",
          "text": "Obtain information about employment opportunities and market demand"
        },
        {
          "letter": "C",
          "text": "Send generic letters to random companies"
        },
        {
          "letter": "D",
          "text": "Wait for employers to contact you"
        }
      ],
      "answer": "B",
      "explanation": "Sau khi tự đánh giá năng lực và sở thích, bước kế tiếp là tìm hiểu thông tin thị trường lao động và các cơ hội việc làm khả thi.",
      "imgFile": "de7_q16.jpg"
    },
    {
      "id": "de7_q17",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 17,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "When evaluating or developing your career plan, what should you do first?",
      "options": [
        {
          "letter": "A",
          "text": "Look for a senior mentor"
        },
        {
          "letter": "B",
          "text": "Perform a self-assessment"
        },
        {
          "letter": "C",
          "text": "Apply for jobs immediately"
        },
        {
          "letter": "D",
          "text": "Set financial goals first"
        }
      ],
      "answer": "B",
      "explanation": "Bước đầu tiên trong quy trình lập kế hoạch nghề nghiệp luôn là Tự đánh giá bản thân (Self-assessment: sở thích, kỹ năng, giá trị).",
      "imgFile": "de7_q17.jpg"
    },
    {
      "id": "de7_q18",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 18,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "Which of the following actions is NOT suitable when preparing for a job interview?",
      "options": [
        {
          "letter": "A",
          "text": "Research the company"
        },
        {
          "letter": "B",
          "text": "Research other competitors in the industry"
        },
        {
          "letter": "C",
          "text": "Practice answering questions about your professional experience"
        },
        {
          "letter": "D",
          "text": "Prepare elaborate stories about private personal relationship details"
        }
      ],
      "answer": "D",
      "explanation": "Không nên đưa chi tiết đời sống riêng tư nhạy cảm vào buổi phỏng vấn; cần giữ tính chuyên nghiệp và bám sát công việc.",
      "imgFile": "de7_q18.jpg"
    },
    {
      "id": "de7_q19",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 19,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "Which of the following is NOT a good characteristic of a cover letter?",
      "options": [
        {
          "letter": "A",
          "text": "It states what position you are interested in"
        },
        {
          "letter": "B",
          "text": "It explains why you are suited for the job and company"
        },
        {
          "letter": "C",
          "text": "It requests an interview at the end"
        },
        {
          "letter": "D",
          "text": "It complains about your former employer and past dissatisfaction"
        }
      ],
      "answer": "D",
      "explanation": "Tuyệt đối không phàn nàn, nói xấu công ty cũ hay thể hiện thái độ tiêu cực trong thư ứng tuyển.",
      "imgFile": "de7_q19.jpg"
    },
    {
      "id": "de7_q20",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 20,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "What is the standard guidance regarding references on a 1-page modern resume?",
      "options": [
        {
          "letter": "A",
          "text": "Always write full personal contact details of at least 5 relatives"
        },
        {
          "letter": "B",
          "text": "Omit references or provide them on a separate sheet upon request to save space"
        },
        {
          "letter": "C",
          "text": "Put references at the very top before work history"
        },
        {
          "letter": "D",
          "text": "Replace the work experience section with references"
        }
      ],
      "answer": "B",
      "explanation": "Quy tắc viết CV hiện đại: chỉ cung cấp người tham chiếu (References) khi có yêu cầu để tiết kiệm diện tích cho kỹ năng và thành tựu.",
      "imgFile": "de7_q20.jpg"
    },
    {
      "id": "de7_q21",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 21,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "'An expressed struggle between interdependent parties over goals which they perceive as incompatible or resources which they perceive as scarce' is the definition of:",
      "options": [
        {
          "letter": "A",
          "text": "Negotiation"
        },
        {
          "letter": "B",
          "text": "Conflict"
        },
        {
          "letter": "C",
          "text": "Frustration"
        },
        {
          "letter": "D",
          "text": "Bargaining"
        }
      ],
      "answer": "B",
      "explanation": "Định nghĩa kinh điển của Hocker & Wilmot về Xung đột (Conflict): sự tranh đấu giữa các bên tương thuộc có mục tiêu xung khắc hoặc tài nguyên khan hiếm.",
      "imgFile": "de7_q21.jpg"
    },
    {
      "id": "de7_q22",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 22,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "...cultures focus on the needs of the nation, community, family, or collective group over individual desires.",
      "options": [
        {
          "letter": "A",
          "text": "Collectivistic"
        },
        {
          "letter": "B",
          "text": "Individualistic"
        },
        {
          "letter": "C",
          "text": "Low-Power Distance"
        },
        {
          "letter": "D",
          "text": "High-Power Distance"
        }
      ],
      "answer": "A",
      "explanation": "Văn hóa tập thể (Collectivistic cultures - theo Hofstede) đề cao lợi ích cộng đồng, gia đình và nhóm hơn quyền lợi cá nhân riêng lẻ.",
      "imgFile": "de7_q22.jpg"
    },
    {
      "id": "de7_q23",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 23,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "According to the power-dependence model, John may try to negotiate or bargain with Kelly if:",
      "options": [
        {
          "letter": "A",
          "text": "Kelly has more situational power, but John has alternative resources or dependence is not absolute"
        },
        {
          "letter": "B",
          "text": "John has zero power and Kelly controls everything"
        },
        {
          "letter": "C",
          "text": "Kelly has no interest in John's contributions"
        },
        {
          "letter": "D",
          "text": "John has completely surrendered to Kelly"
        }
      ],
      "answer": "A",
      "explanation": "Thương lượng xảy ra khi giữa hai bên có sự phụ thuộc lẫn nhau và bên yếu thế vẫn nắm giữ một giá trị nhất định có thể trao đổi.",
      "imgFile": "de7_q23.jpg"
    },
    {
      "id": "de7_q24",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 24,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "What is TRUE about chronic stress?",
      "options": [
        {
          "letter": "A",
          "text": "Chronic stress can impair your immune system and disrupt almost all body processes, leading to serious health risks"
        },
        {
          "letter": "B",
          "text": "Chronic stress improves mental resilience permanently"
        },
        {
          "letter": "C",
          "text": "Chronic stress is beneficial for digestion"
        },
        {
          "letter": "D",
          "text": "Chronic stress does not affect cardiovascular health"
        }
      ],
      "answer": "A",
      "explanation": "Căng thẳng mãn tính (chronic stress) phá hủy hệ miễn dịch và gây rối loạn các cơ quan trong cơ thể, gia tăng nguy cơ bệnh lý nghiêm trọng.",
      "imgFile": "de7_q24.jpg"
    },
    {
      "id": "de7_q25",
      "examId": "de7",
      "examTitle": "Đề số 07",
      "qIndex": 25,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Formal Authority is another name for which base of power (French & Raven)?",
      "options": [
        {
          "letter": "A",
          "text": "Expert Power"
        },
        {
          "letter": "B",
          "text": "Legitimate Power"
        },
        {
          "letter": "C",
          "text": "Reward Power"
        },
        {
          "letter": "D",
          "text": "Coercive Power"
        }
      ],
      "answer": "B",
      "explanation": "Legitimate Power (quyền lực hợp pháp) xuất phát từ thẩm quyền chính thức (formal authority) và chức vụ trong cơ cấu tổ chức.",
      "imgFile": "de7_q25.jpg"
    }
  ],
  "de8": [
    {
      "id": "de8_q1",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 1,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "Which component is a key factor/situational influence that fosters cooperation within a group?",
      "options": [
        {
          "letter": "A",
          "text": "World-watching"
        },
        {
          "letter": "B",
          "text": "Group identification"
        },
        {
          "letter": "C",
          "text": "Open mind"
        },
        {
          "letter": "D",
          "text": "Generosity"
        }
      ],
      "answer": "B",
      "explanation": "Nhận diện nhóm (Group identification) là yếu tố tâm lý thúc đẩy các thành viên coi mình là một phần của tập thể và gia tăng sự hợp tác.",
      "imgFile": "de8_q1.jpg"
    },
    {
      "id": "de8_q2",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 2,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "What is the condition described where members need the help of one another to accomplish the purpose for which they joined the group?",
      "options": [
        {
          "letter": "A",
          "text": "Shared ability"
        },
        {
          "letter": "B",
          "text": "Interdependence"
        },
        {
          "letter": "C",
          "text": "Cooperation"
        },
        {
          "letter": "D",
          "text": "Unity"
        }
      ],
      "answer": "B",
      "explanation": "Tính tương thuộc (Interdependence) là trạng thái mà sự thành công của mỗi thành viên phụ thuộc mật thiết vào sự đóng góp của các thành viên khác.",
      "imgFile": "de8_q2.jpg"
    },
    {
      "id": "de8_q3",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 3,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "What is an over-boasted effect of having high self-concept?",
      "options": [
        {
          "letter": "A",
          "text": "Overestimating their abilities"
        },
        {
          "letter": "B",
          "text": "Rating themselves below average"
        },
        {
          "letter": "C",
          "text": "Seeking approval constantly"
        },
        {
          "letter": "D",
          "text": "Reluctance to take risks"
        }
      ],
      "answer": "A",
      "explanation": "Tự đánh giá quá cao (Overestimating abilities) hoặc hiệu ứng tốt hơn mức trung bình (better-than-average effect) là biểu hiện của tự tôn bị thổi phồng.",
      "imgFile": "de8_q3.jpg"
    },
    {
      "id": "de8_q4",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 4,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "What is NOT TRUE about the effect of upward comparison?",
      "options": [
        {
          "letter": "A",
          "text": "Dissatisfaction"
        },
        {
          "letter": "B",
          "text": "Inspiration"
        },
        {
          "letter": "C",
          "text": "Gratitude"
        },
        {
          "letter": "D",
          "text": "Envy"
        }
      ],
      "answer": "C",
      "explanation": "So sánh hướng lên (Upward comparison) tạo ra bất mãn, cảm hứng hoặc đố kỵ. Lòng biết ơn (Gratitude) sinh ra từ so sánh hướng xuống (Downward comparison).",
      "imgFile": "de8_q4.jpg"
    },
    {
      "id": "de8_q5",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 5,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "When should an organization decide to build teams?",
      "options": [
        {
          "letter": "A",
          "text": "When a broad range of competences and different skills are required"
        },
        {
          "letter": "B",
          "text": "When minimum discretion and routine simple tasks are required"
        },
        {
          "letter": "C",
          "text": "When individual tasks are completely independent"
        },
        {
          "letter": "D",
          "text": "When an organization rewards individuals for isolated results"
        }
      ],
      "answer": "A",
      "explanation": "Cần xây dựng nhóm khi công việc phức tạp đòi hỏi nhiều kỹ năng, năng lực chuyên môn đa dạng kết hợp lại.",
      "imgFile": "de8_q5.jpg"
    },
    {
      "id": "de8_q6",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 6,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "At the end of a meeting, the chairperson should:",
      "options": [
        {
          "letter": "A",
          "text": "Ask several exam questions to test the team members"
        },
        {
          "letter": "B",
          "text": "Be brief and summarize/recapture the key points and action items"
        },
        {
          "letter": "C",
          "text": "Be the first person to leave the meeting room"
        },
        {
          "letter": "D",
          "text": "Take group photos and upload to social media"
        }
      ],
      "answer": "B",
      "explanation": "Kết thúc cuộc họp cần ngắn gọn, tóm tắt các điểm thống nhất chính và phân công nhiệm vụ cụ thể.",
      "imgFile": "de8_q6.jpg"
    },
    {
      "id": "de8_q7",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 7,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "The person in charge of conducting and managing a meeting is the:",
      "options": [
        {
          "letter": "A",
          "text": "Group leader"
        },
        {
          "letter": "B",
          "text": "Host/sponsor"
        },
        {
          "letter": "C",
          "text": "Chairperson"
        },
        {
          "letter": "D",
          "text": "Recorder"
        }
      ],
      "answer": "C",
      "explanation": "Chairperson (chủ tọa) chịu trách nhiệm điều hành cuộc họp theo đúng chương trình nghị sự và kiểm soát tiến độ.",
      "imgFile": "de8_q7.jpg"
    },
    {
      "id": "de8_q8",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 8,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "In a communication transaction, feedback represents:",
      "options": [
        {
          "letter": "A",
          "text": "a person's physical and psychological environment"
        },
        {
          "letter": "B",
          "text": "anything that interferes with or inhibits effective communication"
        },
        {
          "letter": "C",
          "text": "the channel through which a message travels"
        },
        {
          "letter": "D",
          "text": "the response of the receiver to the message"
        }
      ],
      "answer": "D",
      "explanation": "Phản hồi (Feedback) là tín hiệu/phản ứng của người nhận gửi lại cho người phát sau khi tiếp nhận thông điệp.",
      "imgFile": "de8_q8.jpg"
    },
    {
      "id": "de8_q9",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 9,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Which type of feedback in Carl Rogers' model conveys positive sympathy, reassurance, and empathy for the source of the message?",
      "options": [
        {
          "letter": "A",
          "text": "Evaluative"
        },
        {
          "letter": "B",
          "text": "Interpretive"
        },
        {
          "letter": "C",
          "text": "Supportive"
        },
        {
          "letter": "D",
          "text": "Understanding"
        }
      ],
      "answer": "C",
      "explanation": "Supportive feedback (phản hồi hỗ trợ) thể hiện sự đồng cảm, khích lệ và tạo cảm giác an tâm cho người nói.",
      "imgFile": "de8_q9.jpg"
    },
    {
      "id": "de8_q10",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 10,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "What type of report is used to provide project status updates to management?",
      "options": [
        {
          "letter": "A",
          "text": "Progress Report"
        },
        {
          "letter": "B",
          "text": "Recommendation Report"
        },
        {
          "letter": "C",
          "text": "Summary Report"
        },
        {
          "letter": "D",
          "text": "Financial Report"
        }
      ],
      "answer": "A",
      "explanation": "Progress Report (báo cáo tiến độ) cập nhật tình hình thực hiện công việc, tiến độ hoàn thành so với kế hoạch ban đầu.",
      "imgFile": "de8_q10.jpg"
    },
    {
      "id": "de8_q11",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 11,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Which of the following is NOT one of Bloom's cognitive skill levels?",
      "options": [
        {
          "letter": "A",
          "text": "Evaluating"
        },
        {
          "letter": "B",
          "text": "Guiding"
        },
        {
          "letter": "C",
          "text": "Remembering"
        },
        {
          "letter": "D",
          "text": "Applying"
        }
      ],
      "answer": "B",
      "explanation": "6 cấp độ nhận thức của Bloom gồm: Remembering, Understanding, Applying, Analyzing, Evaluating, Creating. 'Guiding' không thuộc thang này.",
      "imgFile": "de8_q11.jpg"
    },
    {
      "id": "de8_q12",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 12,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "What do we do when we use logic? (Choose the primary function)",
      "options": [
        {
          "letter": "A",
          "text": "We evaluate the strength of arguments and distinguish valid from invalid reasoning"
        },
        {
          "letter": "B",
          "text": "We accept ideas unconditionally based on authority"
        },
        {
          "letter": "C",
          "text": "We gather emotional appeals to persuade"
        },
        {
          "letter": "D",
          "text": "We avoid questioning established facts"
        }
      ],
      "answer": "A",
      "explanation": "Logic là nghệ thuật và khoa học đánh giá sức mạnh của các lập luận, phân định chân lý và ngụy biện.",
      "imgFile": "de8_q12.jpg"
    },
    {
      "id": "de8_q13",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 13,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "In order to 'Define the problem' effectively, which actions should we take?",
      "options": [
        {
          "letter": "A",
          "text": "Identify the problem, Identify facts, Provide examples, Organize the information logically"
        },
        {
          "letter": "B",
          "text": "Identify your most important personal emotions"
        },
        {
          "letter": "C",
          "text": "Jump immediately to selecting the fastest solution"
        },
        {
          "letter": "D",
          "text": "Wait for external directives without gathering data"
        }
      ],
      "answer": "A",
      "explanation": "Xác định vấn đề đòi hỏi nhận diện đúng vấn đề, thu thập sự thật khách quan, đưa ví dụ và cấu trúc thông tin mạch lạc.",
      "imgFile": "de8_q13.jpg"
    },
    {
      "id": "de8_q14",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 14,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "What is the requirement of learning at the level of 'Analyze' in Bloom's taxonomy?",
      "options": [
        {
          "letter": "A",
          "text": "You need to memorize and repeat facts verbatim"
        },
        {
          "letter": "B",
          "text": "It is simply recognizing knowledge already gained"
        },
        {
          "letter": "C",
          "text": "You need to judge value based on criteria"
        },
        {
          "letter": "D",
          "text": "You need the ability to break down material into its constituent parts so that its organizational structure may be understood"
        }
      ],
      "answer": "D",
      "explanation": "Phân tích (Analyze) đòi hỏi khả năng chia nhỏ thông tin thành các thành phần cấu thành và hiểu rõ mối quan hệ giữa chúng.",
      "imgFile": "de8_q14.jpg"
    },
    {
      "id": "de8_q15",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 15,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Which technology tool helps students establish a sense of community with their class and engage in ongoing deep-thought discussions as opposed to typical synchronous classroom discussions?",
      "options": [
        {
          "letter": "A",
          "text": "Interactive whiteboards"
        },
        {
          "letter": "B",
          "text": "Discussion boards"
        },
        {
          "letter": "C",
          "text": "Student response clickers"
        },
        {
          "letter": "D",
          "text": "Digital camcorders"
        }
      ],
      "answer": "B",
      "explanation": "Discussion boards (diễn đàn thảo luận không đồng bộ) cho phép người học suy nghĩ thấu đáo và phản hồi sâu sắc hơn thảo luận trực tiếp.",
      "imgFile": "de8_q15.jpg"
    },
    {
      "id": "de8_q16",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 16,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "You are committed to a career change. What should you do right after analyzing your qualifications and job preferences?",
      "options": [
        {
          "letter": "A",
          "text": "Attend an interview immediately without research"
        },
        {
          "letter": "B",
          "text": "Obtain information about employment opportunities and market demand"
        },
        {
          "letter": "C",
          "text": "Send generic letters to random companies"
        },
        {
          "letter": "D",
          "text": "Wait for employers to contact you"
        }
      ],
      "answer": "B",
      "explanation": "Sau khi tự đánh giá năng lực và sở thích, bước kế tiếp là tìm hiểu thông tin thị trường lao động và các cơ hội việc làm khả thi.",
      "imgFile": "de8_q16.jpg"
    },
    {
      "id": "de8_q17",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 17,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "When evaluating or developing your career plan, what should you do first?",
      "options": [
        {
          "letter": "A",
          "text": "Look for a senior mentor"
        },
        {
          "letter": "B",
          "text": "Perform a self-assessment"
        },
        {
          "letter": "C",
          "text": "Apply for jobs immediately"
        },
        {
          "letter": "D",
          "text": "Set financial goals first"
        }
      ],
      "answer": "B",
      "explanation": "Bước đầu tiên trong quy trình lập kế hoạch nghề nghiệp luôn là Tự đánh giá bản thân (Self-assessment: sở thích, kỹ năng, giá trị).",
      "imgFile": "de8_q17.jpg"
    },
    {
      "id": "de8_q18",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 18,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "Which of the following actions is NOT suitable when preparing for a job interview?",
      "options": [
        {
          "letter": "A",
          "text": "Research the company"
        },
        {
          "letter": "B",
          "text": "Research other competitors in the industry"
        },
        {
          "letter": "C",
          "text": "Practice answering questions about your professional experience"
        },
        {
          "letter": "D",
          "text": "Prepare elaborate stories about private personal relationship details"
        }
      ],
      "answer": "D",
      "explanation": "Không nên đưa chi tiết đời sống riêng tư nhạy cảm vào buổi phỏng vấn; cần giữ tính chuyên nghiệp và bám sát công việc.",
      "imgFile": "de8_q18.jpg"
    },
    {
      "id": "de8_q19",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 19,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "Which of the following is NOT a good characteristic of a cover letter?",
      "options": [
        {
          "letter": "A",
          "text": "It states what position you are interested in"
        },
        {
          "letter": "B",
          "text": "It explains why you are suited for the job and company"
        },
        {
          "letter": "C",
          "text": "It requests an interview at the end"
        },
        {
          "letter": "D",
          "text": "It complains about your former employer and past dissatisfaction"
        }
      ],
      "answer": "D",
      "explanation": "Tuyệt đối không phàn nàn, nói xấu công ty cũ hay thể hiện thái độ tiêu cực trong thư ứng tuyển.",
      "imgFile": "de8_q19.jpg"
    },
    {
      "id": "de8_q20",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 20,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "What is the standard guidance regarding references on a 1-page modern resume?",
      "options": [
        {
          "letter": "A",
          "text": "Always write full personal contact details of at least 5 relatives"
        },
        {
          "letter": "B",
          "text": "Omit references or provide them on a separate sheet upon request to save space"
        },
        {
          "letter": "C",
          "text": "Put references at the very top before work history"
        },
        {
          "letter": "D",
          "text": "Replace the work experience section with references"
        }
      ],
      "answer": "B",
      "explanation": "Quy tắc viết CV hiện đại: chỉ cung cấp người tham chiếu (References) khi có yêu cầu để tiết kiệm diện tích cho kỹ năng và thành tựu.",
      "imgFile": "de8_q20.jpg"
    },
    {
      "id": "de8_q21",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 21,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "'An expressed struggle between interdependent parties over goals which they perceive as incompatible or resources which they perceive as scarce' is the definition of:",
      "options": [
        {
          "letter": "A",
          "text": "Negotiation"
        },
        {
          "letter": "B",
          "text": "Conflict"
        },
        {
          "letter": "C",
          "text": "Frustration"
        },
        {
          "letter": "D",
          "text": "Bargaining"
        }
      ],
      "answer": "B",
      "explanation": "Định nghĩa kinh điển của Hocker & Wilmot về Xung đột (Conflict): sự tranh đấu giữa các bên tương thuộc có mục tiêu xung khắc hoặc tài nguyên khan hiếm.",
      "imgFile": "de8_q21.jpg"
    },
    {
      "id": "de8_q22",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 22,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "...cultures focus on the needs of the nation, community, family, or collective group over individual desires.",
      "options": [
        {
          "letter": "A",
          "text": "Collectivistic"
        },
        {
          "letter": "B",
          "text": "Individualistic"
        },
        {
          "letter": "C",
          "text": "Low-Power Distance"
        },
        {
          "letter": "D",
          "text": "High-Power Distance"
        }
      ],
      "answer": "A",
      "explanation": "Văn hóa tập thể (Collectivistic cultures - theo Hofstede) đề cao lợi ích cộng đồng, gia đình và nhóm hơn quyền lợi cá nhân riêng lẻ.",
      "imgFile": "de8_q22.jpg"
    },
    {
      "id": "de8_q23",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 23,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "According to the power-dependence model, John may try to negotiate or bargain with Kelly if:",
      "options": [
        {
          "letter": "A",
          "text": "Kelly has more situational power, but John has alternative resources or dependence is not absolute"
        },
        {
          "letter": "B",
          "text": "John has zero power and Kelly controls everything"
        },
        {
          "letter": "C",
          "text": "Kelly has no interest in John's contributions"
        },
        {
          "letter": "D",
          "text": "John has completely surrendered to Kelly"
        }
      ],
      "answer": "A",
      "explanation": "Thương lượng xảy ra khi giữa hai bên có sự phụ thuộc lẫn nhau và bên yếu thế vẫn nắm giữ một giá trị nhất định có thể trao đổi.",
      "imgFile": "de8_q23.jpg"
    },
    {
      "id": "de8_q24",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 24,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "What is TRUE about chronic stress?",
      "options": [
        {
          "letter": "A",
          "text": "Chronic stress can impair your immune system and disrupt almost all body processes, leading to serious health risks"
        },
        {
          "letter": "B",
          "text": "Chronic stress improves mental resilience permanently"
        },
        {
          "letter": "C",
          "text": "Chronic stress is beneficial for digestion"
        },
        {
          "letter": "D",
          "text": "Chronic stress does not affect cardiovascular health"
        }
      ],
      "answer": "A",
      "explanation": "Căng thẳng mãn tính (chronic stress) phá hủy hệ miễn dịch và gây rối loạn các cơ quan trong cơ thể, gia tăng nguy cơ bệnh lý nghiêm trọng.",
      "imgFile": "de8_q24.jpg"
    },
    {
      "id": "de8_q25",
      "examId": "de8",
      "examTitle": "Đề số 08",
      "qIndex": 25,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Formal Authority is another name for which base of power (French & Raven)?",
      "options": [
        {
          "letter": "A",
          "text": "Expert Power"
        },
        {
          "letter": "B",
          "text": "Legitimate Power"
        },
        {
          "letter": "C",
          "text": "Reward Power"
        },
        {
          "letter": "D",
          "text": "Coercive Power"
        }
      ],
      "answer": "B",
      "explanation": "Legitimate Power (quyền lực hợp pháp) xuất phát từ thẩm quyền chính thức (formal authority) và chức vụ trong cơ cấu tổ chức.",
      "imgFile": "de8_q25.jpg"
    }
  ],
  "de9": [
    {
      "id": "de9_q1",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 1,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "A team is called a Contract Team if:",
      "options": [
        {
          "letter": "A",
          "text": "Team members have other duties to perform in their normal functional units"
        },
        {
          "letter": "B",
          "text": "Team retains responsibility for both daily work and project work"
        },
        {
          "letter": "C",
          "text": "Team members report to different functional managers"
        },
        {
          "letter": "D",
          "text": "Team is brought in from the outside in order to do project work under contract"
        }
      ],
      "answer": "D",
      "explanation": "Nhóm hợp đồng (Contract team) là nhóm được thuê từ bên ngoài tổ chức để thực hiện công việc cụ thể theo hợp đồng ký kết.",
      "imgFile": "de9_q1.jpg"
    },
    {
      "id": "de9_q2",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 2,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "Why are team tasks and complex goals often impossible to achieve by a single individual alone?",
      "options": [
        {
          "letter": "A",
          "text": "Time and resource constraints"
        },
        {
          "letter": "B",
          "text": "Few individuals possess all the competences and related expertise required"
        },
        {
          "letter": "C",
          "text": "Individuals lack personal motivations entirely"
        },
        {
          "letter": "D",
          "text": "Organizations prohibit individual contributions"
        }
      ],
      "answer": "B",
      "explanation": "Hiếm có một cá nhân nào sở hữu đầy đủ toàn bộ kiến thức, chuyên môn và kỹ năng cần thiết để hoàn thành các mục tiêu phức tạp.",
      "imgFile": "de9_q2.jpg"
    },
    {
      "id": "de9_q3",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 3,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "M and Q are friends from school. M gives Q gas money for Q's motorbike because Q drives M to school daily. According to SVO, M is demonstrating:",
      "options": [
        {
          "letter": "A",
          "text": "Individualistic orientation"
        },
        {
          "letter": "B",
          "text": "Cooperative orientation"
        },
        {
          "letter": "C",
          "text": "Competitive orientation"
        },
        {
          "letter": "D",
          "text": "Accommodating orientation"
        }
      ],
      "answer": "B",
      "explanation": "Định hướng hợp tác (Cooperative orientation) hướng tới công bằng và cùng có lợi giữa các bên trong mối quan hệ.",
      "imgFile": "de9_q3.jpg"
    },
    {
      "id": "de9_q4",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 4,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "Which of the following is NOT a negative outcome of Groupthink?",
      "options": [
        {
          "letter": "A",
          "text": "Incomplete survey of alternative courses of action"
        },
        {
          "letter": "B",
          "text": "Failure to examine contingency plans"
        },
        {
          "letter": "C",
          "text": "Failure to seek outside expert opinion"
        },
        {
          "letter": "D",
          "text": "Actively seeking diverse viewpoints and fresh critical insights"
        }
      ],
      "answer": "D",
      "explanation": "Groupthink dập tắt các góc nhìn trái chiều; việc tích cực tìm kiếm góc nhìn đa dạng là giải pháp phòng ngừa, không phải hệ quả của Groupthink.",
      "imgFile": "de9_q4.jpg"
    },
    {
      "id": "de9_q5",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 5,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "What is the condition described where members need the help of one another to accomplish the purpose for which they joined the group?",
      "options": [
        {
          "letter": "A",
          "text": "Shared ability"
        },
        {
          "letter": "B",
          "text": "Interdependence"
        },
        {
          "letter": "C",
          "text": "Cooperation"
        },
        {
          "letter": "D",
          "text": "Unity"
        }
      ],
      "answer": "B",
      "explanation": "Tính tương thuộc (Interdependence) là thuộc tính cốt lõi của một nhóm khi các cá nhân gắn kết trách nhiệm với nhau.",
      "imgFile": "de9_q5.jpg"
    },
    {
      "id": "de9_q6",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 6,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Which is TRUE about meeting minutes?",
      "options": [
        {
          "letter": "A",
          "text": "Minutes are a written document that records interactions and summarizes major points, decisions, and actions assigned"
        },
        {
          "letter": "B",
          "text": "The main purpose of minutes is to advertise products to external clients"
        },
        {
          "letter": "C",
          "text": "Minutes are personal diary entries of the chairperson"
        },
        {
          "letter": "D",
          "text": "Minutes should be kept strictly secret from participants"
        }
      ],
      "answer": "A",
      "explanation": "Biên bản cuộc họp ghi chép chính thức diễn biến, các quyết định đã thông qua và phân công trách nhiệm cho các bên.",
      "imgFile": "de9_q6.jpg"
    },
    {
      "id": "de9_q7",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 7,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Which of the following best describes the term 'Readability' in professional document writing?",
      "options": [
        {
          "letter": "A",
          "text": "The price of the printing paper"
        },
        {
          "letter": "B",
          "text": "The decorative font colors used in headlines"
        },
        {
          "letter": "C",
          "text": "The ease with which a reader can understand and navigate a written text"
        },
        {
          "letter": "D",
          "text": "The length of the document"
        }
      ],
      "answer": "C",
      "explanation": "Độ dễ đọc (Readability) thể hiện mức độ người đọc có thể tiếp thu và hiểu thông điệp văn bản một cách thuận tiện và chính xác.",
      "imgFile": "de9_q7.jpg"
    },
    {
      "id": "de9_q8",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 8,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Which of the following is BAD advice for group meetings?",
      "options": [
        {
          "letter": "A",
          "text": "Extending the meeting time indefinitely until 100% consensus is reached"
        },
        {
          "letter": "B",
          "text": "Following a clear, time-boxed agenda"
        },
        {
          "letter": "C",
          "text": "Encouraging quiet members to share their insights"
        },
        {
          "letter": "D",
          "text": "Recording actionable next steps and owners"
        }
      ],
      "answer": "A",
      "explanation": "Kéo dài cuộc họp vô tận làm suy kiệt năng lượng và giảm hiệu suất công việc; cần giới hạn thời gian hợp lý và biểu quyết khi cần.",
      "imgFile": "de9_q8.jpg"
    },
    {
      "id": "de9_q9",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 9,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "An employee receives an inquiry email from a key client about an issue they do not immediately know the answer to. What should they do?",
      "options": [
        {
          "letter": "A",
          "text": "Guess the answer quickly to appear competent"
        },
        {
          "letter": "B",
          "text": "Ignore the email until the answer is found weeks later"
        },
        {
          "letter": "C",
          "text": "Forward without telling the client and delete the thread"
        },
        {
          "letter": "D",
          "text": "Acknowledge receipt promptly (within 24h), state you are investigating, and provide an expected follow-up time"
        }
      ],
      "answer": "D",
      "explanation": "Phép lịch sự trong email kinh doanh: phản hồi xác nhận trong vòng 24 giờ, thông báo đang xử lý và hẹn thời gian cập nhật cụ thể.",
      "imgFile": "de9_q9.jpg"
    },
    {
      "id": "de9_q10",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 10,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Which of the following is the best example of constructive feedback?",
      "options": [
        {
          "letter": "A",
          "text": "'Your report is completely terrible and useless.'"
        },
        {
          "letter": "B",
          "text": "'I noticed some calculation errors in section 3; let's verify those figures together to ensure the proposal is bulletproof.'"
        },
        {
          "letter": "C",
          "text": "'Everything you do is flawless, no need to check anything.'"
        },
        {
          "letter": "D",
          "text": "Ignoring the mistakes entirely to protect feelings"
        }
      ],
      "answer": "B",
      "explanation": "Phản hồi mang tính xây dựng (Constructive feedback) chỉ rõ điểm cần cải thiện một cách khách quan kèm đề xuất giải pháp tích cực.",
      "imgFile": "de9_q10.jpg"
    },
    {
      "id": "de9_q11",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 11,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "What are key characteristics of critical thinkers?",
      "options": [
        {
          "letter": "A",
          "text": "Examining assumptions"
        },
        {
          "letter": "B",
          "text": "Challenging reasoning and validity of claims"
        },
        {
          "letter": "C",
          "text": "Uncovering biases and blind spots"
        },
        {
          "letter": "D",
          "text": "All of these are correct"
        }
      ],
      "answer": "D",
      "explanation": "Người có tư duy phản biện luôn rà soát giả định, kiểm tra tính logic của lập luận và nhận diện các thiên kiến nhận thức.",
      "imgFile": "de9_q11.jpg"
    },
    {
      "id": "de9_q12",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 12,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Which technology tool is primarily leveraged during the 'Understanding' stage in Bloom's digital taxonomy for collaborative comprehension?",
      "options": [
        {
          "letter": "A",
          "text": "Wikispaces / Wikis"
        },
        {
          "letter": "B",
          "text": "Spreadsheet formulas"
        },
        {
          "letter": "C",
          "text": "Video rendering engine"
        },
        {
          "letter": "D",
          "text": "Syntax compilers"
        }
      ],
      "answer": "A",
      "explanation": "Wikispaces/Wikis cho phép người học phân loại, giải thích và xây dựng hiểu biết chung (Understanding) theo Bloom.",
      "imgFile": "de9_q12.jpg"
    },
    {
      "id": "de9_q13",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 13,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Which of the following is NOT a characteristic of critical thinkers?",
      "options": [
        {
          "letter": "A",
          "text": "Uncovering biases"
        },
        {
          "letter": "B",
          "text": "Examining assumptions"
        },
        {
          "letter": "C",
          "text": "Total, unquestioning acceptance of authority"
        },
        {
          "letter": "D",
          "text": "Healthy skepticism and open-minded inquiry"
        }
      ],
      "answer": "C",
      "explanation": "Tư duy phản biện bài trừ sự tin theo mù quáng hoặc phục tùng quyền lực mà không qua kiểm chứng logic.",
      "imgFile": "de9_q13.jpg"
    },
    {
      "id": "de9_q14",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 14,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Which of the following is NOT a cognitive skill level in Bloom's taxonomy?",
      "options": [
        {
          "letter": "A",
          "text": "Evaluating"
        },
        {
          "letter": "B",
          "text": "Guiding"
        },
        {
          "letter": "C",
          "text": "Remembering"
        },
        {
          "letter": "D",
          "text": "Applying"
        }
      ],
      "answer": "B",
      "explanation": "Bloom gồm 6 bậc nhận thức: Remembering, Understanding, Applying, Analyzing, Evaluating, Creating. 'Guiding' không thuộc hệ thống này.",
      "imgFile": "de9_q14.jpg"
    },
    {
      "id": "de9_q15",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 15,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Which statement is NOT true about creativity?",
      "options": [
        {
          "letter": "A",
          "text": "All humans are inherently creative, especially in problem solving"
        },
        {
          "letter": "B",
          "text": "Creative thinkers are curious, optimistic, and imaginative"
        },
        {
          "letter": "C",
          "text": "Creativity is finished and disappears once an initial problem is solved"
        },
        {
          "letter": "D",
          "text": "Creativity can be trained and enhanced through deliberate practice"
        }
      ],
      "answer": "C",
      "explanation": "Sáng tạo là một quá trình liên tục không ngừng nghỉ, luôn tìm kiếm giải pháp và cách tiếp cận mới mẻ.",
      "imgFile": "de9_q15.jpg"
    },
    {
      "id": "de9_q16",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 16,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "...is the continuous, lifelong process of building your skills, knowledge, and experiences related to your professional life.",
      "options": [
        {
          "letter": "A",
          "text": "Temporary employment"
        },
        {
          "letter": "B",
          "text": "An occupation"
        },
        {
          "letter": "C",
          "text": "A career"
        },
        {
          "letter": "D",
          "text": "A job description"
        }
      ],
      "answer": "C",
      "explanation": "Sự nghiệp (Career) là hành trình lâu dài phát triển tri thức, kỹ năng và trải nghiệm nghề nghiệp xuyên suốt cuộc đời.",
      "imgFile": "de9_q16.jpg"
    },
    {
      "id": "de9_q17",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 17,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "What should you do right after completing a job interview?",
      "options": [
        {
          "letter": "A",
          "text": "Do nothing and post about the questions on social media"
        },
        {
          "letter": "B",
          "text": "Call the interviewer repeatedly every few hours"
        },
        {
          "letter": "C",
          "text": "Show up at the office unannounced next morning"
        },
        {
          "letter": "D",
          "text": "Send a professional thank-you email to the interviewer within 24 hours"
        }
      ],
      "answer": "D",
      "explanation": "Gửi email cảm ơn (Thank-you letter) trong vòng 24 giờ thể hiện tính chuyên nghiệp và khẳng định lại sự quan tâm của bạn với vị trí.",
      "imgFile": "de9_q17.jpg"
    },
    {
      "id": "de9_q18",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 18,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "When evaluating or formulating your career plan, what should you do first?",
      "options": [
        {
          "letter": "A",
          "text": "Looking for a mentor"
        },
        {
          "letter": "B",
          "text": "Perform a self-assessment"
        },
        {
          "letter": "C",
          "text": "Always review and revise your plan"
        },
        {
          "letter": "D",
          "text": "Focus on developing financial goals"
        }
      ],
      "answer": "B",
      "explanation": "Tự đánh giá bản thân (Self-assessment) là điểm khởi đầu thiết yếu để hiểu rõ điểm mạnh, điểm yếu, giá trị và sở thích cá nhân.",
      "imgFile": "de9_q18.jpg"
    },
    {
      "id": "de9_q19",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 19,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "What is the crucial first step to do before you attend a job interview?",
      "options": [
        {
          "letter": "A",
          "text": "Buy an expensive gift for the interviewer"
        },
        {
          "letter": "B",
          "text": "Memorize answers to trick questions"
        },
        {
          "letter": "C",
          "text": "Read the job description and research the company carefully"
        },
        {
          "letter": "D",
          "text": "Follow up the interview result"
        }
      ],
      "answer": "C",
      "explanation": "Đọc kỹ mô tả công việc (JD) và nghiên cứu kỹ doanh nghiệp là bước chuẩn bị quan trọng nhất trước buổi phỏng vấn.",
      "imgFile": "de9_q19.jpg"
    },
    {
      "id": "de9_q20",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 20,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "'I am the first person in my family to complete a bachelor degree and I grew up on a farm with many hardship stories...'. Why is this narrative ineffective in a software developer application letter?",
      "options": [
        {
          "letter": "A",
          "text": "It gives an unprofessional, overly emotional impression and does not relate to employer needs"
        },
        {
          "letter": "B",
          "text": "It shows excessive confidence"
        },
        {
          "letter": "C",
          "text": "It discusses education details"
        },
        {
          "letter": "D",
          "text": "It includes technical vocabulary"
        }
      ],
      "answer": "A",
      "explanation": "Kể lể chuyện gia đình không giải quyết được nhu cầu của nhà tuyển dụng về năng lực chuyên môn và thiếu tính chuyên nghiệp.",
      "imgFile": "de9_q20.jpg"
    },
    {
      "id": "de9_q21",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 21,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "What are the three possible behavioral responses or consequences of power exercised by a leader (Yukl / French & Raven)?",
      "options": [
        {
          "letter": "A",
          "text": "Trustworthiness, loyalty, and admiration"
        },
        {
          "letter": "B",
          "text": "Anger, retaliation, and abandonment"
        },
        {
          "letter": "C",
          "text": "Compliance, indifference, and submissiveness"
        },
        {
          "letter": "D",
          "text": "Commitment, compliance, and resistance"
        }
      ],
      "answer": "D",
      "explanation": "Ba hệ quả của việc sử dụng quyền lực đối với cấp dưới: Cam kết (Commitment), Tuân thủ (Compliance), và Chống đối (Resistance).",
      "imgFile": "de9_q21.jpg"
    },
    {
      "id": "de9_q22",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 22,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Which is TRUE about long-term orientation culture (Hofstede)?",
      "options": [
        {
          "letter": "A",
          "text": "It emphasizes immediate gratification and quick short-term profits"
        },
        {
          "letter": "B",
          "text": "It places little value on saving or future planning"
        },
        {
          "letter": "C",
          "text": "It values perseverance, persistence, thrift, and building sustained long-term relationships"
        },
        {
          "letter": "D",
          "text": "It is predominantly found in Western individualistic societies"
        }
      ],
      "answer": "C",
      "explanation": "Văn hóa định hướng dài hạn (Long-term orientation) coi trọng tính kiên trì, sự tiết kiệm và đầu tư bền vững cho tương lai.",
      "imgFile": "de9_q22.jpg"
    },
    {
      "id": "de9_q23",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 23,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Withdrawal from or suppression of conflict is termed:",
      "options": [
        {
          "letter": "A",
          "text": "Collaborating"
        },
        {
          "letter": "B",
          "text": "Forcing"
        },
        {
          "letter": "C",
          "text": "Accommodating"
        },
        {
          "letter": "D",
          "text": "Avoiding"
        }
      ],
      "answer": "D",
      "explanation": "Né tránh (Avoiding) là hành vi rút lui hoặc đè nén mâu thuẫn để không phải trực tiếp đối đầu.",
      "imgFile": "de9_q23.jpg"
    },
    {
      "id": "de9_q24",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 24,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Of all the bases of power available to leaders, which power is the most often used, most often condemned, and most difficult to control?",
      "options": [
        {
          "letter": "A",
          "text": "Reward Power"
        },
        {
          "letter": "B",
          "text": "Coercive Power"
        },
        {
          "letter": "C",
          "text": "Referent Power"
        },
        {
          "letter": "D",
          "text": "Legitimate Power"
        }
      ],
      "answer": "B",
      "explanation": "Quyền lực cưỡng chế (Coercive power - trừng phạt, đe dọa) hay bị lạm dụng, bị lên án nhiều nhất và dễ gây ra sự chống đối ngầm.",
      "imgFile": "de9_q24.jpg"
    },
    {
      "id": "de9_q25",
      "examId": "de9",
      "examTitle": "Đề số 09",
      "qIndex": 25,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Which of the four cultural differences identified by Brett, Behfar & Kern could be easily considered offensive by some team members?",
      "options": [
        {
          "letter": "A",
          "text": "Direct versus indirect communication"
        },
        {
          "letter": "B",
          "text": "Accents and fluency"
        },
        {
          "letter": "C",
          "text": "Differing attitudes toward hierarchy"
        },
        {
          "letter": "D",
          "text": "Conflicting decision-making norms"
        }
      ],
      "answer": "A",
      "explanation": "Sự khác biệt giữa giao tiếp trực tiếp (thẳng thắn, bộc trực) và gián tiếp dễ bị đối phương hiểu nhầm là thô lỗ, thiếu tôn trọng.",
      "imgFile": "de9_q25.jpg"
    }
  ],
  "de10": [
    {
      "id": "de10_q1",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 1,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "Which interview format is specifically designed for weeding out unsuitable candidates in the early recruitment stage?",
      "options": [
        {
          "letter": "A",
          "text": "Web-Conference panel interview"
        },
        {
          "letter": "B",
          "text": "Screening interview"
        },
        {
          "letter": "C",
          "text": "Group behavioral interview"
        },
        {
          "letter": "D",
          "text": "One-on-one final interview"
        }
      ],
      "answer": "B",
      "explanation": "Screening interview (phỏng vấn sàng lọc qua điện thoại/nhanh) nhằm loại bỏ các ứng viên không đạt tiêu chuẩn cơ bản trước vòng chuyên sâu.",
      "imgFile": "de10_q1.jpg"
    },
    {
      "id": "de10_q2",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 2,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "When writing your cover letter, you should:",
      "options": [
        {
          "letter": "A",
          "text": "Simply copy and paste the same generic letter for all jobs"
        },
        {
          "letter": "B",
          "text": "Create a tailored, original letter for each specific job application"
        },
        {
          "letter": "C",
          "text": "Copy and paste the first and last paragraphs verbatim"
        },
        {
          "letter": "D",
          "text": "Make it as short as two sentences"
        }
      ],
      "answer": "B",
      "explanation": "Mỗi lá thư ứng tuyển (Cover letter) cần được viết riêng biệt và điều chỉnh phù hợp với yêu cầu cụ thể của từng công việc.",
      "imgFile": "de10_q2.jpg"
    },
    {
      "id": "de10_q3",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 3,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "When conducting a team meeting, the chairperson should:",
      "options": [
        {
          "letter": "A",
          "text": "Be abrasive and dominate all speech time"
        },
        {
          "letter": "B",
          "text": "Encourage every team member to voice their opinions and feelings"
        },
        {
          "letter": "C",
          "text": "Rush through without allowing any questions"
        },
        {
          "letter": "D",
          "text": "Favor personal friends exclusively"
        }
      ],
      "answer": "B",
      "explanation": "Chủ tọa cần tạo môi trường cởi mở để mọi thành viên đều có cơ hội đóng góp ý kiến và góc nhìn của mình.",
      "imgFile": "de10_q3.jpg"
    },
    {
      "id": "de10_q4",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 4,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "In critical thinking, what does asking the question 'What do I see?' help you achieve?",
      "options": [
        {
          "letter": "A",
          "text": "Clarifying how information was constructed and separating objective facts from subjective biases"
        },
        {
          "letter": "B",
          "text": "Challenging the physical eye vision"
        },
        {
          "letter": "C",
          "text": "Forming emotional assumptions immediately"
        },
        {
          "letter": "D",
          "text": "Agreeing unconditionally with authority"
        }
      ],
      "answer": "A",
      "explanation": "Câu hỏi 'What do I see?' giúp người tư duy phản biện bóc tách các dữ kiện khách quan khỏi các thiên kiến và phỏng đoán cá nhân.",
      "imgFile": "de10_q4.jpg"
    },
    {
      "id": "de10_q5",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 5,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "What is TRUE about solicited proposals?",
      "options": [
        {
          "letter": "A",
          "text": "They are sent out without any prior request from the client"
        },
        {
          "letter": "B",
          "text": "They are typically vague and generic"
        },
        {
          "letter": "C",
          "text": "They are only in the form of a quick casual conversation"
        },
        {
          "letter": "D",
          "text": "They are written in response to a specific Request for Proposal (RFP) issued by a prospective client"
        }
      ],
      "answer": "D",
      "explanation": "Solicited proposal (đề xuất theo yêu cầu) là tài liệu phản hồi trực tiếp một hồ sơ mời thầu (RFP) từ khách hàng.",
      "imgFile": "de10_q5.jpg"
    },
    {
      "id": "de10_q6",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 6,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "According to the N-effect in social comparison, when the number of comparison targets increases, social comparison motivation tends to:",
      "options": [
        {
          "letter": "A",
          "text": "increase exponentially"
        },
        {
          "letter": "B",
          "text": "remain the same"
        },
        {
          "letter": "C",
          "text": "be distorted positively"
        },
        {
          "letter": "D",
          "text": "decrease"
        }
      ],
      "answer": "D",
      "explanation": "Hiệu ứng N-effect (Garcia & Tor): Khi số lượng đối thủ so sánh càng đông, động lực so sánh và cạnh tranh xã hội có xu hướng giảm sút.",
      "imgFile": "de10_q6.jpg"
    },
    {
      "id": "de10_q7",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 7,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "The study of body movements, gestures, and facial expressions in nonverbal communication is called:",
      "options": [
        {
          "letter": "A",
          "text": "Kinesics"
        },
        {
          "letter": "B",
          "text": "Chronemics"
        },
        {
          "letter": "C",
          "text": "Proxemics"
        },
        {
          "letter": "D",
          "text": "Haptics"
        }
      ],
      "answer": "A",
      "explanation": "Kinesics (ngôn ngữ cơ thể) nghiên cứu các chuyển động của cơ thể, tư thế, cử chỉ và biểu cảm khuôn mặt trong giao tiếp.",
      "imgFile": "de10_q7.jpg"
    },
    {
      "id": "de10_q8",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 8,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "What is the final stage in Thomas's model of the Conflict Process?",
      "options": [
        {
          "letter": "A",
          "text": "Frustration"
        },
        {
          "letter": "B",
          "text": "Conceptualization"
        },
        {
          "letter": "C",
          "text": "Behavior"
        },
        {
          "letter": "D",
          "text": "Outcome"
        }
      ],
      "answer": "D",
      "explanation": "Tiến trình xung đột gồm 4 giai đoạn: Frustration (Bực bội) -> Conceptualization (Nhận thức) -> Behavior (Hành vi) -> Outcome (Kết quả).",
      "imgFile": "de10_q8.jpg"
    },
    {
      "id": "de10_q9",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 9,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "What is a classic example of 'Expert Power' (French & Raven)?",
      "options": [
        {
          "letter": "A",
          "text": "Professors holding influence because of their deep mastery of a specialized subject matter"
        },
        {
          "letter": "B",
          "text": "A manager who can fire employees"
        },
        {
          "letter": "C",
          "text": "A supervisor who gives bonuses"
        },
        {
          "letter": "D",
          "text": "A military commander giving direct orders"
        }
      ],
      "answer": "A",
      "explanation": "Expert power (quyền lực chuyên gia) bắt nguồn từ tri thức uyên bác, kỹ năng hoặc chuyên môn vượt trội trong một lĩnh vực.",
      "imgFile": "de10_q9.jpg"
    },
    {
      "id": "de10_q10",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 10,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "All of the following should be considered when determining who to invite to a meeting EXCEPT:",
      "options": [
        {
          "letter": "A",
          "text": "Individuals who will be directly affected by the outcome"
        },
        {
          "letter": "B",
          "text": "Individuals possessing key information or expertise"
        },
        {
          "letter": "C",
          "text": "Individuals with decision-making power"
        },
        {
          "letter": "D",
          "text": "Individuals who have no interest and no role in the discussed issues"
        }
      ],
      "answer": "D",
      "explanation": "Chỉ nên mời những người có liên quan mật thiết hoặc có năng lực đóng góp; không mời người ngoài lề không liên quan.",
      "imgFile": "de10_q10.jpg"
    },
    {
      "id": "de10_q11",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 11,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "According to Donald Super's developmental theory, which age group represents the 'Tentative' substage where choices are weighed and autonomy grows?",
      "options": [
        {
          "letter": "A",
          "text": "Ages 15 - 17"
        },
        {
          "letter": "B",
          "text": "Ages 25 - 35"
        },
        {
          "letter": "C",
          "text": "Ages 45 - 55"
        },
        {
          "letter": "D",
          "text": "Ages 60+"
        }
      ],
      "answer": "A",
      "explanation": "Theo lý thuyết phát triển nghề nghiệp của Super, giai đoạn 15-17 tuổi (Tentative substage) thanh thiếu niên bắt đầu cân nhắc sở thích và định hướng tự chủ.",
      "imgFile": "de10_q11.jpg"
    },
    {
      "id": "de10_q12",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 12,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "Reward Power exists when:",
      "options": [
        {
          "letter": "A",
          "text": "Person A can administer punishments to B"
        },
        {
          "letter": "B",
          "text": "Person A has specialized knowledge relevant to B"
        },
        {
          "letter": "C",
          "text": "Person B feels A has formal authority to govern"
        },
        {
          "letter": "D",
          "text": "Person A controls positive incentives and rewards that person B desires"
        }
      ],
      "answer": "D",
      "explanation": "Reward power (quyền lực ban thưởng) tồn tại khi một cá nhân kiểm soát các phần thưởng (lương, thưởng, khen ngợi) mà người khác muốn nhận.",
      "imgFile": "de10_q12.jpg"
    },
    {
      "id": "de10_q13",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 13,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "What is the foundational first practice for succeeding in multicultural and cross-cultural environments?",
      "options": [
        {
          "letter": "A",
          "text": "Developing Cultural Intelligence (CQ)"
        },
        {
          "letter": "B",
          "text": "Enforcing home country policies strictly"
        },
        {
          "letter": "C",
          "text": "Avoiding speaking in local languages"
        },
        {
          "letter": "D",
          "text": "Ignoring cultural differences"
        }
      ],
      "answer": "A",
      "explanation": "Phát triển Trí tuệ văn hóa (Cultural Intelligence - CQ) là năng lực cốt lõi để thấu hiểu và cộng tác hiệu quả trong môi trường đa văn hóa.",
      "imgFile": "de10_q13.jpg"
    },
    {
      "id": "de10_q14",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 14,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "In which stage of career development (Super's Life-Span) do individuals often experience stability and may reassess their long-term career goals?",
      "options": [
        {
          "letter": "A",
          "text": "Growth"
        },
        {
          "letter": "B",
          "text": "Exploration"
        },
        {
          "letter": "C",
          "text": "Establishment"
        },
        {
          "letter": "D",
          "text": "Maintenance"
        }
      ],
      "answer": "D",
      "explanation": "Giai đoạn Duy trì (Maintenance stage, ~45-64 tuổi) là thời kỳ tương đối ổn định về vị thế và đánh giá lại những thành tựu sự nghiệp.",
      "imgFile": "de10_q14.jpg"
    },
    {
      "id": "de10_q15",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 15,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "What is the quickest and easiest emergency action to reduce heated interpersonal conflict?",
      "options": [
        {
          "letter": "A",
          "text": "Physical separation"
        },
        {
          "letter": "B",
          "text": "Use of formal legal procedures"
        },
        {
          "letter": "C",
          "text": "Third-party formal arbitration"
        },
        {
          "letter": "D",
          "text": "Forced confrontation"
        }
      ],
      "answer": "A",
      "explanation": "Tách rời các bên xung đột về mặt không gian (Physical separation) là cách nhanh nhất để ngăn chặn xung đột leo thang.",
      "imgFile": "de10_q15.jpg"
    },
    {
      "id": "de10_q16",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 16,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "What is the original meaning of the word 'Logic' derived from Ancient Greek 'logike'?",
      "options": [
        {
          "letter": "A",
          "text": "A process of emotional introspection"
        },
        {
          "letter": "B",
          "text": "Memorization of empirical data"
        },
        {
          "letter": "C",
          "text": "The science and art of valid reasoning"
        },
        {
          "letter": "D",
          "text": "The ability to persuade by any means"
        }
      ],
      "answer": "C",
      "explanation": "Thuật ngữ Logic bắt nguồn từ tiếng Hy Lạp 'logike techne', mang nghĩa là nghệ thuật và khoa học của lập luận chuẩn xác.",
      "imgFile": "de10_q16.jpg"
    },
    {
      "id": "de10_q17",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 17,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "How do critical thinking and creative thinking complement each other in team projects?",
      "options": [
        {
          "letter": "A",
          "text": "They compete for dominance and hinder teamwork"
        },
        {
          "letter": "B",
          "text": "Critical thinking alongside creative thinking fosters fresh perspectives while ensuring rigor and feasibility"
        },
        {
          "letter": "C",
          "text": "Creative thinking is purely random while critical thinking is unproductive"
        },
        {
          "letter": "D",
          "text": "They are mutually exclusive and cannot coexist"
        }
      ],
      "answer": "B",
      "explanation": "Tư duy sáng tạo tạo ra ý tưởng đột phá (divergent), trong khi tư duy phản biện sàng lọc, đánh giá và hoàn thiện tính khả thi (convergent).",
      "imgFile": "de10_q17.jpg"
    },
    {
      "id": "de10_q18",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 18,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "Fill the following blanks: People are... by social comparison when the comparison is...",
      "options": [
        {
          "letter": "A",
          "text": "more influenced / more localized"
        },
        {
          "letter": "B",
          "text": "more influenced / less localized"
        },
        {
          "letter": "C",
          "text": "less influenced / more localized"
        },
        {
          "letter": "D",
          "text": "unaffected / more localized"
        }
      ],
      "answer": "A",
      "explanation": "Hiệu ứng Local Dominance: Con người bị tác động mạnh mẽ nhất khi so sánh với những người ở ngay bên cạnh (more localized).",
      "imgFile": "de10_q18.jpg"
    },
    {
      "id": "de10_q19",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 19,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "What is the best standard attire to impress employers in a professional job interview?",
      "options": [
        {
          "letter": "A",
          "text": "Casual pajamas"
        },
        {
          "letter": "B",
          "text": "Trendy streetwear (crop tops, ripped jeans)"
        },
        {
          "letter": "C",
          "text": "Formal, well-fitted professional business attire (suit/smart business wear)"
        },
        {
          "letter": "D",
          "text": "Athletic sportswear"
        }
      ],
      "answer": "C",
      "explanation": "Trang phục công sở chỉnh chu, lịch sự (formal suit / business attire) thể hiện sự tôn trọng nhà tuyển dụng và độ chuyên nghiệp.",
      "imgFile": "de10_q19.jpg"
    },
    {
      "id": "de10_q20",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 20,
      "category": "2. Quyền lực, Xung đột & Đa văn hóa",
      "question": "In cross-cultural communication, why can the common 'OK' hand gesture cause significant misunderstandings?",
      "options": [
        {
          "letter": "A",
          "text": "While positive in the US, it is considered an offensive, vulgar insult in countries like Brazil and Greece"
        },
        {
          "letter": "B",
          "text": "It means financial wealth everywhere"
        },
        {
          "letter": "C",
          "text": "It is universally understood as greeting"
        },
        {
          "letter": "D",
          "text": "It indicates hunger in Asia"
        }
      ],
      "answer": "A",
      "explanation": "Cử chỉ bàn tay 'OK' tại Mỹ mang nghĩa đồng ý, nhưng tại một số quốc gia như Brazil hay Hy Lạp lại là cử chỉ xúc phạm nghiêm trọng.",
      "imgFile": "de10_q20.jpg"
    },
    {
      "id": "de10_q21",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 21,
      "category": "5. Định hướng nghề nghiệp & Ứng tuyển",
      "question": "In a job interview, which is the best response to the question: 'How do you handle stress and pressure?'",
      "options": [
        {
          "letter": "A",
          "text": "'I panic and become irritable.'"
        },
        {
          "letter": "B",
          "text": "'I never feel any stress at all in my life.'"
        },
        {
          "letter": "C",
          "text": "'I blame my colleagues when deadlines approach.'"
        },
        {
          "letter": "D",
          "text": "'I prioritize tasks, break problems into manageable steps, and focus on reacting constructively to situations rather than to stress.'"
        }
      ],
      "answer": "D",
      "explanation": "Câu trả lời xuất sắc thể hiện kỹ năng tự quản lý: bình tĩnh phân tích tình huống, ưu tiên đầu việc và giải quyết vấn đề có phương pháp.",
      "imgFile": "de10_q21.jpg"
    },
    {
      "id": "de10_q22",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 22,
      "category": "4. Giao tiếp công sở & Điều hành họp",
      "question": "Good professional advice for meeting participants includes:",
      "options": [
        {
          "letter": "A",
          "text": "Interrupting speakers whenever you disagree"
        },
        {
          "letter": "B",
          "text": "Bringing side conversations on unrelated topics"
        },
        {
          "letter": "C",
          "text": "Checking social media during presentations"
        },
        {
          "letter": "D",
          "text": "Demonstrating professionalism in both verbal contributions and nonverbal interactions (active listening)"
        }
      ],
      "answer": "D",
      "explanation": "Thành viên dự họp chuyên nghiệp cần lắng nghe tích cực, đóng góp đúng trọng tâm và duy trì thái độ tôn trọng đồng nghiệp.",
      "imgFile": "de10_q22.jpg"
    },
    {
      "id": "de10_q23",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 23,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Which of the following is NOT a myth or fallacy about creative thinking?",
      "options": [
        {
          "letter": "A",
          "text": "'Every problem has only one single right solution.'"
        },
        {
          "letter": "B",
          "text": "'Creativity is an innate gift that cannot be learned or practiced.'"
        },
        {
          "letter": "C",
          "text": "'Creative solutions must always be technologically complicated.'"
        },
        {
          "letter": "D",
          "text": "'Creativity is a skill that can be cultivated through deliberate practice, curiosity, and reframing problems.'"
        }
      ],
      "answer": "D",
      "explanation": "Quan điểm sáng tạo có thể được trau dồi qua rèn luyện và tò mò khám phá là sự thật khoa học, không phải ngụy biện (fallacy).",
      "imgFile": "de10_q23.jpg"
    },
    {
      "id": "de10_q24",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 24,
      "category": "3. Tư duy phản biện & Sáng tạo",
      "question": "Which action belongs to the critical thinking strategy 'Identify possible solutions'?",
      "options": [
        {
          "letter": "A",
          "text": "Identify the initial problem context"
        },
        {
          "letter": "B",
          "text": "Organize background facts"
        },
        {
          "letter": "C",
          "text": "Brainstorm and compare/contrast multiple plausible alternatives"
        },
        {
          "letter": "D",
          "text": "Defend a pre-selected single preference rigidly"
        }
      ],
      "answer": "C",
      "explanation": "Tìm kiếm giải pháp khả thi đòi hỏi động não đưa ra nhiều phương án và so sánh, đối chiếu ưu nhược điểm của từng phương án.",
      "imgFile": "de10_q24.jpg"
    },
    {
      "id": "de10_q25",
      "examId": "de10",
      "examTitle": "Đề số 10",
      "qIndex": 25,
      "category": "1. Làm việc nhóm & Tâm lý nhóm",
      "question": "What workplace implication does the Self-Evaluation Maintenance (SEM) Model highlight?",
      "options": [
        {
          "letter": "A",
          "text": "Employees always prefer managers who dominate all tasks"
        },
        {
          "letter": "B",
          "text": "Cooperation improves when tasks are completely independent"
        },
        {
          "letter": "C",
          "text": "Managers may prefer sub-optimal candidates who are not likely to challenge their status or ego"
        },
        {
          "letter": "D",
          "text": "Unskilled workers always seek peer feedback"
        }
      ],
      "answer": "C",
      "explanation": "Theo SEM Model (Tesser), người quản lý dễ có tâm lý chọn ứng viên kém hơn nhằm bảo vệ vị thế và tự trọng của chính mình.",
      "imgFile": "de10_q25.jpg"
    }
  ]
}

export const ALL_SSG_QUESTIONS: SSGQuestion[] = Object.values(SSG_QUESTIONS).flat()
