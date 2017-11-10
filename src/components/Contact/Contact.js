import './Contact.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Typing from '../Typing/Typing';

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: 'Contact',
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

    if (this.state.width > 768) {

      var contactScenePin2 = new ScrollMagic.Scene({
          triggerElement: '.contact',
          triggerHook: 'onLeave',
          offset: '-220px',
      })
      .setPin('.contact')
      // .addIndicators({name: "pin contact", colorEnd: "#0F0"})
      .addTo(this.props.sm)

    } else {

      var contactScenePin2 = new ScrollMagic.Scene({
          triggerElement: '.contact',
          triggerHook: 'onLeave',
          offset: '-330px',
      })
      .setPin('.contact__title-wrapper', {
        pushFollowers: false
      })
      .setClassToggle('.contact__title-wrapper', 'pin')
      // .addIndicators({name: "pin contact", colorEnd: "#0F0"})
      .addTo(this.props.sm)
    }
  }

  render() {
    return (
      <div className="contact">
        <div className="contact__title-wrapper">
          {
            this.state.showText ?
              (<Typing text={this.state.data} cls="common-title contact__title show" />)
            :
              (null)
          }
        </div>
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
        <div className="contact__footer">
          <p>© 2017 All Rights Reserved.</p>
        </div>
      </div>
    )
  }

}


export default Contact;

