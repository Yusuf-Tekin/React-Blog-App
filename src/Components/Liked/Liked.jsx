import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Liked.css'
import { blogTexts } from '../Datas/data'
import BlogComponent from '../Blog/BlogComponent';
import ScrollAnimation from 'react-animate-on-scroll';
export default function Liked() {


    let saveData = JSON.parse(localStorage.getItem('saves'))
    let likedList = () => {
        let localstorageList = JSON.parse(localStorage.getItem('likes'));
        let lastSavedData = [];
        for (let i = 0; i < localstorageList.length; i++) {
            for (let j = 0; j < blogTexts.length; j++) {
                if (localstorageList[i] === blogTexts[j].id) {
                    lastSavedData.push(blogTexts[j])
                }
            }
        }


        return lastSavedData;
    }

    return (
        <div className="saved">
            <h3>Beğenilen İçerikler</h3>
            <div className="saved-list">
                {
                    likedList().length === 0 ? <span className = "notfound">Henüz herhangi bir içerik beğenmedin :(</span> : likedList().map(compo =>
                        <div className="saved-blog-text">
                            <BlogComponent slug = {compo.slug} isLike={true} isSave={saveData?.includes(compo.id)} image={compo.image} id={compo.id} isFirst={compo.isFirst} last={compo.isLast} popular={compo.isPopuler} summary={compo.summary} header={compo.header} date={compo.date} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}
