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
  description: yup.string().required('Description is required'),
  category: yup.string().required('Category is required'),
});

const NewQuestion = () => {
  const dispatch = useAppDispatch();
  const { categories, status } = useAppSelector((state) => state.category);
  const method = useForm<CreateQuestionProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
    },
  });

  const { handleSubmit } = method;

  const onSubmit = async (data: CreateQuestionProps) => {
    console.log(data);
  };
  return (
    <div className="lg:w-2/3 xl:w-1/2">
      <HeadingPara
        title="Create a New Question"
        tag="Fill out the form below with the question name, description and the category to
          quickly add it to the list of available questions. Stay organized and
          streamline content management with this convenient feature."
      />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <CInput name="question" label="Question" method={method} />
            <CTextarea name="description" label="Description" method={method} />
            <CSelect
              name="category"
              label="Categories"
              method={method}
              options={modData(categories)}
            />
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
