import React from 'react'
import './Navbar.css'
import Logo from '../../img/Logo.png'
import Menu from '../../img/menu.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
export default function Navbar() {

    const [menu, setMenu] = useState(false);
    const [width, setWidth] = useState(window.screen.width)
    let ChangeMenu = () => {
        setMenu(!menu)
    }

    window.onresize = (x) => {
        setWidth(x.currentTarget.innerWidth);

        if (x.currentTarget.innerWidth > 365) {
            setMenu(false)
        }
    }

    return (
        <div className="navbar">
            <div className="app-logo" draggable="false">
                <img src={Logo} alt="APP-LOGO" loading="lazy" draggable="false" />
                <Link to="/main"><h3 className="name-surname">Yusuf Tekin</h3></Link>
            </div>
            <div className="saved-and-liked-button">
                <Link to="/main"><span className="main-page" title="Anasayfa'ya Dön"><i style={{ color: "white" }} class="fas fa-home"></i></span></Link>
                <Link to="/saved"><span className="save" title="Kaydedilen Blog Yazıları"><i style={{ color: "white" }} class="fas fa-bookmark"></i></span></Link>
                <Link to="/liked"><span className="like" title="Beğenilen Blog Yazıları"><i class="fas fa-heart"></i></span></Link>
            </div>
            <div className="menu-icon" style={{ display: width < 366 ? "block" : "none" }} onClick={ChangeMenu}>
                <img src={Menu}></img>
            </div>
            <div className="mobil-menu" style={{ display: menu === true ? "flex" : "none" }} >
                <div>
                    <span id = "head">Menü</span>
                    <span><Link id="link-mobil-menu" to="/main" onClick={() => { setMenu(false) }}>Anasayfa</Link></span>
                    <span><Link id="link-mobil-menu" to="/liked" onClick={() => { setMenu(false) }} >Beğeniler</Link></span>
                    <span><Link id="link-mobil-menu" to="/saved" onClick={() => { setMenu(false) }}>Kaydedilenler</Link></span>
                </div>
            </div>
        </div>
    )


}