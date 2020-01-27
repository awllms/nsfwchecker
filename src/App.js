import React, { useState, useEffect } from 'react';
import FadeIn from "react-fade-in";
import ReactLoading from "react-loading";
import Logo from './components/Logo/Logo';
import Tagline from './components/Tagline/Tagline';
import UrlInputForm from './components/UrlInputForm/UrlInputForm';
import ResponseNotifier from './components/ResponseNotifier/ResponseNotifier';
import Footer from './components/Footer/Footer';
import './App.css';

const INITIAL_STATE = {
  input: '',
  answer: '',
  description: '',
  hasResponse: false,
  loading: false,
  imageUrl: '',
  serverError: false
};

const App = () => {
  const [appState, setAppState] = useState(INITIAL_STATE);
  const [isFetching, setIsFetching] = useState(false);
  const { 
    input, 
    answer, 
    description, 
    hasResponse, 
    loading, 
    imageUrl } = appState;

  useEffect(() => {
    async function fetchAnswer(url) {
      try {
        setAppState({...appState, loading: true })
        const response = await fetch(url, {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            check: input
          })
        });
        const decision = await response.json();
        setAppState({...appState, ...decision, hasResponse: true, loading: false, imageUrl: input })
      } catch(error) {
        setAppState({
          ...appState,
          answer: 'error',
          description: 'There was an error. Please try again later.',
          hasResponse: true,
          loading: false,
          imageUrl: input,
          serverError: true
        });
      }
    }

    if (isFetching) {
      fetchAnswer('https://nsfwcheckerapi.herokuapp.com/check');
      setIsFetching(false);
    }

  }, [isFetching, appState, input]);

  const onURLChange = (data) => {
    const value = data.target.value;
    
    if (!(value.includes('https://') || value.includes('http://') || value.includes('www.'))) {
      setAppState({...appState, input: 'http://www.' + value})
    } else if (value.includes('https://') && !(value.includes('www.'))) {
      setAppState({...appState, input: 'https://www.' + value.slice(8)})
    } else if (value.includes('http://') && !(value.includes('www.'))) {
      setAppState({...appState, input: 'http://www.' + value.slice(7)})
    } else if (value.includes('www.') && !(value.includes('https://') || value.includes('http://'))) {
      setAppState({...appState, input: 'http://' + value })
    }
    else {
      setAppState({...appState, input: value})
    }
  };

  const onInputChange = (event) => {
    onURLChange(event);
  }

  const onButtonSubmit = (event) => {
    if (event.key === 'Enter') {
      setIsFetching(true)
    }
  };

  const onNewSearch = () => {
    setAppState(INITIAL_STATE);
  };

  return (
    <div className="App">
      <div className='main-container'>
        <FadeIn>
          <Logo />
        </FadeIn>
        {loading ?
          <div className='loading-spin'>
            <ReactLoading type={"spin"} color={"red"} />
            <p>Checking. This may take a few moments...</p>
          </div>
          : 
          hasResponse ?
          <FadeIn>
            <ResponseNotifier
              answer={answer}
              description={description}
              hasResponse={hasResponse}
              onNewSearch={onNewSearch}
              imageUrl={imageUrl}
            />
          </FadeIn> 
          :
          <div> 
            <FadeIn>
              <Tagline />
              <UrlInputForm 
                onInputChange={onInputChange} 
                onButtonSubmit={onButtonSubmit}
              />
              <Footer />
            </FadeIn>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
