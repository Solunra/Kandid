import React, {Component} from 'react';
import NavBar from "./NavBar";
import './index.css'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import IconButton from "@material-ui/core/IconButton";
import request from 'superagent';
import Post from './Post';

export default class Profile extends Component{
    constructor(props) {
        super(props);
        this.handlePost=this.handlePost.bind(this);
        this.state = {
            posts: []
        };
    };
    handlePost = (event) => {
        console.log("posting");
    };
    componentDidMount() {
        // const response = fetch('http://localhost:8000/api/post',{
        //     method:'GET'
        // });
        request.get('http://localhost:8000/api/post')
            .then(res => res.body.posts)
            .then(data => {
                console.log(data);
                this.setState({posts: data});
                console.log(this.state)
            });
    }

    render(){
        return (
            <React.Fragment>
                <NavBar/>
                <div className="container">
                    <Post />
                </div>
                <div id="PostIcon">
                    <IconButton
                        aria-label="show more"
                        aria-controls={'primary-search-account-menu-mobile'}
                        aria-haspopup="true"
                        onClick={this.handlePost}
                        color="inherit"
                    >
                        <AddAPhotoIcon fontSize="large" />
                    </IconButton>
                </div>
            </React.Fragment>
        );
    }
}
