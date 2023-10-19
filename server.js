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

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`LISTENING ON PORT: ${PORT}`);
});