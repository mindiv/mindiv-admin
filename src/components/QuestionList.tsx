import { useEffect, useState } from 'react';
import { useAppSelector } from '../app/hooks';
import { QuestionData } from '../interfaces/question.interface';

const QuestionList = () => {
  const { questions } = useAppSelector((state) => state.question);
  const [data, setData] = useState<QuestionData[]>([]);

  useEffect(() => {
    setData(questions);
  }, [questions]);
  return (
    <div>
      {data.map((question) => (
        <div>{question.question}</div>
      ))}
    </div>
  );
};

export default QuestionList;
