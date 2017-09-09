import 'babel-polyfill';
import App from './containers/App';
import InjectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './stores';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { initalState } from './reducers'

const store = createStore(initalState);
InjectTapEventPlugin();

if (process.env.NODE_ENV === 'development') {
  require('react-hot-loader/patch');
}

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('content')
  );
}

document.addEventListener('DOMContentLoaded', () => render(App));

if (module.hot) module.hot.accept('./containers/App', () => render(App));
