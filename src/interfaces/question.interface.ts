export interface CreateQuestionProps {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  answer: string;
}

export interface QuestionPostPayload {
  question: string;
  answer: string;
  options: string[];
  description: string;
  difficulty: string;
  category: string;
}

export interface QuestionData {
  _id: string;
  question: string;
  answer: string;
  options: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  description: string;
}
