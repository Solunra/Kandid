import React from "react";
import request from "superagent";
import CommentBox from "./CommentBox";
import Reply from "./Reply";


export default class Comment extends React.Component{
    state = {
        comments: []
    };

    getComments = () => {
        request.get("http://localhost:8000/api/comment")
            .query({PostID: this.props.PostID})
            .then(res => res.body)
            .then(res => {
                this.setState({comments: res.comments})
            })
    };

    componentDidMount() {
        this.getComments();
    }

    render() {
        if (this.state.comments !== []) {
            return (
                <div>
                    
                    <CommentBox comments = {this.state.comments}/>
                    <Reply PostID = {this.props.PostID}/>
                </div>
            )
        }
        else {
            return (
                <div>
                    
                    <Reply PostID = {this.props.PostID} />
                </div>
            )
        }
    }
}
