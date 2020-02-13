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
                body: JSON.stringify({comment: this.state.comment})
            }).then(r => console.debug(r))
        }
    };
    handleChange = (e) => {
        this.setState({[event.target.name]:event.target.value});
    };
    render(){
        return(
            <div className = "reply">
                <form onSubmit = {this.handleSubmit}>
                    <input id = "toadd" placeholder="Enter your comment here" onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}