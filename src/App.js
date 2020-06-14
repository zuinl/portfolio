import React from 'react'

import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'

import './App.css'
import './index.css'

const App = props => {
    return (
        <Redirect to="/presentation" />
    )
}

export default connect(null, null)(App)