const React = require('react');
import request from 'superagent';

export default class Reply extends React.Component {
    state = {
        comment: ""
    };
    handleSubmit = (e) => {
        e.preventDefault();
        /*TODO: uncomment this when Comment Service has been done
        **/
        // if (this.state.comment !== "") {
        //     request
        //         .put("localhost:8000/api/comment")
        //         .send({PostID: this.props.PostID, comment: this.state.comment})
        //         .then(r => console.debug(r));
        // }
    };
    handleChange = (e) => {
        this.setState({comment:e.target.value});
    };
    render(){
        return({PostID}) => (
            <div className = "reply">
                <form onSubmit = {this.handleSubmit}>
                    <input id = "toadd" placeholder="Enter your comment here" onChange={this.handleChange}/>
                    <button type = "Submit"/>
                </form>
            </div>
        )
    }
}