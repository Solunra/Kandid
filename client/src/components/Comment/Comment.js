import React from 'react';
import request from 'superagent';
import Reply from './Reply'

export default class Comment extends React.Component {
    state = {
        postComments: [],
        commentsPresent: false
    };
    getComments = () => {
        // request.get("localhost:8000/api/comments")
        //     .send(this.props.PostID)
        //     .then(res => res.json())
        //     .then(res => {
        //         if (res.comments !== []) {
        //             this.setState({
        //                 postComments: res.comments,
        //                 commentsPresent: true
        //             })
        //         }
        //     })
    };
    render()
    {
        this.getComments();
        return () => (
            <div className = "comments">
                <table>
                {this.state.postComments.map(comment => {
                    return (
                        <tr><td>{comment.UserID}</td><td>{comment.Comment}</td></tr>
                )
                })}
                <tr><td>MyUserIdPlaceholder</td><td><Reply PostID = {this.props.PostId} /></td></tr>
                </table>
            </div>
        )
    }
}
