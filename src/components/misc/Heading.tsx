export const Heading1 = ({ text }: { text: String }) => {
  return (
    <h1 className="text-3xl font-bold text-gray-600 mb-3 dark:text-gray-200">
      {text}
    </h1>
  );
};
