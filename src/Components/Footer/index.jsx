import "./Footer.css"


const Footer = () => {
    return(
        <footer>
            <div className="footer">
                <div>
                    <h1>SOCIAL MEDIA</h1>
                    <div className="footer__container">
                        <a href="https://www.linkedin.com/in/christal-pe%C3%B1a-p%C3%A9rez/"><img className="footer__container__icon" src="/img/LinkedIn.png" alt="" /></a>
                        <h5>LinkedIn</h5>
                    </div>
                    <div className="footer__container">
                        <a href="https://github.com/Christalpena"><img className="footer__container__icon git-color" src="/img/Github.png" alt="" /></a>    
                        <h5>Github</h5>
                    </div>
                </div>

                <div>
                    <a><img className="footer__container__img" src="/img/Logo.png" alt="" /></a>
                </div>

                <div>
                    <h1>CONTACTS</h1>
                    <div className="footer__container">
                        <a href="mailto:christalperez0@gmail.com"><img className="footer__container__icon" src="/img/Gmail.png" alt="" /></a>
                        <h5>Gmail</h5>
                    </div>
                    <div className="footer__container">
                        <img className="footer__container__icon" src="/img/Phone.png" alt="" />
                        <h5>8098795133</h5>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;