export interface SSGOption {
  letter: 'A' | 'B' | 'C' | 'D' | 'E'
  text: string
}

export interface SSGQuestion {
  id: string              // e.g. 'de1_q1'
  examId: string          // 'de1' .. 'de10'
  examTitle: string       // 'Đề 1' .. 'Đề 10'
  qIndex: number          // 1 .. 25
  category?: string       // e.g. 'Làm việc nhóm & Tâm lý nhóm', 'Quyền lực & Xung đột', etc.
  question: string        // Question text
  options: SSGOption[]    // A, B, C, D, E
  answer: 'A' | 'B' | 'C' | 'D' | 'E' // Solved answer
  explanation?: string    // Concise explanation
  imgFile?: string        // Original image name (e.g. 'de1_q1.jpg')
}

export interface SSGExamMeta {
  id: string              // 'de1'
  title: string           // 'Đề 01'
  questionCount: number
}
