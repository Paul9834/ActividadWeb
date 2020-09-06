const express = require ('express');
const appServer = express();

appServer.listen (3000, ()=>{
    console.log('SERVER IS RUNNING ON PORT 3000');
});


appServer.get ('/',
    (req, res) => {
        res.send ('HELLO WORLD WITH EXPRESS!!!');
    }
);