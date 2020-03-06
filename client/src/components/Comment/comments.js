import React,{useEffect,useState} from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import request from "superagent";
import Reply from "./Reply";

const useStyles=makeStyles(theme=>({
    root:{
        width:400,
        maxWidth:400,
        backgroundColor: theme.palette.background.paper,
    },
    inline:{
        display:'inline',
    },
}));

export default function Comments(props){
    const classes=useStyles();
    const [comments,setComments]=useState([]);
    let temp=[];
    useEffect(()=>{
        request.get("http://localhost:8000/api/comment")
            .query({PostID: props.PostId})
            .then(res => res.body.comments)
            .then(res => {
                // this.setState({comments: res.comments})
                setComments(res);
                console.log(comments);
                console.log(props.PostId);
            })},[]);
    if(temp !== []){
        return(
            <div>
                <List className={classes.root}>
                    {comments.map(comments=>(
                        <ListItem alignItems={"flex-start"}>
                            <ListItemAvatar>
                                <Avatar alt={comments.UserID}>R</Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary">
                                            {comments.UserID}
                                        </Typography>
                                        {` - ${comments.Comment}`}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    ))}
                    <Divider variant="inset" component="li"/>
                </List>
                <Reply PostID={props.PostId}/>
            </div>
        );
    }
    else{
        return (
            <div>
                <Reply PostID = {props.PostID} />
            </div>
        )
    }
}