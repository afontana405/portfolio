function Footer() {
    
    const icons = [
        {
            name: "fab fa-github",
            link: "https://github.com/afontana405"
        },
        {
            name: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/alex-fontana-58bb76288/"
        },
        {
            name: "fab fa-stack-overflow",
            link: "https://stackoverflow.com/"
        }
    ]

    return (
        <footer className="flex-row px-1">
            {icons.map(icon => 
                (
                    <a href={icon.link} key={icon.name} target="_blank"><i className={icon.name}></i></a>
                )
            )}
        </footer>
    )
}

export default Footer;