import React, { Component } from 'react';
import logo from './img/logo.svg';
import Header from '../src/Components/Header/Header';
import HeroUnit from '../src/Components/HeroUnit/HeroUnit';
import Footer from '../src/Components/Footer/Footer';
import Showcase from '../src/Components/Showcase/Showcase';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="o-app">
        <Header />
        <section className="o-app__content">
          <HeroUnit name="something" />
          <Showcase />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;