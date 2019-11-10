import React from 'react';

const UrlInputForm = () => {
  return (
    <div>
      <form>
        <input type="text" />
        <input type="button" style={{display: 'none'}} />
      </form>
      <p><span>note:</span> If visiting multiple pages be sure to search each url page you plan on visiting. </p>
    </div>
  )
}

export default UrlInputForm