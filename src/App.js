import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Video from './components/Video';
import Class from './components/Class';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Backtop from './components/Backtop';
import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Hero />
        <About />
        <Video />
        <Class />
        <Blog />
        <Footer />
        <Backtop />
      </React.Fragment>
    );
  }
}

export default App;
