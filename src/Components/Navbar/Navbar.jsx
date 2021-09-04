import React from 'react'
import './Navbar.css'
import Logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="app-logo" draggable="false">
                <img src={Logo} alt="APP-LOGO" loading="lazy" draggable="false" />
                <Link to = "/main"><h3 className="name-surname">Yusuf Tekin</h3></Link>
            </div>
            <div className="saved-and-liked-button">
                <Link to="/main"><span className="main-page" title="Anasayfa'ya Dön"><i style={{ color: "white" }} class="fas fa-home"></i></span></Link>
                <Link to="/saved"><span className="save" title="Kaydedilen Blog Yazıları"><i style={{ color: "white" }} class="fas fa-bookmark"></i></span></Link>
                <Link to = "/liked"><span className="like" title="Beğenilen Blog Yazıları"><i class="fas fa-heart"></i></span></Link>
            </div>
        </div>
    )
}