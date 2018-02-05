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

    var ContactScene = new ScrollMagic.Scene({
         triggerElement: '.contact',
         triggerHook: 'onEnter',
         offset: '100px'
     })
     .on('start', () => {
       this.setState({
         showText: true
       });
     })
     // .addIndicators({name: "Contact show Text", colorEnd: "#FFFFFF"})
     .setClassToggle('.contact__description', 'fade-in')
     .addTo(this.props.sm)

    var ContactScenePin = new ScrollMagic.Scene({
         triggerElement: '.contact',
         triggerHook: 'onCenter',
         offset: '50px'
     })
     .setPin('.contact', {
       pushFollowers: false
     })
     // .addIndicators({name: "Contact Pin", colorEnd: "#FFFFFF"})
     .addTo(this.props.sm)

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
              <h3 className="contact__item--title">(+54) 911 3 282 9461</h3>
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