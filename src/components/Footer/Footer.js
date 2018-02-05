import './Footer.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Typing from '../Typing/Typing';

class Footer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }


  render() {
    return (
      <footer className={`footer component`}>
        <p className="legal-text">© 2016 All Rights Reserved.</p>
        <div className="social-icon-container">
          <a href="https://ar.linkedin.com/in/gimenezmatias" target="_blank" className="social-icon icon-icon-li">Linkedin</a>
          <a href="https://twitter.com/jopti" target="_blank" className="social-icon  icon-icon-tw">Twitter</a>
          <a href="https://github.com/mgimenez" target="_blank" className="social-icon  icon-icon-github">GitHub</a>
          <a href="https://mgimenez.github.io/joptiwebs/cv/" target="_blank" className="social-icon  icon-icon-profile">CV</a>
        </div>
      </footer>
    )
  }
}


export default Footer;