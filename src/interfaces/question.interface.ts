export interface CreateQuestionProps {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  correctOption: number;
}

export interface QuestionPostPayload {
  question: string;
  options: string[];
  correctOption: number;
  description?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export interface QuestionData {
  _id: string;
  question: string;
  answer: string;
  options: string[];
  correctOption: number;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  description: string;
}
