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
        background:theme.palette.background.paper,
    },
    gridList:{
        width:700,
        height:800,
        flexWrap:'wrap',
        transform:'translateZ(0)',
    },
    title:{
        color:theme.palette.primary.main.fontcolor("blue"),
    },
    titleBar:{
        background:'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));
const images="http://localhost:8000/images/3b240f807c2dae99d87edb13c4536e73";
const followee=localStorage.getItem("email");
export default function Followers(){
    const classes=useStyles();
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        //TODO:request all the users in the database
        request.get('http://localhost:8000/api/user')
            .query({email: localStorage.getItem("searchEmail")})
            .then(res => res.body.users)
            .then(data => {
                setUsers(data)})

            ;},[]);


    function Follow(user,e){
        e.preventDefault();
        console.log(`${followee} is Following ${user}`);
        const jsonString=`follower:${user},followee:${followee}`;
        const json=JSON.stringify(jsonString);
        console.log(json);
        request.put('http://localhost:8000/api/follow')
            .query({follower:user,followee:followee})
            .end((err,res)=>{
            if (res.status== 200){
                console.log(res.status);
            }
        });
    }
    return(

      <div className={classes.root}>

          <GridList className={classes.gridList} cellHeight={200} spacing={1} cols={1}>
    {users.map(user =>(
            <GridListTile key={images}>
                <img src={images} alt="image not shown"/>
                <GridListTileBar
                    title={user.email}
                    classes={{
                        root:classes.titleBar,
                        title:classes.title,
                    }}

                    actionIcon={
                        <IconButton aria-label={`star ${user.email}`} onClick={e=>Follow(user.email,e)}>
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