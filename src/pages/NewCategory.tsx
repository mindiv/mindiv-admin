import React from 'react';
import { CInput, CTextarea } from '../components/misc/Input';
import {
  Button,
  InputGroup,
  PageContent,
  PageWrap,
} from '../styles/GlobalStyle';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PageHeading from '../components/misc/PageHeading';
import { ButtonPrimary } from '../components/misc/ Button';

const schema = yup.object({
  categoryName: yup.string().required('Category name is required'),
  description: yup.string().required('Description is required'),
  cover: yup.string().required('Cover photo is required'),
});

const NewCategory = () => {
  const method = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      categoryName: '',
    },
  });

  const { handleSubmit } = method;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-1/2">
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
            <CInput name="categoryName" label="Category Name" method={method} />
            <CTextarea name="description" label="Description" method={method} />
          </InputGroup>
          <ButtonPrimary>Create category</ButtonPrimary>
        </form>
      </div>
    </div>
  );
};

export default NewCategory;
