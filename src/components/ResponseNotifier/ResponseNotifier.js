import React from 'react';
import alert from './alert-icon-red.png';
// import approved from './approved-icon-green.png';
// import error from './error-icon-red.png';
import './ResponseNotifier.css';

const ResponseNotifier = () => {
  return (
    <section className='response-section'>
      <div>
        <img alt='' src={alert} width='80' height='auto' />
      </div>
      <div className='response-text'>
        <p>That page displays images that might not be safe work.</p>
      </div>
    </section>
  )
}

export default ResponseNotifier