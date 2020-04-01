import React, {useEffect} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Avatar from "@material-ui/core/Avatar";
import { createBrowserHistory } from 'history';
import request from "superagent";

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {withStyles} from "@material-ui/core/styles";


const history=createBrowserHistory();
const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginRight: theme.spacing(1),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(30),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 5, 1, 15),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [numberOfNotifications,setNumberOfNotifications]=React.useState(0);
    const [notification,setNotification]=React.useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);


    useEffect(()=>{
        request.put("http://localhost:8000/api/notification")
            .query({email: localStorage.getItem("email")})
            .then(res => res.body.notifications)
            .then(data => {
                setNotification(data);
                setNumberOfNotifications(data.length);
            });
    },[]);

    function removeNotification(e){
        setNumberOfNotifications(0);
        request.put("http://localhost:8000/api/notification/remove")
            .query({email: localStorage.getItem("email")})
            .end((err,res) => {
                if (res.status == 200) {
                    console.log("removed notification");
                }
            });
        window.location.reload(false);
    }

    const menuId = 'primary-search-account-menu';

    const mobileMenuId = 'primary-search-account-menu-mobile';

    function redirectToWall(e){
        console.log("Redirecting");
        history.push('/wall');
        window.location.reload(false);
    }
    function searchUsers(){
        let email = document.getElementById("email").value;
        localStorage.setItem("searchEmail", email);
        history.push('/users');
        window.location.reload(false);
    }

    const ITEM_HEIGHT = 48;
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        removeNotification()
    };

    const StyledMenu = withStyles({
        paper: {
            border: '1px solid #d3d4d5',
        },
    })((props) => (
        <Menu
            elevation={10}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            {...props}
        />
    ));

function enterKeyPress(e) {
    if(e.keyCode == 13){
        searchUsers();

    }
}
    return (
        <div className={classes.grow}>
            <AppBar position="static" color="white">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                    </IconButton>
                    <Typography className={classes.title} variant="h4" noWrap onClick={redirectToWall}>
                        Kandid
                    </Typography>
                    <div className={classes.search} onKeyDown={enterKeyPress}>
                      <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase id={"email"}
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}

                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 2 new notifications" color="inherit" >
                            <Badge badgeContent={numberOfNotifications} color="secondary">
                                <NotificationsIcon onClick={handleClick}/>
                            </Badge>
                        </IconButton>
                        <StyledMenu
                            id="long-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}

                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    maxWidth: '50ch',
                                },
                            }}
                        >
                            {notification.map(option => {
                                return(
                                    <MenuItem key={option} onClick={handleClose}>
                                        {option.Message}
                                    </MenuItem>
                                )})}
                        </StyledMenu>

                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <Avatar className={classes.orange}>N</Avatar>
                        </IconButton>
                    </div>

                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
