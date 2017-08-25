import './Contact.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Typing from '../Typing/Typing';

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: 'Contact',
      showText: false
    }
  }

  componentDidMount() {

    var contactScene = new ScrollMagic.Scene({
        triggerElement: '.contact',
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

    var contactScenePin = new ScrollMagic.Scene({
        triggerElement: '.contact',
        triggerHook: 'onLeave',
        offset: '-300px',
    })
    .setClassToggle('.skills', 'fixed')
    // .addIndicators()
    .addTo(this.props.sm)
  }

  render() {
    return (
      <div className="contact">
        {
          this.state.showText ?
            (<Typing text={this.state.data} cls="common-title contact__title show" />)
          :
            (null)
        }
        <div className="contact__description">
          <p>Since 2010, I have worked as a freelancer, developping sites and applications web meeting tight, high-pressure deadlines while ensuring consistent operation.</p>
          <p>My passion for technology extends far beyond the day-to-day demands of my work: I keep a constant eye on emerging trends in the field, so that I'm always updated on the latest advances, with the goal of ensuring that the quality and scope of my work are always expanding.</p>
          <p>Since 2010, I have worked as a freelancer, developping sites and applications web meeting tight, high-pressure deadlines while ensuring consistent operation.</p>
          <p>My passion for technology extends far beyond the day-to-day demands of my work: I keep a constant eye on emerging trends in the field, so that I'm always updated on the latest advances, with the goal of ensuring that the quality and scope of my work are always expanding.</p>
          <p>Since 2010, I have worked as a freelancer, developping sites and applications web meeting tight, high-pressure deadlines while ensuring consistent operation.</p>
          <p>My passion for technology extends far beyond the day-to-day demands of my work: I keep a constant eye on emerging trends in the field, so that I'm always updated on the latest advances, with the goal of ensuring that the quality and scope of my work are always expanding.</p>
          <p>Since 2010, I have worked as a freelancer, developping sites and applications web meeting tight, high-pressure deadlines while ensuring consistent operation.</p>
          <p>My passion for technology extends far beyond the day-to-day demands of my work: I keep a constant eye on emerging trends in the field, so that I'm always updated on the latest advances, with the goal of ensuring that the quality and scope of my work are always expanding.</p>
        </div>
      </div>
    )
  }

}


export default Contact;
