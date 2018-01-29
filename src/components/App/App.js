import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Hero from '../Hero/Hero';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import { EventEmitter } from 'fbemitter';

import '../../styles/global.scss';
import '../../styles/fonts.scss';
import 'normalize.css';

const emitter = new EventEmitter();

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <main>
        <Hero emitter={emitter} />
        <AboutMe />
        <Skills />
        <Contact />
      </main>
    )
  }

}


export default App;