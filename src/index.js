import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);