import React from 'react';
import logoImage from './NSFWcheckerlogo@2x.png'
import './Logo.css';


const Logo = () => {
  return (
    <header>
      <h1>
        <img alt="NSFWchecker" src={logoImage} />
      </h1>
    </header>
  )
}

export default Logo