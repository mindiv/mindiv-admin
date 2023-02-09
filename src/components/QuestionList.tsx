import { useEffect, useState } from 'react';
import { IoPencil, IoTrash } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { QuestionData } from '../interfaces/question.interface';
import { SquareBtn } from './misc/ Button';

const QuestionList = () => {
  const { questions } = useAppSelector((state) => state.question);
  const [data, setData] = useState<QuestionData[]>([]);

  useEffect(() => {
    setData(questions);
  }, [questions]);

  return (
    <div className="grid lg:grid-cols-2 gap-3">
      {data.map((question, index) => (
        <Question question={question} index={index} />
      ))}
    </div>
  );
};

interface QuestionProps {
  question: QuestionData;
  index: any;
}

const Question = ({ question, index }: QuestionProps) => {
  return (
    <div className="bg-gray-100 rounded-lg text-gray-700 dark:bg-gray-800 dark:text-gray-200 divide-y divide-gray-700">
      <div key={index} className="cursor-pointer mb-5 p-4">
        <p className="mb-3">{question.question}</p>
        <Options options={question.options} answer={question.answer} />
      </div>
      <CardFooter id={question._id} />
    </div>
  );
};

const Options = ({
  options,
  answer,
}: {
  options: string[];
  answer: string;
}) => {
  return (
    <div className="flex gap-1 flex-wrap">
      {options.map((opt, index) => (
        <div
          key={index}
          className={`bg-gray-200 px-3 py-1 border-2 font-normal rounded-lg dark:bg-gray-700 ${
            opt === answer
              ? ' border-gray-400 dark:border-blue-500'
              : 'border-transparent'
          }`}
        >
          {opt}
        </div>
      ))}
    </div>
  );
};

const CardFooter = ({ id }: { id: string }) => {
  const navigate = useNavigate();
  const onEditQuestion = () => {
    navigate(`/question/${id}/edit`);
  };

  const onDeleteQuestion = () => {
    //
  };
  return (
    <div className="flex justify-end gap-3 p-2">
      <SquareBtn click={onEditQuestion} title="Edit Question">
        <IoPencil />
      </SquareBtn>
      <SquareBtn>
        <IoTrash />
      </SquareBtn>
    </div>
  );
};

export default QuestionList;
