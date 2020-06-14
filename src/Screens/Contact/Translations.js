const PT = {
    contacts: [
        {
            title: "LinkedIn",
            name: "Veja meu perfil",
            link: "https://linkedin.com/in/lzuin"
        },
        {
            title: "GitHub",
            name: "Cheque meus códigos",
            link: "https://github.com/zuinl/"
        },
        {
            title: "Instagram - @dev.zuin",
            name: "Um perfil profissional, levo como hobbie/blog",
            link: "https://instagram.com/dev.zuin"
        },
        // {
        //     title: "Medium",
        //     name: "Dê uma olhada pelo o que me interesso. Também pretendo escrever algumas coisas em breve ;)",
        //     link: "https://medium.com/@leonardosoareszuin"
        // },
        {
            title: "E-mail",
            name: "leonardosoareszuin@gmail.com",
            link: "mailto:leonardosoareszuin@gmail.com"
        },
        {
            title: "Telefone",
            name: "+55 (12) 99217-6576",
            link: "https://api.whatsapp.com/send?1=pt_BR&phone=5512992176576"
        },
    ]
}

const EN = {
    contacts: [
        {
            title: "LinkedIn",
            name: "Visit my profile",
            link: "https://linkedin.com/in/lzuin"
        },
        {
            title: "GitHub",
            name: "Take a look at my code",
            link: "https://github.com/zuinl/"
        },
        {
            title: "Instagram - @dev.zuin",
            name: "A professional profile, kind like a hobbie :)",
            link: "https://instagram.com/dev.zuin"
        },
        // {
        //     title: "Medium",
        //     name: "Check out what a have interest in. Also, I pretend to write some stuff soon ;)",
        //     link: "https://medium.com/@leonardosoareszuin"
        // },
        {
            title: "Email",
            name: "leonardosoareszuin@gmail.com",
            link: "mailto:leonardosoareszuin@gmail.com"
        },
        {
            title: "Phone",
            name: "+55 (12) 99217-6576",
            link: "https://api.whatsapp.com/send?1=pt_BR&phone=5512992176576"
        },
    ]
}

const translate = language => {
    switch(language) {
        case "PT": return { ...PT }
        case "EN": return { ...EN }
        default: return { ...PT }
    }
}

export default translate