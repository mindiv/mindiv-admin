import ErrorText from './ErrorText';

interface CProps {
  method: any;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  rest?: any;
  options?: [{ value: string; label: string }];
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
      {errors[name]?.message && <ErrorText text={errors[name]?.message} />}
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
      {errors[name]?.message && <ErrorText text={errors[name]?.message} />}
    </div>
  );
};

// Custom select
export const CSelect = ({ method, name, label, options, rest }: CProps) => {
  const {
    formState: { errors },
  } = method;
  return (
    <div className="mb-6 flex flex-col">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <select
        id="countries"
        className="select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...rest}
      >
        <option className="text-gray-500"></option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {errors[name]?.message && <ErrorText text={errors[name]?.message} />}
    </div>
  );
};
