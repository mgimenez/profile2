import './Hero.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Hero extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: 'Hi, I\'m Matias. Web Designer & Frontend Developer.',
      written: '',
      chLength: 0

    }
  }

  componentDidMount() {
    // var emitter =
    setTimeout(() => {
      this.writeText();
    }, 2000);
  }

  writeText() {

    const { emitter } = this.props;

    var intervalText = setInterval(() => {

      if (this.state.data[this.state.chLength] != undefined) {
        this.setState({
          written: this.state.written += this.state.data[this.state.chLength],
          chLength: this.state.chLength + 1
        });
      } else {
        clearInterval(intervalText);
        emitter.emit('textEffect');  // Listener prints "5 10".

      }

    }, 100)
  }

  render() {
    return (
      <main className="hero component">
        <div className="hero__content">
          <img className="hero__profile-pic" src={require("./images/profile-picture.jpg")} />
          <h1 className={`hero__title cursor`}>{this.state.written}</h1>
        </div>
      </main>
    )
  }

}


export default Hero;
