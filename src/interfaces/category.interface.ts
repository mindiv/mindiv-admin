export interface CreateCategoryProps {
  name: string;
  description: string;
  cover: string;
}

export interface CategoryData {
  _id: string;
  name: string;
  description: string;
  questionCount: number;
}
