import React, {useState} from 'react';
import './index.css'
import request from 'superagent'

export default function Post() {
    const [posts, setPosts] = useState([]);
    request.get('http://localhost:8000/api/post')
        .then(res => res.body.posts)
        .then(data => {
            setPosts(data);
        });

    return (
        <div>
            {posts.map(post => {
                return(
                    <div id="post">
                        <div id = "user">
                            {post.UserID}
                        </div>
                        <div id = "image">
                            {post.ImageLink}
                        </div>
                        <div id = "caption">
                            {post.Caption}
                        </div>
                        <div id = "like">
                            {post.Like}
                        </div>
                        <div id = "postDate">
                            {post.PostDate}
                        </div>
                    </div>
                )
            })}
            <br/>
        </div>
    )
}
