import NavBar from "../Wall/NavBar";
import Post from "../Wall/Post";
import React, {useEffect} from "react";
import request from "superagent";

export default function Profile() {
    return (
        <React.Fragment>
            <NavBar/>
            <div className="container">
                <Post/>
            </div>
        </React.Fragment>
    )
}