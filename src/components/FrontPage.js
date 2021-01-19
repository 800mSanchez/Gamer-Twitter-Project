import React from 'react';
import axios from 'axios';
import './FrontPage.css';

class FrontPage extends React.Component  {
    constructor(){
        super();
        this.state = {
            body: '',
            img: ''
        }
        /* this.getPost = this.getPost.bind(this) */
    }
componentDidMount(){
    this.getPost()
}

getPost = () => {
    const {body,img} = this.state;
    axios.get('/user/view', {body,img}).then(res => {
        this.setState({
            body: res.data
        })
    }).catch(err => console.log(err))
}

changeHandler = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios.post('/user/post', this.state).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}

addPost = (post_id) => {
    const {body, img} = this.state;
    axios.post("/user/post", {post_id,body, img})
    .then( res => {
        this.setState({
            body: "",
            img: ""
        })
    }).catch(err => console.log(err))
}
    render(){

        let allPosts = this.state.body

        return <section> 
            <h1 style={{color: 'white'}}>This is the front page</h1>
            <div className="post-box">
                <textarea></textarea>
                <button onClick={this.addPost}>Add Post</button>
            </div>
            <div>{allPosts}</div>
        </section>

    }
}

export default FrontPage;