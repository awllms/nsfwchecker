import React from 'react';
import magnifiyingGlass from './magnifying-glass-copy-grey.png'
import './UrlInputForm.css';

const UrlInputForm = () => {
  return (
    <div className='search-container'>
      <form>
        <span className='search-icon'><img alt="" src={magnifiyingGlass} width="40px" height="40px" /></span>
        <input type="text" placeholder='https://www.google.com' />
        <input type="button" style={{display: 'none'}}  />
      </form>
      <p><span className='form-span'>note:</span> If visiting multiple pages be sure to search each url page you plan on visiting. </p>
    </div>
  )
}

export default UrlInputForm