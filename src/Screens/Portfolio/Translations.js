const PT = {
    presentation: "Apresentação",
    graduation: "Graduação",
    portfolio: "Portfólio",
    contact: "Contato"
}

const EN = {
    presentation: "Presentation",
    graduation: "Graduation",
    portfolio: "Portfolio",
    contact: "Contact"
}

const translate = language => {
    switch(language) {
        case "PT": return { ...PT }
        case "EN": return { ...EN }
        default: return { ...PT }
    }
}

export default translate