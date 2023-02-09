import { ButtonPrimary } from '../components/misc/ Button';
import { HeadingPara } from '../components/misc/Heading';
import { CInput, CSelect, CTextarea } from '../components/misc/Input';
import { InputGroup } from '../styles/GlobalStyle';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateQuestionProps } from '../interfaces/question.interface';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { modData } from '../utils/mod';
import {
  createQuestion,
  getQuestion,
  getQuestions,
  updateQuestion,
} from '../features/questionSlice';
import { getStats } from '../features/statSlice';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const schema = yup.object({
  question: yup.string().required('Question is required'),
  option1: yup.string().required('Option 1 is required'),
  option2: yup.string().required('Option 2 is required'),
  option3: yup.string().required('Option 3 is required'),
  option4: yup.string().required('Option 4 is required'),
  answer: yup.string().required('Answer is required'),
  difficulty: yup.string().required(),
  description: yup.string(),
  category: yup.string().required('Category is required'),
});

const difficulties = [
  { label: 'Easy', value: 'easy' },
  { label: 'Medium', value: 'medium' },
  { label: 'Hard', value: 'hard' },
];

const AddEditQuestion = () => {
  const dispatch = useAppDispatch();
  const { id = '' } = useParams();
  const { categories } = useAppSelector((state) => state.category);
  const { status, question } = useAppSelector((state) => state.question);
  const [mode, setMode] = useState<string>('new');
  const method = useForm<CreateQuestionProps>({
    resolver: yupResolver(schema),
  });

  const { handleSubmit, reset } = method;

  useEffect(() => {
    if (id) {
      setMode('edit');
      dispatch(getQuestion(id));
    }
  }, [id]);

  useEffect(() => {
    if (mode === 'edit' && question) {
      reset({
        question: question.question,
        answer: question.answer,
        option1: question.options[0],
        option2: question.options[1],
        option3: question.options[2],
        option4: question.options[3],
        category: question.category,
        difficulty: question.difficulty,
        description: question.description,
      });
    }
  }, [question, mode]);

  const onSubmit = async (data: CreateQuestionProps) => {
    const options = [data.option1, data.option2, data.option3, data.option4];
    const payload = {
      question: data.question,
      description: data.description,
      options: options,
      category: data.category,
      answer: data.answer,
      difficulty: data.difficulty,
    };

    if (mode === 'new') {
      await dispatch(createQuestion(payload));
    } else {
      await dispatch(updateQuestion({ id, payload }));
    }
    reset();
    await dispatch(getQuestions());
    await dispatch(getStats());
  };

  return (
    <div className="lg:w-2/3 xl:w-1/2 mb-20">
      <HeadingPara
        title={mode === 'new' ? 'Create a New Question' : 'Update Question'}
        tag="Fill out the form below with the question name, description and the category to
          quickly add it to the list of available questions. Stay organized and
          streamline content management with this convenient feature."
      />
      <div className="mb-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <CTextarea name="question" label="Question" method={method} />
            <CInput name="option1" label="Option 1" method={method} />
            <CInput name="option2" label="Option 2" method={method} />
            <CInput name="option3" label="Option 3" method={method} />
            <CInput name="option4" label="Option 4" method={method} />
            <CInput name="answer" label="Correct Answer" method={method} />
            <CSelect
              name="category"
              label="Categories"
              method={method}
              options={modData(categories)}
            />
            <CSelect
              name="difficulty"
              label="Difficulty"
              method={method}
              options={difficulties}
            />
            <CTextarea name="description" label="Description" method={method} />
          </InputGroup>
          <ButtonPrimary type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Loading...' : 'Create Question'}
          </ButtonPrimary>
        </form>
      </div>
    </div>
  );
};

export default AddEditQuestion;
