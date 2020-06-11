import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import App from './App'
import Presentation from './Screens/Presentation/Presentation'

import { Provider } from 'react-redux'
import Store from './Redux/Store'

import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <BrowserRouter>
        <Route path="/" component={App} />
        <Route path="/presentation" component={Presentation} />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)