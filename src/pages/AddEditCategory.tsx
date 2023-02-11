import { CInput, CTextarea } from '../components/misc/Input';
import { InputGroup } from '../styles/GlobalStyle';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonPrimary } from '../components/misc/ Button';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { CreateCategoryProps } from '../interfaces/category.interface';
import {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
} from '../features/categorySlice';
import { getStats } from '../features/statSlice';
import { HeadingPara } from '../components/misc/Heading';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { notifyError, notifySuccess } from '../utils/toast';

const schema = yup.object({
  name: yup.string().required('Category name is required'),
  description: yup.string().required('Description is required'),
  cover: yup.string().url('Invalid url').required('Cover photo is required'),
});

const AddEditCategory = () => {
  const dispatch = useAppDispatch();
  const { id = '' } = useParams();
  const { status, category } = useAppSelector((state) => state.category);
  const [mode, setMode] = useState<'new' | 'edit'>('new');
  const method = useForm<CreateCategoryProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
    },
  });

  const { handleSubmit, reset } = method;

  useEffect(() => {
    if (id) {
      setMode('edit');
      dispatch(getCategory(id));
    }
  }, [id]);

  useEffect(() => {
    if (mode === 'edit' && category) {
      reset({
        name: category.name,
        description: category.description,
        cover: category.cover,
      });
    }
  }, [category, mode]);

  const onSubmit = async (data: CreateCategoryProps) => {
    if (mode === 'new') {
      await dispatch(createCategory(data))
        .unwrap()
        .then((res) => notifySuccess(res.message))
        .catch((err) => notifyError(err.message || 'Error'));
      reset();
    } else {
      await dispatch(updateCategory({ id, payload: data }))
        .unwrap()
        .then((res) => notifySuccess(res.message))
        .catch((err) => notifyError(err.message || 'Error'));
    }
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
          {mode === 'new' ? (
            <ButtonPrimary type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Loading...' : 'Create Category'}
            </ButtonPrimary>
          ) : (
            <ButtonPrimary type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Loading...' : 'Update Category'}
            </ButtonPrimary>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddEditCategory;
