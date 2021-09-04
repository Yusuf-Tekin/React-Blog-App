import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Saved.css'
import { blogTexts } from '../Datas/data'
import BlogComponent from '../Blog/BlogComponent';
export default function Saved() {


    let likeData = JSON.parse(localStorage.getItem('likes'))
    let savedList = () => {
        let localstorageList = JSON.parse(localStorage.getItem('saves'));
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
            <h3>Kaydedilen İçerikler</h3>
            <div className="saved-list">
                {
                    savedList().length === 0 ? <div className = "notfound">Henüz herhangi bir içerik kaydetmedin :(</div> : savedList().map(compo =>
                        <div className="saved-blog-text">
                            <BlogComponent slug = {compo.slug} isLike={likeData?.includes(compo.id)} isSave={true} image={compo.image} id={compo.id} isFirst={compo.isFirst} last={compo.isLast} popular={compo.isPopuler} summary={compo.summary} header={compo.header} date={compo.date} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}
