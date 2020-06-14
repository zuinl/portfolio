const PT = {
    graduation: {
        title: "Ensino Superior",
        name: "Análise e Desenvolvimento de Sistemas",
        school: "Faculdade de Tecnologia de Taubaté (FATEC Taubaté)",
        period: "2017 - 2020"
    },
    extras: {
        title: "Cursos extracurriculares",
        courses: [
            {
                name: "Desenvolvimento Mobile com React Native",
                school: "Udemy Brasil",
                instructor: "Instrutor: Leonardo M. Leitão - Cod3er Cursos",
                instructorInfoLink: "https://www.linkedin.com/company/cod3r/about/",
                period: "Abril/2020 - Maio/2020",
                certificate: "Ver certificado",
                certificateLink: "https://www.udemy.com/certificate/UC-8e38aba9-13ab-41f8-b845-52bd357723cd/"
            },
            {
                name: "Mongo, Express, Angular & Node.js",
                school: "Udemy Brasil",
                instructor: "Instrutor: Leonardo M. Leitão - Cod3er Cursos",
                instructorInfoLink: "https://www.linkedin.com/company/cod3r/about/",
                period: "Maio/2020",
                certificate: "Ver certificado",
                certificateLink: "https://www.udemy.com/certificate/UC-cf328591-53a1-4dbe-8561-bebd5a5c69c8/"
            },
            {
                name: "Desenvolvimento Web - PHP, MySQL, HTML5, CSS e JS",
                school: "Udemy Brasil",
                instructor: "Instrutor: André Fontenelle",
                instructorInfoLink: "https://www.linkedin.com/in/andr%C3%A9-fontenelle/",
                period: "2018",
                certificate: "Ver certificado",
                certificateLink: "https://www.udemy.com/certificate/UC-c67544cb-d287-4698-a04c-f098a4fe3995/"
            },
            {
                name: "Git Completo",
                school: "Udemy Brasil",
                instructor: "Instrutor: Gabriel Ferrari Ceron",
                instructorInfoLink: "https://www.linkedin.com/in/gabrielferrariceron/",
                period: "Junho/2020",
                certificate: "Ver certificado",
                certificateLink: "https://www.udemy.com/certificate/UC-753db123-551d-4ce5-8bc6-edafe92581e0/"
            },
            {
                name: "Metodologia SCRUM",
                school: "Udemy Brasil",
                instructor: "Instrutor: Gustavo Farias",
                instructorInfoLink: "https://www.udemy.com/user/gustavo-farias-2/",
                period: "Janeiro/2019",
                certificate: "Ver certificado",
                certificateLink: "https://www.udemy.com/certificate/UC-2EZYAA5R/"
            }
        ]
    }
}

const EN = {
    graduation: {
        title: "College",
        name: "Analysis and systems development",
        school: "Technology College of Taubaté",
        period: "2017 - 2020"
    },
    extras: {
        title: "Extra courses",
        courses: [
            {
                name: "React Native Mobile Development",
                school: "Udemy Brasil",
                instructor: "Instructor: Leonardo M. Leitão - Cod3er Cursos",
                instructorInfoLink: "https://www.linkedin.com/company/cod3r/about/",
                period: "April/2020 - May/2020",
                certificate: "See certificate",
                certificateLink: "https://www.udemy.com/certificate/UC-8e38aba9-13ab-41f8-b845-52bd357723cd/"
            },
            {
                name: "Mongo, Express, Angular & Node.js",
                school: "Udemy Brasil",
                instructor: "Instructor: Leonardo M. Leitão - Cod3er Cursos",
                instructorInfoLink: "https://www.linkedin.com/company/cod3r/about/",
                period: "May/2020",
                certificate: "See certificate",
                certificateLink: "https://www.udemy.com/certificate/UC-cf328591-53a1-4dbe-8561-bebd5a5c69c8/"
            },
            {
                name: "Web Development - PHP, MySQL, HTML5, CSS & JS",
                school: "Udemy Brasil",
                instructor: "Instructor: André Fontenelle",
                instructorInfoLink: "https://www.linkedin.com/in/andr%C3%A9-fontenelle/",
                period: "2018",
                certificate: "See certificate",
                certificateLink: "https://www.udemy.com/certificate/UC-c67544cb-d287-4698-a04c-f098a4fe3995/"
            },
            {
                name: "Git Guide",
                school: "Udemy Brasil",
                instructor: "Instructor: Gabriel Ferrari Ceron",
                instructorInfoLink: "https://www.linkedin.com/in/gabrielferrariceron/",
                period: "June/2020",
                certificate: "See cettificate",
                certificateLink: "https://www.udemy.com/certificate/UC-753db123-551d-4ce5-8bc6-edafe92581e0/"
            },
            {
                name: "SCRUM",
                school: "Udemy Brasil",
                instructor: "Instructor: Gustavo Farias",
                instructorInfoLink: "https://www.udemy.com/user/gustavo-farias-2/",
                period: "January/2019",
                certificate: "See certificate",
                certificateLink: "https://www.udemy.com/certificate/UC-2EZYAA5R/"
            }
        ]
    }
}

const translate = language => {
    switch(language) {
        case "PT": return { ...PT }
        case "EN": return { ...EN }
        default: return { ...PT }
    }
}

export default translate