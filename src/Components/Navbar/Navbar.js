import React from 'react'
import '../../App.css'
import './style.css'

import { connect } from 'react-redux'

import translate from './Translations'

const Header = props => {
    const translations = translate(props.language)
    return (
        <div className="navbar-container">
            <div className="row only-desktop">
                <div className="col-2">
                    <a href="#" className="navbar-link">{translations.presentation}</a>
                </div>
                <div className="col-2">
                    <a href="#" className="navbar-link">{translations.graduation}</a>
                </div>
                <div className="col-2">
                    <a href="#" className="navbar-link">{translations.portfolio}</a>
                </div>
                <div className="col-2">
                    <a href="#" className="navbar-link">{translations.contact}</a>
                </div>
                <div className="col-4 right">
                    <span className="navbar-title">
                        {"> "}
                        Leonardo Zuin 
                        {" <"}
                    </span>
                </div>
            </div>

            <div className="row only-phone">
                <div className="col-12 center">
                    <span className="navbar-title">
                        {"> "}
                        Leonardo Zuin 
                        {" <"}
                    </span>
                </div>
                <div className="col-12">
                    <a href="#" className="navbar-link">{translations.presentation}</a>
                    <a href="#" className="navbar-link">{translations.graduation}</a>
                </div>
                <div className="col-12">
                    <a href="#" className="navbar-link">{translations.portfolio}</a>
                    <a href="#" className="navbar-link">{translations.contact}</a>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ translate }) => {
    return {
        language: translate.language
    }
}

export default connect(mapStateToProps, null)(Header)