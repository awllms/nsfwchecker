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
  loading: false,
  imageUrl: ''
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      answer: '',
      description: '',
      hasResponse: false,
      loading: false,
      imageUrl: '',
      serverError: false
    }
  }

  loadDecision = (data) => {
    this.setState({
      answer: data.answer,
      description: data.description
    });
  }

  onURLChange = (data) => {
    const value = data.target.value;
    if (!(value.includes('https://') || value.includes('http://') || value.includes('www.'))) {
      this.setState({input: 'http://www.' + value})
    } else if (value.includes('https://') && !(value.includes('www.'))) {
      this.setState({input: 'http://www.' + value.slice(8)})
    } else if (value.includes('http://') && !(value.includes('www.'))) {
      this.setState({input: 'http://www.' + value.slice(7)})
    } else if (value.includes('www.') && !(value.includes('https://') || value.includes('http://'))) {
      this.setState({input: 'http://' + value })
    }
    else {
      this.setState({input: value})
    }
  }

  onInputChange = (event) => {
    this.onURLChange(event)
    this.setState((state) => {
      console.log(state.input)
    })
  }

  onButtonSubmit = (event) => {
    if (event.key === 'Enter') {
      this.setState({loading: true })
      fetch('https://nsfwcheckerapi.herokuapp.com/check', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        check: this.state.input
      })
    }).then(response => response.json())
      .then(decision => {
        this.setState({
          hasResponse: true,
          loading: false,
          imageUrl: this.state.input
        })
        this.loadDecision(decision)
      }).catch(error => {
        this.setState({
          answer: 'error',
          description: 'There was an error. Please try again later.',
          hasResponse: true,
          loading: false,
          imageUrl: this.state.input
        })
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
            : 
            this.state.hasResponse ?
            <FadeIn>
              <ResponseNotifier
                answer={this.state.answer}
                description={this.state.description}
                hasResponse={this.state.hasResponse}
                onNewSearch={this.onNewSearch}
                imageUrl={this.state.imageUrl}
              />
            </FadeIn> 
            :
            <div> 
              <FadeIn>
                <Tagline />
                <UrlInputForm 
                  onInputChange={this.onInputChange} 
                  onButtonSubmit={this.onButtonSubmit}
                />
                <Footer />
              </FadeIn>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
