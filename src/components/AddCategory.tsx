import React from 'react';
import Modal from './Modal';

const AddCategory = () => {
  const onClose = () => {
    console.log('close clicked');
  };

  return (
    <Modal title={'Add Category'} close={onClose}>
      <div>AddCategory</div>
    </Modal>
  );
};

export default AddCategory;
