const react = require('react');

export default class Reply extends react.Component {
    state = {
        comment: ""
    };
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.comment !== "") {
            fetch("localhost:8000/api/comment", {
                method: 'PUT',
                body: JSON.stringify({PostID: this.props.PostID, comment: this.state.comment})
            }).then(r => console.debug(r))
        }
    };
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    };
    render(){
        return({PostID}) => (
            <div className = "reply">
                <form onSubmit = {this.handleSubmit}>
                    <input id = "toadd" placeholder="Enter your comment here" onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}