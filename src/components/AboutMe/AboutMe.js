import './AboutMe.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Typing from '../Typing/Typing';

class AboutMe extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="about-me">
        <Typing text="About Me" cls="hero__title show" />)
      </div>
    )
  }

}


export default AboutMe;
