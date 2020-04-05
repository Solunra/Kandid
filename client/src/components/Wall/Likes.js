import React from 'react';
import request from 'superagent';

export default class Likes extends React.Component {

  constructor(props){

    super(props);
    this.state ={
      likes: 0,
      updated: false
    }
    this.updateLikes = this.updateLikes.bind(this);
  }

  getLikes = () => {
      request.get("http://localhost:8000/api/likes")
      .query({PostID: this.props.PostID})
      .then(res => res.body)
      .then(res => {
          this.setState({likes: res.Like})
      })
  };

  componentDidMount() {
      this.getLikes();
  }

  updateLikes() {

    if(!this.state.updated) {
      request.post("http://localhost:8000/api/likes/update")
      .send({
        PostID:this.props.PostID,
        likes: this.state.likes+1
      })
      .then(res =>{
        if(res.status === 200){
          this.setState((prevState, props) => {
            return {
              likes: prevState.likes + 1,
              updated: true
            };
          });
        }
      })
      
    } else {
      request.post("http://localhost:8000/api/likes/update")
      .send({
        PostID:this.props.PostID,
        likes: this.state.likes-1
      })
      .then(res => {
        if(res.status === 200){
          this.setState((prevState, props) => {
            return {
              likes: prevState.likes - 1,
              updated: true
            };
          });
        }
      })
      
    }


  }

  render(){

    return(
      <div className = "like">
        <button onClick={this.updateLikes}>Like</button>
        <p>{this.state.likes}</p>
      </div>
    );

  }


}


