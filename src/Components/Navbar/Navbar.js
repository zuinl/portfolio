import React from 'react'
import '../../App.css'
import './style.css'

import { connect } from 'react-redux'
import { translate } from '../../Redux/Actions/Translate'

import { Link } from 'react-router-dom'

import getTranslation from './Translations'

const Header = props => {
    const translations = getTranslation(props.language)
    return (
        <div className="navbar-container">
            <div className="row only-desktop">
                <div className="col-2">
                    <Link to="/presentation" className="navbar-link">{translations.presentation}</Link>
                </div>
                <div className="col-2">
                    <Link to="/graduation" className="navbar-link">{translations.graduation}</Link>
                </div>
                <div className="col-2">
                    <Link to="/portfolio" className="navbar-link">{translations.portfolio}</Link>
                </div>
                <div className="col-2">
                    <Link to="/contact" className="navbar-link">{translations.contact}</Link>
                </div>
                <div className="col-4 right">
                    <button onClick={() => props.translate("EN")} className="navbar-button">EN</button>
                    <button onClick={() => props.translate("PT")} className="navbar-button">PT</button>
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
                <div className="col-12 center">
                    <Link to="/presentation" className="navbar-link">{translations.presentation}</Link>
                    <Link to="/graduation" className="navbar-link">{translations.graduation}</Link>
                </div>
                <div className="col-12 center">
                    <Link to="/portfolio" className="navbar-link">{translations.portfolio}</Link>
                    <Link to="/contact" className="navbar-link">{translations.contact}</Link>
                </div>
                <div className="col-12 center">
                    <button onClick={() => props.translate("EN")} className="navbar-button">EN</button>
                    <button onClick={() => props.translate("PT")} className="navbar-button">PT</button>
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

const mapDispatchToProps = dispatch => {
    return {
        translate: language => dispatch(translate(language))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)