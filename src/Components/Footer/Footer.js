
import twitter from '../../Icons/Twitter.png'
import facebook from '../../Icons/Facebook.png'
import instagram from '../../Icons/Instagram.png'
import github from '../../Icons/GitHub.png'
import styles from './Footer.css'

function footer () {
    return (
        <footer className="footer">
            
            <a href="https://github.com/erriza"><img src={twitter} className="App-logo" alt="logo"/></a>
            <a href="https://www.facebook.com/erick.e.santamaria/"><img src={facebook} className="App-logo" alt="logo"/></a>
            <a href="https://www.instagram.com/ricsae/"><img src={instagram} className="App-logo" alt="logo"/></a>
            <a href="https://github.com/erriza"><img src={github} className="App-logo" alt="logo"/></a>
            
        </footer>
    );
}

export default footer;
