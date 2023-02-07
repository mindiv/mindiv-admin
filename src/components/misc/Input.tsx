import { InputWrap } from '../../styles/GlobalStyle';
import ErrorText from './ErrorText';
import Select from 'react-select';
import { Controller } from 'react-hook-form';

interface CProps {
  method: any;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  rest?: any;
  options?: [];
}

// Custom input
export const CInput = ({
  method,
  name,
  label,
  type = 'text',
  ...rest
}: CProps) => {
  const {
    register,
    formState: { errors },
  } = method;
  return (
    <div className="mb-6 flex flex-col">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type={type}
        {...rest}
        {...register(`${name}`)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      {errors[name]?.message && (
        <ErrorText text={errors[name]?.message || ''} />
      )}
    </div>
  );
};

// Custom Textarea
export const CTextarea = ({ method, name, label }: CProps) => {
  const {
    register,
    formState: { errors },
  } = method;
  return (
    <div className="mb-6 flex flex-col">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <textarea
        {...register(`${name}`)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-20 max-h-64"
      />
      {errors[name]?.message && (
        <ErrorText text={errors[name]?.message || ''} />
      )}
    </div>
  );
};

// Custom select
export const CSelect = ({
  method,
  name,
  label,
  options = [],
  rest,
}: CProps) => {
  const {
    control,
    formState: { errors },
  } = method;
  return (
    <InputWrap>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <Controller
        control={control}
        render={({ field: { onChange, value, name, ref } }) => {
          const currentSelection = options.find((c: any) => c.value === value);
          const handleSelectChange = (selectedOption: any) => {
            onChange(selectedOption?.value);
          };
          return (
            <Select
              className=""
              classNamePrefix="react-select"
              inputRef={ref}
              value={value ? currentSelection : []}
              name={name}
              options={options}
              onChange={handleSelectChange}
              {...rest}
            />
          );
        }}
        name={name}
        rules={{ required: true }}
      />
      <ErrorText text={errors[name]?.message} />
    </InputWrap>
  );
};
