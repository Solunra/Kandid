const react = require('react');
const Reply = require('./Reply');

export default class Comment extends react.Component {
    state = {
      postComments: [],
      commentsPresent: false
    };
    getComments = () => {
        fetch("localhost:8000/api/comments")
            .then(res => res.json())
            .then((res) => {
                if (res.comments === []) {
                    this.setState({
                        userID: res.userID,
                        postComments: res.comments,
                        commentsPresent: true
                    })
                }
            });
    };
    render()
    {
        this.getComments();
        return ({PostID}) => (
            <div className = "comments">
                <table>
                {this.state.postComments.map(comment => {
                    return (
                        <tr><td>{this.state.userID}</td><td>{comment}</td></tr>
                )
                })}
                <tr><td>MyUserIdPlaceholder</td><td><Reply PostID = {this.props.PostId} /></td></tr>
                </table>
            </div>
        )
    }
}
