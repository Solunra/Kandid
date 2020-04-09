# JSHint Report

### client\src\components\app\App.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| E015 | 23 | 12 | ```          </Switch>``` | Unclosed regular expression. |
| E041 | 23 | 12 | ```undefined``` | Unrecoverable syntax error. (79% scanned). |### client\src\components\app\App.test.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| E030 | 6 | 32 | ```  const { getByText } = render(<App />);``` | Expected an identifier and instead saw '<'. |
| E021 | 6 | 33 | ```  const { getByText } = render(<App />);``` | Expected ')' and instead saw 'App'. |
| E030 | 6 | 38 | ```  const { getByText } = render(<App />);``` | Expected an identifier and instead saw '>'. |
| E058 | 6 | 39 | ```  const { getByText } = render(<App />);``` | Missing semicolon. |
| E030 | 6 | 39 | ```  const { getByText } = render(<App />);``` | Expected an identifier and instead saw ')'. |
| W030 | 6 | 39 | ```  const { getByText } = render(<App />);``` | Expected an assignment or function call and instead saw an expression. |### client\src\components\app\index.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W033 | 1 | 37 | ```export {default as App} from './App'``` | Missing semicolon. |
| E030 | 9 | 5 | ```    <BrowserRouter>``` | Expected an identifier and instead saw '<'. |
| E021 | 9 | 6 | ```    <BrowserRouter>``` | Expected ')' and instead saw 'BrowserRouter'. |
| E030 | 10 | 9 | ```        <App />``` | Expected an identifier and instead saw '<'. |
| E041 | 10 | 9 | ```undefined``` | Unrecoverable syntax error. (66% scanned). |### client\src\components\Comment\Comment.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| E054 | 7 | 11 | ```    state = {``` | Class properties must be methods. Expected '(' but instead saw '='. |
| E054 | 8 | 17 | ```        comments: []``` | Class properties must be methods. Expected '(' but instead saw ':'. |
| W118 | 11 | 20 | ```    getComments = () => {``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 11 | 22 | ```    getComments = () => {``` | Expected an identifier and instead saw '=>'. |
| E024 | 11 | 25 | ```    getComments = () => {``` | Unexpected '{'. |
| E054 | 12 | 16 | ```        request.get("http://localhost:8000/api/comment")``` | Class properties must be methods. Expected '(' but instead saw '.'. |
| E030 | 12 | 21 | ```        request.get("http://localhost:8000/api/comment")``` | Expected an identifier and instead saw 'http://localhost:8000/api/comment'. |
| W118 | 12 | 56 | ```        request.get("http://localhost:8000/api/comment")``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 13 | 13 | ```            .query({PostID: this.props.PostID})``` | Expected an identifier and instead saw '.'. |
| W024 | 13 | 29 | ```            .query({PostID: this.props.PostID})``` | Expected an identifier and instead saw 'this' (a reserved word). |
| E021 | 13 | 33 | ```            .query({PostID: this.props.PostID})``` | Expected ',' and instead saw '.'. |
| E021 | 13 | 39 | ```            .query({PostID: this.props.PostID})``` | Expected ',' and instead saw '.'. |
| W118 | 13 | 47 | ```            .query({PostID: this.props.PostID})``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 14 | 13 | ```            .then(res => res.body)``` | Expected an identifier and instead saw '.'. |
| E030 | 14 | 23 | ```            .then(res => res.body)``` | Expected an identifier and instead saw '=>'. |
| W118 | 14 | 34 | ```            .then(res => res.body)``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 15 | 13 | ```            .then(res => {``` | Expected an identifier and instead saw '.'. |
| W075 | 15 | 18 | ```            .then(res => {``` | Duplicate class method 'then'. |
| E030 | 15 | 23 | ```            .then(res => {``` | Expected an identifier and instead saw '=>'. |
| W118 | 16 | 55 | ```                this.setState({comments: res.comments})``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 17 | 13 | ```            })``` | Expected an identifier and instead saw '}'. |
| E024 | 17 | 14 | ```            })``` | Unexpected ')'. |
| W032 | 18 | 6 | ```    };``` | Unnecessary semicolon. |
| E058 | 20 | 24 | ```    componentDidMount() {``` | Missing semicolon. |
| E058 | 24 | 13 | ```    render() {``` | Missing semicolon. |
| E015 | 30 | 18 | ```                </div>``` | Unclosed regular expression. |
| E041 | 30 | 18 | ```undefined``` | Unrecoverable syntax error. (71% scanned). |### client\src\components\Comment\CommentBox.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W033 | 2 | 26 | ```import './CommentBox.css'``` | Missing semicolon. |
| E015 | 10 | 81 | ```                        <tr><td>{comment.UserID}</td><td>{comment.Comment}</td></tr>``` | Unclosed regular expression. |
| E041 | 10 | 81 | ```undefined``` | Unrecoverable syntax error. (55% scanned). |### client\src\components\Comment\Comments.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W033 | 34 | 15 | ```            })},[]);``` | Missing semicolon. |
| E015 | 46 | 105 | ```                                <Avatar alt={comments.UserID}>{comments.UserID.charAt(0).toUpperCase()}</Avatar>``` | Unclosed regular expression. |
| E041 | 46 | 105 | ```undefined``` | Unrecoverable syntax error. (58% scanned). |### client\src\components\Comment\index.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W033 | 1 | 32 | ```import Comment from './Comment'``` | Missing semicolon. |### client\src\components\Comment\Reply.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| E054 | 5 | 11 | ```    state = {``` | Class properties must be methods. Expected '(' but instead saw '='. |
| E054 | 6 | 16 | ```        comment: "",``` | Class properties must be methods. Expected '(' but instead saw ':'. |
| E030 | 7 | 41 | ```        userEmail: localStorage.getItem("email")``` | Expected an identifier and instead saw 'email'. |
| W118 | 7 | 48 | ```        userEmail: localStorage.getItem("email")``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 8 | 5 | ```    };``` | Expected an identifier and instead saw '}'. |
| W032 | 8 | 6 | ```    };``` | Unnecessary semicolon. |
| E054 | 9 | 18 | ```    handleSubmit = (e) => {``` | Class properties must be methods. Expected '(' but instead saw '='. |
| W118 | 9 | 22 | ```    handleSubmit = (e) => {``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 9 | 24 | ```    handleSubmit = (e) => {``` | Expected an identifier and instead saw '=>'. |
| E024 | 9 | 27 | ```    handleSubmit = (e) => {``` | Unexpected '{'. |
| E054 | 10 | 10 | ```        e.preventDefault();``` | Class properties must be methods. Expected '(' but instead saw '.'. |
| W118 | 10 | 26 | ```        e.preventDefault();``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 10 | 27 | ```        e.preventDefault();``` | Expected an identifier and instead saw ';'. |
| W024 | 11 | 13 | ```        if (this.state.comment !== "") {``` | Expected an identifier and instead saw 'this' (a reserved word). |
| E030 | 11 | 17 | ```        if (this.state.comment !== "") {``` | Expected an identifier and instead saw '.'. |
| W032 | 23 | 6 | ```    };``` | Unnecessary semicolon. |
| E058 | 29 | 13 | ```    render(){``` | Missing semicolon. |
| E015 | 34 | 51 | ```                    <button type = "Submit">Reply</button>``` | Unclosed regular expression. |
| E041 | 34 | 51 | ```undefined``` | Unrecoverable syntax error. (85% scanned). |### client\src\components\Followers\Followers.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W033 | 45 | 7 | ```    })},[]);``` | Missing semicolon. |
| E015 | 74 | 66 | ```                    <Avatar>{user.email.charAt(0).toUpperCase()}</Avatar>``` | Unclosed regular expression. |
| E041 | 74 | 66 | ```undefined``` | Unrecoverable syntax error. (78% scanned). |### client\src\components\Followers\MainPageFollowers.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W033 | 3 | 39 | ```import NavBar from "../Wall/NavBar.js"``` | Missing semicolon. |
| E015 | 15 | 18 | ```                </div>``` | Unclosed regular expression. |
| E041 | 15 | 18 | ```undefined``` | Unrecoverable syntax error. (78% scanned). |### client\src\components\LoginSignUp\Login.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| E054 | 24 | 16 | ```  handleSubmit = event => {``` | Class properties must be methods. Expected '(' but instead saw '='. |
| E030 | 26 | 26 | ```    localStorage.setItem("rememberMe", rememberMe);``` | Expected an identifier and instead saw 'rememberMe'. |
| W118 | 26 | 50 | ```    localStorage.setItem("rememberMe", rememberMe);``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 26 | 51 | ```    localStorage.setItem("rememberMe", rememberMe);``` | Expected an identifier and instead saw ';'. |
| E054 | 27 | 17 | ```    localStorage.setItem("email",email);``` | Class properties must be methods. Expected '(' but instead saw '.'. |
| E030 | 27 | 26 | ```    localStorage.setItem("email",email);``` | Expected an identifier and instead saw 'email'. |
| W118 | 27 | 39 | ```    localStorage.setItem("email",email);``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 27 | 40 | ```    localStorage.setItem("email",email);``` | Expected an identifier and instead saw ';'. |
| W075 | 28 | 17 | ```    localStorage.setItem("profileEmail","");``` | Duplicate class method 'localStorage'. |
| E054 | 28 | 17 | ```    localStorage.setItem("profileEmail","");``` | Class properties must be methods. Expected '(' but instead saw '.'. |
| E030 | 28 | 26 | ```    localStorage.setItem("profileEmail","");``` | Expected an identifier and instead saw 'profileEmail'. |
| E030 | 28 | 41 | ```    localStorage.setItem("profileEmail","");``` | Expected an identifier and instead saw ''. |
| W118 | 28 | 43 | ```    localStorage.setItem("profileEmail","");``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 28 | 44 | ```    localStorage.setItem("profileEmail","");``` | Expected an identifier and instead saw ';'. |
| E054 | 30 | 10 | ```    event.preventDefault();``` | Class properties must be methods. Expected '(' but instead saw '.'. |
| W118 | 30 | 26 | ```    event.preventDefault();``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 30 | 27 | ```    event.preventDefault();``` | Expected an identifier and instead saw ';'. |
| E054 | 31 | 9 | ```    let json = JSON.stringify(this.state);``` | Class properties must be methods. Expected '(' but instead saw 'json'. |
| W024 | 31 | 31 | ```    let json = JSON.stringify(this.state);``` | Expected an identifier and instead saw 'this' (a reserved word). |
| E030 | 31 | 35 | ```    let json = JSON.stringify(this.state);``` | Expected an identifier and instead saw '.'. |
| W118 | 31 | 41 | ```    let json = JSON.stringify(this.state);``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 31 | 42 | ```    let json = JSON.stringify(this.state);``` | Expected an identifier and instead saw ';'. |
| E054 | 32 | 12 | ```    console.log(json);``` | Class properties must be methods. Expected '(' but instead saw '.'. |
| W118 | 32 | 21 | ```    console.log(json);``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 32 | 22 | ```    console.log(json);``` | Expected an identifier and instead saw ';'. |
| E054 | 34 | 7 | ```      .put("http://localhost:8000/api/login")``` | Class properties must be methods. Expected '(' but instead saw '.'. |
| E030 | 34 | 12 | ```      .put("http://localhost:8000/api/login")``` | Expected an identifier and instead saw 'http://localhost:8000/api/login'. |
| W118 | 34 | 45 | ```      .put("http://localhost:8000/api/login")``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 35 | 7 | ```      .send({ profile: {``` | Expected an identifier and instead saw '.'. |
| W024 | 36 | 18 | ```          email: this.state.email,``` | Expected an identifier and instead saw 'this' (a reserved word). |
| E021 | 36 | 22 | ```          email: this.state.email,``` | Expected ',' and instead saw '.'. |
| E021 | 36 | 28 | ```          email: this.state.email,``` | Expected ',' and instead saw '.'. |
| W024 | 37 | 21 | ```          password: this.state.password``` | Expected an identifier and instead saw 'this' (a reserved word). |
| E021 | 37 | 25 | ```          password: this.state.password``` | Expected ',' and instead saw '.'. |
| E021 | 37 | 31 | ```          password: this.state.password``` | Expected ',' and instead saw '.'. |
| W118 | 38 | 11 | ```        }})``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 39 | 7 | ```      .end((err, res) => {``` | Expected an identifier and instead saw '.'. |
| E030 | 39 | 12 | ```      .end((err, res) => {``` | Expected an identifier and instead saw '('. |
| W118 | 39 | 21 | ```      .end((err, res) => {``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 39 | 23 | ```      .end((err, res) => {``` | Expected an identifier and instead saw '=>'. |
| E024 | 39 | 26 | ```      .end((err, res) => {``` | Unexpected '{'. |
| E030 | 40 | 16 | ```        if (res.status === 200) {``` | Expected an identifier and instead saw '.'. |
| E030 | 43 | 8 | ```      });``` | Expected an identifier and instead saw ')'. |
| W030 | 43 | 8 | ```      });``` | Expected an assignment or function call and instead saw an expression. |
| E041 | 43 | 9 | ```undefined``` | Unrecoverable syntax error. (32% scanned). |### client\src\components\LoginSignUp\Signup.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W033 | 5 | 45 | ```import  { Redirect } from 'react-router-dom'``` | Missing semicolon. |
| E054 | 21 | 17 | ```    handleSubmit=(event)=>{``` | Class properties must be methods. Expected '(' but instead saw '='. |
| W118 | 21 | 24 | ```    handleSubmit=(event)=>{``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 21 | 25 | ```    handleSubmit=(event)=>{``` | Expected an identifier and instead saw '=>'. |
| E024 | 21 | 27 | ```    handleSubmit=(event)=>{``` | Unexpected '{'. |
| E054 | 22 | 14 | ```        event.preventDefault();``` | Class properties must be methods. Expected '(' but instead saw '.'. |
| W118 | 22 | 30 | ```        event.preventDefault();``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 22 | 31 | ```        event.preventDefault();``` | Expected an identifier and instead saw ';'. |
| E054 | 23 | 13 | ```        let json=JSON.stringify(this.state);``` | Class properties must be methods. Expected '(' but instead saw 'json'. |
| W024 | 23 | 33 | ```        let json=JSON.stringify(this.state);``` | Expected an identifier and instead saw 'this' (a reserved word). |
| E030 | 23 | 37 | ```        let json=JSON.stringify(this.state);``` | Expected an identifier and instead saw '.'. |
| W118 | 23 | 43 | ```        let json=JSON.stringify(this.state);``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 23 | 44 | ```        let json=JSON.stringify(this.state);``` | Expected an identifier and instead saw ';'. |
| E054 | 24 | 16 | ```        console.log(json);``` | Class properties must be methods. Expected '(' but instead saw '.'. |
| W118 | 24 | 25 | ```        console.log(json);``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 24 | 26 | ```        console.log(json);``` | Expected an identifier and instead saw ';'. |
| E054 | 26 | 13 | ```            .put("http://localhost:8000/api/register")``` | Class properties must be methods. Expected '(' but instead saw '.'. |
| E030 | 26 | 18 | ```            .put("http://localhost:8000/api/register")``` | Expected an identifier and instead saw 'http://localhost:8000/api/register'. |
| W118 | 26 | 54 | ```            .put("http://localhost:8000/api/register")``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 27 | 13 | ```            .send({profile: {``` | Expected an identifier and instead saw '.'. |
| W024 | 28 | 32 | ```                    firstname: this.state.firstName,``` | Expected an identifier and instead saw 'this' (a reserved word). |
| E021 | 28 | 36 | ```                    firstname: this.state.firstName,``` | Expected ',' and instead saw '.'. |
| E021 | 28 | 42 | ```                    firstname: this.state.firstName,``` | Expected ',' and instead saw '.'. |
| W024 | 29 | 31 | ```                    lastname: this.state.lastName,``` | Expected an identifier and instead saw 'this' (a reserved word). |
| E021 | 29 | 35 | ```                    lastname: this.state.lastName,``` | Expected ',' and instead saw '.'. |
| E021 | 29 | 41 | ```                    lastname: this.state.lastName,``` | Expected ',' and instead saw '.'. |
| W024 | 30 | 28 | ```                    email: this.state.email,``` | Expected an identifier and instead saw 'this' (a reserved word). |
| E021 | 30 | 32 | ```                    email: this.state.email,``` | Expected ',' and instead saw '.'. |
| E021 | 30 | 38 | ```                    email: this.state.email,``` | Expected ',' and instead saw '.'. |
| W024 | 31 | 31 | ```                    password: this.state.password,``` | Expected an identifier and instead saw 'this' (a reserved word). |
| E021 | 31 | 35 | ```                    password: this.state.password,``` | Expected ',' and instead saw '.'. |
| E021 | 31 | 41 | ```                    password: this.state.password,``` | Expected ',' and instead saw '.'. |
| W024 | 32 | 38 | ```                    confirmPassword: this.state.confirmPassword,``` | Expected an identifier and instead saw 'this' (a reserved word). |
| E021 | 32 | 42 | ```                    confirmPassword: this.state.confirmPassword,``` | Expected ',' and instead saw '.'. |
| E021 | 32 | 48 | ```                    confirmPassword: this.state.confirmPassword,``` | Expected ',' and instead saw '.'. |
| W118 | 33 | 19 | ```                }})``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 34 | 13 | ```            .end((err,res) => {``` | Expected an identifier and instead saw '.'. |
| E030 | 34 | 18 | ```            .end((err,res) => {``` | Expected an identifier and instead saw '('. |
| W118 | 34 | 26 | ```            .end((err,res) => {``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 34 | 28 | ```            .end((err,res) => {``` | Expected an identifier and instead saw '=>'. |
| E024 | 34 | 31 | ```            .end((err,res) => {``` | Unexpected '{'. |
| E030 | 35 | 23 | ```                if(res.status === 200)``` | Expected an identifier and instead saw '.'. |
| E030 | 39 | 10 | ```        });``` | Expected an identifier and instead saw ')'. |
| W030 | 39 | 10 | ```        });``` | Expected an assignment or function call and instead saw an expression. |
| E041 | 39 | 11 | ```undefined``` | Unrecoverable syntax error. (37% scanned). |### client\src\components\NotFound\NotFound.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| E015 | 5 | 59 | ```        return(<h1 style={{textAlign:"center"}}>Not Found</h1>);``` | Unclosed regular expression. |
| E041 | 5 | 59 | ```undefined``` | Unrecoverable syntax error. (71% scanned). |### client\src\components\Profiles\Profile.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| E015 | 11 | 14 | ```            </div>``` | Unclosed regular expression. |
| E041 | 11 | 14 | ```undefined``` | Unrecoverable syntax error. (78% scanned). |### client\src\components\Wall\NavBar.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W033 | 14 | 33 | ```import request from "superagent"``` | Missing semicolon. |
| E030 | 93 | 5 | ```    <Menu``` | Expected an identifier and instead saw '<'. |
| E020 | 93 | 6 | ```    <Menu``` | Expected ')' to match '(' from line 92 and instead saw 'Menu'. |
| E021 | 94 | 9 | ```        elevation={0}``` | Expected ')' and instead saw 'elevation'. |
| E031 | 94 | 18 | ```        elevation={0}``` | Bad assignment. |
| E021 | 94 | 21 | ```        elevation={0}``` | Expected ':' and instead saw '}'. |
| E020 | 96 | 9 | ```        anchorOrigin={{``` | Expected '}' to match '{' from line 94 and instead saw 'anchorOrigin'. |
| E031 | 96 | 21 | ```        anchorOrigin={{``` | Bad assignment. |
| E020 | 96 | 23 | ```        anchorOrigin={{``` | Expected '}' to match '{' from line 96 and instead saw '{'. |
| W033 | 96 | 24 | ```        anchorOrigin={{``` | Missing semicolon. |
| W028 | 97 | 23 | ```            vertical: 'bottom',``` | Label 'vertical' on bottom statement. |
| W030 | 98 | 13 | ```            horizontal: 'center',``` | Expected an assignment or function call and instead saw an expression. |
| E058 | 98 | 23 | ```            horizontal: 'center',``` | Missing semicolon. |
| E041 | 98 | 13 | ```undefined``` | Unrecoverable syntax error. (31% scanned). |### client\src\components\Wall\Post.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W033 | 2 | 21 | ```import './index.css'``` | Missing semicolon. |
| W033 | 3 | 33 | ```import request from 'superagent'``` | Missing semicolon. |
| W033 | 4 | 21 | ```import './image.css'``` | Missing semicolon. |
| W033 | 26 | 15 | ```            })}}, []);``` | Missing semicolon. |
| E015 | 35 | 26 | ```                        </div>``` | Unclosed regular expression. |
| E041 | 35 | 26 | ```undefined``` | Unrecoverable syntax error. (58% scanned). |### client\src\components\Wall\Wall.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W033 | 3 | 21 | ```import './index.css'``` | Missing semicolon. |
| W032 | 21 | 6 | ```    };``` | Unnecessary semicolon. |
| W033 | 24 | 44 | ```        this.setState({showingWindow:true})``` | Missing semicolon. |
| W033 | 27 | 45 | ```        this.setState({showingWindow:false})``` | Missing semicolon. |
| E054 | 29 | 16 | ```    handlePost = (event) => {``` | Class properties must be methods. Expected '(' but instead saw '='. |
| W118 | 29 | 24 | ```    handlePost = (event) => {``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 29 | 26 | ```    handlePost = (event) => {``` | Expected an identifier and instead saw '=>'. |
| E024 | 29 | 29 | ```    handlePost = (event) => {``` | Unexpected '{'. |
| E054 | 30 | 14 | ```        event.preventDefault();``` | Class properties must be methods. Expected '(' but instead saw '.'. |
| W118 | 30 | 30 | ```        event.preventDefault();``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 30 | 31 | ```        event.preventDefault();``` | Expected an identifier and instead saw ';'. |
| E054 | 31 | 13 | ```        let file=document.getElementById('uploadedImage');``` | Class properties must be methods. Expected '(' but instead saw 'file'. |
| E030 | 31 | 42 | ```        let file=document.getElementById('uploadedImage');``` | Expected an identifier and instead saw 'uploadedImage'. |
| W118 | 31 | 57 | ```        let file=document.getElementById('uploadedImage');``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 31 | 58 | ```        let file=document.getElementById('uploadedImage');``` | Expected an identifier and instead saw ';'. |
| E030 | 32 | 16 | ```        if(file.files.length !== 0){``` | Expected an identifier and instead saw '.'. |
| W033 | 39 | 45 | ```                .then(res=>{console.log(res)});``` | Missing semicolon. |
| E054 | 41 | 13 | ```        this.closeUploadingWindow();``` | Class properties must be methods. Expected '(' but instead saw '.'. |
| W118 | 41 | 35 | ```        this.closeUploadingWindow();``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 41 | 36 | ```        this.closeUploadingWindow();``` | Expected an identifier and instead saw ';'. |
| E054 | 42 | 15 | ```        window.location.reload(false);``` | Class properties must be methods. Expected '(' but instead saw '.'. |
| W024 | 42 | 32 | ```        window.location.reload(false);``` | Expected an identifier and instead saw 'false' (a reserved word). |
| W118 | 42 | 37 | ```        window.location.reload(false);``` | 'function closure expressions' is only available in Mozilla JavaScript extensions (use moz option). |
| E030 | 42 | 38 | ```        window.location.reload(false);``` | Expected an identifier and instead saw ';'. |
| W032 | 43 | 6 | ```    };``` | Unnecessary semicolon. |
| E058 | 45 | 13 | ```    render(){``` | Missing semicolon. |
| E015 | 51 | 18 | ```                </div>``` | Unclosed regular expression. |
| E041 | 51 | 18 | ```undefined``` | Unrecoverable syntax error. (60% scanned). |### client\src\index.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| E030 | 7 | 17 | ```ReactDOM.render(<App />, document.getElementById('root'));``` | Expected an identifier and instead saw '<'. |
| E021 | 7 | 18 | ```ReactDOM.render(<App />, document.getElementById('root'));``` | Expected ')' and instead saw 'App'. |
| E030 | 7 | 23 | ```ReactDOM.render(<App />, document.getElementById('root'));``` | Expected an identifier and instead saw '>'. |
| W030 | 7 | 56 | ```ReactDOM.render(<App />, document.getElementById('root'));``` | Expected an assignment or function call and instead saw an expression. |
| E058 | 7 | 57 | ```ReactDOM.render(<App />, document.getElementById('root'));``` | Missing semicolon. |
| E030 | 7 | 57 | ```ReactDOM.render(<App />, document.getElementById('root'));``` | Expected an identifier and instead saw ')'. |
| W030 | 7 | 57 | ```ReactDOM.render(<App />, document.getElementById('root'));``` | Expected an assignment or function call and instead saw an expression. |

---

#### Summary

Found 221 failures - 149 errors - 72 warnings