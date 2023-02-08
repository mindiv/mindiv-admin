import { CInput, CTextarea } from '../components/misc/Input';
import { InputGroup } from '../styles/GlobalStyle';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonPrimary } from '../components/misc/ Button';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { CreateCategoryProps } from '../interfaces/category.interface';
import { createCategory, getCategories } from '../features/categorySlice';
import { getStats } from '../features/statSlice';
import { HeadingPara } from '../components/misc/Heading';

const schema = yup.object({
  name: yup.string().required('Category name is required'),
  description: yup.string().required('Description is required'),
  cover: yup.string().url('Invalid url').required('Cover photo is required'),
});

const NewCategory = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.category);
  const method = useForm<CreateCategoryProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
    },
  });

  const { handleSubmit, reset } = method;

  const onSubmit = async (data: CreateCategoryProps) => {
    await dispatch(createCategory(data));
    reset();
    await dispatch(getStats());
    await dispatch(getCategories());
  };

  return (
    <div className="lg:w-2/3 xl:w-1/2 mb-20">
      <HeadingPara
        title="Create a New Category"
        tag="Fill out the form below with the category name and description to
          quickly add it to the list of available options. Stay organized and
          streamline content management with this convenient feature."
      />

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <CInput name="name" label="Category Name" method={method} />
            <CTextarea name="description" label="Description" method={method} />
            <CInput name="cover" label="Cover" method={method} />
          </InputGroup>
          <ButtonPrimary type="submit" disabled={status === 'loading'}>
            {status == 'loading' ? 'Loading' : 'Create category'}
          </ButtonPrimary>
        </form>
      </div>
    </div>
  );
};

export default NewCategory;
