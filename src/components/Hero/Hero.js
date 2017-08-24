import './Hero.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Typing from '../Typing/Typing';
import GoTo from '../GoTo/GoTo';
// import ScrollMagic from 'scrollmagic';

class Hero extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: 'Hi, I\'m Matias. Web Designer & Frontend Developer.',
      showText: false

    }
  }

  componentDidMount() {

    const { emitter } = this.props;
    let windowHeight = window.innerHeight;
    setTimeout(() => {

      this.setState({
        showText: true
      });

    }, 3000);

    var pinScene = new ScrollMagic.Scene({
        triggerElement: '.hero',
        triggerHook: 'onLeave',
        duration: windowHeight - (this.refs.content.offsetTop + this.refs.pic.height/2) + 'px'
    })
    .setPin('.hero__content', {
      pushFollowers: false
    })
    .addIndicators()
    .addTo(this.props.sm)

    var pinScene2 = new ScrollMagic.Scene({
        triggerElement: '.about-me',
        triggerHook: 'onEnter',
        offset: windowHeight - (this.refs.pic.height + 50) + 'px',
        duration: '100%'
    })
    .setPin('.hero', {
      pushFollowers: false
    })
    .setClassToggle('.hero', 'fixed')
    .addIndicators()
    .addTo(this.props.sm);

  }

  render() {
    return (
      <main className="hero component">
        <div ref="content" className="hero__content">
          <img ref="pic" className="hero__profile-pic" src={require("./images/profile-picture.jpg")} />
          <div className="hero__title__container" >
            {
              this.state.showText ?
                (<Typing text={this.state.data} cls="hero__title show" emitter={this.props.emitter} />)
              :
                (null)
            }
          </div>
        </div>
        <GoTo emitter={this.props.emitter} />
      </main>
    )
  }
}


export default Hero;
