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
    .addTo(this.props.sm)


    var contactScenePin2 = new ScrollMagic.Scene({
        triggerElement: '.contact',
        triggerHook: 'onLeave',
        offset: '-220px',
    })
    .setPin('.contact')
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
          <div className="contact__list">
            <div className="contact__item">
              <img className="contact__item--img contact__item--img__mobile" src={require("./images/mobile.svg")} />
              <h3 className="contact__item--title">(+54) 15 3 282 9461</h3>
            </div>
            <div className="contact__item">
              <img className="contact__item--img contact__item--img__location" src={require("./images/location.svg")} />
              <h3 className="contact__item--title">Bs. As. Arg</h3>
            </div>
            <div className="contact__item">
              <img className="contact__item--img contact__item--img__mail" src={require("./images/mail.svg")} />
              <a href="mailto:matias.gimenez@gmail.com" className="contact__item--title">matias.gimenez@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

}


export default Contact;

