import React from 'react';
import alertIcon from './alert-icon-red.png';
import approvedIcon from './approved-icon-green.png';
import errorIcon from './error-icon-red.png';
import './ResponseNotifier.css';

const ResponseNotifier = ({answer, description, hasResponse, onNewSearch}) => {
  
  let answerIcon;
  if (answer === 'nsfw') {
    answerIcon = alertIcon;
  } else if (answer === 'sfw') {
    answerIcon = approvedIcon;
  } else {
    answerIcon = errorIcon;
  }

  return (
    <section className={"response-section " + (hasResponse ? "fadeIn" : "fadeOut")}>
      <div>
        <img alt='' src={answerIcon} width='80' height='auto' />
      </div>
      <div className="response-text">
        <p>{description}</p>
      </div>
      <div className="response-new-search">
        <p onClick={onNewSearch}>New Search</p>
      </div>
    </section>
  )
}

export default ResponseNotifier