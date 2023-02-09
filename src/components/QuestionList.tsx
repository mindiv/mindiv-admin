import { useEffect, useState } from 'react';
import { IoEllipsisVertical } from 'react-icons/io5';
import { useAppSelector } from '../app/hooks';
import { QuestionData } from '../interfaces/question.interface';
import Dropdown from './Dropdown';
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

const Question = ({ question, index }: any) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
      key={index}
      className="relative bg-gray-100 p-4 rounded-lg cursor-pointer text-gray-700 dark:bg-gray-800 dark:text-gray-200"
    >
      {showMenu && (
        <div className="absolute right-3 top-2">
          <SquareBtn click={() => setShowDropdown(!showDropdown)}>
            <IoEllipsisVertical />
          </SquareBtn>
        </div>
      )}
      <p className="mb-3">{question.question}</p>
      <Options options={question.options} answer={question.answer} />
      {showDropdown && <Dropdown />}
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
          className={`bg-gray-200 px-3 py-1 border-2 font-normal rounded-lg dark:bg-gray-600 ${
            opt === answer
              ? ' border-gray-400 dark:border-gray-800'
              : 'border-transparent'
          }`}
        >
          {opt}
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
