import { useEffect, useState } from 'react';
import { IoPencil, IoTrash } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { deleteQuestion, getQuestions } from '../features/questionSlice';
import { QuestionData } from '../interfaces/question.interface';
import { notifyError, notifySuccess } from '../utils/toast';
import ConfirmDelete from './ConfirmDelete';
import { SquareBtn } from './misc/ Button';

const QuestionList = () => {
  const { questions } = useAppSelector((state) => state.question);
  const [data, setData] = useState<QuestionData[]>([]);

  useEffect(() => {
    setData(questions);
  }, [questions]);

  return (
    <>
      <div className="grid gap-3 lg:grid-cols-2">
        {data.map((question, index) => (
          <Question question={question} key={question._id} />
        ))}
      </div>
    </>
  );
};

interface QuestionProps {
  question: QuestionData;
}

const Question = ({ question }: QuestionProps) => {
  return (
    <div className="flex flex-col bg-gray-100 rounded-lg text-gray-700 dark:bg-gray-800 dark:text-gray-200 divide-y divide-gray-300 dark:divide-gray-700">
      <div className="cursor-pointer mb-5 p-4 flex-1">
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
  const dispatch = useAppDispatch();
  const [showConfirm, setShowConform] = useState(false);

  const onEditQuestion = () => {
    navigate(`/question/${id}/edit`);
  };

  const onDeleteQuestion = async () => {
    await dispatch(deleteQuestion(id))
      .unwrap()
      .then((res) => notifySuccess(res.message))
      .catch((err) => notifyError(err.message));
    await dispatch(getQuestions());
  };

  return (
    <>
      <div className="flex justify-end gap-3 p-2">
        <SquareBtn click={onEditQuestion} title="Edit Question">
          <IoPencil />
        </SquareBtn>
        <SquareBtn click={() => setShowConform(true)}>
          <IoTrash />
        </SquareBtn>
      </div>
      {showConfirm && (
        <ConfirmDelete
          click={onDeleteQuestion}
          close={() => setShowConform(false)}
        />
      )}
    </>
  );
};

export default QuestionList;
