import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavBar from "./NavBar";

export default function SimpleContainer(){
        return (
            <React.Fragment>
                <NavBar/>
                <CssBaseline/>
                <Container maxWidth="lg">
                    <Typography component="div" style={{backgroundColor: '#f2f2f2', height: '100vh'}}/>
                </Container>
            </React.Fragment>
        );
}
