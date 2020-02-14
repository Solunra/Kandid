import React, {Component, PureComponent} from 'react';
import NavBar from "./NavBar";
import './index.css'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import IconButton from "@material-ui/core/IconButton";
import request from 'superagent';
import {project} from "ramda";

var posts;
export default class Profile extends Component{
    constructor(props) {
        super(props);
        this.handlePost=this.handlePost.bind(this);
        this.state={
            UserID: "",
            ImageLink: "",
            Caption: "",
            Like: "",
            PostDate: ""
        };
    };
    handlePost(event){
        console.log("posting");
    }
    componentDidMount() {
        // request.get('http://localhost:8000/api/post')
        //     .then(res=> res.json())
        //     .then(this.setState(posts))
        //     .catch(err=>{
        //     console.error('Error:', err);
        // });
        fetch('http://localhost:8000/api/post',{
            method:'GET'
        })
            .then((response) => response.json())
            .then((data) => {
                posts =data;
                console.log('Success:', data);
                console.log(posts)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    render(){
        return (
            <React.Fragment>
                <NavBar/>
                <div className="container">
                    <div className="images">
                    </div>
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
