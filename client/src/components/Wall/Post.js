import React, {useEffect, useState} from 'react';
import './index.css'
import request from 'superagent'
import './image.css'
import Comment from "../Comment";

export default function Post() {
    const [posts, setPosts] = useState([]);
    const userEmail = localStorage.getItem("email");

    useEffect(() => {
        request.get('http://localhost:8000/api/post')
            .query({email: userEmail})
            .then(res => res.body.posts)
            .then(data => {
                setPosts(data);
            });
        }, []);


    return (
        <div>
            {posts.map(post => {
                return(
                    <div id="post" style={{alignContent: 'center'}}>
                        <div id = "user">
                            User: {post.UserID}
                        </div>
                        <div id = "image">
                            <img src={post.ImageLink}/>
                        </div>
                        <div id = "caption">
                            {post.Caption}
                        </div>
                        <div id = "comments">
                            <Comment PostID = {post.PostID}/>
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
