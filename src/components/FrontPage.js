import React from 'react';
import axios from 'axios';
import './FrontPage.css';

class FrontPage extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            body: this.props.body/* ,
            img: '' */
        }
        /* this.getPost = this.getPost.bind(this) */
    }

handleInputChange = e => {
    this.setState({ body: e.target.value,
    })
}

handleSubmit = e => {
    e.preventDefault();

    const post = this.state;
    
    axios.post('/user/post')
    .then(() => console.log('post created', post))
    .catch(err => {
        console.log(err);
    });
};
/* componentDidMount(){
    this.getPost() */

/* getPost = () => {
    const {body,img} = this.state;
    axios.get('/user/view', {body,img}).then(res => {
        this.setState({
            body: res.data
        })
    }).catch(err => console.log(err))
} */

 /* addPost = (post_id) => {
    const {body, img} = this.state;
    axios.post("/user/post", {post_id,body, img})
    .then( res => {
        this.setState({
            body: "",
            img: ""
        }) 
    }).catch(err => console.log(err))
} */
    render(){

        /* let allPosts = this.state.body.map(e => {
            return <div>
                <div>{e.body}</div>
                </div>
        }) */

        return <section> 
            <h1 style={{color: 'white'}}>This is the front page</h1>
             
                    <div className="post-box">
                        <input type="text" 
                               id="post_info" 
                               required="required" 
                               value= {this.state.body} 
                               onChange={this.handleInputChange}/>
                        <button onClick={this.handleSubmit}>Add Post</button>
                    </div>
               {/* <div>
                   {allPosts}
               </div> */}
         </section>

    }
}

export default FrontPage;