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
      showText: false,
      elementPosition: 0,
      elementHeight: 0,
      elementFixed: true,
      picAnimation: false

    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {

    const { emitter } = this.props;
    let windowHeight = window.innerHeight;

    this.setState({
      elementPosition: parseInt(this.refs.pic.getBoundingClientRect().top + 50),
      elementHeight: this.refs.pic.height,
      picAnimation: true
    });

    setTimeout(() => {
      this.setState({
        showText: true
      });

    }, 3000);

    window.addEventListener('scroll', this.handleScroll);

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {

    let positionToPin = this.state.elementPosition + (this.state.elementHeight/2),
        scrollPosition = parseInt(e.target.documentElement.scrollTop);

    if (scrollPosition >= positionToPin) {
      this.setState({
        elementFixed: false
      });

    } else {
      this.setState({
        elementFixed: true
      });
    }
  }

  render() {
    return (
      <main className="hero component">
        <div ref="content" className={`hero__content ${this.state.elementFixed ? 'fixed' : 'pined'}`}>
          <img ref="pic" className={`hero__profile-pic ${this.state.picAnimation ? 'animate' : ''}`} src={require("./images/profile-picture.jpg")} />
          <div className="hero__title__container" >
            {
              this.state.showText ?
                (<Typing text={this.state.data} cls="common-title hero__title show" emitter={this.props.emitter} />)
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

