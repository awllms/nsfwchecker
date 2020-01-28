import React from 'react';
import alertIcon from './alert-icon-red.png';
import approvedIcon from './approved-icon-green.png';
import errorIcon from './error-icon-yellow.png';
import './ResponseNotifier.css';

const ResponseNotifier = ({ answer, description, onNewSearch, imageUrl }) => {
  
  let answerIcon;
  if (answer === 'nsfw') {
    answerIcon = alertIcon;
  } else if (answer === 'sfw') {
    answerIcon = approvedIcon;
  } else {
    answerIcon = errorIcon;
  }

  return (
    <section className="response-section">
      <div>
        <img alt='' src={answerIcon} width='80' height='auto' />
      </div>
      <div className="response-text">
        <p>{description}</p>
      </div>
      {answer === 'sfw' ? 
        <div className="response-new-search">
          <p className="response-new-search-url">url:</p>
          <a href={imageUrl} target='_blank' rel="noopener noreferrer">
            {imageUrl}
          </a>
          <p className="response-new-search-text">
            <span className="response-new-search-text-bold">Disclaimer: </span>Each website displays images differently and can return 
            safe-for-work if our checker can’t pick them up. <span className="response-new-search-text-bold">Please visit each URL with caution. </span> 
            We are constantly making improvements to our search criteria daily to provide more accurate results.
          </p>
        </div> 
      : <div>
        </div> }
      <div className="response-new-search">
        <button className="new-search-button" onClick={onNewSearch}>New Search</button>
      </div>
    </section>
  )
}

export default ResponseNotifier