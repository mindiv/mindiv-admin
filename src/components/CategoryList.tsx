import { useEffect, useState } from 'react';
import { IoPencil, IoTrash } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { deleteCategory, getCategories } from '../features/categorySlice';
import { CategoryData } from '../interfaces/category.interface';
import { trimTextToLength } from '../utils/helper';
import { notifyError, notifySuccess } from '../utils/toast';
import ConfirmDelete from './ConfirmDelete';
import { SquareBtn } from './misc/ Button';

const CategoryList = () => {
  const { categories } = useAppSelector((state) => state.category);
  const [data, setData] = useState<CategoryData[]>([]);

  useEffect(() => {
    setData(categories);
  }, [categories]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((category) => (
          <Category category={category} />
        ))}
      </div>
    </>
  );
};

const Category = ({ category }: { category: CategoryData }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showConfirm, setShowConform] = useState(false);

  const onEditCategory = () => {
    navigate(`/category/${category._id}/edit`);
  };

  const onDeleteCategory = async () => {
    await dispatch(deleteCategory(category._id))
      .unwrap()
      .then((res) => notifySuccess(res.message))
      .catch((err) => notifyError(err.message || 'Error'));

    await dispatch(getCategories());
  };

  return (
    <>
      <div
        key={category._id}
        className="flex flex-col cursor-pointer  bg-white border border-gray-200 rounded-lg shadow lg:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
          {category.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {trimTextToLength(category.description, 150)}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-gray-700 dark:text-gray-200">
            <span>Questions:</span>{' '}
            <span className="font-bold">{category.questionCount}</span>
          </div>
          <div>
            <SquareBtn title="Edit Question" click={() => onEditCategory()}>
              <IoPencil />
            </SquareBtn>
            <SquareBtn click={() => setShowConform(true)}>
              <IoTrash />
            </SquareBtn>
          </div>
        </div>
      </div>
      {showConfirm && (
        <ConfirmDelete
          click={onDeleteCategory}
          close={() => setShowConform(false)}
        />
      )}
    </>
  );
};

export default CategoryList;
