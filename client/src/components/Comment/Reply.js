import React from 'react';
import request from 'superagent';

export default class Reply extends React.Component {
    state = {
        comment: "",
        userEmail: localStorage.getItem("email")
    };
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.comment !== "") {
            request.post("http://localhost:8000/api/comment")
                .send({
                    email: this.state.userEmail,
                    PostID: this.props.PostID,
                    Comment: this.state.comment
                })
                .then(res => {
                    if(res.status === 200) {
                        window.location.reload(false);                 }
                });
        }
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
