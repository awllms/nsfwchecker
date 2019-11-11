import React from 'react';
import FadeIn from "react-fade-in";
import ReactLoading from "react-loading";
import Logo from './components/Logo/Logo';
import Tagline from './components/Tagline/Tagline';
import UrlInputForm from './components/UrlInputForm/UrlInputForm';
import ResponseNotifier from './components/ResponseNotifier/ResponseNotifier';
import Footer from './components/Footer/Footer';
import './App.css';

const initialState = {
  input: '',
  answer: '',
  description: '',
  hasResponse: false,
  loading: false
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      answer: '',
      description: '',
      hasResponse: false,
      loading: false
    }
  }

  loadDecision = (data) => {
    this.setState({
      answer: data.answer,
      description: data.description
    });
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value });
  }

  onButtonSubmit = (event) => {
    if (event.key === 'Enter') {
      this.setState({loading: true })
      fetch('http://localhost:3001/check', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        check: this.state.input
      })
    }).then(response => response.json())
      .then(decision => {
        this.setState({
          hasResponse: true,
          loading: false})
        this.loadDecision(decision)
      })
    }
  }

  onNewSearch = () => {
    this.setState(initialState);
  }

  render() {
    return (
      <div className="App">
        
        <div className='main-container'>
          <FadeIn>
            <Logo />
          </FadeIn>
          {this.state.loading ?
            <div className='loading-spin'>
              <ReactLoading type={"spin"} color={"red"} />
              <p>Checking. This may take a few moments...</p>
            </div>
            : this.state.hasResponse ?
            <FadeIn>
              <ResponseNotifier
                answer={this.state.answer}
                description={this.state.description}
                hasResponse={this.state.hasResponse}
                onNewSearch={this.onNewSearch}
              />
            </FadeIn> :
            <div> 
              <FadeIn>
                <Tagline />
                <UrlInputForm 
                  onInputChange={this.onInputChange} 
                  onButtonSubmit={this.onButtonSubmit}
                />
              </FadeIn>
            </div>
          }
          {/*<Footer /> */}
        </div>
      </div>
    );
  }
}

export default App;
