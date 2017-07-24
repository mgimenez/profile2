import './AboutMe.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Typing from '../Typing/Typing';

class AboutMe extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: 'About me',
      showText: false
    }
  }

  componentDidMount() {

    var aboutScene = new ScrollMagic.Scene({
        triggerElement: '.about-me',
        triggerHook: 'onCenter',
        duration: '100%'
    })
    .on('start', () => {
      this.setState({
        showText: true
      });
    })
    .addIndicators()
    .addTo(this.props.sm)
  }

  render() {
    return (
      <div className="about-me">
        {
          this.state.showText ?
            (<Typing text={this.state.data} cls="hero__title show" />)
          :
            (null)
        }
      </div>
    )
  }

}


export default AboutMe;
