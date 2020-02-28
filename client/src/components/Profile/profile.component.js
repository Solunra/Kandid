import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from "./NavBar";
import './index.css'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import IconButton from "@material-ui/core/IconButton";
import request from 'superagent';
import Post from './Post';
import Backdrop from "@material-ui/core/Backdrop";

export default class Profile extends Component{
    constructor(props) {
        super(props);
        this.handlePost=this.handlePost.bind(this);
        this.state = {
            posts: [],
            showingWindow:false,
        };
        this.openUploadingWindow= this.openUploadingWindow.bind(this);
        this.closeUploadingWindow=this.closeUploadingWindow.bind(this);
    };
    // UserID: { type: String },
    // ImageLink: { type: String },
    // Caption: { type: String },
    // Like: { type: Number },
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
        console.log(file.files);
        if(file.files.length!=0){
            let image=file.files[0];
            let json={post:{image:image,Caption:"new post"}};
            console.log(json);
            request.put('http://localhost:8000/api/post')
                .send(json)
                .then(res=>{console.log(res)});
        }
        // const link=prompt("Enter the link of the picture you which to post:");
        // console.log(link);
        // let json ={post:{ImageLink:link,Caption:"It's been a while since my last post"}};
        // console.log(json);
        // request.put('http://localhost:8000/api/post')
        //     .send(json)
        //     .then(res=>{console.log(res)});
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
                            <form onSubmit={this.handlePost}>
                                <label for='uploadedImage'>Upload Image</label><br/>
                                <input id='uploadedImage' type='file' accept='image/*'/>
                                <label for='Caption'>Caption</label>
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