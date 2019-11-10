import React from 'react';
import Logo from './components/Logo/Logo';
import Tagline from './components/Tagline/Tagline';
import UrlInputForm from './components/UrlInputForm/UrlInputForm';
import ResponseNotifier from './components/ResponseNotifier/ResponseNotifier';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Tagline />
        <UrlInputForm />
        <ResponseNotifier />
        <Footer />
      </div>
    );
  }
}

export default App;
