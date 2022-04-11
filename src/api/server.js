const express = require('express');
const cors = require('cors');
const app = express();
const PORT = '5500';
const controller = require('./controller');

app.use(cors());
app.use(express.json());

app.listen(PORT, function () {  
    console.log(`Server is running port: ${PORT}`);
})

app.get('/users', (req, res) => {    
        (async () => {
            res.send(await controller.getUsers());
        })();
});

app.get('/register', (req, res) => {

    (async () => {
        const user = req.body;
        res.send(await controller.insertUser(user));
    })();
});