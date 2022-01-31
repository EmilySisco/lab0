const express = require('express');
const { request } = require('http');
const app = express();

const hostname = "localhost";

app.get('/', (req, res)=> {
        res.send("Hey, it works!");
});


 // /greet?name=pikachu
app.get('/greet', (req, res)=> {
   
    let name = req.query.name;
    let year = parseInt(req.query.year);    //parseInt allows math
    console.log(year);

    res.send(`<h1> Hello, ${name}! <br> You are ${2022 - year - 1} or ${2022 - year} years old. </h1>`)
    
 });



 app.get('/math/:fnum/times/:snum', (req, res)=> {
    
    let fnum = parseInt(req.params.fnum);
    let snum = parseInt(req.params.snum);

    res.send(`<h1> ${fnum * snum} </h2>`)

 });


 app.get('/math/:fnum/subtract/:snum', (req, res)=> {
    
    let fnum = parseInt(req.params.fnum);
    let snum = parseInt(req.params.snum);

    res.send(`<h1> ${fnum - snum} </h2>`)

 });
 
 app.get('/math/:fnum/add/:snum', (req, res)=> {
    
    let fnum = parseInt(req.params.fnum);
    let snum = parseInt(req.params.snum);

    res.send(`<h1> ${fnum + snum} </h2>`)

 });

 app.get('/math/:fnum/divide/:snum', (req, res)=> {
    
    let fnum = parseInt(req.params.fnum);
    let snum = parseInt(req.params.snum);

    res.send(`<h1> ${fnum / snum} </h2>`)

 });


const port = 3000
app.listen( port, () => {
    console.log(`listen on http://${hostname}:${port} ...`);
});