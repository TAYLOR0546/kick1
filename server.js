const express = require('express');
const dotenv = require('dotenv');
const path = require('path')

dotenv.config({path: "./config.env"});

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res, next)=>{
    // res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('home', {
        name: "TAYLOR",
        message: process.env.SOMTIN
    });
});

// app.get('/try', (req, res, next)=>{
//     res.status(200).json({
//         status: "success",
//         message: "Something small for here!"
//     });
// });

const port = process.env.PORT || 2000;

app.listen(port, ()=>{
    console.log(`LISTENING ON PORT: ${port}`);
});