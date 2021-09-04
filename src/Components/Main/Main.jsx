import React from 'react'
import './Main.css'
import TextTransition, { presets } from 'react-text-transition'
import Instagram from '../../img/instagram.png'
import Github from '../../img/github.png'
import Youtube from '../../img/youtube.png'
import { Link, useHistory } from 'react-router-dom'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Html from '../../img/html.png'
import Css from '../../img/css3.png'
import Java from '../../img/java.png'
import Js from '../../img/javascript.png'
import ReactJs from '../../img/react.png'
import Firebase from '../../img/firebase.png'
import Django from '../../img/django.png'

export default function Main() {
    const [index, setIndex] = React.useState(0);
    let history = useHistory();
    const TEXTS = [
        "Merhaba,",
        "Hoşgeldin"
    ];
    React.useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
            <div className="main">
                <div className="background"></div>
                <div className="center-text">
                    <span><TextTransition text={TEXTS[index % TEXTS.length]} springConfig={presets.gentle} /></span>
                </div>

                <div className="social-media-links">
                    <div className="links">
                        <a href="https://www.instagram.com/yusuf.tekinx" target = "_blank"><span className="accounts" id="instagram" title="Instagram"><img src={Instagram} alt="instagram"></img></span></a>
                        <a href="https://www.github.com/Yusuf-Tekin" target = "_blank"><span className="accounts" id="github" title="Github"><img src={Github} alt="Github"></img></span></a>
                        <a href="https://www.youtube.com/c/YusufTekinYT" target = "_blank"><span className="accounts" id="youtube" title="Youtube"><img src={Youtube} alt="Youtube"></img></span></a>
                        <Link to="/blog"><button>Blog Yazılarım <FontAwesomeIcon id="icon" icon={faArrowRight} /></button></Link>
                    </div>
                </div>

                <div className = "programming-languages">
                    <div className = "langs">
                        <span className = "lang" title = "Html" id = "html"><img src= {Html}></img></span>
                        <span className = "lang" title = "Css"><img src= {Css}></img></span>
                        <span className = "lang" title = "Java"><img src= {Java}></img></span>
                        <span className = "lang" title = "React"><img src= {ReactJs}></img></span>
                        <span className = "lang" title = "Javascript"><img src= {Js}></img></span>
                        <span className = "lang" title = "Firebase"><img id = "firebase" src= {Firebase}></img></span>
                        <span className = "lang" title = "Django"><img src= {Django}></img></span>
                    </div>
                </div>
            </div>
    )
}
