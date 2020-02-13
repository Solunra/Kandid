import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavBar from "./NavBar";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import './index.css'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import IconButton from "@material-ui/core/IconButton";
import Comment from "../Comment"

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
}));

let projects = [{
    id:["0","1"],
    photo:["../images/camera.png","../images/pngtree-vector-camera-icon-png-image_926156.jpg"],
    text:["hello","Byeee"]
},
    {
        text:["Project number one", "Project number two", "Project number 3"],
    }];
export default function SimpleContainer(){
    const handlePost = event =>{
        console.log('Post Picture');
    };
    const classes = useStyles();
        return (
            <React.Fragment>
                <NavBar/>
                <div className="container">
                    <div className="images">
                        <GridList cellHeight={160} className={classes.gridList} cols={1}>
                            {projects.map(tile => (
                                <GridListTile key={tile.id} cols={1}>
                                    <img src={tile.photo} width="500px" height="500px"/>
                                    <Comment PostID = tile.id/>
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </div>
                <div id="PostIcon">
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
            </React.Fragment>
        );
}
