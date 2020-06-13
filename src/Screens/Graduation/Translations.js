const PT = {
    
}

const EN = {
    
}

const translate = language => {
    switch(language) {
        case "PT": return { ...PT }
        case "EN": return { ...EN }
        default: return { ...PT }
    }
}

export default translate