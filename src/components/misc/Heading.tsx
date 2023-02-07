export const Heading1 = ({ text }: { text: String }) => {
  return (
    <h1 className="text-3xl font-bold text-gray-600 mb-3 dark:text-gray-200">
      {text}
    </h1>
  );
};

export const HeadingPara = ({ title, tag }: { title: string; tag: string }) => {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold mb-3 text-gray-700 dark:text-gray-200">
        {title}
      </h1>
      <p className="text-gray-700 text-md dark:text-gray-200">{tag}</p>
    </div>
  );
};
