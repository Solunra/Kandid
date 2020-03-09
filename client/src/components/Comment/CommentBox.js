import React from 'react';
import './CommentBox.css'

export default function CommentBox(props) {
    return (
        <div className = "comments">
            <table>
                {props.comments.map(comment => {
                    return (
                        <tr><td>{comment.UserID}</td><td>{comment.Comment}</td></tr>
                )
                })}
            </table>
        </div>
    )
}

