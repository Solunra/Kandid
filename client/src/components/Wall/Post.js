import React, {useEffect, useState} from 'react';
import './index.css'
import request from 'superagent'
import './image.css'
import Comments from "../Comment/Comments";
import Likes from "./Likes";


export default function Post() {
    const [posts, setPosts] = useState([]);
    const userEmail = localStorage.getItem("email");
    const profileEmail = localStorage.getItem("profileEmail");

    useEffect(() => {
        if (profileEmail === "") {
        request.get('http://localhost:8000/api/post')
            .query({email: userEmail})
            .then(res => res.body.posts)
            .then(data => {
                setPosts(data);
            });
        } else {
            request.get('http://localhost:8000/api/post/profile')
            .query({email: profileEmail})
            .then(res => res.body.posts)
            .then(data => {
                setPosts(data);
            })}}, []);

    return (
        <div>
            {posts.map(post => {
                return(
                    <div id="post" style={{alignContent: 'center'}}>
                        <div id = "user">
                            User: {post.Name}
                        </div>
                        <div id = "image">
                            <img src={post.ImageLink} alt={"Error 400: Image not found"}/>
                        </div>
                        <div id = "caption">
                            {post.Caption}
                        </div>
                        <div id = "like">
                            <Likes PostID={post.PostID}/>
                        </div>
                        <div id = "comments">
                            {/*<Comment PostID = {post.PostID}/>*/}
                            <Comments PostId={post.PostID}/>
                        </div>
                        {/*TODO: This will be added later on*/}
                        {/*<div id = "like">*/}
                        {/*    {post.Like}*/}
                        {/*</div>*/}
                        {/*<div id = "postDate">*/}
                        {/*    {post.PostDate}*/}
                        {/*</div>*/}
                    </div>
                )
            })}
            <br/>
        </div>
    )
}
