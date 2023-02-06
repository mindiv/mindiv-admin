import { CInput, CTextarea } from '../components/misc/Input';
import { InputGroup } from '../styles/GlobalStyle';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonPrimary } from '../components/misc/ Button';
import { useAppDispatch } from '../app/hooks';
import { CreateCategoryProps } from '../interfaces/category.interface';
import { createCategory } from '../features/categorySlice';

const schema = yup.object({
  name: yup.string().required('Category name is required'),
  description: yup.string().required('Description is required'),
  cover: yup.string().url('Invalid url').required('Cover photo is required'),
});

const NewCategory = () => {
  const dispatch = useAppDispatch();
  const method = useForm<CreateCategoryProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
    },
  });

  const { handleSubmit } = method;

  const onSubmit = (data: CreateCategoryProps) => {
    dispatch(createCategory(data));
  };

  return (
    <div className="lg:w-2/3 xl:w-1/2">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200">
          Create a New Category
        </h1>
        <p className="text-gray-700 text-md dark:text-gray-200">
          Fill out the form below with the category name and description to
          quickly add it to the list of available options. Stay organized and
          streamline content management with this convenient feature.
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <CInput name="name" label="Category Name" method={method} />
            <CTextarea name="description" label="Description" method={method} />
            <CInput name="cover" label="Cover" method={method} />
          </InputGroup>
          <ButtonPrimary type="submit">Create category</ButtonPrimary>
        </form>
      </div>
    </div>
  );
};

export default NewCategory;
