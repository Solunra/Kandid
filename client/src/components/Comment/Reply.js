import React from 'react';
import request from 'superagent';

export default class Reply extends React.Component {
    state = {
        comment: ""
    };
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.comment !== "") {
            request.put("http://localhost:8000/api/comment")
                .query({PostID: this.props.PostID, Comment: this.state.comment})
                .then(console.log(this.props.PostID));
        }
        window.location.reload(false)
    };

    handleChange = (e) => {
        this.setState({comment:e.target.value});
    };

    render(){
        return(
            <div className = "reply">
                <form onSubmit = {this.handleSubmit}>
                    <input placeholder="Enter your comment here" onChange={this.handleChange}/>
                    <button type = "Submit">Reply</button>
                </form>
            </div>
    )
}
}
