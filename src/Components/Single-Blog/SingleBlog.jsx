import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react/cjs/react.development';
import { blogTexts } from '../Datas/data';
import ReactNotification, { store } from 'react-notifications-component';

import './Single-Blog.css'
import '../Blog/BlogComponent.css'
import BlogComponent from '../Blog/BlogComponent';
export default function SingleBlog() {
    const params = useParams();
    const data = blogTexts.filter(blog => blog.slug === params.slug)[0]
    
    // Önerilen Blog Yazısı
    const randomId = Math.floor(Math.random() * 7)+1;
    const oneri_blog = blogTexts.filter(blog => blog.id === randomId)[0]
    
    const likes_data = localStorage.getItem('likes');
    const saves_data = localStorage.getItem('saves');
    const [like,setLike] = useState(likes_data.includes(data.id))
    const [save,setSave] = useState(saves_data.includes(data.id))
    let createNotification = (title, message, type) => {
        store.addNotification({
            title: title,
            message: message,
            type: "info",
            insert: "bottom",
            container: "bottom-left",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
    }

    let likeEvent = async (id) => {
        const like_data = JSON.parse(localStorage.getItem('likes'))


        if (like === false) {
            await setLike(!like)
            like_data.push(id)
            createNotification("Beğendin", "Beğenilenler Listesine Eklendi", "success")
        }
        else {
            await setLike(!like)

            like_data.forEach((like, index) => {
                if (like === id) {
                    like_data.splice(index, 1)
                }
            })
        }
        localStorage.setItem('likes', JSON.stringify(like_data))
    }
    let saveEvent = async (id) => {
        await setSave(!save)
        const save_data = JSON.parse(localStorage.getItem('saves'))
        if (save === false) {
            save_data.push(id)
            createNotification("Kaydedildi", "Kaydedilenler Listesine Eklendi", "success")
        }
        else {
            save_data.forEach((save, index) => {
                if (save === id) {
                    save_data.splice(index, 1)
                }
            })
        }
        localStorage.setItem('saves', JSON.stringify(save_data))
    }
    return (
        <div className="one-blog">
            <div className="blog-data">
                <div className="paragraph">
                    <div className="image">
                        <img loading='lazy' draggable="false" src={data.image}></img>
                    </div>
                    <div className="header">
                        {data.header}
                    </div>
                    <div className="text">
                        {data.summary}
                    </div>
                </div>
                <div className="save-like-event">
                    <div className="save-and-like">
                        <span className="like-button" onClick={() => { likeEvent(data.id) }}>
                            {
                                like ? <i title="Beğenmekten Vazgeç" className="fas fa-heart"></i> : <i title="Beğen" className="far fa-heart"></i>
                            }
                        </span>
                        <span className="save-button" onClick={() => { saveEvent(data.id) }}>
                            {
                                save ? <i title="Kaydetmekten Vazgeç" className="fas fa-bookmark"></i> : <i title="Kaydet" className="far fa-bookmark"></i>
                            }
                        </span>
                        <div className = "date">
                            {data.date}
                        </div>
                    </div>
                </div>
            </div>
            <div className="oneriler">
                <h3>Önerilen İçerik</h3>
                <BlogComponent slug = {oneri_blog.slug} isSave = {saves_data?.includes(oneri_blog.id)} isFirst = {oneri_blog.isFirst} isLike = {likes_data?.includes(oneri_blog.id)} id = {oneri_blog.id} popular={oneri_blog.isPopuler} last={oneri_blog.isLast} date={oneri_blog.date} image={oneri_blog.image} header={oneri_blog.header} summary={oneri_blog.summary} />
            </div>
        </div>
    )
}
