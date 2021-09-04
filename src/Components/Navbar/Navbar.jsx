import React from 'react'
import './Navbar.css'
import Logo from '../../img/Logo.png'
import Menu from '../../img/menu.png'
import { Link } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
export default function Navbar() {

    const [menu,setMenu] = useState(false);

    let ChangeMenu = () => {
        setMenu(!menu)
    }
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
            <div className = "menu-icon" onClick = {ChangeMenu}>
                <img src = {Menu}></img>
            </div>
            <div className = "mobil-menu" style ={{display:menu === true ? "flex" : "none"}} >
                <span><Link to = "/main" onClick = {() => {setMenu(false)}}>Anasayfa</Link></span>
                <span><Link to = "/liked" onClick = {() => {setMenu(false)}} >Beğeniler</Link></span>
                <span><Link to = "/saved" onClick = {() => {setMenu(false)}}>Kaydedilenler</Link></span>
            </div>
        </div>
    )


    // Link Yazıları Beyaz Ypılacak!!!
}