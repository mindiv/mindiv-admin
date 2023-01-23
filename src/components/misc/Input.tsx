import { InputWrap } from '../../styles/GlobalStyle';
import ErrorText from './ErrorText';

interface CProps {
  method: any;
  name: string;
  label: string;
}

// Custom input
export const CInput = ({ method, name, label }: CProps) => {
  const {
    register,
    formState: { errors },
  } = method;
  return (
    <InputWrap>
      <label>{label}</label>
      <input type="text" {...register(`${name}`)} />
      <ErrorText text={errors[name]?.message} />
    </InputWrap>
  );
};

export const CTextarea = ({ method, name, label }: CProps) => {
  const {
    register,
    formState: { errors },
  } = method;
  return (
    <InputWrap>
      <label>{label}</label>
      <textarea {...register(`${name}`)} />
      <ErrorText text={errors[name]?.message} />
    </InputWrap>
  );
};

// Custom select
export const CSelect = ({ method, name, label }: CProps) => {
  const {
    register,
    formState: { errors },
  } = method;
  return (
    <InputWrap>
      <label>{label}</label>
      <ErrorText text={errors[name]?.message} />
    </InputWrap>
  );
};
