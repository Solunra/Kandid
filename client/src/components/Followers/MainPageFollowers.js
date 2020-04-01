import React,{Component} from 'react';
import Followers from "./Followers";
import NavBar from "../Wall/NavBar.js"
export default class mainPageFollowers extends Component{

    render() {
        return(
            <React.Fragment>
                <NavBar/>
                <div style={{
                    position:'relative',
                    top:'70px'
                }}>
                <Followers/>
                </div>
            </React.Fragment>
        )
    }
}