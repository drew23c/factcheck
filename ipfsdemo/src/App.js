import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Articles from './Components/Articles/Articles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Articles/>
        <Footer/>
      </div>
    );
  }
}

export default App;
