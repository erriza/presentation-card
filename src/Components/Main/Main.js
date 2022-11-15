
import styles from './Main.css'

function MainContent () {
    return(
        <main className="container">
            
            <div className="titulos">
                <h1>Erick Rico</h1>
                <h3>Frontend Developer</h3>
                <p>eduricsa@hotmail.com</p>
            </div>
            <div className="btns-div">
                <a href='mailto:eduricsa@hotmail.com?subject=Hello there'><button className="btn-mail">Email</button></a>
                <a href='https://www.linkedin.com/in/erickrico/'><button className="btn-lkdn">Linkedin</button></a>
            </div>
            <div className="content-main">
                <h3 className="sub-title-main" >About</h3>
                <p>I am a 3 years frontend developer with a particular interest in making things simpler and to make them look better. Always looking for new things to learn. New challenges are welcome</p>
                <h3 className="sub-title-main" >Interests</h3>
                <p>Technologies overall. Videogames. Gym. Reader. Internet fanatic. Cheff. Travel geek. Entrepreneur. New experiences.</p>
            </div>
        </main>
    );
}

export default MainContent;