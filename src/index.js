import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import App from './App'
import Presentation from './Screens/Presentation/Presentation'
import Graduation from './Screens/Graduation/Graduation'
import Portfolio from './Screens/Portfolio/Portfolio'
import Contact from './Screens/Contact/Contact'

import { Provider } from 'react-redux'
import Store from './Redux/Store'

import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <BrowserRouter>
        <Route path="/" component={App} />
        <Route path="/presentation" component={Presentation} />
        <Route path="/graduation" component={Graduation} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)