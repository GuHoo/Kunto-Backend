import React from 'react';
import createStore from '../stores'

const store = createStore();

export default function App() {
  return (
    <Provider store={store}>
      <div>hoge</div>
    </Provider>
  );
}
