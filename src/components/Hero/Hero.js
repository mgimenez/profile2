import './Hero.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Typing from '../Typing/Typing';
import GoTo from '../GoTo/GoTo';
import { StickyContainer, Sticky } from 'react-sticky';

class Hero extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: 'Hi, I\'m Matias. Web Designer & Frontend Developer.',
      showText: false,
      picAnimation: false
    }
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

  }

  componentWillUnmount() {
  }

  render() {
    return (
      <main className={`hero component`}>
        <div ref="content" className={`hero__content`}>
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