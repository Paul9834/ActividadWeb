const express = require ('express');
const appServer = express();

const myUser = require ('./models/user');

appServer.use(express.json());


appServer.listen (3000, ()=>{
    console.log('SERVER IS RUNNING ON PORT 3000');
});


appServer.get ('/obj',
    (req, res) => {
        res.json(myUser)
    }
);

appServer.post ('/adduser' , (req, res)=>{
    console.log(req.body);
    res.send ('POST USER ADDED');
});

appServer.post ('/updateuser/:idUser' , (req, res)=>{
    console.log(req.body);
    console.log ( req.params.idUser);
    res.send ('USER UPDATED');
});



