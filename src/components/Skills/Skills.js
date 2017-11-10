import './Skills.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Typing from '../Typing/Typing';

class Skills extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: 'Skills',
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
    var skillsScene = new ScrollMagic.Scene({
        triggerElement: '.skills',
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

    if (this.state.width > 767) {

      /* pin skills desktop */
      var skillsScenePin2 = new ScrollMagic.Scene({
          triggerElement: '.skills',
          triggerHook: 'onLeave',
          offset: '-120px',
      })
      .setPin('.skills')
      // .addIndicators({name: "Skills pin", colorEnd: "#00F"})
      .addTo(this.props.sm)

      /* fade-in skills desktop */
      var skillAppear = new ScrollMagic.Scene({
          triggerElement: '.about-me',
          triggerHook: 'onLeave',
          // offset: '-50px',
          // duration: '10%'
      })
      .setClassToggle('.skill__item', 'fadein')
      // .addIndicators({name: "skill appear", colorEnd: "#0F0"})
      .addTo(this.props.sm)

      /* fix skills desktop */
      var contactScenePin = new ScrollMagic.Scene({
          triggerElement: '.contact',
          triggerHook: 'onLeave',
          offset: '-300px',
      })
      // .addIndicators({name: "skill fixed", colorEnd: "#0F0"})
      .setClassToggle('.skills', 'fixed')
      .addTo(this.props.sm)

    } else {

      /* pin skills mobile */
      var skillsScenePin2 = new ScrollMagic.Scene({
          triggerElement: '.skills',
          triggerHook: 'onLeave',
          offset: '-260px',
      })
      .setPin('.skills__title-wrapper', {
        pushFollowers: false
      })
      .setClassToggle('.skills__title-wrapper', 'pin')
      // .addIndicators({name: "pin skills title wrap", colorEnd: "#00F"})
      .addTo(this.props.sm)

      /* skills fade-in mobile */
      var skillAppear = new ScrollMagic.Scene({
          triggerElement: '.skills',
          triggerHook: 'onCenter',
          offset: '-150px',
          // duration: '10%'
      })
      .setClassToggle('.skill__item', 'fadein')
      // .addIndicators({name: "skill appear", colorEnd: "#0F0"})
      .addTo(this.props.sm)

    }
  }

  render() {
    return (
      <div className="skills">
        <div className="skills__title-wrapper">
          {
            this.state.showText ?
              (<Typing text={this.state.data} cls="common-title skills__title show" />)
            :
              (null)
          }
        </div>

        <div className="skills__list">
          <div className="skill__item">
            <img className="skill__item--img" src={require("./images/programming.svg")} />
            <h3 className="skill__item--title">HTML5<br/>CSS3 / SASS<br/>JS ES6</h3>
          </div>
          <div className="skill__item">
            <img className="skill__item--img" src={require("./images/task-runner.svg")} />
            <h3 className="skill__item--title">Gulp<br/>Grunt<br/>Webpack</h3>
          </div>
          <div className="skill__item">
            <img className="skill__item--img" src={require("./images/frameworks.svg")} />
            <h3 className="skill__item--title">React js<br/>Angular js<br/>Ember js</h3>
          </div>
          <div className="skill__item">
            <img className="skill__item--img" src={require("./images/api.svg")} />
            <h3 className="skill__item--title">Api<br/>management</h3>
          </div>
          <div className="skill__item">
            <img className="skill__item--img" src={require("./images/performance.svg")} />
            <h3 className="skill__item--title">Web<br/>Performance<br/>Optimizer</h3>
          </div>
          <div className="skill__item">
            <img className="skill__item--img" src={require("./images/rwd.svg")} />
            <h3 className="skill__item--title">Responsive Web<br/>Mobile first</h3>
          </div>
          <div className="skill__item">
            <img className="skill__item--img" src={require("./images/git.svg")} />
            <h3 className="skill__item--title">GIT<br/>SVN</h3>
          </div>
          <div className="skill__item">
            <img className="skill__item--img" src={require("./images/design.svg")} />
            <h3 className="skill__item--title">Photoshop<br/>Illustrator<br/>Sketch<br/>Zeplin</h3>
          </div>
        </div>
      </div>
    )
  }

}


export default Skills;

