import { ButtonPrimary } from '../components/misc/ Button';
import { HeadingPara } from '../components/misc/Heading';
import { CInput, CSelect, CTextarea } from '../components/misc/Input';
import { InputGroup } from '../styles/GlobalStyle';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateQuestionProps } from '../interfaces/question.interface';
import { useAppDispatch } from '../app/hooks';

const schema = yup.object({
  name: yup.string().required('Category name is required'),
  description: yup.string().required('Description is required'),
  cover: yup.string().url('Invalid url').required('Cover photo is required'),
});

const NewQuestion = () => {
  const dispatch = useAppDispatch();
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
            <CInput name="name" label="Category Name" method={method} />
            <CTextarea name="description" label="Description" method={method} />
            <CInput name="cover" label="Cover" method={method} />
            <CSelect name="category" label="Categories" method={method} />
          </InputGroup>
          <ButtonPrimary type="submit">Create Question</ButtonPrimary>
        </form>
      </div>
    </div>
  );
};

export default NewQuestion;
