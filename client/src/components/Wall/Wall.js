import React, {Component} from 'react';
import NavBar from "./NavBar";
import './index.css'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import IconButton from "@material-ui/core/IconButton";
import request from 'superagent';
import Post from './Post';
import Backdrop from "@material-ui/core/Backdrop";
import { createBrowserHistory } from 'history';
const history=createBrowserHistory();

export default class Wall extends Component{
    constructor(props) {
        if(history.location.pathname === "/wall"){
            localStorage.setItem("profileEmail","");
        }
        super(props);
        this.handlePost=this.handlePost.bind(this);
        this.state = {
            posts: [],
            showingWindow:false,
            userEmail: localStorage.getItem("email")
        };
        this.openUploadingWindow= this.openUploadingWindow.bind(this);
        this.closeUploadingWindow=this.closeUploadingWindow.bind(this);
    };
    openUploadingWindow(){
        console.log(this.state.showingWindow);
        this.setState({showingWindow:true})
    }
    closeUploadingWindow(){
        this.setState({showingWindow:false})
    }
    handlePost = (event) => {
        event.preventDefault();
        let file=document.getElementById('uploadedImage');
        if(file.files.length !== 0){
            let image = file.files[0];
            let caption = document.getElementById('Caption').value;
            request.post('http://localhost:8000/api/post')
                .attach('image', image)
                .field('Caption', caption)
                .field('UserID', this.state.userEmail)
                .then(res=>{console.log(res)});
        }
        this.closeUploadingWindow();
        window.location.reload(false);
    };

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
                        onClick={this.openUploadingWindow}
                        color="inherit"
                    >
                        <AddAPhotoIcon fontSize="large" />
                    </IconButton>
                    <Backdrop  open={this.state.showingWindow}>
                        <div id='uploadImageForm'>
                            <form ref='uploadForm'
                                  id='uploadForm'
                                  action='http://localhost:8000/api/post'
                                  method='post'
                                  encType="multipart/form-data"
                                  onSubmit={this.handlePost}>
                                <label>Upload Image</label><br/>
                                <input id='uploadedImage' type='file' accept='image/*'/>
                                <label>Caption</label>
                                <input id='Caption' type='text'/><br/>
                                <button id='cancel' onClick={this.closeUploadingWindow}>Cancel</button>
                                <button id='submit' type='submit'>Post</button>
                            </form>
                        </div>
                    </Backdrop>
                </div>
            </React.Fragment>
        );
    }
}
