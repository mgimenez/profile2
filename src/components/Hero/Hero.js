import './Hero.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Typing from '../Typing/Typing';
import GoTo from '../GoTo/GoTo';

class Hero extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: 'Hi, I\'m Matias. Web Designer & Frontend Developer.',
      showText: false,
      picAnimation: false,
      heightWindow: window.innerHeight,
      picPin: false,
      heroPin: false
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {

    const { emitter } = this.props;

    this.setState({
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
    let scrollPosition = parseInt(e.target.documentElement.scrollTop),
        positionToPinPic = (this.state.heightWindow/2) + 65,
        positionToPinHero = this.state.heightWindow - 100;
        console.log(scrollPosition, positionToPinHero);

    if(scrollPosition >= positionToPinPic) {
      this.setState({
        picPin: true
      });
    } else {
      this.setState({
        picPin: false
      });
    }

    if(scrollPosition >= positionToPinHero) {
      this.setState({
        heroPin: true
      });
    } else if(!this.state.heroPin) {
      this.setState({
        heroPin: false
      });
    }
  }

  render() {
    return (
      <main className={`hero component ${this.state.heroPin ? 'pined' : ''}`}>
        <div ref="content" className={`hero__content ${this.state.picPin ? 'pined' : ''}`}>
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