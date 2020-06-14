import React from 'react'
import '../../App.css'

import { connect } from 'react-redux'

import getTranslate from './Translations'

const Contact = props => {
    const translations = getTranslate(props.language)
    return (
        <div className="content-container">
            <h1>console.log(</h1>
                {translations.contacts.map(contact => {
                    return (
                        <div key={contact.title}>
                            <h2>{contact.title}</h2>
                            <p><a href={contact.link} target="_blank" rel="noopener noreferrer">
                                {contact.name}
                                </a>
                            </p>
                        </div>
                    )
                })}
            <h1>);</h1>
        </div>
    )
}

const mapStateToProps = ({ translate }) => {
    return {
        language: translate.language
    }
}

export default connect(mapStateToProps, null)(Contact)