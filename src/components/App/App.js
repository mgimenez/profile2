import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Hero from '../Hero/Hero';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import { EventEmitter } from 'fbemitter';
// import ScrollMagic from 'scrollmagic';

import '../../styles/global.scss';
import '../../styles/fonts.scss';
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
      </main>
    )
  }

}


export default App;
