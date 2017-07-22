import './Typing.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Typing extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
      written: '',
      chLength: 0
    }
  }

  componentDidMount() {

    setTimeout(() =>{
      var intervalText = setInterval(() => {

        if (this.state.text[this.state.chLength] != undefined) {
          this.setState({
            written: this.state.written += this.state.text[this.state.chLength],
            chLength: this.state.chLength + 1
          });
        } else {
          clearInterval(intervalText);

          if (this.props.emitter) this.props.emitter.emit('textEffect');

        }

      }, 100)
    }, 2000);

  }


  render() {
    return (
      <h1 className={`typing component cursor ${this.props.cls}`}> {this.state.written} </h1>
    )
  }

}


export default Typing;
