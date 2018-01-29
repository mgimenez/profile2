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
  }

  render() {
    return (
      <div className="skills">
        {
          this.state.showText ?
            (<Typing text={this.state.data} cls="common-title skills__title show" />)
          :
            (null)
        }
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