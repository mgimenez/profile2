import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Hero from '../Hero/Hero';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { EventEmitter } from 'fbemitter';
// import ScrollMagic from 'scrollmagic';

import '../../styles/global.scss';
import '../../styles/fonts.scss';
import '../../styles/icons.scss';
import 'normalize.css';

const emitter = new EventEmitter();
const smController = new ScrollMagic.Controller();

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <main>
        <Hero emitter={emitter} sm={smController} />
        <AboutMe sm={smController} />
        <Skills sm={smController} />
        <Contact sm={smController} />
        <Footer sm={smController} />
      </main>
    )
  }

}


export default App;