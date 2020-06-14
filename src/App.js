import React from 'react'

import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'

import './App.css'
import './index.css'

const App = props => {
    return (
        <div className="App">
            <Navbar />
        </div>
    )
}

export default connect(null, null)(App)