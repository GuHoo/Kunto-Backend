import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>hoge</div>,
    document.getElementById('content')
  )
});
