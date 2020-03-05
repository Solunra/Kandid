import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from '@material-ui/core/IconButton';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import request from "superagent";

const useStyles =makeStyles(theme=>({
    root:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-around',
        overflow:'hidden',
        background:theme.palette.background.paper,
    },
    gridList:{
        flexWrap:'nowrap',
        transform:'translateZ(0)',
    },
    title:{
        color:theme.palette.primary.light,
    },
    titleBar:{
        background:'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));
export default function followers(){
    const classes=useStyles();
    const [follower,setFollower] = useState([]);
    useEffect(()=>{
        //TODO:request all the users in the database
        request.get('http://localhost:8000/api/user')
            .then(res => res.body.users)
            .then(data => {
                setFollower(data);
    })},[]);

    return(
      <div className={classes.root}>
          <GridList className={classes.gridList} cols={1}>
              {follower.map(user =>(
                  <GridListTile key={user.image}>
                    <GridListTileBar
                        title={user.userName}
                        classes={{
                            root:classes.titleBar,
                            title:classes.title,
                        }}
                        actionIcon={
                            <IconButton aria-label={`star ${user.userName}`}>
                                <PersonAddOutlinedIcon className={classes.title}/>
                            </IconButton>
                        }
                    />
                  </GridListTile>
              ))}
          </GridList>
      </div>
    );
}