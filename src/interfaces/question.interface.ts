export interface CreateQuestionProps {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}
