
import logo from '../../logo.svg';
import twitter from '../../Icons/Twitter.png'
import facebook from '../../Icons/Facebook.png'
import instagram from '../../Icons/Instagram.png'
import github from '../../Icons/GitHub.png'
import styles from './Footer.css'

function footer () {
    return (
        <footer className="footer">
            <img src={twitter} className="App-logo" alt="logo"/>
            <img src={facebook} className="App-logo" alt="logo"/>
            <img src={instagram} className="App-logo" alt="logo"/>
            <img src={github} className="App-logo" alt="logo"/>
        </footer>
    );
}

export default footer;
