import { faArrowRight, faGrinHearts, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import './BlogComponent.css'
import ReactNotification, { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import { Link, useHistory } from 'react-router-dom';
import POPULAR from '../../img/popular-icon.gif'
import Save from '../../img/save.gif'
import { defineLordIconElement } from 'lord-icon-element';
import lottie from 'lottie-web'

export default function BlogComponent(props) {

    let [save, setSave] = useState(false);
    let [like, setLike] = useState(false);
    const history = useHistory()
    defineLordIconElement(lottie.loadAnimation)

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

    useEffect(() => {

        setLike(props.isLike)
        setSave(props.isSave)
    }, [])

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
        <div className="blog-component">

            <div className="blog-image">
                {
                    props.popular === true ? <img id="popular-icon" src={POPULAR} /> : ""
                }
                <img src={props.image}></img>
                <span className="date">
                    {props.date}
                </span>

                {
                    props.popular === true ? <span className="popular">
                        En Popüler
                    </span> : ""
                }

                {
                    props.last === true ? <span className="last">
                        Son Yüklenen
                    </span> : ""
                }

                {
                    props.isFirst === true ? <span className="first">
                        İlk Yüklenen
                    </span> : ""
                }
            </div>
            <div className="blog-summary">
                <Link to={`/blog/${props.slug}`}>

                    <div className="header">
                        {props.header}
                    </div>
                </Link>

                <div className="summary">
                    {props.summary}
                </div>
            </div>
            <div className="more-then-button">
                <button onClick={() => { history.push(`/blog/${props.slug}`) }}>Daha Fazlası <FontAwesomeIcon className="icon" icon={faArrowRight} /></button>
                <span className="like-button" onClick={() => { likeEvent(props.id) }}>
                    {
                        like === true ? <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path class="heartbeat" d="M10.97 5.16l.53.53.53-.53a4.815 4.815 0 016.81 6.81l-7.34 7.34-7.34-7.34a4.815 4.815 0 016.81-6.81z" fill="#FF2442" stroke="#FF2442" stroke-width="1.5" />
                        </svg> : <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path class="heartbeat" d="M10.97 5.16l.53.53.53-.53a4.815 4.815 0 016.81 6.81l-7.34 7.34-7.34-7.34a4.815 4.815 0 016.81-6.81z" fill="white" stroke="#434C5D" stroke-width="1.5" />
                        </svg>
                    }
                </span>
                <span className="save-button" title="Yazıyı Kaydet" onClick={() => { saveEvent(props.id) }}>
                    {
                        save === false ? <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark animated-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark animated-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#434C5D" fill="#434C5D" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                        </svg>
                    }
                </span>
            </div>
        </div>
    )
}
