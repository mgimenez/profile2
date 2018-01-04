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
      picInitialPosition: 0,
      picHeight: 0,
      picFixed: true,
      picAnimation: false,
      componentPined: false

    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {

    const { emitter } = this.props;
    let windowHeight = window.innerHeight;

    this.setState({
      picInitialPosition: parseInt(this.refs.pic.getBoundingClientRect().top + 50),
      picHeight: this.refs.pic.height,
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

    let picLivePosition = parseInt(this.refs.pic.getBoundingClientRect().top),
        positionToPinPic = this.state.picInitialPosition + (this.state.picHeight/2),
        scrollPosition = parseInt(e.target.documentElement.scrollTop);

    console.log('scroll: ' + scrollPosition, 'pic: ' + picLivePosition);

    if (scrollPosition >= positionToPinPic) {
      this.setState({
        picFixed: false
      });

    } else {
      this.setState({
        picFixed: true
      });
    }

    if (picLivePosition <= 50) {
      this.setState({
        componentPined: true
      });

    } else {
      this.setState({
        componentPined: false
      });
    }


  }

  render() {
    return (
      <main className={`hero component ${this.state.componentPined ? 'pined' : ''}`}>
        <div ref="content" className={`hero__content ${this.state.picFixed ? 'fixed' : 'pined'}`}>
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

