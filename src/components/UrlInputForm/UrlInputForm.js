import React from 'react';
import magnifiyingGlass from './magnifying-glass-copy-grey.png'
import './UrlInputForm.css';

const UrlInputForm = ({ onInputChange, onButtonSubmit}) => {
  return (
    <div className='search-container'>
        <span className='search-icon'><img alt="" src={magnifiyingGlass} /></span>
        <input type="text" placeholder='https://www.google.com' onChange={onInputChange}  onKeyDown={onButtonSubmit} />
      <p><span className='form-span'>note:</span> If visiting multiple pages be sure to search each url page you plan on visiting. </p>
    </div>
  )
}

export default UrlInputForm