import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavBar from "./NavBar";
import './index.css'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import IconButton from "@material-ui/core/IconButton";


export default function SimpleContainer(){
    const handlePost = event =>{
        console.log('Post Picture');
    }
        return (
            <React.Fragment>
                <NavBar/>
                <div>
                <Container maxWidth="lg">
                    <Typography component="div" style={{backgroundColor: '#f2f2f2', height: '100vh'}}/>
                </Container>
                <div style={{position:'sticky'}}>
                <IconButton
                    aria-label="show more"
                    aria-controls={'primary-search-account-menu-mobile'}
                    aria-haspopup="true"
                    onClick={handlePost}
                    color="inherit"
                >
                    <AddAPhotoIcon fontSize="large" />
                </IconButton>
                </div>
                </div>
            </React.Fragment>
        );
}
