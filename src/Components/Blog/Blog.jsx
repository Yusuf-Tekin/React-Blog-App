import React, { useEffect } from 'react'
import BlogComponent from './BlogComponent'
import './Blog.css'
import {blogTexts} from '../Datas/data'
import { Link } from 'react-router-dom';


export default function Blog() {

    let like_data = JSON.parse(localStorage.getItem('likes'));
    let save_data = JSON.parse(localStorage.getItem('saves'));

    return (
        <div className="blog">
            
            <div className="top">
                <div className = "back-comp"></div>
                <div className="component" id="the-most-popular">
                    <BlogComponent slug = {blogTexts[0].slug} isSave = {save_data?.includes(blogTexts[0].id)} isFirst = {blogTexts[0].isFirst} isLike = {like_data?.includes(blogTexts[0].id)} id = {blogTexts[0].id} popular={blogTexts[0].isPopuler} last={blogTexts[0].isLast} date={blogTexts[0].date} image={blogTexts[0].image} header={blogTexts[0].header} summary={blogTexts[0].summary} />
                </div>
                <div className="component" id="the-last-blog">
                    <BlogComponent slug = {blogTexts[1].slug} isSave = {save_data?.includes(blogTexts[1].id)} isLike = {like_data?.includes(blogTexts[1].id)} isFirst = {blogTexts[1].isFirst}  id = {blogTexts[1].id} popular={blogTexts[1].isPopuler} last={blogTexts[1].isLast} date={blogTexts[1].date} image={blogTexts[1].image} header={blogTexts[1].header} summary={blogTexts[1].summary} />
                </div>
                <div className="component" id="the-first-blog">
                    <BlogComponent slug = {blogTexts[4].slug} isSave = {save_data?.includes(blogTexts[3].id)} isLike = {like_data?.includes(blogTexts[3].id)} isFirst = {blogTexts[3].isFirst}  id = {blogTexts[3].id} popular={blogTexts[3].isPopuler} last={blogTexts[3].isLast} date={blogTexts[3].date} image={blogTexts[3].image} header={blogTexts[3].header} summary={blogTexts[3].summary} />
                </div>
            </div>
            <hr></hr>
            <div className="blog-lists">
                {
                    blogTexts.map(blog => (
                        <div className="single-blog">
                            <BlogComponent slug = {blog.slug}  isSave = {save_data?.includes(blog.id)} isLike = {like_data?.includes(blog.id)} id = {blog.id} popular={blog.isPopuler} last={blog.isLast} date={blog.date} image={blog.image} header={blog.header} summary={blog.summary} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
