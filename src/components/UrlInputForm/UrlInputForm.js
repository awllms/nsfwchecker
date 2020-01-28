import React from 'react';
import magnifiyingGlass from './magnifying-glass-copy-grey.png'
import './UrlInputForm.css';

const UrlInputForm = ({ onInputChange, onButtonSubmit}) => {
  return (
    <div className='search-container'>
        <span className='search-icon'><img alt="" src={magnifiyingGlass} /></span>
        <input type="text" placeholder='https://www.google.com' onChange={onInputChange}  onKeyDown={onButtonSubmit} />
    </div>
  );
};

export default UrlInputForm;