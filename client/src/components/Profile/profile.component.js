import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavBar from "./NavBar";
import './index.cssgti '


export default function SimpleContainer(){
    const handlePost = event =>{
        console.log('Post Picture');
    }
        return (
            <React.Fragment>
                <NavBar/>
                <CssBaseline/>
                <Container maxWidth="lg">
                    <Typography component="div" style={{backgroundColor: '#f2f2f2', height: '100vh'}}/>
                </Container>
                <button id="PostPicture" onClick={handlePost}/>
            </React.Fragment>
        );
}
