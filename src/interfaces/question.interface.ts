export interface CreateQuestionProps {
  name: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}
