import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import GlobalStyle from './lib/GlobalStyle';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer, {rootSaga} from './module';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle/>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
