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
    <>
      <PageWrap>
        <PageHeading title="New Category" tag="Create new category " />
        <PageContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
              <CInput
                name="categoryName"
                label="Category Name"
                method={method}
              />
              <CTextarea
                name="description"
                label="Description"
                method={method}
              />
              <CInput name="cover" label="Cover Photo" method={method} />
            </InputGroup>
            <Button>Create category</Button>
          </form>
        </PageContent>
      </PageWrap>
    </>
  );
};

export default NewCategory;
