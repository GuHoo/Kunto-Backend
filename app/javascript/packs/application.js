import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';
import createStore from './stores';
import { initalState } from './reducers'

const store = createStore(initalState);

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
