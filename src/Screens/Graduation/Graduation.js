import React from 'react'
import '../../App.css'

import { connect } from 'react-redux'

import getTranslation from './Translations'

const Graduation = props => {
    const translations = getTranslation(props.language)
    return (
        <div className="content-container">
            <h1>console.log(</h1>
                <h2>{translations.graduation.title}</h2>
                <h3>{translations.graduation.name}</h3>
                <p>{translations.graduation.school}</p>
                <p>{translations.graduation.period}</p>

                <h2>{translations.extras.title}</h2>
                {translations.extras.courses.map(course => {
                    return (
                        <div key={course.name}>
                            <h3>{course.name}</h3>
                            <p>{course.school}</p>
                            <p><a href={course.instructorInfoLink} target="_blank" rel="noopener noreferrer">
                                {course.instructor}
                                </a>
                            </p>
                            <p>{course.period}</p>
                            <p><a href={course.certificateLink} target="_blank" rel="noopener noreferrer">
                                {course.certificate}
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

export default connect(mapStateToProps, null)(Graduation)