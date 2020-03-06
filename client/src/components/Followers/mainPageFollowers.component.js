import React,{Component} from 'react';
import Followers from "./followers.component";
import NavBar from "../Wall/NavBar.js"
export default class mainPageFollowers extends Component{
    constructor(props) {
        super(props);

    }

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