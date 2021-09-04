import { faArrowRight, faGrinHearts, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import './BlogComponent.css'
import ReactNotification, { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import { Link, useHistory } from 'react-router-dom';
export default function BlogComponent(props) {

    let [save, setSave] = useState(false);
    let [like, setLike] = useState(false);
    const history = useHistory()
    

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
                    like ? <i title="Beğenmekten Vazgeç" className="fas fa-heart"></i> : <i title="Beğen" className="far fa-heart"></i>
                }
            </span>
            <span className="save-button" title="Yazıyı Kaydet" onClick={() => { saveEvent(props.id) }}>
                {
                    save ? <i title="Kaydetmekten Vazgeç" className="fas fa-bookmark"></i> : <i title="Kaydet" className="far fa-bookmark"></i>
                }
            </span>
        </div>
    </div>
)
}
