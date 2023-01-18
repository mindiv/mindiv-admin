import { InputWrap } from '../../styles/GlobalStyle';

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
      <span>{errors[name]?.message}</span>
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
      <input />
    </InputWrap>
  );
};
