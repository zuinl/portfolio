import React from 'react'
import '../../App.css'

import { connect } from 'react-redux'

import getTranslations from './Translations'

import s2 from '../../assets/heart.png'

const Portfolio = props => {
    const translations = getTranslations(props.language)
    return (
        <div className="content-container">
            <h1>console.log(</h1>
                 <p><img src={s2} className="icon" alt="Favorite" /> = my favorite</p>
                <h2>ReactJS + Node.js</h2>
                {translations.reactjs.map(project => {
                    return (
                        <div key={project.name}>
                            <h3>{project.name} {project.favorite && <img src={s2} className="icon" alt="Favorite" />}</h3>
                            <p>{project.description}</p>
                            <p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    {project.linkTitle}
                                </a>
                            </p>
                            {project.online &&
                            <p>
                                <a href={project.onlineLink} target="_blank" rel="noopener noreferrer">
                                    {project.onlineTitle}
                                </a>
                            </p>
                            }
                        </div>
                    )
                })}

                <h2>React Native</h2>
                {translations.reactnative.map(project => {
                    return (
                        <div key={project.name}>
                            <h3>{project.name} {project.favorite && <img src={s2} className="icon" alt="Favorite" />}</h3>
                            <p>{project.description}</p>
                            <p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    {project.linkTitle}
                                </a>
                            </p>
                        </div>
                    )
                })}

                <h2>PHP + MySQL + HTML5 + CSS + JS</h2>
                {translations.php.map(project => {
                    return (
                        <div key={project.name}>
                            <h3>{project.name} {project.favorite && <img src={s2} className="icon" alt="Favorite" />}</h3>
                            <p>{project.description}</p>
                            <p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    {project.linkTitle}
                                </a>
                            </p>
                            {project.online &&
                            <p>
                                <a href={project.onlineLink} target="_blank" rel="noopener noreferrer">
                                    {project.onlineTitle}
                                </a>
                            </p>
                            }
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

export default connect(mapStateToProps, null)(Portfolio)