import React, { Component } from 'react';
import Header from '../src/Components/Header/Header';
import HeroUnit from '../src/Components/HeroUnit/HeroUnit';
import Footer from '../src/Components/Footer/Footer';
import Showcase from '../src/Components/Showcase/Showcase';
import Divider from '../src/Components/Divider/Divider';
import Experience from '../src/Components/Experience/Experience';
import Infobar from '../src/Components/Infobar/Infobar';
import Services from '../src/Components/Services/Services';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="o-app">
        <Header />
        <div className="o-app__content">
          <HeroUnit name="something" />
          <Showcase />
          <Experience />
          {/*<Divider />*/}
          <Infobar info="I Make Every Code Count!" />
          <Services />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
