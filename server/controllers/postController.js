module.exports = {

getPost: (req,res) => {
    const db = req.app.get("db");
    db.get_posts().then(post => {
        res.status(200).send(post)
    }).catch (err => console.log(err));
},    

addPost: (req, res) => {
    const {body, img} = req.body;
    const db = req.app.get("db");
    db.user_post([body, img]).then(post => {
        res.status(200).send(post)
    }).catch( err => console.log(err));
    }
}