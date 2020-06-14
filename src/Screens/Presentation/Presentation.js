import React from 'react'
import '../../App.css'

import { connect } from 'react-redux'

import TakeAway from '../../assets/take-away.png'
import Time from '../../assets/time.png'
import WorldMap from '../../assets/world-map.png'
import Fist from '../../assets/fist.png'
import Respect from '../../assets/respect.png'

const Presentation = props => {
    return (
        <div className="content-container">
            <h1>console.log(</h1>
                <div className="row only-desktop">
                    <div className="col-12">
                        <span className="tag">#react-native</span>
                        <span className="tag">#reactjs</span>
                        <span className="tag">#nodejs</span>
                        <span className="tag">#php</span>
                        <span className="tag">#html</span>
                        <span className="tag">#css</span>
                        <span className="tag">#bootstrap</span>
                        <span className="tag">#mysql</span>
                        <span className="tag">#javascript</span>
                        <span className="tag">#jquery</span>
                        <span className="tag">#nosql</span>
                    </div>
                </div>
                

                <h2>Leonardo Soares Zuin</h2>

                {props.language === "PT" &&
                <div>
                    <p>Primeiramente, fã nato de Friends. Você muito provavelmente me verá com meu copo 
                        personalizado na mesa, se um dia trabalhar comigo <img src={TakeAway} className="icon" alt="Take Away Coffee" />
                    </p>
                    <p>Sou o mais velho de 4 irmãos, o que me ajudou desde bem cedo a ser organizado, responsável e 
                        saber gerenciar minha rotina <img src={Time} className="icon" alt="Clock" />
                    </p>
                    <p>
                        Um dos maiores sonhos é poder viajar pra vários cantos do mundo <img src={WorldMap} className="icon" alt="Travel" />
                    </p>
                    <p>
                        No trabalho, gosto de me inserir em projetos e ambientes os quais eu me identifico e realmente 
                        me importo. Surpreende até a mim a forma como me empenho quando vejo potencial no resultado de algo! <img src={Fist} className="icon" alt="Power" />
                    </p>
                    <p>
                        E, ah, eu simplesmente amo trabalhar com pessoas que respeitam a diversidade, que se atentam aos detalhes e 
                        são apaixonadas pelo o que fazem <img src={Respect} className="icon" alt="Diversity" />
                    </p>
                </div>
                }

                {props.language === "EN" &&
                <div>
                    <p>First things first: I'm a huge Friends fan. You'll probably see me in my desk with my 
                        theme cup if you work with me some day <img src={TakeAway} className="icon" alt="Take Away Coffee" />
                    </p>
                    <p>I'm the older of 4 siblings, which helped me realize since very soon to be organized, 
                        responsible and manage my time <img src={Time} className="icon" alt="Clock" />
                    </p>
                    <p>
                        One of my biggest dreams is to travel the world <img src={WorldMap} className="icon" alt="Travel" />
                    </p>
                    <p>
                        At work, I like to be part of projects which I really care and identify. Even I get surprised 
                        how much I can be involved when I see potential in the result of someting! <img src={Fist} className="icon" alt="Power" />
                    </p>
                    <p>
                        And, oh, I just love to work with people who respect the diversity, that care about details 
                        and are really passioned for what they work with <img src={Respect} className="icon" alt="Diversity" />
                    </p>
                </div>
                }
            <h1>);</h1>
        </div>
    )
}

const mapStateToProps = ({ translate }) => {
    return {
        language: translate.language
    }
}

export default connect(mapStateToProps, null)(Presentation)