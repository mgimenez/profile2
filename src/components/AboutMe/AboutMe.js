import './AboutMe.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Typing from '../Typing/Typing';

class AboutMe extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: 'About me',
      showText: false,
      width: props.width
    }
  }

  componentWillMount() {
    this.setState({
      width: window.innerWidth
    });
  }
  componentDidMount() {

    /* text animation */
    var aboutScene = new ScrollMagic.Scene({
        triggerElement: '.about-me',
        triggerHook: 'onEnter',
        duration: '100%'
    })
    .on('start', () => {
      this.setState({
        showText: true
      });
    })
    // .addIndicators()
    .addTo(this.props.sm)


    if (this.state.width > 768) {

      /* pin about-me desktop */
      var aboutScenePin = new ScrollMagic.Scene({
        triggerElement: '.about-me',
        triggerHook: 'onLeave',
        offset: '-140px',
        // duration: '10%'
      })
      .setPin('.about-me', {
        pushFollowers: false
      })
      .setClassToggle('.about-me', 'fixed')
      // .addIndicators({name: "pin aboutMe", colorEnd: "#FFFFFF"})
      .addTo(this.props.sm)

      /* fix about-me title desktop */
      var skillsScenePin = new ScrollMagic.Scene({
          triggerElement: '.skills',
          triggerHook: 'onLeave',
          offset: '-200px',
      })
      .setClassToggle('.about-me', 'fixed-title')
      // .addIndicators({name: "fix aboutMe", colorEnd: "#F00"})
      .addTo(this.props.sm)

    } else {

      /* pin about-me title wrapper mobile */
      var aboutScenePin = new ScrollMagic.Scene({
        triggerElement: '.about-me',
        triggerHook: 'onLeave',
        offset: '-200px',
        // duration: '10%'
      })
      .setPin('.about-me__title-wrapper', {
        pushFollowers: false
      })
      .setClassToggle('.about-me__title-wrapper', 'fix-title')
      // .addIndicators({name: "pin aboutMe title", colorEnd: "#FFFFFF"})
      .addTo(this.props.sm)

      /* fix about-me title mobile */
      var skillsScenePin = new ScrollMagic.Scene({
          triggerElement: '.skills',
          triggerHook: 'onLeave',
          offset: '-250px',
      })
      .setClassToggle('.about-me', 'fixed-title')
      // .addIndicators({name: "fix aboutMe title", colorEnd: "#F00"})
      .addTo(this.props.sm)
    }


  }

  render() {
    return (
      <div className="about-me">
        <div className="about-me__title-wrapper">
          {
            this.state.showText ?
              (<Typing text={this.state.data} cls="common-title about-me__title show" />)
            :
              (null)
          }
        </div>
        <div className="about-me__description">
          <p>Since 2010, I have worked as a freelancer, developping sites and applications web meeting tight, high-pressure deadlines while ensuring consistent operation.</p>
          <p>My passion for technology extends far beyond the day-to-day demands of my work: I keep a constant eye on emerging trends in the field, so that I'm always updated on the latest advances, with the goal of ensuring that the quality and scope of my work are always expanding.</p>
          <p>Since 2010, I have worked as a freelancer, developping sites and applications web meeting tight, high-pressure deadlines while ensuring consistent operation.</p>
          <p>My passion for technology extends far beyond the day-to-day demands of my work: I keep a constant eye on emerging trends in the field, so that I'm always updated on the latest advances, with the goal of ensuring that the quality and scope of my work are always expanding.</p>
        </div>
      </div>
    )
  }

}


export default AboutMe;

