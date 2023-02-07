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

const schema = yup.object({
  question: yup.string().required('Question is required'),
  option1: yup.string().required('Option 1 is required'),
  option2: yup.string().required('Option 2 is required'),
  option3: yup.string().required('Option 3 is required'),
  option4: yup.string().required('Option 4 is required'),
  answer: yup.string().required('Answer is required'),
  description: yup.string().required('Description is required'),
  category: yup.string().required('Category is required'),
});

const NewQuestion = () => {
  const dispatch = useAppDispatch();
  const { categories, status } = useAppSelector((state) => state.category);
  const method = useForm<CreateQuestionProps>({
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = method;

  const onSubmit = async (data: CreateQuestionProps) => {
    const options = [data.option1, data.option2, data.option3, data.option4];
    const payload = {
      question: data.question,
      description: data.description,
      options,
      category: data.category,
      answer: data.answer,
    };
    console.log(payload);
  };
  return (
    <div className="lg:w-2/3 xl:w-1/2 mb-20">
      <HeadingPara
        title="Create a New Question"
        tag="Fill out the form below with the question name, description and the category to
          quickly add it to the list of available questions. Stay organized and
          streamline content management with this convenient feature."
      />
      <div className="mb-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <CTextarea name="question" label="Question" method={method} />
            <CSelect
              name="category"
              label="Categories"
              method={method}
              options={modData(categories)}
            />
            <CInput name="option1" label="Option 1" method={method} />
            <CInput name="option2" label="Option 2" method={method} />
            <CInput name="option3" label="Option 3" method={method} />
            <CInput name="option4" label="Option 4" method={method} />
            <CInput name="answer" label="Correct Answer" method={method} />
            <CTextarea name="description" label="Description" method={method} />
          </InputGroup>
          <ButtonPrimary type="submit">
            {status === 'loading' ? 'Loading...' : 'Create Question'}
          </ButtonPrimary>
        </form>
      </div>
    </div>
  );
};

export default NewQuestion;
