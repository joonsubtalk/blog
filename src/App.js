import React, { Component } from 'react';
import logo from './img/logo.svg';
import Header from '../src/Components/Header/Header';
import HeroUnit from '../src/Components/HeroUnit/HeroUnit';
import Footer from '../src/Components/Footer/Footer';
import Showcase from '../src/Components/Showcase/Showcase';
import Divider from '../src/Components/Divider/Divider';
import Infobar from '../src/Components/Infobar/Infobar';
import Services from '../src/Components/Services/Services';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="o-app">
        <Header />
        <section className="o-app__content">
          <HeroUnit name="something" />
          <Services />
          <Showcase />
          <Divider />
          <Infobar info="Say Something here!" />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
