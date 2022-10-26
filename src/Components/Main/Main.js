
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
                <button className="btn-mail">Email</button>
                <button className="btn-lkdn">Linkedin</button>
            </div>
            <div className="content-main">
                <h3 className="sub-title-main" >About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3 className="sub-title-main" >Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </main>
    );
}

export default MainContent;