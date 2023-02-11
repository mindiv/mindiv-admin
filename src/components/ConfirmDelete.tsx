import { ButtonDanger, ButtonSecondary } from './misc/ Button';

const ConfirmDelete = ({ close, click }: { close: any; click: any }) => {
  return (
    <div className="flex fixed top-0 left-0 w-full h-full justify-center items-center ">
      <div
        onClick={close}
        className="absolute bg-black w-full h-full opacity-30"
      ></div>
      <div className="relative p-4 rounded-lg md:w-96 text-gray-100 bg-gray-200 dark:bg-gray-800 shadow-2xl">
        <h2 className="font-bold text-2xl mb-3">Confirm Deletion</h2>
        <p className="mb-4">
          This item will be permanently removed from your account and cannot be{' '}
          <b>recovered</b>
        </p>
        <div>
          <ButtonSecondary click={close}>Cancel</ButtonSecondary>
          <ButtonDanger click={click}>Delete</ButtonDanger>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
