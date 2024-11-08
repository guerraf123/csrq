import React from 'react';

const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-log-modal'
        className='btn-floating btn-large blue darken-2 modal-trigger'
      >
        <i className='large material-icons'>Create</i>
      </a>
      <ul>
        <li>
          <a
            href='#tech-list-modal'
            className='btn-floating green modal-trigger'
          >
            <i className='material-icons'>Update</i>
          </a>
        </li>
        <li>
          <a href='#add-tech-modal' className='btn-floating red modal-trigger'>
            <i className='material-icons'>Submit</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
